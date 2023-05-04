import React from "react";
import styles from "./index.styles.module.scss";
import SettingsHeaderBar from "../../components/SettingsHeaderBar";
import MailBoxAndSideBar from "../../components/MailBoxAndSidebar";

const Home = () => {
  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["settings-header-bar"]}>
        <SettingsHeaderBar />
      </div>
      <div className={styles["mailbox-and-sidebar"]}>
        <MailBoxAndSideBar />
      </div>
    </div>
  );
};

export default Home;
