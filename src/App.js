import "./App.css";
import "antd/dist/antd.min.css";

import AppHeader from "./components/common/AppHeader";
import AppHome from "./views/Home";
import AppFooter from "./components/common/AppFooter";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout className="mainLayout">
			<Header>
				<AppHeader />
			</Header>
			<Content>
				<AppHome />
			</Content>
			<Footer>
				<AppFooter />
			</Footer>
		</Layout>
	);
}

export default App;
