## Tutaj możemy trzymać nasze linki i notatki


## Linki
[Layout](https://www.figma.com/file/9fu4JT9mX1qHIQOkI1ywbc/FindIT_WelcomePage?node-id=0%3A1) - zobaczcie czy macie dostęp i możecie działać - myślę, że jak dobrze to przemyślimy to będziemy już w dobrym miejscu - chyba robimy mobile first, nie? ;)

[Jira](https://jira.is-academy.pl/secure/RapidBoard.jspa?rapidView=410&projectKey=JFDZR2&view=planning&selectedIssue=JFDZR2-6&issueLimit=100) - pierszy sprint


[React - best practice](https://alexkondov.com/tao-of-react/)

[Divider](https://material-ui.com/components/dividers/)

[onClick](https://flaviocopes.com/react-show-different-component-on-click/)



## Ustalenia
### Sign in
Imię, nazwisko, adres zamieszkania, email, hasło

PIerwszy serwis bez cv i lm! Znajdziesz partnera szynciej niż randkę na walentynki ;)
### Ankioeta wstępna
po najechaniu na przyciskwyświetla się opis o co nam chodzi :P
Z założenia wszystkie pytania mozna pominąć, jeśli w pierwszym nie zaznaczysz nmic to jesteś 1.c
1. General notes
1. What are you looking for?
1.a project partner
1.b project to join
1.c looking around
2. Your main skills - tutaj też te ikonki z kolorami i określeniem - patrametr wyszukiwania
3. Experience: student, junior, mid, senior
4. Write a few words about yourself


jeżeli 1.a: to:
2. Project information - informacje stąd będą brane do ogłoszernia które użytkonikbędzi emógł wrzucić na wall - ten sam modal można potem wykorzystać przy pisaniu posta 
2.a Tell us more about your project
title - nazwa projektu
text area tutaj okienko do wpisania tekstu
2.b Required technologies: ikonki technologi są szare i zaznaczasz to kolorowe
plus poziom zaawansowania jak tutaj: https://justjoin.it/offers/questionscout-junior-frontend-developer
2.c Project duration
from 1 to 4 weeks, a couple of months, a year, more thank 1 year
2. d Location - city or remote
--> przenosi do walla z Twoim postem

jeżeli 1.b: to:
--> przenosi do walla (potem do wyszukiwarki)

jeżeli 1.c: to:
--> przenosi do walla

## Filtrowanie wall
all, projects, random


## Meeting 05.03.2021

1. Daria - oddzielna logika Sign In i Sign Up + jak zrobić routing ankiety
2. Michał - dodanie logiki do ankiety - skip , submit i wysłanie danych do firebase. Pobranie danych z firebase do profile-page
3. Kamil - dodawanie postów 

Pytania:
1. Main Page - jak mamy main page , to raz mamy stronę z postami, raz stronę naszego profilu, raz stronę innych profili. Zastanawiam się czy nie powinniśmy mieć komponentu rodzica z navbarem, buttonami u góry, a poszczególne widoki powinny być routami. Ale nie wiem czy można mieć w jednej aplikacji dwa switche?

Pytania - Daria - co z autoryzacją - jeśli jestem wylogowana czy 