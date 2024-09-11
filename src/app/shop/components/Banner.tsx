"use client";
import Image from "next/image";
import Styles from "./Banner.module.css";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Banner = () => {
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
			<section className="uppercase bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-8 lg:p-12">
				<div className="flex flex-col lg:flex-row justify-between items-center min-h-[26.25rem]">
					<div className="flex flex-col items-start mb-8 lg:mb-0">
						<h2
							className={`${Styles.strokeText} ${Styles.smooth} shad font-extrabold text-gray-300 tracking-wider text-4xl md:text-5xl lg:text-6xl whitespace-nowrap mb-4`}
						>
							JACKETS & COATS
						</h2>
						<div className="mt-4 w-full">
							<ul
								className={`${Styles.ulList} flex flex-wrap justify-center lg:justify-start gap-2`}
							>
								{categories.map((category) => (
									<li
										key={category.id}
										onClick={() => setSelectedCategory(category.id)}
										className={`cursor-pointer px-3 py-2 rounded-full transition-colors duration-300 ${
											selectedCategory === category.id
												? "bg-[#dc2626] text-white"
												: "bg-white  hover:bg-gray-200"
										}`}
									>
										<span>{category.name}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px]">
						<Image
							src="/assets/women-coat.png"
							layout="fill"
							objectFit="cover"
							alt="banner"
							className="rounded-lg shadow-2xl"
						/>
					</div>
				</div>
			</section>
			<ProductCard selectedCategory={selectedCategory} />
		</>
	);
};

export default Banner;
