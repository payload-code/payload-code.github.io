Payload('test_client_key_3bcr16ohAy8aEcwK3Vffs')

const paymentsClient = new google.payments.api.PaymentsClient({
  environment: 'TEST',
})
const button = paymentsClient.createButton({
  onClick: () => console.log('TODO: click handler'),
})

$('.google-pay-support>div').html(button)

const checkoutForm = new Payload.Form({
  form: $('#checkout-form').get(0),
  styles: { invalid: 'is-invalid' },
  preventDefaultOnSubmit: false,
  payment: {
    processing_id: 'acct_3bcr6L5qxxnXJjNwu4MHg',
  },
})

checkoutForm
  .on('declined', function (error) {
    console.log(error)
  })
  .on('error', function (error) {
    console.log(error)
  })
  .on('processed', function (data) {
    $('#paid-modal .alert').html('Transaction ID: ' + data.transaction_id)
    $('#paid-modal').modal('show')
  })
  .googlepay(button, function (active) {
    if (!active) {
      $('#google-pay')
        .tooltip({ title: 'Google Pay not available' })
        .addClass('disabled')
    }
  })
