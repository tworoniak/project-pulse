import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  viewChild,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../shared/models/project.model';
import { Phase } from '../../shared/models/phase.model';
import { WorkItem } from '../../shared/models/work-item.model';
import { ProjectService } from '../projects/services/project.service';
import { PhaseService } from '../phases/services/phase.service';
import { ReportSummaryComponent } from './components/report-summary/report-summary.component';
import { ReportGridComponent } from './components/report-grid/report-grid.component';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [ReportSummaryComponent, ReportGridComponent],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportingComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  private phaseService = inject(PhaseService);

  private readonly reportGrid = viewChild(ReportGridComponent);

  project = signal<Project | null>(null);
  phases = signal<Phase[]>([]);
  allWorkItems = signal<WorkItem[]>([]);

  workItems = computed(() => {
    const phaseIds = new Set(this.phases().map((p) => p.id));
    return this.allWorkItems().filter((wi) => phaseIds.has(wi.phaseId));
  });

  hasProjectId = signal(false);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.hasProjectId.set(!!id);

    if (!id) return;

    this.projectService.getById(id).subscribe((project) => {
      if (project) this.project.set(project);
    });

    this.phaseService.getByProjectId(id).subscribe((phases) => {
      this.phases.set([...phases].sort((a, b) => a.order - b.order));
    });

    this.phaseService.getAllWorkItems().subscribe((all) => {
      this.allWorkItems.set(all);
    });
  }

  onExport(): void {
    this.reportGrid()?.exportCsv();
  }
}
