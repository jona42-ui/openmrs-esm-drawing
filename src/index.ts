import { getAsyncLifecycle } from "@openmrs/esm-framework";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

const backendDependencies = {
  fhir2: "^1.2.0",
  "webservices.rest": "^2.2.0",
};

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-drawing-app";

  const options = {
    featureName: "drawing",
    moduleName,
  };

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import("./drawing"), options),
        route: "drawing",
      },
    ],
    extensions: [],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
