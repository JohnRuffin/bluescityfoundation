"use client";

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "./app.css";

try {
  const outputs = require("@/amplify_outputs.json");
  Amplify.configure(outputs);
} catch (error) {
  console.warn(
    "Amplify configuration not found. Run 'npx amplify sandbox' to generate it."
  );
}

export default function App() {
  return (
    <main>
      <h1>Blues City Foundation</h1>
      <h2>Clarksdale, Mississippi</h2>
      <p>
        Contact us at{" "}
        <a href="mailto:info@bluescityfoundation.org">
          info@bluescityfoundation.org
        </a>
      </p>
    </main>
  );
}
