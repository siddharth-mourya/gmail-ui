import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCircle,
  faCircleQuestion,
  faGear,
  faGripHorizontal,
  faTh,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.styles.module.scss";
import Searchbox from "../shared/SearchBox";

const SettingsHeaderBar = () => {
  return (
    <div className="d-flex h-100">
      {/* hamburger icon to toggle mailbox side bar */}
      <div className={styles["hamburger-icon"]}>
        <FontAwesomeIcon className="mb-0" icon={faBars} />
      </div>
      {/* gmail logo */}
      <div className={`${styles["gmail-logo-wrapper"]} ps-3`}>
        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" />
      </div>
      {/* search settings and profile section */}
      <div
        className={`d-flex align-items-center justify-content-between ${styles["search-and-settings"]}`}
      >
        <div className="w-55">
          <Searchbox fullWidth={true} />
        </div>
        <div
          className={`${styles["profile-settings"]} d-flex align-items-center`}
        >
          <button className="btn mx-2 btn-outline-secondary rounded-pill">
            <FontAwesomeIcon icon={faCircle} className="mx-1 text-success" />
            <span>Active</span>
            <FontAwesomeIcon icon={faCaretDown} className="mx-1" />
          </button>
          <FontAwesomeIcon icon={faCircleQuestion} className="mx-2 fs-5" />
          <FontAwesomeIcon icon={faGear} className="mx-2 fs-5" />
          <FontAwesomeIcon className="mx-2 fs-5" icon={faGripHorizontal} />
          <div className="mx-4">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              className={styles["profile-pic"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsHeaderBar;
