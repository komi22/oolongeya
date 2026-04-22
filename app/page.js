"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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
    id: "CVE-2026-40173",
    scoreValue: "9.4",
    grade: "Critical",
    area: "Open Source",
    title:
      "Unauthenticated part discloses admin auth token, enabling unauthorized access to protected Alpha admin endpoints",
    product: "dgraph",
    productIcon: "",
    verificationLabel: "Github Certified",
    verificationIcon: "/icons/github.svg",
    description:
      "An unauthenticated debug endpoint in Dgraph Alpha exposes the full process command line, including the configured admin token",
  },
  {
    id: "CVE-2026-40071",
    scoreValue: "5.4",
    grade: "Medium",
    area: "Python",
    title:
      "pyLoad WebUI JSON permission mismatch lets ADD/DELETE users invoke MODIFY-only actions",
    product: "pyLoad",
    productIcon: "",
    verificationLabel: "Github Certified",
    verificationIcon: "/icons/github.svg",
    description:
      "pyLoad is a free and open-source download manager written in Python. Prior to 0.5.0b3.dev97, the /json/package_order, /json/link_order, and /json/abort_link WebUI JSON endpoints enforce weaker permissions than the core API methods they invoke. This allows authenticated low-privileged users to execute MODIFY operations that should be denied by pyLoad's own permission model.",
  },
  {
    id: "CVE-2026-41133",
    scoreValue: "8.8",
    grade: "High",
    area: "Python",
    title: "Stale Session Privilege After Role/Permission Change",
    product: "pyload-ng",
    productIcon: "",
    verificationLabel: "Github Certified",
    verificationIcon: "/icons/github.svg",
    description:
      "already logged-in user can keep old (revoked) privileges until logout/session expiry, enabling continued privileged actions.",
  },
  {
    id: "CVE-2026-3589",
    scoreValue: "7.5",
    grade: "High",
    area: "WordPress",
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
    area: "WordPress",
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
    area: "WordPress",
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
    area: "WordPress",
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
    area: "WordPress",
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
    area: "KISA",
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
    area: "KISA",
    title: "Admin Privilege Escalation",
    product: "Report Solution",
    badgeValue: "KISA Certified",
    badgeIcon: "/icons/kisa.png",
    payoutKrw: 3300000,
    description:
      "By taking over admin privileges, restricted features can be controlled.",
  },
];

const vulnerabilityAreaMeta = {
  All: { icon: "/icons/verified-badge.svg" },
  WordPress: { icon: "/icons/woocommerce.png" },
  Python: { icon: "/icons/python.svg" },
  "Open Source": { icon: "/icons/github.svg" },
  KISA: { icon: "/icons/kisa.png" },
};

const bugBountyAreaMeta = {
  All: { icon: "/icons/verified-badge.svg" },
  WordPress: { icon: "/icons/woocommerce.png" },
  Web: { icon: "/icons/paypal.svg" },
  Private: { icon: "/icons/hackerone.svg" },
};

