import React, {useState} from 'react';
import $ from 'jquery';
import regeneratorRuntime from "regenerator-runtime";
import {PayloadForm, PayloadInput} from 'payload-react';
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
            <Typography color="textSecondary" style={{marginTop: 24,}}>
                For more information on integrating Payload: See the {' '}
                <Link href="https://github.com/payload-code/payload-react">
                    payload-react
                </Link>{' '}
                repo on GitHub and the {' '}
                <Link href="https://docs.payload.co">Payload Documentation</Link>.
            </Typography>
            <Typography color="textSecondary" style={{marginTop: 24,}}>
                See the {' '}
                <Link
                    href="https://github.com/payload-code/payload-code.github.io/blob/master/material-ui-make-payment.html">
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
            <div style={{marginTop: 24,}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Make Payment
                </Typography>
                <Payment/>
                <ProTip/>
            </div>
        </Container>
    );
}

function Payment() {
    const [open, setOpen] = React.useState(false);
    const [focusState, setFocusState] = useState({ cardNumber: false, expiry: false, cvc: false });

    const ref = null;

    const handleClose = () => {
        setOpen(false);
    };

    const handleFocus = (field) => {
        setFocusState({ ...focusState, [field]: true });
    };

    const handleBlur = (field, value) => {
        setFocusState({ ...focusState, [field]: value.length > 0 });
    };

    return (
        <PayloadForm FormId="checkout-form" className="container" ref={ref}>
            <Typography component="p" gutterBottom>
                Amount: $10.00
            </Typography>
            <PayloadInput type="hidden" value="10.00"/>
            <div>
                <FormControl>
                    <InputLabel className={focusState.cardNumber ? "Mui-focused MuiInputLabel-shrink" : ""}>Card Number</InputLabel>
                    <div
                        className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                        style={{width: '15rem'}}
                        onFocus={() => handleFocus('cardNumber')}
                        onBlur={(e) => handleBlur('cardNumber', e.target.value)}>

                        <PayloadInput className="MuiInputBase-input MuiInput-input" placeholder=""/>
                    </div>
                </FormControl>
                <FormControl>
                    <InputLabel className={focusState.expiry ? "Mui-focused MuiInputLabel-shrink" : ""}>Expires</InputLabel>
                    <div
                        className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                        style={{width: '4rem'}}
                        onFocus={() => handleFocus('expiry')}
                        onBlur={(e) => handleBlur('expiry', e.target.value)}>
                        <PayloadInput className="MuiInputBase-input MuiInput-input" placeholder=""/>
                    </div>
                </FormControl>
                <FormControl>
                    <InputLabel className={focusState.cvc ? "Mui-focused MuiInputLabel-shrink" : ""}>CVC</InputLabel>
                    <div
                        className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                        style={{width: '4rem'}}
                        onFocus={() => handleFocus('cvc')}
                        onBlur={(e) => handleBlur('cvc', e.target.value)}>
                        <PayloadInput className="MuiInputBase-input MuiInput-input" placeholder=""/>
                    </div>
                </FormControl>
            </div>
            <div>
                <FormControl style={{width: '23rem'}}>
                    <InputLabel htmlFor="my-input">Account Holder</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" inputProps={{"pl-input": "account_holder"}}/>
                </FormControl>
            </div>
            <div style={{marginTop: '1rem'}}>
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
