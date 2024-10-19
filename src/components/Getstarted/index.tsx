"use client";
import React, { useState } from "react";
import { MainButton } from "@/components/Button";
import { NormalText } from "@/components/Text";
import { CustomDialog } from "../Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import Onboarding from "../Onboarding";
const GetStartedButton = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const matches = useMediaQuery("(min-width:670px)");
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleClick = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <MainButton width={300} variant="contained" onClick={handleClick}>
        <NormalText text="Let’s get started !" />
      </MainButton>
      <CustomDialog
        sx={{
          "& .MuiPaper-root": {
            maxWidth: matches ? 580 : 375,
          },
        }}
        open={openDialog}
        onClose={handleClose}
      >
        <Onboarding />
      </CustomDialog>
    </>
  );
};

export default GetStartedButton;
