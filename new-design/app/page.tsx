"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FileText, Download, ChevronRight, ExternalLink } from 'lucide-react';

const VampireChecker = () => {
  const [input, setInput] = useState('1260');
  const [result, setResult] = useState('');

  const check = () => {
    if (!/^\d{4}$/.test(input)) {
      setResult('Bitte genau 4 Ziffern eingeben.');
      return;
    }
    const num = parseInt(input);
    for (let i = 10; i < 100; i++) {
      for (let j = i; j < 100; j++) {
        if (i * j === num) {
          const strV = input.split('').sort().join('');
          const strFangs = (i.toString() + j.toString()).split('').sort().join('');
          if (strV === strFangs && !(i % 10 === 0 && j % 10 === 0)) {
            setResult(`✅ ${num} ist eine Vampirzahl! (Reißzähne: ${i} × ${j})`);
            return;
          }
        }
      }
    }
    setResult(`❌ ${num} ist keine 4-stellige Vampirzahl.`);
  };

  return (
    <div className="bg-gray-50 p-5 border border-gray-200 rounded-sm mt-6">
      <h4 className="font-bold text-[#1a365d] mb-2">Interaktives Modul: Vampirzahlen-Detektor</h4>
      <p className="text-sm text-gray-600 mb-4">Clifford Pickover prägte 1994 den Begriff der &quot;Vampirzahlen&quot;. Testen Sie eine 4-stellige Zahl (z.B. 1260, 1395, 1435):</p>
      <div className="flex gap-2">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} maxLength={4} className="border border-gray-300 px-3 py-2 rounded-sm w-32 focus:outline-none focus:border-[#1a365d]" />
        <button onClick={check} className="bg-[#1a365d] text-white px-5 py-2 rounded-sm hover:bg-[#2a4a7f] transition-colors font-semibold">Prüfen</button>
      </div>
      {result && <p className="mt-4 font-mono text-sm font-semibold text-red-600">{result}</p>}
    </div>
  );
};

