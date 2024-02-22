// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_HasNavbar_layout from "./routes/(HasNavbar)/_layout.tsx";
import * as $_HasNavbar_about from "./routes/(HasNavbar)/about.tsx";
import * as $_HasNavbar_apps from "./routes/(HasNavbar)/apps.tsx";
import * as $_HasNavbar_portfolio from "./routes/(HasNavbar)/portfolio.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $apps_test from "./routes/apps/test.tsx";
import * as $index from "./routes/index.tsx";
import * as $Clock from "./islands/Clock.tsx";
import * as $Home from "./islands/Home.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(HasNavbar)/_layout.tsx": $_HasNavbar_layout,
    "./routes/(HasNavbar)/about.tsx": $_HasNavbar_about,
    "./routes/(HasNavbar)/apps.tsx": $_HasNavbar_apps,
    "./routes/(HasNavbar)/portfolio.tsx": $_HasNavbar_portfolio,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/apps/test.tsx": $apps_test,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Clock.tsx": $Clock,
    "./islands/Home.tsx": $Home,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;