interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: Details;
}

interface Details {
  createAt: Date;
  updateAt: Date;
}

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Lia", "Anton", "Alex"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};