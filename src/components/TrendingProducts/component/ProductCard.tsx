"use client";
import Style from "@/components/TrendingProducts/component/ProductCard.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { AnimatePresence, motion } from "framer-motion";
import { Jost } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { increament } from "@/lib/redux/cartSlice";
import {
	fetchFemaleProducts,
	fetchMaleProducts,
	fetchSportProducts,
	selectFemaleProducts,
	selectLoading,
	selectMaleProducts,
	selectSportProducts,
} from "@/lib/redux/productSlice";
import { Product } from "../../../../types";
import Loading from "@/app/loading";
import { toast } from "sonner";

type Props = {
	selectedCategory: string;
};

const jostFont = Jost({
	weight: "400",
	subsets: ["latin"],
});

const ProductCard = ({ selectedCategory }: Props) => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector(selectLoading);
	const maleProducts = useAppSelector(selectMaleProducts);
	const femaleProducts = useAppSelector(selectFemaleProducts);
	const sportProducts = useAppSelector(selectSportProducts);

	const router = useRouter();
	const [itemsToRender, setItemsToRender] = useState<Product[]>([]);

	useEffect(() => {
		dispatch(fetchMaleProducts());
		dispatch(fetchFemaleProducts());
		dispatch(fetchSportProducts());
	}, [dispatch]);

	useEffect(() => {
		let items: Product[] = [];

		switch (selectedCategory) {
			case "All":
				items = [
					...maleProducts,
					...femaleProducts,
					...sportProducts,
				] as unknown as Product[];
				break;
			case "New Arrivals":
				items = maleProducts.slice(0, 4) as unknown as Product[];
				break;
			case "Best Seller":
				items = femaleProducts.slice(0, 4) as unknown as Product[];
				break;
			case "Top Rated":
				items = sportProducts.slice(0, 8) as unknown as Product[];
				break;
			default:
				items = maleProducts as unknown as Product[];
		}

		setItemsToRender(items.slice(0, 12));
	}, [selectedCategory, maleProducts, femaleProducts, sportProducts]);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className={`${jostFont.className} max-w-[1300px] mx-auto`}>
			<div className={Style.row}>
				<AnimatePresence>
					{itemsToRender.map((productItem) => (
						<motion.div
							key={productItem.id}
							className="relative group bg-white rounded-lg shadow-md overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							<div
								onClick={() => router.push(`/shop/${productItem.id}`)}
								className="cursor-pointer relative pb-[100%]"
							>
								<Image
									src={productItem.images[0]}
									layout="fill"
									objectFit="cover"
									alt={productItem.title}
									className="transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
								<button
									className={`${Style.button} bg-white text-black uppercase absolute bottom-4 left-4 right-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
									onClick={(e) => {
										e.stopPropagation();
										toast.success(`${productItem.title} added to cart!`);
										dispatch(increament({ ...productItem, qty: 1 }));
									}}
								>
									Add to Cart
								</button>
							</div>
							<div className="p-4">
								<div className="flex items-center justify-between text-gray-500 text-sm mb-2">
									<span className="uppercase">
										{productItem.category.replace("-", " ")}
									</span>
									<CiHeart className="text-xl cursor-pointer hover:text-red-500 transition-colors duration-300" />
								</div>
								<h2 className="text-lg font-semibold mb-2 line-clamp-2">
									{productItem.title}
								</h2>
								<div className="flex items-center justify-between mb-2">
									<span className="text-xl font-bold">
										${productItem.price.toFixed(2)}
									</span>
									<div className="flex items-center">
										{Array.from({ length: 5 }, (_, id) => (
											<FaStar
												key={id}
												className={
													Number(productItem.rating) > id
														? "text-yellow-400"
														: "text-gray-300"
												}
												fontSize={16}
											/>
										))}
										<span className="ml-2 text-sm text-gray-500">
											({productItem.rating})
										</span>
									</div>
								</div>
								<div className="absolute top-2 left-2 bg-white text-gray-700 text-xs font-semibold px-2 py-1 rounded">
									{productItem.availabilityStatus}
								</div>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
			<div className="flex justify-center items-center mt-8 mb-4">
				<span
					className={`${Style.underline} ${Style.active} text-lg font-semibold`}
				>
					Discover More
				</span>
			</div>
		</div>
	);
};

export default ProductCard;
