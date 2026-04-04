"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sectionLinks = [
  ["work-experience", "Experience"],
  ["vulnerabilities", "Vulnerabilities"],
  ["bug-bounty", "Bug Bounty"],
];

const workExperiences = [
  {
    period: "2026 -",
    title: "Meritz Securities",
    org: "Offensive Security Engineer",
    icon: "/icons/meritz.png",
    details: ["Red teaming and penetration testing in WEB/APP environments."],
  },
  {
    period: "2025",
    title: "KITRI Best of Best",
    org: "14th Security Consulting Track",
    icon: "/icons/kitri.png",
    details: [
      "I have gained expertise in establishing and evaluating end-to-end information security processes within given environments.",
    ],
  },
];

const vulnerabilities = [
  {
    id: "CVE-2026-3589",
    scoreValue: "7.5",
    grade: "High",
    title: "Arbitrary Admin User Creation via CSRF",
    product: "WooCommerce",
    badgeValue: "200M+ downloads",
    badgeIcon: "/icons/woocommerce.png",
    description:
      "The plugin does not properly handle batch requests, which could allow unauthenticated users to make a logged in admin call non store/WC REST endpoints, and create arbitrary admin users via a CSRF attack for example.",
  },
  {
    id: "CVE-2026-5133",
    scoreValue: "8.1",
    grade: "High",
    title: "Missing Authorization in Content AI Bulk Actions",
    product: "Rank Math SEO",
    badgeValue: "3M+ downloads",
    badgeIcon: "/icons/rankmath.png",
    description:
      "A low-privileged user can submit arbitrary post IDs through Content AI bulk actions and trigger unauthorized processing of protected content.",
  },
  {
    id: "CVE-2026-5143",
    scoreValue: "6.5",
    grade: "Medium",
    title: "Authorization Flaw in updateMetaBulk Endpoint",
    product: "Rank Math SEO",
    badgeValue: "3M+ downloads",
    badgeIcon: "/icons/rankmath.png",
    description:
      "Insufficient authorization checks in the term path can allow unauthorized post title modification under ID-collision conditions.",
  },
  {
    id: "CVE-2026-5151",
    scoreValue: "7.7",
    grade: "High",
    title: "Object-Level Authorization Mismatch in updateSchemas",
    product: "Rank Math SEO",
    badgeValue: "3M+ downloads",
    badgeIcon: "/icons/rankmath.png",
    description:
      "A low-privileged user can pass permission checks with their own object ID and overwrite metadata rows of other users by targeting foreign meta IDs.",
  },
  {
    id: "CVE-2026-5427",
    scoreValue: "8.8",
    grade: "High",
    title: "Contributor SSRF and Upload Restriction Bypass via Block URL Import",
    product: "Kubio",
    badgeValue: "WordPress Plugin",
    badgeIcon: "/icons/kubio.png",
    description:
      "A low-privileged contributor can inject attacker-controlled URLs into Kubio block attributes to trigger server-side fetches and save responses into public uploads. This enables SSRF-like access to internal resources and unauthorized data exposure despite normal media upload restrictions.",
  },
  {
    id: "KVE-2026-0321",
    scoreValue: "7.5",
    grade: "High",
    title: "Admin Privilege Escalation",
    product: "Report Solution",
    badgeValue: "KISA Certified",
    badgeIcon: "/icons/kisa.png",
    payoutKrw: 3300000,
    description:
      "By taking over admin privileges, restricted features can be controlled.",
  },
  {
    id: "KVE-2026-0318",
    scoreValue: "7.5",
    grade: "High",
    title: "Admin Privilege Escalation",
    product: "Report Solution",
    badgeValue: "KISA Certified",
    badgeIcon: "/icons/kisa.png",
    payoutKrw: 3300000,
    description:
      "By taking over admin privileges, restricted features can be controlled.",
  },
];

