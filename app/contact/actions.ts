// app/contact/actions.ts
"use server";

import { neon } from "@neondatabase/serverless";

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

    return { success: true, error: null };
  } catch (error) {
    console.error("Database error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
