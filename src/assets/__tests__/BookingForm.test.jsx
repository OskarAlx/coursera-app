import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import BookingForm from "../../components/BookingForm";

describe("BookingForm", () => {
  it("renders the date label", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatch={() => {}}
      />,
    );

    expect(screen.getByText("Choose date")).toBeInTheDocument();
  });
});
