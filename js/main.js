// 스크롤 시 헤더 스타일 변경
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

//스크롤 시 Home 섹션 점점 투명하게 + TOP 버튼 나타나기
const home = document.querySelector("#home");
const homeHeight = home.offsetHeight;

const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  // home 투명도
  home.style.opacity = 1 - window.scrollY / homeHeight;

  // 탑버튼 보이기
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// 메뉴 클릭 시 부드럽게 이동 (smooth scroll)
const menuItems = document.querySelectorAll(".header__menu__item");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const id = item.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//  프로젝트 필터 기능 (ALL / Front / Back / Mobile)
const categories = document.querySelector(".categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  if (filter == null) return;

  // 버튼 활성화 스타일 업데이트
  document.querySelectorAll(".category").forEach((btn) => {
    btn.classList.remove("category--selected");
  });
  e.target.classList.add("category--selected");

  // 필터 적용
  filterProjects(filter);
});

function filterProjects(filter) {
  projects.forEach((project) => {
    const type = project.dataset.type;
    if (filter === "all" || filter === type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  // 애니메이션
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 300);
}

// TOP 버튼 클릭 시 맨 위로 부드럽게 이동
arrowUp.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 섹션 애니메이션 (스크롤 시 슬라이드/페이드 인)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".section").forEach((sec) => observer.observe(sec));

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  if (filter == null) return;

  // 버튼 활성화 스타일 업데이트
  document.querySelectorAll(".category").forEach((btn) => {
    btn.classList.remove("category--selected");
  });
  e.target.classList.add("category--selected");

  // 필터 적용
  filterProjects(filter);
});

function filterProjects(filter) {
  projects.forEach((project) => {
    const type = project.dataset.type;
    if (filter === "all" || filter === type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  // 애니메이션
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 300);
}

