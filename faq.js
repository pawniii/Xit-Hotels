const faqs = document.querySelectorAll('.faq'); //We select all the .faq elements using document.querySelectorAll


faqs.forEach((faq) => {
  const question = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');
  const arrow = faq.querySelector('.arrow');
  answer.style.maxHeight = '0px';

  answer.style.transition = 'max-height 0.3s ease-in-out'; // Add this line

  question.addEventListener('click', () => {
    answer.classList.toggle('active');
    arrow.classList.toggle('active');

    if (answer.classList.contains('active')) {
      answer.style.maxHeight = '500px';
      arrow.style.transform = 'rotate(180deg)';
    } else {
      answer.style.maxHeight = '0px';
      arrow.style.transform = 'rotate(0deg)';
    }
  });
});









//   faqs.forEach((faq) => {
//     const question = faq.querySelector('.faq-question');
//     const answer = faq.querySelector('.faq-answer');
//     const line = faq.querySelector('.line');
//     const arrow = faq.querySelector('.arrow');
//   question.addEventListener('click', () => { //We add an event listener to the .faq-question element to toggle the FAQ answer and animate the arrow and line when clicked.
//     answer.classList.toggle('active');
//     line.classList.toggle('active');
//     arrow.classList.toggle('active');

// //When the FAQ answer is toggled, we add or remove the .active class to the .faq-answer, .line, and .arrow elements to display or hide the answer and animate the arrow and line.

//     if (answer.classList.contains('active')) {
//       answer.style.display = 'block';
//       line.style.marginBottom = '40px';
//       arrow.style.transform = 'rotate(180deg)';
//     } else {
//       answer.style.display = 'none';
//       line.style.marginBottom = '20px';
//       arrow.style.transform = 'rotate(0deg)';
//     }
//   });
// });