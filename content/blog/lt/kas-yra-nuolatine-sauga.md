---
key: continuous-security
title: Kas yra nuolatinė sauga – ir kodėl metinio audito nepakanka?
description: Metinis įsiskverbimo testas aprašo vieną dieną. Nuolatinė sauga matuoja situaciją kiekvieną dieną – štai skirtumas, kiek tai kainuoja ir nuo ko pradėti.
date: 2026-10-16
tags: nuolatinė sauga, grėsmių modelis, pažeidžiamumai, incidentų valdymas
---

Dauguma įmonių saugą perka kaip įvykį. Auditas pavasarį, įsiskverbimo testas rudenį, ataskaita, kuri patenka į aplanką. Problema ta, kad ataskaita aprašo dieną, kuri jau praėjo. Tuo tarpu paskelbta naujų pažeidžiamumų, tiekėjas pasikeitė savininką, o vienas darbuotojas paspaudė netinkamą nuorodą.

Nuolatinė sauga yra priešingybė: nuolatinis darbo būdas, kai matuojate, nustatote prioritetus ir taisote visą laiką, o ne kartą per metus.

## Skirtumas praktikoje

Vienkartinė priemonė atsako į klausimą *„ar mes tada buvome saugūs?”*. Nuolatinė sauga atsako į *„ar mes saugūs dabar ir kas pasikeitė nuo praėjusio karto?”*. Tai skamba kaip niuansas, bet pasekmės didelės:

- **Poveikio taškas aptinkamas per valandas, o ne mėnesius.** Naujas kritinis pažeidžiamumas jūsų naudojamoje paslaugoje tampa užduotimi tą pačią savaitę, o ne kitų metų darbotvarkės punktu.
- **Pastebimi pokyčiai.** Nauji vieši prievadai, nauji debesų ištekliai ir naujos trečiųjų šalių integracijos atsiranda nuolat. Be nuolatinės inventorizacijos niekas nežino, kas iš tikrųjų yra pasiekiama.
- **Sprendimai tampa pigesni.** Kai situacija žinoma, vadovybė gali rinktis tarp rizikų, o ne spėlioti.

## Keturi sluoksniai, kurie turi veikti kartu

**1. Turto inventorizacija.** Negalite apsaugoti to, apie ką nežinote, kad tai turite. Domenai, subdomenai, vieši API, debesų paskyros, SaaS paslaugos ir darbuotojų įrenginiai turi būti gyvame sąraše – ne lentelėje, atnaujintoje pernai.

**2. Pažeidžiamumų stebėjimas.** Žinomi pažeidžiamumai (CVE) turi būti susieti su jūsų faktine technine aplinka, atsižvelgiant į tai, ar pažeidžiamumas naudojamas praktiškai, ir ar turtas pasiekiamas iš išorės. Aukštas CVSS balas vidiniame testo serveryje nėra tas pats, kas vidutinis pažeidžiamumas jūsų viešame prisijungimo lange.

**3. Aptikimas ir signalai.** Žurnalai, kurių niekas neskaito, yra išlaidos, o ne kontrolė. Reikia nedaugelio signalų, kurie turi realią reikšmę: naujas administratoriaus prisijungimas, masinis duomenų išgavimas, pakeistos teisės, srautas į žinomus kenkėjiškus adresus.

**4. Incidentų valdymas.** Kai kažkas nutinka, atsakomybė, kontaktai ir pirmieji veiksmai turi būti nustatyti iš anksto. Tai skirtumas tarp paskyros užrakinimo per dešimt minučių ir dienos, praleistos aiškinantis, kas kam skambina.

## Ką tai reiškia mažesnei įmonei

Nuolatinė sauga nereikalauja dešimties žmonių saugos komandos. Reikia trijų dalykų: atsakingo asmens, ritmo ir vietos, kur atkeliauja radiniai.

- **Atsakingas asmuo:** paskirtas žmogus, atsakingas už tai, kad radiniai virstų užduotimis.
- **Ritmas:** kas savaitę naujų radinių peržiūra, kas mėnesį teisių ir tiekėjų peržiūra.
- **Vieta:** sistema, kurioje kiekvienas radinys turi būseną, atsakingą asmenį ir datą – ne pašto dėžutė.

Daugumai mažesnių organizacijų pagrįstas lygis yra stebėjimą ir prioritetų nustatymą perduoti išorės partneriui, o organizacijai pačiai valdyti užduotis. Tai užtikrina tęstinumą nekuriant vidinio saugos skyriaus.

## Dažniausi prieštaravimai

*„Mes per maži, kad kam nors rūpėtume.”* Automatizuoti išpuoliai nesirenka pagal apyvartą. Jie renkasi pagal poveikio tašką – o maža įmonė su vieša, neatnaujinta paslauga yra lengvesnis taikinys nei didelis bankas.

*„Mes pernai atlikome auditą.”* Tai gera pradžia, bet nieko nesako apie šiandieną. Auditas yra nuotrauka; nuolatinė sauga yra filmas.

*„Tai kainuos per daug.”* Dažniausiai tai kainuoja pigiau nei vienas incidentas su prastova, prarastais klientais ir tyrimo išlaidomis. Esmė ne nusipirkti daugiau įrankių, o daryti mažiau dalykų dažniau.

## Kaip pradėti per keturias savaites

1. **1 savaitė:** inventorizuokite viešą turtą ir debesų paskyras. Išjunkite tai, kas nenaudojama.
2. **2 savaitė:** nustatykite žinomų pažeidžiamumų stebėjimą savo faktinėje aplinkoje ir nustatykite prioritetus dešimčiai aktualiausių radinių.
3. **3 savaitė:** įdiekite MFA ten, kur jo trūksta – ypač administracinėse paskyrose ir el. pašte. Tai vis dar efektyviausia atskira priemonė pagal kainą.
4. **4 savaitė:** parašykite vieno lapo incidento planą ir išbandykite jį paprastu scenarijumi.

Po to darbas yra ritmo, o ne projekto klausimas. Būtent šis ritmas leidžia atsakyti į klientų ir institucijų saugos klausimus faktais, o ne pažadais.
