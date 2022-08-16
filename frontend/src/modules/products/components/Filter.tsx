import Heading from "@/common/typography/Heading";
import Skeleton from "@/common/components/Skeleton";
import Checkbox from "@/common/input/Checkbox";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import classNames from "classnames";
import BreadCrumbs from "./BreadCrumbs";
import Error from "@/common/components/Error";
import FilterItem from "./FilterItem";

interface Props {
	className?: string;
	params: Params;
	// initialValues: FilterQueryParams;
}

export default function Filter({ className, params }: Props) {
	/**
	 *
	 *
	 *
	 * Data
	 * */
	// const categories = userCategoriesFilterQuery();
	// const brands = useBrandsQuery();
	// const extra = useExtraFilterQuery();

	/**
	 *
	 *
	 *
	 * State
	 * */

	// const [selectedSortKey, setSelectedSortKey] = useSortKeyParams(
	// 	initialValues.sortKey,
	// 	params
	// );

	// const [selectedCategory, setSelectedCategory] = useCategoryParams(
	// 	initialValues.category,
	// 	params
	// );
	// const [selectedBrands, setSelectedBrands] = useBrandsParams(
	// 	initialValues.brands,
	// 	params
	// );

	// const [selectedAvailability, setSelectedAvailability] = useAvailabilityParams(
	// 	initialValues.availability,
	// 	params
	// );

	// const [selectedExtra, setSelectedExtra] = useExtraParams(
	// 	initialValues.extra,
	// 	params
	// );

	const brands = {
		data: [
			"Apple",
			"Asus",
			"Dell",
			"Lenovo",
			"Microsoft",
			"Samsung",
			"Sony",
			"Toshiba",
			"Acer",
			"D-Link",
			"HP",
			"Huawei",
		],
	};

	const shops = {
		data: [
			"Aldi",
			"Lidl",
			"Carrefour",
			"Super U",
			"Alibaba",
			"Amazon",
			"Baidu",
			"Bing",
		],
	};

	/*


		Classes
	*/
	const selectedClassName = "font-bold";

	/**
	 *
	 *
	 *
	 *
	 * Checking State
	 * */
	// if (categories.isLoading || brands.isLoading || extra.isLoading) {
	// 	return (
	// 		<div className={classNames("flex flex-col gap-24", className)}>
	// 			<Skeleton />

	// 			{Array.from({ length: 5 }, (_, index) => (
	// 				<FilterItem title="" key={index}>
	// 					<li>
	// 						<Skeleton />
	// 					</li>
	// 					<li>
	// 						<Skeleton />
	// 					</li>
	// 					<li>
	// 						<Skeleton />
	// 					</li>
	// 					<li>
	// 						<Skeleton />
	// 					</li>
	// 					<li>
	// 						<Skeleton />
	// 					</li>
	// 				</FilterItem>
	// 			))}
	// 		</div>
	// 	);
	// }

	// if (
	// 	categories.error ||
	// 	brands.error ||
	// 	extra.error ||
	// 	!categories.data ||
	// 	!brands.data ||
	// 	!extra.data
	// ) {
	// 	return (
	// 		<div className={classNames("flex flex-col pt-24", className)}>
	// 			<Error title="Oepsss er iets misgegaan" />
	// 		</div>
	// 	);
	// }

	/**
	 *
	 *
	 *
	 *
	 * Rendering
	 * */

	return (
		<div className={classNames("hidden xl:flex flex-col gap-16", className)}>
			{/* 
			
			
			
				Filter
			*/}
			<div className="flex flex-col gap-24">
				{/* 
				
				
				
				
				
				
				
				
				
				
				
				
				
				
					Sorting
				*/}
				<FilterItem title="Sorteren">
					{[
						{
							title: "Relevantie",
							// value: ProductSortKey.RELEVANCE,
						},
						{
							title: "Best verkocht",
							// value: ProductSortKey.BEST_SELLING,
						},
						{
							title: "Prijs Oplopend",
							// value: ProductSortKey.PRICE,
						},
						// {
						// 	title: "Prijs Aflopend",
						// 	value: ProductSortKey.PRICE,
						// },
						{
							title: "Alfabetisch",
							// value: ProductSortKey.TITLE,
						},
						{
							title: "Nieuwste",
							// value: ProductSortKey.CREATED_AT,
						},
					].map(({ title }, index) => {
						return (
							<li
								className="opacity-50 cursor-pointer hover:opacity-100"
								key={index}
								// onClick={() => setSelectedSortKey(value)}
								// className={selectedSortKey === value ? selectedClassName : ""}
							>
								{title}
							</li>
						);
					})}
				</FilterItem>
				{/* 
							
							
							
							
							
							
							
							
							
							
							
							
							
							
					Brands
				*/}
				<FilterItem title="Merken">
					{brands.data.map((brand, index) => {
						return (
							<li
								key={index}
								// className={
								// 	selectedBrands && selectedBrands.includes(brand)
								// 		? selectedClassName
								// 		: ""
								// }
							>
								<Checkbox
									label={brand}
									labelClassName="opacity-50 cursor-pointer hover:opacity-100"
									// checked={selectedBrands && selectedBrands.includes(brand)}
									// onChange={() => setSelectedBrands(brand)}
								/>
							</li>
						);
					})}
				</FilterItem>
				{/* 
							
							
							
							
							
							
							
							
							
							
							
							
							
							
					Brands
				*/}
				<FilterItem title="Winkels">
					{shops.data.map((brand, index) => {
						return (
							<li
								key={index}
								// className={
								// 	selectedBrands && selectedBrands.includes(brand)
								// 		? selectedClassName
								// 		: ""
								// }
							>
								<Checkbox
									label={brand}
									labelClassName="opacity-50 cursor-pointer hover:opacity-100"

									// checked={selectedBrands && selectedBrands.includes(brand)}
									// onChange={() => setSelectedBrands(brand)}
								/>
							</li>
						);
					})}
				</FilterItem>
				{/* 
							
							
							
							
							
							
							
							
							
							
							
							
							
							
					Availability
				*/}
				<FilterItem title="Beschikbaarheid">
					{[
						{
							title: "Op Voorraad",
							// value: ProductAvailabilityState.IN_STOCK,
						},
						{
							title: "Niet op Voorraad",
							// value: ProductAvailabilityState.OUT_OF_STOCK,
						},
					].map(({ title }, index) => {
						return (
							<li
								key={index}
								className="opacity-50 cursor-pointer hover:opacity-100"

								// onClick={() => setSelectedAvailability(value)}
								// className={
								// 	selectedAvailability === value ? selectedClassName : ""
								// }
							>
								{title}
							</li>
						);
					})}
				</FilterItem>
			</div>
		</div>
	);
}
