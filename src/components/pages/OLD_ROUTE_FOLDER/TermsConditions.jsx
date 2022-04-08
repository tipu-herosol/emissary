import React from "react";
import Cover from "../common/Cover";
import TermsConditionsBlk from "./section/TermsConditionsBlk";

function TermsConditions() {
	const terms = {
		cover: {
			sec_bg: "/images/offering-20190301-digitaldna-hero.jpg",
			heading: "Terms & Conditions",
		},
	};
	return (
		<>
			<Cover data={terms.cover} />
			<TermsConditionsBlk />
		</>
	);
}

export default TermsConditions;
