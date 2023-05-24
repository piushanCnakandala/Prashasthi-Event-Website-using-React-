import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import CommonButton from "../common/button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { styleSheet } from "./style";
import {withStyles} from "@mui/styles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import RemoveIcon from '@mui/icons-material/Remove';


class LoginAdmin extends Component {
    constructor(props) {
        super(props);
    }

   /* handleSubmit = async () => {
        console.log("Hi handle");
        console.log(this.state.formData);
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "email":
                const email = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, { email: email })
                );
                // this.setState({ userId });
                break;

            case "password":
                const password = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, { password: password })
                );
                break;

            default:
                break;
        }
    };*/

    render() {
        const {classes} = this.props;
        const facebookProfileUrl = 'https://web.facebook.com/prashasthievents';
        const instagramProfileUrl = 'https://web.facebook.com/prashasthievents';
        return (
            <Grid
                container
                direction={"row"}
                justifyContent="center"
                alignItems="stretch"
                className="h-screen min-h-min w-screen bg-hero-pattern p-0 m-0 bg-blue-000bg-no-repeat bg-bottoms bg-cover bg-center bg-blend-overlay   bg-stone-800"
            >

                <Grid
                    container
                    direction={"row"}
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    justifyContent="center"
                    alignItems="center"
                >
                    <div
                        className="flex gap-6 flex-col h-fit w-96 rounded-xl bg-blue-300 p-10 m-5 md:m-0 bg-opacity-10  backdrop-blur-sm"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.09)" }}
                    >
                        <Grid item>
                            <Typography
                                variant="h4"
                                className="text-center uppercase font-bold text-white"
                            >
                                GET IN TOUCH
                            </Typography>
                        </Grid>
                        <ValidatorForm
                        >
                            <Grid item container direction={"column"} rowGap="20px">

                                <TextValidator
                                    label="Your Name"
                                    onChange={this.handleChange}
                                    className={[classes.textField,'w-full']}
                                />

                                <TextValidator
                                    label="E-mail"
                                    onChange={this.handleChange}
                                    className={[classes.textField,'w-full text-red-500']}
                                />

                                <TextValidator
                                    label="Subject"
                                    onChange={this.handleChange}
                                    className={[classes.textField,'w-full text-red-500']}
                                />

                                <TextValidator
                                    label="Message"
                                    onChange={this.handleChange}
                                    className={[classes.textField,'w-full text-red-500']}
                                />

                                {/*  <Link to="dashboard">

                                </Link>*/}
                                <CommonButton
                                    size="large"
                                    variant="contained"
                                    label="Submit"
                                    type="submit"
                                    /*onClick={() => {
                                        this.checkValidity();
                                    }}*/
                                    className="text-white w-full bg-red-500 font-bold tracking-wide"
                                />

                            </Grid>
                        </ValidatorForm>

                    </div>

                </Grid>

                <RemoveIcon fontSize="large" className="text-white"/>

                <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer" >
                    <FacebookOutlinedIcon fontSize="large" className="text-white"/>
                </a>

                <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer" >
                    <InstagramIcon fontSize="large" className="text-white"/>
                </a>
                <RemoveIcon fontSize="large" className="text-white"/>

            </Grid>


        );
    }
}
export default withStyles(styleSheet)(LoginAdmin);
