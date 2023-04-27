
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import AboutUsHeroWithGrid from "../../commponents/aboutUsHero";


class AboutUs extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <AboutUsHeroWithGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default AboutUs;
