const PAGE_PATH = {
  MAIN: "/",
  "RANDOM-TOPIC": "/random-topic",
  TOPIC: "/topic",
  SITUATION: "/situation",
  TOPICS_BY_SITUATION: "/topics/situation/:situationId",
  "BALANCE-GAME": "/balance-game",
} as const;

export default PAGE_PATH;
