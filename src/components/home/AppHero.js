import React from "react";
import { Carousel, Button } from "antd";

const items = [
	{
		key: "1",
		title: "Web and mobile payment built for developers",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
	},
	{
		key: "2",
		title: "Work better together. Schedule meetings",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
	},
	{
		key: "3",
		title: "The best app to increase your productivity",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
	},
];

function AppHero() {
	return (
		<div id="hero" className="heroBlock">
			<Carousel>
				{items.map((item) => {
					return (
						<div className="container-fluid" key={item.key}>
							<div className="content">
								<h3>{item.title}</h3>
								<p>{item.content}</p>
								<div className="btnHolder">
									<Button type="primary" size="large">
										Learn more
									</Button>
									<Button size="large">
										<i className="fas fa-desktop"></i>
										Watch a demo
									</Button>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

export default AppHero;
