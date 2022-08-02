import { forwardRef } from "react";

const CartIcon = forwardRef<HTMLOrSVGElement, any>((props, ref) => (
	<svg {...props} ref={ref} viewBox="0 0 30.816 27.392">
		<path d="M28.254,16.12,30.783,4.993a1.284,1.284,0,0,0-1.252-1.569H8.518l-.49-2.4A1.284,1.284,0,0,0,6.769,0H1.284A1.284,1.284,0,0,0,0,1.284V2.14A1.284,1.284,0,0,0,1.284,3.424H5.023L8.781,21.8a3,3,0,1,0,3.587.458H23.584a3,3,0,1,0,3.4-.557l.3-1.3a1.284,1.284,0,0,0-1.252-1.569H11.669l-.35-1.712H27A1.284,1.284,0,0,0,28.254,16.12Z" />
	</svg>
));

export default CartIcon;
