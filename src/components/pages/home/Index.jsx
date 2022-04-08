import React from "react";
import Data from "../../dummy";
import Banner from "./Banner";
import Brands from "./Brands";
import Blocks from "./Blocks";
import Serve from "./Serve";
import Posts from "./Posts";

const Home = () => {
	const { banner, brands, blocks, serve, posts } = Data.home;
	return (
		<>
			<Banner data={banner} />
			<Brands data={brands} />
			<Blocks data={blocks} />
			<Serve data={serve} />
			<Posts data={posts} />
		</>
	);
};

export default Home;
