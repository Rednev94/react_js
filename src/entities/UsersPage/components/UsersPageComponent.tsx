import React, { FC } from 'react';
import { IUsers } from '../../../interfaces/IUsers';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const myVar = true;
  return (
    <div>
      <p>Список пользователей:</p>
      {/* <div style={{ display: `${myVar ? 'flex' : 'block'}`, flexWrap: 'wrap', gap: '20px' }}> */}
      <div className={`${myVar ? style.user_list : ''}`}>
        {usersDataAttr.length ? (
          usersDataAttr.map((user) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}
      </div>
    </div>
  );
};

export default UsersPageComponent;
