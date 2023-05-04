import React from "react";
import styles from "./index.styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const MailsTable = ({ mails }) => {
  return (
    <div className={styles["mail-table"]}>
      {mails.map((mail) => (
        //----------------- Row starts
        <div className="d-flex my-3 align-items-center">
          <input type="checkbox" />
          <div className={`${styles["favourite"]} mx-2`}>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={`${styles["sender"]} mx-2`}>
            <span className="fw-bold">{mail.sender}</span>
          </div>
          <div className={`${styles["message"]} fw-bold mx-2`}>
            {mail.message}
          </div>
          <div className={`${styles["time"]} mx-2 text-end`}>{mail.time}</div>
        </div>
        //----------------- Row ends
      ))}
    </div>
  );
};

export default MailsTable;
