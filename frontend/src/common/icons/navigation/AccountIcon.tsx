import { forwardRef } from "react";

const AccountIcon = forwardRef<HTMLOrSVGElement, any>((props, ref) => (
	<svg {...props} ref={ref} viewBox="0 0 27.392 27.392">
		<path d="M13.7,15.408a7.7,7.7,0,1,0-7.7-7.7A7.706,7.706,0,0,0,13.7,15.408Zm6.848,1.712H17.6a9.313,9.313,0,0,1-7.8,0H6.848A6.847,6.847,0,0,0,0,23.968v.856a2.569,2.569,0,0,0,2.568,2.568H24.824a2.569,2.569,0,0,0,2.568-2.568v-.856A6.847,6.847,0,0,0,20.544,17.12Z" />
	</svg>
));

export default AccountIcon;
