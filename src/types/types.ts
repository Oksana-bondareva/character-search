export interface Character {
    name: string;
    species: string;
    status: string;
    created: string;
    url: string;
}

export interface CardProps {
    character: Character;
}

export interface CardListProps {
    characters: Character[];
}

export interface SearchProps {
    onSearch: (searchTerm: string, signal?: AbortSignal) => void;
}

export interface ApiResponse {
    info: {
        count: number;
    };
    results: Character[];
}