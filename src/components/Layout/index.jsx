import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1280px] min-h-screen flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Layout;
