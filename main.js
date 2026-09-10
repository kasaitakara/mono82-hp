const THEMES = Object.freeze([
  "theme-mono82",
  "theme-sprooto",
  "theme-kasai",
  "theme-mei",
  "theme-ryuichi",
  "theme-aya",
  "theme-tobokegao",
  "theme-hachi",
  "theme-electro",
  "theme-game"
]);

const STORAGE_THEME = "mono82-site-theme";
const STORAGE_LANGUAGE = "mono82-site-language";

const translations = {
  en: {
    hero: "2 tracks, 32 steps.<br>a minimal sequencer with FM synthesis.",
    demo_note: "demo audio coming soon.",
    news_beta: "beta version available",
    try_beta: "try beta",
    beta_status: "iPhone / PWA: tested<br>Android: not yet tested",
    contact_note: "contact address coming soon.",

    features_intro: "mono82 specifications.",
    spec_structure: "2 tracks<br>8 sounds: Melodic 1–4 / Rhythm a–d<br>max. 2 sounds per step",
    spec_sequencer: "32 steps<br>32 patterns<br>pattern length: 1–32 steps<br>pattern repeat<br>step shift<br>randomize<br>mute / solo",
    spec_song: "pattern arrangement<br>pattern repeat<br>single pattern loop / range loop<br>master reverb<br>swing",
    spec_melodic: "FM synthesis<br>level<br>attack<br>hold / decay<br>filter<br>resonance<br>FM depth / ratio<br>2 LFOs",
    spec_rhythm: "sine oscillator + noise mix<br>note<br>level<br>attack<br>hold / decay<br>filter<br>resonance<br>2 LFOs",
    spec_step: "Melodic: Level / Note / Chord / Pan / Nudge / Probability / Substep / Strum<br>Rhythm: Level / Note / Pan / Nudge / Probability / Substep / Substep Probability",
    spec_preset: "factory sound presets<br>user sound presets",
    spec_project: "new / load / save / save as<br>project import / export<br>audio export<br>song export",
    spec_system: "PWA<br>English / Japanese<br>iPhone: tested<br>Android: not yet tested",

    manual_intro: "basic mono82 operation guide.",
    manual_overview: "mono82 has two Sound Banks: Melodic 1–4 and Rhythm a–d. each step can contain one sound from each bank, for a maximum of two sounds on the same step.",
    manual_sequence: "tap a step to place or remove the selected sound. melodic sounds appear as the upper horizontal mark and rhythm sounds as the lower-left square. pattern length can be set from 1 to 32 steps. shortening a pattern does not delete the hidden step data.",
    manual_pattern: "create up to 32 patterns and arrange them in Song mode. patterns can be looped individually or as a selected range. copy a selected range and paste it anywhere you choose. in Song view, copy includes all pattern information. in Pattern view, copy includes all step information. in Offset view, copy includes all step information for the currently selected sound bank. sequences can also be shifted left/right or randomized.",
    manual_melodic: "Melodic sounds use FM synthesis. each step can control Note or Chord, Level, Pan, Nudge, Probability, Substep and Strum. tap Note / Chord to switch between them.",
    manual_rhythm: "Rhythm sounds combine sine synthesis and noise. each step can control Note, Level, Pan, Nudge, Probability, Substep and Substep Probability.",
    manual_sound: "sound parameters include Level, Attack, Hold/Decay, Filter, Resonance and two LFOs. Melodic adds FM Depth and Ratio; Rhythm adds Noise and Note.",
    manual_project: "create, load and overwrite projects, or duplicate them with Save As. project data can also be imported and exported for backup or transfer. audio and song export are available.",
    manual_preset: "factory sound presets are included. your current sound can also be registered as a user preset and applied later. when selecting a preset, “now” lets you return to the current sound easily for quick comparison.",
    manual_color: "tap the ink icon to switch the color palette. it changes the appearance only and does not affect your project or sound.",
    manual_help: "the app also includes its own ? help mode. activate it, then tap an outlined control to see an explanation in English or Japanese.",

    privacy_app: "mono82 does not collect or transmit personal information from within the app.",
    privacy_contact: "if you contact us by email, your email address and information contained in your message are received only as necessary to respond to your inquiry.",
    privacy_web: "if external media embeds, analytics, or similar services are added to this website, the privacy information will be updated accordingly."
  },

  ja: {
    hero: "2トラック、32ステップ。<br>FMシンセで音を作る、ミニマルシーケンサー。",
    demo_note: "デモ音源は準備中です。",
    news_beta: "ベータ版公開",
    try_beta: "try beta",
    beta_status: "iPhone / PWA：動作確認済み<br>Android：未確認",
    contact_note: "連絡先は準備中です。",

    features_intro: "mono82の仕様一覧です。",
    spec_structure: "2トラック<br>8サウンド：Melodic 1–4 / Rhythm a–d<br>1ステップ最大2サウンド",
    spec_sequencer: "32ステップ<br>32パターン<br>パターン長：1–32ステップ<br>パターン反復<br>ステップシフト<br>ランダム<br>ミュート / ソロ",
    spec_song: "パターン配置<br>パターン反復<br>単一パターンループ / 範囲ループ<br>マスターリバーブ<br>スウィング",
    spec_melodic: "FMシンセシス<br>Level<br>Attack<br>Hold / Decay<br>Filter<br>Resonance<br>FM Depth / Ratio<br>2 LFO",
    spec_rhythm: "サインオシレーター + ノイズミックス<br>Note<br>Level<br>Attack<br>Hold / Decay<br>Filter<br>Resonance<br>2 LFO",
    spec_step: "Melodic：Level / Note / Chord / Pan / Nudge / Probability / Substep / Strum<br>Rhythm：Level / Note / Pan / Nudge / Probability / Substep / Substep Probability",
    spec_preset: "ファクトリーサウンドプリセット<br>ユーザーサウンドプリセット",
    spec_project: "new / load / save / save as<br>Project Import / Export<br>Audio Export<br>Song Export",
    spec_system: "PWA<br>English / Japanese<br>iPhone：動作確認済み<br>Android：未確認",

    manual_intro: "mono82の基本操作ガイドです。",
    manual_overview: "mono82にはMelodic Sound Bank 1〜4とRhythm Sound Bank a〜dがあります。1ステップには各Sound Bankから1サウンドずつ、最大2サウンドを配置できます。",
    manual_sequence: "ステップをタップすると選択中のサウンドを配置／解除します。Melodic Soundは上側の横長ブロック、Rhythm Soundは左下の正方形で表示されます。パターン長は1〜32ステップで変更でき、短くしても範囲外のステップ情報は削除されません。",
    manual_pattern: "最大32パターンを作成し、Songモードで並べて曲を構成できます。単一パターン、または選択した複数パターンの範囲ループができます。選択した範囲をコピーし、任意の場所に貼り付けできます。コピー対象は画面によって異なり、Song画面ではパターン情報すべて、Pattern画面ではステップ情報すべて、Offset画面では現在選択しているSound Bank側のステップ情報すべてが対象になります。シーケンスの左右シフトやランダムも使用できます。",
    manual_melodic: "Melodic SoundはFMシンセを使用します。各ステップでLevel、NoteまたはChord、Pan、Nudge、Probability、Substep、Strumを設定できます。Note / Chordはタップで切り替えます。",
    manual_rhythm: "Rhythm Soundはサイン波とノイズを使用します。各ステップでNote、Level、Pan、Nudge、Probability、Substep、Substep Probabilityを設定できます。",
    manual_sound: "SoundにはLevel、Attack、Hold/Decay、Filter、Resonance、2基のLFOがあります。MelodicにはFM Depth／Ratio、RhythmにはNoise／Noteが加わります。",
    manual_project: "プロジェクトの新規作成、読み込み、上書き保存、Save Asによる複製保存ができます。Project Import / Exportでバックアップや受け渡しもでき、Audio Export / Song Exportにも対応しています。",
    manual_preset: "ファクトリーサウンドプリセットを収録しています。現在のサウンドをユーザープリセットとして登録し、あとから適用することもできます。プリセット選択時には「now」で現在のサウンドに戻せるため、プリセットと今の音を簡単に聴き比べできます。",
    manual_color: "インクアイコンをタップするとカラーパレットを切り替えられます。見た目だけが変わり、プロジェクトやサウンドには影響しません。",
    manual_help: "アプリ内には「？」のHelp Modeもあります。有効にして枠の付いた操作部をタップすると、英語／日本語で説明を表示します。",

    privacy_app: "mono82アプリは、ユーザーの個人情報を収集・送信しません。",
    privacy_contact: "お問い合わせのためにユーザー自身がメールを送信した場合、メールアドレスおよびメールに含まれる情報を、お問い合わせへの対応に必要な範囲で受け取ります。",
    privacy_web: "このWebサイトに外部メディアの埋め込みやアクセス解析などを追加する場合は、それに合わせてプライバシー表記を更新します。"
  }
};

