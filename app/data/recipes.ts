
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Cheese"],
    steps: [
      "Prepare the dough.",
      "Spread tomato sauce.",
      "Add cheese and bake."
    ],
  },
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    emoji: "🥞",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients:["Dosa batter","Potatoes", "Onions", "Mustard seeds", "Curry leaves", "Turmeric", "Oil"],
    steps:[
      "Prepare the potato masala.",
      "Heat a pan and spread dosa batter.",
      "Cook until the dosa turns golden.",
      "Add potato masala and fold the dosa."
    ],
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: [
  "Burger buns",
  "Veg patty",
  "Lettuce",
  "Tomato",
  "Onion",
  "Cheese slice",
  "Mayonnaise"
],
steps: [
  "Prepare the vegetable patty.",
  "Toast the burger buns.",
  "Spread mayonnaise on the buns.",
  "Add lettuce, patty, tomato, onion and cheese.",
  "Cover with the top bun and serve."
],
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "French",
    ingredients: [
  "All-purpose flour",
  "Cocoa powder",
  "Sugar",
  "Eggs",
  "Milk",
  "Butter",
  "Baking powder"
],
steps: [
  "Mix flour, cocoa powder, sugar and baking powder.",
  "Add eggs, milk and melted butter.",
  "Mix until you get a smooth batter.",
  "Pour the batter into a cake tin.",
  "Bake until the cake is fully cooked.",
  "Allow it to cool before serving."
],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
