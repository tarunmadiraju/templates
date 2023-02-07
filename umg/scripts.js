document.addEventListener('DOMContentLoaded', () => {

  const animationElement = document.querySelector('.animation-element')
  animationElement.addEventListener('click', () => {
    document.body.classList.toggle('animate')
  })

})