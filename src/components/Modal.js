import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#074ee8",
    },
  },
});

const style = {
  maxWidth: "617px",
  maxHeight: "763px",
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  margin: "auto",
  borderRadius: "20px",
  padding: "45px",
  marginTop: "40px",
  "@media (max-width: 655px)": {
    borderRadius: "0px",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    height: "100%",
    marginTop: "0",
  },
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicModal({ register }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <Button
        sx={{
          textTransform: "none",
          fontFamily: " Nunito, sans-serif",
          backgroundColor: "#074ee8",
          padding: "10px 15px",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        <AddIcon />
        More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4
            style={{
              fontSize: "18px",
              fontFamily: "Inter",
              marginBottom: "80px",
            }}
          >
            Certificates
          </h4>
          <div className="formboxCard">
            <p className="subtitle">Certificates</p>
            <div style={{ position: "relative" }}>
              <input
                {...register("certificate-2")}
                type="url"
                className="input input-tab3 input-certificate"
                placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              />
              <Checkbox
                {...register("favorite-2")}
                sx={{ position: "absolute", right: "0" }}
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>{" "}
          <div className="formboxCard">
            <p className="subtitle">Certificates</p>
            <div style={{ position: "relative" }}>
              <input
                {...register("certificate-3")}
                type="url"
                className="input input-tab3 input-certificate"
                placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              />
              <Checkbox
                {...register("favorite-3")}
                sx={{ position: "absolute", right: "0" }}
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>{" "}
          <div className="formboxCard">
            <p className="subtitle">Certificates</p>
            <div style={{ position: "relative" }}>
              <input
                {...register("certificate-4")}
                type="url"
                className="input input-tab3 input-certificate"
                placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              />
              <Checkbox
                {...register("favorite-4")}
                sx={{ position: "absolute", right: "0" }}
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>{" "}
          <div className="formboxCard">
            <p className="subtitle">Certificates</p>
            <div style={{ position: "relative" }}>
              <input
                {...register("certificate-5")}
                type="url"
                className="input input-tab3 input-certificate"
                placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              />
              <Checkbox
                {...register("favorite-5")}
                sx={{ position: "absolute", right: "0" }}
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>
          <div className="formboxCard">
            <p className="subtitle">Certificates</p>
            <div style={{ position: "relative" }}>
              <input
                {...register("certificate-6")}
                type="url"
                className="input input-tab3 input-certificate"
                placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              />
              <Checkbox
                {...register("favorite-6")}
                sx={{ position: "absolute", right: "0" }}
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              marginTop: "50px",
            }}
          >
            <ThemeProvider theme={theme}>
              <Fab
                sx={{ position: "relative", right: "0" }}
                color="primary"
                aria-label="add"
                onClick={() => handleClose()}
              >
                <ArrowBackIcon />
              </Fab>
            </ThemeProvider>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
