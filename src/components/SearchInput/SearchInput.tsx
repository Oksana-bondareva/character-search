import { Box, Paper } from "@mui/material";
import "./SearchInput.css";

const SearchInput = () => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="30vw"
            >
                <Paper
                    elevation={4}
                    sx={{
                        padding: 2,
                        width: { xs: '90%', sm: '400px' },
                        maxWidth: '400px',
                        position: 'fixed',
                        top: 50,
                    }}
                >
                    <input
                        type="text"
                        placeholder="Search characters..."
                        autoFocus
                        className="custom-input"
                    />
                </Paper>
            </Box>
        </>
    )
}

export default SearchInput