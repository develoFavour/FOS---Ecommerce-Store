"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiShare2 } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "@/lib/redux/store";
import Loading from "@/app/loading";
import { getProductById } from "@/lib/fetchProducts";
import { Product } from "../../../../../types";
import ProductDescription from "./ProductDescription";

type Props = {
	id: string;
};

const ProductDetail = ({ id }: Props) => {
	const [selectedSize, setSelectedSize] = useState("");
	const [selectedColor, setSelectedColor] = useState("");
	const [selectedImage, setSelectedImage] = useState("");
	const [product, setProduct] = useState<Product | null>(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchProduct = async () => {
			const productData = await getProductById(id);
			setProduct(productData as Product);
		};
		fetchProduct();
	}, [dispatch, id]);

	useEffect(() => {
		if (product) {
			setSelectedImage(product.thumbnail);
		}
	}, [product]);

	if (!product) {
		return (
			<div className="grid justify-center items-center h-screen">
				<Loading />
			</div>
		);
	}

	return (
		<div>
			<div className="flex justify-center gap-20 max-w-[1140px] p-14 mx-auto">
				<div className="flex gap-4">
					<div className="flex flex-col gap-4">
						{product.images.map((image, index) => (
							<Image
								key={index}
								src={image}
								alt={product.title}
								height={104}
								width={104}
								className={`cursor-pointer border ${
									selectedImage === image
										? "border-black"
										: "border-transparent"
								} ${
									selectedImage === image ? "bg-[#e0e0e0]" : "bg-[#cfcece1c]"
								}`}
								onClick={() => setSelectedImage(image)}
							/>
						))}
					</div>
					<div className="bg-[#e0e0e0] flex items-center justify-center">
						<Image
							src={selectedImage}
							alt={product.title}
							height={640}
							width={440}
						/>
					</div>
				</div>
				<div className="flex flex-col w-1/2">
					<div className="flex justify-between font-medium mb-4">
						<div className="flex gap-2">
							<Link href="/">Home</Link>
							<span className="font-extrabold">/</span>
							<Link href="/product">The Shop</Link>
						</div>
						<div className="flex gap-4">
							<p className="flex items-center">
								<GrFormPrevious /> Prev
							</p>
							<p className="flex items-center">
								Next <GrFormNext />
							</p>
						</div>
					</div>
					<h1 className="text-[1.625rem] font-bold mb-2">{product.title}</h1>
					<div className="flex items-center justify-between mb-2">
						<div className="flex gap-1 items-center">
							{Array.from({ length: 5 }, (_, index) => (
								<FaStar
									className={
										Number(product.rating) > index
											? "text-orange-400"
											: "text-gray-300"
									}
									fontSize={12}
									key={index}
								/>
							))}
						</div>
						<span>{product.rating}+ reviews</span>
					</div>
					<h2 className="text-2xl font-semibold mb-4">${product.price}</h2>
					<p className="max-w-[30rem] mb-4">{product.description}</p>
					<div className="flex flex-col gap-4 mb-4">
						<div>
							<h3 className="font-semibold mb-2">SIZES</h3>
							<div className="flex gap-2">
								{["XS", "S", "M", "L", "XL"].map((size) => (
									<button
										key={size}
										className={`px-4 py-2 border ${
											selectedSize === size ? "border-black" : "border-gray-300"
										}`}
										onClick={() => setSelectedSize(size)}
									>
										{size}
									</button>
								))}
								<button className="px-4 py-2 border border-gray-300">
									SIZE GUIDE
								</button>
							</div>
						</div>
						<div>
							<h3 className="font-semibold mb-2">COLOR</h3>
							<div className="flex gap-2">
								{["black", "red"].map((color) => (
									<button
										key={color}
										className={`w-8 h-8 rounded-full bg-${color} ${
											selectedColor === color ? "border-2 border-black" : ""
										}`}
										onClick={() => setSelectedColor(color)}
									></button>
								))}
							</div>
						</div>
					</div>
					<div className="flex gap-8 items-center">
						<div className="flex items-center gap-4 mb-4">
							<button className="px-4 py-2 border border-gray-300">-</button>
							<span>1</span>
							<button className="px-4 py-2 border border-gray-300">+</button>
						</div>
						<button className="bg-[#222] text-white px-6 py-3 uppercase font-semibold h-[3.75rem] w-[17.5rem]">
							Add to Cart
						</button>
					</div>
					<div className="flex gap-4 mt-4">
						<Link href="#">
							<span className="flex items-center gap-2">
								<CiHeart fontSize={20} /> Add to Wishlist
							</span>
						</Link>
						<Link href="#">
							<span className="flex items-center gap-2">
								<FiShare2 fontSize={20} /> Share
							</span>
						</Link>
					</div>
					<div className="text-[#767676] text-[.8125rem] leading-6 font-normal pt-6 uppercase">
						<p>
							<span className="text-[#222]">Sku:</span> {product.sku}
						</p>
						<p>
							<span className="text-[#222]">Categories:</span>{" "}
							{product.category}
						</p>
					</div>
				</div>
			</div>
			<ProductDescription id={id} />
		</div>
	);
};

export default ProductDetail;
