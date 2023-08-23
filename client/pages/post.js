import { formatISO9075 } from "date-fns";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <>
      <div className="post">
        <div className="image">
          <Link as={`/post/${_id}`} href={`/[id]?id=${_id}`}>
            <img
              src={"http://localhost:4000/" + cover}
              alt="image of the post"
            />
          </Link>
        </div>

        <div className="texts">
        <Link as={`/post/${_id}`} href={`/[id]?id=${_id}`}>
            <h2>{title}</h2>
          </Link>

          <p className="info">
            <a className="author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </>
  );
}


