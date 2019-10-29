import React from 'react';
import styles from './header.module.sass';


export default class extends React.Component{

openSlideMenu = () => document.getElementById('side-menu').style.width = '550px';

closeSideMenu = () => document.getElementById('side-menu').style.width = '0';


  render(){
    return(
    <div className="d-flex justify-content-between col">
      <img src="https://cdn1.savepice.ru/uploads/2019/10/29/e2835ac24815baa86f01a60d05fd8f62-full.png" width="180px" height="64px" alt=""/>
       <nav className={styles.navbar}>
          <span className={styles.open_slide}>
            <a href="#" onClick={this.openSlideMenu}>
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
                <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
                <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
              </svg>
            </a>
          </span>

       </nav>

       <div id="side-menu" className={styles.side_nav}>
          <a href="#" className={styles.btn_close} onClick={this.closeSideMenu}>&times;</a>
          <a href="#">
          Обучающее Видео
          </a>
          <a href="#">
          Оформление заказа
          </a>
          <a href="#">
          Оплата
          </a>
          <a href="#">
          Доставка
          </a>
          <a href="#">
          Гарантия
          </a>
          <a href="#">
          Возврат
          </a>
          <a href="#">
          Контакты
          </a>
          <a href="#">
          Партнерам
          </a>
       </div>
    </div>
    );
  }
}
