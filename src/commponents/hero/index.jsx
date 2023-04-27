import React, { Component } from "react";
import {styled, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";


const images = [

    " bg-hero-pattern2"

];

class HeroWithGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0,
        };
    }

    componentDidMount() {
        this.changeBackgroundImage();
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    changeBackgroundImage = () => {
        this.timeoutId = setTimeout(() => {
            this.setState((prevState) => ({
                imageIndex: (prevState.imageIndex + 1) % images.length,
            }));
            this.changeBackgroundImage();
        }, 5000);
    }


    // md:text-6xl
    render() {
        const { imageIndex } = this.state;
        return (
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                className="h-screen w-screen  bg-hero-pattern  bg-no-repeat bg-bottoms bg-cover bg-blend-overlay  bg-stone-800"
                style={{ backgroundImage: images[imageIndex], transition: "background-image 1s" }}
                /*className="h-screen w-screen  bg-no-repeat bg-bottoms bg-cover bg-blend-overlay  bg-stone-600"*/
            >
                <Grid
                    justifyContent="center"
                    alignItems="center">
                    <Typography
                        variant={"h4"}
                        className="text-white p-4 font select-none md:text-7xl "
                        style={{ fontFamily: "Arial, sans-serif" }}
                      > MAKING YOUR EVENT Beautiful
                      {/*  <span className="text-yellow-500 font-Helvetica ">MAKING YOUR EVENT </span>
                        <br /> <span> Beautiful </span>*/}
                    </Typography>
                </Grid>

                <Grid
                    container
                    item
                    xs={12}
                    md={3.5}
                    lg={2.8}
                    justifyContent="center"
                    alignItems="center"
                >
                </Grid>
            </Grid>
        );
    }

}

export default HeroWithGrid;
