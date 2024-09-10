import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Countdown from "./component/Countdown";

export default function SpringCollection() {
	return (
		<section className="bg-[#b9b8b54a] py-16 lg:py-24">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<div className="lg:w-1/2 mb-8 lg:mb-0">
						<h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-2">
							Deal of the Week
						</h2>
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
							Spring Collection
						</h1>
						<p className="text-lg text-gray-600 mb-6">
							Discover our latest styles for the new season. Refresh your
							wardrobe with vibrant colors and trendy designs.
						</p>
						<Card className="p-6 bg-white shadow-lg mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Limited Time Offer
							</h3>
							<div className="relative right-0 sm:right-6">
								<Countdown days={253} hours={10} minutes={20} seconds={22} />
							</div>
						</Card>
						<Button className="group" size="lg">
							Shop Now
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>
					<div className="lg:w-1/2">
						<div className="relative">
							<Image
								src="/assets/hoodie.jpeg"
								width={600}
								height={600}
								alt="Spring Collection Showcase"
								className="rounded-lg shadow-2xl"
							/>
							<div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
								<p className="text-2xl font-bold text-pink-600">30% OFF</p>
								<p className="text-sm text-gray-600">On selected items</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
