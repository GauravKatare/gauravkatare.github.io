/**
 * MECHANISTIC INTERPRETABILITY INTERACTIVE LAB
 * Demonstrates 2-Layer Transformer Induction Circuit (ARENA Module 1)
 * Explaining in-context learning: [A][B] ... [A] -> [B]
 */

document.addEventListener('DOMContentLoaded', () => {
  initInterpLab();
});

function initInterpLab() {
  const inputEl = document.getElementById('interp-input');
  const tokenStreamEl = document.getElementById('token-stream');
  const presetBtns = document.querySelectorAll('.lab-preset-btn');
  const ablationSlider = document.getElementById('ablation-slider');
  const ablationValEl = document.getElementById('ablation-val');
  const predTokenEl = document.getElementById('pred-token');
  const predProbEl = document.getElementById('pred-prob');
  const stepL0Desc = document.getElementById('step-l0-desc');
  const stepL1Desc = document.getElementById('step-l1-desc');

  if (!inputEl || !tokenStreamEl) return;

  const presets = {
    alice: "Alice and Bob went to the park. Later, Alice and",
    code: "def evaluate_model(prompt): return evaluate_model(",
    pattern: "pattern alpha beta gamma ... pattern alpha"
  };

  function tokenize(text) {
    // Basic whitespace/punctuation tokenization representative of BPE tokens
    const tokens = [];
    const regex = /[A-Za-z0-9_]+|[^\s\w]|\s+/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match[0].trim().length > 0) {
        tokens.push(match[0]);
      }
    }
    return tokens.length > 0 ? tokens : ["Alice", "and", "Bob", "...", "Alice", "and"];
  }

  function analyzeInductionCircuit(tokens, ablationWeight) {
    // Current query token is the last token
    const lastIdx = tokens.length - 1;
    const currentToken = tokens[lastIdx];
    
    // Look for previous occurrences of currentToken that had a following token
    let matchIdx = -1;
    let predictedTarget = "???";
    let priorToken = lastIdx > 0 ? tokens[lastIdx - 1] : "";

    // Search for repeated bigram or token
    for (let i = 0; i < lastIdx - 1; i++) {
      if (tokens[i].toLowerCase() === currentToken.toLowerCase()) {
        // Found matching token [A]
        matchIdx = i;
        predictedTarget = tokens[i + 1];
        break;
      }
    }

    // Baseline confidence when circuit is fully intact vs ablated
    const baseProb = matchIdx !== -1 ? 92.4 : 14.5;
    const ablatedProb = (baseProb * (ablationWeight / 100) + (100 - ablationWeight) * 0.08).toFixed(1);

    return {
      tokens,
      lastIdx,
      matchIdx,
      targetIdx: matchIdx !== -1 ? matchIdx + 1 : -1,
      targetToken: matchIdx !== -1 ? predictedTarget : (tokens[0] || "[End]"),
      currentToken,
      priorToken,
      probability: ablatedProb,
      ablationWeight
    };
  }

  function renderVisualizer() {
    const text = inputEl.value.trim() || presets.alice;
    const tokens = tokenize(text);
    const weight = parseInt(ablationSlider ? ablationSlider.value : 100, 10);
    const result = analyzeInductionCircuit(tokens, weight);

    // Update Token Stream Chips
    tokenStreamEl.innerHTML = '';
    result.tokens.forEach((tok, idx) => {
      const chip = document.createElement('div');
      chip.className = 'token-chip';
      
      if (idx === result.matchIdx) {
        chip.classList.add('match-a');
        chip.title = `Token [A] source: "${tok}"`;
      } else if (idx === result.targetIdx) {
        chip.classList.add('match-b');
        chip.title = `Token [B] induction target: "${tok}"`;
      } else if (idx === result.lastIdx) {
        chip.classList.add('match-a');
        chip.title = `Current query token [A]: "${tok}"`;
      }

      chip.innerHTML = `<span>${escapeHtml(tok)}</span><span class="idx">${idx}</span>`;
      tokenStreamEl.appendChild(chip);
    });

    // Add target prediction chip
    const predChip = document.createElement('div');
    predChip.className = 'token-chip target-pred';
    predChip.innerHTML = `<span>➔ ${escapeHtml(result.targetToken)}</span><span class="idx">Pred</span>`;
    tokenStreamEl.appendChild(predChip);

    // Update Output Details
    if (predTokenEl) predTokenEl.textContent = `"${result.targetToken}"`;
    if (predProbEl) predProbEl.textContent = `${result.probability}%`;

    // Update Circuit Steps
    if (stepL0Desc) {
      if (result.targetIdx !== -1) {
        stepL0Desc.innerHTML = `<strong>Head 0.1 (Previous-Token Head)</strong> attends to position <code>${result.matchIdx} ("${result.tokens[result.matchIdx]}")</code> from position <code>${result.targetIdx} ("${result.tokens[result.targetIdx]}")</code>, writing the representation of <em>"preceded by ${result.tokens[result.matchIdx]}"</em> into the residual stream.`;
      } else {
        stepL0Desc.innerHTML = `Previous-Token head scans residual activations, carrying positional context across adjacent tokens.`;
      }
    }

    if (stepL1Desc) {
      if (result.matchIdx !== -1) {
        stepL1Desc.innerHTML = `<strong>Head 1.4 (Induction Head)</strong> computes query on current token <code>${result.lastIdx} ("${result.currentToken}")</code>. The QK-circuit scores high similarity with token <code>${result.targetIdx}</code>'s key. The OV-circuit then copies token <code>"${result.targetToken}"</code> directly to logit output with ${result.ablationWeight}% circuit strength.`;
      } else {
        stepL1Desc.innerHTML = `No repeated token found yet. Enter a sequence with a repeating token or phrase to see the induction circuit activate.`;
      }
    }

    if (ablationValEl) {
      ablationValEl.textContent = `${weight}%`;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Event Listeners
  inputEl.addEventListener('input', renderVisualizer);

  if (ablationSlider) {
    ablationSlider.addEventListener('input', renderVisualizer);
  }

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-preset');
      if (presets[key]) {
        inputEl.value = presets[key];
        renderVisualizer();
      }
    });
  });

  // Initial render
  inputEl.value = presets.alice;
  renderVisualizer();
}
