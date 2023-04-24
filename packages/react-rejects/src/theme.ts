
export interface Theme {
  color: {
    primary: "blue" | "green";
  };
  border: {
    radius: "rounded" | "rounded-2xl";
  };
}

export const defaultThemes: { [key: string]: Theme } = {
  prototype: {
    color: {
      primary: "blue",
    },
    border: {
      radius: "rounded-2xl",
    },
  },
  absurd: {
    color: {
      primary: "green",
    },
    border: {
      radius: "rounded",
    },
  },
};
