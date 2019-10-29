import React from 'react';
import { Link } from 'react-router-dom';
import routes, { routesMap } from '@/routes';
import styles from './inDetailInfo.module.sass';

export default class extends React.Component{
  render(){
    return(
      <div className={'row ' + styles.detailInfo}>
        <div className="col-md-12">
            <Link to={routesMap.home}>back</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rerum quas excepturi quod, veritatis sequi hic sit natus odio facere aperiam, dolor ratione quisquam illum dolorum, perspiciatis atque quaerat reiciendis?</p>
        </div>
      </div>
    );
  }
}
