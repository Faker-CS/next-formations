'use client';

import { usePathname } from 'next/navigation';
import { routes } from '@/routes';

export default function Page() {
  const pathname = usePathname();
  const route = routes.find(r => r.path === pathname);
  const Component = route ? route.component : routes[0].component;

  return <Component />;
}
