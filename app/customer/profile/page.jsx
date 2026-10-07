import { UserProfile } from "@clerk/nextjs";
import React from "react";

const CustomerProfilePage = () => {
  return (
    <div className="text-5xl text-center py-8 flex justify-center">
      <UserProfile />
    </div>
  );
};

export default CustomerProfilePage;
