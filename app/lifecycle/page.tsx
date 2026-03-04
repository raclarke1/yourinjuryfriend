'use client';

import { useState, useEffect } from 'react';

export default function LifecyclePage() {
  const [activeSection, setActiveSection] = useState('accident');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'accident',
        'pre-litigation',
        'beginning',
        'discovery',
        'post-discovery',
        'settlement',
        'trial',
        'judgment',
        'appeal',
        'check',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const sections = [
    { id: 'accident', title: '1. The Accident' },
    { id: 'pre-litigation', title: '2. Pre-litigation' },
    { id: 'beginning', title: '3. Beginning of a Lawsuit' },
    { id: 'discovery', title: '4. Discovery' },
    { id: 'post-discovery', title: '5. Post-Discovery Motions' },
    { id: 'settlement', title: '6. Settlement' },
    { id: 'trial', title: '7. Trial' },
    { id: 'judgment', title: '8. Judgment' },
    { id: 'appeal', title: '9. Appeal' },
    { id: 'check', title: '10. The Check' },
  ];

  return (
    <>
      <title>The Lifecycle of a Lawsuit | Your Injury Friend</title>
      <meta
        name="description"
        content="A comprehensive guide walking you through every stage of a personal injury lawsuit, from the moment of injury to final resolution."
      />

      <div className="min-h-screen bg-warmWhite">
        {/* Hero Section */}
        <div className="bg-blue text-warmWhite py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">The Lifecycle of a Lawsuit</h1>
            <p className="text-xl text-warmWhite/90 max-w-3xl">
              Lawsuits are complex. This guide walks you through every stage of a personal injury case, from the
              moment of injury to final resolution.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sticky Table of Contents */}
            <div className="lg:col-span-1">
              <nav className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-bold text-navy mb-4">Contents</h2>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left text-sm w-full py-1 transition-colors ${
                          activeSection === section.id
                            ? 'text-red font-semibold'
                            : 'text-gray-600 hover:text-navy'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-lg shadow-md p-8 lg:p-12 prose prose-lg max-w-none">
                {/* Section 1: The Accident */}
                <section id="accident" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">1. The Accident</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: Gathering Evidence</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The moments right after an accident are some of the most important for your case. Photos, videos,
                    and witness statements can disappear fast, and once they're gone, you can't get them back. The
                    stronger your evidence, the harder it is for the insurance company to deny what really happened.
                    Read more about how to gather evidence after an accident…
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Preserve Evidence</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Once you've gathered evidence, protecting it is just as important. Photos can be deleted, texts can
                    get lost, and damaged items can be thrown away. Preserving what you already have, and making sure
                    your attorney gets it, keeps the other side from twisting the facts against you. Don't "clean up"
                    or alter anything; let your lawyer decide how best to use it. Read more about the importance of
                    preserving evidence…
                  </p>
                </section>

                {/* Section 2: Pre-litigation */}
                <section id="pre-litigation" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">2. Pre-litigation</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: Do I Have a Case?</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Not every wrong is a lawsuit. The first question is always: what are my damages? If you don't have
                    meaningful financial, physical, or emotional losses, a lawsuit often isn't worth pursuing. Even if
                    damages exist, you still have to consider other factors like whether the statute of limitations has
                    expired, whether you assumed the risk (like signing a waiver), and whether there's a liable party
                    who can actually pay. Read more about what you should consider when deciding whether to sue…
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Hiring an Attorney</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Most personal injury lawyers work on contingency fees, so you don't pay unless you win. Be cautious
                    of papermill firms that treat clients like numbers. Always meet with the actual attorney, ask direct
                    questions about their experience, and review the contract carefully before signing. The process is
                    about finding the right fit, and finding someone you can trust to handle your case. Read more about
                    hiring an attorney…
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: Treatment and Liens</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Your medical treatment isn't just about getting better, it becomes the foundation of your case.
                    Every doctor's visit, test, and therapy session creates records that establish your injuries. At the
                    same time, medical providers, insurers, or even government programs may place liens on your case,
                    giving them a right to repayment out of any settlement.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: The Demand Letter</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A demand letter is the formal start of negotiation. It lays out what happened, the injuries
                    sustained, and the compensation being sought. Think of it as both a summary of the case and an
                    opening move in settlement discussions.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Your Communication with the Other Side</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Before a lawsuit is filed, most communication happens between attorneys and insurance companies.
                    These early conversations set the tone for the case. While they might seem routine, what gets said
                    here can impact how quickly, or if the case resolves. Important note here: if you are represented by
                    an attorney do not communicate with the other side (insurance company or individual) without your
                    attorney present.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: Posturing Now: Case Strategy</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Even in the pre-litigation stage, strategy matters. Both sides are watching how the other acts: how
                    serious the claim looks, how well the evidence lines up, and whether the case might head to trial.
                    This early posturing influences negotiations and can shape the entire lawsuit. Essentially, your goal
                    is to negotiate from a position of strength.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">G: Mediation, Arbitration, or a Lawsuit</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Not every dispute ends up in a courtroom. Mediation and arbitration offer alternative ways to
                    resolve cases, often faster and with less expense. Understanding the differences between these
                    options and how they compare to filing a lawsuit helps explain the paths a case may take. In some
                    cases, you may not have an option.
                  </p>
                </section>

                {/* Section 3: Beginning of a Lawsuit */}
                <section id="beginning" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">3. Beginning of a Lawsuit</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: The Complaint</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A lawsuit formally begins when the plaintiff files a complaint with the court. This isn't just
                    paperwork, it is the roadmap for the entire case. The complaint describes what happened, identifies
                    who is responsible, sets out the legal claims, and requests damages or other relief. It doesn't need
                    to prove the case at this stage, but it must meet certain legal standards. A well-drafted complaint
                    frames the issues and can influence how the defense, the court, and even a jury later view the case.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Service of Process</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Filing a complaint isn't enough. The defendant must be formally notified through a process called
                    "service of process." This usually involves delivering the lawsuit documents in a specific, legally
                    approved way, often by a process server or sheriff. The rules are strict because the court wants to
                    make sure no one is dragged into a case without knowing it. If service isn't done correctly, the
                    case can stall or even be dismissed before it gets going.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: The Responsive Pleading</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Once served, the defendant has a limited time, often 21 to 30 days, to respond. This response, known
                    as the "answer," admits or denies each allegation in the complaint. Defendants can also raise
                    defenses, file counterclaims against the plaintiff, or bring in other parties they believe share
                    responsibility. Sometimes, instead of answering, the defense files a motion to dismiss, arguing the
                    case shouldn't proceed at all. These early filings signal how aggressively each side plans to fight
                    and help define the legal battlefield.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: Early Case Procedure</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    After the initial filings, courts often impose early procedures to keep cases on track. Some states
                    require case management conferences, where the judge meets with the lawyers to set schedules. Others
                    mandate early disclosures, forcing both sides to share key documents or witness lists right away. In
                    some jurisdictions, little happens until discovery begins, while in others, strict deadlines and
                    early obligations can dramatically shape the case. Understanding these variations is key to seeing
                    why lawsuits move faster in some places and slower in others.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Timing Under Civil Procedure Rules</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Civil procedure is built on deadlines. From the moment a complaint is filed, a clock starts ticking
                    for the defendant to respond. Other deadlines govern when defenses must be raised, when motions can
                    be filed, and when disclosures are due. Missing a deadline can mean losing rights permanently, for
                    example, failing to raise certain defenses on time may waive them forever. These strict timelines
                    show why organization and attention to detail matter so much in litigation, especially at the
                    beginning.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: Early Motion Practice</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Before discovery ever begins, many cases face a round of "motion practice." Defendants may file
                    motions to dismiss claiming they believe there is no legal basis, motions to strike irrelevant or
                    improper allegations, or challenges to the court's jurisdiction. Plaintiffs sometimes file motions
                    too, for example to strike affirmative defenses. These motions can narrow the scope of the case,
                    shape the legal issues, and sometimes even end the lawsuit entirely before it leaves the starting
                    line.
                  </p>
                </section>

                {/* Section 4: Discovery */}
                <section id="discovery" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">4. Discovery</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: The Purpose of Discovery</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Discovery is the information-gathering stage of litigation. Both sides exchange evidence, documents,
                    and testimony so the case doesn't come as a surprise at trial. The goal is fairness: each party
                    should have access to the facts needed to present their claims or defenses. While discovery often
                    feels tedious and time-consuming, it's the foundation of nearly every settlement and trial. Contrary
                    to what the movies suggest, there is rarely such thing as a "gotcha" moment at trial. Many cases are
                    won and lost in the discovery stage.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Written Discovery</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Written discovery is the first major step. It includes interrogatories (formal written questions
                    answered under oath), requests for production (demands for documents, photos, medical records,
                    emails, and more), and requests for admission (statements the other side must admit or deny). These
                    tools create a paper trail that locks in facts, exposes inconsistencies, and narrows the issues in
                    dispute.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: Depositions</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Depositions are live, sworn testimony taken outside of court but recorded for use later. Lawyers
                    question parties, witnesses, or experts, while a court reporter or videographer captures every word.
                    Depositions let attorneys test credibility, preview how witnesses might perform at trial, and
                    sometimes uncover new evidence altogether. They're often turning points in a case.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: Subpoenas and Third-Party Discovery</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Not all evidence comes from the plaintiff and defendant. Subpoenas allow lawyers to obtain records
                    or testimony from third parties such as employers, banks, phone companies, or medical providers.
                    This kind of discovery can supply critical context, for example, confirming lost wages or
                    establishing a timeline of events.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Expert Discovery</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Complex cases often require expert witnesses, such as doctors, engineers, or accident reconstruction
                    specialists. Courts usually have special rules for disclosing expert opinions and for deposing the
                    experts themselves. Because expert testimony can carry enormous weight at trial, this phase of
                    discovery often determines how strong each side's case really is.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: Discovery Disputes</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Discovery isn't always smooth. Parties frequently argue about whether requests are too broad, too
                    intrusive, or irrelevant. When they can't resolve these fights on their own, judges step in through
                    motions to compel or protective orders. These disputes can drag out timelines and increase costs,
                    but they also shape the evidence that will ultimately reach trial.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">G: Sanctions for Discovery Violations</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Courts take discovery obligations seriously. If a party hides documents, refuses to answer, or
                    destroys evidence, the judge can impose sanctions. These range from fines to exclusion of evidence,
                    and in extreme cases, dismissal of claims or defenses altogether. Sanctions are rare but powerful,
                    showing just how critical honesty and cooperation are in the discovery process.
                  </p>
                </section>

                {/* Section 5: Post-Discovery Motions */}
                <section id="post-discovery" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">5. Post-Discovery Motions</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: The Purpose of Post-Discovery Motions</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Once discovery ends, both sides finally know what evidence is available. At this stage, parties
                    often file motions asking the judge to resolve issues before trial. These motions can seek to
                    dismiss the case entirely, limit what evidence will be presented, or clarify the legal boundaries of
                    the dispute. Post-discovery motion practice is essentially the "filter" that shapes what the trial
                    will look like and sometimes whether there will be a trial at all.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Motions for Summary Judgment</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A motion for summary judgment is the most common and important post-discovery motion. The moving
                    party argues that there are no genuine disputes of material fact and that the law entitles them to
                    judgment without a trial. In plain terms: even if you take the evidence in the light most favorable
                    to the other side, they still can't win. Judges can grant summary judgment in whole or in part,
                    sometimes ending cases entirely or narrowing them to a few specific issues.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: Motions in Limine</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Motions in limine are requests to exclude certain evidence before trial begins. For example, one
                    side may argue that a piece of evidence is irrelevant, overly prejudicial, or inadmissible under the
                    rules of evidence. By resolving these questions early, judges prevent juries from hearing
                    information that could unfairly influence them. These motions are critical for controlling the flow
                    of trial and keeping the focus on the evidence that actually matters.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: Daubert / Frye Motions (Challenging Experts)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    In many cases, expert witnesses play a decisive role. A Daubert or Frye motion challenges whether an
                    expert's methods are reliable and accepted enough to be presented to a jury. If granted, the motion
                    can exclude an expert entirely, leaving a party without the testimony they need to prove their
                    claims. Because experts are often central in personal injury, medical, and technical cases, these
                    motions can effectively decide the outcome before trial even starts.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Other Dispositive Motions</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Not every motion at this stage is about summary judgment. Parties may also file renewed motions to
                    dismiss, motions for judgment on the pleadings, or partial summary judgment motions that aim to
                    knock out specific claims or defenses. These filings don't always end a case, but they can
                    significantly narrow the issues, shorten trial time, and reduce the risks for the party that wins
                    them.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: The Court's Role in Shaping Trial</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Judges use rulings on post-discovery motions to set the stage for trial. By deciding what evidence
                    comes in, what claims remain, and what issues the jury will hear, the court plays a powerful role in
                    shaping how the case unfolds. In some instances, the judge's decisions at this stage eliminate the
                    need for a trial entirely. Even when a case proceeds, these rulings define its scope and strategy
                    moving forward.
                  </p>
                </section>

                {/* Section 6: Settlement */}
                <section id="settlement" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">6. Settlement</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: The Role of Settlement in Litigation</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Only a very small fraction of civil cases actually make it all the way to trial. The overwhelming
                    majority are resolved through settlement. Settlement discussions often begin informally and may
                    continue throughout the lawsuit, but they usually intensify right before trial, when both sides
                    fully grasp the risks, costs, and uncertainty of letting a jury decide. Settlement offers
                    predictability, saves significant time and money, and allows the parties to control the outcome
                    rather than leaving it in the court's hands.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Timing of Settlement</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Cases can settle at almost any point: before a lawsuit is even filed, during discovery, after major
                    motions, or in the middle of trial. The timing often influences the amount. Early settlements may be
                    lower because little evidence has been developed. As the case progresses and each side sees the
                    strengths and weaknesses of the evidence, settlement values shift. Right before trial, when the
                    costs and risks are highest, parties are often most motivated to resolve the dispute.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: Formal Settlement Negotiations</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Formal negotiations usually happen through the parties' attorneys, who exchange offers and
                    counteroffers. These discussions aren't random, they are driven by the evidence uncovered in
                    discovery, rulings on motions, and the looming pressure of trial. Negotiations can be brief or
                    stretch on for months, but they're always about the same calculation: what is the case worth
                    compared to the risk of letting a jury decide?
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: Mediated Settlements</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Sometimes the parties can't reach agreement on their own. Courts often require mediation, which is a
                    structured process where a neutral mediator helps both sides evaluate their positions and search for
                    common ground. Mediation can be informal or highly structured, but its purpose is the same: to break
                    impasses and help parties see the benefits of resolution. Even when mediation doesn't result in a
                    settlement, it often narrows the gap between the parties.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Settlement Agreements and Releases</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A settlement isn't complete until it's in writing. The settlement agreement spells out the terms,
                    including the amount of money paid, when it must be paid, and what claims are being released. Most
                    agreements include a broad "release of claims," meaning the plaintiff cannot bring another lawsuit
                    over the same incident. Some also include confidentiality clauses or other special terms. Once
                    signed, the agreement becomes a binding contract.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: Enforcement of Settlements</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Most settlements are honored, but occasionally disputes arise after the agreement is signed, usually
                    over payment. Courts treat settlement agreements as enforceable contracts. If one side refuses to
                    comply, the other can return to court to enforce the deal. In some cases, the court may even enter
                    judgment for the settlement amount, giving the prevailing party full collection rights.
                  </p>
                </section>

                {/* Section 7: Trial */}
                <section id="trial" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">7. Trial</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: The Rarity of Trial</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Very few lawsuits actually make it to trial, only a small fraction. Most are resolved long before,
                    either through settlement or dismissal. But for the cases that do reach this stage, trial is the
                    ultimate test. It is where all the evidence, arguments, and preparation come together in front of a
                    judge or jury. Trials are high-stakes, time-consuming, unpredictable, and extremely expensive, which
                    is why both sides often fight so hard to avoid them.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Jury Selection (Voir Dire)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    If the case is tried to a jury, the process begins with jury selection, known as voir dire.
                    Attorneys (and sometimes the judge) question potential jurors to uncover biases or conflicts of
                    interest. Each side can request that certain jurors be excused for cause or use a limited number of
                    peremptory strikes to remove jurors without giving a reason. The goal is to seat a fair and
                    impartial jury. In some cases, no jury is used at all, and the judge alone decides, which is called
                    a bench trial.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: Opening Statements</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Once a jury is selected, each side presents an opening statement. These are not arguments, but
                    roadmaps. Attorneys outline the evidence they expect to present and give the jury a preview of their
                    case theory. Openings set the tone and help jurors understand what to watch for during the
                    presentation of evidence.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: Presentation of Evidence</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The plaintiff presents their case first, calling witnesses, introducing documents, and laying out the
                    story piece by piece. The defense has the right to cross-examine every witness. When the plaintiff
                    finishes, the defense presents its own evidence, often trying to undercut the plaintiff's claims or
                    raise alternative explanations. This stage is the core of trial, where the jury hears the facts on
                    which they must decide.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Expert and Lay Witness Testimony</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Trials often feature two types of witnesses: lay witnesses, who testify about what they saw or
                    experienced, and expert witnesses, who explain technical or specialized issues such as medical
                    injuries, accident reconstruction, or economic losses. Expert testimony can be especially
                    influential, but both types of witnesses are subject to cross-examination, which is the opposing
                    attorney's chance to test credibility and poke holes in the testimony.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: Closing Arguments</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    After both sides have presented their evidence, attorneys deliver closing arguments. Unlike opening
                    statements, closings are persuasive. Lawyers weave the evidence together, highlight strengths, point
                    out weaknesses in the other side's case, and argue for a particular outcome. Closings are often
                    dramatic and can leave a lasting impression on the jury before deliberations begin.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">G: Jury Instructions and Deliberation</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Before the jury retires to deliberate, the judge provides instructions on the law. These
                    instructions guide the jury on what legal standards to apply, how to consider evidence, and what
                    questions they must answer. Once instructed, the jury deliberates in private, reviewing evidence and
                    debating until they reach a decision. The length of deliberation can vary from hours to weeks
                    depending on the complexity of the case.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">H: The Verdict</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The trial culminates in the verdict. The jury (or judge in a bench trial) announces whether the
                    defendant is liable and, if so, how much the plaintiff should recover in damages. Some jurisdictions
                    require unanimous verdicts, while others allow a majority decision. The verdict is read in open
                    court and becomes the formal decision of the case, at least for now.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">I: Post-Trial Motions (Bridge to Appeals)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Even after a verdict, the trial stage isn't necessarily over. Parties can file post-trial motions,
                    such as motions for a new trial or for judgment notwithstanding the verdict, challenging errors they
                    believe occurred. These motions rarely succeed in overturning a verdict outright, but they preserve
                    issues for appeal. They mark the transition from trial to the appellate process, where the case may
                    continue in a different form.
                  </p>
                </section>

                {/* Section 8: Judgment */}
                <section id="judgment" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">8. Judgment</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: What a Judgment Is</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A judgment is the court's official, written decision at the end of a case. It reflects the outcome
                    reached at trial, or through dismissal or settlement approval, and sets out what the winning party
                    is entitled to. While a jury verdict decides liability and damages, the judgment is the formal order
                    that makes those findings legally enforceable. Without a judgment, there's nothing to collect or
                    appeal.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Entry of Judgment</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Once a verdict is reached, the court "enters" judgment by recording it on the official docket. This
                    step is more than clerical, it is the point that triggers deadlines for appeals, post-trial motions,
                    and enforcement actions. Until judgment is entered, the case remains open, but once entered, it
                    becomes a binding court order.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: Post-Trial Motions Affecting Judgment</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    After a verdict, parties may ask the court to alter or set aside the judgment. Common motions
                    include a motion for judgment notwithstanding the verdict (arguing the evidence doesn't support the
                    outcome) or a motion to amend the judgment to correct errors. These filings don't always succeed,
                    but they can delay finality and preserve issues for appeal.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: Types of Judgments</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Judgments aren't one-size-fits-all. The most common is a money judgment, ordering one side to pay
                    damages. But courts can also issue declaratory judgments (clarifying rights and obligations) or
                    injunctions (ordering someone to do or stop doing something). In personal injury cases, judgments
                    often involve compensatory damages, and sometimes punitive damages, designed to punish extreme
                    misconduct.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Enforcement of Judgments</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Winning a judgment doesn't guarantee payment. If the losing party doesn't voluntarily comply, the
                    winner may need to use enforcement tools. These include wage garnishment, bank levies, property
                    liens, or even contempt proceedings. Enforcement can take time and effort, but the judgment provides
                    the legal authority to pursue collection.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: Interest and Costs</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Judgments usually accrue post-judgment interest, which continues to build until the debt is paid.
                    Courts may also order the losing party to pay certain costs, such as filing fees or deposition
                    expenses. In some cases, statutes allow for attorney's fees as well. These additions can
                    significantly increase the total amount owed over time.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">G: Judgment Finality and Appeals</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A judgment becomes final once the deadlines for post-trial motions and appeals pass. Until then, it
                    can still be challenged in higher courts. Once final, the judgment closes the trial court phase of
                    the case and stands as the binding resolution of the dispute. This is the point where either
                    enforcement begins in earnest or the case shifts into the appeals process.
                  </p>
                </section>

                {/* Section 9: Appeal */}
                <section id="appeal" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">9. Appeal</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: The Purpose of Appeals</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    An appeal is not a second trial. The appellate court doesn't hear new evidence or call new
                    witnesses, rather, it reviews the record from the trial court to decide whether legal errors were
                    made. The purpose is to ensure the law was applied fairly and correctly, not to relitigate the
                    facts.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: Notice of Appeal and Deadlines</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Appeals begin with a notice of appeal. This filing must be made quickly, often within 30 days of
                    judgment. Deadlines are strict, and missing them almost always means losing the right to appeal
                    altogether. This urgency is why appellate timelines are considered some of the most unforgiving in
                    the legal system.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: The Appellate Record</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Appellate courts only review the evidence and rulings that were part of the trial court record. This
                    includes transcripts, exhibits, and motions, but not new testimony or documents. If something wasn't
                    presented at trial, it usually can't be added later. The record is the foundation of every appeal.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: Briefing the Issues</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Written briefs are the centerpiece of an appeal. The appellant (the party who lost at trial) argues
                    in writing why the trial court made legal mistakes. The appellee responds with reasons the trial
                    judge got it right. These briefs are detailed, heavily researched, and often more influential than
                    oral arguments.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Oral Argument</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    In some cases, appellate courts schedule oral argument. Lawyers for each side appear before a panel
                    of judges to answer questions about their briefs. These arguments are usually short, sometimes only
                    15–30 minutes, but they give judges the chance to press attorneys on the hardest issues.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: Standards of Review</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Appellate courts don't treat every issue the same way. Some questions of law are reviewed "de novo,"
                    meaning the appellate judges decide them fresh. Other issues, like evidentiary rulings, are reviewed
                    under a deferential "abuse of discretion" standard. The standard of review often determines how
                    difficult it will be to overturn the trial court's decision.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">G: Appellate Decisions</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    After reviewing the record, the appellate court issues a written decision. It can affirm the
                    judgment (agreeing with the trial court), reverse it (overturning the decision), or remand the case
                    (sending it back for more proceedings). Sometimes the decision ends the case entirely; other times
                    it puts the parties right back in front of the trial judge.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">H: Further Appeals</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The appellate process doesn't always end at the first appeal. Parties can sometimes ask a higher
                    court, such as a state supreme court or even the U.S. Supreme Court, to review the case. But these
                    courts accept only a small fraction of petitions, usually those raising broad legal questions or
                    issues of public importance.
                  </p>
                </section>

                {/* Section 10: The Check */}
                <section id="check" className="mb-16">
                  <h2 className="text-3xl font-bold text-navy mb-6">10. The Check</h2>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">A: When the Case Is Truly Over</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Winning at trial or reaching a settlement doesn't mean an immediate payday. Cases are not truly over
                    until any appeals or post-trial motions are resolved. Defendants may delay payment while challenging
                    the outcome, and interest may accrue during this time. Payment usually comes only once the judgment
                    is final and enforceable, giving both sides certainty that the dispute is settled for good.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">B: How Payment Works</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    When the money finally arrives, it doesn't go straight to the client. Settlement checks or judgment
                    payments are typically issued to the plaintiff's attorney, who deposits the funds into a client
                    trust account. From there, the lawyer distributes the money according to the settlement or judgment
                    terms, first deducting fees, costs, and lien obligations before the client receives their share.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">C: Attorney's Fees and Case Costs</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    In contingency fee cases, the attorney's fee comes out of the recovery, usually as a set percentage
                    of the total amount. In addition, lawyers are reimbursed for case expenses advanced during
                    litigation, things like filing fees, medical records, depositions, and expert witnesses. This
                    ensures the lawyer is compensated for both their time and the resources invested in the case.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">D: Paying Off Liens and Medical Bills</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Many settlements or judgments are subject to liens. Healthcare providers, health insurers, and
                    government programs like Medicare or Medicaid may have a legal right to repayment from the recovery.
                    These liens must be resolved before the client receives their share. Depending on the size of the
                    medical bills, liens can significantly reduce the net recovery, making them one of the most
                    important parts of the final distribution process.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">E: Final Distribution to the Client</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    After attorney's fees, costs, and liens are taken care of, the remaining funds are distributed to
                    the client. Attorneys usually provide a written settlement statement that shows exactly how the
                    money was allocated. This transparency helps the client see the full picture of what was recovered
                    and where the money went before they receive their check.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">F: Tax Considerations</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Not every dollar from a settlement or judgment is treated the same for tax purposes. Compensation
                    for physical injuries is usually not taxable, but other categories, such as punitive damages,
                    interest, or awards for non-physical claims, may be. While personal injury lawyers generally don't
                    provide tax advice, clients are often advised to speak with a tax professional before making
                    financial decisions with their recovery.
                  </p>

                  <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">G: Closure and Moving Forward</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Receiving the check marks the practical end of the lawsuit. While no amount of money erases an
                    accident or injury, the compensation helps cover medical expenses, lost wages, and future needs. It
                    also underscores an important truth: the civil justice system is primarily about making people
                    financially whole, not about delivering perfect justice. For many clients, this final stage brings
                    closure and the ability to move forward.
                  </p>
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
