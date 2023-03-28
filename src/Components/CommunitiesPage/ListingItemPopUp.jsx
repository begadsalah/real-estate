import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../api/mlsdata";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../api/mlsdata";
import CollectionsIcon from "@mui/icons-material/Collections";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import NewMap from "./NewMap";
import ScheduleTourForm from "./ScheduleTourForm";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FullScheduleTourForm from "./FullScheduleTourForm";
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
        <Box sx={{ p: 0 }}>
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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },

  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 2, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const ListingItemPopUp = () => {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [togglerMeetButton, setTogglerMeetButton] = useState(true);
  const [scheduleATour, setScheduleATour] = useState(true);
  const [reqInfo, setReqInfo] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleColorchange = () => {
    setIsActive((current) => !current);
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <ImageList
          style={{ marginTop: "1rem" }}
          sx={{ width: 1100, height: 405 }}
          variant="quilted"
          cols={4}
          rowHeight={200}
          className="image-list-component image-wrapper"
        >
          <div className="forSaleIcon">FOR SALE</div>
          <div className="shareAndSaveIcon">
            <div className="shareIcon centerd-element">
              <IosShareIcon
                style={{
                  marginRight: "0.3rem",
                  paddingBottom: "0.1rem",

                  cursor: "pointer",
                  color: "gray",
                }}
              />
              Share
            </div>
            <div className="saveIcon centerd-element">
              <FavoriteIcon
                style={{
                  marginRight: "0.3rem",
                  paddingBottom: "0.1rem",
                  cursor: "pointer",
                  color: isActive ? "red" : "gray",
                }}
                onClick={handleColorchange}
              />
              Save
            </div>
          </div>
          <div className=" galleryIcon centerd-element">
            <CollectionsIcon
              onClick={handleClickOpen}
              style={{
                marginRight: "0.3rem",
                paddingBottom: "0.1rem",
                cursor: "pointer",
                color: "white",
              }}
            />
            13
          </div>
          <span
            style={{
              padding: "0.2rem 0.7rem",
              color: "black",
              fontWeight: "600",
              backgroundColor: "rgb(213, 241, 250,0.6)",
              position: "absolute",
              display: "flex",
              alignSelf: "end",
              justifySelf: "flex-start",
              borderLeft: "4px solid #1565C0",
            }}
          >
            <span
              style={{
                color: "#1565C0",
                fontWeight: "600",
                fontSize: "1.1rem",
              }}
            >
              NEW{" "}
            </span>{" "}
            &nbsp;- 3 DAYS ON THE MARKET
          </span>
          {itemData.map((item) => (
            <ImageListItem
              onClick={handleClickOpen}
              style={{ cursor: "pointer" }}
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              className="image-list-item-component"
            >
              <img
                {...srcset(item.img, 200, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <BootstrapDialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ zIndex: "8 !important" }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Grid
            container
            className="centerd-element"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Tabs
                className="basic-tabs"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Tab label="Media" {...a11yProps(0)} iconPosition="start" />
                <Tab label="Map" {...a11yProps(1)} iconPosition="start" />
                <Tab
                  label="Street View"
                  {...a11yProps(2)}
                  iconPosition="start"
                />
                <Tab label="Schools" {...a11yProps(3)} iconPosition="start" />
                <Tab
                  label="Shop & Eat"
                  {...a11yProps(4)}
                  iconPosition="start"
                />
              </Tabs>
            </Grid>
            <Grid>
              <button
                style={{
                  padding: "0.3rem 1rem",
                  color: "rgb(90, 90, 90)",
                  border: "1px solid lightgray",
                  fontWeight: "500",
                  marignTop: "1rem",
                  marginRight: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                <IosShareIcon
                  style={{
                    marginRight: "0.3rem",
                    paddingBottom: "0.1rem",

                    cursor: "pointer",
                    color: "gray",
                  }}
                />
                Share
              </button>
              <button
                style={{
                  padding: "0.3rem 1rem",
                  color: "rgb(90, 90, 90)",
                  border: "1px solid lightgray",
                  fontWeight: "500",
                  marignTop: "1rem",
                  fontSize: "1rem",
                }}
                onClick={handleColorchange}
              >
                <FavoriteIcon
                  style={{
                    marginRight: "0.3rem",
                    paddingBottom: "0.1rem",
                    color: isActive ? "red" : "gray",
                    cursor: "pointer",
                  }}
                />
                Save
              </button>
            </Grid>
          </Grid>
        </BootstrapDialogTitle>
        <DialogContent style={{ overflow: "hidden", marginTop: "-2.5rem " }}>
          <TabPanel value={value} index={0}>
            <Grid container>
              <Grid xs={8} style={{ height: "73vh", overflow: "auto" }}>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway className="gallery-display-modal">
                  {viewerIsOpen ? (
                    <Modal
                      onClose={closeLightbox}
                      className="gallery-display-modal"
                    >
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map((x) => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title,
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </Grid>
              <Grid
                xs={4}
                className="property-detailed-description-popup"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  padding: "0rem",
                  marginBottom: "2rem",
                  overflow: "auto",
                  overflowX: "hidden",
                }}
              >
                <FullScheduleTourForm
                  formWidth={"-webkit-fill-available"}
                  formMarginRight={0}
                  formMarginTop={-1}
                  formMarginTop2={0}
                  ShowScheduleButton={true}
                  ShowReqInfoButton={true}
                  scheduleInitialState={true}
                  reqInitialState={false}
                  heightOfForm={"fit-content"}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid>
              <NewMap />
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid>
              <NewMap />
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid>
              <NewMap />
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid>
              <NewMap />
            </Grid>
          </TabPanel>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default ListingItemPopUp;
