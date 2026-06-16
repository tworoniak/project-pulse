import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { User } from '../../../../../shared/models/user.model';

const ROLE_LABELS: Record<string, string> = {
  admin:  'Admin',
  pm:     'PM',
  viewer: 'Viewer',
};

@Component({
  selector: 'app-role-cell-renderer',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="role-badge" [ngClass]="'role-' + role()">
      {{ label() }}
    </span>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .role-badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      line-height: 1.6;
    }
    .role-admin  { background: rgba(240, 82, 82, 0.15);   color: #f05252; }
    .role-pm     { background: rgba(78, 158, 245, 0.15);  color: #4e9ef5; }
    .role-viewer { background: rgba(139, 144, 168, 0.15); color: #8b90a8; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleCellRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams<User> | null>(null);

  role  = computed(() => this.params()?.value as string ?? '');
  label = computed(() => ROLE_LABELS[this.role()] ?? this.role());

  agInit(params: ICellRendererParams<User>): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams<User>): boolean {
    this.params.set(params);
    return true;
  }
}
