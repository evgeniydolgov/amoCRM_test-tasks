import React from 'react';
import styles from '../Footer/Footer.module.css';
import { Link } from 'react-router-dom';
import { ContactInfo } from '../ContactInfo/ContactInfo';

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.companyInfo}>
        <div>
          <h4 className={styles.list_title}>о компании</h4>
          <ul>
            <li>
              <Link to={'#'}>Партнёрская программа</Link>
            </li>
            <li>
              <Link to={'#'}>Вакансии</Link>
            </li>
          </ul>
        </div>
        <div className={styles.menu_container}>
          <div>
            <h4 className={styles.list_title}>меню</h4>
            <ul>
              <li>
                <Link to={'#'}>Расчёт стоимости</Link>
              </li>
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
                <Link to={'#'}>Наши клиенты</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.invisible_title}>о нас</h4>
            <ul>
              <li>
                <Link className={styles.small_link} to={'#'}>
                  Благодарность клиентов
                </Link>
              </li>
              <li>
                <Link to={'#'}>Кейсы</Link>
              </li>
              <li>
                <Link className={styles.big_link} to={'#'}>
                  Благодарственные письма
                </Link>
              </li>
              <li>
                <Link to={'#'}>Сертификаты</Link>
              </li>
              <li>
                <Link to={'#'}>Блог на Youtube</Link>
              </li>
              <li>
                <Link to={'#'}>Вопрос / Ответ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <h4>контакты</h4>
        <ContactInfo />
        <p>Москва, Путевой проезд 3с1, к 902</p>
        <small className={styles.copyright}>
          <p>©WELBEX 2022. Все права защищены.</p>
          <p>
            <Link to={'#'}>Политика конфиденциальности</Link>
          </p>
        </small>
      </div>
    </footer>
  );
};
