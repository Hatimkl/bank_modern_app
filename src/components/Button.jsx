import React from "react";
import styles from "../style";

const Button = () => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-2 rounded-[10px] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