const bugBounties = [
  {
    program: "Private Program",
    type: "Improper Access Control",
    scoreValue: "8.7",
    grade: "High",
    payout: "$?,???",
    payoutAmount: 2938,
    year: "2026",
    icon: "/icons/hackerone.svg",
    certification: "HackerOne Certified",
    description:
      "bypassing authorization checks on an internal write endpoint.",
  },
  {
    program: "Private Program",
    type: "Improper Access Control",
    scoreValue: "7.5",
    grade: "High",
    payout: "$???",
    payoutAmount: 750,
    year: "2026",
    icon: "/icons/hackerone.svg",
    certification: "HackerOne Certified",
    description:
      "Unauthenticated access and large-scale data exposure are possible through API abuse.",
  },
  {
    program: "Rank Math SEO",
    type: "Missing Authorization",
    scoreValue: "8.1",
    grade: "High",
    payout: "$20",
    year: "2026",
    icon: "/icons/rankmath.png",
    certification: "Wordfence Certified",
    description:
      "A low-privileged user can queue unauthorized bulk processing on protected posts through Content AI bulk actions.",
  },
  {
    program: "Rank Math SEO",
    type: "Improper Access Control",
    scoreValue: "6.5",
    grade: "Medium",
    payout: "$20",
    year: "2026",
    icon: "/icons/rankmath.png",
    certification: "Wordfence Certified",
    description:
      "Authorization weakness in updateMetaBulk can lead to unauthorized post title updates in specific ID-collision scenarios.",
  },
  {
    program: "Rank Math SEO",
    type: "Improper Access Control",
    scoreValue: "7.7",
    grade: "High",
    payout: "$20",
    year: "2026",
    icon: "/icons/rankmath.png",
    certification: "Wordfence Certified",
    description:
      "An object-level authorization mismatch in updateSchemas allows unauthorized overwrite of foreign post metadata.",
  },
  {
    program: "PayPal",
    type: "Open Redirect",
    scoreValue: "3.4",
    grade: "Low",
    payout: "$400",
    year: "2026",
    icon: "/icons/paypal.svg",
    certification: "HackerOne Certified",
    description:
      "A malicious phishing link under a PayPal domain can be generated and redirect users to a malicious site when clicked.",
  },
  {
    program: "Automattic",
    type: "Improper Access Control",
    scoreValue: "7.5",
    grade: "High",
    payout: "$400",
    year: "2026",
    icon: "/icons/automattic.png",
    certification: "HackerOne Certified",
    description:
      "The plugin does not properly handle batch requests, which could allow unauthenticated users to make a logged in admin call non store/WC REST endpoints, and create arbitrary admin users via a CSRF attack for example.",
  },
  {
    program: "Automattic",
    type: "Cross-Site Request Forgery CSRF",
    scoreValue: "3.9",
    grade: "Low",
    payout: "$100",
    year: "2026",
    icon: "/icons/automattic.png",
    certification: "HackerOne Certified",
    description:
      "CSRF is possible via a nonce-bypass request.",
  },
];

function scoreTone(grade) {
  if (grade === "Critical") return "text-rose-400";
  if (grade === "High") return "text-red-400";
  if (grade === "Medium") return "text-amber-300";
  if (grade === "Low") return "text-sky-400";
  return "text-ink-300";
}

function riskText(scoreValue, grade) {
  return `${scoreValue} ${grade}`;
}

