"use client";
import Image from "next/image";
import Styles from "@/components/Navigation/Navbar.module.css";
import Link from "next/link";
import { FaRegUser, FaRegHeart, FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdChevronRight } from "react-icons/md";
import { Jost } from "next/font/google";
import { useEffect, useState } from "react";
import { totalCartItemSelector } from "@/lib/redux/cartSlice";
import { useAppSelector } from "@/lib/redux/store";
import { usePathname, useRouter } from "next/navigation";

const jost = Jost({
	weight: "900",
	subsets: ["latin"],
});

type ScrollDirection = "up" | "down" | null;

const useScrollDirection = (): ScrollDirection => {
	const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

	useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			const direction: ScrollDirection = scrollY > lastScrollY ? "down" : "up";
			if (
				direction !== scrollDirection &&
				Math.abs(scrollY - lastScrollY) > 10
			) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};

		window.addEventListener("scroll", updateScrollDirection);
		return () => {
			window.removeEventListener("scroll", updateScrollDirection);
		};
	}, [scrollDirection]);

	return scrollDirection;
};

const Navigation = () => {
	const pathname = usePathname();
	const scrollDirection = useScrollDirection();
	const cartItems = useAppSelector(totalCartItemSelector);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		document.body.classList.toggle("overflow-hidden", !isMenuOpen);
	};

	useEffect(() => {
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return (
		<nav
			className={`${Styles.navbar} ${
				scrollDirection === "down" ? `${Styles.navbarHidden}` : ""
			} flex items-center w-full bg-white`}
		>
			<div className="w-full px-4 lg:px-16 py-4 lg:py-6">
				<div className="flex items-center justify-between">
					{/* Logo Section */}
					<div className="flex items-center">
						<span
							className={`${jost.className} text-2xl lg:text-3xl text-amber-950 font-black`}
						>
							F O S
						</span>
						<span className="w-2 h-2 lg:w-3 lg:h-3 bg-red-950 rounded-full ml-2"></span>
					</div>

					<ul className="hidden lg:flex lg:gap-8 items-center space-x-6 text-base">
						{["HOME", "SHOP", "BLOG", "PAGES", "ABOUT", "CONTACT"].map(
							(item) => (
								<li
									key={item}
									className="hover:text-red-600 transition-all duration-500"
								>
									<Link
										href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
										className={`${
											pathname ===
											(item === "HOME" ? "/" : `/${item.toLowerCase()}`)
												? "text-red-600"
												: "text-inherit"
										}`}
									>
										{item}
									</Link>
								</li>
							)
						)}
					</ul>

					{/* Icons Section */}
					<div className="flex items-center space-x-4 lg:space-x-8">
						<Link href="/search" className="hidden lg:block">
							<FaSearch fontSize={20} />
						</Link>
						<Link href="/user" className="hidden lg:block">
							<FaRegUser fontSize={20} />
						</Link>
						<Link href="/wishlist" className="hidden lg:block">
							<FaRegHeart fontSize={20} />
						</Link>
						<Link href="/cart" className="relative">
							<HiOutlineShoppingBag fontSize={25} />
							<span className="absolute -top-2 -right-2 text-xs bg-[#b9a16b] text-white rounded-full w-4 h-4 flex items-center justify-center">
								{cartItems}
							</span>
						</Link>
						<button
							onClick={toggleMenu}
							className="lg:hidden"
							aria-label="Toggle menu"
						>
							{isMenuOpen ? (
								<RiCloseLine fontSize={30} />
							) : (
								<RiMenu2Line fontSize={30} />
							)}
						</button>
						<Link href="/menu" className="hidden lg:block">
							<RiMenu2Line fontSize={20} />
						</Link>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className={`lg:hidden ${
						isMenuOpen ? "block" : "hidden"
					} mt-4 border-t pt-4 h-screen`}
				>
					<div className="mb-4">
						<input
							type="text"
							placeholder="Search products"
							className="w-full p-2 border rounded"
						/>
					</div>
					<ul className="space-y-2">
						{["HOME", "SHOP", "BLOG", "PAGES", "ABOUT", "CONTACT"].map(
							(item) => (
								<li
									key={item}
									className="flex justify-between items-center p-2 border-b"
								>
									<Link
										href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
										className="text-base font-medium"
									>
										{item}
									</Link>
									<MdChevronRight className="w-6 h-6" />
								</li>
							)
						)}
					</ul>
					<div className="mt-4 pt-4 border-t">
						<div className="flex items-center gap-4 mb-2">
							<FaRegUser className="text-base font-medium w-6 h-6" />
							<span className="text-base font-medium">MY ACCOUNT</span>
						</div>
						<p>
							Language <span>United Kingdom | English</span>
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
