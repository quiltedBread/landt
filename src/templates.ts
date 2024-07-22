import { State } from "./types"

export const SDE_TEMPLATE: State = {
    positions: [
      {
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        start_date: "2019-05-15",
        end_date: "2021-08-20",
        bullets: [
          {
            text: "Developed new features for a web application using React.js and Node.js",
            tags: ["React.js", "Node.js"],
            selected: true,
          },
          {
            text: "Led a team of 5 developers in an agile environment",
            tags: ["Leadership", "Agile"],
            selected: true,
          },
          {
            text: "Implemented continuous integration and deployment pipelines",
            tags: ["CI/CD"],
            selected: false,
          }
        ],
        selected: true
      }
    ]
  }
  