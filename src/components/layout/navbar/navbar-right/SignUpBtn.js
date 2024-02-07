import { useState } from "react";
import styles from "./NavBarRight.module.css"


export default function StandardBtn() {
function handleClick() {
    window.location.href = 'http://localhost:3000/SignUp';
  }

 return (
    <button type="button" onClick={handleClick}>
      SignUp
    </button>
  );

 }