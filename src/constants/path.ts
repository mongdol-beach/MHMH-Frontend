const PAGE_PATH = {
  MAIN: "/",
  LOGIN: "/login",
  OAUTH_REDIRECT: "/login/:provider",
  TOPICS_RANDOM: "/topics/random",
  TOPIC: "/topic",
  SITUATION: "/situation",
  PERSON: "/person",
  TOPICS_BY_SITUATION: "/topics/situation",
  TOPICS_BY_PERSON: "/topics/person",
  "BALANCE-GAME": "/balance-game",
  TOPIC_LIST: "/topic-list/:id",
  PERSON_TOPIC_LIST : "/person-topic-list/:id",
} as const;

export default PAGE_PATH;
