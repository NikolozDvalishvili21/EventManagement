export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'organizer' | 'admin' | 'user';
  avatar: string;
  eventCount?: number;
}
