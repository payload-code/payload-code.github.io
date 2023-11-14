import React from 'react';
import $ from 'jquery';
import regeneratorRuntime from "regenerator-runtime";
import { PayloadForm, PayloadInput } from 'payload-react';
import ReactDOM from 'react-dom';
import {
  Typography,
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

function PaymentMethod() {
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  let form = null;

  const ref = function (node) {
    console.log(node);
    // if (!node || node == form) return;
    //
    // form = node;
    //
    // node.pl_form.on('created', function (data) {
    //   setOpen(true);
    //   setDisabled(false);
    // });
    //
    // node.pl_form.on('focus', function (evt) {
    //   $(evt.target).parent().addClass('Mui-focused');
    //   if ($(evt.target).parent().prev().hasClass('MuiInputLabel-root'))
    //     $(evt.target).Fparent().prev().addClass('Mui-focused MuiInputLabel-shrink');
    // });
    //
    // node.pl_form.on('blur', function (evt) {
    //   $(evt.target).parent().removeClass('Mui-focused');
    //   if ($(evt.target).parent().prev().hasClass('MuiInputLabel-root'))
    //     $(evt.target).parent().prev().removeClass('Mui-focused MuiInputLabel-shrink');
    // });
    //
    // node.pl_form.on('invalid', );
    //
    // node.pl_form.on('valid', function (evt) {
    //   $(evt.target).parent().removeClass('Mui-error');
    // });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setDisabled(true);
  };

  return (
      <div style={{width: '25%', margin: 'auto'}}>
    <PayloadForm
      formId="checkout-form"
      className="container"
      clientToken='test_client_key_3btrkEyC6xvcByXLthuZx'
      onSubmit={handleSubmit}
      ref={ref}
      autoSubmit={false}
    >
      <PayloadInput type="hidden" value="card" />
      <div>
        <FormControl>
          <InputLabel>Card Number</InputLabel>
          <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{ width: '15rem' }}>
            <PayloadInput
              className="MuiInputBase-input MuiInput-input"
              type="card_number"
              placeholder=""
              invalid={function (evt) {
                $(evt.target).parent().addClass('Mui-error');
                setDisabled(false);
              }}
              blur={function (evt) {
                console.log(evt);
                  $(evt.target).parent().removeClass('Mui-focused');
                  if ($(evt.target).parent().prev().hasClass('MuiInputLabel-root'))
                    $(evt.target).parent().prev().removeClass('Mui-focused MuiInputLabel-shrink');
                }}
              focus={function (evt) {
                  $(evt.target).parent().addClass('Mui-focused');
                  if ($(evt.target).parent().prev().hasClass('MuiInputLabel-root'))
                    $(evt.target).Fparent().prev().addClass('Mui-focused MuiInputLabel-shrink');
                }}
            />
          </div>
        </FormControl>
        <FormControl>
          <InputLabel>Expires</InputLabel>
          <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{ width: '4rem' }}>
            <PayloadInput
              className="MuiInputBase-input MuiInput-input"
              type="expiry"
              placeholder=""
            />
          </div>
        </FormControl>
        <FormControl>
          <InputLabel>CVC</InputLabel>
          <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{ width: '4rem' }}>
            <PayloadInput
              className="MuiInputBase-input MuiInput-input"
              type="card_code"
              placeholder=""
            />
          </div>
        </FormControl>
      </div>
      <div>
        <FormControl style={{ width: '23rem' }}>
          <InputLabel htmlFor="my-input">Account Holder</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" inputProps={{ "pl-input": "account_holder" }} />
        </FormControl>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormControl>
          <Button variant="contained" color="primary" type="submit" disabled={disabled}>Add Card</Button>
        </FormControl>
      </div>
      <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" color="primary">Your Payment Method Was Added!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thanks for trying out Payload
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </PayloadForm>
        </div>
  );
}

ReactDOM.render(<PaymentMethod />, document.getElementById('root'));

