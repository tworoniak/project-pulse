export interface Phase {
  id: string;
  projectId: string;
  name: string;
  status: 'pending' | 'active' | 'complete' | 'blocked';
  owner: string;
  startDate: string;
  endDate: string;
  completionPct: number;
  order: number;
}
