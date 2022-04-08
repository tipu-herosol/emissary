import React from "react";
import Cover from "../common/Cover";
import BlogPosts from "./section/BlogPosts";

function Blog() {
	const blog = {
		cover: {
			sec_bg: "/images/offering-20190301-digitaldna-hero.jpg",
			heading: "Blog Posts",
		},
		posts: {
			block: [
				{
					id: 1,
					title: "9 of the best professional biological examples we have ever seen",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "28 February, 2022",
					src: "/images/Businesswoman hand working light.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 2,
					title: "Blog SEO: How to optimize the search engines for your blog content",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "07 July, 2021",
					src: "/images/email_marketing.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 3,
					title: "Email forwarding tips you must know by 2020",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "19 May 2020",
					src: "/images/graphic_design.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 4,
					title: "The best newsletter templates and resources for download right now",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "17 January 2020",
					src: "/images/social_media_marketing.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 5,
					title: "Google Doc features you didn't know existed (but absolutely needed)",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "30 October 2020",
					src: "/images/Depositphotos_201318592_original.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 6,
					title: "Spoken and repeated jokes to satisfy your inner grammar",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "19 May 2020",
					src: "/images/ppc.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 7,
					title: "The Instagram profile anatomy is perfect",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "17 January 2020",
					src: "/images/group-young-business-377106.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 8,
					title: "25 Tips and Tricks for Marketing on Facebook",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "30 October 2020",
					src: "/images/web_design.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 9,
					title: "How to create infographic in less than an hour ",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "19 May 2020",
					src: "/images/seo.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 10,
					title: "The best time to post on Instagram, Facebook, Twitter and Pinterest",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "07 July, 2021",
					src: "/images/digital-transformation-teaser.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 11,
					title: "13 Blogs Most mistakes bloggers start making",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "07 July, 2021",
					src: "/images/90440-scaled-e1585238886193.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
			],
			category: {
				title: "Categories",
				ul: [
					{
						id: 1,
						li: "Science",
						link: "/blog/blog-detail",
					},
					{
						id: 2,
						li: "Information Technology",
						link: "/blog/blog-detail",
					},
					{
						id: 3,
						li: "Artificial Intelligence",
						link: "/blog/blog-detail",
					},
					{
						id: 4,
						li: "Craftsmanship",
						link: "/blog/blog-detail",
					},
					{
						id: 5,
						li: "Professional Beauty",
						link: "/blog/blog-detail",
					},
					{
						id: 6,
						li: "Agriculture",
						link: "/blog/blog-detail",
					},
				],
			},
		},
	};
	return (
		<>
			<Cover data={blog.cover} />
			<BlogPosts data={blog.posts} />
		</>
	);
}

export default Blog;
