const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};

console.log(getTotalBalanceByGender(users, "male"));
console.log(getTotalBalanceByGender(users, "female"));
