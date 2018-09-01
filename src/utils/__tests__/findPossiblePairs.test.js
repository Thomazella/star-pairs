import findPossiblePairs from "../findPossiblePairs";

it("works", async () => {
  const result = await findPossiblePairs("Thomazella", 1);

  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Promise);
  expect(result).toBeInstanceOf(Array);
});
