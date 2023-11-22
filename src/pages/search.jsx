import React, { useState, useEffect } from 'react';

function SearchComponent() {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State to store the search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle changes in the search input
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch data from an API based on the search query
      const response = await fetch(`https://media-content.ccbp.in/website/react-assignment/resources.json`);
      const data = await response.json();

      // Update the state with the search results
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Render the search results
  const renderResults = () => {
    return (
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
          // Adjust this based on the structure of your API response
        ))}
      </ul>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input field for search with value bound to state and onChange event */}
        <input id='search4'
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        {/* Submit button */}
        <button id='submit' type="submit">Search</button>
      </form>
      
      {/* Display search results */}
      {searchResults.length > 0 && renderResults()}
    </div>
  );
}

export default SearchComponent;
