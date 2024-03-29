import React, { useEffect } from 'react';

export const useSwitchModal = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const switchModal = () => {
    setIsOpenModal(prev => !prev);
  };

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setIsOpenModal(false);
      }
    };

    document.addEventListener('keyup', closeModal);

    return () => {
      document.removeEventListener('keyup', closeModal);
    };
  }, []);

  return { isOpenModal, switchModal };
};
