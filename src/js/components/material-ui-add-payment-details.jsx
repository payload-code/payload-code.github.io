import RegeneratorRuntime from 'regenerator-runtime';
import React, { useState, useRef } from 'react';
import Payload from 'payload-react';
import ReactDOM from 'react-dom';
import {
  Typography,
  TextField,
  Container,
  Box,
  Link,
  FormControl,
  InputLabel,
  Input,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions
} from '@material-ui/core';
import {
  PaymentForm,
  PayloadInput,
  CardNumber,
  Expiry,
  CardCode
} from 'payload-react';

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
        <Link href="https://github.com/payload-code/payload-code.github.io/blob/master/material-ui-add-payment-details.html">
          source code
        </Link>{' '}
        for this demo on GitHub.
      </Typography>
    </div>
  );
}

function PaymentMethod() {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

  return (
   <PaymentForm
      clientToken={'test_client_key_3btrkEyC6xvcByXLthuZx'}
      className="container"
      styles={{ invalid: 'is-invalid' }}
      onProcessed={(evt)=>{
        alert(`Processed: ${evt.transaction_id}`)
      }}
      onError={(evt)=>{
        alert(evt.message)
      }}
    >
    <div className="row pt-2">
      <FormControl fullWidth className="form-group col-12" variant="outlined">
        <CardNumber 
          id="card-number"
          className="form-control"
          component={TextField}
        />
      </FormControl>
      <FormControl fullWidth className="form-group col-6" variant="outlined">
        <Expiry 
          id="expiry"
          className="form-control"
          component={TextField}
        />
      </FormControl>
      <FormControl fullWidth className="form-group col-6" variant="outlined">
        <CardCode 
          id="cvc"
          className="form-control"
          component={TextField}
        />
      </FormControl>
    </div>
    <div className="row pt-2">
      <Button 
        variant="contained" 
        color="primary" 
        type="submit" 
        disabled={disabled} 
        fullWidth
      >
        Add Card
      </Button>
    </div>
  </PaymentForm>
  );
}

function App() {
  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: 24 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add Payment Details
        </Typography>
        <PaymentMethod />
        <ProTip />
      </div>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('MaterialPaymentDetails'));
