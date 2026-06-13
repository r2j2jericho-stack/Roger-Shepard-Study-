const generatedPictureStimuli = [
  ["alpine cabin", "house", "#dce8ef", "#2d6f74", "#d9953d", "#7aa35a"],
  ["harbor sail", "boat", "#d9eef0", "#146c6f", "#d9a441", "#83b7be"],
  ["olive tree", "tree", "#e8eadc", "#467a4d", "#8b5a33", "#b9c383"],
  ["two peaks", "mountain", "#e5e7ec", "#5b6575", "#8e9ca8", "#a7b56f"],
  ["gold ring", "symbol", "#f1e8d2", "#d9a441", "#b3402b", "#8fab69"],
  ["red chair", "chair", "#f3e0d6", "#b3402b", "#314f60", "#c8a36a"],
  ["blue clock", "clock", "#dfe8f4", "#2f6f9f", "#d9a441", "#96aec7"],
  ["green book", "book", "#e6eadc", "#467a4d", "#b3402b", "#aebd76"],
  ["yellow umbrella", "umbrella", "#f0e6cf", "#d9a441", "#146c6f", "#b2b56b"],
  ["copper key", "key", "#f0dfcd", "#b95f45", "#314f60", "#bda76e"],
  ["violet flower", "flower", "#e5e0eb", "#6f5d8f", "#d9a441", "#9cad71"],
  ["striped kite", "kite", "#d8f0ec", "#179b8f", "#b3402b", "#8fc3b8"],
  ["red boathouse", "house", "#f3e0d6", "#b3402b", "#314f60", "#89a765"],
  ["copper sail", "boat", "#f0e3d6", "#b8673a", "#2b6670", "#d1bb75"],
  ["blue orchard", "tree", "#dce9ef", "#2f6f9f", "#67492e", "#93b7cc"],
  ["sun peaks", "mountain", "#f2e8cb", "#7b7f58", "#d9a441", "#aabf84"],
  ["teal ring", "symbol", "#d8ece8", "#146c6f", "#d9953d", "#8ab9ae"],
  ["navy chair", "chair", "#e6edf0", "#314f60", "#d9a441", "#bac8cc"],
  ["amber clock", "clock", "#efe3c7", "#d9a441", "#b3402b", "#d9c37e"],
  ["blue book", "book", "#e3edf4", "#2f6f9f", "#d9a441", "#8aad75"],
  ["coral umbrella", "umbrella", "#f0ded8", "#d66f58", "#146c6f", "#c49a81"],
  ["black key", "key", "#ece8df", "#182021", "#d9a441", "#9eaa84"],
  ["orange flower", "flower", "#f1e5d5", "#d9823b", "#467a4d", "#c6a968"],
  ["night kite", "kite", "#d8dce8", "#33455f", "#d9a441", "#8796b0"],
  ["green cottage", "house", "#dfeee1", "#467a4d", "#d9a441", "#9abf75"],
  ["silver sail", "boat", "#e6edf0", "#6e7f88", "#146c6f", "#bac8cc"],
  ["pine tree", "tree", "#e5eddc", "#285943", "#8b5a33", "#8ba867"],
  ["cold ridge", "mountain", "#dfe8ef", "#3e6f8c", "#96aebe", "#b8c7cc"],
  ["clay ring", "symbol", "#eee0da", "#b3402b", "#314f60", "#c0a464"],
  ["gold chair", "chair", "#f0e6cf", "#d9a441", "#146c6f", "#b2b56b"],
  ["black clock", "clock", "#ece8df", "#182021", "#b3402b", "#9eaa84"],
  ["red book", "book", "#eadfd8", "#b3402b", "#d9a441", "#bc9c75"],
  ["teal umbrella", "umbrella", "#d8ece8", "#146c6f", "#d9953d", "#8ab9ae"],
  ["blue key", "key", "#dfe8f4", "#2f6f9f", "#d9a441", "#96aec7"],
  ["white flower", "flower", "#dce8e4", "#f8f4ea", "#b3402b", "#7aa35a"],
  ["gold kite", "kite", "#f1e8d2", "#d9a441", "#146c6f", "#8fab69"]
];

