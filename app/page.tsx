"use client";

import { useEffect, useSyncExternalStore } from "react";

type Language = "ja" | "en";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const languageListeners = new Set<() => void>();
let memoryLanguage: Language = "ja";

const copy = {
  ja: {
    skipLink: "本文へ移動",
    navigationLabel: "外部リンク",
    languageSelectorLabel: "言語選択",
    japaneseLanguage: "日本語で表示",
    englishLanguage: "英語で表示",
    name: "くままぬい",
    handle: "kumama_nui",
    avatarAlt: "狐面と青い浴衣を身につけた、くままぬいのアバター",
    summary:
      "Webアプリケーション診断・ペネトレーションテストの実務に従事しながら、脆弱性・攻撃技術の調査と検証を行っています。",
    education: "サイバー大学 4年",
    highlightsTitle: "主な実績",
    highlights: [
      ["CVE-2026-8945", "Mozilla Firefox"],
      ["Bug Bounty / OSS", "報告経験あり"],
      ["CRTP", "Certified Red Team Professional"],
    ],
    experienceTitle: "実務経験",
    experience: [
      "Webアプリケーションの手動セキュリティ診断",
      "ペネトレーションテスト",
      "攻撃対象・攻撃経路の調査、検証",
      "証跡・再現手順の整理",
      "報告書作成、レビュー対応、進行管理",
      "検証記事の作成",
    ],
    activitiesTitle: "資格・活動",
    activities: [
      "Burp Suite Certified Practitioner (BSCP) 合格",
      "Certified Red Team Professional (CRTP)",
      "情報処理安全確保支援士試験 合格",
      "基本情報技術者試験 合格",
      "SecHack365 2025 コンテンツゼミ 修了",
      "Webセキュリティを中心にCTFへ参加",
      "VR空間にて「セキュリティ集会」運営",
    ],
    documentTitle: "くままぬい / kumama_nui — Security Engineer",
    description:
      "Webアプリケーション診断・ペネトレーションテストの実務に従事し、脆弱性・攻撃技術を調査するSecurity Engineer / Vulnerability Researcher、くままぬいのポートフォリオ。",
  },
  en: {
    skipLink: "Skip to main content",
    navigationLabel: "External links",
    languageSelectorLabel: "Language",
    japaneseLanguage: "View in Japanese",
    englishLanguage: "View in English",
    name: "Kumama Nui",
    handle: "kumama_nui",
    avatarAlt: "Avatar of Kumama Nui wearing a fox mask and blue yukata",
    summary:
      "I work in web application security assessments and penetration testing while researching and validating vulnerabilities and offensive techniques.",
    education: "Fourth-year student at Cyber University",
    highlightsTitle: "Highlights",
    highlights: [
      ["CVE-2026-8945", "Mozilla Firefox"],
      ["Bug Bounty / OSS", "Vulnerability reporting experience"],
      ["CRTP", "Certified Red Team Professional"],
    ],
    experienceTitle: "Professional Experience",
    experience: [
      "Manual web application security assessments",
      "Penetration testing",
      "Research and validation of target systems and attack paths",
      "Organizing evidence and reproduction steps",
      "Report writing, review follow-up, and project coordination",
      "Writing technical validation articles",
    ],
    activitiesTitle: "Certifications & Activities",
    activities: [
      "Burp Suite Certified Practitioner (BSCP)",
      "Certified Red Team Professional (CRTP)",
      "Passed the Registered Information Security Specialist Examination",
      "Passed the Fundamental Information Technology Engineer Examination",
      "Completed the SecHack365 2025 Content Seminar",
      "Participating in CTFs, primarily focused on web security",
      "Organizing the “Security Meetup” in social VR",
    ],
    documentTitle: "Kumama Nui / kumama_nui — Security Engineer",
    description:
      "Portfolio of Kumama Nui, a security engineer and vulnerability researcher specializing in web application security assessments, penetration testing, and vulnerability research.",
  },
} as const;

function readLanguage(): Language {
  if (typeof window === "undefined") {
    return "ja";
  }

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (storedLanguage === "ja" || storedLanguage === "en") {
      memoryLanguage = storedLanguage;
    }
  } catch {
    // Fall back to the in-memory selection when storage is unavailable.
  }

  return memoryLanguage;
}

function subscribeToLanguage(listener: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === LANGUAGE_STORAGE_KEY) {
      listener();
    }
  };

  languageListeners.add(listener);
  window.addEventListener("storage", handleStorage);

  return () => {
    languageListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function setLanguage(language: Language) {
  memoryLanguage = language;

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // The switch still works for the current view if storage is unavailable.
  }

  document.documentElement.lang = language;
  languageListeners.forEach((listener) => listener());
}

export default function Home() {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    readLanguage,
    () => "ja",
  );
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = text.documentTitle;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", text.description);
  }, [language, text.description, text.documentTitle]);

  return (
    <main className="portfolio">
      <a className="skip-link" href="#profile">
        {text.skipLink}
      </a>

      <header className="site-header">
        <a className="brand" href="#profile">
          kumama_nui
        </a>
        <div className="header-actions">
          <nav aria-label={text.navigationLabel}>
            <a href="https://x.com/kumama_nui" target="_blank" rel="noreferrer">
              X
            </a>
            <a
              href="https://www.linkedin.com/in/%E7%BF%94%E5%A4%AA-%E6%9D%BE%E7%94%B0%E3%80%80-18206a325/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://vrchat.com/home/user/usr_81968443-2026-4373-8359-dfb4e35f1a1b"
              target="_blank"
              rel="noreferrer"
            >
              VRChat
            </a>
            <a href="mailto:user874there@gmail.com">Email</a>
          </nav>
          <div className="language-switch" role="group" aria-label={text.languageSelectorLabel}>
            <button
              className="language-option"
              type="button"
              onClick={() => setLanguage("ja")}
              aria-label={text.japaneseLanguage}
              aria-pressed={language === "ja"}
            >
              JP
            </button>
            <span aria-hidden="true">/</span>
            <button
              className="language-option"
              type="button"
              onClick={() => setLanguage("en")}
              aria-label={text.englishLanguage}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section id="profile" className="introduction" aria-labelledby="profile-title">
        <div className="identity">
          <div>
            <p className="role">Security Engineer / Vulnerability Researcher</p>
            <h1 id="profile-title">
              {text.name}
              <small>{text.handle}</small>
            </h1>
          </div>
          <img
            className="avatar"
            src="/avatar.png"
            alt={text.avatarAlt}
            width="1000"
            height="1000"
            fetchPriority="high"
          />
        </div>

        <p className="summary">{text.summary}</p>
        <p className="education">{text.education}</p>
      </section>

      <div className="details">
        <section aria-labelledby="highlights-title">
          <h2 id="highlights-title">{text.highlightsTitle}</h2>
          <dl className="highlight-list">
            {text.highlights.map(([title, detail]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="experience-title">
          <h2 id="experience-title">{text.experienceTitle}</h2>
          <ul>
            {text.experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="activities-title">
          <h2 id="activities-title">{text.activitiesTitle}</h2>
          <ul>
            {text.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
