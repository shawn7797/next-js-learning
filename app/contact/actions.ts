"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const sql = neon(process.env.DATABASE_URL!);

    // Insert data into your Neon DB table
    await sql`
      INSERT INTO contact_leads (name, email, message) 
      VALUES (${name}, ${email}, ${message})
    `;

    // Tells Next.js to clear the cache for the admin leads page
    revalidatePath("/admin/leads");

    return { success: true, error: null };
  } catch (error) {
    console.error("Database error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
