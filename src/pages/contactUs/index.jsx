
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import LoginAdmin from "../../commponents/contactUsHero";
import AboutUsHeroWithGrid from "../../commponents/weddingsPageHero";


class ContactUs extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <LoginAdmin />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default ContactUs;
