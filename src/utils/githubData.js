import "whatwg-fetch";

const githubData = async query => {
  let data;
  let err;

  try {
    const result = await fetch(`https://api.github.com/${query}`);
    const json = await result.json();
    data = json;
  } catch (error) {
    err = error;
  }

  return [data, err];
};

export default githubData;
