
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import EngagementWithGrid from "../../commponents/EngagementHero";


class EngagementsEventPage extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <EngagementWithGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default EngagementsEventPage;
