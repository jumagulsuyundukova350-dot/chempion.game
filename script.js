const lessons = [
  {
    title: "Биология",
    questions: [
      { q:"Эң чоң организм эмнеден турат?", a:["Жүрөк","Мээ","Сөөк"], correct:1 },
      { q:"Денедеги кандын канча проценти суу?", a:["50%","60%","70%"], correct:2 },
      { q:"Эң кичинекей клетка кайсы?", a:["Бактерия","Эритроцит","Митохондрия"], correct:0 },
      { q:"Кан тамырлардын функциясы бул - ?", a:["Кан айлантуу","Тамак сиңирүү","Сезүү"], correct:0 },
      { q:"Өсүмдүктөрдөгү фотосинтез эмне үчүн керек?", a:["Күн нурун сактоо","Жарык менен тамак өндүрүү","Суу сактоо"], correct:1 },
      { q:"Эритроциттин негизги функциясы?", a:["Оксиген ташуу","Кан басымын жөнгө салуу","Иммунитет"], correct:0 },
      { q:"Нерв системасы эмне үчүн керек?", a:["Көчмөндүк үчүн","Сигнал жөнөтүү үчүн","Кан чыгаруу"], correct:1 },
      { q:"Эндокрин системасынын органы кайсы?", a:["Боор","Жүрөк","Баш сөөгү"], correct:0 },
      { q:"Сүт эмүүчүлөрдүн өзгөчөлүгү эмнеде?", a:["Туугандан кийин сүт берүү","Жумуртка салуу","Кан басымын жөнгө салуу"], correct:0 },
      { q:"Клетка мембранасынын функциясы кандай?", a:["Клетканы коргоо","Кан чыгаруу","Жарык сактоо"], correct:0 },
      { q:"ДНК эмнени сактайт?", a:["Энергия","Генетикалык маалымат","Суу"], correct:1 },
      { q:"Эң оор орган деген эмне?", a:["Баш","Кол","Мээ"], correct:2 },
      { q:"Генетикалык материал кайда болот?", a:["Клетка ядросунда","Сөөктө","Кан тамырда"], correct:0 },
      { q:"Жаныбарлардын нерв системасы кайсы жерринде жайгашкан?", a:["Баш мээде","Жүрөктө","Сөөккө"], correct:0 },
      { q:"Өсүмдүктөрдүн клеткасына эмне мүнөздүү?", a:["Хлоропласт","Суу","Жүрөк"], correct:0 },
      { q:"Митохондриянын функциясы эмне кылат?", a:["Энергия чыгару","Сигнал берүү","Кан ташуу"], correct:0 },
      { q:"Бактериялар кайсы типтүү?", a:["Бир клеткалуу","Көп клеткалуу","Сүт эмүүчү"], correct:0 },
      { q:"Клеткада эмне бар?", a:["ДНК","Жөн гана суу","Сөөк"], correct:0 },
      { q:"Фотосинтездин азыгы?", a:["Глюкоза","Калий","Натрий"], correct:0 },
      { q:"Кан эмнеге керектелет?", a:["Оксиген ташуу","Суу сактоо","Энергия өндүрүү"], correct:0 },
      { q:"Жашоо цикли канча бөлүк?", a:["Үч","Төрт","Беш"], correct:1 },
      { q:"Иммундук система эмне?", a:["Согуш система","Коргоочу система","Энергия"], correct:1 },
      { q:"Жаныбарлар кайсы клетканы колдонот?", a:["Эритроцит","Хлоропласт","Суу"], correct:0 },
      { q:"Эмне тканьды түзөт?", a:["Клеткалар","Суу","Энергия"], correct:0 },
      { q:"Жаныбарларда сүт эмүүчү кайсы?", a:["Эт тартуучу","Эт жебе","Сүт эмүүчү"], correct:2 }
    ]
  },
  {
    title: "География",
    questions: [
      { q:"Кыргызстандын борбору кайсы?", a:["Ош","Бишкек","Талас"], correct:1 },
      { q:"Эң чоң океан кандай аталат?", a:["Атлантика","Тынч","Индия"], correct:1 },
      { q:"Жер канча материктен турат?", a:["5","6","7"], correct:2 },
      { q:"Эң узун дарыя кайсы?", a:["Амазонка","Нил","Миссисипи"], correct:1 },
      { q:"Эң бийик тоо кандай деп аталат?", a:["Эверест","Килиманджаро","Аконкагуа"], correct:0 },
      { q:"Эң чоң көл кайсы?", a:["Каспий","Виктория","Арал"], correct:0 },
      { q:"Эң ысык чөлдүн аталышы?", a:["Сахара","Гоби","Калахари"], correct:0 },
      { q:"Эң чоң мамлекет кайсы?", a:["Кытай","Россия","Канада"], correct:1 },
      { q:"Эң көп калктуу өлкө кайсы?", a:["Индия","Кытай","АКШ"], correct:0 },
      { q:"Эң чоң арал кандай аталат?", a:["Гренландия","Мадагаскар","Исландия"], correct:0 },
      { q:"Эң жогорку шаркыратма кайсы?", a:["Анхель","Ниагара","Игуасу"], correct:0 },
      { q:"Эң узун тоо чынары эмне деп аталат?", a:["Анды","Альпы","Гималай"], correct:2 },
      { q:"Эң чоң токойдун аталышы?", a:["Амазонка","Сибирь","Конго"], correct:0 },
      { q:"Эң кең океан кайсы?", a:["Тынч","Атлантика","Индия"], correct:0 },
      { q:"Эң кыска дарыя бул -?", a:["Ро","Нил","Амазонка"], correct:0 },
      { q:"Эң чоң материк кайсы?", a:["Африка","Азия","Европа"], correct:0 },
      { q:"Дүйнөдөгү бийик вулкандын аталышы?", a:["Килиманджаро","Эйяфьятлайокудль","Охос дель Саладо"], correct:2 },
      { q:"Суусу көп көл кайсы?", a:["Байкал","Виктория","Супериор"], correct:0 },
      { q:"Эң көп аралы бар өлкө?", a:["Индонезия","Филиппин","Япония"], correct:0 },
      { q:"Эң узун канал кандай аталат?", a:["Суэц","Панама","Канал дель Норте"], correct:0 },
      { q:"Эң чоң тоо масиви кайсы?", a:["Гималай","Анды","Альпы"], correct:0 },
      { q:"Эң аз калктуу өлкө кайсы жерде жайгашкан?", a:["Исландия","Монголия","Ботсвана"], correct:0 },
      { q:"Эң туздуу көл кандай аталат?", a:["Мертвое море","Каспий","Арал"], correct:0 },
      { q:"Эң бийик төбө кайсы?", a:["Тибет","Памир","Кавказ"], correct:0 },
      { q:"Сууга бай аралдар кайсы мамлекетте?", a:["Индонезия","Канада","Мадагаскар"], correct:0 }
    ]
  },
  {
    title: "Тарых",
    questions: [
      { q:"Кыргызстандын эгемендүүлүк алган жылы?", a:["1990","1991","1992"], correct:1 },
      { q:"Алгачкы жазуу системасы кандай болгон?", a:["Клинопис","Иероглиф","Латын"], correct:0 },
      { q:"Дүйнөдөгү экинчи чоң империя кандай аталган?", a:["Монгол","Британ","Осман"], correct:1 },
      { q:"Эң эски шаар бул - ?", a:["Иерихон","Афины","Рим"], correct:0 },
      { q:"Биринчи дүйнөлүк согуш качан болгон?", a:["1912","1914","1918"], correct:1 },
      { q:"Экинчи дүйнөлүк согуш качан болгон?", a:["1939","1945","1918"], correct:0 },
      { q:"Алгачкы адам кайсы континенттен болгон?", a:["Африка","Азия","Европа"], correct:0 },
      { q:"Кыргызстандагы биринчи университет кандай аталат?", a:["КГТУ","КБТУ","КГУ"], correct:2 },
      { q:"Жибек жолу кайсы мамлекеттерди байланыштырган?", a:["Кытай–Европа","Индия–Африка","Россия–Америка"], correct:0 },
      { q:"Байыркы Египет падышасы ким?", a:["Клеопатра","Нефертити","Тутанхамон"], correct:2 },
      { q:"Мөңгүлөр кайсы доордо пайда болгон?", a:["Палеолит","Неолит","Мезолит"], correct:0 },
      { q:"Алгачкы темир доору пайда болгон жыл?", a:["Б.з.ч 1200","Б.з.ч 1500","Б.з.ч 1000"], correct:0 },
      { q:"Кыргызстан эгемендүүлүккө кантип жеткен?", a:["Согуш менен","Мүнөзү менен","1991-жылы референдум"], correct:2 },
      { q:"Алгачкы ок чыгарган куралдын аталышы?", a:["Арбалет","Катула","Мушкет"], correct:2 },
      { q:"Дүйнөдөгү биринчи жазылган мыйзамдар кандай?", a:["Хаммурапи кодекси","Рим мыйзамы","Англия канону"], correct:0 },
      { q:"Канча пирамида Египетте жайгашкан?", a:["100","120","138"], correct:2 },
      { q:"Жибек жолунун узундугу канча км?", a:["8000 км","12000 км","5000 км"], correct:0 },
      { q:"Рим империясы кайсы жылы кулаган?", a:["476","500","400"], correct:0 },
      { q:"Алгачкы темир жол кайсы мамлекетте курулган?", a:["Англия","Кытай","Франция"], correct:0 },
      { q:"Кыргызстандын байыркы падышасы ким?", a:["Манас","Сүлүк","Токтогул"], correct:1 },
      { q:"Кыргыздардын жазуу системасы кандай?", a:["Кириллица","Араб","Латын"], correct:0 },
      { q:"Эң белгилүү монгол ханы ким болгон?", a:["Чыңгыз хан","Аттила","Кубилай хан"], correct:0 },
      { q:"Алгачкы велосипед кайсы кылымда пайда болгон?", a:["18-кылым","19-кылым","20-кылым"], correct:1 },
      { q:"Эң эски китеп кандай аталган?", a:["Мертвое море китептери","Библия","Куран"], correct:0 },
      { q:"Кыргызстандын биринчи конституциясы качан кабыл алынган?", a:["1993","1994","1995"], correct:1 }
    ]
  }
];
let currentLesson=0, currentQuestion=0, score=0, timeLeft=12, timerInterval;
let questionEl, answersDiv, timerEl, characterSpeech, lessonTitle, progressBar;

