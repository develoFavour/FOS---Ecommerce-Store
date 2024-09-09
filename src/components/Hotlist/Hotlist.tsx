import Image from "next/image";
import { Jost } from "next/font/google";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const jost = Jost({
	weight: "500",
	subsets: ["latin"],
});
interface Prop {
	title: string;
	// link: string;
}

const HotList = () => {
	return (
		<section className="uppercase p-4 sm:p-8 padding  bg-white">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[1140px] mx-auto md:px-20 ">
				<div className="col-span-1 sm:col-span-2 lg:row-span-2 relative">
					<Image
						src="/assets/woman.jpg"
						alt="Hotlist Women Collection"
						width={580}
						height={420}
						layout="responsive"
						priority
					/>
					<HotListOverlay title="WOMEN" />
				</div>
				<div className="col-span-1 sm:col-span-2 lg:col-span-2 relative">
					<Image
						src="/assets/man.jpg"
						alt="Hotlist Men Collection"
						width={900}
						height={300}
						layout="responsive"
						priority
					/>
					<HotListOverlay title="MEN" />
				</div>
				<div className="col-span-1 lg:col-span-1 relative">
					<Image
						src="/assets/child.jpg"
						alt="Hotlist Kids Collection"
						width={900}
						height={200}
						layout="responsive"
						priority
					/>
					<HotListOverlay title="KIDS" />
				</div>
				<div className="col-span-1 lg:col-span-1 bg-[#f5e6e0] flex flex-col justify-center items-center p-6">
					<h3 className={`${jost.className} text-2xl mb-3`}>
						<strong className="text-red-600">E-GIFT</strong> CARDS
					</h3>
					<p className="text-xs leading-6 mb-3 text-center">
						Surprise someone with the gift they really want.
					</p>
					<Link href="/cart" className="group">
						<span className="flex items-center">
							<p className="underline-animation">Shop Now</p>
							<MdKeyboardArrowRight
								className="transition-transform duration-300 group-hover:translate-x-1"
								fontSize={25}
							/>
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

const HotListOverlay = ({ title }: Prop) => (
	<div className="absolute left-0 bottom-0 p-4 w-full bg-gradient-to-t from-bg to-transparent text-white">
		<h2 className={`${jost.className} text-sm mb-1`}>Hot List</h2>
		<h3 className={`${jost.className} text-2xl sm:text-3xl mb-2`}>
			<strong className="text-red-600">{title}</strong> COLLECTION
		</h3>
		<Link href="/cart" className="group">
			<span className="flex items-center">
				<p className="underline-animation">Shop Now</p>
				<MdKeyboardArrowRight
					className="transition-transform duration-300 group-hover:translate-x-1"
					fontSize={25}
				/>
			</span>
		</Link>
	</div>
);

export default HotList;
