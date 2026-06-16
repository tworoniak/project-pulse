import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { WorkItem } from '../../../../../../shared/models/work-item.model';

@Component({
  selector: 'app-due-date-cell-renderer',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="due-date" [ngClass]="{ 'overdue': isOverdue() }">
      {{ formatted() }}
      @if (isOverdue()) {
        <span class="overdue-badge" aria-label="Overdue">!</span>
      }
    </span>
  `,
  styles: [`
    .due-date {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
    }
    .due-date.overdue {
      color: #f05252;
    }
    .overdue-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #f05252;
      color: #fff;
      font-size: 10px;
      font-weight: 700;
      line-height: 1;
      flex-shrink: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DueDateCellRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams<WorkItem> | null>(null);

  formatted = computed(() => {
    const val = this.params()?.value as string;
    if (!val) return '';
    return new Date(val).toLocaleDateString('en-US', {
      month: 'short',
      day:   'numeric',
      year:  'numeric',
    });
  });

  isOverdue = computed(() => {
    const val = this.params()?.value as string;
    if (!val) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(val) < today;
  });

  agInit(params: ICellRendererParams<WorkItem>): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams<WorkItem>): boolean {
    this.params.set(params);
    return true;
  }
}
