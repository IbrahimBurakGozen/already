import { useEffect, useState } from "react";

export function useCarlineQuantity(
	quantity: number
): [number, (newQuantity: number) => void] {
	const [currentQuantity, setCurrentQuantity] = useState(quantity);

	useEffect(() => {
		setCurrentQuantity(quantity);
	}, [quantity]);

	return [currentQuantity, setCurrentQuantity];
}
