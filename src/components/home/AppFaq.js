import React from "react";
import { Button } from "antd";
import { Collapse } from "antd";
const { Panel } = Collapse;

function AppFaq() {
	const onChange = (key) => {
		console.log(key);
	};

	return (
		<div id="faq" className="block faqBlock">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Frequently Asked Questions</h2>
					<p>
						Consequat anim veniam in pariatur eiusmod. Elit anim cupidatat amet
						aliqua labore quis.
					</p>
				</div>
				<Collapse defaultActiveKey={["1"]} onChange={onChange}>
					<Panel header="How to set up the theme?" key="1">
						<p>
							Labore aliquip ea cillum tempor irure occaecat id dolore id
							reprehenderit. Et eu deserunt nisi ea veniam. Voluptate laboris
							ipsum cupidatat sunt nulla nisi adipisicing Lorem minim nisi.
							Labore sunt in sunt exercitation occaecat exercitation. Cillum in
							sint ea aliquip incididunt cillum irure nisi. Velit occaecat velit
							deserunt nulla Lorem voluptate laboris deserunt amet exercitation
							in et proident nisi. Est eu qui consectetur reprehenderit.
						</p>
					</Panel>
					<Panel header="Can I change plan or cancel at any time?" key="2">
						<p>
							In esse anim aliqua cupidatat sunt proident cupidatat ea. Id
							consequat ea sunt consequat non esse duis magna eu velit cillum
							aliquip. Culpa elit occaecat tempor excepteur.
						</p>
					</Panel>
					<Panel header="How to access through cloud?" key="3">
						<p>
							Deserunt ullamco aliquip exercitation incididunt duis. Ea culpa
							minim irure magna nostrud nisi est ex amet voluptate id. Consequat
							minim commodo nostrud amet elit dolore dolore sint laboris
							incididunt ipsum excepteur id exercitation. Enim enim deserunt
							amet amet ut exercitation irure quis ipsum nulla occaecat dolor
							quis occaecat. Nostrud irure laboris duis amet ad. Excepteur enim
							dolor voluptate minim nulla cupidatat aliqua aute deserunt. In
							reprehenderit veniam duis voluptate.
						</p>
					</Panel>
					<Panel header="Can I manage multiple tasks?" key="4">
						<p>
							Ad mollit nulla velit veniam dolore est reprehenderit aliqua
							laboris ad est sint mollit dolore. Minim amet Lorem esse et
							cupidatat esse pariatur reprehenderit do in amet exercitation
							nulla consequat. Velit elit voluptate ut veniam in. Sit anim
							reprehenderit exercitation id irure amet dolore mollit aliquip
							culpa.
						</p>
					</Panel>
					<Panel header="How can I change my password?" key="5">
						<p>
							Elit nulla dolore et labore culpa deserunt cupidatat quis
							deserunt. Proident cillum cillum nostrud occaecat excepteur.
							Occaecat adipisicing labore aliquip sint incididunt duis
							adipisicing eu nisi ea consequat consequat. Incididunt adipisicing
							culpa proident magna culpa magna consequat enim veniam. Aliquip
							consequat laboris quis consequat ut aliqua eu cillum enim ipsum
							incididunt.
						</p>
					</Panel>
				</Collapse>
				<div className="quickSupport">
					<h3>Want quick support?</h3>
					<p>
						Exercitation quis enim quis pariatur ullamco non eu velit tempor
						quis in ullamco tempor elit. Sint consectetur occaecat minim id
						voluptate do enim et duis. Laborum nulla ut aliquip eu dolor elit
						est adipisicing et aliqua eiusmod.
					</p>
					<Button type="primary" size="large">
						<i className="fas fa-envelope" />
						Email your question
					</Button>
				</div>
			</div>
		</div>
	);
}

export default AppFaq;
