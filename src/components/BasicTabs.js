import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
import FinishModal from "./FinishModal";
import Error from "./Error";

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
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const fields = {
    basicFields: ["fullName", "nickName"],
    socialFields: ["github", "linkedin"],
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setOpen(true);
  };

  const validateStep = async (fields, nextStep) => {
    try {
      const validateFields = await trigger(fields);

      if (validateFields) {
        setValue(nextStep);
      }
    } catch (err) {
      console.log(err);
    }
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
            onClick={() => setValue(0)}
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none", fontSize: "16px" }}
            label="Social"
            onClick={() => validateStep(fields.basicFields, 1)}
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "none", fontSize: "16px" }}
            onClick={() => validateStep(fields.socialFields, 2)}
            label="Certificates"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabPanel value={value} index={0}>
          <div className="formbox">
            <p className="subtitle">Full Name*</p>
            <input
              type="text"
              className="input input-tab1"
              placeholder="Foo Bar"
              {...register("fullName", {
                required: "Required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="fullName"
              as={<Error text={"Required"} />}
            />
          </div>
          <div className="formbox">
            <p className="subtitle">Nickname*</p>

            <input
              type="text"
              className="input input-tab1"
              placeholder="Juanito"
              {...register("nickName", {
                required: "Required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="nickName"
              as={<Error text={"Required"} />}
            />
          </div>
          <div className="contato">
            <div className="formbox formbox-email">
              <p className="subtitle">E-mail*</p>
              <input
                type="email"
                className="input input-tab1"
                placeholder="foo@bar.com"
                {...register("email", {
                  required: "Required",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                as={<Error text={"Required"} />}
              />
            </div>
            <div className="formbox formbox-phone">
              <p className="subtitle">Phone*</p>
              <input
                type="text"
                className="input input-tab1"
                placeholder="(00) 0 0000-0000"
                {...register("phone", {
                  required: "Required",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="phone"
                as={<Error text={"Required"} />}
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
                className="input input-tab1"
                {...register("b-day", {
                  required: "Required",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="b-day"
                as={<Error text={"Required"} />}
              />
            </div>
            <div className="birthday-date">
              <p className="subtitle">Month*</p>
              <input
                type="number"
                min="01"
                max="12"
                className="input input-tab1"
                {...register("b-month", {
                  required: "Required",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="b-month"
                as={<Error text={"Required"} />}
              />
            </div>
            <div className="birthday-date">
              <p className="subtitle">Year*</p>
              <input
                type="number"
                min="1940"
                max="2021"
                className="input input-tab1"
                {...register("b-year", {
                  required: "Required",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="b-year"
                as={<Error text={"Required"} />}
              />
            </div>
            <div className="birthday-date">
              <p className="subtitle">Age*</p>
              <input
                type="number"
                min="01"
                max="81"
                className="input input-tab1"
                {...register("age", {
                  required: "Required",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="age"
                as={<Error text={"Required"} />}
              />
            </div>
          </div>
          <p className="subtitle checkbox">
            <input
              className="input-tab1"
              type="checkbox"
              {...register("terms", {
                required: "Required",
              })}
            />
            I accept the terms and privacy.
          </p>
          <ErrorMessage
            errors={errors}
            name="terms"
            as={<Error text={"Required"} />}
          />
          <div id="footerForm">
            <button
              type="button"
              onClick={() => validateStep(fields.basicFields, 1)}
              id="btnNext"
              className="btnDefault"
            >
              Next
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="formbox">
            <p className="subtitle">LinkedIn</p>
            <input
              type="url"
              className="input input-tab2"
              placeholder="linkedin.com/in/foo-bar-3a0560104/"
              {...register("linkedin", {
                required: "Required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="linkedin"
              as={<Error text={"Required"} />}
            />
          </div>

          <div className="formbox">
            <p className="subtitle">GitHub*</p>
            <input
              type="url"
              className="input input-tab2"
              placeholder="github.com/in/foo-bar-3a0560104/"
              required
              {...register("github", {
                required: "Required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="github"
              as={<Error text={"Required"} />}
            />
          </div>
          <div id="footerForm">
            <button
              type="button"
              onClick={() => validateStep(fields.socialFields, 2)}
              id="btnNext"
              className="btnDefault"
            >
              Next
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="formbox">
            <p className="subtitle">Certificates</p>
            <div style={{ position: "relative" }}>
              <input
                {...register("certificate-1")}
                type="url"
                className="input input-tab3 input-certificate"
                placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              />
              <Checkbox
                {...register("favorite-1")}
                sx={{ position: "absolute", right: "0" }}
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>

          <div className="formbox flexflow">
            <BasicModal register={register}></BasicModal>
          </div>
          <div className="formbox">
            <p className="subtitle">Team Name*</p>
            <input
              type="url"
              className="input input-tab3"
              placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              {...register("teamName", {
                required: "Required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="teamName"
              as={<Error text={"Required"} />}
            />
          </div>

          <div className="formbox">
            <p className="subtitle">Institution*</p>
            <input
              type="text"
              className="input input-tab3"
              placeholder="Universidade da Paraíba"
              {...register("Institution", {
                required: "Required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="Institution"
              as={<Error text={"Required"} />}
            />
          </div>

          <div className="formbox">
            <p className="subtitle">Graduation*</p>
            <input
              type="text"
              className="input input-tab3"
              placeholder="Ciências da Computação"
              {...register("Graduation", {
                required: "Required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="Graduation"
              as={<Error text={"Required"} />}
            />
          </div>
          <div id="footerForm">
            <button type="submit" id="btnNext" className="btnDefault">
              Finish <CheckIcon />
            </button>
          </div>
        </TabPanel>
      </form>
      <FinishModal open={open} handleClose={setOpen} />
    </Box>
  );
}
