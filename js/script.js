

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function(){
      menu.classList.toggle('active')
}

// for navbar
// menu
const menuli = document.querySelectorAll('.menu li');
menuli.forEach((item)=>{
item.addEventListener('click',()=>{
    menuli.forEach((item)=>{
        item.classList.remove('active');
    })
    item.classList.add('active');})
});

const description = document.getElementById("description");
const about_me = document.getElementById("about_me");
const contact_me = document.getElementById("contact_me");

const home_link = document.getElementById("home_link").addEventListener('click', () => {
    description.classList.add('active_section')
    description.classList.remove('hide_section')
    about_me.classList.remove('active_section')
    about_me.classList.add('hide_section')
    contact_me.classList.remove('active_section')
    contact_me.classList.add('hide_section')
} );

const user_link = document.getElementById("user_link").addEventListener('click', () => {
    description.classList.remove('active_section')
    description.classList.add('hide_section')
    about_me.classList.add('active_section')
    about_me.classList.remove('hide_section')
    contact_me.classList.add('hide_section')
    contact_me.classList.remove('active_section')
} );

const contact_link = document.getElementById("contact_link").addEventListener('click', () => {
    description.classList.remove('active_section')
    description.classList.add('hide_section')
    about_me.classList.remove('active_section')
    about_me.classList.add('hide_section')
    contact_me.classList.remove('hide_section')
    contact_me.classList.add('active_section')
} );




// changing sentence

let sentences = [
      "Web Designer",
      "Web Developer",
      "Graphics Designer"
];

let colors = ['#01FE55', '#B4FE6B', '#FE0909'];

function changeSentence() {
  let sentenceIndex = Math.floor(Math.random() * sentences.length);
  let colorIndex = Math.floor(Math.random() * colors.length);

  let changingSentence = document.getElementById("status");

  changingSentence.style.opacity = 0; 

  setTimeout(function () {
    changingSentence.innerHTML = sentences[sentenceIndex];
    changingSentence.style.color = colors[colorIndex];
    changingSentence.style.opacity = 1; // Set opacity to 1 for fade-in effect
  }, 500); // Delay in milliseconds 
}
setInterval(changeSentence, 2000);



// ratings
const ratings = document.getElementsByClassName('rating');

const NumberCounter = (counter, target) => {
    const value = +counter.innerText;
    if (value < target) {
        counter.innerText = Math.min(value + 1, target);
        requestAnimationFrame(() => NumberCounter(counter, target));
    }
};

for (let j = 0; j < ratings.length; j++) {
    const rating = ratings[j];
    const counter = rating.querySelector('.counter');

    counter.innerText = 0;
    const target = +counter.getAttribute('data-target');

    // Create fewer block elements (e.g., 36 instead of 100)
    for (let i = 1; i <= 36; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        rating.appendChild(block);

        // Use CSS transforms instead of setting it through JavaScript
        block.style.transform = `rotate(${10 * i}deg)`;
        block.style.animationDelay = `${(i / 20)}s`;
    }

    NumberCounter(counter, target);
}

ratings.forEach((rating, index)=> {
    const blocks = rating.querySelectorAll('.block');
    const numBlocks = blocks.length;

    // Add a unique class based on the number of blocks
    rating.classList.add(`rating-${numBlocks}`);
});





