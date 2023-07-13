// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import "zone.js";
import "zone.js/testing";
import { getTestBed } from "@angular/core/testing";
import {
  platformBrowserDynamicTesting,
  BrowserDynamicTestingModule,
} from "@angular/platform-browser-dynamic/testing";

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  {
    teardown: { destroyAfterEach: false },
  }
);
