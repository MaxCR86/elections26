// ---------- signature finishers v2: three per fighter, one picked at random each fight ----------
// Loaded right after the inline script; reuses its el, A, at, cam, sfx, FX, POSE, IMG, NAME, FIN, faceFit, shake, C.
// Contract: fn(f, def, d) → { impact, run, name }; impact = ms from run() to the hit that KOs.
// Names live in copy.json moves.<id> (same order as the arrays below); the `name` here is only a fallback.
document.head.append(Object.assign(document.createElement('style'), { textContent: `
.fz { position: absolute; left: 0; top: 0; pointer-events: none; }
.fz-screen { position: absolute; inset: 0; z-index: 15; pointer-events: none; overflow: hidden; }
.fz-bar { position: absolute; left: 0; right: 0; height: 11%; z-index: 19; background: #000; pointer-events: none; }
.fz-bar.t { top: 0; transform-origin: top; } .fz-bar.b { bottom: 0; transform-origin: bottom; }
.fz-wash { position: absolute; inset: 0; z-index: 3; opacity: 0; pointer-events: none; }
.fz-cut { position: absolute; left: -15%; right: -15%; top: 31%; height: 28cqw; z-index: 15; overflow: hidden; pointer-events: none;
  background: linear-gradient(180deg, color-mix(in srgb, var(--c), #fff 25%), var(--c) 45%, color-mix(in srgb, var(--c), #000 45%)); border-block: .9cqw solid #fff; box-shadow: 0 0 6cqw var(--c); }
.fz-cut i { position: absolute; inset: 0 -60%; background: repeating-linear-gradient(100deg, #fff4 0 1cqw, transparent 1cqw 6cqw); }
.fz-cut .face { position: absolute; top: 0; bottom: 0; width: 56cqw; overflow: hidden; }
.fz-cut .face img { position: absolute; max-width: none; filter: contrast(1.15) saturate(1.2); }
.fz-cut b { position: absolute; bottom: 2cqw; font: 400 9cqw/1 var(--f-he); color: #fff; text-shadow: .6cqw .6cqw 0 #000; white-space: nowrap; }
.fz-word { position: absolute; z-index: 14; translate: -50% -50%; white-space: nowrap; font: 400 11cqw/1 var(--f-he); color: #fff; pointer-events: none;
  -webkit-text-stroke: .5cqw #000; paint-order: stroke fill; text-shadow: 0 .8cqw 0 #000, 0 0 4cqw var(--c); }
.fz-ink { position: absolute; z-index: 8; height: 3.4cqw; margin-top: -1.7cqw; border-radius: 2cqw; background: #ff1d1d; box-shadow: 0 0 3cqw #ff2a2a, inset 0 .6cqw 0 #ff8a8a; pointer-events: none; }
.fz-crack { position: absolute; inset: 0; z-index: 16; pointer-events: none; } .fz-crack svg { width: 100%; height: 100%; display: block; }
.fz-stamp { position: absolute; z-index: 9; width: 30cqw; height: 30cqw; margin: -15cqw 0 0 -15cqw; border-radius: 50%; border: 1.8cqw double #ff2a2a; display: grid; place-items: center;
  font: 400 9cqw/1 var(--f-he); color: #ff2a2a; rotate: -14deg; background: #ff2a2a14; pointer-events: none; }
.fz-card { position: absolute; z-index: 9; width: 48cqw; height: 42cqw; margin: -21cqw 0 0 -24cqw; background: #f3efe4; border-radius: 1cqw; box-shadow: 0 2cqw 5cqw #000c; pointer-events: none; }
.fz-card .bomb { position: absolute; left: 50%; top: 58%; width: 24cqw; height: 24cqw; margin: -12cqw 0 0 -12cqw; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #555, #111 60%); }
.fz-card .bomb::before { content: ""; position: absolute; left: 50%; top: -5cqw; width: 6cqw; height: 6cqw; margin-left: -3cqw; background: #111; border-radius: 1cqw; }
.fz-card .bomb::after { content: ""; position: absolute; left: 55%; top: -11cqw; width: 6cqw; height: 7cqw; border: .8cqw solid #111; border-color: #111 transparent transparent #111; border-radius: 50% 0 0 0; }
.fz-card u { position: absolute; left: 12%; right: 12%; height: .4cqw; background: #1118; }
.fz-card .fz-ink { left: 6%; right: 6%; width: auto; top: 30%; }
.fz-rope { position: absolute; left: 0; right: 0; height: 1.3cqw; z-index: 7; border-radius: 1cqw; box-shadow: 0 .6cqw 1cqw #000a; pointer-events: none; }
.fz-board { position: absolute; z-index: 13; padding: 2cqw 6cqw; translate: -50% -50%; background: #fff; color: #111; font: 400 11cqw/1 var(--f-he); border-radius: 1.4cqw; box-shadow: 0 0 0 1cqw #e33, 0 2cqw 6cqw #000c; white-space: nowrap; pointer-events: none; }
.fz-sweep { position: absolute; top: -20%; bottom: -20%; left: 50%; width: 30cqw; z-index: 3; background: linear-gradient(90deg, transparent, #3ae0ff55, #fff8, #3ae0ff55, transparent); pointer-events: none; }
.fz-live { position: absolute; top: 17%; inset-inline-start: 5%; z-index: 13; padding: 1cqw 2.6cqw; background: #d4142a; color: #fff; font: 700 4cqw/1 var(--f-ui); border-radius: .8cqw; pointer-events: none; }
.fz-live::before { content: "● "; }
.fz-third { position: absolute; left: 4%; right: 4%; top: 42%; z-index: 13; display: flex; font: 400 5.4cqw/1 var(--f-he); pointer-events: none; box-shadow: 0 1cqw 3cqw #000a; }
.fz-third b { font-weight: 400; background: #3ae0ff; color: #001; padding: 2cqw 3cqw; } .fz-third span { flex: 1; background: #fff; color: #001; padding: 2cqw 3cqw; white-space: nowrap; overflow: hidden; }
.fz-third.red b { background: #d4142a; color: #fff; }
.fz-tick { position: absolute; left: 0; right: 0; bottom: 1.5%; z-index: 13; height: 6.5cqw; overflow: hidden; background: #001b3a; border-top: .5cqw solid #3ae0ff; pointer-events: none; }
.fz-tick span { position: absolute; top: 1cqw; inset-inline-start: 0; white-space: nowrap; font: 400 4.4cqw/1 var(--f-he); color: #fff; }
.fz-pip { position: absolute; left: 50%; top: 30%; width: 44cqw; height: 33cqw; margin: -16.5cqw 0 0 -22cqw; z-index: 13; overflow: hidden; border: 1cqw solid #3ae0ff; border-radius: 1.6cqw;
  background: linear-gradient(#0a3a7a, #021230); box-shadow: 0 0 5cqw #3ae0ff88; pointer-events: none; }
.fz-pip img { position: absolute; max-width: none; } .fz-pip b { position: absolute; left: 0; right: 0; bottom: 0; background: #000b; color: #fff; font: 400 4cqw/1.5 var(--f-he); text-align: center; }
.fz-sign { position: absolute; left: 50%; top: 42%; z-index: 13; translate: -50% -50%; padding: 2.4cqw 7cqw; background: #1d4fa0; color: #fff; font: 400 10cqw/1 var(--f-he);
  border: 1cqw solid #fff; outline: .5cqw solid #1d4fa0; border-radius: 1.2cqw; transform-origin: 50% -30%; pointer-events: none; white-space: nowrap; }
.fz-flag { position: absolute; z-index: 7; width: 1.2cqw; background: linear-gradient(90deg, #ccc, #fff, #999); border-radius: 1cqw; pointer-events: none; }
.fz-flag i { position: absolute; top: 0; width: 26cqw; height: 18cqw; background: linear-gradient(#fff 12%, #1f5fd6 12% 24%, #fff 24% 76%, #1f5fd6 76% 88%, #fff 88%);
  box-shadow: 0 1cqw 2cqw #0006; transform-origin: 0 50%; }
.fz-crowd { position: absolute; left: -40%; right: -40%; bottom: 0; height: 30%; z-index: 7; pointer-events: none; filter: drop-shadow(0 -.7cqw 0 #ff3aa8) drop-shadow(0 0 3cqw #ff3aa888);
  background: radial-gradient(circle at 50% 22%, #0d1020 0 22%, transparent 23%) 0 0 / 9cqw 12cqw repeat-x, radial-gradient(ellipse at 50% 100%, #0d1020 0 60%, transparent 61%) 0 6cqw / 9cqw 14cqw repeat-x,
    radial-gradient(circle at 50% 22%, #1a1f38 0 22%, transparent 23%) 4cqw 3cqw / 11cqw 13cqw repeat-x, linear-gradient(transparent 38%, #0d1020 39%); }
.fz-meter { position: absolute; top: 40%; z-index: 13; width: 9cqw; height: 34%; display: flex; flex-direction: column-reverse; gap: .7cqw; padding: 1cqw; background: #000c; border: .5cqw solid #fff8; border-radius: 1cqw; pointer-events: none; }
.fz-meter i { flex: 1; border-radius: .4cqw; background: #fff1; }
`}));

