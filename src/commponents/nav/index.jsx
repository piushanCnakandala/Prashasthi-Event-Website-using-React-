import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import CommonButton from "../common/button";
import { styleSheet } from "./style";
import {withStyles} from "@mui/styles";
import {Link} from "react-router-dom";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar color="transparent" position={"fixed"}>
                <nav className="flex justify-between items-center h-16 px-12 bg-zinc-800 bg-opacity-25 p-10 backdrop-blur-sm">
                    <div>
                        <Typography
                            variant={"h5"}
                            className="text-white font-serif font-family: Georgia  tracking-wide select-none"
                        >
                            ප්‍රශස්ති
                        </Typography>
                    </div>

                    <ul className="text-white flex justify-center gap-4 font-semibold ">
                       <Link to="/">
                           <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">HOME</li>
                       </Link>
                        <Link to="/about">
                            <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">ABOUT US</li>
                        </Link>
                        <Link to="/contact">
                            <li className="hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">CONTACT US</li>
                        </Link>

                    </ul>
                    <div className="flex w-1/18 justify-end gap-3">
                        <CommonButton
                            size="large"
                            variant="outlined"
                            label="UPCOMING EVENTS"
                            className="text-white border-white hover:bg-white hover:text-black"
                            onClick={() => this.setState({ open: true })}
                        />
                    </div>
                </nav>
            </AppBar>
        );
    }
}

export default withStyles(styleSheet)(NavBar);
