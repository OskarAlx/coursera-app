import { describe, it, expect } from "vitest";
import {
  validateDate,
  validateGuests,
  validateTime,
} from "../../components/BookingValidation.js";

describe("validateDate", () => {
  it("accepts today or a future date", () => {
    const today = new Date();
    const date = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");

    expect(validateDate(date)).toBe(true);
  });

  it("rejects an empty or past date", () => {
    expect(validateDate("")).toBe(false);
    expect(validateDate("2020-01-01")).toBe(false);
  });
});

describe("validateGuests", () => {
  it("accepts guest counts from 1 to 10", () => {
    expect(validateGuests("1")).toBe(true);
    expect(validateGuests("5")).toBe(true);
    expect(validateGuests("10")).toBe(true);
  });

  it("rejects invalid guest counts", () => {
    expect(validateGuests("")).toBe(false);
    expect(validateGuests("0")).toBe(false);
    expect(validateGuests("11")).toBe(false);
    expect(validateGuests("2.5")).toBe(false);
  });
});

describe("validateTime", () => {
  const availableTimes = ["17:00", "18:30", "20:00"];

  it("accepts a time that is available", () => {
    expect(validateTime("18:30", availableTimes)).toBe(true);
  });

  it("rejects an unavailable or empty time", () => {
    expect(validateTime("19:00", availableTimes)).toBe(false);
    expect(validateTime("", availableTimes)).toBe(false);
  });
});