// screen-space layer above the camera (cut-ins, letterbox, cracks, counters); it empties itself whenever the scene (cam) is cleared
const FZS = el('div', 'fz-screen'); stage.append(FZS);
new MutationObserver(() => { if (!cam.firstChild) FZS.replaceChildren(); }).observe(cam, { childList: true });
const FZ_H = 16 / 9;                                              // 1% of stage height in cqw
const FZ_FACE = { golan: -1 };                                    // prop sprites that point left (the rest point right)
const fzT = (x, y, more = '') => `translate(${x}cqw,${y * FZ_H}cqw) ${more}`;   // stage % → transform (node at left:0 top:0)
const fzM = (x = 0, y = 0, r = 0) => ({ transform: `translate(${x}cqw,${y}cqw) rotate(${r}deg)` });
const fzR = (a, b) => a + Math.random() * (b - a);

// The kit: shared cinematic helpers for one finisher run. All times are ms from run(); every node is removed after the KO beat.
function FK(f, def, d, impact) {
  const c = (FIN[f.id] || [, '#ffd84a'])[1], N = [];
  const k = { c, d, impact, ax: f.x + d * 8, dx: def.x - d * 2, mx: (f.x + def.x) / 2 };
  k.at = (ms, fn) => at(ms, () => { if (f.img.isConnected) fn(); });
  k.add = (cls, css = '', html = '', layer = cam) => { const n = el('div', cls, html); n.style.cssText = css; layer.append(n); N.push(n); return n; };
  k.addS = (cls, css, html) => k.add(cls, css, html, FZS);
  k.span = (n, off, on, ms, ramp = 160, easing) => { const r = Math.min(.45, ramp / ms); return A(n, [{ ...off, easing: easing || 'linear' }, { ...on, offset: r }, { ...on, offset: 1 - r, easing: easing || 'linear' }, off], { duration: ms }); };
  k.prop = (size, id = f.id, glow = true) => { const n = k.add(`prop fz`, `width:${size}cqw;height:${size}cqw;margin:${-size / 2}cqw 0 0 ${-size / 2}cqw;--c:${c}${glow ? '' : ';filter:none'}`);
    const im = Object.assign(new Image(), { src: `img/props/${id}.webp`, alt: '' }); if (d * (FZ_FACE[id] || 1) < 0) im.style.scale = '-1 1'; n.append(im); return n; };
  k.pose = (t, p, who = f) => k.at(t, () => { who.img.src = POSE(who.id, p); });
  k.go = (t, who, kf, ms, easing = 'cubic-bezier(.2,.9,.3,1)') => k.at(t, () => who.mv.animate(kf, { duration: ms, easing }));
  // camera: [[ms, x%, y%, zoom]...] from [0] to the last point; the target is clamped so the stage edge never shows
  k.cam = (pts, easing = 'cubic-bezier(.3,0,.2,1)') => k.at(0, () => { const T = pts[pts.length - 1][0];
    cam.animate(pts.map(([ms, x = 50, y = 50, s = 1]) => { const cl = (v) => Math.min(100 - 50 / s, Math.max(50 / s, v));
      return { offset: ms / T, scale: s, translate: `${-s * (cl(x) - 50)}% ${-s * (cl(y) - 50)}%`, easing }; }), { duration: T }); });
  k.scr = (x, y) => { const cs = getComputedStyle(cam), s = parseFloat(cs.scale) || 1, [tx = 0, ty = 0] = cs.translate === 'none' ? [] : cs.translate.split(' ').map(parseFloat);
    return [.5 + s * (x / 100 - .5) + tx / cam.clientWidth, .5 + s * (y / 100 - .5) + ty / cam.clientHeight]; };   // stage point → screen fraction, through the camera
  k.burst = (t, x, y, n, o) => k.at(t, () => { const [sx, sy] = k.scr(x, y); FX.burst(sx, sy, n, o); });
  k.bars = (t0, t1) => k.at(t0, () => ['t', 'b'].forEach((s) => k.span(k.addS(`fz-bar ${s}`), { transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }, t1 - t0, 200)));
  k.wash = (t0, t1, bg, op = .6, z = 3) => k.at(t0, () => k.span(k.add('fz-wash', `background:${bg};z-index:${z}`), { opacity: 0 }, { opacity: op }, t1 - t0, 220));
  k.slow = (t0, t1, rate = .25) => { const set = (r) => cam.querySelectorAll('.bob').forEach((b) => b.getAnimations().forEach((a) => a.updatePlaybackRate(r))); k.at(t0, () => set(rate)); k.at(t1, () => set(1)); };
  // hit-stop: everything in the scene pauses except the camera
  k.freeze = (t, ms = 160) => k.at(t, () => { const as = cam.getAnimations({ subtree: true }).filter((a) => a.effect?.target !== cam && a.playState === 'running');
    as.forEach((a) => a.pause()); at(ms, () => as.forEach((a) => a.playState === 'paused' && a.play())); });
  k.inv = (t, ms = 90) => k.at(t, () => k.span(k.addS('fz-wash', 'background:#fff;mix-blend-mode:difference;z-index:18'), { opacity: 0 }, { opacity: 1 }, ms, 1));   // anime impact frame
  // speed lines on the particle canvas (screen space): 'r' radial into (x, y), 'h' horizontal streaks
  k.lines = (t0, t1, x, y, mode = 'r', col = '255,255,255') => { k.at(t0, () => { const [sx, sy] = k.scr(x, y);
    FX.paint = (ctx, W, H) => { const cx = sx * W, cy = sy * H; ctx.save(); ctx.beginPath(); ctx.rect(0, H * .11, W, H * .78); ctx.clip();
      ctx.strokeStyle = `rgba(${col},.55)`; ctx.lineWidth = Math.max(1.5, W / 200); ctx.beginPath();
      for (let i = 0; i < 34; i++) { if (mode === 'r') { const a = Math.random() * 6.283, r0 = W * fzR(.24, .44), r1 = r0 + W * fzR(.25, .9);
        ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0); ctx.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1); }
      else { const yy = H * fzR(.3, .82), x0 = Math.random() * W; ctx.moveTo(x0, yy); ctx.lineTo(x0 + W * fzR(.15, .5), yy); } }
      ctx.stroke(); ctx.restore(); }; }); k.at(t1, () => { FX.paint = null; }); };
  k.crack = (t, x, y, ms = 1200) => k.at(t, () => { const [sx, sy] = k.scr(x, y), cx = sx * 100, cy = sy * 100 * FZ_H; let p = '', q = '';
    for (let i = 0; i < 10; i++) { let a = i / 10 * 6.283 + Math.random() * .5, px = cx, py = cy; p += `M${px} ${py}`;
      for (let j = 0; j < 6; j++) { a += fzR(-.35, .35); px += Math.cos(a) * fzR(3, 9); py += Math.sin(a) * fzR(3, 9); p += `L${px.toFixed(1)} ${py.toFixed(1)}`;
        if (j === 1 || j === 3) q += `${q ? 'L' : 'M'}${px.toFixed(1)} ${py.toFixed(1)}`; } }
    const n = k.addS('fz-crack', '', `<svg viewBox="0 0 100 177.78" preserveAspectRatio="none"><path d="${p}${q}" fill="none" stroke="#0008" stroke-width="1.4"/><path d="${p}${q}" fill="none" stroke="#fff" stroke-width=".55" stroke-linejoin="bevel"/></svg>`);
    A(n, [{ opacity: 1 }, { opacity: 1, offset: .7 }, { opacity: 0 }], { duration: ms }); });
  k.shock = (t, x, y, n = 1, col = c, size = 2.2) => k.at(t, () => { for (let i = 0; i < n; i++) { const r = k.add('ring', `left:${x}%;top:${y}%;--c:${col}`);
    A(r, [{ transform: 'scale(.2)', opacity: 1 }, { transform: `scale(${size})`, opacity: 0 }], { duration: 520, delay: i * 90, easing: 'ease-out' }); } });
  k.word = (t, html, x, y, ms = 700, size = 11, col = c) => k.at(t, () => { const w = k.add('fz-word', `--c:${col};font-size:${size}cqw;left:${x}%;top:${y}%`, html);
    A(w, [{ opacity: 0, transform: 'scale(2.2)' }, { opacity: 1, transform: 'none', offset: .18 }, { opacity: 1, transform: 'none', offset: .8 }, { opacity: 0, transform: 'scale(.9)' }], { duration: ms, easing: 'ease-out' }); });
  let back = 0;
  k.hurt = (t, push = 4) => k.at(t, () => { def.img.src = POSE(def.id, 'hit'); clearTimeout(back);
    def.img.animate([{ filter: 'brightness(3) saturate(0)' }, { filter: 'none' }], { duration: 160 });
    def.mv.animate([fzM(), fzM(d * push, 0, d * push), fzM()], { duration: 300, easing: 'ease-out' });
    if (t + 360 < impact) back = setTimeout(() => { if (def.img.isConnected) def.img.src = POSE(def.id, 'stance'); }, 340); });
  k.ghosts = (t, x0, x1, n = 4, ms = 420) => k.at(t, () => { for (let i = 0; i < n; i++) { const g = f.c.cloneNode(true); N.push(g);
    g.style.zIndex = 3; g.style.opacity = 0; g.style.filter = 'brightness(1.7)'; g.querySelector('.mv').style.transform = `translateX(${x0 + (x1 - x0) * i / n}cqw)`; cam.append(g);
    A(g, [{ opacity: .5 }, { opacity: 0 }], { duration: ms, delay: i * 45 }); } });
  k.done = (tail = 900) => { k.at(impact + 500, () => { f.img.src = POSE(f.id, 'stance'); }); at(impact + tail, () => N.forEach((n) => n.remove())); };
  // cut-in: the fighter's face slides across a coloured band (Street Fighter / Persona super)
  k.cutin = (t0, ms = 900, col = c) => k.at(t0, () => {
    const b = k.addS('fz-cut', `--c:${col}`, `<i></i><div class="face"><img alt=""></div><b>${NAME[f.id]}</b>`), face = b.querySelector('.face'), im = face.firstChild, nm = b.lastChild;
    im.src = IMG(f.id); faceFit(im, f.id, 2, .5); face.style[d > 0 ? 'left' : 'right'] = '14%'; nm.style[d > 0 ? 'right' : 'left'] = '26%';
    k.span(b, { transform: 'skewY(-7deg) scaleY(0)' }, { transform: 'skewY(-7deg) scaleY(1)' }, ms, 110);
    A(face, [{ transform: `translateX(${-d * 50}cqw)` }, { transform: `translateX(${-d * 3}cqw)`, offset: .22 }, { transform: `translateX(${d * 5}cqw)` }], { duration: ms, easing: 'cubic-bezier(.2,.8,.3,1)' });
    A(b.firstChild, [{ transform: 'translateX(0)' }, { transform: `translateX(${d * 40}cqw)` }], { duration: ms });
    A(nm, [{ transform: `translateX(${d * 30}cqw)`, opacity: 0 }, { transform: 'none', opacity: 1, offset: .3 }, { transform: `translateX(${-d * 6}cqw)`, opacity: 1 }], { duration: ms });
    sfx('whoosh', .6); flash(.35, 90); });
  return k;
}
// fn(f, def, d) for the registry: preloads at plan time, runs the script at run()
const FZ = (impact, name, script) => (f, def, d) => { [IMG(f.id), `img/props/${f.id}.webp`, POSE(def.id, 'punch'), POSE(f.id, 'kick')].forEach((s) => { new Image().src = s; });
  return { impact, name, run() { const k = FK(f, def, d, impact); script(k, f, def, d); k.done(); } }; };

