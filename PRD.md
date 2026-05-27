# 반응형 웹 디자인 학습용 웹 페이지 PRD

## 1. 개요

본 프로젝트는 반응형 웹 디자인을 학습하기 위한 기본 웹 페이지 템플릿을 구축하는 것을 목표로 한다. 학습자는 참고 HTML의 CSS Grid 예제를 출발점으로 삼아, 헤더, 좌측 내비게이션, 콘텐츠 영역, 푸터로 구성된 전형적인 웹 애플리케이션 레이아웃을 Tailwind CSS 4.0 기반으로 재구성한다. 최종 산출물은 단순한 grid 예제를 shadcn/ui 스타일 체계와 반응형 설계 원칙에 맞게 확장한 학습용 페이지여야 한다.

## 2. 목표

- 반응형 웹 레이아웃의 기본 구조를 명확하게 학습할 수 있는 페이지를 제공한다.
- 참고 HTML의 `header`, `menu`, `content`, `footer` grid 영역 구조를 유지하되 더 현대적인 시맨틱 HTML 구조로 개선한다.
- Tailwind CSS 4.0 유틸리티 클래스를 중심으로 스타일링 구조를 구성한다.
- shadcn/ui의 디자인 토큰, 컴포넌트 스타일, 접근성 관례를 참고해 일관된 UI 체계를 만든다.
- 커스텀 CSS는 Tailwind 설정 및 전역 토큰을 보완하는 용도로 분리 관리한다.
- 데스크톱, 태블릿, 모바일 화면에서 레이아웃이 자연스럽게 재배치되도록 한다.

## 3. 대상 사용자

- HTML/CSS 기초를 학습한 입문자
- Tailwind CSS 기반 반응형 레이아웃을 실습하려는 학습자
- 웹 애플리케이션의 기본 화면 구조를 빠르게 이해하고 싶은 사용자

## 4. 핵심 요구사항

### 4.1 레이아웃 구조

웹 페이지는 참고 HTML의 CSS Grid 구조를 기반으로 다음 영역을 포함한다.

- Header: 상단 고정 또는 일반 흐름의 헤더 영역
- Body: 본문 전체 영역
- Left Navigation Bar: 본문 내부의 좌측 사이드바 메뉴
- Content Area: 본문 내부의 주요 콘텐츠 영역
- Footer: 하단 푸터 영역

데스크톱 화면에서는 참고 HTML의 다음 grid 개념을 유지한다.

```text
header  header
menu    content
footer  footer
```

Tailwind CSS 4.0 구현에서는 이를 `grid`, `grid-cols-*`, `col-span-*`, `md:grid-cols-*` 또는 필요한 경우 커스텀 CSS의 grid-template-area 보조 클래스로 표현한다.

데스크톱 화면에서는 좌측 사이드바와 콘텐츠 영역이 가로로 배치된다. 참고 HTML의 `grid-template-columns: 1fr 3fr` 비율은 기본 개념으로 유지하되, 실제 구현에서는 사이드바 가독성을 위해 고정 폭 또는 `md:grid-cols-[240px_1fr]` 같은 명시적 컬럼 구성을 우선 검토한다.

모바일 화면에서는 사이드바가 상단 메뉴, 접이식 메뉴, 또는 숨김 메뉴 형태로 전환될 수 있어야 한다.

### 4.2 스타일링 기준

- 기본 스타일은 Tailwind CSS 4.0 클래스를 사용한다.
- 색상은 전체적으로 차분한 쿨톤을 사용한다.
- 포인트 컬러는 채도가 낮은 1개 또는 2개로 제한한다.
- shadcn/ui에서 사용하는 CSS 변수 기반 색상 토큰 방식을 따른다.
- 별도의 커스텀 CSS 파일을 생성하여 전역 변수, 기본 스타일, 필요한 보완 스타일을 관리한다.

### 4.3 참고 HTML 반영

참고 문서: `/Users/kimgyeongsu/Documents/responsive_examples/layout.html`

참고 HTML은 다음 구조와 의도를 가진다.

