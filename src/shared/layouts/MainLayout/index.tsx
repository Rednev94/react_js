import React, { FC } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import style from './MainLoyout.module.scss';

interface IMainLoyout {
  children: React.ReactNode;
}

const MainLoyout: FC<IMainLoyout> = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.content_wrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLoyout;
