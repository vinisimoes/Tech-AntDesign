import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";

function AppWorks() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div id="works" className="block worksBlock">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>How it works</h2>
					<p>
						In occaecat commodo commodo ea nulla tempor exercitation. Labore ad
						cillum irure voluptate magna quis laboris anim excepteur cillum
						fugiat ut.
					</p>
				</div>
				<div className="contentHolder">
					<Button type="primary" onClick={showModal}>
						<i className="fas fa-play" />
					</Button>
				</div>
				<Modal
					title="Woocommerce tutorial"
					visible={isModalVisible}
					onCancel={handleCancel}
					destroyOnClose={true}
					footer={null}
				>
					<iframe
						title="Woocommerce Tutorial"
						width="100%"
						height="350"
						src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"
					></iframe>
				</Modal>
			</div>
		</div>
	);
}

export default AppWorks;
