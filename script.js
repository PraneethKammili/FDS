/* ══════════════════════════════════════════════════════════════════
   ✏️  STORY — edit everything below to make this the two of you.
   Nothing outside this object needs to change.
   ══════════════════════════════════════════════════════════════════ */
const STORY = {
  friendName: "Doraemon",
  yourName:   "Praneeth",

  // Scene 3 — 6 to 8 memories. `image` may be a real photo URL, or left
  // empty ("") to show a soft placeholder with an icon instead.
  memories: [
    { image:"photos/1.jpg", icon:"🎓", date:"July 2026", caption:"The Bestest Momentt In The Recent Times" },
    { image:"photos/2.jpg", icon:"🎉", date:"Feb 2026", caption:"Thats The Day We Actually Enjoyed A Lot." },
    { image:"photos/3.jpg", icon:"🚗", date:"Jan 2026", caption:"Happyyyyy Newwww Yearrrrr." },
    { image:"photos/4.jpg", icon:"☕", date:"Feb 2026", caption:"First Street Shopping Experienceeeee ." },
    { image:"photos/5.jpg", icon:"🌧️", date:"Nov 2025", caption:"Om Namah Shivaaya..." },
    { image:"photos/6.jpg", icon:"🎶", date:"July 2026", caption:"Literally The Best Day Princessss..." },
    { image:"photos/7.jpg", icon:"🏖️", date:"July 2026", caption:"Happyyyy Friendshippp Dayyyyyy..." },
  ],

  // Scene 4 — floating sticky notes. Colors are optional hex values.
  stickyNotes: [
    { text:"You always knew how to make me laugh & handle me in different situations.", color:"#f0d9a6" },
    { text:"Thank you for always listening to each and every one of my rants.", color:"#e8a2b5" },
    { text:"Our random conversations are my most favorite memories.", color:"#c9d9c2" },
    { text:"I'll always cherish our friendship princess, always.", color:"#d9c8f0" },
    { text:"You show up, every single time.ahh might be a bit late sometimes but you show up...ehehehhe.", color:"#f0d9a6" },
    { text:"Thank you for being exactly who you are with me princess...and i hope that you always stay the samee......", color:"#e8a2b5" },
  ],

  // Scene 5 — short appreciation phrases.
  appreciations: [
    { icon:"🌿", text:"Your kindness" },
    { icon:"⏳", text:"Your patience" },
    { icon:"🕊️", text:"Your honesty" },
    { icon:"🤝", text:"Your support" },
    { icon:"😂", text:"Your sense of humor" },
    { icon:"🌤️", text:"Your ability to make difficult days better" },
    { icon:"💫", text:"Your loyalty" },
    { icon:"🎁", text:"Your generosity" },
  ],

  // Scene 6 — the heartfelt letter. Use \n\n for paragraph breaks.
  letter: {
    greeting: "Dear Princess...👸🏻,",
    body: "First Of All Happyyyyyyy Friendshippp Dayyyy...🫂.\n\nOk I know I have already said so many times how much this friendship means to me...But as Today is friendship day i want to say it once again...Thank you so so so much for being my friend all these years.No Matter How Many times i say thank you to you that wont be enough.🫂\n\n I am saying this genuinely and with honesty that you are the perfect friend i could have ever imagined & nothing can change my opinion on that not even a single thing.✨\n\n So As i always say this is your palace and will remain your palace nobody can even think of entering here in their dreams..whatever the rules you set here those will be followed properly...ehheheh...so i want you to be however you want here with no filter and i will demand you to be like that...if not i will really get hurt then...😁😤\n\n I have some more to say so i will continue in the next slide so go to next slide after this its a surpriseeeee...😗",
    signOff: "Princesss...👸🏻",
  },

  // Scene 7 — final lines, shown one at a time.
  finalLines: [
    "Thank you for being part of my story.",
    "No matter where life takes us&hellip;",
    "&hellip;I'll always be grateful that our paths crossed.",
    "Happy Friendship Day ❤️",
  ],

  // Secret heart popup (easter egg).
  secretMessage: "You'll always have a special place in my heart.",

  // Shown as a small counter near the envelope — "X days and counting".
  // Format: "YYYY-MM-DD". Leave empty to hide the counter entirely.
  friendsSinceDate: "20-02-2022",

  // A short, playful quiz shown before the letter. Each question needs
  // 2-4 options and the index (starting at 0) of the "right" one — but
  // every answer gets a warm response, so there's no wrong way to play.
  // Leave the array empty ([]) to skip this scene entirely.
  quiz: [
    {
      question: "What Day Did Our Friendship Started",
      options: ["22-02-2022", "18-02-2022", "20-02-2022", "12-02-2022"],
      correctIndex: 2,
      correctResponse: "Exactly right. I still think about that day.",
      wrongResponse: "Close! But that's not quite how it happened — still, nice guess.",
    },
    {
      question: "Whats The First Nickname I have Saved In My Phone Of You",
      options: ["Teacher", "KM", "Kamkashi"],
      correctIndex: 1,
      correctResponse: "You know us too well.",
      wrongResponse: "Ha — wrong, but I respect the confidence.",
    },
    {
      question: "What's Our Favourite Hangout Spot",
      options: ["NFC", "NFCC", "NFCCCCCC"],
      correctIndex: 2,
      correctResponse: "Guilty as charged.",
      wrongResponse: "Maybe not in those words, but the sentiment's always been there.",
    },
  ],

  // Your email — used for the "write back" reply box at the very end.
  // Leave empty to hide that section.
  yourEmail: "praneethkammili2503@gmail.com",

  // Optional sound effects for small moments (envelope opening, a sticky
  // note landing). Leave either src empty to skip that sound.
  sounds: {
    envelopeOpen: "",
    stickyNote: "",
  },

  // Scene 7 — your personal video message. Drop a video file next to
  // these three files (or in a subfolder) and point src at it.
  // poster is an optional still image shown before it's played.
  // Leave src empty to show a placeholder instead.
  video: {
    src: "FDV.mp4",
    poster: "",
  },

  // Background music. Leave src empty to keep the player silent/disabled.
  music: {
    src: "audio/Sr.mp3",
    title: "Soft Piano (placeholder)",
  },
};

