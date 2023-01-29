import React, { useEffect, ReactNode } from 'react';

import { createPortal } from 'react-dom';

type PortalT = {
  children: ReactNode;
};

const Portal: React.FC<PortalT> = ({ children }) => {
  const mount = document.getElementById('portal-root');
  const el = document.createElement('div');

  useEffect(() => {
    mount?.appendChild(el);

    return () => mount?.removeChild(el) as void;
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
