import type { TranslationKey } from "./i18n";

/**
 * Destination data with full trip details for the modal.
 *
 * Per-destination strings (city/country/highlights) are co-located here as
 * { hy, en } objects rather than i18n keys — they're tightly coupled to the
 * data and would otherwise bloat i18n.tsx with 100+ one-off keys.
 *
 * Shared strings (tags, includes, modal UI labels) live in i18n.tsx and are
 * referenced here as TranslationKeys.
 *
 * Prices, hotel names, and stats are PLACEHOLDERS based on plausible market
 * rates. The agency owner must validate every number before this site is
 * pitched to a real customer.
 *
 * Armenian transliterations follow the pattern Armenian-Wikipedia uses for
 * foreign place names: Latin "Tr" → "Տր", Italian/Romance soft "c" → "ց",
 * Turkish "k" word-initial → "Թ" or "Ք" depending on common usage. Native
 * proofread still recommended before launch.
 */

export type Region = "visa-free" | "europe" | "asia" | "caucasus";

type L = { hy: string; en: string };

export type DestinationDetail = {
  id: string;
  region: Region;
  city: L;
  country: L;
  image: string;
  tagKey: TranslationKey;
  days: number;
  nights: number;
  priceFromUSD: number;
  hotel: { name: string; stars: number };
  includeKeys: TranslationKey[];
  highlights: L[];
};

