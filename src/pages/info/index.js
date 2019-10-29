import React from 'react';
import styles from './info.module.sass';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import routes, { routesMap } from '@/routes';

@inject('stores') @observer export default class extends React.Component{

  render(){
    let store = this.props.stores;
    return(
      <div>
        <div className="d-flex justify-content-around">
          <div className={styles.infoText}>
            <p>Класс</p>
            <p>Потребляемая мощность</p>
            <p>Сила света</p>
            <p>Гарантия</p>
            <p>Монтаж</p>
            <p>Итого сумма</p>
          </div>
          <div className={styles.infoText}>
            <p>Standart</p>
            <p>59 Вт</p>
            <p>3469 Люмен = 7.5 ламп</p>
            <p>3 года</p>
            <p>Да</p>
            <p>2595 рублей</p>
          </div>
        </div>
        <div>
            <div className="d-flex col">
              <div className={'col col-md-1 ' + styles.moreInformation}>
                <Link to={routesMap.inDetailInfo} className={styles.infoLink}>i</Link>
              </div>
              <div className={'col-md-11 d-flex justify-content-center ' + styles.chooseColorInfo}>
                <p className={styles.chooseColorText}>Выберите цвет свечения</p>
              </div>
            </div>


            <div className={'d-flex justify-content-around ' + styles.chooseColorImg}>

              <div className={styles.info_elem}>
                <img src="https://sun9-18.userapi.com/c854228/v854228264/11424e/PUqSMsovXl4.jpg"
                      width="185px"
                      height="185x"
                      alt=""
                      id="first"
                      onClick={store.addActiveClass}
                      className={styles.infoImg_first}
                     />
                <div className={store.active === "first" ? styles.active: styles.none} >
                <svg  className={styles.chekMark}
                       xmlns="http://www.w3.org/2000/svg"
                       width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="white">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                </svg>
                </div>
                <p className={styles.infoElemText}>Теплый</p>
              </div>

              <div className={styles.info_elem} >
                <img src="https://sun9-37.userapi.com/c857736/v857736012/8472d/tuLh-0w8-pM.jpg"
                      width="185px"
                      height="185px"
                      alt="" id="second"
                      onClick={store.addActiveClass}
                      className={styles.infoImg_second}
                      />
                <div className={store.active === "second" ? styles.active: styles.none} >
                <svg  className={styles.chekMark}
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="white">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                </svg>
                </div>
                <p className={styles.infoElemText_second}>Дневной</p>
              </div>


              <div className={styles.info_elem}>
                <img src="https://77427c00-41d8-4632-9e0d-d926808958f3.selcdn.net/images/landings/Podsvetka_kuhni-1.jpg"
                    width="185px"
                    height="185px"
                    alt=""
                    id="third"
                    onClick={store.addActiveClass}
                    className={styles.infoImg_third}
                    />
                <div className={store.active === "third" ? styles.active: styles.none}>
                <svg  className={styles.chekMark}
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="white">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                </svg>
                </div>
                <p className={styles.infoElemText_third}>Холодный</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
