import React, { useState, useRef, useEffect } from "react";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";
import Ten from "../components/Ten";

const Main = () => {
	const [mousePosition, setMousePosition] = useState({ x: 150, y: 150 });
	const ballRef = useRef({ x: 500, y: 500 });
	const [, setTick] = useState(0);

	useEffect(() => {
		const updateMousePosition = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	useEffect(() => {
		let animationFrameId;

		const animate = () => {
			const ease = 0.01;

			const dx = mousePosition.x - ballRef.current.x;
			const dy = mousePosition.y - ballRef.current.y;

			ballRef.current.x += dx * ease;
			ballRef.current.y += dy * ease;

			setTick((tick) => tick + 1);

			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		return () => cancelAnimationFrame(animationFrameId);
	}, [mousePosition]);

	return (
		<div
			className="absolute -z-10 inset-0 h-full w-full 
  bg-[radial-gradient(circle,#29292954_2px,transparent_3px),linear-gradient(to_bottom,#181717,#090909)] 
  bg-[size:25px_25px,100%] flex justify-center pt-10 pb-25"
		>
			<main
				className="grid grid-rows-[2fr_2fr_2fr_2fr_3fr_3fr_3fr]
 grid-cols-4 gap-[19px] max-w-[75%]"
			>
				<One />
				<Two />
				<Three />
				<Four />
				<Five />
				<Six />
				<Seven />
				<Eight />
				<Nine />
				<Ten />
				<div
					className="size-40 rounded-full bg-red-500 blur-[50px] absolute origin-center -z-1"
					style={{
						left: ballRef.current.x - 50,
						top: ballRef.current.y - 50,
					}}
				></div>
			</main>
		</div>
	);
};

export default Main;
