function fetchBooks() {
    // Use fetch to make the API request
    return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the response is OK, otherwise throw an error
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      // Convert the response to JSON
      return response.json()
    }
    )
    .then(data => {
      // Call the renderBooks() function with the JSON-ified data
      renderBooks(data)
      // Return the JSON data for test access
      return data
    }
    )
    .catch(error => {
      console.error('Error fetching books:', error)
    }
    )

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


