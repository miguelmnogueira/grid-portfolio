import React from "react";
import SocialButton from "./SocialButton.jsx";
import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";

const One = () => {
	return (
		<div className="col-span-2 row-span-4 style-block flex flex-col justify-between">
			<div className="max-w-[85%] font-md flex flex-col gap-2 text-lg">
				<div>
					<span className="ml-3 text-sm text-text-sec">welcome</span>
					<p>
						I'm <span className="font-bold">Miguel</span> — a
						Brazilian full-stack developer with a passion for
						turning ideas into clean, functional, and beautiful
						digital experiences.
					</p>
				</div>
				<p>
					Whether you have a project in mind or just want to connect,
					feel free to reach out. Let's build something great
					together.
				</p>
			</div>
			<div className="flex gap-3">
				<SocialButton
					icon={<FaGithub />}
					link="https://github.com/miguelmnogueira"
				/>
				<SocialButton
					icon={<FaDiscord />}
					link="https://github.com/https://miguelmnogueira.github.io/addme-discord-page/"
				/>
				<SocialButton
					icon={<FaLinkedin />}
					link="https://github.com/miguelmnogueira"
				/>
				<SocialButton
					icon={<FaInstagram />}
					link="https://instagram.com/miguelmnogueira"
				/>
			</div>
		</div>
	);
};

export default One;
