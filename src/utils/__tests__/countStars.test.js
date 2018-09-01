import countStars from "../countStars";

it("works", async () => {
  const result = await countStars("Thomazella");

  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Promise);
  expect(typeof result).toBe("number");
});
