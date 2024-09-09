"use client";
import {
	cartItems,
	decrement,
	increament,
	removeItemFromCart,
	totalPriceSelector,
} from "@/lib/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import CheckoutDetails from "./components/CheckoutDetails";

const CartPage = () => {
	const cartData = useAppSelector(cartItems);
	const dispatch = useAppDispatch();
	const totalPrice = useAppSelector(totalPriceSelector);

	return (
		<div className="flex flex-row gap-[3.625rem] min-h-[calc(-300px + 100vh)]">
			<div className="grow overflow-y-auto">
				<table className="w-full">
					<thead>
						<tr>
							<th className="text-[.875rem] uppercase font-medium px-0 py-2">
								Product
							</th>
							<th className="text-[.875rem] uppercase font-medium px-0 py-2">
								Details
							</th>
							<th className="text-[.875rem] uppercase font-medium px-0 py-2">
								Price
							</th>
							<th className="text-[.875rem] uppercase font-medium px-0 py-2">
								Quantity
							</th>
							<th className="text-[.875rem] uppercase font-medium px-0 py-2">
								Subtotal
							</th>
							<th className="text-[.875rem] uppercase font-medium px-0 py-2"></th>
						</tr>
					</thead>

					<tbody>
						{cartData.map(({ product }) => (
							<tr
								key={product.id}
								className="border-t-[.1px] border-gray-200 mt-3"
							>
								<td className="p-[1.875rem] table-cell m-0 mt-1">
									<div className="overflow-hidden max-h-[12rem]">
										<Image
											style={{ width: "7rem", height: "auto" }}
											src={product.images[0]}
											alt="banner"
											height={220}
											width={220}
											objectFit="cover"
										/>
									</div>
								</td>
								<td>
									<div className="overflow-hidden max-h-[12rem]">
										<h4 className="text-base font-normal mb-0">
											{product.title}
										</h4>
										<ul className="p-0 m-[.5rem 0 0]">
											<li className="text-[.875rem] text-[#767676]">
												Dimension:{" "}
												{`${product.dimensions.width}cm x ${product.dimensions.height}cm x ${product.dimensions.depth}cm`}
											</li>
											<li className="text-[.875rem] text-[#767676]">
												{product.brand ? "Brand" : "Category"}:{" "}
												{product.brand
													? product.brand
													: product.category.replace("-", " ")}
											</li>
										</ul>
									</div>
								</td>
								<td className="p-[14px]">
									<span>${product.price}</span>
								</td>
								<td>
									<div className="w-[7.25rem] m-0 relative border-2 border-[#e4e4e4] rounded-md">
										<div className="flex items-center justify-between h-[3.125rem]">
											<div
												className="cursor-pointer select-none mx-2"
												onClick={() => dispatch(decrement(product))}
											>
												-
											</div>
											<input
												min={1}
												value={
													cartData.find(
														(item) => item.product.id === product.id
													)?.qty || 1
												}
												name="quantity"
												className="h-full w-[3rem] text-center outline-none"
												readOnly
											/>
											<div
												className="cursor-pointer select-none mx-2"
												onClick={() => dispatch(increament(product))}
											>
												+
											</div>
										</div>
									</div>
								</td>
								<td className="p-[14px]">
									<span>
										$
										{(
											product.price *
											(cartData.find((item) => item.product.id === product.id)
												?.qty || 1)
										).toFixed(2)}
									</span>
								</td>
								<td>
									<span className="cursor-pointer">
										<MdOutlineClose
											onClick={() => dispatch(removeItemFromCart(product))}
										/>
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="sticky top-0 h-screen">
				<CheckoutDetails />
			</div>
		</div>
	);
};

export default CartPage;
