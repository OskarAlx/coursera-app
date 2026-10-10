import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import BookingForm from "../../components/BookingForm.jsx";

afterEach(() => {
  cleanup();
});

describe("BookingForm HTML5 validation", () => {
  const renderForm = () =>
    render(
      <BookingForm
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatch={vi.fn()}
        submitForm={vi.fn()}
      />,
    );

  it("requires a booking date and prevents past dates", () => {
    renderForm();

    const dateInput = screen.getByLabelText("Choose date");

    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute(
      "min",
      new Date().toISOString().split("T")[0],
    );
  });

  it("requires a booking time", () => {
    renderForm();

    const timeSelect = screen.getByLabelText("Choose time");

    expect(timeSelect).toBeRequired();
    expect(timeSelect).toHaveValue("");
    expect(timeSelect).toContainHTML('<option value="">Select a time</option>');
  });

  it("requires the number of guests to be between 1 and 10", () => {
    renderForm();

    const guestsInput = screen.getByLabelText("Number of guests");

    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveValue(2);
  });

  it("requires an occasion and provides the expected options", () => {
    renderForm();

    const occasionSelect = screen.getByLabelText("Occasion");

    expect(occasionSelect).toBeRequired();
    expect(occasionSelect).toHaveValue("Birthday");
    expect(occasionSelect).toHaveDisplayValue("Birthday");
    expect(occasionSelect.options).toHaveLength(3);

    expect(
      screen.getByRole("option", {
        name: "Anniversary",
        hidden: false,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", {
        name: "Other",
        hidden: false,
      }),
    ).toBeInTheDocument();
  });

  it("renders the reservation submit button", () => {
    renderForm();

    const buttons = screen.getAllByRole("button", {
      name: "Make Your Reservation",
    });

    expect(buttons.length).toBeGreaterThan(0);

    buttons.forEach((button) => {
      expect(button).toHaveAttribute("type", "submit");
    });
  });
});
