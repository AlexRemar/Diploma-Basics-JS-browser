/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if(!element){
      throw new Error('Error');
    }
    this.element = element;
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    this.element.querySelector('.btn-success').addEventListener('click', e => {
      e.preventDefault();
      App.getModal('newIncome').open(); 
    });
    
    this.element.querySelector('.btn-danger').addEventListener('click', e => {
      e.preventDefault();
      App.getModal('newExpense').open(); 
    });
  }
}
