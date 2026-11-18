import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <h1>Find your next bite.</h1>
      <p>Discover something delicious today.</p>

      <div id="recipes">
        <RecipeGrid recipes={recipes} />
      </div>
    </main>
  );
}