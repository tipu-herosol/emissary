import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
	const [toggle, setToggle] = useState(false);
	const ToggleActive = () => {
		setToggle(!toggle);
	};

	return (
		<>
			<header>
				<div className="contain">
					<Logo />
					<button type="button" className={!toggle ? "toggle" : "toggle active"} onClick={() => ToggleActive(!toggle)}>
						<span></span>
					</button>
					<Navigation active={toggle} toggle={ToggleActive} />
					<div className="clearfix"></div>
				</div>
			</header>
		</>
	);
}

export default Header;
