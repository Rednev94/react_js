import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  limit: number;
  itemsAmount: number;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);
  const pagesArray: number[] = [];

  const navigate = useNavigate();
  console.log(navigate);

  for (let i = 1; i <= pagesAmount; i += 1) {
    pagesArray.push(i);
  }

  console.log(pagesAmount);
  return (
    <div>
      {pagesArray.map((page) => (
        <button key={`key${page}`} type="button" onClick={() => navigate(`?page=${page}`)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
