const LANGUAGE_STORAGE_KEY = "vvyra-language";
const STATEMENT_BANNER_STORAGE_KEY = "vvyra-statement-dismissed";
const LANGUAGE_LABELS = Object.freeze({
  ko: "KOR",
  en: "ENG",
  ja: "JPN",
  zh: "CHN",
});
const SUPPORTED_LANGUAGES = Object.freeze(["ko", "en", "ja", "zh"]);
const TRANSLATIONS = Object.freeze({
  en: Object.freeze({
    "nav.profile": "PROFILE",
    "nav.discography": "DISCOGRAPHY",
    "nav.videos": "VIDEOS",
    "nav.shop": "SHOP",
    "nav.live": "LIVE",
    "statement.ceo": "READ THE STATEMENT FROM CEO MING PARK-JEONG",
    "home.title": "VVYRA WORLD",
    "home.body": "THE DEBUT SINGLE",
    "home.primary": "PRESAVE NOW",
    "home.secondary": "WATCH THE TEASER",
    "home.profileMeta": "ARTIST INFORMATION",
    "home.discographyMeta": "RELEASE ARCHIVE",
    "home.videosMeta": "VISUAL CATALOG",
    "profile.title": "PROFILE",
    "profile.body": "VVYRA is a five-member girl group under SOS CORPORATION, composed of TOMINA, ARI, LOLA, KIRI, and QUEESHA, who is of deep African-American heritage. Driven by a distinctive vision, the group makes its ambitions clear from the very beginning, boldly declaring their determination to rise to the very top. Their name embodies their unwavering self-belief and iron will as they step fearlessly onto the world stage, remaining composed and unshaken. VVYRA represents the unbreakable poise, strength, and conviction that will carry them toward success.",
    "discography.title": "DISCOGRAPHY",
    "discography.singles": "SINGLES",
    "discography.naegaDate": "RELEASE DATE JULY 3RD 2026",
    "discography.presave": "PRESAVE",
    "videos.title": "VIDEOS",
    "videos.body": "COMING SOON",
    "terms.title": "TERMS OF SERVICE",
    "terms.body": "THIS TERMS OF SERVICE TEMPLATE IS PROVIDED AS A FOUNDATION FOR SOS CORPORATION. REPLACE THIS COPY WITH FINAL LEGAL LANGUAGE BEFORE PUBLIC LAUNCH.",
    "terms.sectionOne": "USE OF THIS WEBSITE MAY BE SUBJECT TO ACCESS RULES, CONTENT RIGHTS, MERCHANDISE PARTNER TERMS, LIVE EVENT PARTNER TERMS, AND APPLICABLE LAW.",
    "terms.sectionTwo": "ALL BRAND NAMES, RELEASE TITLES, IMAGES, VIDEOS, AND RELATED MATERIALS SHOULD BE USED ONLY WITH PROPER AUTHORIZATION.",
    "privacy.title": "PRIVACY POLICY",
    "privacy.body": "THIS PRIVACY POLICY TEMPLATE IS PROVIDED AS A FOUNDATION FOR SOS CORPORATION. REPLACE THIS COPY WITH FINAL PRIVACY LANGUAGE BEFORE PUBLIC LAUNCH.",
    "privacy.sectionOne": "THE FINAL POLICY SHOULD DESCRIBE WHAT DATA IS COLLECTED, HOW IT IS USED, HOW LONG IT IS KEPT, AND HOW VISITORS CAN CONTACT THE COMPANY.",
    "privacy.sectionTwo": "THIRD-PARTY SERVICES SUCH AS MERCHANDISE STORES, TICKETING PLATFORMS, EMBEDDED VIDEOS, OR ANALYTICS MAY HAVE THEIR OWN PRIVACY TERMS.",
    "footer.copyright": "\u00A9 SOS CORPORATION. ALL RIGHTS RESERVED",
    "footer.terms": "TERMS OF SERVICE",
    "footer.privacy": "PRIVACY POLICY",
  }),
  ko: Object.freeze({
    "nav.profile": "프로필",
    "nav.discography": "디스코그래피",
    "nav.videos": "비디오",
    "nav.shop": "샵",
    "nav.live": "라이브",
    "statement.ceo": "CEO MING PARK-JEONG 성명 읽기",
    "home.title": "VVYRA WORLD",
    "home.body": "데뷔 싱글",
    "home.primary": "지금 프리세이브",
    "home.secondary": "티저 보기",
    "home.profileMeta": "아티스트 정보",
    "home.discographyMeta": "릴리스 아카이브",
    "home.videosMeta": "비주얼 카탈로그",
    "profile.title": "프로필",
    "profile.body": "VVYRA는 SOS CORPORATION 소속의 5인조 걸그룹으로 TOMINA, ARI, LOLA, KIRI, 그리고 깊은 아프리카계 미국인 유산을 지닌 QUEESHA로 구성되어 있습니다. 독보적인 비전을 바탕으로 그룹은 시작부터 정상에 오르겠다는 결의를 대담하게 드러냅니다. 그 이름은 세계 무대에 두려움 없이 나아가면서도 흔들리지 않는 자기 확신과 강철 같은 의지를 담고 있습니다. VVYRA는 성공으로 이끌 단단한 품위, 힘, 신념을 상징합니다.",
    "discography.title": "디스코그래피",
    "discography.singles": "싱글",
    "discography.naegaDate": "발매일 2026년 7월 3일",
    "discography.presave": "프리세이브",
    "videos.title": "비디오",
    "videos.body": "곧 공개",
    "terms.title": "서비스 약관",
    "terms.body": "이 서비스 약관 템플릿은 SOS CORPORATION을 위한 기반입니다. 공개 전 최종 법률 문구로 교체하세요.",
    "terms.sectionOne": "이 웹사이트의 이용에는 접근 규칙, 콘텐츠 권리, 상품 파트너 약관, 라이브 이벤트 파트너 약관 및 관련 법률이 적용될 수 있습니다.",
    "terms.sectionTwo": "모든 브랜드명, 릴리스 제목, 이미지, 비디오 및 관련 자료는 적절한 권한이 있을 때만 사용해야 합니다.",
    "privacy.title": "개인정보 처리방침",
    "privacy.body": "이 개인정보 처리방침 템플릿은 SOS CORPORATION을 위한 기반입니다. 공개 전 최종 개인정보 문구로 교체하세요.",
    "privacy.sectionOne": "최종 정책에는 수집되는 데이터, 사용 방식, 보관 기간, 방문자가 회사에 연락하는 방법이 포함되어야 합니다.",
    "privacy.sectionTwo": "상품 스토어, 티켓팅 플랫폼, 임베드 비디오 또는 분석과 같은 제3자 서비스에는 별도의 개인정보 약관이 있을 수 있습니다.",
    "footer.copyright": "\u00A9 SOS CORPORATION. ALL RIGHTS RESERVED",
    "footer.terms": "서비스 약관",
    "footer.privacy": "개인정보 처리방침",
  }),
  ja: Object.freeze({
    "nav.profile": "プロフィール",
    "nav.discography": "ディスコグラフィー",
    "nav.videos": "ビデオ",
    "nav.shop": "ショップ",
    "nav.live": "ライブ",
    "statement.ceo": "CEO MING PARK-JEONG の声明を読む",
    "home.title": "VVYRA WORLD",
    "home.body": "デビューシングル",
    "home.primary": "今すぐプリセーブ",
    "home.secondary": "ティザーを見る",
    "home.profileMeta": "アーティスト情報",
    "home.discographyMeta": "リリースアーカイブ",
    "home.videosMeta": "ビジュアルカタログ",
    "profile.title": "プロフィール",
    "profile.body": "VVYRAはSOS CORPORATION所属の5人組ガールグループで、TOMINA、ARI、LOLA、KIRI、そして深いアフリカ系アメリカ人のルーツを持つQUEESHAで構成されています。独自のビジョンに突き動かされ、グループは最初から頂点を目指す決意を明確に示します。その名前には、世界の舞台へ恐れず踏み出しながらも揺るがない自己信念と鉄の意志が込められています。VVYRAは成功へ導く不屈の品格、強さ、信念を表しています。",
    "discography.title": "ディスコグラフィー",
    "discography.singles": "シングル",
    "discography.naegaDate": "発売日 2026年7月3日",
    "discography.presave": "プリセーブ",
    "videos.title": "ビデオ",
    "videos.body": "近日公開",
    "terms.title": "利用規約",
    "terms.body": "この利用規約テンプレートはSOS CORPORATIONの基盤として用意されています。公開前に最終的な法務文言へ差し替えてください。",
    "terms.sectionOne": "本ウェブサイトの利用には、アクセス規則、コンテンツ権利、マーチャンダイズ提携条件、ライブイベント提携条件、および適用法が関係する場合があります。",
    "terms.sectionTwo": "すべてのブランド名、リリースタイトル、画像、ビデオ、関連資料は、適切な許諾のもとでのみ使用してください。",
    "privacy.title": "プライバシーポリシー",
    "privacy.body": "このプライバシーポリシーテンプレートはSOS CORPORATIONの基盤として用意されています。公開前に最終的なプライバシー文言へ差し替えてください。",
    "privacy.sectionOne": "最終ポリシーには、収集するデータ、利用方法、保管期間、訪問者の連絡方法を記載する必要があります。",
    "privacy.sectionTwo": "マーチャンダイズストア、チケット販売プラットフォーム、埋め込みビデオ、分析などの第三者サービスには独自のプライバシー条件がある場合があります。",
    "footer.copyright": "\u00A9 SOS CORPORATION. ALL RIGHTS RESERVED",
    "footer.terms": "利用規約",
    "footer.privacy": "プライバシーポリシー",
  }),
  zh: Object.freeze({
    "nav.profile": "档案",
    "nav.discography": "音乐作品",
    "nav.videos": "视频",
    "nav.shop": "商店",
    "nav.live": "现场",
    "statement.ceo": "阅读 CEO MING PARK-JEONG 的声明",
    "home.title": "VVYRA WORLD",
    "home.body": "出道单曲",
    "home.primary": "立即预存",
    "home.secondary": "观看预告",
    "home.profileMeta": "艺人信息",
    "home.discographyMeta": "发行档案",
    "home.videosMeta": "视觉目录",
    "profile.title": "档案",
    "profile.body": "VVYRA 是 SOS CORPORATION 旗下的五人女子组合，由 TOMINA、ARI、LOLA、KIRI，以及拥有深厚非裔美国传统的 QUEESHA 组成。凭借鲜明的愿景，组合从一开始就清楚表达登上顶峰的决心。她们的名字象征着坚定的自我信念与钢铁般的意志，代表她们无畏走向世界舞台时依然从容不迫、毫不动摇。VVYRA 代表将带领她们走向成功的不可动摇的姿态、力量与信念。",
    "discography.title": "音乐作品",
    "discography.singles": "单曲",
    "discography.naegaDate": "发行日期 2026年7月3日",
    "discography.presave": "预存",
    "videos.title": "视频",
    "videos.body": "即将推出",
    "terms.title": "服务条款",
    "terms.body": "此服务条款模板作为 SOS CORPORATION 的基础。公开发布前请替换为最终法律文本。",
    "terms.sectionOne": "使用本网站可能受访问规则、内容权利、商品合作方条款、现场活动合作方条款及适用法律约束。",
    "terms.sectionTwo": "所有品牌名称、发行标题、图片、视频及相关资料都应仅在获得适当授权后使用。",
    "privacy.title": "隐私政策",
    "privacy.body": "此隐私政策模板作为 SOS CORPORATION 的基础。公开发布前请替换为最终隐私文本。",
    "privacy.sectionOne": "最终政策应说明收集哪些数据、如何使用、保留多久，以及访问者如何联系公司。",
    "privacy.sectionTwo": "商品商店、票务平台、嵌入视频或分析等第三方服务可能拥有各自的隐私条款。",
    "footer.copyright": "\u00A9 SOS CORPORATION. ALL RIGHTS RESERVED",
    "footer.terms": "服务条款",
    "footer.privacy": "隐私政策",
  }),
});

