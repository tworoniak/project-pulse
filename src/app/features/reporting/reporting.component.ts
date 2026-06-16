import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [],
  template: `<p class="placeholder">Reporting works</p>`,
  styles: [`.placeholder { color: var(--color-text-muted); font-size: var(--font-size-sm); }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportingComponent {}
