/**
 * Upcoming group-tour departures.
 *
 * Dates are real future dates (>2026-05-13). When the calendar moves past a
 * departure, that tour should be removed or replaced — there's no auto-prune.
 * The `spotsLeft` field is what drives status: 0 = sold out, 1-3 = limited.
 *
 * Photos reuse the same Unsplash URLs as lib/destinations.ts to keep CDN
 * cache hot. Prices & spots are PLACEHOLDERS pending client validation.
 */

type L = { hy: string; en: string };

export type Tour = {
  id: string;
  city: L;
  country: L;
  image: string;
  startDate: string; // ISO date string
  endDate: string;
  priceFromUSD: number;
  totalSpots: number;
  spotsLeft: number;
  hotel?: string;
  tagline: L;
};

export const tours: Tour[] = [
  {
    id: "bali-may26",
    city: { hy: "Բալի", en: "Bali" },
    country: { hy: "Ինդոնեզիա", en: "Indonesia" },
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-05-25",
    endDate: "2026-06-01",
    priceFromUSD: 980,
    totalSpots: 15,
    spotsLeft: 3,
    hotel: "Ayana Resort Bali",
    tagline: {
      hy: "Բրնձի դաշտեր, տաճարներ ու SPA",
      en: "Rice terraces, temples, and spa days",
    },
  },
  {
    id: "tbilisi-jun26",
    city: { hy: "Թբիլիսի և Կախեթի", en: "Tbilisi & Kakheti" },
    country: { hy: "Վրաստան", en: "Georgia" },
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-06-05",
    endDate: "2026-06-07",
    priceFromUSD: 290,
    totalSpots: 15,
    spotsLeft: 11,
    hotel: "Stamba Hotel",
    tagline: {
      hy: "Հին քաղաքի շրջագայություն և գինու մառաններ",
      en: "Old Town walking tour + Kakheti wine cellars",
    },
  },
  {
    id: "paris-jun26",
    city: { hy: "Փարիզ", en: "Paris" },
    country: { hy: "Ֆրանսիա", en: "France" },
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-06-18",
    endDate: "2026-06-22",
    priceFromUSD: 1290,
    totalSpots: 15,
    spotsLeft: 0,
    hotel: "Hôtel Le Meurice",
    tagline: {
      hy: "Գարնան Փարիզ՝ Լուվր, Վերսալ, Սենի շրջայց",
      en: "Spring in Paris — Louvre, Versailles, Seine cruise",
    },
  },
  {
    id: "istanbul-jul26",
    city: { hy: "Ստամբուլ", en: "Istanbul" },
    country: { hy: "Թուրքիա", en: "Türkiye" },
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-07-03",
    endDate: "2026-07-05",
    priceFromUSD: 480,
    totalSpots: 15,
    spotsLeft: 14,
    hotel: "Swissôtel The Bosphorus",
    tagline: {
      hy: "Շաբաթ-կիրակի Բոսֆորի վրա",
      en: "A weekend on the Bosphorus",
    },
  },
  {
    id: "tokyo-jul26",
    city: { hy: "Տոկիո", en: "Tokyo" },
    country: { hy: "Ճապոնիա", en: "Japan" },
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-07-18",
    endDate: "2026-07-25",
    priceFromUSD: 2100,
    totalSpots: 15,
    spotsLeft: 9,
    hotel: "Park Hyatt Tokyo",
    tagline: {
      hy: "Ֆուջի, Շիբույա, թեյի ավանդական ծես",
      en: "Mt. Fuji, Shibuya, traditional tea ceremony",
    },
  },
  {
    id: "barcelona-aug26",
    city: { hy: "Բարսելոնա", en: "Barcelona" },
    country: { hy: "Իսպանիա", en: "Spain" },
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-08-08",
    endDate: "2026-08-13",
    priceFromUSD: 1090,
    totalSpots: 15,
    spotsLeft: 11,
    hotel: "Hotel Arts Barcelona",
    tagline: {
      hy: "Գաուդի, Պարկ Գուել, ծովափնյա տապաս",
      en: "Gaudí, Park Güell, seaside tapas",
    },
  },
  {
    id: "phuket-aug26",
    city: { hy: "Փուկեթ", en: "Phuket" },
    country: { hy: "Թայլանդ", en: "Thailand" },
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-08-22",
    endDate: "2026-08-28",
    priceFromUSD: 890,
    totalSpots: 15,
    spotsLeft: 6,
    hotel: "Trisara Phuket",
    tagline: {
      hy: "Փի Փի կղզիներ և մայրամուտի շրջայց",
      en: "Phi Phi islands + sunset yacht cruise",
    },
  },
  {
    id: "rome-sep26",
    city: { hy: "Հռոմ", en: "Rome" },
    country: { hy: "Իտալիա", en: "Italy" },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-09-18",
    endDate: "2026-09-22",
    priceFromUSD: 1190,
    totalSpots: 15,
    spotsLeft: 13,
    hotel: "Hotel de Russie",
    tagline: {
      hy: "Վատիկան, Կոլիզեյ, Տրաստեվերե",
      en: "Vatican, Colosseum, Trastevere",
    },
  },
  {
    id: "dubai-oct26",
    city: { hy: "Դուբայ", en: "Dubai" },
    country: { hy: "ԱՄԷ", en: "UAE" },
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-10-10",
    endDate: "2026-10-14",
    priceFromUSD: 890,
    totalSpots: 15,
    spotsLeft: 15,
    hotel: "Atlantis The Palm",
    tagline: {
      hy: "Բուրջ Խալիֆա, անապատային սաֆարի, Marina",
      en: "Burj Khalifa, desert safari, Dubai Marina",
    },
  },
  {
    id: "singapore-nov26",
    city: { hy: "Սինգապուր", en: "Singapore" },
    country: { hy: "Սինգապուր", en: "Singapore" },
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
    startDate: "2026-11-05",
    endDate: "2026-11-09",
    priceFromUSD: 1290,
    totalSpots: 15,
    spotsLeft: 15,
    hotel: "Marina Bay Sands",
    tagline: {
      hy: "Gardens by the Bay, Sentosa, Hawker փողոցային խոհանոց",
      en: "Gardens by the Bay, Sentosa, Hawker street food",
    },
  },
];

/**
 * Computes duration in days inclusive of both endpoints.
 * (Mon → Fri = 5 days, not 4.)
 */
export function tourDays(t: Tour): number {
  const start = new Date(t.startDate).getTime();
  const end = new Date(t.endDate).getTime();
  return Math.round((end - start) / 86_400_000) + 1;
}

export type TourStatus = "soldout" | "limited" | "open";
export function tourStatus(t: Tour): TourStatus {
  if (t.spotsLeft === 0) return "soldout";
  if (t.spotsLeft <= 3) return "limited";
  return "open";
}
