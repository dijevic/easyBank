import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

// styles
import styles from '../../scss/common/loader.module.scss';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#2D314D",
};





export const Loader = () => {

    return (

        <div className={styles.container}>

            <ClipLoader
                color="#2D314D"
                loading={true}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            <p>Loading ...</p>
        </div>
    )
}