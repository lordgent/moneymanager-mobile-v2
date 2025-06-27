import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MobileLayout: React.FC<Props> = ({ children }) => {
  return <div className="mobile-container">{children}</div>;
};

export default MobileLayout;
