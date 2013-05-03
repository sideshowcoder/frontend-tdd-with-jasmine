describe('PasswordCheck', function(){
  it('disables the submit for empty passwords', function(){
    expect(submit.attr('disabled')).toBeTruthy()
  })
})
