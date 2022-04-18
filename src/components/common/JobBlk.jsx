import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobBlk = ({ src, alt, title, link, company, company_link, act_btn }) => {
	const [formVal, setFormVal] = useState({
		application: "",
		online_test: "",
		interview_01: "",
		interview_02: "",
		interview_final: "",
		job_offer: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
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
				<div className="btm">
					<form action="" method="POST">
						<div className="form_row row">
							<div className="col-sm-2">
								<h6>Application Submitted</h6>
								<div className="form_blk">
									<select name="application" id="application" value={formVal.application} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="Option_01">Option 01</option>
										<option value="Option_02">Option 02</option>
										<option value="Option_03">Option 03</option>
										<option value="Option_04">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-sm-2">
								<h6>Online Test</h6>
								<div className="form_blk">
									<select name="online_test" id="online_test" value={formVal.online_test} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="Option_01">Option 01</option>
										<option value="Option_02">Option 02</option>
										<option value="Option_03">Option 03</option>
										<option value="Option_04">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-sm-2">
								<h6>Interview</h6>
								<div className="form_blk">
									<select name="interview_01" id="interview_01" value={formVal.interview_01} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="Option_01">Option 01</option>
										<option value="Option_02">Option 02</option>
										<option value="Option_03">Option 03</option>
										<option value="Option_04">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-sm-2">
								<h6>2nd Round Interview</h6>
								<div className="form_blk">
									<select name="interview_02" id="interview_02" value={formVal.interview_02} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="Option_01">Option 01</option>
										<option value="Option_02">Option 02</option>
										<option value="Option_03">Option 03</option>
										<option value="Option_04">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-sm-2">
								<h6>Final Round Interview</h6>
								<div className="form_blk">
									<select name="interview_final" id="interview_final" value={formVal.interview_final} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="Option_01">Option 01</option>
										<option value="Option_02">Option 02</option>
										<option value="Option_03">Option 03</option>
										<option value="Option_04">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-sm-2">
								<h6>Offer</h6>
								<div className="form_blk">
									<select name="job_offer" id="job_offer" value={formVal.job_offer} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="Option_01">Option 01</option>
										<option value="Option_02">Option 02</option>
										<option value="Option_03">Option 03</option>
										<option value="Option_04">Option 04</option>
									</select>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default JobBlk;
