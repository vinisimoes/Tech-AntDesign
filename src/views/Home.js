import React from "react";

import AppHero from "../components/home/AppHero";
import AppAbout from "../components/home/AppAbout";
import AppFeature from "../components/home/AppFeature";
import AppWorks from "../components/home/AppWorks";
import AppFaq from "../components/home/AppFaq";
import AppPricing from "../components/home/AppPricing";
import AppContact from "../components/home/AppContact";

function AppHome() {
	return (
		<div className="main">
			<AppHero />
			<AppAbout />
			<AppFeature />
			<AppWorks />
			<AppFaq />
			<AppPricing />
			<AppContact />
		</div>
	);
}

export default AppHome;
