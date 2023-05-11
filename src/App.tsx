import CompoundCard from "./components/CompoundCard";
import { ICard } from "./types";
import "./style/App.css";

const cards: ICard[] = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1",
    image: "https://placehold.co/150",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2",
    image: "https://placehold.co/150",
  },
];

const customCard: ICard = {
  id: 3,
  title: "Custom Card",
  description: "This is a custom card",
  image: "https://placehold.co/250",
};

function App() {
  const clickFunc = (card: ICard) => {
    console.log("Button clicked for card: ", card);
  };

  return (
    <div className="App">
      {cards.map(card => (
        <CompoundCard
          key={card.id}
          // We can pass in the card object as a prop to the CompoundCard component, and then access it in the sub-components using the context API
          card={card}
          image={<CompoundCard.Image />}
          info={
            // Example of using sub-components in CompoundCard with children
            <CompoundCard.Info>
              <CompoundCard.Title />
              <CompoundCard.Desc />
            </CompoundCard.Info>
          }
          action={<CompoundCard.Btn onClick={() => clickFunc(card)}>Button</CompoundCard.Btn>}
        />
      ))}
      <CompoundCard
        card={customCard}
        image={<CompoundCard.Image />}
        info={
          <CompoundCard.Info>
            <CompoundCard.Title />
            {/* We can opt out of using sub-components without breaking the whole component */}
            {/* <CompoundCard.Desc /> */}
          </CompoundCard.Info>
        }
        action={
          <CompoundCard.Btn onClick={() => console.log("Custom button clicked")}>
            Custom Button
          </CompoundCard.Btn>
        }
      />
    </div>
  );
}

export default App;
