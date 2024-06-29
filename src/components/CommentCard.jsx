import Image from "next/image";
import Link from "next/link";
import pg from "pg";

export function CommentCard({ comments }) {
  console.log(comments);
  return (
    <div>
      <h2>{comments.username}</h2>
      <Link href={`/${comments.recipe_id}`} />
      <p>{comments.comment}</p>
    </div>
  );
}
