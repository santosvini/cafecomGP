function scrollSuave() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]')

  function  scrollSections(event) {
    event.preventDefault()

    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  links.forEach(link => {
    link.addEventListener('click', scrollSections)
  })
}
scrollSuave()

function accordion() {
  const accordionList = document.querySelectorAll('.accordion dt')
  const activeClass = 'ativo'

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccord() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }
    accordionList.forEach(item => {
      item.addEventListener('click', activeAccord)
    })
  }
}
accordion()

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
  const menu = document.getElementById('nav')
  menu.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)