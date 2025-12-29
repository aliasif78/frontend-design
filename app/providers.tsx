'use client';

import { useEffect } from 'react';
import lottie from 'lottie-web';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import ONLY on client
    import('lord-icon-element').then(({ defineElement }) => {
      defineElement(lottie.loadAnimation);
    });
  }, []);

  return <>{children}</>;
}
