"use client";

import Image from "next/image";
import Styles from "@/components/Navigation/Navbar.module.css";
import Link from "next/link";
import { FaRegUser, FaRegHeart, FaSearch } from "react-icons/fa";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdChevronRight } from "react-icons/md";
import { Jost } from "next/font/google";
import { useEffect, useState } from "react";
import { totalCartItemSelector } from "@/lib/redux/cartSlice";
import { useAppSelector } from "@/lib/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
	const router = useRouter();
	const scrollDirection = useScrollDirection();
	const cartItems = useAppSelector(totalCartItemSelector);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleNavigation = (path: string) => {
		setIsMenuOpen(false);
		router.push(path);
	};

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

					{/* Desktop Navigation */}
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

				{/* Enhanced Mobile Navigation Menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto"
						>
							<div className="p-4 space-y-6">
								<div className="flex justify-between items-center pb-4 border-b border-gray-200">
									<div className="flex items-center">
										<span
											className={`${jost.className} text-2xl lg:text-3xl text-amber-950 font-black`}
										>
											F O S
										</span>
										<span className="w-2 h-2 lg:w-3 lg:h-3 bg-red-950 rounded-full ml-2"></span>
									</div>
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
								<div className="relative">
									<FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
									<input
										type="text"
										placeholder="Search products"
										className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-950"
									/>
								</div>
								<ul className="space-y-2">
									{["HOME", "SHOP", "BLOG", "PAGES", "ABOUT", "CONTACT"].map(
										(item) => (
											<motion.li
												key={item}
												whileTap={{ scale: 0.95 }}
												className="border-b border-gray-200"
											>
												<button
													onClick={() =>
														handleNavigation(
															item === "HOME" ? "/" : `/${item.toLowerCase()}`
														)
													}
													className="flex justify-between items-center w-full p-3 text-left"
												>
													<span className="text-lg font-medium">{item}</span>
													<MdChevronRight className="text-gray-400" size={24} />
												</button>
											</motion.li>
										)
									)}
								</ul>
								<div className="pt-4 border-t border-gray-200">
									<button
										onClick={() => handleNavigation("/account")}
										className="flex items-center space-x-3 w-full p-3 text-left"
									>
										<FaRegUser size={20} />
										<span className="text-lg font-medium">MY ACCOUNT</span>
									</button>
								</div>
								<div className="text-sm text-gray-600">
									<p>Language</p>
									<p className="font-medium">United Kingdom | English</p>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navigation;
