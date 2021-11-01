import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../Index.css";
import { color } from "@mui/system";
import { styled } from "@mui/material/styles";

const CustomTab = styled(Tabs)`
  button {
    text-decoration: captalize !important;
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("index:" + index);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <CustomTab
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textTransform: "captalize",
          }}
        >
          <Tab label="Basic" {...a11yProps(0)} />
          <Tab label="Social" {...a11yProps(1)} />
          <Tab label="Certificates" {...a11yProps(2)} />
        </CustomTab>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="formbox">
          <p className="subtitle">Full Name*</p>

          <input
            name="name"
            type="text"
            id="n1"
            className="input input-tab1"
            onchange="correcaoDoDado('n1')"
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
            onchange="correcaoDoDado('nk')"
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
              onchange="correcaoDoDado('email')"
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
              onchange="correcaoDoDado('tel')"
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
              onchange="correcaoDoDado('day')"
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
              onchange="correcaoDoDado('month')"
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
              onchange="correcaoDoDado('year')"
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
              onchange="correcaoDoDado('age')"
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
            onchange="correcaoDoDado('frase')"
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
            onchange="correcaoDoDado('linkedin')"
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
            onchange="correcaoDoDado('Github')"
            required
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="formbox">
          <p className="subtitle">Certificates</p>
          <input
            type="url"
            id="certificate"
            name="certificate"
            className="input input-tab3 input-certificate"
            placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            onchange="correcaoDoDado('certificate')"
          />
          <i
            onclick="clickFav(this)"
            className="heart fa fa-heart-o"
            id="fav"
          ></i>
        </div>

        <div className="formbox flexflow">
          <button id="myBtn" onclick="" class="btnDefault">
            <img src="assets/icons/Vector.svg" alt="Sinal de mais" />
            More
          </button>
        </div>
        <div className="formbox">
          <p className="subtitle">Team Name*</p>
          <input
            type="url"
            id="teamName"
            name="team name"
            className="input input-tab3"
            placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            onchange="correcaoDoDado('teamName')"
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
            onchange="correcaoDoDado('institution')"
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
            onchange="correcaoDoDado('graduation')"
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
            {/* <img src="assets/icons/Trailing Icon.svg" alt="Flecha de seguir" /> */}
          </button>
        ) : (
          <button
            id="btnNext"
            onClick={console.log("enviado")}
            className="btnDefault"
          >
            Finish
            {/* <img src="assets/icons/Trailing Icon.svg" alt="Flecha de seguir" /> */}
          </button>
        )}

        {/* <button
          id="btnFinish"
          onclick="formController.finishForm()"
          className="btnDefault displayNone"
        >
          <img src="assets/icons/Leading Icon.svg" alt="Check de confirmação" />
          Finish
        </button> */}
      </div>
    </Box>
  );
}
