"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useSession } from "next-auth/react";
import { Card } from "primereact/card";

export default function Home() {

  return (
    <div className="pageContainer">
      <div className={styles.imageContainer}>
        <Image
          src="/imagestock.jpg"
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
        <Card className={styles.requestTutorCard}>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
      {/* <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.mainTitle}>K</p>
          <p className={styles.logoA}>i</p>
          <p className={styles.mainTitle}>deas</p>
        </div>
        <div>
          <p className={styles.description}>because you deserve the best</p>
        </div>
        <div>
          <h1 className={styles.secondaryTitle}>Advices</h1>
        </div>
        <div className={styles.buttonContainer}>
          {!accessToken && (
            <div className={styles.buttonContainer}>
              <button
                className={styles.button}
                onClick={() => (window.location.href = "/login")}
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}
