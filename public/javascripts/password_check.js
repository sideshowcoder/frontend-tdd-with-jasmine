var PasswordCheck = function(field){
  this.submit = field.siblings(':submit')
  this.field = field
  this.submit.attr('disabled', 'disabled')
  this.field.change(this.handleNewValue.bind(this))
}

PasswordCheck.prototype.handleNewValue = function(){
  if(this.validate()){
    this.submit.removeAttr('disabled')
  }
}

PasswordCheck.prototype.validate = function(){
  return this.field.val().length > 4
}

$.fn.passwordCheck = function(){
  this.each(function(){
    new PasswordCheck($(this))
  })
}
