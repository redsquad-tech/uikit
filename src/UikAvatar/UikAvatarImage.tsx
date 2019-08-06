import classnames from 'classnames';
import React from 'react';

import s from './avatar.module.scss';

type UikAvatarImageProps = {
  className?: string,
  name?: React.ReactNode,
  imgUrl: string | Array<string>,
};

const UikAvatarImage = ({ imgUrl, name }: UikAvatarImageProps) => (
  Array.isArray(imgUrl) ? (
    /* GROUPS, rendering multiple images */
    <div className={ classnames(s.avatarMultiWrapper, {
      [s.s2]: imgUrl.length === 2,
      [s.s3]: imgUrl.length === 3,
      [s.s4]: imgUrl.length >= 4,
    }) }
    >
      {
        imgUrl.slice(0, 4).map(url => (
          <img
            key={ url }
            alt={ typeof name === 'string' ? name : '' }
            className={s.avatar}
            src={ url }
          />
        ))
      }
    </div>
  ) : (

    /* Single */
    <img
      alt={ typeof name === 'string' ? name : '' }
      className={s.avatar}
      src={ imgUrl }
    />
  )
);

UikAvatarImage.defaultProps = {
  name: null,
};

export default UikAvatarImage;
