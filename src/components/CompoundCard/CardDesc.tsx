import { useCompoundCardContext } from "./context/CompoundCardContext";

function CardDesc() {
  const { card } = useCompoundCardContext();
  return <p>{card.description}</p>;
}

export default CardDesc;
