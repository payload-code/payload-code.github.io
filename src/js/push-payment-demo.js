payload('test_client_key_3btrkEyC6xvcByXLthuZx')

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
var submit = function(evt) {
        evt.preventDefault()

  var type = $(this).attr('role')

        var obj = $('#payment-request').serializeObject()

  if (type == 'text') {
    obj.email_customer = false
    obj.notifications=[{
      phone: obj.customer.phone_number
    }]
  }

  if (type == 'qr') {
    obj.email_customer = false
  }

        obj.type = 'one_time'
        obj.processing_id = 'acct_3btxk1Sh7AyfOzmEIaGfT'

  var txt = $(this).html()
        $(this).html(
            '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Loading...'
        )

        payload.PaymentLink.create(obj).then(function(req) {
            $(this).html(txt)
    if (type == 'qr') {
      $('#qr-modal').find('img').attr('src', req.url.replace('?', '.qrcode.svg?'))
      $('#qr-modal').modal('show')
    } else {
      $('#sent-modal').find('a').attr('href', req.url)
      $('#sent-modal').modal('show')
    }
        }.bind(this))
    }
    $('#payment-request .btn-primary').click(submit)
