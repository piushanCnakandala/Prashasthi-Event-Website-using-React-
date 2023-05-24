import React from "react";
import "./style.css"
import {Dialog} from "@material-ui/core";
import Icon from "@mui/material/Icon";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CloseIcon from '@mui/icons-material/Close';

export default function ModalComponent({children, showModal = false, setShowModal, maxWidth}) {
    return (
        <Dialog open={showModal} maxWidth={maxWidth}
                onClose={() => setShowModal(false)}>
            {/*<Icon className='model-icon-button' fontSize="large" onClick={() => setShowModal(false)}>close</Icon>*/}
            <CloseIcon className='model-icon-button' text="red" fontSize="large" onClick={() => setShowModal(false)}/>
            {children}
        </Dialog>
    );
}
