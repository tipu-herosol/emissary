import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/pages/home/Index";
// import About from "./components/pages/About";
// import Services from "./components/pages/Services";
// import ServiceDetail from "./components/pages/ServiceDetail";
// import Blog from "./components/pages/Blog";
// import BlogDetail from "./components/pages/BlogDetail";
// import Contact from "./components/pages/Contact";
// import Faq from "./components/pages/Faq";
// import PrivacyPolicy from "./components/pages/PrivacyPolicy";
// import Disclaimer from "./components/pages/Disclaimer";
// import TermsConditions from "./components/pages/TermsConditions";
// import Error from "./components/pages/Error";

import PopupVideo from "./components/common/PopupVideo";

function App() {
	const [state, setState] = useState({
		PopupVideo: false,
	});
	const showPopupVideo = () => {
		setState({ ...state, PopupVideo: true });
	};
	const closePopupVideo = () => {
		setState({ ...state, PopupVideo: false });
	};
	const PageLayout = () => (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route element={<PageLayout />}>
						<Route exact path="/" element={<Home />} />
						{/* <Route exact path="/about" element={<About />} /> */}
						{/* <Route exact path="/" element={<Home popup={showPopupVideo} />} /> */}
						{/* <Route exact path="/about" element={<About popup={showPopupVideo} />} /> */}
						{/* <Route exact path="/services" element={<Services />} /> */}
						{/* <Route exact path="/services/service-detail" element={<ServiceDetail />} /> */}
						{/* <Route exact path="/blog" element={<Blog />} /> */}
						{/* <Route exact path="/blog/blog-detail" element={<BlogDetail />} /> */}
						{/* <Route exact path="/contact" element={<Contact />} /> */}
						{/* <Route exact path="/faq" element={<Faq />} /> */}
						{/* <Route exact path="/privacy-policy" element={<PrivacyPolicy />} /> */}
						{/* <Route exact path="/disclaimer" element={<Disclaimer />} /> */}
						{/* <Route exact path="/terms-conditions" element={<TermsConditions />} /> */}
					</Route>
					{/* <Route path="*" element={<Error />} /> */}
				</Routes>
				{state.PopupVideo === true ? <PopupVideo close={closePopupVideo} /> : ""}
			</BrowserRouter>
		</>
	);
}

export default App;