/* ══════════════════════════════════════════════════════════════════
   ENGINE — scene sequencing, ambient FX, and interactions.
   You shouldn't need to edit anything below this line.
   ══════════════════════════════════════════════════════════════════ */
(function(){
  "use strict";

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scenes = ["scene-open","scene-envelope","scene-memories","scene-notes","scene-appreciate","scene-quiz","scene-letter","scene-video","scene-finale"];
  let currentSceneIndex = 0;
  let lastSceneId = null;

  /* ---------- Music ducking helper ----------
     Smoothly ride the background music's volume up or down over `duration`ms.
     Used so the score can quiet itself for the letter, then come back up. */
  let userMusicVolume = 0.6; // kept in sync with the volume slider
  function fadeMusicVolume(target, duration){
    const el = document.getElementById('bg-audio');
    const start = el.volume;
    const t0 = performance.now();
    function step(now){
      const p = Math.min((now - t0) / duration, 1);
      el.volume = start + (target - start) * p;
      if(p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Story-thread progress dots ---------- */
  const threadEl = document.getElementById('thread');
  scenes.forEach((id,i)=>{
    const node = document.createElement('span');
    node.className = 'node';
    node.dataset.index = i;
    threadEl.appendChild(node);
  });
  function updateThread(){
    threadEl.querySelectorAll('.node').forEach((n,i)=>{
      n.classList.toggle('lit', i <= currentSceneIndex);
    });
  }

  /* ---------- Scene transitions ---------- */
  function showScene(id){
    // If the video message is playing and we're leaving that scene for any
    // reason (Continue, Skip Ahead, keyboard nav), stop it — it should
    // never keep playing silently in the background off-screen.
    if(id !== 'scene-video'){
      const v = document.getElementById('story-video');
      if(v && !v.paused) v.pause();
    }
    // The score quiets itself while the letter is being read, and comes
    // back up once we move on — a small touch, but it's what makes this
    // scene feel directed rather than just another slide.
    if(id === 'scene-letter'){
      fadeMusicVolume(userMusicVolume * 0.32, reduceMotion ? 200 : 1000);
    } else if(lastSceneId === 'scene-letter' && id !== 'scene-letter'){
      fadeMusicVolume(userMusicVolume, reduceMotion ? 200 : 1000);
    }
    scenes.forEach(sid=>{
      document.getElementById(sid).classList.toggle('active', sid===id);
    });
    currentSceneIndex = scenes.indexOf(id);
    updateThread();
    document.getElementById('skip-btn').style.display = (id==='scene-finale') ? 'none' : '';
    onSceneEnter(id);
    lastSceneId = id;
  }
  function goToIndex(i){
    if(i<0 || i>=scenes.length) return;
    showScene(scenes[i]);
  }

  const sceneInitRun = {};
  function onSceneEnter(id){
    if(id==='scene-open')       runOpening();
    if(id==='scene-notes'  && !sceneInitRun[id]) runNotes();
    if(id==='scene-appreciate' && !sceneInitRun[id]) runAppreciation();
    if(id==='scene-quiz' && !sceneInitRun[id]) runQuiz();
    if(id==='scene-letter' && !sceneInitRun[id]) runLetter();
    if(id==='scene-video' && !sceneInitRun[id]) runVideoScene();
    if(id==='scene-finale' && !sceneInitRun[id]) runFinale();
    if(id==='scene-memories' && !sceneInitRun[id]) initMemories();
    sceneInitRun[id]=true;
  }

  /* ---------- Starfield ---------- */
  const starfield = document.getElementById('starfield');
  function buildStars(count){
    for(let i=0;i<count;i++){
      const s = document.createElement('div');
      s.className='star';
      const size = (Math.random()*2+1).toFixed(1);
      s.style.width = size+'px';
      s.style.height = size+'px';
      s.style.left = Math.random()*100+'%';
      s.style.top = Math.random()*100+'%';
      s.style.setProperty('--peak', (Math.random()*.6+.3).toFixed(2));
      s.style.animationDelay = (Math.random()*3)+'s, '+(Math.random()*4)+'s';
      s.addEventListener('click', (e)=> spawnSparkle(e.clientX, e.clientY));
      starfield.appendChild(s);
    }
  }
  buildStars(window.innerWidth < 600 ? 55 : 100);

  /* ---------- Scene 1: Opening ---------- */
  function runOpening(){
    if(sceneInitRun['scene-open']) return;
    const lines = document.querySelectorAll('#scene-open .line');
    const beginBtn = document.getElementById('begin-btn');
    const wait = reduceMotion ? 300 : 3200;      // how long each line lingers on screen
    const gap  = reduceMotion ? 200 : 1100;       // dark pause between lines
    setTimeout(()=>{
      lines[0].classList.add('show');
      setTimeout(()=>{
        lines[0].classList.remove('show');
        lines[0].classList.add('fade-out');
        setTimeout(()=>{
          lines[1].classList.add('show');
          setTimeout(()=>{ beginBtn.style.display='inline-block'; }, reduceMotion ? 300 : 2200);
        }, gap);
      }, wait);
    }, reduceMotion ? 300 : 1100);
  }
  document.getElementById('begin-btn').addEventListener('click', ()=> goToIndex(1));

  /* ---------- Scene 2: Envelope ---------- */
  const envelope = document.getElementById('envelope');
  function openEnvelope(){
    if(envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    playSfx(STORY.sounds.envelopeOpen, 0.5);
    setTimeout(()=> goToIndex(2), reduceMotion ? 600 : 2400);
  }
  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keydown', (e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openEnvelope(); }});

  /* ---------- Scene 3: Memories ---------- */
  let memIndex = 0;
  function initMemories(){
    const stage = document.getElementById('memory-stage');
    const dotsWrap = document.getElementById('memory-dots');
    STORY.memories.forEach((m,i)=>{
      const card = document.createElement('div');
      card.className='memory-card';
      card.dataset.index=i;
      const photoWrap = document.createElement('div');
      photoWrap.className='memory-photo';
      if(m.image){
        const img = document.createElement('img');
        img.src = m.image; img.loading='lazy'; img.alt = m.caption || 'Memory photo';
        photoWrap.appendChild(img);
      } else {
        const ph = document.createElement('div');
        ph.className='placeholder-icon';
        ph.textContent = m.icon || '🖼️';
        photoWrap.appendChild(ph);
      }
      const bar = document.createElement('div');
      bar.className='memory-caption-bar';
      bar.innerHTML = `<div class="memory-date">${m.date||''}</div><div class="memory-caption">${m.caption||''}</div>`;
      card.appendChild(photoWrap); card.appendChild(bar);
      stage.appendChild(card);

      const dot = document.createElement('span');
      dotsWrap.appendChild(dot);
    });
    updateMemoryView();

    // Swipe support — left advances, right goes back. Buttons still work
    // for everyone, this just makes the gesture people actually try first
    // on a phone do the right thing too.
    let touchStartX = 0, touchStartY = 0;
    stage.addEventListener('touchstart', (e)=>{
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, {passive:true});
    stage.addEventListener('touchend', (e)=>{
      const dx = e.changedTouches[0].screenX - touchStartX;
      const dy = e.changedTouches[0].screenY - touchStartY;
      const SWIPE_THRESHOLD = 45;
      if(Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)){
        if(dx < 0) advanceMemory();
        else if(memIndex > 0){ memIndex--; updateMemoryView(); }
      }
    }, {passive:true});
  }
  function updateMemoryView(){
    document.querySelectorAll('.memory-card').forEach((c,i)=> c.classList.toggle('active', i===memIndex));
    document.querySelectorAll('.memory-dots span').forEach((d,i)=> d.classList.toggle('on', i===memIndex));
    document.getElementById('memory-prev').disabled = memIndex===0;
    const nextBtn = document.getElementById('memory-next');
    const fwdBtn = document.getElementById('memory-forward');
    nextBtn.textContent = memIndex===STORY.memories.length-1 ? 'Continue' : 'Next Memory';

    // A short settle pause so each memory gets a moment on screen before
    // the viewer can move on — the point is to let it land, not to rush by.
    const settle = reduceMotion ? 0 : 900;
    nextBtn.disabled = true; fwdBtn.disabled = true;
    nextBtn.style.opacity = fwdBtn.style.opacity = settle ? '.4' : '1';
    setTimeout(()=>{
      nextBtn.disabled = false;
      fwdBtn.disabled = (memIndex===0) ? false : false;
      nextBtn.style.opacity = fwdBtn.style.opacity = '1';
    }, settle);
  }
  document.getElementById('memory-forward').addEventListener('click', ()=> advanceMemory());
  document.getElementById('memory-next').addEventListener('click', ()=> advanceMemory());
  document.getElementById('memory-prev').addEventListener('click', ()=>{
    if(memIndex>0){ memIndex--; updateMemoryView(); }
  });
  function advanceMemory(){
    if(memIndex < STORY.memories.length-1){ memIndex++; updateMemoryView(); }
    else { goToIndex(3); }
  }

  /* ---------- Scene 4: Sticky notes ---------- */
  function runNotes(){
    const field = document.getElementById('notes-field');
    // Small resting tilt + a tiny vertical offset per note, cycled so
    // neighbors don't lean the same way — a pinned-to-a-board feel
    // that a CSS grid can lay out safely, however long the text runs.
    const rotations = [-4, 3, -2, 5, -5, 2, 4, -3];
    const offsets    = [0, 22, -10, 14, -16, 8, -6, 18];
    const stagger = reduceMotion ? 0.1 : 0.5;   // seconds between each note falling
    STORY.stickyNotes.forEach((note,i)=>{
      const el = document.createElement('div');
      el.className='sticky';
      el.style.setProperty('--rot', rotations[i % rotations.length]+'deg');
      el.style.setProperty('--offset', offsets[i % offsets.length]+'px');
      el.style.setProperty('--note-color', note.color || '#f0d9a6');
      el.style.transitionDelay = (i*stagger)+'s';
      el.textContent = note.text;
      field.appendChild(el);
      requestAnimationFrame(()=> setTimeout(()=> el.classList.add('fallen'), 30));
      setTimeout(()=> playSfx(STORY.sounds.stickyNote, 0.35), i*stagger*1000 + 1000); // roughly when it visually lands
    });

    // Let the last note land and sit for a beat before offering Continue —
    // gives the whole board a moment to be read, not just glanced at.
    const lastNoteDelay = (STORY.stickyNotes.length-1) * stagger * 1000;
    const readingPause = reduceMotion ? 300 : 1800;
    setTimeout(()=>{
      document.getElementById('notes-continue').style.display='inline-block';
    }, lastNoteDelay + 1000 + readingPause);
  }
  document.getElementById('notes-continue').addEventListener('click', ()=> goToIndex(4));

  /* ---------- Scene 5: Appreciation ---------- */
  function runAppreciation(){
    const grid = document.getElementById('appreciation-grid');
    const stagger = reduceMotion ? 100 : 380;
    STORY.appreciations.forEach((item,i)=>{
      const card = document.createElement('div');
      card.className='appreciation-card glass';
      card.innerHTML = `<div class="appreciation-icon">${item.icon||'✨'}</div><div class="appreciation-text">${item.text}</div>`;
      grid.appendChild(card);
      setTimeout(()=> card.classList.add('in'), 300 + i*stagger);
    });

    const lastCardDelay = 300 + (STORY.appreciations.length-1) * stagger;
    const readingPause = reduceMotion ? 300 : 1800;
    setTimeout(()=>{
      document.getElementById('appreciate-continue').style.display='inline-block';
    }, lastCardDelay + readingPause);
  }
  document.getElementById('appreciate-continue').addEventListener('click', ()=> goToIndex(5));

  /* ---------- Scene 6: Friendship quiz ---------- */
  let quizIndex = 0;
  function runQuiz(){
    const quiz = STORY.quiz;
    if(!quiz || quiz.length === 0){
      // Nothing configured — skip straight to the letter rather than
      // showing an empty "just for fun" card.
      setTimeout(()=> goToIndex(6), 0);
      return;
    }
    const dotsWrap = document.getElementById('quiz-dots');
    quiz.forEach(()=>{ dotsWrap.appendChild(document.createElement('span')); });
    renderQuizQuestion();
  }
  function renderQuizQuestion(){
    const q = STORY.quiz[quizIndex];
    document.getElementById('quiz-question').textContent = q.question;
    const optionsWrap = document.getElementById('quiz-options');
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next');
    optionsWrap.innerHTML = '';
    feedback.textContent = '';
    feedback.classList.remove('show');
    nextBtn.style.display = 'none';
    nextBtn.textContent = (quizIndex === STORY.quiz.length - 1) ? 'Continue' : 'Next';

    q.options.forEach((opt,i)=>{
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'quiz-option';
      b.textContent = opt;
      b.addEventListener('click', ()=>{
        optionsWrap.querySelectorAll('.quiz-option').forEach(btn=> btn.disabled = true);
        b.classList.add('picked');
        const isCorrect = i === q.correctIndex;
        feedback.textContent = isCorrect
          ? (q.correctResponse || 'Exactly right.')
          : (q.wrongResponse || "Not quite — but I love that you tried.");
        requestAnimationFrame(()=> feedback.classList.add('show'));
        setTimeout(()=>{ nextBtn.style.display = 'inline-block'; }, reduceMotion ? 200 : 700);
      });
      optionsWrap.appendChild(b);
    });

    document.querySelectorAll('#quiz-dots span').forEach((d,i)=> d.classList.toggle('on', i===quizIndex));
  }
  document.getElementById('quiz-next').addEventListener('click', ()=>{
    quizIndex++;
    if(quizIndex < STORY.quiz.length){ renderQuizQuestion(); }
    else { goToIndex(6); }
  });

  /* ---------- Scene 7: Letter (typewriter) ---------- */
  function runLetter(){
    document.getElementById('letter-greeting').textContent = STORY.letter.greeting || '';
    const bodyEl = document.getElementById('letter-body');
    const signEl = document.getElementById('letter-sign');
    const continueBtn = document.getElementById('letter-continue');
    const fullText = STORY.letter.body || '';
    signEl.textContent = STORY.letter.signOff ? (STORY.letter.signOff + '\n— ' + STORY.yourName) : '';

    if(reduceMotion){
      bodyEl.textContent = fullText;
      signEl.classList.add('show');
      continueBtn.style.display='inline-block';
      return;
    }

    let i = 0;
    const caret = document.createElement('span');
    caret.className='letter-caret'; caret.innerHTML='&nbsp;';
    function typeNext(){
      if(i <= fullText.length){
        bodyEl.textContent = fullText.slice(0,i);
        bodyEl.appendChild(caret);
        i++;
        const char = fullText[i-1];
        // paragraph breaks and punctuation get a real pause, like someone
        // actually thinking about what to write next
        const delay = (char==='\n') ? 500 : (char==='.'||char===','||char==='!'||char==='?') ? 260 : 34;
        setTimeout(typeNext, delay);
      } else {
        caret.remove();
        // let the finished letter sit in silence for a moment before
        // offering to move on
        setTimeout(()=>{
          signEl.classList.add('show');
          setTimeout(()=>{ continueBtn.style.display='inline-block'; }, reduceMotion ? 200 : 1000);
        }, reduceMotion ? 200 : 900);
      }
    }
    setTimeout(typeNext, 800);
  }
  document.getElementById('letter-continue').addEventListener('click', ()=>{
    const sheet = document.getElementById('letter-sheet');
    sheet.classList.add('letter-folding');
    setTimeout(()=> goToIndex(7), 1300);
  });

  /* ---------- Scene 8: A message from me (video) ---------- */
  function runVideoScene(){
    document.getElementById('video-title').textContent = `A Message from ${STORY.yourName} to ${STORY.friendName}`;

    const frame = document.getElementById('video-frame');
    const video = document.getElementById('story-video');
    const playBtn = document.getElementById('video-play-btn');
    const continueBtn = document.getElementById('video-continue');
    const replayBtn = document.getElementById('video-replay');
    const audio = document.getElementById('bg-audio');
    const musicToggle = document.getElementById('music-toggle');
    let musicWasPlaying = false;

    if(!STORY.video.src){
      // No video configured yet — show the placeholder and let people move on.
      frame.classList.add('no-src');
      setTimeout(()=>{ continueBtn.style.display='inline-block'; }, reduceMotion ? 300 : 1400);
      return;
    }

    frame.classList.add('has-src');
    video.src = STORY.video.src;
    if(STORY.video.poster) video.poster = STORY.video.poster;

    function playVideo(){
      frame.classList.add('playing','started');
      // Hand off to the browser's native control bar (pause, seek, volume)
      // from the first tap onward — our big play button was only ever
      // meant for that first "tap to begin" moment.
      video.setAttribute('controls','controls');
      if(!audio.paused){ musicWasPlaying = true; audio.pause(); musicToggle.classList.remove('playing'); }
      video.play().catch(()=>{ frame.classList.remove('playing'); });
    }
    playBtn.addEventListener('click', playVideo);

    video.addEventListener('pause', ()=>{
      frame.classList.remove('playing');
      if(musicWasPlaying){ audio.play().catch(()=>{}); musicToggle.classList.add('playing'); musicWasPlaying=false; }
    });
    video.addEventListener('ended', ()=>{
      continueBtn.style.display='inline-block';
      replayBtn.style.display='inline-block';
    });
    replayBtn.addEventListener('click', ()=>{
      video.currentTime = 0;
      playVideo();
    });

    // Always offer a way forward even if someone doesn't want to watch in full.
    setTimeout(()=>{ continueBtn.style.display='inline-block'; }, reduceMotion ? 300 : 2600);
  }
  document.getElementById('video-continue').addEventListener('click', ()=> goToIndex(8));

  /* ---------- Scene 9: Finale ---------- */
  function runFinale(){
    const lineEls = [
      document.getElementById('finale-1'),
      document.getElementById('finale-2'),
      document.getElementById('finale-3'),
      document.getElementById('finale-4'),
    ];
    STORY.finalLines.forEach((txt,i)=> lineEls[i].innerHTML = txt);

    spawnRisingHearts(reduceMotion ? 12 : 34);
    if(!reduceMotion) fireworksLoop();

    let step = 0;
    function nextLine(){
      if(step>0) lineEls[step-1].classList.remove('show');
      if(step < lineEls.length){
        lineEls[step].classList.add('show');
        step++;
        const isLast = step === lineEls.length;
        // the closing line gets extra time to sit before anything else appears
        const dwell = reduceMotion ? 900 : (isLast ? 4600 : 3600);
        setTimeout(nextLine, dwell);
      } else {
        document.getElementById('restart-btn').style.display='inline-block';
        if(STORY.yourEmail){
          const box = document.getElementById('reply-box');
          box.style.display='flex';
          document.getElementById('reply-prompt').textContent = `Write something back to ${STORY.yourName}?`;
        }
      }
    }
    setTimeout(nextLine, reduceMotion ? 500 : 1600);
  }
  document.getElementById('restart-btn').addEventListener('click', ()=> window.location.reload());

  document.getElementById('reply-send').addEventListener('click', ()=>{
    const text = document.getElementById('reply-input').value.trim();
    if(!STORY.yourEmail) return;
    const subject = `A reply, from ${STORY.friendName}`;
    const body = text || "(No message written — just wanted to say thank you.)";
    const mailto = `mailto:${STORY.yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });

  function spawnRisingHearts(n){
    const sky = document.getElementById('finale-sky');
    const glyphs = ['❤','💛','💫','✦'];
    for(let i=0;i<n;i++){
      setTimeout(()=>{
        const h = document.createElement('span');
        h.className='rising-heart';
        h.textContent = glyphs[Math.floor(Math.random()*glyphs.length)];
        h.style.left = Math.random()*100+'%';
        h.style.setProperty('--sz', (14+Math.random()*20)+'px');
        h.style.setProperty('--dur', (7+Math.random()*6)+'s');
        h.style.setProperty('--drift', (Math.random()*140-70)+'px');
        h.style.setProperty('--sway', (Math.random()*40-20)+'deg');
        h.addEventListener('click', (e)=>{ spawnSparkle(e.clientX,e.clientY); h.style.transition='transform .3s ease, opacity .3s ease'; h.style.transform='scale(1.6)'; h.style.opacity='0'; });
        sky.appendChild(h);
        setTimeout(()=> h.remove(), 14000);
      }, i*260);
    }
  }
  function fireworksLoop(){
    let count = 0;
    const id = setInterval(()=>{
      spawnFirework(20+Math.random()*60, 15+Math.random()*45);
      count++;
      if(count>10 || !document.getElementById('scene-finale').classList.contains('active')) clearInterval(id);
    }, 1500);
  }
  function spawnFirework(xPct,yPct){
    const sky = document.getElementById('finale-sky');
    const fw = document.createElement('div');
    fw.className='firework';
    fw.style.left = xPct+'%'; fw.style.top = yPct+'%';
    sky.appendChild(fw);
    setTimeout(()=> fw.remove(), 1500);
  }

  /* ---------- Easter eggs ---------- */
  function spawnSparkle(x,y){
    const s = document.createElement('div');
    s.className='sparkle';
    s.textContent='✨';
    s.style.left = x+'px'; s.style.top = y+'px';
    document.body.appendChild(s);
    setTimeout(()=> s.remove(), 900);
  }
  document.addEventListener('dblclick', (e)=>{
    if(e.target.closest('button, .envelope-wrap, .memory-card, a')) return;
    for(let i=0;i<6;i++){
      const b = document.createElement('div');
      b.className='butterfly';
      b.textContent='🦋';
      b.style.left = e.clientX+'px'; b.style.top=e.clientY+'px';
      b.style.setProperty('--fx',(Math.random()*160-80)+'px');
      b.style.setProperty('--fy',(-(120+Math.random()*120))+'px');
      document.body.appendChild(b);
      setTimeout(()=> b.remove(), 2700);
    }
  });

  const secretHeart = document.getElementById('secret-heart');
  const secretModal = document.getElementById('secret-modal');
  document.getElementById('secret-message').textContent = STORY.secretMessage;
  secretHeart.addEventListener('click', ()=> secretModal.classList.add('show'));
  document.getElementById('secret-close').addEventListener('click', ()=> secretModal.classList.remove('show'));
  secretModal.addEventListener('click', (e)=>{ if(e.target===secretModal) secretModal.classList.remove('show'); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') secretModal.classList.remove('show'); });

  /* ---------- Music player ---------- */
  const audio = document.getElementById('bg-audio');
  const musicToggle = document.getElementById('music-toggle');
  const musicVolume = document.getElementById('music-volume');
  const musicMute = document.getElementById('music-mute');
  if(STORY.music.src){ audio.src = STORY.music.src; }
  audio.volume = 0.6;
  let userMuted = false;

  musicToggle.addEventListener('click', ()=>{
    if(!STORY.music.src){
      musicToggle.setAttribute('aria-label','No track configured');
      musicToggle.animate([{transform:'scale(1)'},{transform:'scale(.9)'},{transform:'scale(1)'}], {duration:300});
      return;
    }
    if(audio.paused){
      audio.play().catch(()=>{});
      musicToggle.classList.add('playing');
      musicToggle.setAttribute('aria-label','Pause music');
    } else {
      audio.pause();
      musicToggle.classList.remove('playing');
      musicToggle.setAttribute('aria-label','Play music');
    }
  });
  musicVolume.addEventListener('input', ()=>{
    userMusicVolume = parseFloat(musicVolume.value);
    // If we're mid-duck (on the letter scene), adjust the ducked level
    // proportionally rather than jumping straight to full volume.
    audio.volume = (document.getElementById('scene-letter').classList.contains('active'))
      ? userMusicVolume * 0.32
      : userMusicVolume;
    audio.muted = false; userMuted = false;
    musicMute.textContent = audio.volume === 0 ? '🔇' : '🔊';
  });
  musicMute.addEventListener('click', ()=>{
    userMuted = !userMuted;
    audio.muted = userMuted;
    musicMute.textContent = userMuted ? '🔇' : '🔊';
  });

  /* ---------- Skip control ---------- */
  document.getElementById('skip-btn').addEventListener('click', ()=>{
    if(currentSceneIndex < scenes.length-1) goToIndex(currentSceneIndex+1);
  });

  /* ---------- Keyboard navigation ---------- */
  document.addEventListener('keydown', (e)=>{
    if(e.key==='ArrowRight' || e.key==='Enter'){
      const id = scenes[currentSceneIndex];
      if(id==='scene-open' && document.getElementById('begin-btn').style.display!=='none') goToIndex(1);
      else if(id==='scene-envelope') openEnvelope();
      else if(id==='scene-memories') advanceMemory();
      else if(id==='scene-notes') goToIndex(4);
      else if(id==='scene-appreciate') goToIndex(5);
    }
  });

  /* ---------- Small ambient touches ---------- */
  function playSfx(src, volume){
    if(!src) return;
    try{
      const sfx = new Audio(src);
      sfx.volume = volume != null ? volume : 0.5;
      sfx.play().catch(()=>{});
    }catch(e){ /* ignore — never let a sound effect break the experience */ }
  }

  function renderDaysCounter(){
    const el = document.getElementById('days-counter');
    if(!STORY.friendsSinceDate) return; // hidden by default — nothing to show
    const since = new Date(STORY.friendsSinceDate + 'T00:00:00');
    if(isNaN(since.getTime())) return;
    const days = Math.max(0, Math.floor((Date.now() - since.getTime()) / 86400000));
    el.textContent = `${days.toLocaleString()} day${days===1?'':'s'} of friendship, and counting.`;
  }

  function applyTimeOfDayTint(){
    const hour = new Date().getHours();
    const cls = (hour>=5 && hour<11) ? 'tod-morning'
              : (hour>=11 && hour<17) ? 'tod-day'
              : (hour>=17 && hour<21) ? 'tod-evening'
              : 'tod-night';
    document.body.classList.add(cls);
  }

  /* ---------- Boot ---------- */
  applyTimeOfDayTint();
  renderDaysCounter();
  showScene(scenes[0]);
})();
