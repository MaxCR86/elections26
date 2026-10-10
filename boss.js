// ---------- the secret final boss: Sarah Netanyahu, after the last man standing ----------
// Loaded after finishers.js; reuses the inline script's helpers and the finisher kit (FK, FZS).
// Three acts, about 100 s: a fake ending (confetti, credits) → "הגברת" → "בלפור" + calling backup → the final form → the ballots decide.
// Satire guardrails (Max, 2026-10-10): documented events only, exaggerated (meals, ice cream, the bottle affair, the milk bag, the tape, Balfour, the beauty filter);
// nothing about her body or children, no sexualisation, no crime claims. Her forms are a beauty-filter gag: no filter → heavy filter → adult anime villain empress.
// Odds (admin: game.boss.sarah_win, default 60): she wins that share of attempts. Netanyahu always loses to her (Max).
document.head.append(Object.assign(document.createElement('style'), { textContent: `
.bz-dark { position: absolute; inset: 0; z-index: 10; background: #000; opacity: 0; pointer-events: none; }
.bz-conf { position: absolute; inset: 0; z-index: 9; overflow: hidden; pointer-events: none; }
.bz-conf i { position: absolute; top: -6%; width: 2.2cqw; height: 3.4cqw; border-radius: .4cqw; }
.bz-title { position: absolute; left: 4%; right: 4%; top: 20%; z-index: 11; text-align: center; font: 400 10cqw/1.1 var(--f-he); color: #ffd84a; text-shadow: 0 .8cqw 0 #8a3b00, 0 0 5cqw #ff8a2a; opacity: 0; }
.bz-roll { position: absolute; left: 10%; right: 10%; top: 100%; z-index: 11; display: grid; gap: 2cqw; text-align: center; font: 700 4cqw/1.4 var(--f-ui); color: #fffc; text-shadow: 0 .4cqw 1cqw #000; }
.bz-roll b { font: 400 7cqw/1 var(--f-he); color: #ffd84a; }
.bz-warn { position: absolute; left: 0; right: 0; top: 40%; z-index: 20; padding: 3cqw 0; text-align: center; direction: ltr; font: italic 900 13cqw/1 var(--f-mark); font-stretch: 115%; color: #fff;
  background: repeating-linear-gradient(-45deg, #d4142a 0 5cqw, #8a0a18 5cqw 10cqw); border-block: .8cqw solid #ffd84a; opacity: 0; pointer-events: none; }
.bz-chal { position: absolute; left: 0; right: 0; top: 54%; z-index: 20; padding: 2.6cqw 0; text-align: center; background: #d4142a; color: #fff; font: 400 7cqw/1 var(--f-he); opacity: 0; pointer-events: none; }
.bz-sat { position: absolute; left: 0; right: 0; bottom: 3%; z-index: 20; text-align: center; font: 700 3.2cqw/1 var(--f-ui); color: #fff9; pointer-events: none; }
.bz-plate { position: absolute; left: 6%; top: 62%; z-index: 12; display: grid; gap: 1cqw; opacity: 0; pointer-events: none; }
.bz-plate b { font: 400 10cqw/1 var(--f-he); color: #ff9ad5; text-shadow: 0 .8cqw 0 #5a0d3a, 0 0 4cqw #ff3aa8; }
.bz-plate small { font: 700 4cqw/1 var(--f-ui); color: #fff; letter-spacing: .04em; }
.bz-say { position: absolute; z-index: 13; max-width: 62%; background: #fff; color: #111; border: .7cqw solid #111; border-radius: 5cqw; box-shadow: .9cqw .9cqw 0 #111; font: 400 5cqw/1.2 var(--f-he); padding: 2.4cqw 3.6cqw; opacity: 0; pointer-events: none; }
.bz-say::after { content: ""; position: absolute; bottom: -2.6cqw; width: 4cqw; height: 4cqw; background: inherit; border: solid #111; border-width: 0 .7cqw .7cqw 0; transform: skewX(18deg) rotate(45deg); }
.bz-say.tail-r::after { right: 24%; } .bz-say.tail-l::after { left: 24%; }
.bz-say.boss { background: #ffe1f1; border-color: #ff3aa8; box-shadow: .9cqw .9cqw 0 #ff3aa8; } .bz-say.boss::after { border-color: #ff3aa8; }
.bossHud .p2 i { background: linear-gradient(#ffb3df, #e0217a); } .bossHud .p2 b small { font: italic 800 4.4cqw/1 var(--f-mark); color: #ff9ad5; margin-right: 1.6cqw; }
.bossHud .clock { color: #ff9ad5; text-shadow: 0 0 2cqw #ff3aa8; }
.bz-sum { position: absolute; inset: 0; z-index: 14; display: grid; align-content: center; gap: 4cqw; padding: 0 8%; background: radial-gradient(ellipse at 50% 40%, #1a2140f2, #05060bf7 75%); opacity: 0; }
.bz-sum h2 { margin: 0; text-align: center; font: 400 9cqw/1 var(--f-he); color: #ffd84a; text-shadow: 0 0 4cqw #ff8a2a88; }
.bz-sum .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2cqw; }
.bz-sum .tile i { font-size: 2.8cqw; }
.bz-bust { position: absolute; left: -28%; right: -28%; top: 9%; height: 58%; z-index: 3; pointer-events: none; }
.bz-bust img { width: 100%; height: 100%; object-fit: contain; object-position: 50% 0; filter: drop-shadow(0 0 6cqw #ff3aa8aa); }
.bz-meter { position: absolute; left: 12%; right: 12%; top: 30%; z-index: 13; display: grid; gap: 1.6cqw; text-align: center; opacity: 0; pointer-events: none; }
.bz-meter b { font: 400 7cqw/1.1 var(--f-he); color: #fff; text-shadow: 0 0 3cqw #3ae0ff; }
.bz-meter span { display: block; height: 4cqw; border: .5cqw solid #fff; border-radius: 1cqw; overflow: hidden; background: #0008; }
.bz-meter span i { display: block; height: 100%; width: 0; background: linear-gradient(90deg, #3ae0ff, #fff, #ffd84a); }
.bz-slip { position: absolute; z-index: 12; width: 7cqw; height: 9cqw; margin: -4.5cqw 0 0 -3.5cqw; background: #fffdf4; border: .4cqw solid #c9a26b; border-radius: .6cqw; box-shadow: 0 0 2cqw #fff8; pointer-events: none; }
.bz-over { position: absolute; inset: 0; z-index: 22; display: grid; align-content: center; justify-items: center; gap: 3cqw; padding: 0 10%; background: #000d; text-align: center; opacity: 0; }
.bz-over .go { direction: ltr; font: italic 900 15cqw/1 var(--f-mark); font-stretch: 115%; color: #ff4a3a; text-shadow: 0 1cqw 0 #5a0d0d, 0 0 6cqw #ff4a3a; }
.bz-over p { margin: 0; font: 400 6cqw/1.2 var(--f-he); color: #fff; }
.bz-over .count { direction: ltr; font: italic 900 24cqw/1 var(--f-mark); color: #ffd84a; text-shadow: 0 1cqw 0 #8a3b00; }
.bz-over .arc { padding-inline: 10cqw; }
/* the three endings: beam clash, the ballot box, the home run */
.bz-beam { position: absolute; z-index: 12; height: 7cqw; margin-top: -3.5cqw; border-radius: 4cqw; pointer-events: none; }
.bz-beam.h { background: linear-gradient(#fff, #fff) center / 100% 34% no-repeat, linear-gradient(#3ae0ff, #c9f8ff, #3ae0ff); box-shadow: 0 0 4cqw #3ae0ff, 0 0 12cqw #3ae0ff88; }
.bz-beam.s { background: linear-gradient(#fff, #fff) center / 100% 34% no-repeat, linear-gradient(#ff3aa8, #ffc9e8, #ff3aa8); box-shadow: 0 0 4cqw #ff3aa8, 0 0 12cqw #ff3aa888; }
.bz-orb { position: absolute; z-index: 13; width: 20cqw; height: 20cqw; margin: -10cqw 0 0 -10cqw; border-radius: 50%; pointer-events: none;
  background: radial-gradient(#fff 0 28%, #ffd84a 42%, #ff8a2acc 58%, transparent 70%); animation: orb .12s linear infinite alternate; }
@keyframes orb { to { transform: scale(1.25) rotate(20deg); } }
.bz-tap { position: absolute; left: 0; right: 0; top: 74%; z-index: 20; text-align: center; font: 400 11cqw/1 var(--f-he); color: #fff; -webkit-text-stroke: .5cqw #000; paint-order: stroke fill;
  text-shadow: 0 0 4cqw #3ae0ff; pointer-events: none; animation: tap .3s ease-in-out infinite alternate; }
@keyframes tap { to { transform: scale(1.15); } }
.bz-box { position: absolute; z-index: 8; top: 34%; width: 58cqw; height: 58%; translate: -50% 0; display: grid; place-items: center; background: linear-gradient(#f2f5fb, #b9c3d6);
  border: 1.4cqw solid #1d4fa0; border-radius: 2cqw; box-shadow: 0 3cqw 6cqw #000c, inset 0 -3cqw 0 #0002; pointer-events: none; }
.bz-box i { position: absolute; top: 6%; left: 22%; right: 22%; height: 2.6cqw; background: #111; border-radius: 1cqw; }
.bz-box b { font: 400 15cqw/1 var(--f-he); color: #1d4fa0; }
.bz-box .fz-stamp { left: 50%; top: 66%; }
.bz-star { position: absolute; z-index: 14; translate: -50% -50%; font: 900 14cqw/1 var(--f-mark); color: #fff; text-shadow: 0 0 3cqw #ffd84a, 0 0 8cqw #ffd84a; pointer-events: none; }
` }));

