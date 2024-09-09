// import { Product } from "@/app/shop/[id]/page";

import { Product } from "../../types";

export const fetchProducts = async (): Promise<Product[]> => {
	const url = `https://dummyjson.com/products`;
	const options = {
		method: "GET",
		next: { revalidate: 1 },
	};

	const response = await fetch(url, options);
	const result = await response.json();

	// console.log(result);

	return result.products;
};
