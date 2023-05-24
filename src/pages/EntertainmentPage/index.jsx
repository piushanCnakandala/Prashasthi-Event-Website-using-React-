
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import EntertainmentWithGrid from "../../commponents/EntertainmentHero";


class EntertainmentEventPage extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <EntertainmentWithGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default EntertainmentEventPage;
