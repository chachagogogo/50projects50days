const panels = document.querySelectorAll('.panel');

const removeActiveClasses = () => {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
};

console.log(panels[0].classList);
console.log(panels[1].classList);

panels.forEach((panel, i) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
