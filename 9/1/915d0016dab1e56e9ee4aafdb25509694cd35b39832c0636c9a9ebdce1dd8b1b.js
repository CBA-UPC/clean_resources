var Rb = Object.defineProperty;
var $b = (i, a, r) => a in i ? Rb(i, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[a] = r;
var an = (i, a, r) => ($b(i, typeof a != "symbol" ? a + "" : a, r), r);
import { c as nn, l as Mb, w as Pb } from "./i18next.f0181361.mjs";
import { S as Fb } from "./icons.74076ddd.mjs";
class oa extends Error {
}
class qb extends oa {
  constructor(a) {
    super(`Invalid DateTime: ${a.toMessage()}`);
  }
}
class zb extends oa {
  constructor(a) {
    super(`Invalid Interval: ${a.toMessage()}`);
  }
}
class Ub extends oa {
  constructor(a) {
    super(`Invalid Duration: ${a.toMessage()}`);
  }
}
class un extends oa {
}
class Pd extends oa {
  constructor(a) {
    super(`Invalid unit ${a}`);
  }
}
class Xe extends oa {
}
class Bt extends oa {
  constructor() {
    super("Zone is an abstract class");
  }
}
const D = "numeric", ut = "short", ze = "long", uo = {
  year: D,
  month: D,
  day: D
}, Fd = {
  year: D,
  month: ut,
  day: D
}, Bb = {
  year: D,
  month: ut,
  day: D,
  weekday: ut
}, qd = {
  year: D,
  month: ze,
  day: D
}, zd = {
  year: D,
  month: ze,
  day: D,
  weekday: ze
}, Ud = {
  hour: D,
  minute: D
}, Bd = {
  hour: D,
  minute: D,
  second: D
}, Wd = {
  hour: D,
  minute: D,
  second: D,
  timeZoneName: ut
}, Vd = {
  hour: D,
  minute: D,
  second: D,
  timeZoneName: ze
}, Hd = {
  hour: D,
  minute: D,
  hourCycle: "h23"
}, Qd = {
  hour: D,
  minute: D,
  second: D,
  hourCycle: "h23"
}, Gd = {
  hour: D,
  minute: D,
  second: D,
  hourCycle: "h23",
  timeZoneName: ut
}, Yd = {
  hour: D,
  minute: D,
  second: D,
  hourCycle: "h23",
  timeZoneName: ze
}, Zd = {
  year: D,
  month: D,
  day: D,
  hour: D,
  minute: D
}, Kd = {
  year: D,
  month: D,
  day: D,
  hour: D,
  minute: D,
  second: D
}, Jd = {
  year: D,
  month: ut,
  day: D,
  hour: D,
  minute: D
}, Xd = {
  year: D,
  month: ut,
  day: D,
  hour: D,
  minute: D,
  second: D
}, Wb = {
  year: D,
  month: ut,
  day: D,
  weekday: ut,
  hour: D,
  minute: D
}, jd = {
  year: D,
  month: ze,
  day: D,
  hour: D,
  minute: D,
  timeZoneName: ut
}, eu = {
  year: D,
  month: ze,
  day: D,
  hour: D,
  minute: D,
  second: D,
  timeZoneName: ut
}, tu = {
  year: D,
  month: ze,
  day: D,
  weekday: ze,
  hour: D,
  minute: D,
  timeZoneName: ze
}, au = {
  year: D,
  month: ze,
  day: D,
  weekday: ze,
  hour: D,
  minute: D,
  second: D,
  timeZoneName: ze
};
function G(i) {
  return typeof i > "u";
}
function ia(i) {
  return typeof i == "number";
}
function Dr(i) {
  return typeof i == "number" && i % 1 === 0;
}
function Vb(i) {
  return typeof i == "string";
}
function Hb(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function nu() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Qb(i) {
  return Array.isArray(i) ? i : [i];
}
function sd(i, a, r) {
  if (i.length !== 0)
    return i.reduce((s, d) => {
      const f = [a(d), d];
      return s && r(s[0], f[0]) === s[0] ? s : f;
    }, null)[1];
}
function Gb(i, a) {
  return a.reduce((r, s) => (r[s] = i[s], r), {});
}
function Ea(i, a) {
  return Object.prototype.hasOwnProperty.call(i, a);
}
function kt(i, a, r) {
  return Dr(i) && i >= a && i <= r;
}
function Yb(i, a) {
  return i - a * Math.floor(i / a);
}
function ce(i, a = 2) {
  const r = i < 0;
  let s;
  return r ? s = "-" + ("" + -i).padStart(a, "0") : s = ("" + i).padStart(a, "0"), s;
}
function Wt(i) {
  if (!(G(i) || i === null || i === ""))
    return parseInt(i, 10);
}
function aa(i) {
  if (!(G(i) || i === null || i === ""))
    return parseFloat(i);
}
function So(i) {
  if (!(G(i) || i === null || i === "")) {
    const a = parseFloat("0." + i) * 1e3;
    return Math.floor(a);
  }
}
function wo(i, a, r = !1) {
  const s = 10 ** a;
  return (r ? Math.trunc : Math.round)(i * s) / s;
}
function pn(i) {
  return i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0);
}
function mn(i) {
  return pn(i) ? 366 : 365;
}
function Tr(i, a) {
  const r = Yb(a - 1, 12) + 1, s = i + (a - r) / 12;
  return r === 2 ? pn(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
}
function Ao(i) {
  let a = Date.UTC(
    i.year,
    i.month - 1,
    i.day,
    i.hour,
    i.minute,
    i.second,
    i.millisecond
  );
  return i.year < 100 && i.year >= 0 && (a = new Date(a), a.setUTCFullYear(a.getUTCFullYear() - 1900)), +a;
}
function _r(i) {
  const a = (i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400)) % 7, r = i - 1, s = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7;
  return a === 4 || s === 3 ? 53 : 52;
}
function co(i) {
  return i > 99 ? i : i > 60 ? 1900 + i : 2e3 + i;
}
function ru(i, a, r, s = null) {
  const d = new Date(i), f = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  s && (f.timeZone = s);
  const m = { timeZoneName: a, ...f }, g = new Intl.DateTimeFormat(r, m).formatToParts(d).find((C) => C.type.toLowerCase() === "timezonename");
  return g ? g.value : null;
}
function kr(i, a) {
  let r = parseInt(i, 10);
  Number.isNaN(r) && (r = 0);
  const s = parseInt(a, 10) || 0, d = r < 0 || Object.is(r, -0) ? -s : s;
  return r * 60 + d;
}
function iu(i) {
  const a = Number(i);
  if (typeof i == "boolean" || i === "" || Number.isNaN(a))
    throw new Xe(`Invalid unit value ${i}`);
  return a;
}
function Er(i, a) {
  const r = {};
  for (const s in i)
    if (Ea(i, s)) {
      const d = i[s];
      if (d == null)
        continue;
      r[a(s)] = iu(d);
    }
  return r;
}
function fn(i, a) {
  const r = Math.trunc(Math.abs(i / 60)), s = Math.trunc(Math.abs(i % 60)), d = i >= 0 ? "+" : "-";
  switch (a) {
    case "short":
      return `${d}${ce(r, 2)}:${ce(s, 2)}`;
    case "narrow":
      return `${d}${r}${s > 0 ? `:${s}` : ""}`;
    case "techie":
      return `${d}${ce(r, 2)}${ce(s, 2)}`;
    default:
      throw new RangeError(`Value format ${a} is out of range for property format`);
  }
}
function Nr(i) {
  return Gb(i, ["hour", "minute", "second", "millisecond"]);
}
const ou = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/, Zb = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], su = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Kb = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function lu(i) {
  switch (i) {
    case "narrow":
      return [...Kb];
    case "short":
      return [...su];
    case "long":
      return [...Zb];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const du = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], uu = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Jb = ["M", "T", "W", "T", "F", "S", "S"];
function cu(i) {
  switch (i) {
    case "narrow":
      return [...Jb];
    case "short":
      return [...uu];
    case "long":
      return [...du];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const mu = ["AM", "PM"], Xb = ["Before Christ", "Anno Domini"], jb = ["BC", "AD"], ey = ["B", "A"];
function fu(i) {
  switch (i) {
    case "narrow":
      return [...ey];
    case "short":
      return [...jb];
    case "long":
      return [...Xb];
    default:
      return null;
  }
}
function ty(i) {
  return mu[i.hour < 12 ? 0 : 1];
}
function ay(i, a) {
  return cu(a)[i.weekday - 1];
}
function ny(i, a) {
  return lu(a)[i.month - 1];
}
function ry(i, a) {
  return fu(a)[i.year < 0 ? 0 : 1];
}
function iy(i, a, r = "always", s = !1) {
  const d = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, f = ["hours", "minutes", "seconds"].indexOf(i) === -1;
  if (r === "auto" && f) {
    const L = i === "days";
    switch (a) {
      case 1:
        return L ? "tomorrow" : `next ${d[i][0]}`;
      case -1:
        return L ? "yesterday" : `last ${d[i][0]}`;
      case 0:
        return L ? "today" : `this ${d[i][0]}`;
    }
  }
  const m = Object.is(a, -0) || a < 0, g = Math.abs(a), C = g === 1, T = d[i], I = s ? C ? T[1] : T[2] || T[1] : C ? d[i][0] : i;
  return m ? `${g} ${I} ago` : `in ${g} ${I}`;
}
function ld(i, a) {
  let r = "";
  for (const s of i)
    s.literal ? r += s.val : r += a(s.val);
  return r;
}
const oy = {
  D: uo,
  DD: Fd,
  DDD: qd,
  DDDD: zd,
  t: Ud,
  tt: Bd,
  ttt: Wd,
  tttt: Vd,
  T: Hd,
  TT: Qd,
  TTT: Gd,
  TTTT: Yd,
  f: Zd,
  ff: Jd,
  fff: jd,
  ffff: tu,
  F: Kd,
  FF: Xd,
  FFF: eu,
  FFFF: au
};
class Ie {
  static create(a, r = {}) {
    return new Ie(a, r);
  }
  static parseFormat(a) {
    let r = null, s = "", d = !1;
    const f = [];
    for (let m = 0; m < a.length; m++) {
      const g = a.charAt(m);
      g === "'" ? (s.length > 0 && f.push({ literal: d, val: s }), r = null, s = "", d = !d) : d || g === r ? s += g : (s.length > 0 && f.push({ literal: !1, val: s }), s = g, r = g);
    }
    return s.length > 0 && f.push({ literal: d, val: s }), f;
  }
  static macroTokenToFormatOpts(a) {
    return oy[a];
  }
  constructor(a, r) {
    this.opts = r, this.loc = a, this.systemLoc = null;
  }
  formatWithSystemDefault(a, r) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(a, { ...this.opts, ...r }).format();
  }
  formatDateTime(a, r = {}) {
    return this.loc.dtFormatter(a, { ...this.opts, ...r }).format();
  }
  formatDateTimeParts(a, r = {}) {
    return this.loc.dtFormatter(a, { ...this.opts, ...r }).formatToParts();
  }
  resolvedOptions(a, r = {}) {
    return this.loc.dtFormatter(a, { ...this.opts, ...r }).resolvedOptions();
  }
  num(a, r = 0) {
    if (this.opts.forceSimple)
      return ce(a, r);
    const s = { ...this.opts };
    return r > 0 && (s.padTo = r), this.loc.numberFormatter(s).format(a);
  }
  formatDateTimeFromString(a, r) {
    const s = this.loc.listingMode() === "en", d = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", f = (O, Y) => this.loc.extract(a, O, Y), m = (O) => a.isOffsetFixed && a.offset === 0 && O.allowZ ? "Z" : a.isValid ? a.zone.formatOffset(a.ts, O.format) : "", g = () => s ? ty(a) : f({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), C = (O, Y) => s ? ny(a, O) : f(Y ? { month: O } : { month: O, day: "numeric" }, "month"), T = (O, Y) => s ? ay(a, O) : f(
      Y ? { weekday: O } : { weekday: O, month: "long", day: "numeric" },
      "weekday"
    ), I = (O) => {
      const Y = Ie.macroTokenToFormatOpts(O);
      return Y ? this.formatWithSystemDefault(a, Y) : O;
    }, L = (O) => s ? ry(a, O) : f({ era: O }, "era"), H = (O) => {
      switch (O) {
        case "S":
          return this.num(a.millisecond);
        case "u":
        case "SSS":
          return this.num(a.millisecond, 3);
        case "s":
          return this.num(a.second);
        case "ss":
          return this.num(a.second, 2);
        case "uu":
          return this.num(Math.floor(a.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(a.millisecond / 100));
        case "m":
          return this.num(a.minute);
        case "mm":
          return this.num(a.minute, 2);
        case "h":
          return this.num(a.hour % 12 === 0 ? 12 : a.hour % 12);
        case "hh":
          return this.num(a.hour % 12 === 0 ? 12 : a.hour % 12, 2);
        case "H":
          return this.num(a.hour);
        case "HH":
          return this.num(a.hour, 2);
        case "Z":
          return m({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return m({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return m({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return a.zone.offsetName(a.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return a.zone.offsetName(a.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return a.zoneName;
        case "a":
          return g();
        case "d":
          return d ? f({ day: "numeric" }, "day") : this.num(a.day);
        case "dd":
          return d ? f({ day: "2-digit" }, "day") : this.num(a.day, 2);
        case "c":
          return this.num(a.weekday);
        case "ccc":
          return T("short", !0);
        case "cccc":
          return T("long", !0);
        case "ccccc":
          return T("narrow", !0);
        case "E":
          return this.num(a.weekday);
        case "EEE":
          return T("short", !1);
        case "EEEE":
          return T("long", !1);
        case "EEEEE":
          return T("narrow", !1);
        case "L":
          return d ? f({ month: "numeric", day: "numeric" }, "month") : this.num(a.month);
        case "LL":
          return d ? f({ month: "2-digit", day: "numeric" }, "month") : this.num(a.month, 2);
        case "LLL":
          return C("short", !0);
        case "LLLL":
          return C("long", !0);
        case "LLLLL":
          return C("narrow", !0);
        case "M":
          return d ? f({ month: "numeric" }, "month") : this.num(a.month);
        case "MM":
          return d ? f({ month: "2-digit" }, "month") : this.num(a.month, 2);
        case "MMM":
          return C("short", !1);
        case "MMMM":
          return C("long", !1);
        case "MMMMM":
          return C("narrow", !1);
        case "y":
          return d ? f({ year: "numeric" }, "year") : this.num(a.year);
        case "yy":
          return d ? f({ year: "2-digit" }, "year") : this.num(a.year.toString().slice(-2), 2);
        case "yyyy":
          return d ? f({ year: "numeric" }, "year") : this.num(a.year, 4);
        case "yyyyyy":
          return d ? f({ year: "numeric" }, "year") : this.num(a.year, 6);
        case "G":
          return L("short");
        case "GG":
          return L("long");
        case "GGGGG":
          return L("narrow");
        case "kk":
          return this.num(a.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(a.weekYear, 4);
        case "W":
          return this.num(a.weekNumber);
        case "WW":
          return this.num(a.weekNumber, 2);
        case "o":
          return this.num(a.ordinal);
        case "ooo":
          return this.num(a.ordinal, 3);
        case "q":
          return this.num(a.quarter);
        case "qq":
          return this.num(a.quarter, 2);
        case "X":
          return this.num(Math.floor(a.ts / 1e3));
        case "x":
          return this.num(a.ts);
        default:
          return I(O);
      }
    };
    return ld(Ie.parseFormat(r), H);
  }
  formatDurationFromString(a, r) {
    const s = (C) => {
      switch (C[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, d = (C) => (T) => {
      const I = s(T);
      return I ? this.num(C.get(I), T.length) : T;
    }, f = Ie.parseFormat(r), m = f.reduce(
      (C, { literal: T, val: I }) => T ? C : C.concat(I),
      []
    ), g = a.shiftTo(...m.map(s).filter((C) => C));
    return ld(f, d(g));
  }
}
class dt {
  constructor(a, r) {
    this.reason = a, this.explanation = r;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
class hn {
  get type() {
    throw new Bt();
  }
  get name() {
    throw new Bt();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new Bt();
  }
  offsetName(a, r) {
    throw new Bt();
  }
  formatOffset(a, r) {
    throw new Bt();
  }
  offset(a) {
    throw new Bt();
  }
  equals(a) {
    throw new Bt();
  }
  get isValid() {
    throw new Bt();
  }
}
let Xi = null;
class To extends hn {
  static get instance() {
    return Xi === null && (Xi = new To()), Xi;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(a, { format: r, locale: s }) {
    return ru(a, r, s);
  }
  formatOffset(a, r) {
    return fn(this.offset(a), r);
  }
  offset(a) {
    return -new Date(a).getTimezoneOffset();
  }
  equals(a) {
    return a.type === "system";
  }
  get isValid() {
    return !0;
  }
}
let wr = {};
function sy(i) {
  return wr[i] || (wr[i] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: i,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), wr[i];
}
const ly = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function dy(i, a) {
  const r = i.format(a).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, d, f, m, g, C, T, I] = s;
  return [m, d, f, g, C, T, I];
}
function uy(i, a) {
  const r = i.formatToParts(a), s = [];
  for (let d = 0; d < r.length; d++) {
    const { type: f, value: m } = r[d], g = ly[f];
    f === "era" ? s[g] = m : G(g) || (s[g] = parseInt(m, 10));
  }
  return s;
}
let pr = {};
class Nt extends hn {
  static create(a) {
    return pr[a] || (pr[a] = new Nt(a)), pr[a];
  }
  static resetCache() {
    pr = {}, wr = {};
  }
  static isValidSpecifier(a) {
    return this.isValidZone(a);
  }
  static isValidZone(a) {
    if (!a)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: a }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(a) {
    super(), this.zoneName = a, this.valid = Nt.isValidZone(a);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(a, { format: r, locale: s }) {
    return ru(a, r, s, this.name);
  }
  formatOffset(a, r) {
    return fn(this.offset(a), r);
  }
  offset(a) {
    const r = new Date(a);
    if (isNaN(r))
      return NaN;
    const s = sy(this.name);
    let [d, f, m, g, C, T, I] = s.formatToParts ? uy(s, r) : dy(s, r);
    g === "BC" && (d = -Math.abs(d) + 1);
    const H = Ao({
      year: d,
      month: f,
      day: m,
      hour: C === 24 ? 0 : C,
      minute: T,
      second: I,
      millisecond: 0
    });
    let O = +r;
    const Y = O % 1e3;
    return O -= Y >= 0 ? Y : 1e3 + Y, (H - O) / (60 * 1e3);
  }
  equals(a) {
    return a.type === "iana" && a.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let ji = null;
class _e extends hn {
  static get utcInstance() {
    return ji === null && (ji = new _e(0)), ji;
  }
  static instance(a) {
    return a === 0 ? _e.utcInstance : new _e(a);
  }
  static parseSpecifier(a) {
    if (a) {
      const r = a.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r)
        return new _e(kr(r[1], r[2]));
    }
    return null;
  }
  constructor(a) {
    super(), this.fixed = a;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${fn(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${fn(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(a, r) {
    return fn(this.fixed, r);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(a) {
    return a.type === "fixed" && a.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class cy extends hn {
  constructor(a) {
    super(), this.zoneName = a;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function Vt(i, a) {
  if (G(i) || i === null)
    return a;
  if (i instanceof hn)
    return i;
  if (Vb(i)) {
    const r = i.toLowerCase();
    return r === "local" || r === "system" ? a : r === "utc" || r === "gmt" ? _e.utcInstance : _e.parseSpecifier(r) || Nt.create(i);
  } else
    return ia(i) ? _e.instance(i) : typeof i == "object" && i.offset && typeof i.offset == "number" ? i : new cy(i);
}
let dd = () => Date.now(), ud = "system", cd = null, md = null, fd = null, pd;
class ue {
  static get now() {
    return dd;
  }
  static set now(a) {
    dd = a;
  }
  static set defaultZone(a) {
    ud = a;
  }
  static get defaultZone() {
    return Vt(ud, To.instance);
  }
  static get defaultLocale() {
    return cd;
  }
  static set defaultLocale(a) {
    cd = a;
  }
  static get defaultNumberingSystem() {
    return md;
  }
  static set defaultNumberingSystem(a) {
    md = a;
  }
  static get defaultOutputCalendar() {
    return fd;
  }
  static set defaultOutputCalendar(a) {
    fd = a;
  }
  static get throwOnInvalid() {
    return pd;
  }
  static set throwOnInvalid(a) {
    pd = a;
  }
  static resetCaches() {
    ie.resetCache(), Nt.resetCache();
  }
}
let hd = {};
function my(i, a = {}) {
  const r = JSON.stringify([i, a]);
  let s = hd[r];
  return s || (s = new Intl.ListFormat(i, a), hd[r] = s), s;
}
let mo = {};
function fo(i, a = {}) {
  const r = JSON.stringify([i, a]);
  let s = mo[r];
  return s || (s = new Intl.DateTimeFormat(i, a), mo[r] = s), s;
}
let po = {};
function fy(i, a = {}) {
  const r = JSON.stringify([i, a]);
  let s = po[r];
  return s || (s = new Intl.NumberFormat(i, a), po[r] = s), s;
}
let ho = {};
function py(i, a = {}) {
  const { base: r, ...s } = a, d = JSON.stringify([i, s]);
  let f = ho[d];
  return f || (f = new Intl.RelativeTimeFormat(i, a), ho[d] = f), f;
}
let cn = null;
function hy() {
  return cn || (cn = new Intl.DateTimeFormat().resolvedOptions().locale, cn);
}
function gy(i) {
  const a = i.indexOf("-u-");
  if (a === -1)
    return [i];
  {
    let r;
    const s = i.substring(0, a);
    try {
      r = fo(i).resolvedOptions();
    } catch {
      r = fo(s).resolvedOptions();
    }
    const { numberingSystem: d, calendar: f } = r;
    return [s, d, f];
  }
}
function vy(i, a, r) {
  return (r || a) && (i += "-u", r && (i += `-ca-${r}`), a && (i += `-nu-${a}`)), i;
}
function by(i) {
  const a = [];
  for (let r = 1; r <= 12; r++) {
    const s = q.utc(2016, r, 1);
    a.push(i(s));
  }
  return a;
}
function yy(i) {
  const a = [];
  for (let r = 1; r <= 7; r++) {
    const s = q.utc(2016, 11, 13 + r);
    a.push(i(s));
  }
  return a;
}
function hr(i, a, r, s, d) {
  const f = i.listingMode(r);
  return f === "error" ? null : f === "en" ? s(a) : d(a);
}
function Cy(i) {
  return i.numberingSystem && i.numberingSystem !== "latn" ? !1 : i.numberingSystem === "latn" || !i.locale || i.locale.startsWith("en") || new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem === "latn";
}
class Sy {
  constructor(a, r, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: d, floor: f, ...m } = s;
    if (!r || Object.keys(m).length > 0) {
      const g = { useGrouping: !1, ...s };
      s.padTo > 0 && (g.minimumIntegerDigits = s.padTo), this.inf = fy(a, g);
    }
  }
  format(a) {
    if (this.inf) {
      const r = this.floor ? Math.floor(a) : a;
      return this.inf.format(r);
    } else {
      const r = this.floor ? Math.floor(a) : wo(a, 3);
      return ce(r, this.padTo);
    }
  }
}
class wy {
  constructor(a, r, s) {
    this.opts = s;
    let d;
    if (a.zone.isUniversal) {
      const m = -1 * (a.offset / 60), g = m >= 0 ? `Etc/GMT+${m}` : `Etc/GMT${m}`;
      a.offset !== 0 && Nt.create(g).valid ? (d = g, this.dt = a) : (d = "UTC", s.timeZoneName ? this.dt = a : this.dt = a.offset === 0 ? a : q.fromMillis(a.ts + a.offset * 60 * 1e3));
    } else
      a.zone.type === "system" ? this.dt = a : (this.dt = a, d = a.zone.name);
    const f = { ...this.opts };
    d && (f.timeZone = d), this.dtf = fo(r, f);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Ay {
  constructor(a, r, s) {
    this.opts = { style: "long", ...s }, !r && nu() && (this.rtf = py(a, s));
  }
  format(a, r) {
    return this.rtf ? this.rtf.format(a, r) : iy(r, a, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(a, r) {
    return this.rtf ? this.rtf.formatToParts(a, r) : [];
  }
}
class ie {
  static fromOpts(a) {
    return ie.create(a.locale, a.numberingSystem, a.outputCalendar, a.defaultToEN);
  }
  static create(a, r, s, d = !1) {
    const f = a || ue.defaultLocale, m = f || (d ? "en-US" : hy()), g = r || ue.defaultNumberingSystem, C = s || ue.defaultOutputCalendar;
    return new ie(m, g, C, f);
  }
  static resetCache() {
    cn = null, mo = {}, po = {}, ho = {};
  }
  static fromObject({ locale: a, numberingSystem: r, outputCalendar: s } = {}) {
    return ie.create(a, r, s);
  }
  constructor(a, r, s, d) {
    const [f, m, g] = gy(a);
    this.locale = f, this.numberingSystem = r || m || null, this.outputCalendar = s || g || null, this.intl = vy(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = d, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Cy(this)), this.fastNumbersCached;
  }
  listingMode() {
    const a = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return a && r ? "en" : "intl";
  }
  clone(a) {
    return !a || Object.getOwnPropertyNames(a).length === 0 ? this : ie.create(
      a.locale || this.specifiedLocale,
      a.numberingSystem || this.numberingSystem,
      a.outputCalendar || this.outputCalendar,
      a.defaultToEN || !1
    );
  }
  redefaultToEN(a = {}) {
    return this.clone({ ...a, defaultToEN: !0 });
  }
  redefaultToSystem(a = {}) {
    return this.clone({ ...a, defaultToEN: !1 });
  }
  months(a, r = !1, s = !0) {
    return hr(this, a, s, lu, () => {
      const d = r ? { month: a, day: "numeric" } : { month: a }, f = r ? "format" : "standalone";
      return this.monthsCache[f][a] || (this.monthsCache[f][a] = by((m) => this.extract(m, d, "month"))), this.monthsCache[f][a];
    });
  }
  weekdays(a, r = !1, s = !0) {
    return hr(this, a, s, cu, () => {
      const d = r ? { weekday: a, year: "numeric", month: "long", day: "numeric" } : { weekday: a }, f = r ? "format" : "standalone";
      return this.weekdaysCache[f][a] || (this.weekdaysCache[f][a] = yy(
        (m) => this.extract(m, d, "weekday")
      )), this.weekdaysCache[f][a];
    });
  }
  meridiems(a = !0) {
    return hr(
      this,
      void 0,
      a,
      () => mu,
      () => {
        if (!this.meridiemCache) {
          const r = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [q.utc(2016, 11, 13, 9), q.utc(2016, 11, 13, 19)].map(
            (s) => this.extract(s, r, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(a, r = !0) {
    return hr(this, a, r, fu, () => {
      const s = { era: a };
      return this.eraCache[a] || (this.eraCache[a] = [q.utc(-40, 1, 1), q.utc(2017, 1, 1)].map(
        (d) => this.extract(d, s, "era")
      )), this.eraCache[a];
    });
  }
  extract(a, r, s) {
    const d = this.dtFormatter(a, r), f = d.formatToParts(), m = f.find((g) => g.type.toLowerCase() === s);
    return m ? m.value : null;
  }
  numberFormatter(a = {}) {
    return new Sy(this.intl, a.forceSimple || this.fastNumbers, a);
  }
  dtFormatter(a, r = {}) {
    return new wy(a, this.intl, r);
  }
  relFormatter(a = {}) {
    return new Ay(this.intl, this.isEnglish(), a);
  }
  listFormatter(a = {}) {
    return my(this.intl, a);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(a) {
    return this.locale === a.locale && this.numberingSystem === a.numberingSystem && this.outputCalendar === a.outputCalendar;
  }
}
function Da(...i) {
  const a = i.reduce((r, s) => r + s.source, "");
  return RegExp(`^${a}$`);
}
function ka(...i) {
  return (a) => i.reduce(
    ([r, s, d], f) => {
      const [m, g, C] = f(a, d);
      return [{ ...r, ...m }, g || s, C];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Na(i, ...a) {
  if (i == null)
    return [null, null];
  for (const [r, s] of a) {
    const d = r.exec(i);
    if (d)
      return s(d);
  }
  return [null, null];
}
function pu(...i) {
  return (a, r) => {
    const s = {};
    let d;
    for (d = 0; d < i.length; d++)
      s[i[d]] = Wt(a[r + d]);
    return [s, null, r + d];
  };
}
const hu = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Ty = `(?:${hu.source}?(?:\\[(${ou.source})\\])?)?`, _o = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, gu = RegExp(`${_o.source}${Ty}`), Eo = RegExp(`(?:T${gu.source})?`), _y = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ey = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Dy = /(\d{4})-?(\d{3})/, ky = pu("weekYear", "weekNumber", "weekDay"), Ny = pu("year", "ordinal"), Iy = /(\d{4})-(\d\d)-(\d\d)/, vu = RegExp(
  `${_o.source} ?(?:${hu.source}|(${ou.source}))?`
), Oy = RegExp(`(?: ${vu.source})?`);
function _a(i, a, r) {
  const s = i[a];
  return G(s) ? r : Wt(s);
}
function Ly(i, a) {
  return [{
    year: _a(i, a),
    month: _a(i, a + 1, 1),
    day: _a(i, a + 2, 1)
  }, null, a + 3];
}
function Ia(i, a) {
  return [{
    hours: _a(i, a, 0),
    minutes: _a(i, a + 1, 0),
    seconds: _a(i, a + 2, 0),
    milliseconds: So(i[a + 3])
  }, null, a + 4];
}
function gn(i, a) {
  const r = !i[a] && !i[a + 1], s = kr(i[a + 1], i[a + 2]), d = r ? null : _e.instance(s);
  return [{}, d, a + 3];
}
function vn(i, a) {
  const r = i[a] ? Nt.create(i[a]) : null;
  return [{}, r, a + 1];
}
const xy = RegExp(`^T?${_o.source}$`), Ry = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function $y(i) {
  const [
    a,
    r,
    s,
    d,
    f,
    m,
    g,
    C,
    T
  ] = i, I = a[0] === "-", L = C && C[0] === "-", H = (O, Y = !1) => O !== void 0 && (Y || O && I) ? -O : O;
  return [
    {
      years: H(aa(r)),
      months: H(aa(s)),
      weeks: H(aa(d)),
      days: H(aa(f)),
      hours: H(aa(m)),
      minutes: H(aa(g)),
      seconds: H(aa(C), C === "-0"),
      milliseconds: H(So(T), L)
    }
  ];
}
const My = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Do(i, a, r, s, d, f, m) {
  const g = {
    year: a.length === 2 ? co(Wt(a)) : Wt(a),
    month: su.indexOf(r) + 1,
    day: Wt(s),
    hour: Wt(d),
    minute: Wt(f)
  };
  return m && (g.second = Wt(m)), i && (g.weekday = i.length > 3 ? du.indexOf(i) + 1 : uu.indexOf(i) + 1), g;
}
const Py = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Fy(i) {
  const [
    ,
    a,
    r,
    s,
    d,
    f,
    m,
    g,
    C,
    T,
    I,
    L
  ] = i, H = Do(a, d, s, r, f, m, g);
  let O;
  return C ? O = My[C] : T ? O = 0 : O = kr(I, L), [H, new _e(O)];
}
function qy(i) {
  return i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const zy = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Uy = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, By = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function gd(i) {
  const [, a, r, s, d, f, m, g] = i;
  return [Do(a, d, s, r, f, m, g), _e.utcInstance];
}
function Wy(i) {
  const [, a, r, s, d, f, m, g] = i;
  return [Do(a, g, r, s, d, f, m), _e.utcInstance];
}
const Vy = Da(_y, Eo), Hy = Da(Ey, Eo), Qy = Da(Dy, Eo), Gy = Da(gu), bu = ka(
  Ly,
  Ia,
  gn,
  vn
), Yy = ka(
  ky,
  Ia,
  gn,
  vn
), Zy = ka(
  Ny,
  Ia,
  gn,
  vn
), Ky = ka(
  Ia,
  gn,
  vn
);
function Jy(i) {
  return Na(
    i,
    [Vy, bu],
    [Hy, Yy],
    [Qy, Zy],
    [Gy, Ky]
  );
}
function Xy(i) {
  return Na(qy(i), [Py, Fy]);
}
function jy(i) {
  return Na(
    i,
    [zy, gd],
    [Uy, gd],
    [By, Wy]
  );
}
function eC(i) {
  return Na(i, [Ry, $y]);
}
const tC = ka(Ia);
function aC(i) {
  return Na(i, [xy, tC]);
}
const nC = Da(Iy, Oy), rC = Da(vu), iC = ka(
  Ia,
  gn,
  vn
);
function oC(i) {
  return Na(
    i,
    [nC, bu],
    [rC, iC]
  );
}
const sC = "Invalid Duration", yu = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, lC = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...yu
}, Je = 146097 / 400, Ta = 146097 / 4800, dC = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Je / 7,
    days: Je,
    hours: Je * 24,
    minutes: Je * 24 * 60,
    seconds: Je * 24 * 60 * 60,
    milliseconds: Je * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Je / 28,
    days: Je / 4,
    hours: Je * 24 / 4,
    minutes: Je * 24 * 60 / 4,
    seconds: Je * 24 * 60 * 60 / 4,
    milliseconds: Je * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Ta / 7,
    days: Ta,
    hours: Ta * 24,
    minutes: Ta * 24 * 60,
    seconds: Ta * 24 * 60 * 60,
    milliseconds: Ta * 24 * 60 * 60 * 1e3
  },
  ...yu
}, ra = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], uC = ra.slice(0).reverse();
function na(i, a, r = !1) {
  const s = {
    values: r ? a.values : { ...i.values, ...a.values || {} },
    loc: i.loc.clone(a.loc),
    conversionAccuracy: a.conversionAccuracy || i.conversionAccuracy
  };
  return new Z(s);
}
function cC(i) {
  return i < 0 ? Math.floor(i) : Math.ceil(i);
}
function Cu(i, a, r, s, d) {
  const f = i[d][r], m = a[r] / f, g = Math.sign(m) === Math.sign(s[d]), C = !g && s[d] !== 0 && Math.abs(m) <= 1 ? cC(m) : Math.trunc(m);
  s[d] += C, a[r] -= C * f;
}
function mC(i, a) {
  uC.reduce((r, s) => G(a[s]) ? r : (r && Cu(i, a, r, a, s), s), null);
}
class Z {
  constructor(a) {
    const r = a.conversionAccuracy === "longterm" || !1;
    this.values = a.values, this.loc = a.loc || ie.create(), this.conversionAccuracy = r ? "longterm" : "casual", this.invalid = a.invalid || null, this.matrix = r ? dC : lC, this.isLuxonDuration = !0;
  }
  static fromMillis(a, r) {
    return Z.fromObject({ milliseconds: a }, r);
  }
  static fromObject(a, r = {}) {
    if (a == null || typeof a != "object")
      throw new Xe(
        `Duration.fromObject: argument expected to be an object, got ${a === null ? "null" : typeof a}`
      );
    return new Z({
      values: Er(a, Z.normalizeUnit),
      loc: ie.fromObject(r),
      conversionAccuracy: r.conversionAccuracy
    });
  }
  static fromDurationLike(a) {
    if (ia(a))
      return Z.fromMillis(a);
    if (Z.isDuration(a))
      return a;
    if (typeof a == "object")
      return Z.fromObject(a);
    throw new Xe(
      `Unknown duration argument ${a} of type ${typeof a}`
    );
  }
  static fromISO(a, r) {
    const [s] = eC(a);
    return s ? Z.fromObject(s, r) : Z.invalid("unparsable", `the input "${a}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(a, r) {
    const [s] = aC(a);
    return s ? Z.fromObject(s, r) : Z.invalid("unparsable", `the input "${a}" can't be parsed as ISO 8601`);
  }
  static invalid(a, r = null) {
    if (!a)
      throw new Xe("need to specify a reason the Duration is invalid");
    const s = a instanceof dt ? a : new dt(a, r);
    if (ue.throwOnInvalid)
      throw new Ub(s);
    return new Z({ invalid: s });
  }
  static normalizeUnit(a) {
    const r = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[a && a.toLowerCase()];
    if (!r)
      throw new Pd(a);
    return r;
  }
  static isDuration(a) {
    return a && a.isLuxonDuration || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(a, r = {}) {
    const s = {
      ...r,
      floor: r.round !== !1 && r.floor !== !1
    };
    return this.isValid ? Ie.create(this.loc, s).formatDurationFromString(this, a) : sC;
  }
  toHuman(a = {}) {
    const r = ra.map((s) => {
      const d = this.values[s];
      return G(d) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...a, unit: s.slice(0, -1) }).format(d);
    }).filter((s) => s);
    return this.loc.listFormatter({ type: "conjunction", style: a.listStyle || "narrow", ...a }).format(r);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid)
      return null;
    let a = "P";
    return this.years !== 0 && (a += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (a += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (a += this.weeks + "W"), this.days !== 0 && (a += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (a += "T"), this.hours !== 0 && (a += this.hours + "H"), this.minutes !== 0 && (a += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (a += wo(this.seconds + this.milliseconds / 1e3, 3) + "S"), a === "P" && (a += "T0S"), a;
  }
  toISOTime(a = {}) {
    if (!this.isValid)
      return null;
    const r = this.toMillis();
    if (r < 0 || r >= 864e5)
      return null;
    a = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...a
    };
    const s = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let d = a.format === "basic" ? "hhmm" : "hh:mm";
    (!a.suppressSeconds || s.seconds !== 0 || s.milliseconds !== 0) && (d += a.format === "basic" ? "ss" : ":ss", (!a.suppressMilliseconds || s.milliseconds !== 0) && (d += ".SSS"));
    let f = s.toFormat(d);
    return a.includePrefix && (f = "T" + f), f;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(a) {
    if (!this.isValid)
      return this;
    const r = Z.fromDurationLike(a), s = {};
    for (const d of ra)
      (Ea(r.values, d) || Ea(this.values, d)) && (s[d] = r.get(d) + this.get(d));
    return na(this, { values: s }, !0);
  }
  minus(a) {
    if (!this.isValid)
      return this;
    const r = Z.fromDurationLike(a);
    return this.plus(r.negate());
  }
  mapUnits(a) {
    if (!this.isValid)
      return this;
    const r = {};
    for (const s of Object.keys(this.values))
      r[s] = iu(a(this.values[s], s));
    return na(this, { values: r }, !0);
  }
  get(a) {
    return this[Z.normalizeUnit(a)];
  }
  set(a) {
    if (!this.isValid)
      return this;
    const r = { ...this.values, ...Er(a, Z.normalizeUnit) };
    return na(this, { values: r });
  }
  reconfigure({ locale: a, numberingSystem: r, conversionAccuracy: s } = {}) {
    const d = this.loc.clone({ locale: a, numberingSystem: r }), f = { loc: d };
    return s && (f.conversionAccuracy = s), na(this, f);
  }
  as(a) {
    return this.isValid ? this.shiftTo(a).get(a) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const a = this.toObject();
    return mC(this.matrix, a), na(this, { values: a }, !0);
  }
  shiftTo(...a) {
    if (!this.isValid)
      return this;
    if (a.length === 0)
      return this;
    a = a.map((m) => Z.normalizeUnit(m));
    const r = {}, s = {}, d = this.toObject();
    let f;
    for (const m of ra)
      if (a.indexOf(m) >= 0) {
        f = m;
        let g = 0;
        for (const T in s)
          g += this.matrix[T][m] * s[T], s[T] = 0;
        ia(d[m]) && (g += d[m]);
        const C = Math.trunc(g);
        r[m] = C, s[m] = (g * 1e3 - C * 1e3) / 1e3;
        for (const T in d)
          ra.indexOf(T) > ra.indexOf(m) && Cu(this.matrix, d, T, r, m);
      } else
        ia(d[m]) && (s[m] = d[m]);
    for (const m in s)
      s[m] !== 0 && (r[f] += m === f ? s[m] : s[m] / this.matrix[f][m]);
    return na(this, { values: r }, !0).normalize();
  }
  negate() {
    if (!this.isValid)
      return this;
    const a = {};
    for (const r of Object.keys(this.values))
      a[r] = this.values[r] === 0 ? 0 : -this.values[r];
    return na(this, { values: a }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(a) {
    if (!this.isValid || !a.isValid || !this.loc.equals(a.loc))
      return !1;
    function r(s, d) {
      return s === void 0 || s === 0 ? d === void 0 || d === 0 : s === d;
    }
    for (const s of ra)
      if (!r(this.values[s], a.values[s]))
        return !1;
    return !0;
  }
}
const rn = "Invalid Interval";
function fC(i, a) {
  return !i || !i.isValid ? se.invalid("missing or invalid start") : !a || !a.isValid ? se.invalid("missing or invalid end") : a < i ? se.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${i.toISO()} and end=${a.toISO()}`
  ) : null;
}
class se {
  constructor(a) {
    this.s = a.start, this.e = a.end, this.invalid = a.invalid || null, this.isLuxonInterval = !0;
  }
  static invalid(a, r = null) {
    if (!a)
      throw new Xe("need to specify a reason the Interval is invalid");
    const s = a instanceof dt ? a : new dt(a, r);
    if (ue.throwOnInvalid)
      throw new zb(s);
    return new se({ invalid: s });
  }
  static fromDateTimes(a, r) {
    const s = ln(a), d = ln(r), f = fC(s, d);
    return f == null ? new se({
      start: s,
      end: d
    }) : f;
  }
  static after(a, r) {
    const s = Z.fromDurationLike(r), d = ln(a);
    return se.fromDateTimes(d, d.plus(s));
  }
  static before(a, r) {
    const s = Z.fromDurationLike(r), d = ln(a);
    return se.fromDateTimes(d.minus(s), d);
  }
  static fromISO(a, r) {
    const [s, d] = (a || "").split("/", 2);
    if (s && d) {
      let f, m;
      try {
        f = q.fromISO(s, r), m = f.isValid;
      } catch {
        m = !1;
      }
      let g, C;
      try {
        g = q.fromISO(d, r), C = g.isValid;
      } catch {
        C = !1;
      }
      if (m && C)
        return se.fromDateTimes(f, g);
      if (m) {
        const T = Z.fromISO(d, r);
        if (T.isValid)
          return se.after(f, T);
      } else if (C) {
        const T = Z.fromISO(s, r);
        if (T.isValid)
          return se.before(g, T);
      }
    }
    return se.invalid("unparsable", `the input "${a}" can't be parsed as ISO 8601`);
  }
  static isInterval(a) {
    return a && a.isLuxonInterval || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(a = "milliseconds") {
    return this.isValid ? this.toDuration(a).get(a) : NaN;
  }
  count(a = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const r = this.start.startOf(a), s = this.end.startOf(a);
    return Math.floor(s.diff(r, a).get(a)) + 1;
  }
  hasSame(a) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, a) : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(a) {
    return this.isValid ? this.s > a : !1;
  }
  isBefore(a) {
    return this.isValid ? this.e <= a : !1;
  }
  contains(a) {
    return this.isValid ? this.s <= a && this.e > a : !1;
  }
  set({ start: a, end: r } = {}) {
    return this.isValid ? se.fromDateTimes(a || this.s, r || this.e) : this;
  }
  splitAt(...a) {
    if (!this.isValid)
      return [];
    const r = a.map(ln).filter((m) => this.contains(m)).sort(), s = [];
    let { s: d } = this, f = 0;
    for (; d < this.e; ) {
      const m = r[f] || this.e, g = +m > +this.e ? this.e : m;
      s.push(se.fromDateTimes(d, g)), d = g, f += 1;
    }
    return s;
  }
  splitBy(a) {
    const r = Z.fromDurationLike(a);
    if (!this.isValid || !r.isValid || r.as("milliseconds") === 0)
      return [];
    let { s } = this, d = 1, f;
    const m = [];
    for (; s < this.e; ) {
      const g = this.start.plus(r.mapUnits((C) => C * d));
      f = +g > +this.e ? this.e : g, m.push(se.fromDateTimes(s, f)), s = f, d += 1;
    }
    return m;
  }
  divideEqually(a) {
    return this.isValid ? this.splitBy(this.length() / a).slice(0, a) : [];
  }
  overlaps(a) {
    return this.e > a.s && this.s < a.e;
  }
  abutsStart(a) {
    return this.isValid ? +this.e == +a.s : !1;
  }
  abutsEnd(a) {
    return this.isValid ? +a.e == +this.s : !1;
  }
  engulfs(a) {
    return this.isValid ? this.s <= a.s && this.e >= a.e : !1;
  }
  equals(a) {
    return !this.isValid || !a.isValid ? !1 : this.s.equals(a.s) && this.e.equals(a.e);
  }
  intersection(a) {
    if (!this.isValid)
      return this;
    const r = this.s > a.s ? this.s : a.s, s = this.e < a.e ? this.e : a.e;
    return r >= s ? null : se.fromDateTimes(r, s);
  }
  union(a) {
    if (!this.isValid)
      return this;
    const r = this.s < a.s ? this.s : a.s, s = this.e > a.e ? this.e : a.e;
    return se.fromDateTimes(r, s);
  }
  static merge(a) {
    const [r, s] = a.sort((d, f) => d.s - f.s).reduce(
      ([d, f], m) => f ? f.overlaps(m) || f.abutsStart(m) ? [d, f.union(m)] : [d.concat([f]), m] : [d, m],
      [[], null]
    );
    return s && r.push(s), r;
  }
  static xor(a) {
    let r = null, s = 0;
    const d = [], f = a.map((C) => [
      { time: C.s, type: "s" },
      { time: C.e, type: "e" }
    ]), m = Array.prototype.concat(...f), g = m.sort((C, T) => C.time - T.time);
    for (const C of g)
      s += C.type === "s" ? 1 : -1, s === 1 ? r = C.time : (r && +r != +C.time && d.push(se.fromDateTimes(r, C.time)), r = null);
    return se.merge(d);
  }
  difference(...a) {
    return se.xor([this].concat(a)).map((r) => this.intersection(r)).filter((r) => r && !r.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : rn;
  }
  toISO(a) {
    return this.isValid ? `${this.s.toISO(a)}/${this.e.toISO(a)}` : rn;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : rn;
  }
  toISOTime(a) {
    return this.isValid ? `${this.s.toISOTime(a)}/${this.e.toISOTime(a)}` : rn;
  }
  toFormat(a, { separator: r = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(a)}${r}${this.e.toFormat(a)}` : rn;
  }
  toDuration(a, r) {
    return this.isValid ? this.e.diff(this.s, a, r) : Z.invalid(this.invalidReason);
  }
  mapEndpoints(a) {
    return se.fromDateTimes(a(this.s), a(this.e));
  }
}
class gr {
  static hasDST(a = ue.defaultZone) {
    const r = q.now().setZone(a).set({ month: 12 });
    return !a.isUniversal && r.offset !== r.set({ month: 6 }).offset;
  }
  static isValidIANAZone(a) {
    return Nt.isValidZone(a);
  }
  static normalizeZone(a) {
    return Vt(a, ue.defaultZone);
  }
  static months(a = "long", { locale: r = null, numberingSystem: s = null, locObj: d = null, outputCalendar: f = "gregory" } = {}) {
    return (d || ie.create(r, s, f)).months(a);
  }
  static monthsFormat(a = "long", { locale: r = null, numberingSystem: s = null, locObj: d = null, outputCalendar: f = "gregory" } = {}) {
    return (d || ie.create(r, s, f)).months(a, !0);
  }
  static weekdays(a = "long", { locale: r = null, numberingSystem: s = null, locObj: d = null } = {}) {
    return (d || ie.create(r, s, null)).weekdays(a);
  }
  static weekdaysFormat(a = "long", { locale: r = null, numberingSystem: s = null, locObj: d = null } = {}) {
    return (d || ie.create(r, s, null)).weekdays(a, !0);
  }
  static meridiems({ locale: a = null } = {}) {
    return ie.create(a).meridiems();
  }
  static eras(a = "short", { locale: r = null } = {}) {
    return ie.create(r, null, "gregory").eras(a);
  }
  static features() {
    return { relative: nu() };
  }
}
function vd(i, a) {
  const r = (d) => d.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = r(a) - r(i);
  return Math.floor(Z.fromMillis(s).as("days"));
}
function pC(i, a, r) {
  const s = [
    ["years", (g, C) => C.year - g.year],
    ["quarters", (g, C) => C.quarter - g.quarter],
    ["months", (g, C) => C.month - g.month + (C.year - g.year) * 12],
    [
      "weeks",
      (g, C) => {
        const T = vd(g, C);
        return (T - T % 7) / 7;
      }
    ],
    ["days", vd]
  ], d = {};
  let f, m;
  for (const [g, C] of s)
    if (r.indexOf(g) >= 0) {
      f = g;
      let T = C(i, a);
      m = i.plus({ [g]: T }), m > a ? (i = i.plus({ [g]: T - 1 }), T -= 1) : i = m, d[g] = T;
    }
  return [i, d, m, f];
}
function hC(i, a, r, s) {
  let [d, f, m, g] = pC(i, a, r);
  const C = a - d, T = r.filter(
    (L) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(L) >= 0
  );
  T.length === 0 && (m < a && (m = d.plus({ [g]: 1 })), m !== d && (f[g] = (f[g] || 0) + C / (m - d)));
  const I = Z.fromObject(f, s);
  return T.length > 0 ? Z.fromMillis(C, s).shiftTo(...T).plus(I) : I;
}
const ko = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
}, bd = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, gC = ko.hanidec.replace(/[\[|\]]/g, "").split("");
function vC(i) {
  let a = parseInt(i, 10);
  if (isNaN(a)) {
    a = "";
    for (let r = 0; r < i.length; r++) {
      const s = i.charCodeAt(r);
      if (i[r].search(ko.hanidec) !== -1)
        a += gC.indexOf(i[r]);
      else
        for (const d in bd) {
          const [f, m] = bd[d];
          s >= f && s <= m && (a += s - f);
        }
    }
    return parseInt(a, 10);
  } else
    return a;
}
function st({ numberingSystem: i }, a = "") {
  return new RegExp(`${ko[i || "latn"]}${a}`);
}
const bC = "missing Intl.DateTimeFormat.formatToParts support";
function J(i, a = (r) => r) {
  return { regex: i, deser: ([r]) => a(vC(r)) };
}
const yC = String.fromCharCode(160), Su = `[ ${yC}]`, wu = new RegExp(Su, "g");
function CC(i) {
  return i.replace(/\./g, "\\.?").replace(wu, Su);
}
function yd(i) {
  return i.replace(/\./g, "").replace(wu, " ").toLowerCase();
}
function lt(i, a) {
  return i === null ? null : {
    regex: RegExp(i.map(CC).join("|")),
    deser: ([r]) => i.findIndex((s) => yd(r) === yd(s)) + a
  };
}
function Cd(i, a) {
  return { regex: i, deser: ([, r, s]) => kr(r, s), groups: a };
}
function eo(i) {
  return { regex: i, deser: ([a]) => a };
}
function SC(i) {
  return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function wC(i, a) {
  const r = st(a), s = st(a, "{2}"), d = st(a, "{3}"), f = st(a, "{4}"), m = st(a, "{6}"), g = st(a, "{1,2}"), C = st(a, "{1,3}"), T = st(a, "{1,6}"), I = st(a, "{1,9}"), L = st(a, "{2,4}"), H = st(a, "{4,6}"), O = (B) => ({ regex: RegExp(SC(B.val)), deser: ([Ue]) => Ue, literal: !0 }), Se = ((B) => {
    if (i.literal)
      return O(B);
    switch (B.val) {
      case "G":
        return lt(a.eras("short", !1), 0);
      case "GG":
        return lt(a.eras("long", !1), 0);
      case "y":
        return J(T);
      case "yy":
        return J(L, co);
      case "yyyy":
        return J(f);
      case "yyyyy":
        return J(H);
      case "yyyyyy":
        return J(m);
      case "M":
        return J(g);
      case "MM":
        return J(s);
      case "MMM":
        return lt(a.months("short", !0, !1), 1);
      case "MMMM":
        return lt(a.months("long", !0, !1), 1);
      case "L":
        return J(g);
      case "LL":
        return J(s);
      case "LLL":
        return lt(a.months("short", !1, !1), 1);
      case "LLLL":
        return lt(a.months("long", !1, !1), 1);
      case "d":
        return J(g);
      case "dd":
        return J(s);
      case "o":
        return J(C);
      case "ooo":
        return J(d);
      case "HH":
        return J(s);
      case "H":
        return J(g);
      case "hh":
        return J(s);
      case "h":
        return J(g);
      case "mm":
        return J(s);
      case "m":
        return J(g);
      case "q":
        return J(g);
      case "qq":
        return J(s);
      case "s":
        return J(g);
      case "ss":
        return J(s);
      case "S":
        return J(C);
      case "SSS":
        return J(d);
      case "u":
        return eo(I);
      case "uu":
        return eo(g);
      case "uuu":
        return J(r);
      case "a":
        return lt(a.meridiems(), 0);
      case "kkkk":
        return J(f);
      case "kk":
        return J(L, co);
      case "W":
        return J(g);
      case "WW":
        return J(s);
      case "E":
      case "c":
        return J(r);
      case "EEE":
        return lt(a.weekdays("short", !1, !1), 1);
      case "EEEE":
        return lt(a.weekdays("long", !1, !1), 1);
      case "ccc":
        return lt(a.weekdays("short", !0, !1), 1);
      case "cccc":
        return lt(a.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Cd(new RegExp(`([+-]${g.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return Cd(new RegExp(`([+-]${g.source})(${s.source})?`), 2);
      case "z":
        return eo(/[a-z_+-/]{1,256}?/i);
      default:
        return O(B);
    }
  })(i) || {
    invalidReason: bC
  };
  return Se.token = i, Se;
}
const AC = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function TC(i, a, r) {
  const { type: s, value: d } = i;
  if (s === "literal")
    return {
      literal: !0,
      val: d
    };
  const f = r[s];
  let m = AC[s];
  if (typeof m == "object" && (m = m[f]), m)
    return {
      literal: !1,
      val: m
    };
}
function _C(i) {
  return [`^${i.map((r) => r.regex).reduce((r, s) => `${r}(${s.source})`, "")}$`, i];
}
function EC(i, a, r) {
  const s = i.match(a);
  if (s) {
    const d = {};
    let f = 1;
    for (const m in r)
      if (Ea(r, m)) {
        const g = r[m], C = g.groups ? g.groups + 1 : 1;
        !g.literal && g.token && (d[g.token.val[0]] = g.deser(s.slice(f, f + C))), f += C;
      }
    return [s, d];
  } else
    return [s, {}];
}
function DC(i) {
  const a = (f) => {
    switch (f) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let r = null, s;
  return G(i.z) || (r = Nt.create(i.z)), G(i.Z) || (r || (r = new _e(i.Z)), s = i.Z), G(i.q) || (i.M = (i.q - 1) * 3 + 1), G(i.h) || (i.h < 12 && i.a === 1 ? i.h += 12 : i.h === 12 && i.a === 0 && (i.h = 0)), i.G === 0 && i.y && (i.y = -i.y), G(i.u) || (i.S = So(i.u)), [Object.keys(i).reduce((f, m) => {
    const g = a(m);
    return g && (f[g] = i[m]), f;
  }, {}), r, s];
}
let to = null;
function kC() {
  return to || (to = q.fromMillis(1555555555555)), to;
}
function NC(i, a) {
  if (i.literal)
    return i;
  const r = Ie.macroTokenToFormatOpts(i.val);
  if (!r)
    return i;
  const f = Ie.create(a, r).formatDateTimeParts(kC()).map((m) => TC(m, a, r));
  return f.includes(void 0) ? i : f;
}
function IC(i, a) {
  return Array.prototype.concat(...i.map((r) => NC(r, a)));
}
function Au(i, a, r) {
  const s = IC(Ie.parseFormat(r), i), d = s.map((m) => wC(m, i)), f = d.find((m) => m.invalidReason);
  if (f)
    return { input: a, tokens: s, invalidReason: f.invalidReason };
  {
    const [m, g] = _C(d), C = RegExp(m, "i"), [T, I] = EC(a, C, g), [L, H, O] = I ? DC(I) : [null, null, void 0];
    if (Ea(I, "a") && Ea(I, "H"))
      throw new un(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: a, tokens: s, regex: C, rawMatches: T, matches: I, result: L, zone: H, specificOffset: O };
  }
}
function OC(i, a, r) {
  const { result: s, zone: d, specificOffset: f, invalidReason: m } = Au(i, a, r);
  return [s, d, f, m];
}
const Tu = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], _u = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function je(i, a) {
  return new dt(
    "unit out of range",
    `you specified ${a} (of type ${typeof a}) as a ${i}, which is invalid`
  );
}
function Eu(i, a, r) {
  const s = new Date(Date.UTC(i, a - 1, r));
  i < 100 && i >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
  const d = s.getUTCDay();
  return d === 0 ? 7 : d;
}
function Du(i, a, r) {
  return r + (pn(i) ? _u : Tu)[a - 1];
}
function ku(i, a) {
  const r = pn(i) ? _u : Tu, s = r.findIndex((f) => f < a), d = a - r[s];
  return { month: s + 1, day: d };
}
function go(i) {
  const { year: a, month: r, day: s } = i, d = Du(a, r, s), f = Eu(a, r, s);
  let m = Math.floor((d - f + 10) / 7), g;
  return m < 1 ? (g = a - 1, m = _r(g)) : m > _r(a) ? (g = a + 1, m = 1) : g = a, { weekYear: g, weekNumber: m, weekday: f, ...Nr(i) };
}
function Sd(i) {
  const { weekYear: a, weekNumber: r, weekday: s } = i, d = Eu(a, 1, 4), f = mn(a);
  let m = r * 7 + s - d - 3, g;
  m < 1 ? (g = a - 1, m += mn(g)) : m > f ? (g = a + 1, m -= mn(a)) : g = a;
  const { month: C, day: T } = ku(g, m);
  return { year: g, month: C, day: T, ...Nr(i) };
}
function ao(i) {
  const { year: a, month: r, day: s } = i, d = Du(a, r, s);
  return { year: a, ordinal: d, ...Nr(i) };
}
function wd(i) {
  const { year: a, ordinal: r } = i, { month: s, day: d } = ku(a, r);
  return { year: a, month: s, day: d, ...Nr(i) };
}
function LC(i) {
  const a = Dr(i.weekYear), r = kt(i.weekNumber, 1, _r(i.weekYear)), s = kt(i.weekday, 1, 7);
  return a ? r ? s ? !1 : je("weekday", i.weekday) : je("week", i.week) : je("weekYear", i.weekYear);
}
function xC(i) {
  const a = Dr(i.year), r = kt(i.ordinal, 1, mn(i.year));
  return a ? r ? !1 : je("ordinal", i.ordinal) : je("year", i.year);
}
function Nu(i) {
  const a = Dr(i.year), r = kt(i.month, 1, 12), s = kt(i.day, 1, Tr(i.year, i.month));
  return a ? r ? s ? !1 : je("day", i.day) : je("month", i.month) : je("year", i.year);
}
function Iu(i) {
  const { hour: a, minute: r, second: s, millisecond: d } = i, f = kt(a, 0, 23) || a === 24 && r === 0 && s === 0 && d === 0, m = kt(r, 0, 59), g = kt(s, 0, 59), C = kt(d, 0, 999);
  return f ? m ? g ? C ? !1 : je("millisecond", d) : je("second", s) : je("minute", r) : je("hour", a);
}
const no = "Invalid DateTime", Ad = 864e13;
function vr(i) {
  return new dt("unsupported zone", `the zone "${i.name}" is not supported`);
}
function ro(i) {
  return i.weekData === null && (i.weekData = go(i.c)), i.weekData;
}
function on(i, a) {
  const r = {
    ts: i.ts,
    zone: i.zone,
    c: i.c,
    o: i.o,
    loc: i.loc,
    invalid: i.invalid
  };
  return new q({ ...r, ...a, old: r });
}
function Ou(i, a, r) {
  let s = i - a * 60 * 1e3;
  const d = r.offset(s);
  if (a === d)
    return [s, a];
  s -= (d - a) * 60 * 1e3;
  const f = r.offset(s);
  return d === f ? [s, d] : [i - Math.min(d, f) * 60 * 1e3, Math.max(d, f)];
}
function Td(i, a) {
  i += a * 60 * 1e3;
  const r = new Date(i);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds()
  };
}
function Ar(i, a, r) {
  return Ou(Ao(i), a, r);
}
function _d(i, a) {
  const r = i.o, s = i.c.year + Math.trunc(a.years), d = i.c.month + Math.trunc(a.months) + Math.trunc(a.quarters) * 3, f = {
    ...i.c,
    year: s,
    month: d,
    day: Math.min(i.c.day, Tr(s, d)) + Math.trunc(a.days) + Math.trunc(a.weeks) * 7
  }, m = Z.fromObject({
    years: a.years - Math.trunc(a.years),
    quarters: a.quarters - Math.trunc(a.quarters),
    months: a.months - Math.trunc(a.months),
    weeks: a.weeks - Math.trunc(a.weeks),
    days: a.days - Math.trunc(a.days),
    hours: a.hours,
    minutes: a.minutes,
    seconds: a.seconds,
    milliseconds: a.milliseconds
  }).as("milliseconds"), g = Ao(f);
  let [C, T] = Ou(g, r, i.zone);
  return m !== 0 && (C += m, T = i.zone.offset(C)), { ts: C, o: T };
}
function sn(i, a, r, s, d, f) {
  const { setZone: m, zone: g } = r;
  if (i && Object.keys(i).length !== 0) {
    const C = a || g, T = q.fromObject(i, {
      ...r,
      zone: C,
      specificOffset: f
    });
    return m ? T : T.setZone(g);
  } else
    return q.invalid(
      new dt("unparsable", `the input "${d}" can't be parsed as ${s}`)
    );
}
function br(i, a, r = !0) {
  return i.isValid ? Ie.create(ie.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(i, a) : null;
}
function io(i, a) {
  const r = i.c.year > 9999 || i.c.year < 0;
  let s = "";
  return r && i.c.year >= 0 && (s += "+"), s += ce(i.c.year, r ? 6 : 4), a ? (s += "-", s += ce(i.c.month), s += "-", s += ce(i.c.day)) : (s += ce(i.c.month), s += ce(i.c.day)), s;
}
function Ed(i, a, r, s, d, f) {
  let m = ce(i.c.hour);
  return a ? (m += ":", m += ce(i.c.minute), (i.c.second !== 0 || !r) && (m += ":")) : m += ce(i.c.minute), (i.c.second !== 0 || !r) && (m += ce(i.c.second), (i.c.millisecond !== 0 || !s) && (m += ".", m += ce(i.c.millisecond, 3))), d && (i.isOffsetFixed && i.offset === 0 && !f ? m += "Z" : i.o < 0 ? (m += "-", m += ce(Math.trunc(-i.o / 60)), m += ":", m += ce(Math.trunc(-i.o % 60))) : (m += "+", m += ce(Math.trunc(i.o / 60)), m += ":", m += ce(Math.trunc(i.o % 60)))), f && (m += "[" + i.zone.ianaName + "]"), m;
}
const Lu = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, RC = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, $C = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, xu = ["year", "month", "day", "hour", "minute", "second", "millisecond"], MC = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], PC = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Dd(i) {
  const a = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[i.toLowerCase()];
  if (!a)
    throw new Pd(i);
  return a;
}
function kd(i, a) {
  const r = Vt(a.zone, ue.defaultZone), s = ie.fromObject(a), d = ue.now();
  let f, m;
  if (G(i.year))
    f = d;
  else {
    for (const T of xu)
      G(i[T]) && (i[T] = Lu[T]);
    const g = Nu(i) || Iu(i);
    if (g)
      return q.invalid(g);
    const C = r.offset(d);
    [f, m] = Ar(i, C, r);
  }
  return new q({ ts: f, zone: r, loc: s, o: m });
}
function Nd(i, a, r) {
  const s = G(r.round) ? !0 : r.round, d = (m, g) => (m = wo(m, s || r.calendary ? 0 : 2, !0), a.loc.clone(r).relFormatter(r).format(m, g)), f = (m) => r.calendary ? a.hasSame(i, m) ? 0 : a.startOf(m).diff(i.startOf(m), m).get(m) : a.diff(i, m).get(m);
  if (r.unit)
    return d(f(r.unit), r.unit);
  for (const m of r.units) {
    const g = f(m);
    if (Math.abs(g) >= 1)
      return d(g, m);
  }
  return d(i > a ? -0 : 0, r.units[r.units.length - 1]);
}
function Id(i) {
  let a = {}, r;
  return i.length > 0 && typeof i[i.length - 1] == "object" ? (a = i[i.length - 1], r = Array.from(i).slice(0, i.length - 1)) : r = Array.from(i), [a, r];
}
class q {
  constructor(a) {
    const r = a.zone || ue.defaultZone;
    let s = a.invalid || (Number.isNaN(a.ts) ? new dt("invalid input") : null) || (r.isValid ? null : vr(r));
    this.ts = G(a.ts) ? ue.now() : a.ts;
    let d = null, f = null;
    if (!s)
      if (a.old && a.old.ts === this.ts && a.old.zone.equals(r))
        [d, f] = [a.old.c, a.old.o];
      else {
        const g = r.offset(this.ts);
        d = Td(this.ts, g), s = Number.isNaN(d.year) ? new dt("invalid input") : null, d = s ? null : d, f = s ? null : g;
      }
    this._zone = r, this.loc = a.loc || ie.create(), this.invalid = s, this.weekData = null, this.c = d, this.o = f, this.isLuxonDateTime = !0;
  }
  static now() {
    return new q({});
  }
  static local() {
    const [a, r] = Id(arguments), [s, d, f, m, g, C, T] = r;
    return kd({ year: s, month: d, day: f, hour: m, minute: g, second: C, millisecond: T }, a);
  }
  static utc() {
    const [a, r] = Id(arguments), [s, d, f, m, g, C, T] = r;
    return a.zone = _e.utcInstance, kd({ year: s, month: d, day: f, hour: m, minute: g, second: C, millisecond: T }, a);
  }
  static fromJSDate(a, r = {}) {
    const s = Hb(a) ? a.valueOf() : NaN;
    if (Number.isNaN(s))
      return q.invalid("invalid input");
    const d = Vt(r.zone, ue.defaultZone);
    return d.isValid ? new q({
      ts: s,
      zone: d,
      loc: ie.fromObject(r)
    }) : q.invalid(vr(d));
  }
  static fromMillis(a, r = {}) {
    if (ia(a))
      return a < -Ad || a > Ad ? q.invalid("Timestamp out of range") : new q({
        ts: a,
        zone: Vt(r.zone, ue.defaultZone),
        loc: ie.fromObject(r)
      });
    throw new Xe(
      `fromMillis requires a numerical input, but received a ${typeof a} with value ${a}`
    );
  }
  static fromSeconds(a, r = {}) {
    if (ia(a))
      return new q({
        ts: a * 1e3,
        zone: Vt(r.zone, ue.defaultZone),
        loc: ie.fromObject(r)
      });
    throw new Xe("fromSeconds requires a numerical input");
  }
  static fromObject(a, r = {}) {
    a = a || {};
    const s = Vt(r.zone, ue.defaultZone);
    if (!s.isValid)
      return q.invalid(vr(s));
    const d = ue.now(), f = G(r.specificOffset) ? s.offset(d) : r.specificOffset, m = Er(a, Dd), g = !G(m.ordinal), C = !G(m.year), T = !G(m.month) || !G(m.day), I = C || T, L = m.weekYear || m.weekNumber, H = ie.fromObject(r);
    if ((I || g) && L)
      throw new un(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (T && g)
      throw new un("Can't mix ordinal dates with month/day");
    const O = L || m.weekday && !I;
    let Y, Se, B = Td(d, f);
    O ? (Y = MC, Se = RC, B = go(B)) : g ? (Y = PC, Se = $C, B = ao(B)) : (Y = xu, Se = Lu);
    let Ue = !1;
    for (const et of Y) {
      const xa = m[et];
      G(xa) ? Ue ? m[et] = Se[et] : m[et] = B[et] : Ue = !0;
    }
    const Cn = O ? LC(m) : g ? xC(m) : Nu(m), Le = Cn || Iu(m);
    if (Le)
      return q.invalid(Le);
    const It = O ? Sd(m) : g ? wd(m) : m, [Be, Ot] = Ar(It, f, s), xe = new q({
      ts: Be,
      zone: s,
      o: Ot,
      loc: H
    });
    return m.weekday && I && a.weekday !== xe.weekday ? q.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${m.weekday} and a date of ${xe.toISO()}`
    ) : xe;
  }
  static fromISO(a, r = {}) {
    const [s, d] = Jy(a);
    return sn(s, d, r, "ISO 8601", a);
  }
  static fromRFC2822(a, r = {}) {
    const [s, d] = Xy(a);
    return sn(s, d, r, "RFC 2822", a);
  }
  static fromHTTP(a, r = {}) {
    const [s, d] = jy(a);
    return sn(s, d, r, "HTTP", r);
  }
  static fromFormat(a, r, s = {}) {
    if (G(a) || G(r))
      throw new Xe("fromFormat requires an input string and a format");
    const { locale: d = null, numberingSystem: f = null } = s, m = ie.fromOpts({
      locale: d,
      numberingSystem: f,
      defaultToEN: !0
    }), [g, C, T, I] = OC(m, a, r);
    return I ? q.invalid(I) : sn(g, C, s, `format ${r}`, a, T);
  }
  static fromString(a, r, s = {}) {
    return q.fromFormat(a, r, s);
  }
  static fromSQL(a, r = {}) {
    const [s, d] = oC(a);
    return sn(s, d, r, "SQL", a);
  }
  static invalid(a, r = null) {
    if (!a)
      throw new Xe("need to specify a reason the DateTime is invalid");
    const s = a instanceof dt ? a : new dt(a, r);
    if (ue.throwOnInvalid)
      throw new qb(s);
    return new q({ invalid: s });
  }
  static isDateTime(a) {
    return a && a.isLuxonDateTime || !1;
  }
  get(a) {
    return this[a];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? ro(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? ro(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? ro(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? ao(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? gr.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? gr.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? gr.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? gr.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  get isInLeapYear() {
    return pn(this.year);
  }
  get daysInMonth() {
    return Tr(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? mn(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? _r(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(a = {}) {
    const { locale: r, numberingSystem: s, calendar: d } = Ie.create(
      this.loc.clone(a),
      a
    ).resolvedOptions(this);
    return { locale: r, numberingSystem: s, outputCalendar: d };
  }
  toUTC(a = 0, r = {}) {
    return this.setZone(_e.instance(a), r);
  }
  toLocal() {
    return this.setZone(ue.defaultZone);
  }
  setZone(a, { keepLocalTime: r = !1, keepCalendarTime: s = !1 } = {}) {
    if (a = Vt(a, ue.defaultZone), a.equals(this.zone))
      return this;
    if (a.isValid) {
      let d = this.ts;
      if (r || s) {
        const f = a.offset(this.ts), m = this.toObject();
        [d] = Ar(m, f, a);
      }
      return on(this, { ts: d, zone: a });
    } else
      return q.invalid(vr(a));
  }
  reconfigure({ locale: a, numberingSystem: r, outputCalendar: s } = {}) {
    const d = this.loc.clone({ locale: a, numberingSystem: r, outputCalendar: s });
    return on(this, { loc: d });
  }
  setLocale(a) {
    return this.reconfigure({ locale: a });
  }
  set(a) {
    if (!this.isValid)
      return this;
    const r = Er(a, Dd), s = !G(r.weekYear) || !G(r.weekNumber) || !G(r.weekday), d = !G(r.ordinal), f = !G(r.year), m = !G(r.month) || !G(r.day), g = f || m, C = r.weekYear || r.weekNumber;
    if ((g || d) && C)
      throw new un(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (m && d)
      throw new un("Can't mix ordinal dates with month/day");
    let T;
    s ? T = Sd({ ...go(this.c), ...r }) : G(r.ordinal) ? (T = { ...this.toObject(), ...r }, G(r.day) && (T.day = Math.min(Tr(T.year, T.month), T.day))) : T = wd({ ...ao(this.c), ...r });
    const [I, L] = Ar(T, this.o, this.zone);
    return on(this, { ts: I, o: L });
  }
  plus(a) {
    if (!this.isValid)
      return this;
    const r = Z.fromDurationLike(a);
    return on(this, _d(this, r));
  }
  minus(a) {
    if (!this.isValid)
      return this;
    const r = Z.fromDurationLike(a).negate();
    return on(this, _d(this, r));
  }
  startOf(a) {
    if (!this.isValid)
      return this;
    const r = {}, s = Z.normalizeUnit(a);
    switch (s) {
      case "years":
        r.month = 1;
      case "quarters":
      case "months":
        r.day = 1;
      case "weeks":
      case "days":
        r.hour = 0;
      case "hours":
        r.minute = 0;
      case "minutes":
        r.second = 0;
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (s === "weeks" && (r.weekday = 1), s === "quarters") {
      const d = Math.ceil(this.month / 3);
      r.month = (d - 1) * 3 + 1;
    }
    return this.set(r);
  }
  endOf(a) {
    return this.isValid ? this.plus({ [a]: 1 }).startOf(a).minus(1) : this;
  }
  toFormat(a, r = {}) {
    return this.isValid ? Ie.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, a) : no;
  }
  toLocaleString(a = uo, r = {}) {
    return this.isValid ? Ie.create(this.loc.clone(r), a).formatDateTime(this) : no;
  }
  toLocaleParts(a = {}) {
    return this.isValid ? Ie.create(this.loc.clone(a), a).formatDateTimeParts(this) : [];
  }
  toISO({
    format: a = "extended",
    suppressSeconds: r = !1,
    suppressMilliseconds: s = !1,
    includeOffset: d = !0,
    extendedZone: f = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const m = a === "extended";
    let g = io(this, m);
    return g += "T", g += Ed(this, m, r, s, d, f), g;
  }
  toISODate({ format: a = "extended" } = {}) {
    return this.isValid ? io(this, a === "extended") : null;
  }
  toISOWeekDate() {
    return br(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: a = !1,
    suppressSeconds: r = !1,
    includeOffset: s = !0,
    includePrefix: d = !1,
    extendedZone: f = !1,
    format: m = "extended"
  } = {}) {
    return this.isValid ? (d ? "T" : "") + Ed(
      this,
      m === "extended",
      r,
      a,
      s,
      f
    ) : null;
  }
  toRFC2822() {
    return br(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return br(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? io(this, !0) : null;
  }
  toSQLTime({ includeOffset: a = !0, includeZone: r = !1, includeOffsetSpace: s = !0 } = {}) {
    let d = "HH:mm:ss.SSS";
    return (r || a) && (s && (d += " "), r ? d += "z" : a && (d += "ZZ")), br(this, d, !0);
  }
  toSQL(a = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(a)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : no;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(a = {}) {
    if (!this.isValid)
      return {};
    const r = { ...this.c };
    return a.includeConfig && (r.outputCalendar = this.outputCalendar, r.numberingSystem = this.loc.numberingSystem, r.locale = this.loc.locale), r;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(a, r = "milliseconds", s = {}) {
    if (!this.isValid || !a.isValid)
      return Z.invalid("created by diffing an invalid DateTime");
    const d = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, f = Qb(r).map(Z.normalizeUnit), m = a.valueOf() > this.valueOf(), g = m ? this : a, C = m ? a : this, T = hC(g, C, f, d);
    return m ? T.negate() : T;
  }
  diffNow(a = "milliseconds", r = {}) {
    return this.diff(q.now(), a, r);
  }
  until(a) {
    return this.isValid ? se.fromDateTimes(this, a) : this;
  }
  hasSame(a, r) {
    if (!this.isValid)
      return !1;
    const s = a.valueOf(), d = this.setZone(a.zone, { keepLocalTime: !0 });
    return d.startOf(r) <= s && s <= d.endOf(r);
  }
  equals(a) {
    return this.isValid && a.isValid && this.valueOf() === a.valueOf() && this.zone.equals(a.zone) && this.loc.equals(a.loc);
  }
  toRelative(a = {}) {
    if (!this.isValid)
      return null;
    const r = a.base || q.fromObject({}, { zone: this.zone }), s = a.padding ? this < r ? -a.padding : a.padding : 0;
    let d = ["years", "months", "days", "hours", "minutes", "seconds"], f = a.unit;
    return Array.isArray(a.unit) && (d = a.unit, f = void 0), Nd(r, this.plus(s), {
      ...a,
      numeric: "always",
      units: d,
      unit: f
    });
  }
  toRelativeCalendar(a = {}) {
    return this.isValid ? Nd(a.base || q.fromObject({}, { zone: this.zone }), this, {
      ...a,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...a) {
    if (!a.every(q.isDateTime))
      throw new Xe("min requires all arguments be DateTimes");
    return sd(a, (r) => r.valueOf(), Math.min);
  }
  static max(...a) {
    if (!a.every(q.isDateTime))
      throw new Xe("max requires all arguments be DateTimes");
    return sd(a, (r) => r.valueOf(), Math.max);
  }
  static fromFormatExplain(a, r, s = {}) {
    const { locale: d = null, numberingSystem: f = null } = s, m = ie.fromOpts({
      locale: d,
      numberingSystem: f,
      defaultToEN: !0
    });
    return Au(m, a, r);
  }
  static fromStringExplain(a, r, s = {}) {
    return q.fromFormatExplain(a, r, s);
  }
  static get DATE_SHORT() {
    return uo;
  }
  static get DATE_MED() {
    return Fd;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return Bb;
  }
  static get DATE_FULL() {
    return qd;
  }
  static get DATE_HUGE() {
    return zd;
  }
  static get TIME_SIMPLE() {
    return Ud;
  }
  static get TIME_WITH_SECONDS() {
    return Bd;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return Wd;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return Vd;
  }
  static get TIME_24_SIMPLE() {
    return Hd;
  }
  static get TIME_24_WITH_SECONDS() {
    return Qd;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Gd;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return Yd;
  }
  static get DATETIME_SHORT() {
    return Zd;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Kd;
  }
  static get DATETIME_MED() {
    return Jd;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return Xd;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Wb;
  }
  static get DATETIME_FULL() {
    return jd;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return eu;
  }
  static get DATETIME_HUGE() {
    return tu;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return au;
  }
}
function ln(i) {
  if (q.isDateTime(i))
    return i;
  if (i && i.valueOf && ia(i.valueOf()))
    return q.fromJSDate(i);
  if (i && typeof i == "object")
    return q.fromObject(i);
  throw new Xe(
    `Unknown datetime argument: ${i}, of type ${typeof i}`
  );
}
var Oe = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(i, a) {
  (function() {
    var r, s = "4.17.21", d = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", m = "Expected a function", g = "Invalid `variable` option passed into `_.template`", C = "__lodash_hash_undefined__", T = 500, I = "__lodash_placeholder__", L = 1, H = 2, O = 4, Y = 1, Se = 2, B = 1, Ue = 2, Cn = 4, Le = 8, It = 16, Be = 32, Ot = 64, xe = 128, et = 256, xa = 512, Fu = 30, qu = "...", zu = 800, Uu = 16, No = 1, Bu = 2, Wu = 3, Qt = 1 / 0, Lt = 9007199254740991, Vu = 17976931348623157e292, Sn = 0 / 0, ct = 4294967295, Hu = ct - 1, Qu = ct >>> 1, Gu = [
      ["ary", xe],
      ["bind", B],
      ["bindKey", Ue],
      ["curry", Le],
      ["curryRight", It],
      ["flip", xa],
      ["partial", Be],
      ["partialRight", Ot],
      ["rearg", et]
    ], la = "[object Arguments]", wn = "[object Array]", Yu = "[object AsyncFunction]", Ra = "[object Boolean]", $a = "[object Date]", Zu = "[object DOMException]", An = "[object Error]", Tn = "[object Function]", Io = "[object GeneratorFunction]", tt = "[object Map]", Ma = "[object Number]", Ku = "[object Null]", bt = "[object Object]", Oo = "[object Promise]", Ju = "[object Proxy]", Pa = "[object RegExp]", at = "[object Set]", Fa = "[object String]", _n = "[object Symbol]", Xu = "[object Undefined]", qa = "[object WeakMap]", ju = "[object WeakSet]", za = "[object ArrayBuffer]", da = "[object DataView]", Or = "[object Float32Array]", Lr = "[object Float64Array]", xr = "[object Int8Array]", Rr = "[object Int16Array]", $r = "[object Int32Array]", Mr = "[object Uint8Array]", Pr = "[object Uint8ClampedArray]", Fr = "[object Uint16Array]", qr = "[object Uint32Array]", ec = /\b__p \+= '';/g, tc = /\b(__p \+=) '' \+/g, ac = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Lo = /&(?:amp|lt|gt|quot|#39);/g, xo = /[&<>"']/g, nc = RegExp(Lo.source), rc = RegExp(xo.source), ic = /<%-([\s\S]+?)%>/g, oc = /<%([\s\S]+?)%>/g, Ro = /<%=([\s\S]+?)%>/g, sc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lc = /^\w*$/, dc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zr = /[\\^$.*+?()[\]{}|]/g, uc = RegExp(zr.source), Ur = /^\s+/, cc = /\s/, mc = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, fc = /\{\n\/\* \[wrapped with (.+)\] \*/, pc = /,? & /, hc = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, gc = /[()=,{}\[\]\/\s]/, vc = /\\(\\)?/g, bc = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, $o = /\w*$/, yc = /^[-+]0x[0-9a-f]+$/i, Cc = /^0b[01]+$/i, Sc = /^\[object .+?Constructor\]$/, wc = /^0o[0-7]+$/i, Ac = /^(?:0|[1-9]\d*)$/, Tc = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, En = /($^)/, _c = /['\n\r\u2028\u2029\\]/g, Dn = "\\ud800-\\udfff", Ec = "\\u0300-\\u036f", Dc = "\\ufe20-\\ufe2f", kc = "\\u20d0-\\u20ff", Mo = Ec + Dc + kc, Po = "\\u2700-\\u27bf", Fo = "a-z\\xdf-\\xf6\\xf8-\\xff", Nc = "\\xac\\xb1\\xd7\\xf7", Ic = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Oc = "\\u2000-\\u206f", Lc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qo = "A-Z\\xc0-\\xd6\\xd8-\\xde", zo = "\\ufe0e\\ufe0f", Uo = Nc + Ic + Oc + Lc, Br = "['\u2019]", xc = "[" + Dn + "]", Bo = "[" + Uo + "]", kn = "[" + Mo + "]", Wo = "\\d+", Rc = "[" + Po + "]", Vo = "[" + Fo + "]", Ho = "[^" + Dn + Uo + Wo + Po + Fo + qo + "]", Wr = "\\ud83c[\\udffb-\\udfff]", $c = "(?:" + kn + "|" + Wr + ")", Qo = "[^" + Dn + "]", Vr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Hr = "[\\ud800-\\udbff][\\udc00-\\udfff]", ua = "[" + qo + "]", Go = "\\u200d", Yo = "(?:" + Vo + "|" + Ho + ")", Mc = "(?:" + ua + "|" + Ho + ")", Zo = "(?:" + Br + "(?:d|ll|m|re|s|t|ve))?", Ko = "(?:" + Br + "(?:D|LL|M|RE|S|T|VE))?", Jo = $c + "?", Xo = "[" + zo + "]?", Pc = "(?:" + Go + "(?:" + [Qo, Vr, Hr].join("|") + ")" + Xo + Jo + ")*", Fc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", qc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", jo = Xo + Jo + Pc, zc = "(?:" + [Rc, Vr, Hr].join("|") + ")" + jo, Uc = "(?:" + [Qo + kn + "?", kn, Vr, Hr, xc].join("|") + ")", Bc = RegExp(Br, "g"), Wc = RegExp(kn, "g"), Qr = RegExp(Wr + "(?=" + Wr + ")|" + Uc + jo, "g"), Vc = RegExp([
      ua + "?" + Vo + "+" + Zo + "(?=" + [Bo, ua, "$"].join("|") + ")",
      Mc + "+" + Ko + "(?=" + [Bo, ua + Yo, "$"].join("|") + ")",
      ua + "?" + Yo + "+" + Zo,
      ua + "+" + Ko,
      qc,
      Fc,
      Wo,
      zc
    ].join("|"), "g"), Hc = RegExp("[" + Go + Dn + Mo + zo + "]"), Qc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Gc = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Yc = -1, ae = {};
    ae[Or] = ae[Lr] = ae[xr] = ae[Rr] = ae[$r] = ae[Mr] = ae[Pr] = ae[Fr] = ae[qr] = !0, ae[la] = ae[wn] = ae[za] = ae[Ra] = ae[da] = ae[$a] = ae[An] = ae[Tn] = ae[tt] = ae[Ma] = ae[bt] = ae[Pa] = ae[at] = ae[Fa] = ae[qa] = !1;
    var te = {};
    te[la] = te[wn] = te[za] = te[da] = te[Ra] = te[$a] = te[Or] = te[Lr] = te[xr] = te[Rr] = te[$r] = te[tt] = te[Ma] = te[bt] = te[Pa] = te[at] = te[Fa] = te[_n] = te[Mr] = te[Pr] = te[Fr] = te[qr] = !0, te[An] = te[Tn] = te[qa] = !1;
    var Zc = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, Kc = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Jc = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Xc = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, jc = parseFloat, em = parseInt, es = typeof nn == "object" && nn && nn.Object === Object && nn, tm = typeof self == "object" && self && self.Object === Object && self, ge = es || tm || Function("return this")(), Gr = a && !a.nodeType && a, Gt = Gr && !0 && i && !i.nodeType && i, ts = Gt && Gt.exports === Gr, Yr = ts && es.process, We = function() {
      try {
        var v = Gt && Gt.require && Gt.require("util").types;
        return v || Yr && Yr.binding && Yr.binding("util");
      } catch {
      }
    }(), as = We && We.isArrayBuffer, ns = We && We.isDate, rs = We && We.isMap, is = We && We.isRegExp, os = We && We.isSet, ss = We && We.isTypedArray;
    function Re(v, S, y) {
      switch (y.length) {
        case 0:
          return v.call(S);
        case 1:
          return v.call(S, y[0]);
        case 2:
          return v.call(S, y[0], y[1]);
        case 3:
          return v.call(S, y[0], y[1], y[2]);
      }
      return v.apply(S, y);
    }
    function am(v, S, y, k) {
      for (var M = -1, K = v == null ? 0 : v.length; ++M < K; ) {
        var me = v[M];
        S(k, me, y(me), v);
      }
      return k;
    }
    function Ve(v, S) {
      for (var y = -1, k = v == null ? 0 : v.length; ++y < k && S(v[y], y, v) !== !1; )
        ;
      return v;
    }
    function nm(v, S) {
      for (var y = v == null ? 0 : v.length; y-- && S(v[y], y, v) !== !1; )
        ;
      return v;
    }
    function ls(v, S) {
      for (var y = -1, k = v == null ? 0 : v.length; ++y < k; )
        if (!S(v[y], y, v))
          return !1;
      return !0;
    }
    function xt(v, S) {
      for (var y = -1, k = v == null ? 0 : v.length, M = 0, K = []; ++y < k; ) {
        var me = v[y];
        S(me, y, v) && (K[M++] = me);
      }
      return K;
    }
    function Nn(v, S) {
      var y = v == null ? 0 : v.length;
      return !!y && ca(v, S, 0) > -1;
    }
    function Zr(v, S, y) {
      for (var k = -1, M = v == null ? 0 : v.length; ++k < M; )
        if (y(S, v[k]))
          return !0;
      return !1;
    }
    function ne(v, S) {
      for (var y = -1, k = v == null ? 0 : v.length, M = Array(k); ++y < k; )
        M[y] = S(v[y], y, v);
      return M;
    }
    function Rt(v, S) {
      for (var y = -1, k = S.length, M = v.length; ++y < k; )
        v[M + y] = S[y];
      return v;
    }
    function Kr(v, S, y, k) {
      var M = -1, K = v == null ? 0 : v.length;
      for (k && K && (y = v[++M]); ++M < K; )
        y = S(y, v[M], M, v);
      return y;
    }
    function rm(v, S, y, k) {
      var M = v == null ? 0 : v.length;
      for (k && M && (y = v[--M]); M--; )
        y = S(y, v[M], M, v);
      return y;
    }
    function Jr(v, S) {
      for (var y = -1, k = v == null ? 0 : v.length; ++y < k; )
        if (S(v[y], y, v))
          return !0;
      return !1;
    }
    var im = Xr("length");
    function om(v) {
      return v.split("");
    }
    function sm(v) {
      return v.match(hc) || [];
    }
    function ds(v, S, y) {
      var k;
      return y(v, function(M, K, me) {
        if (S(M, K, me))
          return k = K, !1;
      }), k;
    }
    function In(v, S, y, k) {
      for (var M = v.length, K = y + (k ? 1 : -1); k ? K-- : ++K < M; )
        if (S(v[K], K, v))
          return K;
      return -1;
    }
    function ca(v, S, y) {
      return S === S ? ym(v, S, y) : In(v, us, y);
    }
    function lm(v, S, y, k) {
      for (var M = y - 1, K = v.length; ++M < K; )
        if (k(v[M], S))
          return M;
      return -1;
    }
    function us(v) {
      return v !== v;
    }
    function cs(v, S) {
      var y = v == null ? 0 : v.length;
      return y ? ei(v, S) / y : Sn;
    }
    function Xr(v) {
      return function(S) {
        return S == null ? r : S[v];
      };
    }
    function jr(v) {
      return function(S) {
        return v == null ? r : v[S];
      };
    }
    function ms(v, S, y, k, M) {
      return M(v, function(K, me, ee) {
        y = k ? (k = !1, K) : S(y, K, me, ee);
      }), y;
    }
    function dm(v, S) {
      var y = v.length;
      for (v.sort(S); y--; )
        v[y] = v[y].value;
      return v;
    }
    function ei(v, S) {
      for (var y, k = -1, M = v.length; ++k < M; ) {
        var K = S(v[k]);
        K !== r && (y = y === r ? K : y + K);
      }
      return y;
    }
    function ti(v, S) {
      for (var y = -1, k = Array(v); ++y < v; )
        k[y] = S(y);
      return k;
    }
    function um(v, S) {
      return ne(S, function(y) {
        return [y, v[y]];
      });
    }
    function fs(v) {
      return v && v.slice(0, vs(v) + 1).replace(Ur, "");
    }
    function $e(v) {
      return function(S) {
        return v(S);
      };
    }
    function ai(v, S) {
      return ne(S, function(y) {
        return v[y];
      });
    }
    function Ua(v, S) {
      return v.has(S);
    }
    function ps(v, S) {
      for (var y = -1, k = v.length; ++y < k && ca(S, v[y], 0) > -1; )
        ;
      return y;
    }
    function hs(v, S) {
      for (var y = v.length; y-- && ca(S, v[y], 0) > -1; )
        ;
      return y;
    }
    function cm(v, S) {
      for (var y = v.length, k = 0; y--; )
        v[y] === S && ++k;
      return k;
    }
    var mm = jr(Zc), fm = jr(Kc);
    function pm(v) {
      return "\\" + Xc[v];
    }
    function hm(v, S) {
      return v == null ? r : v[S];
    }
    function ma(v) {
      return Hc.test(v);
    }
    function gm(v) {
      return Qc.test(v);
    }
    function vm(v) {
      for (var S, y = []; !(S = v.next()).done; )
        y.push(S.value);
      return y;
    }
    function ni(v) {
      var S = -1, y = Array(v.size);
      return v.forEach(function(k, M) {
        y[++S] = [M, k];
      }), y;
    }
    function gs(v, S) {
      return function(y) {
        return v(S(y));
      };
    }
    function $t(v, S) {
      for (var y = -1, k = v.length, M = 0, K = []; ++y < k; ) {
        var me = v[y];
        (me === S || me === I) && (v[y] = I, K[M++] = y);
      }
      return K;
    }
    function On(v) {
      var S = -1, y = Array(v.size);
      return v.forEach(function(k) {
        y[++S] = k;
      }), y;
    }
    function bm(v) {
      var S = -1, y = Array(v.size);
      return v.forEach(function(k) {
        y[++S] = [k, k];
      }), y;
    }
    function ym(v, S, y) {
      for (var k = y - 1, M = v.length; ++k < M; )
        if (v[k] === S)
          return k;
      return -1;
    }
    function Cm(v, S, y) {
      for (var k = y + 1; k--; )
        if (v[k] === S)
          return k;
      return k;
    }
    function fa(v) {
      return ma(v) ? wm(v) : im(v);
    }
    function nt(v) {
      return ma(v) ? Am(v) : om(v);
    }
    function vs(v) {
      for (var S = v.length; S-- && cc.test(v.charAt(S)); )
        ;
      return S;
    }
    var Sm = jr(Jc);
    function wm(v) {
      for (var S = Qr.lastIndex = 0; Qr.test(v); )
        ++S;
      return S;
    }
    function Am(v) {
      return v.match(Qr) || [];
    }
    function Tm(v) {
      return v.match(Vc) || [];
    }
    var _m = function v(S) {
      S = S == null ? ge : pa.defaults(ge.Object(), S, pa.pick(ge, Gc));
      var y = S.Array, k = S.Date, M = S.Error, K = S.Function, me = S.Math, ee = S.Object, ri = S.RegExp, Em = S.String, He = S.TypeError, Ln = y.prototype, Dm = K.prototype, ha = ee.prototype, xn = S["__core-js_shared__"], Rn = Dm.toString, j = ha.hasOwnProperty, km = 0, bs = function() {
        var e = /[^.]+$/.exec(xn && xn.keys && xn.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), $n = ha.toString, Nm = Rn.call(ee), Im = ge._, Om = ri(
        "^" + Rn.call(j).replace(zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Mn = ts ? S.Buffer : r, Mt = S.Symbol, Pn = S.Uint8Array, ys = Mn ? Mn.allocUnsafe : r, Fn = gs(ee.getPrototypeOf, ee), Cs = ee.create, Ss = ha.propertyIsEnumerable, qn = Ln.splice, ws = Mt ? Mt.isConcatSpreadable : r, Ba = Mt ? Mt.iterator : r, Yt = Mt ? Mt.toStringTag : r, zn = function() {
        try {
          var e = jt(ee, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Lm = S.clearTimeout !== ge.clearTimeout && S.clearTimeout, xm = k && k.now !== ge.Date.now && k.now, Rm = S.setTimeout !== ge.setTimeout && S.setTimeout, Un = me.ceil, Bn = me.floor, ii = ee.getOwnPropertySymbols, $m = Mn ? Mn.isBuffer : r, As = S.isFinite, Mm = Ln.join, Pm = gs(ee.keys, ee), fe = me.max, be = me.min, Fm = k.now, qm = S.parseInt, Ts = me.random, zm = Ln.reverse, oi = jt(S, "DataView"), Wa = jt(S, "Map"), si = jt(S, "Promise"), ga = jt(S, "Set"), Va = jt(S, "WeakMap"), Ha = jt(ee, "create"), Wn = Va && new Va(), va = {}, Um = ea(oi), Bm = ea(Wa), Wm = ea(si), Vm = ea(ga), Hm = ea(Va), Vn = Mt ? Mt.prototype : r, Qa = Vn ? Vn.valueOf : r, _s = Vn ? Vn.toString : r;
      function u(e) {
        if (oe(e) && !P(e) && !(e instanceof V)) {
          if (e instanceof Qe)
            return e;
          if (j.call(e, "__wrapped__"))
            return El(e);
        }
        return new Qe(e);
      }
      var ba = function() {
        function e() {
        }
        return function(t) {
          if (!re(t))
            return {};
          if (Cs)
            return Cs(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = r, n;
        };
      }();
      function Hn() {
      }
      function Qe(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        escape: ic,
        evaluate: oc,
        interpolate: Ro,
        variable: "",
        imports: {
          _: u
        }
      }, u.prototype = Hn.prototype, u.prototype.constructor = u, Qe.prototype = ba(Hn.prototype), Qe.prototype.constructor = Qe;
      function V(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ct, this.__views__ = [];
      }
      function Qm() {
        var e = new V(this.__wrapped__);
        return e.__actions__ = Ee(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ee(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ee(this.__views__), e;
      }
      function Gm() {
        if (this.__filtered__) {
          var e = new V(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Ym() {
        var e = this.__wrapped__.value(), t = this.__dir__, n = P(e), o = t < 0, l = n ? e.length : 0, c = sp(0, l, this.__views__), p = c.start, h = c.end, b = h - p, w = o ? h : p - 1, A = this.__iteratees__, _ = A.length, E = 0, N = be(b, this.__takeCount__);
        if (!n || !o && l == b && N == b)
          return Zs(e, this.__actions__);
        var R = [];
        e:
          for (; b-- && E < N; ) {
            w += t;
            for (var z = -1, $ = e[w]; ++z < _; ) {
              var W = A[z], Q = W.iteratee, Fe = W.type, Te = Q($);
              if (Fe == Bu)
                $ = Te;
              else if (!Te) {
                if (Fe == No)
                  continue e;
                break e;
              }
            }
            R[E++] = $;
          }
        return R;
      }
      V.prototype = ba(Hn.prototype), V.prototype.constructor = V;
      function Zt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function Zm() {
        this.__data__ = Ha ? Ha(null) : {}, this.size = 0;
      }
      function Km(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function Jm(e) {
        var t = this.__data__;
        if (Ha) {
          var n = t[e];
          return n === C ? r : n;
        }
        return j.call(t, e) ? t[e] : r;
      }
      function Xm(e) {
        var t = this.__data__;
        return Ha ? t[e] !== r : j.call(t, e);
      }
      function jm(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Ha && t === r ? C : t, this;
      }
      Zt.prototype.clear = Zm, Zt.prototype.delete = Km, Zt.prototype.get = Jm, Zt.prototype.has = Xm, Zt.prototype.set = jm;
      function yt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function ef() {
        this.__data__ = [], this.size = 0;
      }
      function tf(e) {
        var t = this.__data__, n = Qn(t, e);
        if (n < 0)
          return !1;
        var o = t.length - 1;
        return n == o ? t.pop() : qn.call(t, n, 1), --this.size, !0;
      }
      function af(e) {
        var t = this.__data__, n = Qn(t, e);
        return n < 0 ? r : t[n][1];
      }
      function nf(e) {
        return Qn(this.__data__, e) > -1;
      }
      function rf(e, t) {
        var n = this.__data__, o = Qn(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
      }
      yt.prototype.clear = ef, yt.prototype.delete = tf, yt.prototype.get = af, yt.prototype.has = nf, yt.prototype.set = rf;
      function Ct(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function of() {
        this.size = 0, this.__data__ = {
          hash: new Zt(),
          map: new (Wa || yt)(),
          string: new Zt()
        };
      }
      function sf(e) {
        var t = rr(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function lf(e) {
        return rr(this, e).get(e);
      }
      function df(e) {
        return rr(this, e).has(e);
      }
      function uf(e, t) {
        var n = rr(this, e), o = n.size;
        return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
      }
      Ct.prototype.clear = of, Ct.prototype.delete = sf, Ct.prototype.get = lf, Ct.prototype.has = df, Ct.prototype.set = uf;
      function Kt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.__data__ = new Ct(); ++t < n; )
          this.add(e[t]);
      }
      function cf(e) {
        return this.__data__.set(e, C), this;
      }
      function mf(e) {
        return this.__data__.has(e);
      }
      Kt.prototype.add = Kt.prototype.push = cf, Kt.prototype.has = mf;
      function rt(e) {
        var t = this.__data__ = new yt(e);
        this.size = t.size;
      }
      function ff() {
        this.__data__ = new yt(), this.size = 0;
      }
      function pf(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      function hf(e) {
        return this.__data__.get(e);
      }
      function gf(e) {
        return this.__data__.has(e);
      }
      function vf(e, t) {
        var n = this.__data__;
        if (n instanceof yt) {
          var o = n.__data__;
          if (!Wa || o.length < d - 1)
            return o.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new Ct(o);
        }
        return n.set(e, t), this.size = n.size, this;
      }
      rt.prototype.clear = ff, rt.prototype.delete = pf, rt.prototype.get = hf, rt.prototype.has = gf, rt.prototype.set = vf;
      function Es(e, t) {
        var n = P(e), o = !n && ta(e), l = !n && !o && Ut(e), c = !n && !o && !l && wa(e), p = n || o || l || c, h = p ? ti(e.length, Em) : [], b = h.length;
        for (var w in e)
          (t || j.call(e, w)) && !(p && (w == "length" || l && (w == "offset" || w == "parent") || c && (w == "buffer" || w == "byteLength" || w == "byteOffset") || Tt(w, b))) && h.push(w);
        return h;
      }
      function Ds(e) {
        var t = e.length;
        return t ? e[bi(0, t - 1)] : r;
      }
      function bf(e, t) {
        return ir(Ee(e), Jt(t, 0, e.length));
      }
      function yf(e) {
        return ir(Ee(e));
      }
      function li(e, t, n) {
        (n !== r && !it(e[t], n) || n === r && !(t in e)) && St(e, t, n);
      }
      function Ga(e, t, n) {
        var o = e[t];
        (!(j.call(e, t) && it(o, n)) || n === r && !(t in e)) && St(e, t, n);
      }
      function Qn(e, t) {
        for (var n = e.length; n--; )
          if (it(e[n][0], t))
            return n;
        return -1;
      }
      function Cf(e, t, n, o) {
        return Pt(e, function(l, c, p) {
          t(o, l, n(l), p);
        }), o;
      }
      function ks(e, t) {
        return e && ft(t, pe(t), e);
      }
      function Sf(e, t) {
        return e && ft(t, ke(t), e);
      }
      function St(e, t, n) {
        t == "__proto__" && zn ? zn(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      }
      function di(e, t) {
        for (var n = -1, o = t.length, l = y(o), c = e == null; ++n < o; )
          l[n] = c ? r : Wi(e, t[n]);
        return l;
      }
      function Jt(e, t, n) {
        return e === e && (n !== r && (e = e <= n ? e : n), t !== r && (e = e >= t ? e : t)), e;
      }
      function Ge(e, t, n, o, l, c) {
        var p, h = t & L, b = t & H, w = t & O;
        if (n && (p = l ? n(e, o, l, c) : n(e)), p !== r)
          return p;
        if (!re(e))
          return e;
        var A = P(e);
        if (A) {
          if (p = dp(e), !h)
            return Ee(e, p);
        } else {
          var _ = ye(e), E = _ == Tn || _ == Io;
          if (Ut(e))
            return Xs(e, h);
          if (_ == bt || _ == la || E && !l) {
            if (p = b || E ? {} : vl(e), !h)
              return b ? Xf(e, Sf(p, e)) : Jf(e, ks(p, e));
          } else {
            if (!te[_])
              return l ? e : {};
            p = up(e, _, h);
          }
        }
        c || (c = new rt());
        var N = c.get(e);
        if (N)
          return N;
        c.set(e, p), Ql(e) ? e.forEach(function($) {
          p.add(Ge($, t, n, $, e, c));
        }) : Vl(e) && e.forEach(function($, W) {
          p.set(W, Ge($, t, n, W, e, c));
        });
        var R = w ? b ? Ni : ki : b ? ke : pe, z = A ? r : R(e);
        return Ve(z || e, function($, W) {
          z && (W = $, $ = e[W]), Ga(p, W, Ge($, t, n, W, e, c));
        }), p;
      }
      function wf(e) {
        var t = pe(e);
        return function(n) {
          return Ns(n, e, t);
        };
      }
      function Ns(e, t, n) {
        var o = n.length;
        if (e == null)
          return !o;
        for (e = ee(e); o--; ) {
          var l = n[o], c = t[l], p = e[l];
          if (p === r && !(l in e) || !c(p))
            return !1;
        }
        return !0;
      }
      function Is(e, t, n) {
        if (typeof e != "function")
          throw new He(m);
        return en(function() {
          e.apply(r, n);
        }, t);
      }
      function Ya(e, t, n, o) {
        var l = -1, c = Nn, p = !0, h = e.length, b = [], w = t.length;
        if (!h)
          return b;
        n && (t = ne(t, $e(n))), o ? (c = Zr, p = !1) : t.length >= d && (c = Ua, p = !1, t = new Kt(t));
        e:
          for (; ++l < h; ) {
            var A = e[l], _ = n == null ? A : n(A);
            if (A = o || A !== 0 ? A : 0, p && _ === _) {
              for (var E = w; E--; )
                if (t[E] === _)
                  continue e;
              b.push(A);
            } else
              c(t, _, o) || b.push(A);
          }
        return b;
      }
      var Pt = nl(mt), Os = nl(ci, !0);
      function Af(e, t) {
        var n = !0;
        return Pt(e, function(o, l, c) {
          return n = !!t(o, l, c), n;
        }), n;
      }
      function Gn(e, t, n) {
        for (var o = -1, l = e.length; ++o < l; ) {
          var c = e[o], p = t(c);
          if (p != null && (h === r ? p === p && !Pe(p) : n(p, h)))
            var h = p, b = c;
        }
        return b;
      }
      function Tf(e, t, n, o) {
        var l = e.length;
        for (n = F(n), n < 0 && (n = -n > l ? 0 : l + n), o = o === r || o > l ? l : F(o), o < 0 && (o += l), o = n > o ? 0 : Yl(o); n < o; )
          e[n++] = t;
        return e;
      }
      function Ls(e, t) {
        var n = [];
        return Pt(e, function(o, l, c) {
          t(o, l, c) && n.push(o);
        }), n;
      }
      function ve(e, t, n, o, l) {
        var c = -1, p = e.length;
        for (n || (n = mp), l || (l = []); ++c < p; ) {
          var h = e[c];
          t > 0 && n(h) ? t > 1 ? ve(h, t - 1, n, o, l) : Rt(l, h) : o || (l[l.length] = h);
        }
        return l;
      }
      var ui = rl(), xs = rl(!0);
      function mt(e, t) {
        return e && ui(e, t, pe);
      }
      function ci(e, t) {
        return e && xs(e, t, pe);
      }
      function Yn(e, t) {
        return xt(t, function(n) {
          return _t(e[n]);
        });
      }
      function Xt(e, t) {
        t = qt(t, e);
        for (var n = 0, o = t.length; e != null && n < o; )
          e = e[pt(t[n++])];
        return n && n == o ? e : r;
      }
      function Rs(e, t, n) {
        var o = t(e);
        return P(e) ? o : Rt(o, n(e));
      }
      function we(e) {
        return e == null ? e === r ? Xu : Ku : Yt && Yt in ee(e) ? op(e) : yp(e);
      }
      function mi(e, t) {
        return e > t;
      }
      function _f(e, t) {
        return e != null && j.call(e, t);
      }
      function Ef(e, t) {
        return e != null && t in ee(e);
      }
      function Df(e, t, n) {
        return e >= be(t, n) && e < fe(t, n);
      }
      function fi(e, t, n) {
        for (var o = n ? Zr : Nn, l = e[0].length, c = e.length, p = c, h = y(c), b = 1 / 0, w = []; p--; ) {
          var A = e[p];
          p && t && (A = ne(A, $e(t))), b = be(A.length, b), h[p] = !n && (t || l >= 120 && A.length >= 120) ? new Kt(p && A) : r;
        }
        A = e[0];
        var _ = -1, E = h[0];
        e:
          for (; ++_ < l && w.length < b; ) {
            var N = A[_], R = t ? t(N) : N;
            if (N = n || N !== 0 ? N : 0, !(E ? Ua(E, R) : o(w, R, n))) {
              for (p = c; --p; ) {
                var z = h[p];
                if (!(z ? Ua(z, R) : o(e[p], R, n)))
                  continue e;
              }
              E && E.push(R), w.push(N);
            }
          }
        return w;
      }
      function kf(e, t, n, o) {
        return mt(e, function(l, c, p) {
          t(o, n(l), c, p);
        }), o;
      }
      function Za(e, t, n) {
        t = qt(t, e), e = Sl(e, t);
        var o = e == null ? e : e[pt(Ze(t))];
        return o == null ? r : Re(o, e, n);
      }
      function $s(e) {
        return oe(e) && we(e) == la;
      }
      function Nf(e) {
        return oe(e) && we(e) == za;
      }
      function If(e) {
        return oe(e) && we(e) == $a;
      }
      function Ka(e, t, n, o, l) {
        return e === t ? !0 : e == null || t == null || !oe(e) && !oe(t) ? e !== e && t !== t : Of(e, t, n, o, Ka, l);
      }
      function Of(e, t, n, o, l, c) {
        var p = P(e), h = P(t), b = p ? wn : ye(e), w = h ? wn : ye(t);
        b = b == la ? bt : b, w = w == la ? bt : w;
        var A = b == bt, _ = w == bt, E = b == w;
        if (E && Ut(e)) {
          if (!Ut(t))
            return !1;
          p = !0, A = !1;
        }
        if (E && !A)
          return c || (c = new rt()), p || wa(e) ? pl(e, t, n, o, l, c) : rp(e, t, b, n, o, l, c);
        if (!(n & Y)) {
          var N = A && j.call(e, "__wrapped__"), R = _ && j.call(t, "__wrapped__");
          if (N || R) {
            var z = N ? e.value() : e, $ = R ? t.value() : t;
            return c || (c = new rt()), l(z, $, n, o, c);
          }
        }
        return E ? (c || (c = new rt()), ip(e, t, n, o, l, c)) : !1;
      }
      function Lf(e) {
        return oe(e) && ye(e) == tt;
      }
      function pi(e, t, n, o) {
        var l = n.length, c = l, p = !o;
        if (e == null)
          return !c;
        for (e = ee(e); l--; ) {
          var h = n[l];
          if (p && h[2] ? h[1] !== e[h[0]] : !(h[0] in e))
            return !1;
        }
        for (; ++l < c; ) {
          h = n[l];
          var b = h[0], w = e[b], A = h[1];
          if (p && h[2]) {
            if (w === r && !(b in e))
              return !1;
          } else {
            var _ = new rt();
            if (o)
              var E = o(w, A, b, e, t, _);
            if (!(E === r ? Ka(A, w, Y | Se, o, _) : E))
              return !1;
          }
        }
        return !0;
      }
      function Ms(e) {
        if (!re(e) || pp(e))
          return !1;
        var t = _t(e) ? Om : Sc;
        return t.test(ea(e));
      }
      function xf(e) {
        return oe(e) && we(e) == Pa;
      }
      function Rf(e) {
        return oe(e) && ye(e) == at;
      }
      function $f(e) {
        return oe(e) && cr(e.length) && !!ae[we(e)];
      }
      function Ps(e) {
        return typeof e == "function" ? e : e == null ? Ne : typeof e == "object" ? P(e) ? zs(e[0], e[1]) : qs(e) : id(e);
      }
      function hi(e) {
        if (!ja(e))
          return Pm(e);
        var t = [];
        for (var n in ee(e))
          j.call(e, n) && n != "constructor" && t.push(n);
        return t;
      }
      function Mf(e) {
        if (!re(e))
          return bp(e);
        var t = ja(e), n = [];
        for (var o in e)
          o == "constructor" && (t || !j.call(e, o)) || n.push(o);
        return n;
      }
      function gi(e, t) {
        return e < t;
      }
      function Fs(e, t) {
        var n = -1, o = De(e) ? y(e.length) : [];
        return Pt(e, function(l, c, p) {
          o[++n] = t(l, c, p);
        }), o;
      }
      function qs(e) {
        var t = Oi(e);
        return t.length == 1 && t[0][2] ? yl(t[0][0], t[0][1]) : function(n) {
          return n === e || pi(n, e, t);
        };
      }
      function zs(e, t) {
        return xi(e) && bl(t) ? yl(pt(e), t) : function(n) {
          var o = Wi(n, e);
          return o === r && o === t ? Vi(n, e) : Ka(t, o, Y | Se);
        };
      }
      function Zn(e, t, n, o, l) {
        e !== t && ui(t, function(c, p) {
          if (l || (l = new rt()), re(c))
            Pf(e, t, p, n, Zn, o, l);
          else {
            var h = o ? o($i(e, p), c, p + "", e, t, l) : r;
            h === r && (h = c), li(e, p, h);
          }
        }, ke);
      }
      function Pf(e, t, n, o, l, c, p) {
        var h = $i(e, n), b = $i(t, n), w = p.get(b);
        if (w) {
          li(e, n, w);
          return;
        }
        var A = c ? c(h, b, n + "", e, t, p) : r, _ = A === r;
        if (_) {
          var E = P(b), N = !E && Ut(b), R = !E && !N && wa(b);
          A = b, E || N || R ? P(h) ? A = h : le(h) ? A = Ee(h) : N ? (_ = !1, A = Xs(b, !0)) : R ? (_ = !1, A = js(b, !0)) : A = [] : tn(b) || ta(b) ? (A = h, ta(h) ? A = Zl(h) : (!re(h) || _t(h)) && (A = vl(b))) : _ = !1;
        }
        _ && (p.set(b, A), l(A, b, o, c, p), p.delete(b)), li(e, n, A);
      }
      function Us(e, t) {
        var n = e.length;
        if (!!n)
          return t += t < 0 ? n : 0, Tt(t, n) ? e[t] : r;
      }
      function Bs(e, t, n) {
        t.length ? t = ne(t, function(c) {
          return P(c) ? function(p) {
            return Xt(p, c.length === 1 ? c[0] : c);
          } : c;
        }) : t = [Ne];
        var o = -1;
        t = ne(t, $e(x()));
        var l = Fs(e, function(c, p, h) {
          var b = ne(t, function(w) {
            return w(c);
          });
          return { criteria: b, index: ++o, value: c };
        });
        return dm(l, function(c, p) {
          return Kf(c, p, n);
        });
      }
      function Ff(e, t) {
        return Ws(e, t, function(n, o) {
          return Vi(e, o);
        });
      }
      function Ws(e, t, n) {
        for (var o = -1, l = t.length, c = {}; ++o < l; ) {
          var p = t[o], h = Xt(e, p);
          n(h, p) && Ja(c, qt(p, e), h);
        }
        return c;
      }
      function qf(e) {
        return function(t) {
          return Xt(t, e);
        };
      }
      function vi(e, t, n, o) {
        var l = o ? lm : ca, c = -1, p = t.length, h = e;
        for (e === t && (t = Ee(t)), n && (h = ne(e, $e(n))); ++c < p; )
          for (var b = 0, w = t[c], A = n ? n(w) : w; (b = l(h, A, b, o)) > -1; )
            h !== e && qn.call(h, b, 1), qn.call(e, b, 1);
        return e;
      }
      function Vs(e, t) {
        for (var n = e ? t.length : 0, o = n - 1; n--; ) {
          var l = t[n];
          if (n == o || l !== c) {
            var c = l;
            Tt(l) ? qn.call(e, l, 1) : Si(e, l);
          }
        }
        return e;
      }
      function bi(e, t) {
        return e + Bn(Ts() * (t - e + 1));
      }
      function zf(e, t, n, o) {
        for (var l = -1, c = fe(Un((t - e) / (n || 1)), 0), p = y(c); c--; )
          p[o ? c : ++l] = e, e += n;
        return p;
      }
      function yi(e, t) {
        var n = "";
        if (!e || t < 1 || t > Lt)
          return n;
        do
          t % 2 && (n += e), t = Bn(t / 2), t && (e += e);
        while (t);
        return n;
      }
      function U(e, t) {
        return Mi(Cl(e, t, Ne), e + "");
      }
      function Uf(e) {
        return Ds(Aa(e));
      }
      function Bf(e, t) {
        var n = Aa(e);
        return ir(n, Jt(t, 0, n.length));
      }
      function Ja(e, t, n, o) {
        if (!re(e))
          return e;
        t = qt(t, e);
        for (var l = -1, c = t.length, p = c - 1, h = e; h != null && ++l < c; ) {
          var b = pt(t[l]), w = n;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return e;
          if (l != p) {
            var A = h[b];
            w = o ? o(A, b, h) : r, w === r && (w = re(A) ? A : Tt(t[l + 1]) ? [] : {});
          }
          Ga(h, b, w), h = h[b];
        }
        return e;
      }
      var Hs = Wn ? function(e, t) {
        return Wn.set(e, t), e;
      } : Ne, Wf = zn ? function(e, t) {
        return zn(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Qi(t),
          writable: !0
        });
      } : Ne;
      function Vf(e) {
        return ir(Aa(e));
      }
      function Ye(e, t, n) {
        var o = -1, l = e.length;
        t < 0 && (t = -t > l ? 0 : l + t), n = n > l ? l : n, n < 0 && (n += l), l = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var c = y(l); ++o < l; )
          c[o] = e[o + t];
        return c;
      }
      function Hf(e, t) {
        var n;
        return Pt(e, function(o, l, c) {
          return n = t(o, l, c), !n;
        }), !!n;
      }
      function Kn(e, t, n) {
        var o = 0, l = e == null ? o : e.length;
        if (typeof t == "number" && t === t && l <= Qu) {
          for (; o < l; ) {
            var c = o + l >>> 1, p = e[c];
            p !== null && !Pe(p) && (n ? p <= t : p < t) ? o = c + 1 : l = c;
          }
          return l;
        }
        return Ci(e, t, Ne, n);
      }
      function Ci(e, t, n, o) {
        var l = 0, c = e == null ? 0 : e.length;
        if (c === 0)
          return 0;
        t = n(t);
        for (var p = t !== t, h = t === null, b = Pe(t), w = t === r; l < c; ) {
          var A = Bn((l + c) / 2), _ = n(e[A]), E = _ !== r, N = _ === null, R = _ === _, z = Pe(_);
          if (p)
            var $ = o || R;
          else
            w ? $ = R && (o || E) : h ? $ = R && E && (o || !N) : b ? $ = R && E && !N && (o || !z) : N || z ? $ = !1 : $ = o ? _ <= t : _ < t;
          $ ? l = A + 1 : c = A;
        }
        return be(c, Hu);
      }
      function Qs(e, t) {
        for (var n = -1, o = e.length, l = 0, c = []; ++n < o; ) {
          var p = e[n], h = t ? t(p) : p;
          if (!n || !it(h, b)) {
            var b = h;
            c[l++] = p === 0 ? 0 : p;
          }
        }
        return c;
      }
      function Gs(e) {
        return typeof e == "number" ? e : Pe(e) ? Sn : +e;
      }
      function Me(e) {
        if (typeof e == "string")
          return e;
        if (P(e))
          return ne(e, Me) + "";
        if (Pe(e))
          return _s ? _s.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -Qt ? "-0" : t;
      }
      function Ft(e, t, n) {
        var o = -1, l = Nn, c = e.length, p = !0, h = [], b = h;
        if (n)
          p = !1, l = Zr;
        else if (c >= d) {
          var w = t ? null : ap(e);
          if (w)
            return On(w);
          p = !1, l = Ua, b = new Kt();
        } else
          b = t ? [] : h;
        e:
          for (; ++o < c; ) {
            var A = e[o], _ = t ? t(A) : A;
            if (A = n || A !== 0 ? A : 0, p && _ === _) {
              for (var E = b.length; E--; )
                if (b[E] === _)
                  continue e;
              t && b.push(_), h.push(A);
            } else
              l(b, _, n) || (b !== h && b.push(_), h.push(A));
          }
        return h;
      }
      function Si(e, t) {
        return t = qt(t, e), e = Sl(e, t), e == null || delete e[pt(Ze(t))];
      }
      function Ys(e, t, n, o) {
        return Ja(e, t, n(Xt(e, t)), o);
      }
      function Jn(e, t, n, o) {
        for (var l = e.length, c = o ? l : -1; (o ? c-- : ++c < l) && t(e[c], c, e); )
          ;
        return n ? Ye(e, o ? 0 : c, o ? c + 1 : l) : Ye(e, o ? c + 1 : 0, o ? l : c);
      }
      function Zs(e, t) {
        var n = e;
        return n instanceof V && (n = n.value()), Kr(t, function(o, l) {
          return l.func.apply(l.thisArg, Rt([o], l.args));
        }, n);
      }
      function wi(e, t, n) {
        var o = e.length;
        if (o < 2)
          return o ? Ft(e[0]) : [];
        for (var l = -1, c = y(o); ++l < o; )
          for (var p = e[l], h = -1; ++h < o; )
            h != l && (c[l] = Ya(c[l] || p, e[h], t, n));
        return Ft(ve(c, 1), t, n);
      }
      function Ks(e, t, n) {
        for (var o = -1, l = e.length, c = t.length, p = {}; ++o < l; ) {
          var h = o < c ? t[o] : r;
          n(p, e[o], h);
        }
        return p;
      }
      function Ai(e) {
        return le(e) ? e : [];
      }
      function Ti(e) {
        return typeof e == "function" ? e : Ne;
      }
      function qt(e, t) {
        return P(e) ? e : xi(e, t) ? [e] : _l(X(e));
      }
      var Qf = U;
      function zt(e, t, n) {
        var o = e.length;
        return n = n === r ? o : n, !t && n >= o ? e : Ye(e, t, n);
      }
      var Js = Lm || function(e) {
        return ge.clearTimeout(e);
      };
      function Xs(e, t) {
        if (t)
          return e.slice();
        var n = e.length, o = ys ? ys(n) : new e.constructor(n);
        return e.copy(o), o;
      }
      function _i(e) {
        var t = new e.constructor(e.byteLength);
        return new Pn(t).set(new Pn(e)), t;
      }
      function Gf(e, t) {
        var n = t ? _i(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      function Yf(e) {
        var t = new e.constructor(e.source, $o.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Zf(e) {
        return Qa ? ee(Qa.call(e)) : {};
      }
      function js(e, t) {
        var n = t ? _i(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      function el(e, t) {
        if (e !== t) {
          var n = e !== r, o = e === null, l = e === e, c = Pe(e), p = t !== r, h = t === null, b = t === t, w = Pe(t);
          if (!h && !w && !c && e > t || c && p && b && !h && !w || o && p && b || !n && b || !l)
            return 1;
          if (!o && !c && !w && e < t || w && n && l && !o && !c || h && n && l || !p && l || !b)
            return -1;
        }
        return 0;
      }
      function Kf(e, t, n) {
        for (var o = -1, l = e.criteria, c = t.criteria, p = l.length, h = n.length; ++o < p; ) {
          var b = el(l[o], c[o]);
          if (b) {
            if (o >= h)
              return b;
            var w = n[o];
            return b * (w == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function tl(e, t, n, o) {
        for (var l = -1, c = e.length, p = n.length, h = -1, b = t.length, w = fe(c - p, 0), A = y(b + w), _ = !o; ++h < b; )
          A[h] = t[h];
        for (; ++l < p; )
          (_ || l < c) && (A[n[l]] = e[l]);
        for (; w--; )
          A[h++] = e[l++];
        return A;
      }
      function al(e, t, n, o) {
        for (var l = -1, c = e.length, p = -1, h = n.length, b = -1, w = t.length, A = fe(c - h, 0), _ = y(A + w), E = !o; ++l < A; )
          _[l] = e[l];
        for (var N = l; ++b < w; )
          _[N + b] = t[b];
        for (; ++p < h; )
          (E || l < c) && (_[N + n[p]] = e[l++]);
        return _;
      }
      function Ee(e, t) {
        var n = -1, o = e.length;
        for (t || (t = y(o)); ++n < o; )
          t[n] = e[n];
        return t;
      }
      function ft(e, t, n, o) {
        var l = !n;
        n || (n = {});
        for (var c = -1, p = t.length; ++c < p; ) {
          var h = t[c], b = o ? o(n[h], e[h], h, n, e) : r;
          b === r && (b = e[h]), l ? St(n, h, b) : Ga(n, h, b);
        }
        return n;
      }
      function Jf(e, t) {
        return ft(e, Li(e), t);
      }
      function Xf(e, t) {
        return ft(e, hl(e), t);
      }
      function Xn(e, t) {
        return function(n, o) {
          var l = P(n) ? am : Cf, c = t ? t() : {};
          return l(n, e, x(o, 2), c);
        };
      }
      function ya(e) {
        return U(function(t, n) {
          var o = -1, l = n.length, c = l > 1 ? n[l - 1] : r, p = l > 2 ? n[2] : r;
          for (c = e.length > 3 && typeof c == "function" ? (l--, c) : r, p && Ae(n[0], n[1], p) && (c = l < 3 ? r : c, l = 1), t = ee(t); ++o < l; ) {
            var h = n[o];
            h && e(t, h, o, c);
          }
          return t;
        });
      }
      function nl(e, t) {
        return function(n, o) {
          if (n == null)
            return n;
          if (!De(n))
            return e(n, o);
          for (var l = n.length, c = t ? l : -1, p = ee(n); (t ? c-- : ++c < l) && o(p[c], c, p) !== !1; )
            ;
          return n;
        };
      }
      function rl(e) {
        return function(t, n, o) {
          for (var l = -1, c = ee(t), p = o(t), h = p.length; h--; ) {
            var b = p[e ? h : ++l];
            if (n(c[b], b, c) === !1)
              break;
          }
          return t;
        };
      }
      function jf(e, t, n) {
        var o = t & B, l = Xa(e);
        function c() {
          var p = this && this !== ge && this instanceof c ? l : e;
          return p.apply(o ? n : this, arguments);
        }
        return c;
      }
      function il(e) {
        return function(t) {
          t = X(t);
          var n = ma(t) ? nt(t) : r, o = n ? n[0] : t.charAt(0), l = n ? zt(n, 1).join("") : t.slice(1);
          return o[e]() + l;
        };
      }
      function Ca(e) {
        return function(t) {
          return Kr(nd(ad(t).replace(Bc, "")), e, "");
        };
      }
      function Xa(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = ba(e.prototype), o = e.apply(n, t);
          return re(o) ? o : n;
        };
      }
      function ep(e, t, n) {
        var o = Xa(e);
        function l() {
          for (var c = arguments.length, p = y(c), h = c, b = Sa(l); h--; )
            p[h] = arguments[h];
          var w = c < 3 && p[0] !== b && p[c - 1] !== b ? [] : $t(p, b);
          if (c -= w.length, c < n)
            return ul(
              e,
              t,
              jn,
              l.placeholder,
              r,
              p,
              w,
              r,
              r,
              n - c
            );
          var A = this && this !== ge && this instanceof l ? o : e;
          return Re(A, this, p);
        }
        return l;
      }
      function ol(e) {
        return function(t, n, o) {
          var l = ee(t);
          if (!De(t)) {
            var c = x(n, 3);
            t = pe(t), n = function(h) {
              return c(l[h], h, l);
            };
          }
          var p = e(t, n, o);
          return p > -1 ? l[c ? t[p] : p] : r;
        };
      }
      function sl(e) {
        return At(function(t) {
          var n = t.length, o = n, l = Qe.prototype.thru;
          for (e && t.reverse(); o--; ) {
            var c = t[o];
            if (typeof c != "function")
              throw new He(m);
            if (l && !p && nr(c) == "wrapper")
              var p = new Qe([], !0);
          }
          for (o = p ? o : n; ++o < n; ) {
            c = t[o];
            var h = nr(c), b = h == "wrapper" ? Ii(c) : r;
            b && Ri(b[0]) && b[1] == (xe | Le | Be | et) && !b[4].length && b[9] == 1 ? p = p[nr(b[0])].apply(p, b[3]) : p = c.length == 1 && Ri(c) ? p[h]() : p.thru(c);
          }
          return function() {
            var w = arguments, A = w[0];
            if (p && w.length == 1 && P(A))
              return p.plant(A).value();
            for (var _ = 0, E = n ? t[_].apply(this, w) : A; ++_ < n; )
              E = t[_].call(this, E);
            return E;
          };
        });
      }
      function jn(e, t, n, o, l, c, p, h, b, w) {
        var A = t & xe, _ = t & B, E = t & Ue, N = t & (Le | It), R = t & xa, z = E ? r : Xa(e);
        function $() {
          for (var W = arguments.length, Q = y(W), Fe = W; Fe--; )
            Q[Fe] = arguments[Fe];
          if (N)
            var Te = Sa($), qe = cm(Q, Te);
          if (o && (Q = tl(Q, o, l, N)), c && (Q = al(Q, c, p, N)), W -= qe, N && W < w) {
            var de = $t(Q, Te);
            return ul(
              e,
              t,
              jn,
              $.placeholder,
              n,
              Q,
              de,
              h,
              b,
              w - W
            );
          }
          var ot = _ ? n : this, Dt = E ? ot[e] : e;
          return W = Q.length, h ? Q = Cp(Q, h) : R && W > 1 && Q.reverse(), A && b < W && (Q.length = b), this && this !== ge && this instanceof $ && (Dt = z || Xa(Dt)), Dt.apply(ot, Q);
        }
        return $;
      }
      function ll(e, t) {
        return function(n, o) {
          return kf(n, e, t(o), {});
        };
      }
      function er(e, t) {
        return function(n, o) {
          var l;
          if (n === r && o === r)
            return t;
          if (n !== r && (l = n), o !== r) {
            if (l === r)
              return o;
            typeof n == "string" || typeof o == "string" ? (n = Me(n), o = Me(o)) : (n = Gs(n), o = Gs(o)), l = e(n, o);
          }
          return l;
        };
      }
      function Ei(e) {
        return At(function(t) {
          return t = ne(t, $e(x())), U(function(n) {
            var o = this;
            return e(t, function(l) {
              return Re(l, o, n);
            });
          });
        });
      }
      function tr(e, t) {
        t = t === r ? " " : Me(t);
        var n = t.length;
        if (n < 2)
          return n ? yi(t, e) : t;
        var o = yi(t, Un(e / fa(t)));
        return ma(t) ? zt(nt(o), 0, e).join("") : o.slice(0, e);
      }
      function tp(e, t, n, o) {
        var l = t & B, c = Xa(e);
        function p() {
          for (var h = -1, b = arguments.length, w = -1, A = o.length, _ = y(A + b), E = this && this !== ge && this instanceof p ? c : e; ++w < A; )
            _[w] = o[w];
          for (; b--; )
            _[w++] = arguments[++h];
          return Re(E, l ? n : this, _);
        }
        return p;
      }
      function dl(e) {
        return function(t, n, o) {
          return o && typeof o != "number" && Ae(t, n, o) && (n = o = r), t = Et(t), n === r ? (n = t, t = 0) : n = Et(n), o = o === r ? t < n ? 1 : -1 : Et(o), zf(t, n, o, e);
        };
      }
      function ar(e) {
        return function(t, n) {
          return typeof t == "string" && typeof n == "string" || (t = Ke(t), n = Ke(n)), e(t, n);
        };
      }
      function ul(e, t, n, o, l, c, p, h, b, w) {
        var A = t & Le, _ = A ? p : r, E = A ? r : p, N = A ? c : r, R = A ? r : c;
        t |= A ? Be : Ot, t &= ~(A ? Ot : Be), t & Cn || (t &= ~(B | Ue));
        var z = [
          e,
          t,
          l,
          N,
          _,
          R,
          E,
          h,
          b,
          w
        ], $ = n.apply(r, z);
        return Ri(e) && wl($, z), $.placeholder = o, Al($, e, t);
      }
      function Di(e) {
        var t = me[e];
        return function(n, o) {
          if (n = Ke(n), o = o == null ? 0 : be(F(o), 292), o && As(n)) {
            var l = (X(n) + "e").split("e"), c = t(l[0] + "e" + (+l[1] + o));
            return l = (X(c) + "e").split("e"), +(l[0] + "e" + (+l[1] - o));
          }
          return t(n);
        };
      }
      var ap = ga && 1 / On(new ga([, -0]))[1] == Qt ? function(e) {
        return new ga(e);
      } : Zi;
      function cl(e) {
        return function(t) {
          var n = ye(t);
          return n == tt ? ni(t) : n == at ? bm(t) : um(t, e(t));
        };
      }
      function wt(e, t, n, o, l, c, p, h) {
        var b = t & Ue;
        if (!b && typeof e != "function")
          throw new He(m);
        var w = o ? o.length : 0;
        if (w || (t &= ~(Be | Ot), o = l = r), p = p === r ? p : fe(F(p), 0), h = h === r ? h : F(h), w -= l ? l.length : 0, t & Ot) {
          var A = o, _ = l;
          o = l = r;
        }
        var E = b ? r : Ii(e), N = [
          e,
          t,
          n,
          o,
          l,
          A,
          _,
          c,
          p,
          h
        ];
        if (E && vp(N, E), e = N[0], t = N[1], n = N[2], o = N[3], l = N[4], h = N[9] = N[9] === r ? b ? 0 : e.length : fe(N[9] - w, 0), !h && t & (Le | It) && (t &= ~(Le | It)), !t || t == B)
          var R = jf(e, t, n);
        else
          t == Le || t == It ? R = ep(e, t, h) : (t == Be || t == (B | Be)) && !l.length ? R = tp(e, t, n, o) : R = jn.apply(r, N);
        var z = E ? Hs : wl;
        return Al(z(R, N), e, t);
      }
      function ml(e, t, n, o) {
        return e === r || it(e, ha[n]) && !j.call(o, n) ? t : e;
      }
      function fl(e, t, n, o, l, c) {
        return re(e) && re(t) && (c.set(t, e), Zn(e, t, r, fl, c), c.delete(t)), e;
      }
      function np(e) {
        return tn(e) ? r : e;
      }
      function pl(e, t, n, o, l, c) {
        var p = n & Y, h = e.length, b = t.length;
        if (h != b && !(p && b > h))
          return !1;
        var w = c.get(e), A = c.get(t);
        if (w && A)
          return w == t && A == e;
        var _ = -1, E = !0, N = n & Se ? new Kt() : r;
        for (c.set(e, t), c.set(t, e); ++_ < h; ) {
          var R = e[_], z = t[_];
          if (o)
            var $ = p ? o(z, R, _, t, e, c) : o(R, z, _, e, t, c);
          if ($ !== r) {
            if ($)
              continue;
            E = !1;
            break;
          }
          if (N) {
            if (!Jr(t, function(W, Q) {
              if (!Ua(N, Q) && (R === W || l(R, W, n, o, c)))
                return N.push(Q);
            })) {
              E = !1;
              break;
            }
          } else if (!(R === z || l(R, z, n, o, c))) {
            E = !1;
            break;
          }
        }
        return c.delete(e), c.delete(t), E;
      }
      function rp(e, t, n, o, l, c, p) {
        switch (n) {
          case da:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case za:
            return !(e.byteLength != t.byteLength || !c(new Pn(e), new Pn(t)));
          case Ra:
          case $a:
          case Ma:
            return it(+e, +t);
          case An:
            return e.name == t.name && e.message == t.message;
          case Pa:
          case Fa:
            return e == t + "";
          case tt:
            var h = ni;
          case at:
            var b = o & Y;
            if (h || (h = On), e.size != t.size && !b)
              return !1;
            var w = p.get(e);
            if (w)
              return w == t;
            o |= Se, p.set(e, t);
            var A = pl(h(e), h(t), o, l, c, p);
            return p.delete(e), A;
          case _n:
            if (Qa)
              return Qa.call(e) == Qa.call(t);
        }
        return !1;
      }
      function ip(e, t, n, o, l, c) {
        var p = n & Y, h = ki(e), b = h.length, w = ki(t), A = w.length;
        if (b != A && !p)
          return !1;
        for (var _ = b; _--; ) {
          var E = h[_];
          if (!(p ? E in t : j.call(t, E)))
            return !1;
        }
        var N = c.get(e), R = c.get(t);
        if (N && R)
          return N == t && R == e;
        var z = !0;
        c.set(e, t), c.set(t, e);
        for (var $ = p; ++_ < b; ) {
          E = h[_];
          var W = e[E], Q = t[E];
          if (o)
            var Fe = p ? o(Q, W, E, t, e, c) : o(W, Q, E, e, t, c);
          if (!(Fe === r ? W === Q || l(W, Q, n, o, c) : Fe)) {
            z = !1;
            break;
          }
          $ || ($ = E == "constructor");
        }
        if (z && !$) {
          var Te = e.constructor, qe = t.constructor;
          Te != qe && "constructor" in e && "constructor" in t && !(typeof Te == "function" && Te instanceof Te && typeof qe == "function" && qe instanceof qe) && (z = !1);
        }
        return c.delete(e), c.delete(t), z;
      }
      function At(e) {
        return Mi(Cl(e, r, Nl), e + "");
      }
      function ki(e) {
        return Rs(e, pe, Li);
      }
      function Ni(e) {
        return Rs(e, ke, hl);
      }
      var Ii = Wn ? function(e) {
        return Wn.get(e);
      } : Zi;
      function nr(e) {
        for (var t = e.name + "", n = va[t], o = j.call(va, t) ? n.length : 0; o--; ) {
          var l = n[o], c = l.func;
          if (c == null || c == e)
            return l.name;
        }
        return t;
      }
      function Sa(e) {
        var t = j.call(u, "placeholder") ? u : e;
        return t.placeholder;
      }
      function x() {
        var e = u.iteratee || Gi;
        return e = e === Gi ? Ps : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function rr(e, t) {
        var n = e.__data__;
        return fp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
      }
      function Oi(e) {
        for (var t = pe(e), n = t.length; n--; ) {
          var o = t[n], l = e[o];
          t[n] = [o, l, bl(l)];
        }
        return t;
      }
      function jt(e, t) {
        var n = hm(e, t);
        return Ms(n) ? n : r;
      }
      function op(e) {
        var t = j.call(e, Yt), n = e[Yt];
        try {
          e[Yt] = r;
          var o = !0;
        } catch {
        }
        var l = $n.call(e);
        return o && (t ? e[Yt] = n : delete e[Yt]), l;
      }
      var Li = ii ? function(e) {
        return e == null ? [] : (e = ee(e), xt(ii(e), function(t) {
          return Ss.call(e, t);
        }));
      } : Ki, hl = ii ? function(e) {
        for (var t = []; e; )
          Rt(t, Li(e)), e = Fn(e);
        return t;
      } : Ki, ye = we;
      (oi && ye(new oi(new ArrayBuffer(1))) != da || Wa && ye(new Wa()) != tt || si && ye(si.resolve()) != Oo || ga && ye(new ga()) != at || Va && ye(new Va()) != qa) && (ye = function(e) {
        var t = we(e), n = t == bt ? e.constructor : r, o = n ? ea(n) : "";
        if (o)
          switch (o) {
            case Um:
              return da;
            case Bm:
              return tt;
            case Wm:
              return Oo;
            case Vm:
              return at;
            case Hm:
              return qa;
          }
        return t;
      });
      function sp(e, t, n) {
        for (var o = -1, l = n.length; ++o < l; ) {
          var c = n[o], p = c.size;
          switch (c.type) {
            case "drop":
              e += p;
              break;
            case "dropRight":
              t -= p;
              break;
            case "take":
              t = be(t, e + p);
              break;
            case "takeRight":
              e = fe(e, t - p);
              break;
          }
        }
        return { start: e, end: t };
      }
      function lp(e) {
        var t = e.match(fc);
        return t ? t[1].split(pc) : [];
      }
      function gl(e, t, n) {
        t = qt(t, e);
        for (var o = -1, l = t.length, c = !1; ++o < l; ) {
          var p = pt(t[o]);
          if (!(c = e != null && n(e, p)))
            break;
          e = e[p];
        }
        return c || ++o != l ? c : (l = e == null ? 0 : e.length, !!l && cr(l) && Tt(p, l) && (P(e) || ta(e)));
      }
      function dp(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && j.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      function vl(e) {
        return typeof e.constructor == "function" && !ja(e) ? ba(Fn(e)) : {};
      }
      function up(e, t, n) {
        var o = e.constructor;
        switch (t) {
          case za:
            return _i(e);
          case Ra:
          case $a:
            return new o(+e);
          case da:
            return Gf(e, n);
          case Or:
          case Lr:
          case xr:
          case Rr:
          case $r:
          case Mr:
          case Pr:
          case Fr:
          case qr:
            return js(e, n);
          case tt:
            return new o();
          case Ma:
          case Fa:
            return new o(e);
          case Pa:
            return Yf(e);
          case at:
            return new o();
          case _n:
            return Zf(e);
        }
      }
      function cp(e, t) {
        var n = t.length;
        if (!n)
          return e;
        var o = n - 1;
        return t[o] = (n > 1 ? "& " : "") + t[o], t = t.join(n > 2 ? ", " : " "), e.replace(mc, `{
/* [wrapped with ` + t + `] */
`);
      }
      function mp(e) {
        return P(e) || ta(e) || !!(ws && e && e[ws]);
      }
      function Tt(e, t) {
        var n = typeof e;
        return t = t == null ? Lt : t, !!t && (n == "number" || n != "symbol" && Ac.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Ae(e, t, n) {
        if (!re(n))
          return !1;
        var o = typeof t;
        return (o == "number" ? De(n) && Tt(t, n.length) : o == "string" && t in n) ? it(n[t], e) : !1;
      }
      function xi(e, t) {
        if (P(e))
          return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || Pe(e) ? !0 : lc.test(e) || !sc.test(e) || t != null && e in ee(t);
      }
      function fp(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Ri(e) {
        var t = nr(e), n = u[t];
        if (typeof n != "function" || !(t in V.prototype))
          return !1;
        if (e === n)
          return !0;
        var o = Ii(n);
        return !!o && e === o[0];
      }
      function pp(e) {
        return !!bs && bs in e;
      }
      var hp = xn ? _t : Ji;
      function ja(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || ha;
        return e === n;
      }
      function bl(e) {
        return e === e && !re(e);
      }
      function yl(e, t) {
        return function(n) {
          return n == null ? !1 : n[e] === t && (t !== r || e in ee(n));
        };
      }
      function gp(e) {
        var t = dr(e, function(o) {
          return n.size === T && n.clear(), o;
        }), n = t.cache;
        return t;
      }
      function vp(e, t) {
        var n = e[1], o = t[1], l = n | o, c = l < (B | Ue | xe), p = o == xe && n == Le || o == xe && n == et && e[7].length <= t[8] || o == (xe | et) && t[7].length <= t[8] && n == Le;
        if (!(c || p))
          return e;
        o & B && (e[2] = t[2], l |= n & B ? 0 : Cn);
        var h = t[3];
        if (h) {
          var b = e[3];
          e[3] = b ? tl(b, h, t[4]) : h, e[4] = b ? $t(e[3], I) : t[4];
        }
        return h = t[5], h && (b = e[5], e[5] = b ? al(b, h, t[6]) : h, e[6] = b ? $t(e[5], I) : t[6]), h = t[7], h && (e[7] = h), o & xe && (e[8] = e[8] == null ? t[8] : be(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = l, e;
      }
      function bp(e) {
        var t = [];
        if (e != null)
          for (var n in ee(e))
            t.push(n);
        return t;
      }
      function yp(e) {
        return $n.call(e);
      }
      function Cl(e, t, n) {
        return t = fe(t === r ? e.length - 1 : t, 0), function() {
          for (var o = arguments, l = -1, c = fe(o.length - t, 0), p = y(c); ++l < c; )
            p[l] = o[t + l];
          l = -1;
          for (var h = y(t + 1); ++l < t; )
            h[l] = o[l];
          return h[t] = n(p), Re(e, this, h);
        };
      }
      function Sl(e, t) {
        return t.length < 2 ? e : Xt(e, Ye(t, 0, -1));
      }
      function Cp(e, t) {
        for (var n = e.length, o = be(t.length, n), l = Ee(e); o--; ) {
          var c = t[o];
          e[o] = Tt(c, n) ? l[c] : r;
        }
        return e;
      }
      function $i(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var wl = Tl(Hs), en = Rm || function(e, t) {
        return ge.setTimeout(e, t);
      }, Mi = Tl(Wf);
      function Al(e, t, n) {
        var o = t + "";
        return Mi(e, cp(o, Sp(lp(o), n)));
      }
      function Tl(e) {
        var t = 0, n = 0;
        return function() {
          var o = Fm(), l = Uu - (o - n);
          if (n = o, l > 0) {
            if (++t >= zu)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function ir(e, t) {
        var n = -1, o = e.length, l = o - 1;
        for (t = t === r ? o : t; ++n < t; ) {
          var c = bi(n, l), p = e[c];
          e[c] = e[n], e[n] = p;
        }
        return e.length = t, e;
      }
      var _l = gp(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(dc, function(n, o, l, c) {
          t.push(l ? c.replace(vc, "$1") : o || n);
        }), t;
      });
      function pt(e) {
        if (typeof e == "string" || Pe(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -Qt ? "-0" : t;
      }
      function ea(e) {
        if (e != null) {
          try {
            return Rn.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Sp(e, t) {
        return Ve(Gu, function(n) {
          var o = "_." + n[0];
          t & n[1] && !Nn(e, o) && e.push(o);
        }), e.sort();
      }
      function El(e) {
        if (e instanceof V)
          return e.clone();
        var t = new Qe(e.__wrapped__, e.__chain__);
        return t.__actions__ = Ee(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function wp(e, t, n) {
        (n ? Ae(e, t, n) : t === r) ? t = 1 : t = fe(F(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var l = 0, c = 0, p = y(Un(o / t)); l < o; )
          p[c++] = Ye(e, l, l += t);
        return p;
      }
      function Ap(e) {
        for (var t = -1, n = e == null ? 0 : e.length, o = 0, l = []; ++t < n; ) {
          var c = e[t];
          c && (l[o++] = c);
        }
        return l;
      }
      function Tp() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = y(e - 1), n = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return Rt(P(n) ? Ee(n) : [n], ve(t, 1));
      }
      var _p = U(function(e, t) {
        return le(e) ? Ya(e, ve(t, 1, le, !0)) : [];
      }), Ep = U(function(e, t) {
        var n = Ze(t);
        return le(n) && (n = r), le(e) ? Ya(e, ve(t, 1, le, !0), x(n, 2)) : [];
      }), Dp = U(function(e, t) {
        var n = Ze(t);
        return le(n) && (n = r), le(e) ? Ya(e, ve(t, 1, le, !0), r, n) : [];
      });
      function kp(e, t, n) {
        var o = e == null ? 0 : e.length;
        return o ? (t = n || t === r ? 1 : F(t), Ye(e, t < 0 ? 0 : t, o)) : [];
      }
      function Np(e, t, n) {
        var o = e == null ? 0 : e.length;
        return o ? (t = n || t === r ? 1 : F(t), t = o - t, Ye(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Ip(e, t) {
        return e && e.length ? Jn(e, x(t, 3), !0, !0) : [];
      }
      function Op(e, t) {
        return e && e.length ? Jn(e, x(t, 3), !0) : [];
      }
      function Lp(e, t, n, o) {
        var l = e == null ? 0 : e.length;
        return l ? (n && typeof n != "number" && Ae(e, t, n) && (n = 0, o = l), Tf(e, t, n, o)) : [];
      }
      function Dl(e, t, n) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var l = n == null ? 0 : F(n);
        return l < 0 && (l = fe(o + l, 0)), In(e, x(t, 3), l);
      }
      function kl(e, t, n) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var l = o - 1;
        return n !== r && (l = F(n), l = n < 0 ? fe(o + l, 0) : be(l, o - 1)), In(e, x(t, 3), l, !0);
      }
      function Nl(e) {
        var t = e == null ? 0 : e.length;
        return t ? ve(e, 1) : [];
      }
      function xp(e) {
        var t = e == null ? 0 : e.length;
        return t ? ve(e, Qt) : [];
      }
      function Rp(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? (t = t === r ? 1 : F(t), ve(e, t)) : [];
      }
      function $p(e) {
        for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
          var l = e[t];
          o[l[0]] = l[1];
        }
        return o;
      }
      function Il(e) {
        return e && e.length ? e[0] : r;
      }
      function Mp(e, t, n) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var l = n == null ? 0 : F(n);
        return l < 0 && (l = fe(o + l, 0)), ca(e, t, l);
      }
      function Pp(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ye(e, 0, -1) : [];
      }
      var Fp = U(function(e) {
        var t = ne(e, Ai);
        return t.length && t[0] === e[0] ? fi(t) : [];
      }), qp = U(function(e) {
        var t = Ze(e), n = ne(e, Ai);
        return t === Ze(n) ? t = r : n.pop(), n.length && n[0] === e[0] ? fi(n, x(t, 2)) : [];
      }), zp = U(function(e) {
        var t = Ze(e), n = ne(e, Ai);
        return t = typeof t == "function" ? t : r, t && n.pop(), n.length && n[0] === e[0] ? fi(n, r, t) : [];
      });
      function Up(e, t) {
        return e == null ? "" : Mm.call(e, t);
      }
      function Ze(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function Bp(e, t, n) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var l = o;
        return n !== r && (l = F(n), l = l < 0 ? fe(o + l, 0) : be(l, o - 1)), t === t ? Cm(e, t, l) : In(e, us, l, !0);
      }
      function Wp(e, t) {
        return e && e.length ? Us(e, F(t)) : r;
      }
      var Vp = U(Ol);
      function Ol(e, t) {
        return e && e.length && t && t.length ? vi(e, t) : e;
      }
      function Hp(e, t, n) {
        return e && e.length && t && t.length ? vi(e, t, x(n, 2)) : e;
      }
      function Qp(e, t, n) {
        return e && e.length && t && t.length ? vi(e, t, r, n) : e;
      }
      var Gp = At(function(e, t) {
        var n = e == null ? 0 : e.length, o = di(e, t);
        return Vs(e, ne(t, function(l) {
          return Tt(l, n) ? +l : l;
        }).sort(el)), o;
      });
      function Yp(e, t) {
        var n = [];
        if (!(e && e.length))
          return n;
        var o = -1, l = [], c = e.length;
        for (t = x(t, 3); ++o < c; ) {
          var p = e[o];
          t(p, o, e) && (n.push(p), l.push(o));
        }
        return Vs(e, l), n;
      }
      function Pi(e) {
        return e == null ? e : zm.call(e);
      }
      function Zp(e, t, n) {
        var o = e == null ? 0 : e.length;
        return o ? (n && typeof n != "number" && Ae(e, t, n) ? (t = 0, n = o) : (t = t == null ? 0 : F(t), n = n === r ? o : F(n)), Ye(e, t, n)) : [];
      }
      function Kp(e, t) {
        return Kn(e, t);
      }
      function Jp(e, t, n) {
        return Ci(e, t, x(n, 2));
      }
      function Xp(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var o = Kn(e, t);
          if (o < n && it(e[o], t))
            return o;
        }
        return -1;
      }
      function jp(e, t) {
        return Kn(e, t, !0);
      }
      function eh(e, t, n) {
        return Ci(e, t, x(n, 2), !0);
      }
      function th(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var o = Kn(e, t, !0) - 1;
          if (it(e[o], t))
            return o;
        }
        return -1;
      }
      function ah(e) {
        return e && e.length ? Qs(e) : [];
      }
      function nh(e, t) {
        return e && e.length ? Qs(e, x(t, 2)) : [];
      }
      function rh(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ye(e, 1, t) : [];
      }
      function ih(e, t, n) {
        return e && e.length ? (t = n || t === r ? 1 : F(t), Ye(e, 0, t < 0 ? 0 : t)) : [];
      }
      function oh(e, t, n) {
        var o = e == null ? 0 : e.length;
        return o ? (t = n || t === r ? 1 : F(t), t = o - t, Ye(e, t < 0 ? 0 : t, o)) : [];
      }
      function sh(e, t) {
        return e && e.length ? Jn(e, x(t, 3), !1, !0) : [];
      }
      function lh(e, t) {
        return e && e.length ? Jn(e, x(t, 3)) : [];
      }
      var dh = U(function(e) {
        return Ft(ve(e, 1, le, !0));
      }), uh = U(function(e) {
        var t = Ze(e);
        return le(t) && (t = r), Ft(ve(e, 1, le, !0), x(t, 2));
      }), ch = U(function(e) {
        var t = Ze(e);
        return t = typeof t == "function" ? t : r, Ft(ve(e, 1, le, !0), r, t);
      });
      function mh(e) {
        return e && e.length ? Ft(e) : [];
      }
      function fh(e, t) {
        return e && e.length ? Ft(e, x(t, 2)) : [];
      }
      function ph(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? Ft(e, r, t) : [];
      }
      function Fi(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = xt(e, function(n) {
          if (le(n))
            return t = fe(n.length, t), !0;
        }), ti(t, function(n) {
          return ne(e, Xr(n));
        });
      }
      function Ll(e, t) {
        if (!(e && e.length))
          return [];
        var n = Fi(e);
        return t == null ? n : ne(n, function(o) {
          return Re(t, r, o);
        });
      }
      var hh = U(function(e, t) {
        return le(e) ? Ya(e, t) : [];
      }), gh = U(function(e) {
        return wi(xt(e, le));
      }), vh = U(function(e) {
        var t = Ze(e);
        return le(t) && (t = r), wi(xt(e, le), x(t, 2));
      }), bh = U(function(e) {
        var t = Ze(e);
        return t = typeof t == "function" ? t : r, wi(xt(e, le), r, t);
      }), yh = U(Fi);
      function Ch(e, t) {
        return Ks(e || [], t || [], Ga);
      }
      function Sh(e, t) {
        return Ks(e || [], t || [], Ja);
      }
      var wh = U(function(e) {
        var t = e.length, n = t > 1 ? e[t - 1] : r;
        return n = typeof n == "function" ? (e.pop(), n) : r, Ll(e, n);
      });
      function xl(e) {
        var t = u(e);
        return t.__chain__ = !0, t;
      }
      function Ah(e, t) {
        return t(e), e;
      }
      function or(e, t) {
        return t(e);
      }
      var Th = At(function(e) {
        var t = e.length, n = t ? e[0] : 0, o = this.__wrapped__, l = function(c) {
          return di(c, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof V) || !Tt(n) ? this.thru(l) : (o = o.slice(n, +n + (t ? 1 : 0)), o.__actions__.push({
          func: or,
          args: [l],
          thisArg: r
        }), new Qe(o, this.__chain__).thru(function(c) {
          return t && !c.length && c.push(r), c;
        }));
      });
      function _h() {
        return xl(this);
      }
      function Eh() {
        return new Qe(this.value(), this.__chain__);
      }
      function Dh() {
        this.__values__ === r && (this.__values__ = Gl(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function kh() {
        return this;
      }
      function Nh(e) {
        for (var t, n = this; n instanceof Hn; ) {
          var o = El(n);
          o.__index__ = 0, o.__values__ = r, t ? l.__wrapped__ = o : t = o;
          var l = o;
          n = n.__wrapped__;
        }
        return l.__wrapped__ = e, t;
      }
      function Ih() {
        var e = this.__wrapped__;
        if (e instanceof V) {
          var t = e;
          return this.__actions__.length && (t = new V(this)), t = t.reverse(), t.__actions__.push({
            func: or,
            args: [Pi],
            thisArg: r
          }), new Qe(t, this.__chain__);
        }
        return this.thru(Pi);
      }
      function Oh() {
        return Zs(this.__wrapped__, this.__actions__);
      }
      var Lh = Xn(function(e, t, n) {
        j.call(e, n) ? ++e[n] : St(e, n, 1);
      });
      function xh(e, t, n) {
        var o = P(e) ? ls : Af;
        return n && Ae(e, t, n) && (t = r), o(e, x(t, 3));
      }
      function Rh(e, t) {
        var n = P(e) ? xt : Ls;
        return n(e, x(t, 3));
      }
      var $h = ol(Dl), Mh = ol(kl);
      function Ph(e, t) {
        return ve(sr(e, t), 1);
      }
      function Fh(e, t) {
        return ve(sr(e, t), Qt);
      }
      function qh(e, t, n) {
        return n = n === r ? 1 : F(n), ve(sr(e, t), n);
      }
      function Rl(e, t) {
        var n = P(e) ? Ve : Pt;
        return n(e, x(t, 3));
      }
      function $l(e, t) {
        var n = P(e) ? nm : Os;
        return n(e, x(t, 3));
      }
      var zh = Xn(function(e, t, n) {
        j.call(e, n) ? e[n].push(t) : St(e, n, [t]);
      });
      function Uh(e, t, n, o) {
        e = De(e) ? e : Aa(e), n = n && !o ? F(n) : 0;
        var l = e.length;
        return n < 0 && (n = fe(l + n, 0)), mr(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && ca(e, t, n) > -1;
      }
      var Bh = U(function(e, t, n) {
        var o = -1, l = typeof t == "function", c = De(e) ? y(e.length) : [];
        return Pt(e, function(p) {
          c[++o] = l ? Re(t, p, n) : Za(p, t, n);
        }), c;
      }), Wh = Xn(function(e, t, n) {
        St(e, n, t);
      });
      function sr(e, t) {
        var n = P(e) ? ne : Fs;
        return n(e, x(t, 3));
      }
      function Vh(e, t, n, o) {
        return e == null ? [] : (P(t) || (t = t == null ? [] : [t]), n = o ? r : n, P(n) || (n = n == null ? [] : [n]), Bs(e, t, n));
      }
      var Hh = Xn(function(e, t, n) {
        e[n ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Qh(e, t, n) {
        var o = P(e) ? Kr : ms, l = arguments.length < 3;
        return o(e, x(t, 4), n, l, Pt);
      }
      function Gh(e, t, n) {
        var o = P(e) ? rm : ms, l = arguments.length < 3;
        return o(e, x(t, 4), n, l, Os);
      }
      function Yh(e, t) {
        var n = P(e) ? xt : Ls;
        return n(e, ur(x(t, 3)));
      }
      function Zh(e) {
        var t = P(e) ? Ds : Uf;
        return t(e);
      }
      function Kh(e, t, n) {
        (n ? Ae(e, t, n) : t === r) ? t = 1 : t = F(t);
        var o = P(e) ? bf : Bf;
        return o(e, t);
      }
      function Jh(e) {
        var t = P(e) ? yf : Vf;
        return t(e);
      }
      function Xh(e) {
        if (e == null)
          return 0;
        if (De(e))
          return mr(e) ? fa(e) : e.length;
        var t = ye(e);
        return t == tt || t == at ? e.size : hi(e).length;
      }
      function jh(e, t, n) {
        var o = P(e) ? Jr : Hf;
        return n && Ae(e, t, n) && (t = r), o(e, x(t, 3));
      }
      var eg = U(function(e, t) {
        if (e == null)
          return [];
        var n = t.length;
        return n > 1 && Ae(e, t[0], t[1]) ? t = [] : n > 2 && Ae(t[0], t[1], t[2]) && (t = [t[0]]), Bs(e, ve(t, 1), []);
      }), lr = xm || function() {
        return ge.Date.now();
      };
      function tg(e, t) {
        if (typeof t != "function")
          throw new He(m);
        return e = F(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Ml(e, t, n) {
        return t = n ? r : t, t = e && t == null ? e.length : t, wt(e, xe, r, r, r, r, t);
      }
      function Pl(e, t) {
        var n;
        if (typeof t != "function")
          throw new He(m);
        return e = F(e), function() {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n;
        };
      }
      var qi = U(function(e, t, n) {
        var o = B;
        if (n.length) {
          var l = $t(n, Sa(qi));
          o |= Be;
        }
        return wt(e, o, t, n, l);
      }), Fl = U(function(e, t, n) {
        var o = B | Ue;
        if (n.length) {
          var l = $t(n, Sa(Fl));
          o |= Be;
        }
        return wt(t, o, e, n, l);
      });
      function ql(e, t, n) {
        t = n ? r : t;
        var o = wt(e, Le, r, r, r, r, r, t);
        return o.placeholder = ql.placeholder, o;
      }
      function zl(e, t, n) {
        t = n ? r : t;
        var o = wt(e, It, r, r, r, r, r, t);
        return o.placeholder = zl.placeholder, o;
      }
      function Ul(e, t, n) {
        var o, l, c, p, h, b, w = 0, A = !1, _ = !1, E = !0;
        if (typeof e != "function")
          throw new He(m);
        t = Ke(t) || 0, re(n) && (A = !!n.leading, _ = "maxWait" in n, c = _ ? fe(Ke(n.maxWait) || 0, t) : c, E = "trailing" in n ? !!n.trailing : E);
        function N(de) {
          var ot = o, Dt = l;
          return o = l = r, w = de, p = e.apply(Dt, ot), p;
        }
        function R(de) {
          return w = de, h = en(W, t), A ? N(de) : p;
        }
        function z(de) {
          var ot = de - b, Dt = de - w, od = t - ot;
          return _ ? be(od, c - Dt) : od;
        }
        function $(de) {
          var ot = de - b, Dt = de - w;
          return b === r || ot >= t || ot < 0 || _ && Dt >= c;
        }
        function W() {
          var de = lr();
          if ($(de))
            return Q(de);
          h = en(W, z(de));
        }
        function Q(de) {
          return h = r, E && o ? N(de) : (o = l = r, p);
        }
        function Fe() {
          h !== r && Js(h), w = 0, o = b = l = h = r;
        }
        function Te() {
          return h === r ? p : Q(lr());
        }
        function qe() {
          var de = lr(), ot = $(de);
          if (o = arguments, l = this, b = de, ot) {
            if (h === r)
              return R(b);
            if (_)
              return Js(h), h = en(W, t), N(b);
          }
          return h === r && (h = en(W, t)), p;
        }
        return qe.cancel = Fe, qe.flush = Te, qe;
      }
      var ag = U(function(e, t) {
        return Is(e, 1, t);
      }), ng = U(function(e, t, n) {
        return Is(e, Ke(t) || 0, n);
      });
      function rg(e) {
        return wt(e, xa);
      }
      function dr(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new He(m);
        var n = function() {
          var o = arguments, l = t ? t.apply(this, o) : o[0], c = n.cache;
          if (c.has(l))
            return c.get(l);
          var p = e.apply(this, o);
          return n.cache = c.set(l, p) || c, p;
        };
        return n.cache = new (dr.Cache || Ct)(), n;
      }
      dr.Cache = Ct;
      function ur(e) {
        if (typeof e != "function")
          throw new He(m);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function ig(e) {
        return Pl(2, e);
      }
      var og = Qf(function(e, t) {
        t = t.length == 1 && P(t[0]) ? ne(t[0], $e(x())) : ne(ve(t, 1), $e(x()));
        var n = t.length;
        return U(function(o) {
          for (var l = -1, c = be(o.length, n); ++l < c; )
            o[l] = t[l].call(this, o[l]);
          return Re(e, this, o);
        });
      }), zi = U(function(e, t) {
        var n = $t(t, Sa(zi));
        return wt(e, Be, r, t, n);
      }), Bl = U(function(e, t) {
        var n = $t(t, Sa(Bl));
        return wt(e, Ot, r, t, n);
      }), sg = At(function(e, t) {
        return wt(e, et, r, r, r, t);
      });
      function lg(e, t) {
        if (typeof e != "function")
          throw new He(m);
        return t = t === r ? t : F(t), U(e, t);
      }
      function dg(e, t) {
        if (typeof e != "function")
          throw new He(m);
        return t = t == null ? 0 : fe(F(t), 0), U(function(n) {
          var o = n[t], l = zt(n, 0, t);
          return o && Rt(l, o), Re(e, this, l);
        });
      }
      function ug(e, t, n) {
        var o = !0, l = !0;
        if (typeof e != "function")
          throw new He(m);
        return re(n) && (o = "leading" in n ? !!n.leading : o, l = "trailing" in n ? !!n.trailing : l), Ul(e, t, {
          leading: o,
          maxWait: t,
          trailing: l
        });
      }
      function cg(e) {
        return Ml(e, 1);
      }
      function mg(e, t) {
        return zi(Ti(t), e);
      }
      function fg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return P(e) ? e : [e];
      }
      function pg(e) {
        return Ge(e, O);
      }
      function hg(e, t) {
        return t = typeof t == "function" ? t : r, Ge(e, O, t);
      }
      function gg(e) {
        return Ge(e, L | O);
      }
      function vg(e, t) {
        return t = typeof t == "function" ? t : r, Ge(e, L | O, t);
      }
      function bg(e, t) {
        return t == null || Ns(e, t, pe(t));
      }
      function it(e, t) {
        return e === t || e !== e && t !== t;
      }
      var yg = ar(mi), Cg = ar(function(e, t) {
        return e >= t;
      }), ta = $s(function() {
        return arguments;
      }()) ? $s : function(e) {
        return oe(e) && j.call(e, "callee") && !Ss.call(e, "callee");
      }, P = y.isArray, Sg = as ? $e(as) : Nf;
      function De(e) {
        return e != null && cr(e.length) && !_t(e);
      }
      function le(e) {
        return oe(e) && De(e);
      }
      function wg(e) {
        return e === !0 || e === !1 || oe(e) && we(e) == Ra;
      }
      var Ut = $m || Ji, Ag = ns ? $e(ns) : If;
      function Tg(e) {
        return oe(e) && e.nodeType === 1 && !tn(e);
      }
      function _g(e) {
        if (e == null)
          return !0;
        if (De(e) && (P(e) || typeof e == "string" || typeof e.splice == "function" || Ut(e) || wa(e) || ta(e)))
          return !e.length;
        var t = ye(e);
        if (t == tt || t == at)
          return !e.size;
        if (ja(e))
          return !hi(e).length;
        for (var n in e)
          if (j.call(e, n))
            return !1;
        return !0;
      }
      function Eg(e, t) {
        return Ka(e, t);
      }
      function Dg(e, t, n) {
        n = typeof n == "function" ? n : r;
        var o = n ? n(e, t) : r;
        return o === r ? Ka(e, t, r, n) : !!o;
      }
      function Ui(e) {
        if (!oe(e))
          return !1;
        var t = we(e);
        return t == An || t == Zu || typeof e.message == "string" && typeof e.name == "string" && !tn(e);
      }
      function kg(e) {
        return typeof e == "number" && As(e);
      }
      function _t(e) {
        if (!re(e))
          return !1;
        var t = we(e);
        return t == Tn || t == Io || t == Yu || t == Ju;
      }
      function Wl(e) {
        return typeof e == "number" && e == F(e);
      }
      function cr(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lt;
      }
      function re(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function oe(e) {
        return e != null && typeof e == "object";
      }
      var Vl = rs ? $e(rs) : Lf;
      function Ng(e, t) {
        return e === t || pi(e, t, Oi(t));
      }
      function Ig(e, t, n) {
        return n = typeof n == "function" ? n : r, pi(e, t, Oi(t), n);
      }
      function Og(e) {
        return Hl(e) && e != +e;
      }
      function Lg(e) {
        if (hp(e))
          throw new M(f);
        return Ms(e);
      }
      function xg(e) {
        return e === null;
      }
      function Rg(e) {
        return e == null;
      }
      function Hl(e) {
        return typeof e == "number" || oe(e) && we(e) == Ma;
      }
      function tn(e) {
        if (!oe(e) || we(e) != bt)
          return !1;
        var t = Fn(e);
        if (t === null)
          return !0;
        var n = j.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && Rn.call(n) == Nm;
      }
      var Bi = is ? $e(is) : xf;
      function $g(e) {
        return Wl(e) && e >= -Lt && e <= Lt;
      }
      var Ql = os ? $e(os) : Rf;
      function mr(e) {
        return typeof e == "string" || !P(e) && oe(e) && we(e) == Fa;
      }
      function Pe(e) {
        return typeof e == "symbol" || oe(e) && we(e) == _n;
      }
      var wa = ss ? $e(ss) : $f;
      function Mg(e) {
        return e === r;
      }
      function Pg(e) {
        return oe(e) && ye(e) == qa;
      }
      function Fg(e) {
        return oe(e) && we(e) == ju;
      }
      var qg = ar(gi), zg = ar(function(e, t) {
        return e <= t;
      });
      function Gl(e) {
        if (!e)
          return [];
        if (De(e))
          return mr(e) ? nt(e) : Ee(e);
        if (Ba && e[Ba])
          return vm(e[Ba]());
        var t = ye(e), n = t == tt ? ni : t == at ? On : Aa;
        return n(e);
      }
      function Et(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Ke(e), e === Qt || e === -Qt) {
          var t = e < 0 ? -1 : 1;
          return t * Vu;
        }
        return e === e ? e : 0;
      }
      function F(e) {
        var t = Et(e), n = t % 1;
        return t === t ? n ? t - n : t : 0;
      }
      function Yl(e) {
        return e ? Jt(F(e), 0, ct) : 0;
      }
      function Ke(e) {
        if (typeof e == "number")
          return e;
        if (Pe(e))
          return Sn;
        if (re(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = re(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = fs(e);
        var n = Cc.test(e);
        return n || wc.test(e) ? em(e.slice(2), n ? 2 : 8) : yc.test(e) ? Sn : +e;
      }
      function Zl(e) {
        return ft(e, ke(e));
      }
      function Ug(e) {
        return e ? Jt(F(e), -Lt, Lt) : e === 0 ? e : 0;
      }
      function X(e) {
        return e == null ? "" : Me(e);
      }
      var Bg = ya(function(e, t) {
        if (ja(t) || De(t)) {
          ft(t, pe(t), e);
          return;
        }
        for (var n in t)
          j.call(t, n) && Ga(e, n, t[n]);
      }), Kl = ya(function(e, t) {
        ft(t, ke(t), e);
      }), fr = ya(function(e, t, n, o) {
        ft(t, ke(t), e, o);
      }), Wg = ya(function(e, t, n, o) {
        ft(t, pe(t), e, o);
      }), Vg = At(di);
      function Hg(e, t) {
        var n = ba(e);
        return t == null ? n : ks(n, t);
      }
      var Qg = U(function(e, t) {
        e = ee(e);
        var n = -1, o = t.length, l = o > 2 ? t[2] : r;
        for (l && Ae(t[0], t[1], l) && (o = 1); ++n < o; )
          for (var c = t[n], p = ke(c), h = -1, b = p.length; ++h < b; ) {
            var w = p[h], A = e[w];
            (A === r || it(A, ha[w]) && !j.call(e, w)) && (e[w] = c[w]);
          }
        return e;
      }), Gg = U(function(e) {
        return e.push(r, fl), Re(Jl, r, e);
      });
      function Yg(e, t) {
        return ds(e, x(t, 3), mt);
      }
      function Zg(e, t) {
        return ds(e, x(t, 3), ci);
      }
      function Kg(e, t) {
        return e == null ? e : ui(e, x(t, 3), ke);
      }
      function Jg(e, t) {
        return e == null ? e : xs(e, x(t, 3), ke);
      }
      function Xg(e, t) {
        return e && mt(e, x(t, 3));
      }
      function jg(e, t) {
        return e && ci(e, x(t, 3));
      }
      function ev(e) {
        return e == null ? [] : Yn(e, pe(e));
      }
      function tv(e) {
        return e == null ? [] : Yn(e, ke(e));
      }
      function Wi(e, t, n) {
        var o = e == null ? r : Xt(e, t);
        return o === r ? n : o;
      }
      function av(e, t) {
        return e != null && gl(e, t, _f);
      }
      function Vi(e, t) {
        return e != null && gl(e, t, Ef);
      }
      var nv = ll(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = $n.call(t)), e[t] = n;
      }, Qi(Ne)), rv = ll(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = $n.call(t)), j.call(e, t) ? e[t].push(n) : e[t] = [n];
      }, x), iv = U(Za);
      function pe(e) {
        return De(e) ? Es(e) : hi(e);
      }
      function ke(e) {
        return De(e) ? Es(e, !0) : Mf(e);
      }
      function ov(e, t) {
        var n = {};
        return t = x(t, 3), mt(e, function(o, l, c) {
          St(n, t(o, l, c), o);
        }), n;
      }
      function sv(e, t) {
        var n = {};
        return t = x(t, 3), mt(e, function(o, l, c) {
          St(n, l, t(o, l, c));
        }), n;
      }
      var lv = ya(function(e, t, n) {
        Zn(e, t, n);
      }), Jl = ya(function(e, t, n, o) {
        Zn(e, t, n, o);
      }), dv = At(function(e, t) {
        var n = {};
        if (e == null)
          return n;
        var o = !1;
        t = ne(t, function(c) {
          return c = qt(c, e), o || (o = c.length > 1), c;
        }), ft(e, Ni(e), n), o && (n = Ge(n, L | H | O, np));
        for (var l = t.length; l--; )
          Si(n, t[l]);
        return n;
      });
      function uv(e, t) {
        return Xl(e, ur(x(t)));
      }
      var cv = At(function(e, t) {
        return e == null ? {} : Ff(e, t);
      });
      function Xl(e, t) {
        if (e == null)
          return {};
        var n = ne(Ni(e), function(o) {
          return [o];
        });
        return t = x(t), Ws(e, n, function(o, l) {
          return t(o, l[0]);
        });
      }
      function mv(e, t, n) {
        t = qt(t, e);
        var o = -1, l = t.length;
        for (l || (l = 1, e = r); ++o < l; ) {
          var c = e == null ? r : e[pt(t[o])];
          c === r && (o = l, c = n), e = _t(c) ? c.call(e) : c;
        }
        return e;
      }
      function fv(e, t, n) {
        return e == null ? e : Ja(e, t, n);
      }
      function pv(e, t, n, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : Ja(e, t, n, o);
      }
      var jl = cl(pe), ed = cl(ke);
      function hv(e, t, n) {
        var o = P(e), l = o || Ut(e) || wa(e);
        if (t = x(t, 4), n == null) {
          var c = e && e.constructor;
          l ? n = o ? new c() : [] : re(e) ? n = _t(c) ? ba(Fn(e)) : {} : n = {};
        }
        return (l ? Ve : mt)(e, function(p, h, b) {
          return t(n, p, h, b);
        }), n;
      }
      function gv(e, t) {
        return e == null ? !0 : Si(e, t);
      }
      function vv(e, t, n) {
        return e == null ? e : Ys(e, t, Ti(n));
      }
      function bv(e, t, n, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : Ys(e, t, Ti(n), o);
      }
      function Aa(e) {
        return e == null ? [] : ai(e, pe(e));
      }
      function yv(e) {
        return e == null ? [] : ai(e, ke(e));
      }
      function Cv(e, t, n) {
        return n === r && (n = t, t = r), n !== r && (n = Ke(n), n = n === n ? n : 0), t !== r && (t = Ke(t), t = t === t ? t : 0), Jt(Ke(e), t, n);
      }
      function Sv(e, t, n) {
        return t = Et(t), n === r ? (n = t, t = 0) : n = Et(n), e = Ke(e), Df(e, t, n);
      }
      function wv(e, t, n) {
        if (n && typeof n != "boolean" && Ae(e, t, n) && (t = n = r), n === r && (typeof t == "boolean" ? (n = t, t = r) : typeof e == "boolean" && (n = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Et(e), t === r ? (t = e, e = 0) : t = Et(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (n || e % 1 || t % 1) {
          var l = Ts();
          return be(e + l * (t - e + jc("1e-" + ((l + "").length - 1))), t);
        }
        return bi(e, t);
      }
      var Av = Ca(function(e, t, n) {
        return t = t.toLowerCase(), e + (n ? td(t) : t);
      });
      function td(e) {
        return Hi(X(e).toLowerCase());
      }
      function ad(e) {
        return e = X(e), e && e.replace(Tc, mm).replace(Wc, "");
      }
      function Tv(e, t, n) {
        e = X(e), t = Me(t);
        var o = e.length;
        n = n === r ? o : Jt(F(n), 0, o);
        var l = n;
        return n -= t.length, n >= 0 && e.slice(n, l) == t;
      }
      function _v(e) {
        return e = X(e), e && rc.test(e) ? e.replace(xo, fm) : e;
      }
      function Ev(e) {
        return e = X(e), e && uc.test(e) ? e.replace(zr, "\\$&") : e;
      }
      var Dv = Ca(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase();
      }), kv = Ca(function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase();
      }), Nv = il("toLowerCase");
      function Iv(e, t, n) {
        e = X(e), t = F(t);
        var o = t ? fa(e) : 0;
        if (!t || o >= t)
          return e;
        var l = (t - o) / 2;
        return tr(Bn(l), n) + e + tr(Un(l), n);
      }
      function Ov(e, t, n) {
        e = X(e), t = F(t);
        var o = t ? fa(e) : 0;
        return t && o < t ? e + tr(t - o, n) : e;
      }
      function Lv(e, t, n) {
        e = X(e), t = F(t);
        var o = t ? fa(e) : 0;
        return t && o < t ? tr(t - o, n) + e : e;
      }
      function xv(e, t, n) {
        return n || t == null ? t = 0 : t && (t = +t), qm(X(e).replace(Ur, ""), t || 0);
      }
      function Rv(e, t, n) {
        return (n ? Ae(e, t, n) : t === r) ? t = 1 : t = F(t), yi(X(e), t);
      }
      function $v() {
        var e = arguments, t = X(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Mv = Ca(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase();
      });
      function Pv(e, t, n) {
        return n && typeof n != "number" && Ae(e, t, n) && (t = n = r), n = n === r ? ct : n >>> 0, n ? (e = X(e), e && (typeof t == "string" || t != null && !Bi(t)) && (t = Me(t), !t && ma(e)) ? zt(nt(e), 0, n) : e.split(t, n)) : [];
      }
      var Fv = Ca(function(e, t, n) {
        return e + (n ? " " : "") + Hi(t);
      });
      function qv(e, t, n) {
        return e = X(e), n = n == null ? 0 : Jt(F(n), 0, e.length), t = Me(t), e.slice(n, n + t.length) == t;
      }
      function zv(e, t, n) {
        var o = u.templateSettings;
        n && Ae(e, t, n) && (t = r), e = X(e), t = fr({}, t, o, ml);
        var l = fr({}, t.imports, o.imports, ml), c = pe(l), p = ai(l, c), h, b, w = 0, A = t.interpolate || En, _ = "__p += '", E = ri(
          (t.escape || En).source + "|" + A.source + "|" + (A === Ro ? bc : En).source + "|" + (t.evaluate || En).source + "|$",
          "g"
        ), N = "//# sourceURL=" + (j.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Yc + "]") + `
`;
        e.replace(E, function($, W, Q, Fe, Te, qe) {
          return Q || (Q = Fe), _ += e.slice(w, qe).replace(_c, pm), W && (h = !0, _ += `' +
__e(` + W + `) +
'`), Te && (b = !0, _ += `';
` + Te + `;
__p += '`), Q && (_ += `' +
((__t = (` + Q + `)) == null ? '' : __t) +
'`), w = qe + $.length, $;
        }), _ += `';
`;
        var R = j.call(t, "variable") && t.variable;
        if (!R)
          _ = `with (obj) {
` + _ + `
}
`;
        else if (gc.test(R))
          throw new M(g);
        _ = (b ? _.replace(ec, "") : _).replace(tc, "$1").replace(ac, "$1;"), _ = "function(" + (R || "obj") + `) {
` + (R ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (h ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + _ + `return __p
}`;
        var z = rd(function() {
          return K(c, N + "return " + _).apply(r, p);
        });
        if (z.source = _, Ui(z))
          throw z;
        return z;
      }
      function Uv(e) {
        return X(e).toLowerCase();
      }
      function Bv(e) {
        return X(e).toUpperCase();
      }
      function Wv(e, t, n) {
        if (e = X(e), e && (n || t === r))
          return fs(e);
        if (!e || !(t = Me(t)))
          return e;
        var o = nt(e), l = nt(t), c = ps(o, l), p = hs(o, l) + 1;
        return zt(o, c, p).join("");
      }
      function Vv(e, t, n) {
        if (e = X(e), e && (n || t === r))
          return e.slice(0, vs(e) + 1);
        if (!e || !(t = Me(t)))
          return e;
        var o = nt(e), l = hs(o, nt(t)) + 1;
        return zt(o, 0, l).join("");
      }
      function Hv(e, t, n) {
        if (e = X(e), e && (n || t === r))
          return e.replace(Ur, "");
        if (!e || !(t = Me(t)))
          return e;
        var o = nt(e), l = ps(o, nt(t));
        return zt(o, l).join("");
      }
      function Qv(e, t) {
        var n = Fu, o = qu;
        if (re(t)) {
          var l = "separator" in t ? t.separator : l;
          n = "length" in t ? F(t.length) : n, o = "omission" in t ? Me(t.omission) : o;
        }
        e = X(e);
        var c = e.length;
        if (ma(e)) {
          var p = nt(e);
          c = p.length;
        }
        if (n >= c)
          return e;
        var h = n - fa(o);
        if (h < 1)
          return o;
        var b = p ? zt(p, 0, h).join("") : e.slice(0, h);
        if (l === r)
          return b + o;
        if (p && (h += b.length - h), Bi(l)) {
          if (e.slice(h).search(l)) {
            var w, A = b;
            for (l.global || (l = ri(l.source, X($o.exec(l)) + "g")), l.lastIndex = 0; w = l.exec(A); )
              var _ = w.index;
            b = b.slice(0, _ === r ? h : _);
          }
        } else if (e.indexOf(Me(l), h) != h) {
          var E = b.lastIndexOf(l);
          E > -1 && (b = b.slice(0, E));
        }
        return b + o;
      }
      function Gv(e) {
        return e = X(e), e && nc.test(e) ? e.replace(Lo, Sm) : e;
      }
      var Yv = Ca(function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase();
      }), Hi = il("toUpperCase");
      function nd(e, t, n) {
        return e = X(e), t = n ? r : t, t === r ? gm(e) ? Tm(e) : sm(e) : e.match(t) || [];
      }
      var rd = U(function(e, t) {
        try {
          return Re(e, r, t);
        } catch (n) {
          return Ui(n) ? n : new M(n);
        }
      }), Zv = At(function(e, t) {
        return Ve(t, function(n) {
          n = pt(n), St(e, n, qi(e[n], e));
        }), e;
      });
      function Kv(e) {
        var t = e == null ? 0 : e.length, n = x();
        return e = t ? ne(e, function(o) {
          if (typeof o[1] != "function")
            throw new He(m);
          return [n(o[0]), o[1]];
        }) : [], U(function(o) {
          for (var l = -1; ++l < t; ) {
            var c = e[l];
            if (Re(c[0], this, o))
              return Re(c[1], this, o);
          }
        });
      }
      function Jv(e) {
        return wf(Ge(e, L));
      }
      function Qi(e) {
        return function() {
          return e;
        };
      }
      function Xv(e, t) {
        return e == null || e !== e ? t : e;
      }
      var jv = sl(), eb = sl(!0);
      function Ne(e) {
        return e;
      }
      function Gi(e) {
        return Ps(typeof e == "function" ? e : Ge(e, L));
      }
      function tb(e) {
        return qs(Ge(e, L));
      }
      function ab(e, t) {
        return zs(e, Ge(t, L));
      }
      var nb = U(function(e, t) {
        return function(n) {
          return Za(n, e, t);
        };
      }), rb = U(function(e, t) {
        return function(n) {
          return Za(e, n, t);
        };
      });
      function Yi(e, t, n) {
        var o = pe(t), l = Yn(t, o);
        n == null && !(re(t) && (l.length || !o.length)) && (n = t, t = e, e = this, l = Yn(t, pe(t)));
        var c = !(re(n) && "chain" in n) || !!n.chain, p = _t(e);
        return Ve(l, function(h) {
          var b = t[h];
          e[h] = b, p && (e.prototype[h] = function() {
            var w = this.__chain__;
            if (c || w) {
              var A = e(this.__wrapped__), _ = A.__actions__ = Ee(this.__actions__);
              return _.push({ func: b, args: arguments, thisArg: e }), A.__chain__ = w, A;
            }
            return b.apply(e, Rt([this.value()], arguments));
          });
        }), e;
      }
      function ib() {
        return ge._ === this && (ge._ = Im), this;
      }
      function Zi() {
      }
      function ob(e) {
        return e = F(e), U(function(t) {
          return Us(t, e);
        });
      }
      var sb = Ei(ne), lb = Ei(ls), db = Ei(Jr);
      function id(e) {
        return xi(e) ? Xr(pt(e)) : qf(e);
      }
      function ub(e) {
        return function(t) {
          return e == null ? r : Xt(e, t);
        };
      }
      var cb = dl(), mb = dl(!0);
      function Ki() {
        return [];
      }
      function Ji() {
        return !1;
      }
      function fb() {
        return {};
      }
      function pb() {
        return "";
      }
      function hb() {
        return !0;
      }
      function gb(e, t) {
        if (e = F(e), e < 1 || e > Lt)
          return [];
        var n = ct, o = be(e, ct);
        t = x(t), e -= ct;
        for (var l = ti(o, t); ++n < e; )
          t(n);
        return l;
      }
      function vb(e) {
        return P(e) ? ne(e, pt) : Pe(e) ? [e] : Ee(_l(X(e)));
      }
      function bb(e) {
        var t = ++km;
        return X(e) + t;
      }
      var yb = er(function(e, t) {
        return e + t;
      }, 0), Cb = Di("ceil"), Sb = er(function(e, t) {
        return e / t;
      }, 1), wb = Di("floor");
      function Ab(e) {
        return e && e.length ? Gn(e, Ne, mi) : r;
      }
      function Tb(e, t) {
        return e && e.length ? Gn(e, x(t, 2), mi) : r;
      }
      function _b(e) {
        return cs(e, Ne);
      }
      function Eb(e, t) {
        return cs(e, x(t, 2));
      }
      function Db(e) {
        return e && e.length ? Gn(e, Ne, gi) : r;
      }
      function kb(e, t) {
        return e && e.length ? Gn(e, x(t, 2), gi) : r;
      }
      var Nb = er(function(e, t) {
        return e * t;
      }, 1), Ib = Di("round"), Ob = er(function(e, t) {
        return e - t;
      }, 0);
      function Lb(e) {
        return e && e.length ? ei(e, Ne) : 0;
      }
      function xb(e, t) {
        return e && e.length ? ei(e, x(t, 2)) : 0;
      }
      return u.after = tg, u.ary = Ml, u.assign = Bg, u.assignIn = Kl, u.assignInWith = fr, u.assignWith = Wg, u.at = Vg, u.before = Pl, u.bind = qi, u.bindAll = Zv, u.bindKey = Fl, u.castArray = fg, u.chain = xl, u.chunk = wp, u.compact = Ap, u.concat = Tp, u.cond = Kv, u.conforms = Jv, u.constant = Qi, u.countBy = Lh, u.create = Hg, u.curry = ql, u.curryRight = zl, u.debounce = Ul, u.defaults = Qg, u.defaultsDeep = Gg, u.defer = ag, u.delay = ng, u.difference = _p, u.differenceBy = Ep, u.differenceWith = Dp, u.drop = kp, u.dropRight = Np, u.dropRightWhile = Ip, u.dropWhile = Op, u.fill = Lp, u.filter = Rh, u.flatMap = Ph, u.flatMapDeep = Fh, u.flatMapDepth = qh, u.flatten = Nl, u.flattenDeep = xp, u.flattenDepth = Rp, u.flip = rg, u.flow = jv, u.flowRight = eb, u.fromPairs = $p, u.functions = ev, u.functionsIn = tv, u.groupBy = zh, u.initial = Pp, u.intersection = Fp, u.intersectionBy = qp, u.intersectionWith = zp, u.invert = nv, u.invertBy = rv, u.invokeMap = Bh, u.iteratee = Gi, u.keyBy = Wh, u.keys = pe, u.keysIn = ke, u.map = sr, u.mapKeys = ov, u.mapValues = sv, u.matches = tb, u.matchesProperty = ab, u.memoize = dr, u.merge = lv, u.mergeWith = Jl, u.method = nb, u.methodOf = rb, u.mixin = Yi, u.negate = ur, u.nthArg = ob, u.omit = dv, u.omitBy = uv, u.once = ig, u.orderBy = Vh, u.over = sb, u.overArgs = og, u.overEvery = lb, u.overSome = db, u.partial = zi, u.partialRight = Bl, u.partition = Hh, u.pick = cv, u.pickBy = Xl, u.property = id, u.propertyOf = ub, u.pull = Vp, u.pullAll = Ol, u.pullAllBy = Hp, u.pullAllWith = Qp, u.pullAt = Gp, u.range = cb, u.rangeRight = mb, u.rearg = sg, u.reject = Yh, u.remove = Yp, u.rest = lg, u.reverse = Pi, u.sampleSize = Kh, u.set = fv, u.setWith = pv, u.shuffle = Jh, u.slice = Zp, u.sortBy = eg, u.sortedUniq = ah, u.sortedUniqBy = nh, u.split = Pv, u.spread = dg, u.tail = rh, u.take = ih, u.takeRight = oh, u.takeRightWhile = sh, u.takeWhile = lh, u.tap = Ah, u.throttle = ug, u.thru = or, u.toArray = Gl, u.toPairs = jl, u.toPairsIn = ed, u.toPath = vb, u.toPlainObject = Zl, u.transform = hv, u.unary = cg, u.union = dh, u.unionBy = uh, u.unionWith = ch, u.uniq = mh, u.uniqBy = fh, u.uniqWith = ph, u.unset = gv, u.unzip = Fi, u.unzipWith = Ll, u.update = vv, u.updateWith = bv, u.values = Aa, u.valuesIn = yv, u.without = hh, u.words = nd, u.wrap = mg, u.xor = gh, u.xorBy = vh, u.xorWith = bh, u.zip = yh, u.zipObject = Ch, u.zipObjectDeep = Sh, u.zipWith = wh, u.entries = jl, u.entriesIn = ed, u.extend = Kl, u.extendWith = fr, Yi(u, u), u.add = yb, u.attempt = rd, u.camelCase = Av, u.capitalize = td, u.ceil = Cb, u.clamp = Cv, u.clone = pg, u.cloneDeep = gg, u.cloneDeepWith = vg, u.cloneWith = hg, u.conformsTo = bg, u.deburr = ad, u.defaultTo = Xv, u.divide = Sb, u.endsWith = Tv, u.eq = it, u.escape = _v, u.escapeRegExp = Ev, u.every = xh, u.find = $h, u.findIndex = Dl, u.findKey = Yg, u.findLast = Mh, u.findLastIndex = kl, u.findLastKey = Zg, u.floor = wb, u.forEach = Rl, u.forEachRight = $l, u.forIn = Kg, u.forInRight = Jg, u.forOwn = Xg, u.forOwnRight = jg, u.get = Wi, u.gt = yg, u.gte = Cg, u.has = av, u.hasIn = Vi, u.head = Il, u.identity = Ne, u.includes = Uh, u.indexOf = Mp, u.inRange = Sv, u.invoke = iv, u.isArguments = ta, u.isArray = P, u.isArrayBuffer = Sg, u.isArrayLike = De, u.isArrayLikeObject = le, u.isBoolean = wg, u.isBuffer = Ut, u.isDate = Ag, u.isElement = Tg, u.isEmpty = _g, u.isEqual = Eg, u.isEqualWith = Dg, u.isError = Ui, u.isFinite = kg, u.isFunction = _t, u.isInteger = Wl, u.isLength = cr, u.isMap = Vl, u.isMatch = Ng, u.isMatchWith = Ig, u.isNaN = Og, u.isNative = Lg, u.isNil = Rg, u.isNull = xg, u.isNumber = Hl, u.isObject = re, u.isObjectLike = oe, u.isPlainObject = tn, u.isRegExp = Bi, u.isSafeInteger = $g, u.isSet = Ql, u.isString = mr, u.isSymbol = Pe, u.isTypedArray = wa, u.isUndefined = Mg, u.isWeakMap = Pg, u.isWeakSet = Fg, u.join = Up, u.kebabCase = Dv, u.last = Ze, u.lastIndexOf = Bp, u.lowerCase = kv, u.lowerFirst = Nv, u.lt = qg, u.lte = zg, u.max = Ab, u.maxBy = Tb, u.mean = _b, u.meanBy = Eb, u.min = Db, u.minBy = kb, u.stubArray = Ki, u.stubFalse = Ji, u.stubObject = fb, u.stubString = pb, u.stubTrue = hb, u.multiply = Nb, u.nth = Wp, u.noConflict = ib, u.noop = Zi, u.now = lr, u.pad = Iv, u.padEnd = Ov, u.padStart = Lv, u.parseInt = xv, u.random = wv, u.reduce = Qh, u.reduceRight = Gh, u.repeat = Rv, u.replace = $v, u.result = mv, u.round = Ib, u.runInContext = v, u.sample = Zh, u.size = Xh, u.snakeCase = Mv, u.some = jh, u.sortedIndex = Kp, u.sortedIndexBy = Jp, u.sortedIndexOf = Xp, u.sortedLastIndex = jp, u.sortedLastIndexBy = eh, u.sortedLastIndexOf = th, u.startCase = Fv, u.startsWith = qv, u.subtract = Ob, u.sum = Lb, u.sumBy = xb, u.template = zv, u.times = gb, u.toFinite = Et, u.toInteger = F, u.toLength = Yl, u.toLower = Uv, u.toNumber = Ke, u.toSafeInteger = Ug, u.toString = X, u.toUpper = Bv, u.trim = Wv, u.trimEnd = Vv, u.trimStart = Hv, u.truncate = Qv, u.unescape = Gv, u.uniqueId = bb, u.upperCase = Yv, u.upperFirst = Hi, u.each = Rl, u.eachRight = $l, u.first = Il, Yi(u, function() {
        var e = {};
        return mt(u, function(t, n) {
          j.call(u.prototype, n) || (e[n] = t);
        }), e;
      }(), { chain: !1 }), u.VERSION = s, Ve(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        u[e].placeholder = u;
      }), Ve(["drop", "take"], function(e, t) {
        V.prototype[e] = function(n) {
          n = n === r ? 1 : fe(F(n), 0);
          var o = this.__filtered__ && !t ? new V(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = be(n, o.__takeCount__) : o.__views__.push({
            size: be(n, ct),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, V.prototype[e + "Right"] = function(n) {
          return this.reverse()[e](n).reverse();
        };
      }), Ve(["filter", "map", "takeWhile"], function(e, t) {
        var n = t + 1, o = n == No || n == Wu;
        V.prototype[e] = function(l) {
          var c = this.clone();
          return c.__iteratees__.push({
            iteratee: x(l, 3),
            type: n
          }), c.__filtered__ = c.__filtered__ || o, c;
        };
      }), Ve(["head", "last"], function(e, t) {
        var n = "take" + (t ? "Right" : "");
        V.prototype[e] = function() {
          return this[n](1).value()[0];
        };
      }), Ve(["initial", "tail"], function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        V.prototype[e] = function() {
          return this.__filtered__ ? new V(this) : this[n](1);
        };
      }), V.prototype.compact = function() {
        return this.filter(Ne);
      }, V.prototype.find = function(e) {
        return this.filter(e).head();
      }, V.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, V.prototype.invokeMap = U(function(e, t) {
        return typeof e == "function" ? new V(this) : this.map(function(n) {
          return Za(n, e, t);
        });
      }), V.prototype.reject = function(e) {
        return this.filter(ur(x(e)));
      }, V.prototype.slice = function(e, t) {
        e = F(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0) ? new V(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== r && (t = F(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
      }, V.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, V.prototype.toArray = function() {
        return this.take(ct);
      }, mt(V.prototype, function(e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), l = u[o ? "take" + (t == "last" ? "Right" : "") : t], c = o || /^find/.test(t);
        !l || (u.prototype[t] = function() {
          var p = this.__wrapped__, h = o ? [1] : arguments, b = p instanceof V, w = h[0], A = b || P(p), _ = function(W) {
            var Q = l.apply(u, Rt([W], h));
            return o && E ? Q[0] : Q;
          };
          A && n && typeof w == "function" && w.length != 1 && (b = A = !1);
          var E = this.__chain__, N = !!this.__actions__.length, R = c && !E, z = b && !N;
          if (!c && A) {
            p = z ? p : new V(this);
            var $ = e.apply(p, h);
            return $.__actions__.push({ func: or, args: [_], thisArg: r }), new Qe($, E);
          }
          return R && z ? e.apply(this, h) : ($ = this.thru(_), R ? o ? $.value()[0] : $.value() : $);
        });
      }), Ve(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Ln[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        u.prototype[e] = function() {
          var l = arguments;
          if (o && !this.__chain__) {
            var c = this.value();
            return t.apply(P(c) ? c : [], l);
          }
          return this[n](function(p) {
            return t.apply(P(p) ? p : [], l);
          });
        };
      }), mt(V.prototype, function(e, t) {
        var n = u[t];
        if (n) {
          var o = n.name + "";
          j.call(va, o) || (va[o] = []), va[o].push({ name: t, func: n });
        }
      }), va[jn(r, Ue).name] = [{
        name: "wrapper",
        func: r
      }], V.prototype.clone = Qm, V.prototype.reverse = Gm, V.prototype.value = Ym, u.prototype.at = Th, u.prototype.chain = _h, u.prototype.commit = Eh, u.prototype.next = Dh, u.prototype.plant = Nh, u.prototype.reverse = Ih, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Oh, u.prototype.first = u.prototype.head, Ba && (u.prototype[Ba] = kh), u;
    }, pa = _m();
    Gt ? ((Gt.exports = pa)._ = pa, Gr._ = pa) : ge._ = pa;
  }).call(nn);
})(Oe, Oe.exports);
const gt = {
  CALL_REPORTS_PAGE_VIEW: "call-reports",
  CC_REPORTS_AGENT_SUMMARY_SMS_SENT: "cc-reports.agent-summary.sms-sent",
  GO_TO_CONTACT_LABELS_VIEW: "cc-config.go-to-contact-labels",
  QUEUE_CALLER_DETAILS_EXPORT: "cc-reports.queue-caller.details.export",
  QUEUE_CALLER_DETAILS_VIEW: "cc-reports.queue-caller.details",
  QUEUE_CALLER_PAGE_VIEW: "cc-reports.queue-caller",
  QUEUE_CALLER_REFINE_DATA: "cc-reports.queue-caller.refine-data",
  QUEUE_CALLER_SENTIMENT_ANALYSIS: "cc-reports.queue-caller.sentiment-analysis",
  QUEUE_CALLER_SUMMARY_EXPORT: "cc-reports.queue-caller.summary.export",
  QUEUE_CALLER_SUMMARY_EXPORT_V2: "cc-reports.queue-caller.summary.export.v2",
  QUEUE_CALLER_VIEW_AVERAGE_TIME_IN_QUEUE: "cc-reports.queue-caller.average-time-in-queue",
  QUEUE_CALLER_VIEW_CALLS_BY_OUTCOME: "cc-reports.queue-caller.calls-by-outcome",
  RESOLVED_CONVERSATIONS_PAGE_VIEW: "cc-reports.resolved-conversations",
  TIPS_AND_TRICK_BANNER_VIEW: "cc-reports.tips-banner",
  UNIFIED_ANALYTICS: "unified-analytics",
  UNIFIED_ANALYTICS_ADVANCED_FILTERING: "unified-analytics.advanced-filtering",
  UNIFIED_ANALYTICS_ADVANCED_FILTERING_DATA_SOURCE: "unified-analytics.advanced-filtering.data-source",
  UNIFIED_ANALYTICS_CALL_DISPOSITIONS: "unified-analytics.call-dispositions",
  UNIFIED_ANALYTICS_CONVERSATION_REVIEW: "unified-analytics.conversation-review",
  UNIFIED_ANALYTICS_CONVERSATION_REVIEW_RECORDING: "unified-analytics.conversation-review.recording",
  UNIFIED_ANALYTICS_CONVERSATION_REVIEW_TRANSCRIPT: "unified-analytics.conversation-review.transcript",
  UNIFIED_ANALYTICS_CRADLE_TO_GRAVE: "unified-analytics.cradle-to-grave",
  UNIFIED_ANALYTICS_DASHBOARDS: "unified-analytics.dashboards",
  UNIFIED_ANALYTICS_DASHBOARDS_QUEUE_CALLER_MIGRATED_DASHBOARD: "unified-analytics.dashboards.queue-caller.migrated-dashboard",
  UNIFIED_ANALYTICS_DASHBOARDS_SAVE: "unified-analytics.dashboards.save",
  UNIFIED_ANALYTICS_DASHBOARDS_SHARE: "unified-analytics.dashboards.share",
  UNIFIED_ANALYTICS_DASHBOARDS_UNIFIED_AGENT: "unified-analytics.dashboards.unified-agent",
  UNIFIED_ANALYTICS_DASHBOARDS_UNIFIED_AGENT_EFFECTIVENESS: "unified-analytics.dashboards.unified-agent.effectiveness",
  UNIFIED_ANALYTICS_DASHBOARDS_UNIFIED_AGENT_MIGRATED_DASHBOARD: "unified-analytics.dashboards.unified-agent.migrated-dashboard",
  UNIFIED_ANALYTICS_DASHBOARDS_UNIFIED_AGENT_SUMMARY: "unified-analytics.dashboards.unified-agent.summary",
  UNIFIED_ANALYTICS_HAS_SHARED_DASHBOARD: "unified-analytics.dashboards.has-shared-dashboard",
  UNIFIED_ANALYTICS_PORTAL: "unified-analytics.portal",
  UNIFIED_ANALYTICS_RENAME_DELETE_DASHBOARD: "unified-analytics.dashboards.rename-delete",
  UNIFIED_ANALYTICS_SCHEDULER: "unified-analytics.scheduler",
  UNIFIED_ANALYTICS_SCHEDULER_MANAGE: "unified-analytics.scheduler.manage",
  UNIFIED_ANALYTICS_SCHEDULER_MANAGE_ALL: "unified-analytics.scheduler.manage-all",
  UNIFIED_ANALYTICS_SCHEDULER_READ: "unified-analytics.scheduler.read",
  UNIFIED_ANALYTICS_SCHEDULER_READ_ALL: "unified-analytics.scheduler.read-all"
}, FC = "UND", qC = "Abgebrochen", zC = "Aktionen", UC = "Berater", BC = "Berater", WC = "Alphabetisch", VC = "Analysen", HC = "Angenommen", QC = "\xDCbernehmen", GC = "BETA", YC = "Zur\xFCck", ZC = "Vierzehnt\xE4gig", KC = "Dashboard", JC = "Dashboards", XC = "R\xFCckruf", jC = "Anrufer", eS = "Kampagne", tS = "Kampagnen", aS = "Abbrechen", nS = "Schlie\xDFen", rS = "Verbunden", iS = "Kunde", oS = "T\xE4glich", sS = "L\xF6schen", lS = "Details", dS = "Direkt", uS = "Verbindung getrennt", cS = "Detailergebnis", mS = "Dauer", fS = "AUSSER", pS = "E-Mail", hS = "Entfernt", gS = "Exportieren", vS = "Facebook", bS = "Fehlgeschlagen", yS = "Filtern", CS = "Von", SS = "Abgeschlossen", wS = "Auflegen", AS = "H\xF6chster Wert", TS = "Startseite", _S = "Stunden", ES = "Instagram", DS = "Interessiert", kS = "Niedrigster Wert", NS = "Leitung", IS = "H\xF6ren", OS = "Niedrigster Wert", LS = "Verwalten", xS = "H\xF6chstwert", RS = "Mindestwert", $S = "Minuten", MS = "Sonstiges", PS = "Monatlich", FS = "H\xF6chster Wert", qS = "HINWEIS", zS = "Name", US = "Negativ", BS = "Neutral", WS = "Nie", VS = "Nein", HS = "Notizen", QS = "ODER", GS = "Offen", YS = "Ausgehend", ZS = "Ergebnis", KS = "Ergebnisse", JS = "\xDCbersicht", XS = "Geparkt", jS = "Anstehend", ew = "Positiv", tw = "Dr\xFCckte", aw = "Viertelj\xE4hrlich", nw = "Warteschleife", rw = "Warteschleifen", iw = "Anderem Rechenzentrum zugewiesen", ow = "Umbenennen", sw = "Wiederholung", lw = "Zur\xFCcksetzen", dw = "Abgeschlossen", uw = "Klingeln", cw = "SMS", mw = "Vertrieb", fw = "Speichern", pw = "Planen", hw = "Suchen", gw = "Sekunden", vw = "Stimmung", bw = "Stimmungen", yw = "Service", Cw = "Einstellungen", Sw = "Freigeben", ww = "Entschuldigung", Aw = "Spam", Tw = "Status", _w = "Voicemail hinterlassen", Ew = "\xDCbersicht", Dw = "Umfrage", kw = "Umfrage", Nw = "Tags", Iw = "Uhrzeit", Ow = "Zeit\xFCberschreitung", Lw = "Zeitstempel", xw = "Heute", Rw = "Tools", $w = "Themen", Mw = "Themen", Pw = "Gesamt", Fw = "Transkript", qw = "Weitergeleitet", zw = "Weiterleiten", Uw = "Unbestimmt", Bw = "R\xFCckg\xE4ngig", Ww = "Nicht gruppiert", Vw = "Einheiten", Hw = "Unbekannt", Qw = "Aktualisieren", Gw = "Benutzer", Yw = "Voicemails", Zw = "Webchat", Kw = "W\xF6chentlich", Jw = "Fl\xFCstern", Xw = "J\xE4hrlich", jw = "Ja", eA = "Gestern", tA = "t\xE4glich", aA = "von", nA = "monatlich", rA = "viertelj\xE4hrlich", iA = "bis", oA = "w\xF6chentlich", sA = "j\xE4hrlich", lA = {
  "# Pauses": "Anzahl Pausen",
  "# Queues": "Anzahl Warteschleifen",
  "% Queue calls transferred by agent": "Anteil weitergeleiteter Warteschleifenanrufe nach Berater",
  "% of calls answered": "Aufteilung beantwortete Anrufe (%)",
  "% of talk time spent": "Aufteilung Sprechdauer (%)",
  "({{hidden}} hidden)": "({{hidden}} ausgeblendet)",
  "({{hidden}} hidden)_Hidden bucket rows": "({{hidden}} ausgeblendet)",
  "({{hidden}} hidden)_Hidden bucket rows_plural": "({{hidden}} ausgeblendet)",
  "({{hidden}} hidden)_plural": "({{hidden}} ausgeblendet)",
  "+{{numberOfIntents}} more": "+{{numberOfIntents}} weitere",
  "+{{numberOfIntents}} more_plural": "+{{numberOfIntents}} weitere",
  "+{{numberOfTags}} more": "+{{numberOfTags}} weiteres",
  "+{{numberOfTags}} more_plural": "+{{numberOfTags}} weitere",
  "+{{numberOfUsers}} more": "+{{numberOfUsers}} weitere",
  "+{{numberOfUsers}} more_plural": "+{{numberOfUsers}} weitere",
  "...and {{deviceNumber}} more": "...und {{deviceNumber}} mehr",
  "...more": "...weitere",
  "...more_more entries in list": "...weitere",
  "10 boards": "10 Dashboards",
  "25 boards": "25 Dashboards",
  "<0><0></0><1>{{callerNumber}}</1> started at\xA0<3><0>{{callStartTime}}</0></3>\xA0 Total duration:\xA0<5><0>{{formattedDuration}}</0></5></0>": "<0><0></0><1>{{callerNumber}}</1> begann um\xA0<3><0>{{callStartTime}}</0></3>\xA0 Gesamtdauer:\xA0<5><0>{{formattedDuration}}</0></5></0>",
  "<0>If your download is not starting,</0><1>click here</1>.": "<1>Klicken Sie hier</1><0>, falls Ihr Download nicht beginnt.</0>",
  "<0>If your download is not starting,</0><1>click here</1>._Button to reload the page to launch the download again.": "<1>Klicken Sie hier</1><0>, falls Ihr Download nicht beginnt.</0>",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>": "<0>Bitte \xF6ffnen Sie</0><1>die Einstellungen</1><2>und w\xE4hlen Sie mindestens ein anzuzeigendes Diagramm aus.</2>",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>_Button to open the settings drawer to configure the dashboard.": "<0>Bitte \xF6ffnen Sie</0><1>die Einstellungen</1><2>und w\xE4hlen Sie mindestens ein anzuzeigendes Diagramm aus.</2>",
  "A board with that name already exists.": "Es gibt bereits ein Dashboard mit diesem Namen.",
  "A transcript could not be created": "Transkript konnte nicht erstellt werden",
  "A transcript is being processed": "Ein Transkript wird gerade verarbeitet.",
  "AI sentiment": "KI-Stimmungsanalyse",
  AND: FC,
  "AND_Query operator": "UND",
  Abandoned: qC,
  "Access denied!": "Zugriff verweigert!",
  Actions: zC,
  "Add a filter": "Filter hinzuf\xFCgen",
  Agent: UC,
  "Agent Performance": "Agent performance",
  "Agent Summary - Metric": "Berater\xFCbersicht \u2013 Kennzahlen",
  "Agent availability": "Beraterverf\xFCgbarkeit",
  "Agent name": "Beratername",
  "Agent summary": "Berater\xFCbersicht",
  "Agent summary - table": "Berater\xFCbersicht \u2013 Tabelle",
  Agent_plural: BC,
  "Agents ({{selectedCount}} of {{totalCount}})": "Berater ({{selectedCount}} von {{totalCount}})",
  "Agents filter": "Beraterfilter",
  "Agents filter is loaded": "Beraterfilter wurde geladen",
  "All agents": "Alle Berater",
  "All call types": "Alle Anruftypen",
  "All callback offered": "Alle Anrufe mit angebotenem R\xFCckruf",
  "All callback requested": "Alle Anrufe mit angefordertem R\xFCckruf",
  "All campaigns": "Alle Kampagnen",
  "All chat queues": "Alle Chatwarteschlangen",
  "All chat types": "Alle Chattypen",
  "All conversation tags": "Alle Unterhaltungs-Tags",
  "All dispositions": "Alle Detailergebnisse",
  "All outcomes": "Alle Ergebnisse",
  "All queues": "Alle Warteschleifen",
  "All replies": "Alle Antworten",
  "All sentiments": "Alle Stimmungen",
  "All survey responses": "Alle Antworten",
  "All surveys": "Alle Umfragen",
  Alphabetical: WC,
  "An error occurred while creating the board, please try again!": "Beim Erstellen des Dashboards ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut!",
  "An error occurred while deleting the board.": "Beim L\xF6schen des Dashboards ist ein Fehler aufgetreten.",
  "An error occurred while deleting the scheduled board.": "Beim L\xF6schen des geplanten Dashboards ist ein Fehler aufgetreten.",
  "An error occurred while downloading the scheduled export.": "Beim Herunterladen des geplanten Exports ist ein Fehler aufgetreten.",
  "An error occurred while exporting {{dataName}}.": "{{dataName}} konnte(n) nicht exportiert werden.",
  "An error occurred while fetching call reports for conversation space {{conversationSpace}}.": "Beim Abrufen der Anrufberichte f\xFCr den Unterhaltungsraum {{conversationSpace}} ist ein Fehler aufgetreten.",
  "An error occurred while fetching dashboard to save": "Fehler beim Abrufen des zu speichernden Dashboards",
  "An error occurred while fetching filters": "Fehler beim Abrufen der Filter",
  "An error occurred while fetching queue caller": "Fehler beim Abrufen der Warteschleifenanrufer",
  "An error occurred while fetching queue caller details": "Fehler beim Abrufen der Details zu den Warteschleifenanrufern",
  "An error occurred while fetching queue caller overall sentiments": "Fehler beim Abrufen der allgemeinen Stimmung der Warteschleifenanrufer",
  "An error occurred while fetching queue caller topics sentiments": "Fehler beim Abrufen der themenbezogenen Stimmung der Warteschleifenanrufer",
  "An error occurred while fetching scheduled dashboard users": "Beim Abrufen der Benutzer des geplanten Dashboards ist ein Fehler aufgetreten.",
  "An error occurred while fetching scheduled dashboards": "Beim Abrufen der geplanten Dashboards ist ein Fehler aufgetreten.",
  "An error occurred while fetching the board": "Beim Abrufen des Dashboards ist ein Fehler aufgetreten.",
  "An error occurred while fetching the transcript.": "Beim Abrufen des Transkripts ist ein Fehler aufgetreten.",
  "An error occurred while scheduling the board, please try again.": "Beim Planen des Dashboards ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  "An error occurred while sharing the board.": "Beim Freigeben des Dashboards ist ein Fehler aufgetreten.",
  "An error occurred while updating board permissions.": "Beim Aktualisieren der Dashboard-Berechtigungen ist ein Fehler aufgetreten.",
  "An error occurred while updating the board status.": "Beim Aktualisieren des Dashboard-Status ist ein Fehler aufgetreten.",
  "An error occurred while updating the board, please try again!": "Beim Aktualisieren des Dashboards ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut!",
  "An error occurred while updating the board.": "Beim Aktualisieren des Dashboards ist ein Fehler aufgetreten.",
  "An error occurred while updating the scheduled dashboard, please try again.": "Beim Aktualisieren des geplanten Dashboards ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  Analytics: VC,
  Answered: HC,
  "Answered elsewhere": "Anderswo angenommen",
  Apply: QC,
  "Are you sure you want to delete the scheduled {{dashboardName}} board?": "M\xF6chten Sie das geplante Dashboard \u201E{{dashboardName}}\u201C wirklich l\xF6schen?",
  "Are you sure you want to delete {{dashboardName}}?": "M\xF6chten Sie \u201E{{dashboardName}}\u201C wirklich l\xF6schen?",
  "Ascending order": "Aufsteigende Reihenfolge",
  "Auto attendant": "Automatische Telefonzentrale",
  "Auto attendant node": "Knoten \u201EAutomatische Telefonzentrale\u201C",
  "Availability and pause time by agent": "Verf\xFCgbarkeits- und Pausenzeiten nach Berater",
  "Availability ratio": "Verf\xFCgbarkeitsrate",
  "Available in a higher tier": "In einer h\xF6heren Stufe verf\xFCgbar",
  "Average call duration": "Durchschnittliche Anrufdauer",
  "Average call sentiment for selected time range": "Durchschnittliche Stimmung w\xE4hrend Anrufen im ausgew\xE4hlten Zeitraum",
  "Average talk time": "Durchschnittliche Sprechdauer",
  "Average talk time_Summary average talk time": "Durchschnittliche Sprechdauer",
  "Average time in queue": "Durchschnittliche Zeit in Warteschleife",
  "Average wait time": "Durchschnittliche Wartezeit",
  "Avg. call duration": "Durchschn. Anrufdauer",
  "Avg. call duration_Average Call Duration": "Durchschn. Anrufdauer",
  "Avg. talk duration": "Durchschn. Sprechdauer",
  "Avg. talk duration_Average Talk Duration": "Durchschn. Sprechdauer",
  "Avg. time in queue": "Durchschn. Zeit in Warteschleife",
  "Avg. time in queue_Average time in queue": "Durchschn. Zeit in Warteschleife",
  "Avg. wait time": "Durchschn. Wartezeit",
  "Avg. wait time_Average Wait Time": "Durchschn. Wartezeit",
  BETA: GC,
  Back: YC,
  "Bar chart icon with 5 bars": "Balkendiagrammsymbol mit f\xFCnf Balken",
  Biweekly: ZC,
  "Blindly transferred:": "Ohne Ank\xFCndigung weitergeleitet:",
  Board: KC,
  "Board Name": "Name des Dashboards",
  "Board actions": "Dashboard-Aktionen",
  "Board dates": "Dashboard-Datum",
  "Board has been created.": "Das Dashboard wurde erstellt.",
  "Board has been deleted.": "Das Dashboard wurde gel\xF6scht.",
  "Board has been scheduled.": "Das Dashboard wurde geplant.",
  "Board has been shared.": "Das Dashboard wurde freigegeben.",
  "Board link": "Dashboard-Link",
  "Board name": "Name des Dashboards",
  "Board name is required": "Es muss ein Name f\xFCr das Dashboard eingegeben werden.",
  "Board permissions has been updated.": "Die Dashboard-Berechtigungen wurden aktualisiert.",
  Boards: JC,
  "CSV file": "CSV-Datei",
  "Call data per call. Click on each call for a detailed view.": "Anrufdaten pro Anruf. Klicken Sie auf einen Anruf, um eine Detailansicht zu sehen.",
  "Call data per day from {{dateRange}}. Click on each day for a detailed view.": "Anrufdaten pro Tag von {{dateRange}}. Klicken Sie auf einen Tag, um eine Detailansicht zu sehen.",
  "Call data per hour on {{dateRange}}. Click on each hour for a detailed view.": "Anrufdaten pro Stunde am {{dateRange}}. Klicken Sie auf eine Stunde, um eine Detailansicht zu sehen.",
  "Call duration": "Gespr\xE4chsdauer",
  "Call duration: all": "Gespr\xE4chsdauer: alle",
  "Call duration_Call Duration": "Gespr\xE4chsdauer",
  "Call queue": "Warteschleife",
  "Call report": "Anrufbericht",
  "Call reports": "Anrufberichte",
  "Call started": "Anruf gestartet",
  "Call type": "Anruftyp",
  "Call type_plural": "Anruftypen",
  "Call types ({{selectedCount}} of {{totalCount}})": "Anruftypen ({{selectedCount}} von {{totalCount}})",
  "Call types filter": "Filter f\xFCr Anruftypen",
  "Call types filter is loaded": "Filter f\xFCr Anruftypen wurde geladen",
  "Call volume": "Anrufvolumen",
  Callback: XC,
  "Callback dispatched": "R\xFCckruf ausgef\xFChrt",
  "Callback not offered": "R\xFCckruf nicht angeboten",
  "Callback not requested": "R\xFCckruf nicht angefordert",
  "Callback offered": "R\xFCckruf angeboten",
  "Callback offered ({{selectedCount}} of {{totalCount}})": "R\xFCckruf angeboten ({{selectedCount}} von {{totalCount}})",
  "Callback offered filter": "Filter f\xFCr Anrufe mit angebotenem R\xFCckruf",
  "Callback offered_Callback Offered": "R\xFCckruf angeboten",
  "Callback offered_plural": "R\xFCckruf angeboten",
  "Callback requested": "R\xFCckruf angefordert",
  "Callback requested ({{selectedCount}} of {{totalCount}})": "R\xFCckruf angefordert ({{selectedCount}} von {{totalCount}})",
  "Callback requested filter": "Filter f\xFCr Anrufe mit angefordertem R\xFCckruf",
  "Callback requested filter is loaded": "Filter f\xFCr Anrufe mit angefordertem R\xFCckruf ist geladen",
  "Callback requested_Callback Requested": "R\xFCckruf angefordert",
  "Callback requested_plural": "R\xFCckruf angefordert",
  "Callback requests": "Angeforderte R\xFCckrufe",
  Caller: jC,
  "Caller info": "Anruferinformationen",
  "Caller info node": "Knoten \u201EAnruferinformationen\u201C",
  "Calls transferred": "Weitergeleitete Gespr\xE4che",
  Campaign: eS,
  "Campaign type": "Kampagnentyp",
  "Campaign type_plural": "Kampagnentypen",
  "Campaign types ({{selectedCount}} of {{totalCount}})": "Kampagnentypen ({{selectedCount}} von {{totalCount}})",
  "Campaign types filter": "Filter f\xFCr Kampagnentypen",
  "Campaign types filter is loaded": "Filter f\xFCr Kampagnentypen wurde geladen",
  Campaign_plural: tS,
  "Campaigns ({{selectedCount}} of {{totalCount}})": "Kampagnen ({{selectedCount}} von {{totalCount}})",
  "Campaigns filter": "Kampagnenfilter",
  "Campaigns filter is loaded": "Kampagnenfilter wurde geladen",
  Cancel: aS,
  "Cancel export": "Export abbrechen",
  "Change to next tip": "Zum n\xE4chsten Tipp wechseln",
  "Change to previous tip": "Zum vorherigen Tipp wechseln",
  "Chat queue": "Chatwarteschlange",
  "Chat queue_plural": "Chatwarteschlange",
  "Chat queues ({{selectedCount}} of {{totalCount}})": "Chatwarteschlangen ({{selectedCount}} von {{totalCount}})",
  "Chat queues filter": "Chatwarteschlangenfilter",
  "Chat queues filter is loaded": "Chatwarteschlangenfilter wurde geladen",
  "Chat type": "Chattyp",
  "Chat type_plural": "Chattyp",
  "Chat types ({{selectedCount}} of {{totalCount}})": "Chattypen ({{selectedCount}} von {{totalCount}})",
  "Chat types filter": "Filter f\xFCr Chattypen",
  "Chat types filter is loaded": "Filter f\xFCr Chattypen wurde geladen",
  "Check back later for a completed transcript.": "Rufen Sie die Seite sp\xE4ter wieder auf, um Ihr fertiges Transkript zu sehen.",
  "Check back later for interaction details.": "Rufen Sie die Seite sp\xE4ter wieder auf, um die Interaktionsdetails zu sehen.",
  "Check back later for overview data": "Rufen Sie die Seite sp\xE4ter wieder auf, um die \xDCbersichtsdaten zu sehen.",
  "Check back later for overview data.": "Rufen Sie die Seite sp\xE4ter wieder auf, um die \xDCbersichtsdaten zu sehen.",
  "Choose a secondary filter": "Sekund\xE4ren Filter ausw\xE4hlen",
  "Click to filter calls for negative sentiment": "Zum Filtern der Anrufe nach negativer Stimmung klicken",
  "Click to filter calls for neutral sentiment": "Zum Filtern der Anrufe nach neutraler Stimmung klicken",
  "Click to filter calls for positive sentiment": "Zum Filtern der Anrufe nach positiver Stimmung klicken",
  "Click to refine chart with evicted calls": "Zum Filtern nach aus der Warteschleife entfernten Anrufen klicken",
  "Click to refine chart with handled calls": "Zum Filtern nach abgeschlossenen Anrufen klicken",
  "Click to refine chart with pending calls": "Zum Filtern nach anstehenden Anrufen klicken",
  "Click to refine data": "Zum Filtern der Daten klicken",
  Close: nS,
  "Close banner": "Banner schlie\xDFen",
  "Close call reports modal": "Dialogfeld \u201EAnrufberichte\u201C schlie\xDFen",
  "Close dashboard deletion modal": "Dialogfeld \u201EDashboard l\xF6schen\u201C schlie\xDFen",
  "Close delete schedule modal": "Dialogfeld \u201EZeitplan l\xF6schen\u201C schlie\xDFen",
  "Close drawer": "Drawer schlie\xDFen",
  "Close error modal": "Fehler-Dialogfeld schlie\xDFen",
  "Close export modal": "Export-Dialogfeld schlie\xDFen",
  "Close rename modal": "Dialogfeld zum Umbenennen schlie\xDFen",
  "Close save modal": "Dialogfeld zum Speichern schlie\xDFen",
  "Close schedule modal": "Zeitplan-Dialogfeld schlie\xDFen",
  "Close share modal": "Dialogfeld zum Teilen schlie\xDFen",
  "Close timeout modal": "Zeitlimit-Dialogfeld schlie\xDFen",
  "Closed lost": "Geschlossen und verloren",
  "Closed won": "Geschlossen und gewonnen",
  "Collapse the list": "Liste reduzieren",
  "Conference bridge": "Konferenzbr\xFCcke",
  Connected: rS,
  "Contact support": "Support kontaktieren",
  "Contact support_Link to support page": "Support kontaktieren",
  "Conversation tag": "Unterhaltungs-Tag",
  "Conversation tag_plural": "Unterhaltungs-Tags",
  "Conversation tags ({{selectedCount}} of {{totalCount}})": "Unterhaltungs-Tags ({{selectedCount}} von {{totalCount}})",
  "Conversation tags filter": "Filter f\xFCr Unterhaltungs-Tags",
  "Conversation tags filter is loaded": "Filter f\xFCr Unterhaltungs-Tags wurde geladen",
  "Copy link": "Link kopieren",
  "Currently loading": "Ladevorgang l\xE4uft",
  Customer: iS,
  "Customer pressed:": "Kunde dr\xFCckte:",
  "DTMF exit": "Ausstieg aus Warteschleife",
  Daily: oS,
  "Daily pause avg per queue": "Durchschn. Pausen/Warteschleife/Tag",
  Date: "Datum",
  "Date created": "Erstellt am",
  "Date range": "Datumsbereich",
  "Date range filter": "Filter f\xFCr Datumsbereich",
  Delete: sS,
  "Delete board": "Dashboard l\xF6schen",
  "Delete scheduled board": "Geplantes Dashboard l\xF6schen",
  "Delete the scheduled board": "Geplantes Dashboard l\xF6schen",
  "Deleted agent": "Gel\xF6schter Berater",
  "Deleted agents": "Gel\xF6schte Berater",
  "Deleted device": "Gel\xF6schtes Ger\xE4t",
  "Deleted device_plural": "Gel\xF6schte Ger\xE4te",
  "Deleted queue": "Gel\xF6schte Warteschleife",
  "Deleted user": "Gel\xF6schter Benutzer",
  "Deleting scheduled {{dashboardName}} board": "Geplantes Dashboard \u201E{{dashboardName}}\u201C l\xF6schen...",
  "Deleting {{dashboardName}}": "{{dashboardName}} l\xF6schen...",
  "Descending order": "Absteigende Reihenfolge",
  "Detail view": "Detailansicht",
  "Detail view {{dateRange}}": "Detailansicht {{dateRange}}",
  "Detail view {{dateRange}}_Summary overview for the selected date range": "Detailansicht {{dateRange}}",
  Details: lS,
  "Dial plan": "W\xE4hlplan",
  "Did you know? Approximately 18.7 billion texts are sent worldwide every day! You can text and message customers using our Multi-Channel feature included in all GoTo Contact plans!": "Schon gewusst? Weltweit werden t\xE4glich rund 18,7 Milliarden SMS gesendet. Mit unserer Multichannel-Funktion, die Teil aller GoTo-Contact-Abos ist, k\xF6nnen Sie Ihren Kunden SMS- und andere Nachrichten senden.",
  "Did you know? If the caller does not have a valid caller ID, they will not be offered the callback option, regardless of the wait time threshold being exceeded.": "Schon gewusst? Anrufern ohne g\xFCltige Anrufer-ID wird keine R\xFCckrufoption angeboten, auch wenn der Grenzwert f\xFCr die Wartezeit \xFCberschritten wurde.",
  "Did you know? You can change your chart view from the gear icon in your report page.": "Schon gewusst? Die angezeigten Diagramme lassen sich \xFCber das Zahnradsymbol auf der Berichtsseite \xE4ndern.",
  Direct: dS,
  "Direct inbound": "Direkt eingehend",
  Disconnected: uS,
  Disposition: cS,
  "Disposition ({{selectedCount}} of {{totalCount}})": "Detailergebnis ({{selectedCount}} von {{totalCount}})",
  "Disposition filter": "Detailergebnisfilter",
  "Disposition filter is loaded": "Detailergebnisfilter wurde geladen",
  "Disposition:": "Detailergebnis:",
  "Draggable item {{ itemLabel }}. Press space bar to start a drag. When dragging you can use\n                                the arrow keys to move the item around and escape to cancel. Ensure your screen reader is in\n                                focus mode or forms mode": `Ziehbares Element \u201E{{ itemLabel }}\u201C. Zum Ziehen die Leertaste dr\xFCcken. Beim Ziehen k\xF6nnen Sie das Element
                          mit den Pfeiltasten bewegen oder den Vorgang mit Escape abbrechen. Ihr Screenreader muss im
                          Fokus- oder Formularmodus sein.`,
  Duration: mS,
  EXCEPT: fS,
  "EXCEPT_Query operator": "AUSSER",
  "Each section will be exported as separate files.": "Jeder Abschnitt wird als separate Datei exportiert.",
  "Edit scheduled board": "Geplantes Dashboard bearbeiten",
  "Edit the scheduled board": "Geplantes Dashboard bearbeiten",
  Email: pS,
  "Email_Dropdown selectable option": "E-Mail",
  "Entered another queue": "In andere Warteschleife gewechselt",
  "Entered dial plan": "W\xE4hlplan aktiviert",
  Error: "Fehler",
  "Error while fetching agent availability data.": "Die Daten zur Beraterverf\xFCgbarkeit konnten nicht abgerufen werden.",
  "Error while fetching agent summary data.": "Die Berater\xFCbersichtsdaten konnten nicht abgerufen werden.",
  "Error while fetching call volume data.": "Die Daten zum Anrufvolumen konnten nicht abgerufen werden.",
  "Error while fetching total talk time data.": "Die Daten zur gesamten Sprechdauer konnten nicht abgerufen werden.",
  "Error while fetching transfers data.": "Die Daten zu den weitergeleiteten Gespr\xE4chen konnten nicht abgerufen werden.",
  Evicted: hS,
  "Evicted (legacy)": "Entfernt (veraltet)",
  "Evicted customer": "Ausstieg durch Kunde",
  "Evicted system": "Vom System entfernt",
  "Evicted user": "Von Benutzer entfernt",
  "Expand the list": "Liste erweitern",
  Export: gS,
  "Export conversation detail": "Unterhaltungsdetails exportieren",
  "Export failed.": "Export fehlgeschlagen.",
  "Export for {{filterDateRange}}": "Export f\xFCr: {{filterDateRange}}",
  "Export is currently unavailable": "Export derzeit nicht verf\xFCgbar",
  "Export is unavailable for this board.": "Dieses Dashboard kann nicht exportiert werden.",
  "Ext. Type": "DW-Typ",
  "External number": "Externe Nummer",
  Facebook: vS,
  Failed: bS,
  "Failed_Failed to reach the voicemail": "Fehlgeschlagen",
  Filter: yS,
  "Filter will not be applied as nothing is selected.": "Der Filter wird nicht angewendet, da keine Auswahl getroffen wurde.",
  "Filters loading, please wait.": "Filter werden geladen. Bitte warten.",
  "Filters saved": "Filter gespeichert",
  "For more information, please visit our <2>support site <1></1></2>": "Weitere Informationen finden Sie auf unserer <2>Supportwebsite <1></1></2>",
  "For more information, please visit our <2>support site <1></1></2>_Link to support site for timeout dialog": "Weitere Informationen finden Sie auf unserer <2>Supportwebsite <1></1></2>",
  "Forward 10 seconds": "10 Sekunden weiterspringen",
  From: CS,
  "Generated report file type": "Dateityp des erstellten Berichts",
  "GoTo Analytics": "GoTo Analytics",
  "Great news! We now offer dedicated callback reporting on the Queue Caller board.\xA0<1>Visit our support page to learn more about callback, timed-out and eviction reporting.</1>": "Tolle Neuigkeiten! Im Dashboard \u201EWarteschleifenanrufer\u201C k\xF6nnen Sie nun spezifische R\xFCckrufberichte erstellen.\xA0<1>Besuchen Sie unsere Supportseite, um mehr \xFCber Berichte zu R\xFCckrufen, Zeit\xFCberschreitungen und aus der Warteschleife entfernten Anrufen zu erfahren.</1>",
  "Group by": "Gruppieren nach",
  "Group by filter": "Nach Filter gruppieren",
  Handled: SS,
  "Handled contacts": "Abgeschlossene Kontakte",
  "Handled contacts_Summary handled contacts": "Abgeschlossene Kontakte",
  Hangup: wS,
  "Hangup by:": "Beendet durch:",
  "Hide empty rows": "Leere Zeilen ausblenden",
  Highest: AS,
  "Highest avg": "H\xF6chster Durchschnittswert",
  "Highest avg_Highest average talk time": "H\xF6chster Durchschnittswert",
  "Highest value": "H\xF6chster Wert",
  "Highest_Highest total talk time": "H\xF6chster Wert",
  Home: TS,
  "Home_Button that redirect to the home page": "Startseite",
  Hours: _S,
  "Hover for details": "F\xFCr Details mit der Maus darauf zeigen",
  "Including all call types": "Umfasst alle Anruftypen",
  "Including all campaign types": "Umfasst alle Kampagnentypen",
  "Including all campaigns": "Umfasst alle Kampagnen",
  "Including all outcomes": "Umfasst alle Ergebnisse",
  "Including all sentiments": "Umfasst alle Stimmungen",
  "Including all topics": "Umfasst alle Themen",
  "Including deleted agents and users": "Umfasst gel\xF6schte Berater und Benutzer",
  "Including deleted queues": "Umfasst gel\xF6schte Warteschleifen",
  "Including deleted sources": "Umfasst gel\xF6schte Quellen",
  Instagram: ES,
  "Insufficient privileges": "Fehlende Berechtigungen",
  "Intents:": "Absichten:",
  "Interaction details": "Interaktionsdetails",
  Interested: DS,
  "Internal number": "Interne Nummer",
  "Invalid option": "Ung\xFCltige Option",
  "Invalid option_Auto attendant option": "Ung\xFCltige Option",
  "Invalid.": "Ung\xFCltig.",
  "Invalid._The minimum or maximum duration is invalid": "Ung\xFCltig.",
  "Invite users / emails within your organization": "Benutzer/E-Mail-Adressen in Ihrem Unternehmen einladen",
  "Issue opened": "Problem gemeldet",
  "Issue resolved": "Problem behoben",
  "It looks like you don\u2019t have permission \nto access this board.": "Anscheinend sind Sie nicht zum Zugriff auf dieses Dashboard berechtigt.",
  "Item {{itemLabel}}": "Element \u201E{{itemLabel}}\u201C",
  "Item {{itemLabel}} has moved from position {{startPosition}} to {{endPosition}}": "Element \u201E{{itemLabel}}\u201C wurde von Position {{startPosition}} auf {{endPosition}} verschoben.",
  "Item {{itemLabel}} lifted from position {{position}}": "Element \u201E{{itemLabel}}\u201C wurde von Position {{position}} weggehoben.",
  "Item {{itemLabel}} moved from position {{startPosition}} to position {{endPosition}}": "Element \u201E{{itemLabel}}\u201C wurde von Position {{startPosition}} auf Position {{endPosition}} verschoben.",
  "Joined empty": "In leere Warteschleife aufgenommen",
  "Last 14 days": "Letzte 14 Tage",
  "Last 30 days": "Letzte 30 Tage",
  "Last 7 days": "Letzte 7 Tage",
  "Last agent in the call:": "Letzter Techniker im Gespr\xE4ch:",
  Least: kS,
  "Least_Least handled contacts": "Niedrigster Wert",
  "Leaving reason": "Grund f\xFCr Anrufende",
  "Leaving reason:": "Grund f\xFCr Anrufende:",
  "Left empty": "Aus leerer Warteschleife entfernt",
  "License: {{currentLicense}}": "Lizenz: {{currentLicense}}",
  Line: NS,
  "Link copied!": "Link kopiert!",
  "List of {{item}}": "Liste der {{item}}",
  Listening: IS,
  "Loading SMS sent filter...": "Filter f\xFCr gesendete SMS wird geladen...",
  "Loading agents filter...": "Beraterfilter wird geladen...",
  "Loading call types filter...": "Filter f\xFCr Anruftypen wird geladen...",
  "Loading callback offered filter...": "Filter f\xFCr Anrufe mit angebotenem R\xFCckruf wird geladen...",
  "Loading callback requested filter...": "Filter f\xFCr Anrufe mit angefordertem R\xFCckruf wird geladen...",
  "Loading campaign types filter...": "Filter f\xFCr Kampagnentypen wird geladen...",
  "Loading campaigns filter...": "Kampagnenfilter wird geladen...",
  "Loading chat queues filter...": "Chatwarteschlangenfilter wird geladen...",
  "Loading chat types filter...": "Filter f\xFCr Chattypen wird geladen...",
  "Loading conversation tags filter...": "Filter f\xFCr Unterhaltungs-Tags wird geladen...",
  "Loading disposition filter...": "Detailergebnisfilter wird geladen...",
  "Loading outcomes filter...": "Ergebnisfilter wird geladen...",
  "Loading queues filter...": "Warteschleifenfilter wird geladen...",
  "Loading sentiments filter...": "Stimmungsfilter wird geladen...",
  "Loading survey responses filter...": "Antwortenfilter wird geladen...",
  "Loading surveys filter...": "Umfragenfilter wird geladen...",
  "Loading topics filter...": "Themenfilter wird geladen...",
  "Loading...": "Laden...",
  "Longest pause duration": "L\xE4ngste Pause",
  Lowest: OS,
  "Lowest avg": "Niedrigster Durchschnittswert",
  "Lowest avg_Lowest average talk time": "Niedrigster Durchschnittswert",
  "Lowest value": "Niedrigster Wert",
  "Lowest_Least total talk time": "Niedrigster Wert",
  "Make a selection to filter": "Zum Filtern eine Auswahl treffen",
  Manage: LS,
  "Manage language": "Sprache verwalten",
  "Max boards per section": "Max. Dashboards pro Abschnitt",
  Maximum: xS,
  Minimum: RS,
  Minutes: $S,
  Miscellaneous: MS,
  "Miscellaneous - Transferred": "Sonstiges - Weitergeleitet",
  "Miscellaneous - Voicemail": "Sonstiges - Voicemail",
  "Miscellaneous - Wrong number": "Sonstiges - Falsche Nummer",
  "Missed contacts": "Verpasste Kontakte",
  "Month to date": "Monatsbeginn bis heute",
  Monthly: PS,
  Most: FS,
  "Most mentioned topics": "Am h\xE4ufigsten erw\xE4hnte Themen",
  "Most_Most handled contacts": "H\xF6chster Wert",
  "Mostly negative": "\xDCberwiegend negativ",
  "Mostly positive": "\xDCberwiegend positiv",
  "Movement cancelled. Item {{itemLabel}} has returned to its starting position {{startPosition}} of {{listLength}}": "Verschieben abgebrochen. Element \u201E{{itemLabel}}\u201C wurde auf seine Ausgangsposition {{startPosition}} von {{listLength}} zur\xFCckbewegt.",
  "Must not exceed 255 characters": "Darf nicht l\xE4nger als 255 Zeichen sein.",
  NOTE: qS,
  Name: zS,
  Negative: US,
  "Negative Answer": "Negative Antwort",
  "Negative_Negative sentiment analysis result": "Negativ",
  Neutral: BS,
  "Neutral_Neutral sentiment analysis result": "Neutral",
  Never: WS,
  "New schedule": "Neuer Zeitplan",
  "Next page": "N\xE4chste Seite",
  No: VS,
  "No Answer": "Keine Antwort",
  "No answer": "Keine Antwort",
  "No callback offered": "Kein R\xFCckruf angeboten",
  "No callback requested": "Kein R\xFCckruf angefordert",
  "No data": "Keine Daten",
  "No data available!": "Keine Daten verf\xFCgbar!",
  "No data to display": "Keine anzuzeigenden Daten",
  "No data yet": "Noch keine Daten verf\xFCgbar",
  "No notes available": "Keine Notizen verf\xFCgbar",
  "No overview yet": "Noch keine \xDCbersicht verf\xFCgbar",
  "No response": "Keine Antwort",
  "No transcript data": "Keine Transkriptdaten",
  "No transcript yet": "Noch kein Transkript verf\xFCgbar",
  "No users to display": "Keine anzuzeigenden Benutzer",
  "No_Callback Detail Column": "Nein",
  "No_Queue callback was not offered": "Nein",
  "Not applicable (-)": "Nicht zutreffend (-)",
  Notes: HS,
  "Notes taken during this call will appear here.": "Die w\xE4hrend dieses Gespr\xE4chs gemachten Notizen werden hier angezeigt.",
  "Notes_Notes added to a call by an agent": "Notizen",
  "Nothing is selected.": "Es wurde keine Auswahl getroffen.",
  "Notify by": "Benachrichtigung per",
  OR: QS,
  "OR_Query operator": "ODER",
  "On Hold": "Gehalten",
  "Only numbers are allowed": "Es sind nur Ziffern zul\xE4ssig.",
  Open: GS,
  "Open boards menu options": "Dashboard-Men\xFCoptionen \xF6ffnen",
  "Open {{dashboard}} board menu options": "Men\xFCoptionen des Dashboards \u201E{{dashboard}}\u201C \xF6ffnen",
  "Opt {{option}}": "Option {{option}}",
  "Opt {{option}}_Auto attendant option": "Option {{option}}",
  "Option {{option}}": "Option {{option}}",
  "Option {{option}}_Customer phone option pressed": "Option {{option}}",
  Outbound: YS,
  Outcome: ZS,
  Outcome_plural: KS,
  "Outcomes ({{selectedCount}} of {{totalCount}})": "Ergebnisse ({{selectedCount}} von {{totalCount}})",
  "Outcomes filter": "Ergebnisfilter",
  "Outcomes filter format has changed": "Format des Ergebnisfilters wurde ge\xE4ndert",
  "Outcomes filter is loaded": "Ergebnisfilter wurde geladen",
  "Over time - charts": "Zeitverlauf \u2013 Diagramme",
  "Overall sentiment": "Allgemeine Stimmung",
  Overview: JS,
  "Overview {{dateRange}}": "\xDCbersicht {{dateRange}}",
  "Overview {{dateRange}}_Summary overview for the selected date range": "\xDCbersicht {{dateRange}}",
  "Overview:": "\xDCbersicht:",
  "Page {{index}}/{{count}}": "Seite {{index}}/{{count}}",
  "Page {{index}}/{{count}}_plural": "Seite {{index}}/{{count}}",
  Parked: XS,
  "Participants names": "Teilnehmernamen",
  "Participants phone numbers": "Telefonnummern der Teilnehmer",
  "Participants:": "Teilnehmer:",
  "Pause the audio": "Wiedergabe anhalten",
  "Pause the scheduled board": "Geplantes Dashboard pausieren",
  Pending: jS,
  "Percentage breakdown from calls included in your current filter.": "Prozentuale Aufschl\xFCsselung der aktuell gefilterten Anrufe.",
  "Phone number": "Telefonnummer",
  "Play sound clip": "Soundclip abspielen",
  "Play the audio": "Audio abspielen",
  "Please select which data columns and tables you would like to export. CSV files will not contain graphics or images.": "Bitte w\xE4hlen Sie aus, welche Datenspalten und Tabellen Sie exportieren m\xF6chten. CSV-Dateien enthalten keine Grafiken oder Bilder.",
  Positive: ew,
  "Positive Answer": "Positive Antwort",
  "Positive_Positive sentiment analysis result": "Positiv",
  Pressed: tw,
  "Previous month": "Vormonat",
  "Previous page": "Vorherige Seite",
  "Previous week": "Vorwoche",
  Quarterly: aw,
  Queue: nw,
  "Queue Caller": "Queue caller",
  "Queue Caller Summary - grouped by date": "\xDCbersicht Warteschleifenanrufer - nach Datum gruppiert",
  "Queue Caller Summary - grouped by queue": "\xDCbersicht Warteschleifenanrufer - nach Warteschleife gruppiert",
  "Queue callback offered:": "R\xFCckruf angeboten:",
  "Queue caller - Details": "Warteschleifenanrufer - Details",
  "Queue caller - Summary": "Warteschleifenanrufer - \xDCbersicht",
  "Queue caller details table": "Tabelle mit Details zu Warteschleifenanrufern",
  "Queue caller summary table": "\xDCbersichtstabelle der Warteschleifenanrufer",
  "Queue calls": "Warteschleifenanrufe",
  "Queue configured wrap up:": "Warteschleifenspezifische Nachbearbeitungszeit:",
  "Queue full": "Warteschleife voll",
  "Queue name:": "Warteschleifenname:",
  "Queue node": "Warteschleifenknoten",
  "Queue transfers": "Weiterleitungen an Warteschleifen",
  "Queue type:": "Warteschleifentyp:",
  Queue_plural: rw,
  "Queues ({{selectedCount}} of {{totalCount}})": "Warteschleifen ({{selectedCount}} von {{totalCount}})",
  "Queues filter": "Warteschleifenfilter",
  "Queues filter is loaded": "Warteschleifenfilter wurde geladen",
  "Recently updated": "Zuletzt aktualisiert",
  "Recording not available": "Aufzeichnung nicht verf\xFCgbar",
  "Refine data": "Daten einschr\xE4nken",
  Relocated: iw,
  "Remove filter": "Filter entfernen",
  "Removed by supervisor": "Von Supervisor entfernt",
  Rename: ow,
  Repeats: sw,
  "Replace callback": "Durch R\xFCckruf ersetzt",
  "Circle size represents volume of topics most commonly detected by AI. Bolder colors indicate a more prevalent sentiment when the topic is mentioned.": "Darstellung der am h\xE4ufigsten von der KI erkannten Themen. Kr\xE4ftigere Farben weisen auf eine vorherrschende Stimmung bei Erw\xE4hnung des Themas hin.",
  "Request Timeout": "Zeit\xFCberschreitung der Anfrage",
  Reset: lw,
  "Reset filters": "Filter zur\xFCcksetzen",
  Resolved: dw,
  "Resolved by admin": "Durch Admin abgeschlossen",
  "Resolved conversation": "Abgeschlossene Unterhaltung",
  "Resume the scheduled board": "Geplantes Dashboard wieder starten",
  "Rewind 10 seconds": "10 Sekunden zur\xFCckspringen",
  "Ring group": "Rufgruppe",
  Ringing: uw,
  "Rows per page": "Zeilen pro Seite",
  SMS: cw,
  "SMS auto-reply": "Automatische SMS-Antwort",
  "SMS sent": "SMS gesendet",
  "SMS sent ({{selectedCount}} of {{totalCount}})": "SMS gesendet ({{selectedCount}} von {{totalCount}})",
  "SMS sent filter": "Filter f\xFCr gesendete SMS",
  "SMS sent filter is loaded": "Filter f\xFCr gesendete SMS wurde geladen",
  Sales: mw,
  "Sales - Callback": "Vertrieb - R\xFCckruf",
  "Sales - Closed lost": "Vertrieb - Geschlossen und verloren",
  "Sales - Closed won": "Vertrieb - Geschlossen und gewonnen",
  "Sales - Interested": "Vertrieb - Interessiert",
  Save: fw,
  "Save As": "Speichern unter",
  "Save Filter": "Filter speichern",
  "Save as new board": "Als neues Dashboard speichern",
  "Save as...": "Speichern unter...",
  Schedule: pw,
  "Schedule board": "Dashboard planen",
  "Schedule manager": "Zeitplan-Manager",
  "Schedule node": "Knoten \u201EZeitplan\u201C",
  "Schedule selected:": "Ausgew\xE4hlter Zeitplan:",
  "Scheduled board has been deleted.": "Das geplante Dashboard wurde gel\xF6scht.",
  "Scheduled board has been paused.": "Das geplante Dashboard wurde pausiert.",
  "Scheduled board has been resumed.": "Die Pausierung des geplanten Dashboards wurde aufgehoben.",
  "Scheduled board has been updated.": "Das geplante Dashboard wurde aktualisiert.",
  "Scheduled boards": "Geplante Dashboards",
  "Scheduled date": "Geplantes Datum",
  "Scheduled date & time": "Geplant f\xFCr",
  "Scheduled owner": "Inhaber des geplanten Dashboards",
  "Scheduled time": "Geplante Uhrzeit",
  "Scheduling dashboard": "Dashboard wird geplant...",
  Search: hw,
  "Search users": "Benutzer durchsuchen",
  Seconds: gw,
  "Sections visibility": "Sichtbare Abschnitte",
  "Select all": "Alle ausw\xE4hlen",
  "Select entries below to see the details": "W\xE4hlen Sie unten Eintr\xE4ge aus, um die Details zu sehen.",
  "Select file type": "Dateityp ausw\xE4hlen",
  "Select team members": "Teammitglieder ausw\xE4hlen",
  "Selected board does not support that type.": "Das ausgew\xE4hlte Dashboard unterst\xFCtzt diesen Typ nicht.",
  Sentiment: vw,
  "Sentiment analysis": "Stimmungsanalyse",
  "Sentiment detected for this call": "F\xFCr diesen Anruf erkannte Stimmung",
  Sentiment_plural: bw,
  "Sentiments ({{selectedCount}} of {{totalCount}})": "Stimmungen ({{selectedCount}} von {{totalCount}})",
  "Sentiments filter": "Stimmungsfilter",
  "Sentiments filter is loaded": "Stimmungsfilter wurde geladen",
  Service: yw,
  "Service - Issue opened": "Service - Problem gemeldet",
  "Service - Issue resolved": "Service - Problem behoben",
  "Service - No answer": "Service - Keine Antwort",
  "Service - Waiting on customer": "Service - Auf Kunden warten",
  "Service - Waiting on internal": "Service - Auf interne Bearbeitung warten",
  "Set the range for call duration.": "Legen Sie die Spanne f\xFCr die Gespr\xE4chsdauer fest.",
  "Set the range for waiting time. By default, all min/max are selected.": "Legen Sie die Spanne f\xFCr die Wartezeit fest. Standardm\xE4\xDFig sind alle Mindest- und H\xF6chstwerte ausgew\xE4hlt.",
  Settings: Cw,
  "Settings_Button to open the settings menu": "Einstellungen",
  Share: Sw,
  "Share - {{dashboardName}}": "{{dashboardName}} freigeben",
  "Shared with": "Freigegeben f\xFCr",
  "Shared with me": "F\xFCr mich freigegeben",
  "Shared with:": "Freigegeben f\xFCr:",
  "Sharing {{dashboardName}}": "{{dashboardName}} freigeben...",
  "Show all": "Alle anzeigen",
  "Show more boards": "Weitere Dashboards anzeigen",
  "Show selected only": "Nur ausgew\xE4hlte anzeigen",
  "Sign out": "Abmelden",
  "Slightly negative": "Eher negativ",
  "Slightly positive": "Eher positiv",
  Sorry: ww,
  "Sort by": "Sortieren nach",
  "Sort {{columnName}}": "{{columnName}} sortieren",
  Spam: Aw,
  Status: Tw,
  "Status:": "Status:",
  Success: _w,
  "Success_Success to reach the voicemail": "Voicemail hinterlassen",
  Summary: Ew,
  "Summary_Back to summary button": "\xDCbersicht",
  Survey: Dw,
  "Survey response": "Antwort",
  "Survey response_plural": "Antworten",
  "Survey responses ({{selectedCount}} of {{totalCount}})": "Antworten ({{selectedCount}} von {{totalCount}})",
  "Survey responses filter": "Antwortenfilter",
  "Survey responses filter is loaded": "Antwortenfilter wurde geladen",
  Survey_plural: kw,
  "Surveys ({{selectedCount}} of {{totalCount}})": "Umfragen ({{selectedCount}} von {{totalCount}})",
  "Surveys filter": "Umfragenfilter",
  "Surveys filter is loaded": "Umfragenfilter wurde geladen",
  Tags: Nw,
  "Tags:": "Tags:",
  "Talk duration": "Sprechdauer",
  "Talk duration_Talk Duration": "Sprechdauer",
  "The character '{{character}}' is not supported": "Das Zeichen \u201E{{character}}\u201C wird nicht unterst\xFCtzt.",
  "The characters {{characters}} aren't supported": "Die Zeichen \u201E{{characters}}\u201C werden nicht unterst\xFCtzt.",
  "The date has been updated from the refine.": "Die Daten wurden nach dem Einschr\xE4nken aktualisiert.",
  "The deleted user will still be able to access the board, but will not receive any notifications.": "Der gel\xF6schte Benutzer kann nach wie vor auf das Dashboard zugreifen, erh\xE4lt aber keine Benachrichtigungen.",
  "The page you are looking for does not exist!": "Die gesuchte Seite existiert nicht!",
  "The recording did not contain sufficient data <1></1>for a transcript to be created.": "Die Aufzeichnung enthielt nicht gen\xFCgend Daten <1></1>zur Erstellung eines Transkripts.",
  "The requested dataset is too large to be displayed.": "Der angeforderte Datensatz ist zu gro\xDF f\xFCr die Anzeige.",
  "The saved board will appear in the Board section on your left sidebar": "Das gespeicherte Dashboard wird im Abschnitt \u201EDashboards\u201C in der linken Seitenleiste angezeigt.",
  "There are new changes available, the page will be updated shortly.": "Es sind neue \xC4nderungen verf\xFCgbar; die Seite wird in K\xFCrze aktualisiert.",
  "There is no data available for this call.": "F\xFCr dieses Gespr\xE4ch sind keine Daten verf\xFCgbar.",
  "There were no notes taken for this call": "Zu diesem Gespr\xE4ch wurden keine Notizen gemacht",
  Time: Iw,
  "Time in queue": "Zeit in Warteschleife",
  "Time in queue: all": "Zeit in Warteschleife: alle",
  "Timed out": "Zeit\xFCberschreitung",
  "Timed out (legacy)": "Zeit\xFCberschreitung (veraltet)",
  Timeout: Ow,
  Timestamp: Lw,
  Today: xw,
  Tools: Rw,
  Topics: $w,
  "Topics detected for this call": "F\xFCr diesen Anruf erkannte Themen",
  "Topics filter": "Themenfilter",
  "Topics filter is loaded": "Themenfilter wurde geladen",
  Topics_plural: Mw,
  Total: Pw,
  "Total availability": "Verf\xFCgbarkeit gesamt",
  "Total call duration over time": "Gesamte Anrufdauer im Zeitverlauf",
  "Total call volume trends": "Trends Anrufe insgesamt",
  "Total calls": "Anrufe insgesamt",
  "Total calls by outcome": "Anrufe insgesamt nach Ergebnis",
  "Total calls over time": "Anrufe insgesamt im Zeitverlauf",
  "Total pause": "Pausen gesamt",
  "Total talk time": "Gesamte Sprechdauer",
  "Total talk time trends": "Trends Sprechdauer insgesamt",
  "Total talk time_Summary total talk time": "Gesamte Sprechdauer",
  Transcript: Fw,
  "Transcription will be enabled in the coming weeks": "Die Transkription wird in den n\xE4chsten Wochen aktiviert.",
  "Transfer completed": "Weiterleitung abgeschlossen",
  "Transfer ratio": "Weiterleitungsrate",
  Transferred: qw,
  Transferring: zw,
  "Transferring - Attended": "Weiterleitung \u2013 angenommen",
  "Transferring - Drop off": "Weiterleitung \u2013 abgebrochen",
  "Try again": "Erneut versuchen",
  "Type a number": "Nummer eingeben",
  "Type a user name": "Benutzernamen eingeben",
  "Type user or email": "Benutzer oder E-Mail-Adresse eingeben",
  "Unassigned devices": "Nicht zugewiesene Ger\xE4te",
  Undetermined: Uw,
  "Undetermined_No sentiment analysis result": "Unbestimmt",
  Undo: Bw,
  "Undo_Undo an action (date filter refine)": "R\xFCckg\xE4ngig",
  Ungrouped: Ww,
  Units: Vw,
  Unknown: Hw,
  Update: Qw,
  "Updating scheduled board": "Geplantes Dashboard aktualisieren...",
  "Updating scheduled board status": "Status des geplanten Dashboards aktualisieren...",
  "Updating {{dashboardName}}": "{{dashboardName}} aktualisieren...",
  "Updating {{dashboardName}} permissions": "Berechtigungen f\xFCr {{dashboardName}} aktualisieren...",
  "Upgrade to Complete to see the details": "Nehmen Sie ein Upgrade auf GoTo Contact Complete vor, um alle Details zu sehen",
  User: Gw,
  "Version: {{version}}": "Version: {{version}}",
  "View all participants": "Alle Teilnehmer anzeigen",
  "View all tags": "Alle Tags anzeigen",
  "View settings": "Einstellungen anzeigen",
  Voicemail: Yw,
  "Voicemail box": "Voicemailbox",
  "Voicemail reached": "Voicemailbox erreicht",
  "Wait Time": "Wartezeit",
  "Waiting on customer": "Auf Kunden warten",
  "Waiting on internal": "Auf interne Bearbeitung warten",
  "Waiting time": "Wartezeit",
  "We are working to pull the data you requested.": "Die von Ihnen angeforderten Daten werden gerade abgerufen.",
  "We detect sentiment using AI. Click a segment to refine the data.": "Wir erkennen die Stimmung mithilfe von KI. Klicken Sie auf ein Segment, um die Daten einzuschr\xE4nken.",
  Webchat: Zw,
  "Week to date": "Wochenbeginn bis heute",
  Weekly: Kw,
  Whispering: Jw,
  "Wrap up": "Nachbereitung",
  "Wrapped up by {{name}}": "Nachbereitet durch {{name}}",
  "Wrong number": "Falsche Nummer",
  Yearly: Xw,
  Yes: jw,
  "Yes_Callback Detail Column": "Ja",
  "Yes_Queue callback was offered": "Ja",
  Yesterday: eA,
  "You can click on a day to select a custom range.": "Sie k\xF6nnen auf einen Tag klicken, um einen benutzerdefinierten Zeitraum auszuw\xE4hlen.",
  "You can go back and reduce your selection (smaller date range, fewer queues, fewer agents, etc ) or you can export this selection instead.": "Sie k\xF6nnen entweder zur\xFCckgehen und Ihre Auswahl verkleinern (kleinerer Datumsbereich, weniger Warteschleifen oder Chatwarteschlangen, weniger Berater usw.), oder Sie k\xF6nnen stattdessen diese Auswahl exportieren.",
  "You do not have any custom boards.": "Sie haben keine benutzerdefinierten Dashboards.",
  "You do not have permission to view this recording": "Sie sind nicht zum Ansehen dieser Aufzeichnung berechtigt.",
  "Your download should start shortly": "Ihr Download sollte in K\xFCrze beginnen",
  "Your export is complete.": "Ihr Export wurde abgeschlossen.",
  "Your export is in progress.": "Ihr Export wird ausgef\xFChrt.",
  "Your report is ready! Thank you for your patience.": "Ihr Bericht ist fertig! Danke f\xFCr Ihre Geduld.",
  "agent-performance": "Beraterleistung",
  "bi-weekly": "14-t\xE4gig",
  "by AI": "von KI",
  "by {{who}}": "von {{who}}",
  daily: tA,
  from: aA,
  "from_from date": "von",
  'match the keyword "{{filterKeyword}}"': "Treffer f\xFCr den Suchbegriff \u201E{{filterKeyword}}\u201C",
  monthly: nA,
  quarterly: rA,
  "queue-caller": "Warteschleifenanrufer",
  to: iA,
  "to the external number": "an die externe Nummer",
  "to_to date": "bis",
  "topicsSentimentsTooltip.topicCount": "<0><0>{{ topic }}</0></0> wurde in <2>{{ count }}</2> Anruf(en) erw\xE4hnt:",
  "topicsSentimentsTooltip.topicCount_plural": "<0><0>{{ topic }}</0></0> wurde in <2>{{ count }}</2> Anruf(en) erw\xE4hnt:",
  weekly: oA,
  yearly: sA,
  "{{from}}-{{to}} of {{total}}": "{{from}}\u2013{{to}} von {{total}}",
  "{{percent}} %": "{{percent}} %",
  "{{percent}}% ({{value}}) are negative": "{{percent}} % ({{value}}) sind negativ",
  "{{percent}}% ({{value}}) are neutral": "{{percent}} % ({{value}}) sind neutral",
  "{{percent}}% ({{value}}) are positive": "{{percent}} % ({{value}}) sind positiv",
  "{{percent}}% {{sentiment}}": "{{percent}} % {{sentiment}}",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected": "{{selectedElementsCount}} von {{totalElementsCount}} ausgew\xE4hlt",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected_plural": "{{selectedElementsCount}} von {{totalElementsCount}} ausgew\xE4hlt",
  "{{selected}} of {{total}} selected": "{{selected}} von {{total}} ausgew\xE4hlt",
  "{{selected}} of {{total}} selected_Selected date buckets": "{{selected}} von {{total}} ausgew\xE4hlt",
  "{{selected}} of {{total}} selected_Selected date buckets_plural": "{{selected}} von {{total}} ausgew\xE4hlt",
  "{{selected}} of {{total}} selected_plural": "{{selected}} von {{total}} ausgew\xE4hlt",
  "{{value}} (+ {{amount}} more)": "{{value}} (+ {{amount}} weitere)"
}, dA = "AND", uA = "Abandoned", cA = "Actions", mA = "Agent", fA = "Agent", pA = "Alphabetical", hA = "Analytics", gA = "Answered", vA = "Apply", bA = "BETA", yA = "Back", CA = "Biweekly", SA = "Board", wA = "Boards", AA = "Callback", TA = "Caller", _A = "Campaign", EA = "Campaign", DA = "Cancel", kA = "Close", NA = "Connected", IA = "Customer", OA = "Daily", LA = "Delete", xA = "Details", RA = "Direct", $A = "Disconnected", MA = "Disposition", PA = "Duration", FA = "EXCEPT", qA = "Email", zA = "Evicted", UA = "Export", BA = "Facebook", WA = "Failed", VA = "Filter", HA = "From", QA = "Handled", GA = "Hangup", YA = "Highest", ZA = "Home", KA = "Hours", JA = "Instagram", XA = "Interested", jA = "Least", eT = "Line", tT = "Listening", aT = "Lowest", nT = "Manage", rT = "Maximum", iT = "Minimum", oT = "Minutes", sT = "Miscellaneous", lT = "Monthly", dT = "Most", uT = "NOTE", cT = "Name", mT = "Negative", fT = "Neutral", pT = "Never", hT = "No", gT = "Notes", vT = "OR", bT = "Open", yT = "Outbound", CT = "Outcome", ST = "Outcome", wT = "Overview", AT = "Parked", TT = "Pending", _T = "Positive", ET = "Pressed", DT = "Quarterly", kT = "Queue", NT = "Queue", IT = "Relocated", OT = "Rename", LT = "Repeats", xT = "Reset", RT = "Resolved", $T = "Ringing", MT = "SMS", PT = "Sales", FT = "Save", qT = "Schedule", zT = "Search", UT = "Seconds", BT = "Sentiment", WT = "Sentiment", VT = "Service", HT = "Settings", QT = "Share", GT = "Sorry", YT = "Spam", ZT = "Status", KT = "Success", JT = "Summary", XT = "Survey", jT = "Survey", e_ = "Tags", t_ = "Time", a_ = "Timeout", n_ = "Timestamp", r_ = "Today", i_ = "Tools", o_ = "Topics", s_ = "Topics", l_ = "Total", d_ = "Transcript", u_ = "Transferred", c_ = "Transferring", m_ = "Undetermined", f_ = "Undo", p_ = "Ungrouped", h_ = "Units", g_ = "Unknown", v_ = "Update", b_ = "User", y_ = "Voicemail", C_ = "Webchat", S_ = "Weekly", w_ = "Whispering", A_ = "Yearly", T_ = "Yes", __ = "Yesterday", E_ = "daily", D_ = "from", k_ = "monthly", N_ = "quarterly", I_ = "to", O_ = "weekly", L_ = "yearly", dn = {
  "# Pauses": "# Pauses",
  "# Queues": "# Queues",
  "% Queue calls transferred by agent": "% Queue calls transferred by agent",
  "% of calls answered": "% of calls answered",
  "% of talk time spent": "% of talk time spent",
  "({{hidden}} hidden)": "({{hidden}} hidden)",
  "({{hidden}} hidden)_Hidden bucket rows": "({{hidden}} hidden)",
  "({{hidden}} hidden)_Hidden bucket rows_plural": "({{hidden}} hidden)",
  "({{hidden}} hidden)_plural": "({{hidden}} hidden)",
  "+{{numberOfIntents}} more": "+{{numberOfIntents}} more",
  "+{{numberOfIntents}} more_plural": "+{{numberOfIntents}} more",
  "+{{numberOfTags}} more": "+{{numberOfTags}} more",
  "+{{numberOfTags}} more_plural": "+{{numberOfTags}} more",
  "+{{numberOfUsers}} more": "+{{numberOfUsers}} more",
  "+{{numberOfUsers}} more_plural": "+{{numberOfUsers}} more",
  "...and {{deviceNumber}} more": "...and {{deviceNumber}} more",
  "...more": "...more",
  "...more_more entries in list": "...more",
  "10 boards": "10 boards",
  "25 boards": "25 boards",
  "<0><0></0><1>{{callerNumber}}</1> started at\xA0<3><0>{{callStartTime}}</0></3>\xA0 Total duration:\xA0<5><0>{{formattedDuration}}</0></5></0>": "<0><0></0><1>{{callerNumber}}</1> started at\xA0<3><0>{{callStartTime}}</0></3>\xA0 Total duration:\xA0<5><0>{{formattedDuration}}</0></5></0>",
  "<0>If your download is not starting,</0><1>click here</1>.": "<0>If your download is not starting,</0><1>click here</1>.",
  "<0>If your download is not starting,</0><1>click here</1>._Button to reload the page to launch the download again.": "<0>If your download is not starting,</0><1>click here</1>.",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>": "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>_Button to open the settings drawer to configure the dashboard.": "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>",
  "A board with that name already exists.": "A board with that name already exists.",
  "A transcript could not be created": "A transcript could not be created",
  "A transcript is being processed": "A transcript is being processed",
  "AI sentiment": "AI sentiment",
  AND: dA,
  "AND_Query operator": "AND",
  Abandoned: uA,
  "Access denied!": "Access denied!",
  Actions: cA,
  "Add a filter": "Add a filter",
  Agent: mA,
  "Agent Performance": "Agent performance",
  "Agent Summary - Metric": "Agent Summary - Metric",
  "Agent availability": "Agent availability",
  "Agent name": "Agent name",
  "Agent summary": "Agent summary",
  "Agent summary - table": "Agent summary - table",
  Agent_plural: fA,
  "Agents ({{selectedCount}} of {{totalCount}})": "Agents ({{selectedCount}} of {{totalCount}})",
  "Agents filter": "Agents filter",
  "Agents filter is loaded": "Agents filter is loaded",
  "All agents": "All agents",
  "All call types": "All call types",
  "All callback offered": "All callback offered",
  "All callback requested": "All callback requested",
  "All campaigns": "All campaigns",
  "All chat queues": "All chat queues",
  "All chat types": "All chat types",
  "All conversation tags": "All conversation tags",
  "All dispositions": "All dispositions",
  "All outcomes": "All outcomes",
  "All queues": "All queues",
  "All replies": "All replies",
  "All sentiments": "All sentiments",
  "All survey responses": "All survey responses",
  "All surveys": "All surveys",
  Alphabetical: pA,
  "An error occurred while creating the board, please try again!": "An error occurred while creating the board, please try again!",
  "An error occurred while deleting the board.": "An error occurred while deleting the board.",
  "An error occurred while deleting the scheduled board.": "An error occurred while deleting the scheduled board.",
  "An error occurred while downloading the scheduled export.": "An error occurred while downloading the scheduled export.",
  "An error occurred while exporting {{dataName}}.": "An error occurred while exporting {{dataName}}.",
  "An error occurred while fetching call reports for conversation space {{conversationSpace}}.": "An error occurred while fetching call reports for conversation space {{conversationSpace}}.",
  "An error occurred while fetching dashboard to save": "An error occurred while fetching dashboard to save",
  "An error occurred while fetching filters": "An error occurred while fetching filters",
  "An error occurred while fetching queue caller": "An error occurred while fetching queue caller",
  "An error occurred while fetching queue caller details": "An error occurred while fetching queue caller details",
  "An error occurred while fetching queue caller overall sentiments": "An error occurred while fetching queue caller overall sentiments",
  "An error occurred while fetching queue caller topics sentiments": "An error occurred while fetching queue caller topics sentiments",
  "An error occurred while fetching scheduled dashboard users": "An error occurred while fetching scheduled dashboard users",
  "An error occurred while fetching scheduled dashboards": "An error occurred while fetching scheduled dashboards",
  "An error occurred while fetching the board": "An error occurred while fetching the board",
  "An error occurred while fetching the transcript.": "An error occurred while fetching the transcript.",
  "An error occurred while scheduling the board, please try again.": "An error occurred while scheduling the board, please try again.",
  "An error occurred while sharing the board.": "An error occurred while sharing the board.",
  "An error occurred while updating board permissions.": "An error occurred while updating board permissions.",
  "An error occurred while updating the board status.": "An error occurred while updating the board status.",
  "An error occurred while updating the board, please try again!": "An error occurred while updating the board, please try again!",
  "An error occurred while updating the board.": "An error occurred while updating the board.",
  "An error occurred while updating the scheduled dashboard, please try again.": "An error occurred while updating the scheduled dashboard, please try again.",
  Analytics: hA,
  Answered: gA,
  "Answered elsewhere": "Answered elsewhere",
  Apply: vA,
  "Are you sure you want to delete the scheduled {{dashboardName}} board?": "Are you sure you want to delete the scheduled {{dashboardName}} board?",
  "Are you sure you want to delete {{dashboardName}}?": "Are you sure you want to delete {{dashboardName}}?",
  "Ascending order": "Ascending order",
  "Auto attendant": "Auto attendant",
  "Auto attendant node": "Auto attendant node",
  "Availability and pause time by agent": "Availability and pause time by agent",
  "Availability ratio": "Availability ratio",
  "Available in a higher tier": "Available in a higher tier",
  "Average call duration": "Average call duration",
  "Average call sentiment for selected time range": "Average call sentiment for selected time range",
  "Average talk time": "Average talk time",
  "Average talk time_Summary average talk time": "Average talk time",
  "Average time in queue": "Average time in queue",
  "Average wait time": "Average wait time",
  "Avg. call duration": "Avg. call duration",
  "Avg. call duration_Average Call Duration": "Avg. call duration",
  "Avg. talk duration": "Avg. talk duration",
  "Avg. talk duration_Average Talk Duration": "Avg. talk duration",
  "Avg. time in queue": "Avg. time in queue",
  "Avg. time in queue_Average time in queue": "Avg. time in queue",
  "Avg. wait time": "Avg. wait time",
  "Avg. wait time_Average Wait Time": "Avg. wait time",
  BETA: bA,
  Back: yA,
  "Bar chart icon with 5 bars": "Bar chart icon with 5 bars",
  Biweekly: CA,
  "Blindly transferred:": "Blindly transferred:",
  Board: SA,
  "Board Name": "Board Name",
  "Board actions": "Board actions",
  "Board dates": "Board dates",
  "Board has been created.": "Board has been created.",
  "Board has been deleted.": "Board has been deleted.",
  "Board has been scheduled.": "Board has been scheduled.",
  "Board has been shared.": "Board has been shared.",
  "Board link": "Board link",
  "Board name": "Board name",
  "Board name is required": "Board name is required",
  "Board permissions has been updated.": "Board permissions has been updated.",
  Boards: wA,
  "CSV file": "CSV file",
  "Call data per call. Click on each call for a detailed view.": "Call data per call. Click on each call for a detailed view.",
  "Call data per day from {{dateRange}}. Click on each day for a detailed view.": "Call data per day from {{dateRange}}. Click on each day for a detailed view.",
  "Call data per hour on {{dateRange}}. Click on each hour for a detailed view.": "Call data per hour on {{dateRange}}. Click on each hour for a detailed view.",
  "Call duration": "Call duration",
  "Call duration: all": "Call duration: all",
  "Call duration_Call Duration": "Call duration",
  "Call queue": "Call queue",
  "Call report": "Call report",
  "Call reports": "Call reports",
  "Call started": "Call started",
  "Call type": "Call type",
  "Call type_plural": "Call type",
  "Call types ({{selectedCount}} of {{totalCount}})": "Call types ({{selectedCount}} of {{totalCount}})",
  "Call types filter": "Call types filter",
  "Call types filter is loaded": "Call types filter is loaded",
  "Call volume": "Call volume",
  Callback: AA,
  "Callback dispatched": "Callback dispatched",
  "Callback not offered": "Callback not offered",
  "Callback not requested": "Callback not requested",
  "Callback offered": "Callback offered",
  "Callback offered ({{selectedCount}} of {{totalCount}})": "Callback offered ({{selectedCount}} of {{totalCount}})",
  "Callback offered filter": "Callback offered filter",
  "Callback offered_Callback Offered": "Callback offered",
  "Callback offered_plural": "Callback offered",
  "Callback requested": "Callback requested",
  "Callback requested ({{selectedCount}} of {{totalCount}})": "Callback requested ({{selectedCount}} of {{totalCount}})",
  "Callback requested filter": "Callback requested filter",
  "Callback requested filter is loaded": "Callback requested filter is loaded",
  "Callback requested_Callback Requested": "Callback requested",
  "Callback requested_plural": "Callback requested",
  "Callback requests": "Callback requests",
  "Callback requests per current filter, categorized by handled, evicted, or pending.": "Callback requests per current filter, categorized by handled, evicted, or pending.",
  "Callbacks are pending": "Callbacks are pending",
  "Callbacks completed per standard workflow": "Callbacks completed per standard workflow",
  "Callbacks not completed": "Callbacks not completed",
  Caller: TA,
  "Caller info": "Caller info",
  "Caller info node": "Caller info node",
  "Calls transferred": "Calls transferred",
  Campaign: _A,
  "Campaign type": "Campaign type",
  "Campaign type_plural": "Campaign type",
  "Campaign types ({{selectedCount}} of {{totalCount}})": "Campaign types ({{selectedCount}} of {{totalCount}})",
  "Campaign types filter": "Campaign types filter",
  "Campaign types filter is loaded": "Campaign types filter is loaded",
  Campaign_plural: EA,
  "Campaigns ({{selectedCount}} of {{totalCount}})": "Campaigns ({{selectedCount}} of {{totalCount}})",
  "Campaigns filter": "Campaigns filter",
  "Campaigns filter is loaded": "Campaigns filter is loaded",
  Cancel: DA,
  "Cancel export": "Cancel export",
  "Change to next tip": "Change to next tip",
  "Change to previous tip": "Change to previous tip",
  "Chat queue": "Chat queue",
  "Chat queue_plural": "Chat queue",
  "Chat queues ({{selectedCount}} of {{totalCount}})": "Chat queues ({{selectedCount}} of {{totalCount}})",
  "Chat queues filter": "Chat queues filter",
  "Chat queues filter is loaded": "Chat queues filter is loaded",
  "Chat type": "Chat type",
  "Chat type_plural": "Chat type",
  "Chat types ({{selectedCount}} of {{totalCount}})": "Chat types ({{selectedCount}} of {{totalCount}})",
  "Chat types filter": "Chat types filter",
  "Chat types filter is loaded": "Chat types filter is loaded",
  "Check back later for a completed transcript.": "Check back later for a completed transcript.",
  "Check back later for interaction details.": "Check back later for interaction details.",
  "Check back later for overview data": "Check back later for overview data",
  "Check back later for overview data.": "Check back later for overview data.",
  "Choose a secondary filter": "Choose a secondary filter",
  "Circle size represents volume of topics most commonly detected by AI. Bolder colors indicate a more prevalent sentiment when the topic is mentioned.": "Circle size represents volume of topics most commonly detected by AI. Bolder colors indicate a more prevalent sentiment when the topic is mentioned.",
  "Click to filter calls for negative sentiment": "Click to filter calls for negative sentiment",
  "Click to filter calls for neutral sentiment": "Click to filter calls for neutral sentiment",
  "Click to filter calls for positive sentiment": "Click to filter calls for positive sentiment",
  "Click to filter the board by evicted calls": "Click to filter the board by evicted calls",
  "Click to filter the board by handled calls": "Click to filter the board by handled calls",
  "Click to filter the board by pending calls": "Click to filter the board by pending calls",
  "Click to refine data": "Click to refine data",
  Close: kA,
  "Close banner": "Close banner",
  "Close call reports modal": "Close call reports modal",
  "Close dashboard deletion modal": "Close dashboard deletion modal",
  "Close delete schedule modal": "Close delete schedule modal",
  "Close drawer": "Close drawer",
  "Close error modal": "Close error modal",
  "Close export modal": "Close export modal",
  "Close rename modal": "Close rename modal",
  "Close save modal": "Close save modal",
  "Close schedule modal": "Close schedule modal",
  "Close share modal": "Close share modal",
  "Close timeout modal": "Close timeout modal",
  "Closed lost": "Closed lost",
  "Closed won": "Closed won",
  "Collapse the list": "Collapse the list",
  "Conference bridge": "Conference bridge",
  Connected: NA,
  "Contact support": "Contact support",
  "Contact support_Link to support page": "Contact support",
  "Conversation tag": "Conversation tag",
  "Conversation tag_plural": "Conversation tag",
  "Conversation tags ({{selectedCount}} of {{totalCount}})": "Conversation tags ({{selectedCount}} of {{totalCount}})",
  "Conversation tags filter": "Conversation tags filter",
  "Conversation tags filter is loaded": "Conversation tags filter is loaded",
  "Copy link": "Copy link",
  "Currently loading": "Currently loading",
  Customer: IA,
  "Customer pressed:": "Customer pressed:",
  "DTMF exit": "DTMF exit",
  Daily: OA,
  "Daily pause avg per queue": "Daily pause avg per queue",
  Date: "Date",
  "Date created": "Date created",
  "Date range": "Date range",
  "Date range filter": "Date range filter",
  Delete: LA,
  "Delete board": "Delete board",
  "Delete scheduled board": "Delete scheduled board",
  "Delete the scheduled board": "Delete the scheduled board",
  "Deleted agent": "Deleted agent",
  "Deleted agents": "Deleted agents",
  "Deleted device": "Deleted device",
  "Deleted device_plural": "Deleted device",
  "Deleted queue": "Deleted queue",
  "Deleted user": "Deleted user",
  "Deleting scheduled {{dashboardName}} board": "Deleting scheduled {{dashboardName}} board",
  "Deleting {{dashboardName}}": "Deleting {{dashboardName}}",
  "Descending order": "Descending order",
  "Detail view": "Detail view",
  "Detail view {{dateRange}}": "Detail view {{dateRange}}",
  "Detail view {{dateRange}}_Summary overview for the selected date range": "Detail view {{dateRange}}",
  Details: xA,
  "Dial plan": "Dial plan",
  "Did you know? Approximately 18.7 billion texts are sent worldwide every day! You can text and message customers using our Multi-Channel feature included in all GoTo Contact plans!": "Did you know? Approximately 18.7 billion texts are sent worldwide every day! You can text and message customers using our Multi-Channel feature included in all GoTo Contact plans!",
  "Did you know? If the caller does not have a valid caller ID, they will not be offered the callback option, regardless of the wait time threshold being exceeded.": "Did you know? If the caller does not have a valid caller ID, they will not be offered the callback option, regardless of the wait time threshold being exceeded.",
  "Did you know? You can change your chart view from the gear icon in your report page.": "Did you know? You can change your chart view from the gear icon in your report page.",
  Direct: RA,
  "Direct inbound": "Direct inbound",
  Disconnected: $A,
  Disposition: MA,
  "Disposition ({{selectedCount}} of {{totalCount}})": "Disposition ({{selectedCount}} of {{totalCount}})",
  "Disposition filter": "Disposition filter",
  "Disposition filter is loaded": "Disposition filter is loaded",
  "Disposition:": "Disposition:",
  "Draggable item {{ itemLabel }}. Press space bar to start a drag. When dragging you can use\n                                the arrow keys to move the item around and escape to cancel. Ensure your screen reader is in\n                                focus mode or forms mode": `Draggable item {{ itemLabel }}. Press space bar to start a drag. When dragging you can use
                          the arrow keys to move the item around and escape to cancel. Ensure your screen reader is in
                          focus mode or forms mode`,
  Duration: PA,
  EXCEPT: FA,
  "EXCEPT_Query operator": "EXCEPT",
  "Each section will be exported as separate files.": "Each section will be exported as separate files.",
  "Edit scheduled board": "Edit scheduled board",
  "Edit the scheduled board": "Edit the scheduled board",
  Email: qA,
  "Email_Dropdown selectable option": "Email",
  "Entered another queue": "Entered another queue",
  "Entered dial plan": "Entered dial plan",
  Error: "Error",
  "Error while fetching agent availability data.": "Error while fetching agent availability data.",
  "Error while fetching agent summary data.": "Error while fetching agent summary data.",
  "Error while fetching call volume data.": "Error while fetching call volume data.",
  "Error while fetching total talk time data.": "Error while fetching total talk time data.",
  "Error while fetching transfers data.": "Error while fetching transfers data.",
  Evicted: zA,
  "Evicted (legacy)": "Evicted (legacy)",
  "Evicted customer": "Evicted customer",
  "Evicted system": "Evicted system",
  "Evicted user": "Evicted user",
  "Expand the list": "Expand the list",
  Export: UA,
  "Export conversation detail": "Export conversation detail",
  "Export failed.": "Export failed.",
  "Export for {{filterDateRange}}": "Export for {{filterDateRange}}",
  "Export is currently unavailable": "Export is currently unavailable",
  "Export is unavailable for this board.": "Export is unavailable for this board.",
  "Ext. Type": "Ext. Type",
  "External number": "External number",
  Facebook: BA,
  Failed: WA,
  "Failed_Failed to reach the voicemail": "Failed",
  Filter: VA,
  "Filter will not be applied as nothing is selected.": "Filter will not be applied as nothing is selected.",
  "Filters loading, please wait.": "Filters loading, please wait.",
  "Filters saved": "Filters saved",
  "For more information, please visit our <2>support site <1></1></2>": "For more information, please visit our <2>support site <1></1></2>",
  "For more information, please visit our <2>support site <1></1></2>_Link to support site for timeout dialog": "For more information, please visit our <2>support site <1></1></2>",
  "Forward 10 seconds": "Forward 10 seconds",
  From: HA,
  "Generated report file type": "Generated report file type",
  "GoTo Analytics": "GoTo Analytics",
  "Great news! We now offer dedicated callback reporting on the Queue Caller board.\xA0<1>Visit our support page to learn more about callback, timed-out and eviction reporting.</1>": "Great news! We now offer dedicated callback reporting on the Queue Caller board.\xA0<1>Visit our support page to learn more about callback, timed-out and eviction reporting.</1>",
  "Group by": "Group by",
  "Group by filter": "Group by filter",
  Handled: QA,
  "Handled contacts": "Handled contacts",
  "Handled contacts_Summary handled contacts": "Handled contacts",
  Hangup: GA,
  "Hangup by:": "Hangup by:",
  "Hide empty rows": "Hide empty rows",
  Highest: YA,
  "Highest avg": "Highest avg",
  "Highest avg_Highest average talk time": "Highest avg",
  "Highest value": "Highest value",
  "Highest_Highest total talk time": "Highest",
  Home: ZA,
  "Home_Button that redirect to the home page": "Home",
  Hours: KA,
  "Hover for details": "Hover for details",
  "Including all call types": "Including all call types",
  "Including all campaign types": "Including all campaign types",
  "Including all campaigns": "Including all campaigns",
  "Including all outcomes": "Including all outcomes",
  "Including all sentiments": "Including all sentiments",
  "Including all topics": "Including all topics",
  "Including deleted agents and users": "Including deleted agents and users",
  "Including deleted queues": "Including deleted queues",
  "Including deleted sources": "Including deleted sources",
  Instagram: JA,
  "Insufficient privileges": "Insufficient privileges",
  "Intents:": "Intents:",
  "Interaction details": "Interaction details",
  Interested: XA,
  "Internal number": "Internal number",
  "Invalid option": "Invalid option",
  "Invalid option_Auto attendant option": "Invalid option",
  "Invalid.": "Invalid.",
  "Invalid._The minimum or maximum duration is invalid": "Invalid.",
  "Invite users / emails within your organization": "Invite users / emails within your organization",
  "Issue opened": "Issue opened",
  "Issue resolved": "Issue resolved",
  "It looks like you don\u2019t have permission \nto access this board.": `It looks like you don\u2019t have permission 
to access this board.`,
  "Item {{itemLabel}}": "Item {{itemLabel}}",
  "Item {{itemLabel}} has moved from position {{startPosition}} to {{endPosition}}": "Item {{itemLabel}} has moved from position {{startPosition}} to {{endPosition}}",
  "Item {{itemLabel}} lifted from position {{position}}": "Item {{itemLabel}} lifted from position {{position}}",
  "Item {{itemLabel}} moved from position {{startPosition}} to position {{endPosition}}": "Item {{itemLabel}} moved from position {{startPosition}} to position {{endPosition}}",
  "Joined empty": "Joined empty",
  "Last 14 days": "Last 14 days",
  "Last 30 days": "Last 30 days",
  "Last 7 days": "Last 7 days",
  "Last agent in the call:": "Last agent in the call:",
  Least: jA,
  "Least_Least handled contacts": "Least",
  "Leaving reason": "Leaving reason",
  "Leaving reason:": "Leaving reason:",
  "Left empty": "Left empty",
  "License: {{currentLicense}}": "License: {{currentLicense}}",
  Line: eT,
  "Link copied!": "Link copied!",
  "List of {{item}}": "List of {{item}}",
  Listening: tT,
  "Loading SMS sent filter...": "Loading SMS sent filter...",
  "Loading agents filter...": "Loading agents filter...",
  "Loading call types filter...": "Loading call types filter...",
  "Loading callback offered filter...": "Loading callback offered filter...",
  "Loading callback requested filter...": "Loading callback requested filter...",
  "Loading campaign types filter...": "Loading campaign types filter...",
  "Loading campaigns filter...": "Loading campaigns filter...",
  "Loading chat queues filter...": "Loading chat queues filter...",
  "Loading chat types filter...": "Loading chat types filter...",
  "Loading conversation tags filter...": "Loading conversation tags filter...",
  "Loading disposition filter...": "Loading disposition filter...",
  "Loading outcomes filter...": "Loading outcomes filter...",
  "Loading queues filter...": "Loading queues filter...",
  "Loading sentiments filter...": "Loading sentiments filter...",
  "Loading survey responses filter...": "Loading survey responses filter...",
  "Loading surveys filter...": "Loading surveys filter...",
  "Loading topics filter...": "Loading topics filter...",
  "Loading...": "Loading...",
  "Longest pause duration": "Longest pause duration",
  Lowest: aT,
  "Lowest avg": "Lowest avg",
  "Lowest avg_Lowest average talk time": "Lowest avg",
  "Lowest value": "Lowest value",
  "Lowest_Least total talk time": "Lowest",
  "Make a selection to filter": "Make a selection to filter",
  Manage: nT,
  "Manage language": "Manage language",
  "Max boards per section": "Max boards per section",
  Maximum: rT,
  Minimum: iT,
  Minutes: oT,
  Miscellaneous: sT,
  "Miscellaneous - Transferred": "Miscellaneous - Transferred",
  "Miscellaneous - Voicemail": "Miscellaneous - Voicemail",
  "Miscellaneous - Wrong number": "Miscellaneous - Wrong number",
  "Missed contacts": "Missed contacts",
  "Month to date": "Month to date",
  Monthly: lT,
  Most: dT,
  "Most mentioned topics": "Most mentioned topics",
  "Most_Most handled contacts": "Most",
  "Mostly negative": "Mostly negative",
  "Mostly positive": "Mostly positive",
  "Movement cancelled. Item {{itemLabel}} has returned to its starting position {{startPosition}} of {{listLength}}": "Movement cancelled. Item {{itemLabel}} has returned to its starting position {{startPosition}} of {{listLength}}",
  "Must not exceed 255 characters": "Must not exceed 255 characters",
  NOTE: uT,
  Name: cT,
  Negative: mT,
  "Negative Answer": "Negative Answer",
  "Negative_Negative sentiment analysis result": "Negative",
  Neutral: fT,
  "Neutral_Neutral sentiment analysis result": "Neutral",
  Never: pT,
  "New schedule": "New schedule",
  "Next page": "Next page",
  No: hT,
  "No Answer": "No Answer",
  "No answer": "No answer",
  "No callback offered": "No callback offered",
  "No callback requested": "No callback requested",
  "No data": "No data",
  "No data available!": "No data available!",
  "No data to display": "No data to display",
  "No data yet": "No data yet",
  "No notes available": "No notes available",
  "No overview yet": "No overview yet",
  "No response": "No response",
  "No transcript data": "No transcript data",
  "No transcript yet": "No transcript yet",
  "No users to display": "No users to display",
  "No_Callback Detail Column": "No",
  "No_Queue callback was not offered": "No",
  "Not applicable (-)": "Not applicable (-)",
  Notes: gT,
  "Notes taken during this call will appear here.": "Notes taken during this call will appear here.",
  "Notes_Notes added to a call by an agent": "Notes",
  "Nothing is selected.": "Nothing is selected.",
  "Notify by": "Notify by",
  OR: vT,
  "OR_Query operator": "OR",
  "On Hold": "On Hold",
  "Only numbers are allowed": "Only numbers are allowed",
  Open: bT,
  "Open boards menu options": "Open boards menu options",
  "Open {{dashboard}} board menu options": "Open {{dashboard}} board menu options",
  "Opt {{option}}": "Opt {{option}}",
  "Opt {{option}}_Auto attendant option": "Opt {{option}}",
  "Option {{option}}": "Option {{option}}",
  "Option {{option}}_Customer phone option pressed": "Option {{option}}",
  Outbound: yT,
  Outcome: CT,
  Outcome_plural: ST,
  "Outcomes ({{selectedCount}} of {{totalCount}})": "Outcomes ({{selectedCount}} of {{totalCount}})",
  "Outcomes filter": "Outcomes filter",
  "Outcomes filter format has changed": "Outcomes filter format has changed",
  "Outcomes filter is loaded": "Outcomes filter is loaded",
  "Over time - charts": "Over time - charts",
  "Overall sentiment": "Overall sentiment",
  Overview: wT,
  "Overview {{dateRange}}": "Overview {{dateRange}}",
  "Overview {{dateRange}}_Summary overview for the selected date range": "Overview {{dateRange}}",
  "Overview:": "Overview:",
  "Page {{index}}/{{count}}": "Page {{index}}/{{count}}",
  "Page {{index}}/{{count}}_plural": "Page {{index}}/{{count}}",
  Parked: AT,
  "Participants names": "Participants names",
  "Participants phone numbers": "Participants phone numbers",
  "Participants:": "Participants:",
  "Pause the audio": "Pause the audio",
  "Pause the scheduled board": "Pause the scheduled board",
  Pending: TT,
  "Percentage breakdown from calls included in your current filter.": "Percentage breakdown from calls included in your current filter.",
  "Phone number": "Phone number",
  "Play sound clip": "Play sound clip",
  "Play the audio": "Play the audio",
  "Please select which data columns and tables you would like to export. CSV files will not contain graphics or images.": "Please select which data columns and tables you would like to export. CSV files will not contain graphics or images.",
  Positive: _T,
  "Positive Answer": "Positive Answer",
  "Positive_Positive sentiment analysis result": "Positive",
  Pressed: ET,
  "Previous month": "Previous month",
  "Previous page": "Previous page",
  "Previous week": "Previous week",
  Quarterly: DT,
  Queue: kT,
  "Queue Caller": "Queue caller",
  "Queue Caller Summary - grouped by date": "Queue Caller Summary - grouped by date",
  "Queue Caller Summary - grouped by queue": "Queue Caller Summary - grouped by queue",
  "Queue callback offered:": "Queue callback offered:",
  "Queue caller - Details": "Queue caller - Details",
  "Queue caller - Summary": "Queue caller - Summary",
  "Queue caller details table": "Queue caller details table",
  "Queue caller summary table": "Queue caller summary table",
  "Queue calls": "Queue calls",
  "Queue configured wrap up:": "Queue configured wrap up:",
  "Queue full": "Queue full",
  "Queue name:": "Queue name:",
  "Queue node": "Queue node",
  "Queue transfers": "Queue transfers",
  "Queue type:": "Queue type:",
  Queue_plural: NT,
  "Queues ({{selectedCount}} of {{totalCount}})": "Queues ({{selectedCount}} of {{totalCount}})",
  "Queues filter": "Queues filter",
  "Queues filter is loaded": "Queues filter is loaded",
  "Recently updated": "Recently updated",
  "Recording not available": "Recording not available",
  "Refine data": "Refine data",
  Relocated: IT,
  "Remove filter": "Remove filter",
  "Removed by supervisor": "Removed by supervisor",
  Rename: OT,
  Repeats: LT,
  "Replace callback": "Replace callback",
  "Request Timeout": "Request Timeout",
  Reset: xT,
  "Reset filters": "Reset filters",
  Resolved: RT,
  "Resolved by admin": "Resolved by admin",
  "Resolved conversation": "Resolved conversation",
  "Resume the scheduled board": "Resume the scheduled board",
  "Rewind 10 seconds": "Rewind 10 seconds",
  "Ring group": "Ring group",
  Ringing: $T,
  "Rows per page": "Rows per page",
  SMS: MT,
  "SMS auto-reply": "SMS auto-reply",
  "SMS sent": "SMS sent",
  "SMS sent ({{selectedCount}} of {{totalCount}})": "SMS sent ({{selectedCount}} of {{totalCount}})",
  "SMS sent filter": "SMS sent filter",
  "SMS sent filter is loaded": "SMS sent filter is loaded",
  Sales: PT,
  "Sales - Callback": "Sales - Callback",
  "Sales - Closed lost": "Sales - Closed lost",
  "Sales - Closed won": "Sales - Closed won",
  "Sales - Interested": "Sales - Interested",
  Save: FT,
  "Save As": "Save As",
  "Save Filter": "Save Filter",
  "Save as new board": "Save as new board",
  "Save as...": "Save as...",
  Schedule: qT,
  "Schedule board": "Schedule board",
  "Schedule manager": "Schedule manager",
  "Schedule node": "Schedule node",
  "Schedule selected:": "Schedule selected:",
  "Scheduled board has been deleted.": "Scheduled board has been deleted.",
  "Scheduled board has been paused.": "Scheduled board has been paused.",
  "Scheduled board has been resumed.": "Scheduled board has been resumed.",
  "Scheduled board has been updated.": "Scheduled board has been updated.",
  "Scheduled boards": "Scheduled boards",
  "Scheduled date": "Scheduled date",
  "Scheduled date & time": "Scheduled date & time",
  "Scheduled owner": "Scheduled owner",
  "Scheduled time": "Scheduled time",
  "Scheduling dashboard": "Scheduling dashboard",
  Search: zT,
  "Search users": "Search users",
  Seconds: UT,
  "Sections visibility": "Sections visibility",
  "Select all": "Select all",
  "Select entries below to see the details": "Select entries below to see the details",
  "Select file type": "Select file type",
  "Select team members": "Select team members",
  "Selected board does not support that type.": "Selected board does not support that type.",
  Sentiment: BT,
  "Sentiment analysis": "Sentiment analysis",
  "Sentiment detected for this call": "Sentiment detected for this call",
  Sentiment_plural: WT,
  "Sentiments ({{selectedCount}} of {{totalCount}})": "Sentiments ({{selectedCount}} of {{totalCount}})",
  "Sentiments filter": "Sentiments filter",
  "Sentiments filter is loaded": "Sentiments filter is loaded",
  Service: VT,
  "Service - Issue opened": "Service - Issue opened",
  "Service - Issue resolved": "Service - Issue resolved",
  "Service - No answer": "Service - No answer",
  "Service - Waiting on customer": "Service - Waiting on customer",
  "Service - Waiting on internal": "Service - Waiting on internal",
  "Set the range for call duration.": "Set the range for call duration.",
  "Set the range for waiting time. By default, all min/max are selected.": "Set the range for waiting time. By default, all min/max are selected.",
  Settings: HT,
  "Settings_Button to open the settings menu": "Settings",
  Share: QT,
  "Share - {{dashboardName}}": "Share - {{dashboardName}}",
  "Shared with": "Shared with",
  "Shared with me": "Shared with me",
  "Shared with:": "Shared with:",
  "Sharing {{dashboardName}}": "Sharing {{dashboardName}}",
  "Show all": "Show all",
  "Show more boards": "Show more boards",
  "Show selected only": "Show selected only",
  "Sign out": "Sign out",
  "Slightly negative": "Slightly negative",
  "Slightly positive": "Slightly positive",
  Sorry: GT,
  "Sort by": "Sort by",
  "Sort {{columnName}}": "Sort {{columnName}}",
  Spam: YT,
  Status: ZT,
  "Status:": "Status:",
  Success: KT,
  "Success_Success to reach the voicemail": "Success",
  Summary: JT,
  "Summary_Back to summary button": "Summary",
  Survey: XT,
  "Survey response": "Survey response",
  "Survey response_plural": "Survey response",
  "Survey responses ({{selectedCount}} of {{totalCount}})": "Survey responses ({{selectedCount}} of {{totalCount}})",
  "Survey responses filter": "Survey responses filter",
  "Survey responses filter is loaded": "Survey responses filter is loaded",
  Survey_plural: jT,
  "Surveys ({{selectedCount}} of {{totalCount}})": "Surveys ({{selectedCount}} of {{totalCount}})",
  "Surveys filter": "Surveys filter",
  "Surveys filter is loaded": "Surveys filter is loaded",
  Tags: e_,
  "Tags:": "Tags:",
  "Talk duration": "Talk duration",
  "Talk duration_Talk Duration": "Talk duration",
  "The character '{{character}}' is not supported": "The character '{{character}}' is not supported",
  "The characters {{characters}} aren't supported": "The characters {{characters}} aren't supported",
  "The date has been updated from the refine.": "The date has been updated from the refine.",
  "The deleted user will still be able to access the board, but will not receive any notifications.": "The deleted user will still be able to access the board, but will not receive any notifications.",
  "The page you are looking for does not exist!": "The page you are looking for does not exist!",
  "The recording did not contain sufficient data <1></1>for a transcript to be created.": "The recording did not contain sufficient data <1></1>for a transcript to be created.",
  "The requested dataset is too large to be displayed.": "The requested dataset is too large to be displayed.",
  "The saved board will appear in the Board section on your left sidebar": "The saved board will appear in the Board section on your left sidebar",
  "There are new changes available, the page will be updated shortly.": "There are new changes available, the page will be updated shortly.",
  "There is no data available for this call.": "There is no data available for this call.",
  "There were no notes taken for this call": "There were no notes taken for this call",
  Time: t_,
  "Time in queue": "Time in queue",
  "Time in queue: all": "Time in queue: all",
  "Timed out": "Timed out",
  "Timed out (legacy)": "Timed out (legacy)",
  Timeout: a_,
  Timestamp: n_,
  Today: r_,
  Tools: i_,
  Topics: o_,
  "Topics detected for this call": "Topics detected for this call",
  "Topics filter": "Topics filter",
  "Topics filter is loaded": "Topics filter is loaded",
  Topics_plural: s_,
  Total: l_,
  "Total availability": "Total availability",
  "Total call duration over time": "Total call duration over time",
  "Total call volume trends": "Total call volume trends",
  "Total calls": "Total calls",
  "Total calls by outcome": "Total calls by outcome",
  "Total calls over time": "Total calls over time",
  "Total pause": "Total pause",
  "Total talk time": "Total talk time",
  "Total talk time trends": "Total talk time trends",
  "Total talk time_Summary total talk time": "Total talk time",
  Transcript: d_,
  "Transcription will be enabled in the coming weeks": "Transcription will be enabled in the coming weeks",
  "Transfer completed": "Transfer completed",
  "Transfer ratio": "Transfer ratio",
  Transferred: u_,
  Transferring: c_,
  "Transferring - Attended": "Transferring - Attended",
  "Transferring - Drop off": "Transferring - Drop off",
  "Try again": "Try again",
  "Type a number": "Type a number",
  "Type a user name": "Type a user name",
  "Type user or email": "Type user or email",
  "Unassigned devices": "Unassigned devices",
  Undetermined: m_,
  "Undetermined_No sentiment analysis result": "Undetermined",
  Undo: f_,
  "Undo_Undo an action (date filter refine)": "Undo",
  Ungrouped: p_,
  Units: h_,
  Unknown: g_,
  Update: v_,
  "Updating scheduled board": "Updating scheduled board",
  "Updating scheduled board status": "Updating scheduled board status",
  "Updating {{dashboardName}}": "Updating {{dashboardName}}",
  "Updating {{dashboardName}} permissions": "Updating {{dashboardName}} permissions",
  "Upgrade to Complete to see the details": "Upgrade to Complete to see the details",
  User: b_,
  "Version: {{version}}": "Version: {{version}}",
  "View all participants": "View all participants",
  "View all tags": "View all tags",
  "View settings": "View settings",
  Voicemail: y_,
  "Voicemail box": "Voicemail box",
  "Voicemail reached": "Voicemail reached",
  "Wait Time": "Wait Time",
  "Waiting on customer": "Waiting on customer",
  "Waiting on internal": "Waiting on internal",
  "Waiting time": "Waiting time",
  "We are working to pull the data you requested.": "We are working to pull the data you requested.",
  "We detect sentiment using AI. Click a segment to refine the data.": "We detect sentiment using AI. Click a segment to refine the data.",
  Webchat: C_,
  "Week to date": "Week to date",
  Weekly: S_,
  Whispering: w_,
  "Wrap up": "Wrap up",
  "Wrapped up by {{name}}": "Wrapped up by {{name}}",
  "Wrong number": "Wrong number",
  Yearly: A_,
  Yes: T_,
  "Yes_Callback Detail Column": "Yes",
  "Yes_Queue callback was offered": "Yes",
  Yesterday: __,
  "You can click on a day to select a custom range.": "You can click on a day to select a custom range.",
  "You can go back and reduce your selection (smaller date range, fewer queues, fewer agents, etc ) or you can export this selection instead.": "You can go back and reduce your selection (smaller date range, fewer queues, fewer agents, etc ) or you can export this selection instead.",
  "You do not have any custom boards.": "You do not have any custom boards.",
  "You do not have permission to view this recording": "You do not have permission to view this recording",
  "Your download should start shortly": "Your download should start shortly",
  "Your export is complete.": "Your export is complete.",
  "Your export is in progress.": "Your export is in progress.",
  "Your report is ready! Thank you for your patience.": "Your report is ready! Thank you for your patience.",
  "agent-performance": "agent-performance",
  "bi-weekly": "bi-weekly",
  "by AI": "by AI",
  "by {{who}}": "by {{who}}",
  daily: E_,
  from: D_,
  "from_from date": "from",
  'match the keyword "{{filterKeyword}}"': 'match the keyword "{{filterKeyword}}"',
  monthly: k_,
  quarterly: N_,
  "queue-caller": "queue-caller",
  to: I_,
  "to the external number": "to the external number",
  "to_to date": "to",
  "topicsSentimentsTooltip.topicCount": "<0><0>{{ topic }}</0></0> is mentioned in <2>{{ count }}</2> call(s):",
  "topicsSentimentsTooltip.topicCount_plural": "<0><0>{{ topic }}</0></0> is mentioned in <2>{{ count }}</2> call(s):",
  weekly: O_,
  yearly: L_,
  "{{from}}-{{to}} of {{total}}": "{{from}}-{{to}} of {{total}}",
  "{{percent}} %": "{{percent}} %",
  "{{percent}}% ({{value}}) are negative": "{{percent}}% ({{value}}) are negative",
  "{{percent}}% ({{value}}) are neutral": "{{percent}}% ({{value}}) are neutral",
  "{{percent}}% ({{value}}) are positive": "{{percent}}% ({{value}}) are positive",
  "{{percent}}% {{sentiment}}": "{{percent}}% {{sentiment}}",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected": "{{selectedElementsCount}} of {{totalElementsCount}} selected",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected_plural": "{{selectedElementsCount}} of {{totalElementsCount}} selected",
  "{{selected}} of {{total}} selected": "{{selected}} of {{total}} selected",
  "{{selected}} of {{total}} selected_Selected date buckets": "{{selected}} of {{total}} selected",
  "{{selected}} of {{total}} selected_Selected date buckets_plural": "{{selected}} of {{total}} selected",
  "{{selected}} of {{total}} selected_plural": "{{selected}} of {{total}} selected",
  "{{value}} (+ {{amount}} more)": "{{value}} (+ {{amount}} more)"
}, x_ = "E", R_ = "Interrotte", $_ = "Azioni", M_ = "Agente", P_ = "Agenti", F_ = "Alfabetico", q_ = "analitica;", z_ = "Risposta ricevuta", U_ = "Applica", B_ = "BETA", W_ = "Indietro", V_ = "Bisettimanale", H_ = "Dashboard", Q_ = "Dashboard", G_ = "Richiamata", Y_ = "Chiamante", Z_ = "Campagna", K_ = "Campagne", J_ = "Annulla", X_ = "Chiudi", j_ = "Connessa", e0 = "Cliente", t0 = "Quotidiana", a0 = "Elimina", n0 = "Dettagli", r0 = "Diretta", i0 = "Disconnessione", o0 = "Conclusione", s0 = "Durata", l0 = "TRANNE", d0 = "Email", u0 = "Rifiutate", c0 = "Esporta", m0 = "Facebook", f0 = "Operazione non riuscita", p0 = "Filtra", h0 = "Da", g0 = "Gestite", v0 = "Riagganciato", b0 = "Massimo", y0 = "Personale", C0 = "Ore", S0 = "Instagram", w0 = "Ha dimostrato interesse", A0 = "Minimo", T0 = "Linea", _0 = "In ascolto", E0 = "Minimo", D0 = "Gestisci", k0 = "Massimo", N0 = "Minimo", I0 = "Minuti", O0 = "Varie", L0 = "Mensile", x0 = "Massimo", R0 = "NOTA", $0 = "Nome", M0 = "Negativa", P0 = "Neutro", F0 = "Mai", q0 = "No", z0 = "Note", U0 = "OPPURE", B0 = "Aperta", W0 = "In uscita", V0 = "Risultato", H0 = "Risultati", Q0 = "Panoramica", G0 = "Chiamate parcheggiate", Y0 = "In attesa", Z0 = "Positiva", K0 = "Premuto", J0 = "Trimestrale", X0 = "Coda", j0 = "Code", eE = "Riassegnato", tE = "Rinomina", aE = "Ripetizione", nE = "Reimposta", rE = "Risolta", iE = "Sta suonando", oE = "SMS", sE = "Vendite", lE = "Salva", dE = "Pianifica", uE = "Cerca", cE = "Secondi", mE = "Sentiment", fE = "Sentiment", pE = "Servizio", hE = "Impostazioni", gE = "Condividi", vE = "Ci spiace...", bE = "Spam", yE = "Stato", CE = "Operazione riuscita", SE = "Riepilogo", wE = "Indagine", AE = "Indagine", TE = "Tag", _E = "Ora", EE = "Timeout", DE = "Data e ora", kE = "Oggi", NE = "Strumenti", IE = "Argomenti", OE = "Argomenti", LE = "Totale", xE = "Trascrizione", RE = "Trasferita", $E = "Trasferimento", ME = "Non determinato", PE = "Annulla", FE = "Non raggruppati", qE = "Unit\xE0", zE = "Sconosciuto", UE = "Aggiorna", BE = "Utente", WE = "Segreteria", VE = "Chat web", HE = "Settimanale", QE = "Sussurro", GE = "Annuale", YE = "S\xEC", ZE = "Ieri", KE = "quotidiana", JE = "da", XE = "mensile", jE = "trimestrale", eD = "alle", tD = "settimanale", aD = "annuale", nD = {
  "# Pauses": "N. di pause",
  "# Queues": "N. di code",
  "% Queue calls transferred by agent": "Percentuale di chiamate della coda trasferita dall\u2019agente",
  "% of calls answered": "Percentuale di chiamate con risposta",
  "% of talk time spent": "Percentuale di tempo di conversazione",
  "({{hidden}} hidden)": "({{hidden}} nascosta)",
  "({{hidden}} hidden)_Hidden bucket rows": "({{hidden}} nascosta)",
  "({{hidden}} hidden)_Hidden bucket rows_plural": "({{hidden}} nascoste)",
  "({{hidden}} hidden)_plural": "({{hidden}} nascoste)",
  "+{{numberOfIntents}} more": "+ ulteriore {{numberOfIntents}}",
  "+{{numberOfIntents}} more_plural": "+ ulteriori {{numberOfIntents}}",
  "+{{numberOfTags}} more": "+ ulteriore {{numberOfTags}}",
  "+{{numberOfTags}} more_plural": "+ ulteriori {{numberOfTags}}",
  "+{{numberOfUsers}} more": "+ ulteriori {{numberOfUsers}}",
  "+{{numberOfUsers}} more_plural": "+ ulteriori {{numberOfUsers}}",
  "...and {{deviceNumber}} more": "...e altri {{deviceNumber}}",
  "...more": "...altro",
  "...more_more entries in list": "...altro",
  "10 boards": "10 dashboard",
  "25 boards": "25 dashboard",
  "<0><0></0><1>{{callerNumber}}</1> started at\xA0<3><0>{{callStartTime}}</0></3>\xA0 Total duration:\xA0<5><0>{{formattedDuration}}</0></5></0>": "<0><0></0><1>{{callerNumber}}</1> ha iniziato alle\xA0<3><0>{{callStartTime}}</0></3>\xA0 Durata totale:\xA0<5><0>{{formattedDuration}}</0></5></0>",
  "<0>If your download is not starting,</0><1>click here</1>.": "<0>Se il download non si avvia, </0><1>fai clic qui</1>.",
  "<0>If your download is not starting,</0><1>click here</1>._Button to reload the page to launch the download again.": "<0>Se il download non si avvia, </0><1>fai clic qui</1>.",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>": "<0>Apri</0><1>le impostazioni</1><2>e seleziona almeno un grafico da visualizzare.</2>",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>_Button to open the settings drawer to configure the dashboard.": "<0>Apri</0><1>le impostazioni</1><2>e seleziona almeno un grafico da visualizzare.</2>",
  "A board with that name already exists.": "Esiste gi\xE0 una dashboard con questo nome.",
  "A transcript could not be created": "Impossibile creare una trascrizione",
  "A transcript is being processed": "Una trascrizione \xE8 in corso di elaborazione",
  "AI sentiment": "Sentiment AI",
  AND: x_,
  "AND_Query operator": "E",
  Abandoned: R_,
  "Access denied!": "Accesso negato!",
  Actions: $_,
  "Add a filter": "Aggiungi un filtro",
  Agent: M_,
  "Agent Performance": "Agent performance",
  "Agent Summary - Metric": "Riepilogo agente - Statistica",
  "Agent availability": "Disponibilit\xE0 degli agenti",
  "Agent name": "Nome dell\u2019agente",
  "Agent summary": "Riepilogo agenti",
  "Agent summary - table": "Riepilogo agente - Tabella",
  Agent_plural: P_,
  "Agents ({{selectedCount}} of {{totalCount}})": "Agenti ({{selectedCount}} di {{totalCount}})",
  "Agents filter": "Filtro agenti",
  "Agents filter is loaded": "Filtro agenti caricato",
  "All agents": "Tutti gli agenti",
  "All call types": "Tutti i tipi di chiamata",
  "All callback offered": "Tutte le proposte di richiamata",
  "All callback requested": "Tutte le richieste di richiamata",
  "All campaigns": "Tutte le campagne",
  "All chat queues": "Tutte le code di chat",
  "All chat types": "Tutti i tipi di chat",
  "All conversation tags": "Tutti i tag conversazioni",
  "All dispositions": "Tutte le conclusioni",
  "All outcomes": "Tutti i risultati",
  "All queues": "Tutte le code",
  "All replies": "Tutte le risposte",
  "All sentiments": "Tutti i sentiment",
  "All survey responses": "Tutte le risposte",
  "All surveys": "Tutti i sondaggi",
  Alphabetical: F_,
  "An error occurred while creating the board, please try again!": "Si \xE8 verificato un errore durante la creazione della dashboard. Riprova!",
  "An error occurred while deleting the board.": "Si \xE8 verificato un errore durante l\u2019eliminazione della dashboard.",
  "An error occurred while deleting the scheduled board.": "Si \xE8 verificato un errore durante l\u2019eliminazione della dashboard pianificata.",
  "An error occurred while downloading the scheduled export.": "Si \xE8 verificato un errore durante il download dell\u2019esportazione pianificata.",
  "An error occurred while exporting {{dataName}}.": "Si \xE8 verificato un errore durante l\u2019esportazione di {{dataName}}.",
  "An error occurred while fetching call reports for conversation space {{conversationSpace}}.": "Impossibile recuperare i report delle chiamate per lo spazio di conversazione {{conversationSpace}}.",
  "An error occurred while fetching dashboard to save": "Si \xE8 verificato un errore durante il recupero della dashboard da salvare",
  "An error occurred while fetching filters": "Si \xE8 verificato un errore durante il recupero dei filtri",
  "An error occurred while fetching queue caller": "Si \xE8 verificato un errore durante il recupero dei chiamanti della coda",
  "An error occurred while fetching queue caller details": "Si \xE8 verificato un errore durante il recupero dei dettagli dei chiamanti della coda",
  "An error occurred while fetching queue caller overall sentiments": "Si \xE8 verificato un errore durante il recupero dei sentiment complessivi dei chiamanti della coda",
  "An error occurred while fetching queue caller topics sentiments": "Si \xE8 verificato un errore durante il recupero dei sentiment degli argomenti dei chiamanti della coda",
  "An error occurred while fetching scheduled dashboard users": "Si \xE8 verificato un errore durante il recupero degli utenti delle dashboard pianificate",
  "An error occurred while fetching scheduled dashboards": "Si \xE8 verificato un errore durante il recupero delle dashboard pianificate",
  "An error occurred while fetching the board": "Si \xE8 verificato un errore durante il recupero della dashboard.",
  "An error occurred while fetching the transcript.": "Si \xE8 verificato un errore durante il recupero della trascrizione.",
  "An error occurred while scheduling the board, please try again.": "Si \xE8 verificato un errore durante la pianificazione della dashboard. Riprova.",
  "An error occurred while sharing the board.": "Si \xE8 verificato un errore durante la condivisione della dashboard.",
  "An error occurred while updating board permissions.": "Si \xE8 verificato un errore durante l\u2019aggiornamento delle autorizzazioni della dashboard.",
  "An error occurred while updating the board status.": "Si \xE8 verificato un errore durante l\u2019aggiornamento dello stato della dashboard.",
  "An error occurred while updating the board, please try again!": "Si \xE8 verificato un errore durante l\u2019aggiornamento della dashboard. Riprova!",
  "An error occurred while updating the board.": "Si \xE8 verificato un errore durante l\u2019aggiornamento della dashboard.",
  "An error occurred while updating the scheduled dashboard, please try again.": "Si \xE8 verificato un errore durante l\u2019aggiornamento della dashboard pianificata. Riprova.",
  Analytics: q_,
  Answered: z_,
  "Answered elsewhere": "Risposta avvenuta altrove",
  Apply: U_,
  "Are you sure you want to delete the scheduled {{dashboardName}} board?": "Vuoi eliminare la dashboard pianificata {{dashboardName}}?",
  "Are you sure you want to delete {{dashboardName}}?": "Confermi di voler eliminare {{dashboardName}}?",
  "Ascending order": "Ordine crescente",
  "Auto attendant": "Operatore automatico",
  "Auto attendant node": "Nodo con operatore automatico",
  "Availability and pause time by agent": "Tempo di disponibilit\xE0 e di pausa per agente",
  "Availability ratio": "Tasso di disponibilit\xE0",
  "Available in a higher tier": "Disponibile a un livello superiore",
  "Average call duration": "Durata media delle chiamate",
  "Average call sentiment for selected time range": "Sentiment medio delle chiamate per l'intervallo di tempo selezionato",
  "Average talk time": "Tempo medio di conversazione",
  "Average talk time_Summary average talk time": "Tempo medio di conversazione",
  "Average time in queue": "Tempo medio in coda",
  "Average wait time": "Tempo medio di attesa",
  "Avg. call duration": "Durata media delle chiamate",
  "Avg. call duration_Average Call Duration": "Durata media delle chiamate",
  "Avg. talk duration": "Durata media delle conversazioni",
  "Avg. talk duration_Average Talk Duration": "Durata media delle conversazioni",
  "Avg. time in queue": "Tempo medio in coda",
  "Avg. time in queue_Average time in queue": "Tempo medio in coda",
  "Avg. wait time": "Tempo medio di attesa",
  "Avg. wait time_Average Wait Time": "Tempo medio di attesa",
  BETA: B_,
  Back: W_,
  "Bar chart icon with 5 bars": "Icona di grafico a barre con 5 barre",
  Biweekly: V_,
  "Blindly transferred:": "Trasferimento diretto:",
  Board: H_,
  "Board Name": "Nome della dashboard",
  "Board actions": "Operazione sulla dashboard",
  "Board dates": "Date dashboard",
  "Board has been created.": "La dashboard \xE8 stata creata.",
  "Board has been deleted.": "La dashboard \xE8 stata eliminata.",
  "Board has been scheduled.": "La dashboard \xE8 stata pianificata.",
  "Board has been shared.": "La dashboard \xE8 stata condivisa.",
  "Board link": "Collegamento dashboard",
  "Board name": "Nome della dashboard",
  "Board name is required": "Il nome della dashboard \xE8 obbligatorio",
  "Board permissions has been updated.": "Le autorizzazioni della dashboard sono state aggiornate.",
  Boards: Q_,
  "CSV file": "File CSV",
  "Call data per call. Click on each call for a detailed view.": "Dati della chiamata per chiamata. Fai clic su ogni chiamata per una visualizzazione dettagliata.",
  "Call data per day from {{dateRange}}. Click on each day for a detailed view.": "Dati delle chiamate per giorno da {{dateRange}}. Fai clic su ogni giorno per una visualizzazione dettagliata.",
  "Call data per hour on {{dateRange}}. Click on each hour for a detailed view.": "Dati delle chiamate per ora da {{dateRange}}. Fai clic su ogni giorno per una visualizzazione dettagliata.",
  "Call duration": "Durata della chiamata",
  "Call duration: all": "Durata della chiamata: tutte",
  "Call duration_Call Duration": "Durata della chiamata",
  "Call queue": "Coda di chiamata",
  "Call report": "Report chiamata",
  "Call reports": "Report chiamate",
  "Call started": "Chiamata iniziata",
  "Call type": "Tipo di chiamata",
  "Call type_plural": "Tipi di chiamata",
  "Call types ({{selectedCount}} of {{totalCount}})": "Tipi di chiamata ({{selectedCount}} di {{totalCount}})",
  "Call types filter": "Filtro tipi di chiamata",
  "Call types filter is loaded": "Filtro dei tipi di chiamata caricato",
  "Call volume": "Volume di chiamate",
  Callback: G_,
  "Callback dispatched": "Richiamata dirottata",
  "Callback not offered": "Richiamate non proposte",
  "Callback not requested": "Richiamate non richieste",
  "Callback offered": "Richiamate proposte",
  "Callback offered ({{selectedCount}} of {{totalCount}})": "Richiamate proposte ({{selectedCount}} di {{totalCount}})",
  "Callback offered filter": "Filtro richiamate proposte",
  "Callback offered_Callback Offered": "Richiamata proposta",
  "Callback offered_plural": "Richiamate proposte",
  "Callback requested": "Richiamate richieste",
  "Callback requested ({{selectedCount}} of {{totalCount}})": "Richiamate richieste ({{selectedCount}} di {{totalCount}})",
  "Callback requested filter": "Filtro richiamate richieste",
  "Callback requested filter is loaded": "Filtro richiamate richieste caricato",
  "Callback requested_Callback Requested": "Richiamata richiesta",
  "Callback requested_plural": "Richiamate richieste",
  "Callback requests": "Richieste di richiamata",
  Caller: Y_,
  "Caller info": "Informazioni sul chiamante",
  "Caller info node": "Nodo Informazioni sul chiamante",
  "Calls transferred": "Chiamate trasferite",
  Campaign: Z_,
  "Campaign type": "Tipo di campagna",
  "Campaign type_plural": "Tipi di campagna",
  "Campaign types ({{selectedCount}} of {{totalCount}})": "Tipi di campagna ({{selectedCount}} di {{totalCount}})",
  "Campaign types filter": "Filtro tipi di campagna",
  "Campaign types filter is loaded": "Filtro dei tipi di campagna caricato",
  Campaign_plural: K_,
  "Campaigns ({{selectedCount}} of {{totalCount}})": "Campagne ({{selectedCount}} di {{totalCount}})",
  "Campaigns filter": "Filtro campagne",
  "Campaigns filter is loaded": "Filtro campagne caricato",
  Cancel: J_,
  "Cancel export": "Annulla esportazione",
  "Change to next tip": "Passa al suggerimento successivo",
  "Change to previous tip": "Passa al suggerimento precedente",
  "Chat queue": "Coda di chat",
  "Chat queue_plural": "Coda di chat",
  "Chat queues ({{selectedCount}} of {{totalCount}})": "Code di chat ({{selectedCount}} di {{totalCount}})",
  "Chat queues filter": "Filtro delle code di chat",
  "Chat queues filter is loaded": "Filtro delle code di chat caricato",
  "Chat type": "Tipo di chat",
  "Chat type_plural": "Tipo di chat",
  "Chat types ({{selectedCount}} of {{totalCount}})": "Tipi di chat ({{selectedCount}} di {{totalCount}})",
  "Chat types filter": "Filtro tipi di chat",
  "Chat types filter is loaded": "Filtro dei tipi di chat caricato",
  "Check back later for a completed transcript.": "Torna pi\xF9 tardi per ottenere la trascrizione completa.",
  "Check back later for interaction details.": "Torna pi\xF9 tardi per conoscere i dettagli dell\u2019interazione.",
  "Check back later for overview data": "Torna pi\xF9 tardi per i dati riepilogativi",
  "Check back later for overview data.": "Torna pi\xF9 tardi per i dati riepilogativi.",
  "Choose a secondary filter": "Scegli un filtro secondario",
  "Click to filter calls for negative sentiment": "Fai clic per filtrare le chiamate con sentiment negativo",
  "Click to filter calls for neutral sentiment": "Fai clic per filtrare le chiamate con sentiment neutro",
  "Click to filter calls for positive sentiment": "Fai clic per filtrare le chiamate con sentiment positivo",
  "Click to refine chart with evicted calls": "Fai clic per completare il grafico con le chiamate rifiutate",
  "Click to refine chart with handled calls": "Fai clic per completare il grafico con le chiamate gestite",
  "Click to refine chart with pending calls": "Fai clic per completare il grafico con le chiamate in attesa",
  "Click to refine data": "Fai clic per approfondire i dati",
  Close: X_,
  "Close banner": "Chiudi banner",
  "Close call reports modal": "Chiudi finestra di dialogo modale dei report delle chiamate",
  "Close dashboard deletion modal": "Chiudi finestra di dialogo modale della dashboard",
  "Close delete schedule modal": "Chiudi finestra di dialogo modale dell\u2019eliminazione della pianificazione",
  "Close drawer": "Chiudi il cassetto",
  "Close error modal": "Chiudi finestra di dialogo modale di errore",
  "Close export modal": "Chiudi finestra di dialogo modale dell\u2019esportazione",
  "Close rename modal": "Chiudi finestra di dialogo modale di errore della ridenominazione",
  "Close save modal": "Chiudi finestra di dialogo modale del salvataggio",
  "Close schedule modal": "Chiudi finestra di dialogo modale della pianificazione",
  "Close share modal": "Chiudi finestra di dialogo modale della condivisione",
  "Close timeout modal": "Chiudi finestra di dialogo modale del timeout",
  "Closed lost": "Chiusa con esito negativo",
  "Closed won": "Chiusa con esito positivo",
  "Collapse the list": "Comprimi l\u2019elenco",
  "Conference bridge": "Ponte conferenza",
  Connected: j_,
  "Contact support": "Contatta il supporto",
  "Contact support_Link to support page": "Contatta il supporto",
  "Conversation tag": "Tag conversazioni",
  "Conversation tag_plural": "Tag conversazioni",
  "Conversation tags ({{selectedCount}} of {{totalCount}})": "Tag conversazione ({{selectedCount}} di {{totalCount}})",
  "Conversation tags filter": "Filtro tag conversazioni",
  "Conversation tags filter is loaded": "Filtro tag conversazioni caricato",
  "Copy link": "Copia collegamento",
  "Currently loading": "In fase di caricamento",
  Customer: e0,
  "Customer pressed:": "Il cliente ha premuto:",
  "DTMF exit": "Uscita dalla coda",
  Daily: t0,
  "Daily pause avg per queue": "Media giornaliera di pausa per coda",
  Date: "Data",
  "Date created": "Data di creazione",
  "Date range": "Intervallo di date",
  "Date range filter": "Filtro intervallo date",
  Delete: a0,
  "Delete board": "Elimina dashboard",
  "Delete scheduled board": "Elimina dashboard pianificata",
  "Delete the scheduled board": "Elimina la dashboard pianificata",
  "Deleted agent": "Agente eliminato",
  "Deleted agents": "Agenti eliminati",
  "Deleted device": "Dispositivo eliminato",
  "Deleted device_plural": "Dispositivi eliminati",
  "Deleted queue": "Coda eliminata",
  "Deleted user": "Utente eliminato",
  "Deleting scheduled {{dashboardName}} board": "Eliminazione della dashboard pianificata {{dashboardName}} in corso",
  "Deleting {{dashboardName}}": "Eliminazione di {{dashboardName}} in corso",
  "Descending order": "Ordine decrescente",
  "Detail view": "Vista dei dettagli",
  "Detail view {{dateRange}}": "Vista dei dettagli di {{dateRange}}",
  "Detail view {{dateRange}}_Summary overview for the selected date range": "Vista dei dettagli di {{dateRange}}",
  Details: n0,
  "Dial plan": "Piano di chiamata",
  "Did you know? Approximately 18.7 billion texts are sent worldwide every day! You can text and message customers using our Multi-Channel feature included in all GoTo Contact plans!": "Lo sapevi? Ogni giorno vengono inviati circa 18,7 miliardi di messaggi di testo in tutto il mondo! Puoi inviare SMS e messaggi ai clienti utilizzando la nostra funzionalit\xE0 pluricanale inclusa in tutti i piani GoTo Contact!",
  "Did you know? If the caller does not have a valid caller ID, they will not be offered the callback option, regardless of the wait time threshold being exceeded.": "Lo sapevi? Se il chiamante non ha un ID valido, non gli verr\xE0 presentata l\u2019opzione di richiamata, indipendentemente dal superamento della soglia del tempo di attesa.",
  "Did you know? You can change your chart view from the gear icon in your report page.": "Lo sapevi? Puoi cambiare la vista del tuo grafico partendo dall\u2019icona a forma di ingranaggio nella pagina del tuo report.",
  Direct: r0,
  "Direct inbound": "Diretto in entrata",
  Disconnected: i0,
  Disposition: o0,
  "Disposition ({{selectedCount}} of {{totalCount}})": "Conclusione ({{selectedCount}} di {{totalCount}})",
  "Disposition filter": "Filtro delle conclusioni",
  "Disposition filter is loaded": "Il filtro delle conclusioni \xE8 attivo",
  "Disposition:": "Conclusione:",
  "Draggable item {{ itemLabel }}. Press space bar to start a drag. When dragging you can use\n                                the arrow keys to move the item around and escape to cancel. Ensure your screen reader is in\n                                focus mode or forms mode": `Elemento trascinabile {{ itemLabel }}. Premi la barra spaziatrice per iniziare a trascinarlo. Quando trascini puoi usare
                          i tasti freccia per spostare l\u2019elemento e il tasto Esc per annullare. Assicurati che il tuo lettore di schermo sia in 
                          modalit\xE0 messa a fuoco o in modalit\xE0 moduli`,
  Duration: s0,
  EXCEPT: l0,
  "EXCEPT_Query operator": "TRANNE",
  "Each section will be exported as separate files.": "Ogni sezione verr\xE0 esportata come file a s\xE9 stante.",
  "Edit scheduled board": "Modifica dashboard pianificata",
  "Edit the scheduled board": "Modifica la dashboard pianificata",
  Email: d0,
  "Email_Dropdown selectable option": "Email",
  "Entered another queue": "Entrato in un\u2019altra coda",
  "Entered dial plan": "Piano di chiamata utilizzato",
  Error: "Errore",
  "Error while fetching agent availability data.": "Impossibile recuperare i dati sulla disponibilit\xE0 dell\u2019agente.",
  "Error while fetching agent summary data.": "Impossibile recuperare i dati di riepilogo relativi all\u2019agente.",
  "Error while fetching call volume data.": "Impossibile recuperare i dati relativi al volume di chiamate.",
  "Error while fetching total talk time data.": "Impossibile recuperare i dati relativi al tempo di conversazione totale.",
  "Error while fetching transfers data.": "Impossibile recuperare i dati relativi ai trasferimenti.",
  Evicted: u0,
  "Evicted (legacy)": "Rifiutato (legacy)",
  "Evicted customer": "Rifiutato dal cliente",
  "Evicted system": "Rifiutato dal sistema",
  "Evicted user": "Rifiutato dal utente",
  "Expand the list": "Espandi l\u2019elenco",
  Export: c0,
  "Export conversation detail": "Esporta i dettagli della conversazione",
  "Export failed.": "Esportazione non riuscita.",
  "Export for {{filterDateRange}}": "Esporta per {{filterDateRange}}",
  "Export is currently unavailable": "Esportazione attualmente non disponibile",
  "Export is unavailable for this board.": "L\u2019esportazione non \xE8 disponibile per questa dashboard.",
  "Ext. Type": "Tipo interno",
  "External number": "Numero esterno",
  Facebook: m0,
  Failed: f0,
  "Failed_Failed to reach the voicemail": "Operazione non riuscita",
  Filter: p0,
  "Filter will not be applied as nothing is selected.": "Il filtro non sar\xE0 applicato in quanto non \xE8 stata effettuata una selezione.",
  "Filters loading, please wait.": "Caricamento dei filtri in corso. Attendi.",
  "Filters saved": "Filtri salvati",
  "For more information, please visit our <2>support site <1></1></2>": "Per ulteriori informazioni, visita il nostro <2>sito di supporto <1></1></2>",
  "For more information, please visit our <2>support site <1></1></2>_Link to support site for timeout dialog": "Per ulteriori informazioni, visita il nostro <2>sito di supporto <1></1></2>",
  "Forward 10 seconds": "Avanza di 10 secondi",
  From: h0,
  "Generated report file type": "Tipo di file di report generato",
  "GoTo Analytics": "Analisi GoTo",
  "Great news! We now offer dedicated callback reporting on the Queue Caller board.\xA0<1>Visit our support page to learn more about callback, timed-out and eviction reporting.</1>": "Ottime notizie! Adesso offriamo report dedicati alle richiamate nella scheda Chiamante della coda. <1>Visita la nostra pagina di supporto per ulteriori informazioni sui report relativi a richiamate, timeout delle chiamate e chiamate rifiutate.</1>",
  "Group by": "Raggruppa per",
  "Group by filter": "Raggruppa per filtro",
  Handled: g0,
  "Handled contacts": "Contatti gestiti",
  "Handled contacts_Summary handled contacts": "Contatti gestiti",
  Hangup: v0,
  "Hangup by:": "Riagganciato da:",
  "Hide empty rows": "Nascondi righe vuote",
  Highest: b0,
  "Highest avg": "Media massima",
  "Highest avg_Highest average talk time": "Media massima",
  "Highest value": "Valore massimo",
  "Highest_Highest total talk time": "Massimo",
  Home: y0,
  "Home_Button that redirect to the home page": "Personale",
  Hours: C0,
  "Hover for details": "Passa il mouse per vedere i dettagli",
  "Including all call types": "Compresi tutti i tipi di chiamata",
  "Including all campaign types": "Compresi tutti i tipi di campagna",
  "Including all campaigns": "Comprese tutte le campagne",
  "Including all outcomes": "Tutti i risultati compresi",
  "Including all sentiments": "Tutti i sentiment compresi",
  "Including all topics": "Compresi tutti gli argomenti",
  "Including deleted agents and users": "Compresi agenti e utenti eliminati",
  "Including deleted queues": "Comprese le code eliminate",
  "Including deleted sources": "Comprese le origini eliminate",
  Instagram: S0,
  "Insufficient privileges": "Privilegi insufficienti",
  "Intents:": "Intenti:",
  "Interaction details": "Dettagli dell\u2019interazione",
  Interested: w0,
  "Internal number": "Numero interno",
  "Invalid option": "Opzione non valida",
  "Invalid option_Auto attendant option": "Opzione non valida",
  "Invalid.": "Non valido.",
  "Invalid._The minimum or maximum duration is invalid": "Non valido.",
  "Invite users / emails within your organization": "Invita utenti/email nella tua organizzazione",
  "Issue opened": "Problema esposto",
  "Issue resolved": "Problema risolto",
  "It looks like you don\u2019t have permission \nto access this board.": `Sembra che tu non disponga dell\u2019autorizzazione 
per accedere a questa dashboard.`,
  "Item {{itemLabel}}": "Elemento {{itemLabel}}",
  "Item {{itemLabel}} has moved from position {{startPosition}} to {{endPosition}}": "L\u2019elemento {{itemLabel}} \xE8 passato dalla posizione {{startPosition}} alla posizione {{endPosition}}",
  "Item {{itemLabel}} lifted from position {{position}}": "L\u2019elemento {{itemLabel}} \xE8 stato prelevato dalla posizione {{position}}",
  "Item {{itemLabel}} moved from position {{startPosition}} to position {{endPosition}}": "L\u2019elemento {{itemLabel}} \xE8 stato spostato dalla posizione {{startPosition}} alla posizione {{endPosition}}",
  "Joined empty": "Coda senza agente",
  "Last 14 days": "Ultimi 14 giorni",
  "Last 30 days": "Ultimi 30 giorni",
  "Last 7 days": "Ultimi 7 giorni",
  "Last agent in the call:": "L\u2019ultimo agente della chiamata:",
  Least: A0,
  "Least_Least handled contacts": "Minimo",
  "Leaving reason": "Motivo per l\u2019abbandono",
  "Leaving reason:": "Motivo per l\u2019abbandono:",
  "Left empty": "Uscito da coda senza agenti",
  "License: {{currentLicense}}": "Licenza: {{currentLicense}}",
  Line: T0,
  "Link copied!": "Collegamento copiato!",
  "List of {{item}}": "Elenco di {{item}}",
  Listening: _0,
  "Loading SMS sent filter...": "Caricamento del filtro SMS inviati...",
  "Loading agents filter...": "Caricamento del filtro agenti...",
  "Loading call types filter...": "Caricamento del filtro tipi di chiamata...",
  "Loading callback offered filter...": "Caricamento filtro richiamate proposte in corso...",
  "Loading callback requested filter...": "Caricamento filtro richiamate richieste in corso...",
  "Loading campaign types filter...": "Caricamento del filtro tipi di campagna...",
  "Loading campaigns filter...": "Caricamento del filtro campagne...",
  "Loading chat queues filter...": "Caricamento del filtro code di chat...",
  "Loading chat types filter...": "Caricamento del filtro tipi di chat...",
  "Loading conversation tags filter...": "Caricamento del filtro dei tag conversazione...",
  "Loading disposition filter...": "Caricamento del filtro delle conclusioni in corso...",
  "Loading outcomes filter...": "Caricamento del filtro risultati...",
  "Loading queues filter...": "Caricamento del filtro code...",
  "Loading sentiments filter...": "Caricamento del filtro sentiment...",
  "Loading survey responses filter...": "Caricamento del filtro delle risposte...",
  "Loading surveys filter...": "Caricamento del filtro dei sondaggi...",
  "Loading topics filter...": "Caricamento del filtro argomenti...",
  "Loading...": "Caricamento in corso...",
  "Longest pause duration": "Durata della pausa pi\xF9 lunga",
  Lowest: E0,
  "Lowest avg": "Media minima",
  "Lowest avg_Lowest average talk time": "Media minima",
  "Lowest value": "Valore minimo assoluto",
  "Lowest_Least total talk time": "Minimo",
  "Make a selection to filter": "Effettua una selezione per filtrare",
  Manage: D0,
  "Manage language": "Gestisci lingua",
  "Max boards per section": "Max. dashboard per sezione",
  Maximum: k0,
  Minimum: N0,
  Minutes: I0,
  Miscellaneous: O0,
  "Miscellaneous - Transferred": "Varie - Trasferita",
  "Miscellaneous - Voicemail": "Varie - Messaggio vocale",
  "Miscellaneous - Wrong number": "Varie - Numero sbagliato",
  "Missed contacts": "Contatti mancati",
  "Month to date": "Mese in corso",
  Monthly: L0,
  Most: x0,
  "Most mentioned topics": "Argomenti pi\xF9 citati",
  "Most_Most handled contacts": "Massimo",
  "Mostly negative": "Sostanzialmente negativo",
  "Mostly positive": "Sostanzialmente positivo",
  "Movement cancelled. Item {{itemLabel}} has returned to its starting position {{startPosition}} of {{listLength}}": "Spostamento annullato. L\u2019elemento {{itemLabel}} \xE8 tornato alla sua posizione iniziale {{startPosition}} di {{listLength}}",
  "Must not exceed 255 characters": "Non deve superare i 255 caratteri",
  NOTE: R0,
  Name: $0,
  Negative: M0,
  "Negative Answer": "Risposta negativa",
  "Negative_Negative sentiment analysis result": "Negativo",
  Neutral: P0,
  "Neutral_Neutral sentiment analysis result": "Neutro",
  Never: F0,
  "New schedule": "Nuova pianificazione",
  "Next page": "Pagina successiva",
  No: q0,
  "No Answer": "Nessuna risposta",
  "No answer": "Nessuna risposta",
  "No callback offered": "Nessuna richiamata proposta",
  "No callback requested": "Nessuna richiamata richiesta",
  "No data": "Nessun dato",
  "No data available!": "Nessun dato disponibile!",
  "No data to display": "Nessun dato da visualizzare",
  "No data yet": "Ancora nessun dato disponibile",
  "No notes available": "Nessun appunto disponibile",
  "No overview yet": "Ancora nessun riepilogo",
  "No response": "Nessuna risposta",
  "No transcript data": "Nessun dato di trascrizione",
  "No transcript yet": "Ancora nessuna trascrizione",
  "No users to display": "Nessun utente da visualizzare",
  "No_Callback Detail Column": "No",
  "No_Queue callback was not offered": "No",
  "Not applicable (-)": "Non applicabile (-)",
  Notes: z0,
  "Notes taken during this call will appear here.": "Gli appunti presi durante questa chiamata verranno riportati qui.",
  "Notes_Notes added to a call by an agent": "Note",
  "Nothing is selected.": "Non \xE8 stato selezionato alcunch\xE9.",
  "Notify by": "Notifica per",
  OR: U0,
  "OR_Query operator": "OPPURE",
  "On Hold": "In attesa",
  "Only numbers are allowed": "Sono consentiti solo numeri",
  Open: B0,
  "Open boards menu options": "Apri le opzioni del menu Dashboard",
  "Open {{dashboard}} board menu options": "Apri le opzioni del menu Dashboard {{dashboard}}",
  "Opt {{option}}": "Opzione {{option}}",
  "Opt {{option}}_Auto attendant option": "Opzione {{option}}",
  "Option {{option}}": "Opzione {{option}}",
  "Option {{option}}_Customer phone option pressed": "Opzione {{option}}",
  Outbound: W0,
  Outcome: V0,
  Outcome_plural: H0,
  "Outcomes ({{selectedCount}} of {{totalCount}})": "Risultati ({{selectedCount}} di {{totalCount}})",
  "Outcomes filter": "Filtro risultati",
  "Outcomes filter format has changed": "Il formato del filtro dei risultati \xE8 cambiato",
  "Outcomes filter is loaded": "Filtro risultati caricato",
  "Over time - charts": "Nel tempo - Grafici",
  "Overall sentiment": "Sentiment complessivo",
  Overview: Q0,
  "Overview {{dateRange}}": "Panoramica di {{dateRange}}",
  "Overview {{dateRange}}_Summary overview for the selected date range": "Panoramica di {{dateRange}}",
  "Overview:": "Panoramica:",
  "Page {{index}}/{{count}}": "Pagina {{index}} di {{count}}",
  "Page {{index}}/{{count}}_plural": "Pagina {{index}} di {{count}}",
  Parked: G0,
  "Participants names": "Nomi dei partecipanti",
  "Participants phone numbers": "Numeri di telefono dei partecipanti",
  "Participants:": "Partecipanti:",
  "Pause the audio": "Metti in pausa l\u2019audio",
  "Pause the scheduled board": "Sospendi la dashboard pianificata",
  Pending: Y0,
  "Percentage breakdown from calls included in your current filter.": "Ripartizione percentuale delle chiamate incluse nel filtro corrente.",
  "Phone number": "Numero di telefono",
  "Play sound clip": "Riproduci clip audio",
  "Play the audio": "Riproduci audio",
  "Please select which data columns and tables you would like to export. CSV files will not contain graphics or images.": "Seleziona quali colonne e tabelle di dati desideri esportare. I file CSV non contengono elementi grafici o immagini.",
  Positive: Z0,
  "Positive Answer": "Risposta positiva",
  "Positive_Positive sentiment analysis result": "Positivo",
  Pressed: K0,
  "Previous month": "Mese precedente",
  "Previous page": "Pagina precedente",
  "Previous week": "Settimana precedente",
  Quarterly: J0,
  Queue: X0,
  "Queue Caller": "Queue caller",
  "Queue Caller Summary - grouped by date": "Riepilogo chiamati nella coda raggruppati per data",
  "Queue Caller Summary - grouped by queue": "Riepilogo chiamati nella coda raggruppati per coda",
  "Queue callback offered:": "Proposta di richiamata in coda:",
  "Queue caller - Details": "Chiamante in coda - Dettagli",
  "Queue caller - Summary": "Chiamante in coda - Riepilogo",
  "Queue caller details table": "Tabella dettagli dei chiamanti nella coda",
  "Queue caller summary table": "Tabella riepilogo dei chiamanti nella coda",
  "Queue calls": "Chiamate della coda",
  "Queue configured wrap up:": "Finalizzazione configurata della coda:",
  "Queue full": "Coda piena",
  "Queue name:": "Nome coda:",
  "Queue node": "Nodo coda",
  "Queue transfers": "Trasferimenti delle code",
  "Queue type:": "Tipo di coda:",
  Queue_plural: j0,
  "Queues ({{selectedCount}} of {{totalCount}})": "Code ({{selectedCount}} di {{totalCount}})",
  "Queues filter": "Filtro code",
  "Queues filter is loaded": "Filtro code caricato",
  "Recently updated": "Ultimo aggiornamento",
  "Recording not available": "Registrazione non disponibile",
  "Refine data": "Ridefinisci dati",
  Relocated: eE,
  "Remove filter": "Elimina filtro",
  "Removed by supervisor": "Rimosso dal supervisore",
  Rename: tE,
  Repeats: aE,
  "Replace callback": "Sostituito da richiamata",
  "Circle size represents volume of topics most commonly detected by AI. Bolder colors indicate a more prevalent sentiment when the topic is mentioned.": "Rappresentazione degli argomenti pi\xF9 comunemente rilevati dall'IA. I colori pi\xF9 intensi indicano un sentiment pi\xF9 diffuso quando l'argomento viene menzionato.",
  "Request Timeout": "Timeout della richiesta",
  Reset: nE,
  "Reset filters": "Reimposta filtri",
  Resolved: rE,
  "Resolved by admin": "Risolta dall\u2019amministratore",
  "Resolved conversation": "Conversazione risolta",
  "Resume the scheduled board": "Riprendi la dashboard pianificata",
  "Rewind 10 seconds": "Riavvolgi di 10 secondi",
  "Ring group": "Gruppo di chiamata",
  Ringing: iE,
  "Rows per page": "Righe per pagina",
  SMS: oE,
  "SMS auto-reply": "Risposta automatica agli SMS",
  "SMS sent": "SMS inviati",
  "SMS sent ({{selectedCount}} of {{totalCount}})": "SMS inviati ({{selectedCount}} di {{totalCount}})",
  "SMS sent filter": "Filtro SMS inviati",
  "SMS sent filter is loaded": "Filtro SMS inviati caricato",
  Sales: sE,
  "Sales - Callback": "Vendite - Richiamata",
  "Sales - Closed lost": "Vendite - Chiusura con esito negativo",
  "Sales - Closed won": "Vendite - Chiusura con esito positivo",
  "Sales - Interested": "Vendite - Ha dimostrato interesse",
  Save: lE,
  "Save As": "Salva come",
  "Save Filter": "Salva filtro",
  "Save as new board": "Salva come nuova dashboard",
  "Save as...": "Salva come...",
  Schedule: dE,
  "Schedule board": "Pianifica dashboard",
  "Schedule manager": "Sistema di gestione della pianificazione",
  "Schedule node": "Nodo Pianificazione",
  "Schedule selected:": "Pianificazione selezionata:",
  "Scheduled board has been deleted.": "La dashboard pianificata \xE8 stata eliminata.",
  "Scheduled board has been paused.": "La dashboard pianificata \xE8 stata sospesa.",
  "Scheduled board has been resumed.": "La dashboard pianificata \xE8 stata ripresa.",
  "Scheduled board has been updated.": "La dashboard pianificata \xE8 stata aggiornata.",
  "Scheduled boards": "Dashboard pianificate",
  "Scheduled date": "Data pianificata",
  "Scheduled date & time": "Data e ora pianificate",
  "Scheduled owner": "Proprietario pianificato",
  "Scheduled time": "Ora pianificata",
  "Scheduling dashboard": "Pianificazione dashboard in corso",
  Search: uE,
  "Search users": "Cerca utenti",
  Seconds: cE,
  "Sections visibility": "Visibilit\xE0 delle sezioni",
  "Select all": "Seleziona tutto",
  "Select entries below to see the details": "Seleziona le voci sotto riportate per vedere i dettagli",
  "Select file type": "Seleziona un tipo di file",
  "Select team members": "Seleziona membri del team",
  "Selected board does not support that type.": "Tipo non supportato dalla dashboard selezionata.",
  Sentiment: mE,
  "Sentiment analysis": "Analisi del sentiment",
  "Sentiment detected for this call": "Sentiment rilevato per questa chiamata",
  Sentiment_plural: fE,
  "Sentiments ({{selectedCount}} of {{totalCount}})": "Sentiment ({{selectedCount}} di {{totalCount}})",
  "Sentiments filter": "Filtro sentiment",
  "Sentiments filter is loaded": "Filtro sentiment caricato",
  Service: pE,
  "Service - Issue opened": "Servizio - Problema esposto",
  "Service - Issue resolved": "Servizio - Problema risolto",
  "Service - No answer": "Servizio - Nessuna risposta",
  "Service - Waiting on customer": "Servizio - In attesa del cliente",
  "Service - Waiting on internal": "Servizio - In attesa di intervento interno",
  "Set the range for call duration.": "Imposta l\u2019intervallo per la durata della chiamata.",
  "Set the range for waiting time. By default, all min/max are selected.": "Imposta l\u2019intervallo del tempo di attesa. Per impostazione predefinita, risultano selezionati tutti i valori, dai minimi ai massimi.",
  Settings: hE,
  "Settings_Button to open the settings menu": "Impostazioni",
  Share: gE,
  "Share - {{dashboardName}}": "Condividi {{dashboardName}}",
  "Shared with": "Condivisa con",
  "Shared with me": "Condivise con me",
  "Shared with:": "Condivisa con:",
  "Sharing {{dashboardName}}": "Condivisione di {{dashboardName}}",
  "Show all": "Mostra tutto",
  "Show more boards": "Mostra altre dashboard",
  "Show selected only": "Mostra solo selezionati",
  "Sign out": "Disconnessione",
  "Slightly negative": "Leggermente negativo",
  "Slightly positive": "Leggermente positivo",
  Sorry: vE,
  "Sort by": "Ordina per",
  "Sort {{columnName}}": "Ordina {{columnName}}",
  Spam: bE,
  Status: yE,
  "Status:": "Stato:",
  Success: CE,
  "Success_Success to reach the voicemail": "Operazione riuscita",
  Summary: SE,
  "Summary_Back to summary button": "Riepilogo",
  Survey: wE,
  "Survey response": "Risposta",
  "Survey response_plural": "Risposte",
  "Survey responses ({{selectedCount}} of {{totalCount}})": "Risposte ({{selectedCount}} di {{totalCount}})",
  "Survey responses filter": "Filtro risposte",
  "Survey responses filter is loaded": "Filtro risposte caricato",
  Survey_plural: AE,
  "Surveys ({{selectedCount}} of {{totalCount}})": "Sondaggi ({{selectedCount}} di {{totalCount}})",
  "Surveys filter": "Filtro sondaggi",
  "Surveys filter is loaded": "Filtro sondaggi caricato",
  Tags: TE,
  "Tags:": "Tag:",
  "Talk duration": "Durata della conversazione",
  "Talk duration_Talk Duration": "Durata della conversazione",
  "The character '{{character}}' is not supported": "Il carattere '{{character}}' non \xE8 supportato",
  "The characters {{characters}} aren't supported": "I caratteri {{characters}} non sono supportati",
  "The date has been updated from the refine.": "Data aggiornata dall\u2019operazione di ridefinizione.",
  "The deleted user will still be able to access the board, but will not receive any notifications.": "L\u2019utente eliminato potr\xE0 ancora accedere alla dashboard, ma non ricever\xE0 alcuna notifica.",
  "The page you are looking for does not exist!": "La pagina che cerchi non esiste!",
  "The recording did not contain sufficient data <1></1>for a transcript to be created.": "La registrazione non conteneva dati sufficienti <1></1>per la creazione di una trascrizione.",
  "The requested dataset is too large to be displayed.": "Il set di dati richiesto \xE8 troppo grande per essere visualizzato.",
  "The saved board will appear in the Board section on your left sidebar": "La dashboard salvata verr\xE0 visualizzata nella sezione Dashboard nella barra laterale a sinistra.",
  "There are new changes available, the page will be updated shortly.": "Sono disponibili nuove modifiche; la pagina verr\xE0 aggiornata entro breve.",
  "There is no data available for this call.": "Non ci sono dati disponibili per questa chiamata.",
  "There were no notes taken for this call": "Non ci sono appunti per questa chiamata",
  Time: _E,
  "Time in queue": "Tempo trascorso in coda",
  "Time in queue: all": "Tempo trascorso in coda: tutti",
  "Timed out": "Scadute",
  "Timed out (legacy)": "Timeout (legacy)",
  Timeout: EE,
  Timestamp: DE,
  Today: kE,
  Tools: NE,
  Topics: IE,
  "Topics detected for this call": "Argomenti rilevati per questa chiamata",
  "Topics filter": "Filtro argomenti",
  "Topics filter is loaded": "Filtro argomenti caricato",
  Topics_plural: OE,
  Total: LE,
  "Total availability": "Disponibilit\xE0 totale",
  "Total call duration over time": "Durata totale delle chiamate nel tempo",
  "Total call volume trends": "Tendenze del volume totale delle chiamate",
  "Total calls": "Chiamate totali",
  "Total calls by outcome": "Chiamate totali per risultato",
  "Total calls over time": "Chiamate totali nel tempo",
  "Total pause": "Totale pause",
  "Total talk time": "Tempo totale di conversazione",
  "Total talk time trends": "Tendenze del tempo di conversazione totale",
  "Total talk time_Summary total talk time": "Tempo totale di conversazione",
  Transcript: xE,
  "Transcription will be enabled in the coming weeks": "La trascrizione sar\xE0 abilitata nelle prossime settimane",
  "Transfer completed": "Trasferimento concluso",
  "Transfer ratio": "Tasso di trasferimento",
  Transferred: RE,
  Transferring: $E,
  "Transferring - Attended": "Trasferimento - Accettato",
  "Transferring - Drop off": "Trasferimento - Interrotto",
  "Try again": "Riprova",
  "Type a number": "Digita un numero",
  "Type a user name": "Digita un nome utente",
  "Type user or email": "Inserisci utente o email",
  "Unassigned devices": "Dispositivi non assegnati",
  Undetermined: ME,
  "Undetermined_No sentiment analysis result": "Non determinato",
  Undo: PE,
  "Undo_Undo an action (date filter refine)": "Annulla",
  Ungrouped: FE,
  Units: qE,
  Unknown: zE,
  Update: UE,
  "Updating scheduled board": "Aggiornamento della dashboard pianificata in corso",
  "Updating scheduled board status": "Aggiornamento dello stato della dashboard pianificata",
  "Updating {{dashboardName}}": "Aggiornamento di {{dashboardName}} in corso",
  "Updating {{dashboardName}} permissions": "Aggiornamento delle autorizzazioni per {{dashboardName}}",
  "Upgrade to Complete to see the details": "Passa a GoTo Contact Complete per visualizzare questi dettagli",
  User: BE,
  "Version: {{version}}": "Versione: {{version}}",
  "View all participants": "Visualizza tutti i partecipanti",
  "View all tags": "Visualizza tutti i tag",
  "View settings": "Visualizza le impostazioni",
  Voicemail: WE,
  "Voicemail box": "Casella di segreteria",
  "Voicemail reached": "Segreteria contattata",
  "Wait Time": "Tempo di attesa",
  "Waiting on customer": "In attesa del cliente",
  "Waiting on internal": "In attesa di intervento interno",
  "Waiting time": "Tempo di attesa",
  "We are working to pull the data you requested.": "Stiamo lavorando per estrarre i dati che hai richiesto.",
  "We detect sentiment using AI. Click a segment to refine the data.": "Rileviamo il sentiment utilizzando l'IA. Fai clic su un segmento per approfondire i dati.",
  Webchat: VE,
  "Week to date": "Settimana in corso",
  Weekly: HE,
  Whispering: QE,
  "Wrap up": "Conclusione",
  "Wrapped up by {{name}}": "Conclusione di {{name}}",
  "Wrong number": "Numero sbagliato",
  Yearly: GE,
  Yes: YE,
  "Yes_Callback Detail Column": "S\xEC",
  "Yes_Queue callback was offered": "S\xEC",
  Yesterday: ZE,
  "You can click on a day to select a custom range.": "Per selezionare un intervallo personalizzato puoi fare clic su una data.",
  "You can go back and reduce your selection (smaller date range, fewer queues, fewer agents, etc ) or you can export this selection instead.": "Puoi tornare indietro e ridurre la selezione (intervallo di date pi\xF9 ridotto, meno code, meno agenti ecc.) oppure puoi esportare questa selezione.",
  "You do not have any custom boards.": "Non hai dashboard personalizzate.",
  "You do not have permission to view this recording": "Non hai l\u2019autorizzazione per accedere a questa registrazione",
  "Your download should start shortly": "Il download dovrebbe iniziare a breve",
  "Your export is complete.": "Esportazione completa.",
  "Your export is in progress.": "Esportazione in corso.",
  "Your report is ready! Thank you for your patience.": "Il report \xE8 pronto. Grazie per la pazienza!",
  "agent-performance": "prestazioni-agente",
  "bi-weekly": "bisettimanale",
  "by AI": "dell\u2019AI",
  "by {{who}}": "di {{who}}",
  daily: KE,
  from: JE,
  "from_from date": "da",
  'match the keyword "{{filterKeyword}}"': 'corrispondono alla parola chiave "{{filterKeyword}}"',
  monthly: XE,
  quarterly: jE,
  "queue-caller": "chiamante-coda",
  to: eD,
  "to the external number": "al numero esterno",
  "to_to date": "a",
  "topicsSentimentsTooltip.topicCount": "<0><0>L'argomento {{ topic }}</0></0> \xE8 menzionato in <2>{{ count }}</2> chiamata/e:",
  "topicsSentimentsTooltip.topicCount_plural": "<0><0>L'argomento {{ topic }}</0></0> \xE8 menzionato in <2>{{ count }}</2> chiamata/e:",
  weekly: tD,
  yearly: aD,
  "{{from}}-{{to}} of {{total}}": "Da {{from}} a {{to}} di {{total}}",
  "{{percent}} %": "{{percent}} %",
  "{{percent}}% ({{value}}) are negative": "{{percent}}% ({{value}}) sono negativi",
  "{{percent}}% ({{value}}) are neutral": "{{percent}}% ({{value}}) sono neutri",
  "{{percent}}% ({{value}}) are positive": "{{percent}}% ({{value}}) sono positivi",
  "{{percent}}% {{sentiment}}": "{{percent}}% {{sentiment}}",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected": "{{selectedElementsCount}} di {{totalElementsCount}} selezionato",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected_plural": "{{selectedElementsCount}} di {{totalElementsCount}} selezionate",
  "{{selected}} of {{total}} selected": "{{selected}} di {{total}} selezionate",
  "{{selected}} of {{total}} selected_Selected date buckets": "{{selected}} di {{total}} selezionati",
  "{{selected}} of {{total}} selected_Selected date buckets_plural": "{{selected}} di {{total}} selezionate",
  "{{selected}} of {{total}} selected_plural": "{{selected}} di {{total}} selezionate",
  "{{value}} (+ {{amount}} more)": "{{value}} (+ ulteriori {{amount}})"
}, rD = "E", iD = "Abandonadas", oD = "A\xE7\xF5es", sD = "Agente", lD = "Agentes", dD = "Em ordem alfab\xE9tica", uD = "Dados anal\xEDticos", cD = "Atendida", mD = "Aplicar", fD = "BETA", pD = "Voltar", hD = "Quinzenalmente", gD = "Quadro", vD = "Quadros", bD = "Retorno de chamada", yD = "Chamador", CD = "Campanha", SD = "Campanhas", wD = "Cancelar", AD = "Fechar", TD = "Conectada", _D = "Cliente", ED = "Di\xE1rio", DD = "Excluir", kD = "Detalhes", ND = "Direto", ID = "Desconectada", OD = "Disposi\xE7\xE3o", LD = "Dura\xE7\xE3o", xD = "EXCETO", RD = "E-mail", $D = "Rejeitadas", MD = "Exportar", PD = "Facebook", FD = "Falhou", qD = "Filtrar", zD = "De", UD = "Atendidas", BD = "Desligamento", WD = "Maior", VD = "In\xEDcio", HD = "Horas", QD = "Instagram", GD = "Interessado", YD = "Menor", ZD = "Linha", KD = "Escutando", JD = "Menor", XD = "Gerenciar", jD = "M\xE1ximo", ek = "M\xEDnimo", tk = "Minutos", ak = "Outros", nk = "Mensal", rk = "Maior", ik = "NOTA", ok = "Nome", sk = "Negativa", lk = "Neutro", dk = "Nunca", uk = "N\xE3o", ck = "Notas", mk = "OU", fk = "Em aberto", pk = "Realizada", hk = "Resultado", gk = "Resultados", vk = "Vis\xE3o geral", bk = "Chamadas em espera", yk = "Pendente", Ck = "Positiva", Sk = "Pressionou", wk = "Trimestral", Ak = "Fila", Tk = "Filas", _k = "Realocado", Ek = "Renomear", Dk = "Repete", kk = "Redefinir", Nk = "Resolvida", Ik = "Chamando", Ok = "SMS", Lk = "Vendas", xk = "Salvar", Rk = "Agendar", $k = "Pesquisar", Mk = "Segundos", Pk = "Sentimento", Fk = "Sentimento", qk = "Servi\xE7o", zk = "Configura\xE7\xF5es", Uk = "Compartilhar", Bk = "Sentimos muito", Wk = "Spam", Vk = "Status", Hk = "Sucesso", Qk = "Resumo", Gk = "Pesquisa", Yk = "Pesquisa", Zk = "Etiquetas", Kk = "Hora", Jk = "Limite de tempo esgotado", Xk = "Hor\xE1rio", jk = "Hoje", e1 = "Ferramentas", t1 = "Assuntos", a1 = "Assuntos", n1 = "Total", r1 = "Transcri\xE7\xE3o", i1 = "Transferida", o1 = "Transferindo", s1 = "Indefinido", l1 = "Desfazer", d1 = "N\xE3o agrupado", u1 = "Unidades", c1 = "Desconhecida", m1 = "Atualizar", f1 = "Usu\xE1rio", p1 = "Correio de voz", h1 = "Bate-papo web", g1 = "Semanal", v1 = "Em susurro", b1 = "Anual", y1 = "Sim", C1 = "Ontem", S1 = "di\xE1rio", w1 = "de", A1 = "mensal", T1 = "trimestral", _1 = "a", E1 = "semanal", D1 = "anual", k1 = {
  "# Pauses": "N\xBA de pausas",
  "# Queues": "N\xBA de filas",
  "% Queue calls transferred by agent": "Percentual de chamadas da fila transferidas pelo agente",
  "% of calls answered": "Percentual de chamadas atendidas",
  "% of talk time spent": "Percentual do tempo de conversa",
  "({{hidden}} hidden)": "({{hidden}} oculta)",
  "({{hidden}} hidden)_Hidden bucket rows": "({{hidden}} oculta)",
  "({{hidden}} hidden)_Hidden bucket rows_plural": "({{hidden}} ocultas)",
  "({{hidden}} hidden)_plural": "({{hidden}} ocultas)",
  "+{{numberOfIntents}} more": "mais {{numberOfIntents}}",
  "+{{numberOfIntents}} more_plural": "mais {{numberOfIntents}}",
  "+{{numberOfTags}} more": "mais {{numberOfTags}}",
  "+{{numberOfTags}} more_plural": "mais {{numberOfTags}}",
  "+{{numberOfUsers}} more": "mais {{numberOfUsers}}",
  "+{{numberOfUsers}} more_plural": "mais {{numberOfUsers}}",
  "...and {{deviceNumber}} more": "...e mais {{deviceNumber}}",
  "...more": "...mais",
  "...more_more entries in list": "...mais",
  "10 boards": "10 quadros",
  "25 boards": "25 quadros",
  "<0><0></0><1>{{callerNumber}}</1> started at\xA0<3><0>{{callStartTime}}</0></3>\xA0 Total duration:\xA0<5><0>{{formattedDuration}}</0></5></0>": "<0><0></0><1>{{callerNumber}}</1> iniciou \xE0s\xA0<3><0>{{callStartTime}}</0></3>\xA0 Dura\xE7\xE3o total:\xA0<5><0>{{formattedDuration}}</0></5></0>",
  "<0>If your download is not starting,</0><1>click here</1>.": "<0>Se o download n\xE3o come\xE7ar,</0><1>clique aqui</1>.",
  "<0>If your download is not starting,</0><1>click here</1>._Button to reload the page to launch the download again.": "<0>Se o download n\xE3o come\xE7ar,</0><1>clique aqui</1>.",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>": "<0>Abra</0><1>as configura\xE7\xF5es</1><2>e selecione pelo menos um gr\xE1fico a ser exibido.</2>",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>_Button to open the settings drawer to configure the dashboard.": "<0>Abra</0><1>as configura\xE7\xF5es</1><2>e selecione pelo menos um gr\xE1fico a ser exibido.</2>",
  "A board with that name already exists.": "J\xE1 existe um quadro com este nome.",
  "A transcript could not be created": "N\xE3o foi poss\xEDvel criar uma transcri\xE7\xE3o",
  "A transcript is being processed": "Uma transcri\xE7\xE3o est\xE1 sendo processada",
  "AI sentiment": "An\xE1lise de sentimento da IA",
  AND: rD,
  "AND_Query operator": "E",
  Abandoned: iD,
  "Access denied!": "Acesso negado!",
  Actions: oD,
  "Add a filter": "Adicionar um filtro",
  Agent: sD,
  "Agent Performance": "Agent performance",
  "Agent Summary - Metric": "Resumo do agente \u2014 Indicadores",
  "Agent availability": "Disponibilidade do agente",
  "Agent name": "Nome do agente",
  "Agent summary": "Resumo dos agentes",
  "Agent summary - table": "Resumo do agente \u2014 Tabela",
  Agent_plural: lD,
  "Agents ({{selectedCount}} of {{totalCount}})": "Agentes ({{selectedCount}} de {{totalCount}})",
  "Agents filter": "Filtro de agentes",
  "Agents filter is loaded": "O filtro de agentes est\xE1 carregado",
  "All agents": "Todos os agentes",
  "All call types": "Todos os tipos de chamadas",
  "All callback offered": "Todos os retornos de chamada oferecidos",
  "All callback requested": "Todos os retornos de chamada solicitados",
  "All campaigns": "Todas as campanhas",
  "All chat queues": "Todas as filas de bate-papo",
  "All chat types": "Todos os tipos de bate-papo",
  "All conversation tags": "Todas as etiquetas de conversa",
  "All dispositions": "Todas as disposi\xE7\xF5es",
  "All outcomes": "Todos os resultados",
  "All queues": "Todas as filas",
  "All replies": "Todas as respostas",
  "All sentiments": "Todos os sentimentos",
  "All survey responses": "Todas as respostas da pesquisa",
  "All surveys": "Todas as pesquisas",
  Alphabetical: dD,
  "An error occurred while creating the board, please try again!": "Ocorreu um erro ao criar este este quadro. Tente novamente!",
  "An error occurred while deleting the board.": "Ocorreu um erro ao excluir o quadro.",
  "An error occurred while deleting the scheduled board.": "Ocorreu um erro ao excluir o quadro agendado.",
  "An error occurred while downloading the scheduled export.": "Ocorreu um erro ao baixar a exporta\xE7\xE3o agendada.",
  "An error occurred while exporting {{dataName}}.": "Ocorreu um erro ao exportar {{dataName}}.",
  "An error occurred while fetching call reports for conversation space {{conversationSpace}}.": "Ocorreu um erro ao obter os relat\xF3rios de chamadas para o espa\xE7o de conversa {{conversationSpace}}.",
  "An error occurred while fetching dashboard to save": "Ocorreu um erro ao buscar o painel a ser salvo",
  "An error occurred while fetching filters": "Ocorreu um erro ao buscar os filtros",
  "An error occurred while fetching queue caller": "Ocorreu um erro ao buscar o chamador da fila",
  "An error occurred while fetching queue caller details": "Ocorreu um erro ao buscar os detalhes do chamador da fila",
  "An error occurred while fetching queue caller overall sentiments": "Ocorreu um erro ao buscar os sentimentos gerais do chamador da fila",
  "An error occurred while fetching queue caller topics sentiments": "Ocorreu um erro ao buscar os sentimentos de temas do chamador da fila",
  "An error occurred while fetching scheduled dashboard users": "Ocorreu um erro ao buscar os usu\xE1rios do painel de agendamento",
  "An error occurred while fetching scheduled dashboards": "Ocorreu um erro ao buscar os pain\xE9is de agendamento",
  "An error occurred while fetching the board": "Ocorreu um erro ao buscar o quadro.",
  "An error occurred while fetching the transcript.": "Ocorreu um erro ao obter a transcri\xE7\xE3o.",
  "An error occurred while scheduling the board, please try again.": "Ocorreu um erro ao agendar o quadro. Tente novamente.",
  "An error occurred while sharing the board.": "Ocorreu um erro ao compartilhar o quadro.",
  "An error occurred while updating board permissions.": "Ocorreu um erro ao atualizar as permiss\xF5es do quadro.",
  "An error occurred while updating the board status.": "Ocorreu um erro ao atualizar o status do quadro.",
  "An error occurred while updating the board, please try again!": "Ocorreu um erro ao atualizar este este quadro. Tente novamente!",
  "An error occurred while updating the board.": "Ocorreu um erro ao atualizar o quadro.",
  "An error occurred while updating the scheduled dashboard, please try again.": "Ocorreu um erro ao atualizar o painel agendado. Tente novamente.",
  Analytics: uD,
  Answered: cD,
  "Answered elsewhere": "Atendida em outro local",
  Apply: mD,
  "Are you sure you want to delete the scheduled {{dashboardName}} board?": "Tem certeza de que deseja excluir o quadro agendado {{dashboardName}}?",
  "Are you sure you want to delete {{dashboardName}}?": "Voc\xEA tem certeza que deseja deletar o painel {{dashboardName}}?",
  "Ascending order": "Ordem ascendente",
  "Auto attendant": "Atendente virtual",
  "Auto attendant node": "N\xF3 de autoatendimento",
  "Availability and pause time by agent": "Tempo de disponibilidade e pausa por agente",
  "Availability ratio": "Taxa de disponibilidade",
  "Available in a higher tier": "Dispon\xEDvel em um n\xEDvel superior",
  "Average call duration": "Dura\xE7\xE3o m\xE9dia da chamada",
  "Average call sentiment for selected time range": "Sentimento m\xE9dio da chamada para a faixa de tempo selecionada",
  "Average talk time": "Dura\xE7\xE3o m\xE9dia da conversa",
  "Average talk time_Summary average talk time": "Dura\xE7\xE3o m\xE9dia da conversa",
  "Average time in queue": "Dura\xE7\xE3o m\xE9dia na fila",
  "Average wait time": "Dura\xE7\xE3o m\xE9dia da espera",
  "Avg. call duration": "Dura\xE7\xE3o m\xE9dia das chamadas",
  "Avg. call duration_Average Call Duration": "Dura\xE7\xE3o m\xE9dia das chamadas",
  "Avg. talk duration": "Dura\xE7\xE3o m\xE9dia das conversas",
  "Avg. talk duration_Average Talk Duration": "Dura\xE7\xE3o m\xE9dia das conversas",
  "Avg. time in queue": "Dura\xE7\xE3o m\xE9dia na fila",
  "Avg. time in queue_Average time in queue": "Dura\xE7\xE3o m\xE9dia na fila",
  "Avg. wait time": "Dura\xE7\xE3o m\xE9dia da espera",
  "Avg. wait time_Average Wait Time": "Dura\xE7\xE3o m\xE9dia da espera",
  BETA: fD,
  Back: pD,
  "Bar chart icon with 5 bars": "\xCDcone do gr\xE1fico de barras com cinco barras",
  Biweekly: hD,
  "Blindly transferred:": "Transferida diretamente:",
  Board: gD,
  "Board Name": "Nome do quadro",
  "Board actions": "A\xE7\xF5es para o quadro",
  "Board dates": "Datas do quadro",
  "Board has been created.": "O quadro foi criado.",
  "Board has been deleted.": "O quadro foi exclu\xEDdo.",
  "Board has been scheduled.": "O quadro foi agendado.",
  "Board has been shared.": "O quadro foi compartilhado.",
  "Board link": "Link do quadro",
  "Board name": "Nome do quadro",
  "Board name is required": "O nome do quadro \xE9 um campo obrigat\xF3rio",
  "Board permissions has been updated.": "As permiss\xF5es do quadro foram atualizadas.",
  Boards: vD,
  "CSV file": "Arquivo CSV",
  "Call data per call. Click on each call for a detailed view.": "Dados de chamada por chamada. Clique em cada chamada para obter uma visualiza\xE7\xE3o detalhada.",
  "Call data per day from {{dateRange}}. Click on each day for a detailed view.": "Dados de chamada por dia a partir de {{dateRange}}. Clique em cada dia para obter uma visualiza\xE7\xE3o detalhada.",
  "Call data per hour on {{dateRange}}. Click on each hour for a detailed view.": "Dados de chamada por hora em {{dateRange}}. Clique em cada hora para obter uma visualiza\xE7\xE3o detalhada.",
  "Call duration": "Dura\xE7\xE3o da chamada",
  "Call duration: all": "Dura\xE7\xE3o da chamada: todas",
  "Call duration_Call Duration": "Dura\xE7\xE3o da chamada",
  "Call queue": "Fila de chamadas",
  "Call report": "Relat\xF3rio de chamada",
  "Call reports": "Relat\xF3rios de chamadas",
  "Call started": "Chamada iniciada",
  "Call type": "Tipo de chamada",
  "Call type_plural": "Tipos de chamadas",
  "Call types ({{selectedCount}} of {{totalCount}})": "Tipos de chamada ({{selectedCount}} de {{totalCount}})",
  "Call types filter": "Filtro de tipos de chamada",
  "Call types filter is loaded": "O filtro de tipos de chamadas est\xE1 carregado",
  "Call volume": "Volume de chamadas",
  Callback: bD,
  "Callback dispatched": "Chamada de retorno enviada",
  "Callback not offered": "Retorno de chamada n\xE3o oferecido",
  "Callback not requested": "Retorno de chamada n\xE3o solicitado",
  "Callback offered": "Retorno de chamada oferecido",
  "Callback offered ({{selectedCount}} of {{totalCount}})": "Retorno de chamada oferecido ({{selectedCount}} de {{totalCount}})",
  "Callback offered filter": "Filtro de retornos de chamada oferecidos",
  "Callback offered_Callback Offered": "Retornos de chamada oferecidos",
  "Callback offered_plural": "Retornos de chamada oferecidos",
  "Callback requested": "Retorno de chamada solicitado",
  "Callback requested ({{selectedCount}} of {{totalCount}})": "Retorno de chamada solicitado ({{selectedCount}} de {{totalCount}})",
  "Callback requested filter": "Filtro de retornos de chamada solicitados",
  "Callback requested filter is loaded": "O filtro de retornos de chamada solicitados foi carregado",
  "Callback requested_Callback Requested": "Retornos de chamada solicitados",
  "Callback requested_plural": "Retornos de chamada solicitados",
  "Callback requests": "Solicita\xE7\xF5es de retornos de chamada",
  Caller: yD,
  "Caller info": "Informa\xE7\xF5es do chamador",
  "Caller info node": "N\xF3 de informa\xE7\xE3o do chamador",
  "Calls transferred": "Chamadas transferidas",
  Campaign: CD,
  "Campaign type": "Tipo de campanha",
  "Campaign type_plural": "Tipos de campanhas",
  "Campaign types ({{selectedCount}} of {{totalCount}})": "Tipos de campanhas ({{selectedCount}} de {{totalCount}})",
  "Campaign types filter": "Filtro de tipos de campanhas",
  "Campaign types filter is loaded": "O filtro de tipos de campanhas est\xE1 carregado",
  Campaign_plural: SD,
  "Campaigns ({{selectedCount}} of {{totalCount}})": "Campanhas ({{selectedCount}} de {{totalCount}})",
  "Campaigns filter": "Filtro de campanhas",
  "Campaigns filter is loaded": "O filtro de campanhas est\xE1 carregado",
  Cancel: wD,
  "Cancel export": "Cancelar exporta\xE7\xE3o",
  "Change to next tip": "Avan\xE7ar para a pr\xF3xima dica",
  "Change to previous tip": "Voltar para a dica anterior",
  "Chat queue": "Fila de bate-papos",
  "Chat queue_plural": "Fila de bate-papos",
  "Chat queues ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) filas de bate-papo",
  "Chat queues filter": "Filtro de filas de bate-papo",
  "Chat queues filter is loaded": "O filtro de filas de bate-papo est\xE1 carregado",
  "Chat type": "Tipo de bate-papo",
  "Chat type_plural": "Tipo de bate-papo",
  "Chat types ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) tipos de bate-papo",
  "Chat types filter": "Filtro de tipos de bate-papo",
  "Chat types filter is loaded": "O filtro de tipos de bate-papo est\xE1 carregado",
  "Check back later for a completed transcript.": "Volte mais tarde para obter uma transcri\xE7\xE3o completa.",
  "Check back later for interaction details.": "Volte mais tarde para obter os detalhes da intera\xE7\xE3o.",
  "Check back later for overview data": "Volte mais tarde para obter os dados da vis\xE3o geral",
  "Check back later for overview data.": "Volte mais tarde para obter os dados da vis\xE3o geral.",
  "Choose a secondary filter": "Escolha um filtro secund\xE1rio",
  "Click to filter calls for negative sentiment": "Clique para filtrar as chamadas por sentimento negativo",
  "Click to filter calls for neutral sentiment": "Clique para filtrar as chamadas por sentimento neutro",
  "Click to filter calls for positive sentiment": "Clique para filtrar as chamadas por sentimento positivo",
  "Click to refine chart with evicted calls": "Clique para aprimorar o gr\xE1fico com as chamadas rejeitadas",
  "Click to refine chart with handled calls": "Clique para aprimorar o gr\xE1fico com as chamadas atendidas",
  "Click to refine chart with pending calls": "Clique para aprimorar o gr\xE1fico com as chamadas pendentes",
  "Click to refine data": "Clique para refinar os dados",
  Close: AD,
  "Close banner": "Fechar banner",
  "Close call reports modal": "Fechar os di\xE1logos modais de relat\xF3rios de chamadas",
  "Close dashboard deletion modal": "Fechar di\xE1logo modal do painel",
  "Close delete schedule modal": "Fechar di\xE1logo modal de exclus\xE3o de programa\xE7\xE3o",
  "Close drawer": "Fechar gaveta",
  "Close error modal": "Fechar di\xE1logo modal de erro",
  "Close export modal": "Fechar di\xE1logo modal de exporta\xE7\xE3o",
  "Close rename modal": "Fechar di\xE1logo modal de renomear",
  "Close save modal": "Fechar di\xE1logo modal de salvar",
  "Close schedule modal": "Fechar di\xE1logo modal de programa\xE7\xE3o",
  "Close share modal": "Fechar di\xE1logo modal de compartilhamento",
  "Close timeout modal": "Fechar di\xE1logo modal de tempo limite",
  "Closed lost": "Perdida e encerrada",
  "Closed won": "Fechada ganha",
  "Collapse the list": "Recolher a lista",
  "Conference bridge": "Ponte de confer\xEAncia",
  Connected: TD,
  "Contact support": "Entre em contato com o suporte",
  "Contact support_Link to support page": "Entre em contato com o suporte",
  "Conversation tag": "Etiqueta da conversa",
  "Conversation tag_plural": "Etiquetas das conversas",
  "Conversation tags ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) etiquetas de conversa",
  "Conversation tags filter": "Filtro de etiquetas de conversa",
  "Conversation tags filter is loaded": "O filtro de etiquetas de conversa foi carregado",
  "Copy link": "Copiar link",
  "Currently loading": "Em carregamento",
  Customer: _D,
  "Customer pressed:": "O cliente pressionou:",
  "DTMF exit": "Sair da fila",
  Daily: ED,
  "Daily pause avg per queue": "M\xE9dia di\xE1ria de pausas por fila",
  Date: "Data",
  "Date created": "Data de cria\xE7\xE3o",
  "Date range": "Intervalo de datas",
  "Date range filter": "Filtro de intervalo de datas",
  Delete: DD,
  "Delete board": "Excluir quadro",
  "Delete scheduled board": "Excluir quadro agendado",
  "Delete the scheduled board": "Excluir o quadro agendado",
  "Deleted agent": "Agente exclu\xEDdo",
  "Deleted agents": "Agentes exclu\xEDdos",
  "Deleted device": "Dispositivo exclu\xEDdo",
  "Deleted device_plural": "Dispositivos exclu\xEDdos",
  "Deleted queue": "Excluir fila",
  "Deleted user": "Usu\xE1rio exclu\xEDdo",
  "Deleting scheduled {{dashboardName}} board": "Excluindo o quadro agendado {{dashboardName}}",
  "Deleting {{dashboardName}}": "Excluindo {{dashboardName}}",
  "Descending order": "Ordem descendente",
  "Detail view": "Visualiza\xE7\xE3o de detalhes",
  "Detail view {{dateRange}}": "Visualiza\xE7\xE3o de detalhes {{dateRange}}",
  "Detail view {{dateRange}}_Summary overview for the selected date range": "Visualiza\xE7\xE3o de detalhes {{dateRange}}",
  Details: kD,
  "Dial plan": "Plano de discagem",
  "Did you know? Approximately 18.7 billion texts are sent worldwide every day! You can text and message customers using our Multi-Channel feature included in all GoTo Contact plans!": "Voc\xEA sabia? Cerca de 18,7 bilh\xF5es de mensagens de texto s\xE3o enviados todos os dias no mundo todo! Voc\xEA pode enviar SMS e mensagens para os clientes usando nosso recurso multicanal inclu\xEDdo nos planos do GoTo Contact!",
  "Did you know? If the caller does not have a valid caller ID, they will not be offered the callback option, regardless of the wait time threshold being exceeded.": "Voc\xEA sabia? Se o autor da chamada n\xE3o tiver um identificador de chamadas v\xE1lido, ele n\xE3o ter\xE1 a op\xE7\xE3o de retorno de chamada, n\xE3o importa se o limite de tempo de espera seja excedido ou n\xE3o.",
  "Did you know? You can change your chart view from the gear icon in your report page.": "Voc\xEA sabia? \xC9 poss\xEDvel alterar a exibi\xE7\xE3o do gr\xE1fico pelo \xEDcone de engrenagem na p\xE1gina dos relat\xF3rios.",
  Direct: ND,
  "Direct inbound": "Recebida diretamente",
  Disconnected: ID,
  Disposition: OD,
  "Disposition ({{selectedCount}} of {{totalCount}})": "Disposi\xE7\xE3o ({{selectedCount}} de {{totalCount}})",
  "Disposition filter": "Filtro de disposi\xE7\xF5es",
  "Disposition filter is loaded": "O filtro de disposi\xE7\xF5es est\xE1 ativo",
  "Disposition:": "Disposi\xE7\xE3o:",
  "Draggable item {{ itemLabel }}. Press space bar to start a drag. When dragging you can use\n                                the arrow keys to move the item around and escape to cancel. Ensure your screen reader is in\n                                focus mode or forms mode": `Item arrast\xE1vel {{ itemLabel }}. Pressione a barra de espa\xE7o para come\xE7ar a arrastar. Ao arrastar, voc\xEA pode usar
                          as teclas de seta para mover o item e a tecla Esc para cancelar. Confirme se seu leitor de tela est\xE1 no
                          modo foco ou de formul\xE1rio.`,
  Duration: LD,
  EXCEPT: xD,
  "EXCEPT_Query operator": "EXCETO",
  "Each section will be exported as separate files.": "Cada sess\xE3o ser\xE1 exportada em arquivos separados.",
  "Edit scheduled board": "Editar quadro agendado",
  "Edit the scheduled board": "Editar o quadro agendado",
  Email: RD,
  "Email_Dropdown selectable option": "E-mail",
  "Entered another queue": "Entrou em outra fila",
  "Entered dial plan": "Plano de discagem informado",
  Error: "Erro",
  "Error while fetching agent availability data.": "Erro ao obter dados de disponibilidade do agente.",
  "Error while fetching agent summary data.": "Erro ao obter dados de resumo do agente.",
  "Error while fetching call volume data.": "Erro ao obter dados de volume de chamadas.",
  "Error while fetching total talk time data.": "Erro ao obter dados de tempo de conversa.",
  "Error while fetching transfers data.": "Erro ao obter dados de transfer\xEAncias.",
  Evicted: $D,
  "Evicted (legacy)": "Expulso (herdado)",
  "Evicted customer": "Expulso pelo cliente",
  "Evicted system": "Expulso pelo sistema",
  "Evicted user": "Expulso pelo usu\xE1rio",
  "Expand the list": "Expandir a lista",
  Export: MD,
  "Export conversation detail": "Exportar detalhes da conversa",
  "Export failed.": "Falha na exporta\xE7\xE3o.",
  "Export for {{filterDateRange}}": "Exportar para {{filterDateRange}}",
  "Export is currently unavailable": "A exporta\xE7\xE3o n\xE3o est\xE1 dispon\xEDvel no momento",
  "Export is unavailable for this board.": "A exporta\xE7\xE3o n\xE3o est\xE1 dispon\xEDvel para esse quadro.",
  "Ext. Type": "Tipo de ramal",
  "External number": "N\xFAmero externo",
  Facebook: PD,
  Failed: FD,
  "Failed_Failed to reach the voicemail": "Falhou",
  Filter: qD,
  "Filter will not be applied as nothing is selected.": "O filtro n\xE3o ser\xE1 aplicado porque nada foi selecionado.",
  "Filters loading, please wait.": "Carregando filtros, aguarde.",
  "Filters saved": "Filtros salvos",
  "For more information, please visit our <2>support site <1></1></2>": "Confira mais informa\xE7\xF5es em nosso <2>site de suporte <1></1></2>",
  "For more information, please visit our <2>support site <1></1></2>_Link to support site for timeout dialog": "Confira mais informa\xE7\xF5es em nosso <2>site de suporte <1></1></2>",
  "Forward 10 seconds": "Avan\xE7ar 10 segundos",
  From: zD,
  "Generated report file type": "Tipo de arquivo de relat\xF3rio gerado",
  "GoTo Analytics": "An\xE1lise de GoTo",
  "Great news! We now offer dedicated callback reporting on the Queue Caller board.\xA0<1>Visit our support page to learn more about callback, timed-out and eviction reporting.</1>": "Boas not\xEDcias! Agora oferecemos relat\xF3rios de retorno de chamadas dedicados no quadro de Chamador na fila. <1>Visite nossa p\xE1gina de suporte para aprender sobre o relat\xF3rio de retorno de chamada, tempo de espera esgotado e chamada rejeitada.</1>",
  "Group by": "Agrupar por",
  "Group by filter": "Agrupar por filtro",
  Handled: UD,
  "Handled contacts": "Contatos atendidos",
  "Handled contacts_Summary handled contacts": "Contatos atendidos",
  Hangup: BD,
  "Hangup by:": "Desligada por:",
  "Hide empty rows": "Ocultar linhas vazias",
  Highest: WD,
  "Highest avg": "Maior m\xE9dia",
  "Highest avg_Highest average talk time": "Maior m\xE9dia",
  "Highest value": "Valor mais alto",
  "Highest_Highest total talk time": "Maior",
  Home: VD,
  "Home_Button that redirect to the home page": "In\xEDcio",
  Hours: HD,
  "Hover for details": "Passe o cursor para ver detalhes",
  "Including all call types": "Incluindo todos os tipos de chamadas",
  "Including all campaign types": "Incluindo todos os tipos de campanhas",
  "Including all campaigns": "Incluindo todas as campanhas",
  "Including all outcomes": "Incluindo todos os resultados",
  "Including all sentiments": "Incluindo todos os sentimentos",
  "Including all topics": "Incluindo todos os t\xF3picos",
  "Including deleted agents and users": "Incluindo agentes e usu\xE1rios exclu\xEDdos",
  "Including deleted queues": "Incluindo filas exclu\xEDdas",
  "Including deleted sources": "Incluindo fontes exclu\xEDdas",
  Instagram: QD,
  "Insufficient privileges": "Privil\xE9gios insuficientes",
  "Intents:": "Intentos:",
  "Interaction details": "Detalhes da intera\xE7\xE3o",
  Interested: GD,
  "Internal number": "N\xFAmero interno",
  "Invalid option": "Op\xE7\xE3o inv\xE1lida",
  "Invalid option_Auto attendant option": "Op\xE7\xE3o inv\xE1lida",
  "Invalid.": "Inv\xE1lido.",
  "Invalid._The minimum or maximum duration is invalid": "Inv\xE1lido.",
  "Invite users / emails within your organization": "Convidar usu\xE1rios/e-mails de administradores de sua empresa",
  "Issue opened": "Problema em aberto",
  "Issue resolved": "Problema resolvido",
  "It looks like you don\u2019t have permission \nto access this board.": "Parece que voc\xEA n\xE3o tem permiss\xE3o para acessar este quadro.",
  "Item {{itemLabel}}": "Item {{itemLabel}}",
  "Item {{itemLabel}} has moved from position {{startPosition}} to {{endPosition}}": "Item {{itemLabel}} foi movido da posi\xE7\xE3o {{startPosition}} para {{endPosition}}",
  "Item {{itemLabel}} lifted from position {{position}}": "Item {{itemLabel}} movido da posi\xE7\xE3o {{position}}",
  "Item {{itemLabel}} moved from position {{startPosition}} to position {{endPosition}}": "Item {{itemLabel}} movido da posi\xE7\xE3o {{startPosition}} para a posi\xE7\xE3o {{endPosition}}",
  "Joined empty": "Participou na vaga",
  "Last 14 days": "\xDAltimos 14 dias",
  "Last 30 days": "\xDAltimos 30 dias",
  "Last 7 days": "\xDAltimos 7 dias",
  "Last agent in the call:": "\xDAltimo agente na chamada:",
  Least: YD,
  "Least_Least handled contacts": "Menor",
  "Leaving reason": "Motivo da sa\xEDda",
  "Leaving reason:": "Motivo da sa\xEDda:",
  "Left empty": "Deixou a vaga",
  "License: {{currentLicense}}": "Licen\xE7a: {{currentLicense}}",
  Line: ZD,
  "Link copied!": "Link copiado!",
  "List of {{item}}": "Lista de {{item}}",
  Listening: KD,
  "Loading SMS sent filter...": "Carregando filtro de SMS enviados\u2026",
  "Loading agents filter...": "Carregando filtro de agentes...",
  "Loading call types filter...": "Carregando filtro de tipos de chamadas...",
  "Loading callback offered filter...": "Carregando o filtro de retornos de chamada oferecidos...",
  "Loading callback requested filter...": "Carregando o filtro de retornos de chamada solicitados...",
  "Loading campaign types filter...": "Carregando filtro de tipos de campanhas...",
  "Loading campaigns filter...": "Carregando filtro de campanhas...",
  "Loading chat queues filter...": "Carregando filtro de filas de bate-papo...",
  "Loading chat types filter...": "Carregando filtro de tipos de bate-papo...",
  "Loading conversation tags filter...": "Carregando filtro de etiquetas de conversa...",
  "Loading disposition filter...": "Carregando filtro de disposi\xE7\xF5es...",
  "Loading outcomes filter...": "Carregando filtro de resultados...",
  "Loading queues filter...": "Carregando filtro de filas...",
  "Loading sentiments filter...": "Carregando filtro de sentimentos...",
  "Loading survey responses filter...": "Carregando filtro de respostas da pesquisa...",
  "Loading surveys filter...": "Carregando filtro de pesquisas...",
  "Loading topics filter...": "Carregando filtro de assuntos...",
  "Loading...": "Carregando...",
  "Longest pause duration": "Pausa de maior dura\xE7\xE3o",
  Lowest: JD,
  "Lowest avg": "Menor m\xE9dia",
  "Lowest avg_Lowest average talk time": "Menor m\xE9dia",
  "Lowest value": "Valor mais baixo",
  "Lowest_Least total talk time": "Menor",
  "Make a selection to filter": "Selecione para filtrar",
  Manage: XD,
  "Manage language": "Gerenciar idioma",
  "Max boards per section": "M\xE1ximo de quadros por sess\xE3o",
  Maximum: jD,
  Minimum: ek,
  Minutes: tk,
  Miscellaneous: ak,
  "Miscellaneous - Transferred": "Diversos - Transferida",
  "Miscellaneous - Voicemail": "Diversos - Correio de voz",
  "Miscellaneous - Wrong number": "Diversos - N\xFAmero errado",
  "Missed contacts": "Contatos perdidos",
  "Month to date": "M\xEAs em curso",
  Monthly: nk,
  Most: rk,
  "Most mentioned topics": "Temas mais mencionados",
  "Most_Most handled contacts": "Maior",
  "Mostly negative": "Principalmente negativo",
  "Mostly positive": "Principalmente positivo",
  "Movement cancelled. Item {{itemLabel}} has returned to its starting position {{startPosition}} of {{listLength}}": "Movimenta\xE7\xE3o cancelada. O item {{itemLabel}} foi devolvido para sua posi\xE7\xE3o inicial {{startPosition}} de {{listLength}}",
  "Must not exceed 255 characters": "N\xE3o deve exceder a 255 caracteres",
  NOTE: ik,
  Name: ok,
  Negative: sk,
  "Negative Answer": "Resposta negativa",
  "Negative_Negative sentiment analysis result": "Negativo",
  Neutral: lk,
  "Neutral_Neutral sentiment analysis result": "Neutro",
  Never: dk,
  "New schedule": "Nova programa\xE7\xE3o",
  "Next page": "P\xE1gina seguinte",
  No: uk,
  "No Answer": "Sem resposta",
  "No answer": "Sem resposta",
  "No callback offered": "Nenhum retorno de chamada oferecido",
  "No callback requested": "Nenhum retorno de chamada solicitado",
  "No data": "Sem dados",
  "No data available!": "Nenhum dado dispon\xEDvel!",
  "No data to display": "Sem dados a exibir",
  "No data yet": "Ainda n\xE3o h\xE1 dados",
  "No notes available": "Nenhuma nota dispon\xEDvel",
  "No overview yet": "Ainda n\xE3o h\xE1 uma vis\xE3o geral",
  "No response": "Sem resposta",
  "No transcript data": "Nenhum dado de transcri\xE7\xE3o",
  "No transcript yet": "Ainda n\xE3o h\xE1 uma transcri\xE7\xE3o",
  "No users to display": "Sem usu\xE1rios a exibir",
  "No_Callback Detail Column": "N\xE3o",
  "No_Queue callback was not offered": "N\xE3o",
  "Not applicable (-)": "N\xE3o aplic\xE1vel (-)",
  Notes: ck,
  "Notes taken during this call will appear here.": "As notas registradas durante esta chamada ser\xE3o exibidas aqui.",
  "Notes_Notes added to a call by an agent": "Notas",
  "Nothing is selected.": "Nada foi selecionado.",
  "Notify by": "Notificar por",
  OR: mk,
  "OR_Query operator": "OU",
  "On Hold": "Em espera",
  "Only numbers are allowed": "Apenas n\xFAmeros s\xE3o permitidos",
  Open: fk,
  "Open boards menu options": "Abrir op\xE7\xF5es do menu dos quadros",
  "Open {{dashboard}} board menu options": "Abrir as op\xE7\xF5es do menu do quadro {{dashboard}}",
  "Opt {{option}}": "Op\xE7\xE3o {{option}}",
  "Opt {{option}}_Auto attendant option": "Op\xE7\xE3o {{option}}",
  "Option {{option}}": "Op\xE7\xE3o {{option}}",
  "Option {{option}}_Customer phone option pressed": "Op\xE7\xE3o {{option}}",
  Outbound: pk,
  Outcome: hk,
  Outcome_plural: gk,
  "Outcomes ({{selectedCount}} of {{totalCount}})": "Resultados ({{selectedCount}} de {{totalCount}})",
  "Outcomes filter": "Filtro de resultados",
  "Outcomes filter format has changed": "O formato do filtro de resultados mudou",
  "Outcomes filter is loaded": "O filtro de resultados est\xE1 carregado",
  "Over time - charts": "No tempo \u2014 Gr\xE1ficos",
  "Overall sentiment": "Sentimento geral",
  Overview: vk,
  "Overview {{dateRange}}": "Vis\xE3o geral \u2013 {{dateRange}}",
  "Overview {{dateRange}}_Summary overview for the selected date range": "Vis\xE3o geral \u2013 {{dateRange}}",
  "Overview:": "Vis\xE3o geral:",
  "Page {{index}}/{{count}}": "P\xE1gina {{index}}/{{count}}",
  "Page {{index}}/{{count}}_plural": "P\xE1gina {{index}}/{{count}}",
  Parked: bk,
  "Participants names": "Nomes dos participantes",
  "Participants phone numbers": "N\xFAmero de telefone dos participantes",
  "Participants:": "Participantes:",
  "Pause the audio": "Pausar o \xE1udio",
  "Pause the scheduled board": "Pausar o quadro agendado",
  Pending: yk,
  "Percentage breakdown from calls included in your current filter.": "Descri\xE7\xE3o do percentual de chamadas inclusas em seu filtro atual.",
  "Phone number": "N\xFAmero de telefone",
  "Play sound clip": "Reproduzir clipe musical",
  "Play the audio": "Reproduzir o \xE1udio",
  "Please select which data columns and tables you would like to export. CSV files will not contain graphics or images.": "Selecione quais colunas de dados e tabelas voc\xEA gostaria de exportar. Arquivos CSV n\xE3o incluir\xE3o gr\xE1ficos ou imagens.",
  Positive: Ck,
  "Positive Answer": "Resposta positiva",
  "Positive_Positive sentiment analysis result": "Positivo",
  Pressed: Sk,
  "Previous month": "M\xEAs passado",
  "Previous page": "P\xE1gina anterior",
  "Previous week": "Semana passada",
  Quarterly: wk,
  Queue: Ak,
  "Queue Caller": "Queue caller",
  "Queue Caller Summary - grouped by date": "Resumo da fila de chamadores \u2014 agrupadas por data",
  "Queue Caller Summary - grouped by queue": "Resumo da fila de chamadores \u2014 agrupadas por fila",
  "Queue callback offered:": "Oferecido retorno de chamada:",
  "Queue caller - Details": "Detalhes dos chamadores na fila",
  "Queue caller - Summary": "Resumo dos chamadores na fila",
  "Queue caller details table": "Tabela de detalhes dos chamadores na fila",
  "Queue caller summary table": "Tabela de resumo de chamadores na fila",
  "Queue calls": "Chamadas da fila",
  "Queue configured wrap up:": "Conclus\xE3o do fechamento da fila configurada:",
  "Queue full": "Fila cheia",
  "Queue name:": "Nome da fila:",
  "Queue node": "N\xF3 da fila",
  "Queue transfers": "Transfer\xEAncias das filas",
  "Queue type:": "Tipo de fila:",
  Queue_plural: Tk,
  "Queues ({{selectedCount}} of {{totalCount}})": "Filas ({{selectedCount}} de {{totalCount}})",
  "Queues filter": "Filtro de filas",
  "Queues filter is loaded": "O filtro de filas est\xE1 carregado",
  "Recently updated": "Atualizado recentemente",
  "Recording not available": "Grava\xE7\xE3o indispon\xEDvel",
  "Refine data": "Filtrar dados",
  Relocated: _k,
  "Remove filter": "Remover filtros",
  "Removed by supervisor": "Removido pela supervis\xE3o",
  Rename: Ek,
  Repeats: Dk,
  "Replace callback": "Chamada de retornada",
  "Circle size represents volume of topics most commonly detected by AI. Bolder colors indicate a more prevalent sentiment when the topic is mentioned.": "Representa\xE7\xE3o dos temas detectados com mais frequ\xEAncia pela IA. Cores mais intensas indicam um sentimento mais prevalente quando o tema \xE9 mencionado.",
  "Request Timeout": "Tempo limite da consulta",
  Reset: kk,
  "Reset filters": "Redefinir filtros",
  Resolved: Nk,
  "Resolved by admin": "Resolvida pelo administrador",
  "Resolved conversation": "Conversa resolvida",
  "Resume the scheduled board": "Retomar o quadro agendado",
  "Rewind 10 seconds": "Voltar 10 segundos",
  "Ring group": "Grupo de chamadas",
  Ringing: Ik,
  "Rows per page": "Linhas por p\xE1gina",
  SMS: Ok,
  "SMS auto-reply": "Resposta autom\xE1tica por SMS",
  "SMS sent": "SMS enviado",
  "SMS sent ({{selectedCount}} of {{totalCount}})": "SMS envolvidos ({{selectedCount}} de {{totalCount}})",
  "SMS sent filter": "Filtro de SMS enviados",
  "SMS sent filter is loaded": "O filtro de SMS enviados foi carregado",
  Sales: Lk,
  "Sales - Callback": "Vendas - Retorno de chamada",
  "Sales - Closed lost": "Vendas - Fechamento perdido",
  "Sales - Closed won": "Vendas - Fechamento ganho",
  "Sales - Interested": "Vendas - Interessado",
  Save: xk,
  "Save As": "Salvar como",
  "Save Filter": "Salvar filtro",
  "Save as new board": "Salvar como novo quadro",
  "Save as...": "Salvar como...",
  Schedule: Rk,
  "Schedule board": "Agendamento do quadro",
  "Schedule manager": "Gerenciador de programa\xE7\xE3o",
  "Schedule node": "N\xF3 de agendamento",
  "Schedule selected:": "Agendamento selecionado:",
  "Scheduled board has been deleted.": "O quadro agendado foi exclu\xEDdo.",
  "Scheduled board has been paused.": "O quadro agendado foi pausado.",
  "Scheduled board has been resumed.": "O quadro agendado foi retomado.",
  "Scheduled board has been updated.": "O quadro agendado foi atualizado.",
  "Scheduled boards": "Quadros agendados",
  "Scheduled date": "Data agendada",
  "Scheduled date & time": "Data e hora agendados",
  "Scheduled owner": "Propriet\xE1rio do quadro agendado",
  "Scheduled time": "Hora agendada",
  "Scheduling dashboard": "Agendamento do painel em andamento\u2026",
  Search: $k,
  "Search users": "Pesquisar usu\xE1rios",
  Seconds: Mk,
  "Sections visibility": "Visibilidade das sess\xF5es",
  "Select all": "Selecionar tudo",
  "Select entries below to see the details": "Selecione as entradas abaixo para visualizar os detalhes",
  "Select file type": "Selecione o tipo de arquivo",
  "Select team members": "Selecionar membros da equipe",
  "Selected board does not support that type.": "O quadro selecionado n\xE3o \xE9 compat\xEDvel com este tipo.",
  Sentiment: Pk,
  "Sentiment analysis": "An\xE1lise de sentimento",
  "Sentiment detected for this call": "Sentimento detectado para essa chamada",
  Sentiment_plural: Fk,
  "Sentiments ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) sentimentos",
  "Sentiments filter": "Filtro de sentimentos",
  "Sentiments filter is loaded": "O filtro de sentimentos foi carregado",
  Service: qk,
  "Service - Issue opened": "Servi\xE7o - Problema em aberto",
  "Service - Issue resolved": "Servi\xE7o - Problema resolvido",
  "Service - No answer": "Servi\xE7o - Sem resposta",
  "Service - Waiting on customer": "Servi\xE7o - Aguardando pelo cliente",
  "Service - Waiting on internal": "Servi\xE7o - Aguardando recurso interno",
  "Set the range for call duration.": "Defina a faixa de dura\xE7\xE3o para a chamada.",
  "Set the range for waiting time. By default, all min/max are selected.": "Defina os limites para o tempo de espera. Por padr\xE3o, todas as dura\xE7\xF5es m\xE1ximas e m\xEDnimas est\xE3o selecionadas.",
  Settings: zk,
  "Settings_Button to open the settings menu": "Configura\xE7\xF5es",
  Share: Uk,
  "Share - {{dashboardName}}": "Compartilhar \u2014 {{dashboardName}}",
  "Shared with": "Compartilhado com",
  "Shared with me": "Compartilhados comigo",
  "Shared with:": "Compartilhado com:",
  "Sharing {{dashboardName}}": "Compartilhando {{dashboardName}}",
  "Show all": "Mostrar tudo",
  "Show more boards": "Exibir mais quadros",
  "Show selected only": "Exibir somente os selecionados",
  "Sign out": "Sair",
  "Slightly negative": "Levemente negativo",
  "Slightly positive": "Levemente positivo",
  Sorry: Bk,
  "Sort by": "Classificar por",
  "Sort {{columnName}}": "Ordenar por {{columnName}}",
  Spam: Wk,
  Status: Vk,
  "Status:": "Status:",
  Success: Hk,
  "Success_Success to reach the voicemail": "Sucesso",
  Summary: Qk,
  "Summary_Back to summary button": "Resumo",
  Survey: Gk,
  "Survey response": "Resposta da pesquisa",
  "Survey response_plural": "Respostas da pesquisa",
  "Survey responses ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) respostas da pesquisa",
  "Survey responses filter": "Filtro de respostas da pesquisa",
  "Survey responses filter is loaded": "O filtro de respostas da pesquisa foi carregado",
  Survey_plural: Yk,
  "Surveys ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) pesquisas",
  "Surveys filter": "Filtro de pesquisas",
  "Surveys filter is loaded": "O filtro de pesquisas foi carregado",
  Tags: Zk,
  "Tags:": "Etiquetas:",
  "Talk duration": "Dura\xE7\xE3o da conversa",
  "Talk duration_Talk Duration": "Dura\xE7\xE3o da conversa",
  "The character '{{character}}' is not supported": 'O caractere "{{character}}" n\xE3o \xE9 permitido',
  "The characters {{characters}} aren't supported": 'Os caracteres "{{characters}}" n\xE3o s\xE3o permitidos',
  "The date has been updated from the refine.": "A data foi atualizada de acordo com a filtragem.",
  "The deleted user will still be able to access the board, but will not receive any notifications.": "O usu\xE1rio exclu\xEDdo ainda poder\xE1 acessar o quadro, mas n\xE3o receber\xE1 mais notifica\xE7\xF5es.",
  "The page you are looking for does not exist!": "A p\xE1gina que voc\xEA est\xE1 procurando n\xE3o existe!",
  "The recording did not contain sufficient data <1></1>for a transcript to be created.": "A grava\xE7\xE3o n\xE3o cont\xE9m dados suficientes <1></1>para a cria\xE7\xE3o de uma transcri\xE7\xE3o.",
  "The requested dataset is too large to be displayed.": "O conjunto de dados solicitado \xE9 grande demais para ser exibido.",
  "The saved board will appear in the Board section on your left sidebar": 'O quadro salvo ser\xE1 exibido na se\xE7\xE3o "Quadro" em sua barra lateral',
  "There are new changes available, the page will be updated shortly.": "Novas altera\xE7\xF5es dispon\xEDveis. A p\xE1gina ser\xE1 atualizada em breve.",
  "There is no data available for this call.": "N\xE3o h\xE1 dados dispon\xEDveis para esta chamada.",
  "There were no notes taken for this call": "N\xE3o havia notas feitas para essa chamada",
  Time: Kk,
  "Time in queue": "Tempo na fila",
  "Time in queue: all": "Tempo na fila: todos",
  "Timed out": "Tempo esgotado",
  "Timed out (legacy)": "Limite de tempo esgotado (herdado)",
  Timeout: Jk,
  Timestamp: Xk,
  Today: jk,
  Tools: e1,
  Topics: t1,
  "Topics detected for this call": "Temas detectados para essa chamada",
  "Topics filter": "Filtro de assuntos",
  "Topics filter is loaded": "O filtro de assuntos est\xE1 carregado",
  Topics_plural: a1,
  Total: n1,
  "Total availability": "Disponibilidade total",
  "Total call duration over time": "Dura\xE7\xE3o total da chamada ao longo do tempo",
  "Total call volume trends": "Tend\xEAncias do volume total de chamadas",
  "Total calls": "Total de chamadas",
  "Total calls by outcome": "Total de chamadas por resultado",
  "Total calls over time": "Total de chamadas ao longo do tempo",
  "Total pause": "Tempo total de pausa",
  "Total talk time": "Tempo de conversa total",
  "Total talk time trends": "Tend\xEAncias do tempo de conversa total",
  "Total talk time_Summary total talk time": "Tempo de conversa total",
  Transcript: r1,
  "Transcription will be enabled in the coming weeks": "A transcri\xE7\xE3o ser\xE1 habilitada nas pr\xF3ximas semanas",
  "Transfer completed": "Transfer\xEAncia conclu\xEDda",
  "Transfer ratio": "Taxa de transfer\xEAncia",
  Transferred: i1,
  Transferring: o1,
  "Transferring - Attended": "Transferindo \u2013 Aceito",
  "Transferring - Drop off": "Transferindo \u2013 Desconectou",
  "Try again": "Tentar novamente",
  "Type a number": "Digite um n\xFAmero",
  "Type a user name": "Digite um nome de usu\xE1rio",
  "Type user or email": "Digite o usu\xE1rio ou e-mail",
  "Unassigned devices": "Dispositivos n\xE3o atribu\xEDdos",
  Undetermined: s1,
  "Undetermined_No sentiment analysis result": "Indefinido",
  Undo: l1,
  "Undo_Undo an action (date filter refine)": "Desfazer",
  Ungrouped: d1,
  Units: u1,
  Unknown: c1,
  Update: m1,
  "Updating scheduled board": "Atualizando quadro agendado",
  "Updating scheduled board status": "Atualizando status do quadro agendado",
  "Updating {{dashboardName}}": "Atualizando {{dashboardName}}...",
  "Updating {{dashboardName}} permissions": "Atualizando as permiss\xF5es de {{dashboardName}}",
  "Upgrade to Complete to see the details": "Atualize para o Complete para ver os detalhes",
  User: f1,
  "Version: {{version}}": "Vers\xE3o: {{version}}",
  "View all participants": "Exibir todos os participantes",
  "View all tags": "Exibir todas as etiquetas",
  "View settings": "Exibir configura\xE7\xF5es",
  Voicemail: p1,
  "Voicemail box": "Caixa de correio de voz",
  "Voicemail reached": "Chegou ao correio de voz",
  "Wait Time": "Tempo de espera",
  "Waiting on customer": "Aguardando o cliente",
  "Waiting on internal": "Aguardando recurso interno",
  "Waiting time": "Tempo de espera",
  "We are working to pull the data you requested.": "Estamos trabalhando para buscar os dados solicitados.",
  "We detect sentiment using AI. Click a segment to refine the data.": "Detectamos sentimentos usando IA. Clique em um segmento para refinar os dados.",
  Webchat: h1,
  "Week to date": "Semana em curso",
  Weekly: g1,
  Whispering: v1,
  "Wrap up": "Finaliza\xE7\xE3o",
  "Wrapped up by {{name}}": "Finalizada por {{name}}",
  "Wrong number": "N\xFAmero errado",
  Yearly: b1,
  Yes: y1,
  "Yes_Callback Detail Column": "Sim",
  "Yes_Queue callback was offered": "Sim",
  Yesterday: C1,
  "You can click on a day to select a custom range.": "Clique em um dia para selecionar um intervalo personalizado.",
  "You can go back and reduce your selection (smaller date range, fewer queues, fewer agents, etc ) or you can export this selection instead.": "Voc\xEA pode voltar e reduzir a sele\xE7\xE3o (intervalo de datas menor, menos filas, menos agentes etc.) ou pode exportar a sele\xE7\xE3o.",
  "You do not have any custom boards.": "Voc\xEA n\xE3o tem quadros personalizados.",
  "You do not have permission to view this recording": "Voc\xEA n\xE3o tem permiss\xE3o para acessar essa grava\xE7\xE3o",
  "Your download should start shortly": "Seu download deve come\xE7ar em breve",
  "Your export is complete.": "A exporta\xE7\xE3o foi conclu\xEDda.",
  "Your export is in progress.": "A exporta\xE7\xE3o est\xE1 em andamento.",
  "Your report is ready! Thank you for your patience.": "Seu relat\xF3rio est\xE1 pronto! Agradecemos pela paci\xEAncia.",
  "agent-performance": "desempenho-do-agente",
  "bi-weekly": "quinzenal",
  "by AI": "por IA",
  "by {{who}}": "por {{who}}",
  daily: S1,
  from: w1,
  "from_from date": "de",
  'match the keyword "{{filterKeyword}}"': 'corresponde \xE0 palavra-chave "{{filterKeyword}}"',
  monthly: A1,
  quarterly: T1,
  "queue-caller": "chamador-na-fila",
  to: _1,
  "to the external number": "para o n\xFAmero externo",
  "to_to date": "at\xE9",
  "topicsSentimentsTooltip.topicCount": "<0><0>{{ topic }}</0></0> \xE9 mencionado em <2>{{ count }}</2> chamada(s):",
  "topicsSentimentsTooltip.topicCount_plural": "<0><0>{{ topic }}</0></0> \xE9 mencionado em <2>{{ count }}</2> chamada(s):",
  weekly: E1,
  yearly: D1,
  "{{from}}-{{to}} of {{total}}": "{{from}}-{{to}} de {{total}}",
  "{{percent}} %": "{{percent}} %",
  "{{percent}}% ({{value}}) are negative": "{{percent}}% ({{value}}) s\xE3o negativos",
  "{{percent}}% ({{value}}) are neutral": "{{percent}}% ({{value}}) s\xE3o neutros",
  "{{percent}}% ({{value}}) are positive": "{{percent}}% ({{value}}) s\xE3o positivos",
  "{{percent}}% {{sentiment}}": "{{percent}}% {{sentiment}}",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected": "{{selectedElementsCount}} selecionado de {{totalElementsCount}} no total",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected_plural": "{{selectedElementsCount}} selecionados de {{totalElementsCount}} no total",
  "{{selected}} of {{total}} selected": "{{selected}} de {{total}} selecionado",
  "{{selected}} of {{total}} selected_Selected date buckets": "{{selected}} de {{total}} selecionados",
  "{{selected}} of {{total}} selected_Selected date buckets_plural": "{{selected}} selecionadas de {{total}} no total",
  "{{selected}} of {{total}} selected_plural": "{{selected}} selecionadas de {{total}} no total",
  "{{value}} (+ {{amount}} more)": "{{value}} (+ {{amount}} mais)"
}, N1 = "Y", I1 = "Abandonadas", O1 = "Acciones", L1 = "Agente", x1 = "Agentes", R1 = "Alfab\xE9ticamente", $1 = "An\xE1lisis", M1 = "Contestada", P1 = "Aplicar", F1 = "BETA", q1 = "Volver", z1 = "Cada dos semanas", U1 = "Tablero", B1 = "Tableros", W1 = "Devoluci\xF3n de llamada", V1 = "Persona que llama", H1 = "Campa\xF1a", Q1 = "Campa\xF1as", G1 = "Cancelar", Y1 = "Cerrar", Z1 = "Conectada", K1 = "Cliente", J1 = "Diario", X1 = "Eliminar", j1 = "Detalles", eN = "Directa", tN = "Desconectada", aN = "Disposici\xF3n", nN = "Duraci\xF3n", rN = "EXCEPTO", iN = "Correo electr\xF3nico", oN = "Expulsados", sN = "Exportar", lN = "Facebook", dN = "Error", uN = "Filtrar", cN = "De", mN = "Atendidas", fN = "Colgada", pN = "M\xE1ximo", hN = "Casa", gN = "Horas", vN = "Instagram", bN = "Interesado", yN = "M\xEDnimo", CN = "L\xEDnea", SN = "Escuchando", wN = "M\xEDnimo", AN = "Gestionar", TN = "M\xE1ximo", _N = "M\xEDnimo", EN = "Minutos", DN = "Otros", kN = "Mensual", NN = "M\xE1ximo", IN = "NOTA", ON = "Nombre", LN = "Negativa", xN = "Neutral", RN = "Nunca", $N = "No", MN = "Notas", PN = "O", FN = "Abierto", qN = "Saliente", zN = "Resultado", UN = "Resultados", BN = "Visi\xF3n general", WN = "Estacionadas", VN = "Pendiente", HN = "Positiva", QN = "Pulsado", GN = "Trimestral", YN = "Cola", ZN = "Colas", KN = "Reubicado", JN = "Cambiar nombre", XN = "Repetici\xF3n", jN = "Restablecer", eI = "Resuelta", tI = "Timbrando", aI = "SMS", nI = "Ventas", rI = "Guardar", iI = "Programar", oI = "Buscar", sI = "Segundos", lI = "Sentimiento", dI = "Sentimiento", uI = "Servicio", cI = "Ajustes", mI = "Compartir", fI = "Lo sentimos", pI = "Contenido no deseado", hI = "Estado", gI = "Correo de voz guardado", vI = "Resumen", bI = "Encuesta", yI = "Encuesta", CI = "Etiquetas", SI = "Hora", wI = "Tiempo de espera agotado", AI = "Marca de tiempo", TI = "Hoy", _I = "Herramientas", EI = "Temas", DI = "Temas", kI = "Total", NI = "Transcripci\xF3n", II = "Transferida", OI = "Transfiriendo", LI = "Indefinido", xI = "Deshacer", RI = "Sin agrupar", $I = "Unidades", MI = "Desconocido", PI = "Actualizar", FI = "Usuario", qI = "Correo de voz", zI = "Chat web", UI = "Semanal", BI = "En susurro", WI = "Anual", VI = "S\xED", HI = "Ayer", QI = "diaria", GI = "desde", YI = "mensual", ZI = "trimestral", KI = "hasta", JI = "semanal", XI = "anual", Od = {
  "# Pauses": "# de pausas",
  "# Queues": "# de colas",
  "% Queue calls transferred by agent": "% de llamadas de la cola transferidas por el agente",
  "% of calls answered": "% de llamadas respondidas",
  "% of talk time spent": "% del tiempo en conversaci\xF3n invertido",
  "({{hidden}} hidden)": "({{hidden}} oculta)",
  "({{hidden}} hidden)_Hidden bucket rows": "({{hidden}} oculta)",
  "({{hidden}} hidden)_Hidden bucket rows_plural": "({{hidden}} ocultas)",
  "({{hidden}} hidden)_plural": "({{hidden}} ocultas)",
  "+{{numberOfIntents}} more": "+{{numberOfIntents}}",
  "+{{numberOfIntents}} more_plural": "+{{numberOfIntents}}",
  "+{{numberOfTags}} more": "+{{numberOfTags}}",
  "+{{numberOfTags}} more_plural": "+{{numberOfTags}}",
  "+{{numberOfUsers}} more": "m\xE1s {{numberOfUsers}}",
  "+{{numberOfUsers}} more_plural": "m\xE1s {{numberOfUsers}}",
  "...and {{deviceNumber}} more": "...y {{deviceNumber}} m\xE1s",
  "...more": "...m\xE1s",
  "...more_more entries in list": "...m\xE1s",
  "10 boards": "10 tableros",
  "25 boards": "25 tableros",
  "<0><0></0><1>{{callerNumber}}</1> started at\xA0<3><0>{{callStartTime}}</0></3>\xA0 Total duration:\xA0<5><0>{{formattedDuration}}</0></5></0>": "<0><0></0><1>{{callerNumber}}</1> inici\xF3 a las <3><0>{{callStartTime}}</0></3>  Duraci\xF3n total: <5><0>{{formattedDuration}}</0></5></0>",
  "<0>If your download is not starting,</0><1>click here</1>.": "<0>Si la descarga no comienza,</0><1>haga clic aqu\xED</1>.",
  "<0>If your download is not starting,</0><1>click here</1>._Button to reload the page to launch the download again.": "<0>Si la descarga no comienza,</0><1>haga clic aqu\xED</1>.",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>": "<0>Abra</0><1>los ajustes</1><2>y seleccione al menos un gr\xE1fico para mostrar.</2>",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>_Button to open the settings drawer to configure the dashboard.": "<0>Abra</0><1>los ajustes</1><2>y seleccione al menos un gr\xE1fico para mostrar.</2>",
  "A board with that name already exists.": "Ya existe un tablero con ese nombre.",
  "A transcript could not be created": "No se pudo crear una transcripci\xF3n",
  "A transcript is being processed": "Se est\xE1 procesando una transcripci\xF3n.",
  "AI sentiment": "Sentimiento de IA",
  AND: N1,
  "AND_Query operator": "Y",
  Abandoned: I1,
  "Access denied!": "\xA1Acceso denegado!",
  Actions: O1,
  "Add a filter": "Agregar un filtro",
  Agent: L1,
  "Agent Performance": "Agent performance",
  "Agent Summary - Metric": "Resumen del agente - estad\xEDsticas",
  "Agent availability": "Disponibilidad de los agentes",
  "Agent name": "Nombre del agente",
  "Agent summary": "Resumen de agentes",
  "Agent summary - table": "Resumen de agentes - tabla",
  Agent_plural: x1,
  "Agents ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) agentes",
  "Agents filter": "Filtro de agentes",
  "Agents filter is loaded": "Se carg\xF3 el filtro de agentes",
  "All agents": "Todos los agentes",
  "All call types": "Todos los tipos de llamadas",
  "All callback offered": "Todas con devoluci\xF3n de llamada ofrecida",
  "All callback requested": "Todas con devoluci\xF3n de llamada solicitada",
  "All campaigns": "Todas las campa\xF1as",
  "All chat queues": "Todas las colas de chat",
  "All chat types": "Todos los tipos de chat",
  "All conversation tags": "Todas las etiquetas de conversaci\xF3n",
  "All dispositions": "Todas las disposiciones",
  "All outcomes": "Todos los resultados",
  "All queues": "Todas las colas",
  "All replies": "Todas las respuestas",
  "All sentiments": "Todos los sentimientos",
  "All survey responses": "Todas las respuestas de encuesta",
  "All surveys": "Todas las encuestas",
  Alphabetical: R1,
  "An error occurred while creating the board, please try again!": "Ocurri\xF3 un error al crear el tablero. Int\xE9ntelo de nuevo.",
  "An error occurred while deleting the board.": "Ocurri\xF3 un error al eliminar el tablero.",
  "An error occurred while deleting the scheduled board.": "Ocurri\xF3 un error al eliminar el tablero programado.",
  "An error occurred while downloading the scheduled export.": "Ocurri\xF3 un error al descargar la exportaci\xF3n programada.",
  "An error occurred while exporting {{dataName}}.": "Ocurri\xF3 un error al exportar {{dataName}}.",
  "An error occurred while fetching call reports for conversation space {{conversationSpace}}.": "Ocurri\xF3 un error al recuperar los informes de llamadas para el espacio de conversaci\xF3n {{conversationSpace}}.",
  "An error occurred while fetching dashboard to save": "Ocurri\xF3 un error al recuperar el panel para guardar",
  "An error occurred while fetching filters": "Ocurri\xF3 un error al recuperar los filtros",
  "An error occurred while fetching queue caller": "Ocurri\xF3 un error al recuperar a las personas en la cola",
  "An error occurred while fetching queue caller details": "Ocurri\xF3 un error al recuperar los detalles de las personas en la cola",
  "An error occurred while fetching queue caller overall sentiments": "Ocurri\xF3 un error al recuperar los sentimientos generales de las personas en la cola",
  "An error occurred while fetching queue caller topics sentiments": "Ocurri\xF3 un error al recuperar los sentimientos de temas de la persona en la cola",
  "An error occurred while fetching scheduled dashboard users": "Ocurri\xF3 un error al recuperar los usuarios del tablero programado.",
  "An error occurred while fetching scheduled dashboards": "Ocurri\xF3 un error al recuperar los paneles programados",
  "An error occurred while fetching the board": "Ocurri\xF3 un error al recuperar el tablero.",
  "An error occurred while fetching the transcript.": "Ocurri\xF3 un error al recuperar la transcripci\xF3n.",
  "An error occurred while scheduling the board, please try again.": "Ocurri\xF3 un error al programar el tablero. Int\xE9ntelo de nuevo.",
  "An error occurred while sharing the board.": "Ocurri\xF3 un error al compartir el tablero.",
  "An error occurred while updating board permissions.": "Ocurri\xF3 un error al actualizar los permisos del tablero.",
  "An error occurred while updating the board status.": "Ocurri\xF3 un error al actualizar el estado del panel.",
  "An error occurred while updating the board, please try again!": "Ocurri\xF3 un error al actualizar el tablero. Int\xE9ntelo de nuevo.",
  "An error occurred while updating the board.": "Ocurri\xF3 un error al actualizar el tablero.",
  "An error occurred while updating the scheduled dashboard, please try again.": "Ocurri\xF3 un error al actualizar el tablero programado. Int\xE9ntelo de nuevo.",
  Analytics: $1,
  Answered: M1,
  "Answered elsewhere": "Contestada en otro lugar",
  Apply: P1,
  "Are you sure you want to delete the scheduled {{dashboardName}} board?": "\xBFEst\xE1 seguro de querer eliminar el tablero programado {{dashboardName}}?",
  "Are you sure you want to delete {{dashboardName}}?": "\xBFEst\xE1 seguro de que desea eliminar el tablero \u201C{{dashboardName}}\u201D?",
  "Ascending order": "En orden ascendente",
  "Auto attendant": "Contestador autom\xE1tico telef\xF3nico",
  "Auto attendant node": "Nodo del contestador autom\xE1tico telef\xF3nico",
  "Availability and pause time by agent": "Disponibilidad y tiempo en pausa por agente",
  "Availability ratio": "Tasa de disponibilidad",
  "Available in a higher tier": "Disponible en un nivel superior",
  "Average call duration": "Duraci\xF3n promedio de la llamada",
  "Average call sentiment for selected time range": "Sentimiento general de las llamadas en el periodo seleccionado",
  "Average talk time": "Tiempo promedio de conversaci\xF3n",
  "Average talk time_Summary average talk time": "Tiempo promedio de conversaci\xF3n",
  "Average time in queue": "Tiempo medio en cola",
  "Average wait time": "Tiempo de espera promedio",
  "Avg. call duration": "Duraci\xF3n promedio de llamada",
  "Avg. call duration_Average Call Duration": "Duraci\xF3n promedio de llamada",
  "Avg. talk duration": "Duraci\xF3n promedio de conversaci\xF3n",
  "Avg. talk duration_Average Talk Duration": "Duraci\xF3n promedio de conversaci\xF3n",
  "Avg. time in queue": "Tiempo promedio en la cola",
  "Avg. time in queue_Average time in queue": "Tiempo promedio en la cola",
  "Avg. wait time": "Tiempo de espera prom.",
  "Avg. wait time_Average Wait Time": "Tiempo de espera prom.",
  BETA: F1,
  Back: q1,
  "Bar chart icon with 5 bars": "Icono de gr\xE1fico de barras con 5 barras",
  Biweekly: z1,
  "Blindly transferred:": "Transferencia directa:",
  Board: U1,
  "Board Name": "Nombre del tablero",
  "Board actions": "Acciones del tablero",
  "Board dates": "Fechas del tablero",
  "Board has been created.": "El tablero se ha creado.",
  "Board has been deleted.": "El tablero se elimin\xF3.",
  "Board has been scheduled.": "El tablero se ha programado.",
  "Board has been shared.": "El tablero se ha compartido.",
  "Board link": "V\xEDnculo del tablero",
  "Board name": "Nombre del tablero",
  "Board name is required": "El nombre del tablero es obligatorio.",
  "Board permissions has been updated.": "Los permisos del tablero se han actualizado.",
  Boards: B1,
  "CSV file": "Archivo CSV",
  "Call data per call. Click on each call for a detailed view.": "Datos de llamadas individuales. Haga clic en una llamada para ver los detalles.",
  "Call data per day from {{dateRange}}. Click on each day for a detailed view.": "Datos de llamadas por d\xEDa de {{dateRange}}. Haga clic en un d\xEDa para ver los detalles.",
  "Call data per hour on {{dateRange}}. Click on each hour for a detailed view.": "Datos de llamadas por hora el {{dateRange}}. Haga clic en una hora para ver los detalles.",
  "Call duration": "Duraci\xF3n de la llamada",
  "Call duration: all": "Duraci\xF3n de la llamada: todas",
  "Call duration_Call Duration": "Duraci\xF3n de la llamada",
  "Call queue": "Cola de llamadas",
  "Call report": "Informe de la llamada",
  "Call reports": "Informes de llamadas",
  "Call started": "Llamada iniciada",
  "Call type": "Tipo de llamada",
  "Call type_plural": "Tipos de llamada",
  "Call types ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) tipos de llamada",
  "Call types filter": "Filtro de los tipos de llamadas",
  "Call types filter is loaded": "Se carg\xF3 el filtro de los tipos de llamadas",
  "Call volume": "Volumen de llamadas",
  Callback: W1,
  "Callback dispatched": "Devoluci\xF3n de llamada enviada",
  "Callback not offered": "Devoluci\xF3n de llamada no ofrecida",
  "Callback not requested": "Devoluci\xF3n de llamada no solicitada",
  "Callback offered": "Devoluci\xF3n de llamada ofrecida",
  "Callback offered ({{selectedCount}} of {{totalCount}})": "Devoluci\xF3n de llamada ofrecida en ({{selectedCount}} de {{totalCount}})",
  "Callback offered filter": "Filtro de devoluci\xF3n de llamada ofrecida",
  "Callback offered_Callback Offered": "Devoluci\xF3n de llamada ofrecida",
  "Callback offered_plural": "Devoluci\xF3n de llamada ofrecida",
  "Callback requested": "Devoluci\xF3n de llamada solicitada",
  "Callback requested ({{selectedCount}} of {{totalCount}})": "Devoluci\xF3n de llamada solicitada en ({{selectedCount}} de {{totalCount}})",
  "Callback requested filter": "Filtro de devoluci\xF3n de llamada solicitada",
  "Callback requested filter is loaded": "El filtro de devoluci\xF3n de llamada solicitada est\xE1 cargado",
  "Callback requested_Callback Requested": "Devoluci\xF3n de llamada solicitada",
  "Callback requested_plural": "Devoluci\xF3n de llamada solicitada",
  "Callback requests": "Solicitudes de devoluci\xF3n de llamada",
  Caller: V1,
  "Caller info": "Informaci\xF3n de la persona que llama",
  "Caller info node": "Nodo Informaci\xF3n de quien llama",
  "Calls transferred": "Llamadas transferidas",
  Campaign: H1,
  "Campaign type": "Tipo de campa\xF1a",
  "Campaign type_plural": "Tipos de campa\xF1a",
  "Campaign types ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) tipos de campa\xF1a",
  "Campaign types filter": "Filtro de los tipos de campa\xF1a",
  "Campaign types filter is loaded": "Se carg\xF3 el filtro de los tipos de campa\xF1a",
  Campaign_plural: Q1,
  "Campaigns ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) campa\xF1as",
  "Campaigns filter": "Filtro de campa\xF1as",
  "Campaigns filter is loaded": "Se carg\xF3 el filtro de campa\xF1as",
  Cancel: G1,
  "Cancel export": "Cancelar exportaci\xF3n",
  "Change to next tip": "Pasar a la sugerencia siguiente",
  "Change to previous tip": "Pasar a la sugerencia anterior",
  "Chat queue": "Cola de chat",
  "Chat queue_plural": "Cola de chat",
  "Chat queues ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) colas de chat",
  "Chat queues filter": "Filtro de las colas de chat",
  "Chat queues filter is loaded": "Se carg\xF3 el filtro de las colas de chat",
  "Chat type": "Tipo de chat",
  "Chat type_plural": "Tipo de chat",
  "Chat types ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) tipos de chat",
  "Chat types filter": "Filtro de los tipos de chat",
  "Chat types filter is loaded": "Se carg\xF3 el filtro de los tipos de chat",
  "Check back later for a completed transcript.": "Regrese m\xE1s tarde para obtener la transcripci\xF3n completa.",
  "Check back later for interaction details.": "Regrese m\xE1s tarde para obtener los detalles de la interacci\xF3n.",
  "Check back later for overview data": "Regrese m\xE1s tarde para obtener los datos de resumen.",
  "Check back later for overview data.": "Regrese m\xE1s tarde para obtener los datos de resumen.",
  "Choose a secondary filter": "Seleccione un filtro secundario",
  "Click to filter calls for negative sentiment": "Haga clic para filtrar las llamadas con sentimiento negativo",
  "Click to filter calls for neutral sentiment": "Haga clic para filtrar las llamadas con sentimiento neutro",
  "Click to filter calls for positive sentiment": "Haga clic para filtrar las llamadas con sentimiento positivo",
  "Click to refine chart with evicted calls": "Haga clic para filtrar por llamadas expulsadas",
  "Click to refine chart with handled calls": "Haga clic para refinar la tabla e incluir las llamadas atendidas",
  "Click to refine chart with pending calls": "Haga clic para refinar la tabla e incluir las llamadas pendientes",
  "Click to refine data": "Haga clic para refinar los datos",
  Close: Y1,
  "Close banner": "Cerrar banner",
  "Close call reports modal": "Cerrar di\xE1logo modal Informes de llamadas",
  "Close dashboard deletion modal": "Cerrar di\xE1logo modal Eliminar panel de informaci\xF3n",
  "Close delete schedule modal": "Cerrar di\xE1logo modal Eliminar programaci\xF3n",
  "Close drawer": "Cerrar el panel",
  "Close error modal": "Cerrar di\xE1logo modal Error",
  "Close export modal": "Cerrar di\xE1logo modal Exportar",
  "Close rename modal": "Cerrar di\xE1logo modal Cambiar nombre",
  "Close save modal": "Cerrar di\xE1logo modal Guardar",
  "Close schedule modal": "Cerrar di\xE1logo modal Programaci\xF3n",
  "Close share modal": "Cerrar di\xE1logo modal Compartir",
  "Close timeout modal": "Cerrar di\xE1logo modal Tiempo de espera",
  "Closed lost": "Perdida y cerrada",
  "Closed won": "Ganada y cerrada",
  "Collapse the list": "Contraer la lista",
  "Conference bridge": "Puente de conferencias",
  Connected: Z1,
  "Contact support": "Comun\xEDquese con Atenci\xF3n a clientes",
  "Contact support_Link to support page": "Comun\xEDquese con Atenci\xF3n a clientes",
  "Conversation tag": "Etiqueta de conversaci\xF3n",
  "Conversation tag_plural": "Etiquetas de conversaci\xF3n",
  "Conversation tags ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) etiquetas de conversaci\xF3n",
  "Conversation tags filter": "Filtro de las etiquetas de conversaci\xF3n",
  "Conversation tags filter is loaded": "Se carg\xF3 el filtro de las etiquetas de conversaci\xF3n",
  "Copy link": "Copiar v\xEDnculo",
  "Currently loading": "Se est\xE1 cargando",
  Customer: K1,
  "Customer pressed:": "El cliente presion\xF3:",
  "DTMF exit": "Sali\xF3 de la cola",
  Daily: J1,
  "Daily pause avg per queue": "Prom. diario de pausas por cola",
  Date: "Fecha",
  "Date created": "Fecha de creaci\xF3n",
  "Date range": "Intervalo de fechas",
  "Date range filter": "Filtro del rango de fechas",
  Delete: X1,
  "Delete board": "Eliminar el tablero",
  "Delete scheduled board": "Eliminar tablero programado",
  "Delete the scheduled board": "Eliminar el tablero programado",
  "Deleted agent": "Agente eliminado",
  "Deleted agents": "Agentes eliminados",
  "Deleted device": "Dispositivo eliminado",
  "Deleted device_plural": "Dispositivos eliminados",
  "Deleted queue": "Cola eliminada",
  "Deleted user": "Usuario eliminado",
  "Deleting scheduled {{dashboardName}} board": "Eliminando el tablero programado {{dashboardName}}",
  "Deleting {{dashboardName}}": "Eliminando el tablero \u201C{{dashboardName}}\u201D",
  "Descending order": "En orden descendente",
  "Detail view": "Vista de detalle",
  "Detail view {{dateRange}}": "Vista de detalle {{dateRange}}",
  "Detail view {{dateRange}}_Summary overview for the selected date range": "Vista de detalle {{dateRange}}",
  Details: j1,
  "Dial plan": "Plan de marcaci\xF3n",
  "Did you know? Approximately 18.7 billion texts are sent worldwide every day! You can text and message customers using our Multi-Channel feature included in all GoTo Contact plans!": "\xBFSab\xEDa que\u2026? Diariamente, \xA1se env\xEDan alrededor de 18,700 millones de mensajes de texto en todo el mundo! Puede enviar SMS y mensajes a los clientes con nuestra funci\xF3n multicanal incluida en todos los planes de GoTo Contact.",
  "Did you know? If the caller does not have a valid caller ID, they will not be offered the callback option, regardless of the wait time threshold being exceeded.": "\xBFSab\xEDa que\u2026? Si quien llama no tiene un identificador de llamadas v\xE1lido, no se le ofrecer\xE1 la opci\xF3n de devoluci\xF3n de llamada, aunque se haya excedido el l\xEDmite del tiempo de espera.",
  "Did you know? You can change your chart view from the gear icon in your report page.": "\xBFSab\xEDa que\u2026? Puede cambiar la vista del gr\xE1fico desde el \xEDcono de engranaje en la p\xE1gina del informe.",
  Direct: eN,
  "Direct inbound": "Entrantes directas",
  Disconnected: tN,
  Disposition: aN,
  "Disposition ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) disposiciones",
  "Disposition filter": "Filtro de las disposiciones",
  "Disposition filter is loaded": "Se carg\xF3 el filtro de las disposiciones",
  "Disposition:": "Disposici\xF3n:",
  "Draggable item {{ itemLabel }}. Press space bar to start a drag. When dragging you can use\n                                the arrow keys to move the item around and escape to cancel. Ensure your screen reader is in\n                                focus mode or forms mode": `Elemento arrastrable {{ itemLabel }}. Presione la barra espaciadora para comenzar a arrastrarlo. Durante el arrastre, puede usar
                          las teclas de flecha para moverlo y la tecla Escape para cancelar la operaci\xF3n. Aseg\xFArese de que su lector de pantalla est\xE9 en
                          el modo foco o de formularios.`,
  Duration: nN,
  EXCEPT: rN,
  "EXCEPT_Query operator": "EXCEPTO",
  "Each section will be exported as separate files.": "Cada secci\xF3n se exportar\xE1 en archivos independientes.",
  "Edit scheduled board": "Editar el tablero programado",
  "Edit the scheduled board": "Editar el tablero programado",
  Email: iN,
  "Email_Dropdown selectable option": "Correo electr\xF3nico",
  "Entered another queue": "Ingres\xF3 en otra cola",
  "Entered dial plan": "Plan de marcaci\xF3n introducido",
  Error: "Error",
  "Error while fetching agent availability data.": "Error al recuperar los datos de disponibilidad del agente.",
  "Error while fetching agent summary data.": "Error al recuperar los datos del resumen del agente.",
  "Error while fetching call volume data.": "Error al recuperar los datos de la cantidad de llamadas.",
  "Error while fetching total talk time data.": "Error al recuperar los datos del tiempo de conversaci\xF3n total.",
  "Error while fetching transfers data.": "Error al recuperar los datos de transferencias.",
  Evicted: oN,
  "Evicted (legacy)": "Expulsado (versi\xF3n anterior)",
  "Evicted customer": "Expulsado por el cliente",
  "Evicted system": "Expulsado por el sistema",
  "Evicted user": "Expulsado por el usuario",
  "Expand the list": "Expandir la lista",
  Export: sN,
  "Export conversation detail": "Exportar los detalles de la conversaci\xF3n",
  "Export failed.": "Error al exportar.",
  "Export for {{filterDateRange}}": "Exportar para {{filterDateRange}}",
  "Export is currently unavailable": "Exportaci\xF3n no disponible actualmente",
  "Export is unavailable for this board.": "La exportaci\xF3n no est\xE1 disponible para este tablero.",
  "Ext. Type": "Tipo de ext.",
  "External number": "N\xFAmero externo",
  Facebook: lN,
  Failed: dN,
  "Failed_Failed to reach the voicemail": "Error",
  Filter: uN,
  "Filter will not be applied as nothing is selected.": "El filtro no se aplicar\xE1 porque nada est\xE1 seleccionado.",
  "Filters loading, please wait.": "Cargando los filtros. Por favor, espere.",
  "Filters saved": "Filtros guardados",
  "For more information, please visit our <2>support site <1></1></2>": "Para obtener m\xE1s informaci\xF3n, visite nuestro <2>sitio de atenci\xF3n a clientes <1></1></2>",
  "For more information, please visit our <2>support site <1></1></2>_Link to support site for timeout dialog": "Para obtener m\xE1s informaci\xF3n, visite nuestro <2>sitio de atenci\xF3n a clientes <1></1></2>",
  "Forward 10 seconds": "Avanzar 10 segundos",
  From: cN,
  "Generated report file type": "Tipo de archivo del informe generado",
  "GoTo Analytics": "An\xE1lisis de GoTo",
  "Great news! We now offer dedicated callback reporting on the Queue Caller board.\xA0<1>Visit our support page to learn more about callback, timed-out and eviction reporting.</1>": "\xA1Buenas noticias! Ahora ofrecemos informes dedicados de devoluci\xF3n de llamadas en el tablero de las personas en la cola. <1>Visite nuestra p\xE1gina de atenci\xF3n a clientes para obtener m\xE1s informaci\xF3n sobre la generaci\xF3n de informes de devoluci\xF3n de llamadas, llamadas con tiempo de espera agotado y expulsadas.</1>",
  "Group by": "Agrupar por",
  "Group by filter": "Agrupar por filtro",
  Handled: mN,
  "Handled contacts": "Contactos atendidos",
  "Handled contacts_Summary handled contacts": "Contactos atendidos",
  Hangup: fN,
  "Hangup by:": "Colgado por:",
  "Hide empty rows": "Ocultar filas vac\xEDas",
  Highest: pN,
  "Highest avg": "Promedio m\xE1ximo",
  "Highest avg_Highest average talk time": "Promedio m\xE1ximo",
  "Highest value": "Valor m\xE1ximo",
  "Highest_Highest total talk time": "M\xE1ximo",
  Home: hN,
  "Home_Button that redirect to the home page": "Casa",
  Hours: gN,
  "Hover for details": "Pase el mouse para ver los detalles",
  "Including all call types": "Se incluyen todos los tipos de llamadas",
  "Including all campaign types": "Se incluyen todos los tipos de campa\xF1as",
  "Including all campaigns": "Se incluyen todas las campa\xF1as",
  "Including all outcomes": "Se incluyen todos los resultados",
  "Including all sentiments": "Incluidos todos los sentimientos",
  "Including all topics": "Se incluyen todos los temas",
  "Including deleted agents and users": "Se incluyen los agentes y los usuarios eliminados",
  "Including deleted queues": "Se incluyen las colas eliminadas",
  "Including deleted sources": "Se incluyen los recursos eliminados",
  Instagram: vN,
  "Insufficient privileges": "Privilegios insuficientes",
  "Intents:": "Intentos:",
  "Interaction details": "Detalles de la interacci\xF3n",
  Interested: bN,
  "Internal number": "N\xFAmero interno",
  "Invalid option": "Opci\xF3n no v\xE1lida",
  "Invalid option_Auto attendant option": "Opci\xF3n no v\xE1lida",
  "Invalid.": "No v\xE1lido.",
  "Invalid._The minimum or maximum duration is invalid": "No v\xE1lida.",
  "Invite users / emails within your organization": "Invitar usuarios/correos electr\xF3nicos de su empresa",
  "Issue opened": "Problema abierto",
  "Issue resolved": "Problema resuelto",
  "It looks like you don\u2019t have permission \nto access this board.": "Parece que no tiene permiso para acceder a este tablero.",
  "Item {{itemLabel}}": "Elemento {{itemLabel}}",
  "Item {{itemLabel}} has moved from position {{startPosition}} to {{endPosition}}": "El elemento {{itemLabel}} se movi\xF3 de la posici\xF3n {{startPosition}} a la posici\xF3n {{endPosition}}.",
  "Item {{itemLabel}} lifted from position {{position}}": "Elemento {{itemLabel}} tomado de la posici\xF3n {{position}}.",
  "Item {{itemLabel}} moved from position {{startPosition}} to position {{endPosition}}": "Elemento {{itemLabel}} movido de la posici\xF3n {{startPosition}} a la posici\xF3n {{endPosition}}.",
  "Joined empty": "Agregado a cola vac\xEDa",
  "Last 14 days": "Los \xFAltimos 14 d\xEDas",
  "Last 30 days": "Los \xFAltimos 30 d\xEDas",
  "Last 7 days": "Los \xFAltimos 7 d\xEDas",
  "Last agent in the call:": "\xDAltimo agente en la llamada:",
  Least: yN,
  "Least_Least handled contacts": "M\xEDnimo",
  "Leaving reason": "Motivo del abandono",
  "Leaving reason:": "Motivo del abandono:",
  "Left empty": "Eliminado de cola vac\xEDa",
  "License: {{currentLicense}}": "Licencia: {{currentLicense}}",
  Line: CN,
  "Link copied!": "\xA1V\xEDnculo copiado!",
  "List of {{item}}": "Lista de {{item}}",
  Listening: SN,
  "Loading SMS sent filter...": "Cargando el filtro de SMS enviados...",
  "Loading agents filter...": "Cargando el filtro de los agentes...",
  "Loading call types filter...": "Cargando el filtro de los tipos de llamada...",
  "Loading callback offered filter...": "Cargando filtro de devoluci\xF3n de llamada ofrecida...",
  "Loading callback requested filter...": "Cargando filtro de devoluci\xF3n de llamada solicitada...",
  "Loading campaign types filter...": "Cargando el filtro de los tipos de campa\xF1a...",
  "Loading campaigns filter...": "Cargando el filtro de las campa\xF1as...",
  "Loading chat queues filter...": "Cargando el filtro de las colas de chat...",
  "Loading chat types filter...": "Cargando el filtro de los tipos de chat...",
  "Loading conversation tags filter...": "Cargando el filtro de las etiquetas de conversaci\xF3n...",
  "Loading disposition filter...": "Cargando el filtro de las disposiciones...",
  "Loading outcomes filter...": "Cargando el filtro de resultados...",
  "Loading queues filter...": "Cargando el filtro de las colas...",
  "Loading sentiments filter...": "Cargando el filtro de sentimientos...",
  "Loading survey responses filter...": "Cargando el filtro de las respuestas de encuesta...",
  "Loading surveys filter...": "Cargando el filtro de encuestas...",
  "Loading topics filter...": "Cargando el filtro de los temas...",
  "Loading...": "Cargando\u2026",
  "Longest pause duration": "Duraci\xF3n de la pausa m\xE1s larga",
  Lowest: wN,
  "Lowest avg": "Promedio m\xEDnimo",
  "Lowest avg_Lowest average talk time": "Promedio m\xEDnimo",
  "Lowest value": "Valor m\xEDnimo",
  "Lowest_Least total talk time": "M\xEDnimo",
  "Make a selection to filter": "Seleccione para filtrar",
  Manage: AN,
  "Manage language": "Gestionar idioma",
  "Max boards per section": "N\xFAm. m\xE1x. de tableros por secci\xF3n",
  Maximum: TN,
  Minimum: _N,
  Minutes: EN,
  Miscellaneous: DN,
  "Miscellaneous - Transferred": "Otro - Transferida",
  "Miscellaneous - Voicemail": "Otro - Correo de voz",
  "Miscellaneous - Wrong number": "Otro - N\xFAmero equivocado",
  "Missed contacts": "Contactos perdidos",
  "Month to date": "Mes en curso",
  Monthly: kN,
  Most: NN,
  "Most mentioned topics": "Temas m\xE1s mencionados",
  "Most_Most handled contacts": "M\xE1ximo",
  "Mostly negative": "Principalmente negativo",
  "Mostly positive": "Principalmente positivo",
  "Movement cancelled. Item {{itemLabel}} has returned to its starting position {{startPosition}} of {{listLength}}": "Movimiento cancelado. El elemento {{itemLabel}} regres\xF3 a su posici\xF3n inicial {{startPosition}} de {{listLength}}.",
  "Must not exceed 255 characters": "No debe exceder de 255 caracteres",
  NOTE: IN,
  Name: ON,
  Negative: LN,
  "Negative Answer": "Respuesta negativa",
  "Negative_Negative sentiment analysis result": "Negativo",
  Neutral: xN,
  "Neutral_Neutral sentiment analysis result": "Neutral",
  Never: RN,
  "New schedule": "Nueva programaci\xF3n",
  "Next page": "P\xE1gina siguiente",
  No: $N,
  "No Answer": "Sin respuesta",
  "No answer": "Sin respuesta",
  "No callback offered": "Sin devoluci\xF3n de llamada ofrecida",
  "No callback requested": "Sin devoluci\xF3n de llamada solicitada",
  "No data": "No hay datos",
  "No data available!": "\xA1No hay datos disponibles!",
  "No data to display": "No hay datos que mostrar",
  "No data yet": "Todav\xEDa no hay datos",
  "No notes available": "No hay notas disponibles",
  "No overview yet": "Todav\xEDa no hay un resumen",
  "No response": "Sin respuesta",
  "No transcript data": "No hay datos de transcripci\xF3n",
  "No transcript yet": "Todav\xEDa no hay una transcripci\xF3n",
  "No users to display": "No hay usuarios que mostrar",
  "No_Callback Detail Column": "No",
  "No_Queue callback was not offered": "No",
  "Not applicable (-)": "No corresponde (-)",
  Notes: MN,
  "Notes taken during this call will appear here.": "Las notas que se tomen durante la llamada se mostrar\xE1n aqu\xED.",
  "Notes_Notes added to a call by an agent": "Notas",
  "Nothing is selected.": "No se ha seleccionado nada.",
  "Notify by": "Notificar por",
  OR: PN,
  "OR_Query operator": "O",
  "On Hold": "En espera",
  "Only numbers are allowed": "Solo se permiten n\xFAmeros",
  Open: FN,
  "Open boards menu options": "Abrir las opciones de men\xFA de los tableros",
  "Open {{dashboard}} board menu options": "Abrir las opciones de men\xFA del tablero {{dashboard}}",
  "Opt {{option}}": "opc {{option}}",
  "Opt {{option}}_Auto attendant option": "opc {{option}}",
  "Option {{option}}": "Opci\xF3n {{option}}",
  "Option {{option}}_Customer phone option pressed": "Opci\xF3n {{option}}",
  Outbound: qN,
  Outcome: zN,
  Outcome_plural: UN,
  "Outcomes ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) resultados",
  "Outcomes filter": "Filtro de resultados",
  "Outcomes filter format has changed": "El filtro de resultados se ha modificado",
  "Outcomes filter is loaded": "Se carg\xF3 el filtro de resultados",
  "Over time - charts": "A lo largo del tiempo - gr\xE1ficos",
  "Overall sentiment": "Sentimiento general",
  Overview: BN,
  "Overview {{dateRange}}": "Resumen de {{dateRange}}",
  "Overview {{dateRange}}_Summary overview for the selected date range": "Resumen de {{dateRange}}",
  "Overview:": "Resumen:",
  "Page {{index}}/{{count}}": "P\xE1gina {{index}} de {{count}}",
  "Page {{index}}/{{count}}_plural": "P\xE1gina {{index}} de {{count}}",
  Parked: WN,
  "Participants names": "Nombres de los participantes",
  "Participants phone numbers": "N\xFAmeros telef\xF3nicos de los participantes",
  "Participants:": "Participantes:",
  "Pause the audio": "Pausar el audio",
  "Pause the scheduled board": "Pausar el tablero programado",
  Pending: VN,
  "Percentage breakdown from calls included in your current filter.": "El desglose de porcentajes de las llamadas se incluye en el filtro actual.",
  "Phone number": "N\xFAmero de tel\xE9fono",
  "Play sound clip": "Reproducir clip de sonido",
  "Play the audio": "Reproducir el audio",
  "Please select which data columns and tables you would like to export. CSV files will not contain graphics or images.": "Seleccione las columnas y las tablas de datos que desea exportar. Los archivos CSV no incluyen elementos gr\xE1ficos ni im\xE1genes.",
  Positive: HN,
  "Positive Answer": "Respuesta positiva",
  "Positive_Positive sentiment analysis result": "Positivo",
  Pressed: QN,
  "Previous month": "Mes anterior",
  "Previous page": "P\xE1gina anterior",
  "Previous week": "Semana anterior",
  Quarterly: GN,
  Queue: YN,
  "Queue Caller": "Queue caller",
  "Queue Caller Summary - grouped by date": "Resumen de personas en cola - agrupadas por fecha",
  "Queue Caller Summary - grouped by queue": "Resumen de personas en cola - agrupadas por cola",
  "Queue callback offered:": "Ofrece devoluci\xF3n de llamada:",
  "Queue caller - Details": "Detalles - Persona en la cola",
  "Queue caller - Summary": "Resumen - Persona en la cola",
  "Queue caller details table": "Tabla de detalles de la persona en la cola",
  "Queue caller summary table": "Tabla de resumen de interlocutores en cola",
  "Queue calls": "Llamadas en la cola",
  "Queue configured wrap up:": "Cierre configurado para la cola:",
  "Queue full": "Cola llena",
  "Queue name:": "Nombre de la cola:",
  "Queue node": "Nodo de la cola",
  "Queue transfers": "Transferencias de colas",
  "Queue type:": "Tipo de cola:",
  Queue_plural: ZN,
  "Queues ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) colas",
  "Queues filter": "Filtro de las colas",
  "Queues filter is loaded": "Se carg\xF3 el filtro de las colas",
  "Recently updated": "Actualizados recientemente",
  "Recording not available": "Grabaci\xF3n no disponible",
  "Refine data": "Depurar datos",
  Relocated: KN,
  "Remove filter": "Eliminar el filtro",
  "Removed by supervisor": "Retirado por el supervisor",
  Rename: JN,
  Repeats: XN,
  "Replace callback": "Reemplazado por devoluci\xF3n de llamada",
  "Circle size represents volume of topics most commonly detected by AI. Bolder colors indicate a more prevalent sentiment when the topic is mentioned.": "Representaci\xF3n de los temas detectados con mayor frecuencia por la IA. Los colores m\xE1s intensos indican un sentimiento m\xE1s frecuente cuando se menciona el tema.",
  "Request Timeout": "Tiempo de espera de la solicitud",
  Reset: jN,
  "Reset filters": "Restablecer filtros",
  Resolved: eI,
  "Resolved by admin": "Resuelta por el administrador",
  "Resolved conversation": "Conversaci\xF3n resuelta",
  "Resume the scheduled board": "Reanudar el tablero programado",
  "Rewind 10 seconds": "Retroceder 10 segundos",
  "Ring group": "Grupo de timbrado",
  Ringing: tI,
  "Rows per page": "Filas por p\xE1gina",
  SMS: aI,
  "SMS auto-reply": "Respuesta autom\xE1tica de SMS",
  "SMS sent": "SMS enviados",
  "SMS sent ({{selectedCount}} of {{totalCount}})": "SMS enviados ({{selectedCount}} de {{totalCount}})",
  "SMS sent filter": "Filtro de SMS enviados",
  "SMS sent filter is loaded": "Se carg\xF3 el filtro de SMS enviados",
  Sales: nI,
  "Sales - Callback": "Ventas - Devoluci\xF3n de llamada",
  "Sales - Closed lost": "Ventas - Perdida y cerrada",
  "Sales - Closed won": "Ventas - Ganada y cerrada",
  "Sales - Interested": "Ventas - Interesados",
  Save: rI,
  "Save As": "Guardar como",
  "Save Filter": "Guardar filtro",
  "Save as new board": "Guardar como tablero nuevo",
  "Save as...": "Guardar como...",
  Schedule: iI,
  "Schedule board": "Programar tablero",
  "Schedule manager": "Administrador de la programaci\xF3n",
  "Schedule node": "Nodo Horario",
  "Schedule selected:": "Horario seleccionado:",
  "Scheduled board has been deleted.": "El tablero programado se ha eliminado.",
  "Scheduled board has been paused.": "El tablero programado se ha pausado.",
  "Scheduled board has been resumed.": "El tablero programado se ha reanudado.",
  "Scheduled board has been updated.": "El tablero programado se ha actualizado.",
  "Scheduled boards": "Tableros programados",
  "Scheduled date": "Fecha programada",
  "Scheduled date & time": "Fecha y hora programadas",
  "Scheduled owner": "Propietario del tablero programado",
  "Scheduled time": "Hora programada",
  "Scheduling dashboard": "Programaci\xF3n del tablero en curso",
  Search: oI,
  "Search users": "Buscar usuarios",
  Seconds: sI,
  "Sections visibility": "Visibilidad de las secciones",
  "Select all": "Seleccionar todo",
  "Select entries below to see the details": "Seleccione entradas a continuaci\xF3n para ver los detalles",
  "Select file type": "Seleccionar el tipo de archivo",
  "Select team members": "Seleccionar a los miembros del equipo",
  "Selected board does not support that type.": "El tablero seleccionado no es compatible con ese tipo.",
  Sentiment: lI,
  "Sentiment analysis": "An\xE1lisis de sentimiento",
  "Sentiment detected for this call": "Sentimiento detectado para esta llamada",
  Sentiment_plural: dI,
  "Sentiments ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) sentimientos",
  "Sentiments filter": "Filtro de sentimientos",
  "Sentiments filter is loaded": "Se carg\xF3 el filtro de sentimientos",
  Service: uI,
  "Service - Issue opened": "Servicio - Problema abierto",
  "Service - Issue resolved": "Servicio - Problema resuelto",
  "Service - No answer": "Servicio - Sin respuesta",
  "Service - Waiting on customer": "Servicio - Esperando al cliente",
  "Service - Waiting on internal": "Servicio - Esperando a recurso interno",
  "Set the range for call duration.": "Establecer los l\xEDmites de la duraci\xF3n de la llamada.",
  "Set the range for waiting time. By default, all min/max are selected.": "Establecer el intervalo para el tiempo de espera. De forma predeterminada, se seleccionan todas las duraciones.",
  Settings: cI,
  "Settings_Button to open the settings menu": "Configuraci\xF3n",
  Share: mI,
  "Share - {{dashboardName}}": "Compartir {{dashboardName}}",
  "Shared with": "Compartido con",
  "Shared with me": "Compartidos conmigo",
  "Shared with:": "Compartido con:",
  "Sharing {{dashboardName}}": "Compartiendo {{dashboardName}}",
  "Show all": "Mostrar todo",
  "Show more boards": "Mostrar m\xE1s tableros",
  "Show selected only": "Mostrar solo los elementos seleccionados",
  "Sign out": "Cerrar sesi\xF3n",
  "Slightly negative": "Ligeramente negativo",
  "Slightly positive": "Ligeramente positivo",
  Sorry: fI,
  "Sort by": "Ordenar por",
  "Sort {{columnName}}": "Ordenar por {{columnName}}",
  Spam: pI,
  Status: hI,
  "Status:": "Estado:",
  Success: gI,
  "Success_Success to reach the voicemail": "Correo de voz guardado",
  Summary: vI,
  "Summary_Back to summary button": "Resumen",
  Survey: bI,
  "Survey response": "Respuesta de encuesta",
  "Survey response_plural": "Respuestas de encuesta",
  "Survey responses ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) respuestas de encuesta",
  "Survey responses filter": "Filtro de las respuestas de encuesta",
  "Survey responses filter is loaded": "Se carg\xF3 el filtro de las respuestas de encuesta",
  Survey_plural: yI,
  "Surveys ({{selectedCount}} of {{totalCount}})": "({{selectedCount}} de {{totalCount}}) encuestas",
  "Surveys filter": "Filtro de encuestas",
  "Surveys filter is loaded": "Se carg\xF3 el filtro de encuestas",
  Tags: CI,
  "Tags:": "Etiquetas:",
  "Talk duration": "Duraci\xF3n de la conversaci\xF3n",
  "Talk duration_Talk Duration": "Duraci\xF3n de la conversaci\xF3n",
  "The character '{{character}}' is not supported": "El car\xE1cter \u201C{{character}}\u201D no es admitido",
  "The characters {{characters}} aren't supported": "Los caracteres \u201C{{characters}}\u201D no son admitidos",
  "The date has been updated from the refine.": "Se ha actualizado la fecha desde la depuraci\xF3n.",
  "The deleted user will still be able to access the board, but will not receive any notifications.": "El usuario eliminado podr\xE1 seguir teniendo acceso al tablero, pero no recibir\xE1 notificaciones.",
  "The page you are looking for does not exist!": "\xA1La p\xE1gina que busca no existe!",
  "The recording did not contain sufficient data <1></1>for a transcript to be created.": "La grabaci\xF3n no inclu\xEDa datos suficientes para <1></1>crear una transcripci\xF3n.",
  "The requested dataset is too large to be displayed.": "El conjunto de datos solicitado es demasiado grande para mostrarlo.",
  "The saved board will appear in the Board section on your left sidebar": "El tablero guardado se mostrar\xE1 en la secci\xF3n Tableros, en la barra lateral izquierda.",
  "There are new changes available, the page will be updated shortly.": "Hay nuevos cambios disponibles; la p\xE1gina se actualizar\xE1 en breve.",
  "There is no data available for this call.": "No hay datos disponibles para esta llamada.",
  "There were no notes taken for this call": "No se tomaron notas para esta llamada.",
  Time: SI,
  "Time in queue": "Tiempo en la cola",
  "Time in queue: all": "Tiempo en la cola: todos",
  "Timed out": "Tiempo agotado",
  "Timed out (legacy)": "Tiempo de espera agotado (versi\xF3n anterior)",
  Timeout: wI,
  Timestamp: AI,
  Today: TI,
  Tools: _I,
  Topics: EI,
  "Topics detected for this call": "Temas detectados para esta llamada",
  "Topics filter": "Filtro de temas",
  "Topics filter is loaded": "Se carg\xF3 el filtro de los temas",
  Topics_plural: DI,
  Total: kI,
  "Total availability": "Disponibilidad total",
  "Total call duration over time": "Duraci\xF3n total de la llamada a lo largo del tiempo",
  "Total call volume trends": "Tendencias del volumen total de llamadas",
  "Total calls": "Total de llamadas",
  "Total calls by outcome": "Total de llamadas por resultado",
  "Total calls over time": "Total de llamadas a lo largo del tiempo",
  "Total pause": "Tiempo total en pausa",
  "Total talk time": "Tiempo de conversaci\xF3n total",
  "Total talk time trends": "Tendencias del tiempo de conversaci\xF3n total",
  "Total talk time_Summary total talk time": "Tiempo de conversaci\xF3n total",
  Transcript: NI,
  "Transcription will be enabled in the coming weeks": "La transcripci\xF3n se activar\xE1 durante las semanas siguientes.",
  "Transfer completed": "Transferencia completada",
  "Transfer ratio": "Tasa de transferencia",
  Transferred: II,
  Transferring: OI,
  "Transferring - Attended": "Transferencia: atendido",
  "Transferring - Drop off": "Transferencia: colgado",
  "Try again": "Reintentar",
  "Type a number": "Escriba un n\xFAmero",
  "Type a user name": "Escriba un nombre de usuario",
  "Type user or email": "Escriba el nombre del usuario o el correo electr\xF3nico",
  "Unassigned devices": "Dispositivos sin asignar",
  Undetermined: LI,
  "Undetermined_No sentiment analysis result": "Indefinido",
  Undo: xI,
  "Undo_Undo an action (date filter refine)": "Deshacer",
  Ungrouped: RI,
  Units: $I,
  Unknown: MI,
  Update: PI,
  "Updating scheduled board": "Actualizando el tablero programado",
  "Updating scheduled board status": "Actualizando el estado del tablero programado",
  "Updating {{dashboardName}}": "Actualizando el tablero {{dashboardName}}",
  "Updating {{dashboardName}} permissions": "Actualizando los permisos de {{dashboardName}}",
  "Upgrade to Complete to see the details": "Actual\xEDcese a Complete para ver los detalles",
  User: FI,
  "Version: {{version}}": "Versi\xF3n: {{version}}",
  "View all participants": "Ver todos los participantes",
  "View all tags": "Ver todas las etiquetas",
  "View settings": "Ver ajustes",
  Voicemail: qI,
  "Voicemail box": "Buz\xF3n de voz",
  "Voicemail reached": "Lleg\xF3 al correo de voz",
  "Wait Time": "Tiempo de espera",
  "Waiting on customer": "Esperando al cliente",
  "Waiting on internal": "Esperando a recurso interno",
  "Waiting time": "Tiempo de espera",
  "We are working to pull the data you requested.": "Estamos trabajando para extraer los datos que solicit\xF3.",
  "We detect sentiment using AI. Click a segment to refine the data.": "Detectamos los sentimientos con IA. Haga clic en un segmento para refinar los datos.",
  Webchat: zI,
  "Week to date": "Semana en curso",
  Weekly: UI,
  Whispering: BI,
  "Wrap up": "Cierre",
  "Wrapped up by {{name}}": "Cerrada por {{name}}",
  "Wrong number": "N\xFAmero equivocado",
  Yearly: WI,
  Yes: VI,
  "Yes_Callback Detail Column": "S\xED",
  "Yes_Queue callback was offered": "S\xED",
  Yesterday: HI,
  "You can click on a day to select a custom range.": "Puede hacer clic en un d\xEDa para seleccionar un l\xEDmite personalizado.",
  "You can go back and reduce your selection (smaller date range, fewer queues, fewer agents, etc ) or you can export this selection instead.": "Puede regresar y reducir la selecci\xF3n (un rango de fechas menor, menos colas, menos agentes, etc.) o, en cambio, puede exportar la selecci\xF3n actual.",
  "You do not have any custom boards.": "No tiene ning\xFAn tablero personalizado.",
  "You do not have permission to view this recording": "No tiene permiso para acceder a esta grabaci\xF3n.",
  "Your download should start shortly": "La descarga debe comenzar en breve",
  "Your export is complete.": "La exportaci\xF3n finaliz\xF3.",
  "Your export is in progress.": "La exportaci\xF3n est\xE1 en curso.",
  "Your report is ready! Thank you for your patience.": "Su informe est\xE1 listo. Agradecemos su paciencia.",
  "agent-performance": "desempe\xF1o-de-agentes",
  "bi-weekly": "quincenal",
  "by AI": "por IA",
  "by {{who}}": "por {{who}}",
  daily: QI,
  from: GI,
  "from_from date": "desde",
  'match the keyword "{{filterKeyword}}"': "encontrar la palabra clave \u201C{{filterKeyword}}\u201D",
  monthly: YI,
  quarterly: ZI,
  "queue-caller": "personas-en-la-cola",
  to: KI,
  "to the external number": "al n\xFAmero externo",
  "to_to date": "hasta",
  "topicsSentimentsTooltip.topicCount": "<0><0>{{ topic }}</0></0> se menciona en <2>{{ count }}</2> llamada(s):",
  "topicsSentimentsTooltip.topicCount_plural": "<0><0>{{ topic }}</0></0> se menciona en <2>{{ count }}</2> llamada(s):",
  weekly: JI,
  yearly: XI,
  "{{from}}-{{to}} of {{total}}": "{{from}} - {{to}} de {{total}}",
  "{{percent}} %": "{{percent}}\xA0%",
  "{{percent}}% ({{value}}) are negative": "{{percent}}\xA0% ({{value}}) son negativos",
  "{{percent}}% ({{value}}) are neutral": "{{percent}}\xA0% ({{value}}) son neutros",
  "{{percent}}% ({{value}}) are positive": "{{percent}}\xA0% ({{value}}) son positivos",
  "{{percent}}% {{sentiment}}": "{{percent}}\xA0% {{sentiment}}",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected": "{{selectedElementsCount}} de {{totalElementsCount}} seleccionado",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected_plural": "{{selectedElementsCount}} de {{totalElementsCount}} seleccionados",
  "{{selected}} of {{total}} selected": "{{selected}} de {{total}} seleccionado",
  "{{selected}} of {{total}} selected_Selected date buckets": "{{selected}} de {{total}} seleccionados",
  "{{selected}} of {{total}} selected_Selected date buckets_plural": "Selecci\xF3n: {{selected}} de {{total}}",
  "{{selected}} of {{total}} selected_plural": "Selecci\xF3n: {{selected}} de {{total}}",
  "{{value}} (+ {{amount}} more)": "{{value}} (+ {{amount}} m\xE1s)"
}, jI = "ET", eO = "Abandonn\xE9", tO = "Actions", aO = "Agent", nO = "Agents", rO = "Alphab\xE9tique", iO = "Outils d\u2019analyse", oO = "R\xE9pondu", sO = "Appliquer", lO = "B\xCATA", dO = "Pr\xE9c\xE9dent", uO = "Bihebdomadaire", cO = "Indicateur", mO = "Indicateurs", fO = "Rappel", pO = "Appelant", hO = "Campagne", gO = "Campagnes", vO = "Annuler", bO = "Fermer", yO = "Connect\xE9", CO = "Client", SO = "Quotidien", wO = "Supprimer", AO = "D\xE9tails", TO = "Direct", _O = "D\xE9connect\xE9", EO = "Conclusion", DO = "Dur\xE9e", kO = "SAUF", NO = "E-mail", IO = "\xC9vinc\xE9", OO = "Exporter", LO = "Facebook", xO = "\xC9chec", RO = "Filtrer", $O = "Appelant", MO = "Trait\xE9", PO = "Raccrochage", FO = "Maximum", qO = "Domicile", zO = "Heures", UO = "Instagram", BO = "Int\xE9ress\xE9", WO = "Minimum", VO = "Ligne", HO = "En \xE9coute", QO = "Minimum", GO = "G\xE9rer", YO = "Maximum", ZO = "Minimum", KO = "Minutes", JO = "Divers", XO = "Mensuel", jO = "Maximum", eL = "NOTE", tL = "Nom", aL = "N\xE9gative", nL = "Neutre", rL = "Jamais", iL = "Non", oL = "Remarques", sL = "OU", lL = "Ouvert", dL = "Sortant", uL = "R\xE9sultat", cL = "R\xE9sultats", mL = "Vue d\u2019ensemble", fL = "Appels parqu\xE9s", pL = "En attente", hL = "Positive", gL = "Choix", vL = "Trimestriel", bL = "File", yL = "File", CL = "D\xE9plac\xE9", SL = "Renommer", wL = "R\xE9p\xE9tition", AL = "R\xE9initialiser", TL = "R\xE9solue", _L = "Sonnerie", EL = "SMS", DL = "Ventes", kL = "Enregistrer", NL = "Planifier", IL = "Rechercher\xA0", OL = "Secondes", LL = "Sentiment", xL = "Sentiment", RL = "Service", $L = "Param\xE8tres", ML = "Partager", PL = "D\xE9sol\xE9", FL = "Ind\xE9sirable", qL = "Statut", zL = "R\xE9ussite", UL = "R\xE9capitulatif", BL = "Enqu\xEAte", WL = "Enqu\xEAte", VL = "\xC9tiquettes", HL = "Heure", QL = "D\xE9lai d\xE9pass\xE9", GL = "Horodatage", YL = "Aujourd\u2019hui", ZL = "Outils", KL = "Rubriques", JL = "Rubriques", XL = "Total", jL = "Transcription", ex = "Transf\xE9r\xE9", tx = "Transfert en cours", ax = "Ind\xE9fini", nx = "Annuler", rx = "Non group\xE9", ix = "Unit\xE9s", ox = "Inconnu", sx = "Mettre \xE0 jour", lx = "Utilisateur", dx = "Message vocal", ux = "Webchat", cx = "Hebdomadaire", mx = "Chuchotement", fx = "Annuel", px = "Oui", hx = "Hier", gx = "quotidien", vx = "du", bx = "mensuel", yx = "trimestriel", Cx = "au", Sx = "hebdomadaire", wx = "annuel", Ld = {
  "# Pauses": "Nb de pauses",
  "# Queues": "Nb de files",
  "% Queue calls transferred by agent": "Pourcentage des transferts de la file par agent",
  "% of calls answered": "Pourcentage des appels pris",
  "% of talk time spent": "Pourcentage du temps de conversation",
  "({{hidden}} hidden)": "({{hidden}} cach\xE9e)",
  "({{hidden}} hidden)_Hidden bucket rows": "({{hidden}} cach\xE9e)",
  "({{hidden}} hidden)_Hidden bucket rows_plural": "({{hidden}} cach\xE9es)",
  "({{hidden}} hidden)_plural": "({{hidden}} cach\xE9es)",
  "+{{numberOfIntents}} more": "+{{numberOfIntents}} autre",
  "+{{numberOfIntents}} more_plural": "+{{numberOfIntents}} autres",
  "+{{numberOfTags}} more": "+{{numberOfTags}} autre",
  "+{{numberOfTags}} more_plural": "+{{numberOfTags}} autres",
  "+{{numberOfUsers}} more": "+{{numberOfUsers}} de plus",
  "+{{numberOfUsers}} more_plural": "+{{numberOfUsers}} de plus",
  "...and {{deviceNumber}} more": "... et {{deviceNumber}} autre(s)",
  "...more": "...plus",
  "...more_more entries in list": "...plus",
  "10 boards": "10 indicateurs",
  "25 boards": "25 indicateurs",
  "<0><0></0><1>{{callerNumber}}</1> started at\xA0<3><0>{{callStartTime}}</0></3>\xA0 Total duration:\xA0<5><0>{{formattedDuration}}</0></5></0>": "<0><0></0><1>{{callerNumber}}</1> d\xE9marr\xE9 \xE0\xA0<3><0>{{callStartTime}}</0></3>\xA0 Dur\xE9e totale :\xA0<5><0>{{formattedDuration}}</0></5></0>",
  "<0>If your download is not starting,</0><1>click here</1>.": "<0>Si votre t\xE9l\xE9chargement ne d\xE9marre pas,</0><1>cliquez ici</1>.",
  "<0>If your download is not starting,</0><1>click here</1>._Button to reload the page to launch the download again.": "<0>Si votre t\xE9l\xE9chargement ne d\xE9marre pas,</0><1>cliquez ici</1>.",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>": "<0>Veuillez ouvrir les</0><1>param\xE8tres</1><2>et s\xE9lectionner au moins un diagramme \xE0 afficher.</2>",
  "<0>Please open</0><1>the settings</1><2>and select at least one chart to show.</2>_Button to open the settings drawer to configure the dashboard.": "<0>Veuillez ouvrir les</0><1>param\xE8tres</1><2>et s\xE9lectionner au moins un diagramme \xE0 afficher.</2>",
  "A board with that name already exists.": "Un indicateur de ce nom existe d\xE9j\xE0.",
  "A transcript could not be created": "La transcription n\u2019a pas pu \xEAtre cr\xE9\xE9e",
  "A transcript is being processed": "Une transcription est en cours de traitement",
  "AI sentiment": "Analyse de sentiment IA",
  AND: jI,
  "AND_Query operator": "ET",
  Abandoned: eO,
  "Access denied!": "Acc\xE8s refus\xE9 !",
  Actions: tO,
  "Add a filter": "Ajouter un filtre",
  Agent: aO,
  "Agent Performance": "Agent performance",
  "Agent Summary - Metric": "R\xE9sum\xE9 de l\u2019agent \u2013 Mesures",
  "Agent availability": "Disponibilit\xE9 des agents",
  "Agent name": "Nom de l\u2019agent",
  "Agent summary": "R\xE9sum\xE9 de l\u2019agent",
  "Agent summary - table": "R\xE9sum\xE9 de l\u2019agent \u2013 Tableau",
  Agent_plural: nO,
  "Agents ({{selectedCount}} of {{totalCount}})": "Agents ({{selectedCount}} sur {{totalCount}})",
  "Agents filter": "Filtre par agents",
  "Agents filter is loaded": "Le filtre d\u2019agents est charg\xE9",
  "All agents": "Tous les agents",
  "All call types": "Tous les types d\u2019appels",
  "All callback offered": "Tous les rappels propos\xE9s",
  "All callback requested": "Tous les rappels demand\xE9s",
  "All campaigns": "Toutes les campagnes",
  "All chat queues": "Toutes les files de chat",
  "All chat types": "Tous les types de chat",
  "All conversation tags": "Toutes les balises de conversation",
  "All dispositions": "Toutes les conclusions",
  "All outcomes": "Tous les r\xE9sultats",
  "All queues": "Toutes les files",
  "All replies": "Toutes les r\xE9ponses",
  "All sentiments": "Tous les sentiments",
  "All survey responses": "Toutes les r\xE9ponses aux enqu\xEAtes",
  "All surveys": "Toutes les enqu\xEAtes",
  Alphabetical: rO,
  "An error occurred while creating the board, please try again!": "Une erreur est survenue en cr\xE9ation de l\u2019indicateur. Veuillez r\xE9essayer !",
  "An error occurred while deleting the board.": "Une erreur est survenue en suppression de l\u2019indicateur.",
  "An error occurred while deleting the scheduled board.": "Une erreur est survenue en suppression de l\u2019indicateur planifi\xE9.",
  "An error occurred while downloading the scheduled export.": "Une erreur est survenue en t\xE9l\xE9chargement de l\u2019exportation planifi\xE9e.",
  "An error occurred while exporting {{dataName}}.": "Une erreur est survenue en exportation de {{dataName}}.",
  "An error occurred while fetching call reports for conversation space {{conversationSpace}}.": "Une erreur est survenue en tentant de r\xE9cup\xE9rer les rapports d\u2019appels pour l\u2019espace de conversation\xA0: {{conversationSpace}}.",
  "An error occurred while fetching dashboard to save": "Une erreur est survenue en r\xE9cup\xE9ration du tableau de bord \xE0 enregistrer",
  "An error occurred while fetching filters": "Une erreur est survenue en r\xE9cup\xE9ration des filtres",
  "An error occurred while fetching queue caller": "Une erreur est survenue en r\xE9cup\xE9ration d\u2019appelants en file",
  "An error occurred while fetching queue caller details": "Une erreur est survenue en r\xE9cup\xE9ration des d\xE9tails d\u2019appelants en file",
  "An error occurred while fetching queue caller overall sentiments": "Une erreur est survenue en r\xE9cup\xE9ration des sentiments g\xE9n\xE9raux d\u2019appelants en file",
  "An error occurred while fetching queue caller topics sentiments": "Une erreur est survenue en r\xE9cup\xE9ration des sentiments sur les rubriques d\u2019appelants en file",
  "An error occurred while fetching scheduled dashboard users": "Une erreur est survenue en r\xE9cup\xE9ration des utilisateurs de tableau de bord planifi\xE9",
  "An error occurred while fetching scheduled dashboards": "Une erreur est survenue en r\xE9cup\xE9ration des tableaux de bord planifi\xE9s",
  "An error occurred while fetching the board": "Une erreur est survenue en r\xE9cup\xE9ration de l\u2019indicateur.",
  "An error occurred while fetching the transcript.": "Une erreur est survenue en r\xE9cup\xE9ration de la transcription.",
  "An error occurred while scheduling the board, please try again.": "Une erreur est survenue en planification du tableau de bord, veuillez r\xE9essayer.",
  "An error occurred while sharing the board.": "Une erreur est survenue en partage de l\u2019indicateur.",
  "An error occurred while updating board permissions.": "Une erreur est survenue en mise \xE0 jour des autorisations de l\u2019indicateur.",
  "An error occurred while updating the board status.": "Une erreur est survenue en mise \xE0 jour du statut de l\u2019indicateur.",
  "An error occurred while updating the board, please try again!": "Une erreur est survenue en mise \xE0 jour de l\u2019indicateur. Veuillez r\xE9essayer !",
  "An error occurred while updating the board.": "Une erreur est survenue en mise \xE0 jour de l\u2019indicateur.",
  "An error occurred while updating the scheduled dashboard, please try again.": "Une erreur est survenue en mise \xE0 jour du tableau de bord planifi\xE9, veuillez r\xE9essayer.",
  Analytics: iO,
  Answered: oO,
  "Answered elsewhere": "R\xE9pondu ailleurs",
  Apply: sO,
  "Are you sure you want to delete the scheduled {{dashboardName}} board?": "Voulez-vous vraiment supprimer l\u2019indicateur planifi\xE9 {{dashboardName}} ?",
  "Are you sure you want to delete {{dashboardName}}?": "Voulez-vous vraiment supprimer {{dashboardName}}\xA0?",
  "Ascending order": "Ordre croissant",
  "Auto attendant": "R\xE9pondeur auto",
  "Auto attendant node": "N\u0153ud r\xE9pondeur auto",
  "Availability and pause time by agent": "Disponibilit\xE9 et temps de pause par agent",
  "Availability ratio": "Taux de disponibilit\xE9",
  "Available in a higher tier": "Disponible dans un niveau sup\xE9rieur",
  "Average call duration": "Dur\xE9e moyenne d\u2019appel",
  "Average call sentiment for selected time range": "Sentiment moyen d\u2019appel pour la p\xE9riode s\xE9lectionn\xE9e",
  "Average talk time": "Temps de conversation moyen",
  "Average talk time_Summary average talk time": "Temps de conversation moyen",
  "Average time in queue": "Temps moyen dans la file",
  "Average wait time": "Temps d\u2019attente moyen",
  "Avg. call duration": "Dur\xE9e moyenne d\u2019appel",
  "Avg. call duration_Average Call Duration": "Dur\xE9e moyenne d\u2019appel",
  "Avg. talk duration": "Dur\xE9e moyenne de conversation",
  "Avg. talk duration_Average Talk Duration": "Dur\xE9e moyenne de conversation",
  "Avg. time in queue": "Temps moyen dans la file",
  "Avg. time in queue_Average time in queue": "Temps moyen dans la file",
  "Avg. wait time": "Tps d\u2019attente moy.",
  "Avg. wait time_Average Wait Time": "Temps d\u2019attente moyen",
  BETA: lO,
  Back: dO,
  "Bar chart icon with 5 bars": "Ic\xF4ne d\u2019histogramme avec 5 barres",
  Biweekly: uO,
  "Blindly transferred:": "Transf\xE9r\xE9s \xE0 l\u2019aveugle\xA0:",
  Board: cO,
  "Board Name": "Nom de l\u2019indicateur",
  "Board actions": "Actions sur l\u2019indicateur",
  "Board dates": "Dates de l\u2019indicateur",
  "Board has been created.": "L\u2019indicateur a \xE9t\xE9 cr\xE9\xE9.",
  "Board has been deleted.": "L\u2019indicateur a \xE9t\xE9 supprim\xE9.",
  "Board has been scheduled.": "L\u2019indicateur a \xE9t\xE9 planifi\xE9.",
  "Board has been shared.": "L\u2019indicateur a \xE9t\xE9 partag\xE9.",
  "Board link": "Lien vers l\u2019indicateur",
  "Board name": "Nom de l\u2019indicateur",
  "Board name is required": "Le nom de l\u2019indicateur est obligatoire",
  "Board permissions has been updated.": "Les autorisations de l\u2019indicateur ont \xE9t\xE9 mises \xE0 jour.",
  Boards: mO,
  "CSV file": "Fichier CSV",
  "Call data per call. Click on each call for a detailed view.": "Donn\xE9es d\u2019appel par appel. Cliquez sur chaque appel pour afficher les d\xE9tails.",
  "Call data per day from {{dateRange}}. Click on each day for a detailed view.": "Donn\xE9es d\u2019appel par jour de {{dateRange}}. Cliquez sur chaque jour pour afficher les d\xE9tails.",
  "Call data per hour on {{dateRange}}. Click on each hour for a detailed view.": "Donn\xE9es d\u2019appel par heure du {{dateRange}}. Cliquez sur chaque heure pour afficher les d\xE9tails.",
  "Call duration": "Dur\xE9e d\u2019appel",
  "Call duration: all": "Dur\xE9e d\u2019appel : tout",
  "Call duration_Call Duration": "Dur\xE9e de l\u2019appel",
  "Call queue": "File d\u2019appels",
  "Call report": "Rapport d\u2019appel",
  "Call reports": "Rapports d\u2019appels",
  "Call started": "Appel lanc\xE9",
  "Call type": "Type d\u2019appel",
  "Call type_plural": "Types d\u2019appel",
  "Call types ({{selectedCount}} of {{totalCount}})": "Types d\u2019appel ({{selectedCount}} sur {{totalCount}})",
  "Call types filter": "Filtre de types d\u2019appels",
  "Call types filter is loaded": "Le filtre de types d\u2019appels est charg\xE9",
  "Call volume": "Volume d\u2019appels",
  Callback: fO,
  "Callback dispatched": "Rappel effectu\xE9",
  "Callback not offered": "Rappel non propos\xE9",
  "Callback not requested": "Rappel non demand\xE9",
  "Callback offered": "Rappel propos\xE9",
  "Callback offered ({{selectedCount}} of {{totalCount}})": "Rappel propos\xE9 ({{selectedCount}} sur {{totalCount}})",
  "Callback offered filter": "Filtre des rappels propos\xE9s",
  "Callback offered_Callback Offered": "Rappels propos\xE9s",
  "Callback offered_plural": "Rappels propos\xE9s",
  "Callback requested": "Rappel demand\xE9",
  "Callback requested ({{selectedCount}} of {{totalCount}})": "Rappel demand\xE9 ({{selectedCount}} sur {{totalCount}})",
  "Callback requested filter": "Filtre des rappels demand\xE9s",
  "Callback requested filter is loaded": "Le filtre des rappels demand\xE9s est charg\xE9",
  "Callback requested_Callback Requested": "Rappels demand\xE9s",
  "Callback requested_plural": "Rappels demand\xE9s",
  "Callback requests": "Demandes de rappel",
  Caller: pO,
  "Caller info": "Informations sur l\u2019appelant",
  "Caller info node": "Noeud Informations sur l\u2019appelant",
  "Calls transferred": "Appels transf\xE9r\xE9s",
  Campaign: hO,
  "Campaign type": "Type de campagne",
  "Campaign type_plural": "Types de campagne",
  "Campaign types ({{selectedCount}} of {{totalCount}})": "Types de campagnes ({{selectedCount}} sur {{totalCount}})",
  "Campaign types filter": "Filtre de types de campagnes",
  "Campaign types filter is loaded": "Le filtre de types de campagnes est charg\xE9",
  Campaign_plural: gO,
  "Campaigns ({{selectedCount}} of {{totalCount}})": "Campagnes ({{selectedCount}} sur {{totalCount}})",
  "Campaigns filter": "Filtre de campagnes",
  "Campaigns filter is loaded": "Le filtre de campagnes est charg\xE9",
  Cancel: vO,
  "Cancel export": "Annuler l\u2019exportation",
  "Change to next tip": "Passer au conseil suivant",
  "Change to previous tip": "Passer au conseil pr\xE9c\xE9dent",
  "Chat queue": "File de chat",
  "Chat queue_plural": "File de chat",
  "Chat queues ({{selectedCount}} of {{totalCount}})": "Files de chat ({{selectedCount}} sur {{totalCount}})",
  "Chat queues filter": "Filtre de files de chat",
  "Chat queues filter is loaded": "Le filtre de files de chat est charg\xE9",
  "Chat type": "Type de chat",
  "Chat type_plural": "Type de chat",
  "Chat types ({{selectedCount}} of {{totalCount}})": "Types de chat ({{selectedCount}} sur {{totalCount}})",
  "Chat types filter": "Filtre de types de chat",
  "Chat types filter is loaded": "Le filtre de types de chat est charg\xE9",
  "Check back later for a completed transcript.": "Revenez plus tard pour une transcription termin\xE9e.",
  "Check back later for interaction details.": "Revenez plus tard pour les d\xE9tails de l\u2019interaction.",
  "Check back later for overview data": "Revenez plus tard pour des donn\xE9es g\xE9n\xE9rales",
  "Check back later for overview data.": "Revenez plus tard pour des donn\xE9es g\xE9n\xE9rales.",
  "Choose a secondary filter": "Choisir un filtre secondaire",
  "Click to filter calls for negative sentiment": "Cliquez pour filtrer les appels de sentiment n\xE9gatif",
  "Click to filter calls for neutral sentiment": "Cliquez pour filtrer les appels de sentiment neutre",
  "Click to filter calls for positive sentiment": "Cliquez pour filtrer les appels de sentiment positif",
  "Click to refine chart with evicted calls": "Cliquez pour affiner le graphique des appels \xE9vinc\xE9s",
  "Click to refine chart with handled calls": "Cliquez pour affiner le graphique avec les appels trait\xE9s",
  "Click to refine chart with pending calls": "Cliquez pour affiner le graphique avec les appels en cours",
  "Click to refine data": "Cliquez pour affiner les donn\xE9es",
  Close: bO,
  "Close banner": "Fermer la banni\xE8re",
  "Close call reports modal": "Fermer le dialogue modal de rapports d\u2019appel",
  "Close dashboard deletion modal": "Fermer le dialogue modal de suppression de tableau de bord",
  "Close delete schedule modal": "Fermer le dialogue modal de suppression d\u2019horaire",
  "Close drawer": "Fermer le tiroir",
  "Close error modal": "Fermer le dialogue modal d\u2019erreur",
  "Close export modal": "Fermer le dialogue modal d\u2019exportation",
  "Close rename modal": "Fermer le dialogue modal de changement de nom",
  "Close save modal": "Fermer le dialogue modal d\u2019enregistrement",
  "Close schedule modal": "Fermer le dialogue modal d\u2019horaire",
  "Close share modal": "Fermer le dialogue modal de partage",
  "Close timeout modal": "Fermer le dialogue modal de d\xE9lai d\u2019attente",
  "Closed lost": "Ferm\xE9 perdu",
  "Closed won": "Ferm\xE9 gagn\xE9",
  "Collapse the list": "R\xE9duire la liste",
  "Conference bridge": "Pont de conf\xE9rence",
  Connected: yO,
  "Contact support": "Contacter l\u2019assistance",
  "Contact support_Link to support page": "Contacter l\u2019assistance",
  "Conversation tag": "Balise de conversation",
  "Conversation tag_plural": "Balises de la conversation",
  "Conversation tags ({{selectedCount}} of {{totalCount}})": "Balises de conversation ({{selectedCount}} sur {{totalCount}})",
  "Conversation tags filter": "Filtre de balises de conversation",
  "Conversation tags filter is loaded": "Le filtre de balises de conversation est charg\xE9",
  "Copy link": "Copier le lien",
  "Currently loading": "Chargement en cours",
  Customer: CO,
  "Customer pressed:": "Le client a choisi :",
  "DTMF exit": "Sortie de la file",
  Daily: SO,
  "Daily pause avg per queue": "Moyenne quotid. des pauses par file",
  Date: "Date",
  "Date created": "Date de cr\xE9ation",
  "Date range": "Plage de dates",
  "Date range filter": "Filtre de plage de dates",
  Delete: wO,
  "Delete board": "Supprimer l\u2019indicateur",
  "Delete scheduled board": "Supprimer l\u2019indicateur planifi\xE9",
  "Delete the scheduled board": "Supprimer l\u2019indicateur planifi\xE9",
  "Deleted agent": "Agent supprim\xE9",
  "Deleted agents": "Agents supprim\xE9s",
  "Deleted device": "Appareil supprim\xE9",
  "Deleted device_plural": "Appareils supprim\xE9s",
  "Deleted queue": "File supprim\xE9e",
  "Deleted user": "Utilisateur supprim\xE9",
  "Deleting scheduled {{dashboardName}} board": "Suppression de l\u2019indicateur planifi\xE9 {{dashboardName}}",
  "Deleting {{dashboardName}}": "Suppression de {{dashboardName}}",
  "Descending order": "Ordre d\xE9croissant",
  "Detail view": "Affichage d\xE9taill\xE9",
  "Detail view {{dateRange}}": "Affichage d\xE9taill\xE9 du {{dateRange}}",
  "Detail view {{dateRange}}_Summary overview for the selected date range": "Affichage d\xE9taill\xE9 du {{dateRange}}",
  Details: AO,
  "Dial plan": "Plan de num\xE9rotation",
  "Did you know? Approximately 18.7 billion texts are sent worldwide every day! You can text and message customers using our Multi-Channel feature included in all GoTo Contact plans!": "Le saviez-vous\xA0? Environ 18,7 milliards de SMS sont envoy\xE9s chaque jour dans le monde\xA0! Vous pouvez envoyer des SMS et des messages \xE0 vos clients avec la fonction multicanal incluse dans tous les forfaits GoTo Contact\xA0!",
  "Did you know? If the caller does not have a valid caller ID, they will not be offered the callback option, regardless of the wait time threshold being exceeded.": "Le saviez-vous\xA0? Si l\u2019appelant n\u2019a pas de pr\xE9sentation du num\xE9ro valable, on ne lui proposera pas l\u2019option de rappel, que le seuil d\u2019attente ait \xE9t\xE9 d\xE9pass\xE9 ou non.",
  "Did you know? You can change your chart view from the gear icon in your report page.": "Le saviez-vous\xA0? Vous pouvez modifier votre vue graphique par l\u2019ic\xF4ne d\u2019engrenage de votre page de rapports.",
  Direct: TO,
  "Direct inbound": "Entrant direct",
  Disconnected: _O,
  Disposition: EO,
  "Disposition ({{selectedCount}} of {{totalCount}})": "Conclusion ({{selectedCount}} sur {{totalCount}})",
  "Disposition filter": "Filtre de conclusions",
  "Disposition filter is loaded": "Un filtre de conclusions est charg\xE9",
  "Disposition:": "Conclusion :",
  "Draggable item {{ itemLabel }}. Press space bar to start a drag. When dragging you can use\n                                the arrow keys to move the item around and escape to cancel. Ensure your screen reader is in\n                                focus mode or forms mode": `\xC9l\xE9ment d\xE9pla\xE7able {{ itemLabel }}. Appuyez sur la barre d\u2019espace pour d\xE9marrer un d\xE9placement. Pendant le d\xE9placement vous pouvez utiliser
                          les touches fl\xE9ch\xE9es pour d\xE9placer l\u2019\xE9l\xE9ment et Echap pour annuler. V\xE9rifiez que votre lecteur d\u2019\xE9cran est en
                          mode de balayage ou de formulaire`,
  Duration: DO,
  EXCEPT: kO,
  "EXCEPT_Query operator": "SAUF",
  "Each section will be exported as separate files.": "Chaque section sera export\xE9e sous forme de fichiers s\xE9par\xE9s.",
  "Edit scheduled board": "Modifier l\u2019indicateur planifi\xE9",
  "Edit the scheduled board": "Modifier l\u2019indicateur planifi\xE9",
  Email: NO,
  "Email_Dropdown selectable option": "E-mail",
  "Entered another queue": "Entr\xE9 dans une autre file",
  "Entered dial plan": "Entr\xE9e plan de num.",
  Error: "Erreur",
  "Error while fetching agent availability data.": "Erreur en r\xE9cup\xE9ration des donn\xE9es de disponibilit\xE9 des agents.",
  "Error while fetching agent summary data.": "Erreur en r\xE9cup\xE9ration des donn\xE9es r\xE9capitulatives des agents.",
  "Error while fetching call volume data.": "Erreur en r\xE9cup\xE9ration des donn\xE9es de volume d\u2019appels.",
  "Error while fetching total talk time data.": "Erreur en r\xE9cup\xE9ration des donn\xE9es de temps total de conversation.",
  "Error while fetching transfers data.": "Erreur en r\xE9cup\xE9ration des donn\xE9es des transferts.",
  Evicted: IO,
  "Evicted (legacy)": "\xC9vinc\xE9 (ancien)",
  "Evicted customer": "\xC9vinc\xE9 par le client",
  "Evicted system": "\xC9vinc\xE9 par le syst\xE8me",
  "Evicted user": "\xC9vinc\xE9 par l\u2019utilisateur",
  "Expand the list": "D\xE9velopper la liste",
  Export: OO,
  "Export conversation detail": "Exporter le d\xE9tail de la conversation",
  "Export failed.": "\xC9chec de l\u2019exportation.",
  "Export for {{filterDateRange}}": "Exporter pour {{filterDateRange}}",
  "Export is currently unavailable": "L\u2019exportation est actuellement indisponible",
  "Export is unavailable for this board.": "Exportation indisponible pour cet indicateur.",
  "Ext. Type": "Type de poste",
  "External number": "Num\xE9ro ext\xE9rieur",
  Facebook: LO,
  Failed: xO,
  "Failed_Failed to reach the voicemail": "\xC9chec",
  Filter: RO,
  "Filter will not be applied as nothing is selected.": "Le filtre ne sera pas appliqu\xE9 car rien n\u2019est s\xE9lectionn\xE9.",
  "Filters loading, please wait.": "Chargement des filtres, veuillez patienter.",
  "Filters saved": "Filtres enregistr\xE9s",
  "For more information, please visit our <2>support site <1></1></2>": "Pour en savoir plus, consultez notre <2>site d\u2019assistance <1></1></2>",
  "For more information, please visit our <2>support site <1></1></2>_Link to support site for timeout dialog": "Pour en savoir plus, consultez notre <2>site d\u2019assistance <1></1></2>",
  "Forward 10 seconds": "Avancer de 10 secondes",
  From: $O,
  "Generated report file type": "Type de fichier de rapport produit",
  "GoTo Analytics": "Analyse GoTo",
  "Great news! We now offer dedicated callback reporting on the Queue Caller board.\xA0<1>Visit our support page to learn more about callback, timed-out and eviction reporting.</1>": "Bonne nouvelle ! Nous proposons maintenant des rapports de rappel d\xE9di\xE9s sur le tableau de bord d\u2019appelants en file.\xA0<1>Consultez notre page d\u2019assistance pour en savoir plus sur les rapports de rappel, de d\xE9passement de d\xE9lai et d\u2019\xE9viction.</1>",
  "Group by": "Regrouper par",
  "Group by filter": "Regrouper par filtre",
  Handled: MO,
  "Handled contacts": "Appelants trait\xE9s",
  "Handled contacts_Summary handled contacts": "Contacts trait\xE9s",
  Hangup: PO,
  "Hangup by:": "Raccrochage par :",
  "Hide empty rows": "Masquer les lignes vides",
  Highest: FO,
  "Highest avg": "Moyenne max.",
  "Highest avg_Highest average talk time": "Moyenne max.",
  "Highest value": "Plus grande valeur",
  "Highest_Highest total talk time": "Maximum",
  Home: qO,
  "Home_Button that redirect to the home page": "Domicile",
  Hours: zO,
  "Hover for details": "Survoler pour afficher les d\xE9tails",
  "Including all call types": "Incluant tous les types d\u2019appels",
  "Including all campaign types": "Incluant tous les types de campagnes",
  "Including all campaigns": "Incluant toutes les campagnes",
  "Including all outcomes": "Incluant tous les r\xE9sultats",
  "Including all sentiments": "Incluant tous les sentiments",
  "Including all topics": "Incluant toutes les rubriques",
  "Including deleted agents and users": "Incluant les agents et les utilisateurs supprim\xE9s",
  "Including deleted queues": "Incluant les files supprim\xE9es",
  "Including deleted sources": "Y compris les sources supprim\xE9es",
  Instagram: UO,
  "Insufficient privileges": "Privil\xE8ges insuffisants",
  "Intents:": "Sujets :",
  "Interaction details": "D\xE9tails de l\u2019interaction",
  Interested: BO,
  "Internal number": "Num\xE9ro int\xE9rieur",
  "Invalid option": "Option non valable",
  "Invalid option_Auto attendant option": "Option non valable",
  "Invalid.": "Non valable.",
  "Invalid._The minimum or maximum duration is invalid": "Non valable.",
  "Invite users / emails within your organization": "Inviter les utilisateurs / adresses e-mail de votre organisation",
  "Issue opened": "Question ouverte",
  "Issue resolved": "Question r\xE9solue",
  "It looks like you don\u2019t have permission \nto access this board.": `Il semble que vous n\u2019avez pas l\u2019autorisation 
d\u2019acc\xE9der \xE0 cet indicateur.`,
  "Item {{itemLabel}}": "\xC9l\xE9ment {{itemLabel}}",
  "Item {{itemLabel}} has moved from position {{startPosition}} to {{endPosition}}": "L\u2019\xE9l\xE9ment {{itemLabel}} a \xE9t\xE9 d\xE9plac\xE9 de la position {{startPosition}} \xE0 la position {{endPosition}}",
  "Item {{itemLabel}} lifted from position {{position}}": "L\u2019\xE9l\xE9ment {{itemLabel}} a \xE9t\xE9 remont\xE9 depuis la position {{position}}",
  "Item {{itemLabel}} moved from position {{startPosition}} to position {{endPosition}}": "L\u2019\xE9l\xE9ment {{itemLabel}} est pass\xE9 de la position {{startPosition}} \xE0 la position {{endPosition}}",
  "Joined empty": "Arriv\xE9e vide",
  "Last 14 days": "14\xA0derniers jours",
  "Last 30 days": "30\xA0derniers jours",
  "Last 7 days": "7\xA0derniers jours",
  "Last agent in the call:": "Dernier agent de l\u2019appel :",
  Least: WO,
  "Least_Least handled contacts": "Minimum",
  "Leaving reason": "Motif de sortie",
  "Leaving reason:": "Motif de sortie :",
  "Left empty": "Laiss\xE9e vide",
  "License: {{currentLicense}}": "Licence : {{currentLicense}}",
  Line: VO,
  "Link copied!": "Lien copi\xE9 !",
  "List of {{item}}": "Liste de {{item}}",
  Listening: HO,
  "Loading SMS sent filter...": "Chargement du filtre de SMS envoy\xE9s...",
  "Loading agents filter...": "Chargement du filtre d\u2019agents...",
  "Loading call types filter...": "Chargement du filtre de types d\u2019appels...",
  "Loading callback offered filter...": "Chargement du filtre des rappels propos\xE9s...",
  "Loading callback requested filter...": "Chargement du filtre des rappels demand\xE9s...",
  "Loading campaign types filter...": "Chargement du filtre de types de campagnes...",
  "Loading campaigns filter...": "Chargement du filtre de campagnes...",
  "Loading chat queues filter...": "Chargement du filtre de files de chat...",
  "Loading chat types filter...": "Chargement du filtre de types de chat...",
  "Loading conversation tags filter...": "Chargement du filtre de balises de conversation...",
  "Loading disposition filter...": "Chargement du filtre de conclusions...",
  "Loading outcomes filter...": "Chargement du filtre de r\xE9sultats...",
  "Loading queues filter...": "Chargement du filtre d\u2019appels...",
  "Loading sentiments filter...": "Chargement du filtre de sentiments...",
  "Loading survey responses filter...": "Chargement du filtre de r\xE9ponses \xE0 l\u2019enqu\xEAte...",
  "Loading surveys filter...": "Chargement du filtre d\u2019enqu\xEAtes...",
  "Loading topics filter...": "Chargement du filtre de rubriques...",
  "Loading...": "Chargement...",
  "Longest pause duration": "Pause la plus longue",
  Lowest: QO,
  "Lowest avg": "Moyenne min.",
  "Lowest avg_Lowest average talk time": "Moyenne min.",
  "Lowest value": "Plus faible valeur",
  "Lowest_Least total talk time": "Minimum",
  "Make a selection to filter": "Faites un choix pour filtrer",
  Manage: GO,
  "Manage language": "G\xE9rer la langue",
  "Max boards per section": "Nb maxi d\u2019indicateurs par section",
  Maximum: YO,
  Minimum: ZO,
  Minutes: KO,
  Miscellaneous: JO,
  "Miscellaneous - Transferred": "Divers - Transf\xE9r\xE9",
  "Miscellaneous - Voicemail": "Divers - Bo\xEEte vocale",
  "Miscellaneous - Wrong number": "Divers - Num\xE9ro erron\xE9",
  "Missed contacts": "Appelants manqu\xE9s",
  "Month to date": "Ce mois-ci",
  Monthly: XO,
  Most: jO,
  "Most mentioned topics": "Rubriques les plus mentionn\xE9es",
  "Most_Most handled contacts": "Maximum",
  "Mostly negative": "Essentiellement n\xE9gatif",
  "Mostly positive": "Essentiellement positif",
  "Movement cancelled. Item {{itemLabel}} has returned to its starting position {{startPosition}} of {{listLength}}": "D\xE9placement annul\xE9. L\u2019\xE9l\xE9ment {{itemLabel}} est revenu \xE0 sa position de d\xE9part {{startPosition}} sur {{listLength}}",
  "Must not exceed 255 characters": "Ne doit pas d\xE9passer 255 caract\xE8res",
  NOTE: eL,
  Name: tL,
  Negative: aL,
  "Negative Answer": "R\xE9ponse n\xE9gative",
  "Negative_Negative sentiment analysis result": "N\xE9gatif",
  Neutral: nL,
  "Neutral_Neutral sentiment analysis result": "Neutre",
  Never: rL,
  "New schedule": "Nouvelle planification",
  "Next page": "Page suivante",
  No: iL,
  "No Answer": "Pas de r\xE9ponse",
  "No answer": "Pas de r\xE9ponse",
  "No callback offered": "Aucun rappel propos\xE9",
  "No callback requested": "Aucun rappel demand\xE9",
  "No data": "Pas de donn\xE9es",
  "No data available!": "Pas de donn\xE9es disponibles\xA0!",
  "No data to display": "Pas de donn\xE9es \xE0 afficher",
  "No data yet": "Pas encore de donn\xE9es",
  "No notes available": "Aucune note disponible",
  "No overview yet": "Pas encore de vue g\xE9n\xE9rale",
  "No response": "Pas de r\xE9ponse",
  "No transcript data": "Pas de donn\xE9es de transcription",
  "No transcript yet": "Pas encore de transcription",
  "No users to display": "Pas d\u2019utilisateurs \xE0 afficher",
  "No_Callback Detail Column": "Non",
  "No_Queue callback was not offered": "Non",
  "Not applicable (-)": "Non applicable (-)",
  Notes: oL,
  "Notes taken during this call will appear here.": "Les notes prises pendant cet appel s\u2019afficheront ici.",
  "Notes_Notes added to a call by an agent": "Notes",
  "Nothing is selected.": "Aucune s\xE9lection.",
  "Notify by": "Avertir pour",
  OR: sL,
  "OR_Query operator": "OU",
  "On Hold": "En attente",
  "Only numbers are allowed": "Seuls les chiffres sont autoris\xE9s",
  Open: lL,
  "Open boards menu options": "Ouvrir les options de menu d\u2019indicateurs",
  "Open {{dashboard}} board menu options": "Ouvrir les options de menu de l\u2019indicateur {{dashboard}}",
  "Opt {{option}}": "Opt {{option}}",
  "Opt {{option}}_Auto attendant option": "Opt {{option}}",
  "Option {{option}}": "Option {{option}}",
  "Option {{option}}_Customer phone option pressed": "Option {{option}}",
  Outbound: dL,
  Outcome: uL,
  Outcome_plural: cL,
  "Outcomes ({{selectedCount}} of {{totalCount}})": "R\xE9sultats ({{selectedCount}} sur {{totalCount}})",
  "Outcomes filter": "Filtre de r\xE9sultats",
  "Outcomes filter format has changed": "Le format du filtre de r\xE9sultats a chang\xE9",
  "Outcomes filter is loaded": "Le filtre de r\xE9sultats est charg\xE9",
  "Over time - charts": "Graphiques au fil du temps",
  "Overall sentiment": "Sentiment g\xE9n\xE9ral",
  Overview: mL,
  "Overview {{dateRange}}": "Vue d\u2019ensemble du {{dateRange}}",
  "Overview {{dateRange}}_Summary overview for the selected date range": "Vue d\u2019ensemble du {{dateRange}}",
  "Overview:": "Vue d\u2019ensemble :",
  "Page {{index}}/{{count}}": "Page {{index}} sur {{count}}",
  "Page {{index}}/{{count}}_plural": "Page {{index}} sur {{count}}",
  Parked: fL,
  "Participants names": "Noms des participants",
  "Participants phone numbers": "Num\xE9ros de t\xE9l\xE9phone des participants",
  "Participants:": "Participants :",
  "Pause the audio": "Pause audio",
  "Pause the scheduled board": "Mettre en pause l\u2019indicateur planifi\xE9",
  Pending: pL,
  "Percentage breakdown from calls included in your current filter.": "R\xE9partition en pourcentage des appels inclus dans votre filtre actuel.",
  "Phone number": "Num\xE9ro de t\xE9l\xE9phone",
  "Play sound clip": "Lire l\u2019extrait sonore",
  "Play the audio": "Lire audio",
  "Please select which data columns and tables you would like to export. CSV files will not contain graphics or images.": "S\xE9lectionnez les colonnes et les tables de donn\xE9es que vous voulez exporter. Les fichiers CSV ne doivent pas contenir de graphiques ni d\u2019images.",
  Positive: hL,
  "Positive Answer": "R\xE9ponse positive",
  "Positive_Positive sentiment analysis result": "Positif",
  Pressed: gL,
  "Previous month": "Mois pr\xE9c\xE9dent",
  "Previous page": "Page pr\xE9c\xE9dente",
  "Previous week": "Semaine pr\xE9c\xE9dente",
  Quarterly: vL,
  Queue: bL,
  "Queue Caller": "Queue caller",
  "Queue Caller Summary - grouped by date": "R\xE9capitulatif d\u2019appelants en file - group\xE9s par date",
  "Queue Caller Summary - grouped by queue": "R\xE9capitulatif d\u2019appelants en file - group\xE9s par file",
  "Queue callback offered:": "Rappel dans la file propos\xE9\xA0:",
  "Queue caller - Details": "Appelant dans la file - D\xE9tails",
  "Queue caller - Summary": "Appelant en file - R\xE9sum\xE9",
  "Queue caller details table": "Tableau de d\xE9tails d\u2019appelants en file",
  "Queue caller summary table": "Tableau de r\xE9sum\xE9 des appelants en file",
  "Queue calls": "Appels de la file",
  "Queue configured wrap up:": "Temps de conclusion configur\xE9 :",
  "Queue full": "File pleine",
  "Queue name:": "Nom de la file :",
  "Queue node": "Noeud de la file",
  "Queue transfers": "Transferts des files d\u2019attente",
  "Queue type:": "Type de file :",
  Queue_plural: yL,
  "Queues ({{selectedCount}} of {{totalCount}})": "Files ({{selectedCount}} sur {{totalCount}})",
  "Queues filter": "Filtre de files",
  "Queues filter is loaded": "Le filtre de files est charg\xE9",
  "Recently updated": "Date de mise \xE0 jour",
  "Recording not available": "Enregistrement non disponible",
  "Refine data": "Raffiner les donn\xE9es",
  Relocated: CL,
  "Remove filter": "Retirer le filtre",
  "Removed by supervisor": "Retir\xE9 par le superviseur",
  Rename: SL,
  Repeats: wL,
  "Replace callback": "Remplac\xE9 par un rappel",
  "Circle size represents volume of topics most commonly detected by AI. Bolder colors indicate a more prevalent sentiment when the topic is mentioned.": "Repr\xE9sentation des rubriques le plus souvent d\xE9tect\xE9es par l\u2019IA. Les couleurs plus vives indiquent un sentiment plus pr\xE9valent quand la rubrique est mentionn\xE9e.",
  "Request Timeout": "Requ\xEAte expir\xE9e",
  Reset: AL,
  "Reset filters": "R\xE9initialiser les filtres",
  Resolved: TL,
  "Resolved by admin": "R\xE9solue par un administrateur",
  "Resolved conversation": "Conversation marqu\xE9e comme r\xE9solue",
  "Resume the scheduled board": "Red\xE9marrer l\u2019indicateur planifi\xE9",
  "Rewind 10 seconds": "Reculer de 10 secondes",
  "Ring group": "Groupe d\u2019appels",
  Ringing: _L,
  "Rows per page": "Lignes par page",
  SMS: EL,
  "SMS auto-reply": "R\xE9ponse automatique par SMS",
  "SMS sent": "SMS envoy\xE9(s)",
  "SMS sent ({{selectedCount}} of {{totalCount}})": "SMS envoy\xE9s ({{selectedCount}} sur {{totalCount}})",
  "SMS sent filter": "Filtre de SMS envoy\xE9s",
  "SMS sent filter is loaded": "La filtre de SMS envoy\xE9s est charg\xE9",
  Sales: DL,
  "Sales - Callback": "Ventes - Rappel",
  "Sales - Closed lost": "Ventes - Ferm\xE9 perdu",
  "Sales - Closed won": "Ventes - Ferm\xE9 gagn\xE9",
  "Sales - Interested": "Ventes - Int\xE9ress\xE9",
  Save: kL,
  "Save As": "Enregistrer sous",
  "Save Filter": "Enregistrer le filtre",
  "Save as new board": "Enregistrer comme nouvel indicateur",
  "Save as...": "Enregistrer sous...",
  Schedule: NL,
  "Schedule board": "Planifier l\u2019indicateur",
  "Schedule manager": "Planificateur",
  "Schedule node": "Noeud Horaire",
  "Schedule selected:": "Horaire s\xE9lectionn\xE9 :",
  "Scheduled board has been deleted.": "L\u2019indicateur planifi\xE9 a \xE9t\xE9 supprim\xE9.",
  "Scheduled board has been paused.": "L\u2019indicateur planifi\xE9 a \xE9t\xE9 mis en pause.",
  "Scheduled board has been resumed.": "L\u2019indicateur planifi\xE9 a \xE9t\xE9 red\xE9marr\xE9.",
  "Scheduled board has been updated.": "L\u2019indicateur planifi\xE9 a \xE9t\xE9 mis \xE0 jour.",
  "Scheduled boards": "Rapports planifi\xE9s",
  "Scheduled date": "Date planifi\xE9e",
  "Scheduled date & time": "Date et heure planifi\xE9es",
  "Scheduled owner": "Propri\xE9taire planifi\xE9",
  "Scheduled time": "Heure planifi\xE9e",
  "Scheduling dashboard": "Planification de tableau de bord en cours",
  Search: IL,
  "Search users": "Chercher des utilisateurs",
  Seconds: OL,
  "Sections visibility": "Visibilit\xE9 des sections",
  "Select all": "S\xE9lectionner tout",
  "Select entries below to see the details": "S\xE9lectionnez des enregistrements ci-dessous pour afficher leurs d\xE9tails",
  "Select file type": "S\xE9lectionner le type de fichier",
  "Select team members": "S\xE9lectionner les membres de l\u2019\xE9quipe",
  "Selected board does not support that type.": "L\u2019indicateur s\xE9lectionn\xE9 ne prend pas en charge ce type.",
  Sentiment: LL,
  "Sentiment analysis": "Analyse de sentiment",
  "Sentiment detected for this call": "Sentiment d\xE9tect\xE9 pour cet appel",
  Sentiment_plural: xL,
  "Sentiments ({{selectedCount}} of {{totalCount}})": "Sentiments ({{selectedCount}} sur {{totalCount}})",
  "Sentiments filter": "Filtre de sentiments",
  "Sentiments filter is loaded": "Le filtre de sentiments est charg\xE9",
  Service: RL,
  "Service - Issue opened": "Service - Question ouverte",
  "Service - Issue resolved": "Service - Question r\xE9solue",
  "Service - No answer": "Service - Pas de r\xE9ponse",
  "Service - Waiting on customer": "Service - En attente du client",
  "Service - Waiting on internal": "Service - En attente interne",
  "Set the range for call duration.": "D\xE9finir la plage de dur\xE9e d\u2019appel.",
  "Set the range for waiting time. By default, all min/max are selected.": "D\xE9finir la plage de temps d\u2019attente. Par d\xE9faut tous les mini/maxi sont s\xE9lectionn\xE9s.",
  Settings: $L,
  "Settings_Button to open the settings menu": "Param\xE8tres",
  Share: ML,
  "Share - {{dashboardName}}": "Partager - {{dashboardName}}",
  "Shared with": "Partag\xE9 avec",
  "Shared with me": "Partag\xE9s avec moi",
  "Shared with:": "Partag\xE9 avec :",
  "Sharing {{dashboardName}}": "Partage de {{dashboardName}}",
  "Show all": "Afficher tout",
  "Show more boards": "Afficher d\u2019autres indicateurs",
  "Show selected only": "Afficher la s\xE9lection seulement",
  "Sign out": "D\xE9connexion",
  "Slightly negative": "L\xE9g\xE8rement n\xE9gatif",
  "Slightly positive": "L\xE9g\xE8rement positif",
  Sorry: PL,
  "Sort by": "Trier par",
  "Sort {{columnName}}": "Tier par {{columnName}}",
  Spam: FL,
  Status: qL,
  "Status:": "Statut\xA0:",
  Success: zL,
  "Success_Success to reach the voicemail": "R\xE9ussite",
  Summary: UL,
  "Summary_Back to summary button": "R\xE9capitulatif",
  Survey: BL,
  "Survey response": "R\xE9ponse \xE0 l\u2019enqu\xEAte",
  "Survey response_plural": "R\xE9ponses \xE0 l\u2019enqu\xEAte",
  "Survey responses ({{selectedCount}} of {{totalCount}})": "R\xE9ponses \xE0 l\u2019enqu\xEAte ({{selectedCount}} sur {{totalCount}})",
  "Survey responses filter": "Filtre de r\xE9ponses \xE0 l\u2019enqu\xEAte",
  "Survey responses filter is loaded": "Le filtre de r\xE9ponses \xE0 l\u2019enqu\xEAte est charg\xE9",
  Survey_plural: WL,
  "Surveys ({{selectedCount}} of {{totalCount}})": "Enqu\xEAtes ({{selectedCount}} sur {{totalCount}})",
  "Surveys filter": "Filtre d\u2019enqu\xEAtes",
  "Surveys filter is loaded": "Le filtre d\u2019enqu\xEAtes est charg\xE9",
  Tags: VL,
  "Tags:": "\xC9tiquettes :",
  "Talk duration": "Dur\xE9e de conversation",
  "Talk duration_Talk Duration": "Dur\xE9e de conversation",
  "The character '{{character}}' is not supported": "Le caract\xE8re '{{character}}' n\u2019est pas autoris\xE9",
  "The characters {{characters}} aren't supported": "Les caract\xE8res '{{characters}}' ne sont pas autoris\xE9s",
  "The date has been updated from the refine.": "Les donn\xE9es ont \xE9t\xE9 raffin\xE9es et mises \xE0 jour.",
  "The deleted user will still be able to access the board, but will not receive any notifications.": "L\u2019utilisateur supprim\xE9 pourra toujours acc\xE9der \xE0 l\u2019indicateur, mais ne recevra aucune notification.",
  "The page you are looking for does not exist!": "La page que vous recherchez n\u2019existe pas !",
  "The recording did not contain sufficient data <1></1>for a transcript to be created.": "L\u2019enregistrement ne contenait pas assez de donn\xE9es <1></1>pour la cr\xE9ation d\u2019une transcription.",
  "The requested dataset is too large to be displayed.": "Le jeu de donn\xE9es demand\xE9 est trop gros pour \xEAtre affich\xE9.",
  "The saved board will appear in the Board section on your left sidebar": "L\u2019indicateur enregistr\xE9 s\u2019affichera dans la section Indicateurs de votre barre lat\xE9rale gauche",
  "There are new changes available, the page will be updated shortly.": "De nouvelles modifications sont disponibles, la page va bient\xF4t \xEAtre mise \xE0 jour.",
  "There is no data available for this call.": "Il n\u2019y a pas de donn\xE9es disponibles pour cet appel.",
  "There were no notes taken for this call": "Aucune note prise pour cet appel",
  Time: HL,
  "Time in queue": "Temps dans la file",
  "Time in queue: all": "Temps dans la file : tout",
  "Timed out": "D\xE9lai d\xE9pass\xE9",
  "Timed out (legacy)": "D\xE9lai d\xE9pass\xE9 (ancien)",
  Timeout: QL,
  Timestamp: GL,
  Today: YL,
  Tools: ZL,
  Topics: KL,
  "Topics detected for this call": "Rubriques d\xE9tect\xE9es pour cet appel",
  "Topics filter": "Filtre de rubriques",
  "Topics filter is loaded": "Le filtre de rubriques est charg\xE9",
  Topics_plural: JL,
  Total: XL,
  "Total availability": "Disponibilit\xE9 totale",
  "Total call duration over time": "Dur\xE9e totale d\u2019appel au fil du temps",
  "Total call volume trends": "Tendances du volume total d\u2019appels",
  "Total calls": "Total des appels",
  "Total calls by outcome": "Total des appels par r\xE9sultat",
  "Total calls over time": "Total des appels au fil du temps",
  "Total pause": "Total des pauses",
  "Total talk time": "Temps de conversation total",
  "Total talk time trends": "Tendances du temps de conversation total",
  "Total talk time_Summary total talk time": "Temps de conversation total",
  Transcript: jL,
  "Transcription will be enabled in the coming weeks": "La transcription sera activ\xE9e dans les semaines \xE0 venir",
  "Transfer completed": "Transfert termin\xE9",
  "Transfer ratio": "Taux de transfert",
  Transferred: ex,
  Transferring: tx,
  "Transferring - Attended": "Transfert - accept\xE9",
  "Transferring - Drop off": "Transfert - abandon",
  "Try again": "R\xE9essayer",
  "Type a number": "Saisir un num\xE9ro",
  "Type a user name": "Saisir un nom d\u2019utilisateur",
  "Type user or email": "Saisissez le nom d\u2019utilisateur ou l\u2019adresse e-mail",
  "Unassigned devices": "Appareils non assign\xE9s",
  Undetermined: ax,
  "Undetermined_No sentiment analysis result": "Ind\xE9fini",
  Undo: nx,
  "Undo_Undo an action (date filter refine)": "Annuler",
  Ungrouped: rx,
  Units: ix,
  Unknown: ox,
  Update: sx,
  "Updating scheduled board": "Mise \xE0 jour de l\u2019indicateur planifi\xE9",
  "Updating scheduled board status": "Mise \xE0 jour du statut de l\u2019indicateur planifi\xE9",
  "Updating {{dashboardName}}": "Mise \xE0 jour de {{dashboardName}}",
  "Updating {{dashboardName}} permissions": "Mise \xE0 jour des autorisations de {{dashboardName}}",
  "Upgrade to Complete to see the details": "Passez au forfait Complete pour voir les d\xE9tails",
  User: lx,
  "Version: {{version}}": "Version\xA0: {{version}}",
  "View all participants": "Afficher tous les participants",
  "View all tags": "Afficher toutes les \xE9tiquettes",
  "View settings": "Afficher les param\xE8tres",
  Voicemail: dx,
  "Voicemail box": "Bo\xEEte vocale",
  "Voicemail reached": "Messagerie",
  "Wait Time": "Temps d\u2019attente",
  "Waiting on customer": "En attente du client",
  "Waiting on internal": "En attente interne",
  "Waiting time": "Temps d\u2019attente",
  "We are working to pull the data you requested.": "Nous travaillons \xE0 l\u2019extraction des donn\xE9es que vous avez demand\xE9es.",
  "We detect sentiment using AI. Click a segment to refine the data.": "Nous d\xE9tectons le sentiment par IA. Cliquez sur un segment pour affiner les donn\xE9es.",
  Webchat: ux,
  "Week to date": "Cette semaine",
  Weekly: cx,
  Whispering: mx,
  "Wrap up": "Conclure",
  "Wrapped up by {{name}}": "Conclu par {{name}}",
  "Wrong number": "Num\xE9ro erron\xE9",
  Yearly: fx,
  Yes: px,
  "Yes_Callback Detail Column": "Oui",
  "Yes_Queue callback was offered": "Oui",
  Yesterday: hx,
  "You can click on a day to select a custom range.": "Vous pouvez cliquer sur un jour pour s\xE9lectionner une plage personnalis\xE9e.",
  "You can go back and reduce your selection (smaller date range, fewer queues, fewer agents, etc ) or you can export this selection instead.": "Vous pouvez revenir en arri\xE8re et r\xE9duire votre s\xE9lection (plage de dates r\xE9duite, moins de files d\u2019attente, moins d\u2019agents, etc.) ou bien exporter cette s\xE9lection.",
  "You do not have any custom boards.": "Vous n\u2019avez pas d\u2019indicateurs personnalis\xE9s.",
  "You do not have permission to view this recording": "Vous n\u2019avez pas l\u2019autorisation d\u2019afficher cet enregistrement",
  "Your download should start shortly": "Votre t\xE9l\xE9chargement devrait d\xE9marrer sous peu",
  "Your export is complete.": "Votre exportation est termin\xE9e.",
  "Your export is in progress.": "Votre exportation est en cours.",
  "Your report is ready! Thank you for your patience.": "Votre rapport est pr\xEAt\xA0! Merci de votre patience.",
  "agent-performance": "performance-agent",
  "bi-weekly": "bihebdomadaire",
  "by AI": "par IA",
  "by {{who}}": "par {{who}}",
  daily: gx,
  from: vx,
  "from_from date": "du",
  'match the keyword "{{filterKeyword}}"': 'faire correspondre le mot cl\xE9 "{{filterKeyword}}"',
  monthly: bx,
  quarterly: yx,
  "queue-caller": "appelant-file",
  to: Cx,
  "to the external number": "au num\xE9ro ext\xE9rieur",
  "to_to date": "au",
  "topicsSentimentsTooltip.topicCount": "La rubrique <0><0>{{ topic }}</0></0> est mentionn\xE9e dans <2>{{ count }}</2> appel(s) :",
  "topicsSentimentsTooltip.topicCount_plural": "<0><0>{{ topic }}</0></0> est mentionn\xE9 dans <2>{{ count }}</2> appel(s) :",
  weekly: Sx,
  yearly: wx,
  "{{from}}-{{to}} of {{total}}": "{{from}}-{{to}} sur {{total}}",
  "{{percent}} %": "{{percent}} %",
  "{{percent}}% ({{value}}) are negative": "{{percent}}% ({{value}}) sont n\xE9gatifs",
  "{{percent}}% ({{value}}) are neutral": "{{percent}}% ({{value}}) sont neutres",
  "{{percent}}% ({{value}}) are positive": "{{percent}}% ({{value}}) sont positifs",
  "{{percent}}% {{sentiment}}": "{{percent}}% {{sentiment}}",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected": "{{selectedElementsCount}} sur {{totalElementsCount}} s\xE9lectionn\xE9",
  "{{selectedElementsCount}} of {{totalElementsCount}} selected_plural": "{{selectedElementsCount}} sur {{totalElementsCount}} s\xE9lectionn\xE9s",
  "{{selected}} of {{total}} selected": "{{selected}} de {{total}} \xE9l\xE9ment s\xE9lectionn\xE9",
  "{{selected}} of {{total}} selected_Selected date buckets": "{{selected}} de {{total}} \xE9l\xE9ments s\xE9lectionn\xE9s",
  "{{selected}} of {{total}} selected_Selected date buckets_plural": "{{selected}} de {{total}} \xE9l\xE9ments s\xE9lectionn\xE9s",
  "{{selected}} of {{total}} selected_plural": "{{selected}} de {{total}} \xE9l\xE9ments s\xE9lectionn\xE9s",
  "{{value}} (+ {{amount}} more)": "{{value}} (+ {{amount}} autres)"
}, Ax = {
  "de-DE": {
    translation: {
      ...lA
    }
  },
  "en-AU": {
    translation: {
      ...dn
    }
  },
  "en-CA": {
    translation: {
      ...dn
    }
  },
  "en-GB": {
    translation: {
      ...dn
    }
  },
  "en-IE": {
    translation: {
      ...dn
    }
  },
  "en-US": {
    translation: {
      ...dn
    }
  },
  "es-MX": {
    translation: {
      ...Od
    }
  },
  "es-ES": {
    translation: {
      ...Od
    }
  },
  "fr-CA": {
    translation: {
      ...Ld
    }
  },
  "fr-FR": {
    translation: {
      ...Ld
    }
  },
  "it-IT": {
    translation: {
      ...nD
    }
  },
  "pt-BR": {
    translation: {
      ...k1
    }
  }
}, vo = Mb.createInstance(), Tx = (i) => vo.use(Pb).init({
  resources: Ax,
  lng: i,
  fallbackLng: "en-US",
  nsSeparator: !1,
  keySeparator: !1,
  interpolation: {
    escapeValue: !1
  },
  react: {
    useSuspense: !1
  }
}), Ir = () => window.shell, bn = () => {
  var i;
  return (i = Ir()) == null ? void 0 : i.user;
}, lR = () => {
  var i;
  return (i = bn()) == null ? void 0 : i.name;
}, _x = () => {
  var i;
  return (i = bn()) == null ? void 0 : i.key;
}, Ex = () => {
  var i, a, r;
  return (r = (a = (i = bn()) == null ? void 0 : i.emails) == null ? void 0 : a.find((s) => s.primary)) == null ? void 0 : r.value;
}, dR = () => {
  var i, a;
  return (a = (i = bn()) == null ? void 0 : i.location) == null ? void 0 : a.timeZone;
}, Oa = () => {
  var i;
  return (i = Ir()) == null ? void 0 : i.auth;
}, Dx = () => {
  var i, a;
  return (a = (i = Ir()) == null ? void 0 : i.i18n) == null ? void 0 : a.selectedLocale;
}, kx = () => {
  var i, a, r;
  return (r = (a = (i = Ir()) == null ? void 0 : i.context) == null ? void 0 : a.pbx) == null ? void 0 : r.id;
}, xd = (i) => {
  var a;
  return (a = bn()) == null ? void 0 : a.hasPermissions(i);
}, yr = "https://api.dev.jive.com", Nx = {
  ccoBff: {
    url: `${yr}/contact-center-reporting/v1`
  },
  analyticsBff: {
    url: `${yr}/contact-center-reports/v1`
  },
  jif: {
    url: `${yr}/jif/v4/user/jiveId/`
  },
  callRecording: {
    url: `${yr}/recording/v1`
  },
  avatar: {
    url: "https://avatarsstage.servers.getgo.com/"
  }
}, Cr = "https://api.staging.jive.com", Ix = {
  ccoBff: {
    url: `${Cr}/contact-center-reporting/v1`
  },
  analyticsBff: {
    url: `${Cr}/contact-center-reports/v1`
  },
  jif: {
    url: `${Cr}/jif/v4/user/jiveId/`
  },
  callRecording: {
    url: `${Cr}/recording/v1`
  },
  avatar: {
    url: "https://avatarsstage.servers.getgo.com/"
  }
}, Sr = "https://api.jive.com", Ox = {
  ccoBff: {
    url: `${Sr}/contact-center-reporting/v1`
  },
  analyticsBff: {
    url: `${Sr}/contact-center-reports/v1`
  },
  jif: {
    url: `${Sr}/jif/v4/user/jiveId/`
  },
  callRecording: {
    url: `${Sr}/recording/v1`
  },
  avatar: {
    url: "https://avatars.servers.getgo.com/"
  }
}, yn = {
  organizationsEndpoint: "/organizations",
  userPermissionsEndpoint: "/user-permissions",
  dashboardsEndpoint: "/dashboards",
  dashboardEndpoint: "/dashboard",
  dashboardPermissionsEndpoint: "/permissions",
  dashboardUsersPermissionsEndpoint: "/permission",
  usersEndpoint: "/sharable-users",
  licensesEndpoint: "/licenses",
  dataMartEndpoint: "/queue-manager/datamart",
  analyticsExperienceEndpoint: "/analytics-experience",
  callReportEndpoint: "/callreport",
  callReportConversationEndpoint: "/callreportconversation",
  transcriptsEndpoint: "/transcripts",
  agentSummaryEndpoint: "/agent-summary",
  totalTalkTimeEndpoint: "/total-talk-time",
  callVolumeEndpoint: "/call-volume",
  agentTransfersEndpoint: "/agent-transfer",
  agentAvailabilityEndpoint: "/agent-availability",
  support: {
    url: "https://support.goto.com/connect/help/how-do-i-contact-gotoconnect-customer-support"
  },
  unleash: {
    url: "https://api.jive.com/feature-flags-edge/v1/api/frontend"
  },
  scheduledDashboardsEndpoint: "/scheduled-dashboards",
  scheduledDashboardUsersEndpoint: "/users",
  filtersEndpoint: "/filters",
  appVersion: "0.257.1",
  exportPdfFeedbackUrl: "https://forms.office.com/r/TuJQLSWGyn",
  exportPngFeedbackUrl: "https://forms.office.com/r/TuJQLSWGyn"
}, Ru = {
  ccoBff: {
    url: "https://api.dev.jive.com/contact-center-reporting/v1"
  },
  analyticsBff: {
    url: "http://localhost:18080"
  },
  jif: {
    url: "https://api.dev.jive.com/jif/v4/user/jiveId/"
  },
  avatar: {
    url: "https://avatarsstage.servers.getgo.com/"
  }
}, Lx = {
  ...yn,
  key: "dev",
  api: Nx,
  unleashConfig: "GoToApp:ED.294379d0ffef202b408bc8ace2184d44bfbdc980d524bbc1d5234535"
}, xx = {
  ...yn,
  key: "staging",
  api: Ru,
  unleashConfig: "GoToApp:Stage.9bed2b009ae272797d036759293a9548154e9556bc3ff024003cafe6"
}, Rx = {
  ...yn,
  key: "dev",
  api: Ru,
  unleashConfig: "GoToApp:ED.294379d0ffef202b408bc8ace2184d44bfbdc980d524bbc1d5234535"
}, $x = {
  ...yn,
  key: "staging",
  api: Ix,
  unleashConfig: "GoToApp:Stage.9bed2b009ae272797d036759293a9548154e9556bc3ff024003cafe6"
}, oo = {
  ...yn,
  key: "prod",
  api: Ox,
  unleashConfig: "GoToApp:Production.2fbaf303e2c84bd5e8a3877dc9d3a3c9480bf76ddfdeae36233704cf"
};
let he;
const Mx = window.environment || "prod";
switch (Mx) {
  case "prod": {
    he = oo;
    break;
  }
  case "staging": {
    he = $x, he.key = "staging", he.shellEnv = "staging";
    break;
  }
  case "dev": {
    he = Lx, he.key = "dev", he.shellEnv = "dev";
    break;
  }
  case "local-dev": {
    he = Rx, he.key = "local", he.shellEnv = "dev";
    break;
  }
  case "local-staging": {
    he = xx, he.key = "local", he.shellEnv = "staging";
    break;
  }
  case "local-prod": {
    he = oo, he.key = "local", he.shellEnv = "prod";
    break;
  }
  default: {
    he = oo;
    break;
  }
}
const Ce = he, Px = (i, a) => a.includes("text/csv") ? `${i}.csv` : a.includes("application/zip") ? `${i}.zip` : null;
class sa extends Error {
  constructor(a) {
    const { message: r, response: s, status: d, statusText: f, config: m, body: g } = a;
    super(r), this.response = s, this.status = d, this.statusText = f, this.body = g, this.config = m, this.name = "HttpResponseError", Object.setPrototypeOf(this, sa.prototype);
  }
}
const uR = (i) => i.name === "AbortError", Ht = async (i, a) => {
  var g;
  const { signal: r } = a, s = (g = Oa()) == null ? void 0 : g.getToken(), d = await fetch(i, {
    credentials: "omit",
    signal: r,
    headers: { Authorization: s ? `${s.token_type} ${s.access_token}` : "" }
  }), f = await d.text();
  let m = null;
  if (Oe.exports.isEmpty(f) || (m = JSON.parse(f)), !d.ok)
    throw new sa({
      message: `${d.status}: ${d.statusText}`,
      config: { url: i },
      response: m,
      status: d.status
    });
  return m;
}, cR = async (i, a, r = !1, s = "scheduled-board-file") => {
  var I, L;
  const { signal: d } = a;
  let f;
  if (r) {
    const H = (I = Oa()) == null ? void 0 : I.getToken();
    f = { Authorization: H ? `${H.token_type} ${H.access_token}` : "" };
  }
  const m = await fetch(i, {
    credentials: "omit",
    signal: d,
    ...r && { headers: f }
  }), g = await m.blob();
  if (!m.ok)
    throw new sa({
      message: `${m.status}: ${m.statusText}`,
      config: { url: i },
      response: null,
      status: m.status
    });
  let C = Oe.exports.trim((L = m.headers.get("content-disposition")) == null ? void 0 : L.split("filename=")[1], '"');
  const T = m.headers.get("content-type");
  if (!C && (C = Px(s, T), !C))
    throw new Error(`Unable to parse the file type ${T}`);
  return new File([g], C, { type: T });
}, La = async (i, a, r, s = "POST", d = !1) => {
  var T;
  const { signal: f } = r, m = (T = Oa()) == null ? void 0 : T.getToken(), g = await fetch(i, {
    method: s,
    body: a,
    credentials: "omit",
    signal: f,
    headers: {
      "Content-Type": "application/json",
      Authorization: m ? `${m.token_type} ${m.access_token}` : ""
    }
  });
  let C;
  if (g.ok) {
    if (d)
      return !0;
    C = await g.json();
  }
  if (!g.ok)
    throw new sa({
      message: `${g.status}: ${g.statusText}`,
      config: { url: i },
      response: C,
      status: g.status
    });
  return C;
}, mR = async (i, a, r, s = "POST") => {
  var m;
  const { signal: d } = r, f = (m = Oa()) == null ? void 0 : m.getToken();
  return fetch(i, {
    method: s,
    body: a,
    credentials: "omit",
    signal: d,
    headers: {
      "Content-Type": "application/json",
      Authorization: f ? `${f.token_type} ${f.access_token}` : ""
    }
  });
}, fR = async (i, a, r, s = "application/json") => {
  var C;
  const { signal: d } = r, f = (C = Oa()) == null ? void 0 : C.getToken(), m = await fetch(i, {
    method: "POST",
    body: a,
    credentials: "omit",
    signal: d,
    headers: {
      accept: "application/json, text/plain, */*",
      Authorization: f ? `${f.token_type} ${f.access_token}` : "",
      "Content-Type": s
    }
  }), g = s === "application/json" ? await m.json() : m;
  if (!m.ok)
    throw new sa({
      message: `${m.status}: ${m.statusText}`,
      config: { url: i },
      response: g,
      status: m.status
    });
  return g;
}, pR = async (i, a, r, s = "application/json") => {
  var g;
  const { signal: d } = r, f = (g = Oa()) == null ? void 0 : g.getToken(), m = await fetch(i, {
    method: "POST",
    body: a,
    credentials: "omit",
    signal: d,
    headers: {
      accept: "application/json, text/plain, */*",
      Authorization: f ? `${f.token_type} ${f.access_token}` : "",
      "Content-Type": s
    }
  });
  if (!m.ok)
    throw new sa({
      message: `${m.status}: ${m.statusText}`,
      config: { url: i },
      res: m,
      status: m.status
    });
  return m;
}, Fx = (i, a) => {
  const r = new URL(`${Ce.api.analyticsBff.url}${Ce.userPermissionsEndpoint}`);
  return i.map((s) => s.id).forEach((s) => r.searchParams.append("organizationId", s)), r.searchParams.append("userKey", _x()), Ht(r, a);
};
class qx {
  async fetch(a, r) {
    return Fx(a, r);
  }
}
const zx = /^[\w]{8}-[\w]{4}-[\w]{4}-[\w]{4}-[\w]{12}$/i, $u = (i) => i.match(zx), Mu = "analytics.local.", Ux = (i) => JSON.parse(localStorage.getItem(Mu + i)), Bx = (i, a) => localStorage.setItem(Mu + i, JSON.stringify(a)), Wx = (i) => `${Ce.api.analyticsBff.url}${Ce.organizationsEndpoint}/${i}`, Vx = (i, a) => Ht(Wx(i), a), hR = (i) => (i == null ? void 0 : i.domain) || (i == null ? void 0 : i.id), so = (i, a) => {
  let r = i;
  return Array.isArray(i) || (r = Oe.exports.isEmpty(i) ? [] : [i]), Oe.exports.isEmpty(r) ? !1 : (r != null ? r : []).every((s) => (a != null ? a : []).includes(s));
}, Hx = [gt.UNIFIED_ANALYTICS_HAS_SHARED_DASHBOARD, gt.UNIFIED_ANALYTICS_PORTAL], Qx = (i) => i.filter((a) => a.userPermissions.find((r) => Hx.includes(r.id))).map((a) => a.organizationId);
class Gx extends Error {
  constructor(a, r) {
    super(a), this.name = "InvalidOrganizationIdError", this.organizationId = r;
  }
}
class Yx extends Error {
  constructor(a) {
    super(a), this.name = "NoOrganizationIdError";
  }
}
class Zx {
  constructor() {
    this.organizations = [];
  }
  initOrganization(a, r, s) {
    var C, T, I;
    this.organizations = r.filter((L) => Qx(a).includes(L.id));
    let d = s;
    if (s && !$u(s)) {
      const L = this.organizations.find((H) => H.domain === s);
      d = L == null ? void 0 : L.id;
    }
    const f = this.organizations.find((L) => L.id === d) ? d : this.defaultOrganizationId;
    if (!Oe.exports.isEmpty(d) && f !== d)
      throw new Gx("No access to the provided organization", f);
    const m = this.organizations.find((L) => L.id === f);
    if (!m)
      throw new Yx("No access to any organizations");
    const g = (I = (T = (C = a.find((L) => L.organizationId === m.id)) == null ? void 0 : C.userPermissions) == null ? void 0 : T.map((L) => L.id)) != null ? I : [];
    return Bx("organization", f), {
      organizations: this.organizations,
      currentOrganization: m,
      currentOrganizationPermissions: g
    };
  }
  get defaultOrganizationId() {
    var s, d, f;
    if (!this.organizations)
      return null;
    const a = Ux("organization"), r = kx();
    return a && this.organizations.find((m) => m.id === a) ? this.organizations.find((m) => m.id === a).id : (f = (s = this.organizations.find((m) => r && m.id === r)) == null ? void 0 : s.id) != null ? f : (d = this.organizations[0]) == null ? void 0 : d.id;
  }
  async fetchFromDomainName(a, r) {
    const s = await Vx(a, r);
    if (!s)
      throw new Error("No organization found");
    return s;
  }
}
const ht = {
  AGENT_EFFECTIVENESS: "AgentEffectiveness",
  QUEUE_CALLER: "QueueCaller",
  RESOLVED_CONVERSATIONS: "ResolvedConversations",
  CALL_REPORTS: "CallReports",
  EMPTY: "Empty"
}, bo = {
  id: ht.AGENT_EFFECTIVENESS,
  type: "AGENT_EFFECTIVENESS",
  path: "/agent-effectiveness",
  permissions: [gt.UNIFIED_ANALYTICS_DASHBOARDS_UNIFIED_AGENT]
}, yo = {
  id: ht.RESOLVED_CONVERSATIONS,
  type: "RESOLVED_CONVERSATIONS",
  path: "/resolved-conversations",
  permissions: [gt.RESOLVED_CONVERSATIONS_PAGE_VIEW]
}, Co = {
  id: ht.QUEUE_CALLER,
  type: "QUEUE_CALLER",
  path: "/queue-caller",
  permissions: [gt.QUEUE_CALLER_PAGE_VIEW]
}, Kx = {
  id: ht.CALL_REPORTS,
  type: "CALL_REPORTS",
  path: "/call-reports",
  permissions: [gt.CALL_REPORTS_PAGE_VIEW]
}, Pu = {
  id: ht.EMPTY,
  type: "Empty",
  path: "/empty",
  permissions: []
};
ht.AGENT_EFFECTIVENESS + "", ht.QUEUE_CALLER + "", ht.RESOLVED_CONVERSATIONS + "", ht.CALL_REPORTS + "", ht.EMPTY + "";
const Jx = (i) => so(Co.permissions, i != null ? i : []) ? Co : so(bo.permissions, i != null ? i : []) ? bo : so(yo.permissions, i != null ? i : []) ? yo : Pu, vt = (i, a = !1) => `${Ce.api.analyticsBff.url}/organizations/${i}${Ce.dashboardsEndpoint}${a ? "?includeCallReports=true" : ""}`, Xx = (i, a, r = !1) => Ht(vt(i, r), a), gR = (i, a, r) => Ht(`${vt(i)}/${a}`, r), vR = (i, a, r) => Ht(
  `${vt(i)}/${a}${Ce.dashboardPermissionsEndpoint}`,
  r
), bR = (i, a, r, s, d, f) => {
  const m = new URL(`${vt(i)}/${a}${Ce.usersEndpoint}`);
  return m.searchParams.append("page", r), m.searchParams.append("pageSize", s), Oe.exports.isEmpty(d) || m.searchParams.append("q", d), Ht(m.toString(), f);
}, yR = (i, a, r, s) => La(
  `${vt(i)}/${a}${Ce.dashboardPermissionsEndpoint}`,
  JSON.stringify({ items: r }),
  s,
  "POST"
), CR = (i, a, r, s) => {
  const d = new URL(`${vt(i)}/${a}${Ce.dashboardPermissionsEndpoint}`);
  return r.forEach((f) => d.searchParams.append("id", f)), La(d.toString(), null, s, "DELETE");
}, SR = (i, a, r, s) => La(
  `${vt(i)}/${a}${Ce.dashboardUsersPermissionsEndpoint}`,
  null,
  s,
  "DELETE",
  !0
), wR = (i, a, r) => La(vt(i), JSON.stringify(a), r, "POST"), AR = (i, a, r, s) => La(
  `${vt(i)}/${a}`,
  JSON.stringify(r),
  s,
  "PATCH"
), TR = (i, a, r) => La(`${vt(i)}/${a}`, null, r, "DELETE"), _R = (i) => {
  switch (i) {
    case "AGENT_EFFECTIVENESS":
      return "AgentEffectiveness";
    case "AGENT_SUMMARY":
      return "AgentSummary";
    case "QUEUE_CALLER":
      return "QueueCaller";
    case "RESOLVED_CONVERSATIONS":
      return "ResolvedConversations";
    case "CALL_REPORTS":
      return "CallReports";
    default:
      return null;
  }
}, ER = (i, a) => {
  if (Oe.exports.isEmpty(i))
    return null;
  const r = Jx(a);
  let s = i.find((d) => d.isSystemDashboard && d.type === r.type);
  return s || (s = i.find((d) => d.isSharedDashboard && d.type === (r == null ? void 0 : r.type)), s) || (s = i.find((d) => d.isSharedDashboard)), s;
}, DR = (i) => {
  if (!i)
    return "";
  let a = "";
  return i.isSystemDashboard || (a = "Custom "), i.isSharedDashboard && (a = "Shared "), `${a}${i.type}`;
}, kR = (i, a) => {
  let r = i == null ? void 0 : i.name;
  return (i == null ? void 0 : i.isSystemDashboard) && a && (r = a(r)), Oe.exports.unescape(Oe.exports.truncate(r != null ? r : "", { length: 23 }));
};
class jx {
  async fetch(a, r, s = !1) {
    const d = await Xx(a, r, s);
    if (Oe.exports.isEmpty(Oe.exports.get(d, ["items"], [])))
      throw new Error("No dashboards found");
    return d.items;
  }
}
const eR = (i) => Ht(`${Ce.api.jif.url}${Ex()}`, i), tR = (i, a) => {
  const r = new URL(`${Ce.api.ccoBff.url}${Ce.licensesEndpoint}`);
  return i.map((s) => s.id).forEach((s) => r.searchParams.append("organizationId", s)), Ht(r, a);
}, Rd = {
  STRING: "string",
  JSON: "json"
}, $d = {
  CALLS_REPORT_ENABLED: "calls-report-enabled",
  QUEUE_CALLER_CALLBACK_OUTCOME: "cco-queue-caller-callback-outcome"
}, aR = (i) => !i || i.length === 0 ? void 0 : i.reduce((r, s) => {
  const { payload: d } = s.variant, f = { ...r };
  if (d) {
    if (d.type === Rd.JSON)
      try {
        const m = JSON.parse(d.value);
        f[s.name] = m;
      } catch (m) {
        console.error(`Error parsing JSON for flag ${s.name}:`, m), f[s.name] = null;
      }
    d.type === Rd.STRING && (f[s.name] = d.value);
  } else
    f[s.name] = !0;
  return f;
}, {}), Md = async (i) => new Promise((a, r) => {
  const s = new URL(`${Ce.unleash.url}`);
  Object.entries(i).forEach(([f, m]) => {
    m !== void 0 && f !== "licenses" && s.searchParams.append(`properties[${f}]`, encodeURIComponent(m));
  });
  const d = new Headers({
    Authorization: Ce.unleashConfig
  });
  fetch(s.toString(), {
    headers: d
  }).then((f) => f.json()).then((f) => {
    const m = aR(f.toggles);
    a(m);
  }).catch((f) => {
    r(f);
  });
});
class nR {
  constructor() {
    this.userPermissionsService = new qx(), this.organizationService = new Zx(), this.dashboardService = new jx(), this.hasBeenInitialized = !1, this.userPbxes = [], this.userPermissions = [], this.currentOrganizationPermissions = [], this.currentOrganization = null, this.featureFlags = null;
  }
  async initApp(a, r) {
    var O;
    if (this.hasBeenInitialized)
      return this.getUserContext();
    const s = await eR(r);
    if (!s)
      throw new Error("Impossible to query jif.");
    if (this.userPbxes = s.data.tenants.pbxes, a) {
      const Y = $u(a), Se = this.userPbxes.find((B) => (Y ? B.id : B.domain) === a);
      if (!Se && !Y) {
        const B = await this.organizationService.fetchFromDomainName(a, r);
        this.userPbxes.push({ id: B == null ? void 0 : B.id, domain: B == null ? void 0 : B.domain, name: B == null ? void 0 : B.name, userInfo: {} });
      } else
        !Se && Y && this.userPbxes.push({ id: a, name: a, userInfo: {} });
    }
    await this.fetchOrganizationsPermissions(r);
    const { organizations: d, currentOrganization: f, currentOrganizationPermissions: m } = this.organizationService.initOrganization(this.userPermissions, this.userPbxes, a);
    this.currentOrganizationPermissions = m;
    const { userId: g } = f.userInfo, C = (O = this.licenses.find((Y) => Y.id === f.id)) == null ? void 0 : O.license, T = {
      pbxId: f == null ? void 0 : f.id
    }, I = await Md(T), L = I == null ? void 0 : I[$d.CALLS_REPORT_ENABLED], H = await this.dashboardService.fetch(
      f.id,
      r,
      L
    );
    return this.currentOrganization = f, this.organizations = d, this.userId = g, this.currentLicense = C, this.dashboards = H, this.hasBeenInitialized = !0, this.featureFlags = I, {
      organizations: d,
      currentOrganization: f,
      currentOrganizationPermissions: m,
      userId: g,
      currentLicense: C,
      dashboards: H,
      userPermissions: this.userPermissions,
      featureFlags: I
    };
  }
  getUserContext() {
    return {
      organizations: this.organizations,
      currentOrganization: this.currentOrganization,
      currentOrganizationPermissions: this.currentOrganizationPermissions,
      userId: this.userId,
      currentLicense: this.currentLicense,
      dashboards: this.dashboards,
      userPermissions: this.userPermissions,
      featureFlags: this.featureFlags
    };
  }
  async fetchOrganizationsPermissions(a) {
    if (!this.userPbxes)
      return;
    const r = await Promise.all([
      this.userPermissionsService.fetch(this.userPbxes, a),
      tR(this.userPbxes, a)
    ]);
    this.userPermissions = r[0].items, this.licenses = r[1].items;
  }
  async changePbx(a, r) {
    var H;
    if (!this.hasBeenInitialized)
      throw new Error("Impossible to change pbx while the app is not initialized");
    const { organizations: s, currentOrganization: d, currentOrganizationPermissions: f } = this.organizationService.initOrganization(this.userPermissions, this.userPbxes, a), { userId: m } = d.userInfo, g = (H = this.licenses.find((O) => O.id === d.id)) == null ? void 0 : H.license, C = {
      pbxId: d == null ? void 0 : d.id
    }, T = await Md(C), I = T == null ? void 0 : T[$d.CALLS_REPORT_ENABLED], L = await this.dashboardService.fetch(
      d.id,
      r,
      I
    );
    return this.featureFlags = T, {
      organizations: s,
      currentOrganization: d,
      currentOrganizationPermissions: f,
      currentLicense: g,
      userId: m,
      dashboards: L,
      featureFlags: T
    };
  }
}
const lo = function() {
  const i = () => new nR();
  let a;
  return a || (a = i(), delete a.constructor), a;
}();
class rR {
  constructor() {
    an(this, "id", "@ucc/cc-analytics");
    an(this, "name", "Analytics");
    an(this, "route", "/analytics");
    an(this, "componentId", "analytics");
  }
  async initialize() {
    var r;
    const a = new AbortController();
    if (window.location.pathname.includes(this.route)) {
      const s = window.location.pathname.replace(this.route, "").split("/"), d = Oe.exports.isEmpty(s) ? null : s[1];
      try {
        await lo.initApp(d, a);
      } catch (f) {
        console.error(f);
      }
    }
    if (!vo.isInitialized) {
      const s = (r = Dx()) == null ? void 0 : r.replace("_", "-");
      Tx(s), ue.defaultLocale = s;
    }
  }
  async getComponentById() {
    return Promise.resolve(import("./analytics-experience.shell.entry.db7a6275.mjs"));
  }
  getMetadata() {
    return {
      id: this.id,
      name: this.name,
      version: "0.257.1"
    };
  }
  getModules() {
    return xd([gt.UNIFIED_ANALYTICS]) || lo.currentOrganizationPermissions.includes(gt.UNIFIED_ANALYTICS) ? [
      {
        componentId: this.componentId,
        displayNameKey: this.name,
        routes: [/\/analytics(\/.*)?/gi],
        shellConfig: {
          hideSidebar: !0,
          hideTopbar: !0
        }
      }
    ] : [];
  }
  getNavigationItems() {
    return xd([gt.UNIFIED_ANALYTICS]) || lo.currentOrganizationPermissions.includes(gt.UNIFIED_ANALYTICS) ? [
      {
        id: this.componentId,
        pathname: this.route,
        displayNameKey: "Analytics",
        icon: Fb,
        externalLink: !0
      }
    ] : [];
  }
  getSettings() {
    return [];
  }
  getString(a) {
    return vo.t(a);
  }
  registerNamespaces() {
    return Promise.resolve();
  }
}
const NR = new rR();
export {
  bo as A,
  La as B,
  Kx as C,
  q as D,
  _R as E,
  $d as F,
  yR as G,
  CR as H,
  SR as I,
  vR as J,
  bR as K,
  wR as L,
  TR as M,
  cR as N,
  Tx as O,
  Dx as P,
  Co as Q,
  yo as R,
  ue as S,
  lo as T,
  $u as U,
  Gx as V,
  Yx as W,
  NR as X,
  ht as a,
  hR as b,
  Ux as c,
  Z as d,
  Ce as e,
  Ht as f,
  _x as g,
  so as h,
  lR as i,
  Ex as j,
  Oa as k,
  Oe as l,
  kR as m,
  uR as n,
  gR as o,
  gt as p,
  DR as q,
  Ax as r,
  Bx as s,
  ER as t,
  AR as u,
  fR as v,
  dR as w,
  pR as x,
  vo as y,
  mR as z
};
