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
		<section className="mt-12 max-w-[899px] grid justify-center ml-56 mb-12">
			<h1 className="p-4"></h1>
			<div className=" grid grid-cols-6 gap-2 justify-center">
				{teamImages.map((image, index) => (
					<div key={index} className="mx-2 ">
						<Image
							src={`/assets/${image}`}
							alt="Team Member"
							height={200}
							width={300}
							className="h-40 w-42 object-cover"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
