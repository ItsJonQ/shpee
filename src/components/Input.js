import { createElement, forwardRef } from "@wordpress/element";
import styled from "styled-components";

export function Input(props, ref) {
	return createElement(InputUI, {
		...props
	});
}

export const InputUI = styled("input")`
	display: block;
	width: 100%;
	height: calc(36px + 2px);
	padding: 6px 12px;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 4px;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	&:focus {
		color: #495057;
		background-color: #fff;
		border-color: #50aaff;
		outline: 0;
		box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
	}
`;

export default forwardRef(Input);
