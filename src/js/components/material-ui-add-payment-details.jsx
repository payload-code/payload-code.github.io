import React from 'react';
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

function updateClasses(element, isFocused) {
    const parent = $(element).parent();
    const prevElement = parent.prev();
    const hasText = $(element).val().length > 0;

    if (isFocused || hasText) {
        parent.addClass('Mui-focused');
        if (prevElement.hasClass('MuiInputLabel-root')) {
            prevElement.addClass('Mui-focused MuiInputLabel-shrink');
        }
    } else {
        parent.removeClass('Mui-focused');
        if (prevElement.hasClass('MuiInputLabel-root')) {
            prevElement.removeClass('Mui-focused MuiInputLabel-shrink');
        }
    }
}

function PaymentMethod() {
    const [open, setOpen] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    let form = null;

    const ref = function (node) {
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setDisabled(true);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <PayloadForm
                formId="checkout-form"
                className="container"
                clientToken='test_client_key_3btrkEyC6xvcByXLthuZx'
                onSubmit={handleSubmit}
                ref={ref}
                autoSubmit={false}
            >
                <PayloadInput type="hidden" value="card"/>
                <div>
                    <FormControl>
                        <InputLabel>Card Number</InputLabel>
                        <div
                            className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                            style={{width: '15rem'}}
                            onFocus={(evt) => updateClasses(evt.target, true)}
                            onBlur={(evt) => updateClasses(evt.target, false)}
                        >
                            <PayloadInput
                                className="MuiInputBase-input MuiInput-input"
                                type="card_number"
                                placeholder=""
                            />
                        </div>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Expires</InputLabel>
                        <div
                            className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                            style={{width: '15rem'}}
                            onFocus={(evt) => updateClasses(evt.target, true)}
                            onBlur={(evt) => updateClasses(evt.target, false)}
                        >
                            <PayloadInput
                                className="MuiInputBase-input MuiInput-input"
                                type="expiry"
                                placeholder=""
                            />
                        </div>
                    </FormControl>
                    <FormControl>
                        <InputLabel>CVC</InputLabel>
                        <div
                            className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                            style={{width: '4rem'}}
                            onFocus={(evt) => updateClasses(evt.target, true)}
                            onBlur={(evt) => updateClasses(evt.target, false)}
                        >
                            <PayloadInput
                                className="MuiInputBase-input MuiInput-input"
                                type="card_code"
                                placeholder=""
                            />
                        </div>
                    </FormControl>
                </div>
                <div>
                    <FormControl style={{width: '23rem'}}>
                        <InputLabel htmlFor="my-input">Account Holder</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text"
                               inputProps={{"pl-input": "account_holder"}}/>
                    </FormControl>
                </div>
                <div style={{marginTop: '1rem'}}>
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

ReactDOM.render(<PaymentMethod/>, document.getElementById('root'));

