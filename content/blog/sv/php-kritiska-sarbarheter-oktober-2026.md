---
key: php-critical-2026-10
title: Kritiska sårbarheter i PHP – uppdatera nu (CVE-2026-109618 och CVE-2026-109619)
description: Två kritiska PHP-sårbarheter med CVSS 9,2 ger oautentiserad fjärrkodkörning. Rättade i PHP 8.5.12, 8.4.27, 8.3.36 och 8.2.35 – så kontrollerar ni läget och åtgärdar i dag.
date: 2026-10-21
tags: PHP, sårbarhet, CVE, fjärrkodkörning, uppdatering, incidenthantering
---

Den 20 oktober aviserade PHP-projektet en säkerhetsrelease för två kritiska sårbarheter. Den 21 oktober klockan 13:30 UTC släpptes rättningarna. Båda sårbarheterna ger **oautentiserad fjärrkodkörning** med CVSS 9,2, och publika proof-of-concept har redan börjat cirkulera.

Det här är inte en sårbarhet ni planerar in till nästa underhållsfönster. Det är en sårbarhet ni åtgärdar i dag.

## Kortversionen

- **Uppdatera till** PHP 8.5.12, 8.4.27, 8.3.36 eller 8.2.35.
- **All PHP som hanterar webbförfrågningar är påverkad** – PHP-FPM, mod_php, php-cgi, FrankenPHP och LiteSpeed.
- **En enda oautentiserad förfrågan kan räcka**, och den kan slå till innan er applikationskod ens körs.
- **PoC-kod är publik.** Räkna med bred skanning inom timmar, inte veckor.
- **Kan ni inte patcha omedelbart:** isolera de internetexponerade tjänsterna tills rättningen är på plats och verifierad.

## Vad som hände

PHP-projektet meddelade den 20 oktober att en säkerhetsrelease var på väg. Dagen därpå, den 21 oktober klockan 13:30 UTC, publicerades rättningarna i fyra versioner samtidigt: 8.5.12, 8.4.27, 8.3.36 och 8.2.35. CERT-EU gick ut med en säkerhetsvarning samma dag och uppmanade organisationer att patcha omedelbart.

Att rättningen kom snabbt är bra. Att den tekniska beskrivningen samtidigt blev offentlig innebär att tiden från "patch finns" till "angripare försöker" mäts i timmar.

## Vad sårbarheterna faktiskt gör

### CVE-2026-109618 – minneskorruption vid minnesgräns

PHP stoppar en förfrågan som överskrider `memory_limit` genom att avbryta den med `longjmp()`. Det innebär att avbrottet kan ske mitt i en intern operation, medan förfrågans data bara delvis är initierad – till exempel under tolkningen av en filuppladdning i ett formulär.

Städningen av förfrågan kan då behandla ogiltig data som giltig och frigöra minne som aldrig initierats. Det minnet kan fortfarande innehålla data från tidigare allokeringar som angriparen kontrollerar. Resultatet är minneskorruption som kan leda till kodkörning.

### CVE-2026-109619 – kvarvarande globalt tillstånd

Intern state som tillhör en förfrågan kan överleva sedan dess minne frigjorts – exempelvis efter ett fatalt fel. En senare förfrågan som hanteras av samma arbetsprocess kan använda det kvarvarande tillståndet innan den normala initieringen hunnit återställa det.

Båda sårbarheterna är alltså inte beroende av att er applikation har en bugg. De ligger i PHP:s egen request-hantering.

> En demonstrerad exploit visar att en enda oautentiserad förfrågan kan utlösa attacken innan någon applikationskod körs.

## Vem är drabbad

Alla PHP-installationer som servar webbtrafik. PHP-teamet bedömer att **mod_php är den mest utsatta konfigurationen**.

- PHP 8.5 före 8.5.12
- PHP 8.4 före 8.4.27
- PHP 8.3 före 8.3.36
- PHP 8.2 före 8.2.35
- **Utgångna grenar (PHP 8.1 och äldre)**, som inte längre får ordinarie uppdateringar

Dessutom: många kommersiella och open source-produkter använder PHP i bakgrunden. De kan vara påverkade även om ni inte själva driftar en PHP-installation. NCSC-NL har publicerat en inventering av tredjepartsprogram som bäddar in PHP.

**Det vanligaste misstaget vi ser:** man räknar bara de servrar man själv satt upp. Glöm inte containrar, CI-avbildningar, apparater, interna verktyg och leverantörsdriftade tjänster.

## Kontrollera läget – fem minuter per miljö

1. **Kör `php -v`** på varje värd och i varje container. Inte bara på en.
2. **Inventera körmiljöerna:** PHP-FPM-pooler, Apache med mod_php, php-cgi, FrankenPHP, LiteSpeed.
3. **Bygg om containeravbildningarna** – basavbilden är det som faktiskt gäller, inte den körande instansen.
4. **Fråga leverantörer** som driftar PHP-beroende produkter åt er: vilken version kör ni, och när är ni patchade?
5. **Hitta utgångna grenar.** PHP 8.1 och äldre får inga ordinarie rättningar.

