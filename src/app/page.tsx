import Link from "next/link";
import type { ReactNode } from "react";

export default function Page() {
  return (
    <div className="grid gap-3 py-3 px-4 mx-auto my-0 max-w-[65ch] w-full">
      <nav>
        <Link href="/" className="flex gap-2 items-center flex-wrap w-fit">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-small.svg"
            alt="The Michigan Daily logo"
            width="30px"
            className="aspect-square"
          />
          <h1 className="font-serif font-bold text-3xl">Web Team</h1>
        </Link>
      </nav>
      <main className="font-serif grid gap-4">
        <p className="text-lg">
          The Michigan Daily Web Team leads the digital-first future of{" "}
          <a href="https://www.michigandaily.com/" className="underline">
            The Michigan Daily
          </a>
          , the student-run newspaper at the University of Michigan in Ann
          Arbor.
        </p>
        <section className="grid gap-2">
          <hgroup>
            <h2 className="font-serif font-bold text-2xl">Work</h2>
            <p>
              We work with The Daily&apos;s editorial teams to develop article
              layouts and write data-driven stories. We also design and build
              products to deliver our editorial content and internal tools to
              aid in publishing.
            </p>
          </hgroup>
          <section>
            <h3 className="font-serif font-bold text-xl">
              Product Engineering and Design
            </h3>
            <UnorderedList>
              <li>
                <Anchor href="https://games.michigandaily.com/crosswords/">
                  Crosswords
                </Anchor>
              </li>
              <li>
                Mobile application (
                <Anchor href="https://apps.apple.com/us/app/the-michigan-daily/id1615063980">
                  iOS
                </Anchor>{" "}
                and{" "}
                <Anchor href="https://play.google.com/store/apps/details?id=edu.umich.tmd&hl=en_US&gl=US">
                  Android
                </Anchor>
                )
              </li>
              <li>
                <Anchor href="https://join.michigandaily.com">
                  Join The Michigan Daily
                </Anchor>
              </li>
              <li>
                <Anchor href="https://specials.michigandaily.com/2023/best-of-ann-arbor/results/">
                  Best of Ann Arbor
                </Anchor>
              </li>
              <li>
                <Anchor href="https://miseducation.michigandaily.com/">
                  The Miseducation Project
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.therivalrygame.com/">
                  The Rivalry Edition
                </Anchor>
              </li>
              <li>Oven Mitts</li>
            </UnorderedList>
          </section>
          <section>
            <h3 className="font-serif font-bold text-xl">
              News Engineering and Design
            </h3>
            <UnorderedList>
              <li>
                <Anchor href="https://specials.michigandaily.com/2023/writing-in-the-digital-dark-age/">
                  Writing in the Digital Dark Age
                </Anchor>
              </li>
              <li>
                <Anchor href="https://specials.michigandaily.com/2023/the-devil-is-in-the-details-jen-kleins-empowerment-of-others/">
                  The Devil is in the Details: Jen Klein&apos;s empowerment of
                  others
                </Anchor>
              </li>
              <li>
                <Anchor href="https://specials.michigandaily.com/2023/summer-crush-edition/">
                  Summer Crush Edition
                </Anchor>
              </li>
              <li>
                <Anchor href="https://specials.michigandaily.com/2023/swiftie-project/">
                  The Swifte Project
                </Anchor>
              </li>
              <li>
                <Anchor href="https://mic.michigandaily.com/queer-in-color-2023/">
                  Queer in Color
                </Anchor>
              </li>
              <li>
                <Anchor href="https://mic.michigandaily.com/mic-style/">
                  MiC Style
                </Anchor>
              </li>
              <li>
                <Anchor href="https://mic.michigandaily.com/black-hair-series/">
                  The Black Hair Series
                </Anchor>
              </li>
              <li>
                <Anchor href="https://specials.michigandaily.com/2022/photographers-favorites/">
                  2022 Photographers&apos; Favorites
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/sports/football/the-rivalry-through-history/">
                  The rivalry through history
                </Anchor>
              </li>
              <li>
                <Anchor href="https://specials.michigandaily.com/2022/ballot-guide/">
                  The 2022 Ballot Guide
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/sports/mens-basketball/daily-basketball-beat-predicts-march-madness-men/">
                  The Daily men&apos;s basketball beat bracket reveal
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/statement/love-notes-2022/">
                  The 2022 Love Notes
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/news/administration/a-look-back-at-eight-years-of-umich-under-former-u-m-president-mark-schlissel/">
                  A look back at eight years of UMich under former U-M President
                  Mark Schlissel
                </Anchor>
              </li>
              <li>
                <Anchor href="https://magnify.michigandaily.us/covid1year/">
                  A look back: One year online at U-M
                </Anchor>
              </li>
              <li>
                <Anchor href="https://magnify.michigandaily.us/2020_timeline/">
                  20 Days to Remember in 2020
                </Anchor>
              </li>
            </UnorderedList>
          </section>
          <section>
            <h3 className="font-serif font-bold text-xl">Data Journalism</h3>
            <UnorderedList>
              <li>
                <Anchor href="https://www.michigandaily.com/news/administration/what-to-know-about-geos-pay-demands-an-in-depth-analysis-of-graduate-student-pay/">
                  What to know about GEO&apos;s pay demands: An in-depth
                  analysis of graduate student pay
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/web/how-walkable-is-your-block/">
                  How walkable is your block?
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/news/news-briefs/massive-power-outage-in-ann-arbor-leaves-thousands-in-the-dark/">
                  Massive power outage in Ann Arbor leaves thousands in the dark
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/statement/the-statement-2022-sex-survey/">
                  The Statement 2022 Sex Survey
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/news/elections/ann-arbor-2022-midterm-election-results/">
                  Ann Arbor 2022 Midterm Election Results
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/news/academics/umich-computer-science-program-restricts-admission-starting-in-fall-2023-as-demand-rises/">
                  UMich computer science program restricts admission starting in
                  fall 2023 as demand rises
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/news/business/more-than-100-ann-arbor-restaurants-closed-in-the-past-three-years-how-have-these-closures-affected-the-community/">
                  More than 100 Ann Arbor restaurants closed in the past three
                  years. How have these closures affected the community?
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/web/data/registration-tracker-see-which-courses-are-filling-up/">
                  Registration tracker: See which courses are filling up
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/sports/football/visualizing-the-history-of-the-game/">
                  Visualizing the history of The Game
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/campus-life/umich-class-of-2025-by-the-numbers-and-their-hopes-for-college/">
                  UMich Class of 2025: By the numbers and their hopes for
                  college
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/research/daily-analysis-finds-historically-large-salary-disparities-between-three-u-m-campuses/">
                  Daily analysis finds historically large salary disparities
                  between three U-M campuses
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/sports/mens-basketball/daily-beat-writers-predict-michigans-ncaa-tournament-fate-2/">
                  Daily beat writers predict Michigan&apos;s NCAA Tournament
                  fate
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/news/administration/daily-research-finds-only-one-building-named-after-person-color-12-after/">
                  Daily research finds only one building named after person of
                  color, 12 after women
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/news/crime/annual-dpss-report-shows-increase-number-sexual-misconduct-cases/">
                  Annual reports show an increase in number of U-M sexual
                  misconduct cases
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/news/academics/we-looked-301-high-schools-most-applicants-u-m-heres-what-we-found/">
                  We looked at the 301 high schools with the most applicants to
                  U-M. Here&apos;s what we found
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.michigandaily.com/research/how-effective-are-stay-home-orders-and-recommendations-reducing-spread-covid-19/">
                  A look at COVID-19 data before, during and after U-M&apos;s
                  two stay-in-place restrictions
                </Anchor>
              </li>
              <li>
                <Anchor href="https://magnify.michigandaily.us/online_classes/">
                  Visualizing the data: LSA instructors prepare for a mostly
                  online fall semester
                </Anchor>
              </li>
              <li>
                <Anchor href="https://magnify.michigandaily.us/covid_reopening/">
                  Reopening the State, Visualized
                </Anchor>
              </li>
            </UnorderedList>
          </section>
        </section>
        <section className="grid gap-2">
          <hgroup>
            <h2 className="font-serif font-bold text-2xl">People</h2>
            <p>
              We are students interested in the intersection of design, data
              science, computer science and journalism. Our team is divided into
              three: data journalism, engineering and product design.
            </p>
          </hgroup>
          <section>
            <h3 className="font-serif font-bold text-xl">Leadership Team</h3>
            <UnorderedList>
              <li>
                <b>Managing Online Editor</b> Angela Voit
              </li>
              <li>
                <b>Managing Online Editor</b> Shanshan Ye
              </li>
              <li>
                <b>Engineering Manager</b> Melina O&apos;Dell
              </li>
              <li>
                <b>Engineering Manager</b> Vishal Chandra
              </li>
              <li>
                <b>Senior Software Engineer</b> Eric Lau
              </li>
              <li>
                <b>Data Editor</b> Maya Mikelson
              </li>
              <li>
                <b>Data Editor</b> Matthew Bilik
              </li>
              <li>
                <b>Mobile Engineering Manager</b> Frank Wang
              </li>
              <li>
                <b>Mobile Project Manager</b> Marie Yu
              </li>
              <li>
                <b>Product Design Manager</b> Anca Fu
              </li>
              <li>
                <b>Product Design Manager</b> Jenny Do
              </li>
            </UnorderedList>
          </section>
        </section>
      </main>
    </div>
  );
}

function Anchor({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="underline" href={href}>
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