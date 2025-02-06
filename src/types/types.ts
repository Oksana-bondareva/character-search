export interface CardProps {
    name: string;
    status: string;
    created: string;
}

export interface SearchProps {
    onSearch: (searchTerm: string) => void;
}