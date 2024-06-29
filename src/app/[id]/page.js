import { connect } from "@/utils/connect";
import Image from "next/image";
import Link from "next/link";

export default async function RecipePage({ params }) {
  const db = connect();
  const recipes = (
    await db.query(`SELECT * FROM recipes WHERE id = $1`, [params.id])
  ).rows[0];
  console.log(recipes);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link href="/discussion">Recipe Discussion!</Link>
          </li>
          <li>
            <Link href="/posts">Your thoughts</Link>
          </li>
        </ul>
      </nav>

      <h2>{recipes.recipe_name}</h2>
      <p>{recipes.recipe_link}</p>
      <Image src={recipes.img_url} width={400} height={400} />
      <p>{recipes.recipe_type_id}</p>
    </div>
  );
}
