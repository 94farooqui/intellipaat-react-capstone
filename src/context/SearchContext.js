import React, { useState, createContext } from 'react';

export const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // ... (fetch data logic, etc.)

    return (
        <SearchContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                searchResults,
                setSearchResults,
                loading,
                setLoading,
                error,
                setError,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;