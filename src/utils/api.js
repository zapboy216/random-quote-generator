


export async function fetchRandomQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return {
        content: data.content,
        author: data.author
      };
    } catch (error) {
      console.error('Fetch error:', error);
      return {
        content: 'An error occurred while fetching a new quote',
        author: ''
      };
    }
  }
  