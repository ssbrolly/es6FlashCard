 // Takes that array 
  // loops through 
  // creates a new card for each 
  //     item in the array
  //    populates #card w/ each item 
  // using #question and # answer 


  let arr = [
    { question: "This is the first question", answer: "this is the first answer" },
    { question: "This is the second question", answer: "this is the second answer" },
    { question: "This is the third question", answer: "this is the third answer" },
    { question: "This is the fourth question", answer: "this is the fourth answer" },
    { question: "This is the fifth question", answer: "this is the fifth answer" },
  ];
  
  
  
  const div = (apple, zebra, id) =>
    `<div class='col s12 m6 l6' id="${id}">
        <div class="card">
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Question<i class="material-icons right">more_vert</i></span>
            <p id='question'>${apple}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Answer<i class="material-icons right">close</i></span>
            <p id='answer'>${zebra}</p>
          </div>
          <div class="card-action">
            <button class="edit waves-effect waves-light btn light-blue accent-3" id="${id}">Edit</button>
            <button class="delete waves-effect waves-light btn red accent-4" id="${id}">Delete</button>
          </div>
        </div>
      </div>`
  
  const cards = (Arr) => {
     $('#gridMofo').empty()
    Arr.map( (item, i) => {
      let box = div(item.question, item.answer, i)
      $('#gridMofo').append(box)
    })
  }
  
  const addCard = (q, a) => {
    let hash = {question: q, answer: a}
    arr = [hash, ...arr] 
    cards(arr)
  }
  
  const deleteCard = (i) => {
    let item = arr.splice(i,1)
    arr = [...arr]
    cards(arr)
  }
  
  const editCard = (i) => {
    let item = arr[i]
    $('#q_input').val(item.question) 
    $("#a_input").val(item.answer) 
    arr = [item, ...arr]
    submitForm() 
  }
  
  const submitForm = () => {
    $(document).on("click", "#submit", function() {
      let q = this.form.children[0].children[0].children[0].value;
      let a = this.form.children[0].children[1].children[0].value;
      addCard(q, a);
    });
  }
  
  $(document).ready( function() {
    cards(arr)
    $('#submit').on('click', function(){
      let q = this.form.children[0].children[0].children[0].value;
      let a = this.form.children[0].children[1].children[0].value;
      addCard(q,a) 
    })
  
    $(document).on('click', '.delete', function() {
      deleteCard(parseInt(this.id)) 
    })
    
    $(document).on("click", ".edit", function() {
        editCard(parseInt(this.id)); 
     })
  })