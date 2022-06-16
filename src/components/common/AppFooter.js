import React from "react";
import { BackTop } from "antd";

function AppFooter() {
	return (
		<div className="container-fluid ">
			<div className="footer">
				<div className="logo">
					<i className="fas fa-bolt" />
					<a href="#">Tech</a>
				</div>
				<ul className="socials">
					<li>
						<a href="http://www.facebook.com">
							<i className="fab fa-facebook-f" />
						</a>
					</li>
					<li>
						<a href="http://www.twitter.com">
							<i className="fab fa-twitter" />
						</a>
					</li>
					<li>
						<a href="http://www.linkedin.com">
							<i className="fab fa-linkedin-in" />
						</a>
					</li>
					<li>
						<a href="http://www.pinterest.com">
							<i className="fab fa-pinterest-p" />
						</a>
					</li>
					<li>
						<a href="http://www.instagram.com">
							<i className="fab fa-instagram" />
						</a>
					</li>
				</ul>
				<div className="copyright">Copyright &copy; 2022 Tech</div>
				<BackTop>
					<div className="goTop">
						<i className="fas fa-arrow-circle-up" />
					</div>
				</BackTop>
			</div>
		</div>
	);
}

export default AppFooter;
