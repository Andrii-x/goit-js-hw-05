const sortByDescendingFriendCount = users => {
  return users.toSorted(
    (a, b) => b.friends.length - a.friends.length
  );
};
console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: [
        "Marilyn Mcintosh",
        "Padilla Garrison",
        "Naomi Buckner"
      ]
    }
  ])
);