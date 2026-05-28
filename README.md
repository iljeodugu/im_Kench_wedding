# 장난용 모바일 청첩장 사이트

친구 놀리기용으로 만든 정적 웹사이트 템플릿입니다. HTML/CSS/JS만 사용해서 GitHub Pages에 바로 올릴 수 있습니다.

## 폴더 구조

```txt
.
├── index.html
├── config.js
├── style.css
├── script.js
├── .nojekyll
└── assets/
    ├── favicon.svg
    └── images/
        └── photo-01.png
```

## 로컬에서 확인하기

```bash
cd tamkench-wedding-prank
python3 -m http.server 5500
```

브라우저에서 `http://localhost:5500` 접속하면 됩니다.

## 이름/날짜/문구 바꾸기

`config.js`만 수정하면 됩니다.

```js
couple: {
  leftName: "임석진",
  rightName: "탐켄치",
},

wedding: {
  dateISO: "2027-01-09T14:00:00+09:00",
  dateText: "2027.01.09 토요일 오후 2시",
},
```

## 사진 여러 장 추가하기

1. `assets/images/` 폴더에 사진을 넣습니다.
2. 파일명은 가능하면 영문/숫자로 하세요. 예: `photo-02.jpg`, `photo-03.png`
3. `config.js`의 `photos` 배열에 추가합니다.

```js
photos: [
  {
    src: "./assets/images/photo-01.png",
    alt: "대표 사진",
    title: "운명의 투샷",
    caption: "이 조합, 정말 귀합니다.",
  },
  {
    src: "./assets/images/photo-02.jpg",
    alt: "두 번째 사진",
    title: "첫 만남",
    caption: "그날 이후, 협곡은 달라졌다.",
  },
]
```

## GitHub Pages에 올리기

GitHub에서 새 저장소를 만든 뒤, 아래 명령어를 실행합니다.

```bash
git init
git add .
git commit -m "add prank wedding invite"
git branch -M main
git remote add origin https://github.com/YOUR_ID/YOUR_REPOSITORY.git
git push -u origin main
```

그 다음 GitHub 저장소에서:

1. `Settings` → `Pages`
2. `Build and deployment` → `Source`를 `Deploy from a branch`로 선택
3. Branch는 `main`, Folder는 `/root` 선택
4. 저장 후 몇 분 기다리기

주소는 보통 아래 형태입니다.

```txt
https://YOUR_ID.github.io/YOUR_REPOSITORY/
```

## 주의

공개 사이트에 실제 인물의 사진, 실명, 실제 주소, 전화번호, 계좌번호 등을 올릴 때는 당사자 동의를 받으세요. 친구 놀리기용이면 가짜 장소/가짜 날짜/가짜 문구로 바꾸는 편이 안전합니다.
# im_Kench_wedding