const pictureStimuli = Array.from({ length: 50 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    name: `Pixabay photo ${number}`,
    src: `images/image-${number}.jpg`
  };
});

const wordStimuli = [
  "anchor", "velvet", "lantern", "garden", "orbit", "canyon", "silver", "market", "window",
  "river", "hammer", "basket", "pencil", "harbor", "coffee", "marble", "forest", "thread",
  "mirror", "castle", "pocket", "summer", "rocket", "cotton", "planet", "ladder", "orange",
  "breeze", "magnet", "camera", "island", "ticket", "jacket", "pepper", "cloud", "temple"
];

const sentenceStimuli = [
  "The artist carried a blue chair across the quiet plaza.",
  "A yellow scarf hung from the balcony after the storm.",
  "The baker hid a silver key under the flour sack.",
  "A tired pianist played softly beside the open window.",
  "The child counted seven shells on the wooden table.",
  "A lantern swung above the narrow garden path.",
  "The driver parked beside a mural of three suns.",
  "A paper boat drifted under the stone bridge.",
  "The teacher folded a map beside the green lamp.",
  "A glass jar rattled in the back of the wagon.",
  "The runner tied red ribbons around both shoes.",
  "A quiet bell rang once behind the library.",
  "The carpenter measured the door with a blue pencil.",
  "A small radio played jazz near the window.",
  "The florist wrapped white roses in newspaper.",
  "A copper coin rolled beneath the kitchen shelf.",
  "The sailor painted a star on the wooden box.",
  "A black umbrella leaned against the museum bench.",
  "The poet saved a ticket from the midnight train.",
  "A bright kite tangled in the old apple tree.",
  "The farmer stacked pumpkins beside the iron gate.",
  "A chess piece stood alone on the carpet.",
  "The nurse placed two cups beside the clock.",
  "A velvet curtain covered the cracked mirror.",
  "The mechanic wiped oil from a brass handle.",
  "A tiny candle burned inside the empty chapel.",
  "The gardener found a marble under the fountain.",
  "A folded letter rested on the red suitcase.",
  "The dancer dropped a glove near the stage door.",
  "A blue bicycle waited beside the bakery wall.",
  "The captain traced a route across the atlas.",
  "A green bottle floated near the wooden dock.",
  "The tailor pinned silk to the mannequin.",
  "A paper crown sat on the breakfast plate.",
  "The photographer framed a shadow on the staircase.",
  "A warm loaf cooled beside the open book."
];

const conditions = {
  picture: {
    label: "Pictures",
    noun: "pictures",
    description: "Visual forms, colors, and layouts.",
    stimuli: pictureStimuli,
    expected: "usually the strongest recognition"
  },
  word: {
    label: "Words",
    noun: "words",
    description: "Single verbal labels with fewer distinctive cues.",
    stimuli: wordStimuli,
    expected: "often harder than pictures"
  },
  sentence: {
    label: "Sentences",
    noun: "sentences",
    description: "Short meaningful statements, tested as whole items.",
    stimuli: sentenceStimuli,
    expected: "meaningful, but usually less vivid than pictures"
  }
};

const state = {
  phase: "intro",
  condition: "picture",
  targets: [],
  trials: [],
  studyIndex: 0,
  trialIndex: 0,
  correct: 0,
  hits: 0,
  falseAlarms: 0,
  answered: 0,
  feedback: ""
};

const stage = document.querySelector("#stage");
const controls = document.querySelector("#controls");
const progressPill = document.querySelector("#progress-pill");
const stageLabel = document.querySelector("#stage-label");
const seenCount = document.querySelector("#seen-count");
const answerCount = document.querySelector("#answer-count");
const accuracyCount = document.querySelector("#accuracy-count");
const studiedLabel = document.querySelector("#studied-label");
const labNote = document.querySelector("#lab-note");

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`#${tab.dataset.view}`).classList.add("is-active");
  });
});

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setCondition(condition) {
  state.condition = condition;
  render();
}

