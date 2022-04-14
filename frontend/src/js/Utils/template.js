const headerTemplate = () => {
  return `
  <header class="header">
    <h1 class="header_title">TO-DO LIST</h1>
    <button class="menu_btn">
      <img src="./src/img/menu_icon.png" alt="활동기록 메뉴" />
    </button>
  </header>
  `;
};

const historyTemplate = () => {
  return `
  <article class="history_container">
    <ul class="history_list">
      <li class="history_card">
        <div
          class="user_img"
          style="background-image: url(./src/img/user.svg)"
        ></div>
        <div class="history_text">
          <span class="user_id">@이든</span>
          <div class="history_content">
            <strong>해야할 일</strong>에 <strong>TIL작성하기</strong>를
            <strong>등록</strong>하였습니다.
          </div>
          <span class="history_time">1분전</span>
        </div>
      </li>
      <li class="history_card">
        <div
          class="user_img"
          style="background-image: url(./src/img/user.svg)"
        ></div>
        <div class="history_text">
          <span class="user_id">@J</span>
          <div class="history_content">
            <strong>해야할 일</strong>에 <strong>HTML/CSS 작성</strong>를
            <strong>등록</strong>하였습니다.
          </div>
          <span class="history_time">1분전</span>
        </div>
      </li>
    </ul>
    <button class="close_btn">
      <img src="./src/img/close.png" alt="close icon" />
    </button>
  </article>
  `;
};

const alertBoxTemplate = ({ title, cancel, accept }) => {
  return `
  <div class="alert_box">
      <p class="alert_message">${title}</p>
      <div class="alert_btn_box">
          <button type="button" class="btn normal_btn">${cancel}</button>
          <button type="button" class="btn accent_btn">${accept}</button>
      </div>
  </div>
  `;
};

const columnBoxTemplate = ({ id = '', title = '', cardCount = '' }) => {
  return /* html */ `
  <section class="todo_column_box" data-columnid="${id}">
    <div class="column_title_box">
      <div class="title_content">
        <h2 class="title">${title}</h2>
        <span class="card_count">${cardCount}</span>
      </div>
      <div class="column_control_btn">
        <button type="button" class="control_btn add">카드등록</button>
        <button type="button" class="control_btn delete">삭제</button>
      </div>
    </div>
    <ul class="card_list">
      <li class="start"></li>
    </ul>
  </section>
  `;
};

const cardReadTemplate = ({ cardId = '', title = '', content = '' }) => {
  return /* html */ `
  <li class="card" data-cardId="${cardId}">
    <div class="card_text">
      <div class="card_title">
        <h3 class="title_text">${title}</h3>
        <input type="text" class="title_input" placeholder="제목을 입력해주세요" value="${title}"/>
      </div>
      <div class="card_content">
        <p class="content_text">${content}</p>
        <textarea class="content_input" placeholder="내용을 입력해주세요" maxlength="500">${content}</textarea>
      </div>
      <span class="card_caption">author by web</span>
    </div>
    <div class="card_btn_box">
      <button type="button" class="btn normal_btn">취소</button>
      <button type="button" class="btn accent_btn" disabled="true">
        등록
      </button>
    </div>
    <button class="delete_btn">삭제버튼</button>
  </li>
  `;
};

const cardWriteTemplate = ({ cardId = '' }) => {
  return /* html */ `
  <li class="card write" data-cardid="${cardId}">
    <div class="card_text">
      <div class="card_title">
        <h3 class="title_text"></h3>
        <input type="text" class="title_input" placeholder="제목을 입력해주세요" value=""/>
      </div>
      <div class="card_content">
        <p class="content_text"></p>
        <textarea class="content_input" placeholder="내용을 입력해주세요" maxlength="500"></textarea>
      </div>
      <span class="card_caption">author by web</span>
    </div>
    <div class="card_btn_box">
      <button type="button" class="btn normal_btn">취소</button>
      <button type="button" class="btn accent_btn" disabled="true">
        등록
      </button>
    </div>
    <button class="delete_btn">삭제버튼</button>
  </li>
  `;
};

export {
  headerTemplate,
  historyTemplate,
  alertBoxTemplate,
  columnBoxTemplate,
  cardReadTemplate,
  cardWriteTemplate,
};
