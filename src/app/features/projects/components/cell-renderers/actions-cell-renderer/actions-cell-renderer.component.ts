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
    :host {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .btn-view {
      color: #6c8ef5;
      font-size: 12px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      transition: color 150ms ease;
    }
    .btn-view:hover {
      color: #8faaf8;
      text-decoration: underline;
    }
    .btn-view:focus-visible {
      outline: 2px solid #6c8ef5;
      outline-offset: 2px;
      border-radius: 2px;
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
