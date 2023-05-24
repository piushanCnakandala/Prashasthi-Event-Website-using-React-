import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import CommonButton from "../common/button";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { dividerClasses, Grid, IconButton, Typography } from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import UpComingEvents from "../../pages/upcomingEvents";
import setImageModel from "../../models/SetImageModel";
import SetImageModel from "../../models/SetImageModel";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function NavBar(props) {
    const { classes } = props;
    const [popup, setPopUp] = useState(false);

    return (
        <AppBar color="transparent" position={"fixed"}>
            <nav className="flex justify-between items-center h-16 px-12 bg-zinc-800 bg-opacity-25 p-10 backdrop-blur-sm">
                <div>
                    <Typography
                        variant={"h5"}
                        className="text-white font-serif font-family: Georgia  tracking-wide select-none"
                    >
                        ප්‍රශස්ති
                    </Typography>
                </div>

                <ul className="text-white flex justify-center gap-4 font-semibold ">
                    <Link to="/">
                        <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">
                            HOME
                        </li>
                    </Link>

                    <Link to="/galleryPage">
                        <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">
                            GALLERY
                        </li>
                    </Link>

                    <Link to="/about">
                        <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">
                            ABOUT US
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">
                            CONTACT US
                        </li>
                    </Link>
                </ul>
                <div className="flex w-1/18 justify-end gap-3">
                    <CommonButton
                        size="large"
                        variant="outlined"
                        label="UPCOMING EVENTS"
                        className="text-white border-white hover:bg-white hover:text-black"
                        onClick={() => {
                            setPopUp(true);
                        }}

                    />


                </div>
            </nav>
            {popup &&
            <SetImageModel setShowModal={setPopUp} showModal={popup} />
            }
        </AppBar>
    );
}

export default withStyles(styleSheet)(NavBar);
