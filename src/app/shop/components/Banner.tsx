"use client";

import Image from "next/image";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Banner() {
	const [selectedCategory, setSelectedCategory] = useState("home-decoration");

	const categories = [
		{ id: "home-decoration", name: "Decorations" },
		{ id: "mens-watches", name: "Watches" },
		{ id: "smartphones", name: "Smartphones" },
		{ id: "womens-bags", name: "Ladies Bags" },
		{ id: "mens-shirts", name: "Men" },
		{ id: "womens-dresses", name: "Women" },
		{ id: "sunglasses", name: "Sunglasses" },
		{ id: "mens-shoes", name: "Shoes" },
	];

	return (
		<>
			<section className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-6 lg:p-8 lg:mt-20">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row items-center justify-between gap-8">
						<div className="w-full md:w-1/2 order-2 md:order-1">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-6 text-center md:text-left">
								JACKETS & COATS
							</h2>
							<div className="flex flex-wrap justify-center md:justify-start gap-2">
								{categories.map((category) => (
									<button
										key={category.id}
										onClick={() => setSelectedCategory(category.id)}
										className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
											selectedCategory === category.id
												? "bg-red-600 text-white"
												: "bg-white text-gray-800 hover:bg-gray-100"
										}`}
									>
										{category.name}
									</button>
								))}
							</div>
						</div>
						<div className="w-full md:w-1/2 order-1 md:order-2">
							<div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[16/9]">
								<Image
									src="/assets/women-coat.png"
									alt="Woman in a stylish coat"
									layout="fill"
									objectFit="cover"
									className="rounded-lg shadow-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ProductCard selectedCategory={selectedCategory} />
		</>
	);
}
