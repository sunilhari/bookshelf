import React from "react";
import Cards from "./index";
import { render } from "@testing-library/react";

test("Renders Component without Error", () => {
 render(<Cards />);
});

test("Renders Data if it is passed", async () => {
 const selectedBooks = [
  {
   id: "1",
   summary: "nothing"
  }
 ];
 const { queryAllByText } = render(<Cards selectedBooks={selectedBooks} />);
 let isEmpty = await queryAllByText("Empty");
 expect(isEmpty.length).toBe(0);
});
test("Renders Empty if data is not passed", async () => {
 const selectedBooks = [];
 const { queryAllByText } = render(<Cards selectedBooks={selectedBooks} />);
 let isEmpty = await queryAllByText("Empty");
 expect(isEmpty.length).not.toBe(0);
});
