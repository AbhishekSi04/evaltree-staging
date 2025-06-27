'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  onSuccess: () => void;
}

export default function SuccessHandler({ onSuccess }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('success') === '1') {
      onSuccess();

      setTimeout(() => {
        router.replace('/');
      }, 3000);
    }
  }, [searchParams, router, onSuccess]);

  return null;
}
