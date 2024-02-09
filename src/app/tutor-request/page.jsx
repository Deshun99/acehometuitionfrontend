"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Steps } from "primereact/steps";

const TutorRequest = () => {
    const session = useSession();
    const toast = useRef(null);

    const params = useSearchParams();

    const items = [
      {
        label: "Academic Level",
      },
      {
        label: "Lesson Details",
      },
      {
        label: "Contact Info",
      },
    ];

    return (
      <div className="tutorRequestContainer">
        <div className={styles.stepsContainer}>
          <Steps model={items} />
        </div>
      </div>
    );

}

export default TutorRequest;