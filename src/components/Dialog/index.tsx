import React from "react";
import { Dialog, DialogProps } from "@mui/material/";
import { styled } from "@mui/material/styles";
export const CustomDialog = styled((props: DialogProps) => <Dialog {...props} />)(
  () => ({
    "& .MuiDialog-paper": {
      borderRadius: 10,
      width: "100%",
      maxWidth: 580,
      fontFamily:"Rubik,sans-serif",
      backgroundColor: "#F9F9F9",
    },
  })
);
