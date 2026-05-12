import type { ReactNode } from "react";
import type { TranslationKey } from "./i18n";

/**
 * Service data for the Services section + ServiceModal.
 *
 * Mirrors lib/destinations.ts: long copy is co-located as { hy, en } objects
 * rather than i18n keys, since each service has a unique paragraph and 5
 * unique features — would otherwise add 50+ one-off keys to i18n.tsx.
 *
 * Shared labels (modal headings, CTAs) stay in i18n.tsx.
 *
 * Pricing numbers are PLACEHOLDERS — the agency owner must validate before
 * the site is sent to a real customer.
 */

export type Locale = "hy" | "en";
type L = { hy: string; en: string };

export type ServiceDetail = {
  id: "flights" | "hotels" | "visa" | "tours";
  icon: ReactNode;
  titleKey: TranslationKey;        // existing: "services.flights.title" etc.
  shortDescKey: TranslationKey;    // existing: card description
  longDesc: L;                     // paragraph for modal body
  features: L[];                   // bullet list, 5 items
  pricing?: { amount: string; unit: L };
};

// ── Icons (factored out so the data array reads cleanly) ─────────────────
const FlightIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const HotelIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
    <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <path d="M2 20h20" />
    <path d="M9 10v4" />
    <path d="M15 10v4" />
  </svg>
);

const VisaIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <circle cx="12" cy="10" r="3" />
    <path d="M8 16h8" />
    <path d="M9 19h6" />
  </svg>
);

const ToursIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const services: ServiceDetail[] = [
  {
    id: "flights",
    icon: FlightIcon,
    titleKey: "services.flights.title",
    shortDescKey: "services.flights.desc",
    longDesc: {
      hy: "Աշխատում ենք 40+ ավիաընկերության և IATA-ի կոնսոլիդատորների հետ։ Համեմատում ենք ուղիղ ու անցումային չվերթերը՝ ձեր ամսաթվերի համար գտնելու լավագույն գին, ձևակերպում ենք տոմսը և օգնում, եթե կարիք լինի փոխել ամսաթիվը կամ չվերթը։",
      en: "We work with 40+ carriers and IATA consolidators. We compare direct and transit routes to find the best valid combo on your dates, handle ticketing, and manage rebookings when plans change.",
    },
    features: [
      { hy: "Ուղիղ պայմանագրեր 40+ ավիաընկերության հետ", en: "Direct contracts with 40+ airlines" },
      { hy: "Բազմակետ և open-jaw երթուղիներ", en: "Multi-city + open-jaw routing" },
      { hy: "24 ժամյա փոփոխման ու չեղարկման աջակցություն", en: "24h rebooking & cancellation support" },
      { hy: "Ուղեբեռի կանոնների խորհրդատվություն", en: "Cabin-baggage advice for low-cost carriers" },
      { hy: "Խմբային գներ՝ 10+ ուղևորների համար", en: "Group fares for 10+ passengers" },
    ],
    pricing: {
      amount: "$25",
      unit: { hy: "սպասարկման վճարից", en: "service fee" },
    },
  },

  {
    id: "hotels",
    icon: HotelIcon,
    titleKey: "services.hotels.title",
    shortDescKey: "services.hotels.desc",
    longDesc: {
      hy: "Մենք միայն հյուրանոց չենք ամրագրում՝ կազմակերպում ենք մնալու ողջ փորձառությունը՝ համապատասխան ձեր ուղևորությանը։ Մեղրամիս, ընտանեկան, գործնական։ Հյուրանոց + տրանսֆեր + հիմնական տուրեր՝ մեկ ընդհանուր վճարումով։",
      en: "We don't just book hotels — we curate the stay around your trip. Honeymoon, family, business. Hotel + transfer + key tours billed together, one transparent payment.",
    },
    features: [
      { hy: "100,000+ հյուրանոց՝ ուղիղ պայմանագրերով", en: "100,000+ hotels via direct partnerships" },
      { hy: "Մեղրամսի և տարեդարձի սենյակային բարելավումներ", en: "Honeymoon & anniversary room upgrades" },
      { hy: "Ժամանելուց առաջ՝ կոնսիերժ սպասարկում", en: "Pre-arrival concierge: pickup, reservations" },
      { hy: "Ընտանեկան սենյակների իրական հաստատում", en: "Family-room confirmations, not web claims" },
      { hy: "All-inclusive փաթեթներ՝ թափանցիկ գներով", en: "All-inclusive packages, transparent pricing" },
    ],
    // No pricing — too dependent on destination/dates to give a useful number
  },

  {
    id: "visa",
    icon: VisaIcon,
    titleKey: "services.visa.title",
    shortDescKey: "services.visa.desc",
    longDesc: {
      hy: "Շենգեն, Մեծ Բրիտանիա, ԱՄՆ, ԱՄԷ՝ ամենահաճախ պահանջվող չորսը։ Մենք պատրաստում ենք փաստաթղթերը, գրանցում ենք տերմինը, պատրաստում ենք ձեզ հարցազրույցին և, որտեղ թույլատրվում է, ներկայացնում ենք ձեր անունից։",
      en: "Schengen, UK, US, UAE — the four most-asked. We prep documents, book your appointment slot, coach you through the interview, and submit on your behalf where allowed.",
    },
    features: [
      { hy: "Շենգեն՝ ցանկացած դեսպանատուն Երևանում", en: "Schengen — any consulate in Yerevan" },
      { hy: "Մեծ Բրիտանիա՝ ստանդարտ, գործնական, ընտանեկան", en: "UK — standard visitor, business, family" },
      { hy: "ԱՄՆ՝ B1/B2 + DS-160 + հարցազրույցի մարզում", en: "US — B1/B2 + DS-160 + interview coaching" },
      { hy: "ԱՄԷ՝ e-visa 48 ժամում", en: "UAE — e-visa within 48h" },
      { hy: "Փաստաթղթերի թարգմանություն և նոտարական վավերացում", en: "Document translation & notarization" },
    ],
    pricing: {
      amount: "$80",
      unit: { hy: "սպասարկման վճարից + դեսպանատան վճարներ", en: "service fee + consulate fees" },
    },
  },

  {
    id: "tours",
    icon: ToursIcon,
    titleKey: "services.tours.title",
    shortDescKey: "services.tours.desc",
    longDesc: {
      hy: "Փոքր խմբերով մեկնումներ՝ հայալեզու ուղեկցորդով։ 8–15 մարդ։ Հաճելի կազմ, սակայն ոչ մարդաշատ։ Նոր մեկնումներ ամեն ամիս՝ դեպի Եվրոպա, Ասիա և Պարսից ծոց։",
      en: "Small-group departures led by Armenian-speaking guides. 8–15 travelers. Sociable but not crowded. New departures every month to Europe, Asia, and the Gulf.",
    },
    features: [
      { hy: "8–15 մարդ յուրաքանչյուր խմբում (ոչ ավելի)", en: "8–15 travelers per group, never more" },
      { hy: "Հայալեզու ուղեկցորդ՝ ողջ ուղևորության ընթացքում", en: "Armenian-speaking guide throughout" },
      { hy: "4–5★ հյուրանոցներ + 3–4 կերակուր օրական", en: "4–5★ hotels + 3–4 meals/day" },
      { hy: "Մուտքի տոմսերն ու տրանսֆերները ներառված", en: "Entry tickets + transfers included" },
      { hy: "Մենակ ճանապարհորդներ ողջունելի (սենյակի կիսման օգնություն)", en: "Solo travelers welcome (room-share matching)" },
    ],
    pricing: {
      amount: "$890",
      unit: { hy: "մեկ անձի համար", en: "per person" },
    },
  },
];
