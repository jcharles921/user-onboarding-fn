import React from "react";
import { Button, ButtonProps, useTheme, SxProps } from "@mui/material";

interface Props extends ButtonProps {
  children: React.ReactNode;
  fontSize?: number;
  width?: string | number;
  height?: string | number;
  sx?: SxProps;
  variant?: "contained" | "outlined";
  color?: any;
}

const MainButton = ({
  onClick,
  children,
  fontSize,
  variant,
  width,
  sx,
  height,
  color,
  ...rest
}: Props) => {
  return (
    <Button
      variant={variant}
      sx={{
        backgroundColor: variant === "contained" ? "#8D57FA" : "rgba(0,0,0,0)",
        color: color ? color : "white",
        textTransform: "none",
        border:
          variant === "contained" ? "none" : `1px solid rgba(255,255,255,0.7)`,
        fontWeight: "bold",
        borderRadius: "8px",
        width: width ? width : "100px",
        "&:hover": {
          backgroundColor: "none",
        },
        "&.MuiButton-root": {
          height: height ? height : "44px",
          padding: 0,
          boxShadow:"none"
        },
        ...sx,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export { MainButton };
