
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import CorporateHeroWithGrid from "../../commponents/coporatePageHero";


class CorporateEventPage extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <CorporateHeroWithGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default CorporateEventPage;