function GetStoredLanguage() {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage;
  }

  const detectedLanguage = navigator.language.slice(0, 2).toLowerCase();

  if (SUPPORTED_LANGUAGES.includes(detectedLanguage)) {
    return detectedLanguage;
  }

  return "en";
}

function SetLanguage(language) {
  const activeLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  const translation = TRANSLATIONS[activeLanguage];
  const fallbackTranslation = TRANSLATIONS.en;
  const translatableElements = document.querySelectorAll("[data-i18n]");

  document.documentElement.lang = activeLanguage;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);

  for (const element of translatableElements) {
    const key = element.getAttribute("data-i18n");

    if (key) {
      element.textContent = translation[key] || fallbackTranslation[key] || element.textContent;
    }
  }

  const languageToggle = document.querySelector("[data-language-toggle]");

  if (languageToggle) {
    languageToggle.textContent = LANGUAGE_LABELS[activeLanguage];
  }

  const languageButtons = document.querySelectorAll("[data-language]");

  for (const languageButton of languageButtons) {
    languageButton.setAttribute("aria-current", String(languageButton.getAttribute("data-language") === activeLanguage));
  }
}

function SetActiveNavigation() {
  const currentPage = document.body.getAttribute("data-page");

  if (!currentPage) {
    return;
  }

  const activeLink = document.querySelector(`[data-nav-page="${currentPage}"]`);

  if (activeLink) {
    activeLink.setAttribute("aria-current", "page");
  }
}

