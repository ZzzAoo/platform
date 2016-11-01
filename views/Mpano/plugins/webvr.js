var krpanoplugin = function() {
    function Er(e) {
        return ".yes.on.true.1" [s](("." + e)[c]()) >= 0
    }
    function Sr(e) {}
    function xr() {
        ar = 0;
        if (Tn[at] || _n) if (Tn[_]) {
            var e = ("" + navigator.userAgent)[c]()[s]("ucbrowser") > 0;
            Tn.chrome || Tn[Ht] ? ar = 2 : e && (ar = 2)
        } else ar = 2;
        if (ar > 0) {
            Vn == 0 && (ar = 1);
            if (Tn[E] && _n) setTimeout(Nr, 10);
            else {
                window[u](ar == 1 ? f: h, Cr, t);
                var i = Nn[l] != "" && Nn[l] != n;
                setTimeout(Nr, Tn[E] ? 10 : i ? 1500 : 3e3)
            }
        } else sr == t && (sr = r, xn[J](Nn[l], Nn))
    }
    function Tr() {
        sr == t && (sr = r, er = r, tr = r, nr = r, rr = t, Rr(), xn[J](Nn[O], Nn))
    }
    function Nr() {
        window[o](f, Cr, t),
        window[o](h, Cr, t),
        Tn[E] && _n ? Tr() : sr == t && (sr = r, xn[J](Nn[l], Nn))
    }
    function Cr(e) {
        window[o](e.type, Cr, t),
        e.type == f || e.type == h && e[K] && e.rotationRate ? (sr = r, er = r, tr = r, Tn[E] && (nr = r), Rr(), xn[J](Nn[O], Nn)) : Tn[E] && _n ? Tr() : sr == t && (sr = r, xn[J](Nn[l], Nn))
    }
    function jr(e) {
        var i;
        for (i = 0; i < e[kt]; i++) if (e[i] instanceof HMDVRDevice) {
            kr = e[i],
            kr[F] ? (Dr = kr[F](mt), Pr = kr[F](Tt), Ar = Dr[pn], Or = Pr[pn], Mr = Dr[Et], _r = Pr[Et]) : kr[$] && kr[C] && (Ar = kr[$](mt), Or = kr[$](Tt), Mr = kr[C](mt), _r = kr[C](Tt));
            var s = 2 * Math.max(Mr.leftDegrees, Mr.rightDegrees),
            o = 2 * Math.max(Mr.upDegrees, Mr.downDegrees);
            Br = Math.max(s, o);
            break
        }
        for (i = 0; i < e[kt]; i++) if (e[i] instanceof PositionSensorVRDevice) if (kr == n || kr[vn] == e[i][vn]) {
            Lr = e[i];
            break
        }
        kr || Lr ? (er = r, Xn == t && Tn[_] && (rr = r), xn[J](Nn[O], Nn)) : sr == t && (sr = r, xn[J](Nn[l], Nn))
    }
    function Ir(e) {
        Zn = e;
        if (e) {
            Fr = {
                imagehfov: xn.image.hfov,
                continuousupdates: xn[p][g],
                usercontrol: xn[y][it],
                mousetype: xn[y][St],
                contextmenu_touch: xn[Rt].touch,
                loadwhilemoving: xn[m][A],
                stereo: xn[m][Ct],
                stereooverlap: xn[m][j],
                hlookat: xn[p][V],
                vlookat: xn[p][jt],
                camroll: xn[p][an],
                fovmin: xn[p][ft],
                fovmax: xn[p][ht],
                fisheye: xn[p][X],
                fov: xn[p].fov,
                maxpixelzoom: xn[p][d],
                fovtype: xn[p][G],
                stereographic: xn[p][x],
                fisheyefovlink: xn[p][b],
                pannini: xn[p][nt],
                architectural: xn[p][v],
                limitview: xn[p][T],
                area_mode: xn[Lt].mode,
                area_align: xn[Lt].align,
                area_x: xn[Lt].x,
                area_y: xn[Lt].y,
                area_width: xn[Lt][Y],
                area_height: xn[Lt][N],
                maxmem: xn.memory[en]
            },
            xn[Lt].mode = "align",
            xn[Lt].align = "lefttop",
            xn[Lt].x = "0",
            xn[Lt].y = "0",
            xn[Lt][Y] = "100%",
            xn[Lt][N] = "100%",
            xn[Rt].touch = t,
            xn[p][g] = r,
            nr && Tn[E] && !mr ? xn[y][St] = "drag2d": xn[y][it] = "off",
            xn[m][Ct] = r,
            xn[m][A] = r,
            xn[p][T] = "off",
            xn[p][nt] = 0,
            xn[p][v] = 0,
            xn[p][G] = "VFOV",
            xn[p][ft] = 0,
            xn[p][ht] = 179,
            xn[p][X] = 0,
            xn[p].fov = Br,
            xn[p][d] = 0,
            xn[p][x] = r,
            xn[p][b] = 0,
            cr = xn[p][V],
            ci = 0,
            Tn[E] || (cr -= Ci()),
            ui();
            if (tr || rr) zr(0, 0),
            nr && Tn[E] && !mr || (xn[yt] = r);
            ri(),
            Dn && oi(r),
            xn.set("events[__webvr].keep", r),
            xn.set("events[__webvr].onnewpano", ii),
            xn.set("events[__webvr].onresize", si),
            (tr || rr) && Ko(r),
            xn[J](Nn.onentervr, Nn)
        } else if (Fr) {
            xn.set("events[__webvr].name", n),
            xn[p][g] = Fr[g],
            xn[y][it] = Fr[it],
            xn[y][St] = Fr[St],
            xn[Rt].touch = Fr.contextmenu_touch,
            xn[m][A] = Fr[A],
            xn[m][Ct] = Fr[Ct],
            xn[m][j] = Fr[j],
            xn[p][an] = 0;
            if (Fr.imagehfov == xn.image.hfov) xn[p][ft] = Fr[ft],
            xn[p][ht] = Fr[ht],
            xn[p].fov = Fr.fov,
            xn[p][d] = Fr[d],
            xn[p][G] = Fr[G],
            xn[p][T] = Fr[T],
            xn[p][X] = Fr[X],
            xn[p][x] = Fr[x],
            xn[p][b] = Fr[b],
            xn[p][nt] = Fr[nt],
            xn[p][v] = Fr[v];
            else {
                var i = xn.xml[p];
                xn[p][ft] = i && !isNaN(Number(i[ft])) ? Number(i[ft]) : 1,
                xn[p][ht] = i && !isNaN(Number(i[ht])) ? Number(i[ht]) : 140,
                xn[p].fov = i && !isNaN(Number(i.fov)) ? Number(i.fov) : 90,
                xn[p][X] = i && !isNaN(Number(i[X])) ? Number(i[X]) : 0,
                xn[p][nt] = i && !isNaN(Number(i[nt])) ? Number(i[nt]) : 0,
                xn[p][v] = i && !isNaN(Number(i[v])) ? Number(i[v]) : 0,
                xn[p][d] = i && !isNaN(Number(i[d])) ? Number(i[d]) : 2,
                xn[p][G] = i && i[G] ? i[G] : "MFOV",
                xn[p][T] = i && i[T] ? i[T] : pt,
                xn[p][x] = r,
                xn[p][b] = .5
            }
            xn[Lt].mode = Fr.area_mode,
            xn[Lt].align = Fr.area_align,
            xn[Lt].x = Fr.area_x,
            xn[Lt].y = Fr.area_y,
            xn[Lt][Y] = Fr.area_width,
            xn[Lt][N] = Fr.area_height,
            xn[W] = -1,
            xn[D] = t,
            xn.memory[en] = Fr[en],
            Fr = n,
            Qn && (ji(Qn, t), Qn = n),
            Ko(t),
            oi(t),
            ui(),
            xn[J](Nn.onexitvr, Nn)
        }
    }
    function Rr() {
        if (qr) return qr;
        var e = "Unknown",
        t = 0,
        n = 1536,
        r = Math.min(screen[Y], screen[N]),
        i = Math.max(screen[Y], screen[N]),
        o = window.devicePixelRatio || 1;
        if (Tn.iphone) if (i == 568) {
            var u = xn.webGL.context,
            a = "" + u.getParameter(u.VERSION);
            a[s]("A8 GPU") > 0 ? (e = ln, t = 4.7) : (e = "iPhone 5", t = 4, n = 1024)
        } else i == 667 ? o == 2 ? (e = ln, t = 4.7) : (e = on, t = 5.5) : i == 736 && (e = on, t = 5.5);
        else {
            var f = navigator.userAgent[c]();
            f[s]("gt-n710") >= 0 ? (t = 5.5, e = "Note 2") : f[s]("sm-n900") >= 0 ? (t = 5.7, e = "Note 3") : f[s]("sm-n910") >= 0 ? (t = 5.7, e = "Note 4") : f[s]("gt-i930") >= 0 || f[s](sn) >= 0 ? (t = 4.7, e = "Galaxy S3") : f[s]("gt-i950") >= 0 || f[s](sn) >= 0 ? (t = 5, e = "Galaxy S4") : f[s]("sm-g900") >= 0 || f[s]("sc-04f") >= 0 || f[s]("scl23") >= 0 ? (t = 5.1, e = "Galaxy S5") : f[s]("sm-g920") >= 0 || f[s]("sm-g925") >= 0 ? (t = 5.1, e = "Galaxy S6") : f[s]("lg-d85") >= 0 || f[s]("vs985") >= 0 || f[s]("lgls990") >= 0 || f[s]("lgus990") >= 0 ? (t = 5.5, e = "LG G3") : f[s]("lg-h810") >= 0 || f[s]("lg-h815") >= 0 || f[s]("lgls991") >= 0 ? (t = 5.5, e = "LG G4") : f[s]("xt1068") >= 0 || f[s]("xt1069") >= 0 || f[s]("xt1063") >= 0 ? (t = 5.5, e = "Moto G 2g") : f[s]("xt1058") >= 0 ? (t = 5.2, e = "Moto X 2g") : f[s]("d6653") >= 0 || f[s]("d6603") >= 0 ? (t = 5.2, e = "Xperia Z3") : f[s]("xperia z4") >= 0 ? (t = 5.5, e = "Xperia Z4") : f[s]("htc_p4550") >= 0 || f[s]("htc6525lv") >= 0 || f[s]("htc_pn071") >= 0 ? (t = 5, e = "One M8") : f[s]("nexus 4") >= 0 ? (t = 4.7, e = "Nexus 4") : f[s]("nexus 5") >= 0 ? (t = 5, e = "Nexus 5") : f[s]("nexus 6") >= 0 ? (t = 6, e = "Nexus 6") : f[s]("lumia 930") >= 0 && (t = 5, e = "Lumia 930")
        }
        t == 0 && (xn[J](Nn[Nt], Nn), t = 5);
        var l = Math[Bt](t * t / (1 + r / i * (r / i))) * 25.4,
        h = l * r / i;
        return qr = {
            screendiagonal_inch: t,
            screenwidth_mm: l,
            screenheight_mm: h,
            screenwidth_px: i * o,
            screenheight_px: r * o,
            devicename: e,
            best_res: n
        },
        qr
    }
    function Ur() {
        Fn < 1 ? Fn = 1 : Fn > 179.9 && (Fn = 179.9),
        In < 0 ? In = 0 : In > 5 && (In = 5);
        var e = qn[mn]("|"),
        t;
        for (t = 0; t < 4; t++) {
            var n = Number(e[t]);
            isNaN(n) && (n = t == 0 ? 1 : 0),
            Rn[t] = n
        }
        Un = Rn[0] != 1 || Rn[1] != 0 || Rn[2] != 0 || Rn[3] != 0,
        or[a] && (tr || rr) && (zr(0, 0), Ko(r))
    }
    function zr(e, n) {
        var i = Rr(),
        s = 0,
        o = 0,
        u = xn.webGL.canvas;
        if (u) {
            var a = Number(xn[m].framebufferscale);
            s = u[Y],
            o = u[N],
            !isNaN(a) && a != 0 && (s /= a, o /= a)
        }
        if (e <= 0 || n <= 0) e = s,
        n = o;
        var f = Fn,
        l = In;
        f = Math.tan(f * .5 * br),
        l = Math.exp(l) - 1;
        var c = Math.atan(f) * 2 / 2,
        h = l * 1e3,
        p = 1e3,
        d = p * Math.sin(c),
        v = p * Math.cos(c),
        g = 2 * Math.atan(d / (h + v));
        f = Math.tan(g / 2);
        var y = l,
        b = Hn;
        b /= jn;
        var w = i.screenwidth_mm,
        E = i.screenheight_mm;
        if (Bn > 0) {
            var S = Math.min(screen[Y], screen[N]),
            x = Math.max(screen[Y], screen[N]);
            w = Math[Bt](Bn * Bn / (1 + S / x * (S / x))) * 25.4,
            E = w * S / x
        }
        var T = w / 2 - b,
        C = 2 * (T / w),
        k = e,
        L = n,
        A = i.screenwidth_px,
        O = i.screenheight_px,
        M = r;
        if (nr || Tn.tablet || n > e) M = t;
        k <= 0 && (k = s),
        L <= 0 && (L = o);
        var _ = E / 70.9,
        D = f;
        D *= _,
        hr = _ / .69,
        M && (D *= L / O, C = 2 * (w * (k / A) / 2 - b) / (w * (k / A)));
        var P = 2 * Math.atan(D) * wr;
        pr = P,
        dr = y,
        vr = C,
        Wr()
    }
    function Wr() {
        var e = xn[p];
        pr > 0 && (e[X] = dr, e.fov = pr, e[ft] = pr, e[ht] = pr, e[d] = 0, e[G] = "VFOV", e[x] = r, e[b] = 0, e[T] = "off", xn[m][j] = vr)
    }
    function Xr() {
        return Tn[E] && kr && kr.deviceName ? kr.deviceName: (Rr(), qr ? qr[Gt] : "")
    }
    function Vr() {
        return qr ? qr.screendiagonal_inch: 0
    }
    function $r(e) {
        if (("" + e)[c]() == pt) Bn = 0,
        Ur();
        else {
            var t = parseFloat(e);
            if (isNaN(t) || t <= 0) t = 0;
            Bn = t,
            Ur()
        }
    }
    function Jr() {
        var e = Bn;
        return e <= 0 ? pt: e
    }
    function Kr() {
        return Tn[_] ? xn[m].viewerlayer: xn.webGL.canvas
    }
    function Qr() {
        xn.trace(0, "update - stereo=" + xn[m][Ct]),
        or[a] && (tr || rr) && (zr(0, 0), Ko(r))
    }
    function Gr() {
        if (er && Zn == t) if (tr == t) {
            var e = Kr();
            Sn[u](Tn[w][k][Yt], li),
            or[a] = r,
            Ir(r),
            ur = r,
            rr = t,
            Xn == t && Tn[_] && (rr = r),
            rr && (ur = t),
            e[Tn[w][k].requestfullscreen]({
                vrDisplay: kr,
                vrDistortion: ur
            }),
            Tn[at] && ei(xn[p][V]),
            ur == t && zr()
        } else {
            Sn[u](Tn[w][k][Yt], li),
            or[a] = r,
            Ir(r);
            if (Tn[at] || Tn.tablet) ar == 1 ? window[u](f, Mi, r) : ar == 2 && window[u](h, Bs, r);
            nr == t && Tn[w][k].touch && xn[y][$t][u](Tn[w][k][Kt], ni, t)
        }
    }
    function Yr() {
        or[a] = t,
        xn.get(yt) && xn.set(yt, t),
        window[o](f, Mi, r),
        window[o](h, Bs, r),
        Tn[w][k].touch && xn[y][$t][o](Tn[w][k][Kt], ni, t),
        Ir(t),
        xn[p].haschanged = r
    }
    function Zr() {
        er && (Zn ? Yr() : Gr())
    }
    function ei(e) {
        e === undefined ? e = 0 : (e = Number(e), isNaN(e) && (e = 0));
        var t = xn[p][V];
        if (Lr) {
            try {
                Lr.resetSensor !== undefined && Lr.resetSensor()
            } catch(n) {}
            try {
                Lr.zeroSensor !== undefined && Lr.zeroSensor()
            } catch(n) {}
            t = 0,
            cr = 0
        }
        nr && (xn[p][V] = e),
        cr = cr - t + e,
        ci = 0
    }
    function ni(e) {
        var i = t;
        if (Mn == t) i = r;
        else {
            var s = xn[y].getMousePos(e[fn] ? e[fn][0] : e);
            s.x /= xn.stagescale,
            s.y /= xn.stagescale;
            if (e.type == Tn[w][k][Kt]) ti == n ? (ti = s, xn[y][$t][u](Tn[w][k][un], ni, r), xn[y][$t][u](Tn[w][k][gn], ni, r)) : i = r;
            else if (e.type == Tn[w][k][gn]) i = r;
            else if (e.type == Tn[w][k][un] && ti) {
                var a = ti.x,
                f = s.x;
                if (xn[m][Ct]) {
                    var l = xn.stagewidth * .5; (a >= l || f >= l) && (a < l || f < l) && (f = a)
                }
                var c = xn[cn](a, ti.y, t),
                h = xn[cn](f, s.y, t),
                p = h.x - c.x;
                ti = s,
                cr -= p
            }
        }
        i && (ti = n, xn[y][$t][o](Tn[w][k][un], ni, r), xn[y][$t][o](Tn[w][k][gn], ni, r))
    }
    function ri() {
        if (An == t) xn[W] = -1,
        xn[D] = t;
        else if (xn.image.type == "cube" && xn.image.multires) {
            var e = Rr().best_res,
            n = 0,
            s = -1,
            o = 0,
            u = xn.image.level.getArray(),
            a = u[kt];
            if (a > 0) for (i = 0; i < a; i++) {
                var f = u[i].tiledimagewidth,
                l = Math.abs(f - e);
                if (s == -1 || l < s) n = f,
                s = l,
                o = i
            }
            if (s > 0) {
                xn[W] = o,
                xn[D] = r;
                if (n > 0) {
                    var c = 4 + 8 * (n * n * 6 + 1048575 >> 20);
                    c > xn.memory[en] && (xn.memory[en] = c)
                }
            }
        }
    }
    function ii() {
        or[a] && ri()
    }
    function si() {
        ii(),
        Ur()
    }
    function ui() {
        fr = 0,
        ki.t = 0,
        Li.t = 0,
        yo(),
        So = 0,
        go = t,
        Ls = n
    }
    function fi(e) {
        ai == 1 ? (yr.apply(document), ai = 0) : (gr.apply(Kr()), ai = 1)
    }
    function li(e) {
        var n = Kr(),
        i = !!(Sn[Jt] || Sn[Mt] || Sn[zt] || Sn[gt] || Sn[qt]);
        if (i && or[a]) {
            try {
                Tn[E] && mr && (gr.apply(n), nr && (ai = 1, xn[y][$t][u](nn, fi, t)))
            } catch(s) {}
            Tn[E] && n[u](rn, hi, t)
        } else window[o](f, Mi, r),
        window[o](h, Bs, r),
        n[o](rn, hi, t),
        xn[y][$t][o](nn, fi, t),
        or[a] = t,
        Ir(t)
    }
    function hi(e) {
        var t = Kr();
        if (Sn.pointerLockElement === t || Sn.mozPointerLockElement === t) {
            var n = e.movementX || e.mozMovementX,
            r = e.movementY || e.mozMovementY;
            if (!isNaN(n)) {
                ci += n * kn;
                while (ci < 0) ci += Math.PI * 2;
                while (ci >= Math.PI * 2) ci -= Math.PI * 2
            } else n = 0;
            nr && (isNaN(r) && (r = 0), xn[p][V] += n * kn * wr, xn[p][jt] = Math.max(Math.min(xn[p][jt] + r * kn * wr, 120), -120))
        }
    }
    function pi(e, t, n, r) {
        this.x = e,
        this.y = t,
        this.z = n,
        this.w = r
    }
    function di(e) {
        var t = Math[Bt](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w);
        t === 0 ? (e.x = e.y = e.z = 0, e.w = 1) : (t = 1 / t, e.x *= t, e.y *= t, e.z *= t, e.w *= t)
    }
    function vi(e) {
        e.x *= -1,
        e.y *= -1,
        e.z *= -1,
        di(e)
    }
    function mi(e, t) {
        return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
    }
    function gi(e) {
        return Math[Bt](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w)
    }
    function yi(e, t) {
        var n = e.x,
        r = e.y,
        i = e.z,
        s = e.w,
        o = t.x,
        u = t.y,
        a = t.z,
        f = t.w;
        e.x = n * f + s * o + r * a - i * u,
        e.y = r * f + s * u + i * o - n * a,
        e.z = i * f + s * a + n * u - r * o,
        e.w = s * f - n * o - r * u - i * a
    }
    function bi(e, t) {
        var n = t.x,
        r = t.y,
        i = t.z,
        s = t.w,
        o = e.x,
        u = e.y,
        a = e.z,
        f = e.w;
        e.x = n * f + s * o + r * a - i * u,
        e.y = r * f + s * u + i * o - n * a,
        e.z = i * f + s * a + n * u - r * o,
        e.w = s * f - n * o - r * u - i * a
    }
    function wi(e, t, n) {
        var r = e.x,
        i = e.y,
        s = e.z,
        o = e.w,
        u = r * t.x + i * t.y + s * t.z + o * t.w;
        u < 0 ? (u = -u, e.x = -t.x, e.y = -t.y, e.z = -t.z, e.w = -t.w) : (e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w);
        if (u >= 1) {
            e.w = o,
            e.x = r,
            e.y = i,
            e.z = s;
            return
        }
        var a = Math.acos(u),
        f = Math[Bt](1 - u * u);
        if (Math.abs(f) < .001) {
            e.w = .5 * (o + e.w),
            e.x = .5 * (r + e.x),
            e.y = .5 * (i + e.y),
            e.z = .5 * (s + e.z);
            return
        }
        var l = Math.sin((1 - n) * a) / f,
        c = Math.sin(n * a) / f;
        e.w = o * l + e.w * c,
        e.x = r * l + e.x * c,
        e.y = i * l + e.y * c,
        e.z = s * l + e.z * c
    }
    function Ei(e, t, n) {
        var r = n / 2,
        i = Math.sin(r);
        e.x = t.x * i,
        e.y = t.y * i,
        e.z = t.z * i,
        e.w = Math.cos(r)
    }
    function Si(e, t, n, r, i) {
        var s = Math.cos(t / 2),
        o = Math.cos(n / 2),
        u = Math.cos(r / 2),
        a = Math.sin(t / 2),
        f = Math.sin(n / 2),
        l = Math.sin(r / 2);
        return i === "XYZ" ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === Wt ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "ZXY" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === "ZYX" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "YZX" ? (e.x = a * o * u + s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u - a * f * l) : i === "XZY" && (e.x = a * o * u - s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u + a * f * l),
        e
    }
    function xi(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h, p, d;
        i = t.x,
        s = t.y,
        o = t.z,
        u = Math[Bt](i * i + s * s + o * o),
        u > 0 && (i /= u, s /= u, o /= u),
        a = n.x,
        f = n.y,
        l = n.z,
        c = Math[Bt](a * a + f * f + l * l),
        c > 0 && (a /= c, f /= c, l /= c),
        r = i * a + s * f + o * l + 1,
        r < 1e-6 ? (r = 0, Math.abs(i) > Math.abs(o) ? (h = -s, p = i, d = 0) : (h = 0, p = -o, d = s)) : (h = s * l - o * f, p = o * a - i * l, d = i * f - s * a),
        e.x = h,
        e.y = p,
        e.z = d,
        e.w = r,
        di(e)
    }
    function Ti(e, t, n) {
        function r(e, t, n) {
            return e < t ? t: e > n ? n: e
        }
        if (!t || isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || isNaN(t.w)) return;
        var i = t.x * t.x,
        s = t.y * t.y,
        o = t.z * t.z,
        u = t.w * t.w;
        if (n === "XYZ") e[0] = Math[tt](2 * (t.x * t.w - t.y * t.z), u - i - s + o),
        e[1] = Math.asin(r(2 * (t.x * t.z + t.y * t.w), -1, 1)),
        e[2] = Math[tt](2 * (t.z * t.w - t.x * t.y), u + i - s - o);
        else if (n === Wt) e[0] = Math.asin(r(2 * (t.x * t.w - t.y * t.z), -1, 1)),
        e[1] = Math[tt](2 * (t.x * t.z + t.y * t.w), u - i - s + o),
        e[2] = Math[tt](2 * (t.x * t.y + t.z * t.w), u - i + s - o);
        else if (n === "ZXY") e[0] = Math.asin(r(2 * (t.x * t.w + t.y * t.z), -1, 1)),
        e[1] = Math[tt](2 * (t.y * t.w - t.z * t.x), u - i - s + o),
        e[2] = Math[tt](2 * (t.z * t.w - t.x * t.y), u - i + s - o);
        else if (n === "ZYX") e[0] = Math[tt](2 * (t.x * t.w + t.z * t.y), u - i - s + o),
        e[1] = Math.asin(r(2 * (t.y * t.w - t.x * t.z), -1, 1)),
        e[2] = Math[tt](2 * (t.x * t.y + t.z * t.w), u + i - s - o);
        else if (n === "YZX") e[0] = Math[tt](2 * (t.x * t.w - t.z * t.y), u - i + s - o),
        e[1] = Math[tt](2 * (t.y * t.w - t.x * t.z), u + i - s - o),
        e[2] = Math.asin(r(2 * (t.x * t.y + t.z * t.w), -1, 1));
        else {
            if (n !== "XZY") return;
            e[0] = Math[tt](2 * (t.x * t.w + t.y * t.z), u - i + s - o),
            e[1] = Math[tt](2 * (t.x * t.z + t.y * t.w), u + i - s - o),
            e[2] = Math.asin(r(2 * (t.z * t.w - t.x * t.y), -1, 1))
        }
    }
    function Ni(e, t) {
        var r, i, s, o;
        e == n ? (r = Math.tan(50 * br), i = Math.tan(50 * br), s = Math.tan(45 * br), o = Math.tan(45 * br)) : (r = Math.tan(e.upDegrees * br), i = Math.tan(e.downDegrees * br), s = Math.tan(e.leftDegrees * br), o = Math.tan(e.rightDegrees * br));
        var u = 2 / (s + o),
        a = 2 / (r + i);
        t[0] = u,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = -a,
        t[6] = 0,
        t[7] = 0,
        t[8] = (s - o) * u * .5,
        t[9] = -((r - i) * a * .5),
        t[10] = 65535 / 65536,
        t[11] = 1,
        t[12] = 0,
        t[13] = 0,
        t[14] = 65535 / 65536 - 1,
        t[15] = 1
    }
    function Ci() {
        var e = Number.NaN,
        t = screen[Y] > screen[N],
        n = screen[st] || screen.msOrientation || screen.mozOrientation;
        if (n) {
            n = ("" + n)[c]();
            var r = n[s]("portrait") >= 0,
            i = n[s]("landscape") >= 0,
            o = n[s]("primary") >= 0,
            u = n[s]("secondary") >= 0;
            r && o ? e = 0 : i && o ? e = 90 : i && u ? e = -90 : r && u && (e = 180),
            !isNaN(e) && !Tn[at] && (e -= 90)
        }
        return isNaN(e) && (e = xn._have_top_access ? top[st] : window[st]),
        isNaN(e) && (Tn[at] ? e = t ? 90 : 0 : e = t ? 0 : 90),
        Tn.tablet && Tn[Ht] && (e += 90),
        e
    }
    function Mi(e) {
        if (!or[a]) return;
        var t = xn[B],
        r = t - Hs;
        Hs = t;
        var i = Ci() * br,
        s = e.alpha * br,
        o = e.beta * br,
        u = e.gamma * br;
        Oi === n && (Oi = s),
        s = s - Oi + Math.PI;
        var f = Math.cos(s),
        l = Math.sin(s),
        c = Math.cos(o),
        h = Math.sin(o),
        p = Math.cos(u),
        d = Math.sin(u);
        s = Math[tt]( - l * h * p - f * d, l * d - f * h * p),
        o = -Math.asin(c * p),
        u = Math[tt](c * d, -h) - Math.PI,
        ki.q.x = Li.q.x,
        ki.q.y = Li.q.y,
        ki.q.z = Li.q.z,
        ki.q.w = Li.q.w,
        ki.t = Li.t;
        var v = Li.q;
        Li.t = t,
        fr++,
        Si(v, o, s + i, u - i, Wt)
    }
    function _i() {
        if (or[a]) {
            xn[p][g] = r;
            var e = [0, 0, 0];
            if (Lr) {
                Hr = Lr.getState();
                if (Hr) {
                    rr && Wr();
                    if (Ln) {
                        var t = Hr.position;
                        if (t) {
                            ci = 0;
                            var i = 400;
                            xn[p].tx = t.x * i,
                            xn[p].ty = t.y * i,
                            xn[p].tz = t.z * i
                        }
                    }
                    Ti(e, Hr[st], Wt);
                    var s = 0;
                    Tn[_] && (s = Ci()),
                    s += cr,
                    xn[p][V] = ( - e[1] + ci) * wr + s,
                    xn[p][jt] = -e[0] * wr,
                    xn[p][an] = -e[2] * wr
                }
            } else if (tr) {
                Wr();
                if (fr > lr) {
                    var o = n;
                    if ($n == 0) o = Li.q;
                    else if (($n == 4 || $n >= 6) && ar == 2) o = Li.q,
                    Ds(o);
                    else if ($n <= 3 || $n == 5 || ar == 1) if (ki.t > 0 && Li.t > 0) {
                        var u = xn[B],
                        f = Li.t - ki.t,
                        l = 0,
                        c = 0,
                        h = 1;
                        $n == 1 || $n == 2 ? l = u - Li.t: (l = u - ki.t, h = 2),
                        f <= 0 ? c = 1 : (c = l / f, c > h && (c = h)),
                        Ai.x = ki.q.x,
                        Ai.y = ki.q.y,
                        Ai.z = ki.q.z,
                        Ai.w = ki.q.w,
                        wi(Ai, Li.q, c),
                        o = Ai
                    }
                    if (o) {
                        Ti(e, o, Wt);
                        var s = Ci();
                        xn[p][V] = cr + ( - e[1] + ci) * wr + s,
                        xn[p][jt] = -e[0] * wr,
                        xn[p][an] = -e[2] * wr
                    }
                }
            }
        }
    }
    function Di(e, n) {
        tr == t && ur == r && Ni(e == 1 ? Mr: _r, n)
    }
    function Pi(e) {
        var t = 0;
        return e == 1 ? Ar && Ar.x ? t = Ar.x: t = -0.03 : e == 2 && (Or && Or.x ? t = Or.x: t = .03),
        t *= 320 / Cn,
        t
    }
    function Hi(e, i) {
        var s = !!(Sn[Jt] || Sn[Mt] || Sn[zt] || Sn[gt] || Sn[qt]);
        if (or[a] && s && tr == t && ur == r) {
            var o = 0,
            u = 0;
            if (Dr) o = Dr[lt][Y] + Pr[lt][Y],
            u = Math.max(Dr[lt][N], Pr[lt][N]);
            else if (S in kr) {
                var f = kr[S](mt),
                l = kr[S](Tt);
                o = f[Y] + l[Y],
                u = Math.max(f[N], l[N])
            } else if (H in kr) {
                var c = kr[H]();
                o = c[Y],
                u = c[N]
            } else z in kr ? (o = kr[z][Y], u = kr[z][N]) : (o = 2e3, u = 1056);
            if (o > 0 && u > 0) {
                var h = 1;
                return o *= h,
                u *= h,
                {
                    w: o,
                    h: u
                }
            }
        } else or[a] && (tr || ur == t) && zr(e, i);
        return n
    }
    function Bi(e) {
        var e = ("" + e)[c](),
        i = e[s](dn),
        o = e.lastIndexOf("]");
        if (i >= 0 && o > i) {
            var u = e[It](i + 8, o),
            a = dn + u + "]";
            a != Jn && (Jn = a, Qn && (ji(Qn, t), Qn = n), Qn = xn.get(Jn), Qn && ji(Qn, r))
        }
    }
    function ji(e, i) {
        if (i == r) e[Vt] = {
            visible: e[Ft],
            enabled: e[a],
            flying: e.flying,
            scaleflying: e[ot],
            distorted: e[xt],
            zorder: e.zorder,
            scale: e.scale,
            depth: e.depth,
            onover: e.onover,
            onout: e.onout
        },
        e[a] = t,
        e.flying = 1,
        e[ot] = t,
        e[xt] = r,
        e.zorder = 999999999;
        else {
            var s = e[Vt];
            s && (e[Ft] = s[Ft], e[a] = s[a], e.flying = s.flying, e[ot] = s[ot], e[xt] = s[xt], e.zorder = s.zorder, e.scale = s.scale, e.depth = s.depth, e.onover = s.onover, e.onout = s.onout, e[Vt] = s = n)
        }
    }
    function Fi() {
        if (Jn) {
            var e = Qn;
            e == n && (e = xn.get(Jn), e && (ji(e, r), Qn = e));
            if (e) {
                if (!or[a]) return e[Ft] = t,
                n;
                e.onover = Gn,
                e.onout = Yn,
                e[a] = Kn,
                e[Ft] = r
            }
            return e
        }
        return n
    }
    function Ii() {
        this.x = 0,
        this.y = 0,
        this.z = 0
    }
    function qi(e, t, n, r) {
        e.x = t,
        e.y = n,
        e.z = r
    }
    function Ri(e, t) {
        e.x = t.x,
        e.y = t.y,
        e.z = t.z
    }
    function Ui(e) {
        e.x = 0,
        e.y = 0,
        e.z = 0
    }
    function zi(e, t, n) {
        t == 0 ? e.x = n: t == 1 ? e.y = n: e.z = n
    }
    function Wi(e) {
        return Math[Bt](e.x * e.x + e.y * e.y + e.z * e.z)
    }
    function Xi(e) {
        var t = Wi(e);
        t > 0 ? Vi(e, 1 / t) : (e.x = 0, e.y = 0, e.z = 0)
    }
    function Vi(e, t) {
        e.x *= t,
        e.y *= t,
        e.z *= t
    }
    function $i(e, t, n) {
        qi(n, e.x - t.x, e.y - t.y, e.z - t.z)
    }
    function Ji(e, t, n) {
        qi(n, e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x)
    }
    function Ki(e, t) {
        return e.x * t.x + e.y * t.y + e.z * t.z
    }
    function Qi() {
        var e;
        return typeof Float64Array != "undefined" ? e = new Float64Array(9) : e = new Array(9),
        Yi(e),
        e
    }
    function Gi(e) {
        e[0] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = 0
    }
    function Yi(e) {
        e[0] = e[4] = e[8] = 1,
        e[1] = e[2] = e[3] = e[5] = e[6] = e[7] = 0
    }
    function Zi(e, t) {
        e[0] = e[4] = e[8] = t
    }
    function es(e, t) {
        e[0] *= t,
        e[1] *= t,
        e[2] *= t,
        e[3] *= t,
        e[4] *= t,
        e[5] *= t,
        e[6] *= t,
        e[7] *= t,
        e[8] *= t
    }
    function ts(e, t) {
        var n = e[1],
        r = e[2],
        i = e[5];
        t[0] = e[0],
        t[1] = e[3],
        t[2] = e[6],
        t[3] = n,
        t[4] = e[4],
        t[5] = e[7],
        t[6] = r,
        t[7] = i,
        t[8] = e[8]
    }
    function ns(e, t, n) {
        e[t] = n.x,
        e[t + 3] = n.y,
        e[t + 6] = n.z
    }
    function rs(e, t) {
        e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[4] = t[4],
        e[5] = t[5],
        e[6] = t[6],
        e[7] = t[7],
        e[8] = t[8]
    }
    function is(e, t) {
        var n = e[0] * (e[4] * e[8] - e[7] * e[5]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
        n != 0 && (n = 1 / n, t[0] = (e[4] * e[8] - e[7] * e[5]) * n, t[1] = -(e[1] * e[8] - e[2] * e[7]) * n, t[2] = (e[1] * e[5] - e[2] * e[4]) * n, t[3] = -(e[3] * e[8] - e[5] * e[6]) * n, t[4] = (e[0] * e[8] - e[2] * e[6]) * n, t[5] = -(e[0] * e[5] - e[3] * e[2]) * n, t[6] = (e[3] * e[7] - e[6] * e[4]) * n, t[7] = -(e[0] * e[7] - e[6] * e[1]) * n, t[8] = (e[0] * e[4] - e[3] * e[1]) * n)
    }
    function ss(e, t) {
        e[0] -= t[0],
        e[1] -= t[1],
        e[2] -= t[2],
        e[3] -= t[3],
        e[4] -= t[4],
        e[5] -= t[5],
        e[6] -= t[6],
        e[7] -= t[7],
        e[8] -= t[8]
    }
    function os(e, t) {
        e[0] += t[0],
        e[1] += t[1],
        e[2] += t[2],
        e[3] += t[3],
        e[4] += t[4],
        e[5] += t[5],
        e[6] += t[6],
        e[7] += t[7],
        e[8] += t[8]
    }
    function us(e, t, n) {
        var r = t[0],
        i = t[1],
        s = t[2],
        o = t[3],
        u = t[4],
        a = t[5],
        f = t[6],
        l = t[7],
        c = t[8],
        h = e[0],
        p = e[1],
        d = e[2];
        n[0] = h * r + p * o + d * f,
        n[1] = h * i + p * u + d * l,
        n[2] = h * s + p * a + d * c,
        h = e[3],
        p = e[4],
        d = e[5],
        n[3] = h * r + p * o + d * f,
        n[4] = h * i + p * u + d * l,
        n[5] = h * s + p * a + d * c,
        h = e[6],
        p = e[7],
        d = e[8],
        n[6] = h * r + p * o + d * f,
        n[7] = h * i + p * u + d * l,
        n[8] = h * s + p * a + d * c
    }
    function as(e, t, n) {
        var r = e[0] * t.x + e[1] * t.y + e[2] * t.z,
        i = e[3] * t.x + e[4] * t.y + e[5] * t.z,
        s = e[6] * t.x + e[7] * t.y + e[8] * t.z;
        n.x = r,
        n.y = i,
        n.z = s
    }
    function fs(e, t, n) {
        n[0] = e[0] + t[0],
        n[1] = e[1] + t[1],
        n[2] = e[2] + t[2],
        n[3] = e[3] + t[3],
        n[4] = e[4] + t[4],
        n[5] = e[5] + t[5],
        n[6] = e[6] + t[6],
        n[7] = e[7] + t[7],
        n[8] = e[8] + t[8]
    }
    function bs(e, t, n) {
        Ji(e, t, cs);
        if (Wi(cs) == 0) Yi(n);
        else {
            Ri(hs, e),
            Ri(ps, t),
            Xi(cs),
            Xi(hs),
            Xi(ps);
            var r = vs,
            i = ms;
            Ji(cs, hs, ls),
            r[0] = hs.x,
            r[1] = hs.y,
            r[2] = hs.z,
            r[3] = cs.x,
            r[4] = cs.y,
            r[5] = cs.z,
            r[6] = ls.x,
            r[7] = ls.y,
            r[8] = ls.z,
            Ji(cs, ps, ls),
            i[0] = ps.x,
            i[3] = ps.y,
            i[6] = ps.z,
            i[1] = cs.x,
            i[4] = cs.y,
            i[7] = cs.z,
            i[2] = ls.x,
            i[5] = ls.y,
            i[8] = ls.z,
            us(i, r, n)
        }
    }
    function ws(e, t) {
        var n = Ki(e, e),
        r = Math[Bt](n),
        i,
        s;
        if (n < 1e-8) i = 1 - 1 / 6 * n,
        s = .5;
        else if (n < 1e-6) s = .5 - .25 * (1 / 6) * n,
        i = 1 - n * (1 / 6) * (1 - .05 * n);
        else {
            var o = 1 / r;
            i = Math.sin(r) * o,
            s = (1 - Math.cos(r)) * o * o
        }
        Ss(e, i, s, t)
    }
    function Es(e, t) {
        var n = (e[0] + e[4] + e[8] - 1) * .5;
        qi(t, (e[7] - e[5]) / 2, (e[2] - e[6]) / 2, (e[3] - e[1]) / 2);
        var r = Wi(t);
        if (n > Math.SQRT1_2) r > 0 && Vi(t, Math.asin(r) / r);
        else if (n > -Math.SQRT1_2) {
            var i = Math.acos(n);
            Vi(t, i / r)
        } else {
            var i = Math.PI - Math.asin(r),
            s = e[0] - n,
            o = e[4] - n,
            u = e[8] - n,
            a = gs;
            s * s > o * o && s * s > u * u ? qi(a, s, (e[3] + e[1]) / 2, (e[2] + e[6]) / 2) : o * o > u * u ? qi(a, (e[3] + e[1]) / 2, o, (e[7] + e[5]) / 2) : qi(a, (e[2] + e[6]) / 2, (e[7] + e[5]) / 2, u),
            Ki(a, t) < 0 && Vi(a, -1),
            Xi(a),
            Vi(a, i),
            Ri(t, a)
        }
    }
    function Ss(e, t, n, r) {
        var i = e.x * e.x,
        s = e.y * e.y,
        o = e.z * e.z;
        r[0] = 1 - n * (s + o),
        r[4] = 1 - n * (i + o),
        r[8] = 1 - n * (i + s);
        var u = t * e.z,
        a = n * e.x * e.y;
        r[1] = a - u,
        r[3] = a + u,
        u = t * e.y,
        a = n * e.x * e.z,
        r[2] = a + u,
        r[6] = a - u,
        u = t * e.x,
        a = n * e.y * e.z,
        r[5] = a - u,
        r[7] = a + u
    }
    function xs(e, t, n, r) {
        t *= br,
        n *= br,
        r *= br;
        var i = Math.cos(t),
        s = Math.sin(t),
        o = Math.cos(n),
        u = Math.sin(n),
        a = Math.cos(r),
        f = Math.sin(r),
        l = i * u,
        c = s * u;
        e[0] = o * a,
        e[1] = l * a + i * f,
        e[2] = -c * a + s * f,
        e[3] = -o * f,
        e[4] = -l * f + i * a,
        e[5] = c * f + s * a,
        e[6] = u,
        e[7] = -s * o,
        e[8] = i * o
    }
    function Ts(e, t) {
        var n = e[0] + e[4] + e[8],
        r;
        n > 0 ? (r = Math[Bt](1 + n) * 2, t.x = (e[5] - e[7]) / r, t.y = (e[6] - e[2]) / r, t.z = (e[1] - e[3]) / r, t.w = .25 * r) : e[0] > e[4] && e[0] > e[8] ? (r = Math[Bt](1 + e[0] - e[4] - e[8]) * 2, t.x = .25 * r, t.y = (e[3] + e[1]) / r, t.z = (e[6] + e[2]) / r, t.w = (e[5] - e[7]) / r) : e[4] > e[8] ? (r = Math[Bt](1 + e[4] - e[0] - e[8]) * 2, t.x = (e[3] + e[1]) / r, t.y = .25 * r, t.z = (e[7] + e[5]) / r, t.w = (e[6] - e[2]) / r) : (r = Math[Bt](1 + e[8] - e[0] - e[4]) * 2, t.x = (e[6] + e[2]) / r, t.y = (e[7] + e[5]) / r, t.z = .25 * r, t.w = (e[1] - e[3]) / r)
    }
    function Ds(e) {
        if (js) {
            var t = Ci();
            t != Ls && (Ls = t, xs(Os, 0, 0, -t), xs(As, -90, 0, +t));
            var n;
            if ($n <= 1 || $n == 3) n = To();
            else {
                var r = xn[B],
                i = (r - Ns) / 1e3,
                s = i;
                $n == 2 ? s += 2 / 60 : $n == 6 ? s += 1 / 60 : $n == 7 && (s += 2 / 60),
                n = Lo(s)
            }
            us(Os, n, _s),
            us(_s, As, Ms),
            Ts(Ms, e)
        }
    }
    function Bs(e) {
        if (!or[a]) return;
        var i = xn[B],
        s = i - Hs;
        Hs = i,
        s > 5e3 && (ui(), s = .16),
        fr++;
        if (fr < lr) return;
        go == t && (go = r, yo());
        var o = e[K],
        u = o.x,
        f = o.y,
        l = o.z;
        u == n && (u = 0),
        f == n && (f = 9.81),
        l == n && (l = 0);
        var c = e.acceleration;
        if (c) {
            var h = c.x,
            p = c.y,
            d = c.z;
            h == n && (h = 0),
            p == n && (p = 0),
            d == n && (d = 0),
            u -= h,
            f -= p,
            l -= d
        }
        if (Tn.ios || Tn.ie) u *= -1,
        f *= -1,
        l *= -1;
        var v = e.rotationRate,
        m = v.alpha,
        g = v.beta,
        y = v.gamma;
        m == n && (m = 0),
        g == n && (g = 0),
        y == n && (y = 0);
        if (Tn.ios || Tn[Ht] || Tn.ie) {
            m *= br,
            g *= br,
            y *= br;
            if (Tn.ie) {
                var b = m,
                w = g,
                E = y;
                m = w,
                g = E,
                y = b
            }
        }
        Uo ? Jo(s, m, g, y) : Pn && Ps(m, g, y, i);
        var S = zo;
        m -= S.rx,
        g -= S.ry,
        y -= S.rz,
        qi(Cs, u, f, l),
        Eo(Cs, s),
        Ns = i,
        qi(ks, m, g, y),
        xo(ks, i);
        if ($n <= 3 || $n == 5) ki.q.x = Li.q.x,
        ki.q.y = Li.q.y,
        ki.q.z = Li.q.z,
        ki.q.w = Li.q.w,
        ki.t = Li.t,
        Ds(Li.q),
        Li.t = i
    }
    function yo() {
        Yi(Qs),
        Yi(Gs),
        Gi(Zs),
        Zi(Zs, ho),
        Gi(Ys),
        Zi(Ys, 1),
        Gi(ro),
        Zi(ro, po),
        Gi(to),
        Gi(eo),
        Gi(no),
        Ui(Ws),
        Ui(Us),
        Ui(Rs),
        Ui(zs),
        Ui(qs),
        qi(Is, 0, 0, vo),
        js = t
    }
    function bo(e, t) {
        as(e, Is, Rs),
        bs(Rs, Us, co),
        Es(co, t)
    }
    function wo() {
        ts(Gs, fo),
        us(Zs, fo, lo),
        us(Gs, lo, Zs),
        Yi(Gs)
    }
    function Eo(e, t) {
        Ri(Us, e);
        if (js) {
            bo(Qs, Ws),
            t < 5 && (t = 5);
            var n = 1e3 / 60 / t,
            i = mo * n,
            s = 1 / mo,
            o = Xs;
            for (var u = 0; u < 3; u++) Ui(o),
            zi(o, u, s),
            ws(o, io),
            us(io, Qs, so),
            bo(so, Vs),
            $i(Ws, Vs, $s),
            Vi($s, i),
            ns(eo, u, $s);
            ts(eo, oo),
            us(Zs, oo, uo),
            us(eo, uo, ao),
            fs(ao, ro, to),
            is(to, oo),
            ts(eo, uo),
            us(uo, oo, ao),
            us(Zs, ao, no),
            as(no, Ws, qs),
            us(no, eo, oo),
            Yi(uo),
            ss(uo, oo),
            us(uo, Zs, oo),
            rs(Zs, oo),
            ws(qs, Gs),
            us(Gs, Qs, Qs),
            wo()
        } else bs(Is, Us, Qs),
        js = r
    }
    function xo(e, t) {
        if (So != 0) {
            var n = (t - So) / 1e3;
            n > 1 && (n = 1),
            Ri(zs, e),
            Vi(zs, -n),
            ws(zs, Gs),
            rs(Js, Qs),
            us(Gs, Qs, Js),
            rs(Qs, Js),
            wo(),
            rs(Ks, Ys),
            es(Ks, n * n),
            os(Zs, Ks)
        }
        So = t,
        Ri(Fs, e)
    }
    function To() {
        return Qs
    }
    function Lo(e) {
        var t = No;
        Ri(t, Fs),
        Vi(t, -e);
        var n = Co;
        ws(t, n);
        var r = ko;
        return us(n, Qs, r),
        r
    }
    function Ho(e) {
        var t = e[s]("://");
        if (t > 0) {
            var r = e[s]("/", t + 3),
            i = e[It](0, t)[c](),
            o = e[It](t + 3, r),
            u = e[It](r);
            return [i, o, u]
        }
        return n
    }
    function Bo(e) {
        if (Mo == n) {
            var i = Ho(Ao),
            s = Ho(window[wn].href);
            if (s[0] == "http" || s[0] == "https") {
                _o = s[0] + "://" + i[1],
                Do = _o + i[2];
                var o = document[bn]("iframe");
                o.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;visibility:hidden;",
                xn[m].viewerlayer.appendChild(o),
                Mo = o,
                o[u]("load",
                function() {
                    Oo = r,
                    e(Mo)
                },
                t),
                window[u]("message", Fo, t),
                o.src = Do
            }
        } else Oo && e(Mo)
    }
    function jo(e) {
        Bo(function(t) {
            try {
                t.contentWindow.postMessage(e, _o)
            } catch(n) {}
        })
    }
    function Fo(e) {
        if (e.origin == _o) {
            var t = "" + e.data;
            t[It](0, 15) == "webvr_settings:" && Io(t[It](15))
        }
    }
    function Io(e) {
        var t = e[mn](bt),
        n = Number(t[0]),
        i = Number(t[1]),
        s = Number(t[2]),
        o = Number(t[3]),
        u = Number(t[4]),
        a = Number(t[5]),
        f = Number(t[6]),
        l = Number(t[7]),
        c = Number(t[8]),
        h = Number(t[9]),
        p = "" + t[10],
        d = Number(t[11]);
        isNaN(f) && (f = 0),
        isNaN(l) && (l = 0),
        isNaN(c) && (c = 0),
        isNaN(h) && (h = 1),
        isNaN(d) && (d = 0),
        p[mn]("|")[kt] != 4 && (p = Qt),
        !isNaN(n) && n >= 30 && n < 90 && !isNaN(i) && i >= 0 && i < 12 && !isNaN(s) && s >= 1 && s < 180 && !isNaN(o) && o >= 0 && o < 10 && !isNaN(u) && u >= 1 && u < 500 && !isNaN(a) && a >= 0 && a < 10 && !isNaN(h) && h > 0 && h < 2 && (Hn = n, Bn = i, Fn = s, In = o, Wn = u, $n = a, zo.rx = f, zo.ry = l, zo.rz = c, jn = h, qn = p, zn = d, ir = r)
    }
    function qo(e) {
        if (tr || rr) {
            if (Po) try {
                var t = window.localStorage;
                if (t) {
                    var n = t[tn](Pt);
                    n || (n = t[tn](Dt)),
                    n || (n = t[tn](At)),
                    n || (n = t[tn](Ot)),
                    n && Io(n)
                }
            } catch(r) {} ("" + e)[c]() != "local" && jo("load.4")
        }
    }
    function Ro(e) {
        if (tr || rr) {
            var t = Hn + bt + Bn + bt + Fn + bt + In + bt + Wn + bt + $n + bt + zo.rx + bt + zo.ry + bt + zo.rz + bt + jn + bt + qn + bt + zn;
            if (Po) try {
                var n = window.localStorage;
                n && (n[Zt](Pt, t), n[Zt](Dt, t[mn](bt)[It](0, 10).join(bt)), n[Zt](At, t[mn](bt)[It](0, 9).join(bt)), n[Zt](Ot, t[mn](bt)[It](0, 6).join(bt)))
            } catch(r) {} ("" + e)[c]() != "local" && jo("save.4:" + t)
        }
    }
    function Vo(e, n) {
        Zn && tr && !nr && (Uo = r, Pn = t, Wo = e, Xo = n, Jo( - 1))
    }
    function $o() {
        Uo = t,
        zo.rx = 0,
        zo.ry = 0,
        zo.rz = 0
    }
    var e = "registerattribute",
    t = !1,
    n = null,
    r = !0,
    s = "indexOf",
    o = "removeEventListener",
    u = "addEventListener",
    a = "enabled",
    f = "deviceorientation",
    l = "onunavailable",
    c = "toLowerCase",
    h = "devicemotion",
    p = "view",
    d = "maxpixelzoom",
    v = "architectural",
    m = "display",
    g = "continuousupdates",
    y = "control",
    b = "fisheyefovlink",
    w = "browser",
    E = "desktop",
    S = "getRecommendedEyeRenderRect",
    x = "stereographic",
    T = "limitview",
    N = "height",
    C = "getCurrentEyeFieldOfView",
    k = "events",
    L = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n",
    A = "loadwhilemoving",
    O = "onavailable",
    M = "float b = texture2D(sm,vB).b;",
    _ = "android",
    D = "downloadlockedlevel",
    P = "float r = texture2D(sm,vR).r;",
    H = "getRecommendedRenderTargetSize",
    B = "timertick",
    j = "stereooverlap",
    F = "getEyeParameters",
    I = "uniform1f",
    q = "vec2 vR = center + v * ca;",
    R = "vec2 vB = center + v / ca;",
    U = "precision mediump float;\n",
    z = "renderTargetSize",
    W = "lockmultireslevel",
    X = "fisheye",
    V = "hlookat",
    $ = "getEyeTranslation",
    J = "call",
    K = "accelerationIncludingGravity",
    Q = "documentElement",
    G = "fovtype",
    Y = "width",
    Z = "#endif\n",
    et = "precision highp float;\n",
    tt = "atan2",
    nt = "pannini",
    rt = "uniform sampler2D sm;",
    it = "usercontrol",
    st = "orientation",
    ot = "scaleflying",
    ut = "vec2 v = tx - center;",
    at = "mobile",
    ft = "fovmin",
    lt = "renderRect",
    ct = "useProgram",
    ht = "fovmax",
    pt = "auto",
    dt = "uniform float ca;",
    vt = "uniform float ol;",
    mt = "left",
    gt = "webkitFullscreenElement",
    yt = "fullscreen",
    bt = ",",
    wt = "varying vec2 tx;",
    Et = "recommendedFieldOfView",
    St = "mousetype",
    xt = "distorted",
    Tt = "right",
    Nt = "onunknowndevice",
    Ct = "stereo",
    kt = "length",
    Lt = "area",
    At = "krpano.webvr.2",
    Ot = "krpano.webvr.1",
    Mt = "mozFullScreenElement",
    _t = "#ifdef GL_ES\n",
    Dt = "krpano.webvr.3",
    Pt = "krpano.webvr.4",
    Ht = "firefox",
    Bt = "sqrt",
    jt = "vlookat",
    Ft = "visible",
    It = "slice",
    qt = "msFullscreenElement",
    Rt = "contextmenu",
    Ut = "mozGetVRDevices",
    zt = "webkitIsFullScreen",
    Wt = "YXZ",
    Xt = "void main()",
    Vt = "_VR_backup",
    $t = "layer",
    Jt = "fullscreenElement",
    Kt = "touchstart",
    Qt = "1|0|0|0",
    Gt = "devicename",
    Yt = "fullscreenchange",
    Zt = "setItem",
    en = "maxmem",
    tn = "getItem",
    nn = "mousedown",
    rn = "mousemove",
    sn = "galaxy s4",
    on = "iPhone 6+",
    un = "touchmove",
    an = "camroll",
    fn = "changedTouches",
    ln = "iPhone 6",
    cn = "screentosphere",
    hn = "createppshader",
    pn = "eyeTranslation",
    dn = "hotspot[",
    vn = "hardwareUnitId",
    mn = "split",
    gn = "touchend",
    yn = "#else\n",
    bn = "createElement",
    wn = "location",
    En = this,
    Sn = document,
    xn = n,
    Tn = n,
    Nn = n,
    Cn = 1,
    kn = .00125,
    Ln = t,
    An = r,
    On = r,
    Mn = t,
    _n = t,
    Dn = r,
    Pn = t,
    Hn = 63.5,
    Bn = pt,
    jn = 1,
    Fn = 96,
    In = .6,
    qn = Qt,
    Rn = [1, 0, 0, 0],
    Un = t,
    zn = 0,
    Wn = 100,
    Xn = t,
    Vn = 1,
    $n = 3,
    Jn = "",
    Kn = r,
    Qn = n,
    Gn = n,
    Yn = n,
    Zn = t,
    er = t,
    tr = t,
    nr = t,
    rr = t,
    ir = t,
    sr = t,
    or = {
        enabled: t,
        eyetranslt: Pi,
        updateview: _i,
        prjmatrix: Di,
        getsize: Hi,
        getcursor: Fi
    },
    ur = r,
    ar = 0,
    fr = 0,
    lr = 6,
    cr = 0,
    hr = 1,
    pr = 0,
    dr = 0,
    vr = 0,
    mr = t,
    gr = n,
    yr = n,
    br = Math.PI / 180,
    wr = 180 / Math.PI;
    En.registerplugin = function(i, s, o) {
        xn = i,
        Nn = o;
        if (xn.version < "1.19" || xn.build < "2015-07-09") {
            xn.trace(3, "WebVR plugin - too old krpano version (min. 1.19)");
            return
        }
        if (xn.webVR) return;
        Tn = xn.device,
        Nn[e]("worldscale", Cn,
        function(e) {
            var t = Number(e);
            isNaN(t) || (Cn = Math.max(t, .1))
        },
        function() {
            return Cn
        }),
        Nn[e]("mousespeed", kn,
        function(e) {
            var t = Number(e);
            isNaN(t) || (kn = t)
        },
        function() {
            return kn
        }),
        Nn[e]("pos_tracking", Ln,
        function(e) {
            Ln = Er(e)
        },
        function() {
            return Ln
        }),
        Nn[e]("multireslock", An,
        function(e) {
            An = Er(e),
            or[a] && ri()
        },
        function() {
            return An
        }),
        Nn[e]("mobilevr_support", On,
        function(e) {
            On = Er(e)
        },
        function() {
            return On
        }),
        Nn[e]("mobilevr_touch_support", Mn,
        function(e) {
            Mn = Er(e)
        },
        function() {
            return Mn
        }),
        Nn[e]("mobilevr_fake_support", _n,
        function(e) {
            _n = Er(e)
        },
        function() {
            return _n
        }),
        Nn[e]("mobilevr_ipd", Hn,
        function(e) {
            var t = Number(e);
            isNaN(t) || (Hn = t),
            Ur()
        },
        function() {
            return Hn
        }),
        Nn[e]("mobilevr_screensize", Bn,
        function(e) {
            $r(e)
        },
        function() {
            return Jr()
        }),
        Nn[e]("mobilevr_lens_fov", Fn,
        function(e) {
            var t = Number(e);
            isNaN(t) || (Fn = t, Ur())
        },
        function() {
            return Fn
        }),
        Nn[e]("mobilevr_lens_overlap", jn,
        function(e) {
            var t = Number(e);
            isNaN(t) || (jn = t, Ur())
        },
        function() {
            return jn
        }),
        Nn[e]("mobilevr_lens_dist", In,
        function(e) {
            var t = Number(e);
            isNaN(t) || (In = t, Ur())
        },
        function() {
            return In
        }),
        Nn[e]("mobilevr_lens_dist2", qn,
        function(e) {
            qn = e,
            Ur()
        },
        function() {
            return qn
        }),
        Nn[e]("mobilevr_lens_ca", zn,
        function(e) {
            var t = Number(e);
            isNaN(t) || (zn = t, Ur())
        },
        function() {
            return zn
        }),
        Nn[e]("mobilevr_lens_vign", Wn,
        function(e) {
            var t = Number(e);
            isNaN(t) || (Wn = t, Ur())
        },
        function() {
            return Wn
        }),
        Nn[e]("mobilevr_webvr_dist", Xn,
        function(e) {
            Xn = Er(e)
        },
        function() {
            return Xn
        }),
        Nn[e]("mobilevr_wakelock", Dn,
        function(e) {
            Dn = Er(e)
        },
        function() {
            return Dn
        }),
        Nn[e]("mobilevr_autocalibration", Pn,
        function(e) {
            Pn = Er(e)
        },
        function() {
            return Pn
        }),
        Nn[e]("mobilevr_sensor", Vn,
        function(e) {
            Vn = parseInt(e) & 1
        },
        function() {
            return Vn
        }),
        Nn[e]("mobilevr_sensor_mode", $n,
        function(e) {
            var t = parseInt(e);
            t >= 0 && t <= 7 && ($n = t),
            fr = 0
        },
        function() {
            return $n
        }),
        Nn[e]("vr_cursor", Jn,
        function(e) {
            Bi(e)
        },
        function() {
            return Jn
        }),
        Nn[e]("vr_cursor_enabled", Kn,
        function(e) {
            Kn = Er(e)
        },
        function() {
            return Kn
        }),
        Nn[e]("vr_cursor_onover", Gn,
        function(e) {
            Gn = e
        },
        function() {
            return Gn
        }),
        Nn[e]("vr_cursor_onout", Yn,
        function(e) {
            Yn = e
        },
        function() {
            return Yn
        }),
        Nn[e]("isavailable", er,
        function(e) {},
        function() {
            return er
        }),
        Nn[e]("isenabled", Zn,
        function(e) {},
        function() {
            return Zn
        }),
        Nn[e]("iswebvr", !tr,
        function(e) {},
        function() {
            return ! tr || rr
        }),
        Nn[e]("ismobilevr", tr,
        function(e) {},
        function() {
            return tr || rr
        }),
        Nn[e]("isfake", nr,
        function(e) {},
        function() {
            return nr
        }),
        Nn[e]("havesettings", ir,
        function(e) {},
        function() {
            return ir
        }),
        Nn[e](Gt, "",
        function(e) {},
        function() {
            return Xr()
        }),
        Nn[e]("devicesize", "",
        function(e) {},
        function() {
            return Vr()
        }),
        Nn[e](O, n),
        Nn[e](l, n),
        Nn[e](Nt, n),
        Nn[e]("onentervr", n),
        Nn[e]("onexitvr", n),
        Nn.entervr = Gr,
        Nn.exitvr = Yr,
        Nn.togglevr = Zr,
        Nn.resetsensor = ei,
        Nn.loadsettings = qo,
        Nn.savesettings = Ro,
        Nn.calibrate = Vo,
        Nn.resetcalibration = $o,
        Nn.update = Qr;
        if (xn.webGL) {
            xn.webVR = or;
            var u = Tn[_] && Tn[Ht],
            f = document[Q].requestPointerLock || document[Q].mozRequestPointerLock || document[Q].webkitRequestPointerLock,
            c = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
            f && c && (mr = r, gr = f, yr = c);
            try {
                u == t && navigator.getVRDevices ? navigator.getVRDevices().then(jr) : u == t && navigator[Ut] ? navigator[Ut](jr) : On ? xr() : sr == t && (sr = r, xn[J](Nn[l], Nn))
            } catch(h) {}
        } else sr == t && (sr = r, xn[J](Nn[l], Nn))
    },
    En.unloadplugin = function() {
        Yr(),
        oi(t, r),
        xn.webVR = n
    };
    var kr = n,
    Lr = n,
    Ar = n,
    Or = n,
    Mr = n,
    _r = n,
    Dr = n,
    Pr = n,
    Hr = n,
    Br = 100,
    Fr = n,
    qr = n,
    ti = n,
    oi = function() {
        var e = n,
        r = n;
        return function(i, s) {
            if (Tn[at] && nr == t) if (i) Tn.ios ? e = window.setInterval(function() {
                window[wn] = window[wn],
                window.setTimeout(window.stop, 0)
            },
            15e3) : Tn[_] && (r == n && (r = document[bn]("video"), r.setAttribute("loop", ""), r.canPlayType("video/webm") != "" && (r.src = Qo)), r.play());
            else {
                e && (window.clearInterval(e), e = n);
                if (r && s) {
                    r.pause();
                    try {
                        r.src = "",
                        r.removeAttribute("src")
                    } catch(o) {}
                    r = n
                }
            }
        }
    } (),
    ai = 0,
    ci = 0,
    ki = {
        q: new pi(0, 0, 0, 1),
        t: 0
    },
    Li = {
        q: new pi(0, 0, 0, 1),
        t: 0
    },
    Ai = new pi(0, 0, 0, 1),
    Oi = n,
    ls = new Ii,
    cs = new Ii,
    hs = new Ii,
    ps = new Ii,
    ds = new Ii,
    vs = Qi(),
    ms = Qi(),
    gs = new Ii,
    ys = new Ii,
    Ns = 0,
    Cs = new Ii,
    ks = new Ii,
    Ls = n,
    As = Qi(),
    Os = Qi(),
    Ms = Qi(),
    _s = Qi(),
    Ps = function() {
        var e = 0,
        t = 0,
        n = 0,
        r = 0,
        i = 0,
        s = 0,
        o = 0,
        u = 0,
        a = 0,
        f = 0,
        l = 1,
        c = 0,
        h = 0,
        p = 0,
        d = .03;
        return function(c, h, p, v) {
            var m = c - e,
            g = h - t,
            y = p - n,
            b = v - r;
            e = c,
            t = h,
            n = p,
            r = v;
            var w = Math[Bt](m * m + g * g + y * y);
            if (b > 500) {
                i = 0;
                return
            }
            if (i == 0) {
                i = b,
                s = w;
                return
            }
            i = i * .95 + .05 * b;
            var E = Math.min(15 * i / 1e3, .5);
            s = s * (1 - E) + E * w;
            var S = zo;
            s < d ? (o++, u += c, a += h, f += p, o > 19 && (S.rx = S.rx * (1 - l) + l * (u / o), S.ry = S.ry * (1 - l) + l * (a / o), S.rz = S.rz * (1 - l) + l * (f / o), l > .5 && (l *= .9), s = 10, d *= .5)) : (o = 1, u = c, a = h, f = p)
        }
    } (),
    Hs = 0,
    js = t,
    Fs = new Ii,
    Is = new Ii,
    qs = new Ii,
    Rs = new Ii,
    Us = new Ii,
    zs = new Ii,
    Ws = new Ii,
    Xs = new Ii,
    Vs = new Ii,
    $s = new Ii,
    Js = Qi(),
    Ks = Qi(),
    Qs = Qi(),
    Gs = Qi(),
    Ys = Qi(),
    Zs = Qi(),
    eo = Qi(),
    to = Qi(),
    no = Qi(),
    ro = Qi(),
    io = Qi(),
    so = Qi(),
    oo = Qi(),
    uo = Qi(),
    ao = Qi(),
    fo = Qi(),
    lo = Qi(),
    co = Qi(),
    ho = 20,
    po = .5,
    vo = 9.81,
    mo = 1e7,
    go = t,
    So = 0,
    No = new Ii,
    Co = Qi(),
    ko = Qi(),
    Ao = "http://d8d913s460fub.cloudfront.net/krpanocloud/webvr_localstorage.html?v=4",
    Oo = t,
    Mo = n,
    _o = n,
    Do = n,
    Po = r,
    Uo = t,
    zo = {
        rx: 0,
        ry: 0,
        rz: 0
    },
    Wo = n,
    Xo = n,
    Jo = function() {
        function i() {
            var t = 0,
            r = n * 3,
            i = 0,
            s = 0,
            o = 0,
            u = 0,
            a = 0,
            f = 0,
            l = 0,
            c = 0,
            h = 0,
            p = 0;
            for (t = 0; t < r; t += 3) i += e[t | 0],
            s += e[t + 1 | 0],
            o += e[t + 2 | 0];
            i /= n,
            s /= n,
            o /= n;
            for (t = 0; t < r; t += 3) l = e[t | 0] - i,
            c = e[t + 1 | 0] - s,
            h = e[t + 2 | 0] - o,
            u += l * l,
            a += c * c,
            f += h * h;
            u = Math[Bt](u / n),
            a = Math[Bt](a / n),
            f = Math[Bt](f / n),
            p = Math[Bt](u * u + a * a + f * f);
            if (p < .05) {
                var d = zo;
                d.rx = i,
                d.ry = s,
                d.rz = o,
                Wo && xn[J](Wo, Nn)
            } else Xo && xn[J](Xo, Nn)
        }
        var e = new Array(300),
        n = 0,
        r = 0;
        return function(s, o, u, a) {
            if (s < 0) {
                n = 0,
                r = xn[B];
                return
            }
            var f = xn[B] - r;
            if (f > 500) {
                var l = n * 3;
                e[l | 0] = o,
                e[l + 1 | 0] = u,
                e[l + 2 | 0] = a,
                n++;
                if (n > 100 || f > 2500) Uo = t,
                i()
            }
        }
    } (),
    Ko = function() {
        function u(t) {
            for (i = 0; i < t[kt]; i++) if (e && t[i] === e || s && t[i] === s) t.splice(i, 1),
            i--
        }
        var e = n,
        r = "" + _t + L + et + yn + U + Z + Z + rt + wt + dt + vt + Xt + "{" + "float g = texture2D(sm,tx).g;" + "vec2 center = vec2(0.5 + (0.5 - ol)*(step(0.5,tx.x) - 0.5), 0.5);" + ut + q + P + R + M + "gl_FragColor=vec4(r,g,b,1.0);" + "}",
        s = n,
        o = "" + _t + L + et + yn + U + Z + Z + rt + wt + "uniform vec2 sz;" + "uniform float ss;" + dt + vt + "uniform float vg;" + "uniform vec4 dd;" + Xt + "{" + "float vig = 0.015;" + "float side = step(0.5,tx.x) - 0.5;" + "float aspect = (sz.x / sz.y);" + "vec2 center = vec2(0.5 + (0.5 - ol)*side, 0.5);" + ut + "v.x = v.x * aspect;" + "v *= 2.0 * ss;" + "float rs = dot(v,v);" + "v = v * (dd.x + rs*(dd.y + rs*(dd.z + rs*dd.w)));" + "v /= 2.0 * ss;" + "v.x = v.x / aspect;" + "vec2 vG = center + v;" + "float a = (1.0 - smoothstep(vG.x-vig - side*ol, vG.x - side*ol, center.x - 0.25)) * " + "(1.0 - smoothstep(center.x + 0.25 - vG.x + side*ol - vig, center.x + 0.25 - vG.x + side*ol, 0.0)) * " + "(1.0 - smoothstep(vG.y-vig, vG.y, 0.0)) * " + "(1.0 - smoothstep(1.0 - vG.y-vig,1.0 - vG.y, 0.0));" + "a *= smoothstep(rs-vig, rs+vig, vg);" + q + R + P + "float g = texture2D(sm,vG).g;" + M + "gl_FragColor=vec4(a*r,a*g,a*b,1.0);" + "}";
        return function(i) {
            var a = xn.webGL;
            if (a) {
                var f, l = a.context,
                c = a.ppshaders,
                h = 1 - zn * .1 / hr;
                Un == t && h > .999999 && h < 1.000001 && (i = t),
                xn[m][Ct] == t && (i = t);
                if (i) if (Un) {
                    s == n && (s = a[hn](o, "ss,ca,dd,ol,sz,vg"));
                    if (s) {
                        var p = 1 / Rn[0],
                        d = Rn[1],
                        v = Rn[2],
                        g = Rn[3];
                        a[ct](s.prg),
                        l[I](s.ss, hr),
                        l[I](s.ca, h),
                        l.uniform4f(s.dd, p, p * d, p * v, p * g),
                        l[I](s.ol, .5 * vr * (1 + (jn - 1) * .1)),
                        l[I](s.vg, Wn / 30),
                        a[ct](n),
                        u(c),
                        c.push(s)
                    }
                } else e == n && (e = a[hn](r, "ca,ol")),
                e && (a[ct](e.prg), l[I](e.ca, h), l[I](e.ol, .5 * vr * (1 + (jn - 1) * .1)), a[ct](n), u(c), c.push(e));
                else u(c)
            }
        }
    } (),
    Qo = "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4ECQoWBAhhTgGcBAAAAAAABzRFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEuTbuMU6uEHFO7a1OsggGw7AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEMq17GDD0JATYCMTGF2ZjU2LjMuMTAwV0GMTGF2ZjU2LjMuMTAwc6SQC+JFWnEfyt4nOD98NcnLDESJiAAAAAAAAAAAFlSuawEAAAAAAABCrgEAAAAAAAA514EBc8WBAZyBACK1nIN1bmSGhVZfVlA4g4EBI+ODgw9CQOABAAAAAAAADrCBCLqBCFSwgQhUuoEIH0O2dQEAAAAAAAAo54EAo6OBAACAEAIAnQEqCAAIAABHCIWFiIWEiAICAAwNYAD+/6PeABxTu2sBAAAAAAAAEbuPs4EAt4r3gQHxggF88IED"
};