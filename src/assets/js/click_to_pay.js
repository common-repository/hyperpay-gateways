wpwlOptions = {
    onReady: function () {
      jQuery('.wpwl-container-virtualAccount-CLICK_TO_PAY').after(jQuery('.wpwl-container-card '))
      jQuery(".wpwl-control-clickToPayAccessMyCards").val(dataObj_click_to_pay.email) 
    },
  
    onError: function (e) {
      if (['not_enrolled', "add_new_card", "otp_channel_invalid"].includes(e.event)) {
        jQuery('.wpwl-form-card').show()
        window.location.href = `#${jQuery('.wpwl-container-card')[0].id}`
      }
    },
  
    clickToPay: {
      "cardList": {
        "displayCardListByDefault": true,
        "displayCancelOption": true,
        "displayAddCard": true,
        "displayPreferredCard": false,
        "displaySignOut": true,
        "displayHeader": false,
        "cardSelectionType": 'gridView',
        "unacceptedCard": '',
  
      },
      "otpScreen": {
        "displayOtpScreenByDefault": false,
        "displayCancelOption": true,
        "displayHeader": true,
        //"type": 'overlay',
        "autoSubmit": false,
        "hideLoader": false,
        "displayRememberMe": false,
        "otpResendLoading": false,
        "displayPayAnotherWay": true
      },
      "srcMark": {
        "height": '40',
        "width": '200',
        "darkTheme": false
      },
      "learnMore": {
        "displayCloseButton": true,
        "displayOkButton": true,
      }
  
    }, //clickToPay
   paymentTarget: "_top",
    style: "card"
  } //wpwlOptions
  
  