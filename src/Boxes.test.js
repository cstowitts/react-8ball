import * as libs from "./libs";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Boxes from "./Boxes";

libs.randomRGB = jest.fn(libs.randomRGB);


describe("test boxes", function () {
  afterEach(() => {
    libs.randomRGB.mockClear();
  });

  it("renders without crashing", function () {
    render(<Boxes />);
  });
  
  it("has 16 boxes", function () {
    const { container, debug } = render(<Boxes />);
    const boxes = screen.getAllByRole("box");
    expect(boxes).toHaveLength(16);
  });
  
  it("changes color on button click", function () {
    expect(libs.randomRGB.mock.calls.length).toBe(0);
    render(<Boxes />);
    expect(libs.randomRGB.mock.calls.length).toBe(16);
    fireEvent.click(screen.getByRole("button"));
    expect(libs.randomRGB.mock.calls.length).toBe(33);
  
  })
})