function payoutToNumber(item) {
  if (typeof item.payoutAmount === "number") return item.payoutAmount;
  return Number(item.payout.replace(/[^0-9]/g, "")) || 0;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("work-experience");
  const [openExp, setOpenExp] = useState(0);
  const [openVuln, setOpenVuln] = useState(0);
  const [openBounty, setOpenBounty] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroShift, setHeroShift] = useState(0);
  const sortedBugBounties = [...bugBounties].sort((a, b) => payoutToNumber(b) - payoutToNumber(a));
  const bountyTotal = sortedBugBounties.reduce((sum, item) => sum + payoutToNumber(item), 0);
  const bountyTotalKrw = vulnerabilities.reduce((sum, item) => sum + (item.payoutKrw || 0), 0);
  const convertedUsdToKrw = bountyTotal * 1500;
  const combinedTotalKrw = bountyTotalKrw + convertedUsdToKrw;
  const combinedTotalKrwFormatted = new Intl.NumberFormat("ko-KR").format(combinedTotalKrw);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";

    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.05 },
    );

    sectionLinks.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setScrollProgress(maxScroll > 0 ? current / maxScroll : 0);
      setHeroShift(Math.min(current * 0.08, 24));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-8" lang="en">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-ink-900/20">
        <div
          className="h-full rounded-r-sm bg-ink-300/45 transition-[width] duration-200"
          style={{ width: `${Math.max(0, Math.min(100, scrollProgress * 100))}%` }}
        />
      </div>

      <nav id="top-nav" className="sticky top-0 z-40 mb-10 pt-2 backdrop-blur-sm">
        <div className="no-scrollbar overflow-x-auto">
          <div className="flex min-w-max items-center gap-2 text-sm text-ink-400">
            {sectionLinks.map(([id, label], idx) => (
              <div key={id} className="flex items-center gap-2">
                <a href={`#${id}`} className={`top-nav-link ${activeSection === id ? "active" : ""}`}>
                  {label}
                </a>
                {idx < sectionLinks.length - 1 ? <span className="text-ink-600">/</span> : null}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <section className="mb-12 reveal">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <Image
            src="/picme.jpg"
            width={176}
            height={176}
            alt="oolongeya"
            className="h-32 w-32 rounded-full object-cover ring-1 ring-ink-600/70 sm:h-40 sm:w-40 md:h-44 md:w-44"
            style={{ transform: `translateY(${-heroShift}px)` }}
            priority
          />

          <div>
            <h1 className="font-ui text-3xl font-semibold tracking-tight text-ink-50 sm:text-5xl">
              oolongeya
            </h1>
            <p className="mt-2 text-lg font-semibold text-ink-100">Offensive Security Engineer</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-300 sm:text-[15px]">
              Performed red teaming and penetration testing at a financial company in South Korea. Began
              participating in CTF competitions in 2022 and bug bounty programs in 2026.
            </p>
            <p className="mt-4 text-sm sm:text-[15px]">
              <a
                href="mailto:oolongeya@gmail.com"
                className="inline-flex items-center gap-2 text-ink-300 hover:text-accent transition-colors"
              >
                <Image src="/icons/gmail.svg" alt="Gmail" width={14} height={14} className="h-3.5 w-3.5" />
                oolongeya@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm sm:text-[15px]">
              <a
                href="https://dreamhack.io/users/11533"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent underline underline-offset-4"
              >
                <Image src="/icons/dreamhack.png" alt="DreamHack" width={14} height={14} className="h-3.5 w-3.5" />
                DreamHack
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="work-experience" className="mb-12 reveal">
        <h2 className="inline-flex items-center gap-2 font-ui text-2xl text-ink-50">
          <span className="-translate-y-px text-base leading-none text-accent">•</span>
          <span>Experience</span>
        </h2>
        <div className="mt-5 divide-y divide-ink-700/60">
          {workExperiences.map((item, idx) => {
            const isOpen = openExp === idx;
            return (
              <article key={`${item.period}-${item.title}`} className="mood-card py-3 px-2 sm:px-3">
                <button
                  type="button"
                  className="mood-hover w-full text-left transition-all duration-200 hover:translate-x-1 active:translate-x-0"
                  aria-expanded={isOpen}
                  onClick={() => setOpenExp(isOpen ? -1 : idx)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="inline-flex items-center gap-2 text-base font-semibold text-ink-100">
                        {item.icon ? (
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={16}
                            height={16}
                            className="h-4 w-4 rounded-sm object-cover"
                          />
                        ) : null}
                        <span>{item.title}</span>
                      </h3>
                      <p className="mt-1 text-sm text-ink-400">{item.org}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-ui text-xs text-ink-500">{item.period}</span>
                      <span className={`text-ink-500 transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span>
                    </div>
                  </div>
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pt-2" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden text-sm text-ink-300">
                    {item.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="vulnerabilities" className="mb-12 reveal">
        <h2 className="inline-flex items-center gap-2 font-ui text-2xl text-ink-50">
          <span className="-translate-y-px text-base leading-none text-accent">•</span>
          <span>Vulnerability Reports</span>
        </h2>
        <ul className="mt-5 divide-y divide-ink-700/60">
          {vulnerabilities.map((v, idx) => {
            const isOpen = openVuln === idx;
            return (
              <li key={v.id} className="mood-card py-3 px-2 text-sm sm:px-3">
                <button
                  type="button"
                  className="mood-hover w-full text-left transition-all duration-200 hover:translate-x-1 active:translate-x-0"
                  aria-expanded={isOpen}
                  onClick={() => setOpenVuln(isOpen ? -1 : idx)}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <div>
                      <p className="font-ui text-ink-100">{v.id}</p>
                      <p className="mt-1 text-ink-300">{v.title}</p>
                      {v.product || v.badgeValue ? (
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-400">
                          {v.product ? <span>{v.product}</span> : null}
                          {v.badgeIcon ? (
                            <Image
                              src={v.badgeIcon}
                              alt="verification"
                              width={12}
                              height={12}
                              className="h-3 w-3"
                            />
                          ) : null}
                          {v.badgeValue ? <span>{v.badgeValue}</span> : null}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-ui text-xs font-semibold ${scoreTone(v.grade)}`}>
                        {riskText(v.scoreValue, v.grade)}
                      </span>
                      {v.payoutKrw ? (
                        <span className="font-ui text-xs text-emerald-400">
                          ₩{new Intl.NumberFormat("ko-KR").format(v.payoutKrw)}
                        </span>
                      ) : null}
                      <span className={`text-ink-500 transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span>
                    </div>
                  </div>
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pt-2" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden text-xs leading-relaxed text-ink-400">{v.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="bug-bounty" className="mb-14 reveal">
        <h2 className="flex items-center gap-2 font-ui text-2xl text-ink-50">
          <span className="-translate-y-px text-base leading-none text-accent">•</span>
          <span>Bug Bounty</span>
        </h2>
        <div className="mt-3 ml-3 inline-block">
          <p className="font-ui text-sm font-semibold text-emerald-300">
            Total ₩{combinedTotalKrwFormatted}
          </p>
        </div>
        <ul className="mt-5 divide-y divide-ink-700/60">
          {sortedBugBounties.map((item, idx) => {
            const isOpen = openBounty === idx;
            return (
              <li key={`${item.program}-${item.type}-${item.payout}`} className="mood-card py-3 px-2 text-sm text-ink-300 sm:px-3">
                <button
                  type="button"
                  className="mood-hover w-full text-left transition-all duration-200 hover:translate-x-1 active:translate-x-0"
                  aria-expanded={isOpen}
                  onClick={() => setOpenBounty(isOpen ? -1 : idx)}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <div>
                      <p className="inline-flex items-center gap-1.5 font-semibold text-ink-100">
                        {item.icon ? (
                          <Image
                            src={item.icon}
                            alt={item.program}
                            width={16}
                            height={16}
                            className="h-4 w-4 rounded-sm object-cover"
                          />
                        ) : null}
                        {item.program}
                      </p>
                      <p className="mt-1">{item.type}</p>
                      {item.certification ? (
                        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink-400">
                          <Image src="/icons/verified-badge.svg" alt="certification badge" width={12} height={12} className="h-3 w-3" />
                          <span>{item.certification}</span>
                        </p>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-ui text-xs text-ink-500">{item.year}</span>
                      <span className="font-ui text-xs text-ink-600">|</span>
                      <span className={`font-ui text-xs font-semibold ${scoreTone(item.grade)}`}>
                        {riskText(item.scoreValue, item.grade)}
                      </span>
                      <span className="font-ui text-emerald-400">{item.payout}</span>
                      <span className={`text-ink-500 transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span>
                    </div>
                  </div>
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pt-2" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden text-xs leading-relaxed text-ink-400">{item.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className="py-8">
        <p className="text-sm text-ink-500">Copyright © 2026 oolongeya</p>
      </footer>
    </main>
  );
}
