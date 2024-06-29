import Image from "next/image";
import Link from "next/link";
import pg from "pg";

export function RecipeCard({ recipe }) {
  console.log(recipe);
  return (
    <div>
      <Link href={`/${recipe.id}`}>
        <Image height={400} width={250} src={recipe.img_url} />
        <h2>{recipe.recipe_name}</h2>
        <p>{recipe.recipe_type_id}</p>
      </Link>
    </div>
  );
}
