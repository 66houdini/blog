import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Editor from "./Editor";

export default function EditPost({postInfo}) {
  const router = useRouter();
  const {id} = router.query;
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (postInfo) {
      setTitle(postInfo.title);
      setContent(postInfo.content);
      setSummary(postInfo.summary);
    }
  }, [postInfo]);

  async function updatePost(event) {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]){
      data.set("file", files?.[0]);
    }
    
    const response = await fetch(`http://localhost:4000/post/`, {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok){
      setRedirect(true);
    }
    
  }

  if (redirect) {
    router.push(`/post/${id}`);
  }
  return (
    <>
      <form onSubmit={updatePost}>
        <input
          type="title"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
        <Editor onChange={setContent} value={content} />
        <button style={{ margin: "5px" }}>Update Post</button>
      </form>
    </>
  );
}


export async function getServerSideProps(context){
  const {id} = context.query;
  const response = await fetch(`http://localhost:4000/post/${id}`);
  const postInfo = await response.json();
  console.log(postInfo);
  return {
    props: {
      postInfo,
    },
  };
}
