Payload('test_client_key_3bcr16ohAy8aEcwK3Vffs')

const checkout_form = new Payload.Form({
  form: $('#checkout-form').get(0),
  styles: {invalid: 'is-invalid'},
  autosubmit: false,
  payment: {
    processing_id: 'acct_3bcr6L5qxxnXJjNwu4MHg'
  }
})
.plaid($('#checkout-form button').get(0))
.on('declined', function(error) {
  console.log(error)
})
.on('error', function(error) {
  console.log(error)
})
.on('processed', function(data) {
  $('#paid-modal .alert').html('Transaction ID: '+data.transaction_id)
  $('#paid-modal').modal('show')
})
