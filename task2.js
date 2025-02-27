// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.addEventListener('DOMContentLoaded', () => {
  const userNameInput = document.getElementById('userNameInput');
  const getUserButton = document.getElementById('getUserButton');
  const userCity = document.getElementById('userCity');

  getUserButton.addEventListener('click', async () => {
    const userName = userNameInput.value.trim().toLowerCase();
    if (!userName) {
      userCity.textContent = 'Please enter a username';
      return;
    }

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const users = await response.json();
      const user = users.find((u) => u.name.toLowerCase() === userName);
      userCity.textContent = user ? `${user.address.city}` : 'User not found';
    } catch (error) {
      console.error('Error fetching users:', error);
      userCity.textContent = 'Failed to fetch users';
    }
  });
});