function BindLanguageSelector() {
  const languageSelector = document.querySelector(".languageSelector");
  const languageToggle = document.querySelector("[data-language-toggle]");
  const languageButtons = document.querySelectorAll("[data-language]");

  if (!languageSelector || !languageToggle) {
    return;
  }

  languageToggle.addEventListener("click", () => {
    const isOpen = languageSelector.classList.toggle("isOpen");
    languageToggle.setAttribute("aria-expanded", String(isOpen));
  });

  for (const languageButton of languageButtons) {
    languageButton.addEventListener("click", () => {
      const language = languageButton.getAttribute("data-language") || "en";
      SetLanguage(language);
      languageSelector.classList.remove("isOpen");
      languageToggle.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target instanceof Node && !languageSelector.contains(event.target)) {
      languageSelector.classList.remove("isOpen");
      languageToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      languageSelector.classList.remove("isOpen");
      languageToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function BindMobileMenu() {
  const siteHeader = document.querySelector("[data-site-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");

  if (!siteHeader || !menuToggle) {
    return;
  }

  const CloseMenu = () => {
    siteHeader.classList.remove("isMenuOpen");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "OPEN MENU");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("isMenuOpen");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "CLOSE MENU" : "OPEN MENU");
  });

  document.addEventListener("click", (event) => {
    if (event.target instanceof Node && !siteHeader.contains(event.target)) {
      CloseMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      CloseMenu();
    }
  });
}

function BindHeroVideo() {
  const heroVideo = document.querySelector(".heroVideo");

  if (!(heroVideo instanceof HTMLVideoElement)) {
    return;
  }

  heroVideo.muted = true;
  heroVideo.playsInline = true;

  const PlayHeroVideo = () => {
    const playPromise = heroVideo.play();

    if (playPromise) {
      playPromise.catch(() => {});
    }
  };

  if (heroVideo.readyState >= 2) {
    PlayHeroVideo();
  } else {
    heroVideo.addEventListener("loadeddata", PlayHeroVideo, { once: true });
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      PlayHeroVideo();
    }
  });
}

function BindStatementBanner() {
  const statementBanner = document.querySelector("[data-statement-banner]");
  const statementDismiss = document.querySelector("[data-statement-dismiss]");

  if (!statementBanner || !statementDismiss) {
    return;
  }

  if (window.localStorage.getItem(STATEMENT_BANNER_STORAGE_KEY) === "true") {
    statementBanner.classList.add("isDismissed");
  }

  statementDismiss.addEventListener("click", () => {
    window.localStorage.setItem(STATEMENT_BANNER_STORAGE_KEY, "true");
    statementBanner.classList.add("isDismissed");
  });
}

SetLanguage(GetStoredLanguage());
SetActiveNavigation();
BindLanguageSelector();
BindMobileMenu();
BindHeroVideo();
BindStatementBanner();
