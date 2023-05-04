import React from "react";
import MailsSection from "../../components/MailBoxAndSidebar/MailsSection";
import styles from "./index.styles.module.scss";
import AppsSidebar from "./AppsSideBar";
import MailBoxSideBar from "./MailBoxSideBar";

const MailBoxAndSideBar = () => {
  return (
    <div
      className={`d-flex justify-content-between ${styles["content-wrapper"]}`}
    >
      <div className={styles["app-sidebar"]}>
        <AppsSidebar />
      </div>
      <div className={styles["mail-sidebar"]}>
        <MailBoxSideBar />
      </div>
      <div className={`me-4 ${styles["mails-section"]}`}>
        <MailsSection />
      </div>
    </div>
  );
};

export default MailBoxAndSideBar;
