import React, { useEffect } from 'react';

export const useDocumentTitle = (pageName) => {
  useEffect(() => {
    document.title = pageName;
  }, []);
};