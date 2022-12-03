import React, { useState } from "react";

import {
  CategoriesSideBar,
  categoryText,
  CategoriesListWrapper,
  listLabelStyles,
} from "./LandingPageStyle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  List,
  ListSubheader,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Box,
} from "@mui/material";
import categories from "../../SetUpData/categoriesData";
const SideNav = () => {
  // const categories = useSelector((state) => state.productCategories);
  const [currentItem, setCurrentItem] = useState(null);
  const handleClick = (id) => {
    if (currentItem === id) {
      return setCurrentItem(null);
    }

    setCurrentItem(id);
  };
  return (
    <CategoriesSideBar>
      <List
        subheader={
          <ListSubheader color="primary" sx={categoryText}>
            Categories
          </ListSubheader>
        }
      >
        <CategoriesListWrapper mt={2}>
          {categories.map((category, index) => {
            const { id, title, subList } = category;
            return (
              <Box key={index}>
                <ListItemButton onClick={() => handleClick(id)}>
                  <ListItemText primary={title} sx={listLabelStyles} />
                  {subList.length > 0 && (
                    <ListItemIcon>
                      {currentItem === id ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                  )}
                </ListItemButton>
                {subList.length > 0 && (
                  <Collapse in={currentItem === id} timeout="auto">
                    <List component="div" disablePadding>
                      {subList.map((item, index) => {
                        return (
                          <ListItemButton sx={{ pl: 4 }} key={index}>
                            <ListItemText primary={item.subCategory} />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </CategoriesListWrapper>
      </List>
    </CategoriesSideBar>
  );
};

export default SideNav;
