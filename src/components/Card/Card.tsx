import { Card, CardContent, Typography } from "@mui/material";
import { CardProps } from "../../types/types";

const CardCharacter: React.FC<CardProps> = ({ name, status, created }) => {
    return (
        <>
            <Card >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {status}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {created}
                </Typography>
            </CardContent>
            </Card>
        </>
    )
}

export default CardCharacter;