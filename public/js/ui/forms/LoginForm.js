/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.login(data, function(err,response){
      if(err){
        alert(JSON.stringify(err))
      }
      if (response.success){
      for (const input of this.element.querySelectorAll('input'))
        input.reset();
        App.setState('user-logged');
      }
      const closeButton = document.querySelector('#modal-login')
        closeButton.this.close();
    });
  }
}