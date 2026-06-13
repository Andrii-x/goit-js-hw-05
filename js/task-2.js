
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
};
console.log(getUsersWithFriend(allUsers, "Briana Decker"));
console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
console.log(getUsersWithFriend(allUsers, "Adrian Cross"));