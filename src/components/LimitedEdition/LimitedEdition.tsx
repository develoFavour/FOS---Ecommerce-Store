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
	};

	return (
		<section className="flex justify-center flex-col uppercase pt-8 ml-20 max-w-[1140px]">
			<h1 className={`text-[2.1875rem] text-center ${jostFont.className}`}>
				Limited <strong>Edition</strong>
			</h1>

			<Slider
				{...settings}
				className={`${Style.row} ${jostFont.className} p-12 gap-4 max-w-[1300px]`}
			>
				{products.slice(0, 12).map((productItem) => (
					<div
						key={productItem.id}
						className="p-4"
						onClick={() => router.push(`/shop/${productItem.id}`)}
					>
						<div className="w-full cursor-pointer overflow-hidden bg-[#f5f4f7] relative group">
							<Image
								src={productItem.images[0]}
								height={109}
								width={1200}
								style={{
									objectFit: "cover",
									height: "341px",
									width: "440px",
								}}
								alt="banner"
							/>
							<button
								className={`${Style.button} bg-white text-black uppercase absolute bottom-[0.625rem] right-0 font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-3`}
							>
								Add to Cart
							</button>
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
											className={`text-orange-400 ${
												Number(productItem.rating) > id ? "" : "text-gray-300"
											}`}
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
					</div>
				))}
			</Slider>
		</section>
	);
};

export default LimitedEdition;
