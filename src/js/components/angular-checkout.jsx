(function() {
var CheckoutForm = ng.core.Component({
selector: 'checkout-form',
template: '<form #checkoutForm class="my-2 container col-md-8 col-lg-5 px-lg-5" pl-form="payment">'+
            '<div class="row">'+
                '<div class="form-group col-4 px-1">'+
                    '<label>Amount</label>'+
                    '<div class="input-group">'+
                        '<div class="input-group-prepend">'+
                            '<span class="input-group-text" id="basic-addon1">$</span>'+
                        '</div>'+
                        '<input class="form-control" pl-input="amount" type="text" name="amount" placeholder="Amount"/>'+
                    '</div>'+
                '</div>'+
                '<div class="form-group col-8 px-1">'+
                    '<label>Cardholder Name</label>'+
                    '<input class="form-control w-100" pl-input="account_holder" type="text" placeholder="First Last" />'+
                '</div>'+
            '</div>'+
            '<div class="row pt-2">'+
                '<div class="form-group col-7 px-1">'+
                    '<label>Card Number</label>'+
                    '<div class="form-control" pl-input="card_number"></div>'+
                '</div>'+
                '<div class="form-group col-3 px-1">'+
                    '<label>Expiration</label>'+
                    '<div class="form-control" pl-input="expiry"></div>'+
                '</div>'+
                '<div class="form-group col-2 px-1">'+
                    '<label>CVC</label>'+
                    '<div class="form-control" pl-input="cvc"></div>'+
                '</div>'+
            '</div>'+
            '<div class="row pt-2">'+
                '<div class="col px-1"><button class="btn btn-primary" type="submit">Pay Now</button></div>'+
            '</div>'+
            '<div class="row pt-3">'+
                '<div class="col px-1">'+
                    '<p>For more information on integrating Payload: See the full <a href="https://docs.payload.co">API Documentation</a>.</p>'+
                    '<p>See the <a href="https://github.com/payload-code/payload-code.github.io/blob/master/angular-checkout.html">source code</a> for this demo on GitHub.</p>'+
                '</div>'+
            '</div>'+
        '</form>',
queries : {
  checkoutForm : new ng.core.ViewChild('checkoutForm')
},
outputs: ["processed", "declined"],
}).Class({
constructor: function() {
this.processed = new ng.core.EventEmitter()
this.declined = new ng.core.EventEmitter()
},
ngAfterViewInit: function() {
var checkout_form = new Payload.Form({
    form: this.checkoutForm.nativeElement,
    styles:{invalid:'is-invalid'},
    autosubmit: false
})

checkout_form.on('error', function(error) {
    console.log(error)
})

checkout_form.on('processed', function(data) {
    this.processed.next(null)
}.bind(this))

checkout_form.on('declined', function(data) {
    this.declined.next(null)
}.bind(this))

}
});

var ProcessedModal = ng.core.Component({
selector: 'processed-modal',
template: '<div #modal class="modal" tabindex="-1" role="dialog">'+
      '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header">'+
            '<h5 class="modal-title">Your Payment Was Successful!</h5>'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
              '<span aria-hidden="true">&times;</span>'+
            '</button>'+
          '</div>'+
          '<div class="modal-body">'+
            '<p>Thanks for trying out Payload!</p>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>',
queries : {
  modal : new ng.core.ViewChild('modal')
},
}).Class({
constructor: function() {},
showModal: function() {
$(this.modal.nativeElement).modal('show')
}
})

var DeclinedModal = ng.core.Component({
selector: 'declined-modal',
template: '<div #modal class="modal" tabindex="-1" role="dialog">'+
  '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<h5 class="modal-title">Your Payment Declined!</h5>'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
          '<span aria-hidden="true">&times;</span>'+
        '</button>'+
      '</div>'+
      '<div class="modal-body">'+
        '<p>Please try again</p>'+
      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>',
queries : {
  modal : new ng.core.ViewChild('modal')
},
}).Class({
constructor: function() {},
showModal: function() {
$(this.modal.nativeElement).modal('show')
}
})

var AppComponent = ng.core.Component({
selector: 'simple-checkout',
template: '<main role="main" class="mt-4">'+
        '<div class="jumbotron">'+
            '<div class="col-sm-8 mx-auto">'+
                '<h1 class="text-center">Simple Checkout</h1>'+
            '</div>' +
        '</div>' +
        '<checkout-form (processed)="processed()"  (declined)="declined()"></checkout-form>'+
        '<processed-modal #processedModal></processed-modal>'+
        '<declined-modal #declinedModal></declined-modal>',
directives: [CheckoutForm, ProcessedModal, DeclinedModal],
queries : {
  processedModal : new ng.core.ViewChild('processedModal'),
  declinedModal : new ng.core.ViewChild('declinedModal')
},
}).Class({
constructor: function() {
this.processed = function(){
    this.processedModal.showModal()
}.bind(this)
this.declined = function(){
    this.declinedModal.showModal()
}.bind(this)

}
});

document.addEventListener("DOMContentLoaded", function() {
ng.platform.browser.bootstrap(AppComponent);
});
})();
