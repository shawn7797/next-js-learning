"use client";

import { UserProfile, useUser } from "@clerk/nextjs";
import React from "react";

const VendorProfilePage = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="text-5xl text-center py-8 flex justify-center">
      {/* Welcome {user?.firstName}! This is your profile page. */}
      <UserProfile routing="hash" />
    </div>
  );
};

export default VendorProfilePage;
