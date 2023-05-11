import { useCompoundCardContext } from "./context/CompoundCardContext";

function CardImage() {
  const { card } = useCompoundCardContext();
  return (
    <div>
      <img src={card.image} alt="card" />;
    </div>
  );
}

export default CardImage;
