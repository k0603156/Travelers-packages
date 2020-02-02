import React from "react";
interface ButtonTheme {
    theme?: "primary" | "secondary" | "tertiary";
}
interface ButtonProps extends ButtonTheme {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | undefined;
}
declare const button: ({ children, onClick, theme }: ButtonProps) => JSX.Element;
export default button;
