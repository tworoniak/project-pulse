import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ReportRow } from '../../report-grid.columns';

const PHASE_STATUS_LABELS: Record<string, string> = {
  'pending':  'Pending',
  'active':   'Active',
  'complete': 'Complete',
  'blocked':  'Blocked',
};

@Component({
  selector: 'app-phase-group-row-renderer',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="phase-group">
      <span class="phase-name">{{ phaseName() }}</span>
      <span class="phase-status-chip" [ngClass]="'phase-status-' + phaseStatus()">
        {{ phaseStatusLabel() }}
      </span>
      <span class="phase-completion">{{ completionPct() }}% complete</span>
    </div>
  `,
  styles: [`
    .phase-group {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      font-size: 13px;
    }
    .phase-name {
      color: var(--color-text);
    }
    .phase-status-chip {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 500;
      white-space: nowrap;
    }
    .phase-status-pending  { background: rgba(139, 144, 168, 0.15); color: #8b90a8; }
    .phase-status-active   { background: rgba(245, 166, 35, 0.15);  color: #f5a623; }
    .phase-status-complete { background: rgba(76, 175, 130, 0.15);  color: #4caf82; }
    .phase-status-blocked  { background: rgba(240, 82, 82, 0.15);   color: #f05252; }
    .phase-completion {
      color: var(--color-text-muted);
      font-size: 12px;
      font-weight: 400;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhaseGroupRowRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams<ReportRow> | null>(null);

  phaseName = computed(() => this.params()?.node.key ?? '');

  phaseStatus = computed(() => {
    const children = this.params()?.node.allLeafChildren;
    return children?.[0]?.data?.phaseStatus ?? '';
  });

  phaseStatusLabel = computed(() => PHASE_STATUS_LABELS[this.phaseStatus()] ?? this.phaseStatus());

  completionPct = computed(() => {
    const children = this.params()?.node.allLeafChildren;
    return children?.[0]?.data?.phaseCompletionPct ?? 0;
  });

  agInit(params: ICellRendererParams<ReportRow>): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams<ReportRow>): boolean {
    this.params.set(params);
    return true;
  }
}
