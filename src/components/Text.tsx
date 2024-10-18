import React from "react";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import styles from "../../styles/home.module.css";

interface TextProps
  extends HTMLAttributes<HTMLHeadingElement>,
    PropsWithChildren {}

interface Props extends TextProps {
  text: string;
}

const BigText: FC<Props> = ({ text, ...props }) => {
  return (
    <h3 className={`${styles.rTitle} ${props.className}`} {...props}>
      {text}
    </h3>
  );
};
const NormalText: FC<Props> = ({ text, ...props }) => {
  return (
    <h4 className={`${styles.rNormal} ${props.className}`} {...props}>
      {text}
    </h4>
  );
};
const MediumText: FC<Props> = ({ text, ...props }) => {
  return (
    <h4 className={`${styles.rMedium} ${props.className}`} {...props}>
      {text}
    </h4>
  );
};
const SmallText: FC<Props> = ({ text, ...props }) => {
  return (
    <h5 className={`${styles.rSmall} ${props.className}`} {...props}>
      {text}
    </h5>
  );
};
export { BigText, NormalText, MediumText, SmallText };
