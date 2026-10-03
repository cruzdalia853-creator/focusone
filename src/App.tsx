import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  X, 
  MessageCircle,
  Clock,
  Target,
  Layers,
  Flame,
  Menu,
  Copy,
  ExternalLink,
  KeyRound
} from 'lucide-react';

import avatarFounder from './assets/images/avatar_african_founder_1790161357336.jpg';
import avatarCreator from './assets/images/avatar_african_creator_1790161371307.jpg';
import avatarConsultant from './assets/images/avatar_african_consultant_1790161381513.jpg';
import { AnimatedBackground } from './components/AnimatedBackground';

/* Official Payment Provider Logo Components */
function WaveLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wave">
      <rect width="40" height="40" rx="8" fill="#1AA9FB"/>
      <path d="M20 7C16.5 7 14 9.5 14 13.5C14 15.2 14.8 17.5 16 19.5C14 20.8 12 23.5 12 27C12 31 15 33 20 33C25 33 28 31 28 27C28 23.5 26 20.8 24 19.5C25.2 17.5 26 15.2 26 13.5C26 9.5 23.5 7 20 7Z" fill="#0A2540"/>
      <ellipse cx="20" cy="22" rx="4.5" ry="6.5" fill="white"/>
      <ellipse cx="20" cy="13" rx="3.5" ry="4" fill="white"/>
      <circle cx="18.5" cy="12.5" r="1" fill="#0A2540"/>
      <circle cx="21.5" cy="12.5" r="1" fill="#0A2540"/>
      <path d="M19 14.5L20 16L21 14.5Z" fill="#FFA500"/>
      <ellipse cx="17.5" cy="32.5" rx="2.5" ry="1.2" fill="#FFA500"/>
      <ellipse cx="22.5" cy="32.5" rx="2.5" ry="1.2" fill="#FFA500"/>
    </svg>
  );
}

function OrangeMoneyLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Orange Money">
      <rect width="40" height="40" rx="8" fill="#FF7900"/>
      <rect x="6" y="13" width="28" height="14" rx="2.5" fill="#000000"/>
      <text x="20" y="21" fill="#FF7900" fontSize="5.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">orange</text>
      <text x="20" y="25" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">money</text>
    </svg>
  );
}

function MTNMoMoLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MTN MoMo">
      <rect width="40" height="40" rx="8" fill="#FFCC00"/>
      <ellipse cx="20" cy="20" rx="15" ry="11" fill="#002B49"/>
      <text x="20" y="23.5" fill="#FFCC00" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="-0.5">MoMo</text>
    </svg>
  );
}

function MoovMoneyLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Moov Money">
      <rect width="40" height="40" rx="8" fill="#005BAC"/>
      <circle cx="15" cy="20" r="7" fill="#FF6600"/>
      <circle cx="25" cy="20" r="7" fill="#0080FF" fillOpacity="0.8"/>
      <text x="20" y="22.5" fill="#FFFFFF" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">moov</text>
    </svg>
  );
}

function VisaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
      <rect width="40" height="40" rx="8" fill="#0E4595"/>
      <text x="20" y="24" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.5">VISA</text>
    </svg>
  );
}

function MastercardLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
      <rect width="40" height="40" rx="8" fill="#181B26"/>
      <circle cx="15.5" cy="20" r="8" fill="#EB001B"/>
      <circle cx="24.5" cy="20" r="8" fill="#F79E1B"/>
      <path d="M20 14.5C21.8 16 23 17.8 23 20C23 22.2 21.8 24 20 25.5C18.2 24 17 22.2 17 20C17 17.8 18.2 16 20 14.5Z" fill="#FF5F00"/>
    </svg>
  );
}

interface Offer {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  highlight?: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
}

