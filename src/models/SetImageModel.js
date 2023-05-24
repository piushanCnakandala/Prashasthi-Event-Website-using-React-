import React from "react";
import ModalComponent from "../commponents/dialog";
import upcommingImg from "../assets/img/upcoming.jpg"
import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";


const SetImageModel = ({setShowModal, showModal}) => {

    const facebookProfileUrl = 'https://www.ticketsministry.com/concerts/wayo-live-in-colombo/64607ffddb5db';
    return (
        <ModalComponent setShowModal={setShowModal} showModal={showModal} maxWidth={'sm'}>
            <div >
                <div>
                    <img src={upcommingImg} alt=""/>

                </div>
                    <Grid
                        container
                        item
                        direction="flex"
                        justifyContent="center"
                        className=" font-semibold"
                    >
                       <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer" >
                           <li  className=" font-semibold hover:cursor-pointer hover:shadow-lg hover:text-red-500 hover:scale-105">Book Now</li>
                       </a>

                    </Grid>


            </div>

        </ModalComponent>
    )
}
export default SetImageModel;
