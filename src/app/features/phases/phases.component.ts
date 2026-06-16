import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../shared/models/project.model';
import { Phase } from '../../shared/models/phase.model';
import { WorkItem } from '../../shared/models/work-item.model';
import { ProjectService } from '../projects/services/project.service';
import { PhaseService } from './services/phase.service';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { PhaseTimelineComponent } from './components/phase-timeline/phase-timeline.component';
import { WorkItemsGridComponent } from './components/work-items-grid/work-items-grid.component';

@Component({
  selector: 'app-phases',
  standalone: true,
  imports: [ProjectHeaderComponent, PhaseTimelineComponent, WorkItemsGridComponent],
  templateUrl: './phases.component.html',
  styleUrl: './phases.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhasesComponent implements OnInit {
  private route          = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  private phaseService   = inject(PhaseService);

  project       = signal<Project | null>(null);
  phases        = signal<Phase[]>([]);
  allWorkItems  = signal<WorkItem[]>([]);
  selectedPhase = signal<Phase | null>(null);

  workItems = computed(() => {
    const phase = this.selectedPhase();
    if (!phase) return [];
    return this.allWorkItems().filter(wi => wi.phaseId === phase.id);
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.projectService.getById(id).subscribe(project => {
      if (project) this.project.set(project);
    });

    this.phaseService.getByProjectId(id).subscribe(phases => {
      const sorted = [...phases].sort((a, b) => a.order - b.order);
      this.phases.set(sorted);
      if (sorted.length > 0) this.selectedPhase.set(sorted[0]);
    });

    this.phaseService.getAllWorkItems().subscribe(all => {
      this.allWorkItems.set(all);
    });
  }

  onPhaseSelected(phase: Phase): void {
    this.selectedPhase.set(phase);
  }
}
