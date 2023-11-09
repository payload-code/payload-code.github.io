import RegeneratorRuntime from 'regenerator-runtime';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Typography, Container, Link, Button, TextField } from '@material-ui/core';
import { PaymentForm, CardNumber, Expiry, CardCode } from 'payload-react';

function ProTip() {
  return (
    <div>
      <Typography color="textSecondary" style={{ marginTop: 24 }}>
        For more information on integrating Payload: See the{' '}
        <Link href="https://github.com/payload-code/payload-react">
          payload-react
        </Link>{' '}
        repo on GitHub and the{' '}
        <Link href="https://docs.payload.co">Payload Documentation</Link>.
      </Typography>
      <Typography color="textSecondary" style={{ marginTop: 24 }}>
        See the{' '}
        <Link href="https://github.com/payload-code/payload-code.github.io/blob/master/material-ui-make-payment.html">
          source code
        </Link>{' '}
        for this demo on GitHub.
      </Typography>
    </div>
  );
}

function Payment() {
  const [isProcessed, setIsProcessed] = useState(false);

  const handleProcessed = (data) => {
    setIsProcessed(true);
    alert(`Processed: ${data.transaction_id}`);
  };

  const handleError = (error) => {
    alert(error.message);
  };

  return (
    <PaymentForm
      clientToken="your_valid_client_token_here"
      onProcessed={handleProcessed}
      onError={handleError}
    >
      <TextField
        required
        label="Card Number"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          inputComponent: CardNumber,
        }}
      />
      <TextField
        required
        label="Expiry Date"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          inputComponent: Expiry,
        }}
      />
      <TextField
        required
        label="CVC"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          inputComponent: CardCode,
        }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        type="submit" 
        fullWidth
        disabled={isProcessed}
      >
        Add Card
      </Button>
    </PaymentForm>
  );
}

function App() {
  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: 24 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Make Payment
        </Typography>
        <Payment />
        <ProTip />
      </div>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('MaterialPaymentDetails'));