document.addEventListener("DOMContentLoaded", ()=>{
  questionEl=document.getElementById("question");
  answersDiv=document.getElementById("answers");
  characterSpeech=document.getElementById("characterSpeech");
  lessonTitle=document.getElementById("lessonTitle");
  progressBar=document.getElementById("progressBar");
  timerEl=document.getElementById("timer");

  const startBtn=document.getElementById("startBtn");
  const usernameInput=document.getElementById("username");
  const lessonButtonsDiv=document.getElementById("lessonButtons");

  lessons.forEach((lesson,index)=>{
    const btn=document.createElement("button");
    btn.innerText=lesson.title; btn.classList.add("btn");
    btn.onclick=()=>startLesson(index); lessonButtonsDiv.appendChild(btn);
  });

  startBtn.onclick=()=>{
    if(usernameInput.value.trim()===""){ alert("Атыңды жаз!"); return; }
    document.getElementById("startScreen").style.display="none";
    document.getElementById("menu").style.display="block";
    speak("Ийгилик!");
  };
});

function startLesson(index){
  currentLesson=index; currentQuestion=0; score=0;
  document.getElementById("menu").style.display="none";
  document.getElementById("game").style.display="block";
  lessonTitle.innerText=lessons[index].title;
  setProgressColor(lessons[index].title); updateProgress();
  showQuestion();
}

