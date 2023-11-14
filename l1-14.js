const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error("Не удалось загрузить изображение"));
    };

    image.src = url;
  });
};

const imageUrl =
  "https://n1s1.hsmedia.ru/c6/cb/07/c6cb075801788a8aa6743e7c1d533f59/600x600_1_3385da3571b5694b6829c4da5493ed8e@1200x1200_0xac120004_2890328431678722594.jpeg";

loadImage(imageUrl)
  .then((image) => {
    console.log("Изображение успешно загружено", image);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке изображения", error);
  });
