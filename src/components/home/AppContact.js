import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
const { TextArea } = Input;

function AppContact() {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<div id="contact" className="block contactBlock">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Get in touch</h2>
					<p>Elit enim excepteur commodo aliqua enim labore.</p>
				</div>
				<Form
					name="normal_form"
					className="form"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name="fullname"
						rules={[
							{
								required: true,
								message: "Please input your full name!",
							},
						]}
					>
						<Input placeholder="Full name" />
					</Form.Item>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email address!",
							},
						]}
					>
						<Input type="email" placeholder="Email address" />
					</Form.Item>
					<Form.Item
						name="telephone"
						rules={[
							{
								message: "Please input your telephone!",
							},
						]}
					>
						<Input type="tel" placeholder="Telephone" />
					</Form.Item>
					<Form.Item
						name="subject"
						rules={[
							{
								message: "Please input the subject!",
							},
						]}
					>
						<Input placeholder="Subject" />
					</Form.Item>
					<Form.Item>
						<TextArea rows={4} placeholder="Message" maxLength={6} />
					</Form.Item>
					<Form.Item
						name="agreement"
						valuePropName="checked"
						rules={[
							{
								validator: (_, value) =>
									value
										? Promise.resolve()
										: Promise.reject(new Error("Should accept agreement")),
							},
						]}
					>
						<Checkbox>I agree with terms and conditions</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default AppContact;
