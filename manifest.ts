import { defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Solid Chrome Extension Template",
  version: "1.0.0",
  permissions: ["cookies", "tabs", "storage"],
  host_permissions: ["<all_urls>"],
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  action: {
    default_popup: "index.html",
    default_title: "VFS",
    default_icon: {
      32: "icon.png",
    },
  },
  content_scripts: [{ js: ["src/content"], matches: ["<all_urls>"] }],
});

export default manifest;
