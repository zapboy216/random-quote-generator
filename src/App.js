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
    <Container id="quote-box">
      <Typography id="text">{quote}</Typography>
      <Typography id="author">{author}</Typography>
      <Button id="new-quote" onClick={getNewQuote}>New Quote</Button>
      <Button id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`}>Tweet Quote</Button>
    </Container>
  );
}

export default App;
