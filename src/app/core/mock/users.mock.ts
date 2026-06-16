import { User } from '../../shared/models/user.model';

export const MOCK_USERS: User[] = [
  { id: 'u-001', name: 'Sarah Chen',      email: 'sarah.chen@projectpulse.dev',    role: 'admin'  },
  { id: 'u-002', name: 'Michael Torres',  email: 'm.torres@projectpulse.dev',      role: 'pm'     },
  { id: 'u-003', name: 'Emma Wilson',     email: 'e.wilson@projectpulse.dev',      role: 'pm'     },
  { id: 'u-004', name: 'James Park',      email: 'j.park@projectpulse.dev',        role: 'pm'     },
  { id: 'u-005', name: 'Aisha Johnson',   email: 'a.johnson@projectpulse.dev',     role: 'pm'     },
  { id: 'u-006', name: 'David Martinez',  email: 'd.martinez@projectpulse.dev',    role: 'viewer' },
  { id: 'u-007', name: 'Priya Patel',     email: 'p.patel@projectpulse.dev',       role: 'viewer' },
  { id: 'u-008', name: "Liam O'Brien",    email: 'l.obrien@projectpulse.dev',      role: 'viewer' },
  { id: 'u-009', name: 'Yuki Tanaka',     email: 'y.tanaka@projectpulse.dev',      role: 'pm'     },
  { id: 'u-010', name: 'Marcus Reid',     email: 'm.reid@projectpulse.dev',        role: 'pm'     },
];
