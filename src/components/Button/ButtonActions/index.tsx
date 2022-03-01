import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonAction } from "./styles";

interface ButtonActionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width: string;
  height: string;
}

export const ButtonActions = ({
  children,
  width,
  height,
  ...rest
}: ButtonActionsProps) => {
  return (
    <ButtonAction style={{ width: `${width}`, height: `${height}` }} {...rest}>
      {children}
    </ButtonAction>
  );
};
