import { ReactNode } from "react";
import { useCompoundCardContext } from "./context/CompoundCardContext";
import { ICard } from "../../types";

type Props = {
  children: ReactNode;
  onClick: (card: ICard) => void;
};

function CardBtn({ children, onClick }: Props) {
  const { card } = useCompoundCardContext();

  // We create a handleClick function that calls the onClick function passed in as a prop and passes in the card from the context. This is done so that using the CardBtn component outside of the CompoundCard component will error, because we don't want it used outside of the CompoundCard.
  const handleClick = () => {
    onClick(card);
  };
  return <button onClick={handleClick}>{children}</button>;
}

export default CardBtn;