- 문서 상단에 `CSS Grid Layout` 제목과 grid 설명 문단이 있다.
- `.container`는 CSS Grid로 구성되어 있다.
- grid 영역은 `header`, `menu`, `content`, `footer` 네 부분이다.
- 데스크톱 레이아웃은 `header header`, `menu content`, `footer footer` 구조이다.
- 좌측 `menu`에는 `Link 1`, `Link 2`, `Link 3` 링크가 세로로 배치되어 있다.
- `content`에는 `Lorem Ipsum` 제목과 본문 문단이 있다.
- 기존 예제는 `dodgerblue` 배경, 흰색 영역, 3px gap, 5px padding을 사용한다.

구현 시 반영 기준:

- 기존 예제의 정보 구조와 학습 흐름은 유지한다.
- `div.header`, `div.menu`, `div.content`, `div.footer`는 각각 `header`, `nav`, `main`, `footer` 시맨틱 태그로 개선한다.
- `Link 1`, `Link 2`, `Link 3`는 학습용 내비게이션 메뉴로 확장하되, 초기 구현에서는 원문의 단순한 링크 구조를 알아볼 수 있게 유지한다.
- `CSS Grid Layout` 설명 문단은 콘텐츠 영역의 소개 섹션 또는 페이지 상단 학습 설명으로 이동한다.
- `dodgerblue`와 순백색 중심의 원색 대비는 사용하지 않고, 낮은 채도의 쿨톤 토큰으로 대체한다.
- 참고 HTML의 인라인 `<style>` 내용은 직접 유지하지 않는다. Tailwind CSS 4.0 클래스와 별도 커스텀 CSS 파일로 재구성한다.
- `<br>`로 메뉴 간격을 만드는 방식은 사용하지 않는다. `flex`, `grid`, `gap-*`, `space-y-*` 유틸리티로 간격을 제어한다.

### 4.4 원본 CSS 변환 방향

참고 HTML의 주요 CSS는 다음 방식으로 변환한다.

| 원본 CSS | 변환 방향 |
| --- | --- |
| `box-sizing: border-box` | 전역 CSS의 기본 리셋 또는 Tailwind preflight 사용 |
| `display: grid` | Tailwind `grid` 클래스 사용 |
| `grid-template-areas` | Tailwind grid column/span 조합 또는 커스텀 area 클래스 사용 |
| `grid-template-columns: 1fr 3fr` | `md:grid-cols-[minmax(220px,1fr)_3fr]` 또는 `md:grid-cols-[260px_1fr]` |
| `gap: 3px` | `gap-px`, `gap-1`, 또는 디자인 토큰에 맞는 `gap-4` |
| `background-color: dodgerblue` | 낮은 채도의 `primary` 또는 `border` 토큰 |
| `background-color: white` | `bg-card` 또는 `bg-background` |
| `padding: 10px` | Tailwind `p-4`, `px-4`, `py-3` |
| `text-align: center` | `text-center` |

## 5. 화면 구성

### 5.1 Header

Header는 참고 HTML의 `<div class="header"><h2>My Header</h2></div>`를 확장한 사이트 최상단 영역이다.

필수 요소:

- 사이트 제목 또는 로고 텍스트. 예: `Responsive Layout Lab`
- 현재 페이지 또는 학습 주제를 나타내는 보조 텍스트. 예: `CSS Grid Layout`
- 모바일 메뉴 버튼
- 선택 사항: 테마 토글, GitHub 링크, 문서 링크

스타일 방향:

- 높이는 약 56px에서 72px 범위로 설정한다.
- 배경은 `background` 또는 `card` 토큰을 사용한다.
- 하단 경계선은 낮은 대비의 `border` 토큰을 사용한다.
- 텍스트는 명확한 계층을 가지되 과하게 장식하지 않는다.

### 5.2 Left Navigation Bar

Left Navigation Bar는 참고 HTML의 `<div class="menu">` 영역을 개선한 본문 좌측 학습 메뉴 영역이다.

필수 요소:

- 섹션 제목
- 메뉴 목록
- 현재 선택된 메뉴 상태
- 호버 및 포커스 상태

예시 메뉴:

- Link 1: Layout Basics
- Link 2: Responsive Grid
- Link 3: Breakpoints
- 추가 메뉴: Typography
- 추가 메뉴: Components
- 추가 메뉴: Practice

스타일 방향:

- 데스크톱에서는 고정 폭을 가진다. 권장 폭은 `240px`에서 `280px` 사이이다.
- 콘텐츠보다 시각적으로 약하지만, 구조는 명확해야 한다.
- 선택된 메뉴는 낮은 채도의 포인트 컬러 배경 또는 좌측 강조선으로 표현한다.

