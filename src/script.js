(function () {
  "use strict";

  /* ---------- Tema Claro / Escuro ---------- */
  var root = document.body;
  var toggle = document.getElementById("themeToggle");
  var STORAGE_KEY = "site-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }

  function getPreferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  applyTheme(getPreferredTheme());

  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ---------- Animação de Digitação no Terminal ---------- */
  var body = document.getElementById("terminalBody");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var lines = [
    { type: "cmd", text: "whoami" },
    { type: "out", text: "gustavo" },
    { type: "cmd", text: "cat tech_stack.txt" },
    { type: "out", text: "nodejs typescript docker postgresql" },
  ];

  function renderStatic() {
    var html = "";
    lines.forEach(function (line) {
      if (line.type === "cmd") {
        html += '<div class="tline"><span class="prompt">$</span> ' + line.text + "</div>";
      } else {
        html += '<div class="tresult">' + line.text.replace(/\n/g, "<br>") + "</div>";
      }
    });
    body.innerHTML = html;
  }

  function typeSequence() {
    var i = 0;

    function nextLine() {
      if (i >= lines.length) return;
      var line = lines[i];
      var el = document.createElement("div");
      el.className = line.type === "cmd" ? "tline" : "tresult";

      if (line.type === "cmd") {
        var prompt = document.createElement("span");
        prompt.className = "prompt";
        prompt.textContent = "$ ";
        el.appendChild(prompt);
      }

      var textSpan = document.createElement("span");
      el.appendChild(textSpan);

      var cursor = document.createElement("span");
      cursor.className = "cursor";
      el.appendChild(cursor);

      body.appendChild(el);

      var chars = line.text.split("");
      var c = 0;
      var speed = line.type === "cmd" ? 42 : 12;

      (function typeChar() {
        if (c < chars.length) {
          textSpan.textContent += chars[c];
          if (chars[c] === "\n") {
            textSpan.innerHTML = textSpan.innerHTML.replace(/\n$/, "<br>");
          }
          c++;
          setTimeout(typeChar, speed);
        } else {
          cursor.remove();
          i++;
          setTimeout(nextLine, line.type === "cmd" ? 260 : 380);
        }
      })();
    }

    nextLine();
  }

  if (reduceMotion) {
    renderStatic();
  } else {
    typeSequence();
  }
})();
