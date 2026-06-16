import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  computed,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  GridApi,
  GridOptions,
  GridReadyEvent,
  themeQuartz,
} from 'ag-grid-community';
import { Phase } from '../../../../shared/models/phase.model';
import { WorkItem } from '../../../../shared/models/work-item.model';
import { ReportRow, REPORT_COLUMNS } from './report-grid.columns';
import { PhaseGroupRowRendererComponent } from './cell-renderers/phase-group-row-renderer/phase-group-row-renderer.component';

const gridTheme = themeQuartz.withParams({
  backgroundColor:       '#161926',
  foregroundColor:       '#e2e6f0',
  headerBackgroundColor: '#1e2235',
  headerTextColor:       '#8b90a8',
  borderColor:           '#2a2f47',
  accentColor:           '#6c8ef5',
  rowHoverColor:         'rgba(108, 142, 245, 0.06)',
  browserColorScheme:    'dark',
});

@Component({
  selector: 'app-report-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './report-grid.component.html',
  styleUrl: './report-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportGridComponent {
  phases    = input<Phase[]>([]);
  workItems = input<WorkItem[]>([]);

  readonly columns = REPORT_COLUMNS;
  readonly theme   = gridTheme;

  private gridApi = signal<GridApi<ReportRow> | null>(null);

  rows = computed<ReportRow[]>(() => {
    const phases    = this.phases();
    const workItems = this.workItems();
    const phaseMap  = new Map(phases.map(p => [p.id, p]));

    return workItems.map(wi => {
      const phase = phaseMap.get(wi.phaseId);
      return {
        phaseId:            wi.phaseId,
        phaseName:          phase?.name ?? 'Unknown',
        phaseStatus:        phase?.status ?? 'pending',
        phaseCompletionPct: phase?.completionPct ?? 0,
        title:              wi.title,
        status:             wi.status,
        priority:           wi.priority,
        assignee:           wi.assignee,
        dueDate:            wi.dueDate,
      } satisfies ReportRow;
    });
  });

  readonly gridOptions: GridOptions<ReportRow> = {
    animateRows:          true,
    domLayout:            'autoHeight',
    groupDisplayType:     'groupRows',
    groupDefaultExpanded: -1,
    groupRowRendererParams: {
      innerRenderer: PhaseGroupRowRendererComponent,
    },
    defaultColDef: {
      resizable: true,
    },
  };

  onGridReady(event: GridReadyEvent<ReportRow>): void {
    this.gridApi.set(event.api);
  }

  exportCsv(): void {
    this.gridApi()?.exportDataAsCsv({ fileName: 'project-report.csv' });
  }
}
