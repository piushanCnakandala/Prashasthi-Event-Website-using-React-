
import React, { Component } from "react";
import NavBar from "../../commponents/nav";
import { Grid } from "@mui/material";
import Footer from "../../commponents/footer/inde";
import GalleryGrid from "../../commponents/galleryHero";


class GalleryPage extends Component {
    render() {
        return (
            // overflowX:'hidden'
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <GalleryGrid />
                    <Footer />
                </div>
            </Grid>
        );
    }
}
export default GalleryPage;
