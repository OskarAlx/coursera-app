import { describe, it, expect, vi, afterEach } from "vitest";
import { initializeTimes, updateTimes } from "../../App.jsx";

describe("initializeTimes", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("returns the available times for today", () => {
    const expectedTimes = ["17:00", "18:30", "20:00"];

    const fetchAPISpy = vi.fn().mockReturnValue(expectedTimes);
    vi.stubGlobal("fetchAPI", fetchAPISpy);

    const result = initializeTimes();

    expect(fetchAPISpy).toHaveBeenCalledTimes(1);
    expect(fetchAPISpy).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual(expectedTimes);

    const requestedDate = fetchAPISpy.mock.calls[0][0];
    const today = new Date();

    expect(requestedDate.getDate()).toBe(today.getDate());
    expect(requestedDate.getMonth()).toBe(today.getMonth());
    expect(requestedDate.getFullYear()).toBe(today.getFullYear());
  });
});

describe("updateTimes", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("returns the available times for the selected date", () => {
    const currentState = ["17:00", "18:00"];
    const expectedTimes = ["18:30", "19:30", "21:00"];
    const selectedDate = "2026-10-10";

    const fetchAPISpy = vi.fn().mockReturnValue(expectedTimes);
    vi.stubGlobal("fetchAPI", fetchAPISpy);

    const result = updateTimes(currentState, {
      type: "UPDATE_TIMES",
      date: selectedDate,
    });

    expect(fetchAPISpy).toHaveBeenCalledTimes(1);
    expect(fetchAPISpy).toHaveBeenCalledWith(
      new Date(selectedDate + "T00:00:00"),
    );
    expect(result).toEqual(expectedTimes);
  });

  it("returns the current state for an unknown action", () => {
    const currentState = ["17:00", "18:00"];

    const result = updateTimes(currentState, {
      type: "UNKNOWN_ACTION",
    });

    expect(result).toEqual(currentState);
  });
});

// import { describe, it, expect } from "vitest";
// import { initializeTimes, updateTimes } from "../../App";

// describe("initializeTimes", () => {
//   it("returns the expected initial times", () => {
//     const result = initializeTimes();

//     expect(result).toEqual([
//       "17:00",
//       "18:00",
//       "19:00",
//       "20:00",
//       "21:00",
//       "22:00",
//     ]);
//   });
// });

// describe("updateTimes", () => {
//   it("returns the same state it receives", () => {
//     const state = ["17:00", "18:00", "19:00"];

//     const result = updateTimes(state, {
//       type: "UPDATE_TIMES",
//       date: "2026-10-10",
//     });

//     expect(result).toEqual(state);
//   });
// });
