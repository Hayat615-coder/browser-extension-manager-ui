import console from "./assets/logo-console-plus.svg";
import devlens from "./assets/logo-devlens.svg";
import dom_snapshoot from "./assets/logo-dom-snapshot.svg";
import grid_guides from "./assets/logo-grid-guides.svg";
import json_wizard from "./assets/logo-json-wizard.svg";
import link_checker from "./assets/logo-link-checker.svg";
import markup_notes from "./assets/logo-markup-notes.svg";
import palette_picker from "./assets/logo-palette-picker.svg";
import speed_boost from "./assets/logo-speed-boost.svg";
import style_spy from "./assets/logo-style-spy.svg";
import tab_master_pro from "./assets/logo-tab-master-pro.svg";
import viewport_buddy from "./assets/logo-viewport-buddy.svg";

export interface Info {
  id: number;
  picture: string;
  name: string;
  activity: string;
  controler: string;
  isActive: boolean;
}

export const Information: Info[] = [
  {
    id: 1,
    picture: devlens,
    name: "DevLens",
    activity: "Quickly inspect page layouts and visualize element boundaries.",
    controler: "Remove",
    isActive: true,
  },
  {
    id: 2,
    picture: style_spy,
    name: "StyleSpy",
    activity: "Instantly analyze and copy CSS from any webpage element.",
    controler: "Remove",
    isActive: true,
  },
  {
    id: 3,
    picture: speed_boost,
    name: "SpeedBoost",
    activity: "Optimizes browser resource usage to accelerate page loading.",
    controler: "Remove",
    isActive: false,
  },
  {
    id: 4,
    picture: json_wizard,
    name: "JSONWizard",
    activity: "Formats, validates, and prettifies JSON responses in-browser.",
    controler: "Remove",
    isActive: true,
  },
  {
    id: 5,
    picture: tab_master_pro,
    name: "TabMaster Pro",
    activity: "Organizes browser tabs into groups and sessions.",
    controler: "Remove",
    isActive: true,
  },
  {
    id: 6,
    picture: viewport_buddy,
    name: "ViewportBuddy",
    activity:
      "Simulates various screen resolutions directly within the browser.",
    controler: "Remove",
    isActive: false,
  },
  {
    id: 7,
    picture: markup_notes,
    name: "Markup Notes",
    activity:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    controler: "Remove",
    isActive: true,
  },
  {
    id: 8,
    picture: grid_guides,
    name: "GridGuides",
    activity: "Overlay customizable grids and alignment guides on any webpage.",
    controler: "Remove",
    isActive: false,
  },
  {
    id: 9,
    picture: palette_picker,
    name: "Palette Picker",
    activity: "Instantly extracts color palettes from any webpage.",
    controler: "Remove",
    isActive: true,
  },
  {
    id: 10,
    picture: link_checker,
    name: "LinkChecker",
    activity: "Scans and highlights broken links on any page.",
    controler: "Remove",
    isActive: true,
  },
  {
    id: 11,
    picture: dom_snapshoot,
    name: "DOM Snapshot",
    activity: "Capture and export DOM structures quickly.",
    controler: "Remove",
    isActive: false,
  },
  {
    id: 12,
    picture: console,
    name: "ConsolePlus",
    activity: "Enhanced developer console with advanced filtering and logging.",
    controler: "Remove",
    isActive: true,
  },
];
