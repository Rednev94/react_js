import React, { useState } from 'react';
import Button from '../../shared/Button';
import style from './ItemsList.module.scss';

const ItemsList = () => {
  const [chartItemsAnount, setChartItemsAmount] = useState(0);

  const [name, setName] = useState('');

  const handleAddItemToChart = () => {
    if (chartItemsAnount < 5) {
      setChartItemsAmount(chartItemsAnount + 1);
    }
  };
  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className={style.items_list__wrapper}>
      <div>
        <p>{chartItemsAnount ? `Количество товаров: ${chartItemsAnount}` : 'Корзина пуста'}</p>

        {chartItemsAnount === 5 && <p>Корзина заполнена!</p>}

        <Button btnText="Добавить в корзину" handleClick={handleAddItemToChart} />
      </div>

      <div>
        <p>{name || 'Укажите имя'}</p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemsList;
