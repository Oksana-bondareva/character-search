import { Typography } from "@mui/material";
import { CardListProps } from "../../types/types";
import CardCharacter from "../Card/Card";
import './CardsList.css'

const CardsList: React.FC<CardListProps> = ({ characters }) => {
    return (
        <div className="cardListWrapper">
            {characters.length > 0 && (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Found characters: {characters.length}
                </Typography>
            )}
            <div className="firstRow">
                {characters.slice(0, 2).map((character, index) => (
                    <div
                        key={index}
                        style={{ 
                            height: '260px',
                        }}
                    >
                        <CardCharacter character={character} />
                    </div>
                ))}
            </div>
            <div className="otherRows">
                {characters.slice(2).map((character, index) => (
                    <div 
                        key={index + 2}
                        style={{ 
                            height: '150px',
                        }}
                    >
                        <CardCharacter character={character} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardsList;