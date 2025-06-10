import React, { useState, useEffect } from "react";

const Five = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const utcMinus3 = new Date(
                now.getTime() - 3 * 60 * 60 * 1000
            );

            const hours = String(utcMinus3.getUTCHours()).padStart(
                2,
                "0"
            );
            const minutes = String(
                utcMinus3.getUTCMinutes()
            ).padStart(2, "0");

            setTime(`${hours}:${minutes}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="style-block bg-block-bg-sec text-center flex items-center justify-center bg-[#080808d5] px-0 animate-fade-in-down">
            <div className="flex gap-2 items-end">
                <span className="text-5xl font-[Zodiak]">{time}</span>
                <span className="text-xl font-[Zodiak]">UTC-3</span>
            </div>
        </div>
    );
};

export default Five;
