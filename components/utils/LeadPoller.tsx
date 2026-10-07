"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LeadPoller() {
  const router = useRouter();

  useEffect(() => {
    // Poll every 15 seconds (15000ms)
    // Adjust this time based on how fresh you want the data to be
    const interval = setInterval(() => {
      router.refresh();
    }, 15000);

    // Cleanup interval when the admin leaves the page
    return () => clearInterval(interval);
  }, [router]);

  return null; // This component has no visual UI, it just runs the timer
}
