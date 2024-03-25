---
layout: base
hide_from_home: true
title: Cinéma français contre cinéma indien
desc: Une comparasion historique entre le cinéma français et celui de l'Inde
---

<section>
{%- for event in events -%}
  <!-- row #{%increment index%} -->
  {%- render "./card.liquid", year: event.first, event: event.last, index: index -%}
{%- endfor -%}
</section>

<style>
section {
    display: grid;
    align-items: center;
    grid-template-columns: 4fr 1fr 4fr;
    gap: 1ch;
}
.year { grid-column: 2; }
.fr { grid-column: 1; }
.in { grid-column: 3; }
.invisible { visibility: hidden; }
section h1 {
    margin-top: 0px;
}
</style>

