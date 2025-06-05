import { useState, useEffect } from 'react';

export function useToast() {
  const [toast, setToast] = useState({ open: false, title: '', description: '' });

  useEffect(() => {
    const handleShowToast = (event) => {
      setToast({
        open: true,
        title: event.detail.title,
        description: event.detail.description,
      });
    };

    window.addEventListener('show-toast', handleShowToast);
    return () => window.removeEventListener('show-toast', handleShowToast);
  }, []);

  const showToast = (title, description) => {
    const event = new CustomEvent('show-toast', {
      detail: { title, description },
    });
    window.dispatchEvent(event);
  };

  return { toast, setToast, showToast };
} 