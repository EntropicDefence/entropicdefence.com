---
key: continuous-security
title: Hva er kontinuerlig sikkerhet – og hvorfor er en årlig revisjon ikke nok?
description: En årlig penetrasjonstest beskriver én dag. Kontinuerlig sikkerhet måler situasjonen hver dag – her er forskjellen, hva det koster og hvordan dere kommer i gang.
date: 2026-10-16
tags: kontinuerlig sikkerhet, trusselmodell, sårbarheter, hendelseshåndtering
---

De fleste virksomheter kjøper sikkerhet som en hendelse. En revisjon om våren, en penetrasjonstest om høsten, en rapport som ender i en perm. Problemet er at rapporten beskriver en dag som allerede er over. I mellomtiden er nye sårbarheter publisert, en leverandør har byttet eier, og noen i personalet har klikket på feil lenke.

Kontinuerlig sikkerhet er det motsatte: en løpende arbeidsform der dere måler, prioriterer og utbedrer hele tiden i stedet for én gang i året.

## Forskjellen i praksis

En enkeltstående innsats svarer på spørsmålet *«var vi trygge da?»*. Kontinuerlig sikkerhet svarer på *«er vi trygge nå, og hva er endret siden sist?»*. Det høres ut som en nyanse, men konsekvensene er store:

- **Eksponering oppdages i løpet av timer, ikke måneder.** En ny kritisk sårbarhet i en tjeneste dere bruker, blir en handling samme uke – ikke et punkt på neste års agenda.
- **Endringer fanges opp.** Nye offentlige porter, nye skyressurser og nye tredjepartsintegrasjoner dukker stadig opp. Uten løpende kartlegging vet ingen hva som faktisk er eksponert.
- **Beslutninger blir billigere.** Når situasjonen er kjent, kan ledelsen prioritere mellom risikoer i stedet for å gjette.

## Fire lag som må være i gang samtidig

**1. Kartlegging av eiendeler.** Dere kan ikke beskytte det dere ikke vet at dere har. Domener, subdomener, offentlige API-er, skykontoer, SaaS-tjenester og de ansattes enheter skal stå i en levende fortegnelse – ikke i et regneark som ble oppdatert i fjor.

**2. Overvåking av sårbarheter.** Kjente sårbarheter (CVE-er) skal holdes opp mot deres faktiske tekniske miljø, med hensyn til om sårbarheten utnyttes i praksis, og om eiendelen er nåbar utenfra. En høy CVSS-score på en intern testserver er ikke det samme som en middels sårbarhet på deres offentlige innlogging.

**3. Deteksjon og varsling.** Logger som ingen leser, er en kostnad – ikke en kontroll. Det som trengs, er få varsler som faktisk betyr noe: ny administrativ innlogging, masseuttrekk av data, endrede rettigheter, trafikk til kjente skadelige adresser.

**4. Hendelseshåndtering.** Når noe skjer, skal ansvar, kontaktveier og de første handlingene være bestemt på forhånd. Det er forskjellen mellom å stenge en konto innen ti minutter og å bruke en dag på å finne ut hvem som ringer hvem.

## Hva det betyr for en mindre virksomhet

Kontinuerlig sikkerhet krever ikke et sikkerhetsteam på ti personer. Det krever tre ting: en eier, en rytme og et sted der funnene havner.

- **Eier:** en navngitt person som har ansvar for at funn blir til handlinger.
- **Rytme:** ukentlig gjennomgang av nye funn, månedlig gjennomgang av rettigheter og leverandører.
- **Sted:** et system der hvert funn har status, ansvarlig og dato – ikke en innboks.

For de fleste mindre virksomheter er det rimelige nivået å la en ekstern part stå for overvåking og prioritering, mens organisasjonen selv eier handlingene. Det gir kontinuitet uten å bygge en intern sikkerhetsavdeling.

## Vanlige innvendinger

*«Vi er for små til å være interessante.»* Automatiserte angrep velger ikke etter omsetning. De velger etter eksponering – og en liten virksomhet med en offentlig, uoppdatert tjeneste er et enklere mål enn en stor bank.

*«Vi tok en revisjon i fjor.»* Det er en god start, men den sier ingenting om situasjonen i dag. Revisjonen er et fotografi; kontinuerlig sikkerhet er en film.

*«Det blir for dyrt.»* Ofte blir det billigere enn én enkelt hendelse med nedetid, tapte kunder og granskningskostnader. Poenget er ikke å kjøpe flere verktøy, men å gjøre færre ting oftere.

## Slik kommer dere i gang på fire uker

1. **Uke 1:** kartlegg offentlige eiendeler og skykontoer. Slå av det som ikke brukes.
2. **Uke 2:** sett opp overvåking av kjente sårbarheter mot deres faktiske miljø, og prioriter de ti mest presserende funnene.
3. **Uke 3:** innfør MFA der det mangler – særlig på administrative kontoer og e-post. Det er fortsatt det enkeltiltaket som gir mest for pengene.
4. **Uke 4:** skriv en hendelsesplan på én side, og test den med et enkelt scenario.

Etter det er arbeidet et spørsmål om rytme, ikke om prosjekt. Det er også den rytmen som gjør at dere kan svare kunder og myndigheter på sikkerhetsspørsmål med fakta i stedet for løfter.
