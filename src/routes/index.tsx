import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { LogoStage } from "@/components/logo-stage";

const ENGINE_URL = "https://cat-anbn-ultroid-pharma-genie3node.onrender.com/";

export const Route = createFileRoute("/")({ component: Home });

const STEPS = [
  {
    n: "01",
    title: "Bring the genotype",
    body: "Star alleles, diplotypes, activity scores. The raw variation stays in the record. The prescriber should not have to decode it between rooms.",
  },
  {
    n: "02",
    title: "Resolve function",
    body: "Poor, intermediate, normal, rapid, ultrarapid. The engine turns a genotype into how the drug will actually be handled in this person.",
  },
  {
    n: "03",
    title: "Leave with an action",
    body: "Adjust the dose, choose another drug, or document why the standard dose still holds. A prescription, not a pile of alleles.",
  },
] as const;

const GENES = [
  ["CYP2D6", "Codeine, tamoxifen, many antidepressants and antipsychotics."],
  ["CYP2C19", "Clopidogrel, several SSRIs, proton-pump inhibitors, voriconazole."],
  ["CYP2C9", "Warfarin, phenytoin, and some NSAIDs."],
  ["CYP2B6", "Efavirenz and other substrates with wide exposure swings."],
  ["CYP3A5", "Tacrolimus, especially after transplant."],
  ["CYP4F2", "Warfarin dose, read with VKORC1 and CYP2C9."],
  ["VKORC1", "Warfarin sensitivity at the drug target."],
  ["SLCO1B1", "Simvastatin exposure and myopathy risk."],
  ["ABCG2", "Rosuvastatin exposure."],
  ["TPMT", "Thiopurines: azathioprine, mercaptopurine, thioguanine."],
  ["NUDT15", "Thiopurine tolerance, read beside TPMT."],
  ["DPYD", "Fluoropyrimidines: capecitabine and fluorouracil."],
  ["UGT1A1", "Irinotecan and atazanavir."],
] as const;

const PLACES = [
  {
    n: "01",
    title: "Prescribers",
    body: "The allele becomes an action you can sign: adjust, avoid, or monitor. Before the first fill, not after the adverse event.",
  },
  {
    n: "02",
    title: "Pharmacists",
    body: "A new start can be checked against phenotype while the order is still in the pharmacy, not after it has left.",
  },
  {
    n: "03",
    title: "Health systems",
    body: "One dosing logic, applied the same way at every order. Not a PDF that lives in a folder nobody opens.",
  },
] as const;

function EngineLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={ENGINE_URL} className={className}>
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </a>
  );
}

