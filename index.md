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
                    <h2>Praznici nam stižu, uz "Život na Crticu"!</h2>
                </div>
                <div class="w-row">
                    <img src="{{ "assets/img/galerija/Praznici nam stizu.jpg" | relative_url }}" style="padding:15px;"/>
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