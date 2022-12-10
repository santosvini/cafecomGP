function scrollSuave() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSections(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  links.forEach((link) => {
    link.addEventListener("click", scrollSections);
  });
}

function accordion() {
  
  const accordionList = document.querySelectorAll(".accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.contains(activeClass);
    accordionList[0].nextElementSibling.classList.contains(activeClass);

    function activeAccord() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
      
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccord);
    });
  }
}

function menuShow() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    const menu = document.getElementById("nav");
    menu.classList.toggle("active");

    const active = menu.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);

    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }
  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}

function animateScrooll() {
  const section = document.querySelectorAll(".section")
  if (section.length > 0) {
    const windowMetade = window.innerHeight * 0.6

    function animaScrooll() {
      section.forEach((section) => {
        const top = section.getBoundingClientRect().top
        const sectionVisible = (top - windowMetade) < 0
        if (sectionVisible) 
        section.classList.add('visible')
        else
        section.classList.remove('visible')
      })
    }
    animaScrooll()

    window.addEventListener('scroll', animaScrooll)
  }
}

scrollSuave();
accordion();
menuShow();
animateScrooll()
