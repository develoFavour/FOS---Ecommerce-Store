"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Review = {
	reviewerName: string;
	date: string;
	rating: number;
	comment: string;
};

interface Products {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	sku: string;
	weight: number;
	dimensions: {
		width: number;
		height: number;
		depth: number;
	};
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	returnPolicy: string;
	reviews: Review[];
	minimumOrderQuantity: number;
	meta: {
		createdAt: string;
		updatedAt: string;
		barcode: string;
		qrCode: string;
	};
	images: string[];
	thumbnail: string;
}

interface ProductState {
	products: Products[];
	productById: Products | null;
	maleProducts: Products[];
	productByCategory: Products[] | null;
	femaleProducts: Products[];
	sportProducts: Products[];
	laptopProducts: Products[];
	loading: boolean;
	error: null | string;
}

const initialState: ProductState = {
	products: [],
	productById: null,
	productByCategory: [],
	maleProducts: [],
	femaleProducts: [],
	sportProducts: [],
	laptopProducts: [],
	loading: false,
	error: null,
};

export const fetchAllProducts = createAsyncThunk<Products[]>(
	"products/getAllProducts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch("https://dummyjson.com/products");
			const data = await response.json();
			if (!response.ok) {
				return rejectWithValue(data.message);
			}
			console.log(data, "product by id");

			return data.products;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchProductById = createAsyncThunk<Products, string>(
	"products/getProductById",
	async (id: string, { rejectWithValue }) => {
		try {
			const response = await fetch(`https://dummyjson.com/products/${id}`);
			const data = await response.json();
			if (!response.ok) {
				return rejectWithValue(data.message);
			}
			return data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchProductsByCategory = createAsyncThunk<Products, string>(
	"products/getProductsByCategory",
	async (category: string, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://dummyjson.com/products/category/${category}`
			);
			const data = await response.json();
			if (!response.ok) {
				return rejectWithValue(data.message);
			}
			return data.products;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchMaleProducts = createAsyncThunk<Products[]>(
	"products/getMaleProducts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"https://dummyjson.com/products/category/mens-shirts"
			);
			const data = await response.json();
			if (!response.ok) {
				return rejectWithValue(data.message);
			}
			return data.products;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchFemaleProducts = createAsyncThunk<Products[]>(
	"products/getFemaleProducts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"https://dummyjson.com/products/category/womens-dresses"
			);
			const data = await response.json();
			if (!response.ok) {
				return rejectWithValue(data.message);
			}
			return data.products;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchSportProducts = createAsyncThunk<Products[]>(
	"products/getSportProducts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"https://dummyjson.com/products/category/sports-accessories"
			);
			const data = await response.json();
			if (!response.ok) {
				return rejectWithValue(data.message);
			}
			return data.products;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);
export const fetchLaptop = createAsyncThunk(
	"products/getLaptop",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"https://dummyjson.com/products/category/laptops"
			);
			const data = await response.json();
			if (!response.ok) {
				return rejectWithValue(data);
			}
			return data.products;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAllProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(
				fetchAllProducts.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload as string;
				}
			)
			.addCase(fetchProductById.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProductById.fulfilled, (state, action) => {
				state.loading = false;
				state.productById = action.payload;
			})
			.addCase(
				fetchProductById.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload as string;
				}
			)
			.addCase(fetchProductsByCategory.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
				state.loading = false;
				state.productByCategory = action.payload as unknown as Products[];
			})
			.addCase(
				fetchProductsByCategory.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload as string;
				}
			)
			.addCase(fetchMaleProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchMaleProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.maleProducts = action.payload;
			})
			.addCase(
				fetchMaleProducts.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload as string;
				}
			)
			.addCase(fetchFemaleProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchFemaleProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.femaleProducts = action.payload;
			})
			.addCase(
				fetchFemaleProducts.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload as string;
				}
			)
			.addCase(fetchSportProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchSportProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.sportProducts = action.payload;
			})
			.addCase(
				fetchSportProducts.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false;
					state.error = action.payload as string;
				}
			)
			.addCase(fetchLaptop.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchLaptop.fulfilled, (state, action) => {
				state.loading = false;
				state.laptopProducts = action.payload;
			})
			.addCase(fetchLaptop.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});
export const selectAllProducts = (state: RootState) => state.product.products;
export const selectLoading = (state: RootState) => state.product.loading;
export const selectProductById = (state: RootState) =>
	state.product.productById;
export const selectProductsByCategory = (state: RootState) =>
	state.product.productByCategory;
export const selectMaleProducts = (state: RootState) =>
	state.product.maleProducts;
export const selectFemaleProducts = (state: RootState) =>
	state.product.femaleProducts;
export const selectSportProducts = (state: RootState) =>
	state.product.sportProducts;
export const selectLaptops = (state: RootState) => state.product.laptopProducts;
export default productSlice.reducer;
