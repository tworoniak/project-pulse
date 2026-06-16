import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { WorkItem } from '../../../../../../shared/models/work-item.model';

const STATUS_LABELS: Record<string, string> = {
  'todo':        'To Do',
  'in-progress': 'In Progress',
  'blocked':     'Blocked',
  'done':        'Done',
};

@Component({
  selector: 'app-work-item-status-cell-renderer',
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
    .status-todo        { background: rgba(139, 144, 168, 0.15); color: #8b90a8; }
    .status-in-progress { background: rgba(245, 166, 35, 0.15);  color: #f5a623; }
    .status-blocked     { background: rgba(240, 82, 82, 0.15);   color: #f05252; }
    .status-done        { background: rgba(76, 175, 130, 0.15);  color: #4caf82; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkItemStatusCellRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams<WorkItem> | null>(null);

  status = computed(() => this.params()?.value as string ?? '');
  label  = computed(() => STATUS_LABELS[this.status()] ?? this.status());

  agInit(params: ICellRendererParams<WorkItem>): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams<WorkItem>): boolean {
    this.params.set(params);
    return true;
  }
}
