"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ProgressSpinner } from "primereact/progressspinner";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  const accessToken =
    session.status === "authenticated" &&
    session.data &&
    session.data.user.accessToken;

  const userId =
    session.status === "authenticated" &&
    session.data &&
    session.data.user.userId;

  const roleRef =
    session.status === "authenticated" &&
    session.data &&
    session.data.user.role;

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
          Welcome Back {session.data.user.userId}!
        </h2>
      </>
    );
  }
};

export default Dashboard;
