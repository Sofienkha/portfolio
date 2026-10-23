import { useState, useEffect } from 'react';
import { translations } from './translations';
import {
  MapPin,
  Mail,
  Phone,
  Download,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Globe,
  User,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';

function App() {
  const [lang, setLang] = useState<'en' | 'de' | 'fr'>('en');
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');

  useEffect(() => {
    document.documentElement.lang = lang;
    const titles = {
      en: 'Sofien Khalifa - Resume',
      de: 'Sofien Khalifa - Lebenslauf',
      fr: 'Sofien Khalifa - CV'
    };
    document.title = titles[lang];
  }, [lang]);

  const t = translations[lang];

  const handleDownload = () => {
    const originalTitle = document.title;
    const printTitle = t.pdfTitle;
    document.title = printTitle;

    const printHandler = () => {
      document.title = originalTitle;
      window.removeEventListener('afterprint', printHandler);
    };

    window.addEventListener('afterprint', printHandler);
    window.print();
  };

  const cycleLang = () => {
    if (lang === 'en') setLang('de');
    else if (lang === 'de') setLang('fr');
    else setLang('en');
  };

  const skills = [
    // Priority row — headline technologies
    { name: 'React.js / React Native', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Java (Spring Boot / EE)', category: 'backend' },
    { name: 'Azure Cloud', category: 'devops' },
    { name: 'AWS', category: 'devops' },
    { name: 'Docker / SQL', category: 'devops' },
    { name: 'GitHub Actions / CI/CD', category: 'devops' },
    { name: 'AI Model Implementation', category: 'ai' },

    // Frontend
    { name: 'Angular', category: 'frontend' },
    { name: 'Vue.js', category: 'frontend' },
    { name: 'Jest / Cypress', category: 'frontend' },
    { name: 'React Testing Library', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },

    // Backend
    { name: 'Node.js', category: 'backend' },
    { name: 'Python / Django', category: 'backend' },
    { name: 'C# / .NET Core', category: 'backend' },
    { name: 'PHP / Symfony', category: 'backend' },
    { name: 'RESTful APIs / GraphQL', category: 'backend' },

    // AI/ML
    { name: 'Machine Learning Integration', category: 'ai' },
    { name: 'LLM & Prompt Engineering', category: 'ai' },
  ];

  const filteredSkills = activeSkillCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeSkillCategory);

  const categories = [
    { id: 'all', label: t.skills.tabs.all },
    { id: 'frontend', label: t.skills.tabs.frontend },
    { id: 'backend', label: t.skills.tabs.backend },
    { id: 'devops', label: t.skills.tabs.devops },
    { id: 'ai', label: t.skills.tabs.ai },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white pb-12 print:bg-white print:text-black print:pb-0">

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden flex gap-3">
        <button
          onClick={cycleLang}
          className="bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-white font-semibold px-4 py-3 rounded-xl shadow-xl hover:bg-slate-750 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
        >
          <Globe className="w-5 h-5 text-blue-400 group-hover:rotate-45 transition-transform duration-300" />
          <span>{lang.toUpperCase()}</span>
        </button>

        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-xl shadow-xl shadow-blue-900/30 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
        >
          <Download className="w-5 h-5" />
          <span>{t.downloadPdf}</span>
        </button>
      </div>

      {/* Hero Header Section */}
      <header className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 py-16 print:bg-white print:border-b-2 print:border-gray-300 print:py-6 overflow-hidden">

        {/* Language Switcher in Header */}
        <div className="absolute top-2 right-6 z-10 print:hidden flex gap-2">
          {(['en', 'de', 'fr'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${lang === l
                ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none print:hidden" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left print:flex-row print:text-left print:gap-6">

            {/* Profile Avatar with subtle glow */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 print:hidden" />
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-slate-700 bg-slate-850 flex-shrink-0 print:w-24 print:h-24 print:border-none">
                <img
                  src="/imageforcv.jpg"
                  alt="Sofien Khalifa"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2 block print:hidden">{t.roleAvailability}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 print:text-3xl print:text-black">
                SOFIEN KHALIFA
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-4 print:text-lg print:text-gray-700">
                {t.roleTitle}
              </h2>
              <p className="text-slate-400 max-w-3xl leading-relaxed text-sm md:text-base print:text-xs print:text-gray-800">
                {t.summary}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-12 print:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:grid-cols-3 print:gap-4">

          {/* Left Sidebar - Contact, Skills, Languages, Hobbies */}
          <div className="space-y-8 lg:col-span-1 print:col-span-1 print:space-y-4">

            {/* Contact Info Card */}
            <section className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 shadow-sm print:bg-white print:border-none print:p-0">
              <h3 className="text-lg font-bold mb-4 text-white pb-2 border-b border-slate-800 flex items-center gap-2 print:text-black print:border-b-2 print:border-gray-200">
                <User className="w-5 h-5 text-blue-400 print:text-gray-700" />
                <span>{t.personalInfo.title}</span>
              </h3>

              <div className="space-y-4 text-slate-350 text-sm print:text-xs print:space-y-2 print:text-gray-800">
                {/* Available immediately badge */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-900/40 border border-emerald-500/40 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full print:bg-transparent print:border-emerald-600 print:text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 print:bg-emerald-600 animate-pulse" />
                    {t.availableNow}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0 print:w-4 print:h-4" />
                  <div>
                    <span className="block text-slate-500 print:hidden">{t.personalInfo.locationLabel}</span>
                    <span className="font-medium text-slate-300 print:text-black">{t.personalInfo.locationVal}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0 print:w-4 print:h-4" />
                  <div>
                    <span className="block text-slate-500 print:hidden">{t.personalInfo.workPermitLabel}</span>
                    <span className="font-semibold text-emerald-400 print:text-emerald-700 print:font-bold">{t.personalInfo.workPermitVal}</span>
                    <span className="block text-xs text-slate-500 print:text-gray-600">{t.personalInfo.workPermitSub}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0 print:w-4 print:h-4" />
                  <div>
                    <span className="block text-slate-500 print:hidden">{t.personalInfo.phoneLabel}</span>
                    <a href="tel:+491727131876" className="text-blue-400 hover:underline print:text-black print:no-underline">
                      +49 172 7131876
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0 print:w-4 print:h-4" />
                  <div>
                    <span className="block text-slate-500 print:hidden">{t.personalInfo.emailLabel}</span>
                    <a href="mailto:sofien.khalifa@outlook.com" className="text-blue-400 hover:underline print:text-black print:no-underline break-all">
                      sofien.khalifa@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 print:hidden">
                  <Linkedin className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-500">{t.personalInfo.linkedinLabel}</span>
                    <a href="https://linkedin.com/in/sofien-khalifa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
                      <span>sofien-khalifa</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 print:hidden">
                  <Github className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-500">{t.personalInfo.githubLabel}</span>
                    <a href="https://github.com/sofien-khalifa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
                      <span>sofien-khalifa</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages Card */}
            <section className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 shadow-sm print:bg-white print:border-none print:p-0">
              <h3 className="text-lg font-bold mb-4 text-white pb-2 border-b border-slate-800 flex items-center gap-2 print:text-black print:border-b-2 print:border-gray-200">
                <Globe className="w-5 h-5 text-blue-400 print:text-gray-700" />
                <span>{t.languages.title}</span>
              </h3>
              <div className="space-y-3 text-sm print:text-xs print:space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-300 print:text-black">{t.languages.english}</span>
                  <span className="text-blue-400 font-semibold print:text-gray-700">{t.languages.levelC1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-300 print:text-black">{t.languages.french}</span>
                  <span className="text-blue-400 font-semibold print:text-gray-700">{t.languages.levelC1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-300 print:text-black">{t.languages.german}</span>
                  <div className="text-right">
                    <span className="text-amber-400 font-semibold print:text-gray-700">{t.languages.levelA2}</span>
                    <span className="block text-[10px] text-slate-500 print:hidden font-medium">{t.languages.activelyLearning}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-300 print:text-black">{t.languages.arabic}</span>
                  <span className="text-blue-400 font-semibold print:text-gray-700">{t.languages.levelNative}</span>
                </div>
              </div>
            </section>

            {/* Hobbies Card */}
            <section className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 shadow-sm print:bg-white print:border-none print:p-0 print:hidden">
              <h3 className="text-lg font-bold mb-4 text-white pb-2 border-b border-slate-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>{t.hobbies.title}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.hobbies.list.map((hobby) => (
                  <span key={hobby} className="bg-slate-900 border border-slate-800 text-slate-400 text-xs px-3 py-1.5 rounded-lg">
                    {hobby}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Main Body - Skills, Work Experience, Education, References */}
          <div className="lg:col-span-2 space-y-8 print:col-span-2 print:space-y-6">

            {/* Technical Skills Section with Interactive Filter */}
            <section className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 shadow-sm print:bg-white print:border-none print:p-0">
              <h3 className="text-xl font-bold mb-4 text-white pb-2 border-b border-slate-800 flex items-center gap-2 print:text-black print:border-b-2 print:border-gray-200">
                <Sparkles className="w-5.5 h-5.5 text-blue-400 print:text-gray-700" />
                <span>{t.skills.title}</span>
              </h3>

              {/* Skill Tabs - Hidden in Print */}
              <div className="flex flex-wrap gap-2 mb-4 print:hidden">
                {categories.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSkillCategory(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${activeSkillCategory === tab.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                      : 'bg-slate-900 border border-slate-880 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Skills Tags Grid */}
              <div className="flex flex-wrap gap-2 print:block">
                {filteredSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-900/90 border border-slate-800/80 text-slate-300 text-xs px-3 py-2 rounded-lg font-medium transition-all hover:border-blue-500/50 print:bg-gray-100 print:border-gray-300 print:text-black print:inline-block print:m-1 print:px-2 print:py-0.5 print:text-[8pt] print:rounded"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 shadow-sm print:bg-white print:border-none print:p-0">
              <h3 className="text-xl font-bold mb-6 text-white pb-2 border-b border-slate-800 flex items-center gap-2 print:text-black print:border-b-2 print:border-gray-200">
                <Briefcase className="w-5.5 h-5.5 text-blue-400 print:text-gray-700" />
                <span>{t.experience.title}</span>
              </h3>

              <div className="space-y-8 print:space-y-5">
                {t.experience.jobs.map((job, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-slate-800 print:border-l-2 print:border-gray-300 print:pl-4 page-break-inside-avoid">
                    {/* Timeline dot */}
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 print:border-white print:-left-2.5" />

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                      <div>
                        <h4 className="text-md font-bold text-white print:text-black print:text-[10pt]">
                          {job.role}
                        </h4>
                        <div className="text-sm text-blue-400 font-semibold print:text-gray-800 print:text-[9pt]">
                          {job.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium bg-slate-900 px-2 py-1 rounded border border-slate-800 print:bg-none print:border-none print:px-0 print:py-0 print:text-gray-600 print:text-[8pt]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{job.duration}</span>
                      </div>
                    </div>

                    <ul className="list-disc list-outside ml-4 text-slate-350 text-xs md:text-sm space-y-1.5 leading-relaxed print:text-gray-800 print:text-[8pt] print:space-y-1">
                      {job.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 shadow-sm print:bg-white print:border-none print:p-0 page-break-inside-avoid">
              <h3 className="text-xl font-bold mb-6 text-white pb-2 border-b border-slate-800 flex items-center gap-2 print:text-black print:border-b-2 print:border-gray-200">
                <GraduationCap className="w-5.5 h-5.5 text-blue-400 print:text-gray-700" />
                <span>{t.education.title}</span>
              </h3>

              <div className="space-y-6 print:space-y-4">
                {t.education.items.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-slate-800 print:border-l-2 print:border-gray-300 print:pl-4">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 print:border-white print:-left-2.5" />
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-white print:text-black print:text-[10pt]">
                        {item.degree}
                      </h4>
                      <span className="text-slate-400 text-xs font-semibold print:text-gray-600 print:text-[8pt]">{item.duration}</span>
                    </div>
                    <div className="text-sm text-slate-400 print:text-gray-800 print:text-[9pt]">
                      {item.school}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* References Section */}
            <section className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 shadow-sm print:bg-white print:border-none print:p-0 page-break-inside-avoid">
              <h3 className="text-xl font-bold mb-4 text-white pb-2 border-b border-slate-800 flex items-center gap-2 print:text-black print:border-b-2 print:border-gray-200">
                <CheckCircle2 className="w-5.5 h-5.5 text-blue-400 print:text-gray-700" />
                <span>{t.references.title}</span>
              </h3>
              <div className="bg-slate-900/50 border border-slate-800/60 p-4 rounded-xl print:bg-none print:border-none print:p-0">
                <p className="text-slate-400 text-sm italic print:text-gray-600 print:text-[9pt]">{t.references.name}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;