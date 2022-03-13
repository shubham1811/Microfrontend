import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => {
    return createStyles({
        barcolor: {
            color: "red",
            width: "100%",
            top: "50%",
            position: "relative",
            left: "50%"
        }
    });
});

const progressBar = () => {
    console.log("Shubham Kumar");
    const classes = useStyles();
    return (
        <div className={classes.barcolor}>
            loading....
        </div>
    )
}

export default progressBar;