payload.api_key = 'test_client_key_3bwKEBWEx4pyyxlNv4ssu'
payload.api_url = 'https://api.payload.co'
//payload.api_key = 'test_client_key_2zsp9Pske5l2Bgcy3bySES'
//payload.api_url = 'http://payload-dev.co:8000/api'

$('#payment-request .btn-outline-primary').click(function() {
    $(this).closest('.row').before('<div class="row" role="custom-field">'
      +' <div class="form-group col px-1">'
      +'     <label>Additional Field</label>'
      +'     <input class="form-control w-100" type="text" name="additional_datafields[][title]" placeholder="Field Name" required/>'
      +' </div>'
      +' <div class="form-group col-0 px-1">'
      +'     <label>&nbsp;</label>'
      +'     <button class="form-control btn btn-outline-danger"><i class="mdi mdi-close"></i></button>'
      +' </div>'
      +'</div>')
      $(this).closest('.row').prev().find('.btn').click(function() {
        $(this).closest('.row').remove()
      })
})

$('#payment-request').submit(function(evt) {
    evt.preventDefault()

    var obj = $(this).serializeObject()

    /*if ( obj.additional_datafields )
        obj.additional_datafields = [{'section': 'Info', 'fields': obj.additional_datafields }]*/

    obj.type = 'one_time'
    obj.processing_id = '3bwKFiytiwZwxYIlorZ9k'

    $(this).find('.btn-primary').html(
        '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Loading...'
    )

    payload.PaymentLink.create(obj).then(function(req) {
        $(this).find('.btn-primary').html('Send Request')
        $('#sent-modal').find('a').attr('href', req.url)
        $('#sent-modal').modal('show')
    }.bind(this))
})
