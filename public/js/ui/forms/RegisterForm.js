/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */

class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  
  onSubmit(data) {
    User.register(data, function(err,response){
      if(err){
        alert(JSON.stringify(err))
      }
      if (response.success){
      for (const input of this.element.querySelectorAll('input'))
        input.reset();
        App.setState('user-logged');
      }
      const closeButton = document.querySelector('#modal-register')
        closeButton.this.close();
    });
  }
}