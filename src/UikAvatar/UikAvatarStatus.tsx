import React from 'react';
import s from './avatar.module.scss';

type UikAvatarStatusProps = {
  status: React.ReactNode,
};

const UikAvatarStatus = ({ status }: UikAvatarStatusProps) => (
  <div className={s.statusWrapper}>
    {
      status === 'uik_online' ? (
        <div className={s.statusOnline} />
      ) : (
        <span>
          {status}
        </span>
      )
    }
  </div>
);

export default UikAvatarStatus;
