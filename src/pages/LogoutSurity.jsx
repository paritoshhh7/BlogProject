import React from "react";
import { useNavigate, Link } from "react-router-dom";

function LogoutSurity(props) {

    let st = props.stat;
    st ? props.setter(true) : null;

    return (
        <div></div>
    );
}

export default LogoutSurity;