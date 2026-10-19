import type { LanguageCode } from '@/i18n/languages'

/**
 * Bloggens gränssnittssträngar. Ligger för sig (inte i de stora
 * översättningsfilerna) eftersom bloggen är en egen yta — då rör vi inte
 * sidornas texter när bloggen växer.
 */
export type BlogUi = {
  navLabel: string
  eyebrow: string
  title: string
  lead: string
  latest: string
  readArticle: string
  minutesSuffix: string
  published: string
  updated: string
  allArticles: string
  related: string
  empty: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
  /** BCP 47-locale för datumformatering */
  locale: string
}

export const blogUi: Record<LanguageCode, BlogUi> = {
  sv: {
    navLabel: 'Blogg',
    eyebrow: 'Kunskap',
    title: 'Insikter om kontinuerlig säkerhet',
    lead: 'Artiklar från våra analytiker om hotläget, regelverken och hur ni bygger motståndskraft som håller.',
    latest: 'Senaste artiklarna',
    readArticle: 'Läs artikeln',
    minutesSuffix: 'min läsning',
    published: 'Publicerad',
    updated: 'Uppdaterad',
    allArticles: 'Alla artiklar',
    related: 'Läs också',
    empty: 'Inga artiklar publicerade ännu.',
    ctaTitle: 'Vill ni veta var ni står?',
    ctaText:
      'Ett kostnadsfritt samtal på 30 minuter ger en ärlig bild av er exponering — utan säljsnack.',
    ctaButton: 'Prata med en rådgivare',
    locale: 'sv-SE',
  },
  en: {
    navLabel: 'Blog',
    eyebrow: 'Insight',
    title: 'Insights on continuous security',
    lead: 'Articles from our analysts on the threat landscape, regulation, and how to build resilience that lasts.',
    latest: 'Latest articles',
    readArticle: 'Read the article',
    minutesSuffix: 'min read',
    published: 'Published',
    updated: 'Updated',
    allArticles: 'All articles',
    related: 'Read next',
    empty: 'No articles published yet.',
    ctaTitle: 'Want to know where you stand?',
    ctaText:
      'A free 30-minute call gives you an honest picture of your exposure — no sales pitch.',
    ctaButton: 'Talk to an adviser',
    locale: 'en-GB',
  },
  fi: {
    navLabel: 'Blogi',
    eyebrow: 'Tieto',
    title: 'Näkemyksiä jatkuvasta turvallisuudesta',
    lead: 'Analyytikkojemme artikkeleita uhkakuvasta, sääntelystä ja siitä, miten rakennetaan kestävää resilienssiä.',
    latest: 'Uusimmat artikkelit',
    readArticle: 'Lue artikkeli',
    minutesSuffix: 'min lukuaika',
    published: 'Julkaistu',
    updated: 'Päivitetty',
    allArticles: 'Kaikki artikkelit',
    related: 'Lue myös',
    empty: 'Artikkeleita ei ole vielä julkaistu.',
    ctaTitle: 'Haluatteko tietää, missä olette?',
    ctaText:
      'Ilmainen 30 minuutin keskustelu antaa rehellisen kuvan altistumisestanne — ilman myyntipuhetta.',
    ctaButton: 'Keskustele asiantuntijan kanssa',
    locale: 'fi-FI',
  },
  da: {
    navLabel: 'Blog',
    eyebrow: 'Indsigt',
    title: 'Indsigter om kontinuerlig sikkerhed',
    lead: 'Artikler fra vores analytikere om trusselsbilledet, regulering og hvordan man bygger modstandsdygtighed, der holder.',
    latest: 'Seneste artikler',
    readArticle: 'Læs artiklen',
    minutesSuffix: 'min. læsning',
    published: 'Udgivet',
    updated: 'Opdateret',
    allArticles: 'Alle artikler',
    related: 'Læs også',
    empty: 'Der er endnu ikke udgivet artikler.',
    ctaTitle: 'Vil I vide, hvor I står?',
    ctaText:
      'En gratis samtale på 30 minutter giver et ærligt billede af jeres eksponering — uden salgstale.',
    ctaButton: 'Tal med en rådgiver',
    locale: 'da-DK',
  },
  no: {
    navLabel: 'Blogg',
    eyebrow: 'Innsikt',
    title: 'Innsikt om kontinuerlig sikkerhet',
    lead: 'Artikler fra våre analytikere om trusselbildet, regelverk og hvordan man bygger motstandskraft som holder.',
    latest: 'Siste artikler',
    readArticle: 'Les artikkelen',
    minutesSuffix: 'min lesing',
    published: 'Publisert',
    updated: 'Oppdatert',
    allArticles: 'Alle artikler',
    related: 'Les også',
    empty: 'Ingen artikler er publisert ennå.',
    ctaTitle: 'Vil dere vite hvor dere står?',
    ctaText:
      'En gratis samtale på 30 minutter gir et ærlig bilde av eksponeringen deres — uten salgssnakk.',
    ctaButton: 'Snakk med en rådgiver',
    locale: 'nb-NO',
  },
  lt: {
    navLabel: 'Tinklaraštis',
    eyebrow: 'Įžvalgos',
    title: 'Įžvalgos apie nuolatinį saugumą',
    lead: 'Mūsų analitikų straipsniai apie grėsmių aplinką, teisės aktus ir apie tai, kaip sukurti ilgalaikį atsparumą.',
    latest: 'Naujausi straipsniai',
    readArticle: 'Skaityti straipsnį',
    minutesSuffix: 'min. skaitymo',
    published: 'Paskelbta',
    updated: 'Atnaujinta',
    allArticles: 'Visi straipsniai',
    related: 'Taip pat skaitykite',
    empty: 'Straipsnių dar nepaskelbta.',
    ctaTitle: 'Norite sužinoti, kur esate?',
    ctaText:
      'Nemokamas 30 minučių pokalbis suteikia sąžiningą vaizdą apie jūsų pažeidžiamumą — be pardavimo kalbų.',
    ctaButton: 'Pasikalbėkite su konsultantu',
    locale: 'lt-LT',
  },
  et: {
    navLabel: 'Blogi',
    eyebrow: 'Sissevaade',
    title: 'Sissevaated pidevasse turvalisusesse',
    lead: 'Meie analüütikute artiklid ohumaastikust, regulatsioonidest ja sellest, kuidas ehitada vastupidavust, mis püsib.',
    latest: 'Viimased artiklid',
    readArticle: 'Loe artiklit',
    minutesSuffix: 'min lugemist',
    published: 'Avaldatud',
    updated: 'Uuendatud',
    allArticles: 'Kõik artiklid',
    related: 'Loe ka',
    empty: 'Artikleid ei ole veel avaldatud.',
    ctaTitle: 'Kas soovite teada, kus te seisate?',
    ctaText:
      'Tasuta 30-minutiline vestlus annab ausa pildi teie kokkupuutest — ilma müügijututa.',
    ctaButton: 'Rääkige nõustajaga',
    locale: 'et-EE',
  },
  lv: {
    navLabel: 'Emuārs',
    eyebrow: 'Ieskats',
    title: 'Ieskats nepārtrauktā drošībā',
    lead: 'Mūsu analītiķu raksti par draudu ainavu, regulējumu un to, kā veidot noturību, kas saglabājas.',
    latest: 'Jaunākie raksti',
    readArticle: 'Lasīt rakstu',
    minutesSuffix: 'min. lasīšanas',
    published: 'Publicēts',
    updated: 'Atjaunināts',
    allArticles: 'Visi raksti',
    related: 'Lasi arī',
    empty: 'Raksti vēl nav publicēti.',
    ctaTitle: 'Vai vēlaties uzzināt, kur jūs atrodaties?',
    ctaText:
      'Bezmaksas 30 minūšu saruna sniedz godīgu priekšstatu par jūsu pakļautību — bez pārdošanas runām.',
    ctaButton: 'Runājiet ar konsultantu',
    locale: 'lv-LV',
  },
  pl: {
    navLabel: 'Blog',
    eyebrow: 'Wiedza',
    title: 'Wiedza o ciągłym bezpieczeństwie',
    lead: 'Artykuły naszych analityków o krajobrazie zagrożeń, regulacjach i budowaniu odporności, która się utrzymuje.',
    latest: 'Najnowsze artykuły',
    readArticle: 'Czytaj artykuł',
    minutesSuffix: 'min czytania',
    published: 'Opublikowano',
    updated: 'Zaktualizowano',
    allArticles: 'Wszystkie artykuły',
    related: 'Czytaj także',
    empty: 'Brak opublikowanych artykułów.',
    ctaTitle: 'Chcą Państwo wiedzieć, gdzie stoją Państwo dzisiaj?',
    ctaText:
      'Bezpłatna 30-minutowa rozmowa daje uczciwy obraz Państwa ekspozycji — bez sprzedażowej nowomowy.',
    ctaButton: 'Porozmawiaj z doradcą',
    locale: 'pl-PL',
  },
  sl: {
    navLabel: 'Blog',
    eyebrow: 'Vpogled',
    title: 'Vpogled v neprekinjeno varnost',
    lead: 'Članki naših analitikov o grožnjah, predpisih in o tem, kako zgraditi odpornost, ki zdrži.',
    latest: 'Najnovejši članki',
    readArticle: 'Preberi članek',
    minutesSuffix: 'min branja',
    published: 'Objavljeno',
    updated: 'Posodobljeno',
    allArticles: 'Vsi članki',
    related: 'Preberite tudi',
    empty: 'Članki še niso objavljeni.',
    ctaTitle: 'Želite vedeti, kje ste?',
    ctaText:
      'Brezplačen 30-minutni pogovor da pošteno sliko o vaši izpostavljenosti — brez prodajnih zgodb.',
    ctaButton: 'Pogovorite se s svetovalcem',
    locale: 'sl-SI',
  },
  fr: {
    navLabel: 'Blog',
    eyebrow: 'Analyse',
    title: 'Analyses sur la sécurité continue',
    lead: 'Articles de nos analystes sur la menace, la réglementation et la manière de bâtir une résilience durable.',
    latest: 'Derniers articles',
    readArticle: "Lire l'article",
    minutesSuffix: 'min de lecture',
    published: 'Publié',
    updated: 'Mis à jour',
    allArticles: 'Tous les articles',
    related: 'À lire aussi',
    empty: "Aucun article publié pour l'instant.",
    ctaTitle: 'Vous voulez savoir où vous en êtes ?',
    ctaText:
      'Un échange gratuit de 30 minutes donne une image honnête de votre exposition — sans argumentaire commercial.',
    ctaButton: 'Parler à un conseiller',
    locale: 'fr-FR',
  },
  es: {
    navLabel: 'Blog',
    eyebrow: 'Análisis',
    title: 'Análisis sobre seguridad continua',
    lead: 'Artículos de nuestros analistas sobre el panorama de amenazas, la normativa y cómo construir una resiliencia duradera.',
    latest: 'Últimos artículos',
    readArticle: 'Leer el artículo',
    minutesSuffix: 'min de lectura',
    published: 'Publicado',
    updated: 'Actualizado',
    allArticles: 'Todos los artículos',
    related: 'Leer también',
    empty: 'Aún no hay artículos publicados.',
    ctaTitle: '¿Quieren saber dónde están?',
    ctaText:
      'Una llamada gratuita de 30 minutos ofrece una imagen honesta de su exposición, sin discurso comercial.',
    ctaButton: 'Hablar con un asesor',
    locale: 'es-ES',
  },
  th: {
    navLabel: 'บล็อก',
    eyebrow: 'บทวิเคราะห์',
    title: 'บทวิเคราะห์ว่าด้วยความปลอดภัยอย่างต่อเนื่อง',
    lead: 'บทความจากนักวิเคราะห์ของเราเกี่ยวกับภัยคุกคาม กฎระเบียบ และการสร้างความยืดหยุ่นที่ยั่งยืน',
    latest: 'บทความล่าสุด',
    readArticle: 'อ่านบทความ',
    minutesSuffix: 'นาทีในการอ่าน',
    published: 'เผยแพร่',
    updated: 'อัปเดต',
    allArticles: 'บทความทั้งหมด',
    related: 'อ่านต่อ',
    empty: 'ยังไม่มีบทความที่เผยแพร่',
    ctaTitle: 'ต้องการทราบว่าคุณอยู่จุดไหน?',
    ctaText: 'การสนทนา 30 นาทีโดยไม่มีค่าใช้จ่ายให้ภาพที่ตรงไปตรงมาของความเสี่ยงของคุณ',
    ctaButton: 'พูดคุยกับที่ปรึกษา',
    locale: 'th-TH',
  },
}

export function formatPostDate(iso: string, language: LanguageCode): string {
  const date = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat(blogUi[language].locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
