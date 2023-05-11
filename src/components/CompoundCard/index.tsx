import { ReactNode } from "react";
import { ICard } from "../../types";
import CompoundCardContext from "./context/CompoundCardContext";
import CardInfo from "./CardInfo";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardImage from "./CardImage";
import CardBtn from "./CardBtn";

type Props = {
  card: ICard;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

function CompoundCard({ card, image, info, action }: Props) {
  return (
    <CompoundCardContext.Provider value={{ card }}>
      <div>
        {image}
        <div>
          {info}
          {action}
        </div>
      </div>
    </CompoundCardContext.Provider>
  );
}

// Attach sub-components to CompoundCard so that they can be imported from CompoundCard
CompoundCard.Info = CardInfo;
CompoundCard.Title = CardTitle;
CompoundCard.Desc = CardDesc;
CompoundCard.Image = CardImage;
CompoundCard.Btn = CardBtn;

export default CompoundCard;
