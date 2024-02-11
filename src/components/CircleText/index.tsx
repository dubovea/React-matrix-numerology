import React from "react";
import styles from "./style.module.scss";

const CircleText: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className={styles.circle}>
      <p className={styles.text}>{value}</p>
    </div>
  );
};

export default CircleText;
