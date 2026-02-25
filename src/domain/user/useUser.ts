import { useEffect, useState } from 'react';
import type { User } from '../../types';
import { Urls } from '../user/api';

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
