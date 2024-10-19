import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/types";
import { BigText } from "../Text";
import { nextStep } from "@/store/reducer/steps";
import { setUpUserData } from "@/store/reducer/onboardingData";
import { Chip } from "@mui/material";
import Loader from "../Loader";
import style from "../../styles/steps.module.css";
import apis from "@/store/api";

const Step4 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.productsTags); // use productsTags state from store
  const { productInterest } = useSelector((state: RootState) => state.onboardingData);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(productInterest || []);

  useEffect(() => {

    if (!data.length) {
      dispatch(apis.productTags());
    }
  }, [dispatch, data.length]);

  const handleInterestClick = (interest: string) => {
    // Toggle selection
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Automatically move to the next step when 3 or more interests are selected
  useEffect(() => {
    if (selectedInterests.length >= 3) {
      dispatch(setUpUserData({ productInterest: selectedInterests }));
      dispatch(nextStep(1)); // Move to the next step when condition is satisfied
    }
  }, [selectedInterests, dispatch]);

  return (
    <div className="w-full flex flex-col items-center px-10">
      <BigText
        text="What are your product interests?"
        className={`${style.rTitle} font-semibold mt-9 `}
      />
      <p className="text-sm text-gray-500 mt-2 mb-4">Choose three or more.</p>
      
      {loading ? (
        <Loader marginTop={20} />
      ) : (
        <div className={"w-full "}>
          {data?.map((interest: any, index: number) => (
            <Chip
              key={index}
              label={interest?.name}
              className={`${style.chip} ${selectedInterests.includes(interest?.name) ? style.selectedChip : ""}`}
              onClick={() => handleInterestClick(interest?.name)}
              color={selectedInterests.includes(interest?.name) ? "primary" : "default"}
              variant={"outlined"}
              sx={{
                marginTop: "8px",
                backgroundColor: selectedInterests.includes(interest?.name) ? "#CBB1F9" : "#F8F8F8",
                marginLeft: "8px",
                width: "fit-content",
                borderColor: selectedInterests.includes(interest?.name) ? "#8D57FA" : "inherit",
                '&.MuiChip-colorPrimary': {
                  backgroundColor: "#F2EBFE",
                  color: "#8D57FA",
                },
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Step4;
