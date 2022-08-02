import classNames from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";
import SearchIcon from "../icons/navigation/SearchIcon";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, Props>(
	({ className = "", ...props }, ref) => {
		return (
			<div className={classNames("relative w-full max-w-lg", className)}>
				<input
					{...props}
					ref={ref}
					className="rounded-full bg-light-400 w-full pr-20 px-8 py-4 text-2xl focus:outline-blue-500"
				/>
				<SearchIcon className="fill-dark-500 absolute w-7 right-8 top-4" />
			</div>
		);
	}
);

export default SearchInput;
