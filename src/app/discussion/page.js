import Link from "next/link";
import { connect } from "@/utils/connect.js";

export default function RecipeComments() {
  async function handleComments(formData) {
    "use server";
    // { username, recipe_id, comment}
    const username = formData.get("username");
    const recipe_id = formData.get("recipe_id");
    const comment = formData.get("comment");

    console.log(username, recipe_id, comment);

    const db = connect();

    db.query(
      "INSERT INTO comments (username, recipe_id, comment) VALUES ($1, $2, $3)",
      [username, recipe_id, comment]
    );
    console.log(username, recipe_id, comment);
  }

  return (
    <div>
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
      <h1>Recipe Discussion Page!</h1>

      <form action={handleComments} Classname="flex flex-col text-black">
        <label htmlFor="username">Enter your username:</label>
        <input
          placeholder="Ilovecooking420"
          name="username"
          id="username"
        ></input>

        <label htmlFor="recipe_id">Which recipe was your favourite?</label>
        <input
          placeholder="Beans on toast"
          name="recipe_id"
          id="recipe_id"
        ></input>

        <label htmlFor="comment">Tell us how you really feel!</label>
        <input
          placeholder="I like bread..."
          name="comment"
          id="comment"
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
