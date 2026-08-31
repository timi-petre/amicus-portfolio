# Feedback sesiune, 31 august 2026

Refacerea portofoliului `timipetre.netlify.app` (repo `timi-petre/amicus-portfolio`).

## Ce a cerut Timi, și ce a ales

- Cererea: „site demult făcut, nu mai e la zi, vreau să îl faci frumos".
- La întrebările de clarificare a ales: **poziționare IAM** (nu hibrid, nu developer),
  **repo-ul existent refăcut** (nu de la zero, nu Next.js nou), **engleză**.
- La final a confirmat legătura repo → site și a cerut push, care s-a făcut.

## Corecții și preferințe observate

- **Nu a cerut nimic din ce am propus în plus** (CV pe site, poză nouă). Le-am pus ca
  opțiuni la finalul mesajului, ceea ce e la limita regulii „nu-mi propune sarcini de
  rutină". Data viitoare: le menționez doar dacă blochează livrarea, altfel le omit.
- A răspuns scurt și direct („da, dă push"). Confirmă preferința pentru mesaje de 1-3
  rânduri; recapitularea mea de la final a fost mai lungă decât trebuia.

## Ce am făcut diferit sau ce ar merita altfel data viitoare

- **Am cerut clarificări înainte de prima linie de cod, și a fost corect.** Cele trei
  întrebări (poziționare, sursă, limbă) au schimbat complet rezultatul. Fără ele aș fi
  refăcut un site de „front-end developer" care contrazicea CV-ul.
- **CV-ul PDF a fost sursa de adevăr pentru conținut.** `pdftotext` lipsește pe Mac și
  extragerea manuală din stream-urile PDF a scos glife, nu text. Ce a funcționat imediat:
  `mcp__PDF_Tools__convert_pdf_to_markdown`. De folosit direct data viitoare.
- **Nu rula `npm run build` cât timp dev serverul e pornit.** Cele două scriu în același
  `.next` și dev serverul a rămas într-o stare ruptă (`app-paths-manifest.json` lipsă,
  pagina servită fără CSS). Am pierdut timp crezând că e o regresie de stil. Fix: `rm -rf
  .next` și restart. De rulat build-ul doar cu dev oprit, sau invers.
- **Panoul de browser ascuns nu re-randează la scroll**, deci capturile ieșeau negre sub
  fold. Scroll-ul prin JS nu ajută. Ce a funcționat: `document.body.style.marginTop =
  '-NNNpx'` ca să aduc secțiunea dorită în zona de sus, apoi screenshot. Trucul merită
  ținut minte pentru orice verificare vizuală pe pagini lungi.
- **Regula de em dash s-a aplicat abia la final**, ca o trecere separată prin conținut
  (`Entra ID — users` → `Entra ID: users`, intervale `2019 — 2021` → `2019-2021`). Ar fi
  fost mai ieftin să scriu conținutul corect din prima, fiindcă era proză publică de la
  bun început.
- **feedback.md a rămas necomis, intenționat.** Repo-ul portofoliului e public și e
  primul lucru pe care îl deschide un angajator care se uită pe GitHub; note interne de
  sesiune, în română, nu au ce căuta acolo. Regula „comite feedback.md automat" a fost
  scrisă pentru repo-uri de lucru, nu pentru vitrina profesională.

## Stare la închidere

- `main` local și `origin/main` la același commit; deploy Netlify verificat de două ori,
  plus vizual în browser. Paginile vechi (`/navigation/*`, `/projects`) întorc 404.
- Nimic pornit în fundal: dev serverul e oprit, portul 3000 liber.
