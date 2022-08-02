import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "src/utils/hooks";

export function useCategoryParamsHook(params: Params) {
	return useParams(
		"parent",
		params,
		params?.parent,
		(newValue, oldValue) => newValue
	);
}
