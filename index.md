---
layout: default
title: "Pocetna"
permalink: /
---

<div class="section">
    <div class="w-container">
        <div class="row">
            <div class="col-sm-10">
                <div class="w-row" style="text-align: center;">
                    <h2>Pregled korica i sadržaja knjige "Život na Crticu"</h2>
                </div>
                <div class="w-row">
                    <div id="flipbook">
                            <div class="page" style="background-image:url({{"assets/img/korica_prva.png" | relative_path}})"></div>
                            <div class="page">
                                <h2>Utorak</h2>
                                <h2>24. oktobar 2017. godine</h2>
                                <p>Čuli ste  sve o novim pozadinama i napredninama plastičnog porekla naših vedeta? Znate koja se glumica dobro udala, a koja to sportska diva očijuka sa momcima koji su odavno „poznati policiji“... Nastavak na stranici "Crtica" </p>
                            </div>
                            <div class="page">
                                <h2>Četvrtak</h2>
                                <h2>16. oktobar 2018. godine</h2>
                                <p>Dva puta sam bio na bolovanju. Samo jednom su me uhvatili. Drugi put sam polomio nogu pa im nije bilo teško da zaključe da je taj put bilo „odistinski“. Šalu na stranu, značajan broj radnika, naročito u velikim firmama, koristi, da ne kažem zloupotrebljava pravo na plaćeno bolovanje... Nastavak na stranici "Crtica"</p>
                            </div>
                            <div class="page">
                                <h2>Utorak</h2>
                                <h2>12. februar, 2019. godine</h2>
                                <p>Bio jednom jedan strašni dasa. Redovno je mlatio mangupe po kraju ako nisu bili dobri prema devojkama. Svakoj baki je umeo da pomogne kad prelazi ulicu i ponese zembilj sa pijace. Takođe, bio je prvak u svemu. Devojke su ga obožavale a njihove majke želele za zeta. E, takav dasa više ne postoji čak ni u pričama... Nastavak na stranici "Crtica"</p>
                            </div>
                            <div class="page"></div>
                            <div class="page" style="background-image:url({{"assets/img/korica_poslednja.png" | relative_path}})"></div>
                    </div>
                </div>
                <div class="w-row" style="text-align: center;">
                    <hr/>
                    Strana: <input type="number" id="pageFld" min=1/>
                    <button id="prevBtn">Prethodna</button>
                    <button id="nextBtn">Sledeca</button>
                </div>
            </div>
            <div class="col-sm-2" style="border-left: 1px solid black;">
                <div class="row">
                    <ul>
                        <li style="list-style: none;"><h3>Intervjui</h3></li>
                        {% for interview in site.data.interviews %}
                        <li><a href="{{interview.link}}" class="w-list-link">{{interview.title}}</a></li>
                        {% endfor %}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="section lightgrey">
    <div class="w-container">
        <div class="small-title-wrapper">
            <div class="small-title">Tako su rekli o knjizi "Život na Crticu"...</div>
            <div class="horizontal-bar lightgrey"></div>
        </div>
        <div data-animation="slide" data-duration="500" data-infinite="1" class="testimonials-slider w-slider">
            <div class="w-slider-mask">
                {% for rec in site.data.reci_sazetak %}
                    <div class="testimonial-slide w-slide">
                        <p class="testimonial">{{rec.text}}</p>
                        <div class="author">{{rec.author}}</div>
                    </div>
                {% endfor %}
            </div>
            <div class="left-arrow w-slider-arrow-left">
                <div class="w-icon-slider-left"></div>
            </div>
            <div class="right-arrow w-slider-arrow-right">
                <div class="w-icon-slider-right"></div>
            </div>
        </div>
    </div>
</div>

<script src="{{ "/assets/js/jquery-3.5.1.slim.min.js" | relative_url }}"></script>
<script type="text/javascript" src="{{ "assets/js/turn.min.js" | relative_url }}"></script>

<script>
  $("#flipbook").turn({
    width: 580,
    height: 400,
    autoCenter: true
    });
    
    $("#pageFld").val($("#flipbook").turn("page"));
    
    $("#flipbook").bind("turned", function(event, page, view) {
    $("#pageFld").val(page);
    });
    
    $("#pageFld").change(function() {
    $("#flipbook").turn("page", $(this).val());
    });
    
    $("#prevBtn").click(function() {
    $("#flipbook").turn("previous");
    });
    
    $("#nextBtn").click(function() {
    $("#flipbook").turn("next");
    });
  </script>