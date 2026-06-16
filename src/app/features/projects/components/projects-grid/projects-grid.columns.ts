import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { Project } from '../../../../shared/models/project.model';
import { StatusCellRendererComponent } from '../cell-renderers/status-cell-renderer/status-cell-renderer.component';
import { PriorityBadgeCellRendererComponent } from '../cell-renderers/priority-badge-cell-renderer/priority-badge-cell-renderer.component';
import { ProgressCellRendererComponent } from '../cell-renderers/progress-cell-renderer/progress-cell-renderer.component';
import { ActionsCellRendererComponent } from '../cell-renderers/actions-cell-renderer/actions-cell-renderer.component';

function formatDate(params: ValueFormatterParams<Project>): string {
  if (!params.value) return '';
  return new Date(params.value as string).toLocaleDateString('en-US', {
    month: 'short',
    day:   'numeric',
    year:  'numeric',
  });
}

export const PROJECT_COLUMNS: ColDef<Project>[] = [
  {
    field:       'name',
    headerName:  'Project',
    flex:        2,
    minWidth:    200,
    sortable:    true,
    filter:      'agTextColumnFilter',
    resizable:   true,
  },
  {
    field:       'status',
    headerName:  'Status',
    width:       160,
    sortable:    true,
    filter:      'agSetColumnFilter',
    resizable:   true,
    cellRenderer: StatusCellRendererComponent,
    editable:    true,
    cellEditor:  'agSelectCellEditor',
    cellEditorParams: {
      values: ['planning', 'in-progress', 'review', 'complete', 'on-hold'],
    },
  },
  {
    field:        'priority',
    headerName:   'Priority',
    width:        130,
    sortable:     true,
    filter:       'agSetColumnFilter',
    resizable:    true,
    cellRenderer: PriorityBadgeCellRendererComponent,
  },
  {
    field:      'owner',
    headerName: 'Owner',
    flex:       1,
    minWidth:   150,
    sortable:   true,
    filter:     'agTextColumnFilter',
    resizable:  true,
  },
  {
    field:        'progress',
    headerName:   'Progress',
    width:        180,
    sortable:     true,
    filter:       false,
    resizable:    true,
    cellRenderer: ProgressCellRendererComponent,
  },
  {
    field:          'dueDate',
    headerName:     'Due Date',
    width:          140,
    sortable:       true,
    filter:         false,
    resizable:      true,
    valueFormatter: formatDate,
  },
  {
    headerName:          '',
    width:               100,
    sortable:            false,
    filter:              false,
    resizable:           false,
    suppressMovable:          true,
    suppressHeaderMenuButton: true,
    suppressNavigable:        true,
    cellRenderer:             ActionsCellRendererComponent,
  },
];
