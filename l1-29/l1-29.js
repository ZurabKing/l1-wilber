const submitForm = () => {
  const form = document.getElementById("myForm");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");

  // Получаем значения из полей ввода
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;

  // Проверяем, что все поля не пустые
  if (firstName && lastName && email) {
    alert(` Ваше имя: ${firstName}
            Ваша фамилия: ${lastName}
            Ваша почта: ${email}`);

    // fetch('url', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ firstName, lastName, email }),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Server response:', data))
    // .catch(error => console.error('Error:', error));
  } else {
    alert("Заполните все поля.");
  }
};
