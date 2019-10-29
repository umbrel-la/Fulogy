import React from 'react';
import styles from './footer.module.sass';

export default class extends React.Component{
  render(){
    return(
      <footer className="row">
          <div className="col">
          <ul className="list-group d-flex flex-row justify-content-center">
            <li className={'list-group-item flex-grow-1 ' + styles.list}>Вариант кухни</li>
            <li className={'list-group-item flex-grow-1 ' + styles.list}>Размеры</li>
            <li className={'list-group-item flex-grow-1 ' + styles.list}>Сенсор</li>
            <li className={'list-group-item flex-grow-1 ' + styles.list}>Питающий кабель</li>
            <li className={'list-group-item flex-grow-1 ' + styles.list}>Блок питания</li>
            <li className={styles.list_active + ' list-group-item flex-grow-1 ' + styles.list}>Цвет свецения</li>
            <li className={'list-group-item flex-grow-1 ' + styles.list}>Монтаж</li>
            <li className={'list-group-item flex-grow-1 ' + styles.list}>Корзина</li>
          </ul>
          </div>
      </footer>
    );
  }
}