const BIMG = (n) => `img/boss/sarah_${n}.webp`;
const BOSS_ID = 'sarah';
// the 2 allies: the hero's own party first (strongest first), then the closest affiliate parties, then the hero's camp, closest in strength
function bossAllies(hero) {
  const inGame = (id) => id !== hero && [...R, ...L].some((r) => r[0] === id) && !OUT.has(id);
  const party = C.parties.find((p) => p.members.includes(hero)), near = (a, b) => Math.abs(PW(a) - PW(hero)) - Math.abs(PW(b) - PW(hero));
  const own = (party?.members || []).filter(inGame).sort((a, b) => PW(b) - PW(a));
  const aff = ((C.game.boss?.affiliates || {})[party?.name] || []).flatMap((n) => (C.parties.find((p) => p.name === n)?.members || []).filter(inGame).sort(near));
  const camp = (R.some((r) => r[0] === hero) ? R : L).map((r) => r[0]).filter(inGame).sort(near);
  return [...new Set([...own, ...aff, ...camp])];
}

function finale(hero, o = {}) {
  reset(); FX.clear(); cam.style.background = '#000'; document.body.classList.remove('done');
  const B = { sarah_win: 60, ...(C.game.boss || {}) }, T = C.boss, nm = FULL(hero), d = -1;   // the hero stands right and attacks leftwards
  const sarahWins = hero === 'netanyahu' || Math.random() * 100 < B.sarah_win;
  const cand = bossAllies(hero), team = window.FORCE_TEAM || cand.slice(0, 4).sort(() => Math.random() - .5).slice(0, 2);   // a fresh pair every attempt
  const bibi = team.indexOf('netanyahu');   // Bibi, when called in, betrays whoever called him and fights next to his wife (Max)
  const END = window.FORCE_END || pick(['beam', 'ballot', 'homer']);   // the final blow: one of three, at random
  const rr = (a, b) => a + Math.random() * (b - a) | 0;
  [1, 2, 3].forEach((f) => { new Image().src = BIMG(`f${f}`); }); ['f1', 'f2'].forEach((f) => ['stance', 'punch', 'kick', 'hit'].forEach((p) => { new Image().src = BIMG(`${f}_${p}`); }));
  [hero, ...team].forEach((id) => ['stance', 'punch', 'kick', 'hit'].forEach((p) => { new Image().src = POSE(id, p); }));
  track(o.rematch ? 'boss_rematch' : o.secret ? 'boss_secret' : 'boss_start', hero);
  skipBtn = uiBtn('skip', C.ui.skip, () => { track('boss_skip'); afterBoss(); });

  let t = 0; const beat = (dt, fn) => at((t += dt), fn);   // the timeline: every beat is ms after the previous one
  const say = (who, text, ms = 1800) => { const x = who.x, b = el('div', `bz-say${who === boss ? ' boss' : ''} ${x > 50 ? 'tail-r' : 'tail-l'}`, text); ms = readMs(text, ms);   // a comic bubble, up long enough to read
    b.style.cssText = `top:${who === boss ? 34 : 38}%;${x > 50 ? 'right' : 'left'}:${x > 50 ? 100 - x - 14 : x - 16}%`; cam.append(b);
    A(b, [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'none', offset: .12 }, { opacity: 1, offset: .88 }, { opacity: 0 }], { duration: ms, easing: 'ease-out' }).finished.then(() => b.remove()); };
  const big = (cls, html, ms, kf) => { ms = readMs(html, ms); const n = el('div', cls, html); cam.append(n); A(n, kf || [{ opacity: 0, transform: 'scale(1.8)' }, { opacity: 1, transform: 'none', offset: .15 }, { opacity: 1, offset: .85 }, { opacity: 0 }], { duration: ms, easing: 'ease-out' }).finished.then(() => n.remove()); return n; };
  const fighter = (id, x, h, flip, src) => { const w = h * 16 / 9, c = el('div', 'ch'); c.style.cssText = `left:${x - w / 2}%;top:${92 - h}%;width:${w}%;height:${h}%;z-index:5`;
    const mv = el('div', 'mv'), bob = el('div', 'bob'), img = Object.assign(new Image(), { src, alt: NAME[id] || '' }); if (flip) img.className = 'flip';
    bob.append(img); mv.append(bob); c.append(mv); cam.append(c);
    bob.animate([{ transform: 'translate(0,0)' }, { transform: `translate(${flip ? -1 : 1}cqw,-1.2%)` }], { duration: 440, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    return { c, mv, bob, img, id, x, k: flip ? 1 : 2 }; };
  const pose = (f, p, back) => { f.img.src = f.id === BOSS_ID ? BIMG(`${form}_${p}`) : POSE(f.id, p);
    if (back) setTimeout(() => { if (f.img.isConnected && !f.out) f.img.src = f.id === BOSS_ID ? BIMG(`${form}_stance`) : POSE(f.id, 'stance'); }, back); };
  const tx = (x, y = 0, r = 0) => ({ transform: `translate(${x}cqw,${y}cqw) rotate(${r}deg)` }), rest = { transform: 'none' };
  const go = (f, kf, ms, easing = 'cubic-bezier(.3,0,.2,1)') => f.mv.animate(kf, { duration: ms, easing });
  const hitFx = (f, hue, n = 46) => { f.img.animate([{ filter: 'brightness(3.5) saturate(0)' }, { filter: 'none' }], { duration: 150 }); FX.burst(f.x / 100, .64, n, { s0: 160, s1: 520, g: 500, life: .55, h: hue }); };

  // ---------- the stage ----------
  const bg = el('div', 'bgp'); bg.style.filter = 'brightness(.65) saturate(1.2)'; cam.append(bg, el('div', 'arena'));
  const H = fighter(hero, 70, 40, true, POSE(hero, 'stance'));
  let form = 'f1', boss = null, allies = [];
  const hud = el('div', 'fhud bossHud', `<div class="hp p1"><b>${nm}</b><span><em></em><i></i></span></div><div class="clock" dir="ltr">!</div><div class="hp p2"><b>${T.name}<small dir="ltr"></small></b><span><em></em><i></i></span></div>`);
  const bar = { 1: hud.querySelector('.p1 span'), 2: hud.querySelector('.p2 span') }, hp = { 1: 100, 2: 100 };
  const setHP = (k, v) => { hp[k] = Math.max(0, Math.min(100, Math.round(v))); bar[k].querySelector('i').style.width = hp[k] + '%'; setTimeout(() => (bar[k].querySelector('em').style.width = hp[k] + '%'), 380); };
  const layer = (n) => { hud.querySelector('.p2 small').textContent = n > 1 ? `x${n}` : ''; };
  const dark = el('div', 'bz-dark'); cam.append(dark);
  const sat = el('div', 'bz-sat', T.satire);

  // ---------- act 0: the fake ending (skipped on a rematch) ----------
  const conf = el('div', 'bz-conf'), roll = el('div', 'bz-roll', `<b>${C.credits.title}</b>${[hero, ...cand.slice(0, 6)].map((id) => `<span>${FULL(id)}</span>`).join('')}<span><bdi>DiMax</bdi></span>`);
  const confetti = (n, gold) => { for (let i = 0; i < n; i++) { const p = el('i'); p.style.left = `${Math.random() * 100}%`;
    p.style.background = gold ? pick(['#ffd84a', '#ffe9a0', '#f2a400', '#fff']) : pick(['#ffd84a', '#3ae0ff', '#ff3aa8', '#9dff3a', '#fff']); conf.append(p);
    A(p, [{ transform: `translateY(0) rotate(0deg)` }, { transform: `translate(${(Math.random() - .5) * 30}cqw, ${190 + Math.random() * 30}cqw) rotate(${(Math.random() - .5) * 1440}deg)` }], { duration: 2600 + Math.random() * 2600, delay: Math.random() * 2200, easing: 'linear', iterations: Infinity }); } };
  if (!o.rematch) {
    cam.append(conf, roll); confetti(70);
    const ttl = el('div', 'bz-title', fmt(o.secret ? T.secret : T.win_title, { name: nm })); cam.append(ttl);
    beat(0, () => { mix('fin'); music('fin'); sfx('crowd', .6); sfx('reveal', .6); flash(.7, 300); A(ttl, [{ opacity: 0, transform: 'scale(2)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.2,1.5,.4,1)' });
      H.bob.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-8%)' }], { duration: 360, direction: 'alternate', iterations: 8, easing: 'ease-out' }); });
    beat(2400, () => A(roll, [{ transform: 'translateY(0)' }, { transform: 'translateY(-150cqw)' }], { duration: 9000, easing: 'linear' }));
    beat(3200, () => { musicStop(.08); sfx('glitch', .8); cam.getAnimations({ subtree: true }).filter((a) => conf.contains(a.effect?.target) || a.effect?.target === roll).forEach((a) => a.pause());   // record scratch: the confetti freezes mid-air
      A(ttl, [{ filter: 'none' }, { filter: 'hue-rotate(160deg) saturate(3)' }], { duration: 300 }); });
    beat(900, () => { A(dark, [{ opacity: 0 }, { opacity: .94 }], { duration: 500 }); });
    [0, 380, 760, 1140].forEach((ms) => at(t + 600 + ms, () => sfx('step', .7)));   // heels in the dark
    beat(2000, () => { conf.remove(); roll.remove(); ttl.remove(); });
  }
  // WARNING ×3, then the challenger
  beat(o.rematch ? 300 : 200, () => { cam.append(sat); const w = el('div', 'bz-warn', T.warning); cam.append(w); duck(.2, 2);
    [0, 1, 2].forEach((i) => setTimeout(() => sfx('alarm', .7), i * 520));
    A(w, [{ opacity: 0 }, { opacity: 1, offset: .08 }, { opacity: .15, offset: .3 }, { opacity: 1, offset: .38 }, { opacity: .15, offset: .6 }, { opacity: 1, offset: .68 }, { opacity: 1, offset: .9 }, { opacity: 0 }], { duration: 1700 }).finished.then(() => w.remove()); });
  beat(1800, () => { big('bz-chal', T.challenger || C.victory.challenger, 1500, [{ opacity: 0, transform: 'scaleY(0)' }, { opacity: 1, transform: 'none', offset: .15 }, { opacity: 1, offset: .85 }, { opacity: 0 }]); sfx('vs', .8); });

  // ---------- act 1: "הגברת" ----------
  beat(1600, () => { A(dark, [{ opacity: .94 }, { opacity: 0 }], { duration: 400, fill: 'forwards' }); mix('fight'); music('bed'); open(.6);
    boss = fighter(BOSS_ID, 28, 46, false, BIMG('f1_stance'));
    const tray = el('div', 'prop'); tray.style.cssText = `width:44cqw;height:20cqw;left:${28 - 22}%;top:87%;z-index:4;--c:#ffd84a`; tray.append(Object.assign(new Image(), { src: BIMG('tray'), alt: '' })); cam.append(tray);
    [boss.c, tray].forEach((n) => A(n, [{ transform: 'translateX(-90cqw)' }, { transform: 'none' }], { duration: 1100, easing: 'cubic-bezier(.2,.9,.3,1)' }));   // she rolls in on the catering trolley
    sfx('whoosh', .7); setTimeout(() => { shake(10, 300); sfx('land', .8); A(tray, [{ opacity: 1 }, { opacity: 0 }], { duration: 700, delay: 600 }).finished.then(() => tray.remove()); }, 1100);
    cam.append(hud); A(hud, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: 900 });
    setHP(1, 100); hp[2] = 0; setHP(2, 0); layer(1); });
  beat(1300, () => { const p = el('div', 'bz-plate', `<b>${T.name}</b><small>${T.subtitle}</small>`); cam.append(p);
    A(p, [{ opacity: 0, transform: 'translateX(-20%)' }, { opacity: 1, transform: 'none', offset: .15 }, { opacity: 1, offset: .85 }, { opacity: 0 }], { duration: 2200 }).finished.then(() => p.remove());
    [0, 1, 2, 3, 4].forEach((i) => setTimeout(() => { sfx('bar', .4); setHP(2, (i + 1) * 20); }, 300 + i * 160));
    setTimeout(() => { if (C.catchphrase?.sarah) { say(boss, C.catchphrase.sarah, 2600); sfx('say_sarah', 1, false); duck(.2, 3); } }, 1400); });   // her own voice, from the tape
  beat(2200, () => say(boss, T.taunt1, 2000));
  if (hero === 'netanyahu') beat(1700, () => say(H, T.bibi_line, 1700));

  // ---------- the fight: simulated, not scripted (Max). Every exchange rolls who attacks, the move and the damage. ----------
  // Her bar empties → the next form (1 → 2 → 3, the one fixed order: it's the transformation). The hero drops low → backup is called, in whichever act.
  // After the allies arrive the twists land at random: Bibi's betrayal (only when he was picked), a defector, a sacrifice. The ending decides (sarahWins, 60%).
  let bust = null;
  const tgt = () => (form === 'f3' ? { img: bust.querySelector('img'), x: 40, mv: bust } : boss);
  const from = () => (form === 'f3' ? ['40%', '40%'] : ['36%', '60%']);   // where her throws start
  const hitBoss = (toB, hue = 330) => { if (!H.img.isConnected) return; hitSfx(pick(['jab', 'kick', 'upper'])); open(); shake(7, 200);
    if (form !== 'f3') { pose(boss, 'hit', 420); go(boss, [rest, tx(-6, 0, -5), rest], 380, 'ease-out'); } hitFx(tgt(), hue); setHP(2, toB); };
  const lunge = (f, kind, reach) => { sfx('step', .45); pose(f, kind, 380); go(f, [rest, { ...tx(d * reach), offset: .45 }, { ...tx(d * reach), offset: .6 }, rest], 760); };
  const heroHit = (toB, kind) => { lunge(H, kind, 22); setTimeout(() => hitBoss(toB), 360); };
  const allyHit = (a, toB, kind) => { lunge(a, kind, a.x - 44); setTimeout(() => hitBoss(toB, 200), 360); };
  const blocked = (f) => { lunge(f, 'punch', f === H ? 18 : f.x - 48); setTimeout(() => { sfx('block', .9); flash(.3, 80); hitFx(tgt(), 200, 24); say({ x: 30 }, T.laugh, 1100); }, 330); };
  const struck = (who, toH, hue, n = 60) => { if (!who.img.isConnected) return; hitSfx(pick(['jab', 'kick', 'upper'])); shake(8, 220); pose(who, 'hit', 420); hitFx(who, hue, n);
    go(who, [rest, tx(7, 0, 5), rest], 380, 'ease-out'); if (who === H) setHP(1, toH); };
  const steps = (toH, n) => { const a = hp[1]; return (j) => Math.round(a + (toH - a) * (j + 1) / n); };   // a multi-hit move lands its damage in n slices
  const MOVES = {
    icecream: [1500, (who, v) => throwAt(who, v, 'icecream', 16, 100, 720, 520, 'whoosh')],      // pistachio ice cream, lobbed like a grenade
    tray: [1500, (who, v) => throwAt(who, v, 'tray', 22, 45, 1440, 600, 'whoosh')],              // the catering tray, as a frisbee
    milk: [1400, (who, v) => throwAt(who, v, 'milk', 16, 210, 360, 480, 'jump')],                // milk in a bag
    bottles: [2700, (who, v) => { if (form !== 'f3') pose(boss, 'kick', 1800); sfx('alarm', .4); const st = steps(v, 5);   // the bottle affair: a rain of deposit bottles
      for (let i = 0; i < 14; i++) setTimeout(() => { if (!who.img.isConnected) return;
        const n = el('div', 'prop'); n.style.cssText = 'width:9cqw;height:9cqw;margin:-4.5cqw 0 0 -4.5cqw;--c:#9dff3a'; n.append(Object.assign(new Image(), { src: BIMG('bottle'), alt: '' })); cam.append(n);
        const x = who.x - 12 + Math.random() * 26; A(n, [{ left: `${x}%`, top: '-5%', transform: 'rotate(0)' }, { left: `${x + (Math.random() - .5) * 8}%`, top: '64%', transform: `rotate(${(Math.random() - .5) * 900}deg)` }], { duration: 520, easing: 'ease-in' }).finished.then(() => n.remove());
        setTimeout(() => { sfx('tick', .7); if (i % 3 === 0) { pose(who, 'hit', 300); hitFx(who, 100, 18); if (who === H) setHP(1, st(i / 3)); } }, 520); }, i * 110); }],
    tape: [3200, (who, v) => { if (form !== 'f3') pose(boss, 'punch', 1600); sfx('blast', .8); sfx('say_sarah', 1, false);   // her war cry: the tape itself shake(12, 900); duck(.3, 1);   // the tape: her own words as a shockwave
      const ws = T.shout.split(/[\s-]+/).filter(Boolean), st = steps(v, ws.length), [fx, fy] = from();
      ws.forEach((w, i) => setTimeout(() => { if (!who.img.isConnected) return; const n = el('div', 'fz-word', w); n.style.cssText = `--c:#ff3aa8;font-size:${8 + i}cqw;left:${fx};top:${44 + (i % 3) * 6}%`; cam.append(n);
        A(n, [{ left: fx, opacity: 0, transform: 'scale(.5)' }, { opacity: 1, offset: .15 }, { left: `${who.x + 2}%`, opacity: 1, transform: 'scale(1.2)', offset: .85 }, { left: `${who.x + 10}%`, opacity: 0 }], { duration: 700, easing: 'ease-in' }).finished.then(() => n.remove());
        const r = el('div', 'ring'); r.style.cssText = `left:${fx};top:58%;--c:#ff3aa8`; cam.append(r); A(r, [{ transform: 'scale(.2)', opacity: 1 }, { transform: 'scale(2.6)', opacity: 0 }], { duration: 600, easing: 'ease-out' }).finished.then(() => r.remove());
        setTimeout(() => { pose(who, 'hit', 300); hitFx(who, 330, 20); if (who === H) setHP(1, st(i)); }, 600); }, i * 260)); }],
    blast: [1500, (who, v) => { sfx('blast', .9); if (Math.random() < .5) { sfx('say_sarah', 1, false); duck(.2, 2.5); } flash(.6, 150); shake(14, 500); FX.burst(.4, .42, 110, { s0: 250, s1: 800, g: 200, life: .7, h: 320 });   // the giant's own beam
      const r = el('div', 'ring'); r.style.cssText = 'left:40%;top:42%;--c:#ff3aa8'; cam.append(r); A(r, [{ transform: 'scale(.2)', opacity: 1 }, { transform: 'scale(3.2)', opacity: 0 }], { duration: 500 }).finished.then(() => r.remove());
      setTimeout(() => struck(who, v, 320, 40), 380); }],
  };
  function throwAt(who, toH, prop, size, hue, spin, ms, sound) { if (form !== 'f3') pose(boss, 'punch', 600); sfx(sound, .6); const [fx, fy] = from();
    const n = el('div', 'prop'); n.style.cssText = `width:${size}cqw;height:${size}cqw;margin:${-size / 2}cqw 0 0 ${-size / 2}cqw;--c:hsl(${hue} 100% 60%)`; n.append(Object.assign(new Image(), { src: BIMG(prop), alt: '' })); cam.append(n);
    A(n, [{ left: fx, top: fy, transform: 'scale(.6)' }, { left: `${(parseFloat(fx) + who.x) / 2}%`, top: '44%', transform: `rotate(${spin / 2}deg)`, offset: .5 }, { left: `${who.x - 2}%`, top: '62%', transform: `rotate(${spin}deg) scale(1.1)` }], { duration: ms, delay: 120, easing: 'ease-in' }).finished.then(() => n.remove());
    setTimeout(() => struck(who, toH, hue), ms + 120); }
  const HER = { f1: ['icecream', 'tray', 'milk'], f2: ['icecream', 'tray', 'milk', 'bottles', 'tape'], f3: ['blast', 'blast', 'tape', 'bottles', 'tray'] };

  // the twists, as one-off beats
  const superBlocked = () => { const k = FK(H, tgt(), d, 1200); k.cutin(0, 900); k.bars(0, 1300); k.lines(300, 1100, 40, 60, 'h'); pose(H, 'punch');
    go(H, [rest, { ...tx(d * 28), offset: .7 }, { ...tx(d * 26) }], 1100, 'ease-in');
    setTimeout(() => { sfx('block', 1); flash(.6, 120); hitFx(tgt(), 200, 30); H.mv.getAnimations().forEach((a) => a.cancel()); go(H, [tx(d * 26), tx(10, 0, 8), rest], 600, 'ease-out');   // one hand. Not even a scratch.
      big('fz-word', '?!', 900).style.cssText += ';left:50%;top:40%;--c:#ff3aa8;font-size:16cqw'; }, 1100);
    setTimeout(() => say({ x: 30 }, T.laugh, 1500), 2100); };
  const koCut = () => { setHP(2, 0); if (form !== 'f3') { pose(boss, 'hit'); go(boss, [rest, tx(-10, 4, -40)], 900, 'ease-out').finished.then(() => { boss.mv.style.transform = 'translate(-10cqw,4cqw) rotate(-40deg)'; }); }
    sfx('ko', .9); flash(1, 160); shake(14, 500);
    const ko = el('div', 'ko', C.fight.ko); cam.append(ko); A(ko, [{ opacity: 0, transform: 'scale(2.4)' }, { opacity: 1, transform: 'none', offset: .5 }, { opacity: 1, offset: .7 }, { opacity: 0, transform: 'scale(1, .02)', filter: 'brightness(4)' }], { duration: 1300 }).finished.then(() => ko.remove()); };   // K.O.… cut off
  const kneel = () => { sfx('heart', .8); setTimeout(() => sfx('heart', .8), 700); pose(H, 'hit'); H.out = true; H.bob.getAnimations().forEach((a) => a.updatePlaybackRate(.25));
    go(H, [rest, tx(4, 6, 10)], 600, 'ease-out').finished.then(() => { if (H.out) H.mv.style.transform = 'translate(4cqw,6cqw) rotate(10deg)'; });
    A(dark, [{ opacity: 0 }, { opacity: .5 }], { duration: 600, fill: 'forwards' }); musicStop(.6); };
  const summon = () => { const s = el('div', 'bz-sum', `<h2>${T.backup}</h2><div class="grid"></div>`), g = s.querySelector('.grid'), tiles = {};   // the select screen, two frames pick the allies
    cand.slice(0, 8).forEach((id) => { const tl = el('div', 'tile', `<img src="${IMG(id)}" alt=""><i>${NAME[id]}</i>`); faceFit(tl.querySelector('img'), id); tiles[id] = tl; g.append(tl); });
    cam.append(s); A(s, [{ opacity: 0, transform: 'scale(1.1)' }, { opacity: 1, transform: 'none' }], { duration: 300 }); sfx('vs', .6); mix('select'); music('bed');
    const hop = (cls, id) => { Object.values(tiles).forEach((x) => x.classList.remove(cls)); tiles[id]?.classList.add(cls); blip(); };
    const wander = cand.slice(0, 8).sort(() => Math.random() - .5);
    [...wander.slice(0, 3), team[0]].forEach((id, i) => setTimeout(() => hop('p1', id), 300 + i * 380));
    [...wander.slice(3, 6), team[1]].forEach((id, i) => setTimeout(() => hop('p2', id), 480 + i * 380));
    setTimeout(() => { team.forEach((id, i) => tiles[id]?.append(el('div', 'stamp', `P${i + 2}`))); sfx('confirm', .7); flash(.4, 120); shake(6); }, 2100);
    setTimeout(() => A(s, [{ opacity: 1 }, { opacity: 0 }], { duration: 300 }).finished.then(() => s.remove()), 2900); };
  const arrive = (toH) => { A(dark, [{ opacity: .5 }, { opacity: 0 }], { duration: 300, fill: 'forwards' }); H.out = false; H.mv.style.transform = ''; pose(H, 'stance'); H.bob.getAnimations().forEach((a) => a.updatePlaybackRate(1));
    allies = team.map((id, i) => fighter(id, i ? 54 : 88, 34, true, POSE(id, 'stance')));
    allies.forEach((a, i) => A(a.c, [{ transform: `translateX(${i ? -60 : 60}cqw)`, opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 420, delay: i * 160, easing: 'cubic-bezier(.2,1.2,.4,1)' }));
    sfx('duo', .8); setHP(1, toH); mix(form === 'f3' ? 'fin' : 'fight'); music(form === 'f3' ? 'fin' : 'bed');
    setTimeout(() => { if (form !== 'f3') pose(boss, 'punch', 600); sfx('blast', .7); setTimeout(() => { sfx('block', 1); flash(.5, 120); allies.forEach((a) => a.img.animate([{ filter: 'brightness(1.8) drop-shadow(0 0 2cqw #3ae0ff)' }, { filter: 'none' }], { duration: 300 })); }, 400); }, 900); };
  const crossOver = (a) => { a.traitor = true; a.img.className = ''; const dx = 36 - a.x; a.c.style.zIndex = 7;   // walks over to her side and turns to face the hero
    go(a, [rest, tx(dx, 0)], 800, 'ease-in-out').finished.then(() => { a.mv.style.transform = `translate(${dx}cqw,0)`; a.x = 36; }); };
  const betray = (a, toH) => { sfx('glitch', .8); duck(.3, .8); big('fz-word', T.betray, 1500).style.cssText += ';left:50%;top:28%;--c:#ff3aa8;font-size:13cqw';
    if (a.x < H.x) a.img.className = '';   // face the hero
    pose(a, 'punch', 460); go(a, [rest, { ...tx(a.x < H.x ? 6 : -6), offset: .4 }, rest], 600);
    setTimeout(() => { hitSfx('smash', 1); shake(12, 300); flash(.4, 100); pose(H, 'hit', 520); hitFx(H, 330, 40); setHP(1, toH); go(H, [rest, tx(a.x < H.x ? 5 : -5, 0, -6), rest], 420, 'ease-out'); }, 300);
    setTimeout(() => { crossOver(a); say({ x: 40 }, T.bibi_side, 1700); }, 800); };
  const defect = (a) => { big('fz-word', T.defector, 1400).style.cssText += ';left:50%;top:34%;--c:#ff3aa8;font-size:12cqw'; sfx('glitch', .7); crossOver(a);
    setTimeout(() => { a.img.style.filter = 'drop-shadow(0 0 3cqw #ff3aa8) hue-rotate(290deg)'; }, 800); };
  const traitorHit = (a, toH) => { if (a.id === 'netanyahu') say({ x: 40 }, T.bibi_with, 1400); pose(a, 'punch', 500); sfx('whoosh', .6); go(a, [{ transform: a.mv.style.transform || 'none' }, { transform: `${a.mv.style.transform || ''} translateX(8cqw)`, offset: .4 }, { transform: a.mv.style.transform || 'none' }], 600);   // husband and wife, side by side
    setTimeout(() => struck(H, toH, 330, 30), 360); };
  const sacrifice = (a, move) => { MOVES[move][1]({ ...a, x: H.x - 4 }, 0); go(a, [rest, tx(H.x - a.x + 6, 0)], 300, 'ease-out');   // an ally jumps in front of the hero and takes it
    setTimeout(() => { pose(a, 'hit'); a.out = true; say(a, T.sacrifice, 1300); go(a, [tx(H.x - a.x + 6, 0), tx(H.x - a.x + 16, 8, 80)], 900, 'ease-out').finished.then(() => { a.c.style.opacity = .5; }); }, 900); };
  const glitch = () => { const im = bust.querySelector('img'); sfx('glitch', .6);   // the beauty filter glitches: for a frame she's form 1 again
    im.animate([{ filter: 'none' }, { filter: 'hue-rotate(90deg) contrast(2)', offset: .3 }, { filter: 'none' }], { duration: 400 });
    setTimeout(() => { im.src = BIMG('f1'); setTimeout(() => { im.src = BIMG('f3'); }, 160); }, 140); };

  // the simulation: S is the fight as it will play; each step schedules its beat with the HP it lands on
  const S = { h: 100, b: 100, form: 1, called: false, here: false, n: 0, loyal: [], traitors: [], todo: [] };
  let gap = 0; const step = (dur, fn) => { beat(gap, fn); gap = dur; };
  const after = (k, fn) => S.todo.push({ at: S.n + k, fn });   // a twist, k exchanges from now
  const callBackup = () => { S.called = true;
    step(1600, kneel); step(1500, () => say(H, T.backup, 1500)); step(3200, summon);
    S.h = Math.max(S.h, rr(38, 55)); const v = S.h; step(1900, () => arrive(v)); S.here = true; S.loyal = [0, 1].filter((i) => i !== bibi);
    if (bibi >= 0) after(rr(1, 3), () => { S.h = Math.max(1, S.h - rr(12, 22)); const v = S.h; step(2600, () => betray(allies[bibi], v)); S.traitors.push(bibi); });
    else if (Math.random() < .6) after(rr(2, 5), () => { if (S.loyal.length < 2) return; const i = pick(S.loyal); S.loyal = S.loyal.filter((x) => x !== i); S.traitors.push(i); step(2000, () => defect(allies[i])); }); };
  const exchange = (cap) => {
    S.n++; const due = S.todo.filter((e) => e.at <= S.n); S.todo = S.todo.filter((e) => e.at > S.n); due.forEach((e) => e.fn());
    const fk = `f${S.form}`, heroSide = Math.random() < (S.loyal.length ? .58 : .5);
    if (heroSide) {
      const who = S.loyal.length && Math.random() < .45 ? pick(S.loyal) : -1, kind = pick(['punch', 'kick']);
      if (Math.random() < .14) return step(1300, () => blocked(who < 0 ? H : allies[who]));
      S.b = Math.max(cap, S.b - rr(12, S.form === 1 ? 26 : 22)); const v = S.b;
      return step(who < 0 ? rr(1150, 1450) : 1000, () => (who < 0 ? heroHit(v, kind) : allyHit(allies[who], v, kind)));
    }
    if (S.traitors.length && Math.random() < .3) { S.h = Math.max(1, S.h - rr(6, 12)); const v = S.h, a = pick(S.traitors); return step(1300, () => traitorHit(allies[a], v)); }
    const m = pick(HER[fk]), dur = MOVES[m][0];
    if (S.form === 3 && S.loyal.length && Math.random() < .25) { const i = pick(S.loyal); S.loyal = S.loyal.filter((x) => x !== i); return step(dur + 600, () => sacrifice(allies[i], m)); }
    if (S.loyal.length && Math.random() < .25) { const i = pick(S.loyal); return step(dur, () => MOVES[m][1](allies[i], 0)); }   // she goes for an ally instead
    S.h = Math.max(1, S.h - Math.round(rr(6, 14) * (m === 'tape' || m === 'bottles' ? 1.5 : m === 'blast' ? 1.3 : 1))); const v = S.h;
    step(dur, () => MOVES[m][1](H, v));
    if (!S.called && S.h < 30) callBackup();
  };

  // act 1: "הגברת", until her bar runs out (or ten exchanges): a K.O. that doesn't stick, or the super she stops with one hand
  gap = 2200;
  while (S.b > 0 && S.n < 10) exchange(0);
  step(S.b > 0 ? 3400 : 2200, S.b > 0 ? superBlocked : koCut);
  // act 2: "בלפור"
  step(700, () => { musicStop(.3); duck(.05, 1.4); A(dark, [{ opacity: 0 }, { opacity: .85 }, { opacity: .85, offset: .8 }, { opacity: 0 }], { duration: 2600 }); });
  step(1900, () => say(boss, T.form2, 1800));
  step(2600, () => { form = 'f2'; boss.mv.style.transform = ''; boss.mv.getAnimations().forEach((a) => a.cancel()); boss.img.src = BIMG('f2_stance'); sfx('reveal', .9); flash(1, 400); shake(16, 600); FX.burst(.28, .55, 160, { s0: 250, s1: 900, g: 200, life: 1, h: 320 });
    bg.style.transition = 'filter 1s'; bg.style.filter = 'brightness(.55) hue-rotate(290deg) saturate(1.6)';                   // the arena turns into Balfour
    const sign = el('div', 'fz-board', T.arena); sign.style.cssText = 'left:50%;top:24%;z-index:6;box-shadow:0 0 0 1cqw #ff3aa8,0 2cqw 6cqw #000c'; cam.append(sign);
    A(sign, [{ opacity: 0, transform: 'scale(1.6)' }, { opacity: 1, transform: 'none', offset: .1 }, { opacity: 1, offset: .9 }, { opacity: 0 }], { duration: 3000 }).finished.then(() => sign.remove());
    layer(2); [0, 1, 2, 3, 4].forEach((i) => setTimeout(() => { sfx('bar', .5); setHP(2, (i + 1) * 20); }, 400 + i * 140)); mix(S.here ? 'fight' : 'select'); music('bed'); });
  S.form = 2; S.b = 100; const n2 = S.n;
  while (S.b > 0 && S.n - n2 < 11) exchange(0);
  step(S.b > 0 ? 3400 : 2200, S.b > 0 ? superBlocked : koCut);
  // act 3: the final form. Backup comes now if it hasn't yet; the fight runs until she's low, then FINAL ROUND
  step(1400, () => { sfx('glitch', .9); musicStop(.05); duck(.02, 2); A(dark, [{ opacity: 0 }, { opacity: 1 }], { duration: 120, fill: 'forwards' }); });
  step(2600, () => { boss.c.remove(); form = 'f3'; bg.style.filter = 'brightness(.35) hue-rotate(320deg) saturate(2)';
    bust = el('div', 'bz-bust', `<img src="${BIMG('f3')}" alt="${T.name}">`); cam.append(bust);
    A(dark, [{ opacity: 1 }, { opacity: 0 }], { duration: 700, fill: 'forwards' }); sfx('reveal', 1); shake(20, 1400); flash(1, 500);
    A(bust, [{ transform: 'translateY(70%) scale(.9)' }, { transform: 'translateY(0) scale(1)' }], { duration: 1600, easing: 'cubic-bezier(.2,.9,.3,1)' });
    bust.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-1.5%)' }], { duration: 900, delay: 1600, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    [H, ...allies].forEach((f) => { f.c.style.zIndex = f.traitor ? 7 : 6; }); layer(3); hud.querySelector('.clock').textContent = '∞';
    [0, 1, 2, 3, 4].forEach((i) => setTimeout(() => { sfx('bar', .6); setHP(2, (i + 1) * 20); }, 900 + i * 140)); mix('fin'); music('fin'); });
  step(2400, () => say({ x: 30 }, T.form3, 2200));
  S.form = 3; S.b = 100; const n3 = S.n;
  if (!S.called) { const k = rr(0, 3); for (let i = 0; i < k; i++) exchange(10); if (!S.called) { S.h = Math.min(S.h, rr(8, 25)); const v = S.h; step(1500, () => MOVES.blast[1](H, v)); callBackup(); } }
  after(rr(1, 4), () => step(1400, glitch));
  while (S.n - n3 < 6 || (S.b > 45 && S.n - n3 < 14) || S.todo.length) exchange(10);
  // FINAL ROUND: every ballot ever cast flies in behind the hero
  step(1600, () => { big('ko', 'FINAL ROUND', 1300).style.fontSize = '13cqw'; sfx('fight', .9); });
  const n = Math.max(FIGHTS || 0, 1), meter = el('div', 'bz-meter', `<b>${fmt(T.ballots, { n: n.toLocaleString('he-IL') })}</b><span><i></i></span>`);
  step(3600, () => { cam.append(meter); A(meter, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' }); sfx('crowd', .7);
    A(meter.querySelector('i'), [{ width: '0%' }, { width: '100%' }], { duration: 3200, fill: 'forwards', easing: 'ease-in' });
    for (let i = 0; i < 40; i++) setTimeout(() => { if (!H.img.isConnected) return; const s = el('div', 'bz-slip'), side = Math.random() < .5, y = Math.random() * 90;
      cam.append(s); if (i % 4 === 0) sfx('ballot', .25, false);
      A(s, [{ left: side ? '-8%' : '108%', top: `${y}%`, transform: `rotate(${Math.random() * 360}deg)` }, { left: '70%', top: '64%', transform: 'rotate(0) scale(.3)', opacity: .2 }], { duration: 700, easing: 'ease-in' }).finished.then(() => s.remove()); }, i * 75);
    H.img.animate([{ filter: 'none' }, { filter: 'drop-shadow(0 0 4cqw #3ae0ff) brightness(1.4)' }], { duration: 3200, fill: 'forwards' }); });

  // ---------- the decision: one of three endings, each with a win and a loss ----------
  const BT = () => ({ ...H, x: 40, img: bust.querySelector('img'), mv: bust, id: BOSS_ID });   // the giant as a finisher target
  const foes = () => allies.filter((a) => a.traitor);
  const ko = (delay = 220) => { const n = el('div', 'ko', C.fight.ko); cam.append(n); A(n, [{ opacity: 0, transform: 'scale(2.4)' }, { opacity: 1, transform: 'none' }], { duration: 360, delay, easing: 'cubic-bezier(.2,1.5,.4,1)', fill: 'backwards' }); return n; };
  const flyOff = (f, ms = 1400, up = -110) => { f.out = true; pose(f, 'hit'); const from = f.mv.style.transform || 'none';   // from wherever they stand now
    go(f, [{ transform: from }, { transform: `${from === 'none' ? '' : from} translate(${f.x > 50 ? 50 : -50}cqw,${up}cqw) rotate(${f.x > 50 ? 900 : -900}deg) scale(.2)` }], ms, 'cubic-bezier(.3,0,.7,1)').finished.then(() => { f.c.style.opacity = 0; }); };
  const star = (x, y) => { const s = el('div', 'bz-star', '✦'); s.style.cssText = `left:${x}%;top:${y}%`; cam.append(s); sfx('combo', .7);
    A(s, [{ transform: 'scale(0) rotate(0)', opacity: 1 }, { transform: 'scale(1.6) rotate(90deg)', opacity: 1, offset: .4 }, { transform: 'scale(0) rotate(180deg)', opacity: 0 }], { duration: 700, easing: 'ease-out' }).finished.then(() => s.remove()); };
  const shatter = () => { const im = bust.querySelector('img'); sfx('glitch', 1);   // the beauty filter shatters: for good, she's form 1 again
    im.animate([{ filter: 'none' }, { filter: 'hue-rotate(90deg) contrast(3) brightness(2)', offset: .5 }, { filter: 'none' }], { duration: 300 }); setTimeout(() => { im.src = BIMG('f1'); }, 150);
    FX.burst(.4, .35, 160, { s0: 300, s1: 1000, g: 600, life: 1.1, h: 320, w: 3 }); };
  const winTail = (ms) => { at(ms, () => { conf.replaceChildren(); cam.append(conf); confetti(90, true); mix('fin'); music('fin'); sfx('crowd', .8);
      const ttl = el('div', 'bz-title', fmt(T.true_win, { name: nm })); cam.append(ttl); A(ttl, [{ opacity: 0, transform: 'scale(2)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.2,1.5,.4,1)' }); track('boss_win', hero); saveRec({ boss: hero, face: hero }); });
    at(ms + 5200, () => afterBoss()); };
  const loseTail = (ms) => { setHP(1, 0); track('boss_lose', hero); at(ms, () => gameOver()); };

  const ENDINGS = {
    // 1. beam struggle: two beams meet, the clash point swings back and forth, the crowd taps along, then one side overwhelms
    beam(win) {
      const k = FK(H, BT(), d, 6900); k.cutin(0, 1000, '#3ae0ff'); k.bars(0, 7600); pose(H, 'punch');
      const hx = 61, y = 52, sb = el('div', 'bz-beam s'), hb = el('div', 'bz-beam h'), orb = el('div', 'bz-orb'), tap = el('div', 'bz-tap', T.tap);
      const sx = 32, mid = (sx + hx) / 2, path = (win ? [[0, 0], [1000, 4], [1900, -4], [2900, 9], [3700, 8], [4700, 1], [5600, -5], [6100, -3], [6500, -99]]   // clash point, relative to the middle
                                                : [[0, 0], [1000, -5], [1900, 4], [2900, -7], [3700, -2], [4700, 6], [5600, 10], [6100, 8], [6500, 99]]).map(([ms, v]) => [ms, Math.max(sx, Math.min(hx, mid + v))]);
      let X = mid, push = 0, t0 = 0, iv = null;
      const onTap = () => { if (!orb.isConnected) return stage.removeEventListener('pointerdown', onTap); push = Math.max(-8, push - 1.4); sfx('tick', .35); FX.burst(X / 100, y / 100, 10, { s0: 120, s1: 380, g: 200, life: .35, h: 190 }); };
      const goal = (ms) => { const i = path.findIndex(([t]) => t > ms); if (i < 0) return path[path.length - 1][1]; const [ta, a] = path[i - 1], [tb, b] = path[i]; return a + (b - a) * (ms - ta) / (tb - ta); };
      at(1000, () => { cam.append(sb, hb, orb); sfx('blast', 1); shake(10, 600); flash(.6, 150); t0 = performance.now();
        iv = setInterval(() => { const ms = performance.now() - t0, g = goal(ms) + (ms < 6100 ? push : 0); push *= .94; X += (g - X) * .2 + (Math.random() - .5) * .8; X = Math.max(sx, Math.min(hx, X));
          sb.style.cssText = `left:${sx}%;width:${X - sx}%;top:${y}%`; hb.style.cssText = `left:${X}%;width:${hx - X}%;top:${y}%`; orb.style.cssText = `left:${X}%;top:${y}%`;
          if (Math.random() < .12) shake(3 + ms / 900, 120); }, 40); timers.push(iv); });
      at(1900, () => { cam.append(tap); stage.addEventListener('pointerdown', onTap); });
      [2900, 3500].forEach((ms) => at(ms, () => sfx('blast', .45)));
      at(win ? 3700 : 5600, () => { sfx('heart', .9); setTimeout(() => sfx('heart', .9), 600); duck(.3, 1); });   // the near miss
      at(7100, () => { clearInterval(iv); tap.remove(); stage.removeEventListener('pointerdown', onTap); });
      if (win) {
        k.freeze(7300, 260); k.inv(7300); k.crack(7350, 40, 40, 1600);
        at(7300, () => { sfx('ko', 1); setTimeout(() => sfx('kovoice', .9), 450); flash(1, 500); shake(24, 1000); setHP(2, 0); shatter(); foes().forEach((f) => flyOff(f));
          A(bust, [{ transform: 'none' }, { transform: 'translateY(170%) rotate(-6deg)', filter: 'brightness(2.5) saturate(0)', opacity: 0 }], { duration: 1800, delay: 500, easing: 'ease-in', fill: 'forwards' }); ko(600); });
        at(7900, () => { sb.remove(); hb.remove(); orb.remove(); });
        winTail(10200);
      } else {
        at(7200, () => { sfx('blast', 1); flash(.9, 300); shake(20, 900); say({ x: 30 }, T.laugh, 1600); hb.remove(); orb.remove(); sb.style.width = `${100 - sx}%`; flyOff(H, 1100, -40); });
        at(8000, () => sb.remove()); loseTail(9200);
      } },
    // 2. FINISH HER: the lights go red, a giant ballot box slams down, one last slip drops in, stamped
    ballot(win) {
      const k = FK(H, BT(), d, 3200); k.wash(0, 5000, 'radial-gradient(#6a0014, #000)', .7, 2);
      at(0, () => { musicStop(.1); duck(.2, 2); sfx('alarm', .9); shake(12, 500); const f = big('ko', win ? T.finish : T.finish_lose, 1700); f.style.cssText += ';color:#ff2a3a;font-size:15cqw'; });
      [600, 900, 1200].forEach((ms) => at(ms, () => sfx('step', .8)));
      const bx = win ? 40 : 70, box = el('div', 'bz-box', `<i></i><b>${T.box}</b>`); box.style.left = `${bx}%`;
      if (win) { k.cutin(1500, 900, '#ffd84a'); at(1700, () => { pose(H, 'kick'); sfx('jump', .7); go(H, [rest, { ...tx(-12, -50), offset: .5 }, tx(0, 0)], 1300, 'ease-out'); }); }
      else at(1700, () => { say({ x: 30 }, T.laugh, 1400); pose(H, 'hit'); });
      at(2600, () => { cam.append(box); A(box, [{ transform: 'translateY(-160%)' }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.6,0,1,.6)' }); sfx('whoosh', .9); });
      at(3020, () => { hitSfx('smash', 1); sfx('land', 1); shake(26, 800); flash(1, 200); FX.burst(bx / 100, .9, 140, { s0: 200, s1: 800, g: 900, life: .9, h: 40 });
        A(box, [{ transform: 'scaleY(.86) scaleX(1.08)' }, { transform: 'none' }], { duration: 300, easing: 'cubic-bezier(.2,1.6,.4,1)' });
        if (win) { setHP(2, 0); A(bust, [{ transform: 'none' }, { transform: 'translateY(55%) scaleY(.2)', opacity: 0 }], { duration: 240, fill: 'forwards', easing: 'ease-in' }); foes().forEach((f) => (f.c.style.opacity = 0)); }
        else { H.c.style.opacity = 0; } });
      if (win) k.inv(3020);
      at(3700, () => { const s = el('div', 'bz-slip'); cam.append(s); A(s, [{ left: `${bx + 6}%`, top: '-8%', transform: 'rotate(-30deg)' }, { left: `${bx - 3}%`, top: '20%', transform: 'rotate(20deg)', offset: .6 }, { left: `${bx}%`, top: '37%', transform: 'rotate(0) scaleY(.2)' }], { duration: 900, easing: 'ease-in' }).finished.then(() => { s.remove(); sfx('ballot', 1, false); }); });
      at(4800, () => { const st = el('div', 'fz-stamp', win ? T.stamp : T.stamp_lose); box.append(st); A(st, [{ transform: 'scale(3)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 220, easing: 'ease-in' }); sfx('block', 1); shake(14, 300);
        if (win) { const w = big('fz-word', T.ballotality, 2600); w.style.cssText += ';left:50%;top:22%;--c:#ffd84a;font-size:12cqw;direction:ltr'; setTimeout(() => sfx('kovoice', .9), 200); } });
      if (win) winTail(7400); else loseTail(6800); },
    // 3. the home run: three counter hits with impact frames, then the uppercut sends her into orbit, a twinkle in the sky
    homer(win) {
      const k = FK(H, BT(), d, 3000); k.bars(0, 5200);
      [400, 1100, 1800].forEach((t, i) => { const last = i === 2;
        k.at(t, () => { pose(H, i % 2 ? 'kick' : 'punch', 420); go(H, [rest, { ...tx(-22, -6 * i), offset: .45 }, rest], 600); });
        if (last && !win) return;
        k.freeze(t + 260, 140); k.inv(t + 260);
        k.at(t + 260, () => { hitSfx('smash', .9); hitSfx(pick(['jab', 'kick', 'upper'])); shake(12 + i * 4, 260); setHP(2, hp[2] - 25); FX.burst(.42, .42, 70, { s0: 200, s1: 700, g: 300, life: .6, h: 45 });
          bust.querySelector('img').animate([{ filter: 'brightness(3) saturate(0)' }, { filter: 'none' }], { duration: 180 });
          const w = el('div', 'fz-word', fmt(C.fight.combo, { n: i + 1 })); w.style.cssText = `--c:#ffd84a;font-size:${10 + i * 3}cqw;left:${30 + i * 8}%;top:${22 + i * 6}%`; cam.append(w);
          A(w, [{ opacity: 0, transform: 'scale(2)' }, { opacity: 1, transform: 'none', offset: .2 }, { opacity: 0 }], { duration: 800 }).finished.then(() => w.remove()); }); });
      if (win) {
        k.cutin(2300, 900, '#3ae0ff'); k.lines(2600, 3400, 40, 30, 'r');
        k.at(2700, () => { pose(H, 'punch'); go(H, [rest, { ...tx(-28, -34), offset: .6 }, tx(-24, -30)], 600, 'cubic-bezier(.6,0,.9,.4)'); });
        k.freeze(3100, 320); k.inv(3100); k.crack(3150, 40, 30, 1400);
        at(3100, () => { sfx('ko', 1); hitSfx('smash', 1); flash(1, 300); shake(26, 900); setHP(2, 0); shatter(); foes().forEach((f) => flyOff(f, 1600, -140));
          A(bust, [{ transform: 'none' }, { transform: 'translate(-55%, -130%) rotate(-720deg) scale(.06)' }], { duration: 1500, delay: 320, easing: 'cubic-bezier(.3,.1,.6,1)', fill: 'forwards' }); });
        at(4100, () => { go(H, [tx(-24, -30), rest], 600, 'ease-out'); ko(0); });
        at(4950, () => star(14, 6));
        at(5300, () => { const w = big('fz-word', T.bye, 1800); w.style.cssText += ';left:50%;top:16%;--c:#ffd84a;font-size:9cqw'; });
        winTail(7000);
      } else {
        at(2060, () => { sfx('block', 1); flash(.7, 120); shake(10, 300); const w = big('fz-word', T.parry, 1100); w.style.cssText += ';left:50%;top:34%;--c:#ff3aa8;font-size:14cqw;direction:ltr'; H.mv.getAnimations().forEach((a) => a.cancel()); });
        at(2700, () => { sfx('blast', 1); flash(.9, 200); shake(22, 900); FX.burst(.6, .55, 160, { s0: 300, s1: 900, g: 200, life: 1, h: 330 }); flyOff(H, 1300, -150); say({ x: 30 }, T.laugh, 1600); });
        at(4100, () => star(84, 6));
        loseTail(5600);
      } },
  };
  step(0, () => { meter.remove(); ENDINGS[END](!sarahWins); });
  window.__BZ = { ...S, END, team, sarahWins, ms: t };   // test hook: how this attempt was rolled

  function gameOver() {
    musicStop(.5); sfx('dq', .7);
    const g = el('div', 'bz-over', `<div class="go">GAME OVER</div><p>${T.lose}</p><b class="count">9</b><button type="button" class="arc a1">${T.retry}</button>`); cam.append(g);
    A(g, [{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: 'forwards' });
    let c = 9; const cnt = g.querySelector('.count'), iv = setInterval(() => { if (!g.isConnected) return clearInterval(iv); c--; sfx('tick', .4);
      if (c < 0) { clearInterval(iv); afterBoss(); return; } cnt.textContent = c; A(cnt, [{ transform: 'scale(1.35)', opacity: .4 }, { transform: 'none', opacity: 1 }], { duration: 260 }); }, 1000);
    timers.push(iv);   // reset() clears it with the rest
    g.querySelector('button').onclick = () => { clearInterval(iv); sfx('ballot', .7, false); finale(hero, { rematch: true }); };
  }
}
// After the boss (won, lost, or skipped): a new season, then the usual poster and the scroll page
function afterBoss() {
  reset(); BENCH = []; bench([]); CHAMP = null; STREAK = 0; RECENT = []; FINALE = false;
  mix('fin'); music('fin'); poster(true); at(3300, end);
}
