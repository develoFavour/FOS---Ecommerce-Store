"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Style from "@/components/Banner/Banner.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const montserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
});

const Banner = () => {
	const [showFirst, setShowFirst] = useState(true);

	const toggleContainer = () => {
		setShowFirst(!showFirst);
	};

	return (
		<section className="relative mt-16 h-full w-full overflow-hidden">
			<AnimatePresence>
				{!showFirst && (
					<motion.div
						key="first"
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						transition={{ duration: 0.5 }}
						className={`${Style.background} flex items-center w-full px-4 sm:px-8 md:px-12 lg:px-24 flex-col md:flex-row justify-center md:justify-between min-h-screen py-8 md:py-0`}
					>
						<div className="uppercase lg:pl-10 text-center md:text-left mb-8 md:mb-0">
							<h6
								className={`${Style.text_dash} text-red-600 relative mb-2 sm:mb-5 text-sm sm:text-base font-medium`}
							>
								New Trend
							</h6>
							<h2
								className={`font-normal text-2xl sm:text-5xl lg:text-7xl mt-0 mb-2 sm:mb-5 ${montserrat.className}`}
							>
								Summer <span className="text-red-600">Sale Stylish</span>
							</h2>
							<h1 className="font-normal text-4xl sm:text-6xl lg:text-7xl mt-0 mb-4">
								<span className="font-bold text-red-600 ">Women</span>{" "}
							</h1>

							<Link href="/discover-more">
								<div
									className={`flex items-center justify-center md:justify-start gap-1 ${Style.shakeicon}`}
								>
									<span className={`${Style.underline} mt-3 btn-link`}>
										Discover More
									</span>
									<span className="transition-transform duration-300 transform mt-3">
										<MdKeyboardArrowRight fontSize={25} />
									</span>
								</div>
							</Link>
						</div>
						<div className="w-full md:w-auto pt-4 sm:pt-9 pb-4 sm:pb-9">
							<Image
								className="mx-auto md:mx-0"
								src="/assets/slider1.png"
								alt="slider-1"
								width={400}
								height={773}
							/>
						</div>
					</motion.div>
				)}

				{showFirst && (
					<motion.div
						key="second"
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5 }}
						className={`${Style.background} flex items-center w-full px-4 sm:px-8 md:px-12 lg:px-24 flex-col md:flex-row justify-center md:justify-between min-h-screen py-8 md:py-0`}
					>
						<div className="uppercase lg:pl-10 text-center md:text-left mb-8 md:mb-0">
							<h6
								className={`${Style.text_dash} text-red-600 relative mb-2 sm:mb-5 text-sm sm:text-base font-medium`}
							>
								Summer 2024
							</h6>
							<h2
								className={`font-normal text-3xl sm:text-5xl lg:text-7xl mt-0 mb-2 sm:mb-5`}
							>
								Hello <span className="text-red-600 font-bold">New Season</span>
							</h2>
							<p className="mt-4 sm:mt-8 mb-4 sm:mb-8 text-sm sm:text-base">
								Limited Time Offer - Up to 60% off & Free Shipping
							</p>

							<Link href="/discover-more">
								<div
									className={`flex items-center justify-center md:justify-start gap-1 ${Style.shakeicon}`}
								>
									<span className={`${Style.underline} mt-3 btn-link`}>
										Discover More
									</span>
									<span className="transition-transform duration-300 transform mt-3">
										<MdKeyboardArrowRight fontSize={25} />
									</span>
								</div>
							</Link>
						</div>
						<div className="w-full md:w-auto pt-4 sm:pt-9 pb-4 sm:pb-9">
							<Image
								className="mx-auto md:mx-0"
								src="/assets/slider3.png"
								alt="slider-2"
								width={400}
								height={773}
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="absolute bottom-4 sm:bottom-8 md:bottom-44 left-1/2 transform -translate-x-1/2 md:left-10 md:transform-none lg:ml-24">
				<button
					onClick={toggleContainer}
					className="bg-red-600 text-white py-2 px-4 sm:px-8 md:px-24 rounded w-full md:w-auto "
				>
					Next Slide
				</button>
			</div>
		</section>
	);
};

export default Banner;
