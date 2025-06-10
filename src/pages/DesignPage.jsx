import React from "react";
import { Link } from "react-router";

const DesignPage = () => {
    return (
        <div
            className="absolute -z-10 inset-0 h-full w-full 
  bg-[radial-gradient(circle,#29292954_2px,transparent_3px),linear-gradient(to_bottom,#100f0f,#1a1818)] 
  bg-[size:30px_30px,100%] flex justify-center pt-10 pb-25 overflow-hidden"
        >
            <Link
                to="../grid-portfolio"
                className="px-4 py-2 text-lg style-block p-0 fixed top-5 left-8"
            >
                Back
            </Link>
            <h1 className="text-4xl">Work In Progress.</h1>
        </div>
    );
};

export default DesignPage;
