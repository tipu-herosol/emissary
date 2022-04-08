import React from "react";
import ChooseBlk from "../../common/ChooseBlk";

function Choose({ data }) {
	return (
		<>
			<section id="choose">
				<div className="contain text-center">
					<div className="content">
						<h1>
							{data.heading}
							<strong>{data.heading_ex}</strong>
						</h1>
					</div>
					<div className="flex_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<ChooseBlk {...val} />
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
