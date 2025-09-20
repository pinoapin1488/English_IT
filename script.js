// =============================
// ТРЕНАЖЕР С 10 ВКЛАДКАМИ
// =============================
// Как пользоваться:
// 1) Заполни массивы во `categories` ниже. Каждая вкладка — это свой массив слов.
// 2) Названия вкладок можно менять (ключи объекта categories). Кол-во вкладок = 10.
// 3) Приложение само создаст панель вкладок и позволит переключаться между ними.

// -----------------------------
// 10 вкладок (категорий) со словами
// Формат элемента: { native: "Русская/Украинская фраза", en: "English" }
// -----------------------------
const categories = {
  "Вкладка 1": [
    { native: "Проверь ввод пользователя", en: "Validate the user input." },
    { native: "Нам нужно получить данные", en: "We need to fetch the data." },
    { native: "Отобрази содержимое страницы", en: "Render the page content." },
    { native: "Отправь запрос на сервер", en: "Send the request to the server." },
    { native: "Всегда делай резервную копию", en: "Always make a backup." },
    { native: "Установи новый пароль", en: "Set a new password." },
    { native: "Это последняя версия", en: "This is the latest version." },
    { native: "Ищи в базе данных", en: "Search the database." },
    { native: "Я прочитал две статьи сегодня", en: "I read two articles today." },
    { native: "Найди самый дешёвый вариант", en: "Find the cheapest option." },
    { native: "Удали неиспользуемый код", en: "Remove unused code." },
    { native: "Включи автосохранение", en: "Enable auto saving." },
    { native: "У этого приложения новая функция", en: "This app has a new feature." },
    { native: "Добавь заголовок к заметке", en: "Add a title to the note." },
    { native: "Напиши содержание здесь", en: "Write the content here." },
    { native: "Определи свои цели", en: "Define your goals." },
    { native: "Установи высокий приоритет", en: "Set the priority high." },
    { native: "Кто владелец этого репозитория?", en: "Who is the owner of this repo?" },
  ],
  "Вкладка 2": [
    // Пример: добавь свои слова сюда
    { native: "Сделай резервное копирование базы", en: "Back up the database." },
    { native: "Обнови зависимости проекта", en: "Update the project dependencies." },
    { native: "Мы протестируем код позже", en: "We will test the code later." },
    { native: "Сервер теперь готов", en: "The server is ready now." },
    { native: "Бот записывает логи", en: "The bot writes logs." },
    { native: "В коде была ошибка", en: "There was a bug in the code." },
    { native: "Конечно, нужен обзор", en: "Of course, we need a review." },
    { native: "Отправь запрос к API", en: "Send a request to the API." },
    { native: "Когда вы выложите приложение?", en: "When will you deploy the app?" },
    { native: "Это приложение сломано", en: "This app is broken." },
    { native: "Функция ещё не запущена", en: "The feature is not yet live." },
    { native: "Нам нужно больше памяти", en: "We need more memory." },
    { native: "Не игнорируй провальные тесты", en: "Don’t ignore failing tests." },
    { native: "Примени эти изменения", en: "Apply these changes." },
    { native: "Жди ответа", en: "Wait for the response." },
  
  ],
  "Вкладка 3": [{ native: "Создай новую ветку", en: "Create a new branch." },
{ native: "Смёрджи изменения в мастер", en: "Merge changes into master." },
{ native: "Закоммить правки", en: "Commit the changes." },
{ native: "Сделай форк репозитория", en: "Fork the repository." },
{ native: "Запушь код на GitHub", en: "Push the code to GitHub." },
{ native: "Склонируй репозиторий", en: "Clone the repository." },
{ native: "Сделай ребейз", en: "Do a rebase." },
{ native: "Разреши конфликт", en: "Resolve the conflict." },
{ native: "Создай pull request", en: "Create a pull request." },
{ native: "Код прошёл ревью", en: "The code passed review." },
{ native: "Задай глобальную переменную", en: "Set a global variable." },
{ native: "Проверь окружение", en: "Check the environment." },
{ native: "Установи Node.js", en: "Install Node.js." },
{ native: "Обнови npm пакеты", en: "Update npm packages." },
{ native: "Запусти сервер разработки", en: "Run the dev server." },],
  "Вкладка 4": [{ native: "Перезагрузи приложение", en: "Restart the application." },
{ native: "Закрой лишние процессы", en: "Kill extra processes." },
{ native: "Подними контейнер Docker", en: "Start the Docker container." },
{ native: "Собери образ заново", en: "Rebuild the image." },
{ native: "Проверь логи контейнера", en: "Check the container logs." },
{ native: "Открой терминал", en: "Open the terminal." },
{ native: "Выполни команду заново", en: "Run the command again." },
{ native: "Проверь права доступа", en: "Check the permissions." },
{ native: "Дай доступ пользователю", en: "Grant user access." },
{ native: "Открой файл конфигурации", en: "Open the config file." },
{ native: "Сохрани изменения в настройках", en: "Save the config changes." },
{ native: "Запусти миграции базы", en: "Run the database migrations." },
{ native: "Очисти кэш", en: "Clear the cache." },
{ native: "Создай тестовые данные", en: "Create test data." },
{ native: "Подними локальный сервер", en: "Start the local server." },],
  "Вкладка 5": [{ native: "Подключись к базе", en: "Connect to the database." },
{ native: "Создай новую таблицу", en: "Create a new table." },
{ native: "Добавь колонку в таблицу", en: "Add a column to the table." },
{ native: "Удали строку из базы", en: "Delete a row from the database." },
{ native: "Обнови запись", en: "Update the record." },
{ native: "Выведи все строки", en: "Select all rows." },
{ native: "Примени фильтр", en: "Apply the filter." },
{ native: "Сделай join таблиц", en: "Join the tables." },
{ native: "Напиши SQL-запрос", en: "Write an SQL query." },
{ native: "Проверь схему базы", en: "Check the database schema." },
{ native: "Создай индекс", en: "Create an index." },
{ native: "Сделай экспорт данных", en: "Export the data." },
{ native: "Импортируй данные", en: "Import the data." },
{ native: "Ограничь количество строк", en: "Limit the number of rows." },
{ native: "Проверь уникальность", en: "Check for uniqueness." },],
  "Вкладка 6": [{ native: "Напиши цикл for", en: "Write a for loop." },
{ native: "Создай массив чисел", en: "Create an array of numbers." },
{ native: "Отсортируй массив", en: "Sort the array." },
{ native: "Фильтруй элементы", en: "Filter the elements." },
{ native: "Найди максимальное значение", en: "Find the maximum value." },
{ native: "Выведи длину строки", en: "Print the string length." },
{ native: "Сделай конкатенацию строк", en: "Concatenate the strings." },
{ native: "Используй условный оператор", en: "Use a conditional statement." },
{ native: "Верни результат функции", en: "Return the function result." },
{ native: "Создай объект", en: "Create an object." },
{ native: "Добавь ключ в объект", en: "Add a key to the object." },
{ native: "Проверь тип переменной", en: "Check the variable type." },
{ native: "Обработай исключение", en: "Handle the exception." },
{ native: "Используй стрелочную функцию", en: "Use an arrow function." },
{ native: "Экспортируй модуль", en: "Export the module." },],
  "Вкладка 7": [{ native: "Загрузите страницу заново", en: "Reload the page." },
{ native: "Открой консоль браузера", en: "Open the browser console." },
{ native: "Проверь сетевые запросы", en: "Check the network requests." },
{ native: "Установи куки", en: "Set the cookie." },
{ native: "Очисти историю браузера", en: "Clear the browser history." },
{ native: "Разреши уведомления", en: "Allow notifications." },
{ native: "Отключи рекламу", en: "Disable ads." },
{ native: "Проверь адаптивность", en: "Check responsiveness." },
{ native: "Открой сайт на телефоне", en: "Open the site on mobile." },
{ native: "Измени тему интерфейса", en: "Change the UI theme." },
{ native: "Включи тёмный режим", en: "Enable dark mode." },
{ native: "Проверь SSL-сертификат", en: "Check the SSL certificate." },
{ native: "Добавь сайт в закладки", en: "Bookmark the site." },
{ native: "Обнови страницу через F5", en: "Refresh the page with F5." },
{ native: "Открой DevTools", en: "Open the DevTools." },],
  "Вкладка 8": [{ native: "Напиши unit-тест", en: "Write a unit test." },
{ native: "Запусти тесты", en: "Run the tests." },
{ native: "Проверь покрытие кода", en: "Check the code coverage." },
{ native: "Используй мок-данные", en: "Use mock data." },
{ native: "Добавь новый тест-кейс", en: "Add a new test case." },
{ native: "Проверь результат", en: "Check the result." },
{ native: "Напиши end-to-end тест", en: "Write an end-to-end test." },
{ native: "Тест прошёл успешно", en: "The test passed successfully." },
{ native: "Тест упал", en: "The test failed." },
{ native: "Перезапусти тесты", en: "Rerun the tests." },
{ native: "Отладь функцию", en: "Debug the function." },
{ native: "Поставь точку останова", en: "Set a breakpoint." },
{ native: "Проверь стек вызовов", en: "Check the call stack." },
{ native: "Посмотри значение переменной", en: "Inspect the variable value." },
{ native: "Используй debugger", en: "Use the debugger." },],
  "Вкладка 9": [{ native: "Включи двухфакторную аутентификацию", en: "Enable two-factor authentication." },
{ native: "Смени ключ доступа", en: "Change the access key." },
{ native: "Проверь хэш пароля", en: "Verify the password hash." },
{ native: "Зашифруй сообщение", en: "Encrypt the message." },
{ native: "Расшифруй данные", en: "Decrypt the data." },
{ native: "Создай SSL-сертификат", en: "Generate an SSL certificate." },
{ native: "Проверь уровень безопасности", en: "Check the security level." },
{ native: "Запусти firewall", en: "Start the firewall." },
{ native: "Ограничь доступ по IP", en: "Restrict access by IP." },
{ native: "Подключись к VPN", en: "Connect to the VPN." },
{ native: "Настрой HTTPS", en: "Configure HTTPS." },
{ native: "Включи логирование ошибок", en: "Enable error logging." },
{ native: "Задай тайм-аут сессии", en: "Set a session timeout." },
{ native: "Проверь сетевой трафик", en: "Monitor the network traffic." },
{ native: "Обнови систему безопасности", en: "Update the security system." },],
  "Вкладка 10": [{ native: "Создай новую задачу", en: "Create a new task." },
{ native: "Поставь срок выполнения", en: "Set the deadline." },
{ native: "Назначь ответственного", en: "Assign the responsible person." },
{ native: "Обнови статус задачи", en: "Update the task status." },
{ native: "Закрой задачу", en: "Close the task." },
{ native: "Создай доску Kanban", en: "Create a Kanban board." },
{ native: "Разбей проект на спринты", en: "Split the project into sprints." },
{ native: "Запланируй митинг", en: "Schedule a meeting." },
{ native: "Сделай отчёт о прогрессе", en: "Make a progress report." },
{ native: "Добавь комментарий", en: "Add a comment." },
{ native: "Прикрепи файл к задаче", en: "Attach a file to the task." },
{ native: "Поставь задачу в приоритет", en: "Mark the task as a priority." },
{ native: "Поделись документом", en: "Share the document." },
{ native: "Отправь уведомление команде", en: "Send a notification to the team." },
{ native: "Проведи код-ревью", en: "Conduct a code review." },],
  "Все слова": [], // Будет заполнена динамически
};

