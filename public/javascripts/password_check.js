$.fn.passwordCheck = function(){
  this.each(function(){
    new PasswordCheck($(this))
  })
}
