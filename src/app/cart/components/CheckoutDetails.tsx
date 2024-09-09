import { totalPriceSelector } from "@/lib/redux/cartSlice";
import { useAppSelector } from "@/lib/redux/store";
import Link from "next/link";
import React from "react";

const CheckoutDetails = () => {
	const totalPrice = useAppSelector(totalPriceSelector);
	const vat = 19; // Example VAT value; adjust as needed
	const shippingOptions = [
		{ label: "Free shipping", price: 0 },
		{ label: "Flat rate: $49", price: 49 },
		{ label: "Local pickup: $8", price: 8 },
	];

	const total = totalPrice + vat; // Calculate total including VAT

	return (
		<div className="uppercase sticky top-0 pb-1">
			<div className="w-[26.25rem] max-w-full border-[1px] border-[#222] mb-[1.25rem] py-10 px-10">
				<h3 className="text-base mb-5 font-medium">Cart Totals</h3>
				<table className="w-full border-collapse">
					<tbody>
						<tr className="border-b border-b-[e4e4e4]">
							<th className="text-left p-[.875rem] font-medium text-[.875rem] align-baseline">
								Subtotal
							</th>
							<td className="text-right  p-[.875rem] font-medium text-[.875rem] align-baseline">
								${totalPrice.toFixed(2)}
							</td>
						</tr>
						<tr className="border-b">
							<th className="text-left align-baseline  p-[.875rem] font-medium text-[.875rem]">
								Shipping
							</th>
							<td className="text-left  p-[.875rem] font-medium text-[.875rem] align-baseline">
								{shippingOptions.map((option, index) => (
									<div
										key={index}
										className="flex items-center  p-[.875rem] font-medium text-[.875rem] pl-[1.625rem]"
									>
										<input
											type="checkbox"
											id={`shipping-${index}`}
											className="mr-2"
										/>
										<label htmlFor={`shipping-${index}`}>{option.label}</label>
									</div>
								))}
								<div>Shipping to AL.</div>
								<div>
									<Link href="#" className="">
										CHANGE ADDRESS
									</Link>
								</div>
							</td>
						</tr>
						<tr className="border-b">
							<th className="text-left  p-[.875rem] font-medium text-[.875rem] align-baseline">
								VAT
							</th>
							<td className="text-right  p-[.875rem] font-medium text-[.875rem] align-baseline">
								${vat}
							</td>
						</tr>
						<tr>
							<th className="text-left">Total</th>
							<td className="text-right">${total.toFixed(2)}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-5">
				<Link
					href="/cart/shopping-checkout"
					className="w-full block text-center bg-black text-white py-2"
				>
					PROCEED TO CHECKOUT
				</Link>
			</div>
		</div>
	);
};

export default CheckoutDetails;
