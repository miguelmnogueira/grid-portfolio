import React from "react";
import { Link } from "react-router";
import Project from "../components/Project";

const CodePage = () => {
    return (
        <div
            className='absolute -z-10 inset-0 h-[120vh]
    bg-[radial-gradient(circle,#29292954_2px,transparent_3px),linear-gradient(to_bottom,#100f0f,#1a1818)] 
    bg-[size:30px_30px,100%] flex justify-center pt-10 pb-25 overflow-hidden"'
        >
            <Link
                to="../grid-portfolio"
                className="px-4 py-2 text-lg style-block p-0 fixed top-5 left-8"
            >
                Back
            </Link>
            <main
                className="grid auto-rows-[450px] grid-cols-3
    gap-[19px] max-w-[75%] gap-y-10"
            >
                <Project
                    title={"Recycling Project"}
                    img={"./recycle.png"}
                    description={
                        "A landing page website for a recycling project, showcasing the importance of recycling and how to get involved. The page features a clean design with vibrant colors and engaging content to encourage users to participate."
                    }
                />
                <Project
                    title={"Agnus Dei"}
                    img={"./agnus.png"}
                    description={
                        "A selling page website for shirts, featuring a modern design with a focus on product showcase. The page includes high-quality images, detailed product descriptions, and an easy-to-navigate layout to enhance the shopping experience."
                    }
                />
                <Project
                    title={"Laço Amarelo"}
                    img={"./laco-amarelo.png"}
                    description={
                        "A landing page website as a photography portfolio, designed to showcase the photographer's work. The page features a minimalist design with a focus on high-quality images, allowing visitors to easily browse through the portfolio and appreciate the artistry."
                    }
                />
            </main>
        </div>
    );
};

export default CodePage;
