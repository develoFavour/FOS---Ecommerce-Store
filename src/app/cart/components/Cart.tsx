import Image from "next/image";
import React from "react";
import { Dela_Gothic_One } from "next/font/google";
import Link from "next/link";

const DelaGothic = Dela_Gothic_One({
	weight: "400",
	subsets: ["latin"],
});

const CartPage = () => {
	return (
		<div className="container mx-auto p-6 ">
			<h1
				className={`text-[2.1875rem] mb-[3.125rem] mt-16 font-bold uppercase ${DelaGothic.className}`}
			>
				CART
			</h1>
			<div className="flex justify-between mb-4">
				<div className="flex items-center">
					<span className="text-[#222] mr-3">01</span>

					<Link href={"/cart/"}>
						<span className="flex flex-col">
							<span className="text-[#222] text-[1.125rem] font-medium">
								SHOPPING BAG
							</span>
							<em className="text-[#767676] text-[.875rem] font-normal not-italic">
								Manage Your Items List
							</em>
						</span>
					</Link>
				</div>
				<div className="flex items-center">
					<span className="text-[#222] mr-3">02</span>
					<Link href={"/cart/shopping-checkout"}>
						<span className="flex flex-col">
							<span className="text-[#222] text-[1.125rem] font-medium">
								SHIPPING AND CHECKOUT
							</span>
							<em className="text-[#767676] text-[.875rem] font-normal not-italic">
								Checkout Your Items List
							</em>
						</span>
					</Link>
				</div>
				<div className="flex items-center">
					<span className="text-[#222] mr-3">03</span>
					<Link href={"/cart/confirmation"}>
						<span className="flex flex-col">
							<span className="text-[#222] text-[1.125rem] font-medium">
								CONFIRMATION
							</span>
							<em className="text-[#767676] text-[.875rem] font-normal not-italic">
								Review And Submit Your Order
							</em>
						</span>
					</Link>
				</div>
			</div>
			<hr className="border-gray-300 mb-6" />
		</div>
	);
};

export default CartPage;
