
# PRD: Happy Birthday, Wandeme! — Interactive Birthday Website

## 1. Overview
A single-page, mobile-first interactive birthday site for **Wandeme Ipfi Mamatsharaga**. The site opens with a bold "Happy Birthday" hero, moves into a set of interactive cards built around his personality and interests, and ends with an open space for a letter from a friend to be pasted in.

Current trend research (2026) shows the best-performing personal birthday sites lean into: staged/scroll-based reveals, playful micro-interactions on cards rather than static text, confetti/celebration moments, and a "choose your own path" feel rather than one long scroll of text. This PRD follows that pattern — kept simple enough to build fast.

## 2. Goals
- Make him feel specifically, personally celebrated (not a generic template)
- Give him small things to click/tap that reward interaction (sound, animation, easter eggs)
- End on an emotional high note: the letter

## 3. Site Structure / Components

### A. Hero Section
- Big headline: **"Happy Birthday, Wandeme! 🎉"**
- Subtext: short line about him (e.g. "the guy who'd rather nap than talk to me")
- Background: warm gradient or confetti animation on load
- Optional: a "Kha pass'e bola" easter-egg button that triggers a funny sound/animation when clicked

### B. "About Him" Card
- Short, playful bio pulling from his personality: loves sleep (with a wink about the 10+ sleeping videos), can't laugh without sounding like he's dying, hates being woken up, hates disappointment (hence always ordering burger and chips)
- Style: single card, photo placeholder + text

### C. Music Card (Drums / Bass / Sax)
- **Placeholder image: drums**
- Copy: drumming runs in the family (his dad plays too), currently learning bass, dream to learn saxophone — no teacher yet
- Interaction: clicking the drum image plays a short drum-hit sound (Web Audio API)

### D. Football Card
- Teams: Orlando Pirates + Manchester City
- Messi as his favourite player, but "no favourite OP player — he just yells at all of them"
- Quote callout styled like a speech bubble: *"kha pass'e bola, thoho ya mianu"*
- **Placeholder image: soccer ball**
- Interaction: clicking the ball triggers a small "goal celebration" animation (confetti burst or ball spin)

### E. Favourites Grid
- Small icon-grid or 2x2 card layout:
  - Food: Spaghetti and mince (pap runs a close second, Venda pride)
  - Snacks: Oreos + Top Deck chocolate ("broke but he'll make a plan")
  - Cake: Checkers Chocolate Mousse or Woolworths Caramel Swirl
  - Brand: Old Khaki (t-shirt collector)

### F. Dream Car Card
- **Placeholder image: BMW 340i**
- Copy: he loves cars in general, but always circles back to the 340i

### G. Catchphrase Strip
- A small marquee/ticker or repeating banner with his go-to lines: **"Ndo neta"** / **"Ndi na ndala"**
- Light, humorous styling — this is a running joke section, not a heavy one

### H. Letter Section (bottom of page)
- Heading: "A Letter For You"
- Open text block / styled "letter card" with space for the pasted message from his friend
- Style: looks like an actual letter — slight paper texture or card background, signature line at the end

## 4. Design System

**Color Palette**
- Primary: Warm orange/gold (celebratory, ties to confetti/cake themes) — `#F4A93B`
- Secondary: Deep navy or charcoal for text/contrast — `#1F2937`
- Accent: Soft coral or pink for highlights/buttons — `#FF6B6B`
- Background: Off-white / cream — `#FFF8F0`

**Typography**
- Headings: Bold, rounded sans-serif (e.g. Poppins or Fredoka) — playful but readable
- Body: Clean sans-serif (e.g. Inter or Nunito)
- Hero headline: extra large, bold weight, slight drop shadow or outline for pop

**Spacing & Layout**
- Mobile-first, single column, generous padding between sections
- Cards: rounded corners (16–20px radius), soft drop shadow, light hover/tap scale effect

**Iconography**
- Simple line or flat icons for football, music notes, food, cars

## 5. Animation Notes
- **On load:** confetti burst or falling balloons across hero
- **Scroll reveals:** each card fades/slides in as user scrolls (staged reveal, not all at once)
- **Card interactions:** slight scale-up + shadow increase on tap; sound/animation triggers on drum, ball, and easter-egg elements
- **Letter section:** gentle fade-in, maybe an "envelope opening" animation before the text reveals

## 6. Placeholder Images Needed
1. Drums (for Music Card)
2. Guitar/bass (for Music Card, secondary image)
3. Soccer ball (for Football Card)
4. BMW 340i (for Dream Car Card)

*(All placeholders can be swapped later with real photos or illustrations.)*

## 7. Tech Stack
- **Framework:** Next.js (fast build, easy Vercel deploy, good for a shareable single link)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll reveals, card interactions) + a lightweight confetti library (e.g. canvas-confetti)
- **Sound:** Web Audio API for drum-hit sound on click
- **Hosting:** Vercel (free tier, instant shareable link)
- **Images:** Static placeholders in `/public`, swappable later

## 8. Letter From a Friend
*(Paste the letter text here before sending to the developer/designer)*

> Brother man, you're pushing 30! 🤣 if only the little kid on the picture didn't wish to be older, you wouldn't be here 🙂‍↕️. Jokes aside, happy birthday Ipfi ❤️! I hope God blesses you with more wisdom as you grow. I hope He blesses you with money so that I don't have to worry about getting a degree 🤣, you're my only plan B (jk).
> 
> Next time, I'm gonna get you an entire drum kit and the bass guitar that you've always wanted. Just keep my finances in prayer. 🥺🙏🏾
> 
> I know people that push 30 nag about their back most of the time, so today you're getting A FREE FULL MASSAGE! 🙂‍↕️❤️ Congratulations! 🙂‍↕️
> 
> I love you Wandeme Ipfi Mamatsharaga and happy birthday! 🥳