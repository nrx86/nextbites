
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

// Pre-build a separate page for every recipe
export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main>
      <h1>{recipe.emoji} {recipe.title}</h1>

      <p>
        {recipe.cuisine} | {recipe.minutes} minutes | {recipe.difficulty}
      </p>

      <section>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Cooking Instructions</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
