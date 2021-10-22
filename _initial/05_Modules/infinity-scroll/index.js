const $app = document.querySelector('.app');

const render = (target, template) => {
  target.innerHTML = template;
};

const template = count => {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<img src="${window.faker.image.avatar()}" />`;
  }
  return html;
};

render($app, template(1000));
