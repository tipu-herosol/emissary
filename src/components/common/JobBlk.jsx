import React from "react";
import { Link } from "react-router-dom";

const JobBlk = ({ src, alt, title, link, company, company_link, act_btn }) => {
	return (
		<>
			<div className="job_blk">
				<div className="top">
					<div className="ico fill">
						<img src={src} alt={alt} />
					</div>
					<div className="title">
						<h5>
							<Link to={link}>{title}</Link>
						</h5>
						<div className="company">
							<Link to={company_link}>{company}</Link>
						</div>
					</div>
					<div className="act_btn">
						<Link to="?" className="site_btn sm">
							{act_btn.edit}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobBlk;
