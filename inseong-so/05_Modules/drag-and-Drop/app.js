const items = document.querySelectorAll('.item');
const container = document.querySelector('.container');

const idSort = document.querySelector('#sort-id');
const nameSort = document.querySelector('#sort-name');

const userIds = document.querySelectorAll('.user-id');
const userNames = document.querySelectorAll('.user-name');

items.forEach(item => {
  item.addEventListener('dragstart', () => {
    item.classList.add('dragging');
  });

  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
  });
});

container.addEventListener('dragover', event => {
  event.preventDefault();
  const afterElement = dragBetweenElement(container, event.clientY);
  const dragging = document.querySelector('.dragging');
  container.appendChild(dragging);
  if (afterElement === null) {
    container.appendChild(dragging);
  } else {
    container.insertBefore(dragging, afterElement);
  }
});

idSort.addEventListener('click', () => {
  const sortableElements = [...userIds];
  sortableElements
    .reduce((sorted, id) => {
      const item = id.closest('.item');
      sorted.push({ target: item, id: id.innerText });
      return sorted;
    }, [])
    .sort(compare('id'))
    .forEach(item => {
      container.appendChild(item.target);
    });
});

nameSort.addEventListener('click', () => {
  const sortableElements = [...userNames];
  sortableElements
    .reduce((sorted, name) => {
      const item = name.closest('.item');
      sorted.push({ target: item, name: name.innerText });
      return sorted;
    }, [])
    .sort(compare('name'))
    .forEach(item => {
      container.appendChild(item.target);
    });
});

function dragBetweenElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll('.item:not(.dragging)'),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    },
  ).element;
}

function compare(key) {
  return (a, b) =>
    a[key].toUpperCase() > b[key].toUpperCase()
      ? 1
      : a[key].toUpperCase() < b[key].toUpperCase()
      ? -1
      : 0;
}