## Åtgärda

**Distributionernas paket.** Linuxdistributioner och LTS-leverantörer hade rättningarna i förväg. Uppdatera via pakethanteraren och starta om arbetsprocesserna.

**Containrar.** Uppdatera basavbilden och bygg om. En omstart av en gammal avbild löser ingenting.

**Egenkompilerat.** Uppgradera till 8.5.12, 8.4.27, 8.3.36 eller 8.2.35.

**Utgångna versioner.** PHP-teamet har publicerat minimala backports för 7.4, 8.0 och 8.1 för den som bygger från källkod eller saknar LTS-leverantör. Har ni en LTS-leverantör: kontakta dem först.

**rpms.remirepo.net:** detta frivilligt underhållna Repository får inga uppdateringar på releasedagen. PHP-teamet uppmanar användare att byta till distributionens paket eller bygga från källkod.

Starta om PHP-FPM och övriga arbetsprocesser efter uppdateringen. En ny binär utan omstart är fortfarande den gamla processen.

## Om ni inte kan patcha i dag

Åtgärderna nedan minskar exponeringen för specifika attackvägar. **De gör inte installationen säker.** Endast en uppdatering stänger sårbarheten.

**Mot CVE-2026-109618:**

- Sätt `memory_limit=-1` på ett sätt som applikationen inte kan skriva över, exempelvis `php_admin_value` i FPM-poolen eller i Apache-konfigurationen. Kontrollera att ingen pool, katalog eller applikationsinställning sätter tillbaka en gräns.
- Sätt låg `post_max_size`: 8M för applikationer utan filuppladdning, 32M där uppladdning krävs. Håll `upload_max_filesize` under `post_max_size`.
- Sätt gränser i webbservern eller proxyn för avkodad förfrågningsstorlek, antal fält, antal multipart-delar, antal headers och nästningsdjup. Gränserna måste även omfatta förfrågningar utan användbar `Content-Length`.
- Använd minnesgräns i container eller cgroup som tillgänglighetsgräns, helst med policy som bara dödar den drabbade arbetsprocessen. Använd **inte** `RLIMIT_AS` eller `RLIMIT_DATA` – de kan utlösa den sårbara allokeringsvägen.

**Mot CVE-2026-109619:**

- Sätt `session.upload_progress.enabled=0` och starta om varje arbetsprocess. Sätt det i `php.ini`, i FPM-poolen eller i serverkonfigurationen så att det gäller före request-tolkningen. Lita inte på `ini_set()` eller FPM:s `.user.ini`.
- På PHP 8.5: sätt `fatal_error_backtraces=0` och starta om varje arbetsprocess.
- Ta bort ogiltiga eller föråldrade per-request-inställningar som avger diagnostik före initieringen. Att dölja diagnostiken med `error_reporting`, `display_errors` eller `@` hjälper inte.
- Rätta fatala fel och exekveringstidsgränser som angripare kan nå – i callbacks, uppladdning, import och cleanup.

## Varför ni inte bör vänta

Tre saker skiljer den här händelsen från en vanlig patch:

1. **Ingen autentisering krävs.** Det finns ingen inloggning att gömma sig bakom.
2. **Angreppet sker före er kod.** Er applikationslogik, WAF-regler och behörighetsmodell är inte en skyddsbarriär här.
3. **PoC är redan ute.** Det som brukar ta veckor är redan gjort av någon annan.

Kostnaden för en patch och en omstart i dag är försumbar jämfört med kostnaden för ett intrång. Det gäller särskilt om ni omfattas av NIS2, där en betydande incident ska anmälas inom 24 timmar.

## Efter patch – tre saker

1. **Verifiera på varje nod.** versionen, inte bara att pakethanteraren sade OK.
2. **Läs loggarna bakåt.** Multipart-POST:er, oväntade 500-svar, kraschade arbetsprocesser och trafik från okända källor under de senaste dygnen.
3. **Vid minsta misstanke: kör incidentrutinen.** Isolera, säkra loggar, bedöm om anmälan krävs.

## Källor

- CERT-EU, Security Advisory 2026-018: https://cert.europa.eu/publications/security-advisories/2026-018/
- PHP 8.5.12 / 8.4.27 / 8.3.36 / 8.2.35: https://www.php.net/
- GHSA-w8hw-w9fx-j79w: https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w
- GHSA-6wmf-4rv5-p3rp: https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp
- NCSC-NL, inventering av produkter med inbäddad PHP: https://github.com/NCSC-NL/php2shell

---

Sårbarheter som den här är själva argumentet för kontinuerlig säkerhet: patchar, verifiering och övervakning som pågår hela tiden – inte en årlig genomgång. [Läs mer om vad kontinuerlig säkerhet innebär i praktiken](/sv/blog/vad-ar-kontinuerlig-sakerhet).
