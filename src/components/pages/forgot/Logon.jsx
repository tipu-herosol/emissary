import React, { useState } from "react";
import { Link } from "react-router-dom";

function Logon({ data }) {
	const [formVal, setFormVal] = useState({
		email: "",
	});
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<section id="logon">
				<div className="contain sm">
					<form action="" method="POST" onSubmit={handleInput}>
						<div className="log_blk">
							<div className="txt text-center">
								<h4>{data.heading}</h4>
								<p>{data.para}</p>
							</div>
							<div className="form_row row">
								<div className="col-xs-12">
									<h6 className="require">Email Address</h6>
									<div className="form_blk">
										<input type="text" name="email" id="email" value={formVal.email} onChange={handleInput} className="input" placeholder="eg: sample@gmail.com" />
									</div>
								</div>
							</div>
							<div className="btn_blk form_btn">
								<button type="submit" className="site_btn block">
									{data.form.btn}
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Logon;
