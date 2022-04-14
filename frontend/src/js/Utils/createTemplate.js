const createTagTemplate = (tag, content, className = '') => {
  return `<${tag} class="${className}">${content}</${tag}>`;
};

const createListTemplate = (tag, domStringContents, className) => {
  return domStringContents.map((content) =>
    createTagTemplate(tag, content, className)
  );
};

const createLiListTemplate = (domStringContents, className) => {
  return createListTemplate('li', domStringContents, className).join('');
};

const htmlString2htmlElement = ({
  tag = 'div',
  htmlString,
  className = '',
}) => {
  const $element = document.createElement(tag);
  $element.className = className;
  $element.innerHTML = htmlString;

  return $element;
};

const targetQuerySelector = ({ target = document, className = '' }) => {
  return target.querySelector(`.${className}`);
};

export {
  createTagTemplate,
  createLiListTemplate,
  htmlString2htmlElement,
  targetQuerySelector,
};
