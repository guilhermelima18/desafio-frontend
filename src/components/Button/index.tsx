import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  marginTop?: string;
}

export const Button = ({ children, marginTop, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer style={{ marginTop: `${marginTop}` }} {...rest}>
      {children}
    </ButtonContainer>
  );
};
