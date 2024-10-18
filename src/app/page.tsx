import React from "react";
import style from "../styles/home.module.css";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className={style.layout}>
      <Navigation />
    </div>
  );
}
