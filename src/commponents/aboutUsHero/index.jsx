import React, { Component } from "react";
import {styled, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";


class AboutUsHeroWithGrid extends Component {
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
                        ABOUT US
                    </Typography>

                </Grid>



                <Grid item
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="stretch"
                      className="bg-blue-000 text-white text-center h-1 ">
                    <Grid>
                        <div >
                            <Typography
                                variant={"h6"}
                                className="text-red-500  font-semibold text-center tracking-wide select-none"
                            >
                                Our Vision
                            </Typography>

                            <p>To curate unique and high-quality experiences through professional and personalized service.</p>

                        </div>

                    </Grid>



                </Grid>

               {/* <Grid
                    item
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    className="bg-blue-000 text-white text-center h-1  ">
                    <div >
                        <Typography
                            variant={"h6"}
                            className="text-red-500  font-semibold  tracking-wide select-none"
                        >
                            Our Vision
                        </Typography>

                        <p>To curate unique and high-quality experiences through professional and personalized service.</p>

                    </div>

                </Grid>
*/}

                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    className="bg-blue-000 text-white text-center h-30 ">
                    <div >

                        <Typography
                            variant={"h6"}
                            className="text-red-500  font-semibold  tracking-wide select-none"
                        >
                            Description
                        </Typography>
                        <p>A dedicated team, a collection of creative minds and smooth executioners to make your dream occasion unique and memorable.</p>
                        <p>
                            We at Prashasthi events constantly strive to curate experiences by catering to all your special needs enabling inspiring connections with your loved audiences.</p>
                        <p>
                            Be rest assured as your event is meticulously planned and flawlessly executed by our expert team.</p>
                    </div>

                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    className="bg-blue-000 text-white text-center h-20 ">
                    <div >

                        <Typography
                            variant={"h6"}
                            className="text-red-500  font-semibold  tracking-wide select-none"
                        >
                            Who we are,
                        </Typography>
                        <p>We are a team of diverse experts placed to make your dream occasion a reality.</p>
                        <p>
                            We at prashasthi events aim to curate inspiring event experiences, providing services from concept to delivery to match our valued customer expectations.</p>
                    </div>

                </Grid>

               <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    className="bg-blue-000 text-white text-center h-20 ">
                    <div >

                        <Typography
                            variant={"h6"}
                            className="text-red-500  font-semibold  tracking-wide select-none h-10"
                        >
                            What we do,
                        </Typography>
                        <p>We facilitate event experiences spanning from weddings, engagements to musical festivals providing solutions from planning to execution which are cost effective, and with guaranteed excellence.</p>
                        <p>Our approach is structured to deliver memorable experiences through an effortless process handled by our expert team.</p>
                    </div>

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

export default AboutUsHeroWithGrid;
