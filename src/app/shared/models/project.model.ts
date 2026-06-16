export interface Project {
  id: string;
  name: string;
  status: 'planning' | 'in-progress' | 'review' | 'complete' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'critical';
  owner: string;
  startDate: string;
  dueDate: string;
  progress: number;
  phaseCount: number;
  tags: string[];
}
