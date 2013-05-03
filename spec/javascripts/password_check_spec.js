describe('PasswordCheck', function(){
  var submit, pw

  beforeEach(function(){
    loadFixtures('form.html')
    submit = $(':submit')
    pw = $('.password-field')
    $('.password-field').passwordCheck()
  })

  it('enables the submit for passwords longer than 4', function(){
    pw.val('12345678').keyup()
    expect(submit.attr('disabled')).toBeFalsy()
  })

  it('disables the submit for passwords shorter than 4', function(){
    pw.val('12345678').keyup()
    pw.val('12').keyup()
    expect(submit.attr('disabled')).toBeTruthy()
  })

})
