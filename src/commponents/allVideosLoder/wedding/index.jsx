import React, { Component } from "react";
import {styled, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";


class VideoOfWeddingHeroWithGrid extends Component {
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
                    className="max-width max-height ">

                    <Grid lassName="ratio ratio-21x9">
                        <iframe width="640" height="390" src="https://www.youtube.com/embed/Oytr_o24Y_w" title="YouTube video" allowFullScreen></iframe>
                    </Grid>

                </Grid>


               {/* <Grid container
                      justifyContent="center"
                      alignItems="center" >


                    <Grid lassName="ratio ratio-21x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video"
                                allowFullScreen></iframe>
                    </Grid>


                </Grid>*/}

            </Grid>
        );
    }

}

export default VideoOfWeddingHeroWithGrid;
