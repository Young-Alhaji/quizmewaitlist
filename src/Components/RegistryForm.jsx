import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/waitingListPage.module.css";

const RegistryForm = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className={styles.listInput}>
            <input type="text" placeholder="Full name"/> <br />
            <input type="text" placeholder="Facebook profile link"/> <br />
            <input type="text" placeholder="Email"/> <br />
            <input type="tel" placeholder="Telephone"/> <br />
          </div>
          <br />
          <button className={styles.joinWaitlistBtn}>Join waitlist</button> <br />
        </div>
      </section>
    </>
  );
};

export default RegistryForm;