// -----------------------------
// Заполнение вкладки "Все слова" всеми словами
// -----------------------------
function populateAllWordsTab() {
  const allWords = [];
  Object.keys(categories).forEach(tabName => {
    if (tabName !== "Все слова") {
      allWords.push(...categories[tabName]);
    }
  });
  categories["Все слова"] = allWords;
}

// Заполняем вкладку "Все слова" при загрузке
populateAllWordsTab();

// -----------------------------
// Служебные переменные
// -----------------------------
let activeTab = Object.keys(categories)[0];
let currentIndex = 0;
let score = 0;
let shuffledWords = [];

// -----------------------------
// DOM элементы (как и раньше)
// -----------------------------
const wordBox = document.getElementById("wordBox");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const feedback = document.getElementById("feedback");
const correctAnswer = document.getElementById("correctAnswer");
const scoreBox = document.getElementById("score");

// -----------------------------
// Утилиты
// -----------------------------
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getActiveWords() {
  if (activeTab === "Все слова") {
    // Перезаполняем вкладку "Все слова" каждый раз, чтобы избежать дублирования
    populateAllWordsTab();
  }
  return categories[activeTab] || [];
}

function setControlsEnabled(enabled) {
  userInput.disabled = !enabled;
  checkBtn.disabled = !enabled;
}

