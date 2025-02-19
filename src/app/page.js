import pg from "pg";
import { RecipeCard } from "@/components/RecipeCard";
import { connect } from "@/utils/connect";
import Link from "next/link";
export default async function Home() {
  const db = connect();
  const recipes = (await db.query("SELECT * FROM recipes")).rows;
  console.log(recipes);
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
      {recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} />;
      })}
    </div>
  );
}
