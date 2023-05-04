import React from "react";
import styles from "./index.styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faChevronDown,
  faPencilAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import MailCategoryPills from "./MailCategoryPills";
import {
  faClock,
  faEnvelope,
  faNoteSticky,
  faPaperPlane,
  faStar,
} from "@fortawesome/free-regular-svg-icons";

const MailBoxSideBar = () => {
  return (
    <div className={`p-2 ${styles["mail-box-sidebar"]}`}>
      {/* compose button */}
      <button className={`p-2 pe-4 ${styles["compose-btn"]}`}>
        <FontAwesomeIcon icon={faPencilAlt} className="ps-2 pe-3" />
        Compose
      </button>
      {/* Mails categories */}
      <div className="mails-categories mt-4">
        <MailCategoryPills
          icon={faEnvelope}
          highlihted={true}
          fontBold={true}
          number={27}
          label="Inbox"
        />
        <MailCategoryPills
          icon={faStar}
          highlihted={false}
          fontBold={false}
          number={0}
          label="Starred"
        />
        <MailCategoryPills
          icon={faClock}
          fontBold={false}
          highlihted={false}
          number={0}
          label="Snoozed"
        />
        <MailCategoryPills
          icon={faPaperPlane}
          highlihted={false}
          fontBold={false}
          number={0}
          label="Sent"
        />
        <MailCategoryPills
          icon={faNoteSticky}
          highlihted={false}
          fontBold={true}
          number={12}
          label="Drafts"
        />
      </div>
      {/* more dropdown */}
      <div className="more-dropdown">
        <MailCategoryPills
          icon={faChevronDown}
          highlihted={false}
          fontBold={false}
          number={0}
          label="More"
        />
      </div>
      {/* label heading */}
      <div
        className={`d-flex mx-1 px-3 py-1 mt-3 rounded-pill justify-content-between align-items-center ${styles["labels-sidebar"]}`}
      >
        <span className="fw-bold">Labels</span>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

export default MailBoxSideBar;
