const counter = document.querySelector("#counter");
const minusBtn = document.querySelector("button#minus");
const plusBtn = document.querySelector("button#plus");
const heartBtn = document.querySelector("button#heart");
const likesList = document.querySelector(".likes");
const buttons = document.querySelectorAll("button:not(#pause)");
const pauseBtn = document.querySelector("button#pause");
const commentForm = document.querySelector("#comment-form");
const commentsDiv = document.querySelector(".comments");

let count = 0;
let likesCount = {};
let isPaused = false;


heartBtn.addEventListener("click", () => {
    if (likesCount[count]) {
      likesCount[count]++;
      const li = likesList.querySelector(`li[data-count="${count}"]`);
      li.textContent = `${count} was liked ${likesCount[count]} times`;
    } else {
      likesCount[count] = 1;
      const li = document.createElement("li");
      li.setAttribute("data-count", count);
      li.textContent = `${count} was liked ${likesCount[count]} times`;
      likesList.appendChild(li);
    }
  });

pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    if (isPaused) {
      clearInterval(timerInterval);
      buttons.forEach(btn => btn.disabled = true);
      pauseBtn.textContent = "resume";
    } else {
      timerInterval = setInterval(() => {
        count++;
        counter.textContent = count;
      }, 1000);
      buttons.forEach(btn => btn.disabled = false);
      pauseBtn.textContent = "pause";
    }
  });

  let timerInterval = setInterval(() => {
    count++;
    counter.textContent = count;
  }, 1000);

minusBtn.addEventListener("click", () => {
    count--;
    counter.textContent = count;
  });

plusBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  })

commentForm.addEventListener("submit", event => {
    event.preventDefault();
    
    const commentInput = document.querySelector("#comment-input");
    const comment = commentInput.value;
    
    const commentP = document.createElement("p");
    commentP.textContent = comment;
    commentsDiv.appendChild(commentP);
    
    commentInput.value = "";
  });