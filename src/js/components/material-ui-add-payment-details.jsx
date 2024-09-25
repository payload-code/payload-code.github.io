import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import regeneratorRuntime from 'regenerator-runtime'

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Link,
  TextField,
  Typography,
} from '@material-ui/core'

import { PaymentMethodForm } from 'payload-react'

import PayloadTextField from './PayloadTextField.jsx'

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
        <Link href="https://github.com/payload-code/payload-code.github.io/blob/master/src/js/components/material-ui-add-payment-details.jsx">
          source code
        </Link>{' '}
        for this demo on GitHub.
      </Typography>
    </div>
  )
}

function PaymentMethod() {
  const [open, setOpen] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [focusState, setFocusState] = useState({
    cardNumber: false,
    expiry: false,
    cvc: false,
  })
  const [invalidState, setInvalidState] = useState({})

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    setDisabled(true)
  }

  const handleError = () => {
    setDisabled(false)
  }

  const handleInvalid = (evt) => {
    setInvalidState({
      ...invalidState,
      [evt.target.getAttribute('pl-input')]: evt.message,
    })
  }

  const clearInvalid = (evt) => {
    setInvalidState({})
  }

  const handleCreated = () => {
    setDisabled(false)
    setOpen(true)
  }

  return (
    <PaymentMethodForm
      className="container"
      clientToken={'test_client_key_3btrkEyC6xvcByXLthuZx'}
      onSubmit={handleSubmit}
      onProcessing={clearInvalid}
      onError={handleError}
      onInvalid={handleInvalid}
      onCreated={handleCreated}
      styles={{ invalid: null }}
      preventDefaultOnSubmit={false}>
      <div>
        <FormControl>
          <PayloadTextField
            label="Card Number"
            labelClassName="card-number-placeholder-label"
            attr="card_number"
            style={{ width: '15rem' }}
            error={!!invalidState['card_number']}
            helperText={invalidState['card_number']}
          />
        </FormControl>
        <FormControl>
          <PayloadTextField
            label="Expires"
            attr="expiry"
            style={{ width: '15rem' }}
            error={!!invalidState['expiry']}
            helperText={invalidState['expiry']}
          />
        </FormControl>
        <FormControl>
          <PayloadTextField
            label="CVC"
            attr="card_code"
            style={{ width: '4rem' }}
            error={!!invalidState['card_code']}
            helperText={invalidState['card_code']}
          />
        </FormControl>
      </div>
      <div>
        <FormControl style={{ width: '23rem' }}>
          <TextField
            label="Account Holder"
            inputProps={{ 'pl-input': 'account_holder' }}
            error={!!invalidState['account_holder']}
            helperText={invalidState['account_holder']}
          />
        </FormControl>
      </div>
      <div>
        <FormControl style={{ width: '23rem' }}>
          <TextField
            label="Zipcode"
            inputProps={{
              'pl-input': 'billing_address[postal_code]',
              maxLength: 5,
            }}
            error={!!invalidState['billing_address[postal_code]']}
            helperText={invalidState['billing_address[postal_code]']}
          />
        </FormControl>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={disabled}>
            Add Card
          </Button>
        </FormControl>
      </div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" color="primary">
          Your Payment Method Was Added!
        </DialogTitle>
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
    </PaymentMethodForm>
  )
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
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