function showQuestion(){
  clearInterval(timerInterval); startTimer();
  const q=lessons[currentLesson].questions[currentQuestion];
  questionEl.innerText=q.q; answersDiv.innerHTML="";
  q.a.forEach((ans,i)=>{
    const btn=document.createElement("button"); btn.innerText=ans;
    btn.onclick=()=>checkAnswer(i); answersDiv.appendChild(btn);
  });
  updateProgress();
}

function checkAnswer(i){
  const q=lessons[currentLesson].questions[currentQuestion];
  if(i===q.correct){ score++; characterSpeech.innerText="Туура!"; speak("Туура!"); }
  else { characterSpeech.innerText="Туура эмес!"; speak("Туура эмес!"); }
  setTimeout(()=>{
    currentQuestion++;
    if(currentQuestion>=lessons[currentLesson].questions.length){ showResult(); }
    else{ showQuestion(); }
  },800);
}

function startTimer(){
  timeLeft=12; timerEl.innerText=`⏱ ${timeLeft}s`;
  timerInterval=setInterval(()=>{
    timeLeft--; timerEl.innerText=`⏱ ${timeLeft}s`;
    if(timeLeft===0){
      clearInterval(timerInterval);
      if(currentQuestion>=lessons[currentLesson].questions.length){ showResult(); }
      else{ showQuestion(); }
    }
  },1000);
}
function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 10;
  timerEl.innerText = `Убакыт: ${timeLeft}s`;

  timerInterval = setInterval(()=>{
    timeLeft--;
    timerEl.innerText = `Убакыт: ${timeLeft}s`;

    if(timeLeft <= 0){
      clearInterval(timerInterval);

      characterSpeech.innerText = "Убакыт бүткөн! ⏰";

      // кнопкаларды өчүрөбүз
      const buttons = answersDiv.querySelectorAll("button");
      buttons.forEach(btn => btn.disabled = true);

      setTimeout(()=>{
        currentQuestion++;

        if(currentQuestion >= lessons[currentLesson].questions.length){
          showResult();
        } else {
          showQuestion();
        }
      }, 500); 
    }
  },1000);
}
function showResult(){
  speak("Сиз мыктысыз!");
  document.getElementById("game").style.display="none";
  const resultDiv=document.getElementById("finalResult");
  resultDiv.innerHTML=`<h1>🎉 ${score} / ${lessons[currentLesson].questions.length}</h1><p>СИЗ МЫКТЫСЫЗ!</p>`;
  resultDiv.style.display="block";
}

function speak(text){
  const s=new SpeechSynthesisUtterance(text); s.rate=1; s.pitch=1.2; s.lang="ky-KG"; speechSynthesis.speak(s);
}

function updateProgress(){
  const total=lessons[currentLesson].questions.length;
  const percent=(currentQuestion/total)*100;
  progressBar.style.width=percent+"%";
  progressBar.textContent=Math.floor(percent)+"%";
}

function setProgressColor(lesson){
  progressBar.className="";
  if(lesson==="Биология") progressBar.classList.add("bio");
  else if(lesson==="География") progressBar.classList.add("geo");
  else if(lesson==="Тарых") progressBar.classList.add("history");
}