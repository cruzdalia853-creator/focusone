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
  Menu
} from 'lucide-react';

import avatarFounder from './assets/images/avatar_african_founder_1790161357336.jpg';
import avatarCreator from './assets/images/avatar_african_creator_1790161371307.jpg';
import avatarConsultant from './assets/images/avatar_african_consultant_1790161381513.jpg';

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
    <div className="min-h-screen bg-[#090A0E] text-slate-100 flex flex-col font-sans selection:bg-[#FF5500] selection:text-white">
      {/* 1. TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-[#090A0E]/90 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 focus:outline-none"
            aria-label="Focus One accueil"
          >
            <span className="font-display font-extrabold text-white text-2xl tracking-tighter">Focus</span>
            <span className="text-[#FF5500] font-display font-extrabold text-2xl tracking-tighter">One</span>
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
              La Méthode
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
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#FF5500] hover:bg-[#E64D00] rounded-lg transition-colors whitespace-nowrap shadow-sm hover:shadow-[0_0_20px_rgba(255,85,0,0.35)] cursor-pointer"
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
          <div className="md:hidden bg-[#0D0F15] border-b border-white/10 px-4 py-5 space-y-3 animate-in fade-in duration-200">
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
              La Méthode
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
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#FF5500] hover:bg-[#E64D00] rounded-lg transition-colors cursor-pointer"
              >
                Découvrir les offres
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
          {/* Subtle single radial glow behind hero */}
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF5500]/10 rounded-full blur-[120px] pointer-events-none"
            aria-hidden="true" 
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            {/* Clean unboxed metadata (anti-pill discipline) */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 mb-6 tracking-wide">
              <span>Méthode inspirée de l'Ikigai</span>
              <span aria-hidden="true" className="text-[#FF5500]">·</span>
              <span>Positionnement digital</span>
              <span aria-hidden="true" className="text-[#FF5500]">·</span>
              <span>Profil magnétique</span>
            </div>

            {/* Impact Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-display max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>
              Tu essaies plein de choses et rien ne prend. Le problème, c'est que tu n'as pas encore trouvé <span className="text-[#FF5500]">TA compétence</span>.
            </h1>

            {/* Promise Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-9">
              Arrête d'éparpiller ton énergie sur 10 projets à la fois. Focus One t'aide à identifier la compétence unique dans laquelle tu excelles, puis à bâtir un profil réseaux sociaux magnétique qui attire naturellement tes clients idéaux.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={() => scrollToSection('offres')}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-[#FF5500] hover:bg-[#E64D00] rounded-xl transition-all shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:shadow-[0_0_40px_rgba(255,85,0,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Découvrir mes options</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust reassurance (unboxed text) */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FF5500]" />
                <span>Paiement unique en FCFA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FF5500]" />
                <span>Wave, Orange Money & MoMo acceptés</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FF5500]" />
                <span>Résultats dès cette semaine</span>
              </div>
            </div>

            {/* Visual Anchor: The Shift Visual (Dispersion vs Focus) */}
            <div className="mt-14 max-w-3xl mx-auto text-left">
              <div className="bg-[#12141D] rounded-2xl border border-white/10 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  {/* Left: Dispersion */}
                  <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-3 tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        Avant : La dispersion (10 projets à 10%)
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
                  <div className="p-4 sm:p-5 rounded-xl bg-[#191D28] border border-[#FF5500]/40 flex flex-col justify-between relative shadow-[0_0_25px_rgba(255,85,0,0.1)]">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#FF5500] mb-3 tracking-wide uppercase">
                        <Flame className="w-4 h-4 text-[#FF5500]" />
                        Avec Focus One : 1 Compétence Pivot (100%)
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                        Une compétence identifiée où tu es excellent. Un profil optimisé qui explique en 3 secondes pourquoi on doit te payer toi et pas un autre.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span>Perception client</span>
                      <span className="font-semibold text-white">Expert incontournable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SECTION PROBLÈME (Ton empathique, pas culpabilisant) */}
        <section id="probleme" className="py-20 bg-[#0C0E14] border-y border-white/5 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-3 block">
                Diagnostic lucide
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
                Ce n'est pas un manque de travail. C'est un manque de clarté.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
                Tu as l'énergie, la motivation et l'envie de réussir. Mais sans une cible précise, tous tes efforts s'évaporent sans laisser de trace.
              </p>
            </div>

            {/* 3 empathetic points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Point 1 */}
              <div className="bg-[#12141D] p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FF5500] font-display font-bold text-lg mb-5">
                  01
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">
                  La dispersion invisible
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tu testes une nouvelle opportunité chaque semaine. Tu n'es pas paresseux : tu es juste éparpillé. Faire 10 choses à 10% ne donne jamais 100% de résultat.
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-[#12141D] p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FF5500] font-display font-bold text-lg mb-5">
                  02
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">
                  Le flou pour tes prospects
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Quand quelqu'un arrive sur ton profil Facebook, Instagram ou LinkedIn, il ne comprend pas en 3 secondes ce que tu apportes concrètement. Dans le doute, il va voir ailleurs.
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-[#12141D] p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FF5500] font-display font-bold text-lg mb-5">
                  03
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">
                  Un profil non optimisé
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Une photo prise sans intention, une bannière vide, une bio sans offre nette... Ton profil actuel te fait passer pour un débutant alors que tu as une réelle valeur à apporter.
                </p>
              </div>
            </div>

            {/* Empathy concluding statement */}
            <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-slate-300">
                <strong className="text-white font-semibold">La bonne nouvelle ?</strong> Il suffit souvent d'un seul ajustement : verrouiller <span className="text-[#FF5500] font-medium">une seule compétence clé</span> et la packager avec un profil professionnel irréprochable.
              </p>
            </div>
          </div>
        </section>

        {/* MÉTHODE / PROCESSUS (Ikigai adapté + Branding) */}
        <section id="methode" className="py-20 bg-[#090A0E] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-3 block">
                La méthode Focus One
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Deux étapes simples pour changer de statut
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Etape 1 */}
              <div className="p-8 rounded-2xl bg-[#12141D] border border-white/10 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500]">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Étape 01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  L'extraction Ikigai assistée par IA
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Nous analysons le croisement exact entre ce que tu aimes faire, ce dans quoi tu es naturellement doué, et ce pour quoi les clients en Afrique ou à l'international sont prêts à payer cher.
                </p>
                <div className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Fin des hésitations entre 5 métiers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Ciblage direct de ta compétence la plus rentable</span>
                  </div>
                </div>
              </div>

              {/* Etape 2 */}
              <div className="p-8 rounded-2xl bg-[#12141D] border border-white/10 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Étape 02</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  La transformation du profil en aimant
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Une fois ta compétence verrouillée, nos experts construisent la vitrine qui l'impose. Photo pro, bannière sur-mesure, bio persuasive : ton profil devient une machine à générer des prises de contact.
                </p>
                <div className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Image d'autorité immédiate dès le premier regard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Les prospects viennent à toi au lieu de courir après eux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION OFFRES — 3 CARTES CÔTE À CÔTE */}
        <section id="offres" className="py-20 bg-[#0C0E14] border-t border-white/5 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-3 block">
                Tarifs transparents & paiement unique
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Choisis la formule adaptée à ta situation
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-4">
                Pas d'abonnement récurrent. Aucun frais caché. Accès immédiat ou livraison sous 48h.
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
                        ? 'bg-[#151824] border-2 border-[#FF5500] shadow-[0_0_40px_rgba(255,85,0,0.18)] lg:-translate-y-2'
                        : 'bg-[#10121A] border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Badge if bundle */}
                    {offer.highlight && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="bg-[#FF5500] text-white text-xs font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md whitespace-nowrap">
                          {offer.highlight}
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Card Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white font-display mb-2">
                          {offer.name}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                          {offer.tagline}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums tracking-tight">
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
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isBundle ? 'text-[#FF5500]' : 'text-slate-400'}`} />
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
                            ? 'bg-[#FF5500] hover:bg-[#E64D00] text-white shadow-[0_0_25px_rgba(255,85,0,0.4)]'
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

            {/* Local payments banner (clean, unboxed) */}
            <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <span className="text-center sm:text-left">
                Paiements locaux et internationaux sécurisés :
              </span>
              <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 font-medium">
                <span className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-white">Wave</span>
                <span className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-white">Orange Money</span>
                <span className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-white">MTN MoMo</span>
                <span className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-white">Moov Money</span>
                <span className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-white">Carte Visa / Mastercard</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION PREUVE SOCIALE — TÉMOIGNAGES */}
        <section id="temoignages" className="py-20 bg-[#090A0E] relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-3 block">
                Preuve & retours d'expérience
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Ils ont arrêté de se disperser. Voici leurs résultats.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-4">
                Des créateurs et freelances africains qui ont fait le choix du focus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-[#11131C] p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#FF5500] mb-4">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "Avant Focus One, j'avais 4 offres différentes dans ma bio. Les gens ne comprenaient rien. En 48h après la refonte de mon profil et le recentrage sur ma compétence clé, j'ai signé mes deux premiers clients à 150 000 FCFA."
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
              <div className="bg-[#11131C] p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#FF5500] mb-4">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "Je passais mes journées à tester toutes les tendances TikTok et YouTube sans stratégie. La méthode Ikigai m'a enfin permis de comprendre ma vraie valeur. Le branding d'expert a donné une crédibilité immédiate à ma page."
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
              <div className="bg-[#11131C] p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#FF5500] mb-4">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    "J'hésitais entre le Branding seul et le Bundle. Pour 36 000f, le bundle est donné. Mon profil LinkedIn a généré plus de 12 prospects qualifiés entrants le premier mois sans aucune prospection à froid."
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

        {/* 5. FAQ SECTION (Accordéon) */}
        <section id="faq" className="py-20 bg-[#0C0E14] border-t border-white/5 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-3 block">
                Questions fréquentes
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Tout ce que tu dois savoir avant de commander
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#11131C] border border-white/10 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-base sm:text-lg text-white font-display">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FF5500]' : ''
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

        {/* 6. CTA FINAL */}
        <section className="py-20 md:py-28 bg-[#090A0E] relative border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#131622] to-[#0D0F16] border border-white/10 relative overflow-hidden shadow-2xl">
              {/* Subtle top glow */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-[#FF5500]/20 rounded-full blur-[80px] pointer-events-none"
                aria-hidden="true" 
              />

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-6 leading-tight" style={{ textWrap: 'balance' }}>
                Tu essaies plein de choses et rien ne prend. Arrête la dispersion, trouve <span className="text-[#FF5500]">TA compétence</span>.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
                Rejoins les entrepreneurs africains qui ont choisi la clarté et attirent désormais leurs clients avec un profil magnétique.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => scrollToSection('offres')}
                  className="px-8 py-4 text-base font-bold text-white bg-[#FF5500] hover:bg-[#E64D00] rounded-xl transition-all shadow-[0_0_30px_rgba(255,85,0,0.35)] hover:shadow-[0_0_40px_rgba(255,85,0,0.55)] flex items-center gap-2 group cursor-pointer"
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
            <span className="text-[#FF5500] font-display font-extrabold text-lg tracking-tight">One</span>
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
              className="hover:text-[#FF5500] transition-colors flex items-center gap-1.5"
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

      {/* CHECKOUT / ACTION MODAL */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#12141D] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
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
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF5500] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Validation de commande</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display mb-1">
                  {selectedOffer.name}
                </h3>
                <p className="text-slate-400 text-xs mb-6">
                  {selectedOffer.tagline}
                </p>

                {/* Price summary */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-center justify-between">
                  <span className="text-sm text-slate-300">Total à régler (unique)</span>
                  <span className="text-2xl font-black text-white font-display">{selectedOffer.price}</span>
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
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0E] border border-white/15 text-white text-sm focus:outline-none focus:border-[#FF5500] transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0E] border border-white/15 text-white text-sm focus:outline-none focus:border-[#FF5500] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Moyen de paiement préféré
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'wave', label: 'Wave' },
                        { id: 'orange', label: 'Orange Money' },
                        { id: 'mtn', label: 'MTN MoMo' },
                        { id: 'card', label: 'Carte Bancaire' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPaymentMethod(item.id as any)}
                          className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                            paymentMethod === item.id
                              ? 'bg-[#FF5500]/15 border-[#FF5500] text-white font-semibold'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-4 text-center font-bold text-white bg-[#FF5500] hover:bg-[#E64D00] rounded-xl transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)] cursor-pointer text-sm"
                    >
                      Confirmer ma commande ({selectedOffer.price})
                    </button>

                    <a
                      href={`https://wa.me/?text=Bonjour,%20je%20souhaite%20commander%20l%27offre%20"${encodeURIComponent(selectedOffer.name)}"%20à%20${encodeURIComponent(selectedOffer.price)}%20sur%20Focus%20One`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 text-center font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs"
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
                <h4 className="text-2xl font-bold text-white font-display mb-2">
                  Commande initiée avec succès !
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Merci <strong>{orderName}</strong>. Notre conseiller t'envoie immédiatement le lien de paiement sécurisé ({paymentMethod.toUpperCase()}) sur ton numéro WhatsApp <strong>{orderPhone}</strong>.
                </p>
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
