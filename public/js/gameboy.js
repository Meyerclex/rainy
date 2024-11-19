window.addEventListener("DOMContentLoaded", () => {
  const dashboard = document.querySelector(".dashboard");
  const profile = document.querySelector(".profile");
  const scheduleTable = document.querySelector(".schedule-table");
  const exerciseTable = document.querySelector(".exercise-table");
  const calories = document.querySelector(".calories");
  const personalBests = document.querySelector(".personal-bests");
  const challenges = document.querySelector(".challenges");
  const activityFeed = document.querySelector(".activity-feed");

  const buttonUp = document.querySelector("button.top");
  const buttonDown = document.querySelector("button.bottom");
  const buttonLeft = document.querySelector("button.left");
  const buttonRight = document.querySelector("button.right");
  const buttonB = document.querySelector("button.b-but");
  const buttonA = document.querySelector("button.a-but");

  const allTitles = document.querySelectorAll("h2");

  const titlesContainer = document.createElement("div");
  titlesContainer.classList.add("titles-container");

  allTitles.forEach((title, index) => {
    if (index === 0) return;
    const spanElement = document.createElement("span");
    spanElement.innerText = title.innerText;
    spanElement.id = title.parentElement.className;
    if (index === 1) spanElement.classList.add("active");
    titlesContainer.appendChild(spanElement);
  });

  dashboard.appendChild(titlesContainer);

  const arrows = document.querySelectorAll(".arrow");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      if (profile.style.display !== "none") {
        profile.style.display = "none";
        titlesContainer.style.display = "flex";
        return;
      }
      if (titlesContainer.style.display === "none") return;
      if (arrow.classList.contains("top")) selectPreviousElementInMenu();
      else if (arrow.classList.contains("bottom")) selectNextElementInMenu();
    });
  });

  buttonA.addEventListener("click", () => {
    if (profile.style.display !== "none") {
      profile.style.display = "none";
      titlesContainer.style.display = "flex";
      return;
    }
    if (titlesContainer.style.display !== "none") {
      const activeMenuItem = document.querySelector("span.active");
      const activeSectionClassName = activeMenuItem.id;
      const activeSection = document.querySelector(
        `.${activeSectionClassName}`
      );
      titlesContainer.style.display = "none";
      activeSection.style.display = "flex";
      
      // 如果选择了EnterSites并点击A按钮，跳转到/welcome页面
      if (activeSectionClassName === "calories") {
        window.location.href = "/welcome";
      }
    }
  });
  
  buttonB.addEventListener("click", () => {
    if (profile.style.display !== "none") {
      profile.style.display = "none";
      titlesContainer.style.display = "flex";
      return;
    }
    if (titlesContainer.style.display === "none") {
      titlesContainer.style.display = "flex";
      const activeMenuItem = document.querySelector("span.active");
      const activeSectionClassName = activeMenuItem.id;
      const activeSection = document.querySelector(
        `.${activeSectionClassName}`
      );
      activeSection.style.display = "none";
    }
  });
});

function selectNextElementInMenu() {
  const element = document.querySelector("span.active");
  const nextElement = element.nextElementSibling;
  if (nextElement) {
    element.classList.remove("active");
    nextElement.classList.add("active");
  }
}

function selectPreviousElementInMenu() {
  const element = document.querySelector("span.active");
  const previousElement = element.previousElementSibling;
  if (previousElement) {
    element.classList.remove("active");
    previousElement.classList.add("active");
  }
}
