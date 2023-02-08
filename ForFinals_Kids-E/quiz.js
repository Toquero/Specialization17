const Questions = [{
    id: 0,
    q: "How many legs does a spider have?",
    a: [{ text: "four", isCorrect: false },
        { text: "six", isCorrect: false },
        { text: "eight", isCorrect: true },
        { text: "three", isCorrect: false }
    ]

  },
  {
    id: 1,
    q: "What’s the name of a place you go to see lots of animals?",
    a: [{ text: "Sea", isCorrect: false, isSelected: false },
        { text: "Garden", isCorrect: false },
        { text: "Market", isCorrect: false },
        { text: "Zoo", isCorrect: true }
    ]
  
  },
  {
    id: 2,
    q: "What do bees make?",
    a: [{ text: "chick", isCorrect: false },
        { text: "Baby", isCorrect: false },
        { text: "Honey", isCorrect: true },
        { text: "Eggs", isCorrect: false }
    ]
  },
  {
    id: 3,
    q: "In the nursery rhyme, Jack and Jill, what do Jack and Jill go up the hill to fetch?",
    a: [{ text: "Fish", isCorrect: false },
        { text: "vegetables", isCorrect: false },
        { text: "Water", isCorrect: true },
        { text: "Fruits", isCorrect: false }
    ]
},
{
  id: 4,
  q: "Old MacDonald had a farm. E-I-E-I-O! And on his farm he had a cow. Which of the following sounds did his cow make?",
  a: [{ text: "Oink!", isCorrect: false },
      { text: "Quack!", isCorrect: false },
      { text: " Moo!", isCorrect: true },
      { text: "Neigh!", isCorrect: false }
  ]

},
{
  id: 5,
  q: "Which Disney movie is Elsa in?",
  a: [{ text: "Cinderilla", isCorrect: false },
      { text: "Barbie", isCorrect: false },
      { text: "Tnker Bell", isCorrect: false },
      { text: " Frozen", isCorrect: true }
  ]

},
{
  id: 6,
  q: "What are the names of Cinderella’s stepsisters?",
  a: [{ text: "Anna and Elsa", isCorrect: false },
      { text: "Rosa and Leah", isCorrect: false },
      { text: " Anastasia and Drizella", isCorrect: true },
      { text: "Mia and Riya", isCorrect: false }
  ]

},
{
  id: 7,
  q: "How many colors are in a rainbow?",
  a: [ { text: " Seven", isCorrect: true },
       { text: "Four", isCorrect: false },
      { text: "Three", isCorrect: false },
      { text: "Five", isCorrect: false }
  ]

},
{
  id: 8,
  q: "Which animal is the tallest in the world?",
  a: [{ text: "Pig", isCorrect: false },
      { text: "Cow", isCorrect: false },
      { text: "Giraffe ", isCorrect: true },
      { text: "Monkey", isCorrect: false }
  ]

},
{
  id: 9,
  q: "How many sides does a triangle have?",
  a: [{ text: "Four", isCorrect: false },
      { text: " Three", isCorrect: true },
      { text: "Ten", isCorrect: false },
      { text: "One", isCorrect: false }
  ]

},
{
  id: 10,
  q: "What is the name of Sleeping Beauty’s Prince?",
  a: [{ text: "Prince Chris", isCorrect: false },
      { text: "Prince Arthur", isCorrect: false },
      { text: "Prince Leo", isCorrect: false },
      { text: " Prince Phillip", isCorrect: true }
      
  ]
  }
  ]
  
  // Set start
  var start = true;
  
  // Iterate
  function iterate(id) {
  
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";
  
  // Getting the question
  const question = document.getElementById("question");
  
  
  // Setting the question text
  question.innerText = Questions[id].q;
  
  // Getting the options
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');
  
  
  // Providing option text 
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;
  
  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;
  
  var selected = "";
  
  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(22, 7, 245)";
    op2.style.backgroundColor = "pink";
    op3.style.backgroundColor = "pink";
    op4.style.backgroundColor = "pink";
    selected = op1.value;
  })
  
  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "pink";
    op2.style.backgroundColor = "rgb(22, 7, 245)";
    op3.style.backgroundColor = "pink";
    op4.style.backgroundColor = "pink";
    selected = op2.value;
  })
  
  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "pink";
    op2.style.backgroundColor = "pink";
    op3.style.backgroundColor = "rgb(22, 7, 245)";
    op4.style.backgroundColor = "pink";
    selected = op3.value;
  })
  
  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "pink";
    op2.style.backgroundColor = "pink";
    op3.style.backgroundColor = "pink";
    op4.style.backgroundColor = "rgb(22, 7, 245)";
    selected = op4.value;
  })
  
  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");
  
  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct! Bravo";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Incorrect! Keep Working";
        result[0].style.color = "red";
    }
  })
  }
  
  if (start) {
  iterate("0");
  }
  
  // Next button and method
  const next = document.getElementsByClassName('next')[0];
  var id = 0;
  
  next.addEventListener("click", () => {
  start = false;
  if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
  }
  
  })
  
  // Next button and method
  const prev = document.getElementsByClassName('previous')[0];
  var id = 0;
  
  prev.addEventListener("click", () => {
  start = false;
  if (id <= 10) {
    id--;
    iterate(id);
    console.log(id);
  }
  
  })
  
  