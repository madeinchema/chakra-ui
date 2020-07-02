import { getClosestValue } from "../src/media-query.utils"

test("should get the closest responsive value", () => {
  expect(getClosestValue({ base: "40px", md: "500px" }, "xl")).toBe("500px")
  expect(getClosestValue({ base: "40px", md: "500px" }, "sm")).toBe("40px")
  expect(getClosestValue({ base: "40px" }, "lg")).toBe("40px")
  expect(getClosestValue({ sm: "40px", md: "500px" }, "sm")).toBe("40px")
  expect(getClosestValue({ sm: "40px", md: "500px" }, "base")).toBe(undefined)
  expect(getClosestValue({}, "")).toBe(undefined)
})