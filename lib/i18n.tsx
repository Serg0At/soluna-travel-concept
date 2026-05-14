"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Minimal client-side i18n.
 *
 * HY is the primary language. EN is a toggle for foreign visitors / the
 * business owner reviewing the demo.
 *
 * NOTE on translation quality: the Armenian copy here has been rewritten
 * to read more naturally than the initial machine-tinted pass, but a
 * native-speaker proofread before launch is still recommended.
 */

export type Locale = "hy" | "en";
export const DEFAULT_LOCALE: Locale = "hy";

const translations = {
  hy: {
    // --- Nav ---
    "nav.destinations": "Ուղղություններ",
    "nav.services": "Ծառայություններ",
    "nav.tours": "Տուրեր",
    "nav.about": "Մեր մասին",
    "nav.contact": "Կապ",
    "nav.cta": "Կապնվել",
    "nav.cta.mobile": "Ստանալ ինֆորմացիա WhatsApp-ով",

    // --- Hero ---
    "hero.eyebrow": "Soluna Travel · Երևան, Հայաստան",
    "hero.title.a": "Ձեր հաջորդ ուղևորությունը՝",
    "hero.title.b": "մեր հոգսը։",
    "hero.subtitle":
      "Չվերթեր, վիզաներ, հյուրանոցներ ու մանրակրկիտ ընտրված փաթեթներ՝ ամբողջը կազմակերպում ենք Երևանից։ Մանր մանրուքները թողեք մեզ՝ դուք պարզապես վայելեք ուղևորությունը։",
    "hero.cta.primary": "Տեսնել առաջիկա տուրերը",
    "hero.cta.whatsapp": "Գրել WhatsApp-ով",
    "hero.trust":
      "✦ Պատասխանում ենք 24 ժամվա ընթացքում · Մեր պատասխանատվությամբ · IATA-ի գործընկեր ավիաընկերություններ",

    // --- Services ---
    "services.eyebrow": "Ինչ ենք առաջարկում",
    "services.title.a": "Մեկ գործակալություն՝",
    "services.title.b": "ամբողջ ուղևորության համար։",
    "services.subtitle":
      "Չվերթ, հյուրանոց, վիզա ու տեղի լոգիստիկա՝ ամեն ինչ մեկ զրույցի ընթացքում։ Առանց հինգ տարբեր կայքերի միջև ետ ու առաջ վազվզելու։",
    "services.flights.title": "Չվերթեր",
    "services.flights.desc":
      "Լավագույն գները 40+ ավիաընկերությունից՝ Turkish, Pegasus, FlyDubai, Wizz, Qatar և շատ ուրիշներ։",
    "services.hotels.title": "Հյուրանոցներ և փաթեթներ",
    "services.hotels.desc":
      "Մեր կողմից ընտրված հյուրանոցներ՝ տրանսֆերներով ու էքսկուրսիաներով։ Առանց օնլայն ամրագրման անակնկալների։",
    "services.visa.title": "Վիզայի աջակցություն",
    "services.visa.desc":
      "Շենգեն, Մեծ Բրիտանիա, ԱՄՆ, ԱՄԷ՝ փաստաթղթերի պատրաստում, տերմինի գրանցում և հարցազրույցի նախապատրաստում։",
    "services.tours.title": "Խմբային տուրեր",
    "services.tours.desc":
      "Փոքրաթիվ հայալեզու խմբեր դեպի Եվրոպա, Ասիա ու Պարսից ծոց։ Նոր մեկնումներ՝ ամեն ամիս։",
    "services.learn": "Իմանալ ավելին",

    // --- Destinations ---
    "dest.eyebrow": "Ուր ենք ուղարկում ձեզ",
    "dest.title.a": "Ընտրեք տարածաշրջանը՝",
    "dest.title.b": "մնացածը թողեք մեզ։",
    "dest.tab.visafree": "Առանց վիզայի",
    "dest.tab.europe": "Եվրոպա",
    "dest.tab.asia": "Ասիա",
    "dest.tab.caucasus": "Կովկաս",
    "dest.cta": "Չե՞ք տեսնում ձեր ուղղությունը։ ",
    "dest.cta.link": "Ասեք՝ ուր եք ուզում գնալ, ուղևորությունը կկազմակերպենք։",
    // Tags
    "tag.visafree.30": "Առանց վիզայի · 30 օր",
    "tag.visafree.90": "Առանց վիզայի · 90 օր",
    "tag.visafree.year": "Առանց վիզայի · 1 տարի",
    "tag.visa.onarrival": "Վիզա օդանավակայանում",
    "tag.schengen": "Շենգեն · վիզայով կօգնենք",
    "tag.visa.req": "Անհրաժեշտ է վիզա · 7 օր նախապատրաստում",
    "tag.eta": "ETA · մենք կկազմակերպենք",
    "tag.blacksea": "Առանց վիզայի · Սև ծով",
    "tag.daytrip": "Մեկօրյա այց · լեռներ",
    // Places (legacy — kept for type safety; Destinations.tsx now reads inline strings from lib/destinations.ts)
    "city.dubai": "Դուբայ",
    "country.uae": "ԱՄԷ",
    "city.bangkok": "Բանգկոկ",
    "country.thailand": "Թայլանդ",
    "city.bali": "Բալի",
    "country.indonesia": "Ինդոնեզիա",
    "city.istanbul": "Ստամբուլ",
    "country.turkiye": "Թուրքիա",
    "city.tbilisi": "Թբիլիսի",
    "country.georgia": "Վրաստան",
    "city.male": "Մալե",
    "country.maldives": "Մալդիվներ",
    "city.paris": "Փարիզ",
    "country.france": "Ֆրանսիա",
    "city.rome": "Հռոմ",
    "country.italy": "Իտալիա",
    "city.barcelona": "Բարսելոնա",
    "country.spain": "Իսպանիա",
    "city.prague": "Պրահա",
    "country.czechia": "Չեխիա",
    "city.athens": "Աթենք",
    "country.greece": "Հունաստան",
    "city.vienna": "Վիեննա",
    "country.austria": "Ավստրիա",
    "city.tokyo": "Տոկիո",
    "country.japan": "Ճապոնիա",
    "city.singapore": "Սինգապուր",
    "country.singapore": "Սինգապուր",
    "city.phuket": "Փուկեթ",
    "city.hanoi": "Հանոյ",
    "country.vietnam": "Վիետնամ",
    "city.kl": "Կուալա Լումպուր",
    "country.malaysia": "Մալայզիա",
    "city.colombo": "Կոլոմբո",
    "country.srilanka": "Շրի Լանկա",
    "city.batumi": "Բաթումի",
    "city.kazbegi": "Կազբեգի",
    "city.tehran": "Թեհրան",
    "country.iran": "Իրան",

    // --- About ---
    "about.eyebrow": "Մեր մասին",
    "about.title.a": "Երևանից։",
    "about.title.b": "Ամենուր։",
    "about.p1":
      "Soluna Travel-ը Երևանում հիմնված ճանապարհորդական գործակալություն է՝ մասնագիտացած արտերկիր ուղևորությունների մեջ։ Աշխատում ենք հայ ընտանիքների, զույգերի և մենակ ճանապարհորդների հետ, ովքեր ուզում են, որ իրենց ուղևորությունն իսկապես լավ կազմակերպվի՝ ոչ թե հանձնվի չաթ-բոտին կամ կորչի ամրագրման կայքի վճարման էջում։",
    "about.p2":
      "Յուրաքանչյուր երթուղի կազմում է իրական մարդ՝ ով կա՛մ ինքն է եղել այնտեղ, կա՛մ ճանաչում է մեկին, ով եղել է։ Երբ Բալիում գիշերվա ժամը 2-ին որևէ խնդիր է առաջանում՝ դուք մեզ եք զանգում։ Ոչ թե անանուն թեժ գծին։",
    "about.cta": "Սկսել ուղևորությունը",
    "about.ig": "Տեսնել անցյալ ուղևորությունները Instagram-ում →",
    "about.stat.years": "Տարվա փորձ",
    "about.stat.travelers": "Բավարարված ճանապարհորդ",
    "about.stat.destinations": "Հասանելի ուղղություն",
    "about.partners.label": "Մեր գործընկերները",
    "about.partners.foot": "IATA-ի կողմից հավատարմագրված · 40+ ավիաընկերության հետ պայմանագիր",

    // --- Quick contact strip (between Hero and Services) ---
    "qc.title": "Արագ կապ",
    "qc.subtitle": "Մենք պատասխանում ենք 30 րոպեից պակաս ժամկետում։",
    "qc.cta.wa": "WhatsApp",
    "qc.cta.call": "Զանգահարել",
    "qc.cta.form": "Հարցում ուղարկել",

    // --- Contact ---
    "contact.eyebrow": "Կապ մեզ հետ",
    "contact.title.a": "Ասեք՝ ուր եք գնում։",
    "contact.title.b": "Կկազմակերպենք արագ։",
    "contact.subtitle":
      "Ոչ զանգերի կենտրոն, ոչ էլ բոտ։ Իրական մարդը կկարդա ձեր հաղորդագրությունն ու կպատասխանի՝ առաջարկներով, գներով և հաջորդող քայլերով։",
    "contact.wa.title": "WhatsApp",
    "contact.wa.sub": "Ամենաարագ եղանակը",
    "contact.ig.sub": "Նաև նայեք մեր նախորդ ուղևորությունները",
    "contact.phone.sub": "Երկ–Շբթ, 10:00–19:00 (UTC+4)",
    "contact.form.title": "Եկեք կազմակերպենք!",
    "contact.form.note": "Ուղարկելիս կբացվի WhatsApp՝ ձեր արդեն իսկ լրացված տվյալներով։",
    "contact.form.name": "Ձեր անունը",
    "contact.form.name.ph": "օրինակ՝ Աննա Հովհաննիսյան",
    "contact.form.dest": "Ուղղություն",
    "contact.form.dest.ph": "օր.՝ Դուբայ կամ «մարտ ամսին տաք տեղ»",
    "contact.form.startDate": "Մեկնման ամսաթիվ",
    "contact.form.startDate.ph": "Ընտրել օրն ու ամիսը",
    "contact.form.startDay": "Մեկնման օր",
    "contact.form.startDay.ph": "Օր",
    "contact.form.startMonth": "Մեկնման ամիս",
    "contact.form.startMonth.ph": "Ամիս",
    "contact.form.endDate": "Վերջնա",
    "contact.form.endDate.ph": "Ընտրել օրացույցից",
    "contact.form.nights": "Օրերի քանակը",
    "contact.form.nights.ph": "Օրերի քանակը",
    "contact.form.people": "Քանի անձի համար (եթե կան երեխաներ, նշել տարիքները)",
    "contact.form.people.ph": "օր.՝ 2 մեծահասակ, 1 երեխա (5 տարեկան)",
    "contact.form.meals": "Սնունդ",
    "contact.form.meals.ph": "օր.՝ all-inclusive, նախաճաշով, ճկուն",
    "contact.form.hotel": "Նախընտրած հյուրանոց",
    "contact.form.hotel.ph": "օր.՝ 4–5★ ծովափին",
    "contact.form.budget": "Գնային սահման մոտավորապես",
    "contact.form.budget.ph": "օր.՝ մոտ $1500/անձ կամ մոտ 150,000 ՀՀ դրամ",
    "contact.form.budget.ph.mobile": "$1500/անձ",
    "contact.form.msg": "Հավելյալ տեղեկություն",
    "contact.form.msg.ph": "Ճանապարհորդների քանակ, բյուջե, կարևոր մանրամասներ...",
    "contact.form.submit": "Ուղարկել WhatsApp-ով",
    "common.optional": "ոչ պարտադիր",
    "wa.label.destination": "Ուղղություն",
    "wa.label.startDate": "Մեկնման ամսաթիվ",
    "wa.label.nights": "Գիշերներ",
    "wa.label.people": "Անձինք",
    "wa.label.meals": "Սնունդ",
    "wa.label.hotel": "Նախընտրած հյուրանոց",
    "wa.label.budget": "Բյուջե",
    "contact.wa.prefill":
      "Բարև ձեզ, ուզում եմ գնի հարցում անել իմ պլանավորած ուղղևորության վերաբերյալ։\n\nՈւղղությունը՝ {destination}\n\nՄեկնման ամսաթիվը՝ {startDate}\n\nԳիշերների քանակը՝ {nights}\n\nԱնձինք՝ {people}\n\nՍնունդ՝ {meals}\n\nՆախընտրած հյուրանոց՝ {hotel}\n\nԲյուջե՝ {budget}",

    // --- Footer ---
    "footer.tagline":
      "Արտերկիր ուղևորությունների գործակալություն Երևանում։ Ամեն շաբաթ նոր ճանապարհորդություն ենք կազմակերպում։",
    "footer.explore": "Բաժիններ",
    "footer.reach": "Կապնվեք մեզ հետ",
    "footer.address": "Երևան, Հայաստան",
    "footer.rights": "Բոլոր իրավունքները պաշտպանված են։",
    "footer.author": "Կայքի հեղինակ՝",

    // --- WhatsApp float ---
    "wa.float.prefill": "Բարև ձեզ, ինձ հետաքրքրում է ուղևորությունը...",

    // --- Destination modal ---
    "modal.from": "Սկսած",
    "modal.days": "օր",
    "modal.duration": "Տևողություն",
    "modal.hotel": "Հյուրանոց",
    "modal.includes": "Ներառված է",
    "modal.highlights": "Հիմնական կետեր",
    "modal.book": "Ստանալ գին այս ուղևորության համար",
    "modal.close": "Փակել",
    "modal.priceNote": "1 անձի, երկտեղանի սենյակում",
    "modal.wa.prefill": "Բարև ձեզ, ինձ հետաքրքրում է {city}-ի ուղևորությունը (սկսած ${price}-ից):",

    // --- Shared includes (used across destinations) ---
    "inc.flight": "Երթևեկ չվերթ Երևանից",
    "inc.hotelBreakfast": "Հյուրանոց՝ ամենօրյա նախաճաշով",
    "inc.transfer": "Օդանավակայանի տրանսֆերներ",
    "inc.insurance": "Ճանապարհորդական ապահովագրություն",
    "inc.support": "24/7 հայալեզու աջակցություն",
    "inc.visa": "Վիզայի աջակցություն և հարցազրույցի նախապատրաստում",
    "inc.guide": "Տեղական ուղեկցորդ տուրերի ընթացքում",

    // --- Service modal ---
    "srvm.handled": "Ի՞նչ ենք ստանձնում",
    "srvm.priceFrom": "Սկսած",
    "srvm.cta": "Ստանալ առաջարկ",
    "srvm.wa.prefill": "Բարև ձեզ, ինձ հետաքրքրում է {service} ծառայությունը։",

    // --- Tours page ---
    "tours.eyebrow": "Մոտակա մեկնումներ",
    "tours.title.a": "Մեր հաջորդ",
    "tours.title.b": "խմբային տուրերը։",
    "tours.subtitle":
      "Փոքր խմբեր՝ հայալեզու ուղեկցորդով։ 8–15 ճանապարհորդ։ Միացեք այլ մարդկանց, ովքեր ճանապարհորդության մասին մտածում են ձեզ նման։",
    "tours.spotsLeft": "{n} տեղ ազատ",
    "tours.spotsLeft.one": "Մնացել է 1 տեղ",
    "tours.limited": "Մնացել են քիչ տեղեր",
    "tours.soldout": "Տեղերը վերջացել են",
    "tours.priceFrom": "Սկսած",
    "tours.cta": "ամրագրել տեղ",
    "tours.cta.soldout": "Միանալ սպասման ցուցակին",
    "tours.days": "օր",
    "tours.empty.title": "Այս պահին նոր մեկնում չկա։",
    "tours.empty.sub": "Գրեք մեզ, և կտեղեկացնենք, երբ նոր ուղևորություն պլանավորվի։",
    "tours.wa.prefill": "Բարև ձեզ, ուզում եմ ամրագրել տեղ {city} տուրում ({dates}):",
    "tours.wa.waitlist": "Բարև ձեզ, ուզում եմ միանալ {city} տուրի սպասման ցուցակին ({dates}):",
  },

  en: {
    // --- Nav ---
    "nav.destinations": "Destinations",
    "nav.services": "Services",
    "nav.tours": "Tours",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get a quote",
    "nav.cta.mobile": "Get a quote on WhatsApp",

    // --- Hero ---
    "hero.eyebrow": "Soluna Travel · Yerevan, Armenia",
    "hero.title.a": "Your next trip,",
    "hero.title.b": "handled.",
    "hero.subtitle":
      "Flights, visas, hotels and curated packages — booked end-to-end from Yerevan. We sweat the small stuff so you don't.",
    "hero.cta.primary": "See upcoming tours",
    "hero.cta.whatsapp": "Message on WhatsApp",
    "hero.trust": "✦ Reply within 24h · No obligation · IATA-partner airlines",

    // --- Services ---
    "services.eyebrow": "What we do",
    "services.title.a": "One agency,",
    "services.title.b": "the whole trip.",
    "services.subtitle":
      "Flights, hotels, visas, and on-the-ground logistics — handled in one conversation. No back-and-forth between five different sites.",
    "services.flights.title": "Flights",
    "services.flights.desc":
      "Best fares across 40+ carriers — Turkish, Pegasus, FlyDubai, Wizz, Qatar, and more.",
    "services.hotels.title": "Hotels & packages",
    "services.hotels.desc":
      "Hand-picked stays paired with transfers and tours — no booking-engine surprises.",
    "services.visa.title": "Visa assistance",
    "services.visa.desc":
      "Schengen, UK, US, UAE — documents prep, slot booking, and interview coaching.",
    "services.tours.title": "Group tours",
    "services.tours.desc":
      "Small Armenian-speaking groups to Europe, Asia, and the Gulf — departures monthly.",
    "services.learn": "Learn more",

    // --- Destinations ---
    "dest.eyebrow": "Where we send you",
    "dest.title.a": "Pick a region.",
    "dest.title.b": "We'll handle the rest.",
    "dest.tab.visafree": "Visa-free",
    "dest.tab.europe": "Europe",
    "dest.tab.asia": "Asia",
    "dest.tab.caucasus": "Caucasus",
    "dest.cta": "Don't see your destination? ",
    "dest.cta.link": "Tell us where, we'll build the trip.",
    "tag.visafree.30": "Visa-free · 30 days",
    "tag.visafree.90": "Visa-free · 90 days",
    "tag.visafree.year": "Visa-free · 1 year",
    "tag.visa.onarrival": "Visa on arrival",
    "tag.schengen": "Schengen · we handle visa",
    "tag.visa.req": "Visa required · 7 days prep",
    "tag.eta": "ETA · we handle",
    "tag.blacksea": "Visa-free · Black Sea",
    "tag.daytrip": "Day trip · mountains",
    "city.dubai": "Dubai",
    "country.uae": "UAE",
    "city.bangkok": "Bangkok",
    "country.thailand": "Thailand",
    "city.bali": "Bali",
    "country.indonesia": "Indonesia",
    "city.istanbul": "Istanbul",
    "country.turkiye": "Türkiye",
    "city.tbilisi": "Tbilisi",
    "country.georgia": "Georgia",
    "city.male": "Malé",
    "country.maldives": "Maldives",
    "city.paris": "Paris",
    "country.france": "France",
    "city.rome": "Rome",
    "country.italy": "Italy",
    "city.barcelona": "Barcelona",
    "country.spain": "Spain",
    "city.prague": "Prague",
    "country.czechia": "Czechia",
    "city.athens": "Athens",
    "country.greece": "Greece",
    "city.vienna": "Vienna",
    "country.austria": "Austria",
    "city.tokyo": "Tokyo",
    "country.japan": "Japan",
    "city.singapore": "Singapore",
    "country.singapore": "Singapore",
    "city.phuket": "Phuket",
    "city.hanoi": "Hanoi",
    "country.vietnam": "Vietnam",
    "city.kl": "Kuala Lumpur",
    "country.malaysia": "Malaysia",
    "city.colombo": "Colombo",
    "country.srilanka": "Sri Lanka",
    "city.batumi": "Batumi",
    "city.kazbegi": "Kazbegi",
    "city.tehran": "Tehran",
    "country.iran": "Iran",

    // --- About ---
    "about.eyebrow": "About Soluna",
    "about.title.a": "Yerevan-based.",
    "about.title.b": "Everywhere-going.",
    "about.p1":
      "Soluna Travel is a Yerevan-based outbound travel agency. We work with Armenian families, couples, and solo travelers who want their trip handled well — not handed off to a chatbot or buried in a booking-site checkout.",
    "about.p2":
      "Every itinerary is built by a real person who's either been there or knows someone who has. When something goes wrong at 2am in Bali, you call us. Not a 1-800 line.",
    "about.cta": "Start your trip",
    "about.ig": "See past trips on Instagram →",
    "about.stat.years": "Years arranging trips",
    "about.stat.travelers": "Travelers served",
    "about.stat.destinations": "Destinations booked",
    "about.partners.label": "We book through",
    "about.partners.foot": "IATA-accredited consolidators · 40+ airline contracts",

    // --- Quick contact strip (between Hero and Services) ---
    "qc.title": "Quick contact",
    "qc.subtitle": "We typically reply within 30 minutes.",
    "qc.cta.wa": "WhatsApp",
    "qc.cta.call": "Call us",
    "qc.cta.form": "Send inquiry",

    // --- Contact ---
    "contact.eyebrow": "Get in touch",
    "contact.title.a": "Tell us where.",
    "contact.title.b": "We'll quote in 24h.",
    "contact.subtitle":
      "No call-center. No bot. A real travel agent will read your message and reply with options, prices, and next steps.",
    "contact.wa.title": "WhatsApp",
    "contact.wa.sub": "Fastest — usually under 30 min",
    "contact.ig.sub": "DM us — see past trips first",
    "contact.phone.sub": "Mon–Sat, 10:00–19:00 (UTC+4)",
    "contact.form.title": "Request a quote",
    "contact.form.note": "Submitting opens WhatsApp with your details pre-filled.",
    "contact.form.name": "Your name",
    "contact.form.name.ph": "e.g. Anna Hovhannisyan",
    "contact.form.dest": "Destination",
    "contact.form.dest.ph": "e.g. Dubai, or 'somewhere warm in March'",
    "contact.form.startDate": "Start date",
    "contact.form.startDate.ph": "Choose day and month",
    "contact.form.startDay": "Start day",
    "contact.form.startDay.ph": "Day",
    "contact.form.startMonth": "Start month",
    "contact.form.startMonth.ph": "Month",
    "contact.form.endDate": "End date",
    "contact.form.endDate.ph": "Pick from calendar",
    "contact.form.nights": "Number of nights",
    "contact.form.nights.ph": "Select or enter",
    "contact.form.people": "Number of travelers (if children, include ages)",
    "contact.form.people.ph": "e.g. 2 adults + 1 child (age 5)",
    "contact.form.meals": "Meal preference",
    "contact.form.meals.ph": "e.g. all-inclusive, breakfast included, flexible",
    "contact.form.hotel": "Hotel preference",
    "contact.form.hotel.ph": "e.g. 4–5★ beachfront",
    "contact.form.budget": "Approximate budget",
    "contact.form.budget.ph": "e.g. around $1500/person or 150,000 AMD",
    "contact.form.budget.ph.mobile": "օր․՝ $1500/person",
    "contact.form.msg": "Anything else",
    "contact.form.msg.ph": "Travelers, budget range, must-haves...",
    "contact.form.submit": "Send via WhatsApp",
    "common.optional": "optional",
    "wa.label.destination": "Destination",
    "wa.label.startDate": "Start date",
    "wa.label.nights": "Nights",
    "wa.label.people": "Travelers",
    "wa.label.meals": "Meals",
    "wa.label.hotel": "Hotel",
    "wa.label.budget": "Budget",
    "contact.wa.prefill":
      "Hi Soluna! I'd like a quote.\n\nDestination: {destination}\nStart date: {startDate}\nNights: {nights}\nTravelers: {people}\nMeals: {meals}\nHotel: {hotel}\nBudget: {budget}",

    // --- Footer ---
    "footer.tagline":
      "Outbound travel agency, based in Yerevan. We send Armenia somewhere new every week.",
    "footer.explore": "Explore",
    "footer.reach": "Reach us",
    "footer.address": "Yerevan, Armenia",
    "footer.rights": "All rights reserved.",
    "footer.author": "Site by",

    // --- WhatsApp float ---
    "wa.float.prefill": "Hi Soluna, I'm interested in a trip...",

    // --- Destination modal ---
    "modal.from": "From",
    "modal.days": "days",
    "modal.duration": "Duration",
    "modal.hotel": "Hotel",
    "modal.includes": "What's included",
    "modal.highlights": "Highlights",
    "modal.book": "Get a quote for this trip",
    "modal.close": "Close",
    "modal.priceNote": "Per person, double occupancy",
    "modal.wa.prefill": "Hi Soluna, I'm interested in the {city} trip (from ${price}).",

    // --- Shared includes (used across destinations) ---
    "inc.flight": "Round-trip flight from Yerevan",
    "inc.hotelBreakfast": "Hotel stay with daily breakfast",
    "inc.transfer": "Airport transfers",
    "inc.insurance": "Travel insurance",
    "inc.support": "24/7 Armenian-speaking support",
    "inc.visa": "Visa assistance & interview coaching",
    "inc.guide": "Local guide on tours",

    // --- Service modal ---
    "srvm.handled": "What we handle",
    "srvm.priceFrom": "Starting from",
    "srvm.cta": "Get a quote",
    "srvm.wa.prefill": "Hi Soluna, I'm interested in your {service} service.",

    // --- Tours page ---
    "tours.eyebrow": "Upcoming departures",
    "tours.title.a": "Our next",
    "tours.title.b": "small-group tours.",
    "tours.subtitle":
      "Small groups, Armenian-speaking guides. 8–15 travelers per departure. Join other people who think about travel the way you do.",
    "tours.spotsLeft": "{n} spots left",
    "tours.spotsLeft.one": "Only 1 spot left",
    "tours.limited": "A few spots left",
    "tours.soldout": "Sold out",
    "tours.priceFrom": "From",
    "tours.cta": "Reserve my spot",
    "tours.cta.soldout": "Join the waitlist",
    "tours.days": "days",
    "tours.empty.title": "No departures scheduled right now.",
    "tours.empty.sub": "Send us a note and we'll tell you when the next trip opens.",
    "tours.wa.prefill": "Hi Soluna, I'd like to reserve a spot on the {city} tour ({dates}).",
    "tours.wa.waitlist": "Hi Soluna, I'd like to join the waitlist for the {city} tour ({dates}).",
  },
} as const;

export type TranslationKey = keyof typeof translations.hy;

type Ctx = {
  locale: Locale;
  t: (key: TranslationKey, vars?: Record<string, string>) => string;
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("soluna.locale") as Locale | null;
      if (saved === "hy" || saved === "en") setLocaleState(saved);
    } catch {
      /* localStorage disabled — ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("soluna.locale", l);
    } catch {
      /* ignore */
    }
  };

  const t = (key: TranslationKey, vars?: Record<string, string>) => {
    let str: string = translations[locale][key] ?? translations.hy[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replaceAll(`{${k}}`, v);
      }
    }
    return str;
  };

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useT must be used inside <LocaleProvider>");
  return ctx;
}
