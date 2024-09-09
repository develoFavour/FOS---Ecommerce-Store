"use client";

import { useEffect, useState } from "react";
import Styles from "@/app/shop/[id]/component/productDetail.module.css";
import { Jost } from "next/font/google";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { fetchProductById, selectProductById } from "@/lib/redux/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

const jost = Jost({
	weight: "400",
	subsets: ["latin-ext"],
});

type Props = {
	id: string;
};

const ProductDescription = ({ id }: Props) => {
	const dispatch = useAppDispatch();
	const product = useAppSelector(selectProductById);
	const [activeTab, setActiveTab] = useState("Description");
	useEffect(() => {
		dispatch(fetchProductById(id));
	}, [dispatch, id]);
	const productDescription = [
		"Description",
		"Additional Information",
		"Reviews",
	];

	const renderContent = () => {
		switch (activeTab) {
			case "Description":
				return (
					<div className={`leading-[1.875rem]`}>
						<h2 className="text-base text-[#222] mb-4">{product?.title}</h2>
						<p className={`${jost.className}`}>{product?.description}</p>
						<div className="p-4">
							<div className={`${Styles.row} justify-between text-start`}>
								<div>
									<h3 className="text-base text-[#222] mb-4">
										Why choose product?
									</h3>
									<ul>
										<li className="pb-2">
											Creat by cotton fabric with soft and smooth
										</li>
										<li className="pb-2">
											Simple, Configurable (e.g. size, color, etc.), bundled
										</li>
										<li className="pb-2">
											Downloadable/Digital Products, Virtual Products
										</li>
									</ul>
								</div>

								<div>
									<h3 className="text-base text-[#222] mb-4">
										Sample Number List
									</h3>
									<ol>
										<li>Create Store-specific attributes on the fly</li>
										<li>
											Simple, Configurable (e.g. size, color, etc.), bundled
										</li>
										<li>Downloadable/Digital Products, Virtual Products</li>
									</ol>
								</div>
							</div>
							<div className="flex justify-center pt-4">
								<p>
									<strong>Lining</strong> 100% Polyester, Main: 100% Polyester
								</p>
							</div>
						</div>
					</div>
				);
			case "Additional Information":
				return (
					<ul>
						<div className="flex justify-center">
							<div>
								<li className="p-4">
									<strong className="text-[#222]">Category: </strong>{" "}
									{product?.category}
								</li>
								<li className="p-4">
									<strong className="text-[#222]">Price: </strong> $
									{product?.price}
								</li>
								<li className="p-4">
									<strong className="text-[#222]">Brand: </strong>{" "}
									{product?.brand}
								</li>
								<li className="p-4">
									<strong className="text-[#222]">SKU: </strong> {product?.sku}
								</li>
								<li className="p-4">
									<strong className="text-[#222]">Weight: </strong>{" "}
									{product?.weight} lbs
								</li>
								<li className="p-4">
									<strong className="text-[#222]">Dimensions: </strong>
									{product?.dimensions.width} x {product?.dimensions.height} x{" "}
									{product?.dimensions.depth} inches
								</li>
							</div>
							<div>
								<li className="p-4">
									<strong className="text-[#222]">Warranty: </strong>{" "}
									{product?.warrantyInformation}
								</li>
								<li className="p-4">
									<strong className="text-[#222]">Shipping: </strong>{" "}
									{product?.shippingInformation}
								</li>
								<li className="p-4">
									<strong className="text-[#222]">Availability: </strong>{" "}
									{product?.availabilityStatus}
								</li>
								<li className="p-4">
									<strong className="text-[#222]">Return Policy: </strong>{" "}
									{product?.returnPolicy}
								</li>
							</div>
						</div>
					</ul>
				);
			case "Reviews":
				return (
					<div className={Styles.reviewsContainer}>
						{product?.reviews.map((review, index) => (
							<div key={index} className={Styles.reviewItem}>
								<div className={Styles.reviewerAvatar}></div>
								<div className={Styles.reviewContent}>
									<p className={Styles.reviewerName}>{review.reviewerName}</p>
									<div className="flex justify-between">
										<p className={Styles.reviewDate}>
											{new Date(review.date).toDateString()}
										</p>
										<div className="flex gap-1 items-center">
											{Array.from({ length: 5 }, (icon, id) => (
												<FaStar
													className={
														Number(review.rating) > id
															? "text-orange-400"
															: "text-gray-300"
													}
													fontSize={12}
													key={id}
												/>
											))}
										</div>
									</div>
									<p className={Styles.reviewComment}>{review.comment}</p>
								</div>
							</div>
						))}
						<div className={Styles.leaveReview}>
							<h3>
								Be the first to review <strong>{product?.title}</strong>
							</h3>
							<p>
								Your email address will not be published. Required fields are
								marked *
							</p>
							<div className={`${Styles.ratingInput} ${Styles.formGroup}`}>
								<label htmlFor="rating">Your rating *</label>
								<input
									type="number"
									id="rating"
									name="rating"
									min="1"
									max="5"
									className={Styles.ratingStars}
								/>
							</div>
							<form className={Styles.reviewForm}>
								<div className={Styles.formGroup}>
									<label htmlFor="review">Your Review *</label>
									<textarea id="review" name="review" required></textarea>
								</div>
								<div className={Styles.formGroup}>
									<label htmlFor="name">Name *</label>
									<input type="text" id="name" name="name" required />
								</div>
								<div className={Styles.formGroup}>
									<label htmlFor="email">Email address *</label>
									<input type="email" id="email" name="email" required />
								</div>
								<div className={` gap-4 flex items-center flex-row`}>
									<div>
										<input type="checkbox" id="saveInfo" name="saveInfo" />
									</div>
									<div>
										<label htmlFor="saveInfo">
											Save my name, email, and website in this browser for the
											next time I comment.
										</label>
									</div>
								</div>
								<button type="submit" className={Styles.submitButton}>
									SUBMIT
								</button>
							</form>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-center">
				<ul className="flex gap-12">
					{productDescription.map((item, index) => (
						<li
							key={index}
							className={`pt-4 pb-2 cursor-pointer text-center ${
								Styles.underline
							}${
								activeTab === item
									? ` ${Styles.active} border-b-2 border-black`
									: ""
							}`}
							onClick={() => setActiveTab(item)}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div className="p-4 max-w-[54rem] mr-auto ml-auto text-[#343a40]">
				{renderContent()}
			</div>
		</div>
	);
};

export default ProductDescription;
