// SCROLL PROGRESS
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  document.querySelector(".progress-bar").style.width = (scroll / height) * 100 + "%";
});

// REVEAL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// COUNTER
document.querySelectorAll(".counter").forEach(counter => {
  let count = 0;
  let target = counter.innerText;
  let interval = setInterval(() => {
    count++;
    counter.innerText = count;
    if (count >= target) clearInterval(interval);
  }, 10);
});

// FILTER
function filterMenu(type) {
  document.querySelectorAll(".item").forEach(item => {
    item.style.display = (type === "all" || item.classList.contains(type)) ? "block" : "none";
  });
}

// FORM
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message Sent!");
});
