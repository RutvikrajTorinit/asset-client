module.exports = {
  // Type check TypeScript files
  // '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js|jsx)": (filenames) => [
    // `npm run lint ${filenames.join(" ")}`,
    `npx prettier --check ${filenames.join(" ")}`,
    `npx eslint ${filenames.join(" ")} --ext ts --ext tsx --ext js --ext jsx`
    // `npm run build`
  ]

  // Prettify only Markdown and JSON files
  // "**/*.(md|json)": (filenames) =>
  //   `npm run prettier --write ${filenames.join(" ")}`
};
