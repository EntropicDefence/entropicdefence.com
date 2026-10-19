---
key: continuous-security
title: Hvad er løbende sikkerhed – og hvorfor er en årlig revision ikke nok?
description: En årlig penetrationstest beskriver én dag. Løbende sikkerhed måler situationen hver dag – her er forskellen, hvad det koster, og hvordan I kommer i gang.
date: 2026-10-16
tags: løbende sikkerhed, trusselsmodel, sårbarheder, hændelseshåndtering
---

De fleste virksomheder køber sikkerhed som en begivenhed. En revision om foråret, en penetrationstest om efteråret, en rapport der ender i en mappe. Problemet er, at rapporten beskriver en dag, der allerede er ovre. I mellemtiden er der offentliggjort nye sårbarheder, en leverandør har skiftet ejer, og en medarbejder har klikket på det forkerte link.

Løbende sikkerhed er det modsatte: en fast arbejdsform, hvor I måler, prioriterer og retter hele tiden i stedet for én gang om året.

## Forskellen i praksis

En enkeltstående indsats svarer på spørgsmålet *”var vi sikre dengang?”*. Løbende sikkerhed svarer på *”er vi sikre nu, og hvad er ændret siden sidst?”*. Det lyder som en nuance, men konsekvenserne er store:

- **Eksponering opdages på timer, ikke måneder.** En ny kritisk sårbarhed i en tjeneste, I bruger, bliver en handling i samme uge – ikke et punkt på næste års dagsorden.
- **Ændringer fanges.** Nye offentlige porte, nye cloud-ressourcer og nye tredjepartsintegrationer dukker konstant op. Uden løbende kortlægning ved ingen, hvad der reelt er eksponeret.
- **Beslutninger bliver billigere.** Når situationen er kendt, kan ledelsen prioritere mellem risici i stedet for at gætte.

## Fire lag, der skal køre samtidig

**1. Kortlægning af aktiver.** I kan ikke beskytte det, I ikke ved at I har. Domæner, subdomæner, offentlige API'er, cloudkonti, SaaS-tjenester og medarbejdernes enheder skal stå i en levende fortegnelse – ikke i et regneark, der blev opdateret sidste år.

**2. Overvågning af sårbarheder.** Kendte sårbarheder (CVE'er) skal holdes op mod jeres faktiske tekniske miljø, med hensyn til om sårbarheden udnyttes i praksis, og om aktiveret kan nås udefra. En høj CVSS-score på en intern testserver er ikke det samme som en mellemhøj sårbarhed på jeres offentlige login.

**3. Detektion og alarmer.** Logs, som ingen læser, er en omkostning – ikke en kontrol. Det, der er brug for, er få alarmer, som faktisk betyder noget: ny administrativ login, masseudtræk af data, ændrede rettigheder, trafik til kendte skadelige adresser.

**4. Hændelseshåndtering.** Når noget sker, skal ansvar, kontaktveje og de første handlinger være besluttet på forhånd. Det er forskellen på at lukke en konto inden for ti minutter og at bruge en dag på at finde ud af, hvem der ringer til hvem.

## Hvad det betyder for en mindre virksomhed

Løbende sikkerhed kræver ikke et sikkerhedsteam på ti personer. Det kræver tre ting: en ejer, en rytme og et sted, hvor fundene havner.

- **Ejer:** en navngiven person, der har ansvaret for, at fund bliver til handlinger.
- **Rytme:** ugentlig gennemgang af nye fund, månedlig gennemgang af rettigheder og leverandører.
- **Sted:** et system, hvor hvert fund har status, ansvarlig og dato – ikke en indbakke.

For de fleste mindre organisationer er det rimelige niveau at lade en ekstern part stå for overvågning og prioritering, mens organisationen selv ejer handlingerne. Det giver kontinuitet uden at bygge en intern sikkerhedsafdeling.

## Almindelige indvendinger

*”Vi er for små til at være interessante.”* Automatiserede angreb vælger ikke efter omsætning. De vælger efter eksponering – og en lille virksomhed med en offentlig, uopdateret tjeneste er et lettere mål end en stor bank.

*”Vi fik lavet en revision sidste år.”* Det er en god start, men den siger intet om situationen i dag. Revisionen er et fotografi; løbende sikkerhed er en film.

*”Det bliver for dyrt.”* Oftest bliver det billigere end bare én hændelse med nedetid, tabte kunder og undersøgelsesomkostninger. Pointen er ikke at købe flere værktøjer, men at gøre færre ting oftere.

## Sådan kommer I i gang på fire uger

1. **Uge 1:** kortlæg offentlige aktiver og cloudkonti. Sluk for det, der ikke bruges.
2. **Uge 2:** sæt overvågning op af kendte sårbarheder mod jeres faktiske miljø, og prioriter de ti mest presserende fund.
3. **Uge 3:** indfør MFA, hvor det mangler – især på administrative konti og e-mail. Det er stadig den enkeltforanstaltning, der giver mest for pengene.
4. **Uge 4:** skriv en hændelsesplan på én side, og test den med et enkelt scenarie.

Derefter er arbejdet et spørgsmål om rytme, ikke om projekt. Det er også den rytme, der gør, at I kan svare kunder og myndigheder på sikkerhedsspørgsmål med fakta i stedet for løfter.
