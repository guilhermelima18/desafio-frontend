import { Oval } from "react-loader-spinner";

type LoadingProps = {
  width?: string;
  height?: string;
};

export const Loading = ({ width, height }: LoadingProps) => {
  return (
    <Oval
      width={width ? width : "70"}
      height={height ? height : "70"}
      color="var(--primary-color)"
      ariaLabel="loading"
    />
  );
};
