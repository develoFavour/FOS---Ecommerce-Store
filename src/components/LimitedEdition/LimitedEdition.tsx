"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/store";
import { selectLaptops, fetchLaptop } from "@/lib/redux/productSlice";
import { Jost } from "next/font/google";
import { CiHeart } from "react-icons/ci";
import Style from "@/components/LimitedEdition/Limited.module.css";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { increament } from "@/lib/redux/cartSlice";

const jostFont = Jost({
	weight: "500",
	subsets: ["latin"],
});

const LimitedEdition = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(selectLaptops);
	const router = useRouter();

	useEffect(() => {
		dispatch(fetchLaptop());
	}, [dispatch]);

	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className="flex justify-center flex-col uppercase pt-8 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
			<h1
				className={`text-3xl md:text-4xl lg:text-[2.1875rem] text-center ${jostFont.className} mb-8`}
			>
				Limited <strong>Edition</strong>
			</h1>

			<Slider
				{...settings}
				className={`${Style.row} ${jostFont.className} p-4 md:p-8 lg:p-12 gap-4`}
			>
				{products.slice(0, 12).map((productItem) => (
					<div
						key={productItem.id}
						className="p-4 cursor-pointer"
						onClick={() => router.push(`/shop/${productItem.id}`)}
					>
						<div className="w-full overflow-hidden bg-[#f5f4f7] relative group rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
							<Image
								src={productItem.images[0]}
								height={341}
								width={440}
								style={{
									objectFit: "cover",
									height: "341px",
									width: "100%",
								}}
								alt="banner"
							/>
							<button
								onClick={(e) => {
									e.stopPropagation();
									toast.success(`${productItem.title} added to cart!`);
									dispatch(increament({ ...productItem, qty: 1 }));
								}}
								className={`${Style.button} bg-white text-black uppercase absolute bottom-4 right-4 font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-3 rounded-md shadow-lg`}
							>
								Add to Cart
							</button>
						</div>
						<div className="p-4">
							<span className="flex items-center justify-between text-[#767676] font-normal uppercase text-sm">
								{productItem.category.replace("-", " ")}{" "}
								<span className="ml-2">
									<CiHeart className="text-2xl hover:text-red-500 transition-colors duration-300" />
								</span>
							</span>
							<h1 className="text-[#222] text-base font-semibold mt-2">
								{productItem.title}
							</h1>
							<span className="text-[1rem] font-bold text-pink-600">
								${productItem.price}
							</span>
							<div className="flex items-center justify-between mt-2">
								<div className="flex gap-1 items-center">
									{Array.from({ length: 5 }, (icon, id) => (
										<FaStar
											className={`text-orange-400 ${
												Number(productItem.rating) > id ? "" : "text-gray-300"
											}`}
											fontSize={12}
											key={id}
										/>
									))}
								</div>
								<span className="text-sm text-gray-600">
									{productItem.rating}+ ratings
								</span>
							</div>
							<div className="absolute top-2 left-2 bg-white text-[#767676] p-2 rounded-lg">
								{productItem.availabilityStatus}
							</div>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
};

export default LimitedEdition;
