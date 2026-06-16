import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Project } from '../../../../../shared/models/project.model';

const STATUS_LABELS: Record<string, string> = {
  'planning':    'Planning',
  'in-progress': 'In Progress',
  'review':      'Review',
  'complete':    'Complete',
  'on-hold':     'On Hold',
};

@Component({
  selector: 'app-status-cell-renderer',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="status-chip" [ngClass]="'status-' + status()">
      {{ label() }}
    </span>
  `,
  styles: [`
    .status-chip {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      line-height: 1.6;
    }
    .status-planning    { background: rgba(78, 158, 245, 0.15);  color: #4e9ef5; }
    .status-in-progress { background: rgba(245, 166, 35, 0.15);  color: #f5a623; }
    .status-review      { background: rgba(147, 112, 219, 0.15); color: #9370db; }
    .status-complete    { background: rgba(76, 175, 130, 0.15);  color: #4caf82; }
    .status-on-hold     { background: rgba(139, 144, 168, 0.15); color: #8b90a8; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCellRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams<Project> | null>(null);

  status = computed(() => this.params()?.value as string ?? '');
  label  = computed(() => STATUS_LABELS[this.status()] ?? this.status());

  agInit(params: ICellRendererParams<Project>): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams<Project>): boolean {
    this.params.set(params);
    return true;
  }
}
