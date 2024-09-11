import Image from "next/image";
import React from "react";

const Team = () => {
	const teamImages = [
		"team-1.jpg",
		"team-2.jpg",
		"team-3.jfif",
		"team-4.jpg",
		"team-5.jpg",
		"team-6.jpg",
		"team-7.jpg",
		"team-8.jpg",
		"team-9.jpg",
		"team-10.jpg",
		"team-11.jpg",
		"team-12.jpg",
	];
	return (
		<section className="mt-12 mb-12 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
				Our Team
			</h1>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				{teamImages.map((image, index) => (
					<div
						key={index}
						className="relative group overflow-hidden rounded-lg shadow-md"
					>
						<Image
							src={`/assets/${image}`}
							alt="Team Member"
							width={300}
							height={300}
							className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<p className="text-white text-center font-semibold">
								Team Member {index + 1}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
