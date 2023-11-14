const DEFAULT_OFFSET = 0;
const DEFAULT_COUNT = 10;

const LOCAL_STORAGE_OFFSET_KEY = "offset";
const LOCAL_STORAGE_POSTS_KEY = "posts";

// Токен доступа и базовый URL для запросов к API VK
const ACCESS_TOKEN =
  "vk1.a.zghDbPpoAX9PtbbtPpKUhRK-HC-v4WPdM3x0GZK52z7Kwuq0N6HD0w2ndAbqkh22m3JJYbMFWPU9P5VFC5HD75Ozq2gjXUQRPVhyQMEnsmROOJZmyVq9WLZGzKOCt4Uig143h8jHWsn5ccuxkisjz8Z2q5b8DVAYshoqbP5_du-qSyacCWzt3MjTUzek5zyW8ODAxdo8D2STZUuLKt76Bg";
const BASE_URL = "https://api.vk.com/method/wall.get";
const API_URL = `${BASE_URL}/?domain=koshki2010&v=5.131&access_token=${ACCESS_TOKEN}&callback=onFetchPosts`;

// Состояние приложения, включая смещение и количество постов
const state = {
  offset:
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_OFFSET_KEY)) ??
    DEFAULT_OFFSET,
  count: DEFAULT_COUNT,
};

const debounce = (cb, ms) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    setTimeout(cb, ms, ...args);
  };
};

// костыль для отправки запросов, иначе падает ошибка CORS
const addScript = (src) => {
  const script = document.createElement("script");
  script.src = src;
  document.head.appendChild(script);

  script.onload = function () {
    script.remove();
  };
};

// Функция для выполнения запроса к API VK с заданными параметрами
const fetchPosts = (params) => {
  const { offset, count } = params;

  addScript(`${API_URL}&${new URLSearchParams({ offset, count })}`);
};

// Функция для отображения постов на странице
const renderPosts = (posts) => {
  const postsListNode = document.querySelector(".posts");

  const postsContent = posts
    .map(
      (post) =>
        `<div class="post">
      <pre class="post__text">${post.text}</pre>
      <div class="photos">${post.attachments
        .map((attachment) => {
          if (attachment.type !== "photo") return "";

          const photo = attachment.photo.sizes.find(({ type }) => type === "p");

          return `<img class="post__image" src="${photo.url}" />`;
        })
        .join("")}</div>
    </div>`
    )
    .join("");

  postsListNode.insertAdjacentHTML("beforeend", postsContent);
};

// Функция, вызываемая при получении данных от API VK
const onFetchPosts = (posts) => {
  // Обновление локального хранилища с постами
  const cachePosts =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_POSTS_KEY)) ?? [];
  const newPosts = [...cachePosts, ...posts.response.items];
  localStorage.setItem(LOCAL_STORAGE_POSTS_KEY, JSON.stringify(newPosts));

  // Отображение постов на странице
  renderPosts(posts.response.items);
};

// Инициализация приложения при загрузке страницы
(function bootstrap() {
  // Настройки для IntersectionObserver
  const options = {
    rootMargin: "0px",
    threshold: 0,
  };

  // Создание и настройка IntersectionObserver для отслеживания видимости элемента на странице
  const observer = new IntersectionObserver(() => {
    // Увеличение смещения и сохранение его в локальном хранилище
    state.offset += state.count;
    console.log("state.offset", state.offset);
    console.log("state.count", state.count);
    localStorage.setItem(LOCAL_STORAGE_OFFSET_KEY, state.offset);

    // Создание функции с задержкой для выполнения запроса
    const debouncedFetchPosts = debounce(() => {
      fetchPosts({ offset: state.offset, count: state.count });
    }, 1000);

    debouncedFetchPosts();
  }, options);

  // Начало отслеживания видимости элемента с классом "opacity"
  observer.observe(document.querySelector(".opacity"));
})();
