title: "Пример статьи с кодом и разметкой"
date: "2023-10-27"
author: "Ваше Имя"

# Заголовок первого уровня (H1)

Это введение в статью с **жирным текстом** и *курсивом*. Markdown позволяет легко форматировать текст.

## Заголовок второго уровня (H2)

Вот ненумерованный список:

- Первый элемент
- Второй элемент
- Третий элемент

А вот нумерованный:

1. Первый пункт
2. Второй пункт
3. Третий пункт

### Заголовок третьего уровня (H3)

Вот пример ссылки: [Gatsby.js](https://www.gatsbyjs.com) и изображения:

![Логотип React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

## Блоки кода с разными языками

### JavaScript код (с подсветкой)

```javascript
// Функция для вычисления факториала
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Использование async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// Современный JS с деструктуризацией
const user = {
  name: 'Alice',
  age: 30,
  city: 'Moscow'
};

const { name, age, ...rest } = user;
console.log(name); // 'Alice'

// Интерфейс в TypeScript
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
}

// Дженерик-функция
function identity<T>(arg: T): T {
  return arg;
}

// Использование типа
const newUser: User = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  isActive: true
};

// Класс с модификаторами доступа
class Animal {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Шаблонная функция
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Класс с конструктором и деструктором
class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    ~Rectangle() {
        cout << "Объект уничтожен" << endl;
    }
    
    int area() const { return width * height; }
    friend ostream& operator<<(ostream& os, const Rectangle& r);
};

// Перегрузка оператора вывода
ostream& operator<<(ostream& os, const Rectangle& r) {
    os << "Rectangle(" << r.width << ", " << r.height << ")";
    return os;
}

int main() {
    vector<int> numbers = {5, 2, 8, 1, 9};
    sort(numbers.begin(), numbers.end());
    
    Rectangle rect(10, 20);
    cout << "Площадь: " << rect.area() << endl;
    cout << rect << endl;
    
    return 0;
}