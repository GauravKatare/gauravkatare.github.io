# Gaurav Katare — Personal Website

> **Live Website:** [gauravkatare.github.io](https://gauravkatare.github.io/)

A fast, minimalist, academic personal website inspired by [sukratii.github.io](https://sukratii.github.io/), tailored specifically to showcase the transition from **Large-Scale Systems & Cryptography (SWE III @ Google London)** to **Technical AI/ML Safety & Alignment Engineering**.

---

## ✨ Features & Sections

1. **Academic Two-Column Architecture**:
   - Fixed desktop left sidebar with profile photo, credentials, status badges, social links, 1-click email copy, and dark/light theme toggle.
   - Clean, readable right pane with smooth section transitions and active scroll-spy navigation.
   - Fully responsive across mobile, tablet, and desktop viewports.

2. **Core Sections**:
   - **About Me**: Narrative connecting large-scale Google infrastructure, cryptography, and LLM agent tool sandboxing to technical AI safety.
   - **Safety Focus Areas**: Mechanistic interpretability, agent sandboxing & governance, model evaluations, and safety infrastructure.
   - **Projects**: Recobee (LLM Evaluation & Script Quality Assessment Engine using AWS Bedrock & SageMaker).
   - **Industry Experience**: Google London (SWE III), Media.net (SDE), Cisco (SDE Intern).
   - **Publications & Education**: Academic research paper on personality prediction with BibTeX citation modal, B.Tech IT from MNNIT Prayagraj (CPI 9.07, top 10), JEE ranks, Vibrant Academy, S.N. Public School, and St. Mary's School & College.
   - **Competitive Rigor**: Codeforces Expert (1749), CodeChef 5-Star (2034), Google Kickstart Top Ranks, and IIT JEE Advanced (AIR 4683).

3. **Zero-Dependency & GitHub Pages Ready**:
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
3. Commit and push:
   ```bash
   git add assets/images/profile.jpg index.html
   git commit -m "Update profile photo"
   git push
   ```