### 5.3 Content Area

Content Area는 참고 HTML의 `<div class="content">` 영역을 확장한 주요 학습 콘텐츠 영역이다.

필수 요소:

- 페이지 제목. 예: `CSS Grid Layout`
- 설명 텍스트. 참고 HTML의 grid 설명 문단을 기반으로 한다.
- 예제 제목. 예: `Lorem Ipsum` 또는 실제 학습 주제명
- 예제 카드 또는 섹션
- 반응형 실습용 콘텐츠 블록

스타일 방향:

- 콘텐츠 최대 너비를 제한해 긴 문장이 과도하게 늘어나지 않게 한다.
- 카드형 요소는 shadcn/ui의 `Card` 스타일을 참고하되, 중첩 카드는 사용하지 않는다.
- 제목, 본문, 보조 텍스트의 크기와 색상을 명확히 구분한다.

### 5.4 Footer

Footer는 참고 HTML의 `<div class="footer"><h4>Footer</h4></div>`를 확장한 페이지 하단 보조 정보 영역이다.

필수 요소:

- 저작권 또는 프로젝트명
- 학습용 템플릿임을 나타내는 간단한 문구
- 선택 사항: 문서 링크, 저장소 링크

스타일 방향:

- Header와 비슷한 톤의 경계선과 배경을 사용한다.
- 콘텐츠보다 시각적 우선순위가 낮아야 한다.

## 6. 반응형 동작

### 6.1 Desktop

기준: `lg` 이상

- Header는 전체 너비를 차지한다.
- Body는 좌측 사이드바와 콘텐츠 영역의 2열 레이아웃을 가진다.
- 참고 HTML의 `1fr 3fr` 비율을 학습 자료로 설명하되, 실제 UI에서는 사이드바 폭이 너무 넓거나 좁아지지 않도록 `minmax()` 또는 고정 폭을 사용할 수 있다.
- Sidebar는 고정 폭을 가지고, Content Area는 남은 공간을 채운다.
- Footer는 전체 너비를 차지한다.

### 6.2 Tablet

기준: `md` 이상, `lg` 미만

- Sidebar 폭을 줄이거나 메뉴 텍스트 간격을 축소한다.
- 콘텐츠 영역은 여전히 주요 영역으로 유지한다.
- 필요 시 사이드바는 상단 수평 메뉴로 전환 가능하다.

### 6.3 Mobile

기준: `md` 미만

- Body는 단일 컬럼으로 배치한다.
- Sidebar는 숨김 처리하거나 토글 가능한 메뉴로 제공한다.
- Header에는 메뉴 버튼을 노출한다.
- 콘텐츠는 화면 너비에 맞게 패딩과 간격을 줄인다.

## 7. 디자인 시스템

### 7.1 컬러 방향

전체 팔레트는 차분한 쿨톤을 사용한다.

권장 색상 토큰:

- Background: 차가운 회백색 계열
- Foreground: 낮은 채도의 짙은 청회색
- Muted: 연한 청회색
- Border: 낮은 대비의 회청색
- Primary: 낮은 채도의 블루 또는 틸
- Accent: 낮은 채도의 슬레이트 블루 또는 세이지 틸

예시 CSS 변수:

```css
:root {
  --background: oklch(0.985 0.006 240);
  --foreground: oklch(0.245 0.025 245);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.245 0.025 245);
  --muted: oklch(0.94 0.012 240);
  --muted-foreground: oklch(0.47 0.025 245);
  --border: oklch(0.88 0.014 240);
  --primary: oklch(0.48 0.07 225);
  --primary-foreground: oklch(0.985 0.006 240);
  --accent: oklch(0.9 0.035 190);
  --accent-foreground: oklch(0.27 0.04 210);
}
```

### 7.2 타이포그래피

- 기본 폰트는 시스템 sans-serif를 사용한다.
- 큰 제목은 페이지의 핵심 콘텐츠에서만 사용한다.
- 내비게이션과 버튼 텍스트는 작고 명확하게 유지한다.
- 글자 간격은 기본값을 유지한다.

### 7.3 간격과 라운딩