export const destinations: DestinationDetail[] = [
  // ── Visa-free ─────────────────────────────────────────────────────────
  {
    id: "dubai",
    region: "visa-free",
    city: { hy: "Դուբայ", en: "Dubai" },
    country: { hy: "ԱՄԷ", en: "UAE" },
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.30",
    days: 5, nights: 4, priceFromUSD: 890,
    hotel: { name: "Atlantis The Palm", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.insurance", "inc.support"],
    highlights: [
      { hy: "Բուրջ Խալիֆա՝ 124-րդ հարկ", en: "Burj Khalifa, 124th floor" },
      { hy: "Անապատային սաֆարի՝ BBQ ընթրիքով", en: "Desert safari with BBQ dinner" },
      { hy: "Dhow ճաշկերույթ-շրջայց Մարինայում", en: "Dhow dinner cruise at the Marina" },
    ],
  },
  {
    id: "bangkok",
    region: "visa-free",
    city: { hy: "Բանգկոկ", en: "Bangkok" },
    country: { hy: "Թայլանդ", en: "Thailand" },
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.30",
    days: 7, nights: 6, priceFromUSD: 720,
    hotel: { name: "Centara Grand at CentralWorld", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.insurance", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Մեծ պալատ և Վատ Փո", en: "Grand Palace & Wat Pho" },
      { hy: "Դամնոեն Սադուակ լողացող շուկա", en: "Damnoen Saduak floating market" },
      { hy: "Թայլանդյան խոհանոցի դաս", en: "Thai cooking class" },
    ],
  },
  {
    id: "bali",
    region: "visa-free",
    city: { hy: "Բալի", en: "Bali" },
    country: { hy: "Ինդոնեզիա", en: "Indonesia" },
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visa.onarrival",
    days: 8, nights: 7, priceFromUSD: 980,
    hotel: { name: "Ayana Resort Bali", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.insurance", "inc.support"],
    highlights: [
      { hy: "Թեգալալանգի բրնձի դաշտեր", en: "Tegallalang rice terraces" },
      { hy: "Թանահ Լոթ տաճար՝ մայրամուտին", en: "Tanah Lot temple at sunset" },
      { hy: "SPA-օր Ուբուդում", en: "Balinese spa day in Ubud" },
    ],
  },
  {
    id: "istanbul",
    region: "visa-free",
    city: { hy: "Ստամբուլ", en: "Istanbul" },
    country: { hy: "Թուրքիա", en: "Türkiye" },
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.90",
    days: 4, nights: 3, priceFromUSD: 480,
    hotel: { name: "Swissôtel The Bosphorus", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Այասոֆիա և Թոփքափի պալատ", en: "Hagia Sophia + Topkapı Palace" },
      { hy: "Բոսֆորի ճաշկերույթային շրջայց", en: "Bosphorus dinner cruise" },
      { hy: "Մեծ բազար և Համեմունքների շուկա", en: "Grand Bazaar & Spice Market" },
    ],
  },
  {
    id: "tbilisi-vf",
    region: "visa-free",
    city: { hy: "Թբիլիսի", en: "Tbilisi" },
    country: { hy: "Վրաստան", en: "Georgia" },
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.year",
    days: 3, nights: 2, priceFromUSD: 290,
    hotel: { name: "Stamba Hotel", stars: 5 },
    includeKeys: ["inc.transfer", "inc.hotelBreakfast", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Հին քաղաքի շրջայց", en: "Old Town walking tour" },
      { hy: "Կախեթիի գինու մառաններ", en: "Kakheti wine cellars day trip" },
      { hy: "Աբանոթուբանիի ծծմբային բաղնիքներ", en: "Abanotubani sulphur baths" },
    ],
  },
  {
    id: "male",
    region: "visa-free",
    city: { hy: "Մալե", en: "Malé" },
    country: { hy: "Մալդիվներ", en: "Maldives" },
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visa.onarrival",
    days: 6, nights: 5, priceFromUSD: 1850,
    hotel: { name: "Conrad Maldives Rangali", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.insurance", "inc.support"],
    highlights: [
      { hy: "Մարջանային խութերի snorkeling", en: "Coral reef snorkeling tour" },
      { hy: "Ավազային կղզու պիկնիկ", en: "Sandbank picnic" },
      { hy: "Մայրամուտին դելֆինների շրջայց", en: "Sunset dolphin cruise" },
    ],
  },

  // ── Europe ────────────────────────────────────────────────────────────
  {
    id: "paris",
    region: "europe",
    city: { hy: "Փարիզ", en: "Paris" },
    country: { hy: "Ֆրանսիա", en: "France" },
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.schengen",
    days: 5, nights: 4, priceFromUSD: 1290,
    hotel: { name: "Hôtel Le Meurice", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.insurance", "inc.support"],
    highlights: [
      { hy: "Էյֆելյան աշտարակ և Սենի շրջայց", en: "Eiffel Tower + Seine cruise" },
      { hy: "Լուվր՝ արագ մուտքով", en: "Louvre fast-track entry" },
      { hy: "Վերսալյան պալատ", en: "Versailles day trip" },
    ],
  },
  {
    id: "rome",
    region: "europe",
    city: { hy: "Հռոմ", en: "Rome" },
    country: { hy: "Իտալիա", en: "Italy" },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.schengen",
    days: 5, nights: 4, priceFromUSD: 1190,
    hotel: { name: "Hotel de Russie", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Վատիկան և Սիքստինյան մատուռ", en: "Vatican + Sistine Chapel" },
      { hy: "Կոլիզեյ՝ ուղեկցորդի հետ", en: "Colosseum guided tour" },
      { hy: "Տրաստեվերեի սննդի շրջայց", en: "Trastevere food walk" },
    ],
  },
  {
    id: "barcelona",
    region: "europe",
    city: { hy: "Բարսելոնա", en: "Barcelona" },
    country: { hy: "Իսպանիա", en: "Spain" },
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.schengen",
    days: 6, nights: 5, priceFromUSD: 1090,
    hotel: { name: "Hotel Arts Barcelona", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.insurance", "inc.support"],
    highlights: [
      { hy: "Սագրադա Ֆամիլիա", en: "Sagrada Família guided tour" },
      { hy: "Պարկ Գուել", en: "Park Güell entry" },
      { hy: "Տապաս և գինու երեկո", en: "Tapas & wine evening" },
    ],
  },
  {
    id: "prague",
    region: "europe",
    city: { hy: "Պրահա", en: "Prague" },
    country: { hy: "Չեխիա", en: "Czechia" },
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.schengen",
    days: 5, nights: 4, priceFromUSD: 890,
    hotel: { name: "Augustine, a Luxury Collection", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Հին քաղաք և Կարլի կամուրջ", en: "Old Town + Charles Bridge" },
      { hy: "Պրահայի ամրոց", en: "Prague Castle tour" },
      { hy: "Չեխական գարեջրի համտես", en: "Czech beer tasting" },
    ],
  },
  {
    id: "athens",
    region: "europe",
    city: { hy: "Աթենք", en: "Athens" },
    country: { hy: "Հունաստան", en: "Greece" },
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.schengen",
    days: 6, nights: 5, priceFromUSD: 1040,
    hotel: { name: "Hotel Grande Bretagne", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Ակրոպոլիս և Ակրոպոլիսի թանգարան", en: "Acropolis + Acropolis Museum" },
      { hy: "Սունիոնի հրվանդանը մայրամուտին", en: "Cape Sounion sunset" },
      { hy: "Պլակայի սննդի շրջայց", en: "Plaka food tour" },
    ],
  },
  {
    id: "vienna",
    region: "europe",
    city: { hy: "Վիեննա", en: "Vienna" },
    country: { hy: "Ավստրիա", en: "Austria" },
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.schengen",
    days: 5, nights: 4, priceFromUSD: 990,
    hotel: { name: "Hotel Sacher Wien", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.support"],
    highlights: [
      { hy: "Շյոնբրունի պալատ", en: "Schönbrunn Palace" },
      { hy: "Օպերային երեկո", en: "Vienna Opera evening" },
      { hy: "Դասական սրճարանների շրջայց", en: "Classic coffee-house tour" },
    ],
  },

  // ── Asia ──────────────────────────────────────────────────────────────
  {
    id: "tokyo",
    region: "asia",
    city: { hy: "Տոկիո", en: "Tokyo" },
    country: { hy: "Ճապոնիա", en: "Japan" },
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visa.req",
    days: 8, nights: 7, priceFromUSD: 2100,
    hotel: { name: "Park Hyatt Tokyo", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Շիբույա և Շինջուկու գիշերային շրջայց", en: "Shibuya + Shinjuku night walk" },
      { hy: "Ֆուջի լեռ՝ մեկօրյա այց", en: "Mt. Fuji day trip" },
      { hy: "Թեյի ավանդական ծես", en: "Traditional tea ceremony" },
    ],
  },
  {
    id: "singapore",
    region: "asia",
    city: { hy: "Սինգապուր", en: "Singapore" },
    country: { hy: "Սինգապուր", en: "Singapore" },
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.30",
    days: 5, nights: 4, priceFromUSD: 1290,
    hotel: { name: "Marina Bay Sands", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.insurance", "inc.support"],
    highlights: [
      { hy: "Gardens by the Bay", en: "Gardens by the Bay" },
      { hy: "Սենտոզա կղզի", en: "Sentosa Island day" },
      { hy: "Hawker փողոցային խոհանոցի շրջայց", en: "Hawker street-food tour" },
    ],
  },
  {
    id: "phuket",
    region: "asia",
    city: { hy: "Փուկեթ", en: "Phuket" },
    country: { hy: "Թայլանդ", en: "Thailand" },
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.30",
    days: 7, nights: 6, priceFromUSD: 890,
    hotel: { name: "Trisara Phuket", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.insurance", "inc.support"],
    highlights: [
      { hy: "Փի Փի կղզիների շրջայց", en: "Phi Phi islands speedboat tour" },
      { hy: "Հին քաղաքի շրջայց", en: "Old Town walk" },
      { hy: "Մայրամուտային զբոսանավային շրջայց", en: "Sunset yacht cruise" },
    ],
  },
  {
    id: "hanoi",
    region: "asia",
    city: { hy: "Հանոյ", en: "Hanoi" },
    country: { hy: "Վիետնամ", en: "Vietnam" },
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.30",
    days: 7, nights: 6, priceFromUSD: 890,
    hotel: { name: "Sofitel Legend Metropole", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Հա Լոնգ ծովածոց (մեկ գիշերով)", en: "Ha Long Bay overnight cruise" },
      { hy: "Հին թաղամասի շրջայց", en: "Old Quarter walking tour" },
      { hy: "Փողոցային խոհանոցի շրջայց", en: "Street food tour" },
    ],
  },
  {
    id: "kl",
    region: "asia",
    city: { hy: "Կուալա Լումպուր", en: "Kuala Lumpur" },
    country: { hy: "Մալայզիա", en: "Malaysia" },
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.30",
    days: 5, nights: 4, priceFromUSD: 740,
    hotel: { name: "Mandarin Oriental KL", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.insurance", "inc.support"],
    highlights: [
      { hy: "Պետրոնասի աշտարակների այցելություն", en: "Petronas Towers visit" },
      { hy: "Բաթուի քարանձավներ", en: "Batu Caves day trip" },
      { hy: "Գիշերային շուկաների շրջայց", en: "Night markets tour" },
    ],
  },
  {
    id: "colombo",
    region: "asia",
    city: { hy: "Կոլոմբո", en: "Colombo" },
    country: { hy: "Շրի Լանկա", en: "Sri Lanka" },
    image: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.eta",
    days: 6, nights: 5, priceFromUSD: 890,
    hotel: { name: "Shangri-La Colombo", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Գալլեի ամրոց՝ մեկօրյա այց", en: "Galle Fort day trip" },
      { hy: "Թեյի պլանտացիաներ Նուվարա Էլիյայում", en: "Nuwara Eliya tea plantations" },
      { hy: "Յալայի վայրի բնության սաֆարի", en: "Yala wildlife safari" },
    ],
  },

  // ── Caucasus ──────────────────────────────────────────────────────────
  {
    id: "tbilisi",
    region: "caucasus",
    city: { hy: "Թբիլիսի", en: "Tbilisi" },
    country: { hy: "Վրաստան", en: "Georgia" },
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visafree.year",
    days: 3, nights: 2, priceFromUSD: 290,
    hotel: { name: "Stamba Hotel", stars: 5 },
    includeKeys: ["inc.transfer", "inc.hotelBreakfast", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Հին քաղաքի շրջայց", en: "Old Town walking tour" },
      { hy: "Կախեթիի գինու մառաններ", en: "Kakheti wine cellars day trip" },
      { hy: "Աբանոթուբանիի ծծմբային բաղնիքներ", en: "Abanotubani sulphur baths" },
    ],
  },
  {
    id: "batumi",
    region: "caucasus",
    city: { hy: "Բաթումի", en: "Batumi" },
    country: { hy: "Վրաստան", en: "Georgia" },
    image: "https://images.unsplash.com/photo-1641915739158-1d3eeac49a30?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.blacksea",
    days: 4, nights: 3, priceFromUSD: 380,
    hotel: { name: "Wyndham Grand Batumi", stars: 5 },
    includeKeys: ["inc.transfer", "inc.hotelBreakfast", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Բաթումիի բուսաբանական այգի", en: "Batumi Botanical Garden" },
      { hy: "Սև ծովի ափնյա զբոսանք", en: "Black Sea boardwalk" },
      { hy: "Աջարական խոհանոցի համտես", en: "Adjarian cuisine tasting" },
    ],
  },
  {
    id: "kazbegi",
    region: "caucasus",
    city: { hy: "Կազբեգի", en: "Kazbegi" },
    country: { hy: "Վրաստան", en: "Georgia" },
    image: "https://images.unsplash.com/photo-1567859069618-0a16e69ff5dd?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.daytrip",
    days: 2, nights: 1, priceFromUSD: 290,
    hotel: { name: "Rooms Hotel Kazbegi", stars: 4 },
    includeKeys: ["inc.transfer", "inc.hotelBreakfast", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Գերգետիի Սուրբ Երրորդություն եկեղեցի", en: "Gergeti Trinity Church" },
      { hy: "Թրուսո հովտի արշավ", en: "Truso Valley hike" },
      { hy: "Ավանդական խինկալիով ընթրիք", en: "Local khinkali dinner" },
    ],
  },
  {
    id: "tehran",
    region: "caucasus",
    city: { hy: "Թեհրան", en: "Tehran" },
    country: { hy: "Իրան", en: "Iran" },
    image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=1600&q=80",
    tagKey: "tag.visa.onarrival",
    days: 5, nights: 4, priceFromUSD: 590,
    hotel: { name: "Espinas Palace Hotel", stars: 5 },
    includeKeys: ["inc.flight", "inc.hotelBreakfast", "inc.transfer", "inc.visa", "inc.guide", "inc.support"],
    highlights: [
      { hy: "Գոլեստան պալատ", en: "Golestan Palace" },
      { hy: "Թեհրանի Մեծ բազար", en: "Tehran Grand Bazaar" },
      { hy: "Պարսկական գորգերի արհեստանոց", en: "Persian carpet workshop" },
    ],
  },
];
