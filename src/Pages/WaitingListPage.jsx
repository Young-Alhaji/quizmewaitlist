import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/waitingListPage.module.css";
import Navbar from "../Components/Navbar";
import RegistryForm from "../Components/RegistryForm";

const WaitingListPage = () => {
  return (
    <>
    <Navbar/>
      <center>
        <section>
          <div className={styles.logoHead}>
            QUIZ
          </div> <br /><br /><br /><br />

          <div>
            <h2 className={styles.h2}>Be part of what's next</h2> <br />
            <h6 className={styles.h6}>Join this list for a chance to get on our live show and win up $1000 by answering exciting questions.</h6>
          </div>
        </section> <br />
        <section>
          <div>
            <RegistryForm/>
          </div>
        </section>
      </center>
    </>
  );
};

export default WaitingListPage;
