import React, { Component } from "react";
import {styled, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";



class GalleryGrid extends Component {
    constructor(props) {
        super(props);
    }

    // md:text-6xl
    render() {
        return (
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                /* className="h-screen w-screen  bg-hero-pattern  bg-no-repeat bg-bottoms bg-cover bg-blend-overlay  bg-stone-600">*/
                className="h-screen min-h-min w-screen p-0 m-0 bg-hero-pattern  bg-no-repeat bg-bottoms bg-cover bg-center bg-blend-overlay   bg-stone-800">

                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    className="bg-blue-000 text-white text-center h-44">

                    <Typography
                        variant={"h5"}
                        className="text-white font-serif font-family: Georgia  tracking-wide select-none"
                    >
                        Gallery
                    </Typography>

                </Grid>


                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    className="bg-blue-000 text-white text-center h-1 justify-end ">

                    {/*  add text*/}

                </Grid>

                <Grid
                    container
                    item
                    xs={12}
                    md={3.5}
                    lg={2.8}
                    justifyContent="center"
                    alignItems="center"
                >
                </Grid>
            </Grid>
        );
    }

}

export default GalleryGrid;
