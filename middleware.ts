// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isVendorRoute = createRouteMatcher(["/vendor(.*)"]);
const isCustomerRoute = createRouteMatcher(["/customer(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isVendorRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