function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 border-b border-mist/15 bg-deep/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" className="flex items-center gap-3 text-mist">
            <img src={logo} alt="" className="hidden h-10 w-auto sm:block" />
            <span className="display text-lg tracking-normal sm:text-xl">Pharma Genie</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-haze md:flex" aria-label="Page">
            <a href="#method" className="hover:text-mist">
              Method
            </a>
            <a href="#translation" className="hover:text-mist">
              Translation
            </a>
            <a href="#genes" className="hover:text-mist">
              Genes
            </a>
          </nav>
          <EngineLink className="cta cta-sm">Open the engine</EngineLink>
        </div>
      </header>

      <main id="content">
        <section id="top" className="relative overflow-hidden bg-forest">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in srgb, var(--color-mint) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-mint) 8%, transparent) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at 72% 42%, #000 10%, transparent 68%)",
            }}
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 pt-12 pb-16 md:px-8 md:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-4 lg:pb-20">
            <div className="max-w-2xl">
              <p className="kicker rise text-sage">Pharmacogenomic dosing engine</p>
              <h1 className="display rise rise-2 mt-5 text-4xl text-mist sm:text-5xl lg:text-6xl">
                Replacing legacy, one-size-fits-all medicine
                <span className="mt-5 block font-sans text-lg font-normal tracking-normal text-haze normal-case sm:text-xl lg:text-2xl lg:leading-snug">
                  with a custom pharmacogenomic dosing engine that turns complex genetic
                  variations into life-saving, precision prescriptions.
                </span>
              </h1>
              <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <EngineLink className="cta">Open the dosing engine</EngineLink>
                <a href="#method" className="cta-ghost">
                  See the method
                </a>
              </div>
              <p className="rise rise-4 mt-6 max-w-md text-sm text-haze">
                Genotype in. Phenotype resolved. A dose, an alternative, or a reason to
                hold — before the prescription is signed.
              </p>
            </div>
            <div className="rise rise-2">
              <LogoStage src={logo} />
              <p className="kicker mt-2 text-center text-sage">The mark · person, genome, dose</p>
            </div>
          </div>
        </section>

        <section className="border-y border-mist/10 bg-deep">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 md:px-8">
            <p className="kicker text-haze">Phenotypes the engine speaks</p>
            <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-mist">
              {["Poor", "Intermediate", "Normal", "Rapid", "Ultrarapid"].map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="size-1 rounded-full bg-sage" />
                  ) : null}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-foam text-ink">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <p className="kicker text-pine">The failure of a standard dose</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">
                A label dose is a compromise with a population the patient is not.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-ink/10 p-6 sm:p-7">
                <p className="kicker text-quiet">Legacy</p>
                <h3 className="display mt-4 text-2xl">One strength for the average adult</h3>
                <ul className="mt-5 space-y-3 text-quiet">
                  <li>Start from the label, then titrate when something goes wrong.</li>
                  <li>The same milligrams can be silent in an ultrarapid metabolizer and toxic in a poor one.</li>
                  <li>You learn the mismatch after the fill.</li>
                </ul>
              </article>
              <article className="rounded-3xl bg-forest p-6 text-mist sm:p-7">
                <p className="kicker text-sage">Pharma Genie</p>
                <h3 className="display mt-4 text-2xl">A dose argued from this genotype</h3>
                <ul className="mt-5 space-y-3 text-haze">
                  <li>Start from the alleles this person actually carries.</li>
                  <li>Resolve metabolizer status before choosing a strength or a drug.</li>
                  <li>You see the mismatch while the order can still change.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="method" className="bg-foam text-ink">
          <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
            <div className="max-w-2xl border-t border-ink/10 pt-16">
              <p className="kicker text-pine">Method</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">
                Three moves, from variation to a prescription you can defend.
              </h2>
            </div>
            <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              {STEPS.map((step) => (
                <li key={step.n} className="grid gap-3 py-8 md:grid-cols-[6rem_minmax(0,16rem)_1fr] md:gap-8 md:py-10">
                  <span className="display text-3xl text-pine">{step.n}</span>
                  <h3 className="display text-2xl">{step.title}</h3>
                  <p className="max-w-xl text-quiet">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="translation" className="bg-deep">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
            <div>
              <p className="kicker text-sage">Translation</p>
              <h2 className="display mt-4 text-3xl text-mist sm:text-4xl">
                A recommendation, not a genotype dump.
              </h2>
              <p className="mt-5 max-w-lg text-haze">
                Clinicians do not need another table of star alleles. They need the
                consequence: this drug, this phenotype, this action. The specimen is
                illustrative. It shows the shape of an answer, not a live chart.
              </p>
              <ul className="mt-8 space-y-4 text-mist">
                <li className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-mist/15 pt-4">
                  <span className="kicker text-sage">Input</span>
                  <span>Diplotype and the drug about to be ordered.</span>
                </li>
                <li className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-mist/15 pt-4">
                  <span className="kicker text-sage">Read</span>
                  <span>Function of the enzyme or transporter that handles it.</span>
                </li>
                <li className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-mist/15 pt-4">
                  <span className="kicker text-sage">Output</span>
                  <span>Avoid, adjust, or continue — in a sentence a prescriber can use.</span>
                </li>
              </ul>
            </div>

            <article className="paper p-6 sm:p-8" aria-label="Illustrative dosing output">
              <header className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="kicker text-pine">Illustrative output</p>
                <p className="text-sm text-quiet">Not a patient record</p>
              </header>
              <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-ink/10 py-5">
                <div>
                  <dt className="kicker text-quiet">Gene</dt>
                  <dd className="display mt-2 text-2xl">CYP2C19</dd>
                </div>
                <div>
                  <dt className="kicker text-quiet">Diplotype</dt>
                  <dd className="display mt-2 text-2xl">*2/*2</dd>
                </div>
                <div>
                  <dt className="kicker text-quiet">Phenotype</dt>
                  <dd className="mt-2 text-sm leading-snug text-ink">Poor metabolizer</dd>
                </div>
              </dl>
              <p className="kicker mt-6 text-quiet">Clopidogrel</p>
              <p className="display mt-2 text-5xl text-pine">Avoid</p>
              <p className="mt-4 max-w-md text-quiet">
                Standard dosing is unlikely to form the active metabolite. Where no
                contraindication exists, CPIC’s usual path is an alternative P2Y12
                inhibitor.
              </p>
              <p className="mt-6 text-sm text-quiet">Example only · guideline logic, not a signed order</p>
            </article>
          </div>
        </section>

        <section id="genes" className="bg-foam text-ink">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <p className="kicker text-pine">The variations that move a dose</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">
                A dosing engine has to speak the genes clinicians already act on.
              </h2>
              <p className="mt-4 text-quiet">
                These are the loci that most often change a strength, a drug, or a
                warning. Pharma Genie is built to turn that variation into an action rather
                than a lab attachment.
              </p>
            </div>
            <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              {GENES.map(([symbol, note]) => (
                <li
                  key={symbol}
                  className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-8"
                >
                  <span className="display text-xl text-pine">{symbol}</span>
                  <span className="text-quiet">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-foam text-ink">
          <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
            <div className="border-t border-ink/10 pt-16">
              <p className="kicker text-pine">Where it sits</p>
              <h2 className="display mt-4 max-w-2xl text-3xl sm:text-4xl">
                Beside the person who signs the order.
              </h2>
            </div>
            <ol className="mt-10 grid gap-10 md:grid-cols-3">
              {PLACES.map((place) => (
                <li key={place.n}>
                  <span className="display text-sm tracking-widest text-pine">{place.n}</span>
                  <h3 className="display mt-3 text-2xl">{place.title}</h3>
                  <p className="mt-3 text-quiet">{place.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-forest">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:px-8 md:py-28">
            <img src={logo} alt="" className="h-16 w-auto" />
            <h2 className="display max-w-3xl text-4xl text-mist sm:text-5xl">
              Stop prescribing to the average.
            </h2>
            <p className="max-w-xl text-haze">
              Replacing legacy, one-size-fits-all medicine with a custom pharmacogenomic
              dosing engine that turns complex genetic variations into life-saving,
              precision prescriptions.
            </p>
            <EngineLink className="cta">Open the dosing engine</EngineLink>
          </div>
        </section>
      </main>

      <footer className="border-t border-mist/10 bg-deep">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="display text-2xl text-mist">Pharma Genie</p>
            <p className="mt-2 max-w-md text-sm text-haze">
              Decision support for licensed clinicians and pharmacists. Nothing on this
              page is a prescription, a diagnosis, or a substitute for CPIC, labeling,
              or the patient in front of you.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm">
            <a href={ENGINE_URL} className="text-mint underline-offset-4 hover:underline">
              Open the dosing engine
            </a>
            <p className="text-haze">© 2026 Pharma Genie</p>
          </div>
        </div>
      </footer>
    </>
  );
}
