import React from "react";

const Three = () => {
	return (
		<div className="row-span-5 style-block">
			<h3 className="text-2xl font-semibold">About me</h3>
			<div className="flex flex-col text-lg gap-3 ">
				<p className="text-[#ececec]">
					A bit more about me: I’m a fullstack developer, while mainly
					focusing on front-end and design.
				</p>
				<div>
					<p className="text-[#ececec]">
						My primary tools of choice includes:
					</p>
					<ul className="list-disc pl-9 ">
						<li className="text-[#ececec]">Javascript</li>
						<li className="text-[#ececec]">React</li>
						<li className="text-[#ececec]">TailwindCSS</li>
						<li className="text-[#ececec]">NodeJS</li>
						<li className="text-[#ececec]">Express</li>
						<li className="text-[#ececec]">MongoDB</li>
					</ul>
				</div>
				<p className="text-[#ececec]">
					Beyond coding, i’m passionate about cinematrography and
					design. An unusual hobby of mine is learning new languages,
					as I use it to connect to other people and cultures.
				</p>
			</div>
		</div>
	);
};

export default Three;
