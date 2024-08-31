"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState: any ,formData: { get: (arg0: string) => any }) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (meal.title || meal.title.trim() === "") {
    return {
      message:"invalid input"
    }
  }
  // await saveMeal(meal)
  revalidatePath("/meals");
  redirect("/meals");
}
