import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaPinterest,
} from "react-icons/fa";

const bodoni = Jost({
	weight: "900",
	subsets: ["latin"],
});
const Footer = () => {
	return (
		<footer className="bg-gray-100 py-10 text-gray-700">
			<div className="container mx-auto flex flex-wrap justify-between">
				<div className="w-full md:w-1/5 mb-8 md:mb-0">
					<div className="flex items-center mr-16 h-10 mb-4">
						<span
							className={`${bodoni.className} text-3xl text-amber-950 font-blacktext-amber-950 font-black`}
						>
							F O S
						</span>
						<span className="flex align-baseline mt-2 w-3 h-3 bg-red-950 rounded-full ml-2"></span>
					</div>
					{/* <Image src="/logo.png" alt="Logo" className="h-10 mb-4" /> */}
					<address className="not-italic mb-4">
						1418 River Drive, Suite 35 Cottonhall,
						<br />
						CA 9622 United States
					</address>
					<a href="mailto:sale@uomo.com" className="block mb-2">
						sale@uomo.com
					</a>
					<a href="tel:+12463450695" className="block mb-4">
						+1 246-345-0695
					</a>
					<div className="flex space-x-4">
						<Link href={"/"}>
							<span className="h-5 w-5">
								<FaFacebook />
							</span>
						</Link>
						<Link href={"/"}>
							<span className="h-5 w-5">
								<FaTwitter />
							</span>
						</Link>
						<Link href={"/"}>
							<span className="h-5 w-5">
								<FaInstagram />
							</span>
						</Link>
						<Link href={"/"}>
							<span className="h-5 w-5">
								<FaYoutube />
							</span>
						</Link>
						<Link href={"/"}>
							<span className="h-5 w-5">
								<FaPinterest />
							</span>
						</Link>
						{/* <a href="#"><img src="/facebook-icon.png" alt="Facebook" className="h-5 w-5" /></a> */}
						{/* <a href="#"><img src="/twitter-icon.png" alt="Twitter" className="h-5 w-5" /></a> */}
						{/* <a href="#"><img src="/instagram-icon.png" alt="Instagram" className="h-5 w-5" /></a> */}
						{/* <a href="#"><img src="/youtube-icon.png" alt="YouTube" className="h-5 w-5" /></a> */}
						{/* <a href="#"><img src="/pinterest-icon.png" alt="Pinterest" className="h-5 w-5" /></a> */}
					</div>
				</div>
				<div className="w-full md:w-1/5 mb-8 md:mb-0">
					<h3 className="font-bold mb-4">COMPANY</h3>
					<ul>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								About Us
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Careers
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Affiliates
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Blog
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<div className="w-full md:w-1/5 mb-8 md:mb-0">
					<h3 className="font-bold mb-4">SHOP</h3>
					<ul>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								New Arrivals
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Accessories
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Men
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Women
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Shop All
							</a>
						</li>
					</ul>
				</div>
				<div className="w-full md:w-1/5 mb-8 md:mb-0">
					<h3 className="font-bold mb-4">HELP</h3>
					<ul>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Customer Service
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								My Account
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Find a Store
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Legal & Privacy
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="hover:underline">
								Gift Card
							</a>
						</li>
					</ul>
				</div>
				<div className="w-full md:w-1/5">
					<h3 className="font-bold mb-4">SUBSCRIBE</h3>
					<p className="mb-4">
						Be the first to get the latest news about trends, promotions, and
						much more!
					</p>
					<div className="flex mb-4">
						<input
							type="email"
							className="border border-gray-300 rounded-l px-4 py-2 w-full"
							placeholder="Your email address"
						/>
						<button className="bg-gray-800 text-white rounded-r px-4 py-2">
							JOIN
						</button>
					</div>
					<div className="flex space-x-4">
						{/* <img src="/discover-icon.png" alt="Discover" className="h-8" /> */}
						{/* <img src="/mastercard-icon.png" alt="MasterCard" className="h-8" /> */}
						{/* <img src="/paypal-icon.png" alt="PayPal" className="h-8" /> */}
						{/* <img src="/skrill-icon.png" alt="Skrill" className="h-8" /> */}
						{/* <img src="/visa-icon.png" alt="Visa" className="h-8" /> */}
					</div>
				</div>
			</div>
			<div className="container mx-auto mt-10 border-t border-gray-300 pt-4 flex justify-between text-sm">
				<p>©2024 Uomo</p>
				<div className="flex space-x-4">
					<a href="#">
						Language <span className="font-bold">United Kingdom | English</span>
					</a>
					<a href="#">
						Currency <span className="font-bold">$ USD</span>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
