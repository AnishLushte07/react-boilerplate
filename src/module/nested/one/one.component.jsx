import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';

import Sample from '../../../components/sample';

const { Text } = Typography;


const OneComponent = (props) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setData('set using hooks');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Text strong>Nested route     </Text>
      <Text type="secondary">{data}</Text>
      <br />
      <Sample></Sample>
    </>
  );
};

export default OneComponent;
