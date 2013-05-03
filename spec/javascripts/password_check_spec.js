describe('PasswordCheck', function(){
  it('disables the submit for empty passwords', function(){
    loadFixtures('form.html')
    var submit = $(':submit')
    $('.password-field').passwordCheck()
    expect(submit.attr('disabled')).toBeTruthy()
  })
})
