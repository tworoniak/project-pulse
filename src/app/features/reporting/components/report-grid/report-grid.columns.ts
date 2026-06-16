import { ColDef } from 'ag-grid-community';
import { WorkItemStatusCellRendererComponent } from '../../../phases/components/work-items-grid/cell-renderers/work-item-status-cell-renderer/work-item-status-cell-renderer.component';
import { PriorityBadgeCellRendererComponent } from '../../../projects/components/cell-renderers/priority-badge-cell-renderer/priority-badge-cell-renderer.component';
import { DueDateCellRendererComponent } from '../../../phases/components/work-items-grid/cell-renderers/due-date-cell-renderer/due-date-cell-renderer.component';

export interface ReportRow {
  phaseId:            string;
  phaseName:          string;
  phaseStatus:        'pending' | 'active' | 'complete' | 'blocked';
  phaseCompletionPct: number;
  title:              string;
  status:             'todo' | 'in-progress' | 'blocked' | 'done';
  priority:           'low' | 'medium' | 'high';
  assignee:           string;
  dueDate:            string;
}

export const REPORT_COLUMNS: ColDef<ReportRow>[] = [
  {
    field:    'phaseName',
    rowGroup: true,
    hide:     true,
  },
  {
    field:      'title',
    headerName: 'Task',
    flex:       2,
    minWidth:   200,
    sortable:   true,
    filter:     'agTextColumnFilter',
    resizable:  true,
  },
  {
    field:        'status',
    headerName:   'Status',
    width:        150,
    resizable:    true,
    cellRenderer: WorkItemStatusCellRendererComponent,
  },
  {
    field:        'priority',
    headerName:   'Priority',
    width:        120,
    resizable:    true,
    cellRenderer: PriorityBadgeCellRendererComponent,
  },
  {
    field:      'assignee',
    headerName: 'Assignee',
    flex:       1,
    minWidth:   150,
    sortable:   true,
    filter:     'agTextColumnFilter',
    resizable:  true,
  },
  {
    field:        'dueDate',
    headerName:   'Due Date',
    width:        160,
    resizable:    true,
    cellRenderer: DueDateCellRendererComponent,
  },
];
