const EXAM_MINUTES = 10;
const QUESTION_BANKS = {
  "Mathematics": [
    ["What is 15% of 200?",["15","20","30","35"],2,"15% × 200 = 30."],
    ["What is the value of 7²?",["14","49","42","56"],1,"7 squared is 7 × 7 = 49."],
    ["Solve: 3x + 5 = 20",["3","5","7","8"],1,"3x = 15, so x = 5."],
    ["What is the perimeter of a square with side 6 cm?",["12 cm","18 cm","24 cm","36 cm"],2,"Perimeter = 4 × side = 24 cm."],
    ["Which is a prime number?",["21","27","29","33"],2,"29 has exactly two positive factors: 1 and 29."],
    ["What is √144?",["10","11","12","14"],2,"12 × 12 = 144."],
    ["Convert 0.75 to a fraction.",["1/2","2/3","3/4","4/5"],2,"0.75 = 75/100 = 3/4."],
    ["What is the sum of angles in a triangle?",["90°","180°","270°","360°"],1,"The interior angles of every triangle sum to 180°."],
    ["What is 5! (5 factorial)?",["25","60","100","120"],3,"5! = 5 × 4 × 3 × 2 × 1 = 120."],
    ["If a = 4 and b = 3, what is a² + b²?",["7","12","25","49"],2,"16 + 9 = 25."]
  ],
  "Physics": [
    ["What is the SI unit of force?",["Joule","Newton","Watt","Pascal"],1,"Force is measured in newtons (N)."],
    ["What is the approximate speed of light in vacuum?",["3 × 10⁶ m/s","3 × 10⁸ m/s","3 × 10¹⁰ m/s","300 m/s"],1,"The speed of light is approximately 3 × 10⁸ m/s."],
    ["Which instrument measures electric current?",["Voltmeter","Ammeter","Barometer","Thermometer"],1,"An ammeter measures current in amperes."],
    ["What is the SI unit of energy?",["Watt","Newton","Joule","Ampere"],2,"Energy is measured in joules."],
    ["Which law states V = IR?",["Newton's law","Ohm's law","Hooke's law","Faraday's law"],1,"Ohm's law relates voltage, current and resistance."],
    ["Which lens converges parallel rays?",["Concave","Convex","Plane","Cylindrical"],1,"A convex lens is a converging lens."],
    ["What is the acceleration due to gravity near Earth's surface?",["4.9 m/s²","9.8 m/s²","12 m/s²","0 m/s²"],1,"Its average value is about 9.8 m/s²."],
    ["Which quantity is a scalar?",["Velocity","Force","Displacement","Mass"],3,"Mass has magnitude but no direction."],
    ["Sound cannot travel through:",["Water","Steel","Air","Vacuum"],3,"Sound requires a material medium."],
    ["The unit of power is:",["Joule","Watt","Volt","Tesla"],1,"Power is the rate of energy transfer, measured in watts."]
  ],
  "Chemistry": [
    ["What is the chemical symbol for sodium?",["So","S","Na","N"],2,"Na comes from the Latin name natrium."],
    ["A solution with pH 3 is:",["Acidic","Neutral","Basic","Always salty"],0,"A pH below 7 is acidic."],
    ["What is the formula of water?",["CO₂","H₂O","O₂","NaCl"],1,"A water molecule contains two hydrogen atoms and one oxygen atom."],
    ["Which gas is essential for combustion?",["Nitrogen","Oxygen","Carbon dioxide","Helium"],1,"Oxygen supports combustion."],
    ["How many protons does carbon have?",["4","6","8","12"],1,"Carbon's atomic number is 6."],
    ["Which is a noble gas?",["Chlorine","Sodium","Neon","Hydrogen"],2,"Neon is a Group 18 noble gas."],
    ["Common table salt is:",["NaCl","KCl","HCl","CaCO₃"],0,"Sodium chloride is the chemical name for table salt."],
    ["The process of a solid changing directly into gas is:",["Condensation","Freezing","Sublimation","Melting"],2,"Sublimation skips the liquid state."],
    ["Which particle has a negative charge?",["Proton","Neutron","Electron","Nucleus"],2,"Electrons carry a negative electric charge."],
    ["What is the approximate Avogadro constant?",["6.022 × 10²³","3 × 10⁸","9.8","1.6 × 10⁻¹⁹"],0,"One mole contains approximately 6.022 × 10²³ entities."]
  ],
  "Biology": [
    ["What is the basic unit of life?",["Tissue","Organ","Cell","Atom"],2,"The cell is the basic structural and functional unit of life."],
    ["Which organelle is called the powerhouse of the cell?",["Nucleus","Mitochondrion","Ribosome","Golgi body"],1,"Mitochondria produce much of the cell's ATP."],
    ["Which pigment helps plants absorb light?",["Haemoglobin","Chlorophyll","Melanin","Keratin"],1,"Chlorophyll absorbs light energy for photosynthesis."],
    ["What is the largest organ of the human body?",["Liver","Brain","Skin","Lung"],2,"The skin is the body's largest organ."],
    ["Which blood cells carry oxygen?",["White blood cells","Red blood cells","Platelets","Plasma"],1,"Red blood cells contain haemoglobin, which carries oxygen."],
    ["DNA stands for:",["Deoxyribonucleic acid","Ribonuclear acid","Dinuclear acid","Deoxyribose nitrogen acid"],0,"DNA means deoxyribonucleic acid."],
    ["Which part of a plant absorbs most water?",["Flower","Leaf","Root hairs","Stem"],2,"Root hairs provide a large surface area for water absorption."],
    ["How many chambers does the human heart have?",["2","3","4","5"],2,"The human heart has two atria and two ventricles."],
    ["Which vitamin is produced in skin in sunlight?",["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],3,"Sunlight enables the skin to synthesize vitamin D."],
    ["What is the study of heredity called?",["Ecology","Genetics","Anatomy","Taxonomy"],1,"Genetics studies genes, heredity and variation."]
  ],
  "Computer Science": [
    ["Which data structure follows FIFO?",["Stack","Queue","Tree","Graph"],1,"A queue removes items in first-in, first-out order."],
    ["What does CPU stand for?",["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processing User"],0,"CPU means Central Processing Unit."],
    ["Which is volatile memory?",["ROM","SSD","RAM","DVD"],2,"RAM typically loses its contents when power is removed."],
    ["Which language is commonly used for system programming?",["C","HTML","CSS","SQL"],0,"C is widely used for system-level programming."],
    ["What is the binary representation of decimal 5?",["100","101","110","111"],1,"5 = 4 + 1, so binary is 101."],
    ["Which protocol is used to browse secure websites?",["FTP","HTTP","HTTPS","SMTP"],2,"HTTPS is HTTP secured using TLS."],
    ["Which key uniquely identifies a database row?",["Foreign key","Primary key","Duplicate key","Index only"],1,"A primary key uniquely identifies each row."],
    ["What does OS stand for?",["Open Software","Operating System","Output Service","Online Storage"],1,"An operating system manages hardware and software resources."],
    ["Which traversal visits left, root, right in a binary tree?",["Preorder","Postorder","Inorder","Level order"],2,"Inorder traversal visits left subtree, node, then right subtree."],
    ["Which number system uses base 16?",["Binary","Octal","Decimal","Hexadecimal"],3,"Hexadecimal uses sixteen symbols: 0–9 and A–F."]
  ],
  "Web Development": [
    ["Which language structures web pages?",["CSS","HTML","JavaScript","Python"],1,"HTML defines page structure and content."],
    ["Which CSS property changes text color?",["font-style","background","color","text-decoration"],2,"The color property sets text foreground color."],
    ["Which method adds an item to the end of an array?",["push()","pop()","shift()","slice()"],0,"push() appends elements to an array."],
    ["Which function repeats code at a fixed interval?",["setTimeout()","setInterval()","parseInt()","clearTimeout()"],1,"setInterval() repeatedly invokes a callback."],
    ["What does DOM stand for?",["Data Object Model","Document Object Model","Digital Ordinance Model","Display Object Management"],1,"The DOM represents a document as a tree of objects."],
    ["Which element creates a hyperlink?",["<link>","<href>","<a>","<url>"],2,"The anchor element creates hyperlinks."],
    ["Which operator checks strict equality?",["=","==","===","!="],2,"=== compares value and type without coercion."],
    ["Which storage persists after the browser closes?",["sessionStorage","localStorage","Local variable","DOM"],1,"localStorage persists across browser sessions."],
    ["Which CSS system is one-dimensional?",["Flexbox","Grid","Float","Position"],0,"Flexbox arranges items in a row or column."],
    ["What does JSON.stringify() do?",["Parses JSON","Converts an object to JSON text","Deletes an object","Sorts an array"],1,"It serializes a JavaScript value into a JSON string."]
  ]
};
QUESTION_BANKS["HTML & CSS"] = QUESTION_BANKS["Web Development"];
QUESTION_BANKS.JavaScript = QUESTION_BANKS["Web Development"];
QUESTION_BANKS["General Knowledge"] = [
 ["What is the capital of India?",["Mumbai","New Delhi","Kolkata","Chennai"],1,"New Delhi is the capital of India."],
 ["Which is the largest planet in our solar system?",["Earth","Saturn","Jupiter","Mars"],2,"Jupiter is the largest planet."],
 ["How many days are there in a leap year?",["365","366","364","360"],1,"A leap year has 366 days."],
 ["Which ocean is the largest?",["Atlantic","Indian","Arctic","Pacific"],3,"The Pacific Ocean is the largest."],
 ["Who wrote India's national anthem?",["Bankim Chandra","Rabindranath Tagore","Sarojini Naidu","Mahatma Gandhi"],1,"Rabindranath Tagore wrote Jana Gana Mana."],
 ["Which planet is known as the Red Planet?",["Venus","Mars","Mercury","Neptune"],1,"Iron oxide gives Mars its reddish appearance."],
 ["What is the currency of Japan?",["Yuan","Won","Yen","Ringgit"],2,"Japan's currency is the yen."],
 ["How many colours are traditionally in a rainbow?",["5","6","7","8"],2,"The traditional count is seven colours."],
 ["Which is the smallest continent by land area?",["Europe","Australia","Antarctica","South America"],1,"Australia is the smallest continent by land area."],
 ["The United Nations was founded in:",["1919","1945","1950","1965"],1,"The UN officially came into existence in 1945."]
];

let QUESTIONS = [];
let currentQuestion = 0, answers = [], markedForReview = new Set();
let secondsLeft = EXAM_MINUTES * 60, timerId = null, startedAt = null, finishedAt = null;
let activeSubject = "Mathematics", submitted = false;
const $ = id => document.getElementById(id);
const screens = ["welcome-screen", "exam-screen", "result-screen", "review-screen"];

function setSubject(subject) {
  activeSubject = QUESTION_BANKS[subject] ? subject : "Mathematics";
  QUESTIONS = QUESTION_BANKS[activeSubject].map(([q, options, answer, explanation]) => ({q, options, answer, explanation}));
  $("question-count").textContent = QUESTIONS.length;
  $("sidebar-total").textContent = QUESTIONS.length;
  $("exam-subject-label").textContent = activeSubject.toUpperCase();
}
function showScreen(id) {
  screens.forEach(screen => $(screen).classList.toggle("hidden", screen !== id));
  window.scrollTo({top:0, behavior:"smooth"});
}
function startExam() {
  const name = $("student-name").value.trim();
  if (!name) { $("student-name").focus(); $("student-name").setCustomValidity("Please enter your name."); $("student-name").reportValidity(); $("student-name").setCustomValidity(""); return; }
  setSubject($("subject-select").value);
  currentQuestion = 0; answers = Array(QUESTIONS.length).fill(null); markedForReview = new Set();
  secondsLeft = EXAM_MINUTES * 60; startedAt = Date.now(); finishedAt = null; submitted = false;
  showScreen("exam-screen"); renderQuestion(); renderPalette(); updateTimer();
  clearInterval(timerId);
  timerId = setInterval(() => { if (submitted) return; secondsLeft = Math.max(0, secondsLeft - 1); updateTimer(); if (secondsLeft === 0) submitExam(true); }, 1000);
}
function updateTimer() {
  $("timer").textContent = `${String(Math.floor(secondsLeft/60)).padStart(2,"0")}:${String(secondsLeft%60).padStart(2,"0")}`;
  $("timer").classList.toggle("urgent", secondsLeft <= 60);
}
function renderQuestion() {
  const item = QUESTIONS[currentQuestion]; if (!item) return;
  $("question-number").textContent = `QUESTION ${String(currentQuestion+1).padStart(2,"0")}`;
  $("question-text").textContent = item.q;
  $("progress-text").textContent = `Question ${currentQuestion+1} of ${QUESTIONS.length}`;
  $("answered-text").textContent = `${answers.filter(a=>a!==null).length} answered`;
  $("progress-bar").style.width = `${((currentQuestion+1)/QUESTIONS.length)*100}%`;
  $("review-btn").classList.toggle("active", markedForReview.has(currentQuestion));
  $("review-btn").textContent = markedForReview.has(currentQuestion) ? "★ Marked for review" : "☆ Mark for review";
  $("prev-btn").disabled = currentQuestion === 0; $("prev-btn").style.opacity = currentQuestion === 0 ? ".45" : "1";
  $("next-btn").textContent = currentQuestion === QUESTIONS.length-1 ? "Finish questions ✓" : "Next question →";
  const options = $("options"); options.replaceChildren();
  item.options.forEach((option,index)=>{
    const button=document.createElement("button"); button.type="button"; button.className=`option${answers[currentQuestion]===index?" selected":""}`;
    const letter=document.createElement("span"); letter.className="option-letter"; letter.textContent=String.fromCharCode(65+index);
    const label=document.createElement("span"); label.textContent=option; button.append(letter,label);
    button.addEventListener("click",()=>{answers[currentQuestion]=index;renderQuestion();renderPalette();}); options.appendChild(button);
  });
  $("sidebar-answered").textContent=answers.filter(a=>a!==null).length;
}
function renderPalette() {
  const palette=$("question-palette"); palette.replaceChildren();
  QUESTIONS.forEach((_,index)=>{const button=document.createElement("button");button.type="button";button.textContent=index+1;
    if(answers[index]!==null)button.classList.add("answered");if(markedForReview.has(index))button.classList.add("review");if(index===currentQuestion)button.classList.add("current");
    button.setAttribute("aria-label",`Go to question ${index+1}`);button.addEventListener("click",()=>{currentQuestion=index;renderQuestion();renderPalette();});palette.appendChild(button);});
  $("sidebar-answered").textContent=answers.filter(a=>a!==null).length;
}
function submitExam(auto=false) {
  if(submitted)return;
  if(!auto){const unanswered=answers.filter(a=>a===null).length;const prompt=unanswered?`You have ${unanswered} unanswered question(s). Submit anyway?`:"Are you sure you want to submit your exam?";if(!window.confirm(prompt))return;}
  submitted=true;clearInterval(timerId);finishedAt=Date.now();showResults(auto);
}
function showResults(auto=false) {
  const correct=answers.reduce((n,a,i)=>n+(a===QUESTIONS[i].answer?1:0),0);
  const incorrect=answers.filter((a,i)=>a!==null&&a!==QUESTIONS[i].answer).length;
  const unanswered=answers.filter(a=>a===null).length, percentage=Math.round(correct/QUESTIONS.length*100);
  const elapsed=Math.max(0,Math.floor((finishedAt-startedAt)/1000)), grade=percentage>=90?"A+":percentage>=80?"A":percentage>=70?"B":percentage>=60?"C":percentage>=40?"D":"Needs practice";
  $("result-heading").textContent=`Well done, ${$("student-name").value.trim()}!`;
  $("result-message").textContent=auto?"Time is up. Your exam has been submitted automatically.":`Your ${activeSubject} exam has been evaluated. Here is your performance summary.`;
  $("score").textContent=`${correct}/${QUESTIONS.length}`;$("percentage").textContent=`${percentage}%`;$("grade").textContent=grade;
  $("time-used").textContent=`${Math.floor(elapsed/60)}m ${String(elapsed%60).padStart(2,"0")}s`;
  $("correct-count").textContent=correct;$("incorrect-count").textContent=incorrect;$("unanswered-count").textContent=unanswered;
  $("score-ring").style.background=`conic-gradient(var(--blue) ${percentage*3.6}deg, var(--ring-track) 0deg)`;
  try{localStorage.setItem("examProLastResult",JSON.stringify({name:$("student-name").value.trim(),subject:activeSubject,score:correct,total:QUESTIONS.length,percentage,grade,date:new Date().toISOString()}));$("saved-note").textContent="Your latest result has been saved in this browser.";}
  catch{$("saved-note").textContent="Your result is displayed but could not be saved in this browser.";}
  showScreen("result-screen");
}
function showReview() {
  const list=$("review-list");list.replaceChildren();
  QUESTIONS.forEach((q,i)=>{const article=document.createElement("article");article.className="review-item";
    const h=document.createElement("h3");h.textContent=`${i+1}. ${q.q}`;
    const yours=document.createElement("p");const selected=answers[i];yours.textContent=selected===null?"Your answer: Not answered":`Your answer: ${String.fromCharCode(65+selected)}. ${q.options[selected]}`;yours.className=selected===q.answer?"right":"wrong";
    const correct=document.createElement("p");correct.className="right";correct.textContent=`Correct answer: ${String.fromCharCode(65+q.answer)}. ${q.options[q.answer]}`;
    const explanation=document.createElement("p");explanation.textContent=`Explanation: ${q.explanation}`;article.append(h,yours,correct,explanation);list.appendChild(article);});showScreen("review-screen");
}
function setTheme(theme) {
  document.documentElement.dataset.theme=theme;
  const light=theme==="light";$("theme-toggle").textContent=light?"☾ Dark":"☀ Light";
  $("theme-toggle").setAttribute("aria-label",light?"Switch to dark theme":"Switch to light theme");
  try{localStorage.setItem("examProTheme",theme);}catch{}
}
function init() {
  let saved=null;try{saved=localStorage.getItem("examProTheme");}catch{}
  setTheme(saved||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"));
  setSubject($("subject-select").value);
  $("theme-toggle").addEventListener("click",()=>setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"));
  $("subject-select").addEventListener("change",e=>setSubject(e.target.value));
  $("start-btn").addEventListener("click",startExam);
  $("student-name").addEventListener("keydown",e=>{if(e.key==="Enter")startExam();});
  $("prev-btn").addEventListener("click",()=>{if(currentQuestion>0){currentQuestion--;renderQuestion();renderPalette();}});
  $("next-btn").addEventListener("click",()=>{if(currentQuestion<QUESTIONS.length-1){currentQuestion++;renderQuestion();renderPalette();}else submitExam();});
  $("review-btn").addEventListener("click",()=>{markedForReview.has(currentQuestion)?markedForReview.delete(currentQuestion):markedForReview.add(currentQuestion);renderQuestion();renderPalette();});
  $("submit-btn").addEventListener("click",()=>submitExam());$("review-results-btn").addEventListener("click",showReview);
  $("back-results-btn").addEventListener("click",()=>showScreen("result-screen"));
  $("restart-btn").addEventListener("click",()=>{clearInterval(timerId);$("student-name").value="";showScreen("welcome-screen");});
}
document.addEventListener("DOMContentLoaded",init);
