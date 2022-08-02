import { createElement, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
	direction:
		| "left-to-right"
		| "right-to-left"
		| "top-to-bottom"
		| "bottom-to-top";
}

export default function Arrow({
	direction = "right-to-left",
	...props
}: Props) {
	const directions = {
		"left-to-right": (
			<svg {...props} viewBox="0 0 154 61.075">
				<path
					d="M-367.818,90.916-393.265,65.47a5.018,5.018,0,0,0-3.594-1.495,5.065,5.065,0,0,0-3.6,1.491,5.087,5.087,0,0,0,0,7.2l16.766,16.759H-515.237a5.087,5.087,0,0,0-5.089,5.089,5.087,5.087,0,0,0,5.089,5.089h131.547l-16.763,16.763a5.087,5.087,0,0,0,0,7.2,5.087,5.087,0,0,0,7.2,0l25.446-25.446A5.1,5.1,0,0,0-367.818,90.916Z"
					transform="translate(520.326 -63.975)"
				/>
			</svg>
		),
		"right-to-left": (
			<svg {...props} viewBox="0 0 154 61.075">
				<path
					d="M-367.818,90.916-393.265,65.47a5.018,5.018,0,0,0-3.594-1.495,5.065,5.065,0,0,0-3.6,1.491,5.087,5.087,0,0,0,0,7.2l16.766,16.759H-515.237a5.087,5.087,0,0,0-5.089,5.089,5.087,5.087,0,0,0,5.089,5.089h131.547l-16.763,16.763a5.087,5.087,0,0,0,0,7.2,5.087,5.087,0,0,0,7.2,0l25.446-25.446A5.1,5.1,0,0,0-367.818,90.916Z"
					transform="translate(-366.326 125.05) rotate(180)"
				/>
			</svg>
		),
		"top-to-bottom": (
			<svg {...props} viewBox="0 0 61.076 154">
				<path
					d="M-367.818,90.916-393.265,65.47a5.018,5.018,0,0,0-3.594-1.495,5.065,5.065,0,0,0-3.6,1.491,5.087,5.087,0,0,0,0,7.2l16.766,16.759H-515.237a5.087,5.087,0,0,0-5.089,5.089,5.087,5.087,0,0,0,5.089,5.089h131.547l-16.763,16.763a5.087,5.087,0,0,0,0,7.2,5.087,5.087,0,0,0,7.2,0l25.446-25.446A5.1,5.1,0,0,0-367.818,90.916Z"
					transform="translate(125.05 520.326) rotate(90)"
				/>
			</svg>
		),
		"bottom-to-top": (
			<svg {...props} viewBox="0 0 61.076 154">
				<path
					d="M-367.818,90.916-393.265,65.47a5.018,5.018,0,0,0-3.594-1.495,5.065,5.065,0,0,0-3.6,1.491,5.087,5.087,0,0,0,0,7.2l16.766,16.759H-515.237a5.087,5.087,0,0,0-5.089,5.089,5.087,5.087,0,0,0,5.089,5.089h131.547l-16.763,16.763a5.087,5.087,0,0,0,0,7.2,5.087,5.087,0,0,0,7.2,0l25.446-25.446A5.1,5.1,0,0,0-367.818,90.916Z"
					transform="translate(-63.975 -366.326) rotate(-90)"
				/>
			</svg>
		),
	};

	return directions[direction];
}
