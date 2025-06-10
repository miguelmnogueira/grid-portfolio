import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router";

const Eight = () => {
    return (
        <Link
            to={"./code"}
            className="style-block flex items-center justify-between cursor-pointer animate-fade-in-down py-0"
        >
            <span className="text-3xl">Code projects</span>
            <LuArrowUpRight className="text-3xl mr-2" />
        </Link>
    );
};

export default Eight;
