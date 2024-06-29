import pg from "pg";
import { CommentCard } from "@/components/CommentCard";
// import { RecipeComment } from "@/discussion/page.js";
import { connect } from "@/utils/connect";
import Link from "next/link";
export default async function posts() {
  const db = connect();
  const comments = (await db.query("SELECT * FROM comments")).rows;
  console.log(comments);
  return (
    <div className="flex-wrap grid-flow-row">
      <h1>Recipe page!</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link href="/discussion">Recipe discussion!</Link>
          </li>
          <li>
            <Link href="/posts">Your thoughts</Link>
          </li>
        </ul>
      </nav>
      {comments.map((comment) => {
        return <CommentCard comments={comment} />;
      })}
    </div>
  );
}
