import githubData from "../githubData";

it("works", async () => {
  const result = await githubData("users/Thomazella");

  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Promise);
  expect(result).toBeInstanceOf(Array);

  const [data] = result;

  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Object);
});
