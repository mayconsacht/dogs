import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return <span style={{ color: '#f31', margin: '1rem 0' }}>error</span>;
};

export default Error;
