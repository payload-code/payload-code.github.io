Payload('test_client_key_3btrkEyC6xvcByXLthuZx')

var pm_form = new Payload.Form({
    form:$('#payment-method-form').get(0),
    styles:{invalid:'is-invalid'},
    autosubmit: false
})

pm_form.on('created', function(data) {
    $('#saved-modal').modal('show')
})
