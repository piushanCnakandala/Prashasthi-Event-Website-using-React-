import React, { Component } from "react";
import {styled, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";


class WeddingImgHeroWithGrid extends Component {
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
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    className=" bg-stone-000" height="340px"

                >
                    <Grid
                        container
                        item
                        direction="column"
                        justifyContent="center"
                        className=" bg-stone-000" height="350px"
                    >



                        <div className=" flex flex-col rounded-t-3xl bg-event-w01 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>


                        <div className=" flex flex-col rounded-t-3xl bg-event-w02 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>



                        <div className=" flex flex-col rounded-t-3xl bg-event-w03 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>


                        <div className=" flex flex-col rounded-t-3xl bg-event-w04 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>



                        <div className=" flex flex-col rounded-t-3xl bg-event-w05 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>

                        <div className=" flex flex-col rounded-t-3xl bg-event-w06 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>

                        <div className=" flex flex-col rounded-t-3xl bg-event-w07 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>




                    </Grid>

                </Grid>



                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    className=" bg-stone-000" height="300px"

                >
                    <Grid
                        container
                        item
                        direction="column"
                        justifyContent="center"
                        className=" bg-stone-000" height="350px"
                    >



                        <div className=" flex flex-col rounded-t-3xl bg-event-w08 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>


                        <div className=" flex flex-col rounded-t-3xl bg-event-w09 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>



                        <div className=" flex flex-col rounded-t-3xl bg-event-w10 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>


                        <div className=" flex flex-col rounded-t-3xl bg-event-w011 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>

                        <div className=" flex flex-col rounded-t-3xl bg-event-w012 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>

                        <div className=" flex flex-col rounded-t-3xl bg-event-w013 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>

                        <div className=" flex flex-col rounded-t-3xl bg-event-w14 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>



                    </Grid>

                </Grid>








            </Grid>
        );
    }

}

export default WeddingImgHeroWithGrid;