// -----------------------------
// Рендер панели вкладок (создаём динамически)
// -----------------------------
function renderTabs() {
  // Если панели ещё нет — создаём
  let tabsBar = document.getElementById("tabsBar");
  if (!tabsBar) {
    tabsBar = document.createElement("div");
    tabsBar.id = "tabsBar";
    // Простые стили по месту, чтобы без CSS-файла
    tabsBar.style.display = "flex";
    tabsBar.style.flexWrap = "wrap";
    tabsBar.style.gap = "6px";
    tabsBar.style.marginBottom = "10px";

    // Вставим панель вкладок перед wordBox
    if (wordBox && wordBox.parentNode) {
      wordBox.parentNode.insertBefore(tabsBar, wordBox);
    } else {
      document.body.prepend(tabsBar);
    }
  } else {
    tabsBar.innerHTML = ""; // перерисовать
  }

  // Кнопки вкладок
  Object.keys(categories).forEach((name) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.classList.add("tab-btn");
    if (name === activeTab) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      if (activeTab !== name) {
        switchTab(name);
      }
    });

    tabsBar.appendChild(btn);
  });
}

// -----------------------------
// Переключение вкладки
// -----------------------------
function switchTab(name) {
  activeTab = name;
  // Сброс состояния
  currentIndex = 0;
  score = 0;
  scoreBox.textContent = `Счёт: ${score}`;
  feedback.textContent = "";
  correctAnswer.textContent = "";
  checkBtn.textContent = "Проверить";

  const words = getActiveWords();
  if (!words.length) {
    wordBox.textContent = "В этой вкладке пока нет слов. Добавь их в categories.";
    setControlsEnabled(false);
    renderTabs();
    return;
  }

  shuffledWords = shuffleArray([...words]);
  setControlsEnabled(true);
  userInput.value = "";
  userInput.focus();
  renderTabs();
  showNextWord();
}

