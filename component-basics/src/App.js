function App() {
  const items = ['React', 'JavaScript', 'Vite'];
  const container = document.createElement('div');
  const list = document.createElement('ul');

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  container.appendChild(list);

  return container;
}

// Renderizar el componente en el DOM
const appElement = document.getElementById('app');
appElement.appendChild(App());