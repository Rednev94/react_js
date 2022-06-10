import React, { FC } from 'react';
import { IUsers } from '../../../interfaces/IUsers';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface Iprops {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<Iprops> = ({ usersDataAttr }) => {
  const myVar = true;
  return (
    <div>
      <p>Список пользователей:</p>
      {/* <div style={{ display: `${myVar ? 'flex' : 'block'}`, flexWrap: 'wrap', gap: '20px' }}> Инлайвывоые стили */}
      <div className={`${myVar ? style.user_list : ''}`}>
        {usersDataAttr.length ? (
          usersDataAttr.map((user) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserID ${id}`}>
                <UserCard name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователей не найдено.</div>
        )}
      </div>
    </div>
  );
};

export default UsersPageComponent;
