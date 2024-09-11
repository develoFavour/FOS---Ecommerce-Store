import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Countdown from "./component/Countdown";

export default function SpringCollection() {
	return (
		<section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 lg:py-24">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row items-center justify-between flex-wrap">
					<div className="lg:w-1/2 mb-8 lg:mb-0 max-w-full">
						<h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-2">
							Deal of the Week
						</h2>
						<h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
							Spring Collection
						</h1>
						<p className="text-base lg:text-lg text-gray-600 mb-6 max-w-lg">
							Discover our latest styles for the new season. Refresh your
							wardrobe with vibrant colors and trendy designs.
						</p>
						<Card className="p-4 lg:p-6 bg-white shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
							<h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
								Limited Time Offer
							</h3>
							<div className="relative right-0 sm:right-6">
								<Countdown days={253} hours={10} minutes={20} seconds={22} />
							</div>
						</Card>
						<Button
							className="group text-lg px-6 py-3 rounded-full transition-all duration-300 hover:bg-pink-600 hover:text-white"
							size="lg"
						>
							Shop Now
							<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>
					<div className="lg:w-1/2 mt-8 lg:mt-0 max-w-full">
						<div className="relative">
							<Image
								src="/assets/hoodie.jpeg"
								width={600}
								height={600}
								alt="Spring Collection Showcase"
								className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
							/>
							<div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
								<p className="text-xl lg:text-2xl font-bold text-pink-600">
									30% OFF
								</p>
								<p className="text-sm text-gray-600">On selected items</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
