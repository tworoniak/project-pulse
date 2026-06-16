# ProjectPulse

An Angular 22 portfolio project demonstrating enterprise-grade UI patterns: interactive data grids, phase lifecycle drill-downs, progress tracking, and reporting workflows.

## Tech Stack

- **Angular 22** — standalone components, signals, OnPush
- **AG Grid Community** — interactive data grids
- **Angular Material 22** — component library
- **SCSS** — modular, dark-mode-first styling

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build

```bash
npm run build
```

Output goes to `dist/project-pulse/`.

## Routes

| Path | View |
|------|------|
| `/dashboard` | Summary cards + top-level projects grid |
| `/projects` | Full AG Grid — all projects |
| `/projects/:id` | Project detail — phases + work items |
| `/projects/:id/report` | Progress reporting (grouped grid) |
| `/admin/users` | User management grid (CRUD) |

## Project Structure

```
src/app/
  features/        # Route-level components
  shared/          # Header, sidebar, reusable components
  core/            # Mock data, services, interceptors
src/styles/        # Global SCSS tokens and mixins
```
