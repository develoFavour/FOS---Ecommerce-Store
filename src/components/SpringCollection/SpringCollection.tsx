import Style from "@/components/SpringCollection/Spring.module.css";
import Countdown from "@/components/SpringCollection/component/Countdown";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

const SpringCollection = () => {
	return (
		<section className="bg-[#ebebeb] p-12 uppercase">
			<div className="flex items-center">
				<div className="max-w-[1140px] ml-12">
					<p
						className={`${Style.text_dash} font-medium text-base text-red-600 relative mb-7`}
					>
						Deal Of the week
					</p>

					<h1 className="text-[#222] lg:text-7xl md:text-4xl sm:text-xl font-medium">
						<strong>SHOE</strong> COLLECTIONS
					</h1>
					<div className="flex items-center mt-8 mb-8">
						<p
							className={`${Style.underline} font-medium  ${Style.active} btn-link`}
						>
							Shop Now
						</p>
						<span className="transition-transform duration-300 transform mt-[2px]">
							<MdKeyboardArrowRight fontSize={20} />
						</span>
					</div>
					<div className="relative right-6">
						<Countdown days={90} hours={10} minutes={40} seconds={49} />
					</div>
				</div>
				<div>
					<Image src="/assets/shoe.png" width={450} height={90} alt="banner" />
				</div>
			</div>
		</section>
	);
};

export default SpringCollection;
