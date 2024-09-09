import Banner from "@/components/Banner/Banner";

import HotList from "@/components/Hotlist/Hotlist";
import LimitedEdition from "@/components/LimitedEdition/LimitedEdition";
import SpringCollection from "@/components/SpringCollection/SpringCollection";
import Team from "@/components/Team/Team";
import TrendingProduct from "@/components/TrendingProducts/TrendingProducts";

export default function Home() {
	return (
		<main>
			<Banner />
			<HotList />
			<TrendingProduct />
			<SpringCollection />
			<LimitedEdition />
			<Team />
		</main>
	);
}
