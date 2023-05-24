import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Grid container direction="column">
                <Grid container gap='5px' justifyContent={'space-evenly'} className=" text-white bg-stone-800 ">

                    <Grid container direction='column' alignItems={'center'} justifyContent='center' className=" h-20 w-56">
                        <Grid container gap="10px" direction="row" justifyContent={'center'} alignItems='center' className="">
                            <Grid item className="">
                                <MapOutlinedIcon fontSize="large" className="text-red-400"/>
                            </Grid>
                            <Grid container direction="column" item className=" w-40">
                                <Grid>
                                    <Typography variant="h6">Headoffice</Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="p">Kurukulawa, Ragama
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='column' alignItems={'center'} justifyContent='center' className=" h-20 w-56">
                        <Grid container gap="10px" direction="row" justifyContent={'center'} alignItems='center' className="">
                            <Grid item className="">
                                <AccessTimeOutlinedIcon fontSize="large" className="text-red-400"/>
                            </Grid>
                            <Grid container direction="column" item className=" w-40">
                                <Grid>
                                    <Typography variant="h6">Working</Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="p">Service Available 24/7</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='column' alignItems={'center'} justifyContent='center' className=" h-20 w-56">
                        <Grid container gap="10px" direction="row" justifyContent={'center'} alignItems='center' className="">
                            <Grid item className="">
                                <DraftsOutlinedIcon fontSize="large" className="text-red-400"/>
                            </Grid>
                            <Grid container direction="column" item className=" w-40">
                                <Grid>
                                    <Typography variant="h6">Email Us</Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="p">prashasthievents@gmail.com</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='column' alignItems={'center'} justifyContent='center' className=" h-20 w-56">
                        <Grid container gap="10px" direction="row" justifyContent={'center'} alignItems='center' className="">
                            <Grid item className="">
                                <AddIcCallOutlinedIcon fontSize="large" className="text-red-400"/>
                            </Grid>
                            <Grid container direction="column" item className=" w-40">
                                <Grid>
                                    <Typography variant="h6"> Call Us</Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="p">+94 764909009 +94716371671</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="stretch"
                        className="bg-stone-900 text-stone-300 h-44"
                    >
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="stretch"
                        >
                            <Grid
                                container
                                item
                                direction="column"
                                justifyContent="center"
                                className="bg-yellow-000 h-14"
                            >
                                <ul className="flex justify-center gap-4 font-semibold">
                                    <Link to="/">
                                        <li  className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">HOME</li>
                                    </Link>
                                    <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">UPCOMING EVENTS</li>
                                    <Link to="/about">
                                        <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">ABOUT US</li>
                                    </Link>
                                    <Link to="/contact">
                                        <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">CONTACT US</li>
                                    </Link>

                                </ul>
                            </Grid>
                            <Grid
                                container
                                item
                                direction="column"
                                justifyContent="center"
                                className="bg-blue-000 text-white text-center h-12 justify-end "
                            >
                                <Typography variant="h5" className="font-doses">ප්‍රශස්ති</Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                direction="column"
                                justifyContent="center"
                                className="bg-blue-000 h-16"
                            >
                                <Typography variant="p" className="text-center">
                                    Copyright © 2022 | PRASHASTHI. All right reserved
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}
export default Footer;
