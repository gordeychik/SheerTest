const tabs = document.querySelectorAll(".services__tab");
const tabContents = document.querySelectorAll(".services__content");

function hideAllTabContents() {
  tabContents.forEach((content) => {
    content.style.display = "none";
  });
}

function showTabContent(index) {
  hideAllTabContents();
  tabContents[index].style.display = "block";
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("tab--active");
    });

    tab.classList.add("tab--active");
    showTabContent(index);
  });
});

showTabContent(1);