import React, { createContext, useState, useContext } from 'react';

const PlayListContext = createContext();

export const PlayListProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const addItem = (item) => {
    setLikedItems([...likedItems, item]);
  };

  const removeItem = (itemId) => {
    setLikedItems(likedItems.filter((item) => item.id !== itemId));
  };

  return (
    <PlayListContext.Provider value={{ likedItems, addItem, removeItem }}>
      {children}
    </PlayListContext.Provider>
  );
};

export const useLikedItems = () => {
  const context = useContext(PlayListContext);
  if (!context) {
    throw new Error('useLikedItems must be used within a PlayListProvider');
  }
  return context;
};
