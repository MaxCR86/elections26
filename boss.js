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
.bz-say { position: absolute; z-index: 13; max-width: 62%; padding: 2.6cqw 3.4cqw; background: #fff; color: #111; border-radius: 3cqw; font: 400 5.4cqw/1.25 var(--f-he); box-shadow: 0 1.5cqw 4cqw #000a; opacity: 0; pointer-events: none; }
.bz-say.boss { background: #ffe1f1; border: .6cqw solid #ff3aa8; }
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
  const B = { sarah_win: 60, ...(C.game.boss || {}) }, T = C.boss, nm = NAME[hero], d = -1;   // the hero stands right and attacks leftwards
  const sarahWins = hero === 'netanyahu' || Math.random() * 100 < B.sarah_win;
  const cand = bossAllies(hero), team = cand.slice(0, 2), traitor = team[1];
  [1, 2, 3].forEach((f) => { new Image().src = BIMG(`f${f}`); }); ['f1', 'f2'].forEach((f) => ['stance', 'punch', 'kick', 'hit'].forEach((p) => { new Image().src = BIMG(`${f}_${p}`); }));
  [hero, ...team].forEach((id) => ['stance', 'punch', 'kick', 'hit'].forEach((p) => { new Image().src = POSE(id, p); }));
  track(o.rematch ? 'boss_rematch' : o.secret ? 'boss_secret' : 'boss_start', hero);
  skipBtn = uiBtn('skip', C.ui.skip, () => { track('boss_skip'); afterBoss(); });

  let t = 0; const beat = (dt, fn) => at((t += dt), fn);   // the timeline: every beat is ms after the previous one
  const say = (who, text, ms = 1800) => { const b = el('div', `bz-say${who === boss ? ' boss' : ''}`, text); const x = who.x;
    b.style.cssText = `top:${who === boss ? 34 : 38}%;${x > 50 ? 'right' : 'left'}:${x > 50 ? 100 - x - 14 : x - 16}%`; cam.append(b);
    A(b, [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'none', offset: .12 }, { opacity: 1, offset: .88 }, { opacity: 0 }], { duration: ms, easing: 'ease-out' }).finished.then(() => b.remove()); };
  const big = (cls, html, ms, kf) => { const n = el('div', cls, html); cam.append(n); A(n, kf || [{ opacity: 0, transform: 'scale(1.8)' }, { opacity: 1, transform: 'none', offset: .15 }, { opacity: 1, offset: .85 }, { opacity: 0 }], { duration: ms, easing: 'ease-out' }).finished.then(() => n.remove()); return n; };
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
  const conf = el('div', 'bz-conf'), roll = el('div', 'bz-roll', `<b>${C.credits.title}</b>${[hero, ...cand.slice(0, 6)].map((id) => `<span>${NAME[id]}</span>`).join('')}<span><bdi>DiMax</bdi></span>`);
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
    [0, 1, 2, 3, 4].forEach((i) => setTimeout(() => { sfx('bar', .4); setHP(2, (i + 1) * 20); }, 300 + i * 160)); });
  beat(2200, () => say(boss, T.taunt1, 2000));
  if (hero === 'netanyahu') beat(1700, () => say(H, T.bibi_line, 1700));

  // exchanges: [who attacks, damage to the other]. The hero gets her to 40%, then she stops the super with one hand.
  const heroHit = (dmg, kind = 'punch') => { sfx('step', .45); pose(H, kind, 380); go(H, [rest, { ...tx(d * 22), offset: .45 }, { ...tx(d * 22), offset: .6 }, rest], 760);
    setTimeout(() => { if (!boss.img.isConnected) return; sfx(pick(['hit1', 'hit2']), .9); open(); shake(7, 200); pose(boss, 'hit', 420); hitFx(boss, 330); setHP(2, hp[2] - dmg); go(boss, [rest, tx(-6, 0, -5), rest], 380, 'ease-out'); }, 360); };
  const throwAt = (prop, size, hue, dmg, spin = 720, ms = 520, sound = 'whoosh') => { pose(boss, 'punch', 600); sfx(sound, .6);
    const n = el('div', 'prop'); n.style.cssText = `width:${size}cqw;height:${size}cqw;margin:${-size / 2}cqw 0 0 ${-size / 2}cqw;--c:hsl(${hue} 100% 60%)`; n.append(Object.assign(new Image(), { src: BIMG(prop), alt: '' })); cam.append(n);
    A(n, [{ left: '36%', top: '60%', transform: 'scale(.6)' }, { left: '53%', top: '44%', transform: `rotate(${spin / 2}deg)`, offset: .5 }, { left: '68%', top: '62%', transform: `rotate(${spin}deg) scale(1.1)` }], { duration: ms, delay: 120, easing: 'ease-in' }).finished.then(() => n.remove());
    setTimeout(() => { if (!H.img.isConnected) return; sfx(pick(['hit1', 'hit2']), .9); shake(8, 220); pose(H, 'hit', 420); hitFx(H, hue, 60); setHP(1, hp[1] - dmg); go(H, [rest, tx(7, 0, 5), rest], 380, 'ease-out'); }, ms + 120); };
  beat(2200, () => throwAt('icecream', 16, 100, 14));                       // pistachio ice cream, lobbed like a grenade
  beat(1500, () => heroHit(16));
  beat(1300, () => heroHit(14, 'kick'));
  beat(1400, () => throwAt('tray', 22, 45, 16, 1440, 600));                 // the catering tray, as a frisbee
  beat(1500, () => throwAt('milk', 16, 210, 12, 360, 480, 'jump'));         // milk in a bag
  beat(1500, () => heroHit(16));
  beat(1300, () => { const k = FK(H, boss, d, 1200); k.cutin(0, 900); k.bars(0, 1300); k.lines(300, 1100, 40, 60, 'h'); pose(H, 'punch');
    go(H, [rest, { ...tx(d * 28), offset: .7 }, { ...tx(d * 26) }], 1100, 'ease-in'); });
  beat(1100, () => { sfx('block', 1); flash(.6, 120); hitFx(boss, 200, 30); H.mv.getAnimations().forEach((a) => a.cancel()); go(H, [tx(d * 26), tx(10, 0, 8), rest], 600, 'ease-out');   // one hand. Not even a scratch.
    big('fz-word', '?!', 900).style.cssText += ';left:50%;top:40%;--c:#ff3aa8;font-size:16cqw'; });
  beat(1000, () => say(boss, T.laugh, 1500));

  // ---------- act 2: "בלפור" ----------
  beat(1900, () => { musicStop(.3); duck(.05, 1.4); A(dark, [{ opacity: 0 }, { opacity: .85 }, { opacity: .85, offset: .8 }, { opacity: 0 }], { duration: 2600 }); });
  beat(700, () => say(boss, T.form2, 1800));
  beat(1900, () => { form = 'f2'; boss.img.src = BIMG('f2_stance'); sfx('reveal', .9); flash(1, 400); shake(16, 600); FX.burst(.28, .55, 160, { s0: 250, s1: 900, g: 200, life: 1, h: 320 });
    bg.style.transition = 'filter 1s'; bg.style.filter = 'brightness(.55) hue-rotate(290deg) saturate(1.6)';                   // the arena turns into Balfour
    const sign = el('div', 'fz-board', T.arena); sign.style.cssText = 'left:50%;top:24%;z-index:6;box-shadow:0 0 0 1cqw #ff3aa8,0 2cqw 6cqw #000c'; cam.append(sign);
    A(sign, [{ opacity: 0, transform: 'scale(1.6)' }, { opacity: 1, transform: 'none', offset: .1 }, { opacity: 1, offset: .9 }, { opacity: 0 }], { duration: 3000 }).finished.then(() => sign.remove());
    layer(2); [0, 1, 2, 3, 4].forEach((i) => setTimeout(() => { sfx('bar', .5); setHP(2, (i + 1) * 20); }, 400 + i * 140)); mix('select'); music('bed'); });
  beat(2600, () => heroHit(12));
  // the bottle affair: a rain of deposit bottles
  beat(1200, () => { pose(boss, 'kick', 1800); sfx('alarm', .4); for (let i = 0; i < 14; i++) setTimeout(() => { if (!H.img.isConnected) return;
      const n = el('div', 'prop'); n.style.cssText = 'width:9cqw;height:9cqw;margin:-4.5cqw 0 0 -4.5cqw;--c:#9dff3a'; n.append(Object.assign(new Image(), { src: BIMG('bottle'), alt: '' })); cam.append(n);
      const x = 58 + Math.random() * 26; A(n, [{ left: `${x}%`, top: '-5%', transform: 'rotate(0)' }, { left: `${x + (Math.random() - .5) * 8}%`, top: '64%', transform: `rotate(${(Math.random() - .5) * 900}deg)` }], { duration: 520, easing: 'ease-in' }).finished.then(() => n.remove());
      setTimeout(() => { sfx('tick', .7); if (i % 3 === 0) { pose(H, 'hit', 300); hitFx(H, 100, 18); setHP(1, hp[1] - 5); } }, 520); }, i * 110); });
  beat(2400, () => heroHit(10, 'kick'));
  // the tape: her own words as a shockwave
  beat(1400, () => { pose(boss, 'punch', 1600); sfx('blast', .8); shake(12, 900); duck(.3, 1);
    T.shout.split(/[\s-]+/).filter(Boolean).forEach((w, i) => setTimeout(() => { if (!H.img.isConnected) return; const n = el('div', 'fz-word', w); n.style.cssText = `--c:#ff3aa8;font-size:${8 + i}cqw;left:30%;top:${44 + (i % 3) * 6}%`; cam.append(n);
      A(n, [{ left: '30%', opacity: 0, transform: 'scale(.5)' }, { opacity: 1, offset: .15 }, { left: '72%', opacity: 1, transform: 'scale(1.2)', offset: .85 }, { left: '80%', opacity: 0 }], { duration: 700, easing: 'ease-in' }).finished.then(() => n.remove());
      const r = el('div', 'ring'); r.style.cssText = 'left:30%;top:58%;--c:#ff3aa8'; cam.append(r); A(r, [{ transform: 'scale(.2)', opacity: 1 }, { transform: 'scale(2.6)', opacity: 0 }], { duration: 600, easing: 'ease-out' }).finished.then(() => r.remove());
      setTimeout(() => { pose(H, 'hit', 300); hitFx(H, 330, 20); setHP(1, Math.max(1, hp[1] - 9)); }, 600); }, i * 260)); });
  // 1 HP: heartbeat, slow motion, the hero on one knee
  beat(2600, () => { setHP(1, 1); sfx('heart', .8); setTimeout(() => sfx('heart', .8), 700); pose(H, 'hit'); H.out = true; H.bob.getAnimations().forEach((a) => a.updatePlaybackRate(.25));
    go(H, [rest, tx(4, 6, 10)], 600, 'ease-out').finished.then(() => { H.mv.style.transform = 'translate(4cqw,6cqw) rotate(10deg)'; });
    A(dark, [{ opacity: 0 }, { opacity: .5 }], { duration: 600, fill: 'forwards' }); musicStop(.6); });
  beat(1600, () => say(H, T.backup, 1500));
  // calling backup: the select screen, two frames pick the allies
  beat(1500, () => { const s = el('div', 'bz-sum', `<h2>${T.backup}</h2><div class="grid"></div>`), g = s.querySelector('.grid'), tiles = {};
    cand.slice(0, 8).forEach((id) => { const tl = el('div', 'tile', `<img src="${IMG(id)}" alt=""><i>${NAME[id]}</i>`); faceFit(tl.querySelector('img'), id); tiles[id] = tl; g.append(tl); });
    cam.append(s); A(s, [{ opacity: 0, transform: 'scale(1.1)' }, { opacity: 1, transform: 'none' }], { duration: 300 }); sfx('vs', .6); mix('select'); music('bed');
    const hop = (cls, id) => { Object.values(tiles).forEach((x) => x.classList.remove(cls)); tiles[id]?.classList.add(cls); blip(); };
    const wander = cand.slice(0, 8).sort(() => Math.random() - .5);
    [...wander.slice(0, 3), team[0]].forEach((id, i) => setTimeout(() => hop('p1', id), 300 + i * 380));
    [...wander.slice(3, 6), team[1]].forEach((id, i) => setTimeout(() => hop('p2', id), 480 + i * 380));
    setTimeout(() => { team.forEach((id, i) => tiles[id]?.append(el('div', 'stamp', `P${i + 2}`))); sfx('confirm', .7); flash(.4, 120); shake(6); }, 2100);
    setTimeout(() => A(s, [{ opacity: 1 }, { opacity: 0 }], { duration: 300 }).finished.then(() => s.remove()), 2900); });
  // they burst in, block her attack, and the three of them land a combo
  beat(3200, () => { A(dark, [{ opacity: .5 }, { opacity: 0 }], { duration: 300, fill: 'forwards' }); H.out = false; H.mv.style.transform = ''; pose(H, 'stance'); H.bob.getAnimations().forEach((a) => a.updatePlaybackRate(1));
    allies = team.map((id, i) => fighter(id, i ? 54 : 88, 34, true, POSE(id, 'stance')));
    allies.forEach((a, i) => A(a.c, [{ transform: `translateX(${i ? -60 : 60}cqw)`, opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 420, delay: i * 160, easing: 'cubic-bezier(.2,1.2,.4,1)' }));
    sfx('duo', .8); setHP(1, 35); });
  beat(900, () => { pose(boss, 'punch', 600); sfx('blast', .7); setTimeout(() => { sfx('block', 1); flash(.5, 120); allies.forEach((a) => a.img.animate([{ filter: 'brightness(1.8) drop-shadow(0 0 2cqw #3ae0ff)' }, { filter: 'none' }], { duration: 300 })); }, 400); });
  const allyHit = (a, dmg, kind) => { sfx('step', .4); pose(a, kind, 380); go(a, [rest, { ...tx(d * (a.x - 40)), offset: .45 }, { ...tx(d * (a.x - 40)), offset: .6 }, rest], 760);
    setTimeout(() => { if (!boss.img.isConnected) return; sfx(pick(['hit1', 'hit2']), .9); shake(7, 200); pose(boss, 'hit', 420); hitFx(boss, 200); setHP(2, hp[2] - dmg); }, 360); };
  beat(1000, () => allyHit(allies[0], 22, 'punch'));
  beat(600, () => allyHit(allies[1], 22, 'kick'));
  beat(600, () => heroHit(22));
  beat(700, () => { setHP(2, 0); pose(boss, 'hit'); sfx('ko', .9); flash(1, 160); shake(14, 500); go(boss, [rest, tx(-10, 4, -40)], 900, 'ease-out').finished.then(() => { boss.mv.style.transform = 'translate(-10cqw,4cqw) rotate(-40deg)'; });
    const ko = el('div', 'ko', C.fight.ko); cam.append(ko); A(ko, [{ opacity: 0, transform: 'scale(2.4)' }, { opacity: 1, transform: 'none', offset: .5 }, { opacity: 1, offset: .7 }, { opacity: 0, transform: 'scale(1, .02)', filter: 'brightness(4)' }], { duration: 1300 }).finished.then(() => ko.remove()); });   // K.O.… cut off

  // ---------- act 3: the final form ----------
  let bust = null;
  beat(1500, () => { sfx('glitch', .9); musicStop(.05); duck(.02, 2); A(dark, [{ opacity: 0 }, { opacity: 1 }], { duration: 120, fill: 'forwards' }); });
  beat(1400, () => { boss.c.remove(); form = 'f3'; bg.style.filter = 'brightness(.35) hue-rotate(320deg) saturate(2)';
    bust = el('div', 'bz-bust', `<img src="${BIMG('f3')}" alt="${T.name}">`); cam.append(bust);
    A(dark, [{ opacity: 1 }, { opacity: 0 }], { duration: 700, fill: 'forwards' }); sfx('reveal', 1); shake(20, 1400); flash(1, 500);
    A(bust, [{ transform: 'translateY(70%) scale(.9)' }, { transform: 'translateY(0) scale(1)' }], { duration: 1600, easing: 'cubic-bezier(.2,.9,.3,1)' });
    bust.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-1.5%)' }], { duration: 900, delay: 1600, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
    [H, ...allies].forEach((f) => { f.c.style.zIndex = 6; }); layer(3); hud.querySelector('.clock').textContent = '∞';
    [0, 1, 2, 3, 4].forEach((i) => setTimeout(() => { sfx('bar', .6); setHP(2, (i + 1) * 20); }, 900 + i * 140)); mix('fin'); music('fin'); });
  beat(2600, () => say({ x: 30 }, T.form3, 2200));
  beat(1000, () => { const im = bust.querySelector('img'); sfx('glitch', .6);   // the beauty filter glitches: for a frame she's form 1 again
    im.animate([{ filter: 'none' }, { filter: 'hue-rotate(90deg) contrast(2)', offset: .3 }, { filter: 'none' }], { duration: 400 });
    setTimeout(() => { im.src = BIMG('f1'); setTimeout(() => { im.src = BIMG('f3'); }, 160); }, 140); });
  // she swats the allies: one defects to her side, the other takes the hit for the hero
  beat(1600, () => { const a = allies[1]; if (!a) return; big('fz-word', T.defector, 1400).style.cssText += ';left:50%;top:34%;--c:#ff3aa8;font-size:12cqw'; sfx('glitch', .7);
    a.img.className = ''; go(a, [rest, tx(-30, 0)], 900, 'ease-in-out').finished.then(() => { a.mv.style.transform = 'translate(-30cqw,0)'; a.img.style.filter = 'drop-shadow(0 0 3cqw #ff3aa8) hue-rotate(290deg)'; }); });
  beat(2000, () => { const a = allies[0]; sfx('blast', .9); shake(16, 600); flash(.8, 160); FX.burst(.5, .4, 120, { s0: 300, s1: 900, g: 300, life: .8, h: 320 });
    if (a) { go(a, [rest, tx(-18, 0)], 300, 'ease-out'); setTimeout(() => { pose(a, 'hit'); a.out = true; say(a, T.sacrifice, 1300); go(a, [tx(-18, 0), tx(10, 8, 80)], 900, 'ease-out').finished.then(() => { a.c.style.opacity = .5; }); }, 300); }
    setHP(1, 1); });
  // FINAL ROUND: every ballot ever cast flies in behind the hero
  beat(2200, () => { big('ko', 'FINAL ROUND', 1300).style.fontSize = '13cqw'; sfx('fight', .9); });
  const n = Math.max(FIGHTS || 0, 1), meter = el('div', 'bz-meter', `<b>${fmt(T.ballots, { n: n.toLocaleString('he-IL') })}</b><span><i></i></span>`);
  beat(1600, () => { cam.append(meter); A(meter, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' }); sfx('crowd', .7);
    A(meter.querySelector('i'), [{ width: '0%' }, { width: '100%' }], { duration: 3200, fill: 'forwards', easing: 'ease-in' });
    for (let i = 0; i < 40; i++) setTimeout(() => { if (!H.img.isConnected) return; const s = el('div', 'bz-slip'), side = Math.random() < .5, y = Math.random() * 90;
      cam.append(s); if (i % 4 === 0) sfx('ballot', .25, false);
      A(s, [{ left: side ? '-8%' : '108%', top: `${y}%`, transform: `rotate(${Math.random() * 360}deg)` }, { left: '70%', top: '64%', transform: 'rotate(0) scale(.3)', opacity: .2 }], { duration: 700, easing: 'ease-in' }).finished.then(() => s.remove()); }, i * 75);
    H.img.animate([{ filter: 'none' }, { filter: 'drop-shadow(0 0 4cqw #3ae0ff) brightness(1.4)' }], { duration: 3200, fill: 'forwards' }); });

  // ---------- the decision ----------
  beat(3600, () => { meter.remove();
    if (!sarahWins) {   // the hero's super, in slow motion, into the giant
      const k = FK(H, { ...H, x: 40, img: bust.querySelector('img'), mv: bust, id: BOSS_ID }, d, 1600); k.cutin(0, 1000, '#3ae0ff'); k.bars(0, 2200); k.lines(400, 1600, 40, 40, 'r');
      pose(H, 'punch'); go(H, [rest, { ...tx(-40, -30), offset: .7 }, tx(-38, -28)], 1600, 'cubic-bezier(.6,0,.9,.4)');
      k.freeze(1600, 220); k.inv(1600); k.crack(1650, 40, 40, 1600);
      at(1600, () => { sfx('ko', 1); setTimeout(() => sfx('kovoice', .9), 450); flash(1, 300); shake(22, 900); setHP(2, 0); FX.burst(.45, .4, 220, { s0: 300, s1: 1100, g: 300, life: 1.2, h: 45 });
        A(bust, [{ transform: 'none', filter: 'none' }, { transform: 'translateY(110%) rotate(-6deg)', filter: 'brightness(3) saturate(0)' }], { duration: 1800, easing: 'ease-in', fill: 'forwards' });
        const ko = el('div', 'ko', C.fight.ko); cam.append(ko); A(ko, [{ opacity: 0, transform: 'scale(2.4)' }, { opacity: 1, transform: 'none' }], { duration: 360, delay: 220, easing: 'cubic-bezier(.2,1.5,.4,1)' }); });
      at(3400, () => { conf.replaceChildren(); cam.append(conf); confetti(90, true); mix('fin'); music('fin'); sfx('crowd', .8); go(H, [tx(-38, -28), rest], 700, 'ease-out');
        const ttl = el('div', 'bz-title', fmt(T.true_win, { name: nm })); cam.append(ttl); A(ttl, [{ opacity: 0, transform: 'scale(2)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.2,1.5,.4,1)' }); track('boss_win', hero); });
      at(8600, () => afterBoss());
    } else {            // she blows the ballots away. GAME OVER, CONTINUE?
      sfx('blast', 1); shake(18, 900); flash(.8, 200); FX.burst(.7, .6, 160, { s0: 300, s1: 900, g: 200, life: 1, h: 330 }); say({ x: 30 }, T.laugh, 1600);
      pose(H, 'hit'); H.out = true; go(H, [rest, tx(26, 6, 82)], 1000, 'cubic-bezier(.3,0,.6,1)').finished.then(() => { H.mv.style.transform = 'translate(26cqw,6cqw) rotate(82deg)'; });
      setHP(1, 0); track('boss_lose', hero);
      at(2200, () => gameOver());
    } });

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
