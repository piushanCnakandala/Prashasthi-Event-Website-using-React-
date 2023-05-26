
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import VideoOfWeddingHeroWithGrid from "../../commponents/allVideosLoder/wedding";


class VideoOfWedding extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <VideoOfWeddingHeroWithGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default VideoOfWedding;
