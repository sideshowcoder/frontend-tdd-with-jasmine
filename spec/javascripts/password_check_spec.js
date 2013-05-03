describe('PasswordCheck', function(){
  var submit, pw

  beforeEach(function(){
    loadFixtures('form.html')
    submit = $(':submit')
    pw = $('.password-field')
    $('.password-field').passwordCheck()
  })

  it('disables the submit for empty passwords', function(){
    expect(submit.attr('disabled')).toBeTruthy()
  })

  it('enables the submit for passwords longer than 4', function(){
    pw.val('12345678').change()
    expect(submit.attr('disabled')).toBeFalsy()
  })
})
