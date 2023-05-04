/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const user = User.current();
    Account.list(user, (err, response) => {
      if (err){
        alert(JSON.stringify(err));
        return;
      }
      if (!response.success){
        alert(JSON.stringify(response));
        return;
      }
    });
    
    let list = '';
      for (const list of response.data)
      list += `<option value="${list.id}">${list.name}</option>`;
      this.element.querySelector('.accounts-select').innerHTML = list;
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if(err) {
        alert(JSON.stringify(err));
        return;
      }
      if (!response.success) {
        alert(JSON.stringify(response));
        return;
      } 
      
      App.getModal(this.element.closest('.modal').dataset.modalId).close();
      App.update(); 
      
      for (const input of this.element.querySelectorAll('input'))
        input.value = '';
      
    });
  }
}