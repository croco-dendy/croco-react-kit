import { render, screen } from "@/tests/utils";
import { describe, expect, test } from "vitest";
import Template from "./template";

describe("Template", () => {
  test("should render components", () => {
    render(<Template />);

    expect(screen.getByText("Template")).toBeInTheDocument();
  });
});
