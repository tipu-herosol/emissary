import React from "react";
import Cover from "../common/Cover";
import Intro from "./section/Intro";
import Assets from "./section/Assets";
import Team from "./section/Team";

function About(props) {
	const about = {
		cover: {
			sec_bg: "/images/offering-20190301-digitaldna-hero.jpg",
			heading: "Get to know us",
		},
		intro: {
			heading: "What are ",
			heading_ex: "we doing",
			subtitle: "Hosting opens up a world of opportunity",
			para: "Odit sint debitis soluta perferendis totam aperiam hic eum numquam dolore laboriosam eius id odio commodi, expedita accusamus amet obcaecati ipsum dicta, fuga maxime reiciendis.",
			ul: [
				{
					id: 1,
					li: "Full-service electrical layout, design",
				},
				{
					id: 2,
					li: "Wiring and installation/upgrades",
				},
				{
					id: 3,
					li: "Emergency power solutions (generators)",
				},
				{
					id: 4,
					li: "Virtually any electrical needs you have – just ask!",
				},
			],
			btn: "Contact us",
			btn_link: "/contact",
			src: "/images/group-young-business-377106.jpg",
		},
		assets: {
			sec_bg: "/images/90440-scaled-e1585238886193.jpg",
			heading: "Growing your business and helping with organizing",
			para: "A video is worth 1.8 million words.",
			btn_img_src: "/images/play_icon.svg",
		},
		team: {
			heading: "Team ",
			heading_ex: "Member",
			block: [
				{
					id: 1,
					title: "August Dueholm",
					subtitle: "Presidents",
					src: "/images/01.jpg",
				},
				{
					id: 2,
					title: "Carl Vinter",
					subtitle: "Co-President",
					src: "/images/02.jpg",
				},
				{
					id: 3,
					title: "Sofus Koba",
					subtitle: "Head of Partner Relations",
					src: "/images/03.jpg",
				},
				{
					id: 4,
					title: "Simone Holm",
					subtitle: "Partner Relations Team",
					src: "/images/04.jpg",
				},
			],
		},
	};
	return (
		<>
			<Cover data={about.cover} />
			<Intro data={about.intro} />
			<Assets data={about.assets} show={props.popup} />
			<Team data={about.team} />
		</>
	);
}

export default About;
