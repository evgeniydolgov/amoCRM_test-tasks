import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo_welbex.svg';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { Link } from 'react-router-dom';

export const Header = () => {
  console.log(window.innerWidth === 500);
  return (
    <header className={styles.header__container}>
      <div className={styles.header__logo}>
        <img src={logo} alt='Welbex logotype' />
        <p>крупный интегратор CRM в России и ещё 8 странах</p>
      </div>
      <ul className={styles.header__links}>
        <li>
          <Link to={'#'}>Услуги</Link>
        </li>
        <li>
          <Link to={'#'}>Виджеты</Link>
        </li>
        <li>
          <Link to={'#'}>Интеграции</Link>
        </li>
        <li>
          <Link to={'#'}>Кейсы</Link>
        </li>
        <li className={styles.certificate}>
          <Link to={'#'}>Сертификаты</Link>
        </li>
      </ul>
      <ContactInfo />
    </header>
  );
};
