"use client";
import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/Ripple";
import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";

const SidebarMenu = () => {
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
            <Link href="/">
              <div
                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <i className="pi pi-home mr-2"></i>
                <span className="font-medium">Home</span>
                <Ripple />
              </div>
            </Link>
            <Link href="/tuition-rates">
              <div
                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <i className="pi pi-money-bill mr-2"></i>
                <span className="font-medium">Tuition Rates</span>
                <Ripple />
              </div>
            </Link>
            <Link href="/subjects">
              <div
                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <i className="pi pi-book mr-2"></i>
                <span className="font-medium">Subjects</span>
                <Ripple />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
