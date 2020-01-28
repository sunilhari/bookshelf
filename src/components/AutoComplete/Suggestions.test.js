import React from "react";
import { render, fireEvent, getByDisplayValue } from "@testing-library/react";
import Suggestions from "./Suggestions";

test("Renders Component Without Crashing", () => {
 render(<Suggestions />);
});
test("Should Render Suggestions when data is passed", async () => {
 const suggestions = [
  {
   score: 20,
   id: 48,
   summary:
    "The Book in Three Sentences: Finding something important and meaningful in your life is the most productive use of your time and energy. This is true because every life has problems associated with it and finding meaning in your life will help you sustain the effort needed to overcome the particular problems you face. Thus, we can say that the key to living a good life is not giving a fuck about more things, but rather, giving a fuck only about the things that align with your personal values.",
   title: "Slipstream Time Hacking",
   query: "and life that",
   author: "Mark Manson"
  }
 ];
 const { queryAllByText } = render(<Suggestions suggestions={suggestions} />);
 const isEmpty = await queryAllByText("No Suggestions!!!!");
 expect(isEmpty.length).toBe(0);
});
test("Should Render Empty when data is empty", async () => {
 const suggestions = [];
 const { queryAllByText } = render(<Suggestions suggestions={suggestions} />);
 const isEmpty = await queryAllByText("No Suggestions!!!!");
 expect(isEmpty.length).toBe(1);
});

//should trigger click handler when clicked on li
test("Function is invoked when suggestion is clicked", async () => {
 const suggestions = [
  {
   score: 20,
   id: 48,
   summary:
    "The Book in Three Sentences: Finding something important and meaningful in your life is the most productive use of your time and energy. This is true because every life has problems associated with it and finding meaning in your life will help you sustain the effort needed to overcome the particular problems you face. Thus, we can say that the key to living a good life is not giving a fuck about more things, but rather, giving a fuck only about the things that align with your personal values.",
   title: "Slipstream Time Hacking",
   query: "and life that",
   author: "Mark Manson"
  }
 ];
 const setSelection = jest.fn();
 const { container, getByText } = render(
  <Suggestions suggestions={suggestions} setSelectedSuggestion={setSelection} />
 );
 fireEvent.click(getByText(suggestions[0].title));
 expect(setSelection).toHaveBeenCalled();
});
