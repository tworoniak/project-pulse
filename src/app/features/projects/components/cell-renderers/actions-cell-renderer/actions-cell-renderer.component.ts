import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Project } from '../../../../../shared/models/project.model';

@Component({
  selector: 'app-actions-cell-renderer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a class="btn-view"
       [routerLink]="['/projects', projectId()]"
       aria-label="View project details">
      View
    </a>
  `,
  styles: [`
    .btn-view {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      background: rgba(108, 142, 245, 0.12);
      color: #6c8ef5;
      border: 1px solid rgba(108, 142, 245, 0.25);
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      transition: background 200ms ease, border-color 200ms ease;
    }
    .btn-view:hover {
      background: rgba(108, 142, 245, 0.2);
      border-color: rgba(108, 142, 245, 0.45);
    }
    .btn-view:focus-visible {
      outline: 2px solid #6c8ef5;
      outline-offset: 2px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsCellRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams<Project> | null>(null);

  projectId = computed(() => this.params()?.data?.id ?? '');

  agInit(params: ICellRendererParams<Project>): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams<Project>): boolean {
    this.params.set(params);
    return true;
  }
}
