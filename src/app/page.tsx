import NextLink from "next/link";
import type { ReactNode } from "react";

export default function Page() {
  return (
    <div className="grid gap-3 py-3 px-4 mx-auto my-0 max-w-[65ch] w-full">
      <nav>
        <NextLink href="/" className="flex gap-2 items-center flex-wrap w-fit">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-small.svg"
            alt="The Michigan Daily"
            width="30px"
            className="aspect-square"
          />
          <h1 className="font-serif font-bold text-3xl">Web Team</h1>
        </NextLink>
      </nav>
      <main className="font-serif grid gap-4">
        <p className="text-lg">
          The Michigan Daily Web Team leads the digital-first future of{" "}
          <Link href="https://www.michigandaily.com/">The Michigan Daily</Link>,
          the student-run newspaper at the University of Michigan in Ann Arbor.
        </p>
        <section className="grid gap-2">
          <hgroup>
            <h2 className="font-serif font-bold text-2xl" id="work">
              <Anchor href="#work">Work</Anchor>
            </h2>
            <p>
              We work with The Daily&apos;s editorial teams to develop article
              layouts and write data-driven stories. We also design and build
              products to deliver our content and internal tools to aid in
              publishing.
            </p>
          </hgroup>
          <p>
            View our open-source work on{" "}
            <Link href="https://github.com/michigandaily">GitHub</Link>.
          </p>
          <section className="grid gap-1">
            <h3
              className="font-serif font-bold text-xl"
              id="product-engineering-and-design"
            >
              <Anchor href="#product-engineering-and-design">
                Product Engineering and Design
              </Anchor>
            </h3>
            <UnorderedList>
              <li>
                <Link href="https://games.michigandaily.com/crosswords/">
                  Crosswords
                </Link>
              </li>
              <li>
                Mobile application (
                <Link href="https://apps.apple.com/us/app/the-michigan-daily/id1615063980?platform=iphone">
                  iOS
                </Link>{" "}
                and{" "}
                <Link href="https://play.google.com/store/apps/details?id=edu.umich.tmd&hl=en_US&gl=US">
                  Android
                </Link>
                )
              </li>
              <li>
                <Link href="https://join.michigandaily.com">
                  Join The Michigan Daily
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2023/best-of-ann-arbor/results/">
                  Best of Ann Arbor
                </Link>
              </li>
              <li>
                <Link href="https://miseducation.michigandaily.com/">
                  The Miseducation Project
                </Link>
              </li>
              <li>
                <Link href="https://www.therivalrygame.com/">
                  The Rivalry Edition
                </Link>
              </li>
              <li>Oven Mitts</li>
              <li>
                <Link href="https://michigan-daily-alt-text-tracker.pages.dev/">
                Alternative Text Tracker
                </Link>
              </li>
            </UnorderedList>
          </section>
          <section className="grid gap-1">
            <h3
              className="font-serif font-bold text-xl"
              id="news-engineering-and-design"
            >
              <Anchor href="#news-engineering-and-design">
                News Engineering and Design
              </Anchor>
            </h3>
            <UnorderedList>

            <li>
                <Link href="https://specials.michigandaily.com/bside/2024/conspiracy">
                  The Conspiracy B-Side
                </Link>
              </li>                 
            <li>
                <Link href="https://specials.michigandaily.com/2024/march-class-spotlights/">
                  March Class Spotlights
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2024/love-notes/">
                  The 2024 Love Notes
                </Link>
              </li>
              <li>
                <Link href="https://mic.michigandaily.com/2024/love-in-color/">
                  Love in Color
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2023/photographers-favorites/">
                  Photographers&apos; Favorites 2023
                </Link>
              </li>
              <li>
                <Link href="https://mic.michigandaily.com/2023/the-fable-of-the-lion-the-butcher-and-three-kings/">
                  The Fable of the Lion, the Butcher, and Three Kings
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2023/the-devil-is-in-the-details-jen-kleins-empowerment-of-others/">
                  The Devil is in the Details: Jen Klein&apos;s empowerment of
                  others
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2023/writing-in-the-digital-dark-age/">
                  Writing in the Digital Dark Age
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2023/travel-edition/">
                  The Statement Travel Edition
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2023/summer-crush-edition/">
                  Summer Crush Edition
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2023/swiftie-project/">
                  The Swiftie Project
                </Link>
              </li>
              <li>
                <Link href="https://mic.michigandaily.com/queer-in-color-2023/">
                  Queer in Color
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/womens-basketball/the-dailys-womens-basketball-beat-presents-its-march-madness-brackets/">
                  The Daily&apos;s women&apos;s basketball beat presents its March Madness
                  brackets
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/mens-basketball/the-dailys-mens-basketball-beat-presents-its-nit-brackets/">
                  The Daily&apos;s men&apos;s basketball beat presents its NIT brackets
                </Link>
              </li>
              <li>
                <Link href="https://mic.michigandaily.com/mic-style/">
                  MiC Style
                </Link>
              </li>
              <li>
                <Link href="https://mic.michigandaily.com/black-hair-series/">
                  The Black Hair Series
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2023/love-notes/">
                  The 2023 Love Notes
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2022/photographers-favorites/">
                  2022 Photographers&apos; Favorites
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/football/the-rivalry-through-history/">
                  The rivalry through history
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2022/ballot-guide/">
                  The 2022 Ballot Guide
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/web/the-michigan-daily-interactive-career-map/">
                  The Michigan Daily interactive career map
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/if-your-travels-are-perfect-youre-traveling-wrong/">
                  If your travels are perfect, you&apos;re traveling wrong
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/into-the-multiverses-impact-on-modern-media">
                  Into the multiverse&apos;s impact on modern media
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/surely-it-has-an-expiration-date/">
                  Surely it has an expiration date
                </Link>
              </li>
              <li>
                <Link href="https://specials.michigandaily.com/2022/primary-election/">
                  The 2022 Primary Guide
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/mens-basketball/daily-basketball-beat-predicts-march-madness-men/">
                  The Daily men&apos;s basketball beat bracket reveal
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/love-notes-2022/">
                  The 2022 Love Notes
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/administration/a-look-back-at-eight-years-of-umich-under-former-u-m-president-mark-schlissel/">
                  A look back at eight years of UMich under former U-M President
                  Mark Schlissel
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/multimedia/the-michigan-dailys-year-in-photos/">
                  The Michigan Daily&apos;s year in photos
                </Link>
              </li>
              <li>
                <Link href="https://magnify.michigandaily.us/covid1year/">
                  A look back: One year online at U-M
                </Link>
              </li>
              <li>
                <Link href="https://magnify.michigandaily.us/love/">
                  The 2021 Love Notes
                </Link>
              </li>
              <li>
                <Link href="https://magnify.michigandaily.us/2020_timeline/">
                  20 Days to Remember in 2020
                </Link>
              </li>
              <li>
                <Link href="https://magnify.michigandaily.us/election2020/">
                  2020 Election Central
                </Link>
              </li>
              <li>
                <Link href="https://magnify.michigandaily.us/miseducation/">
                  Miseducation
                </Link>
              </li>
            </UnorderedList>
          </section>
          <section className="grid gap-1">
            <h3 className="font-serif font-bold text-xl" id="data-journalism">
              <Anchor href="#data-journalism">Data Journalism</Anchor>
            </h3>
            <UnorderedList>
              <li>
                <Link href="https://www.michigandaily.com/government/president-biden-approves-michigan-federal-disaster-relief-following-august-storms-tornadoes/">
                  President Biden approves Michigan federal disaster relief
                  following August storms, tornadoes
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/administration/2023-salary-disclosure-report-shows-salary-increases-from-2022/">
                  2023 Salary Disclosure Report shows salary increases from 2022
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/web/data/how-do-students-use-chatgpt/">
                  How do Students Use ChatGPT?
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/football/a-data-driven-rose-bowl-preview/">
                  A data-driven Rose Bowl preview
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/the-statement-2023-sex-survey/">
                  The Statement 2023 Sex Survey
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/campus-life/umich-class-of-2027-by-the-numbers-freshman-survey/">
                  UMich class of 2027 by the numbers: Diets, dorms, and data
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/web/data/diving-deep-into-mdining/">
                  Diving deep into MDining
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/dont-let-the-archive-become-a-death-sentence/">
                  Don&apos;t let the archive become a death sentence
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/administration/what-to-know-about-geos-pay-demands-an-in-depth-analysis-of-graduate-student-pay/">
                  What to know about GEO&apos;s pay demands: An in-depth
                  analysis of graduate student pay
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/web/data/is-there-a-gender-pay-gap-among-professors/">
                  Is there a gender pay gap among professors?
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/web/how-walkable-is-your-block/">
                  How walkable is your block?
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/news-briefs/massive-power-outage-in-ann-arbor-leaves-thousands-in-the-dark/">
                  Massive power outage in Ann Arbor leaves thousands in the dark
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/government/looking-back-at-the-midterm-elections-voting-at-the-satellite-city-clerks-office/">
                  Looking back at the midterm elections: Voting at the Satellite
                  City Clerk&apos;s office
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/the-statement-2022-sex-survey/">
                  The Statement 2022 Sex Survey
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/elections/ann-arbor-2022-midterm-election-results/">
                  Ann Arbor 2022 Midterm Election Results
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/academics/umich-computer-science-program-restricts-admission-starting-in-fall-2023-as-demand-rises/">
                  UMich computer science program restricts admission starting in
                  fall 2023 as demand rises
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/campus-life/umich-class-of-2026-by-the-numbers/">
                  UMich class of 2026 by the numbers: From winter woes to this
                  year&apos;s dream dorm
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/womens-basketball/a-data-driven-michigan-vs-villanova-round-of-32-preview/">
                  A data-driven Michigan vs. Villanova Round of 32 preview
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/mens-basketball/the-daily-mens-basketball-beat-predicts-the-first-weekend-of-march-madness/">
                  The Daily men&apos;s basketball beat predicts the first
                  weekend of March Madness
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/football/a-data-driven-orange-bowl-preview/">
                  A data-driven Orange Bowl preview
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/football/by-the-numbers-michigan-looks-to-carry-big-play-success-into-college-football-playoff/">
                  By the numbers: Michigan looks to carry big-play success into
                  College Football Playoff
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/the-statement-2021-sex-survey/">
                  The Statement 2021 Sex Survey
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/business/more-than-100-ann-arbor-restaurants-closed-in-the-past-three-years-how-have-these-closures-affected-the-community/">
                  More than 100 Ann Arbor restaurants closed in the past three
                  years. How have these closures affected the community?
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/web/data/registration-tracker-see-which-courses-are-filling-up/">
                  Registration tracker: See which courses are filling up
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/football/visualizing-the-history-of-the-game/">
                  Visualizing the history of The Game
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/ann-arbor/city-of-ann-arbor-2021-special-election-results/">
                  City of Ann Arbor 2021 Special Election Results
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/football/a-visual-representation-of-michigans-run-game/">
                  A visual representation of Michigan&apos;s run game
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/campus-life/umich-class-of-2025-by-the-numbers-and-their-hopes-for-college/">
                  UMich Class of 2025: By the numbers and their hopes for
                  college
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/michigans-history-at-the-olympics/">
                  Michigan athletes carry strong Olympic reputation into 2020
                  games
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/olympic-tradition-includes-wolverines-from-across-the-globe/">
                  Olympic tradition includes Wolverines from across the globe
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/research/daily-analysis-finds-historically-large-salary-disparities-between-three-u-m-campuses/">
                  Daily analysis finds historically large salary disparities
                  between three U-M campuses
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/research/daily-analysis-finds-pay-disparities-within-lsa-and-coe-as-student-representatives-question-how-salaries-are-decided/">
                  Daily analysis finds pay disparities within LSA, CoE
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/administration/daily-analysis-finds-funding-and-salary-increases-for-dpss-since-2013/">
                  Daily analysis finds funding, salary increases for DPSS since
                  2013
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/sports/mens-basketball/daily-beat-writers-predict-michigans-ncaa-tournament-fate-2/">
                  Daily beat writers predict Michigan&apos;s NCAA Tournament
                  fate
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/administration/daily-research-finds-only-one-building-named-after-person-color-12-after/">
                  Daily research finds only one building named after person of
                  color, 12 after women
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/crime/annual-dpss-report-shows-increase-number-sexual-misconduct-cases/">
                  Annual reports show an increase in number of U-M sexual
                  misconduct cases
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/academics/we-looked-301-high-schools-most-applicants-u-m-heres-what-we-found/">
                  We looked at the 301 high schools with the most applicants to
                  U-M. Here&apos;s what we found
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/academics/across-country-or-across-state-undergraduates-come-u-varying-experiences/">
                  From across the country or across the state, undergraduates
                  come to &apos;U&apos; with varying experiences
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/academics/hail-and-go-blue-guarantee-financial-aid-programs-give-low-income-state-students/">
                  &apos;HAIL&apos; and Go Blue Guarantee financial aid programs
                  give low-income in-state students education opportunities
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/students-discuss-impacts-apib-experience-college-preparation/">
                  Students discuss impacts of AP/IB experience on college
                  preparation
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/research/how-effective-are-stay-home-orders-and-recommendations-reducing-spread-covid-19/">
                  A look at COVID-19 data before, during and after U-M&apos;s
                  two stay-in-place restrictions
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/statement/2020-sex-survey/">
                  The 2020 Statement Sex Survey
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/government/how-are-umich-students-voting-election-survey-issues-most-important-students/">
                  How are U-M students voting this election? A survey of issues
                  most important to students
                </Link>
              </li>
              <li>
                <Link href="https://www.michigandaily.com/news/academics/meet-class-2024-freshmen-embark-unprecedented-first-year/">
                  Meet the Class of 2024: Freshmen embark on unprecedented first
                  year
                </Link>
              </li>
              <li>
                <Link href="https://magnify.michigandaily.us/online_classes/">
                  Visualizing the data: LSA instructors prepare for a mostly
                  online fall semester
                </Link>
              </li>
              <li>
                <Link href="https://magnify.michigandaily.us/covid_reopening/">
                  Reopening the State, Visualized
                </Link>
              </li>
            </UnorderedList>
          </section>
        </section>
        <section className="grid gap-2">
          <hgroup>
            <h2 className="font-serif font-bold text-2xl" id="people">
              <Anchor href="#people">People</Anchor>
            </h2>
            <p>
              We are students interested in the intersection of design, data
              science, computer science and journalism. Our team is divided into
              three: data journalism, engineering and product design.
            </p>
          </hgroup>
          <section className="grid gap-1">
            <h3 className="font-serif font-bold text-xl" id="leadership-team">
              <Anchor href="#leadership-team">Leadership Team</Anchor>
            </h3>
            <UnorderedList>
              <li>
                <b>Managing Online Editor</b> Anushka Raheja
              </li>
              <li>
                <b>Managing Online Editor</b> Jacob Kim
              </li>
              <li>
                <b>Engineering Manager</b> Shin Lee
              </li>
              <li>
                <b>Senior Software Engineer</b> Marie Yu
              </li>
              <li>
                <b>Data Editor</b> Maya Mikelson
              </li>
              <li>
                <b>Data Editor</b> Hasika Sridhar
              </li>
              <li>
                <b>Product Design Manager</b> Anca Fu
              </li>
              <li>
                <b>Product Design Manager</b> Jenny Do
              </li>
            </UnorderedList>
          </section>
          <section>
            <p>
              <span className="font-bold">
                We have worked or currently work at these organizations:
              </span>{" "}
              Amazon, CNN, Google, HubSpot, Meta, Microsoft, MongoDB, Nike, NBC,
              San Francisco Standard, Snap, Spotify, Stripe, Susquehanna
              International Group, The Texas Tribune, Uber, Wall Street Journal, The Washington Post.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="underline hover:no-underline focus:no-underline" href={href}>
      {children}
    </a>
  );
}

function Anchor({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="hover:text-neutral-600 focus:text-neutral-600" href={href}>
      {children}
    </a>
  );
}

function UnorderedList({ children }: { children: ReactNode }) {
  return (
    <ul className="grid gap-1 list-disc pl-4 [text-wrap:balance]">
      {children}
    </ul>
  );
}
