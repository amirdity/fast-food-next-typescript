import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";
type Meals = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}[];
async function Meals() {
  const meals: Meals = (await getMeals()) as Meals;
  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  const meals: Meals = (await getMeals()) as Meals;
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your favorite recipr and cook it yourself . it is easy</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorit Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
        {/* suspens work in async functions */}
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
