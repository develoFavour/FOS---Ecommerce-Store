import { Product } from "../../types";

export const fetchMaleProducts = async (): Promise<Product[]> => {
	// const url = "https://api.escuelajs.co/api/v1/products";
	const url = "https://dummyjson.com/products/category/mens-shirts";
	const options = {
		method: "GET",
	};

	const response = await fetch(url, options);
	const result = await response.json();
	const products = result.products;

	return products;
};
export const fetchFemaleProducts = async (): Promise<Product[]> => {
	const url = "https://dummyjson.com/products/category/womens-dresses";
	const options = {
		method: "GET",
	};

	const response = await fetch(url, options);
	const result = await response.json();
	const products = result.products;

	return products;
};
export const fetchSportProducts = async (): Promise<Product[]> => {
	const url = "https://dummyjson.com/products/category/sports-accessories";
	const options = {
		method: "GET",
	};

	const response = await fetch(url, options);
	const result = await response.json();
	const products = result.products;

	return products;
};
export const getProductById = async (id: string): Promise<Product> => {
	const url = `https://dummyjson.com/products/${id}`;
	const options = {
		method: "GET",
	};

	const response = await fetch(url, options);
	const result = await response.json();

	return result;
};
export const fetchLaptop = async () => {
	try {
		const response = await fetch(
			"https://dummyjson.com/products/category/laptops"
		);
		const data = await response.json();
		if (!response.ok) {
			return data;
		}
		return data.products;
	} catch (error: any) {
		return error.message;
	}
};
export const fetchProductsByCategory = async (category: string) => {
	try {
		const response = await fetch(
			`https://dummyjson.com/products/category/${category}`
		);
		const data = await response.json();
		if (!response.ok) {
			return data.message;
		}
		console.log(data);

		return data.products;
	} catch (error: any) {
		return error.message;
	}
};
export const fetchAllProducts = async (): Promise<Product[]> => {
	const url = `https://dummyjson.com/products`;
	const options = {
		method: "GET",
	};

	const response = await fetch(url, options);
	const result = await response.json();

	return result;
};
