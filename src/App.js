import React from "react";
import styled from "styled-components";

import { measure } from "./utils/measure";
import Input from "./components/Input";

function App() {
	React.useEffect(() => {
		const el = document.querySelector("input");

		const onChange = props => {
			const { el, updates } = props;
			console.log(el, updates);
		};

		const shpee = measure({
			el,
			styles: ["width"],
			onChange
		});

		shpee.start();
	}, []);
	return (
		<AppUI>
			<Input />
		</AppUI>
	);
}

export const AppUI = styled("div")`
	background-color: #fff;
	color: #212529;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	font-size: 14px;
	font-weight: 400;
	line-height: 1.5;
	text-align: left;
	box-sizing: border-box;
	margin: 0;

	* {
		box-sizing: border-box;
	}
`;

export default App;
