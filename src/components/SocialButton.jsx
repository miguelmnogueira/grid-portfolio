import React from "react";

const SocialButton = (props) => {
	return (
		<a
			href={props.link}
			target="_blank"
			className="size-14 backdrop-blur-[20px] rounded-full border-1 border-[#7272723b] flex items-center justify-center text-4xl bg-[#83838334] hover:bg-[#a9a9a933] hover:border-[#7272726b] transition-colors duration-200 ease-initial"
		>
			{props.icon}
		</a>
	);
};

export default SocialButton;
