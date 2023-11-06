import React from 'react';
import * as MaterialUI from '@material-ui/core';
import $ from 'jquery';
import Payload from 'payload-react';
import ReactDOM from 'react-dom';

function PaymentMethod() {
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  var form = null;

  const ref = function (node) {
    if (!node || node == form) return;

    form = node;

    node.pl_form.params.autosubmit = false;
    node.pl_form.on('created', function (data) {
      setOpen(true);
      setDisabled(false);
    });

    node.pl_form.on('focus', function (evt) {
      $(evt.target).parent().addClass('Mui-focused');
      if ($(evt.target).parent().prev().hasClass('MuiInputLabel-root'))
        $(evt.target).parent().prev().addClass('Mui-focused MuiInputLabel-shrink');
    });

    node.pl_form.on('blur', function (evt) {
      $(evt.target).parent().removeClass('Mui-focused');
      if ($(evt.target).parent().prev().hasClass('MuiInputLabel-root'))
        $(evt.target).parent().prev().removeClass('Mui-focused MuiInputLabel-shrink');
    });

    node.pl_form.on('invalid', function (evt) {
      $(evt.target).parent().addClass('Mui-error');
      setDisabled(false);
    });

    node.pl_form.on('valid', function (evt) {
      $(evt.target).parent().removeClass('Mui-error');
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setDisabled(true);
  };

  return (
    <PayloadForm
      formId="checkout-form"
      className="container"
      ref={ref}
      onSubmit={handleSubmit}
    >
      <PayloadInput type="hidden" value="card" />
      <div>
        <MaterialUI.FormControl>
          <MaterialUI.InputLabel>Card Number</MaterialUI.InputLabel>
          <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{ width: '15rem' }}>
            <PayloadInput
              className="MuiInputBase-input MuiInput-input"
              type="card_number"
              placeholder=""
            />
          </div>
        </MaterialUI.FormControl>
        <MaterialUI.FormControl>
          <MaterialUI.InputLabel>Expires</MaterialUI.InputLabel>
          <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{ width: '4rem' }}>
            <PayloadInput
              className="MuiInputBase-input MuiInput-input"
              type="expiry"
              placeholder=""
            />
          </div>
        </MaterialUI.FormControl>
        <MaterialUI.FormControl>
          <MaterialUI.InputLabel>CVC</MaterialUI.InputLabel>
          <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{ width: '4rem' }}>
            <PayloadInput
              className="MuiInputBase-input MuiInput-input"
              type="card_code"
              placeholder=""
            />
          </div>
        </MaterialUI.FormControl>
      </div>
      <div>
        <MaterialUI.FormControl style={{ width: '23rem' }}>
          <MaterialUI.InputLabel htmlFor="my-input">Account Holder</MaterialUI.InputLabel>
          <MaterialUI.Input id="my-input" aria-describedby="my-helper-text" inputProps={{ "pl-input": "account_holder" }} />
        </MaterialUI.FormControl>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <MaterialUI.FormControl>
          <MaterialUI.Button variant="contained" color="primary" type="submit" disabled={disabled}>Add Card</MaterialUI.Button>
        </MaterialUI.FormControl>
      </div>
      <MaterialUI.Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <MaterialUI.DialogTitle id="alert-dialog-title" color="primary">Your Payment Method Was Added!</MaterialUI.DialogTitle>
        <MaterialUI.DialogContent>
          <MaterialUI.DialogContentText id="alert-dialog-description">
            Thanks for trying out Payload
          </MaterialUI.DialogContentText>
        </MaterialUI.DialogContent>
        <MaterialUI.DialogActions>
          <MaterialUI.Button onClick={handleClose} color="primary" autoFocus>
            Close
          </MaterialUI.Button>
        </MaterialUI.DialogActions>
      </MaterialUI.Dialog>
    </PayloadForm>
  );
}

ReactDOM.render(<PaymentMethod />, document.getElementById('root'));

