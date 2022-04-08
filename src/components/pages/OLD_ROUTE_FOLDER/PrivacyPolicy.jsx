import React from "react";
import Cover from "../common/Cover";
import PrivacyPolicyBlk from "./section/PrivacyPolicyBlk";

function PrivacyPolicy() {
	const privacy = {
		cover: {
			sec_bg: "/images/offering-20190301-digitaldna-hero.jpg",
			heading: "Privacy Policy",
		},
	};
	return (
		<>
			<Cover data={privacy.cover} />
			<PrivacyPolicyBlk />
		</>
	);
}

export default PrivacyPolicy;
