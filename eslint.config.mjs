import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  {
    rules: {
      // Migration pragmatism — these are acceptable in the ported code:
      // `<img>` is used throughout (not migrated to next/image yet),
      // some hooks set state in effects (works fine, flagged by React 19 rule),
      // and content contains quotes/Bangla text.
      "@next/next/no-img-element": "off",
      "react-hooks/set-state-in-effect": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "public/**"],
  },
];

export default eslintConfig;
