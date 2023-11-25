"use strict";

// const slider = document.querySelector("#scale");
const quoteBtn = document.querySelector(".quote-btn")
const quoteEl = document.querySelector("#quote")
const authorEl = document.querySelector("#author")
const ratingEl = document.querySelectorAll('.icon')
const toggles = document.querySelectorAll('.help-toggle');
const placeholderRange = document.querySelector('.placeholder-range')
const placeholderText = document.querySelector('.placeholder-text')
const feedbackContainer = document.querySelector('.feedback-container')
// slider.addEventListener('input', (e) => {
//   console.log(e)
// })



const url = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';
  
async function dailyQuote(){
  const config = {
    method: 'GET',
	headers:{
		'X-API-Key': 'Y/i8KnY9WplAFqam41sIug==tQgNWxwVWYZ44SBs',
		
	},
    // contentType: 'application/json',
    // Accept: 'application/json',
  };
  const response = await fetch(url , config);
    
  const jsonData = await response.json();
  console.log(jsonData[0].quote);

  quoteEl.innerText = jsonData[0].quote;
  authorEl.innerText = jsonData[0].author;
 }
 
 quoteBtn.addEventListener('click', dailyQuote)
 quoteBtn.addEventListener('click', ()=>{
   console.log('IN')
 })

dailyQuote()



toggles.forEach((toggle) =>
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  })
);

const painScale = [
  {
    Range: 'MILD',
    text: `Everything is A-Okay! There is absolutely nothing wrong. You're probably cuddling a fluffy kitten right now. Enjoy!`,
  },
  {
    Range: 'MILD',
    text: `You're a bit frustrated or disappointed, but you're easily distracted and cheered up with little effort.`,
  },
  {
    Range: 'MILD',
    text: `Things are bothering you, but you are coping. You might be overtired or hungry. The emotional equivalent of a headache.`,
  },
  {
    Range: 'MODERATE',
    text: `Today is a bad day (or a few bad days). You still have the skills to get through it, but be gentle with yourself. Use self-care strategies.`,
  },
  {
    Range: 'MODERATE',
    text: `Your mental health is starting to impact on your everyday life. Easy things are becoming difficult. You should talk to your doctor.`,
  },
  {
    Range: 'MODERATE',
    text: `You can't do things the way you usually do them due to your mental health. Impulsive and compulsive thoughts may be hard to cope with.`,
  },
  {
    Range: 'SEVERE',
    text: `You're avoiding things that make you more distressed, but that will make it worse. You should definitely seek help. This serious.`,
  },
  {
    Range: 'SEVERE',
    text: `You can't hide your struggle anymore. You may have issues sleeping, eating, having fun, socialising, and work/study. Your mental health is affecting almost all parts of your life.`,
  },
  {
    Range: 'SEVERE',
    text: `You're at a critical point. You aren't functioning anymore. You may be a risk to yourself or others if left untreated.`,
  },
  {
    Range: 'SEVERE',
    text: `The worst mental and emotional distress possible. You can no longer care for yourself. You can't imagine things getting any worse. Contact a crisis line immediately`,
  },
];



ratingEl.forEach((rate, i) =>
  rate.addEventListener('click', () => {
    placeholderText.innerHTML = `${painScale[i].text}`;
    placeholderRange.innerHTML = `${painScale[i].Range}`;
  
  if (painScale[i].Range === 'MILD') {
      feedbackContainer.style.backgroundColor = '#A1F009';
    } else if (painScale[i].Range === 'MODERATE') {
      feedbackContainer.style.backgroundColor = '#F3C303';
    } else if (painScale[i].Range === 'SEVERE') {
      feedbackContainer.style.backgroundColor = '#F74802';
     
    } else {
      feedbackContainer.style.backgroundColor = 'initial';
    }
    feedbackContainer.style.borderRadius = '8px';
    feedbackContainer.style.boxShadow = '0 3px 6px #4142448d, 0 3px 6px #4142448d';
    feedbackContainer.style.padding= '3rem';
  feedbackContainer.style.marginBottom = '3rem';
  
  })             
);