const OFFERS: Offer[] = [
  {
    id: 'skill',
    name: 'Trouve ta compétence',
    price: '5 000 FCFA',
    period: 'Paiement unique',
    tagline: 'Méthode guidée par IA, étape par étape, pour découvrir ta compétence unique.',
    features: [
      'Diagnostic Ikigai calibré pour le marché digital africain',
      'Questions d\'extraction de tes forces brutes et passions réelles',
      'Identification de la compétence à forte valeur marchande',
      'Plan d\'action d\'activation en 7 jours pour lancer ton offre',
      'Accès immédiat et autonome à la méthode'
    ],
    ctaLabel: 'Choisir cette formule'
  },
  {
    id: 'branding',
    name: 'Branding par expert',
    price: '35 000 FCFA',
    period: 'Paiement unique',
    tagline: 'Refonte complète et sur-mesure de ton profil par un expert en personal branding.',
    features: [
      'Audit complet de ton profil actuel (Facebook, LinkedIn ou Instagram)',
      'Photo de profil pro : retouche soignée et détourage HD',
      'Bannière sur-mesure haute résolution avec accroche percutante',
      'Rédaction d\'une bio magnétique orientée conversion',
      'Mini-guide de charte graphique (couleurs & typographies recommandées)',
      'Livraison clé en main sous 48h à 72h'
    ],
    ctaLabel: 'Confier mon branding'
  },
  {
    id: 'bundle',
    name: 'Bundle complet',
    price: '36 000 FCFA',
    period: 'Paiement unique',
    highlight: 'Le plus complet',
    isPopular: true,
    tagline: 'La méthode Ikigai IA + la refonte complète de ton profil pour seulement 1 000 FCFA de plus.',
    features: [
      'Accès complet à la méthode "Trouve ta compétence" (Valeur 5 000 FCFA)',
      'Refonte complète par un expert : photo, bannière, bio & charte (Valeur 35 000 FCFA)',
      'Session d\'alignement personnalisée pour valider ta compétence pivot',
      '3 modèles de posts de relance prêts à publier pour ton repositionnement',
      'Garantie retouche offerte : ajustements illimités jusqu\'à entière satisfaction',
      'Livraison prioritaire en 48h chrono'
    ],
    ctaLabel: 'Obtenir le bundle complet'
  }
];

