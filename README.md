# 김이막 공식 홈페이지

HTML·CSS·JavaScript로 만든 모바일 우선 정적 홈페이지입니다. 패키지 설치나 빌드가 필요 없습니다.
로그인, 결제, 데이터베이스, 기록 저장 기능은 포함하지 않습니다.

## 파일 안내
- `index.html`: 홈페이지 문구와 8개 섹션, 검색·공유 기본 제목/설명
- `styles.css`: 색상, 글자 크기, 모바일 배치
- `site-config.js`: 신청, 카카오, SNS, 이메일, 사진 주소 — 가장 자주 수정할 파일
- `script.js`: 설정값을 화면에 연결하는 코드
- `assets/favicon.svg`: 브라우저 탭 아이콘
- `vercel.json`: Vercel 정적 배포 설정
- `preview.cjs`: 내 컴퓨터에서 확인할 때만 사용하는 서버

## 1. 신청·문의 주소 바꾸기
GitHub에서 `site-config.js` → 연필(Edit) → 따옴표 안의 주소를 수정 → Commit changes.
- `sevenDayForm`: 7일 Google Form 주소
- `thirtyDayForm`: 30일 Google Form 주소
- `kakao`: 개인 카카오 오픈채팅 주소
- `instagram`, `youtube`, `brunch`, `email`: SNS와 이메일

신청 주소가 비어 있으면 ‘신청 링크 준비 중’이 보이며 버튼은 문의 섹션으로 이동합니다.
카카오 주소가 비어 있으면 문의 버튼은 이메일 앱을 엽니다. 가짜 신청이나 결제는 발생하지 않습니다.
주소를 채우면 준비 중 문구는 사라지고 새 창으로 해당 주소를 엽니다.

## 2. 사진 넣기
`assets` 폴더에 `profile.jpg`를 올리고 `site-config.js`의 `profileImage`를 `assets/profile.jpg`로 바꾸세요.
사진이 없거나 불러오기에 실패하면 현재의 소개 카드가 보입니다. `profileImageAlt`에는 사진 설명을 적으세요.

## 3. GitHub에서 확인할 것
저장소: https://github.com/kim2mac/suml-wellness
`main` 브랜치에 위 파일이 올라갔는지 확인하세요.
기존 화면은 Git 기록에 남아 있어 이전 커밋에서 확인할 수 있습니다.

## 4. Vercel에서 확인할 것
기존 홈페이지: https://suml-wellness.vercel.app
기존 Vercel 프로젝트가 이 저장소의 `main`과 연결되어 있으면 GitHub 변경 후 자동 배포됩니다.
Vercel → 해당 프로젝트 → Deployments → 최신 배포가 Ready인지 확인 → Visit.

새로 연결해야 한다면:
1. Vercel → Add New → Project → 위 GitHub 저장소 Import
2. Framework Preset: Other
3. Root Directory: 저장소 루트(기본값)
4. Build Command와 Install Command: 비워두기
5. Output Directory: `.`
6. Deploy 클릭
환경 변수나 Supabase 연결은 필요 없습니다.

## 5. 로컬에서 보기
Node.js가 설치되어 있다면 이 폴더에서 아래 명령을 실행하세요.

```sh
node preview.cjs
```

브라우저에서 http://localhost:3000 을 여세요. 종료할 때는 터미널에서 Ctrl+C.
`index.html`을 직접 열어도 기본 화면을 볼 수 있습니다.

## 검색·공유 설정
기본 title, description, Open Graph 제목·설명은 `index.html`에 포함되어 있습니다.
실제 배포 주소를 `site-config.js`의 `siteUrl`에 넣을 수 있습니다.
공유 이미지는 선택 사항이며 `socialImage`에 이미지의 전체 URL을 넣습니다.
JavaScript를 실행하지 않는 공유 서비스에도 주소·이미지를 확실하게 전달하려면
`index.html`의 head에 아래 태그를 실제 주소로 추가하세요. 아래 예시는 그대로 복사하지 마세요.

```html
<link rel="canonical" href="실제 홈페이지 https 주소">
<meta property="og:url" content="실제 홈페이지 https 주소">
<meta property="og:image" content="실제 공유 이미지 https 주소">
```

## 점검
모바일에서 가로 넘침, 7일·30일 이동, 이메일·SNS 링크를 확인하세요.
Google Form과 카카오 주소를 등록한 뒤에는 실제 신청·문의 페이지가 열리는지도 확인하세요.
