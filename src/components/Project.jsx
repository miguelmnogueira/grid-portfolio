import React from "react";

const Project = ({ title, img, description }) => {
    return (
        <a className="cursor-pointer group flex flex-col items-center w-full  p-0 style-block text-white rounded-lg shadow-lg relative gap-5">
            <div className="h-[55%] w-full overflow-hidden rounded-t-lg">
                <img
                    src={img}
                    alt=""
                    className="object-cover h-full w-full transition-all rounded-t-lg group-hover:scale-105 "
                />
            </div>
            <div className="h-34  w-full px-5 flex flex-col justify-between gap-2">
                <div>
                    <h4 className="font-bold text-[#979797] text-md ">
                        LANDING PAGE
                    </h4>
                    <h4 className="font-bold text-2xl">{title}</h4>
                </div>
                <p className="text-ellipsis overflow-hidden">
                    {description}
                </p>
            </div>
        </a>
    );
};

export default Project;
