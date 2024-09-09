import CartPage from "./components/Cart";

export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="max-w-[1140px] pl-[.9375rem] pr-[.9375rem] mr-auto ml-auto">
			<CartPage />
			{children}
		</section>
	);
}
