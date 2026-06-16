import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Project } from '../../../../../shared/models/project.model';

const PRIORITY_LABELS: Record<string, string> = {
  'low':      'Low',
  'medium':   'Medium',
  'high':     'High',
  'critical': 'Critical',
};

@Component({
  selector: 'app-priority-badge-cell-renderer',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="priority-badge" [ngClass]="'priority-' + priority()">
      {{ label() }}
    </span>
  `,
  styles: [`
    .priority-badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      line-height: 1.6;
    }
    .priority-low      { background: rgba(100, 116, 139, 0.15); color: #94a3b8; }
    .priority-medium   { background: rgba(78, 158, 245, 0.15);  color: #4e9ef5; }
    .priority-high     { background: rgba(245, 166, 35, 0.15);  color: #f5a623; }
    .priority-critical { background: rgba(240, 82, 82, 0.15);   color: #f05252; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriorityBadgeCellRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams<Project> | null>(null);

  priority = computed(() => this.params()?.value as string ?? '');
  label    = computed(() => PRIORITY_LABELS[this.priority()] ?? this.priority());

  agInit(params: ICellRendererParams<Project>): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams<Project>): boolean {
    this.params.set(params);
    return true;
  }
}
