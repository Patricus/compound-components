import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

function CardInfo({ children }: Props) {
  return <div>{children}</div>;
}

export default CardInfo;
