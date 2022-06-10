import React, { FC } from 'react';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import style from './PageLayout.module.scss';

interface IPageLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.content_wrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
