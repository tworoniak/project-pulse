import { ColDef } from 'ag-grid-community';
import { WorkItem } from '../../../../shared/models/work-item.model';
import { WorkItemStatusCellRendererComponent } from './cell-renderers/work-item-status-cell-renderer/work-item-status-cell-renderer.component';
import { PriorityBadgeCellRendererComponent } from '../../../projects/components/cell-renderers/priority-badge-cell-renderer/priority-badge-cell-renderer.component';
import { DueDateCellRendererComponent } from './cell-renderers/due-date-cell-renderer/due-date-cell-renderer.component';

export const WORK_ITEM_COLUMNS: ColDef<WorkItem>[] = [
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
    sortable:     true,
    filter:       'agTextColumnFilter',
    resizable:    true,
    cellRenderer: WorkItemStatusCellRendererComponent,
    editable:     true,
    cellEditor:   'agSelectCellEditor',
    cellEditorParams: {
      values: ['todo', 'in-progress', 'blocked', 'done'],
    },
  },
  {
    field:        'priority',
    headerName:   'Priority',
    width:        120,
    sortable:     true,
    filter:       'agTextColumnFilter',
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
    sortable:     true,
    filter:       false,
    resizable:    true,
    cellRenderer: DueDateCellRendererComponent,
  },
];