- 기본 spacing은 Tailwind의 `4`, `6`, `8` 단위를 중심으로 사용한다.
- 카드 및 패널의 border radius는 `rounded-lg` 이하를 권장한다.
- 주요 레이아웃 간격은 모바일에서 줄이고 데스크톱에서 넓힌다.

## 8. 기술 요구사항

### 8.1 필수 기술

- HTML5
- Tailwind CSS 4.0
- shadcn/ui 스타일 체계
- 별도 커스텀 CSS 파일

### 8.2 권장 파일 구조

정적 HTML 기반 구현 시:

```text
/
├── index.html
├── src/
│   └── styles.css
└── PRD.md
```

정적 HTML 구현에서는 `index.html`에 시맨틱 구조를 작성하고, `src/styles.css`에서 Tailwind CSS 4.0 import, shadcn/ui 호환 토큰, 필요한 grid area 보조 클래스를 관리한다.

프론트엔드 프레임워크 기반 구현 시:

```text
/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   └── styles/
│       └── globals.css
├── components.json
└── PRD.md
```

## 9. 접근성 요구사항

- Header, Navigation, Main, Footer에 시맨틱 태그를 사용한다.
- 내비게이션 메뉴는 키보드로 접근 가능해야 한다.
- 모바일 메뉴 버튼에는 명확한 `aria-label`을 제공한다.
- 현재 활성 메뉴는 `aria-current="page"` 또는 동등한 접근성 표시를 사용한다.
- 텍스트와 배경의 명도 대비는 WCAG AA 수준을 목표로 한다.
- 포커스 상태는 시각적으로 확인 가능해야 한다.

## 10. 구현 가이드

### 10.1 Tailwind 클래스 사용 예시

```html
<div class="min-h-screen bg-background text-foreground">
  <header class="border-b bg-card px-4 py-3 md:px-6">
    ...
  </header>
  <div class="mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-[260px_1fr]">
    <nav class="border-b bg-card/60 p-4 md:border-b-0 md:border-r" aria-label="Primary navigation">
      ...
    </nav>
    <main class="flex-1 p-4 md:p-8">
      ...
    </main>
  </div>
  <footer class="border-t bg-card px-4 py-3 md:px-6">
    ...
  </footer>
</div>
```

### 10.2 커스텀 CSS 역할

커스텀 CSS 파일은 다음 역할로 제한한다.

- Tailwind CSS 4.0 import
- shadcn/ui 호환 CSS 변수 선언
- 전역 기본 스타일
- 접근성 포커스 스타일 보완
- 참고 HTML에서 반드시 유지해야 하는 특수 스타일

## 11. 비기능 요구사항

- 레이아웃은 학습자가 구조를 쉽게 파악할 수 있어야 한다.
- 스타일은 과도한 장식보다 명확한 정보 구조를 우선한다.
- 클래스 이름과 파일 구조는 이후 실습에서 확장하기 쉬워야 한다.
- 모바일에서 가로 스크롤이 발생하지 않아야 한다.
- 모든 텍스트는 컨테이너 안에서 자연스럽게 줄바꿈되어야 한다.

## 12. 완료 기준

다음 조건을 만족하면 1차 구현을 완료한 것으로 본다.

- Header, Sidebar, Content Area, Footer가 모두 구현되어 있다.
- 참고 HTML의 `header header / menu content / footer footer` grid 구조가 현대적인 시맨틱 구조로 반영되어 있다.
- 데스크톱에서 Sidebar와 Content Area가 2열로 배치된다.
- 모바일에서 레이아웃이 단일 컬럼 또는 토글 메뉴 구조로 정상 전환된다.
- Tailwind CSS 4.0 클래스가 주된 스타일링 수단으로 사용된다.
- shadcn/ui와 호환 가능한 CSS 변수 기반 색상 토큰이 적용되어 있다.
- 커스텀 CSS 파일이 별도로 존재한다.
- 낮은 채도의 쿨톤 팔레트가 적용되어 있다.
- 접근성 기본 요구사항이 충족되어 있다.

## 13. 향후 확장

- 다크 모드 지원
- 사이드바 접기 기능
- 학습 단계별 콘텐츠 페이지 추가
- 반응형 breakpoint 시각화 컴포넌트 추가
- shadcn/ui 컴포넌트 기반 버튼, 카드, 탭, 토글 예제 추가
- 참고 HTML 기반 콘텐츠 마이그레이션
