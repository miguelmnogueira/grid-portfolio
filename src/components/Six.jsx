import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router";

const Six = () => {
    return (
        <Link
            to={"./design"}
            className="style-block flex items-center justify-between cursor-pointer animate-fade-in-down py-0"
        >
            <span className="text-3xl">Design works</span>
            <LuArrowUpRight className="text-3xl mr-2" />
        </Link>
    );
};

export default Six;
