import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  color?: string;
  size?: number;
  marginTop?: number;
}

const Loader: React.FC<Props> = ({ color, size, marginTop }) => {
  return (
    <CircularProgress
      size={size ? size : 20}
      sx={{ color: color ? color : "#8D57FA", marginTop: marginTop }}
    />
  );
};

export default Loader;
