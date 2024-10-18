"use client";
import React, { useState } from "react";
import { MainButton } from "@/components/Button";
import { NormalText } from "@/components/Text";
const GetStartedButton = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <MainButton width={300} variant="contained">
      <NormalText text="Let’s get started !" />
    </MainButton>
  );
};

export default GetStartedButton;
