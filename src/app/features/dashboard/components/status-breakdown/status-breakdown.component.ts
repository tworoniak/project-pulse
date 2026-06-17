import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

interface StatusRow {
  key: string;
  label: string;
  color: string;
  count: number;
  pct: number;
}

const STATUS_CONFIG: Array<{ key: string; label: string; color: string }> = [
  { key: 'planning',    label: 'Planning',    color: '#4e9ef5' },
  { key: 'in-progress', label: 'In Progress', color: '#f5a623' },
  { key: 'review',      label: 'Review',      color: '#9370db' },
  { key: 'complete',    label: 'Complete',    color: '#4caf82' },
  { key: 'on-hold',     label: 'On Hold',     color: '#8b90a8' },
];

@Component({
  selector: 'app-status-breakdown',
  standalone: true,
  imports: [],
  templateUrl: './status-breakdown.component.html',
  styleUrl: './status-breakdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBreakdownComponent {
  projects = input<Project[]>([]);

  rows = computed<StatusRow[]>(() => {
    const ps = this.projects();
    const total = ps.length || 1;
    const counts: Record<string, number> = {};
    for (const p of ps) {
      counts[p.status] = (counts[p.status] ?? 0) + 1;
    }
    return STATUS_CONFIG.map(s => ({
      ...s,
      count: counts[s.key] ?? 0,
      pct: Math.round(((counts[s.key] ?? 0) / total) * 100),
    }));
  });
}