function startStudy() {
  const pool = shuffle(conditions[state.condition].stimuli);
  state.targets = pool.slice(0, 18);
  const lures = pool.slice(18, 36);
  state.trials = shuffle([
    ...state.targets.map((stimulus) => ({ stimulus, old: true })),
    ...lures.map((stimulus) => ({ stimulus, old: false }))
  ]);
  state.phase = "study";
  state.studyIndex = 0;
  state.trialIndex = 0;
  state.correct = 0;
  state.hits = 0;
  state.falseAlarms = 0;
  state.answered = 0;
  state.feedback = "";
  render();
}

function beginTest() {
  state.phase = "test";
  state.feedback = "";
  render();
}

function answer(seen) {
  const trial = state.trials[state.trialIndex];
  const wasCorrect = seen === trial.old;
  state.correct += wasCorrect ? 1 : 0;
  state.hits += seen && trial.old ? 1 : 0;
  state.falseAlarms += seen && !trial.old ? 1 : 0;
  state.answered += 1;
  state.feedback = wasCorrect ? "Correct" : trial.old ? "This item was in the study set." : "This item is new.";
  state.trialIndex += 1;
  state.phase = state.trialIndex >= state.trials.length ? "results" : "feedback";
  render();
}

function nextTrial() {
  state.phase = "test";
  state.feedback = "";
  render();
}

function nextStudyCard() {
  state.studyIndex += 1;
  if (state.studyIndex >= state.targets.length) {
    state.phase = "break";
  }
  render();
}

function renderPicture(stimulus, size = "") {
  return `
    <div class="picture-card photo-card ${size}">
      <img src="${stimulus.src}" alt="${stimulus.name}" loading="eager">
    </div>
  `;
}

function renderTextStimulus(text, type) {
  return `<div class="text-card ${type}" role="img" aria-label="${text}">${text}</div>`;
}

function renderStimulus(stimulus, size = "") {
  if (state.condition === "picture") {
    return renderPicture(stimulus, size);
  }
  return renderTextStimulus(stimulus, state.condition);
}

function updateStats() {
  const condition = conditions[state.condition];
  const studied = state.phase === "intro" ? 0 : Math.min(state.studyIndex + 1, state.targets.length);
  seenCount.textContent = String(studied);
  answerCount.textContent = String(state.answered);
  accuracyCount.textContent = state.answered ? `${Math.round((state.correct / state.answered) * 100)}%` : "--";
  studiedLabel.textContent = `${condition.noun} studied`;
  labNote.textContent = `Current material: ${condition.label}. Shepard's comparison showed picture recognition was especially strong, with words and sentences providing useful contrast.`;
}

function renderIntro() {
  const condition = conditions[state.condition];
  stageLabel.textContent = "Choose Materials";
  progressPill.textContent = condition.label;
  stage.innerHTML = `
    <div class="intro">
      <h2>Try Shepard's recognition-memory comparison.</h2>
      <p>Choose pictures, words, or sentences. You will study 18 ${condition.noun}, then decide which test items are old and which are new.</p>
      <div class="condition-picker" aria-label="Experiment material type">
        ${Object.entries(conditions).map(([key, item]) => `
          <button class="condition-card ${state.condition === key ? "is-active" : ""}" type="button" data-condition="${key}">
            <strong>${item.label}</strong>
            <span>${item.description}</span>
          </button>
        `).join("")}
      </div>
      ${state.condition === "picture" ? `
        <div class="mini-strip" aria-hidden="true">
          ${pictureStimuli.slice(0, 6).map((stimulus) => renderPicture(stimulus, "small")).join("")}
        </div>
      ` : ""}
    </div>
  `;
  controls.innerHTML = `<button class="button" type="button" id="start">Start ${condition.label} Demo</button>`;
  document.querySelectorAll("[data-condition]").forEach((button) => {
    button.addEventListener("click", () => setCondition(button.dataset.condition));
  });
  document.querySelector("#start").addEventListener("click", startStudy);
}

