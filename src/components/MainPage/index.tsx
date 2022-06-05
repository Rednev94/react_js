import React from 'react';
import MainLoyout from '../../shared/layouts/MainLayout';
import ItemsList from '../ItemsList/index';

const MainPage = () => {
  return (
    <MainLoyout>
      <ItemsList />
    </MainLoyout>
  );
};

export default MainPage;
