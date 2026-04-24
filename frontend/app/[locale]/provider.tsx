'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ThemeProvider } from 'next-themes';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { useEffect } from 'react';

import { queryClient } from '@/lib/react-query';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <ThemeProvider attribute="class" enableColorScheme={false}>
      <QueryClientProvider client={queryClient}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};