// -----------------------------
// Показ следующего слова
// -----------------------------
function showNextWord() {
  const words = getActiveWords();

  if (!words.length) {
    wordBox.textContent = "В этой вкладке пока нет слов. Добавь их в categories.";
    setControlsEnabled(false);
    return;
  }

  if (currentIndex >= shuffledWords.length) {
    wordBox.textContent = "Готово! Все слова пройдены.";
    setControlsEnabled(false);

    // Сохранение результата по вкладке (как раньше, но добавим имя вкладки)
    const today = new Date().toISOString().split("T")[0];
    fetch("/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score, date: today, tab: activeTab }),
    });
    return;
  }

  const currentWord = shuffledWords[currentIndex];
  wordBox.textContent = currentWord.native;
  userInput.value = "";
  feedback.textContent = "";
  correctAnswer.textContent = "";
  userInput.focus();
}

// -----------------------------
// Проверка ответа
// -----------------------------
function checkAnswer() {
  const currentWord = shuffledWords[currentIndex];
  if (!currentWord) return; // защита

  const userAnswer = userInput.value.trim().toLowerCase();

  if (userAnswer === currentWord.en.toLowerCase()) {
    feedback.textContent = "✅ Правильно!";
    score++;
    scoreBox.textContent = `Счёт: ${score}`;
  } else {
    feedback.textContent = "❌ Неправильно!";
    correctAnswer.textContent = `Правильно: ${currentWord.en}`;
    // Не двигаем индекс и не запускаем таймер — ждём нажатия кнопки
    checkBtn.textContent = "Ок";
    return;
  }

  checkBtn.textContent = "Ок";
}

// -----------------------------
// Инициализация
// -----------------------------
function init() {
  renderTabs();
  switchTab(activeTab); // загрузить первую вкладку
}

document.addEventListener("DOMContentLoaded", init);

// -----------------------------
// Обработчики
// -----------------------------
checkBtn.addEventListener("click", () => {
  if (checkBtn.textContent === "Ок") {
    // перейти к следующему слову вручную
    currentIndex++;
    correctAnswer.textContent = "";
    feedback.textContent = "";
    checkBtn.textContent = "Проверить";
    showNextWord();
    return;
  }
  checkAnswer();
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (checkBtn.textContent === "Ок") {
      currentIndex++;
      correctAnswer.textContent = "";
      feedback.textContent = "";
      checkBtn.textContent = "Проверить";
      showNextWord();
    } else {
      checkAnswer();
    }
  }
});