const navButtons = [...document.querySelectorAll("[data-view]")];
const viewPanels = [...document.querySelectorAll("[data-view-panel]")];
const themeButton = document.getElementById("theme-button");
const languageChoices = [...document.querySelectorAll("[data-language]")];

function showView(viewName) {
  navButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });

  viewPanels.forEach(panel => {
    panel.classList.toggle("active", panel.dataset.viewPanel === viewName);
  });

  window.scrollTo({ top: 0, behavior: "instant" });
}

navButtons.forEach(button => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

function applyTheme(themeClass) {
  document.documentElement.classList.remove(...THEMES);
  document.documentElement.classList.add(themeClass);

  localStorage.setItem(STORAGE_THEME, themeClass);

  const background = getComputedStyle(document.documentElement)
    .getPropertyValue("--bg")
    .trim();

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", background);
}

function currentThemeIndex() {
  return THEMES.findIndex(theme =>
    document.documentElement.classList.contains(theme)
  );
}

themeButton.addEventListener("click", () => {
  const index = currentThemeIndex();
  const next = THEMES[(index + 1 + THEMES.length) % THEMES.length];
  applyTheme(next);
});

function applyLanguage(language) {
  const lang = language === "ja" ? "ja" : "en";

  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_LANGUAGE, lang);

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const text = translations[lang]?.[key];
    if (text !== undefined) {
      element.innerHTML = text;
    }
  });

  languageChoices.forEach(button => {
    const active = button.dataset.language === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

languageChoices.forEach(button => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});

const savedTheme = localStorage.getItem(STORAGE_THEME);
applyTheme(THEMES.includes(savedTheme) ? savedTheme : "theme-mono82");

const savedLanguage = localStorage.getItem(STORAGE_LANGUAGE);
applyLanguage(savedLanguage === "ja" ? "ja" : "en");
