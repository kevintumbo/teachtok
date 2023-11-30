export const TimeTracker = (startTime: Date) => {
  const endTime = new Date();
  let timeDiff = +endTime - +startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  const seconds = Math.round(timeDiff);
  return formatTime(seconds);
};

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};
