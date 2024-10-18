import React from "react";
import { MainButton } from "../Button";
import { MediumText } from "../Text";
import { Logo } from "@/assets";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import style from "@/styles/navigation.module.css";

const Navigation = () => {
  return (
    <div className={style.navigationBox}>
      <div>
        <img src={Logo.src} />
      </div>
      <div className="flex items-center ">
      <div className="text-white flex cursor-pointer items-center">
          <CottageOutlinedIcon
            sx={{
              width: "20px",
              height: "20px",
              color: "inherit",
              marginRight: "6px",
            }}
          />
          <MediumText text="Home" className=" font-medium mr-5" />
        </div>
        <div className="text-gray hover:text-white flex cursor-pointer items-center">
          <GroupsOutlinedIcon
            sx={{
              width: "20px",
              height: "20px",
              color: "inherit",
              marginRight: "6px",
            }}
          />
          <MediumText text="Community" className=" font-medium mr-5" />
        </div>
        <div className=" flex items-center gap-2">
          <MainButton width={80} variant="outlined" color="#A6A6A6">
            <MediumText text="Login In" className=" font-medium" />
          </MainButton>
          <MainButton width={80} variant="contained">
            <MediumText text="Sign Up" className=" font-bold" />
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
