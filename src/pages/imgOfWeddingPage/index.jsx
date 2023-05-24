
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import WeddingImgHeroWithGrid from "../../commponents/allImgLoder/wedding";


class ImgOfWeddinge extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <WeddingImgHeroWithGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default ImgOfWeddinge;
