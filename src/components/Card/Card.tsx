import { Box, Card, CardContent, Typography } from "@mui/material";
import { CardProps } from "../../types/types";
import './Card.css'

const CardCharacter: React.FC<CardProps> = ({ character }) => {
    const formatDate = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
      
        return `${day}.${month}.${year}`;
    };

    return (
        <div className="cardWrapper">
            <a href={character.url} style={{ textDecoration: 'none' }}>
                <Card elevation={4} sx={{ height: '100%' }}>
                    <CardContent sx={{ height: '90%', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography variant="h5" fontFamily='Fira Sans' textAlign='left' margin='0'>
                            {character.name} - {character.species}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Status:{' '}
                                <span 
                                    style={{ 
                                    color: character.status === 'Alive' ? 'green' : 
                                            character.status === 'Dead' ? 'red' : 
                                            'text.secondary',
                                    }}
                                >
                                    {character.status}
                                </span>
                                </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Created: {formatDate(character.created)}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </a>
        </div>
    )
}

export default CardCharacter;