import "./styles.css";
import {
  BadgeInfo,
  Blocks,
  Columns3,
  createIcons,
  Grid2X2,
  Grid3X3,
  LayoutGrid,
  LayoutTemplate,
  Menu,
  MonitorSmartphone,
  PanelLeft,
  Smartphone,
  SquarePlay,
  Tablet,
  Type,
  X,
} from "lucide";

const iconSet = {
  BadgeInfo,
  Blocks,
  Columns3,
  Grid2X2,
  Grid3X3,
  LayoutGrid,
  LayoutTemplate,
  Menu,
  MonitorSmartphone,
  PanelLeft,
  Smartphone,
  SquarePlay,
  Tablet,
  Type,
  X,
};

createIcons({ icons: iconSet });

const menuButton = document.querySelector("[data-menu-button]");
const menuIcon = document.querySelector("[data-menu-icon]");
const sidebar = document.querySelector("[data-sidebar]");
const screens = document.querySelectorAll("[data-screen]");

const showScreen = (screenId) => {
  screens.forEach((screen) => {
    screen.classList.toggle("hidden", screen.id !== screenId);
  });
};

menuButton?.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "메뉴 열기" : "메뉴 닫기");
  sidebar?.classList.toggle("hidden", isExpanded);

  if (menuIcon) {
    menuIcon.setAttribute("data-lucide", isExpanded ? "menu" : "x");
    createIcons({ icons: iconSet });
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const screenId = link.getAttribute("href")?.replace("#", "");

    if (screenId) {
      showScreen(screenId);
      window.history.pushState(null, "", `#${screenId}`);
    }

    document.querySelectorAll(".nav-link").forEach((item) => {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    });

    link.classList.add("active");
    link.setAttribute("aria-current", "page");

    if (window.matchMedia("(max-width: 767px)").matches) {
      sidebar?.classList.add("hidden");
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "메뉴 열기");

      if (menuIcon) {
        menuIcon.setAttribute("data-lucide", "menu");
        createIcons({ icons: iconSet });
      }
    }
  });
});

const initialScreen = window.location.hash.replace("#", "") || "responsive-grid";
const initialLink = document.querySelector(`.nav-link[href="#${initialScreen}"]`);

if (initialLink) {
  showScreen(initialScreen);

  document.querySelectorAll(".nav-link").forEach((item) => {
    item.classList.toggle("active", item === initialLink);

    if (item === initialLink) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("popstate", () => {
  const screenId = window.location.hash.replace("#", "") || "responsive-grid";
  const activeLink = document.querySelector(`.nav-link[href="#${screenId}"]`);

  if (!activeLink) {
    return;
  }

  showScreen(screenId);

  document.querySelectorAll(".nav-link").forEach((item) => {
    item.classList.toggle("active", item === activeLink);

    if (item === activeLink) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });
});
