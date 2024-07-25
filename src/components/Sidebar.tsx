import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={toggleSidebar} color="inherit" edge="start">
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleSidebar}
        variant="persistent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <div>
          <List>
            <ListItem button component={Link} to="/" onClick={toggleSidebar}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/about"
              onClick={toggleSidebar}
            >
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact"
              onClick={toggleSidebar}
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
