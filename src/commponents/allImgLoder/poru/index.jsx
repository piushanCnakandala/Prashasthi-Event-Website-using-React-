import React, { Component } from "react";
import {styled, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";


class PoruImgHeroWithGrid extends Component {
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



                            <div className=" flex flex-col rounded-t-3xl bg-event-woodenporu bg-cover"
                                 style={{  height:"300px", width:"200px" }}>

                            </div>


                            <div className=" flex flex-col rounded-t-3xl bg-event-poru01 bg-cover"
                                 style={{  height:"300px", width:"200px" }}>

                            </div>



                            <div className=" flex flex-col rounded-t-3xl bg-event-poru02 bg-cover"
                                 style={{  height:"300px", width:"200px" }}>

                            </div>


                            <div className=" flex flex-col rounded-t-3xl bg-event-poru03 bg-cover"
                                 style={{  height:"300px", width:"200px" }}>

                            </div>



                            <div className=" flex flex-col rounded-t-3xl bg-event-poru04 bg-cover"
                                 style={{  height:"300px", width:"200px" }}>

                            </div>

                            <div className=" flex flex-col rounded-t-3xl bg-event-poru05 bg-cover"
                                 style={{  height:"300px", width:"200px" }}>

                            </div>

                            <div className=" flex flex-col rounded-t-3xl bg-event-poru06 bg-cover"
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



                        <div className=" flex flex-col rounded-t-3xl bg-event-poru07 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>


                        <div className=" flex flex-col rounded-t-3xl bg-event-poru08 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>



                        <div className=" flex flex-col rounded-t-3xl bg-event-poru09 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>


                        <div className=" flex flex-col rounded-t-3xl bg-event-poru10 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>

                        <div className=" flex flex-col rounded-t-3xl bg-event-poru06 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>

                        <div className=" flex flex-col rounded-t-3xl bg-event-poru11 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>

                        <div className=" flex flex-col rounded-t-3xl bg-event-poru02 bg-cover"
                             style={{  height:"300px", width:"200px" }}>

                        </div>



                    </Grid>

                </Grid>








            </Grid>
        );
    }

}

export default PoruImgHeroWithGrid;
