export default function filterUsers(data, query) {
    const lowerCaseQuery = query.toLowerCase();
    return data.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerCaseQuery) ||
        user.lastName.toLowerCase().includes(lowerCaseQuery) ||
        user.email.toLowerCase().includes(lowerCaseQuery) ||
        user.phone.includes(lowerCaseQuery) ||
        `${user.name} ${user.lastName}`.toLowerCase().includes(lowerCaseQuery)
    );
  }
  