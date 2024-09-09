"use client";
import Image from "next/image";
import Styles from "./Banner.module.css";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Banner = () => {
	const [selectedCategory, setSelectedCategory] = useState("home-decoration");
	return (
		<>
			<section className="uppercase   bg-gray-100 p-12">
				<div className="flex justify-between min-h-[26.25rem] items-center">
					<div className="flex flex-col items-start">
						<h2
							className={`${Styles.strokeText} ${Styles.smooth} shad font-extrabold text-gray-300 tracking-wider text-6xl whitespace-nowrap`}
						>
							JACKETS & COATS
						</h2>
						<div className="mt-4">
							<ul className={Styles.ulList}>
								<li onClick={() => setSelectedCategory("home-decoration")}>
									<span>decorations</span>
								</li>
								<li onClick={() => setSelectedCategory("mens-watches")}>
									<span>Watches</span>
								</li>
								<li onClick={() => setSelectedCategory("smartphones")}>
									<span>smartphones</span>
								</li>
								<li onClick={() => setSelectedCategory("womens-bags")}>
									<span>ladies bags</span>
								</li>
								<li onClick={() => setSelectedCategory("mens-shirts")}>
									<span>Men</span>
								</li>
								<li onClick={() => setSelectedCategory("womens-dresses")}>
									<span>Women</span>
								</li>
								<li onClick={() => setSelectedCategory("sunglasses")}>
									<span>sunglasses</span>
								</li>
								<li onClick={() => setSelectedCategory("mens-shoes")}>
									<span>Shoes</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="relative bottom-12">
						<Image
							style={{ height: "32rem", width: "100%" }}
							src="/assets/women-coat.png"
							width={900}
							height={900}
							alt="banner"
							className="object-cover"
						/>
					</div>
				</div>
			</section>
			<ProductCard selectedCategory={selectedCategory} />
		</>
	);
};

export default Banner;
