'use client';

import { X } from 'lucide-react';
import { ErrorBoundary } from 'react-error-boundary';

export const BlockError: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ErrorBoundary fallback={<ErrorComponent message="Something went wrong" />}>{children}</ErrorBoundary>
);

export const ErrorComponent: React.FC<{ message: string }> = ({ message }) => (
  <div className="container mx-auto max-w-6xl py-4">
    <div className="rounded-md border-2 border-red-700 bg-red-50 p-6">
      <div className="flex">
        <div className="shrink-0">
          <X className="size-6 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-base font-medium text-red-700">
            <b>Error: </b>
            {message}
          </h3>
        </div>
      </div>
    </div>
  </div>
);
