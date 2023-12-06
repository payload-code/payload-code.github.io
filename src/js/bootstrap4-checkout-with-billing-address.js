Payload('test_client_key_3btrkEyC6xvcByXLthuZx')

const checkoutForm = new Payload.Form({
  form: document.getElementById('checkout-form'),
  styles: { invalid: 'is-invalid' },
  autosubmit: false,
})
  .on('processed', function (data) {
    $('#paid-modal').modal('show')
  })
  .on('declined', function (data) {
    $('#declined-modal').modal('show')
  })
