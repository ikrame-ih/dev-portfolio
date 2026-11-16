import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { StackIcon } from "./stackIcons.jsx";
import en from "./locales/en.js";
import es from "./locales/es.js";

const FALLBACK_MARK = 'd="M8 12h8M12 8v8"';

const stackItems = (catalog) =>
  catalog.STACK.domains.flatMap((domain) =>
    domain.groups.flatMap((group) => group.items),
  );

const rendersFallback = (name) =>
  renderToStaticMarkup(createElement(StackIcon, { name })).includes(
    FALLBACK_MARK,
  );

describe("STACK icons", () => {
  it.each([
    ["en", en],
    ["es", es],
  ])("every %s item renders its own icon", (_label, catalog) => {
    const missing = stackItems(catalog).filter(rendersFallback);
    expect(missing).toEqual([]);
  });
});
