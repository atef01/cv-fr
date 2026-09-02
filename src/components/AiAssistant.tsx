import React, { useState } from 'react';
import { Bot, Sparkles, Send, HelpCircle, CheckCircle2 } from 'lucide-react';
import { aiQna } from '../data/cvData';

export const AiAssistant: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(0);
  const [customQuery, setCustomQuery] = useState('');
  const [customResponse, setCustomResponse] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    const query = customQuery.toLowerCase();
    
    if (query.includes('python') || query.includes('django') || query.includes('fastapi')) {
      setCustomResponse("Atef utilise Python depuis plusieurs années pour le développement backend (Django, FastAPI), le Web Scraping (BeautifulSoup, Playwright, Selenium), et les architectures d'Agents IA avec LLM (OpenAI, Claude) et bases vectorielles.");
    } else if (query.includes('java') || query.includes('spring')) {
      setCustomResponse("Côté Java, Atef détient 3 certifications Oracle. Il a développé avec Spring Boot, JavaFX, Android, et LangChain4j pour la recherche sémantique juridique.");
    } else if (query.includes('angular') || query.includes('frontend')) {
      setCustomResponse("Atef maîtrise Angular, TypeScript, Webpack, jQuery et Bootstrap pour construire des dashboards d'administration réactifs, des widgets personnalisés et des applications web modernes.");
    } else if (query.includes('e-commerce') || query.includes('shopify') || query.includes('prestashop')) {
      setCustomResponse("Pendant 6 ans chez PulpTeck (certishopping.com), Atef a conçu et maintenu des plugins & apps pour Shopify, PrestaShop, Wix, WooCommerce et Magento avec intégration des APIs Google Ads et Meta.");
    } else if (query.includes('contact') || query.includes('email') || query.includes('telephone') || query.includes('recruter')) {
      setCustomResponse("Vous pouvez contacter Atef directement par téléphone au +216 55 791 882 ou par e-mail à atef.zoliaidi@gmail.com.");
    } else {
      setCustomResponse(`Atef Zoiaidi est Développeur Full Stack Senior avec un Master en Big Data et 3 certifications Oracle. Il cumule +8 ans d'expérience sur des projets d'envergure en Java, Python, Angular, E-commerce et Intelligence Artificielle.`);
    }

    setSelectedQuestion(null);
  };

  return (
    <section id="ai-assistant" className="py-16 bg-zinc-50/50 border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200 shadow-2xs">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-zinc-500 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-zinc-700" />
                Assistant Virtuel Recrutement
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight">
                Posez vos questions sur le profil d'Atef
              </h2>
            </div>
          </div>

          {/* Quick FAQ Buttons */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
              Questions Fréquentes :
            </label>
            <div className="flex flex-wrap gap-2">
              {aiQna.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedQuestion(idx);
                    setCustomResponse(null);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium text-left transition-all cursor-pointer ${
                    selectedQuestion === idx && !customResponse
                      ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                      : 'bg-zinc-100 text-zinc-800 border border-zinc-200 hover:bg-zinc-200/80'
                  }`}
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <input 
              type="text"
              placeholder="Ex: Quelle est son expérience avec Spring Boot ou Shopify ?"
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 shadow-2xs"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <span>Questionner</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Response Box */}
          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 leading-relaxed text-xs sm:text-sm text-zinc-800">
            {customResponse ? (
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-zinc-900 mb-1">Réponse personnalisée :</div>
                  <p>{customResponse}</p>
                </div>
              </div>
            ) : selectedQuestion !== null ? (
              <div className="flex items-start gap-3">
                <Bot className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-zinc-900 mb-1">
                    {aiQna[selectedQuestion].q}
                  </div>
                  <p>{aiQna[selectedQuestion].a}</p>
                </div>
              </div>
            ) : null}
          </div>

        </div>

      </div>
    </section>
  );
};
