import React from 'react';
import styles from './Main.module.css';
import { OurBonus } from '../OurBonus/OurBonus';

export const Main = () => {
  const ourBonus = [
    { title: 'Виджеты', text: '30 готовых решений' },
    { title: 'Dashboard', text: 'c показателями вашего бизнеса' },
    { title: 'Skype Аудит', text: 'отдела продаж и CRM системы' },
    { title: '35 дней', text: 'использования CRM' },
  ];
  return (
    <main className={styles.main__container}>
      <div className={styles.main__earnMore}>
        <p>Зарабатывайте больше </p>
        <p>c WELBEX</p>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.main__freeConslt}>
        <p>
          Вместе c <span>бесплатной</span>
          <br />
          <span>консультацией</span> мы дарим:
        </p>
        <div className={styles.our_bonus}>
          {ourBonus.map((el) => (
            <OurBonus title={el.title} text={el.text} />
          ))}
        </div>
        <div className={styles.our_bonus_mini}>
          <div>
            <p>Skype аудит</p>
            <p>30 виджетов</p>
          </div>
          <div>
            <p>Dashboard</p>
            <p>Месяц аmoCRM</p>
          </div>
        </div>
        <div className={styles.agree_button}>
          <button>Получить консультацию</button>
        </div>
      </div>
    </main>
  );
};
