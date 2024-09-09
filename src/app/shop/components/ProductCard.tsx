import {
	fetchProductsByCategory,
	selectProductsByCategory,
} from "@/lib/redux/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Style from "@/components/TrendingProducts/component/ProductCard.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Jost } from "next/font/google";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { increament } from "@/lib/redux/cartSlice";
// import { ToastContainer, toast } from "react-toastify";

type Props = {
	selectedCategory: string;
};

const jostFont = Jost({
	weight: "400",
	subsets: ["latin"],
});

const ProductCard = ({ selectedCategory }: Props) => {
	const router = useRouter();
	const products = useAppSelector(selectProductsByCategory);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProductsByCategory(selectedCategory));
	}, [dispatch, selectedCategory]);

	return (
		<div
			className={`${Style.row} ${jostFont.className} flex justify-center p-12 gap-4 max-w-[1300px]`}
		>
			<AnimatePresence>
				{products?.slice(0, 4).map((productItem) => (
					<motion.div
						key={productItem.id}
						className="relative group"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
					>
						<div
							onClick={(e) => {
								e.stopPropagation();
								router.push(`/shop/${productItem.id}`);
							}}
							className={`w-full cursor-pointer overflow-hidden bg-[#f5f4f7] relative`}
						>
							<motion.div
								className="w-full h-full"
								initial={{ opacity: 1 }}
								whileHover={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
							>
								<Image
									src={productItem.images[0]}
									height={341}
									width={440}
									style={{
										objectFit: "contain",
										transition: "opacity 0.5s ease-in-out",
									}}
									alt="Product Image"
								/>
							</motion.div>
							<motion.div
								className="w-full h-full absolute top-0 left-0"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								{/* <Image
									src={productItem.images[1]}
									height={341}
									width={440}
									style={{
										objectFit: "contain",
										transition: "opacity 0.5s ease-in-out",
									}}
									alt="Product Image"
								/> */}
								<button
									className={`${Style.button} bg-white text-black uppercase absolute bottom-[0.625rem] right-0 font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-3`}
									onClick={(e) => {
										e.stopPropagation();
										// toast.success(`${productItem.title} added to cart!`);
										dispatch(
											increament({
												id: productItem.id,
												title: productItem.title,
												images: productItem.images,
												qty: 1,
												price: productItem.price,
												description: "",
												category: productItem.category,
												discountPercentage: productItem.discountPercentage,
												rating: productItem.rating,
												stock: productItem.stock,
												tags: [],
												brand: productItem.brand,
												sku: productItem.sku,
												weight: productItem.weight,
												dimensions: {
													width: productItem.dimensions.width,
													height: productItem.dimensions.height,
													depth: productItem.dimensions.depth,
												},
												warrantyInformation: productItem.warrantyInformation,
												shippingInformation: productItem.shippingInformation,
												availabilityStatus: productItem.availabilityStatus,
												reviews: productItem.reviews,
												returnPolicy: productItem.returnPolicy,
												minimumOrderQuantity: productItem.minimumOrderQuantity,
												meta: {
													createdAt: productItem.meta.createdAt,
													updatedAt: productItem.meta.updatedAt,
													barcode: productItem.meta.barcode,
													qrCode: productItem.meta.qrCode,
												},
												thumbnail: productItem.thumbnail,
											})
										);
									}}
								>
									Add to Cart
								</button>
							</motion.div>
						</div>
						<div className="p-4">
							<span className="flex items-center justify-between text-[#767676] font-normal uppercase text-sm">
								{productItem.category.replace("-", " ")}{" "}
								<span className="ml-2">
									<CiHeart />
								</span>
							</span>
							<h1 className="text-[#222] text-base">{productItem.title}</h1>
							<span className="text-[1rem]">${productItem.price}</span>
							<div className="flex items-center justify-between">
								<div className="flex gap-1 items-center">
									{Array.from({ length: 5 }, (icon, id) => (
										<FaStar
											className={
												Number(productItem.rating) > id
													? "text-orange-400"
													: "text-gray-300"
											}
											fontSize={12}
											key={id}
										/>
									))}
								</div>
								<span>{productItem.rating}+ ratings</span>
							</div>
							<div className="absolute top-0 left-0 bg-white text-[#767676] p-2 rounded-lg mt-2 ml-2">
								{productItem.availabilityStatus}
							</div>
						</div>
					</motion.div>
				))}
			</AnimatePresence>
			<div className="flex justify-center items-center">
				<span className={`${Style.underline} ${Style.active} mt-3 btn-link`}>
					Discover More
				</span>
			</div>
			{/* <ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/> */}
		</div>
	);
};

export default ProductCard;
