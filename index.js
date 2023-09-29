let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

GitHubCalendar(".calendar", "Mahendra-mohane", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

document.getElementById("resume-link-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1PygiTl_pNZV9hhyXPc9YOAz_5QkBzRLm/view?usp=sharing"
  );
};


document.getElementById("resume-link-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1PygiTl_pNZV9hhyXPc9YOAz_5QkBzRLm/view"
  );
};
