---
key: continuous-security
title: Kas ir nepārtraukta drošība – un kāpēc ar ikgadēju auditu nepietiek?
description: Ikgadējs iespiešanās tests apraksta vienu dienu. Nepārtraukta drošība mēra situāciju katru dienu – lūk, atšķirība, cik tas maksā un kā sākt.
date: 2026-10-16
tags: nepārtraukta drošība, draudu modelis, ievainojamības, incidentu pārvaldība
---

Lielākā daļa uzņēmumu drošību pērk kā notikumu. Audits pavasarī, iespiešanās tests rudenī, ziņojums, kas nonāk mapē. Problēma ir tā, ka ziņojums apraksta dienu, kas jau ir pagājusi. Tikmēr ir publicētas jaunas ievainojamības, piegādātājs ir mainījis īpašnieku un kāds no darbiniekiem ir noklikšķinājis uz nepareizas saites.

Nepārtraukta drošība ir pretējais: pastāvīga darba metode, kurā jūs mērāt, nosakāt prioritātes un novēršat visu laiku, nevis vienu reizi gadā.

## Atšķirība praksē

Vienreizējs pasākums atbild uz jautājumu *“vai mēs toreiz bijām drošībā?”*. Nepārtraukta drošība atbild uz *“vai mēs esam drošībā tagad, un kas ir mainījies kopš pēdējās reizes?”*. Tas izklausās pēc nianses, bet sekas ir lielas:

- **Pakļautība tiek atklāta stundu, nevis mēnešu laikā.** Jauna kritiska ievainojamība jūsu izmantotā pakalpojumā kļūst par darbību tajā pašā nedēļā, nevis par nākamā gada darba kārtības punktu.
- **Izmaiņas tiek pamanītas.** Jauni publiski porti, jauni mākoņresursi un jaunas trešo pušu integrācijas parādās nepārtraukti. Bez pastāvīgas uzskaites neviens nezina, kas patiešām ir pakļauts riskam.
- **Lēmumi kļūst lētāki.** Kad situācija ir zināma, vadība var noteikt prioritātes starp riskiem, nevis minēt.

## Četri slāņi, kuriem jādarbojas vienlaikus

**1. Aktīvu uzskaite.** Jūs nevarat aizsargāt to, par ko nezināt, ka tas jums pieder. Domēni, apakšdomēni, publiskas API, mākoņkonti, SaaS pakalpojumi un darbinieku ierīces ir jābūt dzīvā sarakstā – nevis izklājlapā, kas atjaunināta pagājušajā gadā.

**2. Ievainojamību uzraudzība.** Zināmās ievainojamības (CVE) ir jāsaskaņo ar jūsu faktisko tehnisko vidi, ņemot vērā, vai ievainojamība tiek izmantota praksē un vai aktīvs ir sasniedzams no ārpuses. Augsts CVSS vērtējums iekšējā testa serverī nav tas pats, kas vidēji augsta ievainojamība jūsu publiskajā pieteikšanās lapā.

**3. Noteikšana un trauksmes.** Žurnāli, ko neviens nelasa, ir izmaksas, nevis kontrole. Nepieciešamas dažas trauksmes, kurām patiešām ir nozīme: jauna administratora pieteikšanās, datu masveida izgūšana, mainītas atļaujas, satiksme uz zināmām ļaunprātīgām adresēm.

**4. Incidentu pārvaldība.** Kad kaut kas notiek, atbildībai, saziņas ceļiem un pirmajām darbībām jābūt noteiktām iepriekš. Tā ir atšķirība starp konta slēgšanu desmit minūšu laikā un dienas pavadīšanu, skaidrojot, kurš kam zvana.

## Ko tas nozīmē mazākam uzņēmumam

Nepārtraukta drošība neprasa desmit cilvēku drošības komandu. Tā prasa trīs lietas: atbildīgo, ritmu un vietu, kur nonāk atradumi.

- **Atbildīgais:** nosaukta persona, kas atbild par to, lai atradumi kļūtu par darbībām.
- **Ritms:** iknedēļas jaunu atradumu pārskats, ikmēneša atļauju un piegādātāju pārskats.
- **Vieta:** sistēma, kur katram atradumam ir statuss, atbildīgais un datums – nevis iesūtne.

Lielākajai daļai mazāku organizāciju saprātīgais līmenis ir uzraudzību un prioritāšu noteikšanu nodot ārējam partnerim, kamēr pati organizācija pārvalda darbības. Tas nodrošina nepārtrauktību, neveidojot iekšēju drošības nodaļu.

## Biežākie iebildumi

*“Mēs esam pārāk mazi, lai kādu interesētu.”* Automatizētie uzbrukumi neizvēlas pēc apgrozījuma. Tie izvēlas pēc pakļautības – un mazs uzņēmums ar publisku, neatjauninātu pakalpojumu ir vienkāršāks mērķis nekā liela banka.

*“Mēs pagājušogad veicām auditu.”* Tas ir labs sākums, bet neko nepasaka par šodienas situāciju. Audits ir fotogrāfija; nepārtraukta drošība ir filma.

*“Tas izmaksās pārāk dārgi.”* Visbiežāk tas izmaksā lētāk nekā viens vienīgs incidents ar dīkstāvi, zaudētiem klientiem un izmeklēšanas izmaksām. Būtība nav pirkt vairāk rīku, bet darīt mazāk lietu biežāk.

## Kā sākt četrās nedēļās

1. **1. nedēļa:** uzskaitiet publiskos aktīvus un mākoņkontus. Izslēdziet to, kas netiek izmantots.
2. **2. nedēļa:** iestatiet zināmo ievainojamību uzraudzību pret savu faktisko vidi un nosakiet prioritātes desmit aktuālākajiem atradumiem.
3. **3. nedēļa:** ieviesiet MFA tur, kur tā trūkst – īpaši administratīvajos kontos un e-pastā. Tas joprojām ir visefektīvākais atsevišķais pasākums attiecībā pret izmaksām.
4. **4. nedēļa:** uzrakstiet vienas lapas incidenta plānu un pārbaudiet to ar vienkāršu scenāriju.

Pēc tam darbs ir ritma, nevis projekta jautājums. Tieši šis ritms ļauj atbildēt uz klientu un iestāžu drošības jautājumiem ar faktiem, nevis solījumiem.
