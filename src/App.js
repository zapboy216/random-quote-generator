import React, { useState, useEffect } from 'react';
import { fetchRandomQuote } from './utils/api'; // Update the path as necessary
import { Button, Typography, Container } from '@mui/material';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getNewQuote = async () => {
    const { content, author } = await fetchRandomQuote();
    setQuote(content);
    setAuthor(author);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
    <div id="quote-box" style={{ width: '100%', textAlign: 'center' }}>
      <Typography id="text" variant="h5" gutterBottom>
        {quote}
      </Typography>
      <Typography id="author" variant="body1" fontStyle="italic" gutterBottom>
        - {author}
      </Typography>
      <Button id="new-quote" variant="contained" color="primary" style={{ margin: '1rem' }}>
        New Quote
      </Button>
      <Button id="tweet-quote" variant="contained" color="secondary" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`}>
        Tweet Quote
      </Button>
    </div>
  </Container>
  );
}

export default App;






