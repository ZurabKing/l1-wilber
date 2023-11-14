document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector(".table_dark");
  const tbody = document.getElementById("tableBody");
  const paginationContainer = document.getElementById("pagination");
  let data = []; // Хранение данных глобально для сортировки
  const itemsPerPage = 50; //количество item на странице
  let currentPage = 1;

  const getData = async () => {
    try {
      const url =
        "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";
      const response = await fetch(url);
      data = await response.json();

      console.log(data);

      // Отрисовка таблицы с начальными данными и пагинацией
      renderTable();
      renderPagination();
    } catch (error) {
      console.log("Ошибка запроса:", error);
    }
  };

  const renderTable = () => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const displayedData = data.slice(startIdx, endIdx);

    // Очистка существующих строк
    tbody.innerHTML = "";

    // Итерация по данным и добавление строк в таблицу
    displayedData.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${item.fname}</td>
          <td>${item.lname}</td>
          <td>${item.tel}</td>
          <td>${item.address}</td>
          <td>${item.city}</td>
          <td>${item.state}</td>
          <td>${item.zip}</td>
        `;
      tbody.appendChild(row);
    });
  };

  window.sortTable = (columnIndex) => {
    data.sort((a, b) => {
      const valueA = a[Object.keys(a)[columnIndex]];
      const valueB = b[Object.keys(b)[columnIndex]];

      if (isNaN(valueA) || isNaN(valueB)) {
        // Если значения не являются числами, выполните строковое сравнение
        return valueA.localeCompare(valueB);
      } else {
        // Если значения - числа, выполните числовое сравнение
        return valueA - valueB;
      }
    });

    // Отрисовка отсортированной таблицы
    renderTable(data);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    let paginationHtml = "";
    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `<button onclick="changePage(${i})">${i}</button>`;
    }

    paginationContainer.innerHTML = paginationHtml;
  };

  window.changePage = (page) => {
    currentPage = page;
    renderTable();
  };

  getData();
});
