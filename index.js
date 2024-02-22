// Part 1
let mainEl = document.querySelector("main");
console.log(mainEl);

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList = "flex-ctr";

// Part 2
let topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList = "flex-around";

// Part 3
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((link) => {
  let anchor = document.createElement("a");
  anchor.innerText = link.text;
  anchor.href = link.href;
  topMenuEl.appendChild(anchor);
});
