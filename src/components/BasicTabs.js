import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckIcon from "@mui/icons-material/Check";
import BasicModal from "./Modal";
import "../Index.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, padding: "0px" }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "0px" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Tab
            sx={{ textTransform: "none", fontSize: "16px" }}
            label="Basic"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none", fontSize: "16px" }}
            label="Social"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "none", fontSize: "16px" }}
            label="Certificates"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="formbox">
          <p className="subtitle">Full Name*</p>

          <input
            name="name"
            type="text"
            id="n1"
            className="input input-tab1"
            placeholder="Foo Bar"
            required
          />
        </div>
        <div className="formbox">
          <p className="subtitle">Nickname*</p>

          <input
            name="nickname"
            type="text"
            id="nk"
            className="input input-tab1"
            placeholder="Juanito"
            required
          />
        </div>

        <div className="contato">
          <div className="formbox formbox-email">
            <p className="subtitle">E-mail*</p>

            <input
              name="email"
              type="email"
              id="email"
              className="input input-tab1"
              placeholder="foo@bar.com"
              required
            />
          </div>
          <div className="formbox formbox-phone">
            <p className="subtitle">Phone*</p>

            <input
              name="phone"
              type="text"
              id="tel"
              className="input input-tab1"
              placeholder="(00) 0 0000-0000"
              required
            />
          </div>
        </div>

        <p id="birthday-text" className="subtitle">
          Birthday*
        </p>
        <div className="birthday">
          <div className="birthday-date">
            <p className="subtitle">Day*</p>
            <input
              type="number"
              min="01"
              max="31"
              name="day"
              id="day"
              className="input input-tab1"
              required
            />
          </div>
          <div className="birthday-date">
            <p className="subtitle">Month*</p>
            <input
              type="number"
              min="01"
              max="12"
              name="month"
              id="month"
              className="input input-tab1"
              required
            />
          </div>
          <div className="birthday-date">
            <p className="subtitle">Year*</p>
            <input
              type="number"
              min="1940"
              max="2021"
              name="year"
              id="year"
              className="input input-tab1"
              required
            />
          </div>
          <div className="birthday-date">
            <p className="subtitle">Age*</p>
            <input
              type="number"
              min="01"
              max="81"
              name="age"
              id="age"
              className="input input-tab1"
              required
            />
          </div>
        </div>

        <p className="subtitle checkbox">
          <input
            name="termos"
            id="frase"
            className="input-tab1"
            type="checkbox"
            required
          />{" "}
          I accept the terms and privacy.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="formbox">
          <p className="subtitle">LinkedIn</p>
          <input
            name="linkedIn"
            type="url"
            id="linkedin"
            className="input input-tab2"
            placeholder="linkedin.com/in/foo-bar-3a0560104/"
          />
        </div>

        <div className="formbox">
          <p className="subtitle">GitHub*</p>
          <input
            name="Github"
            type="url"
            id="Github"
            className="input input-tab2"
            placeholder="github.com/in/foo-bar-3a0560104/"
            required
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="formbox">
          <p className="subtitle">Certificates</p>
          <div style={{ position: "relative" }}>
            <input
              type="url"
              id="certificate"
              name="certificate"
              className="input input-tab3 input-certificate"
              placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            />
            <Checkbox
              sx={{ position: "absolute", right: "0" }}
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </div>
        </div>

        <div className="formbox flexflow">
          <BasicModal></BasicModal>
        </div>
        <div className="formbox">
          <p className="subtitle">Team Name*</p>
          <input
            type="url"
            id="teamName"
            name="team name"
            className="input input-tab3"
            placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            required
          />
        </div>

        <div className="formbox">
          <p className="subtitle">Institution*</p>
          <input
            type="text"
            id="institution"
            name="institution"
            className="input input-tab3"
            placeholder="Universidade da Paraíba"
            required
          />
        </div>

        <div className="formbox">
          <p className="subtitle">Graduation*</p>
          <input
            type="text"
            id="graduation"
            name="graduation"
            className="input input-tab3"
            placeholder="Ciências da Computação"
            required
          />
        </div>
      </TabPanel>
      <div id="footerForm">
        {value < 2 ? (
          <button
            type="button"
            id="btnNext"
            onClick={() => setValue(value + 1)}
            className="btnDefault"
          >
            Next
            <KeyboardArrowRightIcon />
          </button>
        ) : (
          <button
            id="btnNext"
            onClick={() => console.log("enviado bem")}
            className="btnDefault"
          >
            Finish
            <CheckIcon />
          </button>
        )}
      </div>
    </Box>
  );
}
