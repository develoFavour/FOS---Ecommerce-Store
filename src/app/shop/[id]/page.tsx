import { fetchProducts } from "@/lib/generateStaticParams";
import { Product } from "../../../../types";
import ProductDetail from "./component/productDetails";
// import ProductDetails from "./components/ProductDetails";

type Props = {
	params: { id: string };
};

const Page = ({ params: { id } }: Props) => {
	return (
		<div className="mt-20">
			<ProductDetail id={id} />
		</div>
	);
};

export async function generateStaticParams() {
	const productData: Promise<Product[]> = fetchProducts();
	const data = await productData;

	return data.map((product: Product) => ({
		id: product.id.toString(),
	}));
}

export default Page;
