"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useSession } from "next-auth/react";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import { Button } from 'primereact/button';
import RequestTutorCard from './components/RequestTutorCard/RequestTutorCard';

export default function Home() {

  return (
    <div className="pageContainer">
      <div className={styles.imageContainer}>
        <Image
          src="/imagestock2.jpg"
          alt="Descriptive Alt Text"
          layout="responsive"
          width={612}
          height={345}
          priority
          objectFit="cover"
        />
      </div>
      <div className={styles.preamble}>
        <div className={styles.preambleContent}>
          <h1>Singapore’s #1 Established Home Tuition Agency</h1>
          <br />
          <p>
            Here at Ace Home Tuition, we take your education and academic
            success seriously. We are an experienced, committed and responsible
            tuition agency, trust us to help you
          </p>
        </div>
          <RequestTutorCard />
      </div>
    </div>
  );
}
