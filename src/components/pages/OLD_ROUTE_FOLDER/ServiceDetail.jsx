import React from "react";
import Cover from "../common/Cover";
import ServicesDetailBlk from "./section/ServicesDetailBlk";

function ServiceDetail() {
	const detail = {
		cover: {
			sec_bg: "/images/offering-20190301-digitaldna-hero.jpg",
			heading: "Service Detail",
		},
		service: {
			src: "/images/IA360-Sponsored-Article-Featured-Image.jpg",
			heading: "Website Design",
			subtitle: "Match the Best Talent",
			para_01: "We are able to match the best talent in the market for your business requirement.",
			para_02: "Our Talent Acquisition Managers are continuously connecting, building talent networks, and outlining individual talent information; that will be able to provide you with the necessary insight into the skills, background, motivations, and expectations of talent in order to properly assess and profile them.",
			para_03: "Our Marketing and Business Development Managers also take the time to understand your organization, and are able to get a clear overview of the enterprise, the organizational structure, the company values, goals, and culture.",
			para_04: "It is through this process that we are able to quickly endorse talent that have the required skills, background, and experience; for your company.",
		},
	};
	return (
		<>
			<Cover data={detail.cover} />
			<ServicesDetailBlk data={detail.service} />
		</>
	);
}

export default ServiceDetail;