function renderStudy() {
  const condition = conditions[state.condition];
  const stimulus = state.targets[state.studyIndex];
  stageLabel.textContent = `${condition.label} Study Phase`;
  progressPill.textContent = `${state.studyIndex + 1} / ${state.targets.length}`;
  stage.innerHTML = renderStimulus(stimulus);
  controls.innerHTML = `<button class="button" type="button" id="next-study">Next Item</button>`;
  document.querySelector("#next-study").addEventListener("click", nextStudyCard);
}

function renderBreak() {
  const condition = conditions[state.condition];
  stageLabel.textContent = "Recognition Test";
  progressPill.textContent = "18 old + 18 new";
  stage.innerHTML = `
    <div class="intro">
      <h2>Now test your memory for ${condition.noun}.</h2>
      <p>Choose Seen if the item appeared in the study set, or New if it did not.</p>
    </div>
  `;
  controls.innerHTML = `<button class="button" type="button" id="begin-test">Begin Test</button>`;
  document.querySelector("#begin-test").addEventListener("click", beginTest);
}

function renderTest() {
  const trial = state.trials[state.trialIndex];
  stageLabel.textContent = "Recognition Test";
  progressPill.textContent = `${state.trialIndex + 1} / ${state.trials.length}`;
  stage.innerHTML = `
    <div class="test-layout">
      ${renderStimulus(trial.stimulus)}
      <div class="feedback"></div>
    </div>
  `;
  controls.innerHTML = `
    <button class="button" type="button" id="seen">Seen</button>
    <button class="button secondary" type="button" id="new">New</button>
  `;
  document.querySelector("#seen").addEventListener("click", () => answer(true));
  document.querySelector("#new").addEventListener("click", () => answer(false));
}

function renderFeedback() {
  const previous = state.trials[state.trialIndex - 1];
  const wrong = state.feedback !== "Correct";
  stageLabel.textContent = "Recognition Test";
  progressPill.textContent = `${state.trialIndex} / ${state.trials.length}`;
  stage.innerHTML = `
    <div class="test-layout">
      ${renderStimulus(previous.stimulus)}
      <div class="feedback ${wrong ? "wrong" : ""}">${state.feedback}</div>
    </div>
  `;
  controls.innerHTML = `<button class="button" type="button" id="next-trial">Next</button>`;
  document.querySelector("#next-trial").addEventListener("click", nextTrial);
}

function renderResults() {
  const condition = conditions[state.condition];
  const accuracy = Math.round((state.correct / state.trials.length) * 100);
  const hitRate = Math.round((state.hits / state.targets.length) * 100);
  const falseAlarmRate = Math.round((state.falseAlarms / (state.trials.length - state.targets.length)) * 100);
  stageLabel.textContent = "Results";
  progressPill.textContent = `${accuracy}%`;
  stage.innerHTML = `
    <div class="result">
      <h2>You recognized ${state.correct} of ${state.trials.length} ${condition.noun}.</h2>
      <p>Your hit rate was ${hitRate}%, meaning you said Seen to items that really were in the study set. Your false alarm rate was ${falseAlarmRate}%, meaning you said Seen to items that were actually new.</p>
      <p>For ${condition.noun}, this demo is ${condition.expected}. Run the other material types to feel the contrast Shepard studied between pictures, words, and sentences.</p>
    </div>
  `;
  controls.innerHTML = `
    <button class="button" type="button" id="again">Run ${condition.label} Again</button>
    <button class="button secondary" type="button" id="change">Change Materials</button>
    <button class="button secondary" type="button" id="read-more">Read Explanation</button>
  `;
  document.querySelector("#again").addEventListener("click", startStudy);
  document.querySelector("#change").addEventListener("click", () => {
    state.phase = "intro";
    render();
  });
  document.querySelector("#read-more").addEventListener("click", () => {
    document.querySelector('[data-view="explain"]').click();
  });
}

function render() {
  updateStats();
  if (state.phase === "intro") renderIntro();
  if (state.phase === "study") renderStudy();
  if (state.phase === "break") renderBreak();
  if (state.phase === "test") renderTest();
  if (state.phase === "feedback") renderFeedback();
  if (state.phase === "results") renderResults();
}

render();
