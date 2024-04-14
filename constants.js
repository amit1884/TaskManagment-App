export const appData = {
  common: {
    tasks: [
      {
        id: 1,
        title: "Code",
        desc: "Code the app",
        priority: "high",
        createdAt: "",
        updatedAt: "",
        status: "todo",
      },
      {
        id: 2,
        title: "Code",
        desc: "Code the app",
        priority: "low",
        createdAt: "",
        updatedAt: "",
        status: "todo",
      },
    ],
  },
  personal: {
    tasks: [
      {
        id: 1,
        title: "Code",
        desc: "Code the app",
        priority: "low",
        createdAt: "",
        updatedAt: "",
        status: "todo",
      },
      {
        id: 2,
        title: "Code",
        desc: "Code the app",
        priority: "medium",
        createdAt: "",
        updatedAt: "",
        status: "todo",
      },
    ],
  },
  work: {
    tasks: [
      {
        id: 1,
        title: "Code",
        desc: "Code the app",
        priority: "high",
        createdAt: "",
        updatedAt: "",
        status: "todo",
      },
      {
        id: 2,
        title: "Debug",
        desc: "Debug the bug 21",
        priority: "high",
        createdAt: "",
        updatedAt: "",
        status: "todo",
      },
      {
        id: 3,
        title: "Salary",
        desc: "Ask for salary",
        priority: "high",
        createdAt: "",
        updatedAt: "",
        status: "todo",
      },
    ],
  },
};

export const folderList = [
  { label: "Common", value: "common" },
  { label: "Personal", value: "personal" },
  { label: "Work", value: "Work" },
];

export const BASE_URL="http://192.168.1.45:5000"