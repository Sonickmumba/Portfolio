const menu = document.querySelector(".menu");

const navlist = document.querySelector(".nav-list");

// ............ Adding click event to the hamburger.........................

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  navlist.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("active");

    navlist.classList.remove("active");
  })
);

// ............Adding event to close icon on menu.............................
document.querySelector(".close-icon").addEventListener("click", () => {
  menu.classList.remove("active");

  navlist.classList.remove("active");
});

// ...........Popup menu for harmburger........................................
const allprojects = document.querySelector(".all-projects");

// Array of Objects with projects area properties
const portfolioObjects = [
  {
    projectTitle: "project1",
    projectTitleDesktop: "LeaderBoard",
    tags: ["HTML", "Webpack", "Es6", "API"],
    description:
      // "Allows users to engage with TV show info via an external API.Users can like shows & leave comments.It uses an involvement API to save data",
      "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.",
    liveUrl: "https://sonickmumba.github.io/Leaderboard/",
    sourceUrl: "https://github.com/Sonickmumba/Leaderboard",
    image: "./images/projects/lide.png",
  },

  {
    projectTitle: "project2",
    projectTitleDesktop: "Meal App",
    tags: ["Html", "CSS", "JavaScript", "Linter"],
    description:
      "Web application based on an external API. We selected an API that provides data about Meals. One is able to like and comment on a meal.",
    liveUrl: "https://megha-n-bodke.github.io/CapstoneProject2/dist/",
    sourceUrl: "https://github.com/Sonickmumba/CapstoneProject2",
    image: "./images/projects/dtk2.png",
  },

  {
    projectTitle: "project3",
    projectTitleDesktop: "Awesome Books app",
    tags: ["CSS", "HTML", "ES6", "React"],
    description:
      "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list.",
    liveUrl: "https://sonickmumba.github.io/Awesome-Books-ES6/",
    sourceUrl: "https://github.com/Sonickmumba/Awesome-Books-ES6",
    image: "./images/projects/awes.png",
  },
  {
    projectTitle: "project4",
    projectTitleDesktop: "Vespa Cars Rental",
    tags: ["HTML", "CSS", "Ruby", "React"],
    description:
      "Vesper application for all lovers of cars. Let your car make money for you by listing it on our platform so others can view and rent.",
    liveUrl: "https://vesper-4yj8.onrender.com/",
    sourceUrl: "https://github.com/Sonickmumba/vesper-frontend",
    image: "./images/projects/do.jpg",
  },

  {
    projectTitle: "project5",
    projectTitleDesktop: "Online Math Calculator",
    tags: ["HTML", "CSS", "Es6", "React"],
    description:
      "Single Page App for math calculations & reading random math related quotes, offering quick access to simple tools and resources",
    liveUrl: "https://dancing-conkies-c08f95.netlify.app/",
    sourceUrl: "https://github.com/Sonickmumba/math-magicians",
    image: "./images/projects/math.png",
  },
  {
    projectTitle: "project6",
    projectTitleDesktop: "ZAMSA-Seminar-Website",
    tags: ["HTML", "CSS", "Es6", "JavaScript"],
    description:
      "Zambia Mathematics Association Conference website with info on dates, speakers, tickets, location. Impact of Mathematics in a society.",
    liveUrl: "https://sonickmumba.github.io/Capstone-Project-1/",
    sourceUrl: "https://github.com/Sonickmumba/Capstone-Project-1",
    image: "./images/projects/mobile-version.png",
  },
];

