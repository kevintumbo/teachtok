export const getQuestion = async () => {
  try {
    const response = await fetch(
      "https://cross-platform.rp.devfactory.com/for_you",
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getAnswer = async (id) => {
  try {
    const response = await fetch(
      `https://cross-platform.rp.devfactory.com/reveal?id=${id}`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
