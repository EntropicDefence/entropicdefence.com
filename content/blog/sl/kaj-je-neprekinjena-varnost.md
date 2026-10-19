---
key: continuous-security
title: Kaj je neprekinjena varnost – in zakaj letna revizija ne zadostuje?
description: Letni preizkus prodora opisuje en dan. Neprekinjena varnost meri stanje vsak dan – tukaj je razlika, koliko stane in kako začeti.
date: 2026-10-16
tags: neprekinjena varnost, model groženj, ranljivosti, obvladovanje incidentov
---

Večina podjetij kupuje varnost kot dogodek. Revizija spomladi, preizkus prodora jeseni, poročilo, ki pristane v mapi. Težava je v tem, da poročilo opisuje dan, ki je že mimo. Medtem so bile objavljene nove ranljivosti, dobavitelj je zamenjal lastnika in nekdo od zaposlenih je kliknil na napačno povezavo.

Neprekinjena varnost je nasprotje: stalen način dela, pri katerem merite, določate prioritete in popravljate ves čas, ne enkrat na leto.

## Razlika v praksi

Enkratno dejanje odgovarja na vprašanje *»ali smo bili takrat varni?«*. Neprekinjena varnost odgovarja na *»ali smo varni zdaj in kaj se je spremenilo od zadnjič?«*. Sliši se kot odtenek, a posledice so velike:

- **Izpostavljenost se odkrije v urah, ne v mesecih.** Nova kritična ranljivost v storitvi, ki jo uporabljate, postane naloga v istem tednu, ne točka na dnevnem redu prihodnjega leta.
- **Spremembe so opažene.** Nova javna vrata, nova oblačna sredstva in nove integracije tretjih strani se pojavljajo nenehno. Brez sprotnega popisa nihče ne ve, kaj je v resnici izpostavljeno.
- **Odločitve postanejo cenejše.** Ko je stanje znano, lahko vodstvo izbira med tveganji, namesto da bi ugibalo.

## Štiri plasti, ki morajo delovati hkrati

**1. Popis sredstev.** Ne morete zaščititi tega, za kar ne veste, da ga imate. Domene, poddomene, javni API-ji, oblaki računi, storitve SaaS in naprave zaposlenih morajo biti na živem seznamu – ne v preglednici, posodobljeni lani.

**2. Spremljanje ranljivosti.** Znane ranljivosti (CVE) je treba povezati z vašim dejanskim tehničnim okoljem, pri čemer upoštevajte, ali se ranljivost izkorišča v praksi in ali je sredstvo dosegljivo od zunaj. Visoka ocena CVSS na notranjem testnem strežniku ni isto kot srednja ranljivost v vašem javnem prijavnem oknu.

**3. Zaznavanje in opozorila.** Dnevniki, ki jih nihče ne bere, so strošek, ne nadzor. Potrebujete malo opozoril, ki imajo resničen pomen: nova prijava skrbnika, množičen odvzem podatkov, spremenjena dovoljenja, promet na znane zlonamerne naslove.

**4. Obvladovanje incidentov.** Ko se nekaj zgodi, morajo biti odgovornost, stiki in prvi koraki določeni vnaprej. To je razlika med zaprtjem računa v desetih minutah in dnem, porabljenim za ugotavljanje, kdo komu telefonira.

## Kaj to pomeni za manjše podjetje

Neprekinjena varnost ne zahteva desetčlanske varnostne ekipe. Zahteva tri stvari: odgovorno osebo, ritem in mesto, kamor prispejo ugotovitve.

- **Odgovorna oseba:** imenovana oseba, odgovorna za to, da ugotovitve postanejo naloge.
- **Ritem:** tedenski pregled novih ugotovitev, mesečni pregled pravic in dobaviteljev.
- **Mesto:** sistem, kjer ima vsaka ugotovitev stanje, odgovorno osebo in datum – ne nabiralnik.

Za večino manjših organizacij je razumna raven, da spremljanje in določanje prioritet prevzame zunanji partner, medtem ko organizacija sama upravlja naloge. To daje neprekinjenost brez vzpostavljanja notranjega varnostnega oddelka.

## Pogosti pomisleki

*»Premajhni smo, da bi koga zanimali.«* Avtomatizirani napadi ne izbirajo po prihodku. Izbirajo po izpostavljenosti – in majhno podjetje z javno, neposodobljeno storitvijo je lažja tarča kot velika banka.

*»Lani smo naredili revizijo.«* To je dober začetek, a ne pove ničesar o današnjem stanju. Revizija je fotografija; neprekinjena varnost je film.

*»To bo predrago.«* Običajno je ceneje kot en sam incident z izpadom delovanja, izgubljenimi strankami in stroški preiskave. Bistvo ni kupiti več orodij, ampak delati manj stvari pogosteje.

## Kako začeti v štirih tednih

1. **1. teden:** popišite javna sredstva in oblačne račune. Izklopite tisto, česar ne uporabljate.
2. **2. teden:** vzpostavite spremljanje znanih ranljivosti glede na svoje dejansko okolje in določite prioritete za deset najbolj perečih ugotovitev.
3. **3. teden:** uvedite MFA, kjer ga ni – zlasti na skrbniških računih in v e-pošti. To je še vedno najučinkovitejši posamezni ukrep glede na stroške.
4. **4. teden:** napišite enostranski načrt incidenta in ga preizkusite s preprostim scenarijem.

Po tem je delo vprašanje ritma, ne projekta. Prav ta ritem omogoča, da na vprašanja strank in institucij o varnosti odgovarjate z dejstvi, ne z obljubami.
