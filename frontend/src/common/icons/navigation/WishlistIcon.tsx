import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

const WishlistIcon = forwardRef<HTMLOrSVGElement, any>((props, ref) => (
	<svg {...props} ref={ref} viewBox="0 0 25.898 22.912">
		<path
			d="M20.673,3.609a6.143,6.143,0,0,0-8.344.6l-.881.9-.881-.9a6.142,6.142,0,0,0-8.344-.6,6.354,6.354,0,0,0-.443,9.239l8.653,8.879a1.408,1.408,0,0,0,2.026,0l8.653-8.879a6.35,6.35,0,0,0-.438-9.239Z"
			transform="translate(1.502 -0.745)"
			strokeWidth="3"
		/>
	</svg>
));

export default WishlistIcon;
