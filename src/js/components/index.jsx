import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../css/index.css'

function PayloadExamples() {
  return (
    <div className="container">
      <main role="main" className="mt-4">
        <div className="jumbotron">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Payload Integration Examples</h1>
          </div>
        </div>
      </main>

      <div className="feature-list">
        <div className="row no-gutters">
          <div className="col-xl">
            <a href="/bootstrap4-simple-checkout.html" className="mb-3 row align-items-center d-flex m-0 p-0" target="_blank">
              <div className="col-0 mx-2">
                <i className="mdi mdi-bootstrap m-0"></i>
              </div>
              <div className="col pl-0">
                <h4>Simple Checkout <i className="mdi mdi-open-in-new"></i></h4>
                Example of styling secure inputs for Bootstrap 4
               </div>
            </a>
          </div>
          <div className="col-xl">
            <a href="/bootstrap4-checkout-with-billing-address.html" className="mb-3 row align-items-center d-flex m-0 p-0" target="_blank">
              <div className="col-0 mx-2">
                <i className="mdi mdi-bootstrap m-0"></i>
              </div>
              <div className="col pl-0">
                <h4>Checkout with Billing Address <i className="mdi mdi-open-in-new"></i></h4>
                Example of styling secure inputs for Bootstrap 4
               </div>
            </a>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-xl">
            <a href="/bootstrap4-save-billing-details.html" className="mb-3 row align-items-center d-flex m-0 p-0" target="_blank">
              <div className="col-0 mx-2">
                <i className="mdi mdi-bootstrap m-0"></i>
              </div>
              <div className="col pl-0">
                <h4>Save Billing Details <i className="mdi mdi-open-in-new"></i></h4>
                Example of styling secure inputs for Bootstrap 4
               </div>
            </a>
          </div>
          <div className="col-xl">
            <a href="/material-ui-add-payment-details.html" className="mb-3 row align-items-center d-flex m-0 p-0" target="_blank">
              <div className="col-0 mx-2">
                <i className="mdi mdi-material-ui m-0"></i>
              </div>
              <div className="col pl-0">
                <h4>Add Payment Details <i className="mdi mdi-open-in-new"></i></h4>
                Example of styling secure inputs for Material UI
               </div>
            </a>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-xl">
            <a href="/material-ui-make-payment.html" className="mb-3 row align-items-center d-flex m-0 p-0" target="_blank">
              <div className="col-0 mx-2">
                <i className="mdi mdi-material-ui m-0"></i>
              </div>
              <div className="col pl-0">
                <h4>Make Payment <i className="mdi mdi-open-in-new"></i></h4>
                Example of styling secure inputs for Material UI
               </div>
            </a>
          </div>
          <div className="col-xl">
            <a href="/generate-payment-request.html" className="mb-3 row align-items-center d-flex m-0 p-0" target="_blank">
              <div className="col-0 mx-2">
                <i className="mdi mdi-link m-0"></i>
              </div>
              <div className="col pl-0">
                <h4>Generate Payment Request <i className="mdi mdi-open-in-new"></i></h4>
                Example page to generate payment request emails
               </div>
            </a>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-xl">
            <a href="/bootstrap4-save-card-details.html" className="mb-3 row align-items-center d-flex m-0 p-0" target="_blank">
              <div className="col-0 mx-2">
                <i className="mdi mdi-bootstrap m-0"></i>
              </div>
              <div className="col pl-0">
                <h4>Save Card Details <i className="mdi mdi-open-in-new"></i></h4>
                Example of styling secure inputs for Bootstrap 4
               </div>
            </a>
          </div>
          <div className="col-xl">
            <a href="/checkout-with-credit-card-and-billing-address.html" className="mb-3 row align-items-center d-flex m-0 p-0" target="_blank">
              <div className="col-0 mx-2">
                <i className="mdi mdi-account-circle m-0"></i>
              </div>
              <div className="col pl-0">
                <h4>Checkout with Credit Card and Billing Address <i className="mdi mdi-open-in-new"></i></h4>
                Example of complex form including credit card and billing details
               </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <PayloadExamples />;
}

ReactDOM.render(<App />, document.getElementById('index'));
