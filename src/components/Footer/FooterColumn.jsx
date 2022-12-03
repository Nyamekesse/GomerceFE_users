import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ColumnWrapper,
  CustomListItems,
  ColumnTitleStyle,
} from "./FooterStyles";
const FooterColumn = ({ title, links }) => {
  const navigate = useNavigate();
  return (
    <ColumnWrapper>
      <Typography variant="h6" sx={ColumnTitleStyle}>
        {title}
      </Typography>
      {links &&
        links.map((link, index) => {
          const { label, url } = link;
          return (
            <CustomListItems onClick={() => navigate(url)} key={index}>
              {label}
            </CustomListItems>
          );
        })}
    </ColumnWrapper>
  );
};

export default FooterColumn;
