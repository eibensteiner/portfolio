export const commands = [
  {
    entries: [
      {
        title: "About Me",
        author: {
          firstName: "John",
          lastName: "Scalzi",
        },
      },
    ],
  },
  {
    title: "Blog",
    entries: [
      {
        title: "Introducing Sandbox",
        author: {
          firstName: "P.D",
          lastName: "Woodhouse",
        },
      },
    ],
  },
  {
    title: "Social",
    entries: [
      {
        title: "Twitter",
        author: {
          firstName: "Remy",
          lastName: "Sharp",
        },
      },
      {
        title: "LinkedIn",
        author: {
          firstName: "P.D",
          lastName: "Woodhouse",
        },
      },
      {
        title: "GitHub",
        author: {
          firstName: "P.D",
          lastName: "Woodhouse",
        },
      },
      {
        title: "Dribbble",
        author: {
          firstName: "P.D",
          lastName: "Woodhouse",
        },
      },
    ],
  },
];

export const options = {
  shouldSort: false,
  threshold: 0.3,
  maxPatternLength: 32,
  includeScore: true,
  includeMatches: true,
  keys: ["entries.title"],
};
