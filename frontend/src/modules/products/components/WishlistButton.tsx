import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
	className?: string;
	initialState?: boolean;
	callback: () => void;
}

export default function WishlistButton({
	callback,
	initialState = false,
	className = "",
}: Props) {
	const [toggle, setToggleState] = useState(initialState);

	const animation = {
		initial: {
			scale: [0.5, 1],
			stroke: "#E94B23",
			fill: "none",
			transition: {
				duration: 0.5,
			},
		},
		clicked: {
			scale: [1.5, 1],
			fill: "#E94B23",
			stroke: "none",
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.svg
			viewBox="0 0 25.898 22.912"
			className={className}
			onClick={() => {
				setToggleState((toggle) => !toggle);
				callback();
			}}
			animate={toggle ? animation.clicked : animation.initial}
		>
			<motion.path
				d="M20.673,3.609a6.143,6.143,0,0,0-8.344.6l-.881.9-.881-.9a6.142,6.142,0,0,0-8.344-.6,6.354,6.354,0,0,0-.443,9.239l8.653,8.879a1.408,1.408,0,0,0,2.026,0l8.653-8.879a6.35,6.35,0,0,0-.438-9.239Z"
				transform="translate(1.502 -0.745)"
				strokeWidth="3"
			/>
		</motion.svg>
	);
}
