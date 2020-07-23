import React, { Fragment, useState, useContext } from 'react';
import { Select } from 'antd';
import cx from 'classnames';

import './sample.less';
import { store, ACTIONS } from '../../store/store';

const SampleComponent = () => {
  const { state, dispatch } = useContext(store);

  const classes = cx('lds-select-trans');

  return (
    <div className={classes}>
      <div>Sample component</div>
    </div>
  );
};

export default SampleComponent;
