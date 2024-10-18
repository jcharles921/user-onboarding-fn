import React from "react";
import GetStartedButton from "@/components/getstarted";
import style from "../styles/home.module.css";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className={style.layout}>
      <Navigation />
      <GetStartedButton />
    </div>
  );
}