const FINISHERS = {
  netanyahu: [
    // 1. fast combo: three marker slashes, three readings, the law passes
    FZ(1700, 'בקריאה שלישית', (k, f, def, d) => { const { ax, dx } = k, R = { h: 352, s0: 120, s1: 420, g: 400, life: .5 };
      k.wash(0, 1700, 'radial-gradient(circle at 50% 62%, #5a0000, #000 75%)', .6);
      k.cam([[0], [250, k.mx, 62, 1.22], [1300, k.mx, 62, 1.32], [1600, dx, 62, 1.4], [1700, 50, 50, 1]]);
      ['קריאה ראשונה', 'קריאה שנייה', 'קריאה שלישית'].forEach((w, i) => { const t = i * 400, ang = [-28, 28, 0][i];
        k.pose(t, i === 1 ? 'kick' : 'punch'); k.go(t, f, [fzM(), { ...fzM(d * 14), offset: .4 }, { ...fzM(d * 14), offset: .7 }, fzM()], 420); k.ghosts(t + 40, 0, d * 14, 3);
        k.at(t + 90, () => { sfx('whoosh', .6); const L = i === 2 ? 52 : 40, a = ang * Math.PI / 180, hx = d * Math.cos(a) * L / 2, hy = Math.sin(a) * L / 2 / FZ_H, x0 = dx - hx, y0 = 63 - hy;
          const m = k.prop(26), rot = `rotate(${d * (ang + 45)}deg)`, P = (u) => fzT(x0 + 2 * hx * u, y0 + 2 * hy * u, rot);
          A(m, [{ transform: P(-.1), opacity: 0 }, { transform: P(0), opacity: 1, offset: .15 }, { transform: P(1), opacity: 1, offset: .85 }, { transform: P(1.1), opacity: 0 }], { duration: 200 });
          const ink = k.add('fz-ink', `left:${d > 0 ? x0 : x0 - L}%;top:${y0}%;width:${L}cqw;transform-origin:${d > 0 ? 'left' : 'right'};${i === 2 ? 'height:5cqw;margin-top:-2.5cqw' : ''}`);
          A(ink, [{ transform: `rotate(${d * ang}deg) scaleX(0)` }, { transform: `rotate(${d * ang}deg) scaleX(1)` }], { duration: 170, easing: 'ease-out' }); });
        k.word(t + 60, w, 50, 43, 460, i === 2 ? 11 : 9, '#ff2a2a');
        k.at(t + 200, () => { sfx(i % 2 ? 'hit2' : 'hit1', .9); shake(7, 180); }); k.hurt(t + 200, 3 + i); k.burst(t + 200, dx, 63, 40, R); });
      k.at(1150, () => { sfx('confirm', .9); const s = k.add('fz-stamp', `left:${dx}%;top:56%`, 'אושר'); A(s, [{ opacity: 0, transform: 'scale(2)' }, { opacity: 1, transform: 'none' }], { duration: 150, easing: 'ease-in' }); shake(10, 200); });
      k.pose(1450, 'punch'); k.go(1450, f, [fzM(), { ...fzM(d * 20), offset: .4 }, { ...fzM(d * 20), offset: .8 }, fzM()], 500); k.ghosts(1460, 0, d * 20, 4);
      k.lines(1450, 1700, dx, 62, 'h', '255,120,120');
      k.at(1500, () => { sfx('whoosh', .7); const m = k.prop(30); A(m, [{ transform: fzT(ax, 62, `rotate(${d * 45}deg) scale(.7)`) }, { transform: fzT(dx - d * 4, 62, `rotate(${d * 45}deg) scale(1.15)`) }], { duration: 190, easing: 'ease-in' }); });
      k.inv(1690); }),
    // 2. cinematic: the UN placard, the red line drawn live, then fired across the stage
    FZ(2500, 'הקו האדום', (k, f, def, d) => { const { ax, dx } = k;
      k.bars(0, 2600); k.wash(0, 2500, '#000', .74); k.wash(0, 2500, `radial-gradient(ellipse 34% 40% at ${f.x}% 70%, #fff3, transparent 70%)`, 1);
      k.slow(0, 2400, .25); k.at(0, () => sfx('special', .7)); k.cutin(80, 900);
      k.cam([[0], [950, 50, 50, 1], [1150, 50, 40, 1.3], [1800, 50, 40, 1.32], [1950, k.mx, 60, 1.12], [2400, dx, 60, 1.3], [2500, 50, 50, 1]]);
      let card, ink;
      k.at(950, () => { card = k.add('fz-card', `left:50%;top:40%`, '<u style="top:22%"></u><u style="top:46%"></u><i class="bomb"></i><div class="fz-ink"></div>'); ink = card.lastChild;
        ink.style.transformOrigin = d > 0 ? 'left' : 'right'; ink.style.transform = 'scaleX(0)';
        A(card, [{ transform: 'translateY(80cqw) rotate(-8deg)' }, { transform: 'rotate(2deg)', offset: .7 }, { transform: 'rotate(-1deg)' }], { duration: 300, easing: 'cubic-bezier(.2,1.3,.4,1)' }); sfx('jump', .5); });
      k.at(1250, () => { sfx('whoosh', .5); const m = k.prop(17);   // the marker draws the line across the bomb
        const P = (u) => fzT(50 + d * (u * 44 - 22), 30, `rotate(${d * 135}deg)`);
        A(m, [{ transform: P(0), opacity: 0 }, { transform: P(0), opacity: 1, offset: .1 }, { transform: P(1), opacity: 1, offset: .85 }, { transform: P(1), opacity: 0 }], { duration: 560, easing: 'ease-in-out' });
        A(ink, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 450, easing: 'ease-in-out' }); });
      k.at(1750, () => { A(ink, [{ boxShadow: '0 0 3cqw #ff2a2a' }, { boxShadow: '0 0 9cqw 2cqw #ff2a2a, 0 0 0 .6cqw #fff' }], { duration: 120 }); A(card, [{ transform: 'rotate(-1deg)' }, { transform: 'rotate(3deg) scale(1.04)' }, { transform: 'rotate(-1deg)' }], { duration: 100, iterations: 2 }); });
      k.pose(1850, 'punch'); k.shock(1850, 50, 40, 2, '#ff2a2a', 1.6);
      k.at(1850, () => { A(card, [{ transform: 'rotate(-1deg)', opacity: 1 }, { transform: 'translateY(30cqw) rotate(-20deg)', opacity: 0 }], { duration: 400, easing: 'ease-in' }); sfx('blast', .9); shake(10, 250);
        const p = k.prop(18); A(p, [{ transform: fzT(ax, 62, `rotate(${d * 45}deg)`) }, { transform: fzT(ax, 62, `rotate(${d * 45}deg)`) }], { duration: 650 });
        const w = Math.abs(dx - ax) + 30, b = k.add('beam', `left:${d > 0 ? ax : ax - w}%;width:${w}cqw;top:62%;height:8cqw;margin-top:-4cqw;--c:#ff2a2a;transform-origin:${d > 0 ? 'left' : 'right'}`);
        A(b, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)', offset: .22 }, { transform: 'scaleX(1) scaleY(1.5)', offset: .6 }, { transform: 'scaleX(1) scaleY(1)', offset: .9 }, { transform: 'scaleX(1) scaleY(.1)', opacity: 0 }], { duration: 680 }); });
      k.lines(1850, 2450, dx, 62, 'h', '255,140,140');
      [1950, 2150, 2350].forEach((t, i) => { k.hurt(t, 4 + i); k.burst(t, dx, 62, 36, { h: 352, s0: 150, s1: 520, g: 300, life: .5 }); k.at(t, () => sfx('hit2', .7)); });
      k.crack(2380, dx, 60); k.inv(2480); }),
    // 3. satire: he goes down, the lives counter says 0, it glitches to ∞, he rises and teleports in
    FZ(2300, 'הישרדות נצחית', (k, f, def, d) => { const { dx } = k;
      k.pose(0, 'punch', def); k.go(0, def, [fzM(), { ...fzM(-d * 14), offset: .45 }, fzM()], 600); k.at(0, () => sfx('whoosh', .6));
      k.pose(180, 'hit'); k.at(180, () => { hitSfx('smash', 1); shake(9, 220); f.img.animate([{ filter: 'brightness(3) saturate(0)' }, { filter: 'none' }], { duration: 180 }); });
      k.burst(180, f.x, 62, 50, { s0: 150, s1: 500, g: 500, life: .5 }); k.pose(650, 'stance', def);
      k.go(180, f, [fzM(), { ...fzM(-d * 10, 5, -d * 72), offset: .2, easing: 'ease-in' }, { ...fzM(-d * 10, 5, -d * 72), offset: .66 }, { ...fzM(0, -6, 0), offset: .82 }, fzM()], 1320, 'cubic-bezier(.4,0,.4,1)');
      k.wash(300, 1150, '#1b1b1b', .7); k.at(300, () => sfx('glitch', .6));
      k.at(350, () => { const w = k.add('fz-word', `--c:#888;font-size:13cqw;left:50%;top:44%;color:#ddd`, 'חיים: 0');
        A(w, [{ opacity: 0, transform: 'scale(1.6)' }, { opacity: 1, transform: 'none', offset: .12 }, { opacity: 1, offset: .9 }, { opacity: 0 }], { duration: 850 });
        at(500, () => { if (!w.isConnected) return; sfx('glitch', .7); A(w, [{ translate: '-53% -50%', filter: 'none' }, { translate: '-46% -52%', filter: 'hue-rotate(90deg)' }, { translate: '-50% -50%' }], { duration: 70, iterations: 4, composite: 'replace' }); });
        at(700, () => { if (!w.isConnected) return; w.textContent = 'חיים: ∞'; w.style.color = '#ff3a3a'; w.style.setProperty('--c', '#ff2a2a'); sfx('special', .8); flash(.5, 120); }); });
      k.at(1050, () => { const g = 'drop-shadow(0 0 3cqw #ff1a1a) drop-shadow(0 0 7cqw #ff1a1a) brightness(1.15)';
        f.img.animate([{ filter: 'drop-shadow(0 0 0 #f000)' }, { filter: g, offset: .3 }, { filter: g, offset: .85 }, { filter: 'drop-shadow(0 0 0 #f000)' }], { duration: 1700 }); });
      k.pose(1150, 'stance'); k.bars(1050, 2400); k.wash(1150, 2300, 'radial-gradient(circle at 50% 70%, #3a0000, #000 80%)', .7); k.cutin(1150, 750);
      k.burst(1200, f.x, 70, 60, { a0: -Math.PI, spread: Math.PI, s0: 80, s1: 260, g: -150, life: .9, h: 355 });
      k.at(1950, () => { sfx('whoosh', .8); FX.burst(...k.scr(f.x, 62), 70, { s0: 60, s1: 300, g: -200, life: .7, h: 355 }); });
      k.go(1950, f, [{ ...fzM(), opacity: 1 }, { ...fzM(), opacity: 0, offset: .08 }, { ...fzM(d * 25), opacity: 0, offset: .16 }, { ...fzM(d * 25), opacity: 1, offset: .26 }, { ...fzM(d * 28), offset: .45 }, { ...fzM(d * 25), offset: .6 }, fzM()], 1000, 'linear');
      k.burst(2110, def.x - d * 14, 62, 50, { s0: 60, s1: 300, g: -200, life: .6, h: 355 }); k.pose(2150, 'punch');
      k.cam([[0], [180, f.x, 62, 1.15], [1100, f.x, 60, 1.25], [1900, f.x, 58, 1.3], [2050, dx, 60, 1.2], [2250, dx, 60, 1.35], [2300, 50, 50, 1]]);
      k.at(2150, () => { const m = k.prop(24); A(m, [{ transform: fzT(dx - d * 14, 62, `rotate(${d * 45}deg) scale(.8)`) }, { transform: fzT(dx - d * 3, 62, `rotate(${d * 45}deg) scale(1.1)`) }], { duration: 140, easing: 'ease-in' }); });
      k.lines(2120, 2300, dx, 62, 'r', '255,90,90'); k.inv(2290); }),
  ],
  lapid: [
    // 1. gatling barrage: a storm of red gloves, "יש!" on every hit
    FZ(1800, 'יש עתיד? יש.', (k, f, def, d) => { const { ax, dx } = k;
      k.pose(0, 'punch'); k.wash(0, 1800, 'radial-gradient(circle at 50% 62%, #003a4a, #000 75%)', .55);
      k.cam([[0], [300, dx, 60, 1.3], [1500, dx, 60, 1.42], [1800, 50, 50, 1]]); k.lines(80, 1700, dx, 62, 'r');
      k.go(0, f, [fzM(), ...Array.from({ length: 12 }, (_, i) => fzM(d * (6 + (i % 2) * 5))), fzM()], 1350, 'linear');
      k.pose(240, 'hit', def); k.go(240, def, Array.from({ length: 14 }, (_, i) => fzM(d * (i % 2 ? 3 : 1), 0, d * (i % 2 ? 4 : 0))), 1150, 'linear');
      let n = 0, box;
      k.at(240, () => { box = k.addS('combo', `opacity:1;top:44%;${f.k === 1 ? 'right' : 'left'}:5%`); });
      for (let i = 0; i < 18; i++) { const t = 80 + i * 68;
        k.at(t, () => { const g = k.prop(fzR(16, 26), 'lapid', i % 3 === 0), y0 = fzR(50, 70), y1 = fzR(55, 70);
          A(g, [{ transform: fzT(ax - d * 4, y0, `rotate(${d * -25}deg) scale(.6)`), opacity: .3 }, { transform: fzT(dx - d * 5, y1, `rotate(${d * 8}deg) scale(1.05)`), opacity: 1, offset: .7 },
            { transform: fzT(dx - d * 2, y1, 'scale(1.25)'), opacity: 0 }], { duration: 200, easing: 'ease-in' }); });
        k.at(t + 150, () => { if (i % 3 === 0) sfx(i % 2 ? 'hit2' : 'hit1', .7); FX.burst(...k.scr(dx, fzR(56, 68)), 12, { s0: 120, s1: 380, g: 300, life: .35, h: 0 });
          if (box) box.innerHTML = fmt(C.fight.combo, { n: ++n }); }); }
      for (let j = 0; j < 8; j++) k.word(200 + j * 145, 'יש!', dx + fzR(-20, 20) * (j % 2 ? 1 : -1), fzR(40, 52), 380, fzR(8, 11), '#3ae0ff');
      k.at(1250, () => sfx('combo', .7));
      k.at(1350, () => { const g = k.prop(46); sfx('whoosh', .8);
        A(g, [{ transform: fzT(ax, 60, 'scale(.4)') }, { transform: fzT(ax - d * 6, 58, `rotate(${-d * 20}deg) scale(1)`), offset: .45 }, { transform: fzT(ax - d * 7, 58, `rotate(${-d * 22}deg) scale(1)`), offset: .55 },
          { transform: fzT(dx - d * 2, 62, `rotate(${d * 6}deg) scale(1.45)`) }], { duration: 430, easing: 'cubic-bezier(.6,0,.9,.5)' }); });
      k.pose(1350, 'kick'); k.pose(1590, 'punch'); k.go(1590, f, [fzM(), { ...fzM(d * 18), offset: .5 }, fzM()], 600); k.ghosts(1600, 0, d * 18, 3);
      k.crack(1790, dx, 60); k.inv(1785); }),
    // 2. cinematic boxing: bell, ropes, round card, cut-in, charged right hook, hit-stop
    FZ(2500, 'גונג! סיבוב שני', (k, f, def, d) => { const { ax, dx } = k;
      k.bars(0, 2550); k.wash(0, 2500, '#000', .68); k.wash(0, 2500, 'radial-gradient(ellipse 50% 40% at 50% 70%, #fff3, transparent 70%)', 1);
      k.at(0, () => { sfx('confirm', 1); sfx('special', .6);
        ['#e33', '#fff', '#2f5fe0'].forEach((col, i) => { const r = k.add('fz-rope', `top:${72 + i * 6}%;background:linear-gradient(${col}, color-mix(in srgb, ${col}, #000 40%))`);
          k.span(r, { transform: 'scaleX(0)', opacity: 1 }, { transform: 'scaleX(1)', opacity: 1 }, 2500, 260); }); });
      k.at(150, () => { const b = k.add('fz-board', 'left:50%;top:42%', 'סיבוב 2');
        A(b, [{ opacity: 0, transform: 'scale(2) rotate(-10deg)' }, { opacity: 1, transform: 'rotate(-4deg)', offset: .15 }, { opacity: 1, transform: 'rotate(-3deg)', offset: .85 }, { opacity: 0, transform: 'translateY(-10cqw) rotate(-3deg)' }], { duration: 800, easing: 'ease-out' }); shake(6, 160); });
      k.cutin(900, 800, '#3ae0ff');
      k.cam([[0], [800, 50, 52, 1.06], [1650, f.x, 62, 1.42], [2050, f.x, 62, 1.48], [2120, k.mx, 60, 1.2], [2250, dx, 60, 1.5], [2420, dx, 60, 1.5], [2500, 50, 50, 1]]);
      k.slow(1650, 2050, .15); k.pose(1650, 'kick');
      k.go(1650, f, [fzM(), { ...fzM(-d * 6, 0, -d * 7), offset: .9 }, fzM(-d * 6, 0, -d * 7)], 400, 'ease-out');
      let g; k.at(1650, () => { g = k.prop(22); sfx('whoosh', .5);
        A(g, [{ transform: fzT(ax - d * 6, 60, 'scale(.8)'), filter: 'drop-shadow(0 0 1cqw #ff3a3a)' }, { transform: fzT(ax - d * 9, 59, `rotate(${-d * 15}deg) scale(1.9)`), filter: 'drop-shadow(0 0 5cqw #ff3a3a) drop-shadow(0 0 2cqw #fff)' }], { duration: 400, easing: 'ease-in' }); });
      for (let i = 0; i < 4; i++) k.burst(1700 + i * 90, ax - d * 8, 60, 22, { s0: 40, s1: 160, g: -300, life: .45, h: 0 });
      k.pose(2050, 'punch'); k.go(2050, f, [fzM(-d * 6), { ...fzM(d * 22), offset: .3 }, { ...fzM(d * 22), offset: .75 }, fzM()], 800); k.ghosts(2055, -d * 6, d * 22, 4, 380);
      k.at(2050, () => { sfx('whoosh', .9); g && A(g, [{ transform: fzT(ax - d * 9, 59, `rotate(${-d * 15}deg) scale(1.9)`) }, { transform: fzT(dx - d * 6, 61, `rotate(${d * 8}deg) scale(2.5)`) }], { duration: 200, easing: 'cubic-bezier(.6,0,1,.6)' }); });
      k.lines(2050, 2500, dx, 61, 'h');
      k.hurt(2255, 4); k.burst(2255, dx, 61, 60, { s0: 200, s1: 700, g: 300, life: .6, h: 0 }); k.at(2255, () => { hitSfx('smash', 1); shake(12, 200); });
      k.freeze(2260, 200); k.inv(2260, 110); k.shock(2470, dx, 61, 3, '#fff', 2.6); k.crack(2470, dx, 58); }),
    // 3. satire: the news opener; the anchor punches out of his own broadcast
    FZ(2300, 'פתיח של מהדורה', (k, f, def, d) => { const { dx } = k;
      k.at(0, () => { sfx('reveal', .7); sfx('whoosh', .5); }); k.wash(0, 2300, 'linear-gradient(160deg, #04306e, #000 75%)', .78);
      for (let i = 0; i < 3; i++) k.at(i * 130, () => { const s = k.add('fz-sweep', `z-index:3`); A(s, [{ transform: 'translateX(-130cqw) skewX(-22deg)' }, { transform: 'translateX(80cqw) skewX(-22deg)' }], { duration: 520, easing: 'ease-in-out' }); });
      k.at(200, () => { const b = k.addS('fz-live', '', 'שידור חי'); k.span(b, { opacity: 0 }, { opacity: 1 }, 2100, 120); });
      let third; k.at(300, () => { third = k.addS('fz-third', '', '<b>מהדורה מיוחדת</b><span>לפיד עולה לשידור</span>');
        k.span(third, { transform: `translateX(${d * 110}cqw)` }, { transform: 'none' }, 2000, 260, 'cubic-bezier(.2,.9,.3,1)'); });
      k.at(300, () => { const t = k.addS('fz-tick', '', `<span>${'יש עתיד · יש מהדורה · יש נוקאאוט · '.repeat(3)}</span>`);
        k.span(t, { opacity: 0 }, { opacity: 1 }, 2000, 150); A(t.firstChild, [{ transform: 'translateX(-60cqw)' }, { transform: 'translateX(60cqw)' }], { duration: 2000 }); });
      let pip; k.at(850, () => { pip = k.add('fz-pip', '', `<img alt=""><b>${NAME[f.id]}</b>`); const im = pip.firstChild; im.src = IMG(f.id); faceFit(im, f.id, 44 / 33, .45);
        A(pip, [{ transform: 'scale(0)' }, { transform: 'scale(1.08)', offset: .7 }, { transform: 'none' }], { duration: 260, easing: 'ease-out' }); sfx('whoosh', .5); });
      k.at(1150, () => { third.className = 'fz-third red'; third.innerHTML = '<b>מבזק</b><span>נוקאאוט בשידור חי</span>'; A(third, [{ filter: 'brightness(2)' }, { filter: 'none' }], { duration: 200, iterations: 2 }); sfx('alarm', .45); });
      k.at(1400, () => { A(pip, [{ transform: 'rotate(-2deg)' }, { transform: 'rotate(2deg) scale(1.03)' }], { duration: 60, iterations: 5, direction: 'alternate' }); sfx('jump', .5); });
      k.pose(1400, 'punch');
      k.at(1450, () => { const g = k.prop(20); sfx('whoosh', .9);
        A(g, [{ transform: fzT(50, 30, 'scale(.3)') }, { transform: fzT(50, 34, `rotate(${-d * 10}deg) scale(2.8)`), offset: .45 }, { transform: fzT(50, 34, `rotate(${-d * 10}deg) scale(2.8)`), offset: .55 },
          { transform: fzT(dx - d * 3, 62, `rotate(${d * 20}deg) scale(1.4)`) }], { duration: 850, easing: 'cubic-bezier(.5,0,.6,1)' }); });
      k.at(1830, () => { sfx('block', 1); shake(12, 240); flash(.6, 100); A(pip, [{ opacity: 1 }, { opacity: 0, transform: 'translateY(20cqw) rotate(12deg)' }], { duration: 400, easing: 'ease-in' }); });
      k.crack(1830, 50, 34, 1300); k.lines(1900, 2300, dx, 62, 'r');
      k.cam([[0], [600, 50, 45, 1.08], [1450, 50, 38, 1.1], [1830, 50, 36, 1.18], [2150, dx, 60, 1.25], [2300, 50, 50, 1]]);
      k.hurt(2250, 5); k.inv(2290); }),
  ],
  golan: [
    // 1. fast: the megaphone fires the word itself, syllable by syllable, then the whole word lands
    FZ(1600, 'דמו-קר-טיה!', (k, f, def, d) => { const { ax, dx, c } = k, sx = ax + d * 12;
      k.pose(0, 'punch'); k.wash(0, 1600, 'radial-gradient(circle at 50% 62%, #4a0030, #000 75%)', .55);
      k.at(0, () => f.img.animate([{ translate: '0 0' }, { translate: `${-d * .6}cqw .3cqw` }], { duration: 60, iterations: 22, direction: 'alternate' }));   // his own megaphone (in the pose) shakes
      k.cam([[0], [100, k.mx, 60, 1.1], [500, k.mx, 60, 1.18], [900, k.mx, 60, 1.26], [1250, 50, 48, 1.12], [1600, 50, 50, 1]]);
      ['דמו', 'קר', 'טיה!'].forEach((s, i) => { const t = 100 + i * 400;
        k.at(t, () => { sfx('blast', .7); const w = k.add('fz-word', `--c:${c};left:${sx}%;top:57%;font-size:14cqw;color:#ffd0ec`, s);
          A(w, [{ transform: 'scale(.3)', opacity: .4 }, { transform: `translate(${dx - sx}cqw, ${5 * FZ_H}cqw) scale(1.4)`, opacity: 1, offset: .55 }, { transform: `translate(${dx - sx}cqw, ${5 * FZ_H}cqw) scale(1.6)`, opacity: 1, offset: .75 },
            { transform: `translate(${dx - sx + d * 8}cqw, ${2 * FZ_H}cqw) scale(1.8)`, opacity: 0 }], { duration: 480, easing: 'ease-in' }); });
        k.shock(t, sx, 58, 2, c, 1.4); k.hurt(t + 260, 3 + i); k.burst(t + 260, dx, 62, 40, { h: 320, s0: 150, s1: 500, g: 300, life: .5 });
        k.at(t + 260, () => { sfx('hit1', .8); shake(7, 180); }); });
      k.lines(100, 1100, sx, 58, 'r', '255,160,220');
      k.at(1150, () => { const w = k.add('fz-word', `--c:${c};left:50%;top:40%;font-size:17cqw;color:#ff8ad0;display:flex`, '<span>דמו</span><span>קר</span><span>טיה!</span>');
        [...w.children].forEach((sp, i) => A(sp, [{ transform: `translate(${(i - 1) * -40}cqw, ${(i % 2 ? -1 : 1) * 30}cqw) scale(.4)`, opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 200, easing: 'ease-out' }));
        const end = `translate(${dx - 50}cqw, ${21 * FZ_H}cqw) scale(.7)`;
        A(w, [{ transform: 'none', opacity: 1 }, { transform: 'none', offset: .45, easing: 'cubic-bezier(.6,0,1,.6)' }, { transform: end, opacity: 1, offset: .92 }, { transform: end, opacity: 0 }], { duration: 470 }); sfx('special', .7); });
      k.shock(1580, dx, 62, 3, c, 2.4); k.inv(1585); }),
    // 2. cinematic: the Kaplan street sign, cut-in, the flag goes up, the whole crowd surges in
    FZ(2500, 'כולם לקפלן!', (k, f, def, d) => { const { ax, dx, c } = k;
      k.bars(0, 2550); k.wash(0, 2500, 'linear-gradient(#020617, #0b1030)', .72); k.at(0, () => sfx('crowd', .8));
      k.at(80, () => { const s = k.add('fz-sign', '', 'רח׳ קפלן');
        A(s, [{ transform: 'translateY(-60cqw) rotate(0)' }, { transform: 'rotate(8deg)', offset: .3 }, { transform: 'rotate(-5deg)', offset: .5 }, { transform: 'rotate(2deg)', offset: .7 }, { transform: 'rotate(0)', opacity: 1, offset: .9 }, { opacity: 0 }], { duration: 700, easing: 'ease-out' }); sfx('jump', .5); });
      k.cutin(750, 800);
      k.cam([[0], [1350, 50, 50, 1], [1650, f.x, 66, 1.2], [2000, k.mx, 68, 1.12], [2380, dx, 66, 1.25], [2500, 50, 50, 1]]);
      k.pose(1400, 'kick'); k.slow(1400, 2000, .3);
      k.at(1400, () => { const p = k.add('fz-flag', `left:${ax - d * 4}%;top:30%;height:52%`, '<i></i>'), cl = p.firstChild; cl.style[d > 0 ? 'left' : 'right'] = '1cqw'; cl.style.transformOrigin = d > 0 ? '0 50%' : '100% 50%';
        A(p, [{ transform: 'translateY(60cqw)' }, { transform: 'none' }], { duration: 300, easing: 'cubic-bezier(.2,1.3,.4,1)' });
        A(cl, [{ transform: 'skewY(0) scaleX(1)' }, { transform: `skewY(${d * 8}deg) scaleX(.92)` }], { duration: 260, iterations: 8, direction: 'alternate', easing: 'ease-in-out' }); sfx('whoosh', .6); });
      k.at(1550, () => { sfx('crowd', 1); const cr = k.add('fz-crowd');
        for (let i = 0; i < 9; i++) { const fl = el('div', 'fz-flag', '<i></i>'); fl.style.cssText = `left:${6 + i * 10.5}%;bottom:62%;height:${fzR(18, 30)}cqw;width:1cqw`; fl.firstChild.style.cssText = 'width:15cqw;height:10cqw;right:0';
          cr.append(fl); A(fl.firstChild, [{ transform: 'skewY(0)' }, { transform: 'skewY(10deg) scaleX(.9)' }], { duration: fzR(200, 320), iterations: 12, direction: 'alternate' }); }
        for (let i = 0; i < 4; i++) { const m = k.prop(16); cr.append(m); m.style.left = `${15 + i * 23}%`; m.style.top = '4%'; }
        A(cr, [{ transform: `translate(${-d * 10}cqw, 30cqw)` }, { transform: `translate(${-d * 10}cqw, 0)`, offset: .3 }, { transform: `translate(${d * 34}cqw, 0)`, offset: .8 }, { transform: `translate(${d * 40}cqw, 0)`, opacity: 1, offset: .88 }, { transform: `translate(${d * 44}cqw, 10cqw)`, opacity: 0 }], { duration: 1700, easing: 'ease-in-out' });
        A(cr, [{ translate: '0 0' }, { translate: '0 -1.5cqw' }], { duration: 160, iterations: 10, direction: 'alternate' }); });
      k.word(1700, 'דמוקרטיה!', 50, 47, 520, 12, c); k.word(2050, 'דמוקרטיה!', 50, 47, 480, 13, c);
      k.hurt(2200, 5); k.hurt(2360, 6); k.burst(2200, dx, 66, 40, { h: 320, s0: 150, s1: 500, g: 200, life: .5 }); k.at(2200, () => { sfx('hit2', .8); shake(9, 220); });
      k.shock(2440, dx, 62, 3, c, 2.4); k.inv(2485); }),
    // 3. satire: "quiet!"; the volume meter climbs past 10 to 11 and blows the opponent away
    FZ(2300, 'לא תשתיקו אותנו!', (k, f, def, d) => { const { ax, dx, c } = k, side = f.k === 1 ? 'right' : 'left';
      k.pose(0, 'punch', def); let bub;
      k.at(0, () => { bub = k.add('bubble', `left:${dx - 7}%;top:42%;opacity:1`, 'שקט!'); A(bub, [{ transform: 'scale(0)' }, { transform: 'scale(1.1)', offset: .7 }, { transform: 'none' }], { duration: 220 }); sfx('block', .6); });
      k.pose(250, 'punch'); let mp, met;
      k.at(250, () => { mp = k.prop(22); met = k.add('fz-meter', `${side}:4%`, '<i></i>'.repeat(10)); A(met, [{ opacity: 0, transform: 'translateY(10cqw)' }, { opacity: 1, transform: 'none' }], { duration: 200 }); });
      for (let i = 0; i < 10; i++) k.at(350 + i * 90, () => { const s = met.children[i]; s.style.background = i < 6 ? '#3aff8a' : i < 8 ? '#ffd84a' : '#ff2a4a'; s.style.boxShadow = `0 0 2cqw ${s.style.background}`;
        sfx('tick', .3 + i * .04); const sc = 1 + i * .06, j = .4 + i * .15; A(mp, [{ transform: fzT(ax + d * 2 + j, 56, `scale(${sc})`) }, { transform: fzT(ax + d * 2 - j, 56.4, `scale(${sc})`) }], { duration: 45, iterations: 2, direction: 'alternate', fill: 'forwards' }); });
      k.wash(400, 2300, c, .16, 4);
      k.at(1250, () => { const r = met.getBoundingClientRect(), s = cam.getBoundingClientRect(), x = (r.left + r.width / 2 - s.left) / s.width * 100;
        const w = k.add('fz-word', `--c:#ff2a4a;left:${x}%;top:37%;font-size:15cqw;color:#ff3a5a;font-family:var(--f-mark);font-style:italic;font-weight:900`, '11');
        A(w, [{ transform: 'scale(.2) translateY(20cqw)', opacity: 0 }, { transform: 'scale(1.3)', opacity: 1, offset: .5 }, { transform: 'scale(1)', opacity: 1 }], { duration: 250, easing: 'cubic-bezier(.2,1.5,.4,1)' });
        A(met, [{ transform: 'rotate(-4deg)' }, { transform: 'rotate(4deg)' }], { duration: 50, iterations: 16, direction: 'alternate' }); sfx('alarm', .6); shake(8, 300); });
      k.crack(1260, side === 'right' ? 91 : 9, 40, 1100);
      k.at(1420, () => { sfx('blast', 1); A(mp, [{ transform: fzT(ax + d * 2, 56, 'scale(1.55)') }, { transform: fzT(ax + d * 4, 56, 'scale(1.7)') }], { duration: 60, iterations: 14, direction: 'alternate' });
        for (let i = 0; i < 8; i++) { const r = k.add('ring', `left:${ax + d * 12}%;top:58%;--c:${c}`);
          A(r, [{ transform: 'translateX(0) scale(.3)', opacity: 1 }, { transform: `translateX(${dx - ax}cqw) scale(1.8)`, opacity: .9, offset: .7 }, { transform: `translateX(${dx - ax + d * 15}cqw) scale(2.4)`, opacity: 0 }], { duration: 480, delay: i * 95, easing: 'ease-in' }); } });
      k.lines(1420, 2300, dx, 60, 'h', '255,170,230');
      k.at(1470, () => { def.img.src = POSE(def.id, 'hit'); def.img.animate([{ transform: 'skewX(0)' }, { transform: `skewX(${-d * 14}deg) scaleX(1.06)` }], { duration: 80, iterations: 10, direction: 'alternate' });
        def.mv.animate([fzM(), fzM(d * 7, -1, d * 6)], { duration: 830, easing: 'ease-in' });
        A(bub, [{ transform: 'none', opacity: 1 }, { transform: `translate(${d * 70}cqw, -20cqw) rotate(${d * 200}deg) scale(.5)`, opacity: 0 }], { duration: 600, easing: 'ease-in' }); });
      [1550, 1800, 2050].forEach((t) => k.burst(t, dx, 60, 26, { h: 320, s0: 150, s1: 450, g: 0, a0: d > 0 ? -.4 : Math.PI - .4, spread: .8, life: .5 }));
      k.cam([[0], [300, f.x, 55, 1.2], [1250, f.x, 50, 1.3], [1450, k.mx, 60, 1.08], [2200, dx, 60, 1.25], [2300, 50, 50, 1]]);
      k.inv(2290); }),
  ],
};
