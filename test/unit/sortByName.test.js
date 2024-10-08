const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const ouput = sorting.sortByName(input);

    expect(ouput).toEqual(expected);
  });
});

describe("Books names test suit", () => {
  it("Books names should not sorted", () => {
    const input = ["Властелин Колец", "Властелин Колец"];
    const expected = ["Властелин Колец", "Властелин Колец"];
    const ouput = sorting.sortByName(input);

    expect(ouput).toEqual(expected);
  });
});
