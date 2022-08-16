import { useCallback, useEffect, useState } from "react";
import { Product, ProductSelectedOption, ProductVariant } from "../utils/types";

export function useOptionsHook(product: Product): [
	number,
	{
		[key: string]: string;
	},
	(option: string, value: string) => void
] {
	const [initial, setInitial] = useState(false);
	const [currentVariant, setCurrentVariant] = useState(0);
	const [selectedOptions, setSelectedOptions] = useState(
		{} as { [key: string]: string }
	);

	/**
	 *
	 * Initializes the selected options with the first variant's options.
	 */
	useEffect(() => {
		if (product && !initial) {
			const initialOption = product.variants[0].selectedOptions.reduce(
				(acc: { [key: string]: string }, curr: ProductSelectedOption) => {
					acc[curr.name] = curr.value;
					return acc;
				},
				{} as { [key: string]: string }
			);

			setSelectedOptions(initialOption);
			setInitial(true);
		}
	}, [product]);

	/**
	 *
	 * @param option option name
	 * @param value option value
	 * @description updates the selected options and the current variant
	 * @returns void
	 */
	const setSelectedOptionCallback = useCallback(
		(option: string, value: string) => {
			//Create a new object with the new option and value
			const refactoredOptions: ProductSelectedOption[] = [];

			// Add the new option and value to the selectedOptions
			const newOptions = { ...selectedOptions, [option]: value };

			//Iterate through the selected options and add the new option to the array if it doesn't exist
			for (const [key, value] of Object.entries(newOptions)) {
				refactoredOptions.push({
					name: key,
					value: value,
				});
			}

			// Check if the new option is in the variant's options
			const variant = product.variants.find(
				(variant: ProductVariant) =>
					JSON.stringify(refactoredOptions) ===
					JSON.stringify(variant.selectedOptions)
			);

			// If the new option is in the variant's options, set the current variant to the variant's index
			if (variant) {
				setCurrentVariant(product.variants.indexOf(variant));
				setSelectedOptions(newOptions);
			}
		},
		[selectedOptions, product]
	);

	return [currentVariant, selectedOptions, setSelectedOptionCallback];
}