// .........Adding projects section to the html file..................................
const modal = () => {
  let cardportfolioObjects = "";

  for (
    let projectsIndex = 0;
    projectsIndex < portfolioObjects.length;
    projectsIndex += 1
  ) {
    const card = `
          
            <article id="${portfolioObjects[projectsIndex].projectTitle}" class="project-container">

                <img class="project-image" src="${portfolioObjects[projectsIndex].image}" alt="project placeholder image">
                </img>

                <div class="description layer">
                    <h3 class="project-title">${portfolioObjects[projectsIndex].projectTitleDesktop}
                    </h3>
                    <p class="project-infor">${portfolioObjects[projectsIndex].description}</p>
                    <ul class="used-tools">
                        <li class="project-list">
                            ${portfolioObjects[projectsIndex].tags[0]}
                        </li>
                        <li class="project-list">
                            ${portfolioObjects[projectsIndex].tags[1]}
                        </li>
                        <li class="project-list">
                            ${portfolioObjects[projectsIndex].tags[2]}
                        </li>               
                        <li class="project-list">
                            ${portfolioObjects[projectsIndex].tags[3]}
                        </li>  
                    </ul>
                    <div class="proj-btns">
                      <button type="button" class="button "><a href="${portfolioObjects[projectsIndex].liveUrl}" target="_blank">Live Preview</a></button>
                      <button type="button" class="button SeeSource"><a href="${portfolioObjects[projectsIndex].sourceUrl}" target="_blank">Source Code</a></button>
                    </div>
             
                
                </div>
            </article>`;
    cardportfolioObjects += card;
  }
  allprojects.innerHTML = cardportfolioObjects;
};
modal();

// ...............MODAL POPUP for see project button....................
const open = document.querySelectorAll(".see-prj");

open.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const modalpopup = document.querySelector(".modalpopup");

    modalpopup.innerHTML = `
             <article id="popup" class="modal-article">
 
              <h3 class="modal-title">
                  ${portfolioObjects[index].projectTitleDesktop}
                  <img src="./images/close.png" class="close-icon close2" id="close2">
   
              </h3>
 
              <img
                class="modal-image"
                src="${portfolioObjects[index].image}"
                alt="project placeholder image"
              ></img>
              <div class="modal-description">
 
                
                <p class="modal-infor">${portfolioObjects[index].description}</p>
 
                <ul class="modal-tools used-tools">
                
                        <li class="project-list">
                            ${portfolioObjects[index].tags[0]}
                        </li>
                        <li class="project-list">
                            ${portfolioObjects[index].tags[1]}
                        </li>
                        <li class="project-list">
                            ${portfolioObjects[index].tags[2]}
                        </li>               
                        <li class="project-list">
                            ${portfolioObjects[index].tags[3]}
                        </li>  
                    
                  </ul>
 
                <div class="modal-buttons">
 
                <button type="button" class="button ">
                  <a href="${portfolioObjects[index].liveUrl}" target="_blank">See Live</a>
                </button>
                
                <button type="button" class="button SeeSource">
                   <a href="${portfolioObjects[index].sourceUrl}" target="_blank">See Source</a>
                </button>
                </div>
              </div>
          </article>
    
      `;

    allprojects.appendChild(modalpopup);

    // close icon
    const close = document.querySelector("#close2");

    close.addEventListener("click", () => {
      modalpopup.innerHTML = "";
    });
  });
});

// .................... Contact validation form...................
const contactForm = document.getElementById("contact_form").reset();
const email = document.getElementById("email");
const errorMsg = document.getElementById("error_message");

// Checking for any non alphabetic numbers
const checkLowerCase = (email) => {
  const validateLowerCase = /[A-Z]/g;

  if (validateLowerCase.test(email)) {
    return false;
  }
  return true;
};

// Submitting client data after correct validation with no errors

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkLowerCase(email.value.trim())) {
    contactForm.submit();
    errorMsg.style.display = "none";
    email.className = "email";
    
    document.getElementById("contact_form").reset();
    // Display error message for invalid email
  } else {
    errorMsg.style.display = "block";
    email.className = "error";
  }
});

// .................Preserving data using local storage........

let clientName = document.getElementById("name");
let clientEmail = document.getElementById("email");
let message = document.getElementById("textarea");

// Adding listner for event handling
contactForm.addEventListener("input", () => {
  localStorage.setItem("Name", `${clientName.value}`);
  localStorage.setItem("Email", `${clientEmail.value}`);
  localStorage.setItem("TextArea", `${message.value}`);
});
// get values from local storage
clientName.value = localStorage.getItem("Name");
clientEmail.value = localStorage.getItem("Email");
message.value = localStorage.getItem("TextArea");
// ....................

const boxes = document.querySelectorAll('.box') 
window.addEventListener('scroll',checkBoxes);
 console.log(checkBoxes());

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}