# Gaurav Katare — AI Safety & Alignment Engineering Portfolio

> **Live Website:** [gauravkatare.github.io](https://gauravkatare.github.io/)

A fast, minimalist, academic personal website inspired by [sukratii.github.io](https://sukratii.github.io/), tailored specifically to showcase the transition from **Large-Scale Systems & Cryptography (SWE III @ Google London)** to **Technical AI/ML Safety & Alignment Engineering**.

---

## ✨ Features & Highlights

1. **Academic Two-Column Architecture**:
   - Fixed desktop left sidebar with profile photo, credentials, status badges, social links, 1-click email copy, and dark/light theme toggle.
   - Clean, readable right pane with smooth section transitions and active scroll-spy navigation.
   - Fully responsive for mobile and tablet devices.

2. **Interactive AI Safety Lab (Induction Circuit Visualizer)**:
   - Live in-browser demonstration of the 2-layer transformer induction circuit (`[A][B] ... [A] ➔ [B]`), the foundational mechanism behind in-context learning discovered in mechanistic interpretability (ARENA Module 1).
   - Allows typing arbitrary prompts or testing presets.
   - Interactive causal ablation slider demonstrating confidence collapse when the circuit is ablated.

3. **Strategic Positioning for AI Safety Roles**:
   - Positions your background at the intersection of **Empirical AI Safety (Mechanistic Interp & Evals)** and **Hardened Systems Infrastructure (Google SWE III)**.
   - Highlights your experience with **LLM Agent Tool Registries (MCP & AppFunctions)**, **1TB+ Parallel C++ Ingestion**, **Quantum-Resistant Cryptography**, and **KMS Security**.
   - Showcases your **ARENA 3.0 Fellow** explorations and **BlueDot Impact Technical AI Safety** foundations.
   - Highlights elite algorithmic caliber: **Codeforces Expert (1749)**, **CodeChef 5-Star (2034)**, **Google Kickstart Top Ranks**, **IIT JEE Advanced AIR 4683**, and **MNNIT Prayagraj CPI 9.07 (Top 10)**.

4. **Safety Notes & Deep Dives**:
   - Included full technical essays in `notes/` covering:
     - *From Google Scale to Frontier AI Safety: Why the Next Frontier of Alignment is Systems Engineering*
     - *Securing the Model Context Protocol (MCP): Sandboxing Untrusted Tool Calls in Autonomous Agentic Systems*
     - *Deconstructing Induction Circuits in Transformers: An ARENA Implementation Walkthrough*

5. **Zero-Dependency & GitHub Pages Ready**:
   - Pure HTML5, modern CSS custom properties, and vanilla JS.
   - Instant loading (<50ms), SEO-optimized meta tags, OpenGraph previews, and print-ready CSS.

---

## 🚀 Quick Start: Local Preview

To preview the website locally in your browser:

```bash
cd gauravkatare.github.io
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your web browser.

---

## 🌐 Deploy to GitHub Pages (`gauravkatare.github.io`)

1. Create a public repository on GitHub named `gauravkatare.github.io` (under the account `GauravKatare`).
2. Run the following commands in this directory:

```bash
cd /Users/gauravkatare/Documents/gauravkatare.github.io

# Add all files and make initial commit
git add .
git commit -m "Launch AI Safety Engineering personal website"

# Connect to your GitHub repository
git remote add origin https://github.com/GauravKatare/gauravkatare.github.io.git

# Set main branch and push
git branch -M main
git push -u origin main
```

Within 1–2 minutes, your website will be live at:
**`https://gauravkatare.github.io/`**

---

## 🖼️ How to Add Your Real Photo

The site currently displays a vector avatar (`assets/images/avatar.svg`).
To replace it with your real headshot:
1. Place your photo inside `assets/images/` and name it `profile.jpg`.
2. Update the `img` tag in `index.html`:
   ```html
   <img src="assets/images/profile.jpg" alt="Gaurav Katare Headshot">
   ```
3. Commit and push: `git add assets/images/profile.jpg index.html && git commit -m "Update profile photo" && git push`

---

## 📄 How to Add Your Resume PDF

1. Place your resume PDF in `assets/` and name it `resume.pdf`.
2. You can link to it directly from any button or navigation item:
   ```html
   <a href="assets/resume.pdf" target="_blank" class="project-link-btn">Download CV (PDF)</a>
   ```

---

## 💡 Exciting Ideas for Your Transition to AI/ML Safety

1. **Targeting AI Safety Labs**:
   - Top safety organizations (Anthropic Safety Team, Google DeepMind Alignment, Apollo Research, METR, UK AI Safety Institute, Redwood Research) have a major shortage of engineers who have deep systems/infrastructure/cryptography experience and understand transformer internals.
   - Position yourself as a **Safety Infrastructure / Empirical Alignment Engineer**: building sandboxes for testing scheming models, automated interpretability tooling, and secure agent tool execution.

2. **Publish Distillations on Alignment Forum & LessWrong**:
   - Cross-post the essays in `notes/` to LessWrong and the Alignment Forum under your name, and link them back to your site. This gives instant visibility in the AI safety community.

3. **Add Live Interactive Sparse Autoencoder (SAE) Visualizer**:
   - As you progress through the ARENA SAE module, add a mini feature explorer where visitors can search for monosemantic features (e.g. "code syntax", "deception indicator", "sentiment") in a toy language model.
