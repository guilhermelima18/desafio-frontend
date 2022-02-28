import { ReactNode } from "react";
import { Button as ButtonChakra, ButtonGroupProps } from "@chakra-ui/react";

interface ButtonProps extends ButtonGroupProps {
  children: ReactNode;
  backgroundColor: string;
  width: string;
  color: string;
  bgHover: string;
}

export const Button = ({
  children,
  backgroundColor,
  width,
  color,
  bgHover,
}: ButtonProps) => {
  return (
    <ButtonChakra
      bg={backgroundColor}
      w={width}
      color={color}
      _hover={{ backgroundColor: `${bgHover}` }}
    >
      {children}
    </ButtonChakra>
  );
};
