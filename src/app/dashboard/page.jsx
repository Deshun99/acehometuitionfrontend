"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ProgressSpinner } from "primereact/progressspinner";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  let roleRef, accessToken, userId;

  if (session && session.data && session.data.user) {
    userId = session.data.user.userId;
    roleRef = session.data.user.role;
    accessToken = session.data.user.accessToken;
  }

  if (session.status === "loading") {
    return <ProgressSpinner />;
  }

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  if (session.status === "authenticated") {
    return (
      <>
        <h2>
          Welcome Back {userId}!
        </h2>
      </>
    );
  }
};

export default Dashboard;
