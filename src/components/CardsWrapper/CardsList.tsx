import { CardListProps } from "../../types/types";
import CardCharacter from "../Card/Card";

const CardsList: React.FC<CardListProps> = ({ characters }) => {
    return (
        <>
            {characters.map((character, index) => (
                <CardCharacter key={index} character={character} />
            ))}
        </>
    )
}

export default CardsList;