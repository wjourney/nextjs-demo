import React, { useState, useEffect } from 'react';

const Message = ({ type, content }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        visible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white text-center p-4 rounded-md`}
    >
      {content}
    </div>
  );
};

export default Message;
