"use client";

import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {

  return (
    <div className={styles.footerContainer}>
      <div>
        <p>©2024 Ace Home Tuition. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
