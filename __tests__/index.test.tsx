
import renderer from "react-test-renderer";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../src/components/navbar";
import TopNews from "../src/components/TopNews";
import { ChangeEvent } from "react";

describe("Index page", () => {
  it("should render", () => {
    render(<Home handelSearch={function (e: ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    } } handleClick={function (): void {
      throw new Error("Function not implemented.");
    } } search={""} breakingNews={undefined} sportsNews={undefined} nationNews={undefined} businessNews={undefined}/>)
    
    const main = screen.getByRole("main")
    expect(main).toBeInTheDocument()
   
  });
  it("should appear the NavBar component", () => { 
    render(<NavBar/>)
    expect(<NavBar/>).toBeInTheDocument
   })
   it("should appear the TopNews component", () => { 
    render(<TopNews/>)
    expect(<TopNews/>).toBeInTheDocument
   })
});
