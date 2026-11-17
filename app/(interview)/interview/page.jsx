'use client';

import dynamic from 'next/dynamic';

const Interview = dynamic(() => import('./Interview'), { ssr: false });

export default function Page() {
  return <Interview />;
}
