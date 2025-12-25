---
layout: default
title: "Dejan Grujić — Radio Beograd 202, Ustanak"
permalink: /
description: "Dejan Grujić (Dejan Grujic) — Radio Beograd 202 • Glumac • Pisac. Ustanak."
---

<section class="hero reveal">
    <h1 class="hero-title">Dejan Grujić <span class="muted">(Dejan Grujic)</span></h1>
    <p class="hero-roles">Radio Beograd 202 • Glumac • Pisac</p>
    <p class="lead">Kratka urednička rečenica o radu i tonu sajta. Zameniti stvarnim tagline-om (1–2 rečenice).</p>
    <div class="hero-cta">
        <a class="btn btn-primary" href="{{ '/radio/' | relative_url }}">Slušaj</a>
        <a class="btn btn-ghost" href="{{ '/acting/' | relative_url }}">Pogledaj</a>
        <a class="btn btn-ghost" href="{{ '/writing/' | relative_url }}">Čitaj</a>
        <a class="btn btn-ghost" href="{{ '/contact/' | relative_url }}">Kontakt</a>
    </div>
</section>

<section class="reveal" style="margin-top: var(--space-6);">
    <div class="section-title">
        <h2>Istaknuto</h2>
        <div class="bar"></div>
    </div>
    <div class="grid grid-3">
        {% assign featured_radio = site.radio | where: 'featured', true | sort: 'order' | slice: 0,1 %}
        {% assign featured_acting = site.acting | where: 'featured', true | sort: 'order' | slice: 0,1 %}
        {% assign featured_writing = site.writing | where: 'featured', true | sort: 'order' | slice: 0,1 %}

        {% for item in featured_radio %}
        <article class="card">
            {% if item.image %}<img src="{{ item.image | relative_url }}" alt="{{ item.title }}" loading="lazy" width="1200" height="630">{% endif %}
            <h3>{{ item.title }}</h3>
            <p class="muted">Radio • {{ item.year }}</p>
            <p>{{ item.description }}</p>
            <a class="btn btn-ghost" href="{{ '/radio/' | relative_url }}">Sve radio stavke</a>
        </article>
        {% endfor %}

        {% for item in featured_acting %}
        <article class="card">
            {% if item.image %}<img src="{{ item.image | relative_url }}" alt="{{ item.title }}" loading="lazy" width="1200" height="630">{% endif %}
            <h3>{{ item.title }}</h3>
            <p class="muted">Gluma • {{ item.year }}</p>
            <p>{{ item.description }}</p>
            <a class="btn btn-ghost" href="{{ '/acting/' | relative_url }}">Sve uloge</a>
        </article>
        {% endfor %}

        {% for item in featured_writing %}
        <article class="card">
            {% if item.image %}<img src="{{ item.image | relative_url }}" alt="{{ item.title }}" loading="lazy" width="1200" height="630">{% endif %}
            <h3>{{ item.title }}</h3>
            <p class="muted">Pisanje • {{ item.year }}</p>
            <p>{{ item.description }}</p>
            <a class="btn btn-ghost" href="{{ '/writing/' | relative_url }}">Svi tekstovi</a>
        </article>
        {% endfor %}
    </div>
</section>

<section class="reveal" style="margin-top: var(--space-7);">
    <div class="section-title">
        <h2>Press/Media</h2>
        <div class="bar"></div>
    </div>
    <blockquote>
        "Istaknut u emisiji Ustanak na Radio Beogradu 202" — placeholder. Zameniti stvarnim navodima ili linkovima.
    </blockquote>
</section>

<section class="reveal" style="margin-top: var(--space-7);">
    <div class="section-title">
        <h2>Kontakt</h2>
        <div class="bar"></div>
    </div>
    <div class="card">
        <p><strong>E-mail:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        <p><strong>Twitter:</strong> <a href="https://twitter.com/voditelj202" rel="me">@voditelj202</a></p>
        <p><strong>Instagram:</strong> <a href="https://instagram.com/grujic202" rel="me">@grujic202</a></p>
        <p><strong>Facebook:</strong> <a href="https://facebook.com/grujic" rel="me">/grujic</a></p>
    </div>
</section>