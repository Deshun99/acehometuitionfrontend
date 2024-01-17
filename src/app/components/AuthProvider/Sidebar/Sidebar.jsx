"use client";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/Ripple";
import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/app/context/UserContext";
import NavItem from "../NavItem/NavItem";

const SidebarMenu = () => {

  const session = useSession();

  let roleRef, sessionTokenRef, userIdRef;

  if (session && session.data && session.data.user) {
    userIdRef = session.data.user.userId;
    roleRef = session.data.user.role;
    sessionTokenRef = session.data.user.accessToken;
  }

  const { userData } = useContext(UserContext);

  const handleSignOut = async (event) => {
    event.preventDefault();
    await signOut({ redirect: false });
    window.location.replace("/");
  };

  return (
    <div className={styles.sidebarContainer}>
      <div id="app-sidebar-2" className={styles.surfaceSection}>
        <div className="flex flex-column h-full">
          <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
            <Link href="/">
              <Image
                src="/acehometuition-bg.png"
                alt="Kideas"
                width={200}
                height={200}
                priority
              />
            </Link>
          </div>
          <div className="overflow-y-auto">
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className={styles.navLink}>
                <i className="pi pi-home"></i>
                <span className={styles.textStyle}>Home</span>
                <Ripple />
              </div>
            </Link>
            <Link href="/tuition-rates" style={{ textDecoration: "none" }}>
              <div className={styles.navLink}>
                <i className="pi pi-money-bill"></i>
                <span className={styles.textStyle}>Tuition Rates</span>
                <Ripple />
              </div>
            </Link>
            <Link href="/subjects" style={{ textDecoration: "none" }}>
              <div className={styles.navLink}>
                <i className="pi pi-book"></i>
                <span className={styles.textStyle}>Subjects</span>
                <Ripple />
              </div>
            </Link>
          </div>
          {session.status === "authenticated" && (
            <>
              <div className={styles.userContainer}>
                <h4>Welcome back,</h4>
                <div className={styles.rowUser}>
                  <h4>{userData?.firstName}</h4>
                  <h4>{userData?.lastName}</h4>
                </div>
              </div>
              <div className={styles.menuItem} onClick={handleSignOut}>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <div className={styles.navLink}>
                    <i className="pi pi-sign-out"></i>
                    <span className={styles.textStyle}>Logout</span>
                    <Ripple />
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
