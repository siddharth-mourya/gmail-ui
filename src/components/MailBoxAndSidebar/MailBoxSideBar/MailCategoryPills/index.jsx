import React from "react";
import styles from "./index.styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const MailCategoryPills = ({ number, icon, label, highlihted, fontBold }) => {
  return (
    <div
      className={`d-flex my-1 px-3 py-1 rounded-pill align-items-center ${
        styles["category-pill-wrapper"]
      } ${highlihted ? styles["highlighted"] : ""}`}
    >
      <FontAwesomeIcon icon={icon} className="ms-2 me-3" />
      <div className="d-flex w-100 justify-content-between">
        <span className={fontBold ? "fw-bold" : ""}>{label}</span>
        <span className={`pe-2 ${fontBold ? "fw-bold" : ""}`}>
          {number > 0 ? number : ""}
        </span>
      </div>
    </div>
  );
};

export default MailCategoryPills;
