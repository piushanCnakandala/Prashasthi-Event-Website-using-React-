
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import WeddingEventsMenuWithGrid from "../../commponents/weddingsPageHero";


class Weddings extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <WeddingEventsMenuWithGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default Weddings;
