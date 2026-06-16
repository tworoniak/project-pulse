import { WorkItem } from '../../shared/models/work-item.model';

export const MOCK_WORK_ITEMS: WorkItem[] = [
  // ph-001-1 — Discovery & Research (complete)
  { id: 'wi-001', phaseId: 'ph-001-1', title: 'Conduct stakeholder interviews',         status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-02-07' },
  { id: 'wi-002', phaseId: 'ph-001-1', title: 'Document functional requirements',        status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-02-14' },
  { id: 'wi-003', phaseId: 'ph-001-1', title: 'Competitive landscape analysis',          status: 'done',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-02-21' },
  { id: 'wi-004', phaseId: 'ph-001-1', title: 'Discovery summary report',               status: 'done',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2026-02-28' },

  // ph-001-2 — UX Design (complete)
  { id: 'wi-005', phaseId: 'ph-001-2', title: 'Wireframe all key screens',              status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-03-15' },
  { id: 'wi-006', phaseId: 'ph-001-2', title: 'Build interactive prototype',            status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-03-31' },
  { id: 'wi-007', phaseId: 'ph-001-2', title: 'Conduct usability testing sessions',     status: 'done',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-04-07' },
  { id: 'wi-008', phaseId: 'ph-001-2', title: 'Finalize design specifications',         status: 'done',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2026-04-15' },

  // ph-001-3 — Frontend Development (active)
  { id: 'wi-009', phaseId: 'ph-001-3', title: 'Set up component library',               status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-05-01' },
  { id: 'wi-010', phaseId: 'ph-001-3', title: 'Implement dashboard layout',             status: 'in-progress', priority: 'high',   assignee: 'David Martinez', dueDate: '2026-06-01' },
  { id: 'wi-011', phaseId: 'ph-001-3', title: 'Build profile management screens',       status: 'in-progress', priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-06-30' },
  { id: 'wi-012', phaseId: 'ph-001-3', title: 'Integrate REST API endpoints',           status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-07-10' },
  { id: 'wi-013', phaseId: 'ph-001-3', title: 'Write unit tests for components',        status: 'todo',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-07-15' },

  // ph-001-4 — QA & Launch (pending)
  { id: 'wi-014', phaseId: 'ph-001-4', title: 'Create QA test plan',                   status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-07-20' },
  { id: 'wi-015', phaseId: 'ph-001-4', title: 'Execute regression test suite',         status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-08-01' },
  { id: 'wi-016', phaseId: 'ph-001-4', title: 'Resolve critical defects',              status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-08-15' },
  { id: 'wi-017', phaseId: 'ph-001-4', title: 'Coordinate production deployment',      status: 'todo',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2026-08-31' },

  // ph-002-1 — Requirements Gathering (pending)
  { id: 'wi-018', phaseId: 'ph-002-1', title: 'Workshop with business stakeholders',   status: 'todo',        priority: 'high',   assignee: 'Michael Torres', dueDate: '2026-07-10' },
  { id: 'wi-019', phaseId: 'ph-002-1', title: 'Document functional requirements',       status: 'todo',        priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-07-20' },
  { id: 'wi-020', phaseId: 'ph-002-1', title: 'Define KPIs and success metrics',       status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-07-25' },
  { id: 'wi-021', phaseId: 'ph-002-1', title: 'Requirements sign-off review',          status: 'todo',        priority: 'medium', assignee: 'Michael Torres', dueDate: '2026-07-31' },

  // ph-002-2 — Architecture Design (pending)
  { id: 'wi-022', phaseId: 'ph-002-2', title: 'Select data warehouse solution',        status: 'todo',        priority: 'high',   assignee: 'Michael Torres', dueDate: '2026-08-15' },
  { id: 'wi-023', phaseId: 'ph-002-2', title: 'Design data ingestion pipeline',        status: 'todo',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-08-20' },
  { id: 'wi-024', phaseId: 'ph-002-2', title: 'Define API contracts for consumers',    status: 'todo',        priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-09-05' },
  { id: 'wi-025', phaseId: 'ph-002-2', title: 'Architecture review board presentation', status: 'todo',       priority: 'medium', assignee: 'Michael Torres', dueDate: '2026-09-15' },

  // ph-002-3 — Core Development (pending)
  { id: 'wi-026', phaseId: 'ph-002-3', title: 'Implement ETL pipeline',                status: 'todo',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-10-15' },
  { id: 'wi-027', phaseId: 'ph-002-3', title: 'Build data modeling layer',             status: 'todo',        priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-10-31' },
  { id: 'wi-028', phaseId: 'ph-002-3', title: 'Develop analytics dashboards',          status: 'todo',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-11-15' },
  { id: 'wi-029', phaseId: 'ph-002-3', title: 'Configure data refresh schedules',      status: 'todo',        priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-11-30' },

  // ph-002-4 — Testing & Validation (pending)
  { id: 'wi-030', phaseId: 'ph-002-4', title: 'Data quality validation checks',        status: 'todo',        priority: 'high',   assignee: 'Michael Torres', dueDate: '2026-12-10' },
  { id: 'wi-031', phaseId: 'ph-002-4', title: 'Performance and load testing',          status: 'todo',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-12-15' },
  { id: 'wi-032', phaseId: 'ph-002-4', title: 'User acceptance testing',               status: 'todo',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-12-20' },
  { id: 'wi-033', phaseId: 'ph-002-4', title: 'Fix UAT-identified defects',            status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-12-25' },

  // ph-002-5 — Rollout & Handover (pending)
  { id: 'wi-034', phaseId: 'ph-002-5', title: 'Production deployment',                 status: 'todo',        priority: 'high',   assignee: 'Michael Torres', dueDate: '2026-12-28' },
  { id: 'wi-035', phaseId: 'ph-002-5', title: 'Monitor system health post-launch',     status: 'todo',        priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-12-30' },
  { id: 'wi-036', phaseId: 'ph-002-5', title: 'Document lessons learned',              status: 'todo',        priority: 'low',    assignee: 'Aisha Johnson',  dueDate: '2026-12-31' },

  // ph-003-1 — Product Definition (complete)
  { id: 'wi-037', phaseId: 'ph-003-1', title: 'Define v2.0 feature requirements',      status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-01-31' },
  { id: 'wi-038', phaseId: 'ph-003-1', title: 'Prioritize backlog with stakeholders',  status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-02-10' },
  { id: 'wi-039', phaseId: 'ph-003-1', title: 'Align on platform support targets',     status: 'done',        priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-02-20' },
  { id: 'wi-040', phaseId: 'ph-003-1', title: 'Produce product definition document',   status: 'done',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-02-28' },

  // ph-003-2 — UI/UX Design (complete)
  { id: 'wi-041', phaseId: 'ph-003-2', title: 'Redesign navigation and IA',            status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-03-20' },
  { id: 'wi-042', phaseId: 'ph-003-2', title: 'Design new feature screens',            status: 'done',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-04-05' },
  { id: 'wi-043', phaseId: 'ph-003-2', title: 'Create animated prototype',             status: 'done',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-04-20' },
  { id: 'wi-044', phaseId: 'ph-003-2', title: 'Design system documentation update',   status: 'done',        priority: 'low',    assignee: 'Priya Patel',    dueDate: '2026-04-30' },

  // ph-003-3 — iOS Development (active)
  { id: 'wi-045', phaseId: 'ph-003-3', title: 'Set up Xcode project scaffolding',      status: 'done',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-05-15' },
  { id: 'wi-046', phaseId: 'ph-003-3', title: 'Implement core navigation flow',        status: 'done',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-06-01' },
  { id: 'wi-047', phaseId: 'ph-003-3', title: 'Build new feature modules',             status: 'in-progress', priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-07-01' },
  { id: 'wi-048', phaseId: 'ph-003-3', title: 'Write XCTest unit tests',               status: 'todo',        priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-07-20' },
  { id: 'wi-049', phaseId: 'ph-003-3', title: 'TestFlight beta distribution',          status: 'todo',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-07-31' },

  // ph-003-4 — Android Development (active)
  { id: 'wi-050', phaseId: 'ph-003-4', title: 'Set up Android project structure',      status: 'done',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-05-15' },
  { id: 'wi-051', phaseId: 'ph-003-4', title: 'Implement Jetpack Compose screens',     status: 'in-progress', priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-06-30' },
  { id: 'wi-052', phaseId: 'ph-003-4', title: 'Integrate shared API client library',   status: 'in-progress', priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-07-15' },
  { id: 'wi-053', phaseId: 'ph-003-4', title: 'Write instrumentation tests',           status: 'todo',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-08-10' },
  { id: 'wi-054', phaseId: 'ph-003-4', title: 'Internal Play Store track submission',  status: 'todo',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-08-31' },

  // ph-004-1 — Assessment & Planning (complete)
  { id: 'wi-055', phaseId: 'ph-004-1', title: 'Inventory current infrastructure',      status: 'done',        priority: 'high',   assignee: 'James Park',     dueDate: '2025-10-31' },
  { id: 'wi-056', phaseId: 'ph-004-1', title: 'Define migration strategy and runbook', status: 'done',        priority: 'high',   assignee: 'James Park',     dueDate: '2025-11-30' },
  { id: 'wi-057', phaseId: 'ph-004-1', title: 'Cost and risk analysis',                status: 'done',        priority: 'medium', assignee: 'David Martinez', dueDate: '2025-12-15' },
  { id: 'wi-058', phaseId: 'ph-004-1', title: 'Stakeholder sign-off on plan',          status: 'done',        priority: 'high',   assignee: 'James Park',     dueDate: '2025-12-31' },

  // ph-004-2 — Pilot Migration (complete)
  { id: 'wi-059', phaseId: 'ph-004-2', title: 'Migrate dev environment to cloud',      status: 'done',        priority: 'high',   assignee: 'James Park',     dueDate: '2026-01-31' },
  { id: 'wi-060', phaseId: 'ph-004-2', title: 'Validate workloads in new environment', status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-02-28' },
  { id: 'wi-061', phaseId: 'ph-004-2', title: 'Performance benchmarking',              status: 'done',        priority: 'medium', assignee: 'David Martinez', dueDate: '2026-03-15' },
  { id: 'wi-062', phaseId: 'ph-004-2', title: 'Document pilot findings',               status: 'done',        priority: 'low',    assignee: 'James Park',     dueDate: '2026-03-31' },

  // ph-004-3 — Full Migration & Cutover (active)
  { id: 'wi-063', phaseId: 'ph-004-3', title: 'Migrate staging workloads',             status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-04-30' },
  { id: 'wi-064', phaseId: 'ph-004-3', title: 'Migrate production services in waves',  status: 'in-progress', priority: 'high',   assignee: 'David Martinez', dueDate: '2026-06-30' },
  { id: 'wi-065', phaseId: 'ph-004-3', title: 'Update DNS and load balancer config',   status: 'in-progress', priority: 'high',   assignee: 'James Park',     dueDate: '2026-07-15' },
  { id: 'wi-066', phaseId: 'ph-004-3', title: 'Decommission legacy infrastructure',    status: 'todo',        priority: 'medium', assignee: 'David Martinez', dueDate: '2026-07-25' },
  { id: 'wi-067', phaseId: 'ph-004-3', title: 'Post-migration smoke tests',            status: 'todo',        priority: 'high',   assignee: 'James Park',     dueDate: '2026-07-31' },

  // ph-005-1 — Discovery & Strategy (complete)
  { id: 'wi-068', phaseId: 'ph-005-1', title: 'Audit current marketing stack',         status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2025-07-31' },
  { id: 'wi-069', phaseId: 'ph-005-1', title: 'Define automation use cases',           status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2025-08-31' },
  { id: 'wi-070', phaseId: 'ph-005-1', title: 'Vendor evaluation and selection',       status: 'done',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2025-09-20' },
  { id: 'wi-071', phaseId: 'ph-005-1', title: 'Strategy document sign-off',            status: 'done',        priority: 'low',    assignee: 'Aisha Johnson',  dueDate: '2025-09-30' },

  // ph-005-2 — Tool Configuration (complete)
  { id: 'wi-072', phaseId: 'ph-005-2', title: 'Set up CRM integration',                status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2025-10-31' },
  { id: 'wi-073', phaseId: 'ph-005-2', title: 'Configure email automation workflows',  status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2025-11-30' },
  { id: 'wi-074', phaseId: 'ph-005-2', title: 'Implement lead scoring rules',          status: 'done',        priority: 'medium', assignee: 'Aisha Johnson',  dueDate: '2025-12-31' },
  { id: 'wi-075', phaseId: 'ph-005-2', title: 'QA all automation trigger paths',       status: 'done',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-01-31' },

  // ph-005-3 — Integration & Launch (complete)
  { id: 'wi-076', phaseId: 'ph-005-3', title: 'Connect analytics reporting pipeline',  status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-02-28' },
  { id: 'wi-077', phaseId: 'ph-005-3', title: 'Train marketing team on platform',      status: 'done',        priority: 'medium', assignee: 'Aisha Johnson',  dueDate: '2026-03-15' },
  { id: 'wi-078', phaseId: 'ph-005-3', title: 'Soft launch to pilot segment',          status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-04-01' },
  { id: 'wi-079', phaseId: 'ph-005-3', title: 'Full rollout and documentation',        status: 'done',        priority: 'low',    assignee: 'Marcus Reid',    dueDate: '2026-04-30' },

  // ph-006-1 — Needs Analysis (pending)
  { id: 'wi-080', phaseId: 'ph-006-1', title: 'Survey HR staff on pain points',        status: 'todo',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-08-10' },
  { id: 'wi-081', phaseId: 'ph-006-1', title: 'Document self-service use cases',       status: 'todo',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-08-20' },
  { id: 'wi-082', phaseId: 'ph-006-1', title: 'Map integration requirements with HRIS', status: 'todo',       priority: 'medium', assignee: 'David Martinez', dueDate: '2026-08-25' },
  { id: 'wi-083', phaseId: 'ph-006-1', title: 'Needs analysis sign-off',               status: 'todo',        priority: 'low',    assignee: 'Sarah Chen',     dueDate: '2026-08-31' },

  // ph-006-2 — Design (pending)
  { id: 'wi-084', phaseId: 'ph-006-2', title: 'Wireframe employee self-service flows', status: 'todo',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-09-20' },
  { id: 'wi-085', phaseId: 'ph-006-2', title: 'Design manager approval workflows',     status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-09-30' },
  { id: 'wi-086', phaseId: 'ph-006-2', title: 'Prototype review session with HR team', status: 'todo',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2026-10-07' },
  { id: 'wi-087', phaseId: 'ph-006-2', title: 'Finalize design handoff package',       status: 'todo',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2026-10-15' },

  // ph-006-3 — Development (pending)
  { id: 'wi-088', phaseId: 'ph-006-3', title: 'Build employee profile module',         status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-10-31' },
  { id: 'wi-089', phaseId: 'ph-006-3', title: 'Build leave and absence request flows', status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-11-15' },
  { id: 'wi-090', phaseId: 'ph-006-3', title: 'HRIS integration endpoints',            status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-11-25' },
  { id: 'wi-091', phaseId: 'ph-006-3', title: 'Unit tests and code review',            status: 'todo',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-11-30' },

  // ph-006-4 — Testing & Deployment (pending)
  { id: 'wi-092', phaseId: 'ph-006-4', title: 'End-to-end test all user flows',        status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-12-05' },
  { id: 'wi-093', phaseId: 'ph-006-4', title: 'Pilot with 10 employees',               status: 'todo',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-12-08' },
  { id: 'wi-094', phaseId: 'ph-006-4', title: 'Fix pilot feedback issues',             status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-12-12' },
  { id: 'wi-095', phaseId: 'ph-006-4', title: 'Company-wide deployment',               status: 'todo',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2026-12-15' },

  // ph-007-1 — Audit & Planning (complete)
  { id: 'wi-096', phaseId: 'ph-007-1', title: 'Audit existing API gateway config',     status: 'done',        priority: 'high',   assignee: 'Michael Torres', dueDate: '2026-03-15' },
  { id: 'wi-097', phaseId: 'ph-007-1', title: 'Identify bottlenecks and security gaps', status: 'done',       priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-03-25' },
  { id: 'wi-098', phaseId: 'ph-007-1', title: 'Define upgrade scope and approach',     status: 'done',        priority: 'medium', assignee: 'Michael Torres', dueDate: '2026-04-05' },
  { id: 'wi-099', phaseId: 'ph-007-1', title: 'Sign-off on upgrade plan',              status: 'done',        priority: 'medium', assignee: 'Michael Torres', dueDate: '2026-04-15' },

  // ph-007-2 — Implementation (active)
  { id: 'wi-100', phaseId: 'ph-007-2', title: 'Upgrade gateway version in staging',    status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-05-01' },
  { id: 'wi-101', phaseId: 'ph-007-2', title: 'Reconfigure rate limiting policies',    status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-05-20' },
  { id: 'wi-102', phaseId: 'ph-007-2', title: 'Migrate route definitions',             status: 'in-progress', priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-06-10' },
  { id: 'wi-103', phaseId: 'ph-007-2', title: 'Update auth token validation flow',     status: 'in-progress', priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-06-20' },
  { id: 'wi-104', phaseId: 'ph-007-2', title: 'Regression test all API consumers',     status: 'todo',        priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-06-30' },

  // ph-007-3 — Testing & Cutover (active)
  { id: 'wi-105', phaseId: 'ph-007-3', title: 'Load test at production traffic scale', status: 'todo',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-07-10' },
  { id: 'wi-106', phaseId: 'ph-007-3', title: 'Security penetration test',             status: 'todo',        priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-07-15' },
  { id: 'wi-107', phaseId: 'ph-007-3', title: 'Production cutover window execution',   status: 'todo',        priority: 'high',   assignee: 'Michael Torres', dueDate: '2026-07-25' },
  { id: 'wi-108', phaseId: 'ph-007-3', title: 'Post-cutover monitoring and sign-off',  status: 'todo',        priority: 'medium', assignee: 'Michael Torres', dueDate: '2026-07-31' },

  // ph-008-1 — Regulatory Mapping (complete)
  { id: 'wi-109', phaseId: 'ph-008-1', title: 'Map applicable regulatory frameworks',  status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2025-12-31' },
  { id: 'wi-110', phaseId: 'ph-008-1', title: 'Identify required data sources',        status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-01-15' },
  { id: 'wi-111', phaseId: 'ph-008-1', title: 'Document reporting requirements',       status: 'done',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-01-25' },
  { id: 'wi-112', phaseId: 'ph-008-1', title: 'Legal review sign-off',                 status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-01-31' },

  // ph-008-2 — Data Pipeline Setup (complete)
  { id: 'wi-113', phaseId: 'ph-008-2', title: 'Build data ingestion connectors',       status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-02-20' },
  { id: 'wi-114', phaseId: 'ph-008-2', title: 'Configure data transformation rules',   status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-03-10' },
  { id: 'wi-115', phaseId: 'ph-008-2', title: 'Validate data accuracy and integrity',  status: 'done',        priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-03-25' },
  { id: 'wi-116', phaseId: 'ph-008-2', title: 'Pipeline monitoring and alerts setup',  status: 'done',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-03-31' },

  // ph-008-3 — Dashboard Development (complete)
  { id: 'wi-117', phaseId: 'ph-008-3', title: 'Build executive summary dashboard',     status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-04-20' },
  { id: 'wi-118', phaseId: 'ph-008-3', title: 'Build drill-down compliance reports',   status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-05-10' },
  { id: 'wi-119', phaseId: 'ph-008-3', title: 'Add export to PDF and CSV',             status: 'done',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-05-20' },
  { id: 'wi-120', phaseId: 'ph-008-3', title: 'Accessibility audit and fixes',         status: 'done',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-05-31' },

  // ph-008-4 — Stakeholder Review (active)
  { id: 'wi-121', phaseId: 'ph-008-4', title: 'Demo to compliance team',               status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-06-07' },
  { id: 'wi-122', phaseId: 'ph-008-4', title: 'Incorporate feedback and iterate',      status: 'in-progress', priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-06-20' },
  { id: 'wi-123', phaseId: 'ph-008-4', title: 'Final approval from legal',             status: 'todo',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-06-27' },
  { id: 'wi-124', phaseId: 'ph-008-4', title: 'Production release',                    status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-06-30' },

  // ph-009-1 — Gap Analysis (complete)
  { id: 'wi-125', phaseId: 'ph-009-1', title: 'Map current ERP processes',             status: 'done',        priority: 'high',   assignee: 'James Park',     dueDate: '2025-11-20' },
  { id: 'wi-126', phaseId: 'ph-009-1', title: 'Identify integration gaps',             status: 'done',        priority: 'high',   assignee: 'James Park',     dueDate: '2025-12-05' },
  { id: 'wi-127', phaseId: 'ph-009-1', title: 'Produce gap analysis report',           status: 'done',        priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2025-12-20' },
  { id: 'wi-128', phaseId: 'ph-009-1', title: 'Stakeholder review of findings',        status: 'done',        priority: 'medium', assignee: 'James Park',     dueDate: '2025-12-31' },

  // ph-009-2 — Connector Development (blocked)
  { id: 'wi-129', phaseId: 'ph-009-2', title: 'Build finance module connector',        status: 'done',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-01-31' },
  { id: 'wi-130', phaseId: 'ph-009-2', title: 'Build HR module connector',             status: 'in-progress', priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-03-15' },
  { id: 'wi-131', phaseId: 'ph-009-2', title: 'Resolve vendor API documentation gaps', status: 'blocked',     priority: 'high',   assignee: 'James Park',     dueDate: '2026-03-31' },
  { id: 'wi-132', phaseId: 'ph-009-2', title: 'Integration smoke tests',               status: 'blocked',     priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-04-30' },

  // ph-009-3 — Data Mapping (pending)
  { id: 'wi-133', phaseId: 'ph-009-3', title: 'Map source-to-target data fields',      status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-05-31' },
  { id: 'wi-134', phaseId: 'ph-009-3', title: 'Handle data transformation edge cases', status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-06-30' },
  { id: 'wi-135', phaseId: 'ph-009-3', title: 'Validate data mapping with sample set', status: 'todo',        priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-07-20' },
  { id: 'wi-136', phaseId: 'ph-009-3', title: 'Data mapping sign-off',                 status: 'todo',        priority: 'medium', assignee: 'James Park',     dueDate: '2026-07-31' },

  // ph-009-4 — UAT (pending)
  { id: 'wi-137', phaseId: 'ph-009-4', title: 'Prepare UAT test scenarios',            status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-08-15' },
  { id: 'wi-138', phaseId: 'ph-009-4', title: 'Run UAT with finance users',            status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-08-31' },
  { id: 'wi-139', phaseId: 'ph-009-4', title: 'Fix UAT defects',                      status: 'todo',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-09-10' },
  { id: 'wi-140', phaseId: 'ph-009-4', title: 'UAT sign-off',                         status: 'todo',        priority: 'medium', assignee: 'James Park',     dueDate: '2026-09-15' },

  // ph-009-5 — Go-Live (pending)
  { id: 'wi-141', phaseId: 'ph-009-5', title: 'Execute production cutover',            status: 'todo',        priority: 'high',   assignee: 'James Park',     dueDate: '2026-09-22' },
  { id: 'wi-142', phaseId: 'ph-009-5', title: 'Hypercare monitoring week',             status: 'todo',        priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-09-29' },
  { id: 'wi-143', phaseId: 'ph-009-5', title: 'Project closure and handover',          status: 'todo',        priority: 'low',    assignee: 'James Park',     dueDate: '2026-09-30' },

  // ph-010-1 — Tool Evaluation (complete)
  { id: 'wi-144', phaseId: 'ph-010-1', title: 'Research customer success platforms',   status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-04-10' },
  { id: 'wi-145', phaseId: 'ph-010-1', title: 'Conduct vendor demos',                  status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-04-20' },
  { id: 'wi-146', phaseId: 'ph-010-1', title: 'Evaluate against requirements matrix',  status: 'done',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-04-25' },
  { id: 'wi-147', phaseId: 'ph-010-1', title: 'Select platform and contract',          status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-04-30' },

  // ph-010-2 — Configuration & Setup (active)
  { id: 'wi-148', phaseId: 'ph-010-2', title: 'Configure customer health score model', status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-05-31' },
  { id: 'wi-149', phaseId: 'ph-010-2', title: 'Set up playbook automation rules',      status: 'in-progress', priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-06-30' },
  { id: 'wi-150', phaseId: 'ph-010-2', title: 'Integrate with CRM data feed',          status: 'in-progress', priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-07-15' },
  { id: 'wi-151', phaseId: 'ph-010-2', title: 'Validate account data accuracy',        status: 'todo',        priority: 'medium', assignee: 'Aisha Johnson',  dueDate: '2026-07-25' },
  { id: 'wi-152', phaseId: 'ph-010-2', title: 'QA all trigger workflows',              status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-07-31' },

  // ph-010-3 — Training & Adoption (pending)
  { id: 'wi-153', phaseId: 'ph-010-3', title: 'Develop CSM training curriculum',       status: 'todo',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-08-20' },
  { id: 'wi-154', phaseId: 'ph-010-3', title: 'Run hands-on training sessions',        status: 'todo',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-09-10' },
  { id: 'wi-155', phaseId: 'ph-010-3', title: 'Create self-service help documentation', status: 'todo',       priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-09-20' },
  { id: 'wi-156', phaseId: 'ph-010-3', title: 'Adoption milestone review',             status: 'todo',        priority: 'low',    assignee: 'Aisha Johnson',  dueDate: '2026-09-30' },

  // ph-010-4 — Optimization (pending)
  { id: 'wi-157', phaseId: 'ph-010-4', title: 'Analyze health score accuracy',         status: 'todo',        priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-10-15' },
  { id: 'wi-158', phaseId: 'ph-010-4', title: 'Refine playbook trigger conditions',    status: 'todo',        priority: 'medium', assignee: 'Aisha Johnson',  dueDate: '2026-10-22' },
  { id: 'wi-159', phaseId: 'ph-010-4', title: 'Report on ROI and adoption metrics',    status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-10-31' },

  // ph-011-1 — Scope Definition (complete)
  { id: 'wi-160', phaseId: 'ph-011-1', title: 'Define audit scope and boundaries',     status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2025-06-30' },
  { id: 'wi-161', phaseId: 'ph-011-1', title: 'Select audit methodology',              status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2025-07-31' },
  { id: 'wi-162', phaseId: 'ph-011-1', title: 'Identify systems in scope',             status: 'done',        priority: 'medium', assignee: 'David Martinez', dueDate: '2025-08-20' },
  { id: 'wi-163', phaseId: 'ph-011-1', title: 'Scope sign-off',                        status: 'done',        priority: 'low',    assignee: 'Sarah Chen',     dueDate: '2025-08-31' },

  // ph-011-2 — Audit Execution (complete)
  { id: 'wi-164', phaseId: 'ph-011-2', title: 'Conduct vulnerability scans',           status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2025-10-31' },
  { id: 'wi-165', phaseId: 'ph-011-2', title: 'Review access control policies',        status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2025-11-30' },
  { id: 'wi-166', phaseId: 'ph-011-2', title: 'Penetration test critical systems',     status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2025-12-15' },
  { id: 'wi-167', phaseId: 'ph-011-2', title: 'Produce audit findings report',         status: 'done',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2025-12-31' },

  // ph-011-3 — Remediation (complete)
  { id: 'wi-168', phaseId: 'ph-011-3', title: 'Prioritize findings by risk level',     status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-01-15' },
  { id: 'wi-169', phaseId: 'ph-011-3', title: 'Patch critical vulnerabilities',        status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-01-31' },
  { id: 'wi-170', phaseId: 'ph-011-3', title: 'Update access control policies',        status: 'done',        priority: 'medium', assignee: 'David Martinez', dueDate: '2026-02-15' },
  { id: 'wi-171', phaseId: 'ph-011-3', title: 'Remediation sign-off and documentation', status: 'done',      priority: 'low',    assignee: 'Sarah Chen',     dueDate: '2026-02-28' },

  // ph-012-1 — Content Audit (pending)
  { id: 'wi-172', phaseId: 'ph-012-1', title: 'Inventory all existing catalog items',  status: 'todo',        priority: 'high',   assignee: 'Michael Torres', dueDate: '2026-09-20' },
  { id: 'wi-173', phaseId: 'ph-012-1', title: 'Flag outdated and duplicate entries',   status: 'todo',        priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-10-10' },
  { id: 'wi-174', phaseId: 'ph-012-1', title: 'Gather stakeholder feedback on gaps',   status: 'todo',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-10-25' },
  { id: 'wi-175', phaseId: 'ph-012-1', title: 'Audit summary and recommendations',     status: 'todo',        priority: 'low',    assignee: 'Michael Torres', dueDate: '2026-10-31' },

  // ph-012-2 — Taxonomy Redesign (pending)
  { id: 'wi-176', phaseId: 'ph-012-2', title: 'Define new category hierarchy',         status: 'todo',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-11-20' },
  { id: 'wi-177', phaseId: 'ph-012-2', title: 'Tag all products to new taxonomy',      status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-12-10' },
  { id: 'wi-178', phaseId: 'ph-012-2', title: 'Validate taxonomy with merchandising',  status: 'todo',        priority: 'medium', assignee: 'Michael Torres', dueDate: '2026-12-20' },
  { id: 'wi-179', phaseId: 'ph-012-2', title: 'Taxonomy sign-off',                     status: 'todo',        priority: 'low',    assignee: 'Michael Torres', dueDate: '2026-12-31' },

  // ph-012-3 — Publishing & QA (pending)
  { id: 'wi-180', phaseId: 'ph-012-3', title: 'Publish refreshed catalog to staging',  status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2027-01-20' },
  { id: 'wi-181', phaseId: 'ph-012-3', title: 'QA all product pages and links',        status: 'todo',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2027-01-31' },
  { id: 'wi-182', phaseId: 'ph-012-3', title: 'SEO review of updated catalog',         status: 'todo',        priority: 'medium', assignee: 'Michael Torres', dueDate: '2027-02-14' },
  { id: 'wi-183', phaseId: 'ph-012-3', title: 'Production publish',                    status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2027-02-28' },

  // ph-013-1 — Current State Assessment (complete)
  { id: 'wi-184', phaseId: 'ph-013-1', title: 'Document existing CI/CD pipelines',     status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-02-28' },
  { id: 'wi-185', phaseId: 'ph-013-1', title: 'Identify pain points and inefficiencies', status: 'done',      priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-03-15' },
  { id: 'wi-186', phaseId: 'ph-013-1', title: 'Evaluate candidate toolchain options',  status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-03-25' },
  { id: 'wi-187', phaseId: 'ph-013-1', title: 'Assessment report sign-off',            status: 'done',        priority: 'low',    assignee: 'Emma Wilson',    dueDate: '2026-03-31' },

  // ph-013-2 — Tool Selection & Setup (active)
  { id: 'wi-188', phaseId: 'ph-013-2', title: 'Set up new CI platform (pilot repo)',   status: 'done',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-04-15' },
  { id: 'wi-189', phaseId: 'ph-013-2', title: 'Configure shared runners and caching',  status: 'done',        priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-04-30' },
  { id: 'wi-190', phaseId: 'ph-013-2', title: 'Migrate first production pipeline',     status: 'in-progress', priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-05-15' },
  { id: 'wi-191', phaseId: 'ph-013-2', title: 'Define pipeline templates library',     status: 'in-progress', priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-05-25' },
  { id: 'wi-192', phaseId: 'ph-013-2', title: 'Tool setup QA and sign-off',            status: 'todo',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-05-31' },

  // ph-013-3 — Pipeline Migration (active)
  { id: 'wi-193', phaseId: 'ph-013-3', title: 'Migrate backend service pipelines',     status: 'in-progress', priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-06-20' },
  { id: 'wi-194', phaseId: 'ph-013-3', title: 'Migrate frontend pipelines',            status: 'todo',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-06-30' },
  { id: 'wi-195', phaseId: 'ph-013-3', title: 'Update deployment secrets and vars',    status: 'todo',        priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-07-05' },
  { id: 'wi-196', phaseId: 'ph-013-3', title: 'Validate pipeline reliability metrics', status: 'todo',        priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-07-15' },

  // ph-013-4 — Documentation & Training (pending)
  { id: 'wi-197', phaseId: 'ph-013-4', title: 'Write developer runbooks',              status: 'todo',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-07-25' },
  { id: 'wi-198', phaseId: 'ph-013-4', title: 'Record pipeline tutorial videos',       status: 'todo',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-07-31' },
  { id: 'wi-199', phaseId: 'ph-013-4', title: 'Conduct team training session',         status: 'todo',        priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-08-08' },
  { id: 'wi-200', phaseId: 'ph-013-4', title: 'Final documentation review',            status: 'todo',        priority: 'low',    assignee: "Liam O'Brien",   dueDate: '2026-08-15' },

  // ph-014-1 — Requirements & Compliance Review (complete)
  { id: 'wi-201', phaseId: 'ph-014-1', title: 'Gather reporting requirements from finance', status: 'done',    priority: 'high',   assignee: 'James Park',     dueDate: '2025-09-30' },
  { id: 'wi-202', phaseId: 'ph-014-1', title: 'Review SOX and GAAP compliance needs', status: 'done',        priority: 'high',   assignee: 'James Park',     dueDate: '2025-10-31' },
  { id: 'wi-203', phaseId: 'ph-014-1', title: 'Define data access control requirements', status: 'done',      priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2025-11-20' },
  { id: 'wi-204', phaseId: 'ph-014-1', title: 'Requirements sign-off',                 status: 'done',        priority: 'medium', assignee: 'James Park',     dueDate: '2025-11-30' },

  // ph-014-2 — Report Design (complete)
  { id: 'wi-205', phaseId: 'ph-014-2', title: 'Design P&L report layout',              status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2025-12-31' },
  { id: 'wi-206', phaseId: 'ph-014-2', title: 'Design cash flow report',               status: 'done',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-01-31' },
  { id: 'wi-207', phaseId: 'ph-014-2', title: 'Design variance analysis drill-down',   status: 'done',        priority: 'medium', assignee: 'David Martinez', dueDate: '2026-02-20' },
  { id: 'wi-208', phaseId: 'ph-014-2', title: 'Design review sign-off',                status: 'done',        priority: 'low',    assignee: 'James Park',     dueDate: '2026-02-28' },

  // ph-014-3 — Data Validation (active)
  { id: 'wi-209', phaseId: 'ph-014-3', title: 'Validate P&L figures against source',   status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-03-31' },
  { id: 'wi-210', phaseId: 'ph-014-3', title: 'Validate cash flow calculations',       status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-04-30' },
  { id: 'wi-211', phaseId: 'ph-014-3', title: 'Cross-check historical data accuracy',  status: 'in-progress', priority: 'high',   assignee: 'David Martinez', dueDate: '2026-05-20' },
  { id: 'wi-212', phaseId: 'ph-014-3', title: 'Finance team data sign-off',            status: 'todo',        priority: 'high',   assignee: 'James Park',     dueDate: '2026-05-28' },
  { id: 'wi-213', phaseId: 'ph-014-3', title: 'Document data validation results',      status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-05-31' },

  // ph-014-4 — Stakeholder Approval (active)
  { id: 'wi-214', phaseId: 'ph-014-4', title: 'Demo suite to CFO and finance leads',   status: 'done',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-06-07' },
  { id: 'wi-215', phaseId: 'ph-014-4', title: 'Address CFO feedback items',            status: 'in-progress', priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-06-20' },
  { id: 'wi-216', phaseId: 'ph-014-4', title: 'Obtain formal sign-off',                status: 'todo',        priority: 'high',   assignee: 'James Park',     dueDate: '2026-06-27' },
  { id: 'wi-217', phaseId: 'ph-014-4', title: 'Schedule production go-live',           status: 'todo',        priority: 'medium', assignee: 'Aisha Johnson',  dueDate: '2026-06-30' },

  // ph-015-1 — Partner Requirements Workshop (pending)
  { id: 'wi-218', phaseId: 'ph-015-1', title: 'Identify key partner personas',         status: 'todo',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-08-25' },
  { id: 'wi-219', phaseId: 'ph-015-1', title: 'Run partner discovery workshops',       status: 'todo',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-09-10' },
  { id: 'wi-220', phaseId: 'ph-015-1', title: 'Document partner portal requirements',  status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-09-20' },
  { id: 'wi-221', phaseId: 'ph-015-1', title: 'Requirements sign-off from partners',   status: 'todo',        priority: 'medium', assignee: 'Aisha Johnson',  dueDate: '2026-09-30' },

  // ph-015-2 — Portal Design (pending)
  { id: 'wi-222', phaseId: 'ph-015-2', title: 'Wireframe partner dashboard',           status: 'todo',        priority: 'high',   assignee: 'Aisha Johnson',  dueDate: '2026-10-20' },
  { id: 'wi-223', phaseId: 'ph-015-2', title: 'Design deal registration flow',         status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-11-05' },
  { id: 'wi-224', phaseId: 'ph-015-2', title: 'Design resource library section',       status: 'todo',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-11-15' },
  { id: 'wi-225', phaseId: 'ph-015-2', title: 'Design review with partner advisory',   status: 'todo',        priority: 'medium', assignee: 'Aisha Johnson',  dueDate: '2026-11-30' },

  // ph-015-3 — Development & Integration (pending)
  { id: 'wi-226', phaseId: 'ph-015-3', title: 'Build partner authentication portal',   status: 'todo',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-12-15' },
  { id: 'wi-227', phaseId: 'ph-015-3', title: 'Build deal registration module',        status: 'todo',        priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2027-01-05' },
  { id: 'wi-228', phaseId: 'ph-015-3', title: 'CRM integration for partner accounts',  status: 'todo',        priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2027-01-15' },
  { id: 'wi-229', phaseId: 'ph-015-3', title: 'UAT and launch',                        status: 'todo',        priority: 'medium', assignee: 'Aisha Johnson',  dueDate: '2027-01-31' },

  // ph-016-1 — Search Architecture (complete)
  { id: 'wi-230', phaseId: 'ph-016-1', title: 'Define search requirements and scope',  status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-01-20' },
  { id: 'wi-231', phaseId: 'ph-016-1', title: 'Select search engine technology',       status: 'done',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-02-05' },
  { id: 'wi-232', phaseId: 'ph-016-1', title: 'Design index schema and mappings',      status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-02-20' },
  { id: 'wi-233', phaseId: 'ph-016-1', title: 'Architecture review and sign-off',      status: 'done',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2026-02-28' },

  // ph-016-2 — Indexing Pipeline (active)
  { id: 'wi-234', phaseId: 'ph-016-2', title: 'Build document ingestion pipeline',     status: 'done',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-03-31' },
  { id: 'wi-235', phaseId: 'ph-016-2', title: 'Implement real-time index updates',     status: 'in-progress', priority: 'high',   assignee: 'David Martinez', dueDate: '2026-05-01' },
  { id: 'wi-236', phaseId: 'ph-016-2', title: 'Build index monitoring dashboard',      status: 'in-progress', priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-05-15' },
  { id: 'wi-237', phaseId: 'ph-016-2', title: 'Full re-index of catalog',              status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-05-25' },
  { id: 'wi-238', phaseId: 'ph-016-2', title: 'Pipeline QA and performance test',      status: 'todo',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-05-31' },

  // ph-016-3 — Relevance Tuning (active)
  { id: 'wi-239', phaseId: 'ph-016-3', title: 'Establish relevance baseline metrics',  status: 'done',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-03-31' },
  { id: 'wi-240', phaseId: 'ph-016-3', title: 'Tune field boosting weights',           status: 'in-progress', priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-05-15' },
  { id: 'wi-241', phaseId: 'ph-016-3', title: 'Implement synonyms and stop words',     status: 'todo',        priority: 'medium', assignee: 'David Martinez', dueDate: '2026-06-01' },
  { id: 'wi-242', phaseId: 'ph-016-3', title: 'Relevance QA with search experts',      status: 'todo',        priority: 'medium', assignee: 'Priya Patel',    dueDate: '2026-06-30' },

  // ph-016-4 — Recommendations Engine (pending)
  { id: 'wi-243', phaseId: 'ph-016-4', title: 'Design collaborative filtering model',  status: 'todo',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-07-31' },
  { id: 'wi-244', phaseId: 'ph-016-4', title: 'Build model training pipeline',         status: 'todo',        priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-08-31' },
  { id: 'wi-245', phaseId: 'ph-016-4', title: 'Integrate recommendations into API',    status: 'todo',        priority: 'high',   assignee: 'David Martinez', dueDate: '2026-09-15' },
  { id: 'wi-246', phaseId: 'ph-016-4', title: 'Offline evaluation of model quality',   status: 'todo',        priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-09-30' },

  // ph-016-5 — A/B Testing & Launch (pending)
  { id: 'wi-247', phaseId: 'ph-016-5', title: 'Set up A/B testing framework',          status: 'todo',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-10-07' },
  { id: 'wi-248', phaseId: 'ph-016-5', title: 'Run controlled search quality test',    status: 'todo',        priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-10-15' },
  { id: 'wi-249', phaseId: 'ph-016-5', title: 'Analyze test results and ship winner',  status: 'todo',        priority: 'high',   assignee: 'Sarah Chen',     dueDate: '2026-10-25' },
  { id: 'wi-250', phaseId: 'ph-016-5', title: 'Launch comms and monitoring setup',     status: 'todo',        priority: 'medium', assignee: 'Sarah Chen',     dueDate: '2026-10-31' },

  // ph-017-1 — Design & Planning (complete)
  { id: 'wi-251', phaseId: 'ph-017-1', title: 'Define notification types and channels', status: 'done',       priority: 'high',   assignee: 'Michael Torres', dueDate: '2025-10-31' },
  { id: 'wi-252', phaseId: 'ph-017-1', title: 'Design event-driven architecture',       status: 'done',       priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2025-11-15' },
  { id: 'wi-253', phaseId: 'ph-017-1', title: 'Define API contracts for consumers',     status: 'done',       priority: 'medium', assignee: 'Michael Torres', dueDate: '2025-11-25' },
  { id: 'wi-254', phaseId: 'ph-017-1', title: 'Design review sign-off',                 status: 'done',       priority: 'low',    assignee: 'Michael Torres', dueDate: '2025-11-30' },

  // ph-017-2 — Service Implementation (complete)
  { id: 'wi-255', phaseId: 'ph-017-2', title: 'Implement notification dispatch service', status: 'done',      priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2025-12-31' },
  { id: 'wi-256', phaseId: 'ph-017-2', title: 'Implement email and push adapters',       status: 'done',      priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-01-31' },
  { id: 'wi-257', phaseId: 'ph-017-2', title: 'Build notification preference center',    status: 'done',      priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-02-15' },
  { id: 'wi-258', phaseId: 'ph-017-2', title: 'Unit test coverage to 80%',               status: 'done',      priority: 'medium', assignee: 'Marcus Reid',    dueDate: '2026-02-28' },

  // ph-017-3 — Integration & QA (complete)
  { id: 'wi-259', phaseId: 'ph-017-3', title: 'Integrate with all consuming services',   status: 'done',      priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-03-10' },
  { id: 'wi-260', phaseId: 'ph-017-3', title: 'End-to-end integration test suite',       status: 'done',      priority: 'high',   assignee: 'Marcus Reid',    dueDate: '2026-03-20' },
  { id: 'wi-261', phaseId: 'ph-017-3', title: 'Load test at 10k notifications/min',      status: 'done',      priority: 'high',   assignee: 'Yuki Tanaka',    dueDate: '2026-03-25' },
  { id: 'wi-262', phaseId: 'ph-017-3', title: 'Production deployment and monitoring',    status: 'done',      priority: 'medium', assignee: 'Michael Torres', dueDate: '2026-03-31' },

  // ph-018-1 — Requirements (complete)
  { id: 'wi-263', phaseId: 'ph-018-1', title: 'Gather DMS requirements from teams',     status: 'done',       priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-01-20' },
  { id: 'wi-264', phaseId: 'ph-018-1', title: 'Define document lifecycle workflows',    status: 'done',       priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-02-05' },
  { id: 'wi-265', phaseId: 'ph-018-1', title: 'Compliance and retention policy review', status: 'done',       priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-02-20' },
  { id: 'wi-266', phaseId: 'ph-018-1', title: 'Requirements documentation sign-off',    status: 'done',       priority: 'low',    assignee: 'Emma Wilson',    dueDate: '2026-02-28' },

  // ph-018-2 — Architecture (blocked)
  { id: 'wi-267', phaseId: 'ph-018-2', title: 'Select storage and metadata platform',   status: 'done',       priority: 'high',   assignee: 'Emma Wilson',    dueDate: '2026-03-20' },
  { id: 'wi-268', phaseId: 'ph-018-2', title: 'Design document versioning schema',      status: 'in-progress', priority: 'high',  assignee: 'Emma Wilson',    dueDate: '2026-04-15' },
  { id: 'wi-269', phaseId: 'ph-018-2', title: 'Resolve security review blocker',        status: 'blocked',    priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-04-30' },
  { id: 'wi-270', phaseId: 'ph-018-2', title: 'Architecture sign-off',                  status: 'blocked',    priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-05-31' },

  // ph-018-3 — Development (pending)
  { id: 'wi-271', phaseId: 'ph-018-3', title: 'Build document upload and storage',       status: 'todo',       priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-07-31' },
  { id: 'wi-272', phaseId: 'ph-018-3', title: 'Build version control and diff viewer',   status: 'todo',       priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-08-31' },
  { id: 'wi-273', phaseId: 'ph-018-3', title: 'Build access permissions model',          status: 'todo',       priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-09-15' },
  { id: 'wi-274', phaseId: 'ph-018-3', title: 'Unit and integration tests',              status: 'todo',       priority: 'medium', assignee: "Liam O'Brien",   dueDate: '2026-09-30' },

  // ph-018-4 — Rollout (pending)
  { id: 'wi-275', phaseId: 'ph-018-4', title: 'Pilot with legal team',                   status: 'todo',       priority: 'high',   assignee: 'Priya Patel',    dueDate: '2026-10-31' },
  { id: 'wi-276', phaseId: 'ph-018-4', title: 'Address pilot feedback',                  status: 'todo',       priority: 'high',   assignee: "Liam O'Brien",   dueDate: '2026-11-15' },
  { id: 'wi-277', phaseId: 'ph-018-4', title: 'Company-wide rollout',                    status: 'todo',       priority: 'medium', assignee: 'Emma Wilson',    dueDate: '2026-12-15' },
  { id: 'wi-278', phaseId: 'ph-018-4', title: 'Post-launch adoption review',             status: 'todo',       priority: 'low',    assignee: 'Emma Wilson',    dueDate: '2026-12-31' },

  // ph-019-1 — Journey Mapping (complete)
  { id: 'wi-279', phaseId: 'ph-019-1', title: 'Shadow current onboarding sessions',      status: 'done',       priority: 'high',   assignee: 'James Park',     dueDate: '2026-04-10' },
  { id: 'wi-280', phaseId: 'ph-019-1', title: 'Map pain points and drop-off moments',    status: 'done',       priority: 'high',   assignee: 'James Park',     dueDate: '2026-04-20' },
  { id: 'wi-281', phaseId: 'ph-019-1', title: 'Document ideal future-state journey',     status: 'done',       priority: 'medium', assignee: 'Yuki Tanaka',    dueDate: '2026-04-25' },
  { id: 'wi-282', phaseId: 'ph-019-1', title: 'Journey map sign-off with stakeholders',  status: 'done',       priority: 'low',    assignee: 'James Park',     dueDate: '2026-04-30' },

  // ph-019-2 — Process Redesign (active)
  { id: 'wi-283', phaseId: 'ph-019-2', title: 'Redesign welcome and setup flow',         status: 'done',       priority: 'high',   assignee: 'James Park',     dueDate: '2026-05-20' },
  { id: 'wi-284', phaseId: 'ph-019-2', title: 'Redesign guided tour and checklists',     status: 'in-progress', priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-06-10' },
  { id: 'wi-285', phaseId: 'ph-019-2', title: 'Define new support touchpoints',          status: 'in-progress', priority: 'medium', assignee: 'Yuki Tanaka',   dueDate: '2026-06-20' },
  { id: 'wi-286', phaseId: 'ph-019-2', title: 'Prototype review with customer team',     status: 'todo',        priority: 'medium', assignee: 'James Park',    dueDate: '2026-06-27' },
  { id: 'wi-287', phaseId: 'ph-019-2', title: 'Process redesign sign-off',               status: 'todo',        priority: 'low',    assignee: 'James Park',    dueDate: '2026-06-30' },

  // ph-019-3 — System Updates (active)
  { id: 'wi-288', phaseId: 'ph-019-3', title: 'Update onboarding email sequences',       status: 'in-progress', priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-06-20' },
  { id: 'wi-289', phaseId: 'ph-019-3', title: 'Update in-app onboarding steps',          status: 'todo',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-07-10' },
  { id: 'wi-290', phaseId: 'ph-019-3', title: 'Integrate with product analytics',        status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',   dueDate: '2026-07-20' },
  { id: 'wi-291', phaseId: 'ph-019-3', title: 'QA all updated flows end-to-end',         status: 'todo',        priority: 'medium', assignee: 'Yuki Tanaka',   dueDate: '2026-07-31' },

  // ph-019-4 — Pilot & Rollout (pending)
  { id: 'wi-292', phaseId: 'ph-019-4', title: 'Pilot with 50 new customers',             status: 'todo',        priority: 'high',  assignee: 'James Park',     dueDate: '2026-08-20' },
  { id: 'wi-293', phaseId: 'ph-019-4', title: 'Analyze pilot completion rates',          status: 'todo',        priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-09-01' },
  { id: 'wi-294', phaseId: 'ph-019-4', title: 'Iterate based on pilot data',             status: 'todo',        priority: 'medium', assignee: 'Yuki Tanaka',   dueDate: '2026-09-15' },
  { id: 'wi-295', phaseId: 'ph-019-4', title: 'Full rollout to all new customers',       status: 'todo',        priority: 'high',  assignee: 'James Park',     dueDate: '2026-09-30' },

  // ph-020-1 — Metrics Definition (pending)
  { id: 'wi-296', phaseId: 'ph-020-1', title: 'Define SLIs and SLOs per service',        status: 'todo',        priority: 'high',  assignee: 'Aisha Johnson',  dueDate: '2026-07-31' },
  { id: 'wi-297', phaseId: 'ph-020-1', title: 'Identify critical user journeys to monitor', status: 'todo',     priority: 'high',  assignee: 'Aisha Johnson',  dueDate: '2026-08-15' },
  { id: 'wi-298', phaseId: 'ph-020-1', title: 'Document alerting thresholds',             status: 'todo',       priority: 'medium', assignee: 'Marcus Reid',   dueDate: '2026-08-25' },
  { id: 'wi-299', phaseId: 'ph-020-1', title: 'Metrics definition sign-off',              status: 'todo',        priority: 'low',  assignee: 'Aisha Johnson',  dueDate: '2026-08-31' },

  // ph-020-2 — Platform Build (pending)
  { id: 'wi-300', phaseId: 'ph-020-2', title: 'Set up observability stack',               status: 'todo',        priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-09-30' },
  { id: 'wi-301', phaseId: 'ph-020-2', title: 'Instrument all critical services',         status: 'todo',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-10-31' },
  { id: 'wi-302', phaseId: 'ph-020-2', title: 'Build performance dashboards',             status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',   dueDate: '2026-11-20' },
  { id: 'wi-303', phaseId: 'ph-020-2', title: 'Platform QA and load test',                status: 'todo',        priority: 'medium', assignee: 'Yuki Tanaka',   dueDate: '2026-11-30' },

  // ph-020-3 — Alert Configuration (pending)
  { id: 'wi-304', phaseId: 'ph-020-3', title: 'Configure PagerDuty alert routing',        status: 'todo',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-12-10' },
  { id: 'wi-305', phaseId: 'ph-020-3', title: 'Define on-call runbooks per alert type',   status: 'todo',        priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-12-20' },
  { id: 'wi-306', phaseId: 'ph-020-3', title: 'Run fire drill with engineering team',     status: 'todo',        priority: 'medium', assignee: 'Aisha Johnson', dueDate: '2026-12-28' },
  { id: 'wi-307', phaseId: 'ph-020-3', title: 'Platform launch and handover to ops',      status: 'todo',        priority: 'high',  assignee: 'Aisha Johnson',  dueDate: '2026-12-31' },

  // ph-021-1 — Business Analysis (complete)
  { id: 'wi-308', phaseId: 'ph-021-1', title: 'Map current inventory management flow',    status: 'done',        priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-03-31' },
  { id: 'wi-309', phaseId: 'ph-021-1', title: 'Document module requirements',             status: 'done',        priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-04-15' },
  { id: 'wi-310', phaseId: 'ph-021-1', title: 'Define integration points with ERP',       status: 'done',        priority: 'medium', assignee: "Liam O'Brien",  dueDate: '2026-04-25' },
  { id: 'wi-311', phaseId: 'ph-021-1', title: 'Business analysis sign-off',               status: 'done',        priority: 'low',   assignee: 'Marcus Reid',    dueDate: '2026-04-30' },

  // ph-021-2 — Module Development (active)
  { id: 'wi-312', phaseId: 'ph-021-2', title: 'Build stock level tracking module',        status: 'done',        priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-05-31' },
  { id: 'wi-313', phaseId: 'ph-021-2', title: 'Build purchase order management',          status: 'in-progress', priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-06-30' },
  { id: 'wi-314', phaseId: 'ph-021-2', title: 'Build supplier catalog integration',       status: 'in-progress', priority: 'medium', assignee: "Liam O'Brien",  dueDate: '2026-07-15' },
  { id: 'wi-315', phaseId: 'ph-021-2', title: 'Write unit tests for all modules',         status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',   dueDate: '2026-07-25' },
  { id: 'wi-316', phaseId: 'ph-021-2', title: 'Code review and dev sign-off',             status: 'todo',        priority: 'low',   assignee: "Liam O'Brien",   dueDate: '2026-07-31' },

  // ph-021-3 — Integration Testing (pending)
  { id: 'wi-317', phaseId: 'ph-021-3', title: 'Integration test with ERP system',         status: 'todo',        priority: 'high',  assignee: "Liam O'Brien",   dueDate: '2026-08-15' },
  { id: 'wi-318', phaseId: 'ph-021-3', title: 'Test data migration from legacy system',   status: 'todo',        priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-08-25' },
  { id: 'wi-319', phaseId: 'ph-021-3', title: 'User acceptance testing with ops team',   status: 'todo',        priority: 'medium', assignee: 'Marcus Reid',   dueDate: '2026-09-05' },
  { id: 'wi-320', phaseId: 'ph-021-3', title: 'Production deployment and sign-off',       status: 'todo',        priority: 'high',  assignee: 'Marcus Reid',    dueDate: '2026-09-15' },

  // ph-022-1 — IAM Audit (complete)
  { id: 'wi-321', phaseId: 'ph-022-1', title: 'Enumerate all system access roles',        status: 'done',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-02-20' },
  { id: 'wi-322', phaseId: 'ph-022-1', title: 'Identify over-privileged accounts',        status: 'done',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-02-28' },
  { id: 'wi-323', phaseId: 'ph-022-1', title: 'Document IAM audit findings',              status: 'done',        priority: 'medium', assignee: 'David Martinez', dueDate: '2026-03-08' },
  { id: 'wi-324', phaseId: 'ph-022-1', title: 'Audit report sign-off',                    status: 'done',        priority: 'low',   assignee: 'Yuki Tanaka',    dueDate: '2026-03-15' },

  // ph-022-2 — Policy Design (complete)
  { id: 'wi-325', phaseId: 'ph-022-2', title: 'Design RBAC role hierarchy',               status: 'done',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-03-31' },
  { id: 'wi-326', phaseId: 'ph-022-2', title: 'Define least-privilege access rules',      status: 'done',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-04-15' },
  { id: 'wi-327', phaseId: 'ph-022-2', title: 'Design MFA enforcement policy',            status: 'done',        priority: 'high',  assignee: 'David Martinez', dueDate: '2026-04-25' },
  { id: 'wi-328', phaseId: 'ph-022-2', title: 'Policy review and legal sign-off',         status: 'done',        priority: 'medium', assignee: 'Yuki Tanaka',   dueDate: '2026-04-30' },

  // ph-022-3 — Implementation (active)
  { id: 'wi-329', phaseId: 'ph-022-3', title: 'Implement new RBAC in identity provider',  status: 'done',        priority: 'high',  assignee: 'David Martinez', dueDate: '2026-05-31' },
  { id: 'wi-330', phaseId: 'ph-022-3', title: 'Enforce MFA across all services',          status: 'in-progress', priority: 'high',  assignee: 'David Martinez', dueDate: '2026-06-20' },
  { id: 'wi-331', phaseId: 'ph-022-3', title: 'Migrate existing accounts to new roles',   status: 'in-progress', priority: 'high',  assignee: 'Priya Patel',    dueDate: '2026-07-01' },
  { id: 'wi-332', phaseId: 'ph-022-3', title: 'Audit log integration for access events',  status: 'todo',        priority: 'medium', assignee: 'David Martinez', dueDate: '2026-07-10' },
  { id: 'wi-333', phaseId: 'ph-022-3', title: 'Implementation QA and penetration test',   status: 'todo',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-07-15' },

  // ph-022-4 — Testing & Compliance Sign-off (active)
  { id: 'wi-334', phaseId: 'ph-022-4', title: 'End-to-end access control testing',        status: 'in-progress', priority: 'high',  assignee: 'Priya Patel',    dueDate: '2026-07-25' },
  { id: 'wi-335', phaseId: 'ph-022-4', title: 'Third-party compliance assessment',         status: 'todo',        priority: 'high',  assignee: 'Yuki Tanaka',    dueDate: '2026-08-05' },
  { id: 'wi-336', phaseId: 'ph-022-4', title: 'Remediate assessment findings',             status: 'todo',        priority: 'high',  assignee: 'David Martinez', dueDate: '2026-08-20' },
  { id: 'wi-337', phaseId: 'ph-022-4', title: 'Final compliance sign-off and report',      status: 'todo',        priority: 'medium', assignee: 'Yuki Tanaka',   dueDate: '2026-08-31' },
];
