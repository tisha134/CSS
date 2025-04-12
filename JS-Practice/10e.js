
function toggleButton (selector)
{
  const button = document.querySelector(selector);
  if(!button.classList.contains('is-toggled'))
  {
    checkButton();
    button.classList.add('is-toggled');
  } else
  {
    button.classList.remove('is-toggled');
  }
}

function checkButton ()
{
  const previousBtn = document.querySelector('.is-toggled');
  if(previousBtn)
  {
    previousBtn.classList.remove('is-toggled');
  }
}