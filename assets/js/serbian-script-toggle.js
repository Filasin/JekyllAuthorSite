(function(){
  "use strict";
  var STORAGE_KEY = "serbianScriptPreference";
  try {
    var siteCfg = window.__SERBIAN_SCRIPT_CFG__ || {};
    if (siteCfg.storage_key) STORAGE_KEY = siteCfg.storage_key;
  } catch (e) {}

  var PREFERRED = (function(){
    try { return localStorage.getItem(STORAGE_KEY) || "latin"; } catch(e){ return "latin"; }
  })();

  var DIGRAPHS = [
    {re:/Dž/g, to:"Џ"},{re:/dž/g, to:"џ"},
    {re:/Nj/g, to:"Њ"},{re:/nj/g, to:"њ"},
    {re:/Lj/g, to:"Љ"},{re:/lj/g, to:"љ"}
  ];
  var LETTERS = [
    [/A/g,"А"],[/a/g,"а"],[/B/g,"Б"],[/b/g,"б"],[/V/g,"В"],[/v/g,"в"],[/G/g,"Г"],[/g/g,"г"],
    [/D/g,"Д"],[/d/g,"д"],[/Đ/g,"Ђ"],[/đ/g,"ђ"],[/E/g,"Е"],[/e/g,"е"],[/Ž/g,"Ж"],[/ž/g,"ж"],
    [/Z/g,"З"],[/z/g,"з"],[/I/g,"И"],[/i/g,"и"],[/J/g,"Ј"],[/j/g,"ј"],[/K/g,"К"],[/k/g,"к"],
    [/L/g,"Л"],[/l/g,"л"],[/M/g,"М"],[/m/g,"м"],[/N/g,"Н"],[/n/g,"н"],[/O/g,"О"],[/o/g,"о"],
    [/P/g,"П"],[/p/g,"п"],[/R/g,"Р"],[/r/g,"р"],[/S/g,"С"],[/s/g,"с"],[/T/g,"Т"],[/t/g,"т"],
    [/Ć/g,"Ћ"],[/ć/g,"ћ"],[/U/g,"У"],[/u/g,"у"],[/F/g,"Ф"],[/f/g,"ф"],[/H/g,"Х"],[/h/g,"х"],
    [/C/g,"Ц"],[/c/g,"ц"],[/Č/g,"Ч"],[/č/g,"ч"],[/Š/g,"Ш"],[/š/g,"ш"],
    [/Y/g,"Ы"],[/y/g,"ы"] // Y not typically Serbian; kept minimal
  ];

  var CYR_TO_LAT = [
    [/Џ/g,"Dž"],[/џ/g,"dž"],[/Њ/g,"Nj"],[/њ/g,"nj"],[/Љ/g,"Lj"],[/љ/g,"lj"],
    [/А/g,"A"],[/а/g,"a"],[/Б/g,"B"],[/б/g,"b"],[/В/g,"V"],[/в/g,"v"],[/Г/g,"G"],[/г/g,"g"],
    [/Д/g,"D"],[/д/g,"d"],[/Ђ/g,"Đ"],[/ђ/g,"đ"],[/Е/g,"E"],[/е/g,"e"],[/Ж/g,"Ž"],[/ж/g,"ž"],
    [/З/g,"Z"],[/з/g,"z"],[/И/g,"I"],[/и/g,"i"],[/Ј/g,"J"],[/ј/g,"j"],[/К/g,"K"],[/к/g,"k"],
    [/Л/g,"L"],[/л/g,"l"],[/М/g,"M"],[/м/g,"m"],[/Н/g,"N"],[/н/g,"n"],[/О/g,"O"],[/о/g,"o"],
    [/П/g,"P"],[/п/g,"p"],[/Р/g,"R"],[/р/g,"r"],[/С/g,"S"],[/с/g,"s"],[/Т/g,"T"],[/т/g,"t"],
    [/Ћ/g,"Ć"],[/ћ/g,"ć"],[/У/g,"U"],[/у/g,"u"],[/Ф/g,"F"],[/ф/g,"f"],[/Х/g,"H"],[/х/g,"h"],
    [/Ц/g,"C"],[/ц/g,"c"],[/Ч/g,"Č"],[/ч/g,"č"],[/Ш/g,"Š"],[/ш/g,"š"]
  ];

  var SKIP_TAGS = new Set(["CODE","PRE","KBD","SAMP","SCRIPT","STYLE","NOSCRIPT","TEXTAREA","INPUT"]);

  function latinToCyrillic(text){
    // handle digraphs first
    DIGRAPHS.forEach(function(d){ text = text.replace(d.re, d.to); });
    LETTERS.forEach(function(pair){ text = text.replace(pair[0], pair[1]); });
    return text;
  }
  function cyrillicToLatin(text){
    CYR_TO_LAT.forEach(function(pair){ text = text.replace(pair[0], pair[1]); });
    return text;
  }

  function translateNode(node, to){
    if (node.nodeType === 3) { // Text
      var t = node.nodeValue;
      var newText = (to === "cyrillic") ? latinToCyrillic(t) : cyrillicToLatin(t);
      if (newText !== t) node.nodeValue = newText;
      return;
    }
    if (!node || SKIP_TAGS.has(node.nodeName)) return;
    // Only traverse visible content containers to reduce workload
    var child = node.firstChild;
    while(child){
      translateNode(child, to);
      child = child.nextSibling;
    }
  }

  function applyPreference(pref){
    var to = (pref === "cyrillic") ? "cyrillic" : "latin";
    var scope = document.querySelector("main") || document.body;
    translateNode(scope, to);
    try { localStorage.setItem(STORAGE_KEY, to); } catch(e){}
    var btn = document.getElementById("serbian-script-toggle");
    if (btn) btn.textContent = (to === "cyrillic") ? "Ћир" : "Latin";
    document.documentElement.setAttribute("data-serbian-script", to);
  }

  function createToggle(){
    var btn = document.createElement("button");
    btn.id = "serbian-script-toggle";
    btn.type = "button";
    btn.className = "serbian-script-toggle";
    btn.title = "Switch Serbian script";
    btn.addEventListener("click", function(){
      var next = (localStorage.getItem(STORAGE_KEY) === "cyrillic") ? "latin" : "cyrillic";
      applyPreference(next);
    });
    document.body.appendChild(btn);
    applyPreference(PREFERRED);
  }

  document.addEventListener("DOMContentLoaded", function(){
    createToggle();
  });
})();
