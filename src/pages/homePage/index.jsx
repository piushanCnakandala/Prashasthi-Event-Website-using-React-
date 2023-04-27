
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import HeroWithGrid from "../../commponents/hero";
import { Grid } from "@mui/material";
import ListEvents from "../../commponents/listOfEvents";
import Footer from "../../commponents/footer/inde";


class Home extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <HeroWithGrid />
                    <ListEvents/>
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default Home;
