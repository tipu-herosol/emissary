import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";

function Footer() {
	const data = {
		list: [
			{
				id: 1,
				text: "Privacy Policy",
				link: "/privacy-policy",
			},
			{
				id: 2,
				text: "Terms & conditions",
				link: "/terms-conditions",
			},
			{
				id: 3,
				text: "Disclaimer",
				link: "/disclaimer",
			},
		],
	};
	return (
		<>
			<footer>
				<div className="contain">
					<Logo />
					<Newsletter />
					<ul className="list">
						{data.list.map((val) => {
							return (
								<li key={val.id}>
									<Link to={val.link}>{val.text}</Link>
								</li>
							);
						})}
					</ul>
					<p className="copyright text-center">
						Copyright © 2022 <Link to="/">Emissary Recruiting Solutions, Inc.</Link> All rights reserved.
					</p>
					<SocialLinks />
				</div>
			</footer>
		</>
	);
}

export default Footer;
