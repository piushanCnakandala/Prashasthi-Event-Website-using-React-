import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import CommonButton from "../common/button";
import EventCard from "../common/eventCards/weddings";
import EventCardOfWeddings from "../common/eventCards/weddings";
import EventCardOfEngagements from "../common/eventCards/engagement";
import EventCardOfEntertainment from "../common/eventCards/entertainment";
import EventCardOfBirthDay from "../common/eventCards/birthday";
import {Link} from "react-router-dom";

class GeneralCars extends Component {
    render() {
        return (
            <Grid
                container
                justifyContent="flex-start"
                alignItems="stretch"
                className=" backdrop-blur-md pt-10"
            >
                <Grid
                    item
                    direction="column"
                    container
                    className="bg-zinc-000 bg-red-000 text-white text-center"
                >
                    <Grid item>
                        <Typography
                            variant="h4"
                            component="h2"
                            className="font-extrabold p-5 text-black underline  underline-offset-4 font-dosis"
                        >
                            Our Events
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    gap={5}
                    item
                    flex={"1"}
                    className="p-6 w-min"
                >
                    <Grid container item justifyContent="center" gap={5}>
                        <Link to="/weddingsPage">
                            <EventCardOfWeddings />
                        </Link>

                        <Link to="/engagementsPage">
                            <EventCardOfEngagements />
                        </Link>

                        <Link to="/entertainmentPage">
                            <EventCardOfEntertainment />
                        </Link>

                        <Link to="/corporatePage">
                            <EventCardOfBirthDay />
                        </Link>

                    </Grid>
                    <Grid>
                        <CommonButton
                            size="large"
                            variant="outlined"
                            label="See More"
                            className="text-black border-black hover:bg-white hover:text-black font-bold"
                        />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default GeneralCars;
