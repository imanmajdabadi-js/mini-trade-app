import { useEffect, useState } from 'react';
import { Urls } from '../stock/api';
import type { User } from './types';

export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const newUrl = Urls.user(userId);
    fetch(newUrl)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, [userId]);
  return { user };
}
