export function dragNdrop() {
  const $todo_container = document.querySelector('.todo_container');

  $todo_container.addEventListener('mousedown', (event) => onMouseDown(event));
}

function onMouseUp({ clientX, clientY }, $origin, $target) {
  const closestElement = document
    .elementFromPoint(clientX, clientY)
    .closest('li');
  const closestElementContainer = document
    .elementFromPoint(clientX, clientY)
    .closest('ul');
  const closestElementParent = document.elementFromPoint(clientX, clientY);

  const $main = document.querySelector('.main');
  if (closestElement.previousElementSibling === null) {
    closestElementContainer.prepend($origin);
  } else if (
    closestElementContainer === $main ||
    closestElementContainer === null
  ) {
    closestElementParent.appendChild($origin);
  } else {
    closestElement.previousElementSibling.insertAdjacentElement(
      'afterend',
      $origin
    );
  }

  $origin.classList.remove('shadow');
  $target.parentNode?.removeChild($target);
}

function onMouseMove(event, $origin, $target, { shiftX, shiftY }) {
  const { pageX, pageY } = event;

  $target.style.left = `${pageX - shiftX}px`;
  $target.style.top = `${pageY - shiftY}px`;

  document.addEventListener('mouseup', (event) =>
    onMouseUp(event, $origin, $target)
  );
}

function onMouseDown(event) {
  const { clientX, clientY } = event;
  const $card = event.target.closest('li');
  $card.classList.add('shadow');
  const $newCard = $card.cloneNode(true);
  const { left, top } = $card.getBoundingClientRect();
  let shiftX = clientX - left;
  let shiftY = clientY - top;
  $newCard.style.position = 'absolute';
  $newCard.style.zIndex = 1000;
  $newCard.style.borderRadius = '6px';
  $newCard.style.backgroundColor = '#fff';
  $newCard.style.boxShadow = '0px 1px 30px rgba(224, 224, 224, 0.3)';
  $newCard.style.width = '310px';
  $newCard.style.height = '115px';

  document.body.append($newCard);

  document.addEventListener('mousemove', (event) =>
    onMouseMove(event, $card, $newCard, { shiftX, shiftY })
  );
}
