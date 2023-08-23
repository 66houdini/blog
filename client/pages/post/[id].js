import { useContext } from "react";
import { useRouter } from "next/router";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import Link from "next/link";

export default function Shoes({ postInfo }) {
  const { userInfo } = useContext(UserContext);
  return (
    <>
      <div className="post-page">
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className="author">by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
          <div className="edit-row">
            <Link
              className="edit-btn"
              as={`/edit/${postInfo._id}`}
              href={`/[id]?id=${postInfo._id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit This Post
            </Link>
          </div>
        )}
        <div className="image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(`http://localhost:4000/post/${id}`);
  const postInfo = await response.json();

  return {
    props: {
      postInfo,
    },
  };
}
