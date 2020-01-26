declare module "*.mdx";

interface ButtonTheme {
  theme?: "primary" | "secondary" | "tertiary";
}

interface ButtonProps extends ButtonTheme {
  children: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void | undefined;
}
