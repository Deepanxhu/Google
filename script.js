let availableKeywords = [
    "HTML",
    "CSS",
    "Easy Tutorials",
    "Web desgining",
    "Where to learn coding online",
    "How to create a website",
    "Where to learn web designing online",
    "JavaScript important topics",
    "Fast Learning methods",
    "Best engineering College in Gurgaon",
    "What is the weather today?",
    "How to lose weight?",
    "Recipe for chocolate chip cookies",
    "Latest news updates",
    "How to learn a new language",
    "Symptoms of the common cold",
    "Best places to travel on a budget",
    "How to start a small business",
    "Famous quotes about life",
    "How to fix a leaking faucet",
    "Calories in a banana",
    "Steps to improve mental health",
    "How to invest in stocks",
    "Signs of dehydration",
    "How to tie a tie",
    "DIY home decor ideas",
    "Top 10 action movies",
    "How to change a car tire",
    "Healthy breakfast recipes",
    "Basic computer troubleshooting tips"
  ];
  
  const resultBox = document.querySelector(".result-box");
  const inputBox = document.getElementById("input-box");
  
  inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;

    if (input.length) {
      result = availableKeywords.filter((keyword) => {
       return keyword.toLowerCase().includes(input.toLowerCase());
      });
    //   console.log(result);
    }
    
    display(result);
    if(!result.length){
     resultBox.innerHTML = ' ';
    }
  };
  
  
  function display(result){
   const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
   });
  
   resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  }
  
  
  function selectInput(list){
   inputBox.value = list.innerHTML;
   resultBox.innerHTML =  " ";
  }
  
  // For Opening the POPUP Window

let popup = document.getElementById("popup");


function openPopup() {
  popup.classList.toggle('open-popup');
}

window.onclick = (event) =>{
  if(!event.target.matches('.imgMenu')){
    if(popup.classList.contains('open-popup')){
      popup.classList.remove('open-popup')
    }
  }
}

popup.addEventListener('click',event => event.stopPropagation())