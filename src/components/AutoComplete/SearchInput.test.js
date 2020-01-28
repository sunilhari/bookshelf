import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";
test("Renders Component Without Error", () => {
 render(<SearchInput input={""} setInput={jest.fn()} selectBook={jest.fn()} />);
});

/*
test("Check if OnChange is triggered when input changes", async () => {
 const setInput = jest.fn();
 const inputCount = 0;
 const { getAllByTestId } = render(
  <SearchInput input={inputCount} setInput={setInput} selectBook={jest.fn()} />
 );
 const input = await getAllByTestId("search-input");
 fireEvent.input(input, { target: { input: "23" } });
 expect(setInput).toHaveBeenCalled();
});
*/
