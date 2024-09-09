import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product } from "../../../types";
import { RootState } from "./store";

export interface CartState {
	cartItem: Cart[];
}
const initialState: CartState = {
	cartItem: [],
};
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		increament: (state, action: PayloadAction<Product>) => {
			const existingItem = state.cartItem.find(
				(item) => item.product.id === action.payload.id
			);
			if (existingItem) {
				existingItem.qty++;
			} else {
				state.cartItem.push({
					product: action.payload,
					qty: 1,
				});
			}
			console.log("cart", state.cartItem);
		},
		decrement: (state, action: PayloadAction<Product>) => {
			const existingItem = state.cartItem.find(
				(item) => item.product.id === action.payload.id
			);
			if (existingItem && existingItem.qty > 1) {
				existingItem.qty--;
			} else if (existingItem && existingItem.qty === 1) {
				alert("Cannot decrement quantity below 1");
			}
		},
		removeItemFromCart: (state, action: PayloadAction<Product>) => {
			state.cartItem = state.cartItem.filter(
				(item) => item.product.id !== action.payload.id
			);
		},
	},
	extraReducers: (builder) => {},
});
export const cartItems = (state: RootState) => state.cart.cartItem;
export const totalCartItemSelector = createSelector([cartItems], (cartItems) =>
	cartItems.reduce((total: number, curr: Cart) => (total += curr.qty), 0)
);
export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
	cartItems.reduce(
		(total: number, curr: Cart) => (total += curr.qty * curr.product.price),
		0
	)
);
export const { increament, decrement, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
