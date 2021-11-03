import { render, fireEvent } from "@testing-library/react";
import DarkMode from "./DarkMode";

test("Testing dark mode button's action", () => {
  const component = render(<DarkMode />);
  const themeBtnEl = component.getByTestId("themeChange-btn");
  const container = document.documentElement.classList;

  expect(container.contains("dark")).toBe(false); //initially no dark class
  fireEvent.click(themeBtnEl); // 1st click to make it dark
  expect(container.contains("dark")).toBe(true);
  fireEvent.click(themeBtnEl); //2nd click to make it light
  expect(container.contains("dark")).toBe(false);
});
