import React from "react";
import data from "../dummy";
import Banner from "./section/Banner";
import Serve from "./section/Serve";
import Intro from "./section/Intro";
import Choose from "./section/Choose";
import Assets from "./section/Assets";
import Posts from "./section/Posts";

function Home(props) {
	const { banner, serve, intro, choose, assets, posts } = data.home;
	return (
		<>
			<Banner data={banner} />
			<Serve data={serve} />
			<Intro data={intro} />
			<Choose data={choose} />
			<Assets data={assets} show={props.popup} />
			<Posts data={posts} />
		</>
	);
}

export default Home;
