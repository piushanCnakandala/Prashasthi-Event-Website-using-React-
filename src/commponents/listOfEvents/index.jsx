import { Container, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import GeneralCars from "../eventSec";
class ListEvents extends Component {
    render() {
        return (
            <Grid
                container
                justifyContent="flex-start"
                alignItems="stretch"
                className="bg-stone-300"
            >
                <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="stretch"
                    className=""
                >
                    <Grid
                        item
                        direction="column"
                        container
                        className=""
                    >
                    </Grid>
                    <GeneralCars/>
                    {/* General Car Section End */}
                </Grid>
            </Grid>
        );
    }
}
export default ListEvents;
