import React, { useState } from "react";
import Button from "./Button";

function ContactForm({ formData }) {
	const [formValue, setFormValue] = useState({
		name: "",
		phone: "",
		subject: "",
		email: "",
		comments: "",
	});
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormValue({ ...formValue, [name]: value });
	};
	return (
		<>
			<form action="" method="POST" onSubmit={handleInput}>
				<h5 className="heading color">{formData.heading}</h5>
				<div className="form_row row">
					<div className="col-sm-6">
						<h6 className="require">Name</h6>
						<div className="form_blk">
							<input type="text" name="name" id="name" value={formValue.name} onChange={handleInput} className="input" placeholder="eg: John Wick" />
						</div>
					</div>
					<div className="col-sm-6">
						<h6 className="require">Phone</h6>
						<div className="form_blk">
							<input type="text" name="phone" id="phone" value={formValue.phone} onChange={handleInput} className="input" placeholder="eg: 559-579-8833" />
						</div>
					</div>
					<div className="col-sm-6">
						<h6 className="require">Subject</h6>
						<div className="form_blk">
							<input type="text" name="subject" id="subject" value={formValue.subject} onChange={handleInput} className="input" placeholder="eg: Lorem Ipsum" />
						</div>
					</div>
					<div className="col-sm-6">
						<h6 className="require">Email Address</h6>
						<div className="form_blk">
							<input type="text" name="email" id="email" value={formValue.email} onChange={handleInput} className="input" placeholder="eg: sample@gmail.com" />
						</div>
					</div>
					<div className="col-sm-12">
						<h6>Comments</h6>
						<div className="form_blk">
							<textarea name="comments" id="comments" value={formValue.comments} onChange={handleInput} className="input" placeholder="Type something here"></textarea>
						</div>
					</div>
				</div>
				<div className="btn_blk form_btn">
					<Button className="long round" text={formData.btn} size="lg" type="submit"></Button>
				</div>
			</form>
		</>
	);
}

export default ContactForm;
