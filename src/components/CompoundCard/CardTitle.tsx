import { useCompoundCardContext } from "./context/CompoundCardContext";

function CardTitle() {
  const { card } = useCompoundCardContext();
  return <h2>{card.title}</h2>;
}

export default CardTitle;
