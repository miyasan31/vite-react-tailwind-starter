// vite.config.ts->globals: true と設定したのでimportしなくても良い

// import { describe, expect, it } from "vitest";

import { add } from "./add";

describe("add", () => {
  it("1 + 2 = 3", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});
