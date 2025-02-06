import { Box, Paper } from "@mui/material";
import "./SearchInput.css";
import { SearchProps } from "../../types/types";
import { useEffect, useState } from "react";

const SearchInput: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        if (searchTerm.length > 3) {
            onSearch(searchTerm);
        } else if (searchTerm.length === 0) {
            onSearch('');
        }
    }, [searchTerm, onSearch]);

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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Paper>
            </Box>
        </>
    )
}

export default SearchInput