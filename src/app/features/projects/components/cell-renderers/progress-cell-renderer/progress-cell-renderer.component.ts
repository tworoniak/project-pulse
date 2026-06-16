import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-progress-cell-renderer',
  standalone: true,
  template: `
    <div class="progress-cell">
      <div class="progress-bar">
        <div class="progress-fill" [style.width.%]="value()"></div>
      </div>
      <span class="progress-label">{{ value() }}%</span>
    </div>
  `,
  styles: [`
    .progress-cell {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 100%;
    }
    .progress-bar {
      flex: 1;
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: #6c8ef5;
      border-radius: 3px;
    }
    .progress-label {
      font-size: 12px;
      color: #8b90a8;
      white-space: nowrap;
      min-width: 34px;
      text-align: right;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCellRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams | null>(null);

  value = computed(() => (this.params()?.value as number) ?? 0);

  agInit(params: ICellRendererParams): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.params.set(params);
    return true;
  }
}
