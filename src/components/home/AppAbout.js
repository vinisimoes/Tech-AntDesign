import React from "react";
import { Row, Col } from "antd";

const items = [
	{
		key: "1",
		icon: <i className="fas fa-chart-pie"></i>,
		title: "High performance",
		content: "Reprehenderit laborum officia eiusmod quis.",
	},
	{
		key: "2",
		icon: <i className="fas fa-desktop"></i>,
		title: "Flat design",
		content:
			"Lorem ex proident consectetur fugiat amet nulla ea eiusmod reprehenderit mollit laboris in dolore.",
	},
	{
		key: "3",
		icon: <i className="fas fa-database"></i>,
		title: "Simplified workflow",
		content: "Veniam dolor ex cillum in elit voluptate fugiat.",
	},
];

function AppAbout() {
	return (
		<div id="about" className="block aboutBlock">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>About Us</h2>
					<p>
						Id laboris pariatur exercitation velit proident occaecat mollit
						eiusmod.
					</p>
				</div>
				<div className="contentHolder">
					<p>
						Consectetur officia cupidatat quis culpa minim eu enim esse sit
						ullamco commodo elit. Dolore magna dolore sunt fugiat aliqua.
						Laborum irure ad aliqua aliquip commodo Lorem. Laboris dolore quis
						elit dolor duis eu mollit consectetur officia. Laborum deserunt
						nulla non quis qui laborum est. Consequat Lorem esse veniam
						exercitation id mollit.
					</p>
				</div>
				<Row gutter={[16, 16]}>
					{items.map((item) => {
						return (
							<Col span="8" key={item.key}>
								<div className="content">
									<div className="icon">{item.icon}</div>
									<h3>{item.title}</h3>
									<p>{item.content}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
}

export default AppAbout;
