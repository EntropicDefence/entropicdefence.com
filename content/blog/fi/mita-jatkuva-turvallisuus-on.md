---
key: continuous-security
title: Mitä jatkuva turvallisuus on – ja miksi vuosittainen auditointi ei riitä?
description: Vuosittainen penetraatiotestaus kuvaa yhden päivän. Jatkuva turvallisuus mittaa tilannetta joka päivä – tässä ero, mitä se maksaa ja miten pääsette alkuun.
date: 2026-10-16
tags: jatkuva turvallisuus, uhkamalli, haavoittuvuudet, häiriötilanteiden hallinta
---

Useimmat yritykset ostavat turvallisuutta tapahtumana. Auditointi keväällä, penetraatiotestaus syksyllä, raportti joka päätyy kansioon. Ongelma on, että raportti kuvaa päivää, joka on jo ohi. Sillä välin on julkaistu uusia haavoittuvuuksia, toimittaja on vaihtanut omistajaa ja joku henkilöstöstä on klikannut väärää linkkiä.

Jatkuva turvallisuus on tämän vastakohta: jatkuva toimintatapa, jossa mittaatte, priorisoitte ja korjaatte koko ajan sen sijaan, että tekisitte sen kerran vuodessa.

## Ero käytännössä

Kertaluonteinen toimenpide vastaa kysymykseen *”olimmeko turvassa silloin?”*. Jatkuva turvallisuus vastaa kysymykseen *”olemmeko turvassa nyt, ja mikä on muuttunut edellisen kerran jälkeen?”*. Se kuulostaa vivahde-erolta, mutta seuraukset ovat suuria:

- **Altistuminen havaitaan tunneissa, ei kuukausissa.** Uusi kriittinen haavoittuvuus käyttämässänne palvelussa muuttuu toimenpiteeksi samalla viikolla, ei ensi vuoden agendan kohdaksi.
- **Muutokset huomataan.** Uudet julkiset portit, uudet pilviresurssit ja uudet kolmannen osapuolen integraatiot ilmestyvät jatkuvasti. Ilman jatkuvaa kartoitusta kukaan ei tiedä, mikä on todella altistunut.
- **Päätöksistä tulee halvempia.** Kun tilanne on tiedossa, johto voi priorisoida riskien välillä sen sijaan, että arvaisi.

## Neljä kerrosta, joiden on oltava käynnissä samaan aikaan

**1. Omaisuuden kartoitus.** Ette voi suojata sitä, mitä ette tiedä omistavanne. Verkkotunnukset, aliverkkotunnukset, julkiset API-rajapinnat, pilvitilit, SaaS-palvelut ja työntekijöiden laitteet on pidettävä elävässä luettelossa – ei laskentataulukossa, jota päivitettiin viime vuonna.

**2. Haavoittuvuuksien seuranta.** Tunnetut haavoittuvuudet (CVE:t) on sovitettava todelliseen tekniseen ympäristöönne ottaen huomioon, hyödynnetäänkö haavoittuvuutta käytännössä ja onko kohde saavutettavissa ulkopuolelta. Korkea CVSS-pisteet sisäisellä testipalvelimella eivät ole sama asia kuin keskitasoinen haavoittuvuus julkisessa kirjautumisessanne.

**3. Havainnointi ja hälytykset.** Lokit, joita kukaan ei lue, ovat kustannus eivätkä valvontatoimi. Tarvitaan muutama hälytys, jolla on todella merkitystä: uusi ylläpitäjän kirjautuminen, massaluenta datasta, muuttuneet käyttöoikeudet, liikenne tunnettuihin haitallisiin osoitteisiin.

**4. Häiriötilanteiden hallinta.** Kun jotain tapahtuu, vastuut, yhteydenottotavat ja ensimmäiset toimenpiteet on päätetty etukäteen. Se on ero sen välillä, suljetaanko tili kymmenessä minuutissa vai käytetäänkö päivä sen selvittämiseen, kuka soittaa kenelle.

## Mitä tämä tarkoittaa pienemmälle yritykselle

Jatkuva turvallisuus ei vaadi kymmenen hengen turvallisuustiimiä. Se vaatii kolme asiaa: omistajan, rytmin ja paikan, johon havainnot päätyvät.

- **Omistaja:** nimetty henkilö, joka vastaa siitä, että havainnoista tulee toimenpiteitä.
- **Rytmi:** viikoittainen uusien havaintojen läpikäynti, kuukausittainen käyttöoikeuksien ja toimittajien läpikäynti.
- **Paikka:** järjestelmä, jossa jokaisella havainnolla on tila, vastuuhenkilö ja päivämäärä – ei sähköpostilaatikko.

Useimmille pienemmille organisaatioille järkevä taso on antaa ulkopuolisen osapuolen hoitaa seuranta ja priorisointi, kun taas oma organisaatio omistaa toimenpiteet. Se antaa jatkuvuuden rakentamatta sisäistä turvallisuusosastoa.

## Yleisiä vastaväitteitä

*”Olemme liian pieniä kiinnostaaksemme ketään.”* Automaattiset hyökkäykset eivät valitse liikevaihdon mukaan. Ne valitsevat altistumisen mukaan – ja pieni yritys, jolla on julkinen, päivittämätön palvelu, on helpompi kohde kuin suuri pankki.

*”Teimme auditoinnin viime vuonna.”* Se on hyvä alku, mutta se ei kerro tämän päivän tilanteesta. Auditointi on valokuva; jatkuva turvallisuus on elokuva.

*”Siitä tulee liian kallista.”* Useimmiten se tulee halvemmaksi kuin yksikin häiriö, johon liittyy käyttökatko, asiakasmenetykset ja selvityskulut. Tarkoitus ei ole ostaa lisää työkaluja, vaan tehdä vähemmän asioita useammin.

## Näin pääsette alkuun neljässä viikossa

1. **Viikko 1:** kartoittakaa julkiset omaisuudet ja pilvitilit. Sammuttakaa se, mitä ei käytetä.
2. **Viikko 2:** ottakaa käyttöön tunnettujen haavoittuvuuksien seuranta omaa ympäristöänne vasten ja priorisoikaa kymmenen kiireellisintä havaintoa.
3. **Viikko 3:** ottakaa MFA käyttöön siellä, missä se puuttuu – erityisesti ylläpitotileillä ja sähköpostissa. Se on edelleen yksittäisistä toimenpiteistä kustannustehokkain.
4. **Viikko 4:** kirjoittakaa yhden sivun häiriösuunnitelma ja testatkaa se yksinkertaisella skenaariolla.

Sen jälkeen työ on kysymys rytmistä, ei projektista. Juuri se rytmi mahdollistaa sen, että voitte vastata asiakkaiden ja viranomaisten turvallisuuskysymyksiin faktoilla lupauksien sijaan.
