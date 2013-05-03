var PasswordCheck = function(field){
  this.submit = field.siblings(':submit')
  this.submit.attr('disabled', 'disabled')
}

$.fn.passwordCheck = function(){
  this.each(function(){
    new PasswordCheck($(this))
  })
}
