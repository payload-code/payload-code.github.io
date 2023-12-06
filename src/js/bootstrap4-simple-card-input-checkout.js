Payload('test_client_key_3btrkEyC6xvcByXLthuZx')

const checkoutForm = new Payload.Form({
  form: $('#checkout-form').get(0),
  styles: { invalid: 'is-invalid' },
  autosubmit: false,
})
  .on('error', function (error) {
    console.log(error)
  })
  .on('processed', function (data) {
    $('#paid-modal').modal('show')
  })
  .on('declined', function (data) {
    $('#declined-modal').modal('show')
  })
