# UI kit — Crew Dispatch (internal)

The back-office surface: dark sidebar, day header, four metrics, job table for the day, and a right-hand job detail panel.

Files
- `index.html` — interactive board. Click a job row to open the detail panel; **Save job** and **Dispatch tomorrow's routes** both confirm with a toast.
- `Shell.jsx` — `OpsSidebar`, `OpsTopbar`, `NAV`.
- `Schedule.jsx` — `ScheduleView`, `Metric`, `JobRow`, sample `JOBS` data.
- `JobPanel.jsx` — `JobPanel` right rail (assign crew, gate code, crew notes).

Notes
- Sidebar destinations other than Schedule are deliberately blank with a disclaimer: no source designs existed for them, so nothing was invented.
- Numbers are illustrative sample data, not real customer records.
