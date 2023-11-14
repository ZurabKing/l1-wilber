const book = {
    name: 'Грокаем алгоритмы',
    author: 'Адитья Бхаргава',
    yearOfPublication: 2017,
  
    //Получение названия книги
    getName() {
      return this.name;
    },
    //Получение автора книги
    getAuthor() {
      return this.author;
    },
  
    //Получение года издания книги
    getYearOfPublication() {
      return this.yearOfPublication;
    },
  
    //Изменение названия книги
    setName(newName) {
      this.name = newName;
    },
  
    //Изменение автора книги
    setAuthor(newAuthor) {
      this.author = newAuthor;
    },
  
    //Изменение года издания книги
    setYearOfPublication(newYear) {
      this.yearOfPublication = newYear;
    },
  };
  
  console.log(book.getName());
  console.log(book.getAuthor());
  console.log(book.getYearOfPublication());
  
  book.setName('Выразительный JavaScript');
  console.log(book.getName());
  
  book.setAuthor('Хавербеке Марейн');
  console.log(book.getAuthor());
  
  book.setYearOfPublication(2021);
  console.log(book.getYearOfPublication());
  