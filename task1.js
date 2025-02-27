// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди node tests/task1.test.js

document.addEventListener('DOMContentLoaded', async () => {
  const userList = document.querySelector('ul.usersList');
  if (!userList) {
    console.error("Element with class 'usersList' not found!");
    return;
  }

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const users = await response.json();
    userList.innerHTML = users.map((user) => `<li>${user.name}</li>`).join('');
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
