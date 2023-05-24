import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import CommonButton from "../../commponents/common/button";
import {Link} from "react-router-dom";

class UpComingEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (

            <Grid
                container
                direction={"column"}
                alignItems="center"
                justifyContent={"center"}

            >
                <div
                    className="h-screen w-screen bg-red-200"
                    style={{ height: "500px", width:"400px"}}
                ></div>

                <Grid container direction={"column"} alignItems="center" >
                    <Grid
                        item
                        container
                        className=" min-h-96  w-96 bg-slate-50 rounded-lg p-10 drop-shadow-lg "
                    >

                        <Grid container item direction={"column"} gap="20px" >


                            <Grid item container direction={"column"} alignItems rowGap="20px">


                                    <Typography variant="p">
                                       Booking Ticket Online. <Link to={'/register'}> Book Now</Link>
                                    </Typography>
                                </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default UpComingEvents;
