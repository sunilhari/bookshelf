import React from "react";
import SelectedBooks from "./index";
import { render } from "@testing-library/react";
test("Renders without throwing error", () => {
 const component = render(<SelectedBooks />);
});
