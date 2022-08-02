import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "src/utils/hooks";

export function useProductParamsHook(params: Params) {
	return useParams(
		"category",
		params,
		params?.category,
		(newValue, oldValue) => newValue
	);
}
