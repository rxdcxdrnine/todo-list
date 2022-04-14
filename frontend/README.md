# team-17 프론트엔드

멤버 : `이든`, `J`  
기술 스택 : webpack, Babel, Javascript

## 프로젝트 실행

```
// 프론트엔드 작업 폴더 이동
cd frontend

// npm 사용한 모듈 install
npm install

// webpack-dev-server 실행
npm start
```

## 협업과정

- live share를 이용하여 html, css를 페어로 작업.
- 기능 분업시 fontend 기준으로 브랜치 생성 후 작업 -> frontend브랜치로 PR
- 이슈, 프로젝트, 마일스톤을 이용하여 프로젝트 관리.

## 고민한 사항

- webpack dev server를 띄우는 과정에서 `Cannot GET /`라는 오류가 발생하였다.  
  dev server에 대한 설정은 해주었지만 html을 연결하는 과정이 잘못되었다고 생각해서  
  `HtmlWebpackPlugin`의 `template`키를 이용하여 적용될 html경로를 설정하여 해결하였다.

- scss color 변수를 지정할 때 `$highlight-color`와 `$blue-color` 중에 어떤 것으로 하는게 좋을지 고민하였다.  
  포인트 color가 변경될 경우를 생각하면 `$highlight-color`로 하는게 좋을 것 같았지만,  
  좀 더 명시적으로 color를 알기위해 `$blue-color`와 같이 네이밍하는 것으로 정하였다.

- html, css 먼저 vs 대략적인 레이아웃, 기능 후 css

  1. 미리 하드코딩으로 html, css 작업 후 js 작업 할 때 템플릿 리터럴로 가져가서 컴포넌트화 하기.
  2. 처음부터 html body안에 비워둔 채로 js로 컴포넌트 분리 하여서 작업하고 css하기.

  결론 : 2번은 컴포넌트를 먼저 고민하려는 시도였지만 js에서는 처음부터 템플릿으로 작업하는것이 수월하지 않을 것 같아서  
  figma를 보며 재사용될 컴포넌트만 미리 파악하며 1번으로 진행하기로 하였다.
