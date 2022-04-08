import React from "react";
import Cover from "../common/Cover";
import ContactUs from "./section/ContactUs";

function Contact() {
	const contact = {
		cover: {
			sec_bg: "/images/offering-20190301-digitaldna-hero.jpg",
			heading: "Contact us",
		},
		contact: {
			heading: "Get in Touch",
			para: "Feel free to ask questions on the phone or contact us through our contact form. Your message will be sent directly to our team to get back to you shortly.",
			subheading: "Questions or comments",
			info_blk: [
				{
					id: 1,
					icon: "/images/icon-map-marker.svg",
					title: "Visit the office",
					text: "22, Hoxton, Wenlock Road, London, N1 7TA",
					// link: "javascript:void(0)",
				},
				{
					id: 2,
					icon: "/images/icon-phone.svg",
					title: "Phone Number",
					text: "+972 54-6203364",
					link: "tel:+972 54-6203364",
				},
				{
					id: 3,
					icon: "/images/icon-envelope-fill.svg",
					title: "Email Address",
					text: "info@aphelion.com",
					link: "mailto:info@aphelion.com",
				},
			],
			form: {
				heading: "Drop us a message",
				btn: "Send Message",
			},
		},
	};
	return (
		<>
			<Cover data={contact.cover} />
			<ContactUs data={contact.contact} />
		</>
	);
}

export default Contact;
