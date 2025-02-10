import { Card, CardContent, Typography } from "@mui/material";
import { CardProps } from "../../types/types";

const CardCharacter: React.FC<CardProps> = ({ character }) => {
    return (
        <>
            <Card >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {character.status}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {character.created}
                </Typography>
            </CardContent>
            </Card>
        </>
    )
}

export default CardCharacter;