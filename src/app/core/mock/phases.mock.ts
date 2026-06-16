import { Phase } from '../../shared/models/phase.model';

export const MOCK_PHASES: Phase[] = [
  // p-001 — Customer Portal Redesign
  { id: 'ph-001-1', projectId: 'p-001', name: 'Discovery & Research',   status: 'complete', owner: 'Sarah Chen',     startDate: '2026-02-01', endDate: '2026-02-28', completionPct: 100, order: 1 },
  { id: 'ph-001-2', projectId: 'p-001', name: 'UX Design',              status: 'complete', owner: 'Sarah Chen',     startDate: '2026-03-01', endDate: '2026-04-15', completionPct: 100, order: 2 },
  { id: 'ph-001-3', projectId: 'p-001', name: 'Frontend Development',   status: 'active',   owner: 'David Martinez', startDate: '2026-04-16', endDate: '2026-07-15', completionPct: 60,  order: 3 },
  { id: 'ph-001-4', projectId: 'p-001', name: 'QA & Launch',            status: 'pending',  owner: 'Priya Patel',    startDate: '2026-07-16', endDate: '2026-08-31', completionPct: 0,   order: 4 },

  // p-002 — Data Analytics Platform
  { id: 'ph-002-1', projectId: 'p-002', name: 'Requirements Gathering', status: 'pending',  owner: 'Michael Torres', startDate: '2026-07-01', endDate: '2026-07-31', completionPct: 0,   order: 1 },
  { id: 'ph-002-2', projectId: 'p-002', name: 'Architecture Design',    status: 'pending',  owner: 'Michael Torres', startDate: '2026-08-01', endDate: '2026-09-15', completionPct: 0,   order: 2 },
  { id: 'ph-002-3', projectId: 'p-002', name: 'Core Development',       status: 'pending',  owner: 'Marcus Reid',    startDate: '2026-09-16', endDate: '2026-11-30', completionPct: 0,   order: 3 },
  { id: 'ph-002-4', projectId: 'p-002', name: 'Testing & Validation',   status: 'pending',  owner: 'Yuki Tanaka',    startDate: '2026-12-01', endDate: '2026-12-20', completionPct: 0,   order: 4 },
  { id: 'ph-002-5', projectId: 'p-002', name: 'Rollout & Handover',     status: 'pending',  owner: 'Aisha Johnson',  startDate: '2026-12-21', endDate: '2026-12-31', completionPct: 0,   order: 5 },

  // p-003 — Mobile App v2.0
  { id: 'ph-003-1', projectId: 'p-003', name: 'Product Definition',     status: 'complete', owner: 'Emma Wilson',    startDate: '2026-01-15', endDate: '2026-02-28', completionPct: 100, order: 1 },
  { id: 'ph-003-2', projectId: 'p-003', name: 'UI/UX Design',           status: 'complete', owner: 'Emma Wilson',    startDate: '2026-03-01', endDate: '2026-04-30', completionPct: 100, order: 2 },
  { id: 'ph-003-3', projectId: 'p-003', name: 'iOS Development',        status: 'active',   owner: "Liam O'Brien",   startDate: '2026-05-01', endDate: '2026-07-31', completionPct: 70,  order: 3 },
  { id: 'ph-003-4', projectId: 'p-003', name: 'Android Development',    status: 'active',   owner: 'Priya Patel',    startDate: '2026-05-01', endDate: '2026-08-31', completionPct: 50,  order: 4 },

  // p-004 — Infrastructure Migration
  { id: 'ph-004-1', projectId: 'p-004', name: 'Assessment & Planning',  status: 'complete', owner: 'James Park',     startDate: '2025-10-01', endDate: '2025-12-31', completionPct: 100, order: 1 },
  { id: 'ph-004-2', projectId: 'p-004', name: 'Pilot Migration',        status: 'complete', owner: 'James Park',     startDate: '2026-01-01', endDate: '2026-03-31', completionPct: 100, order: 2 },
  { id: 'ph-004-3', projectId: 'p-004', name: 'Full Migration & Cutover', status: 'active', owner: 'David Martinez', startDate: '2026-04-01', endDate: '2026-07-31', completionPct: 75,  order: 3 },

  // p-005 — Marketing Automation Suite
  { id: 'ph-005-1', projectId: 'p-005', name: 'Discovery & Strategy',   status: 'complete', owner: 'Aisha Johnson',  startDate: '2025-07-01', endDate: '2025-09-30', completionPct: 100, order: 1 },
  { id: 'ph-005-2', projectId: 'p-005', name: 'Tool Configuration',     status: 'complete', owner: 'Aisha Johnson',  startDate: '2025-10-01', endDate: '2026-01-31', completionPct: 100, order: 2 },
  { id: 'ph-005-3', projectId: 'p-005', name: 'Integration & Launch',   status: 'complete', owner: 'Marcus Reid',    startDate: '2026-02-01', endDate: '2026-04-30', completionPct: 100, order: 3 },

  // p-006 — HR Self-Service Portal
  { id: 'ph-006-1', projectId: 'p-006', name: 'Needs Analysis',         status: 'pending',  owner: 'Sarah Chen',     startDate: '2026-08-01', endDate: '2026-08-31', completionPct: 0,   order: 1 },
  { id: 'ph-006-2', projectId: 'p-006', name: 'Design',                 status: 'pending',  owner: 'Sarah Chen',     startDate: '2026-09-01', endDate: '2026-10-15', completionPct: 0,   order: 2 },
  { id: 'ph-006-3', projectId: 'p-006', name: 'Development',            status: 'pending',  owner: 'David Martinez', startDate: '2026-10-16', endDate: '2026-11-30', completionPct: 0,   order: 3 },
  { id: 'ph-006-4', projectId: 'p-006', name: 'Testing & Deployment',   status: 'pending',  owner: 'Priya Patel',    startDate: '2026-12-01', endDate: '2026-12-15', completionPct: 0,   order: 4 },

  // p-007 — API Gateway Upgrade
  { id: 'ph-007-1', projectId: 'p-007', name: 'Audit & Planning',       status: 'complete', owner: 'Michael Torres', startDate: '2026-03-01', endDate: '2026-04-15', completionPct: 100, order: 1 },
  { id: 'ph-007-2', projectId: 'p-007', name: 'Implementation',         status: 'active',   owner: 'Marcus Reid',    startDate: '2026-04-16', endDate: '2026-06-30', completionPct: 80,  order: 2 },
  { id: 'ph-007-3', projectId: 'p-007', name: 'Testing & Cutover',      status: 'active',   owner: 'Yuki Tanaka',    startDate: '2026-07-01', endDate: '2026-07-31', completionPct: 10,  order: 3 },

  // p-008 — Compliance Dashboard
  { id: 'ph-008-1', projectId: 'p-008', name: 'Regulatory Mapping',     status: 'complete', owner: 'Emma Wilson',    startDate: '2025-12-01', endDate: '2026-01-31', completionPct: 100, order: 1 },
  { id: 'ph-008-2', projectId: 'p-008', name: 'Data Pipeline Setup',    status: 'complete', owner: 'Marcus Reid',    startDate: '2026-02-01', endDate: '2026-03-31', completionPct: 100, order: 2 },
  { id: 'ph-008-3', projectId: 'p-008', name: 'Dashboard Development',  status: 'complete', owner: 'Emma Wilson',    startDate: '2026-04-01', endDate: '2026-05-31', completionPct: 100, order: 3 },
  { id: 'ph-008-4', projectId: 'p-008', name: 'Stakeholder Review',     status: 'active',   owner: 'Aisha Johnson',  startDate: '2026-06-01', endDate: '2026-06-30', completionPct: 80,  order: 4 },

  // p-009 — ERP Integration (on-hold)
  { id: 'ph-009-1', projectId: 'p-009', name: 'Gap Analysis',           status: 'complete', owner: 'James Park',     startDate: '2025-11-01', endDate: '2025-12-31', completionPct: 100, order: 1 },
  { id: 'ph-009-2', projectId: 'p-009', name: 'Connector Development',  status: 'blocked',  owner: "Liam O'Brien",   startDate: '2026-01-01', endDate: '2026-04-30', completionPct: 55,  order: 2 },
  { id: 'ph-009-3', projectId: 'p-009', name: 'Data Mapping',           status: 'pending',  owner: 'David Martinez', startDate: '2026-05-01', endDate: '2026-07-31', completionPct: 0,   order: 3 },
  { id: 'ph-009-4', projectId: 'p-009', name: 'UAT',                    status: 'pending',  owner: 'Priya Patel',    startDate: '2026-08-01', endDate: '2026-09-15', completionPct: 0,   order: 4 },
  { id: 'ph-009-5', projectId: 'p-009', name: 'Go-Live',                status: 'pending',  owner: 'James Park',     startDate: '2026-09-16', endDate: '2026-09-30', completionPct: 0,   order: 5 },

  // p-010 — Customer Success Tools
  { id: 'ph-010-1', projectId: 'p-010', name: 'Tool Evaluation',        status: 'complete', owner: 'Aisha Johnson',  startDate: '2026-04-01', endDate: '2026-04-30', completionPct: 100, order: 1 },
  { id: 'ph-010-2', projectId: 'p-010', name: 'Configuration & Setup',  status: 'active',   owner: 'Aisha Johnson',  startDate: '2026-05-01', endDate: '2026-07-31', completionPct: 45,  order: 2 },
  { id: 'ph-010-3', projectId: 'p-010', name: 'Training & Adoption',    status: 'pending',  owner: 'Marcus Reid',    startDate: '2026-08-01', endDate: '2026-09-30', completionPct: 0,   order: 3 },
  { id: 'ph-010-4', projectId: 'p-010', name: 'Optimization',           status: 'pending',  owner: 'Yuki Tanaka',    startDate: '2026-10-01', endDate: '2026-10-31', completionPct: 0,   order: 4 },

  // p-011 — Security Audit Framework
  { id: 'ph-011-1', projectId: 'p-011', name: 'Scope Definition',       status: 'complete', owner: 'Sarah Chen',     startDate: '2025-06-01', endDate: '2025-08-31', completionPct: 100, order: 1 },
  { id: 'ph-011-2', projectId: 'p-011', name: 'Audit Execution',        status: 'complete', owner: 'Sarah Chen',     startDate: '2025-09-01', endDate: '2025-12-31', completionPct: 100, order: 2 },
  { id: 'ph-011-3', projectId: 'p-011', name: 'Remediation',            status: 'complete', owner: 'David Martinez', startDate: '2026-01-01', endDate: '2026-02-28', completionPct: 100, order: 3 },

  // p-012 — Product Catalog Refresh
  { id: 'ph-012-1', projectId: 'p-012', name: 'Content Audit',          status: 'pending',  owner: 'Michael Torres', startDate: '2026-09-01', endDate: '2026-10-31', completionPct: 0,   order: 1 },
  { id: 'ph-012-2', projectId: 'p-012', name: 'Taxonomy Redesign',      status: 'pending',  owner: "Liam O'Brien",   startDate: '2026-11-01', endDate: '2026-12-31', completionPct: 0,   order: 2 },
  { id: 'ph-012-3', projectId: 'p-012', name: 'Publishing & QA',        status: 'pending',  owner: 'Priya Patel',    startDate: '2027-01-01', endDate: '2027-02-28', completionPct: 0,   order: 3 },

  // p-013 — DevOps Toolchain Modernization
  { id: 'ph-013-1', projectId: 'p-013', name: 'Current State Assessment', status: 'complete', owner: 'Emma Wilson',  startDate: '2026-02-15', endDate: '2026-03-31', completionPct: 100, order: 1 },
  { id: 'ph-013-2', projectId: 'p-013', name: 'Tool Selection & Setup', status: 'active',   owner: 'Emma Wilson',    startDate: '2026-04-01', endDate: '2026-05-31', completionPct: 70,  order: 2 },
  { id: 'ph-013-3', projectId: 'p-013', name: 'Pipeline Migration',     status: 'active',   owner: 'Yuki Tanaka',    startDate: '2026-06-01', endDate: '2026-07-15', completionPct: 30,  order: 3 },
  { id: 'ph-013-4', projectId: 'p-013', name: 'Documentation & Training', status: 'pending', owner: "Liam O'Brien",  startDate: '2026-07-16', endDate: '2026-08-15', completionPct: 0,   order: 4 },

  // p-014 — Financial Reporting Suite
  { id: 'ph-014-1', projectId: 'p-014', name: 'Requirements & Compliance Review', status: 'complete', owner: 'James Park',  startDate: '2025-09-01', endDate: '2025-11-30', completionPct: 100, order: 1 },
  { id: 'ph-014-2', projectId: 'p-014', name: 'Report Design',          status: 'complete', owner: 'Marcus Reid',    startDate: '2025-12-01', endDate: '2026-02-28', completionPct: 100, order: 2 },
  { id: 'ph-014-3', projectId: 'p-014', name: 'Data Validation',        status: 'active',   owner: 'David Martinez', startDate: '2026-03-01', endDate: '2026-05-31', completionPct: 90,  order: 3 },
  { id: 'ph-014-4', projectId: 'p-014', name: 'Stakeholder Approval',   status: 'active',   owner: 'Aisha Johnson',  startDate: '2026-06-01', endDate: '2026-06-30', completionPct: 60,  order: 4 },

  // p-015 — Partner Portal
  { id: 'ph-015-1', projectId: 'p-015', name: 'Partner Requirements Workshop', status: 'pending', owner: 'Aisha Johnson', startDate: '2026-08-15', endDate: '2026-09-30', completionPct: 0, order: 1 },
  { id: 'ph-015-2', projectId: 'p-015', name: 'Portal Design',          status: 'pending',  owner: 'Aisha Johnson',  startDate: '2026-10-01', endDate: '2026-11-30', completionPct: 0,   order: 2 },
  { id: 'ph-015-3', projectId: 'p-015', name: 'Development & Integration', status: 'pending', owner: 'Marcus Reid',   startDate: '2026-12-01', endDate: '2027-01-31', completionPct: 0,   order: 3 },

  // p-016 — Search & Discovery Engine
  { id: 'ph-016-1', projectId: 'p-016', name: 'Search Architecture',    status: 'complete', owner: 'Sarah Chen',     startDate: '2026-01-01', endDate: '2026-02-28', completionPct: 100, order: 1 },
  { id: 'ph-016-2', projectId: 'p-016', name: 'Indexing Pipeline',      status: 'active',   owner: 'David Martinez', startDate: '2026-03-01', endDate: '2026-05-31', completionPct: 65,  order: 2 },
  { id: 'ph-016-3', projectId: 'p-016', name: 'Relevance Tuning',       status: 'active',   owner: 'Priya Patel',    startDate: '2026-03-01', endDate: '2026-06-30', completionPct: 40,  order: 3 },
  { id: 'ph-016-4', projectId: 'p-016', name: 'Recommendations Engine', status: 'pending',  owner: "Liam O'Brien",   startDate: '2026-07-01', endDate: '2026-09-30', completionPct: 0,   order: 4 },
  { id: 'ph-016-5', projectId: 'p-016', name: 'A/B Testing & Launch',   status: 'pending',  owner: 'Sarah Chen',     startDate: '2026-10-01', endDate: '2026-10-31', completionPct: 0,   order: 5 },

  // p-017 — Notification Service
  { id: 'ph-017-1', projectId: 'p-017', name: 'Design & Planning',      status: 'complete', owner: 'Michael Torres', startDate: '2025-10-01', endDate: '2025-11-30', completionPct: 100, order: 1 },
  { id: 'ph-017-2', projectId: 'p-017', name: 'Service Implementation', status: 'complete', owner: 'Marcus Reid',    startDate: '2025-12-01', endDate: '2026-02-28', completionPct: 100, order: 2 },
  { id: 'ph-017-3', projectId: 'p-017', name: 'Integration & QA',       status: 'complete', owner: 'Yuki Tanaka',    startDate: '2026-03-01', endDate: '2026-03-31', completionPct: 100, order: 3 },

  // p-018 — Document Management System (on-hold)
  { id: 'ph-018-1', projectId: 'p-018', name: 'Requirements',           status: 'complete', owner: 'Emma Wilson',    startDate: '2026-01-01', endDate: '2026-02-28', completionPct: 100, order: 1 },
  { id: 'ph-018-2', projectId: 'p-018', name: 'Architecture',           status: 'blocked',  owner: 'Emma Wilson',    startDate: '2026-03-01', endDate: '2026-05-31', completionPct: 35,  order: 2 },
  { id: 'ph-018-3', projectId: 'p-018', name: 'Development',            status: 'pending',  owner: "Liam O'Brien",   startDate: '2026-06-01', endDate: '2026-09-30', completionPct: 0,   order: 3 },
  { id: 'ph-018-4', projectId: 'p-018', name: 'Rollout',                status: 'pending',  owner: 'Priya Patel',    startDate: '2026-10-01', endDate: '2026-12-31', completionPct: 0,   order: 4 },

  // p-019 — Onboarding Workflow Redesign
  { id: 'ph-019-1', projectId: 'p-019', name: 'Journey Mapping',        status: 'complete', owner: 'James Park',     startDate: '2026-04-01', endDate: '2026-04-30', completionPct: 100, order: 1 },
  { id: 'ph-019-2', projectId: 'p-019', name: 'Process Redesign',       status: 'active',   owner: 'James Park',     startDate: '2026-05-01', endDate: '2026-06-30', completionPct: 65,  order: 2 },
  { id: 'ph-019-3', projectId: 'p-019', name: 'System Updates',         status: 'active',   owner: 'Yuki Tanaka',    startDate: '2026-06-01', endDate: '2026-07-31', completionPct: 20,  order: 3 },
  { id: 'ph-019-4', projectId: 'p-019', name: 'Pilot & Rollout',        status: 'pending',  owner: 'Marcus Reid',    startDate: '2026-08-01', endDate: '2026-09-30', completionPct: 0,   order: 4 },

  // p-020 — Performance Monitoring Platform
  { id: 'ph-020-1', projectId: 'p-020', name: 'Metrics Definition',     status: 'pending',  owner: 'Aisha Johnson',  startDate: '2026-07-15', endDate: '2026-08-31', completionPct: 0,   order: 1 },
  { id: 'ph-020-2', projectId: 'p-020', name: 'Platform Build',         status: 'pending',  owner: 'Marcus Reid',    startDate: '2026-09-01', endDate: '2026-11-30', completionPct: 0,   order: 2 },
  { id: 'ph-020-3', projectId: 'p-020', name: 'Alert Configuration',    status: 'pending',  owner: 'Yuki Tanaka',    startDate: '2026-12-01', endDate: '2026-12-31', completionPct: 0,   order: 3 },

  // p-021 — Inventory Management Module
  { id: 'ph-021-1', projectId: 'p-021', name: 'Business Analysis',      status: 'complete', owner: 'Marcus Reid',    startDate: '2026-03-15', endDate: '2026-04-30', completionPct: 100, order: 1 },
  { id: 'ph-021-2', projectId: 'p-021', name: 'Module Development',     status: 'active',   owner: 'Marcus Reid',    startDate: '2026-05-01', endDate: '2026-07-31', completionPct: 55,  order: 2 },
  { id: 'ph-021-3', projectId: 'p-021', name: 'Integration Testing',    status: 'pending',  owner: "Liam O'Brien",   startDate: '2026-08-01', endDate: '2026-09-15', completionPct: 0,   order: 3 },

  // p-022 — Identity & Access Management Overhaul
  { id: 'ph-022-1', projectId: 'p-022', name: 'IAM Audit',              status: 'complete', owner: 'Yuki Tanaka',    startDate: '2026-02-01', endDate: '2026-03-15', completionPct: 100, order: 1 },
  { id: 'ph-022-2', projectId: 'p-022', name: 'Policy Design',          status: 'complete', owner: 'Yuki Tanaka',    startDate: '2026-03-16', endDate: '2026-04-30', completionPct: 100, order: 2 },
  { id: 'ph-022-3', projectId: 'p-022', name: 'Implementation',         status: 'active',   owner: 'David Martinez', startDate: '2026-05-01', endDate: '2026-07-15', completionPct: 70,  order: 3 },
  { id: 'ph-022-4', projectId: 'p-022', name: 'Testing & Compliance Sign-off', status: 'active', owner: 'Priya Patel', startDate: '2026-07-16', endDate: '2026-08-31', completionPct: 10, order: 4 },
];
