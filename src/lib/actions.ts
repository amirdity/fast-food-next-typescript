"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData: { get: (arg0: string) => any }) {

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (meal.title || meal.title.trim() === "") {
    throw new Error("Title is required");
  }
  // await saveMeal(meal)
  redirect("/meals")
}
