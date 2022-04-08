import React from "react";
import Cover from "../common/Cover";
import ServicesAll from "./section/ServicesAll";
import Choose from "./section/Choose";

function Services() {
	const services = {
		cover: {
			sec_bg: "/images/offering-20190301-digitaldna-hero.jpg",
			heading: "Our Services",
		},
		serve: {
			block: [
				{
					id: 1,
					src: "/images/web_design.jpg",
					title: "Website Design",
					link: "/services/service-detail",
				},
				{
					id: 2,
					src: "/images/seo.jpg",
					title: "Search Engine Optimization",
					link: "/services/service-detail",
				},
				{
					id: 3,
					src: "/images/ppc.jpg",
					title: "Pay Per Click (PPC) Marketing",
					link: "/services/service-detail",
				},
				{
					id: 4,
					src: "/images/graphic_design.jpg",
					title: "Graphic Design",
					link: "/services/service-detail",
				},
				{
					id: 5,
					src: "/images/social_media_marketing.jpg",
					title: "Social Media Marketing",
					link: "/services/service-detail",
				},
				{
					id: 6,
					src: "/images/email_marketing.jpg",
					title: "Email Marketing",
					link: "/services/service-detail",
				},
			],
		},
		choose: {
			heading: "Why ",
			heading_ex: "choose us?",
			block: [
				{
					id: 1,
					icon: "/images/icon-roller.svg",
					title: "We Research",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis quia veritatis nihil excepturi iure.",
				},
				{
					id: 2,
					icon: "/images/icon-stats-up.svg",
					title: "We Plan",
					para: "Accus antium verita tisdel ectus aliquam itaque illum odit sim ilique num quam dolo rem doloremque impe dit, lauda ntium error!",
				},
				{
					id: 3,
					icon: "/images/icon-blackboard.svg",
					title: "We Execute",
					para: "Optio reiciendis minima sunt debitis ea reprehenderit, ipsa et dolores nihil animi maxime rem labore, debitis modi.",
				},
				{
					id: 4,
					icon: "/images/icon-unlock.svg",
					title: "We Analyze",
					para: "Facere similique quisquam tempora soluta, molestias quis dolorum tempore eum quidem ipsa ratione at commodi porro.",
				},
			],
		},
	};
	return (
		<>
			<Cover data={services.cover} />
			<ServicesAll data={services.serve} />
			<Choose data={services.choose} />
		</>
	);
}

export default Services;
