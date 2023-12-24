import React, { useState, useEffect } from 'react';
import { fetchRandomQuote } from './utils/api';
import { Button, Typography, Container, Box } from '@mui/material';

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
    <Box id="quote-box" sx={{
      width: '100%',
      textAlign: 'center',
      padding: '2rem',
      bgcolor: 'grey.100', // for a light grey background
      border: 2,
      borderColor: 'grey.300',
      boxShadow: 6, // adjust for desired shadow effect
      borderRadius: '8px', //for rounded corners
    }}>
      <Typography id="text" variant="h4" gutterBottom>
        {quote}
      </Typography>
      <Typography id="author" variant="body1" fontStyle="italic" gutterBottom>
        - {author}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <Button id="new-quote" variant="contained" color="primary" onClick={getNewQuote}>
          New Quote
        </Button>
        <Button id="tweet-quote" variant="contained" color="primary" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`}>
          Tweet Quote
        </Button>
      </div>
    </Box>
  </Container>
  );
}

export default App;