const FAQS = [
  {
    question: 'Quelle est la différence entre les 3 offres et laquelle choisir ?',
    answer: 'Si tu hésites encore sur ton positionnement et que tu as du mal à savoir ce qui te rend unique, l\'offre "Trouve ta compétence" (5 000f) t\'aide à verrouiller ton choix. Si tu as déjà ta compétence mais que ton profil réseaux sociaux ressemble à un compte amateur, l\'offre "Branding par expert" (35 000f) te donne une crédibilité instantanée. Enfin, le "Bundle complet" (36 000f) réunit les deux : pour seulement 1 000f de plus que le branding seul, tu as le diagnostic complet et la transformation graphique totale.'
  },
  {
    question: 'Quel est le délai de livraison pour la refonte de mon profil ?',
    answer: 'Dès que tu as validé ta commande et rempli notre bref questionnaire d\'information (moins de 5 minutes), notre équipe d\'experts commence immédiatement. Tu reçois ta bannière haute résolution, ta photo optimisée et tes propositions de bio rédigées sous 48h à 72h ouvrées (délai prioritaire de 48h avec le Bundle).'
  },
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons tous les moyens de paiement les plus utilisés en Afrique de l\'Ouest et Centrale : Wave, Orange Money, MTN Mobile Money, Moov Money, ainsi que les cartes bancaires internationales (Visa, Mastercard). Le paiement est direct, sécurisé et sans frais cachés.'
  },
  {
    question: 'Et si je n\'ai aucune idée de ce que je sais faire ou de mon talent ?',
    answer: 'C\'est précisément la raison d\'être de Focus One ! La plupart des entrepreneurs confondent "diplôme" et "compétence monétisable". Notre méthode inspirée de l\'Ikigai et assistée par IA pose les bonnes questions pour dénicher des aptitudes que tu considères comme banales mais pour lesquelles des clients sont prêts à payer aujourd\'hui.'
  },
  {
    question: 'Est-ce adapté pour trouver des clients à l\'international ou uniquement en Afrique ?',
    answer: 'Les deux. Le profil magnétique que nous concevons répond aux standards internationaux de professionnalisme. Que tu vises des clients locaux (PME, commerçants, cadres à Abidjan, Dakar, Douala...) ou des clients en France, au Canada ou aux États-Unis, ton profil inspirera une confiance immédiate.'
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'wave' | 'orange' | 'mtn' | 'card'>('wave');
  const [orderName, setOrderName] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const IKIGAI_LINK = "https://claude.ai/artifact/BpdY4QbpMetSiea76WMKNh";
  const IKIGAI_CODE = "FOCUS2026";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(IKIGAI_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleOpenOffer = (offer: Offer) => {
    setSelectedOffer(offer);
    setOrderSuccess(false);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderName || !orderPhone) return;
    setOrderSuccess(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060713] text-slate-100 flex flex-col font-bricolage selection:bg-[#2545FF] selection:text-white relative">
      {/* Animated dynamic background system */}
      <AnimatedBackground />

      {/* 1. TOP BAR CONTRACT WITH GLASSMORPHISM */}
      <header className="sticky top-0 z-40 glass-header transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 focus:outline-none"
            aria-label="Focus One accueil"
          >
            <span className="font-extrabold text-white text-2xl tracking-tighter">Focus</span>
            <span className="text-[#2545FF] font-extrabold text-2xl tracking-tighter">One</span>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button 
              onClick={() => scrollToSection('probleme')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Le Problème
            </button>
            <button 
              onClick={() => scrollToSection('methode')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              La <span className="font-accented">Méthode</span>
            </button>
            <button 
              onClick={() => scrollToSection('offres')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Offres
            </button>
            <button 
              onClick={() => scrollToSection('temoignages')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('offres')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#2545FF] hover:bg-[#1B36D4] rounded-xl transition-all whitespace-nowrap shadow-sm hover:shadow-[0_0_20px_rgba(37,69,255,0.4)] cursor-pointer"
            >
              Découvrir les offres
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-white/10 px-4 py-5 space-y-3 animate-in fade-in duration-200">
            <button 
              onClick={() => scrollToSection('probleme')}
              className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              Le Problème
            </button>
            <button 
              onClick={() => scrollToSection('methode')}
              className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              La <span className="font-accented">Méthode</span>
            </button>
            <button 
              onClick={() => scrollToSection('offres')}
              className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              Les Offres
            </button>
            <button 
              onClick={() => scrollToSection('temoignages')}
              className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              FAQ
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('offres')}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#2545FF] hover:bg-[#1B36D4] rounded-xl transition-colors cursor-pointer"
              >
                Découvrir les offres
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 relative z-10">
        {/* 1. HERO SECTION */}
        <section className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center">
            {/* Impact Headline strictly each sentence on its own single line */}
            <h1 className="text-[clamp(1.4rem,5.6vw,4.5rem)] font-black text-white tracking-tight leading-[1.15] mb-6 w-full mx-auto">
              <span className="block whitespace-nowrap">Tu n'as pas besoin de plus.</span>
              <span className="block mt-1.5 sm:mt-2.5 whitespace-nowrap">Tu as besoin d'une <span className="font-accented text-[#2545FF]">compétence</span>.</span>
            </h1>

            {/* Promise Subtitle - each statement strictly on its own single line */}
            <div className="text-[clamp(0.85rem,2.3vw,1.25rem)] text-slate-200 font-normal leading-relaxed w-full max-w-4xl mx-auto mb-9 space-y-1.5">
              <p className="block whitespace-nowrap">Un positionnement clair.</p>
              <p className="block whitespace-nowrap">Un profil qui attire naturellement les bons clients.</p>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={() => scrollToSection('offres')}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-[#2545FF] hover:bg-[#1B36D4] rounded-xl transition-all shadow-[0_0_30px_rgba(37,69,255,0.35)] hover:shadow-[0_0_45px_rgba(37,69,255,0.55)] flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Découvrir mes options</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>

            {/* Trust reassurance (unboxed text) - each badge on a single line with provider logos */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#2545FF] shrink-0" />
                <span className="whitespace-nowrap">Paiement unique en FCFA</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap glass-chip py-1 px-3 rounded-full border border-white/10">
                <div className="flex items-center -space-x-1 shrink-0">
                  <WaveLogo className="w-4 h-4 rounded-full shadow-sm" />
                  <OrangeMoneyLogo className="w-4 h-4 rounded-full shadow-sm" />
                  <MTNMoMoLogo className="w-4 h-4 rounded-full shadow-sm" />
                </div>
                <span className="whitespace-nowrap text-slate-200">Wave, Orange Money & MoMo acceptés</span>
              </div>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#2545FF] shrink-0" />
                <span className="whitespace-nowrap"><span className="font-accented">Résultats</span> dès cette semaine</span>
              </div>
            </div>

            {/* Visual Anchor: The Shift Visual (Dispersion vs Focus) with Glassmorphism */}
            <div className="mt-14 max-w-3xl mx-auto text-left">
              <div className="glass-panel rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  {/* Left: Dispersion */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between backdrop-blur-md">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-3 tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
                        <span className="leading-snug">
                          Avant : La <span className="font-accented">dispersion</span> (<span className="font-numbers">10</span> projets à <span className="font-numbers">10%</span>)
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                        Tu passes du copywriting au dropshipping, puis au community management et à la création vidéo. Beaucoup d'effort, zéro autorité perçue.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span>Perception client</span>
                      <span className="font-semibold text-rose-400">Confuse & hésitante</span>
                    </div>
                  </div>

                  {/* Right: Focus One */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#2545FF]/10 border border-[#2545FF]/40 flex flex-col justify-between relative shadow-[0_0_25px_rgba(37,69,255,0.12)] backdrop-blur-md">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#2545FF] mb-3 tracking-wide uppercase">
                        <Flame className="w-4 h-4 text-[#2545FF] shrink-0" />
                        <span className="leading-snug">
                          Avec Focus One : <span className="font-numbers">1</span> <span className="font-accented">Compétence</span> Pivot (<span className="font-numbers">100%</span>)
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                        Une compétence identifiée où tu es excellent. Un profil optimisé qui explique en <span className="font-numbers">3</span> secondes pourquoi on doit te payer toi et pas un autre.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span>Perception client</span>
                      <span className="font-semibold text-white">Expert <span className="font-accented">incontournable</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SECTION PROBLÈME WITH GLASSMORPHISM */}
        <section id="probleme" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2545FF] mb-3 block">
                Diagnostic lucide
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ce n'est pas un manque de travail. C'est un manque de <span className="font-accented text-[#2545FF]">clarté</span>.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
                Tu as l'énergie, la motivation et l'envie de réussir. Mais sans une cible précise, tous tes efforts s'évaporent sans laisser de trace.
              </p>
            </div>

            {/* 3 empathetic points with glassmorphic cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Point 1 */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2545FF] font-numbers font-bold text-lg mb-5">
                  01
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  La <span className="font-accented">dispersion</span> invisible
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tu testes une nouvelle opportunité chaque semaine. Tu n'es pas paresseux : tu es juste éparpillé. Faire <span className="font-numbers">10</span> choses à <span className="font-numbers">10%</span> ne donne jamais <span className="font-numbers">100%</span> de résultat.
                </p>
              </div>

              {/* Point 2 */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2545FF] font-numbers font-bold text-lg mb-5">
                  02
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Le flou pour tes prospects
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Quand quelqu'un arrive sur ton profil Facebook, Instagram ou LinkedIn, il ne comprend pas en <span className="font-numbers">3</span> secondes ce que tu apportes concrètement. Dans le doute, il va voir ailleurs.
                </p>
              </div>

              {/* Point 3 */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2545FF] font-numbers font-bold text-lg mb-5">
                  03
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Un profil non optimisé
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Une photo prise sans intention, une bannière vide, une bio sans offre nette... Ton profil actuel te fait passer pour un débutant alors que tu as une réelle valeur à apporter.
                </p>
              </div>
            </div>

            {/* Empathy concluding statement */}
            <div className="mt-12 text-center p-6 rounded-2xl glass-panel max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-slate-300">
                <strong className="text-white font-semibold">La bonne nouvelle ?</strong> Il suffit souvent d'un seul ajustement : verrouiller <span className="text-[#2545FF] font-medium font-accented">une seule compétence clé</span> et la packager avec un profil professionnel irréprochable.
              </p>
            </div>
          </div>
        </section>

        {/* MÉTHODE / PROCESSUS (Ikigai adapté + Branding) WITH GLASS PANELS */}
        <section id="methode" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2545FF] mb-3 block">
                La <span className="font-accented">méthode</span> Focus One
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Deux étapes simples pour changer de statut
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Etape 1 */}
              <div className="p-8 rounded-3xl glass-panel glass-panel-hover relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2545FF]/10 border border-[#2545FF]/30 flex items-center justify-center text-[#2545FF]">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Étape <span className="font-numbers">01</span></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  L'extraction Ikigai assistée par IA
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Nous analysons le croisement exact entre ce que tu aimes faire, ce dans quoi tu es naturellement doué, et ce pour quoi les clients en Afrique ou à l'international sont prêts à payer cher.
                </p>
                <div className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2545FF]" />
                    <span>Fin des hésitations entre <span className="font-numbers">5</span> métiers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2545FF]" />
                    <span>Ciblage direct de ta <span className="font-accented text-white">compétence</span> la plus rentable</span>
                  </div>
                </div>
              </div>

              {/* Etape 2 */}
              <div className="p-8 rounded-3xl glass-panel glass-panel-hover relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2545FF]/10 border border-[#2545FF]/30 flex items-center justify-center text-[#2545FF]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Étape <span className="font-numbers">02</span></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  La transformation du profil en aimant
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Une fois ta compétence verrouillée, nos experts construisent la vitrine qui l'impose. Photo pro, bannière sur-mesure, bio persuasive : ton profil devient une machine à générer des prises de contact.
                </p>
                <div className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2545FF]" />
                    <span>Image d'autorité <span className="font-accented text-white">immédiate</span> dès le premier regard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2545FF]" />
                    <span>Les prospects viennent à toi au lieu de courir après eux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION OFFRES — 3 CARTES CÔTE À CÔTE WITH GLASSMORPHISM */}
        <section id="offres" className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2545FF] mb-3 block">
                Tarifs transparents & paiement unique
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Choisis la formule adaptée à ta situation
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-4">
                Pas d'abonnement récurrent. Aucun frais caché. Accès immédiat ou livraison sous <span className="font-numbers">48h</span>.
              </p>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {OFFERS.map((offer) => {
                const isBundle = offer.id === 'bundle';
                return (
                  <div
                    key={offer.id}
                    className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isBundle
                        ? 'glass-panel-accent shadow-[0_12px_44px_rgba(37,69,255,0.22)] lg:-translate-y-2'
                        : 'glass-panel glass-panel-hover'
                    }`}
                  >
                    {/* Badge if bundle */}
                    {offer.highlight && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="bg-[#2545FF] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg whitespace-nowrap">
                          {offer.highlight}
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Card Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {offer.name}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                          {offer.tagline}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-black text-white font-numbers tracking-tight">
                            {offer.price}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-slate-400 mt-1 block">
                          {offer.period}
                        </span>
                      </div>

                      {/* Features list */}
                      <div className="space-y-3.5 mb-8">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                          Ce qui est inclus :
                        </span>
                        {offer.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isBundle ? 'text-[#2545FF]' : 'text-slate-400'}`} />
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => handleOpenOffer(offer)}
                        className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          isBundle
                            ? 'bg-[#2545FF] hover:bg-[#1B36D4] text-white shadow-[0_0_25px_rgba(37,69,255,0.45)]'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <span>{offer.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Local payments banner with authentic logos */}
            <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-300">
              <span className="text-center md:text-left font-medium">
                Paiements locaux et internationaux <span className="font-accented text-white">sécurisés</span> :
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 glass-chip rounded-xl border border-white/10 hover:border-[#1AA9FB]/40 transition-colors shadow-sm">
                  <WaveLogo className="w-5 h-5 rounded-md shrink-0 shadow-sm" />
                  <span className="text-white font-medium text-xs">Wave</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 glass-chip rounded-xl border border-white/10 hover:border-[#FF7900]/40 transition-colors shadow-sm">
                  <OrangeMoneyLogo className="w-5 h-5 rounded-md shrink-0 shadow-sm" />
                  <span className="text-white font-medium text-xs">Orange Money</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 glass-chip rounded-xl border border-white/10 hover:border-[#FFCC00]/40 transition-colors shadow-sm">
                  <MTNMoMoLogo className="w-5 h-5 rounded-md shrink-0 shadow-sm" />
                  <span className="text-white font-medium text-xs">MTN MoMo</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 glass-chip rounded-xl border border-white/10 hover:border-[#005BAC]/40 transition-colors shadow-sm">
                  <MoovMoneyLogo className="w-5 h-5 rounded-md shrink-0 shadow-sm" />
                  <span className="text-white font-medium text-xs">Moov Money</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 glass-chip rounded-xl border border-white/10 hover:border-white/30 transition-colors shadow-sm">
                  <div className="flex items-center -space-x-1 shrink-0">
                    <VisaLogo className="w-5 h-5 rounded-md shadow-sm" />
                    <MastercardLogo className="w-5 h-5 rounded-md shadow-sm" />
                  </div>
                  <span className="text-white font-medium text-xs">Visa / Mastercard</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION PREUVE SOCIALE — TÉMOIGNAGES WITH GLASSMORPHISM */}
        <section id="temoignages" className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2545FF] mb-3 block">
                Preuve & retours d'<span className="font-accented">expérience</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ils ont arrêté de se disperser. Voici leurs <span className="font-accented text-[#2545FF]">résultats</span>.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-4">
                Des créateurs et freelances africains qui ont fait le choix du focus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#2545FF] mb-4">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "Avant Focus One, j'avais <span className="font-numbers">4</span> offres différentes dans ma bio. Les gens ne comprenaient rien. En <span className="font-numbers">48h</span> après la refonte de mon profil et le recentrage sur ma compétence clé, j'ai signé mes deux premiers clients à <span className="font-numbers">150 000 FCFA</span>."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img 
                    src={avatarFounder} 
                    alt="Mamadou D." 
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">Mamadou D.</div>
                    <div className="text-xs text-slate-400">Freelance Copywriter · Dakar</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#2545FF] mb-4">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "Je passais mes journées à tester toutes les tendances TikTok et YouTube sans stratégie. La <span className="font-accented">méthode</span> Ikigai m'a enfin permis de comprendre ma vraie valeur. Le branding d'expert a donné une crédibilité <span className="font-accented">immédiate</span> à ma page."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img 
                    src={avatarCreator} 
                    alt="Aïssatou K." 
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">Aïssatou K.</div>
                    <div className="text-xs text-slate-400">Créatrice & Formatrice · Abidjan</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#2545FF] mb-4">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "J'hésitais entre le Branding seul et le Bundle. Pour <span className="font-numbers">36 000f</span>, le bundle est donné. Mon profil LinkedIn a généré plus de <span className="font-numbers">12</span> prospects qualifiés entrants le premier mois sans aucune prospection à froid."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img 
                    src={avatarConsultant} 
                    alt="Boris T." 
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">Boris T.</div>
                    <div className="text-xs text-slate-400">Consultant B2B · Douala</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ SECTION (Accordéon) WITH GLASSMORPHISM */}
        <section id="faq" className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2545FF] mb-3 block">
                Questions fréquentes
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Tout ce que tu dois savoir avant de commander
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl glass-panel glass-panel-hover overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-base sm:text-lg text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#2545FF]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. CTA FINAL WITH GLASSMORPHISM */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="p-8 sm:p-14 rounded-3xl glass-panel-accent relative overflow-hidden shadow-2xl">
              {/* Subtle top glow */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-[#2545FF]/25 rounded-full blur-[80px] pointer-events-none"
                aria-hidden="true" 
              />

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight" style={{ textWrap: 'balance' }}>
                <span className="block">Tu n'as pas besoin de plus.</span>
                <span className="block mt-2">Tu as besoin d'une <span className="font-accented text-[#2545FF]">compétence</span>.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-xl mx-auto mb-8 leading-relaxed">
                Un positionnement clair. Un profil qui attire naturellement les bons clients.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => scrollToSection('offres')}
                  className="px-8 py-4 text-base font-bold text-white bg-[#2545FF] hover:bg-[#1B36D4] rounded-xl transition-all shadow-[0_0_30px_rgba(37,69,255,0.4)] hover:shadow-[0_0_45px_rgba(37,69,255,0.6)] flex items-center gap-2 group cursor-pointer"
                >
                  <span>Découvrir mes options</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#07080B] border-t border-white/5 py-10 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-white text-lg tracking-tight">Focus</span>
            <span className="text-[#2545FF] font-display font-extrabold text-lg tracking-tight">One</span>
            <span className="text-slate-600 ml-2">·</span>
            <span className="text-slate-400">Pour les entrepreneurs digitaux africains</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={() => scrollToSection('offres')} className="hover:text-white transition-colors cursor-pointer">
              Offres
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer">
              Questions
            </button>
            <a 
              href="https://wa.me/?text=Bonjour%20Focus%20One,%20j%27aimerais%20en%20savoir%20plus" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#2545FF] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Support WhatsApp</span>
            </a>
          </div>

          <div className="text-slate-500">
            © {new Date().getFullYear()} Focus One. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* CHECKOUT / ACTION MODAL WITH GLASSMORPHISM */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="glass-modal rounded-3xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedOffer(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {!orderSuccess ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#2545FF] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Validation de commande</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {selectedOffer.name}
                </h3>
                <p className="text-slate-400 text-xs mb-6">
                  {selectedOffer.tagline}
                </p>

                {/* Price summary */}
                <div className="p-4 rounded-2xl glass-chip mb-6 flex items-center justify-between">
                  <span className="text-sm text-slate-300">Total à régler (unique)</span>
                  <span className="text-2xl font-black text-white font-numbers">{selectedOffer.price}</span>
                </div>

                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Ton nom complet
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: David Traoré"
                      value={orderName}
                      onChange={(e) => setOrderName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none focus:border-[#2545FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Ton numéro WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +221 77 000 00 00 / +225 07..."
                      value={orderPhone}
                      onChange={(e) => setOrderPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none focus:border-[#2545FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Moyen de paiement préféré
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'wave', label: 'Wave', icon: WaveLogo },
                        { id: 'orange', label: 'Orange Money', icon: OrangeMoneyLogo },
                        { id: 'mtn', label: 'MTN MoMo', icon: MTNMoMoLogo },
                        { id: 'card', label: 'Carte Bancaire', icon: VisaLogo }
                      ].map((item) => {
                        const PaymentIcon = item.icon;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setPaymentMethod(item.id as any)}
                            className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-2.5 ${
                              paymentMethod === item.id
                                ? 'bg-[#2545FF]/20 border-[#2545FF] text-white font-semibold shadow-[0_0_15px_rgba(37,69,255,0.25)]'
                                : 'glass-chip text-slate-300 hover:border-white/20'
                            }`}
                          >
                            <PaymentIcon className="w-5 h-5 shrink-0 rounded-md shadow-sm" />
                            <span className="truncate">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-4 text-center font-bold text-white bg-[#2545FF] hover:bg-[#1B36D4] rounded-xl transition-all shadow-[0_0_20px_rgba(37,69,255,0.35)] cursor-pointer text-sm"
                    >
                      Confirmer ma commande ({selectedOffer.price})
                    </button>

                    <a
                      href={`https://wa.me/?text=Bonjour,%20je%20souhaite%20commander%20l%27offre%20"${encodeURIComponent(selectedOffer.name)}"%20à%20${encodeURIComponent(selectedOffer.price)}%20sur%20Focus%20One`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 text-center font-medium text-slate-300 hover:text-white glass-chip rounded-xl transition-colors flex items-center justify-center gap-2 text-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Commander directement par WhatsApp</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Commande initiée avec succès !
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Merci <strong>{orderName}</strong>. Notre conseiller t'envoie immédiatement le lien de paiement sécurisé ({paymentMethod.toUpperCase()}) sur ton numéro WhatsApp <strong>{orderPhone}</strong>.
                </p>

                {(selectedOffer.id === 'skill' || selectedOffer.id === 'bundle') && (
                  <div className="mb-6 p-4 rounded-2xl glass-chip border border-[#2545FF]/40 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2545FF] uppercase tracking-wider mb-2">
                      <KeyRound className="w-4 h-4" />
                      <span>Accès Ikigai immédiat</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed mb-3">
                      voici ton accès à Ikigai. A présent clique sur ce lien et entre ce code . ensuite suis les directives de l'assistant pour trouver ta compétence
                    </p>
                    <div className="space-y-2 pt-2 border-t border-[#2545FF]/25 text-xs">
                      <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-black/40 border border-white/10">
                        <span className="text-slate-400">Code à entrer :</span>
                        <div className="flex items-center gap-2">
                          <code className="font-numbers font-bold text-[#2545FF] tracking-wider text-sm px-1.5 py-0.5 rounded bg-white/5">
                            {IKIGAI_CODE}
                          </code>
                          <button
                            type="button"
                            onClick={handleCopyCode}
                            className="p-1 hover:text-white text-slate-400 transition-colors"
                            title="Copier le code"
                          >
                            {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <a
                        href={IKIGAI_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-lg bg-[#2545FF] hover:bg-[#1B36D4] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>Cliquer ici pour accéder à l'assistant Ikigai</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/?text=Bonjour,%20j%27ai%20validé%20ma%20commande%20"${encodeURIComponent(selectedOffer.name)}"%20sur%20Focus%20One.%20Mon%20nom%20est%20${encodeURIComponent(orderName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-2 inline-flex"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ouvrir WhatsApp pour finaliser</span>
                  </a>
                  <button
                    onClick={() => setSelectedOffer(null)}
                    className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Fermer cette fenêtre
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
