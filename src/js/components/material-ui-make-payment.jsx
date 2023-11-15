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

function ProTip() {
  return (
    <div>
        <Typography color="textSecondary" style={{ marginTop: 24, }}>
          For more information on integrating Payload: See the {' '}
          <Link href="https://github.com/payload-code/payload-react">
            payload-react
          </Link>{' '}
          repo on GitHub and the {' '}
          <Link href="https://docs.payload.co">Payload Documentation</Link>.
        </Typography>
        <Typography color="textSecondary" style={{ marginTop: 24, }}>
          See the {' '}
          <Link href="https://github.com/payload-code/payload-code.github.io/blob/master/material-ui-make-payment.html">
            source code
          </Link>{' '}
          for this demo on GitHub.
        </Typography>
    </div>
  );
}

function App() {
  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: 24, }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Make Payment
        </Typography>
        <Payment/>
        <ProTip />
      </div>
    </Container>
  );
}

function Payment() {
	const [open, setOpen] = React.useState(false);
	var form = null;

	const ref = function(node) {
    console.log(node);
	//
	// 	node.pl_form.params.autosubmit = false
	// 	node.pl_form.on('processed', function(data) {
	// 		setOpen(true);
	// 	})
	//
	// 	node.pl_form.on('focus', function(evt) {
	// 		$(evt.target).parent().addClass('Mui-focused')
	// 		if ( $(evt.target).parent().prev().hasClass('MuiInputLabel-root') )
	// 			$(evt.target).parent().prev().addClass('Mui-focused MuiInputLabel-shrink')
	// 	})
	//
	// 	node.pl_form.on('blur', function(evt) {
	// 		$(evt.target).parent().removeClass('Mui-focused')
	// 		if ( $(evt.target).parent().prev().hasClass('MuiInputLabel-root') )
	// 			$(evt.target).parent().prev().removeClass('Mui-focused MuiInputLabel-shrink')
	// 	})
	//
	// 	node.pl_form.on('invalid', function(evt) {
	// 		$(evt.target).parent().addClass('Mui-error')
	// 	})
	//
	// 	node.pl_form.on('valid', function(evt) {
	// 		$(evt.target).parent().removeClass('Mui-error')
	// 	})


	}

	const handleClose = () => {
		setOpen(false);
	};

	return (
    <PayloadForm FormId="checkout-form" className="container" ref={ref}>
        <Typography component="p" gutterBottom>
			Amount: $10.00
		</Typography>
		<PayloadInput type="hidden" value="10.00"/>
		<div>
			<FormControl>
				<InputLabel>Card Number</InputLabel>
				<div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{width:'15rem'}}>
				<PayloadInput className="MuiInputBase-input MuiInput-input" placeholder=""/>
				</div>
			</FormControl>
			<FormControl>
				<InputLabel>Expires</InputLabel>
				<div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{width:'4rem'}}>
				<PayloadInput className="MuiInputBase-input MuiInput-input" placeholder=""/>
				</div>
			</FormControl>
			<FormControl>
				<InputLabel>CVC</InputLabel>
				<div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl" style={{width:'4rem'}}>
					<PayloadInput className="MuiInputBase-input MuiInput-input" placeholder=""/>
				</div>
			</FormControl>
		</div>
		<div>
			<FormControl style={{width:'23rem'}}>
				<InputLabel htmlFor="my-input">Account Holder</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" inputProps={{"pl-input":"account_holder"}}/>
			</FormControl>
		</div>
		<div style={{marginTop:'1rem'}}>
			<FormControl>
				<Button variant="contained" color="primary" type="submit">Pay Now</Button>
			</FormControl>
		</div>
		<Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
			<DialogTitle id="alert-dialog-title" color="primary">Your Payment Was Successful!</DialogTitle>
			<DialogContent>
			  <DialogContentText id="alert-dialog-description">
				Thanks for trying out Payload!
			  </DialogContentText>
			</DialogContent>
			<DialogActions>
			  <Button onClick={handleClose} color="primary" autoFocus>
				Close
			  </Button>
			</DialogActions>
		</Dialog>
	</PayloadForm>)
}

ReactDOM.render(<App/>, document.querySelector('#root'));
