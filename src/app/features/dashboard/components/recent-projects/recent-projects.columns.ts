import { ColDef } from 'ag-grid-community';
import { Project } from '../../../../shared/models/project.model';
import { StatusCellRendererComponent } from '../../../projects/components/cell-renderers/status-cell-renderer/status-cell-renderer.component';
import { PriorityBadgeCellRendererComponent } from '../../../projects/components/cell-renderers/priority-badge-cell-renderer/priority-badge-cell-renderer.component';
import { ProgressCellRendererComponent } from '../../../projects/components/cell-renderers/progress-cell-renderer/progress-cell-renderer.component';

export const RECENT_PROJECTS_COLUMNS: ColDef<Project>[] = [
  {
    field:      'name',
    headerName: 'Project',
    flex:       2,
    minWidth:   200,
  },
  {
    field:        'status',
    headerName:   'Status',
    width:        160,
    cellRenderer: StatusCellRendererComponent,
  },
  {
    field:        'priority',
    headerName:   'Priority',
    width:        130,
    cellRenderer: PriorityBadgeCellRendererComponent,
  },
  {
    field:        'progress',
    headerName:   'Progress',
    flex:         1,
    minWidth:     180,
    cellRenderer: ProgressCellRendererComponent,
  },
];
