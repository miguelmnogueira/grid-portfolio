import React from "react";

const Three = () => {
	return (
		<div className="row-span-5 style-block">
			<h3 className="text-2xl font-semibold">About me</h3>
			<div className="flex flex-col text-lg gap-4">
				<p>
					A bit more about me: I’m a fullstack developer, while mainly
					focusing on front-end and design.
				</p>
				<p>
					My primary tools of choice includes:
					<ul className="list-disc pl-9">
						<li>Javascript</li>
						<li>React</li>
						<li>TailwindCSS</li>
						<li>NodeJS</li>
						<li>Express</li>
						<li>MongoDB</li>
					</ul>
				</p>
				<p>
					Beyond coding, i’m passionate about cinematrography and
					design. An unusual hobby of mine is learning new languages,
					as I use it to connect to other people and cultures.
				</p>
			</div>
		</div>
	);
};

export default Three;
