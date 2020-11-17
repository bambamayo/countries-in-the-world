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
  itemClicked,
  showDropdown,
  handleShowDropdown,
}) {
  return (
    <div className={ddCont}>
      <button className={ddTitle} onClick={handleShowDropdown}>
        <span className={ddTitleText}>{title}</span>
        <span className={ddIcon}>
          {" "}
          <Icon type={["fas", "angle-down"]} />
        </span>
      </button>
      {showDropdown && (
        <div className={ddList}>
          {items.map((item) => (
            <button
              className={ddListItem}
              key={item.id}
              onClick={() => itemClicked(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
