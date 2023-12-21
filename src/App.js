import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { Box, Modal } from '@mui/material';
import '@fontsource/roboto/400.css';
import TwitterIcon from '@mui/icons-material/Twitter';


function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    setQuote(data.content);
    setAuthor(data.author);
  }

  useEffect(() => {
    getQuote();
  }, [])

  return (
    <div id="quote-box" className="wrapper">
      <Modal open={true}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            border: '3px double #000',
            boxShadow: 44,
            p: 4,
          }}
        >


         <Typography
         id="text"
  variant="h4"
  fontFamily="Roboto"
  fontStyle="italic"
  textAlign="center"
  sx={{ lineHeight: 1.5 }}
>
  {quote}
</Typography>

<Typography id="author" variant="body1" fontWeight="bold" mt={3}>
  - {author}
</Typography>
        <Box sx={{ textAlign: 'center', mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            id="new-quote"
            variant="contained"
            onClick={getQuote}
          >
            New Quote
          </Button>
          <Button
            id="tweet-quote"
            variant="contained"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`)}
          >
            <TwitterIcon />
            Tweet Quote
          </Button>
        </Box>
         
        </Box>
      </Modal>
    </div>
  );
}

export default App;
