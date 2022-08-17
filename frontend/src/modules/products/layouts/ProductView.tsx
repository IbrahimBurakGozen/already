import Error from "@/common/components/Error";
import Spinner from "@/common/components/Spinner";
import { Product } from "../utils/types";
import { useRouter } from "next/router";
import WishlistButton from "@/modules/products/components/WishlistButton";
import CloseIcon from "@/common/icons/actions/CloseIcon";
import BreadCrumbs from "../components/BreadCrumbs";
import ImageList from "../components/ImageList";
import ProductViewNav from "../components/ProductViewNav";
import ProductOptions from "../components/ProductOptions";
import { useOptionsHook } from "../hooks/option.hook";
import Heading from "@/common/typography/Heading";
import Paragraph from "@/common/typography/Paragraph";
import { useCart } from "@/modules/cart/hooks/cart";
import { useWishlist } from "@/modules/cart/hooks/wishlist";

interface Props {
	product: Product;
	isLoading: boolean;
	error: unknown | null;
}

export default function ProductView({ product, isLoading, error }: Props) {
	const router = useRouter();

	const cart = useCart();
	const wishlist = useWishlist();

	const [currentVariant, selectedOptions, setSelectedOptions] =
		useOptionsHook(product);

	if (isLoading) {
		return (
			<div className="min-h-[80vh] w-full flex flex-col justify-center items-center">
				<Spinner className="w-12 md:w-20" />
			</div>
		);
	}

	if (error || !product) {
		return <Error title="Product is niet gevonden" />;
	}

	function handleAddToWishlist() {
		wishlist.addLine.mutateAsync({ id: product.variants[currentVariant].id });
	}

	return (
		<section className="flex flex-col gap-16">
			{/* 
                
                
            	BreadCrumbs
            */}
			<div className="flex flex-row justify-between items-center">
				<BreadCrumbs
					breadcrumbs={[
						{
							name: "Home",
							url: "/",
						},
						{
							name: "Categorieën",
							url: "/categories",
						},
						{
							name: product.category.title,
							url: `/products?category=${product.category.id}`,
						},
						{
							name: product.title,
						},
					]}
				/>

				<div className="flex flex-row justify-end gap-10">
					<WishlistButton
						callback={handleAddToWishlist}
						className="w-7 cursor-pointer"
					/>
					<CloseIcon
						onClick={() => router.back()}
						className="w-6 cursor-pointer"
					/>
				</div>
			</div>
			{/* 
			
			
			
				Second Row
			*/}
			<div className="grid grid-cols-1 lg:grid-cols-[25%_auto_25%] gap-24">
				{/* 
                
                
                
                    ImageList
            	*/}
				<ImageList images={product.images} />
				{/* 
                
                
                
                    ProductInfo
                */}
				<div className="flex flex-col gap-28">
					<div className="flex flex-col gap-8">
						<Heading
							maxCharacters={25}
							type="h2"
							color="blue"
							// className="text-xl md:text-2xl lg:text-3xl"
						>
							{product.title}
						</Heading>

						<Paragraph color="dark" size="small" maxCharacters={80}>
							{product.description}
						</Paragraph>
					</div>

					<ProductOptions
						options={product.options}
						selectedOptions={selectedOptions}
						setSelectedOptions={setSelectedOptions}
					/>
				</div>
				{/* 
			
			
					ProductViewNav
				*/}
				<ProductViewNav
					product={product}
					currentVariant={currentVariant}
					addToCart={cart.addLine.mutate}
				/>
			</div>
		</section>
	);
}
