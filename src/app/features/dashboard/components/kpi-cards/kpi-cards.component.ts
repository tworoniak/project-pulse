import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'app-kpi-cards',
  standalone: true,
  imports: [],
  templateUrl: './kpi-cards.component.html',
  styleUrl: './kpi-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KpiCardsComponent {
  projects = input<Project[]>([]);

  totalProjects = computed(() => this.projects().length);

  inProgress = computed(() =>
    this.projects().filter(p => p.status === 'in-progress').length,
  );

  atRisk = computed(() =>
    this.projects().filter(p => p.status === 'on-hold').length,
  );

  avgProgress = computed(() => {
    const ps = this.projects();
    if (!ps.length) return 0;
    return Math.round(ps.reduce((acc, p) => acc + p.progress, 0) / ps.length);
  });
}
