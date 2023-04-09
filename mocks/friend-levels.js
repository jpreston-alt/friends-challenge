export const friendLevels = {
  1: {
    text: "Close Friends",
    color: "blue",
  },
  2: {
    text: "Super Close Friends",
    color: "green",
  },
};

export const friendLevelsArr = Object.entries(friendLevels).map((el) => ({
  level: el[0],
  text: el[1].text,
  color: el[1].color,
}));
