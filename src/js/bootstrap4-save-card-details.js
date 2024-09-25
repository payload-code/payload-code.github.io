Payload('test_client_key_3btrkEyC6xvcByXLthuZx')

const pmForm = new Payload.Form({
  form: $('#payment-method-form').get(0),
  styles: { invalid: 'is-invalid' },
  preventDefaultOnSubmit: false,
}).on('created', function (data) {
  $('#saved-modal').modal('show')
})
