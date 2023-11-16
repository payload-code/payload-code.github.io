Payload('test_client_key_3btrkEyC6xvcByXLthuZx')

var checkout_form = new Payload.Form({
    form:$('#checkout-form').get(0),
    styles:{invalid:'is-invalid'},
    autosubmit: false
})

checkout_form.on('error', function(error) {
    console.log(error)
})

checkout_form.on('processed', function(data) {
    $('#paid-modal').modal('show')
})

checkout_form.on('declined', function(data) {
    $('#declined-modal').modal('show')
})
