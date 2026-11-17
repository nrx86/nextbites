
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    emoji: "🥞",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "French",
  },
];
