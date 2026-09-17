# 🧩 Extensions Manager App

A modern, responsive React & TypeScript web application designed to browse, filter, toggle, and manage browser extensions. Features dynamic dark/light theme switching and persistent state using `localStorage`.

---

## 🌟 Key Features

- **🌓 Light & Dark Theme Support**
  - Toggle between dark and light themes dynamically via `data-theme` attribute on the document root.
  - Theme choice automatically saves to `localStorage` and persists across sessions.
- **⚡ Status Filtering**
  - Filter extensions quickly between **All**, **Active**, and **Inactive** tabs.
- **🔘 Toggle Switches**
  - Turn individual extensions on/off with animated custom toggle switches.
- **🗑️ Dynamic Item Removal**
  - Delete unwanted extensions directly from your list.
- **💾 Local Storage Persistence**
  - Extension state updates (toggles and removals) are automatically synced to `localStorage`.
- **📱 Responsive Grid Layout**
  - Built with **Tailwind CSS v4** for clean grid layouts that adapt seamlessly from mobile to desktop.

---

## 🛠️ Tech Stack

- **Framework:** [React 18+](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Assets:** Custom SVG icons
- **Build Tool:** [Vite](https://vitejs.dev/)

---

## 📁 Project Structure

```text
├── vite-project/
├── src/
│   ├── assets/
│   ├── App.tsx          # Main application logic & JSX
│   ├── App.css          # CSS
│   ├── index.css          # CSS
variables, theme styling & Tailwind imports
│   ├── info.tsx         # Type definition & initial fallback data
│   └── main.tsx         # React root entry point
├── package.json
├── package-lock.js
└── README.md
```
