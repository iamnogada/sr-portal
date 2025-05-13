# sr-portal
Service reqeust portal using fastapi and htmx



## Prompt
### 환경 설정(터미날)
- 파이썬 가상환경을 .venv이름으로 현재 프로젝트에 만들어줘고 활성화 시켜줘
  ``` sh
    python3 -m venv .venv && source .venv/bin/activate
  ```
- tailwindcss 기반으로 html& css 을 생성하기 위한 npm 프로젝트 구성 만들어줘
  ``` sh
    npm init -y && npm install tailwindcss postcss autoprefixer && npx tailwindcss init -p
  ```

### backend 개발
FastAPI 기반으로 웹을을 개발하려고 함.
기본적인 기술구조는 htmx기반으로 UI를 개발하려고 함
각각의 라우팅은 페이지 단위로 app이라는 디렉토리에서 서비스 예정이고,
header, profile, footer, 메뉴 등 공통 기능은 common이라는 리덱토리에서 서비스 제공
그리고, 각각의 url요청에 따른 템플릿을 동적으로 지정하기 위한 middleware는 core라는 디렉토리에서 서비스 제공
middlware에서는 각각의 페이지 htmx처리에 필요한 기능으로 페이지 전체를 요청하는 서비스와 htmx에 의해 페이지의 부분로딩을 요청하는 것을 htmx용 header값으로 구분하여 처리해야함
이를 위한 디렉토리 구조와 기본적인 코드 샘플을 생성해줘

### launch.json을 만들어줘

### UI 개발
- tailwindcss 기반 html생성하기 위한 디렉토리 구조를 만들어줘