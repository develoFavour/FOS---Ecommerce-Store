"use client";
import { useState } from "react";
import ProductCard from "@/components/TrendingProducts/component/ProductCard";
import Styles from "@/components/TrendingProducts/Trending.module.css";
import { Jost } from "next/font/google";
const jost = Jost({
	weight: "500",
	subsets: ["latin"],
});
const TrendingProduct = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "New Arrivals", "Best Seller", "Top Rated"];

	return (
		<section className="px-4 py-8 max-w-7xl mx-auto">
			<h1
				className={`${jost.className} text-2xl sm:text-3xl md:text-4xl text-center mb-6`}
			>
				<span>Our Trendy </span> <strong>Products</strong>
			</h1>
			<div className="overflow-x-auto flex justify-center">
				<ul className="flex gap-4 sm:gap-16 justify-start md:justify-center items-center mb-8 min-w-max">
					{categories.map((category) => (
						<li
							key={category}
							className={`cursor-pointer text-sm sm:text-lg font-semibold whitespace-nowrap ${
								Styles.underline
							} ${
								selectedCategory === category
									? "text-red-600 border-b-2 border-red-600"
									: "text-gray-600 hover:text-red-600"
							}`}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</li>
					))}
				</ul>
			</div>
			<ProductCard selectedCategory={selectedCategory} />
		</section>
	);
};

export default TrendingProduct;