const bugBounties = [
  {
    id: "BB-2026-001",
    area: "Private",
    program: "Private Program",
    type: "Improper Access Control",
    scoreValue: "8.7",
    grade: "High",
    payout: "$2,000+",
    payoutAmount: 2938,
    year: "2026",
    icon: "/icons/hackerone.svg",
    certification: "HackerOne Certified",
    description:
      "Private",
  },
  {
    id: "BB-2026-002",
    area: "Private",
    program: "Private Program",
    type: "Improper Access Control",
    scoreValue: "7.5",
    grade: "High",
    payout: "$700+",
    payoutAmount: 750,
    year: "2026",
    icon: "/icons/hackerone.svg",
    certification: "HackerOne Certified",
    description:
      "Private",
  },
  {
    id: "BB-2026-003",
    area: "WordPress",
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
    id: "BB-2026-004",
    area: "WordPress",
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
    id: "BB-2026-005",
    area: "WordPress",
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
    id: "BB-2026-006",
    area: "Web",
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
    id: "BB-2026-007",
    area: "WordPress",
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
    id: "BB-2026-008",
    area: "WordPress",
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
  {
    id: "BB-2026-009",
    area: "Web",
    program: "Spotify",
    type: "Unauthenticated ****** bypass in ****** allows extraction of paywalled episode media URLs and encrypted full media",
    scoreValue: "6.8",
    grade: "Medium",
    payout: "$200",
    payoutAmount: 200,
    year: "2026",
    icon: "/icons/hackerone.svg",
    certification: "HackerOne Certified",
    description:
      "For certain paywalled episodes, the endpoint returns ****** and ****** without authentication. This is not a normal public behavior because other episodes in the same PAYMENT_REQUIRED class are correctly blocked.",
  },
];

function scoreTone(grade) {
  const normalized = String(grade).toLowerCase();
  if (normalized === "critical") return "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.45)]";
  if (normalized === "high") return "text-red-400";
  if (normalized === "medium") return "text-amber-300";
  if (normalized === "low") return "text-sky-400";
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
  const [selectedVulnArea, setSelectedVulnArea] = useState("All");
  const [openVulnId, setOpenVulnId] = useState(vulnerabilities[0]?.id ?? null);
  const [selectedBountyArea, setSelectedBountyArea] = useState("All");
  const [openBountyId, setOpenBountyId] = useState(bugBounties[0]?.id ?? null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroShift, setHeroShift] = useState(0);
  const vulnerabilityAreas = useMemo(
    () => ["All", ...Array.from(new Set(vulnerabilities.map((item) => item.area)))],
    [],
  );
  const filteredVulnerabilities = useMemo(() => {
    if (selectedVulnArea === "All") return vulnerabilities;
    return vulnerabilities.filter((item) => item.area === selectedVulnArea);
  }, [selectedVulnArea]);
  const sortedBugBounties = useMemo(
    () => [...bugBounties].sort((a, b) => payoutToNumber(b) - payoutToNumber(a)),
    [],
  );
  const bugBountyAreas = useMemo(
    () => ["All", ...Array.from(new Set(sortedBugBounties.map((item) => item.area)))],
    [sortedBugBounties],
  );
  const filteredBugBounties = useMemo(() => {
    if (selectedBountyArea === "All") return sortedBugBounties;
    return sortedBugBounties.filter((item) => item.area === selectedBountyArea);
  }, [selectedBountyArea, sortedBugBounties]);

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

  useEffect(() => {
    const hasOpenCard = filteredVulnerabilities.some((item) => item.id === openVulnId);
    if (!hasOpenCard) setOpenVulnId(filteredVulnerabilities[0]?.id ?? null);
  }, [filteredVulnerabilities, openVulnId]);

  useEffect(() => {
    const hasOpenCard = filteredBugBounties.some((item) => item.id === openBountyId);
    if (!hasOpenCard) setOpenBountyId(filteredBugBounties[0]?.id ?? null);
  }, [filteredBugBounties, openBountyId]);

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
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {vulnerabilityAreas.map((area) => {
            const isActive = selectedVulnArea === area;
            const areaCount = area === "All"
              ? vulnerabilities.length
              : vulnerabilities.filter((item) => item.area === area).length;
            const areaIcon = vulnerabilityAreaMeta[area]?.icon;

            return (
              <button
                key={area}
                type="button"
                className={`area-filter-btn ${isActive ? "active" : ""}`}
                onClick={() => setSelectedVulnArea(area)}
              >
                {areaIcon ? (
                  <Image src={areaIcon} alt={`${area} icon`} width={13} height={13} className="h-[13px] w-[13px] rounded-sm object-cover" />
                ) : null}
                <span>{area}</span>
                <span className="text-[11px] text-ink-500">({areaCount})</span>
              </button>
            );
          })}
        </div>
        <ul className="mt-5 divide-y divide-ink-700/60">
          {filteredVulnerabilities.map((v) => {
            const isOpen = openVulnId === v.id;
            const areaIcon = vulnerabilityAreaMeta[v.area]?.icon;
            return (
              <li key={v.id} className="mood-card py-3 px-2 text-sm sm:px-3">
                <button
                  type="button"
                  className="mood-hover w-full text-left transition-all duration-200 hover:translate-x-1 active:translate-x-0"
                  aria-expanded={isOpen}
                  onClick={() => setOpenVulnId(isOpen ? null : v.id)}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <div>
                      <p className="font-ui text-ink-100">{v.id}</p>
                      <p className="mt-1 text-ink-300">{v.title}</p>
                      {v.product || v.badgeValue || v.verificationLabel ? (
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-400">
                          {v.area ? (
                            <span className="inline-flex items-center gap-1 rounded-full border border-ink-600/70 bg-ink-800/45 px-2 py-0.5 text-[11px] text-ink-200">
                              {areaIcon ? (
                                <Image
                                  src={areaIcon}
                                  alt={`${v.area} icon`}
                                  width={11}
                                  height={11}
                                  className="h-[11px] w-[11px] rounded-sm object-cover"
                                />
                              ) : null}
                              <span>{v.area}</span>
                            </span>
                          ) : null}
                          {v.product ? (
                            <span className="inline-flex items-center gap-1">
                              {v.productIcon ? (
                                <Image
                                  src={v.productIcon}
                                  alt={`${v.product} icon`}
                                  width={12}
                                  height={12}
                                  className="h-3 w-3"
                                />
                              ) : null}
                              <span>{v.product}</span>
                            </span>
                          ) : null}
                          {v.verificationLabel ? (
                            <span className="inline-flex items-center gap-1">
                              {v.verificationIcon ? (
                                <Image
                                  src={v.verificationIcon}
                                  alt={v.verificationLabel}
                                  width={12}
                                  height={12}
                                  className="h-3 w-3"
                                />
                              ) : null}
                              <span>{v.verificationLabel}</span>
                            </span>
                          ) : v.badgeIcon ? (
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
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {bugBountyAreas.map((area) => {
            const isActive = selectedBountyArea === area;
            const areaCount = area === "All"
              ? sortedBugBounties.length
              : sortedBugBounties.filter((item) => item.area === area).length;
            const areaIcon = bugBountyAreaMeta[area]?.icon;

            return (
              <button
                key={area}
                type="button"
                className={`area-filter-btn ${isActive ? "active" : ""}`}
                onClick={() => setSelectedBountyArea(area)}
              >
                {areaIcon ? (
                  <Image src={areaIcon} alt={`${area} icon`} width={13} height={13} className="h-[13px] w-[13px] rounded-sm object-cover" />
                ) : null}
                <span>{area}</span>
                <span className="text-[11px] text-ink-500">({areaCount})</span>
              </button>
            );
          })}
        </div>
        <ul className="mt-5 divide-y divide-ink-700/60">
          {filteredBugBounties.map((item) => {
            const isOpen = openBountyId === item.id;
            const areaIcon = bugBountyAreaMeta[item.area]?.icon;
            return (
              <li key={item.id} className="mood-card py-3 px-2 text-sm text-ink-300 sm:px-3">
                <button
                  type="button"
                  className="mood-hover w-full text-left transition-all duration-200 hover:translate-x-1 active:translate-x-0"
                  aria-expanded={isOpen}
                  onClick={() => setOpenBountyId(isOpen ? null : item.id)}
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
                      {item.area ? (
                        <p className="mt-1 inline-flex items-center gap-1 rounded-full border border-ink-600/70 bg-ink-800/45 px-2 py-0.5 text-[11px] text-ink-200">
                          {areaIcon ? (
                            <Image
                              src={areaIcon}
                              alt={`${item.area} icon`}
                              width={11}
                              height={11}
                              className="h-[11px] w-[11px] rounded-sm object-cover"
                            />
                          ) : null}
                          <span>{item.area}</span>
                        </p>
                      ) : null}
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
