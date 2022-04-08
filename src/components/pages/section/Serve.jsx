import React from "react";
import ServiceBlk from "../../common/ServiceBlk";

function Choose({ data }) {
	return (
		<>
			<section id="serve">
				<div className="contain text-center">
					<div className="content">
						<h1>
							{data.heading}
							<strong>{data.heading_ex}</strong>
						</h1>
						<p>{data.para}</p>
					</div>
					<div className="flex_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<ServiceBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Choose;
