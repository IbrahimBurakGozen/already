import { forwardRef } from "react";

const SearchIcon = forwardRef<HTMLOrSVGElement, any>((props, ref) => (
	<svg {...props} ref={ref} viewBox="0 0 25.676 25.68">
		<path d="M25.327,22.2l-5-5a1.2,1.2,0,0,0-.853-.351h-.817a10.427,10.427,0,1,0-1.805,1.805v.817a1.2,1.2,0,0,0,.351.853l5,5a1.2,1.2,0,0,0,1.7,0l1.419-1.419A1.209,1.209,0,0,0,25.327,22.2Zm-14.9-5.351a6.419,6.419,0,1,1,6.419-6.419A6.416,6.416,0,0,1,10.432,16.851Z" />
	</svg>
));

export default SearchIcon;
