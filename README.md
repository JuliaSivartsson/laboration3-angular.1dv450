# laboration3 angular
jsigc09, 1dv450

----------------------
#Få igång applikationen


* Kopiera länken till repositoriet (HTTPS): https://github.com/JuliaSivartsson/laboration3-angular.1dv450.git

* Gå till [c9.io](https://c9.io/)
* Logga in med befintlig användare eller skapa en ny och koppla mot Github
* Klicka på 'Create a new workspace'
* Ge projektet ett namn.
* Under rubriken 'Clone from Git or Mercurial URL' klistrar du in länken till det här repositoriet.
* Klicka på 'Create workspace'

* När ditt workspace skapats och laddats klart, klicka på 'index.html'
* Klicka på 'Run' uppe i menyn.
* En länk till körningen kommer att dyka upp i konstollen, klicka på den.
* Nu kan du leka runt i applikationen!

* API-et ligger på Heroku så ingen installation behövs för att få igång det. [Länk till Laboration2 repositoriet](https://github.com/JuliaSivartsson/laboration2-ruby-1dv450)

Då ingen registrering på klientapplikationen är implementerad så finns det två färdiga användare att testa med:

**Användare1:**
* Användarnamn: itzy_90@hotmail.com
* Lösenord: hejsan

**Användare2:**
* Användarnamn: bananpaj@hotmail.com
* Lösenord: hejsan



----------------------

#Ändringar från Laboration2
* Jag har inte gjort särskilt många ändringar i mitt API under laboration3. Det jag har gjort är att jag la till [Rack-Cors](https://github.com/cyu/rack-cors)
för att hantera alla anrop från min klientapplikationen till API-et. När jag väl förstod hur det skulle implementeras så fungerade
det oerhört smidigt.

* Jag la till i laboration2 att man skulle kunna uppdatera en restaurang och då även uppdatera vilka taggar den tillhör eller vilken plats
den finns på. Detta var något jag inte fick att fungera med klientapplikationen så tyvärr går det bara uppdatera de saker som tillhör
själva restaurangen (namn, beskrivning och betyg).

