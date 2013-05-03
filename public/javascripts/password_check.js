var PasswordCheck = function(field){
  this.submit = field.siblings(':submit')
  this.field = field
  this.init()
}

PasswordCheck.prototype.init = function(){
  this.field.keyup(this.handleNewValue.bind(this))
  this.handleNewValue()
}

PasswordCheck.prototype.handleNewValue = function(){
  if(this.validate()){
    this.submit.removeAttr('disabled')
  } else {
    this.submit.attr('disabled', 'disabled')
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

$(function(){ $('.password-field').passwordCheck() })
