var PasswordCheck = function(field){
  this.submit = field.siblings(':submit')
  this.field = field
  this.submit.attr('disabled', 'disabled')
  this.field.change(function(){
    if(this.field.val().length > 4){
      this.submit.removeAttr('disabled')
    }
  }.bind(this))
}

$.fn.passwordCheck = function(){
  this.each(function(){
    new PasswordCheck($(this))
  })
}
