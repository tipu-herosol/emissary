import React from "react";

function ServicesDetailBlk({ data }) {
	return (
		<>
			<section id="serve" data-detail>
				<div className="contain text-center">
					<div className="image">
						<img src={data.src} alt="" />
					</div>
					<div className="detail">
						<h4>{data.subtitle}</h4>
						<h2 className="heading color">{data.heading}</h2>
						<p>{data.para_01}</p>
						<p>{data.para_02}</p>
						<p>{data.para_03}</p>
						<p>{data.para_04}</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default ServicesDetailBlk;
