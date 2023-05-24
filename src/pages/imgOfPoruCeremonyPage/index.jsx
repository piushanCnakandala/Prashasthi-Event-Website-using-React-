
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import AboutUsHeroWithGrid from "../../commponents/aboutUsHero";
import PoruImgHeroWithGrid from "../../commponents/allImgLoder/poru";


class ImgOfPoruCeremony extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <PoruImgHeroWithGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default ImgOfPoruCeremony;
