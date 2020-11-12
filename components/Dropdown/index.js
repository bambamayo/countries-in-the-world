import React from "react";
import Icon from "../Icon";
import styles from "./dropdown.module.css";

export default function Dropdown({
  title,
  items,
  ddCont,
  ddTitle,
  ddIcon,
  ddList,
  ddListItem,
  ddTitleText,
}) {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className={ddCont}>
      <button className={ddTitle} onClick={handleShow}>
        <span className={ddTitleText}>{title}</span>
        <span className={ddIcon}>
          {" "}
          <Icon type={["fas", "angle-down"]} />
        </span>
      </button>
      {show && (
        <div
          className={show ? `${styles.dropdown_list_show} ${ddList}` : ddList}
        >
          {items.map((item) => (
            <button className={ddListItem} key={item.id}>
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