const GruQuiz = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    { q: "In welchem Jahr wurde die GRU gegründet?", options: ["1917", "1918", "1945", "1991"], a: 1 },
    { q: "Wer war der Gründer der GRU?", options: ["Josef Stalin", "Wladimir Lenin", "Leo Trotzki", "Felix Dserschinski"], a: 2 },
    { q: "Welche Spezialeinheit untersteht operativ der GRU?", options: ["Alpha Group", "Vympel", "Spetsnaz", "Zaslon"], a: 2 }
  ];

  const handleAnswer = (idx: number) => {
    if (idx === questions[step].a) setScore(score + 1);
    setStep(step + 1);
  };

  if (step >= questions.length) {
    return (
      <div className="bg-[#1a365d] text-white p-6 mt-6 rounded-sm border-l-4 border-red-600">
        <h4 className="font-bold text-lg mb-2">Quiz Abgeschlossen</h4>
        <p>Ihre Sicherheitsfreigabe-Punktzahl: {score} / {questions.length}</p>
        <button onClick={() => {setStep(0); setScore(0);}} className="mt-4 bg-white text-[#1a365d] px-4 py-2 text-sm font-bold hover:bg-gray-200 transition-colors">Erneut versuchen</button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 border border-gray-200 mt-6 rounded-sm">
      <h4 className="font-bold text-[#1a365d] mb-4">Sicherheitsüberprüfung: GRU-Historie</h4>
      <p className="text-sm font-semibold mb-3 text-gray-500">Frage {step + 1} von {questions.length}</p>
      <p className="mb-4 font-medium text-gray-800">{questions[step].q}</p>
      <div className="space-y-2">
        {questions[step].options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(i)} className="block w-full text-left px-4 py-3 bg-white border border-gray-300 hover:bg-[#1a365d] hover:text-white transition-colors text-sm font-medium">
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

const Timeline = () => {
  const events = [
    { year: "1918", title: "Gründung", desc: "Auf Befehl von Leo Trotzki als Registrierungsdirektorat gegründet, um militärische Aufklärung zu zentralisieren." },
    { year: "1940er", title: "Rote Kapelle", desc: "Umfangreiche nachrichtendienstliche Operationen in Westeuropa während des Zweiten Weltkriegs." },
    { year: "1992", title: "Post-Sowjetische Ära", desc: "Integration in die Streitkräfte der neu gegründeten Russischen Föderation." },
    { year: "2010+", title: "Cyber-Operationen", desc: "Zunehmender Fokus auf asymmetrische Kriegsführung, Kryptographie und Cyber-Aufklärung (z.B. APT28)." }
  ];
  return (
    <div className="mt-8 border-l-2 border-red-600 ml-3 space-y-6">
      {events.map((ev, i) => (
        <div key={i} className="relative pl-6">
          <div className="absolute w-3 h-3 bg-[#1a365d] rounded-full -left-[7px] top-1.5 border-2 border-white"></div>
          <h5 className="font-bold text-[#1a365d]">{ev.year}: {ev.title}</h5>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">{ev.desc}</p>
        </div>
      ))}
    </div>
  );
};

const TabHome = () => (
  <>
    <div className="mb-10 relative h-72 w-full bg-gray-200 rounded-sm overflow-hidden shadow-inner">
      <Image 
        src="https://picsum.photos/seed/mathematics-intelligence/800/400" 
        alt="CAP-GRU Facility" 
        fill 
        className="object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-[#1a365d] bg-opacity-90 text-white p-3 text-sm font-medium border-t-2 border-red-600">
        Forschungscampus für fraktale Geometrie und verdeckte Operationen
      </div>
    </div>

    <section className="mb-12">
      <h2 className="text-2xl font-extrabold text-[#1a365d] mb-6 border-b-2 border-gray-200 pb-3 flex items-center">
        <span className="w-2 h-6 bg-red-600 mr-3 inline-block"></span>
        Grundsätzliches Selbstverständnis – Unser Leitbild
      </h2>
      <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
        <p>
          Willkommen bei der <strong>CAP-GRU</strong>. Unser Verein verbindet die grenzenlose mathematische und philosophische Neugier von <em>Clifford A. Pickover</em> mit der operativen Präzision und strategischen Weitsicht der <em>Glavnoye Razvedyvatelnoye Upravlenie (GRU)</em>. 
        </p>
        <p>
          Wir glauben, dass das Verständnis höherer Dimensionen, fraktaler Geometrie und der Geheimnisse des Universums untrennbar mit der Sammlung und Auswertung globaler Geheimdienstinformationen verbunden ist. Unser Leitbild basiert auf der Annahme, dass die Realität ein komplexes Muster ist, das nur durch rigorose mathematische Analyse und verdeckte Aufklärung entschlüsselt werden kann.
        </p>
        <p>
          In unserer Einrichtung fördern wir Individuen, die sowohl die Schönheit von Möbius-Bändern schätzen als auch in der Lage sind, asymmetrische Bedrohungslagen im kybernetischen Raum zu neutralisieren.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-extrabold text-[#1a365d] mb-6 border-b-2 border-gray-200 pb-3 flex items-center">
        <span className="w-2 h-6 bg-red-600 mr-3 inline-block"></span>
        Ziele unserer pädagogischen Arbeit
      </h2>
      <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
        <p>
          Die pädagogische Arbeit der CAP-GRU zielt darauf ab, junge Talente in einem ganzheitlichen Ansatz zu fördern. Zu unseren Kernzielen gehören:
        </p>
        <ul className="list-none space-y-4 mt-4">
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
            <span><strong>Kognitive Expansion:</strong> Studium von Pickovers &quot;The Math Book&quot; zur Erweiterung des Verständnisses für Unendlichkeit und Paradoxien.</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
            <span><strong>Operative Resilienz:</strong> Physisches und psychologisches Training nach den Standards der Spetsnaz-Spezialeinheiten.</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
            <span><strong>Kryptographische Exzellenz:</strong> Entwicklung unknackbarer Chiffren unter Verwendung mehrdimensionaler mathematischer Modelle.</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
            <span><strong>Globale Integration:</strong> Vorbereitung auf den verdeckten Einsatz in internationalen mathematischen Fakultäten und Forschungseinrichtungen.</span>
          </li>
        </ul>
      </div>
    </section>
  </>
);

const TabPickover = () => (
  <>
    <section className="mb-12">
      <h2 className="text-2xl font-extrabold text-[#1a365d] mb-6 border-b-2 border-gray-200 pb-3 flex items-center">
        <span className="w-2 h-6 bg-red-600 mr-3 inline-block"></span>
        Clifford A. Pickover: Biografie &amp; Werk
      </h2>
      <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
        <p>
          <strong>Clifford A. Pickover</strong> (*1957) ist ein US-amerikanischer Autor, Redakteur und Kolumnist in den Bereichen Wissenschaft, Mathematik, Science-Fiction und Innovation. Er hat über 50 Bücher veröffentlicht, die in mehr als einem Dutzend Sprachen übersetzt wurden.
        </p>
        <p>
          Als Forscher am IBM Thomas J. Watson Research Center hat er über 700 US-Patente angemeldet. Seine Arbeit konzentriert sich auf die Visualisierung komplexer mathematischer Konzepte, fraktale Geometrie und die Grenzen des menschlichen Wissens.
        </p>
        
        <h3 className="text-lg font-bold text-[#1a365d] mt-8 mb-4">Wichtige Werke &amp; Publikationen</h3>
        <ul className="list-disc pl-5 space-y-3 mt-3 text-sm text-gray-700">
          <li>
            <a href="http://www.pickover.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline inline-flex items-center font-semibold">
              Offizielle Website (pickover.com) <ExternalLink className="w-3 h-3 ml-1"/>
            </a>
            <p className="text-gray-500 mt-1">Das zentrale Portal für alle Veröffentlichungen und Rätsel von Clifford Pickover.</p>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/The_Math_Book" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline inline-flex items-center font-semibold">
              The Math Book (Wikipedia) <ExternalLink className="w-3 h-3 ml-1"/>
            </a>
            <p className="text-gray-500 mt-1">Von Pythagoras bis zur 57. Dimension – 250 Meilensteine der Mathematik.</p>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Vampire_number" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline inline-flex items-center font-semibold">
              Vampirzahlen (Wikipedia) <ExternalLink className="w-3 h-3 ml-1"/>
            </a>
            <p className="text-gray-500 mt-1">Ein von Pickover 1994 in einem Usenet-Post eingeführtes mathematisches Konzept.</p>
          </li>
          <li>
            <a href="https://sprott.physics.wisc.edu/fractals/pickover/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline inline-flex items-center font-semibold">
              Pickover-Attraktoren <ExternalLink className="w-3 h-3 ml-1"/>
            </a>
            <p className="text-gray-500 mt-1">Visualisierungen chaotischer dynamischer Systeme, die er in den 1990er Jahren erforschte.</p>
          </li>
        </ul>

        <h3 className="text-lg font-bold text-[#1a365d] mt-8 mb-4">Wissenschaftliche Beiträge &amp; Rätsel</h3>
        <p>
          Neben seinen Büchern ist Pickover berühmt für seine mathematischen Rätsel und die Entdeckung von Zahlenmustern. Die <em>Vampirzahlen</em> sind ein klassisches Beispiel für seine Fähigkeit, Mathematik spielerisch und mystisch zugleich zu präsentieren.
        </p>
        
        <VampireChecker />
      </div>
    </section>
  </>
);

const TabGRU = () => (
  <>
    <section className="mb-12">
      <h2 className="text-2xl font-extrabold text-[#1a365d] mb-6 border-b-2 border-gray-200 pb-3 flex items-center">
        <span className="w-2 h-6 bg-red-600 mr-3 inline-block"></span>
        Die GRU: Historischer Kontext &amp; Operationen
      </h2>
      <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
        <p>
          Die <strong>Glavnoye Razvedyvatelnoye Upravlenie (GRU)</strong> ist der militärische Nachrichtendienst der Russischen Föderation (und zuvor der Sowjetunion). Im Gegensatz zum zivilen KGB (heute SWR/FSB) konzentrierte sich die GRU stets auf militärische Aufklärung, Spezialeinsätze und in jüngerer Zeit auf globale Cyber-Operationen.
        </p>
        <p>
          Die Verbindung zur Mathematik (und damit zu Konzepten wie denen von Pickover) ist tief in der Notwendigkeit verwurzelt, komplexe Verschlüsselungen zu brechen, Satellitenbahnen zu berechnen und asymmetrische Netzwerke im Cyberspace zu analysieren.
        </p>

        <h3 className="text-lg font-bold text-[#1a365d] mt-8 mb-4">Historische Zeitachse</h3>
        <Timeline />

        <h3 className="text-lg font-bold text-[#1a365d] mt-10 mb-4">Interaktives Modul: Wissensüberprüfung</h3>
        <p>
          Testen Sie Ihr Wissen über die Geschichte und Struktur der GRU. Nur Agenten mit ausreichender Punktzahl erhalten Zugang zu den höherdimensionalen Archiven.
        </p>
        <GruQuiz />
      </div>
    </section>
  </>
);

const TabSynergy = () => (
  <>
    <section className="mb-12">
      <h2 className="text-2xl font-extrabold text-[#1a365d] mb-6 border-b-2 border-gray-200 pb-3 flex items-center">
        <span className="w-2 h-6 bg-red-600 mr-3 inline-block"></span>
        Verwandte Konzepte: Die Synthese
      </h2>
      <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
        <p>
          Warum kombinieren wir das Werk eines exzentrischen Mathematikers mit der Geschichte eines militärischen Nachrichtendienstes? Die Antwort liegt in der <strong>Mustererkennung</strong>.
        </p>
        <p>
          Sowohl Clifford A. Pickover als auch die Analysten der GRU suchen nach verborgenen Strukturen im Chaos. Ob es sich um einen seltsamen Attraktor in einem dynamischen System oder um versteckte Kommunikationsmuster feindlicher Agenten handelt – die zugrunde liegende Mathematik ist oft identisch.
        </p>
        
        <div className="bg-[#1a365d] text-white p-6 mt-6 rounded-sm shadow-inner">
          <h4 className="font-bold text-lg mb-3 border-b border-gray-500 pb-2">Kernbereiche der Synergie</h4>
          <ul className="space-y-3 mt-4">
            <li><strong>Kryptographie:</strong> Primzahlen, Vampirzahlen und fraktale Schlüsselräume.</li>
            <li><strong>Steganographie:</strong> Verstecken von Geheimdienstinformationen in computergenerierten Biomorph-Bildern.</li>
            <li><strong>Signal Intelligence (SIGINT):</strong> Herausfiltern von Rauschen zur Erkennung mathematischer Anomalien in globalen Datenströmen.</li>
          </ul>
        </div>
      </div>
    </section>
  </>
);

const Sidebar = () => (
  <div className="w-full md:w-1/3 bg-[#f8f9fa] p-8 md:p-10 border-l border-gray-200">
    <h3 className="text-xl font-extrabold text-[#1a365d] mb-8 flex items-center border-b-2 border-gray-200 pb-3">
      Blick in die Einrichtung
    </h3>

    <div className="space-y-6">
      <div className="bg-white p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#1a365d]">
        <h4 className="font-bold text-[15px] text-[#1a365d] mb-2">Einladung zum Sommerfest 2026</h4>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Thema: &quot;Fraktale und Feldoperationen&quot;. Wir laden alle Mitglieder und Agenten herzlich ein.
        </p>
        <a href="#" className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-800 transition-colors">
          <FileText className="w-4 h-4 mr-2" />
          2026_Sommerfest.pdf
          <Download className="w-3 h-3 ml-2" />
        </a>
      </div>

      <div className="bg-white p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#1a365d]">
        <h4 className="font-bold text-[15px] text-[#1a365d] mb-2">Ehemaligenabend</h4>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Übernachtung im Zeltlager Tesserakt-&quot;Camp&quot;. Erfahrungsaustausch über angewandte Mathematik und verdeckte Operationen.
        </p>
        <a href="#" className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-800 transition-colors">
          <FileText className="w-4 h-4 mr-2" />
          2025_Ehemaligenabend.pdf
          <Download className="w-3 h-3 ml-2" />
        </a>
      </div>

      <div className="bg-white p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#1a365d]">
        <h4 className="font-bold text-[15px] text-[#1a365d] mb-2">Abschluss der Sanierung</h4>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Der Eichenhain für kybernetische Kriegsführung und Zahlentheorie wurde erfolgreich modernisiert.
        </p>
        <a href="#" className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-800 transition-colors">
          <FileText className="w-4 h-4 mr-2" />
          Sanierung_Eichenhain.pdf
          <Download className="w-3 h-3 ml-2" />
        </a>
      </div>
      
      <div className="mt-10 bg-[#1a365d] text-white p-6 shadow-inner border-t-4 border-red-600">
        <h4 className="font-bold text-[15px] mb-3 flex items-center">
          Kontakt &amp; Notfallprotokoll
        </h4>
        <p className="text-sm mb-4 text-gray-200 leading-relaxed">
          Für verschlüsselte Kommunikation nutzen Sie bitte den Pickover-Vampir-Zahlen-Algorithmus.
        </p>
        <div className="bg-black bg-opacity-40 p-3 rounded-sm">
          <p className="text-xs font-mono text-green-400">
            GPG: 0x4F9A 8B2C 11D3
          </p>
          <p className="text-xs font-mono text-green-400 mt-1">
            FREQ: 462.5 kHz (UVB-76)
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex flex-col w-full">
      {/* Navigation */}
      <nav className="bg-[#1a365d] text-white shadow-md z-10 relative w-full">
        <ul className="flex flex-wrap text-sm font-medium">
          <li>
            <button 
              onClick={() => setActiveTab('home')} 
              className={`block px-6 py-4 hover:bg-[#2a4a7f] hover:text-red-200 transition-colors border-r border-[#2a4a7f] ${activeTab === 'home' ? 'bg-[#2a4a7f] text-red-200' : ''}`}
            >
              Startseite
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('pickover')} 
              className={`block px-6 py-4 hover:bg-[#2a4a7f] hover:text-red-200 transition-colors border-r border-[#2a4a7f] ${activeTab === 'pickover' ? 'bg-[#2a4a7f] text-red-200' : ''}`}
            >
              Clifford A. Pickover
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gru')} 
              className={`block px-6 py-4 hover:bg-[#2a4a7f] hover:text-red-200 transition-colors border-r border-[#2a4a7f] ${activeTab === 'gru' ? 'bg-[#2a4a7f] text-red-200' : ''}`}
            >
              GRU Historie &amp; Ops
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('synergy')} 
              className={`block px-6 py-4 hover:bg-[#2a4a7f] hover:text-red-200 transition-colors ${activeTab === 'synergy' ? 'bg-[#2a4a7f] text-red-200' : ''}`}
            >
              Verwandte Konzepte
            </button>
          </li>
        </ul>
      </nav>

      <main className="flex-grow flex flex-col md:flex-row bg-white">
        {/* Left Column - Main Content */}
        <div className="w-full md:w-2/3 p-8 md:p-12 border-r border-gray-200">
          {activeTab === 'home' && <TabHome />}
          {activeTab === 'pickover' && <TabPickover />}
          {activeTab === 'gru' && <TabGRU />}
          {activeTab === 'synergy' && <TabSynergy />}
        </div>

        {/* Right Column - Sidebar */}
        <Sidebar />
      </main>
    </div>
  );
}
