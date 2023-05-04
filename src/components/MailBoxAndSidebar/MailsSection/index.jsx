import React from "react";
import styles from "./index.styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faEllipsisVertical,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import MailsTable from "./MailsTable";
import { mails } from "../../../db";

const MailsSection = () => {
  return (
    <div className={`bg-white ${styles["mail-section-wrapper"]}`}>
      {/* table header */}
      <div className="pt-2 px-3 bg-white d-flex justify-content-between">
        {/* select all */}
        <div className="d-flex align-items-center">
          <span>
            <input type="checkbox" />
          </span>
          <FontAwesomeIcon
            className={`fw-light mx-2 ${styles["select-down-icon"]}`}
            icon={faChevronDown}
          />
          <FontAwesomeIcon
            className={`fw-light mx-2 ${styles["select-down-icon"]}`}
            icon={faRotateRight}
          />
          <FontAwesomeIcon
            className={`fw-light mx-2 ${styles["select-down-icon"]}`}
            icon={faEllipsisVertical}
          />
        </div>
        {/* range */}
        <div className="d-flex align-items-center">
          <small className="text-secondary">1 to 50 of 1569</small>
          <FontAwesomeIcon
            className={`fw-light mx-2 ${styles["select-down-icon"]}`}
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            className={`fw-light mx-2 ${styles["select-down-icon"]}`}
            icon={faChevronRight}
          />
        </div>
      </div>
      {/* table */}
      <div className="h-100 mt-2 ps-3 ">
        <MailsTable mails={mails} />
      </div>
    </div>
  );
};

export default MailsSection;
