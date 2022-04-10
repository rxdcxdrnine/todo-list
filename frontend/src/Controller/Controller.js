import AlertView from '../View/alertView.js';

class Controller {
  constructor() {}

  initAlert() {
    const title = '선택한 카드를 삭제할까요?';
    const cancel = '취소';
    const accept = '삭제';
    const alertView = new AlertView({ title, cancel, accept });

    alertView.onClickCancel(handleClickCancel);
    alertView.onClickAccept(handleClickAccept);

    function handleClickCancel() {
      alertView.render();
    }

    function handleClickAccept() {
      // Todo: 추후 로직 추가
      alertView.render();
    }
  }
}

export default Controller;
