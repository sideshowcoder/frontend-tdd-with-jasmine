describe('PasswordCheck', function(){
  it('disables the submit for empty passwords', function(){
    loadFixtures('form.html')
    var submit = $(':submit')
    $('.password-field').passwordCheck()
    expect(submit.attr('disabled')).toBeTruthy()
  })

  it('enables the submit for passwords longer than 4', function(){
    loadFixtures('form.html')
    var submit = $(':submit')
    var pw = $('.password-field')
    $('.password-field').passwordCheck()
    pw.val('12345678')
    expect(submit.attr('disabled')).toBeFalsy()
  })
})
