import React from 'react';
import classNames from 'classnames';
import styles from './Triangle.module.scss';

interface ITriangle {
  /**
   * to make this look like figma design with this trick
   * we need to divide this by 2
   */
  size?: number;
}

const Triangle = ({ size = 10 }: ITriangle) => {
  return (
    <span
      style={{
        borderWidth: size / 2,
        borderBottomWidth: size / 2,
        borderRightWidth: size / 2
      }}
      className={classNames(styles.triangle)}
    />
  );
};

export default Triangle;
