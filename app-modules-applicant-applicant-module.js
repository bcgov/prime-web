(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-applicant-applicant-module"],{

/***/ "./node_modules/ngx-bootstrap/chronos/moment/calendar.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/chronos/moment/calendar.js ***!
  \***************************************************************/
/*! exports provided: getCalendarFormat, calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarFormat", function() { return getCalendarFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ "./node_modules/ngx-bootstrap/chronos/moment/diff.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ "./node_modules/ngx-bootstrap/chronos/units/offset.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/type-checks */ "./node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _create_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/clone */ "./node_modules/ngx-bootstrap/chronos/create/clone.js");
/* harmony import */ var _utils_start_end_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/start-end-of */ "./node_modules/ngx-bootstrap/chronos/utils/start-end-of.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../format */ "./node_modules/ngx-bootstrap/chronos/format.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/ngx-bootstrap/chronos/locale/locales.js");







function getCalendarFormat(date, now, config) {
    var _diff = Object(_diff__WEBPACK_IMPORTED_MODULE_0__["diff"])(date, now, 'day', true, config);
    switch (true) {
        case _diff < -6: return 'sameElse';
        case _diff < -1: return 'lastWeek';
        case _diff < 0: return 'lastDay';
        case _diff < 1: return 'sameDay';
        case _diff < 2: return 'nextDay';
        case _diff < 7: return 'nextWeek';
        default: return 'sameElse';
    }
}
function calendar(date, time, formats, locale, config) {
    if (locale === void 0) { locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_6__["getLocale"])(); }
    if (config === void 0) { config = {}; }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time;
    var sod = Object(_utils_start_end_of__WEBPACK_IMPORTED_MODULE_4__["startOf"])(Object(_units_offset__WEBPACK_IMPORTED_MODULE_1__["cloneWithOffset"])(now, date, config), 'day', config._isUTC);
    var format = getCalendarFormat(date, sod, { _isUTC: true, _offset: 0 }) || 'sameElse';
    var output;
    if (formats) {
        var _format = formats[format];
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isString"])(_format)) {
            output = _format;
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_format)) {
            output = _format.call(null, date, now);
        }
    }
    if (!output) {
        output = locale.calendar(format, date, Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(now));
    }
    return Object(_format__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(date, output, config._locale._abbr, config._isUTC, config._offset);
}
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/chronos/moment/diff.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/chronos/moment/diff.js ***!
  \***********************************************************/
/*! exports provided: diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/offset */ "./node_modules/ngx-bootstrap/chronos/units/offset.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/ngx-bootstrap/chronos/utils.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/type-checks */ "./node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/date-getters */ "./node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-subtract */ "./node_modules/ngx-bootstrap/chronos/moment/add-subtract.js");
/* harmony import */ var _create_clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create/clone */ "./node_modules/ngx-bootstrap/chronos/create/clone.js");






function diff(date, input, units, asFloat, config) {
    if (config === void 0) { config = {}; }
    if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(date)) {
        return NaN;
    }
    var that = Object(_units_offset__WEBPACK_IMPORTED_MODULE_0__["cloneWithOffset"])(input, date, config);
    if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(that)) {
        return NaN;
    }
    // const zoneDelta = (getUTCOffset(input, dateConfig) - getUTCOffset(date, dateConfig)) * 6e4;
    var zoneDelta = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(config._zoneDelta)
        ? config._zoneDelta * 6e4
        : (Object(_units_offset__WEBPACK_IMPORTED_MODULE_0__["getUTCOffset"])(input, config) - Object(_units_offset__WEBPACK_IMPORTED_MODULE_0__["getUTCOffset"])(date, config)) * 6e4;
    var output;
    switch (units) {
        case 'year':
            output = monthDiff(date, that) / 12;
            break;
        case 'month':
            output = monthDiff(date, that);
            break;
        case 'quarter':
            output = monthDiff(date, that) / 3;
            break;
        case 'seconds':
            output = (date.valueOf() - that.valueOf()) / 1e3;
            break; // 1000
        case 'minutes':
            output = (date.valueOf() - that.valueOf()) / 6e4;
            break; // 1000 * 60
        case 'hours':
            output = (date.valueOf() - that.valueOf()) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (date.valueOf() - that.valueOf() - zoneDelta) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (date.valueOf() - that.valueOf() - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = date.valueOf() - that.valueOf();
    }
    return asFloat ? output : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["absFloor"])(output);
}
function monthDiff(a, b) {
    // difference in months
    var wholeMonthDiff = ((Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(b) - Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getFullYear"])(a)) * 12) + (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getMonth"])(b) - Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_3__["getMonth"])(a));
    // b is in (anchor - 1 month, anchor + 1 month)
    var anchor = Object(_add_subtract__WEBPACK_IMPORTED_MODULE_4__["add"])(Object(_create_clone__WEBPACK_IMPORTED_MODULE_5__["cloneDate"])(a), wholeMonthDiff, 'month');
    var anchor2;
    var adjust;
    if (b.valueOf() - anchor.valueOf() < 0) {
        anchor2 = Object(_add_subtract__WEBPACK_IMPORTED_MODULE_4__["add"])(Object(_create_clone__WEBPACK_IMPORTED_MODULE_5__["cloneDate"])(a), wholeMonthDiff - 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor.valueOf() - anchor2.valueOf());
    }
    else {
        anchor2 = Object(_add_subtract__WEBPACK_IMPORTED_MODULE_4__["add"])(Object(_create_clone__WEBPACK_IMPORTED_MODULE_5__["cloneDate"])(a), wholeMonthDiff + 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor2.valueOf() - anchor.valueOf());
    }
    // check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}
//# sourceMappingURL=diff.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/chronos/moment/min-max.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/chronos/moment/min-max.js ***!
  \**************************************************************/
/*! exports provided: min, max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/type-checks */ "./node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _utils_date_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-compare */ "./node_modules/ngx-bootstrap/chronos/utils/date-compare.js");


function pickBy(fn, dates) {
    var _dates;
    var _firstArg = dates[0];
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_firstArg) && dates.length === 1) {
        _dates = _firstArg;
    }
    else if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isArray"])(dates)) {
        _dates = dates;
    }
    if (!_dates || !_dates.length) {
        return new Date();
    }
    var res = _dates[0];
    for (var i = 1; i < _dates.length; ++i) {
        // if (!moments[i].isValid() || moments[i][fn](res)) {
        if (!Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_0__["isDateValid"])(_dates[i]) || fn.call(null, _dates[i], res)) {
            res = _dates[i];
        }
    }
    return res;
}
// TODO: Use [].sort instead?
function min() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // const args = [].slice.call(arguments, 0);
    return pickBy(_utils_date_compare__WEBPACK_IMPORTED_MODULE_1__["isBefore"], args);
}
function max() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // const args = [].slice.call(arguments, 0);
    return pickBy(_utils_date_compare__WEBPACK_IMPORTED_MODULE_1__["isAfter"], args);
}
//# sourceMappingURL=min-max.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/chronos/test/chain.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/chronos/test/chain.js ***!
  \**********************************************************/
/*! exports provided: moment, Khronos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moment", function() { return moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Khronos", function() { return Khronos; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./node_modules/ngx-bootstrap/chronos/index.js");
/* harmony import */ var _utils_date_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-getters */ "./node_modules/ngx-bootstrap/chronos/utils/date-getters.js");
/* harmony import */ var _utils_date_setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date-setters */ "./node_modules/ngx-bootstrap/chronos/utils/date-setters.js");
/* harmony import */ var _create_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/clone */ "./node_modules/ngx-bootstrap/chronos/create/clone.js");
/* harmony import */ var _utils_type_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/type-checks */ "./node_modules/ngx-bootstrap/chronos/utils/type-checks.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../format */ "./node_modules/ngx-bootstrap/chronos/format.js");
/* harmony import */ var _create_from_string_and_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/from-string-and-format */ "./node_modules/ngx-bootstrap/chronos/create/from-string-and-format.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../units/offset */ "./node_modules/ngx-bootstrap/chronos/units/offset.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/year */ "./node_modules/ngx-bootstrap/chronos/units/year.js");
/* harmony import */ var _utils_date_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/date-compare */ "./node_modules/ngx-bootstrap/chronos/utils/date-compare.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../units/month */ "./node_modules/ngx-bootstrap/chronos/units/month.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/ngx-bootstrap/chronos/units/day-of-week.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../units/week */ "./node_modules/ngx-bootstrap/chronos/units/week.js");
/* harmony import */ var _units_week_year__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../units/week-year */ "./node_modules/ngx-bootstrap/chronos/units/week-year.js");
/* harmony import */ var _utils_start_end_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/start-end-of */ "./node_modules/ngx-bootstrap/chronos/utils/start-end-of.js");
/* harmony import */ var _units_quarter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../units/quarter */ "./node_modules/ngx-bootstrap/chronos/units/quarter.js");
/* harmony import */ var _units_day_of_year__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../units/day-of-year */ "./node_modules/ngx-bootstrap/chronos/units/day-of-year.js");
/* harmony import */ var _units_timezone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../units/timezone */ "./node_modules/ngx-bootstrap/chronos/units/timezone.js");
/* harmony import */ var _moment_diff__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../moment/diff */ "./node_modules/ngx-bootstrap/chronos/moment/diff.js");
/* harmony import */ var _moment_calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../moment/calendar */ "./node_modules/ngx-bootstrap/chronos/moment/calendar.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/ngx-bootstrap/chronos/locale/locales.js");
/* harmony import */ var _moment_min_max__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../moment/min-max */ "./node_modules/ngx-bootstrap/chronos/moment/min-max.js");
/* harmony import */ var _duration_constructor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../duration/constructor */ "./node_modules/ngx-bootstrap/chronos/duration/constructor.js");
/* harmony import */ var _create_from_anything__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../create/from-anything */ "./node_modules/ngx-bootstrap/chronos/create/from-anything.js");
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../duration/create */ "./node_modules/ngx-bootstrap/chronos/duration/create.js");

























var moment = _moment;
function _moment(input, format, localeKey, strict, isUTC) {
    if (input instanceof Khronos) {
        var _date = input.clone();
        return isUTC ? _date.utc() : _date;
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isBoolean"])(localeKey)) {
        return new Khronos(input, format, null, localeKey, isUTC);
    }
    return new Khronos(input, format, localeKey, strict, isUTC);
}
moment.utc = function (input, format, localeKey, strict) {
    return _moment(input, format, localeKey, strict, true);
};
moment.parseZone = function (input, format, localeKey, strict) {
    return _moment(input, format, localeKey, strict, true).parseZone();
};
moment.locale = _locale_locales__WEBPACK_IMPORTED_MODULE_20__["getSetGlobalLocale"];
moment.localeData = function (key) {
    if (key instanceof Khronos) {
        return key.localeData();
    }
    return Object(_locale_locales__WEBPACK_IMPORTED_MODULE_20__["getLocale"])(key);
};
// moment.utc = createUTC;
moment.unix = function (inp) { return new Khronos(inp * 1000); };
moment.ISO_8601 = _create_from_string_and_format__WEBPACK_IMPORTED_MODULE_6__["ISO_8601"];
moment.RFC_2822 = _create_from_string_and_format__WEBPACK_IMPORTED_MODULE_6__["RFC_2822"];
moment.defineLocale = _locale_locales__WEBPACK_IMPORTED_MODULE_20__["defineLocale"];
moment.parseTwoDigitYear = _units_year__WEBPACK_IMPORTED_MODULE_8__["parseTwoDigitYear"];
moment.isDate = _utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isDate"];
moment.invalid = function _invalid() {
    return new Khronos(new Date(NaN));
};
// duration(inp?: Duration | DateInput | Khronos, unit?: MomentUnitOfTime): Duration;
moment.duration = function (input, unit) {
    var _unit = mapUnitOfTime(unit);
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isDate"])(input)) {
        throw new Error('todo implement');
    }
    if (input == null) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_24__["createDuration"])();
    }
    if (Object(_duration_constructor__WEBPACK_IMPORTED_MODULE_22__["isDuration"])(input)) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_24__["createDuration"])(input, _unit, { _locale: input._locale });
    }
    if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isString"])(input) || Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(input) || Object(_duration_constructor__WEBPACK_IMPORTED_MODULE_22__["isDuration"])(input) || Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isObject"])(input)) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_24__["createDuration"])(input, _unit);
    }
    throw new Error('todo implement');
};
moment.min = function _min() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    var _firstArg = dates[0];
    var _dates = (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isArray"])(_firstArg) ? _firstArg : dates)
        .map(function (date) { return _moment(date); })
        .map(function (date) { return date.toDate(); });
    var _date = _moment_min_max__WEBPACK_IMPORTED_MODULE_21__["min"].apply(void 0, _dates);
    return new Khronos(_date);
};
moment.max = function _max() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    var _firstArg = dates[0];
    var _dates = (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isArray"])(_firstArg) ? _firstArg : dates)
        .map(function (date) { return _moment(date); })
        .map(function (date) { return date.toDate(); });
    var _date = _moment_min_max__WEBPACK_IMPORTED_MODULE_21__["max"].apply(void 0, _dates);
    return new Khronos(_date);
};
moment.locales = function () {
    return Object(_locale_locales__WEBPACK_IMPORTED_MODULE_20__["listLocales"])();
};
var _unitsPriority = {
    year: 1,
    month: 8,
    week: 5,
    isoWeek: 5,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    hours: 13,
    weekYear: 1,
    isoWeekYear: 1,
    quarter: 7,
    date: 9,
    dayOfYear: 4,
    minutes: 14,
    seconds: 15,
    milliseconds: 16
};
// todo: do I need 2 mappers?
var _timeHashMap = {
    y: 'year',
    years: 'year',
    year: 'year',
    M: 'month',
    months: 'month',
    month: 'month',
    w: 'week',
    weeks: 'week',
    week: 'week',
    d: 'day',
    days: 'day',
    day: 'day',
    date: 'date',
    dates: 'date',
    D: 'date',
    h: 'hours',
    hour: 'hours',
    hours: 'hours',
    m: 'minutes',
    minute: 'minutes',
    minutes: 'minutes',
    s: 'seconds',
    second: 'seconds',
    seconds: 'seconds',
    ms: 'milliseconds',
    millisecond: 'milliseconds',
    milliseconds: 'milliseconds',
    quarter: 'quarter',
    quarters: 'quarter',
    q: 'quarter',
    Q: 'quarter',
    isoWeek: 'isoWeek',
    isoWeeks: 'isoWeek',
    W: 'isoWeek',
    weekYear: 'weekYear',
    weekYears: 'weekYear',
    gg: 'weekYears',
    isoWeekYear: 'isoWeekYear',
    isoWeekYears: 'isoWeekYear',
    GG: 'isoWeekYear',
    dayOfYear: 'dayOfYear',
    dayOfYears: 'dayOfYear',
    DDD: 'dayOfYear',
    weekday: 'weekday',
    weekdays: 'weekday',
    e: 'weekday',
    isoWeekday: 'isoWeekday',
    isoWeekdays: 'isoWeekday',
    E: 'isoWeekday'
};
function mapUnitOfTime(period) {
    return _timeHashMap[period];
}
function mapMomentInputObject(obj) {
    var _res = {};
    return Object.keys(obj)
        .reduce(function (res, key) {
        res[mapUnitOfTime(key)] = obj[key];
        return res;
    }, _res);
}
var Khronos = /** @class */ (function () {
    function Khronos(input, format, localeKey, strict, isUTC, offset) {
        if (strict === void 0) { strict = false; }
        if (isUTC === void 0) { isUTC = false; }
        this._date = new Date();
        this._isUTC = false;
        // locale will be needed to format invalid date message
        this._locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_20__["getLocale"])(localeKey);
        // parse invalid input
        if (input === '' || input === null || (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(input) && isNaN(input))) {
            this._date = new Date(NaN);
            return this;
        }
        this._isUTC = isUTC;
        if (this._isUTC) {
            this._offset = 0;
        }
        if (offset || offset === 0) {
            this._offset = offset;
        }
        this._isStrict = strict;
        this._format = format;
        if (!input && input !== 0 && !format) {
            this._date = new Date();
            return this;
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isDate"])(input)) {
            this._date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(input);
            return this;
        }
        // this._date = parseDate(input, format, localeKey, strict, isUTC);
        var config = Object(_create_from_anything__WEBPACK_IMPORTED_MODULE_23__["createLocalOrUTC"])(input, format, localeKey, strict, isUTC);
        this._date = config._d;
        this._offset = Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(config._offset) ? config._offset : this._offset;
        this._isUTC = config._isUTC;
        this._isStrict = config._strict;
        this._format = config._f;
        this._tzm = config._tzm;
    }
    Khronos.prototype._toConfig = function () {
        return { _isUTC: this._isUTC, _locale: this._locale, _offset: this._offset, _tzm: this._tzm };
    };
    Khronos.prototype.locale = function (localeKey) {
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(localeKey)) {
            return this._locale._abbr;
        }
        if (localeKey instanceof Khronos) {
            this._locale = localeKey._locale;
            return this;
        }
        var newLocaleData = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_20__["getLocale"])(localeKey);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    };
    Khronos.prototype.localeData = function () {
        return this._locale;
    };
    // Basic
    // Basic
    Khronos.prototype.add = 
    // Basic
    function (val, period) {
        var _this = this;
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isString"])(val)) {
            this._date = Object(_index__WEBPACK_IMPORTED_MODULE_0__["add"])(this._date, parseInt(val, 10), mapUnitOfTime(period));
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(val)) {
            this._date = Object(_index__WEBPACK_IMPORTED_MODULE_0__["add"])(this._date, val, mapUnitOfTime(period));
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isObject"])(val)) {
            var _mapped_1 = mapMomentInputObject(val);
            Object.keys(_mapped_1)
                .forEach(function (key) { return Object(_index__WEBPACK_IMPORTED_MODULE_0__["add"])(_this._date, _mapped_1[key], key); });
        }
        return this;
    };
    // fixme: for some reason here 'null' for time is fine
    // fixme: for some reason here 'null' for time is fine
    Khronos.prototype.calendar = 
    // fixme: for some reason here 'null' for time is fine
    function (time, formats) {
        var _time = time instanceof Khronos ? time : new Khronos(time || new Date());
        var _offset = (this._offset || 0) - (_time._offset || 0);
        var _config = Object.assign(this._toConfig(), { _offset: _offset });
        return Object(_moment_calendar__WEBPACK_IMPORTED_MODULE_19__["calendar"])(this._date, _time._date, formats, this._locale, _config);
    };
    Khronos.prototype.clone = function () {
        var localeKey = this._locale && this._locale._abbr || 'en';
        // return new Khronos(cloneDate(this._date), this._format, localeKey, this._isStrict, this._isUTC);
        // fails if isUTC and offset
        // return new Khronos(new Date(this.valueOf()),
        return new Khronos(this._date, this._format, localeKey, this._isStrict, this._isUTC, this._offset);
    };
    Khronos.prototype.diff = function (b, unitOfTime, precise) {
        var unit = mapUnitOfTime(unitOfTime);
        var _b = b instanceof Khronos ? b : new Khronos(b);
        // const zoneDelta = (_b.utcOffset() - this.utcOffset());
        // const config = Object.assign(this._toConfig(), {
        //   _offset: 0,
        //   _isUTC: true,
        //   _zoneDelta: zoneDelta
        // });
        // return diff(new Date(this.valueOf()), new Date(_b.valueOf()), unit, precise, config);
        return Object(_moment_diff__WEBPACK_IMPORTED_MODULE_18__["diff"])(this._date, _b.toDate(), unit, precise, this._toConfig());
    };
    Khronos.prototype.endOf = function (period) {
        var _per = mapUnitOfTime(period);
        this._date = Object(_utils_start_end_of__WEBPACK_IMPORTED_MODULE_14__["endOf"])(this._date, _per, this._isUTC);
        return this;
    };
    Khronos.prototype.format = function (format) {
        return Object(_format__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this._date, format, this._locale && this._locale._abbr, this._isUTC, this._offset);
    };
    // todo: implement
    // todo: implement
    Khronos.prototype.from = 
    // todo: implement
    function (time, withoutSuffix) {
        var _time = _moment(time);
        if (this.isValid() && _time.isValid()) {
            return Object(_duration_create__WEBPACK_IMPORTED_MODULE_24__["createDuration"])({ to: this.toDate(), from: _time.toDate() })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        }
        return this.localeData().invalidDate;
    };
    Khronos.prototype.fromNow = function (withoutSuffix) {
        return this.from(new Date(), withoutSuffix);
    };
    Khronos.prototype.to = function (inp, suffix) {
        throw new Error("TODO: Implement");
    };
    Khronos.prototype.toNow = function (withoutPrefix) {
        throw new Error("TODO: Implement");
    };
    Khronos.prototype.subtract = function (val, period) {
        var _this = this;
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isString"])(val)) {
            this._date = Object(_index__WEBPACK_IMPORTED_MODULE_0__["subtract"])(this._date, parseInt(val, 10), mapUnitOfTime(period));
            return this;
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(val)) {
            this._date = Object(_index__WEBPACK_IMPORTED_MODULE_0__["subtract"])(this._date, val, mapUnitOfTime(period));
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isObject"])(val)) {
            var _mapped_2 = mapMomentInputObject(val);
            Object.keys(_mapped_2)
                .forEach(function (key) { return Object(_index__WEBPACK_IMPORTED_MODULE_0__["subtract"])(_this._date, _mapped_2[key], key); });
        }
        return this;
    };
    Khronos.prototype.get = function (period) {
        if (period === 'dayOfYear') {
            return this.dayOfYear();
        }
        var unit = mapUnitOfTime(period);
        switch (unit) {
            case 'year':
                return this.year();
            case 'month':
                return this.month();
            // | 'week'
            case 'date':
                return this.date();
            case 'day':
                return this.day();
            case 'hours':
                return this.hours();
            case 'minutes':
                return this.minutes();
            case 'seconds':
                return this.seconds();
            case 'milliseconds':
                return this.milliseconds();
            case 'week':
                return this.week();
            case 'isoWeek':
                return this.isoWeek();
            case 'weekYear':
                return this.weekYear();
            case 'isoWeekYear':
                return this.isoWeekYear();
            case 'weekday':
                return this.weekday();
            case 'isoWeekday':
                return this.isoWeekday();
            case 'quarter':
                return this.quarter();
            default:
                throw new Error("Unknown moment.get('" + period + "')");
        }
    };
    Khronos.prototype.set = function (period, input) {
        var _this = this;
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isString"])(period)) {
            var unit = mapUnitOfTime(period);
            switch (unit) {
                case 'year':
                    return this.year(input);
                case 'month':
                    return this.month(input);
                // | 'week'
                case 'day':
                    return this.day(input);
                case 'date':
                    return this.date(input);
                case 'hours':
                    return this.hours(input);
                case 'minutes':
                    return this.minutes(input);
                case 'seconds':
                    return this.seconds(input);
                case 'milliseconds':
                    return this.milliseconds(input);
                case 'week':
                    return this.week(input);
                case 'isoWeek':
                    return this.isoWeek(input);
                case 'weekYear':
                    return this.weekYear(input);
                case 'isoWeekYear':
                    return this.isoWeekYear(input);
                case 'weekday':
                    return this.weekday(input);
                case 'isoWeekday':
                    return this.isoWeekday(input);
                case 'quarter':
                    return this.quarter(input);
                default:
                    throw new Error("Unknown moment.get('" + period + "')");
            }
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isObject"])(period)) {
            var _mapped_3 = mapMomentInputObject(period);
            Object.keys(_mapped_3)
                .sort(function (a, b) {
                return _unitsPriority[a] - _unitsPriority[b];
            })
                .forEach(function (key) { return _this.set(key, _mapped_3[key]); });
        }
        return this;
    };
    Khronos.prototype.toString = function () {
        return this.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    };
    Khronos.prototype.toISOString = function () {
        if (!this.isValid()) {
            return null;
        }
        if (Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(this._date, true) < 0 || Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(this._date, true) > 9999) {
            return this.format('YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        }
        return this.format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    };
    Khronos.prototype.inspect = function () {
        throw new Error('TODO: implement');
    };
    Khronos.prototype.toJSON = function () {
        return this.toISOString();
    };
    Khronos.prototype.toDate = function () {
        return new Date(this.valueOf());
    };
    Khronos.prototype.toObject = function () {
        return {
            // years: getFullYear(this._date, this._isUTC),
            // months: getMonth(this._date, this._isUTC),
            year: Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(this._date, this._isUTC),
            month: Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(this._date, this._isUTC),
            date: Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getDate"])(this._date, this._isUTC),
            hours: Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getHours"])(this._date, this._isUTC),
            minutes: Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMinutes"])(this._date, this._isUTC),
            seconds: Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getSeconds"])(this._date, this._isUTC),
            milliseconds: Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMilliseconds"])(this._date, this._isUTC)
        };
    };
    Khronos.prototype.toArray = function () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    };
    // Dates boolean algebra
    // Dates boolean algebra
    Khronos.prototype.isAfter = 
    // Dates boolean algebra
    function (date, unit) {
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return Object(_utils_date_compare__WEBPACK_IMPORTED_MODULE_9__["isAfter"])(this._date, date.toDate(), _unit);
    };
    Khronos.prototype.isBefore = function (date, unit) {
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return Object(_utils_date_compare__WEBPACK_IMPORTED_MODULE_9__["isBefore"])(this.toDate(), date.toDate(), _unit);
    };
    Khronos.prototype.isBetween = function (from, to, unit, inclusivity) {
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return Object(_utils_date_compare__WEBPACK_IMPORTED_MODULE_9__["isBetween"])(this.toDate(), from.toDate(), to.toDate(), _unit, inclusivity);
    };
    Khronos.prototype.isSame = function (date, unit) {
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return Object(_utils_date_compare__WEBPACK_IMPORTED_MODULE_9__["isSame"])(this._date, date.toDate(), _unit);
    };
    Khronos.prototype.isSameOrAfter = function (date, unit) {
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return Object(_utils_date_compare__WEBPACK_IMPORTED_MODULE_9__["isSameOrAfter"])(this._date, date.toDate(), _unit);
    };
    Khronos.prototype.isSameOrBefore = function (date, unit) {
        var _unit = unit ? mapUnitOfTime(unit) : void 0;
        return Object(_utils_date_compare__WEBPACK_IMPORTED_MODULE_9__["isSameOrBefore"])(this._date, date.toDate(), _unit);
    };
    Khronos.prototype.isValid = function () {
        return Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isDateValid"])(this._date);
    };
    Khronos.prototype.valueOf = function () {
        return this._date.valueOf() - ((this._offset || 0) * 60000);
    };
    Khronos.prototype.unix = function () {
        // return getUnixTime(this._date);
        return Math.floor(this.valueOf() / 1000);
    };
    Khronos.prototype.utcOffset = function (b, keepLocalTime) {
        var _config = this._toConfig();
        if (!b && b !== 0) {
            return Object(_units_offset__WEBPACK_IMPORTED_MODULE_7__["getUTCOffset"])(this._date, _config);
        }
        this._date = Object(_units_offset__WEBPACK_IMPORTED_MODULE_7__["setUTCOffset"])(this._date, b, keepLocalTime, false, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    };
    Khronos.prototype.utc = function (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    };
    Khronos.prototype.local = function (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(Object(_units_offset__WEBPACK_IMPORTED_MODULE_7__["getDateOffset"])(this._date), 'm');
            }
        }
        return this;
    };
    Khronos.prototype.parseZone = function (input) {
        var _config = this._toConfig();
        this._date = Object(_units_offset__WEBPACK_IMPORTED_MODULE_7__["setOffsetToParsedOffset"])(this._date, input, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    };
    Khronos.prototype.hasAlignedHourOffset = function (input) {
        return Object(_units_offset__WEBPACK_IMPORTED_MODULE_7__["hasAlignedHourOffset"])(this._date, input ? input._date : void 0);
    };
    Khronos.prototype.isDST = function () {
        return Object(_units_offset__WEBPACK_IMPORTED_MODULE_7__["isDaylightSavingTime"])(this._date);
    };
    Khronos.prototype.isLocal = function () {
        return !this._isUTC;
    };
    Khronos.prototype.isUtcOffset = function () {
        return this._isUTC;
    };
    Khronos.prototype.isUTC = function () {
        return this.isUtc();
    };
    Khronos.prototype.isUtc = function () {
        return this._isUTC && this._offset === 0;
    };
    // Timezone
    // Timezone
    Khronos.prototype.zoneAbbr = 
    // Timezone
    function () {
        return Object(_units_timezone__WEBPACK_IMPORTED_MODULE_17__["getZoneAbbr"])(this._isUTC);
    };
    Khronos.prototype.zoneName = function () {
        return Object(_units_timezone__WEBPACK_IMPORTED_MODULE_17__["getZoneName"])(this._isUTC);
    };
    Khronos.prototype.year = function (year) {
        if (!year && year !== 0) {
            return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(this._date, this._isUTC);
        }
        this._date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["setFullYear"])(this._date, year));
        return this;
    };
    Khronos.prototype.weekYear = function (val) {
        if (!val && val !== 0) {
            return Object(_units_week_year__WEBPACK_IMPORTED_MODULE_13__["getWeekYear"])(this._date, this._locale, this.isUTC());
        }
        var date = Object(_units_week_year__WEBPACK_IMPORTED_MODULE_13__["getSetWeekYear"])(this._date, val, this._locale, this.isUTC());
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isDate"])(date)) {
            this._date = date;
        }
        return this;
    };
    Khronos.prototype.isoWeekYear = function (val) {
        if (!val && val !== 0) {
            return Object(_units_week_year__WEBPACK_IMPORTED_MODULE_13__["getISOWeekYear"])(this._date, this.isUTC());
        }
        var date = Object(_units_week_year__WEBPACK_IMPORTED_MODULE_13__["getSetISOWeekYear"])(this._date, val, this.isUtc());
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isDate"])(date)) {
            this._date = date;
        }
        return this;
    };
    Khronos.prototype.isLeapYear = function () {
        return Object(_units_year__WEBPACK_IMPORTED_MODULE_8__["isLeapYear"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(this.toDate(), this.isUTC()));
    };
    Khronos.prototype.month = function (month) {
        if (!month && month !== 0) {
            return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(this._date, this._isUTC);
        }
        var _month = month;
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isString"])(month)) {
            var locale = this._locale || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_20__["getLocale"])();
            _month = locale.monthsParse(month);
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(_month)) {
            this._date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["setMonth"])(this._date, _month, this._isUTC));
        }
        return this;
    };
    Khronos.prototype.hour = function (hours) {
        return this.hours(hours);
    };
    Khronos.prototype.hours = function (hours) {
        if (!hours && hours !== 0) {
            return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getHours"])(this._date, this._isUTC);
        }
        this._date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["setHours"])(this._date, hours, this._isUTC));
        return this;
    };
    Khronos.prototype.minute = function (minutes) {
        return this.minutes(minutes);
    };
    Khronos.prototype.minutes = function (minutes) {
        if (!minutes && minutes !== 0) {
            return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMinutes"])(this._date, this._isUTC);
        }
        this._date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["setMinutes"])(this._date, minutes, this._isUTC));
        return this;
    };
    Khronos.prototype.second = function (seconds) {
        return this.seconds(seconds);
    };
    Khronos.prototype.seconds = function (seconds) {
        if (!seconds && seconds !== 0) {
            return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getSeconds"])(this._date, this._isUTC);
        }
        this._date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["setSeconds"])(this._date, seconds, this._isUTC));
        return this;
    };
    Khronos.prototype.millisecond = function (ms) {
        return this.milliseconds(ms);
    };
    Khronos.prototype.milliseconds = function (seconds) {
        if (!seconds && seconds !== 0) {
            return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMilliseconds"])(this._date, this._isUTC);
        }
        this._date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["setMilliseconds"])(this._date, seconds, this._isUTC));
        return this;
    };
    Khronos.prototype.date = function (date) {
        if (!date && date !== 0) {
            return Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getDate"])(this._date, this._isUTC);
        }
        this._date = Object(_create_clone__WEBPACK_IMPORTED_MODULE_3__["cloneDate"])(Object(_utils_date_setters__WEBPACK_IMPORTED_MODULE_2__["setDate"])(this._date, date, this._isUTC));
        return this;
    };
    Khronos.prototype.day = function (input) {
        if (!input && input !== 0) {
            return Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["getDayOfWeek"])(this._date, this._isUTC);
        }
        var _input = input;
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isString"])(input)) {
            _input = Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["parseWeekday"])(input, this._locale);
        }
        if (Object(_utils_type_checks__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(_input)) {
            this._date = Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["setDayOfWeek"])(this._date, _input, this._locale, this._isUTC);
        }
        return this;
    };
    Khronos.prototype.weekday = function (val) {
        if (!val && val !== 0) {
            return Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["getLocaleDayOfWeek"])(this._date, this._locale, this._isUTC);
        }
        this._date = Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["setLocaleDayOfWeek"])(this._date, val, { locale: this._locale, isUTC: this._isUTC });
        return this;
    };
    Khronos.prototype.isoWeekday = function (val) {
        if (!val && val !== 0) {
            return Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["getISODayOfWeek"])(this._date);
        }
        this._date = Object(_units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["setISODayOfWeek"])(this._date, val);
        return this;
    };
    Khronos.prototype.dayOfYear = function (val) {
        if (!val && val !== 0) {
            return Object(_units_day_of_year__WEBPACK_IMPORTED_MODULE_16__["getDayOfYear"])(this._date);
        }
        this._date = Object(_units_day_of_year__WEBPACK_IMPORTED_MODULE_16__["setDayOfYear"])(this._date, val);
        return this;
    };
    Khronos.prototype.week = function (input) {
        if (!input && input !== 0) {
            return Object(_units_week__WEBPACK_IMPORTED_MODULE_12__["getWeek"])(this._date, this._locale);
        }
        this._date = Object(_units_week__WEBPACK_IMPORTED_MODULE_12__["setWeek"])(this._date, input, this._locale);
        return this;
    };
    Khronos.prototype.weeks = function (input) {
        return this.week(input);
    };
    Khronos.prototype.isoWeek = function (val) {
        if (!val && val !== 0) {
            return Object(_units_week__WEBPACK_IMPORTED_MODULE_12__["getISOWeek"])(this._date);
        }
        this._date = Object(_units_week__WEBPACK_IMPORTED_MODULE_12__["setISOWeek"])(this._date, val);
        return this;
    };
    Khronos.prototype.isoWeeks = function (val) {
        return this.isoWeek(val);
    };
    Khronos.prototype.weeksInYear = function () {
        return Object(_units_week_year__WEBPACK_IMPORTED_MODULE_13__["getWeeksInYear"])(this._date, this._isUTC, this._locale);
    };
    Khronos.prototype.isoWeeksInYear = function () {
        return Object(_units_week_year__WEBPACK_IMPORTED_MODULE_13__["getISOWeeksInYear"])(this._date, this._isUTC);
    };
    Khronos.prototype.daysInMonth = function () {
        return Object(_units_month__WEBPACK_IMPORTED_MODULE_10__["daysInMonth"])(Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getFullYear"])(this._date, this._isUTC), Object(_utils_date_getters__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(this._date, this._isUTC));
    };
    Khronos.prototype.quarter = function (val) {
        if (!val && val !== 0) {
            return Object(_units_quarter__WEBPACK_IMPORTED_MODULE_15__["getQuarter"])(this._date, this._isUTC);
        }
        this._date = Object(_units_quarter__WEBPACK_IMPORTED_MODULE_15__["setQuarter"])(this._date, val, this._isUTC);
        return this;
    };
    Khronos.prototype.quarters = function (val) {
        return this.quarter(val);
    };
    Khronos.prototype.startOf = function (period) {
        var _per = mapUnitOfTime(period);
        this._date = Object(_utils_start_end_of__WEBPACK_IMPORTED_MODULE_14__["startOf"])(this._date, _per, this._isUTC);
        return this;
    };
    return Khronos;
}());

//# sourceMappingURL=chain.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/chronos/units/timezone.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/chronos/units/timezone.js ***!
  \**************************************************************/
/*! exports provided: getZoneAbbr, getZoneName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneAbbr", function() { return getZoneAbbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneName", function() { return getZoneName; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/ngx-bootstrap/chronos/format/format.js");

// todo: add support for timezones
// FORMATTING
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('z', null, null, function (date, opts) {
    return opts.isUTC ? 'UTC' : '';
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('zz', null, null, function (date, opts) {
    return opts.isUTC ? 'Coordinated Universal Time' : '';
});
// MOMENTS
function getZoneAbbr(isUTC) {
    return isUTC ? 'UTC' : '';
}
function getZoneName(isUTC) {
    return isUTC ? 'Coordinated Universal Time' : '';
}
//# sourceMappingURL=timezone.js.map

/***/ }),

/***/ "./src/app/core/enrollment-list/enrollment-list.class.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/enrollment-list/enrollment-list.class.ts ***!
  \***************************************************************/
/*! exports provided: defaultViewSelector, EnrollmentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultViewSelector", function() { return defaultViewSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentList", function() { return EnrollmentList; });
/* harmony import */ var _base_base_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base.class */ "./src/app/core/base/base.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Define for constant string
var defaultViewSelector = 'View All';
var EnrollmentList = /** @class */ (function (_super) {
    __extends(EnrollmentList, _super);
    function EnrollmentList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Valid values: EnrollmentStatus enums + "All"
        _this.viewTypeSelector = defaultViewSelector;
        return _this;
    }
    /**
     * Filters all expandable rows, making sure changes propagate up to the top
     * level rows. Just pass in a function which will filter, with its only
     * parameter being the ExpandableRow/SiteAccess
     *
     * @private
     * @param {(sa: SiteAccess) => boolean} fn Takes a SiteAccess as a parameter
     * @memberof ApplEnrollmentListComponent
     */
    EnrollmentList.prototype.deepSearch = function (fn) {
        // Clone the source data so our changes do not wind up persisting in the underlying data
        var cloned = this.rowItems.map(function (x) { return Object.assign({}, x); });
        this.data = cloned.map(function (enrollmentRow) {
            // Hide all subrows that don't match search results.
            enrollmentRow.expandableRows = enrollmentRow.expandableRows
                .filter(function (expandableRow) {
                return fn(expandableRow);
            });
            return enrollmentRow;
        }).filter(function (enrollmentRow) {
            // Only show rows with search results
            return enrollmentRow.expandableRows.length;
        });
    };
    // Searches based on the expandable rows, per business requirements (i.e. site name, NOT collection name!)
    EnrollmentList.prototype.searchSites = function (phrase) {
        if (phrase.length === 0) {
            return this.data = this.rowItems;
        }
        this.deepSearch(function (expandableRow) {
            return expandableRow.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
        });
    };
    // Searches based on the top level row (i.e. user name)
    EnrollmentList.prototype.searchUsers = function (phrase) {
        this.data = this.rowItems.filter(function (x) {
            return x.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
        });
    };
    /**
     * Can be overwritten by EnrollmentList, but by default will reverse rowItems
     */
    EnrollmentList.prototype.sort = function () {
        this.rowItems.reverse();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], EnrollmentList.prototype, "rowItems", void 0);
    return EnrollmentList;
}(_base_base_class__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/modules/applicant/applicant-routing.modules.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/applicant/applicant-routing.modules.ts ***!
  \****************************************************************/
/*! exports provided: routes, ApplicantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantRoutingModule", function() { return ApplicantRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_applicant_dashboard_applicant_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/applicant-dashboard/applicant-dashboard.component */ "./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.ts");
/* harmony import */ var _pages_applicant_contact_applicant_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/applicant-contact/applicant-contact.component */ "./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.ts");
/* harmony import */ var _pages_applicant_access_acceptance_applicant_access_acceptance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/applicant-access-acceptance/applicant-access-acceptance.component */ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.ts");
/* harmony import */ var _pages_applicant_professional_applicant_professional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/applicant-professional/applicant-professional.component */ "./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.ts");
/* harmony import */ var _pages_applicant_review_page_applicant_review_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/applicant-review-page/applicant-review-page.component */ "./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.ts");
/* harmony import */ var _pages_pharma_net_page_pharma_net_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pharma-net-page/pharma-net-page.component */ "./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.ts");
/* harmony import */ var _pages_complete_submission_complete_submission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/complete-submission/complete-submission.component */ "./src/app/modules/applicant/pages/complete-submission/complete-submission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'dashboard',
        component: _pages_applicant_dashboard_applicant_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ApplicantDashboardComponent"],
    },
    {
        path: 'contact',
        component: _pages_applicant_contact_applicant_contact_component__WEBPACK_IMPORTED_MODULE_3__["ApplicantContactComponent"],
    },
    {
        path: 'access-acceptance',
        component: _pages_applicant_access_acceptance_applicant_access_acceptance_component__WEBPACK_IMPORTED_MODULE_4__["ApplicantAccessAcceptanceComponent"],
    },
    {
        path: 'pharma-net',
        component: _pages_pharma_net_page_pharma_net_page_component__WEBPACK_IMPORTED_MODULE_7__["PharmaNetPageComponent"]
    },
    {
        path: 'complete-submission',
        component: _pages_complete_submission_complete_submission_component__WEBPACK_IMPORTED_MODULE_8__["CompleteSubmissionComponent"],
    },
    {
        path: 'professional',
        component: _pages_applicant_professional_applicant_professional_component__WEBPACK_IMPORTED_MODULE_5__["ApplicantProfessionalComponent"],
    },
    {
        path: 'review',
        component: _pages_applicant_review_page_applicant_review_page_component__WEBPACK_IMPORTED_MODULE_6__["ApplicantReviewPageComponent"]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var ApplicantRoutingModule = /** @class */ (function () {
    function ApplicantRoutingModule() {
    }
    ApplicantRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ApplicantRoutingModule);
    return ApplicantRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/applicant/applicant.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/applicant/applicant.module.ts ***!
  \*******************************************************/
/*! exports provided: ApplicantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantModule", function() { return ApplicantModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_applicant_dashboard_applicant_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/applicant-dashboard/applicant-dashboard.component */ "./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.ts");
/* harmony import */ var _applicant_routing_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applicant-routing.modules */ "./src/app/modules/applicant/applicant-routing.modules.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _pages_applicant_contact_applicant_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/applicant-contact/applicant-contact.component */ "./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.ts");
/* harmony import */ var _pages_applicant_professional_applicant_professional_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/applicant-professional/applicant-professional.component */ "./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.ts");
/* harmony import */ var _pages_applicant_access_acceptance_applicant_access_acceptance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/applicant-access-acceptance/applicant-access-acceptance.component */ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_applicant_breadcrumbs_applicant_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/applicant-breadcrumbs/applicant-breadcrumbs.component */ "./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.ts");
/* harmony import */ var _components_appl_enrollment_list_appl_enrollment_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/appl-enrollment-list/appl-enrollment-list.component */ "./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.ts");
/* harmony import */ var _components_appl_enrollment_row_appl_enrollment_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/appl-enrollment-row/appl-enrollment-row.component */ "./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _components_app_enrollment_progress_row_app_enrollment_progress_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/app-enrollment-progress-row/app-enrollment-progress-row.component */ "./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _pages_applicant_review_page_applicant_review_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/applicant-review-page/applicant-review-page.component */ "./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.ts");
/* harmony import */ var _components_pharma_net_access_list_pharma_net_access_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pharma-net-access-list/pharma-net-access-list.component */ "./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.ts");
/* harmony import */ var _pages_pharma_net_page_pharma_net_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/pharma-net-page/pharma-net-page.component */ "./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.ts");
/* harmony import */ var _components_pharma_net_access_row_pharma_net_access_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pharma-net-access-row/pharma-net-access-row.component */ "./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.ts");
/* harmony import */ var _components_add_pharma_net_organization_add_pharma_net_organization_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/add-pharma-net-organization/add-pharma-net-organization.component */ "./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.ts");
/* harmony import */ var _pages_complete_submission_complete_submission_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/complete-submission/complete-submission.component */ "./src/app/modules/applicant/pages/complete-submission/complete-submission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ApplicantModule = /** @class */ (function () {
    function ApplicantModule() {
    }
    ApplicantModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _applicant_routing_modules__WEBPACK_IMPORTED_MODULE_3__["ApplicantRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["AlertModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
            ],
            declarations: [
                _pages_applicant_dashboard_applicant_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ApplicantDashboardComponent"],
                _pages_applicant_contact_applicant_contact_component__WEBPACK_IMPORTED_MODULE_5__["ApplicantContactComponent"],
                _pages_applicant_professional_applicant_professional_component__WEBPACK_IMPORTED_MODULE_6__["ApplicantProfessionalComponent"],
                _pages_applicant_access_acceptance_applicant_access_acceptance_component__WEBPACK_IMPORTED_MODULE_7__["ApplicantAccessAcceptanceComponent"],
                _components_applicant_breadcrumbs_applicant_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__["ApplicantBreadcrumbsComponent"],
                _components_appl_enrollment_list_appl_enrollment_list_component__WEBPACK_IMPORTED_MODULE_10__["ApplEnrollmentListComponent"],
                _components_appl_enrollment_row_appl_enrollment_row_component__WEBPACK_IMPORTED_MODULE_11__["ApplEnrollmentRowComponent"],
                _components_app_enrollment_progress_row_app_enrollment_progress_row_component__WEBPACK_IMPORTED_MODULE_13__["AppEnrollmentProgressRowComponent"],
                _pages_applicant_review_page_applicant_review_page_component__WEBPACK_IMPORTED_MODULE_15__["ApplicantReviewPageComponent"],
                _components_pharma_net_access_list_pharma_net_access_list_component__WEBPACK_IMPORTED_MODULE_16__["PharmaNetAccessListComponent"],
                _pages_pharma_net_page_pharma_net_page_component__WEBPACK_IMPORTED_MODULE_17__["PharmaNetPageComponent"],
                _components_pharma_net_access_row_pharma_net_access_row_component__WEBPACK_IMPORTED_MODULE_18__["PharmaNetAccessRowComponent"],
                _components_add_pharma_net_organization_add_pharma_net_organization_component__WEBPACK_IMPORTED_MODULE_19__["AddPharmaNetOrganizationComponent"],
                _pages_complete_submission_complete_submission_component__WEBPACK_IMPORTED_MODULE_20__["CompleteSubmissionComponent"]
            ]
        })
    ], ApplicantModule);
    return ApplicantModule;
}());



/***/ }),

/***/ "./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"openModal()\">\n    Find and Add an Organization <i class=\"fa fa-plus-square\"></i>\n</button>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Find and Add an Organization</h4>\n\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n\n  <div class=\"modal-body\">\n\n    <div class=\"row\">\n      <div class=\"col\">\n\n        <label  class=\"has-float-label\">\n          <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"orgName\" name=\"orgName\" placeholder=\" \" [(ngModel)]=\"searchQuery.orgName\" tabindex=\"1\">\n          <span>Organization Name</span>\n        </label>\n\n        <label  class=\"has-float-label\">\n          <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"orgCity\" name=\"orgCity\" placeholder=\" \" [(ngModel)]=\"searchQuery.orgCity\" tabindex=\"1\">\n          <span>City (optional)</span>\n        </label>\n\n      </div>\n      <div class=\"col\">\n          <label class=\"has-float-label mx-2\">\n              <select class=\"form-control\" (input)='updateOrgType($event.target.value)'>\n                <option name='orgTypeSelect' value=\"Select Type\">Select Type</option>\n                <option *ngFor=\"let types of orgTypes\"\n                        value=\"{{types}}\">\n                  {{types}}\n                </option>\n              </select>\n              <span>Type (optional)</span>\n            </label>\n      </div>\n    </div>\n\n\n    <div class=\"search-wrapper\">\n      <ul class=\"list-group list-group-flush\" *ngIf='showSearchResults'>\n        <li class='list-group-item' *ngFor=\"let org of searchResults\" (click)='org.isSelected = !org.isSelected'>\n            <div class=\"checkbox checkbox-success checkbox-inline\">\n                <input class=\"input-lg\" id=\"selectOrg_{{org.objectId}}\" type=\"checkbox\" [(ngModel)]='org.isSelected' (click)='$event.stopPropagation()'>\n                <label class=\"\" for=\"selectOrg_{{org.objectId}}\" (click)='$event.stopPropagation()' class='ml-1'>{{org.title}}</label>\n            </div>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" tabindex=\"1\" (click)=\"find()\" *ngIf='!showSearchResults'>\n          Find Organization\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default\" tabindex=\"1\" (click)=\"cancel()\" *ngIf='showSearchResults'>\n          Cancel\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default\" tabindex=\"1\" (click)=\"addOrg()\" *ngIf='showSearchResults'>\n          Add Organization\n      </button>\n  </div>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-wrapper {\n  max-height: 300px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddPharmaNetOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPharmaNetOrganizationComponent", function() { return AddPharmaNetOrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_organizations_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/organizations.model */ "./src/app/models/organizations.model.ts");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _models_organization_access_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/organization-access.model */ "./src/app/models/organization-access.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPharmaNetOrganizationComponent = /** @class */ (function () {
    function AddPharmaNetOrganizationComponent(modalService, dataService) {
        this.modalService = modalService;
        this.dataService = dataService;
        this.searchQuery = {};
        this.showSearchResults = false;
        this.searchResults = [];
    }
    AddPharmaNetOrganizationComponent.prototype.ngOnInit = function () {
        this.orgTypes = Object.keys(_models_organizations_model__WEBPACK_IMPORTED_MODULE_2__["PharmaNetOrgTypes"]).map(function (x) { return _models_organizations_model__WEBPACK_IMPORTED_MODULE_2__["PharmaNetOrgTypes"][x]; });
    };
    AddPharmaNetOrganizationComponent.prototype.openModal = function () {
        this.reset();
        this.modalRef = this.modalService.show(this.modalTemplate);
    };
    AddPharmaNetOrganizationComponent.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    AddPharmaNetOrganizationComponent.prototype.find = function () {
        var _this = this;
        // ? should we abstract to dataService method
        var results = this.dataService.organizations.filter(function (org) {
            if (_this.searchQuery.orgName) {
                return org.title.toLowerCase().includes(_this.searchQuery.orgName.toLowerCase());
            }
            return true;
        })
            .filter(function (org) {
            // filter out any orgs that have already been added
            return !_this.dataService.user.allOrganizations().includes(org);
        })
            .filter(function (org) {
            if (_this.searchQuery.orgCity) {
                return org.city.toLowerCase().includes(_this.searchQuery.orgCity.toLowerCase());
            }
            return true;
        })
            .filter(function (org) {
            if (_this.searchQuery.orgType) {
                var target = org.type.toLowerCase();
                if (_this.searchQuery.orgType === 'HA') {
                    //Since 'HA', short for health authority, is contained in 'pHArmacy',
                    //we have to avoid searching for HA and getting pharmacies
                    target = target.replace('pharmacy', '');
                }
                return target.includes(_this.searchQuery.orgType.toLowerCase());
            }
            return true;
        })
            .map(function (org) {
            // Add a boolean we can use for the checkboxes, used in this component only.
            org.isSelected = false;
            return org;
        });
        this.showSearchResults = results.length > 0;
        this.searchResults = results;
    };
    AddPharmaNetOrganizationComponent.prototype.cancel = function () {
        this.reset();
    };
    AddPharmaNetOrganizationComponent.prototype.reset = function () {
        this.showSearchResults = false;
        this.searchResults = [];
        this.searchQuery = {};
    };
    AddPharmaNetOrganizationComponent.prototype.addOrg = function () {
        var _this = this;
        var selected = this.searchResults.filter(function (x) { return x.isSelected; });
        // Create OrgAccess for each
        selected.map(function (org) {
            var oa = new _models_organization_access_model__WEBPACK_IMPORTED_MODULE_4__["OrganizationAccess"](_this.dataService.user, org);
            _this.dataService.organizationAccess.push(oa);
            _this.dataService.user.organizationAccess.push(oa);
            org.organizationAccess.push(oa);
        });
        this.closeModal();
    };
    AddPharmaNetOrganizationComponent.prototype.updateOrgType = function (orgType) {
        // filter out the default 'Select type' placeholder value
        if (this.orgTypes.includes(orgType)) {
            this.searchQuery.orgType = orgType;
        }
        else {
            this.searchQuery.orgType = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('template'),
        __metadata("design:type", Object)
    ], AddPharmaNetOrganizationComponent.prototype, "modalTemplate", void 0);
    AddPharmaNetOrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-add-pharma-net-organization',
            template: __webpack_require__(/*! ./add-pharma-net-organization.component.html */ "./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.html"),
            styles: [__webpack_require__(/*! ./add-pharma-net-organization.component.scss */ "./src/app/modules/applicant/components/add-pharma-net-organization/add-pharma-net-organization.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _services_prime_data_service__WEBPACK_IMPORTED_MODULE_3__["PrimeDataService"]])
    ], AddPharmaNetOrganizationComponent);
    return AddPharmaNetOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='d-flex justify-content-between progress-row-content' [@growVertical] *ngIf=\"open\">\n\n  <div class=\"col\">\n    <i class=\"fa fa-quote-left fa-2x fa-pull-left\" aria-hidden=\"true\"></i>\n    <p><em>{{description}}</em></p>\n    <p><small>Submitted Date: {{ data ? data.formatDateShort(data.requestDate) : 'n/a'}}</small></p>\n  </div>\n\n  <div class=\"col\">\n    <div class=\"progressSlider\">\n      <!-- Labels -->\n      <div class=\"progressSlider--text\">\n        <div class=\"progressItem\">\n          <div class=\"progressText\">Verifier</div>\n        </div>\n        <div class=\"progressItem\">\n          <div class=\"progressText\">PharmaNet user</div>\n        </div>\n        <div class=\"progressItem\">\n          <div class=\"progressText\">MoH</div>\n        </div>\n        <div class=\"progressItem active\">\n          <div class=\"progressText\">Provisioner</div>\n        </div>\n      </div>\n\n      <!-- The progress bar line / dots -->\n      <div class=\"progressSlider--bar\">\n        <div class=\"progressBarMarker\"\n             *ngFor=\"let x of iterableNumberOfSteps\">\n        </div>\n        <div class=\"progressSlider--dot\"\n             [style.left]=\"activeStepIndex * 33 + '%'\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"isAccepted\" class=\"col d-inline-flex flex-column access-reason\">\n    <!-- New enrollments -->\n    <select *ngIf=\"!disableReason\" id=\"reasonForAccess\"\n            class=\"form-control drop-dl-box-15 color\"\n            [(ngModel)]=\"accessReason\">\n      <option value=\"Please Select\" selected>Please Select</option>\n      <option *ngFor=\"let reason of accessReasons\" [value]=\"reason\">{{reason}}</option>\n    </select>\n    <select *ngIf=\"disableReason\" id=\"reasonForAccess\"\n            class=\"form-control drop-dl-box-15 color\"\n            [value]=\"accessReason\"\n            disabled>\n      <option [value]=\"accessReason\" selected>{{accessReason}}</option>\n    </select>\n  </div>\n\n  <div *ngIf=\"isDeclined\" class=\"col d-inline-flex flex-column access-reason\">\n    <!-- New enrollments -->\n    <select *ngIf=\"!disableReason\" id=\"reasonForAccess\"\n            class=\"form-control drop-dl-box-15 color\"\n            [(ngModel)]=\"declineReason\">\n      <option value=\"Please Select\" selected>Please Select</option>\n      <option *ngFor=\"let reason of declineReasons\" [value]=\"reason\">{{reason}}</option>\n    </select>\n    <select *ngIf=\"disableReason\" id=\"reasonForAccess\"\n            class=\"form-control drop-dl-box-15 color\"\n            [value]=\"declineReason\"\n            disabled>\n      <option [value]=\"declineReason\" selected>{{declineReason}}</option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: #ced4da;\n  width: 100%; }\n\n.progressSlider {\n  padding-top: 1em;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n\n.progressItem {\n  display: inline-flex;\n  position: relative; }\n\np:first-of-type, .fa-quote-left {\n  padding-top: 1rem;\n  margin-bottom: 0; }\n\n.progressSlider--text {\n  display: flex;\n  flex-basis: 100%;\n  justify-content: space-between; }\n\n.progressSlider--bar {\n  display: flex;\n  position: relative;\n  flex-basis: calc(100% - 20px);\n  justify-content: space-between;\n  background: #adb5bd;\n  height: 2px;\n  margin: 0.75em auto; }\n\n.progressSlider--dot {\n  display: block;\n  width: 15px;\n  height: 15px;\n  background: #00800080;\n  position: absolute;\n  -webkit-transform: translateY(-50%) translateX(-20%);\n          transform: translateY(-50%) translateX(-20%);\n  left: 0;\n  transition: 0.3s;\n  background: #6c757d;\n  border-radius: 100%; }\n\n.progressBarMarker {\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n  background: #6c757d;\n  -webkit-transform: translateY(-33%);\n          transform: translateY(-33%); }\n\ndiv.access-reason {\n  -ms-grid-row-align: center;\n      align-self: center; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AppEnrollmentProgressRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEnrollmentProgressRowComponent", function() { return AppEnrollmentProgressRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_enrollment_progress_row_enrollment_progress_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/enrollment-progress-row/enrollment-progress-row.component */ "./src/app/core/enrollment-progress-row/enrollment-progress-row.component.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppEnrollmentProgressRowComponent = /** @class */ (function (_super) {
    __extends(AppEnrollmentProgressRowComponent, _super);
    function AppEnrollmentProgressRowComponent() {
        var _this = _super.call(this) || this;
        _this.disableReason = true;
        _this.onPendingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    AppEnrollmentProgressRowComponent.prototype.ngOnInit = function () {
        if (this.data) {
            this._data = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(this.data);
        }
    };
    Object.defineProperty(AppEnrollmentProgressRowComponent.prototype, "accessReasons", {
        get: function () {
            var list = Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_3__["AccessReasons"]);
            return list.map(function (x) { return _models_sites_model__WEBPACK_IMPORTED_MODULE_3__["AccessReasons"][x]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppEnrollmentProgressRowComponent.prototype, "accessReason", {
        get: function () {
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this._data.accessReason) || 0 === this._data.accessReason.length) {
                return 'Please Select';
            }
            return this._data.accessReason;
        },
        set: function (reason) {
            this._data.pendingChanges = true;
            this._data.accessReason = reason;
            this.onPendingChange.emit(this._data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppEnrollmentProgressRowComponent.prototype, "declineReasons", {
        get: function () {
            var list = Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_3__["DeclinedReasons"]);
            return list.map(function (x) { return _models_sites_model__WEBPACK_IMPORTED_MODULE_3__["DeclinedReasons"][x]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppEnrollmentProgressRowComponent.prototype, "declineReason", {
        get: function () {
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this._data.declinedReason) || 0 === this._data.declinedReason.length) {
                return 'Please Select';
            }
            return this._data.declinedReason;
        },
        set: function (reason) {
            this._data.pendingChanges = true;
            this._data.declinedReason = reason;
            this.onPendingChange.emit(this._data);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppEnrollmentProgressRowComponent.prototype, "disableReason", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AppEnrollmentProgressRowComponent.prototype, "onPendingChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppEnrollmentProgressRowComponent.prototype, "isDeclined", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppEnrollmentProgressRowComponent.prototype, "isAccepted", void 0);
    AppEnrollmentProgressRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-app-enrollment-progress-row',
            template: __webpack_require__(/*! ./app-enrollment-progress-row.component.html */ "./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.html"),
            styles: [__webpack_require__(/*! ./app-enrollment-progress-row.component.scss */ "./src/app/modules/applicant/components/app-enrollment-progress-row/app-enrollment-progress-row.component.scss")],
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_2__["growVertical"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppEnrollmentProgressRowComponent);
    return AppEnrollmentProgressRowComponent;
}(_core_enrollment_progress_row_enrollment_progress_row_component__WEBPACK_IMPORTED_MODULE_1__["EnrollmentProgressRowComponent"]));



/***/ }),

/***/ "./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"enrollment-list-controls bg-light\">\n  <div>\n    <form class=\"form-inline\">\n      <span class=\"has-float-label\">\n        <input class=\"form-control bg-transparent\" type=\"search\" placeholder=\"Sites\" aria-label=\"Sites\" (input)=\"search($event.target.value)\">\n        <span>Search</span>\n      </span>\n\n      <label class=\"has-float-label mx-2\">\n        <select id=\"enrollmentViewSelector\" class=\"form-control enrollment-view-selector\" [value]=\"viewTypeSelector\" (change)=\"viewTypes($event.target.value)\">\n          <option value=\"View All\">All</option>\n          <option *ngFor=\"let status of EnrollmentStatus\" value=\"{{status}}\">\n            {{status}}\n          </option>\n        </select>\n        <span>View</span>\n      </label>\n\n    </form>\n  </div>\n  <div>\n    <prime-alert inlineBlock='true' *ngIf=\"showSaveMessage\" [@fadeIn] dismissable='' type='success'>Submitted.</prime-alert>\n\n    <button [disabled]=\"!updated\" type=\"button\" class=\"btn btn-default mx-2\" (click)=\"cancel()\">Cancel</button>\n    <button [disabled]=\"!updated\" type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"save()\" [primeLoadingSpinner]=\"loadingSpinner\" >Submit</button>\n  </div>\n</div>\n\n<div class=\"enrollment-item-container\">\n  <div class=\"enrollment-item-inner\">\n    <prime-appl-enrollment-row\n      *ngFor=\"let item of data\"\n      [rowData]=\"item\"\n      (onChange) = \"onChange($event)\"\n      (onRowOpened)=\"rowOpened($event)\">\n    </prime-appl-enrollment-row>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".enrollment-item-container {\n  border-top: none;\n  height: 25rem;\n  overflow-y: scroll; }\n  .enrollment-item-container .enrollment-item-inner {\n    border-right: 2px solid #dee2e6;\n    border-left: 2px solid #dee2e6;\n    border-bottom: 2px solid #dee2e6;\n    min-height: 100%; }\n  .enrollment-list-controls {\n  border: 2px solid #dee2e6;\n  min-height: 4em;\n  padding: 1em;\n  border-bottom: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n  .enrollment-view-selector {\n  min-width: 5em; }\n  .has-float-label + .has-float-label {\n  margin-top: initial; }\n  .has-float-label + .has-float-label select {\n    height: auto; }\n  .controls {\n  flex-basis: 10.5rem;\n  min-width: 10.5rem; }\n  .save-message {\n  display: inline; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ApplEnrollmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplEnrollmentListComponent", function() { return ApplEnrollmentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appl_enrollment_row_appl_enrollment_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appl-enrollment-row/appl-enrollment-row.component */ "./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.ts");
/* harmony import */ var _services_applicant_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/applicant-data.service */ "./src/app/services/applicant-data.service.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
/* harmony import */ var _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/enrollment-list/enrollment-list.class */ "./src/app/core/enrollment-list/enrollment-list.class.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApplEnrollmentListComponent = /** @class */ (function (_super) {
    __extends(ApplEnrollmentListComponent, _super);
    function ApplEnrollmentListComponent(applicantDataService) {
        var _this = _super.call(this) || this;
        _this.applicantDataService = applicantDataService;
        _this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.showSaveMessage = false;
        _this.loadingSpinner = false;
        /* Flag to indicate that information page has been updated */
        _this.updated = false;
        // List of Pending updates
        _this._pendingUpdates = [];
        applicantDataService.$enrollmentViewType.subscribe(function (viewType) {
            _this.viewTypeSelector = viewType;
            _this.viewTypes(viewType);
        });
        return _this;
    }
    /* OnInit implementation */
    ApplEnrollmentListComponent.prototype.ngOnInit = function () {
        if (this.rowItems) {
            this.data = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.rowItems);
        }
    };
    /* OnDestroy implementation */
    ApplEnrollmentListComponent.prototype.ngOnDestroy = function () {
        this.applicantDataService.enrollmentViewTypeSelector = _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_4__["defaultViewSelector"];
    };
    Object.defineProperty(ApplEnrollmentListComponent.prototype, "EnrollmentStatus", {
        // Abstract functions defined by derived class
        //Convert enum to iterable array
        get: function () {
            var allCurrentStatuses;
            if (this.data) {
                allCurrentStatuses = this.data
                    .filter(function (x) { return x.expandableRows.length && x.expandableRows[0].status; })
                    .map(function (x) { return x.expandableRows[0].status; });
            }
            else {
                // If we have no items, then show all
                allCurrentStatuses = Object.keys(_models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"]);
            }
            // Only show statues that are in the currently displayed list in the table
            var list = Object.keys(_models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"]).filter(function (status) {
                return allCurrentStatuses.indexOf(status) !== -1;
            });
            return list.map(function (x) { return _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"][x]; });
        },
        enumerable: true,
        configurable: true
    });
    ApplEnrollmentListComponent.prototype.rowOpened = function (item) {
        this.rowElements.filter(function (x) { return x !== item; })
            .map(function (x) { return x.closeRow(); });
    };
    ApplEnrollmentListComponent.prototype.search = function (phrase) {
        this.deepSearch(phrase);
    };
    // Save button clicked
    ApplEnrollmentListComponent.prototype.save = function () {
        var _this = this;
        this.loadingSpinner = true;
        setTimeout(function () {
            _this.loadingSpinner = false;
            _this.showSaveMessage = true;
            // Change status to 'Provisioning' or 'Declined' based on user action
            _this._pendingUpdates = _this._pendingUpdates.map(function (sa) {
                if (sa.declinedReason) {
                    console.log('DECLINING', sa);
                    sa.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Declined;
                    sa.progress = _models_sites_model__WEBPACK_IMPORTED_MODULE_7__["SiteAccessProgressSteps"].Verifier;
                }
                else if (sa.accessReason) {
                    console.log('ACCEPTING', sa);
                    sa.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Provisioning;
                    sa.progress = _models_sites_model__WEBPACK_IMPORTED_MODULE_7__["SiteAccessProgressSteps"].Provisioner;
                }
                return sa;
            });
            // Close the row but only after updating the UI so user can see the animated change
            setTimeout(function () {
                _this.rowElements.map(function (x) { return x.closeRow(); });
            }, 500);
            _this.onSave.emit(_this._pendingUpdates); //Send list of updates
        }, 3000);
        this.updated = false;
        this.rowItems = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.data);
    };
    // Cancel button clicked
    ApplEnrollmentListComponent.prototype.cancel = function () {
        this.updated = false;
        // Clear pending update list
        while (this._pendingUpdates.length > 0) {
            this._pendingUpdates.pop();
        }
        // Restore original values
        this.data = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.rowItems);
    };
    /**
     * Record changes in a list
     * @param {ApplEnrollmentRowItem} item
     */
    ApplEnrollmentListComponent.prototype.onChange = function (item) {
        var obj = this._pendingUpdates.find(function (sa) { return sa.objectId === item.objectId; });
        if (obj) {
            // Update possible fields that could change
            obj.accessReason = item.accessReason;
            obj.declinedReason = item.declinedReason;
            obj.endDate = item.endDate;
        }
        else {
            // Add to the list
            this._pendingUpdates.push(item);
        }
        this.updated = true;
        this.showSaveMessage = false;
    };
    // PRIVATE
    // NOTE: This doesn't work properly with search. Fine for prototype for now, but will need to be resolved in future.
    ApplEnrollmentListComponent.prototype.viewTypes = function (type) {
        if (type === _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_4__["defaultViewSelector"]) {
            return this.data = this.rowItems;
        }
        this.deepSearch(function (expandableRow) {
            return expandableRow.status.includes(type);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_appl_enrollment_row_appl_enrollment_row_component__WEBPACK_IMPORTED_MODULE_1__["ApplEnrollmentRowComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ApplEnrollmentListComponent.prototype, "rowElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApplEnrollmentListComponent.prototype, "onSave", void 0);
    ApplEnrollmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-enrollment-list',
            template: __webpack_require__(/*! ./appl-enrollment-list.component.html */ "./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.html"),
            styles: [__webpack_require__(/*! ./appl-enrollment-list.component.scss */ "./src/app/modules/applicant/components/appl-enrollment-list/appl-enrollment-list.component.scss")],
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]]
        }),
        __metadata("design:paramtypes", [_services_applicant_data_service__WEBPACK_IMPORTED_MODULE_2__["ApplicantDataService"]])
    ], ApplEnrollmentListComponent);
    return ApplEnrollmentListComponent;
}(_core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_4__["EnrollmentList"]));



/***/ }),

/***/ "./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"rowData\" class=\"enrollment-list-item\" (click)=\"toggleRow()\" [@openStateDisable]=\"openState\">\n\n  <div class=\"enrollment-text-container\">\n    <span class=\"enrollment-text-main\">{{rowData.title}}</span>\n    <prime-info-button\n      class='mx-2'\n      [targetId]=\"rowData.associatedObjectId\"\n      [searchDomain]=\"applicantSearch\">\n    </prime-info-button>\n  </div>\n  <div class=\"enrollment-actions\">\n    <div *ngIf=\"!isDeclinedStatus() && !isDeclined()\" class=\"dates-col\">\n      <span class=\"d-inline-flex align-items-center p-2 border-left\">Start\n        <prime-datepicker disabled size=\"mini\" [dateFormat]=\"dateFormat\"\n            [(date)]=\"startDateShort\"\n            class=\"ml-1\"\n            clearButton=\"invisible\">\n        </prime-datepicker>\n      </span>\n      <span class=\"d-inline-flex align-items-center p-2 border-left border-right\">End\n        <prime-datepicker\n            size=\"mini\"\n            [dateFormat]=\"dateFormat\"\n            [(date)]=\"endDateShort\"\n            class=\"ml-1\"\n            [disabled]=\"!isActiveStatus() && !isNewStatus()\"\n            [clearButton]=\"(!isActiveStatus() && !isNewStatus()) ? 'invisible' : '' \">\n        </prime-datepicker>\n    </span>\n    </div>\n    <!-- <div *ngIf=\"isDeclinedStatus()\">\n      <div class=\"col d-inline-flex flex-column\">\n        <select name=\"reasonForDecline\"\n                id=\"reasonForDecline\"\n                class=\"orm-control drop-dl-box-15 color\"\n                [value]=\"declinedReason\" disabled>\n          <option [value]=\"declinedReason\" selected>{{declinedReason}}</option>\n        </select>\n      </div>\n    </div> -->\n    <!-- <div *ngIf=\"isNewStatus() && isDeclined()\">\n      <select name=\"reasonForDecline\"\n              id=\"reasonForDecline\"\n              class=\"orm-control drop-dl-box-15 color\"\n              [(ngModel)]=\"declinedReason\"\n              (click)=\"$event.stopPropagation()\">\n        <option value=\"Please Select\" selected>Please Select</option>\n        <option *ngFor=\"let reason of declinedReasons\" [value]=\"reason\">\n          {{reason}}\n        </option>\n      </select>\n    </div> -->\n    <span class=\"enrollment-icons\">\n      <prime-pill-badge\n        [alerts]=\"allChildAlerts\"\n        [iconOnly]='false'>\n      </prime-pill-badge>\n\n      <prime-accept-reject-icons [ngClass]=\"{invisible: shouldHideAcceptRejectControls() }\" class='border-left'\n          (onAccepted)=\"onAccept()\"\n          (onRejected)=\"onDecline()\"\n          labelAccept=\"Accept Provisioning\"\n          labelReject=\"Decline Enrolment\">\n      </prime-accept-reject-icons>\n    </span>\n  </div>\n</div>\n\n\n<!-- <div *ngIf=\"(!isNewStatus() && isShowProgress()) || (isNewStatus() && isAccepted())\" [@openState]=\"openState\"> -->\n    <!-- [disableReason]=\"!(isNewStatus() || isInitiatedStatus())\" -->\n\n<div [@openState]=\"openState\">\n  <div [@openStateChild]=\"openState\"  class=\"expandable-container\">\n\n    <div class=\"enrollment-expandable\" *ngFor=\"let siteAccess of siteAccessRequiringAttention\"\n      (click)=\"expandedRowClick(siteAccess)\">\n      <prime-app-enrollment-progress-row\n        [open]=\"siteAccess.open\"\n        [data]=\"siteAccess\"\n        [disableReason]=\"!(isNewStatus() || isInitiatedStatus())\"\n        (onPendingChange)=\"pendingChanges($event)\"\n        [isDeclined]=\"isDeclined()\"\n        [isAccepted]=\"isAccepted()\">\n      </prime-app-enrollment-progress-row>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #e9ecef; }\n\n.enrollment-icons,\n.enrollment-list-item,\n.enrollment-expandable {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.enrollment-list-item {\n  border: 1px solid #adb5bd;\n  border-left: none;\n  border-right: none;\n  min-height: 4em;\n  background: white;\n  z-index: 1;\n  position: relative; }\n\n.enrollment-expandable,\n.enrollment-list-item {\n  transition: 0.25s; }\n\n.enrollment-expandable:hover,\n  .enrollment-list-item:hover {\n    background: #f9f9f9; }\n\n.enrollment-expandable {\n  color: #495057;\n  min-height: 4em;\n  border: 1px solid #adb5bd;\n  flex-wrap: wrap;\n  background: #e9ecef; }\n\n.enrollment-actions {\n  display: flex;\n  align-items: center;\n  align-self: stretch; }\n\n.enrollment-actions .btn-block {\n    border-radius: 0;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 0;\n    height: 100%; }\n\n.enrollment-text-container {\n  min-height: 4em;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex: 5;\n  padding-left: 1em;\n  margin-right: 2em; }\n\n.enrollment-text-container .enrollment-text-main {\n    font-size: 1.072rem; }\n\n.enrollment-text-container > span:not(:last-of-type):not(.no-separator):after {\n    font-size: 1rem;\n    color: #6c757d;\n    content: \" / \"; }\n\n@media (max-width: 575.98px) {\n    .enrollment-text-container > span:first-of-type:after {\n      content: \"\";\n      display: block; } }\n\n.enrollment-text-container > span:not(.enrollment-text-main) {\n    color: #6c757d;\n    margin-left: 0.1rem; }\n\n.enrollment-icons > i {\n  padding: 0 5px;\n  font-size: 18px;\n  cursor: pointer; }\n\n.enrollment-icons > i.fa-edit {\n    font-size: 1.75rem; }\n\ninput[id=\"startDt\"], input[id=\"endDt\"] {\n  width: 12ch; }\n\n.dates-col {\n  padding: 0 1em; }\n\n.dates-col, .dates-col > span {\n    height: 100%; }\n\n.dates-col prime-datepicker {\n    min-width: 8rem; }\n\n.enrollment-icons {\n  height: 100%; }\n\nprime-accept-reject-icons {\n  height: 100%;\n  display: flex;\n  align-items: center; }\n\n.enrollment-actions {\n  min-width: 35rem; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ApplEnrollmentRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplEnrollmentRowComponent", function() { return ApplEnrollmentRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/enrollment-row/enrollment-row.class */ "./src/app/core/enrollment-row/enrollment-row.class.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
/* harmony import */ var _core_user_info_button_user_info_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/user-info-button/user-info-button.component */ "./src/app/core/user-info-button/user-info-button.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApplEnrollmentRowComponent = /** @class */ (function (_super) {
    __extends(ApplEnrollmentRowComponent, _super);
    function ApplEnrollmentRowComponent() {
        var _this = _super.call(this) || this;
        _this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.applicantSearch = _core_user_info_button_user_info_button_component__WEBPACK_IMPORTED_MODULE_5__["SearchDomain"].Applicant; // Domain to search for user sites
        _this.dateFormat = 'mmm. dd, yyyy';
        _this._acceptedEnroll = false;
        _this._declinedEnroll = false;
        return _this;
    }
    ApplEnrollmentRowComponent.prototype.ngOnInit = function () {
        if (this.rowData) {
            this._data = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(this.rowData);
            return this.siteAccessRequiringAttention.map(function (x) { return x.open = false; });
        }
    };
    ApplEnrollmentRowComponent.prototype.onAccept = function () {
        this._acceptedEnroll = true;
        this.openRow();
    };
    ApplEnrollmentRowComponent.prototype.onDecline = function () {
        this._declinedEnroll = true;
        this.openRow();
    };
    /**
     * Checks whether enrollment was accepted
     * @returns {boolean}
     */
    ApplEnrollmentRowComponent.prototype.isAccepted = function () {
        var _this = this;
        this.siteAccessRequiringAttention.map(function (x) {
            if (x.accessReason) {
                _this._acceptedEnroll = true;
                return x;
            }
        }).filter(function (x) { return x; }); //Remove undefined
        return this._acceptedEnroll;
    };
    /**
     * Checks whether enrollment was declined
     * @returns {boolean}
     */
    ApplEnrollmentRowComponent.prototype.isDeclined = function () {
        var _this = this;
        this.siteAccessRequiringAttention.map(function (x) {
            if (x.declinedReason) {
                _this._declinedEnroll = true;
                return x;
            }
        }).filter(function (x) { return x; }); //Remove undefined
        return this._declinedEnroll;
    };
    /**
     * Forward pending changes to parent component to track
     * @param {SiteAccess} item
     */
    ApplEnrollmentRowComponent.prototype.pendingChanges = function (item) {
        // Changes that occur on the enrollment progress row
        this.siteAccessRequiringAttention[0].accessReason = item.accessReason;
        this.siteAccessRequiringAttention[0].declinedReason = item.declinedReason;
        // Send changes for this row
        this.onChange.emit(this.siteAccessRequiringAttention[0]);
    };
    Object.defineProperty(ApplEnrollmentRowComponent.prototype, "declinedReasons", {
        /**
         * Get the possible reasons for declining the site access
         * @returns {any[]}
         */
        get: function () {
            var list = Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_3__["DeclinedReasons"]);
            return list.map(function (x) { return _models_sites_model__WEBPACK_IMPORTED_MODULE_3__["DeclinedReasons"][x]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplEnrollmentRowComponent.prototype, "declinedReason", {
        /**
         * Get the reason why access was declined
         * @returns {string}
         */
        get: function () {
            if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.siteAccessRequiringAttention[0].declinedReason) ||
                0 === this.siteAccessRequiringAttention[0].declinedReason.length) {
                return 'Please Select';
            }
            return this.siteAccessRequiringAttention[0].declinedReason;
        },
        set: function (reason) {
            this.siteAccessRequiringAttention[0].declinedReason = reason;
            // Send changes for this row
            this.onChange.emit(this.siteAccessRequiringAttention[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplEnrollmentRowComponent.prototype, "startDate", {
        get: function () {
            return this.siteAccessRequiringAttention[0].startDate;
        },
        set: function (startDt) {
            this.siteAccessRequiringAttention[0].startDate = startDt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplEnrollmentRowComponent.prototype, "endDate", {
        get: function () {
            return this.siteAccessRequiringAttention[0].endDate;
        },
        set: function (endDt) {
            this.siteAccessRequiringAttention[0].endDate = endDt;
            // Send changes for this row
            this.onChange.emit(this.siteAccessRequiringAttention[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplEnrollmentRowComponent.prototype, "startDateShort", {
        get: function () {
            return this.siteAccessRequiringAttention[0].startDateShort;
        },
        set: function (startDt) {
            this.siteAccessRequiringAttention[0].startDateShort = startDt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplEnrollmentRowComponent.prototype, "endDateShort", {
        get: function () {
            return this.siteAccessRequiringAttention[0].endDateShort;
        },
        set: function (endDt) {
            this.siteAccessRequiringAttention[0].endDateShort = endDt;
            // Send changes for this row
            this.onChange.emit(this.siteAccessRequiringAttention[0]);
        },
        enumerable: true,
        configurable: true
    });
    ApplEnrollmentRowComponent.prototype.shouldHideAcceptRejectControls = function () {
        if (this.isAccepted() || this.isDeclined()) {
            return true;
        }
        // For now don't hide Initiated or New. Not clear on what the difference between these two is, but we're honouring the distinction here.
        return !(this.isInitiatedStatus() || this.isNewStatus());
    };
    ApplEnrollmentRowComponent.prototype.isNewStatus = function () {
        return this.filterStatus(function (x) { return x.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].New; });
    };
    ApplEnrollmentRowComponent.prototype.isDeclinedStatus = function () {
        return this.filterStatus(function (x) { return x.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Declined; });
    };
    ApplEnrollmentRowComponent.prototype.isActiveStatus = function () {
        return this.filterStatus(function (x) { return x.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Active; });
    };
    ApplEnrollmentRowComponent.prototype.isInitiatedStatus = function () {
        return this.filterStatus(function (x) { return x.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Initiated; });
    };
    ApplEnrollmentRowComponent.prototype.isShowProgress = function () {
        return this.filterStatus(function (x) { return (x.status !== _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Expired && x.status !== _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Active); });
    };
    ApplEnrollmentRowComponent.prototype.filterStatus = function (fn) {
        return this.siteAccessRequiringAttention.filter(fn).length !== 0;
    };
    Object.defineProperty(ApplEnrollmentRowComponent.prototype, "siteAccessRequiringAttention", {
        // abstract method - defined in derived
        /** This function is responsible for generating site access row titles depending on dashboard type */
        get: function () {
            if (!this._data || !this._data.expandableRows) {
                return [];
            }
            return this._data.expandableRows.map(function (siteAccess) {
                siteAccess.title = "" + siteAccess.site.name;
                return siteAccess;
            });
        },
        enumerable: true,
        configurable: true
    });
    ApplEnrollmentRowComponent.prototype.canOpen = function () {
        // return (this.isNewStatus() || this.isInitiatedStatus());
        return true;
        // // Don't open on New or Active rows, unless user has Accepted the New row
        // return this.rowData.expandableRows.filter(sa => {
        //   return (sa.status !== EnrollmentStatus.New && sa.status !== EnrollmentStatus.Active) || this._acceptedEnroll;
        // }).length >= 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApplEnrollmentRowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApplEnrollmentRowComponent.prototype, "onChange", void 0);
    ApplEnrollmentRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-appl-enrollment-row',
            template: __webpack_require__(/*! ./appl-enrollment-row.component.html */ "./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.html"),
            styles: [__webpack_require__(/*! ./appl-enrollment-row.component.scss */ "./src/app/modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component.scss")],
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_2__["openState"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["openStateChild"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["loadInOut"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["openStateDisable"]]
        }),
        __metadata("design:paramtypes", [])
    ], ApplEnrollmentRowComponent);
    return ApplEnrollmentRowComponent;
}(_core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__["EnrollmentRow"]));



/***/ }),

/***/ "./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-core-breadcrumb [horizontalScroll]='\"true\"'>\n  <span *ngIf=\"!hasCompletedWizardFlag\" left class='breadcrumb-text'>Dashboard / {{this.pageName}} </span>\n  <span *ngIf=\"hasCompletedWizardFlag\" left class='breadcrumb-text'><a routerLink=\"/applicant/dashboard\">Dashboard</a> / {{this.pageName}} </span>\n\n  <prime-wizard-progress-bar  *ngIf=\"!hasCompletedWizardFlag\" center [progressSteps]='progressSteps' class=''></prime-wizard-progress-bar>\n\n  <span right class='d-flex'>\n    <div *ngIf=\"!hasCompletedWizardFlag\" class='controls'>\n      <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"continue()\" [disabled]='!canContinue()' [ngClass]=\"{'btn-primary': !isButtonSubmitting, 'btn-secondary': isButtonSubmitting}\">{{ isButtonSubmitting ? 'Submit' : 'Continue'}}</button>\n     </div>\n    <div *ngIf=\"hasCompletedWizardFlag\" class='controls'>\n      <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"cancel()\" [disabled]='!contactHasChanged'>Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary mx-2\" (click)=\"continue()\" [disabled]='!contactHasChanged'>Save</button>\n    </div>\n  </span>\n\n</prime-core-breadcrumb>\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prime-applicant-breadcrumbs prime-wizard-progress-bar {\n  padding: 0 2rem; }\n\nprime-applicant-breadcrumbs .controls {\n  min-width: 14em;\n  display: flex;\n  justify-content: flex-end; }\n\nprime-applicant-breadcrumbs .breadcrumb-text {\n  min-width: 14em; }\n\nprime-applicant-breadcrumbs .alert, prime-applicant-breadcrumbs .alert .close {\n  padding: 0.35rem 1.25rem; }\n\nprime-applicant-breadcrumbs .alert {\n  margin-bottom: 0; }\n\nprime-applicant-breadcrumbs .disabled {\n  color: #58595a;\n  opacity: 0.8;\n  pointer-events: none;\n  cursor: not-allowed; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ApplicantBreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantBreadcrumbsComponent", function() { return ApplicantBreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_applicant_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/applicant-data.service */ "./src/app/services/applicant-data.service.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicantBreadcrumbsComponent = /** @class */ (function () {
    function ApplicantBreadcrumbsComponent(applicantDataService, router) {
        this.applicantDataService = applicantDataService;
        this.router = router;
        /** If true, the button colour will be made to stand out more */
        this.isButtonSubmitting = false;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSetHasCompletedWizardFlag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSaveMessage = false;
    }
    ApplicantBreadcrumbsComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ApplicantBreadcrumbsComponent.prototype, "progressSteps", {
        get: function () {
            return this.applicantDataService.getPageProgressSteps();
        },
        enumerable: true,
        configurable: true
    });
    ApplicantBreadcrumbsComponent.prototype.reset = function () {
        this.showSaveMessage = false;
    };
    ApplicantBreadcrumbsComponent.prototype.save = function () {
        this.showSaveMessage = true;
        this.onSave.emit(true);
    };
    ApplicantBreadcrumbsComponent.prototype.continue = function () {
        this.save();
        if (!this.hasCompletedWizardFlag) {
            if (this.router.url === '/applicant/review') {
                this.setHasCompletedWizardFlag();
                this.router.navigate(['/applicant/complete-submission']);
            }
            else {
                this.router.navigate([this.nextPageLink]);
            }
        }
    };
    ApplicantBreadcrumbsComponent.prototype.setHasCompletedWizardFlag = function () {
        this.onSetHasCompletedWizardFlag.emit(true);
    };
    ApplicantBreadcrumbsComponent.prototype.canContinue = function () {
        return !this.shouldDisableContinue;
    };
    ApplicantBreadcrumbsComponent.prototype.cancel = function () {
        //this.router.navigate([this.previousPageLink]);
        this.onCancel.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ApplicantBreadcrumbsComponent.prototype, "pageName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ApplicantBreadcrumbsComponent.prototype, "nextPageLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ApplicantBreadcrumbsComponent.prototype, "previousPageLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApplicantBreadcrumbsComponent.prototype, "shouldDisableContinue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApplicantBreadcrumbsComponent.prototype, "contactHasChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApplicantBreadcrumbsComponent.prototype, "isButtonSubmitting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApplicantBreadcrumbsComponent.prototype, "hasCompletedWizardFlag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApplicantBreadcrumbsComponent.prototype, "onSave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApplicantBreadcrumbsComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApplicantBreadcrumbsComponent.prototype, "onSetHasCompletedWizardFlag", void 0);
    ApplicantBreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-applicant-breadcrumbs',
            template: __webpack_require__(/*! ./applicant-breadcrumbs.component.html */ "./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./applicant-breadcrumbs.component.scss */ "./src/app/modules/applicant/components/applicant-breadcrumbs/applicant-breadcrumbs.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
        }),
        __metadata("design:paramtypes", [_services_applicant_data_service__WEBPACK_IMPORTED_MODULE_1__["ApplicantDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApplicantBreadcrumbsComponent);
    return ApplicantBreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"enrollment-list-controls bg-light\">\n  <div>\n    <form class=\"form-inline\">\n      <span class=\"has-float-label\">\n        <input class=\"form-control bg-transparent\" type=\"search\" placeholder=\"Organizations\" aria-label=\"Organizations\" (input)=\"search($event.target.value)\">\n        <span>Search</span> \n      </span>\n\n      <label class=\"has-float-label mx-2\">\n        <select id=\"enrollmentViewSelector\" class=\"form-control enrollment-view-selector\" [value]=\"viewTypeSelector\" (change)=\"viewTypes($event.target.value)\">\n          <option value=\"View All\">All</option>\n          <option *ngFor=\"let status of orgTypes\" value=\"{{status}}\">\n            {{status}}\n          </option>\n        </select>\n        <span>View</span>\n      </label>\n\n    </form>\n  </div>\n  <div>\n    <prime-add-pharma-net-organization #addOrgComponent></prime-add-pharma-net-organization>\n  </div>\n</div>\n<div class=\"enrollment-item-container\">\n  <div class=\"enrollment-item-inner\">\n    <ng-container *ngIf='data?.length; else emptyState'>\n      <prime-pharma-net-access-row\n        *ngFor='let item of data'\n        [rowData]='item'\n      >\n      </prime-pharma-net-access-row>\n\n    </ng-container>\n  </div>\n</div>\n\n<ng-template #emptyState>\n  <span class=\"text-center\" (click)=\"addOrg(addOrgComponent)\">\n    <!-- Use padding instead of margin so we don't mess up borders -->\n    <h3 class='m-0 p-2 pt-4'>No organizations selected</h3>\n    <p class='m-0 p-2'>To add an organization, click here, or click “Add Organization” above.</p>\n  </span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".enrollment-item-container {\n  border-top: none;\n  height: 25rem;\n  overflow-y: scroll; }\n  .enrollment-item-container .enrollment-item-inner {\n    border-right: 2px solid #dee2e6;\n    border-left: 2px solid #dee2e6;\n    border-bottom: 2px solid #dee2e6;\n    min-height: 100%; }\n  .enrollment-list-controls {\n  border: 2px solid #dee2e6;\n  min-height: 4em;\n  padding: 1em;\n  border-bottom: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n  .enrollment-view-selector {\n  min-width: 5em; }\n  .has-float-label + .has-float-label {\n  margin-top: initial; }\n  .has-float-label + .has-float-label select {\n    height: auto; }\n  .enrollment-item-container {\n  min-height: 25rem;\n  height: calc(70vh - 5rem);\n  border-right: 2px solid #dee2e6;\n  border-left: 2px solid #dee2e6;\n  border-bottom: 4px solid #dee2e6; }\n  .enrollment-item-container .enrollment-item-inner {\n    border: none; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PharmaNetAccessListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaNetAccessListComponent", function() { return PharmaNetAccessListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/enrollment-list/enrollment-list.class */ "./src/app/core/enrollment-list/enrollment-list.class.ts");
/* harmony import */ var _models_organizations_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/organizations.model */ "./src/app/models/organizations.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PharmaNetAccessListComponent = /** @class */ (function (_super) {
    __extends(PharmaNetAccessListComponent, _super);
    function PharmaNetAccessListComponent() {
        var _this = _super.call(this) || this;
        _this.EnrollmentStatus = [];
        return _this;
    }
    PharmaNetAccessListComponent.prototype.ngOnInit = function () {
        this.orgTypes = Object.keys(_models_organizations_model__WEBPACK_IMPORTED_MODULE_2__["PharmaNetOrgTypes"]).map(function (x) { return _models_organizations_model__WEBPACK_IMPORTED_MODULE_2__["PharmaNetOrgTypes"][x]; });
    };
    PharmaNetAccessListComponent.prototype.ngOnChanges = function () {
        this.data = this.rowItems;
    };
    PharmaNetAccessListComponent.prototype.search = function (phrase) {
        this.data = this.rowItems.filter(function (x) { return x.title.toLowerCase().includes(phrase.toLowerCase()); });
    };
    PharmaNetAccessListComponent.prototype.rowOpened = function () {
        return null;
    };
    PharmaNetAccessListComponent.prototype.addOrg = function (component) {
        component.openModal();
    };
    PharmaNetAccessListComponent.prototype.viewTypes = function (type) {
        if (type === _core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_1__["defaultViewSelector"]) {
            return this.data = this.rowItems;
        }
        this.data = this.rowItems.filter(function (x) {
            var target = x.type.toLowerCase();
            if (type === 'HA') {
                target = target.replace('pharmacy', '');
            }
            return target.toLowerCase().includes(type.toLowerCase());
        });
    };
    PharmaNetAccessListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-pharma-net-access-list',
            template: __webpack_require__(/*! ./pharma-net-access-list.component.html */ "./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.html"),
            styles: [__webpack_require__(/*! ./pharma-net-access-list.component.scss */ "./src/app/modules/applicant/components/pharma-net-access-list/pharma-net-access-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PharmaNetAccessListComponent);
    return PharmaNetAccessListComponent;
}(_core_enrollment_list_enrollment_list_class__WEBPACK_IMPORTED_MODULE_1__["EnrollmentList"]));



/***/ }),

/***/ "./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"rowData\" class=\"enrollment-list-item org-row\" (click)=\"toggleRow()\" [ngClass]='{orgOnly: orgsOnly}'>\n  <div class=\"enrollment-text-container\">\n    <span class=\"enrollment-text-main\">\n      <i class='fa fa-caret-down' [@rotate180]='openState' *ngIf='!orgsOnly'></i> \n        {{rowData.title}}\n      </span>\n  </div>\n\n  <!-- Stop propagation so that click events on e.g. the dropdown won't bubble up to toggleRow() -->\n  <div class=\"enrollment-actions\" (click)=\"$event.stopPropagation()\" >\n\n    <!-- TODO - Temp removed, will be in \"return visit\" (possibly in separate component) -->\n    <!-- <label class=\"has-float-label mx-2\">\n      <select class=\"form-control\">\n        <option *ngFor=\"let status of accessType\"\n                value=\"{{status}}\">\n          {{status}}\n        </option>\n      </select>\n      <span>Access Type</span>\n    </label> -->\n\n    <div class=\"dates-col\">\n      <span class=\"d-inline-flex align-items-center p-2 border-left\">Start\n        <prime-datepicker \n                          size=\"mini\"\n                          dateFormat='yyyy/mm/dd'\n                          [date]='getOrgAccess()?.startDate'\n                          (dateChange)='onOrgStartDate($event)'\n                          class=\"ml-1\"\n                          clearButton=\"invisible\">\n        </prime-datepicker>\n      </span>\n      <span class=\"d-inline-flex align-items-center p-2 border-left border-right\">End\n        <prime-datepicker size=\"mini\"\n                          dateFormat='yyyy/mm/dd'\n                          [date]='getOrgAccess()?.endDate'\n                          (dateChange)=\"onOrgEndDate($event)\"\n                          onlyFutureDates='true'\n                          class=\"ml-1\">\n        </prime-datepicker>\n      </span>\n    </div>\n\n    <!-- <prime-accept-reject-icons *ngIf=\"!orgsOnly && shouldShowOrgActionButtons()\"\n                               [@growHorizontal]\n                               (onAccepted)=\"onAcceptOrg()\"\n                               (onRejected)=\"onRejectOrg()\"\n                               labelAccept=\"Accept Enrollment\"\n                               labelReject=\"Decline Enrollment\">\n    </prime-accept-reject-icons> -->\n\n\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" *ngIf=\"orgsOnly\" (click)=\"removeOrg()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n</div>\n\n\n<!-- Nested rows for all the sites -->\n<div [@growVertical] *ngIf=\"!orgsOnly && isOpen()\" class='pharmanet-site'>\n  <div class=\"expandable-container\">\n\n       <div class=\"enrollment-expandable\"\n         *ngFor=\"let siteAccess of subRowData\"\n         (click)=\"expandedRowClick(siteAccess)\">\n\n\n      <div class='d-flex align-items-center justify-content-between w-100 py-2'[@growVertical]>\n        <div>\n          Site {{siteAccess.site.name}}\n          <prime-info-button [targetId]='siteAccess.site.objectId'></prime-info-button>\n        </div>\n\n        <div class='d-flex align-items-center align-self-stretch'>\n\n          <!-- TODO - Temp removed, will be in \"return visit\" (possibly in separate component) -->\n          <!-- <label class=\"has-float-label mx-2\">\n            <select id=\"enrollmentViewSelector\"\n                    class=\"form-control\">\n              <option *ngFor=\"let status of accessType\"\n                      value=\"{{status}}\">\n                {{status}}\n              </option>\n            </select>\n            <span>Access Type</span>\n          </label> -->\n\n          <label class=\"has-float-label\">\n            <input type=\"text\" class=\"form-control input-readonly pos-input\" [value]=\"siteAccess.posUserId ? siteAccess.posUserId : 'n/a'\" disabled>\n            <span>PoS User ID</span>\n          </label>\n    \n\n          <div class=\"dates-col\">\n            <span class=\"d-inline-flex align-items-center p-2 border-left\">Start\n              <prime-datepicker [disabled]=\"!isActionableRow(siteAccess)\"\n                                size=\"mini\"\n                                dateFormat=\"yyyy/mm/dd\" \n                                [(date)]=\"siteAccess.startDate\"\n                                class=\"ml-1\"\n                                clearButton=\"invisible\">\n              </prime-datepicker>              \n            </span>\n            <span class=\"d-inline-flex align-items-center p-2 border-left border-right\">End\n              <prime-datepicker [disabled]=\"!isActionableRow(siteAccess)\"\n                                size=\"mini\"\n                                onlyFutureDates='true'\n                                dateFormat=\"yyyy/mm/dd\"\n                                [(date)]=\"siteAccess.endDate\"\n                                class=\"ml-1\">\n              </prime-datepicker>\n            </span>\n          </div>\n\n          <label class=\"has-float-label mx-2\">\n            <select class=\"form-control access-type-selector\" [(ngModel)]='siteAccess.personalAccess' >\n              <option *ngFor=\"let status of accessType\"\n                      value=\"{{status}}\">\n                {{status}}\n              </option>\n            </select>\n            <span>Personal Access</span>\n          </label>\n\n\n          <!-- Only show accept/declined -->\n          <prime-pill-badge class='ml-2 align-self-center' *ngIf='siteAccess.status !== \"New\"' [alerts]=\"[siteAccess.alert]\">\n          </prime-pill-badge>\n\n          <prime-accept-reject-icons *ngIf=\"isActionableRow(siteAccess); else editExisting\"\n                                    (onAccepted)=\"onAcceptSite(siteAccess)\"\n                                    (onRejected)=\"onRejectSite(siteAccess)\"\n                                    labelAccept=\"Accept Enrolment\"\n                                    labelReject=\"Decline Enrolment\"\n                                    class='site-accept-reject'>\n          </prime-accept-reject-icons>\n\n          <ng-template #editExisting>\n            <i class=\"fa fa-pencil text-muted edit-icon\"></i>\n          </ng-template>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #e9ecef; }\n\n.enrollment-icons,\n.enrollment-list-item,\n.enrollment-expandable {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.enrollment-list-item {\n  border: 1px solid #adb5bd;\n  border-left: none;\n  border-right: none;\n  min-height: 4em;\n  background: white;\n  z-index: 1;\n  position: relative; }\n\n.enrollment-expandable,\n.enrollment-list-item {\n  transition: 0.25s; }\n\n.enrollment-expandable:hover,\n  .enrollment-list-item:hover {\n    background: #f9f9f9; }\n\n.enrollment-expandable {\n  color: #495057;\n  min-height: 4em;\n  border: 1px solid #adb5bd;\n  flex-wrap: wrap;\n  background: #e9ecef; }\n\n.enrollment-actions {\n  display: flex;\n  align-items: center;\n  align-self: stretch; }\n\n.enrollment-actions .btn-block {\n    border-radius: 0;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 0;\n    height: 100%; }\n\n.enrollment-text-container {\n  min-height: 4em;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  flex: 5;\n  padding-left: 1em;\n  margin-right: 2em; }\n\n.enrollment-text-container .enrollment-text-main {\n    font-size: 1.072rem; }\n\n.enrollment-text-container > span:not(:last-of-type):not(.no-separator):after {\n    font-size: 1rem;\n    color: #6c757d;\n    content: \" / \"; }\n\n@media (max-width: 575.98px) {\n    .enrollment-text-container > span:first-of-type:after {\n      content: \"\";\n      display: block; } }\n\n.enrollment-text-container > span:not(.enrollment-text-main) {\n    color: #6c757d;\n    margin-left: 0.1rem; }\n\n.enrollment-icons > i {\n  padding: 0 5px;\n  font-size: 18px;\n  cursor: pointer; }\n\n.enrollment-icons > i.fa-edit {\n    font-size: 1.75rem; }\n\n.org-row {\n  background: #e9ecef; }\n\n.enrollment-list-item {\n  transition: 0.25s;\n  padding-right: 1em; }\n\n.enrollment-list-item:hover {\n    background: #dadfe4; }\n\n.enrollment-expandable {\n  justify-content: space-between;\n  background: white;\n  padding: 0 1em; }\n\nselect {\n  background-color: white; }\n\n.dates-col {\n  padding: 0 1em;\n  white-space: nowrap; }\n\n.dates-col, .dates-col > span {\n    height: 100%; }\n\n.dates-col prime-datepicker {\n    min-width: 8rem; }\n\n.edit-icon {\n  font-size: 1.5rem;\n  cursor: pointer; }\n\n.orgOnly {\n  cursor: default; }\n\n.orgOnly .enrollment-text-container,\n  .orgOnly .enrollment-expandable,\n  .orgOnly .enrollment-list-item {\n    cursor: default; }\n\n.site-accept-reject {\n  margin-right: 0.75em; }\n\n.access-type-selector {\n  min-width: 100px; }\n\n.pos-input {\n  min-width: 5em; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PharmaNetAccessRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaNetAccessRowComponent", function() { return PharmaNetAccessRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/enrollment-row/enrollment-row.class */ "./src/app/core/enrollment-row/enrollment-row.class.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _models_sites_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/sites.model */ "./src/app/models/sites.model.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _models_organizations_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/organizations.model */ "./src/app/models/organizations.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PharmaNetAccessRowComponent = /** @class */ (function (_super) {
    __extends(PharmaNetAccessRowComponent, _super);
    function PharmaNetAccessRowComponent(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        /** If true, hide all sites and only display orgs. For the prototype, this
         * simulates that the Org has not yet had sites provisioned for the user. */
        _this.orgsOnly = true;
        _this.accessType = Object.keys(_models_sites_model__WEBPACK_IMPORTED_MODULE_3__["PersonalAccessType"]);
        return _this;
    }
    PharmaNetAccessRowComponent.prototype.ngOnInit = function () {
        // ! Ideally we shouldn't be configuring our data here, but it's fine for prototype.
        this.subRowData = this.rowData.setupNewEnrollments(this.dataService.user);
        // We only need to update on init
        this.orgsOnly = this.calculateOrgOnly();
        if (this.hasActionableSites()) {
            this.openRow();
        }
    };
    /** Determines if we should restrict the row to orgOnly - i.e. before the Provisoiner has selected sites */
    PharmaNetAccessRowComponent.prototype.calculateOrgOnly = function () {
        return this.rowData.members.filter(function (site) {
            return site.siteAccess.length && site.siteAccess[0].status !== null;
        }).length === 0;
    };
    /**
     * The OrgAccess for the Org for this row.
     */
    PharmaNetAccessRowComponent.prototype.getOrgAccess = function () {
        var _this = this;
        var result = this.rowData.organizationAccess.find(function (oa) { return oa.person === _this.dataService.user; });
        // if (!result){
        //   throw new Error('Unable to find OrganizationAccess for organization with objID - ' + this.rowData.objectId)
        // }
        return result;
    };
    PharmaNetAccessRowComponent.prototype.isOpen = function () {
        return this.openState === _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__["RowState"].Opened;
    };
    PharmaNetAccessRowComponent.prototype.hasActionableSites = function () {
        // The org row is actionable if any of its children are actionable
        return this.subRowData
            .map(this.isActionableRow)
            .filter(function (x) { return x === true; })
            .length >= 1;
    };
    PharmaNetAccessRowComponent.prototype.isActionableRow = function (sa) {
        return sa.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].New;
    };
    // Replace the inheritied method as our behaviour diverges
    PharmaNetAccessRowComponent.prototype.toggleRow = function () {
        this.openState = this.openState === _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__["RowState"].Opened ? _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__["RowState"].Closed : _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__["RowState"].Opened;
        if (this.openState === _core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__["RowState"].Opened) {
            this.onRowOpened.emit(this);
        }
    };
    PharmaNetAccessRowComponent.prototype.onOrgStartDate = function (newDate) {
        var _this = this;
        this.subRowData = this.subRowData.map(function (sa) {
            if (_this.isActionableRow(sa)) {
                sa.startDate = newDate;
            }
            return sa;
        });
        this.getOrgAccess().startDate = newDate;
    };
    PharmaNetAccessRowComponent.prototype.onOrgEndDate = function (newDate) {
        var _this = this;
        this.subRowData = this.subRowData.map(function (sa) {
            if (_this.isActionableRow(sa)) {
                sa.endDate = newDate;
            }
            return sa;
        });
        this.getOrgAccess().endDate = newDate;
    };
    // Remove the org, which removes the entire row and destroys the component
    PharmaNetAccessRowComponent.prototype.removeOrg = function () {
        var _this = this;
        // ! TODO Bug - This does not (but should) delete/change the status of the SiteAccess too, currently they're orphaned.
        this.dataService.user.organizationAccess = this.dataService.user.organizationAccess.filter(function (oa) {
            return oa.organization.objectId !== _this.rowData.objectId;
        });
    };
    // public accessType = ['Personal Access', 'Test', 'Todo']; // replace with PharmaNetOrgType
    PharmaNetAccessRowComponent.prototype.onAcceptSite = function (sa) {
        sa.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Active;
    };
    PharmaNetAccessRowComponent.prototype.onRejectSite = function (sa) {
        sa.status = _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].Declined;
    };
    PharmaNetAccessRowComponent.prototype.onAcceptOrg = function (org) {
        var _this = this;
        this.subRowData = this.subRowData.map(function (siteAccess) {
            if (siteAccess.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].New) {
                _this.onAcceptSite(siteAccess);
            }
            return siteAccess;
        });
    };
    PharmaNetAccessRowComponent.prototype.onRejectOrg = function (org) {
        var _this = this;
        this.subRowData = this.subRowData.map(function (siteAccess) {
            if (siteAccess.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_4__["EnrollmentStatus"].New) {
                _this.onRejectSite(siteAccess);
            }
            return siteAccess;
        });
    };
    Object.defineProperty(PharmaNetAccessRowComponent.prototype, "siteAccessRequiringAttention", {
        get: function () {
            if (!this.rowData) {
                return [];
            }
            return this.rowData.allSiteAccess;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_organizations_model__WEBPACK_IMPORTED_MODULE_6__["PharmaNetOrganization"])
    ], PharmaNetAccessRowComponent.prototype, "rowData", void 0);
    PharmaNetAccessRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-pharma-net-access-row',
            template: __webpack_require__(/*! ./pharma-net-access-row.component.html */ "./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.html"),
            styles: [__webpack_require__(/*! ./pharma-net-access-row.component.scss */ "./src/app/modules/applicant/components/pharma-net-access-row/pharma-net-access-row.component.scss")],
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_2__["openState"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["openStateChild"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["loadInOut"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["rotate180"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["growVertical"], _animations_animations__WEBPACK_IMPORTED_MODULE_2__["growHorizontal"]]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_5__["PrimeDataService"]])
    ], PharmaNetAccessRowComponent);
    return PharmaNetAccessRowComponent;
}(_core_enrollment_row_enrollment_row_class__WEBPACK_IMPORTED_MODULE_1__["EnrollmentRow"]));



/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-applicant-breadcrumbs\n  pageName=\"Access Acceptance\"\n  previousPageLink=\"/applicant/professional\"\n  nextPageLink=\"/applicant/review\"\n  [shouldDisableContinue]=\"disableContinue()\"\n  (onSave)=\"save()\">\n</prime-applicant-breadcrumbs>\n\n<prime-page-framework>\n\n  <h2 class='prime-title' id=\"uaa\">Terms & Conditions of Access</h2>\n  <div>Before you have access to PharmaNet, you must read and accept the\n    terms and conditions set out here.\n  </div>\n\n  <div>\n    <span class=\"has-float-label\" *ngFor=\"let item of accessAcceptances\">\n      <h3><b>Section / Clause</b></h3>\n      <textarea disabled value={{item.acceptanceClause}}></textarea>\n      <input type=\"checkbox\" class=\"myCheckbox\" [(ngModel)]=\"item.isAccepted\">\n    </span>\n  </div>\n\n  <hr>\n\n  <h2 class='prime-title' id='declare'>Declaration</h2>\n  <div>You must complete this declaration before you can proceed any further.</div>\n  <div>\n    <span class='has-float-label'>\n      <textarea disabled value=\"\">I declare the information I provided is complete and accurate.</textarea>\n      <input type=\"checkbox\" class=\"myCheckbox\" [(ngModel)]=\"isDeclareChecked\">\n    </span>\n  </div>\n\n</prime-page-framework>\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  background-color: lightgrey;\n  width: 90%;\n  height: 7em;\n  vertical-align: middle;\n  font-size: medium;\n  padding: 0.5em; }\n\ninput[type=\"checkbox\"] {\n  vertical-align: middle;\n  position: relative;\n  white-space: nowrap; }\n\n.myCheckbox {\n  width: 22px;\n  height: 22px;\n  margin-left: 0.6em;\n  margin-right: 0.6em; }\n\nhr {\n  margin-left: 0;\n  width: 90%;\n  margin-top: 3rem; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ApplicantAccessAcceptanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantAccessAcceptanceComponent", function() { return ApplicantAccessAcceptanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _applicant_access_acceptance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applicant-access-acceptance */ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.ts");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicantAccessAcceptanceComponent = /** @class */ (function () {
    function ApplicantAccessAcceptanceComponent(dataService) {
        this.dataService = dataService;
        this.isDeclareChecked = false;
        this.accessAcceptances = [
            new _applicant_access_acceptance__WEBPACK_IMPORTED_MODULE_1__["ApplicantAccessAcceptance"]('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nihil quisquam officiis. Voluptates ad nisi possimus maxime voluptatum. Quis accusamus officiis rerum odit reiciendis saepe sapiente alias quisquam, dignissimos voluptatibus.', false),
            new _applicant_access_acceptance__WEBPACK_IMPORTED_MODULE_1__["ApplicantAccessAcceptance"]('Officiis soluta, adipisci distinctio ipsum magni mollitia quasi quos fugit voluptatibus. Deleniti architecto, quasi placeat reiciendis, nostrum eos laudantium repellendus aspernatur, dicta consequuntur esse quas molestiae officiis laboriosam temporibus sed.', false),
            new _applicant_access_acceptance__WEBPACK_IMPORTED_MODULE_1__["ApplicantAccessAcceptance"]('Nesciunt, inventore, qui molestiae repellendus corporis architecto culpa perspiciatis accusantium, hic eos sequi velit consectetur at quae. Labore, ratione minima! Quas sint facilis laboriosam eaque rerum amet deserunt reiciendis pariatur?', false)
        ];
    }
    Object.defineProperty(ApplicantAccessAcceptanceComponent.prototype, "allCheckboxes", {
        /** Each boolean is bound to a checkbox. Useful for validation. */
        get: function () {
            return this.accessAcceptances
                .map(function (item) { return item.isAccepted; })
                .concat(this.isDeclareChecked);
        },
        enumerable: true,
        configurable: true
    });
    ApplicantAccessAcceptanceComponent.prototype.ngOnInit = function () {
        this.loadDataFromApplicant();
    };
    Object.defineProperty(ApplicantAccessAcceptanceComponent.prototype, "applicant", {
        get: function () {
            return this.dataService.user;
        },
        enumerable: true,
        configurable: true
    });
    ApplicantAccessAcceptanceComponent.prototype.disableContinue = function () {
        return !this.isDeclareChecked;
        // return this.allCheckboxes.filter(item => item !== true).length >= 1;
    };
    ApplicantAccessAcceptanceComponent.prototype.save = function () {
        this.applicant.accessAcceptance = this.accessAcceptances.map(function (x) { return x.isAccepted; });
        this.applicant.isDeclaredCheck = this.isDeclareChecked;
    };
    ApplicantAccessAcceptanceComponent.prototype.loadDataFromApplicant = function () {
        for (var i = 0; i < this.accessAcceptances.length; i++) {
            var item = this.accessAcceptances[i];
            item.isAccepted = this.applicant.accessAcceptance[i];
        }
        this.isDeclareChecked = this.applicant.isDeclaredCheck;
    };
    ApplicantAccessAcceptanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-applicant-access-acceptance',
            template: __webpack_require__(/*! ./applicant-access-acceptance.component.html */ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.html"),
            styles: [__webpack_require__(/*! ./applicant-access-acceptance.component.scss */ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__["PrimeDataService"]])
    ], ApplicantAccessAcceptanceComponent);
    return ApplicantAccessAcceptanceComponent;
}());



/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-access-acceptance/applicant-access-acceptance.ts ***!
  \****************************************************************************************************/
/*! exports provided: ApplicantAccessAcceptance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantAccessAcceptance", function() { return ApplicantAccessAcceptance; });
var ApplicantAccessAcceptance = /** @class */ (function () {
    function ApplicantAccessAcceptance(acceptanceClause, isAccepted) {
        this.acceptanceClause = acceptanceClause;
        this.isAccepted = isAccepted;
    }
    return ApplicantAccessAcceptance;
}());



/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-applicant-breadcrumbs\n  pageName=\"Contact\"\n  previousPageLink=\"/applicant/dashboard\"\n  nextPageLink=\"/applicant/professional\"\n  [shouldDisableContinue]=\"!canContinue()\"\n  (onSave)=\"onSave($event)\"\n  (onCancel)=\"onCancel($event)\"\n  [hasCompletedWizardFlag]=\"applicant._hasCompletedWizard\"\n  [contactHasChanged]=\"hasChanged\">\n</prime-applicant-breadcrumbs>\n\n<prime-page-framework>\n\n  <img class=\"photo pull-right\" src=\"assets/photoPlaceholder.png\" alt=\"Generic placeholder image\">\n\n  <h2 class='prime-title' id=\"regInfo\">Registration Information</h2>\n  <div>Your Registration Information is the identity information from your ID\n    document or as provided at Registration. You may not update this information here.\n  </div>\n\n\n  <form>\n\n    <div>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control input-readonly prime-input-large\" id=\"legalName\" name=\"legalName\" [ngModel]=\"applicant.legalName\" disabled>\n        <span>Legal Name</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-medium\" id=\"DoB\" name=\"DoB\" [ngModel]=\"applicant.dateOfBirth | date:'MMM. dd, yyyy'\" disabled>\n        <span>Date of Birth</span>\n      </label>\n\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"address\" name=\"address\" [ngModel]=\"applicant.address?.street\" disabled>\n        <span>Address</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-medium\" id=\"city\" name=\"city\" [ngModel]=\"applicant.address?.city\" disabled>\n        <span>City</span>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-medium\" id=\"province\" name=\"province\" [ngModel]=\"applicant.address?.province\" disabled>\n        <span>Province</span>\n      </label>\n\n      <prime-postal-code [value]=\"applicant.address?.postal\"  disabled='true'></prime-postal-code>\n\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-medium\" id=\"country\" name=\"country\" [ngModel]=\"applicant.address?.country\" disabled>\n        <span>Country</span>\n      </label>\n\n    </div>\n  </form>\n\n\n  <h2 class='prime-title' id=\"prefName\">Preferred Name (optional)</h2>\n  <form>\n    <div>\n      <div class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"prefLastName\" name=\"prefLastName\" [ngModel]=\"applicant.preferLastName ? applicant.preferLastName : applicant.lastName\" (ngModelChange)=\"updatePrefLastName($event)\" (input)=\"onChange()\" placeholder=\" \">\n        <label for=\"prefLastName\">Preferred Last Name</label>\n      </div>\n\n      <div class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"prefMiddleName\" name=\"prefMiddleName\" [ngModel]=\"applicant.preferMiddleName ? applicant.preferMiddleName : applicant.middleName\" (ngModelChange)=\"updatePrefMiddleName($event)\" (input)=\"onChange()\" placeholder=\" \">\n        <label for=\"prefMiddleName\">Preferred Middle Name</label>\n      </div>\n\n      <div class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"prefFirstName\" name=\"prefFirstName\" [ngModel]=\"applicant.preferFirstName ? applicant.preferFirstName : applicant.firstName\" (ngModelChange)=\"updatePrefFirstName($event)\" (input)=\"onChange()\" placeholder=\" \">\n        <label for=\"prefFirstName\">Preferred First Name</label>\n      </div>\n\n    </div>\n\n  </form>\n\n  <h2 class='prime-title' id='contactInfo'>Contact Information</h2>\n\n  <form>\n    <div>\n\n      <label>\n          I have an international (non-Canadian) phone-number\n        <prime-toggle [(data)]=\"applicant.hasInternationalPhoneNumber\" (click) = \"onInternationalPhoneNumberChange()\"></prime-toggle>\n      </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" [textMask]=\"{mask: getPhoneMask()}\" class=\"form-control prime-input-large\" id=\"phone\" name=\"phone\" [(ngModel)]=\"applicant.phone\" (input)=\"onChange()\" placeholder=\" \">\n        <span>Phone Number</span>\n      </label>\n\n      <label class=\"has-float-label\">\n          <input type=\"text\" class=\"form-control prime-input-large\" id=\"phoneExt\" name=\"phoneExt\" [(ngModel)]=\"applicant.phoneExtension\" (input)=\"onChange()\" placeholder=\" \">\n          <span>Extension Number (optional)</span>\n        </label>\n\n      <label class=\"has-float-label\">\n        <input type=\"text\" class=\"form-control prime-input-large\" id=\"email\" name=\"email\" [(ngModel)]=\"applicant.email\" (input)=\"onChange()\" placeholder=\" \">\n        <span>Email</span>\n      </label>\n    </div>\n  </form>\n\n  <h2 class='prime-title' id=\"mailingAddr\">Mailing Address</h2>\n\n  <form>\n    <label>\n      Use the address from my Registration Information as my mailing address\n      <prime-toggle [(data)]=\"applicant.useRegAddress\" (click) = \"onChange()\"></prime-toggle>\n    </label>\n\n    <div>\n\n      <div class=\"has-float-label\">\n        <input *ngIf = \"!applicant.useRegAddress\" type=\"text\" class=\"form-control prime-input-large\" id=\"mailAdress\" name=\"mailAddress\" [(ngModel)]=\"applicant.mailAddress.street\" (input) = \"onChange()\"  placeholder=\" \">\n        <input *ngIf = \"applicant.useRegAddress\" type=\"text\" class=\"form-control prime-input-large\" id=\"mailAdress\" name=\"mailAddress\" [ngModel]=\"applicant.address?.street\" (ngModelChange)=\"updateStreet($event)\"  placeholder=\" \">\n        <label for=\"mailAdress\">Address</label>\n      </div>\n\n      <div class=\"has-float-label\">\n        <input *ngIf = \"!applicant.useRegAddress\" type=\"text\" class=\"form-control prime-input-medium\" id=\"mailCity\" name=\"mailCity\" [(ngModel)]=\"applicant.mailAddress.city\" (input) = \"onChange()\" placeholder=\" \">\n        <input *ngIf = \"applicant.useRegAddress\" type=\"text\" class=\"form-control prime-input-medium\" id=\"mailCity\" name=\"mailCity\" [ngModel]=\"applicant.address?.city\" (ngModelChange)=\"updateCity($event)\" placeholder=\" \">\n        <label for=\"mailCity\">City</label>\n      </div>\n\n      <div class=\"has-float-label\">\n        <input *ngIf = \"!applicant.useRegAddress\" type=\"text\" class=\"form-control prime-input-medium\" id=\"mailProvince\" name=\"mailProvince\" [(ngModel)]=\"applicant.mailAddress.province\" (input) = \"onChange()\" placeholder=\" \">\n        <input *ngIf = \"applicant.useRegAddress\" type=\"text\" class=\"form-control prime-input-medium\" id=\"mailProvince\" name=\"mailProvince\" [ngModel]=\"applicant.address?.province\" (ngModelChange)=\"updateProvince($event)\" placeholder=\" \">\n        <label for=\"mailProvince\">Province</label>\n      </div>\n\n      <prime-postal-code *ngIf = \"!applicant.useRegAddress\" [(value)]=\"applicant.mailAddress.postal\" ></prime-postal-code>\n\n      <prime-postal-code *ngIf = \"applicant.useRegAddress\" [value]=\"applicant.address?.postal\" (valueChange)=\"updatePostal($event)\" ></prime-postal-code>\n\n      <div class=\"has-float-label\">\n        <input *ngIf = \"!applicant.useRegAddress\" type=\"text\" class=\"form-control prime-input-medium\" id=\"mailCountry\" name=\"mailCountry\" [(ngModel)]=\"applicant.mailAddress.country\" (input) = \"onChange()\" placeholder=\" \">\n        <input *ngIf = \"applicant.useRegAddress\" type=\"text\" class=\"form-control prime-input-medium\" id=\"mailCountry\" name=\"mailCountry\" [ngModel]=\"applicant.address?.country\" (ngModelChange)=\"updateCountry($event)\" placeholder=\" \">\n        <label for=\"mailCountry\">Country</label>\n      </div>\n\n    </div>\n\n  </form>\n\n</prime-page-framework>\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo {\n  width: auto;\n  height: 128px; }\n\n.z-top {\n  position: relative;\n  z-index: 10; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ApplicantContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantContactComponent", function() { return ApplicantContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NUMBER = /\d/;
var ApplicantContactComponent = /** @class */ (function () {
    function ApplicantContactComponent(primeDataService) {
        this.primeDataService = primeDataService;
        this.hasChanged = false;
        this.hasEverChanged = false;
        this.phoneMask = ['(', NUMBER, NUMBER, NUMBER, ')', '-', NUMBER, NUMBER, NUMBER, '-', NUMBER, NUMBER, NUMBER, NUMBER];
    }
    ApplicantContactComponent.prototype.ngOnInit = function () {
        // Clone user class
        this._user = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user);
    };
    Object.defineProperty(ApplicantContactComponent.prototype, "applicant", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    ApplicantContactComponent.prototype.canContinue = function () {
        if (!this.hasEverChanged) {
            return true;
        }
        return this.hasChanged;
    };
    /**
     * Toggle to show the fields to set the preferrred names
     */
    ApplicantContactComponent.prototype.showPreferredNames = function () {
        this.applicant.hasPreferName = !this.applicant.hasPreferName;
    };
    ApplicantContactComponent.prototype.onChange = function () {
        this.hasChanged = true;
        this.hasEverChanged = true;
    };
    ApplicantContactComponent.prototype.onInternationalPhoneNumberChange = function () {
        this.applicant.phone = '';
        this.applicant.phoneExtension = '';
        this.onChange();
    };
    ApplicantContactComponent.prototype.onCancel = function (val) {
        this._user = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user);
        this.hasChanged = false;
    };
    ApplicantContactComponent.prototype.onSave = function (val) {
        // Use registration address as mailing address.
        if (this._user.useRegAddress) {
            this.primeDataService.user.mailAddress.copy(this._user.address);
        }
        else {
            this.primeDataService.user.mailAddress.copy(this._user.mailAddress);
        }
        this.primeDataService.user.useRegAddress = this._user.useRegAddress;
        // Other updateable fields
        this.primeDataService.user.phone = this._user.phone;
        this.primeDataService.user.email = this._user.email;
        // Preferred Name fields
        if (this._user.hasPreferName) {
            this.primeDataService.user.hasPreferName = this._user.hasPreferName;
            this.primeDataService.user.preferFirstName = this._user.preferFirstName;
            this.primeDataService.user.preferMiddleName = this._user.preferMiddleName;
            this.primeDataService.user.preferLastName = this._user.preferLastName;
        }
        else {
            this.primeDataService.user.hasPreferName = this._user.hasPreferName;
            this.primeDataService.user.preferFirstName = null;
            this.primeDataService.user.preferMiddleName = null;
            this.primeDataService.user.preferLastName = null;
        }
        this.hasChanged = false;
    };
    // Update mailAddress with information in the input field that the user is
    // currently updating
    ApplicantContactComponent.prototype.updateStreet = function (event) {
        this.copyRegAddress();
        this._user.mailAddress.street = event;
    };
    ApplicantContactComponent.prototype.updateProvince = function (event) {
        this.copyRegAddress();
        this._user.mailAddress.province = event;
    };
    ApplicantContactComponent.prototype.updateCountry = function (event) {
        this.copyRegAddress();
        this._user.mailAddress.country = event;
    };
    ApplicantContactComponent.prototype.updateCity = function (event) {
        this.copyRegAddress();
        this._user.mailAddress.city = event;
    };
    ApplicantContactComponent.prototype.updatePostal = function (event) {
        this.copyRegAddress();
        this._user.mailAddress.postal = event;
    };
    ApplicantContactComponent.prototype.updatePrefLastName = function (event) {
        this._user.preferLastName = event;
    };
    ApplicantContactComponent.prototype.updatePrefMiddleName = function (event) {
        this._user.preferMiddleName = event;
    };
    ApplicantContactComponent.prototype.updatePrefFirstName = function (event) {
        this._user.preferFirstName = event;
    };
    ApplicantContactComponent.prototype.getPhoneMask = function () {
        if (!this.applicant.hasInternationalPhoneNumber) {
            // return  { mask: this.phoneMask };
            return this.phoneMask;
        }
        //TODO: FINISH THIS OFF AND TEST THAT TOGGLING ACTUALLY WORKS
        return false;
    };
    // Copy registration address into mailing
    ApplicantContactComponent.prototype.copyRegAddress = function () {
        if (this._user.mailAddress.isEmpty()) {
            this._user.mailAddress.copy(this._user.address);
        }
        // Set useRegAddress to false as user is attempting to update
        this._user.useRegAddress = false;
    };
    ApplicantContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-applicant-contact',
            template: __webpack_require__(/*! ./applicant-contact.component.html */ "./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.html"),
            styles: [__webpack_require__(/*! ./applicant-contact.component.scss */ "./src/app/modules/applicant/pages/applicant-contact/applicant-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], ApplicantContactComponent);
    return ApplicantContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-alert>\n  System Notification: Server will be down for 2 hours maintenance at 14:30 PT.\n</prime-alert>\n\n<section class='dashboard-cards row'>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        Contact Information\n        <a routerLink=\"/applicant/contact\">\n          <i class=\"fa fa-edit fa-2x text-muted\"></i>\n        </a>\n      </div>\n      <div class=\"card-body d-flex justify-content-between\">\n        <div class=\"photocol\">\n          <img class=\"photo\" src=\"assets/photoPlaceholder.png\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"appcol\">\n          <p>{{applicant.name}}</p>\n          <p>{{applicant.phone}}</p>\n          <p>{{applicant.email}}</p>\n        </div>\n\n        <i class=\"fa fa-check-circle text-success fa-3x pull-right\" aria-hidden=\"true\"></i>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        Professional Information\n        <a routerLink=\"/applicant/professional\">\n          <i class=\"fa fa-edit fa-2x text-muted\"></i>\n        </a>\n      </div>\n      <div *ngIf=\"applicant.hasCollege || applicant.isWorkingOnBehalf\"\n      class=\"card-body d-flex justify-content-between\">\n\n        <div>\n          <ng-container *ngIf=\"applicant.hasCollege\">\n            <p>{{collegeType}}</p>\n            <p>Practitioner College ID: {{licenceNumber}}</p>\n            <p>Registration Renewal Date: {{ licenceExpiryDate }}</p>\n          </ng-container>\n          <p *ngIf=\"applicant.isWorkingOnBehalf\">Job Title: {{jobTitle}}</p>\n        </div>\n\n        <i class=\"fa fa-check-circle text-success fa-3x pull-right\" aria-hidden=\"true\"></i>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 mt-4\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between\">\n        Terms & Conditions of Access\n        <a routerLink=\"/applicant/access-acceptance\">\n          <i class=\"fa fa-edit fa-2x text-muted\"></i>\n        </a>\n      </div>\n      <div class=\"card-body d-flex justify-content-between\">\n        <p>Renewal Date: {{ renewalDate }}</p>\n        <i *ngIf=\"!applicant.hasUAARequiringAttention()\" class=\"fa fa-check-circle text-success fa-3x pull-right\" aria-hidden=\"true\"></i>\n        <i *ngIf=\"applicant.hasUAARequiringAttention()\" class=\"fa fa-exclamation-triangle text-warning fa-3x pull-right\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 mt-4\">\n    <div class=\"card {{ showPharmaNetAccessWarning() ? 'card-warning' : '' }}\">\n      <div class=\"card-header d-flex justify-content-between\">\n        <label *ngIf=\"showPharmaNetAccessWarning\">PharmaNet Access</label>\n        <label *ngIf=\"!showPharmaNetAccessWarning\">Active Enrolment</label>\n        <a routerLink=\"/applicant/pharma-net\">\n          <i class=\"fa fa-edit fa-2x text-muted\"></i>\n        </a>\n      </div>\n      <div class=\"card-body d-flex justify-content-between align-items-center\" *ngIf='!showPharmaNetAccessWarning(); else pharmaNetAccessWarning'>\n        <div class=\"pharma-net-container\">\n          <span class=\"pharma-net-fact\"><span class=\"circle-num\">{{ orgCount }}</span> Organization</span>\n          <span class=\"pharma-net-fact\"><span class=\"circle-num\">{{ siteCount }}</span> Sites</span>\n        </div>\n\n        <p class=\"text-success text-bold\" *ngIf='!hasHandledSites; else checkMark'>Enrolment Requested</p>\n        <ng-template #checkMark>\n          <p class=\"text-success text-bold\">Enrolment Active</p>\n          <i class=\"fa fa-check-circle text-success fa-3x pull-right\" aria-hidden=\"true\"></i>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n\n</section>\n\n<ng-template #emptySection>\n  <div class=\"card-body bg-warning text-center d-flex flex-column align-items-center\">\n    <p>Please Update Information</p>\n  </div>\n</ng-template>\n\n\n<ng-template #pharmaNetAccessWarning>\n  <div class=\"card-body d-flex justify-content-between align-items-center\" >\n    <div class=\"pharma-net-container\">\n        <span class=\"pharma-net-fact\"><span class=\"circle-num circle-num-warning\">{{ sitesRequiringAttention }}</span> <span class='text-bold'> NEW</span> Sites need your attention</span>\n      </div>\n\n      <i class=\"fa fa-exclamation-circle text-warning fa-3x pull-right\" aria-hidden=\"true\"></i>\n      <!-- <i class=\"fa fa-check-circle text-success fa-3x pull-right\" aria-hidden=\"true\"></i> -->\n\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%; }\n\n.photocol {\n  height: 70%;\n  width: 25%; }\n\n.photo {\n  width: 95%;\n  height: 80%;\n  max-width: 10em; }\n\n.appcol {\n  width: 65%; }\n\n.circle-num {\n  border: 3px solid #adb5bd;\n  font-size: 18px;\n  color: #6c757d;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  line-height: 40px;\n  text-align: center;\n  display: inline-block; }\n\n.circle-num-warning {\n  border-color: #f3cd65;\n  color: #f3cd65; }\n\n.pharma-net-fact {\n  margin-right: 2em; }\n\n.text-bold {\n  font-weight: bold; }\n\n.card-warning {\n  background-color: #f9e4ac; }\n\n.card-warning .card-body {\n    background-color: #fefbf3; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApplicantDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantDashboardComponent", function() { return ApplicantDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/colleges.enum */ "./src/app/models/colleges.enum.ts");
/* harmony import */ var ngx_bootstrap_chronos_test_chain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/chronos/test/chain */ "./node_modules/ngx-bootstrap/chronos/test/chain.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApplicantDashboardComponent = /** @class */ (function () {
    function ApplicantDashboardComponent(primeDataService, router) {
        this.primeDataService = primeDataService;
        this.router = router;
        this._dateFormat = 'MMM DD, YYYY';
    }
    ApplicantDashboardComponent.prototype.ngOnInit = function () {
        // Redirect to contact page to be completed, if applicant is missing information
        if (environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].skipRedirects) {
            return;
        }
        // Disabled redirects for now
        // if (!this.contactDone) {
        //   const link = '/applicant/contact';
        //   this.router.navigate([link]);
        // } else if (!this.professionalDone) {
        //   const link = '/applicant/professional';
        //   this.router.navigate([link]);
        // //} else if (!this.accessAcceptanceDone) {
        // //  const link = '/applicant/access-acceptance';
        // //  this.router.navigate([link]);
        // }
    };
    Object.defineProperty(ApplicantDashboardComponent.prototype, "applicant", {
        get: function () {
            return this.primeDataService.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "userSiteEnrollmentData", {
        /**
         * List of enrollments for the user
         * @returns {ApplEnrollmentRowItem[]}
         */
        get: function () {
            // functions creates a copy of data - uses map functionality
            return this.primeDataService.getUserSiteEnrollment();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "contactDone", {
        get: function () {
            return this.applicant.hasContactInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "professionalDone", {
        get: function () {
            if (this.applicant.hasCollege && this.applicant.isWorkingOnBehalf) {
                return false;
            }
            return this.applicant.hasCollege || this.applicant.isWorkingOnBehalf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "accessAcceptanceDone", {
        get: function () {
            return !!this.applicant.accessAcceptance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "collegeType", {
        get: function () {
            var college = _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["CollegeHelper"].getFullCollegeNameFromString(this.applicant.collegeCertificationList[0].collegeType);
            return college ? college : 'n/a';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "licenceNumber", {
        get: function () {
            var licence = this.applicant.collegeCertificationList[0].licenceNumber;
            return licence ? 'n/a' : licence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "licenceExpiryDate", {
        get: function () {
            var expiryDate = this.applicant.collegeCertificationList[0].licenceExpiryDate;
            return expiryDate ? 'n/a' : Object(ngx_bootstrap_chronos_test_chain__WEBPACK_IMPORTED_MODULE_4__["moment"])(expiryDate).format(this._dateFormat);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "jobTitle", {
        get: function () {
            var _this = this;
            var obj = Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["WorkingOnBehalfTitleTypes"]).filter(function (x) { return x === _this.applicant.workingOnBehalfList[0].jobTitle; });
            return (obj.length > 0) ? _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["WorkingOnBehalfTitleTypes"][obj[0]] : 'n/a';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "renewalDate", {
        get: function () {
            return this.applicant.renewalDate ? 'n/a' : Object(ngx_bootstrap_chronos_test_chain__WEBPACK_IMPORTED_MODULE_4__["moment"])(this.applicant.renewalDate).format(this._dateFormat);
        },
        enumerable: true,
        configurable: true
    });
    ApplicantDashboardComponent.prototype.showPharmaNetAccessWarning = function () {
        return this.sitesRequiringAttention >= 1;
    };
    Object.defineProperty(ApplicantDashboardComponent.prototype, "orgCount", {
        get: function () {
            return this.applicant.allOrganizations().length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "siteCount", {
        get: function () {
            return this.getAllSites().filter(function (site) { return site.siteAccess[0].status !== null; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "sitesRequiringAttention", {
        get: function () {
            return this.getAllSites().filter(function (site) { return site.siteAccess[0].status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_6__["EnrollmentStatus"].New; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantDashboardComponent.prototype, "hasHandledSites", {
        // Enrollment is requested when the user 
        // TODO rename? think it's opposite of what it is now
        get: function () {
            var _this = this;
            var handledSites = this.getAllSites().filter(function (site) {
                var sa = site.siteAccess.find(function (sa) { return sa.person.objectId === _this.applicant.objectId; });
                return sa.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_6__["EnrollmentStatus"].Active || sa.status === _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_6__["EnrollmentStatus"].Declined;
            });
            return handledSites.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ApplicantDashboardComponent.prototype.getAllSites = function () {
        if (!this.applicant.allOrganizations().length)
            return [];
        return this.applicant.allOrganizations()
            .map(function (orgs) { return orgs.members; }) // get all sites
            .reduce(function (a, b) { return a.concat(b); }); // concat into single array get # of sites
    };
    ApplicantDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-applicant-dashboard',
            template: __webpack_require__(/*! ./applicant-dashboard.component.html */ "./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./applicant-dashboard.component.scss */ "./src/app/modules/applicant/pages/applicant-dashboard/applicant-dashboard.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ApplicantDashboardComponent);
    return ApplicantDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-applicant-breadcrumbs\n  pageName=\"Professional\"\n  nextPageLink=\"/applicant/pharma-net\"\n  previousPageLink=\"/applicant/contact\"\n  (onSave)=\"onSave($event)\"\n  [shouldDisableContinue]='displayCannotContinueErrors()'>\n</prime-applicant-breadcrumbs>\n\n<prime-page-framework>\n\n  <h2 class='prime-title' id=\"profInfo\">Professional Information</h2>\n  <div>Your professional information is used to assign you to a user class,\n    which helps determine the PharmaNet access privileges you will receive.\n  </div>\n\n  <section class='my-3'>\n    <label>\n      <div>Are you a regulated health care professional?</div>\n      <prime-toggle [(data)]=\"applicant.hasCollege\" (click)=\"onChange()\"></prime-toggle>\n    </label>\n\n    <ng-container *ngIf=\"applicant.hasCollege === true\">\n      <div class='applicant-row border p-3' *ngFor=\"let collegeCertificationRecord of applicant.collegeCertificationList; let i = index\">\n\n          <div class=\"applicant-row--item prime-input-large\">\n            <label class=\"has-float-label\">\n              <select id=\"collegeTypesType\" class=\"form-control\" [(ngModel)]=\"collegeCertificationRecord.collegeType\" (input)=\"onChange()\">\n                <option value=\"pleaseSelect\" disabled selected>Select</option>\n                <option *ngFor=\"let type of CollegeTypes\" value=\"{{type}}\">\n                    {{ getFullCollegeName(type) }}\n                </option>\n              </select>\n              <span>College Registration</span>\n            </label>\n\n          </div>\n          <ng-container *ngIf=\"applicant.collegeCertificationList[i].collegeType !== 'pleaseSelect'\">\n            <div class=\"applicant-row--item prime-input-medium\">\n              <label class=\"has-float-label\">\n                <input type=\"text\" name=\"collegeNumber\" id=\"collegeNumber\" [value]=\"collegeCurrValue(applicant.collegeCertificationList[i].collegeType)\"\n                  class=\"form-control\" disabled>\n                <span>College Number</span>\n              </label>\n            </div>\n            <div class=\"applicant-row--item prime-input-medium\">\n              <label class=\"has-float-label\">\n                <input type=\"text\" name=\"licenceNumber\" id=\"licenceNumber\" [(ngModel)]=\"collegeCertificationRecord.licenceNumber\" maxlength=\"{{maxLengthValue('LICENCE_NUMBER')}}\"\n                  class=\"form-control\" (input)=\"onChange()\" placeholder=\" \">\n                <span>Practitioner College ID</span>\n              </label>\n            </div>\n            <div *ngIf=\"applicant.collegeCertificationList[i].collegeType === 'CPBC'\" class=\"applicant-row--item prime-input-large\">\n              <label class=\"has-float-label\">\n                <select id=\"licenceClassCP\" class=\"form-control\" [(ngModel)]=\"collegeCertificationRecord.licenceClassCPType\"\n                  (input)=\"onChange()\">\n                  <option value=\"pleaseSelect\" disabled selected>Select</option>\n                  <option *ngFor=\"let type of LicenceClassCPTypes\" value=\"{{type}}\">\n                    {{licenceClassCPValue(type)}}\n                  </option>\n                </select>\n                <span>Licence Class</span>\n              </label>\n            </div>\n            <div *ngIf=\"applicant.collegeCertificationList[i].collegeType === 'CRNBC'\" class=\"applicant-row--item prime-input-large\">\n              <label class=\"has-float-label\">\n                <select id=\"licenceClassCRN\" class=\"form-control\" [(ngModel)]=\"collegeCertificationRecord.licenceClassCRNType\"\n                  (input)=\"onChange()\">\n                  <option value=\"pleaseSelect\" disabled selected>Select</option>\n                  <option *ngFor=\"let type of LicenceClassCRNTypes\" value=\"{{type}}\">\n                    {{licenceClassCRNValue(type)}}\n                  </option>\n                </select>\n                <span>Licence Class</span>\n              </label>\n            </div>\n            <div *ngIf=\"applicant.collegeCertificationList[i].collegeType === 'CPSBC'\" class=\"applicant-row--item prime-input-large\">\n              <label class=\"has-float-label\">\n                <select id=\"licenceClassCPS\" class=\"form-control\" [(ngModel)]=\"collegeCertificationRecord.licenceClassCPSType\" (input)=\"onChange()\">\n                  <option value=\"pleaseSelect\" disabled selected>Select</option>\n                  <option *ngFor=\"let type of LicenceClassCPSTypes\" value=\"{{type}}\">\n                    {{licenceClassCPSValue(type)}}\n                  </option>\n                </select>\n                <span>Licence Class</span>\n              </label>\n            </div>\n            <div class=\"applicant-row--item prime-input-large\">\n\n              <prime-datepicker dateFormat=\"mmm. dd, yyyy\" [(date)]=\"collegeCertificationRecord.licenceExpiryDate\" labelText=\"College Registration Renewal Date\"></prime-datepicker>\n            </div>\n            <div *ngIf=\"applicant.collegeCertificationList[i].collegeType === 'CRNBC'\" class=\"applicant-row--item prime-input-large\">\n              <label class=\"has-float-label\">\n                <select id=\"advancedPracticeCertification\" class=\"form-control\" [(ngModel)]=\"collegeCertificationRecord.advancedPracticeCertificationType\"\n                  (input)=\"onChange()\">\n                  <option value=\"pleaseSelect\" disabled selected>Select</option>\n                  <option *ngFor=\"let type of AdvancedPracticeCertificationTypes\" value=\"{{type}}\">\n                    {{advancedPracticeCertificationValue(type)}}\n                  </option>\n                </select>\n                <span>Advanced Practice Certification</span>\n              </label>\n            </div>\n          </ng-container>\n\n\n        <!-- Buttons -->\n        <span class='d-flex align-items-center ml-auto'>\n          <ng-container *ngIf=\"i > 0\">\n            <a class='mx-1' (click)=\"deleteCollegeCertification(i)\">\n              <i class=\"fa fa-times-circle fa-2x\" aria-label=\"Delete\"></i>\n            </a>\n          </ng-container>\n          <ng-container *ngIf=\"collegeCertificationValid(i)\n          && i === applicant.collegeCertificationList.length - 1\">\n            <a class='mx-1' (click)=\"addCollegeCertification()\">\n              <i class=\"fa fa-plus-circle fa-2x\" aria-label=\"Add\"></i>\n            </a>\n          </ng-container>\n        </span>\n      </div>\n    </ng-container>\n  </section>\n\n\n  <section *ngIf=\"displayDeviceProviderSection()\" class='my-3'>\n\n    <label>\n      <div>Are you a Device Provider?</div>\n      <div>A Device Provider is enroled in the device provider class, and associated sub-classes, under the Pharmaceutical Services Act, Provider Regulation.</div>\n      <prime-toggle [(data)]=\"applicant.isDeviceProvider\" (click)=\"onChange()\"></prime-toggle>\n    </label>\n\n    <ng-container *ngIf=\"applicant.isDeviceProvider === true\">\n      <div class='d-flex justify-content-between border p-3'>\n          <label class=\"has-float-label prime-input-large\">\n            <input type=\"text\" name=\"deviceProviderNumber\" id=\"deviceProviderNumber\" placeholder=\" \"\n                   [(ngModel)]=\" applicant.deviceProviderNumber\" maxlength=\"{{maxLengthValue('DEVICE_PROVIDER_NUMBER')}}\"\n              class=\"form-control\" (input)=\"onChange()\">\n            <span>Device Provider Number</span>\n          </label>\n      </div>\n    </ng-container>\n  </section>\n\n\n  <div *ngIf=\"displayWorkingOnBehalfSection()\" class='my-3'>\n\n    <label>\n      <div>Are you accessing PharmaNet on behalf of a regulated health care professional or a Device Provider?</div>\n      <prime-toggle [(data)]=\"applicant.isWorkingOnBehalf\" (click)=\"onChange()\"></prime-toggle>\n    </label>\n\n    <ng-container *ngIf=\"applicant.isWorkingOnBehalf === true\">\n      <div class='applicant-row border p-3' *ngFor=\"let workingOnBehalfRecord of applicant.workingOnBehalfList; let i = index\">\n        <div class=\"applicant-row--item prime-input-large\">\n          <label class=\"has-float-label\">\n            <select id=\"workingOnBehalfTitle\" class=\"form-control row-dropbox-20\" [(ngModel)]=\"workingOnBehalfRecord.jobTitle\" (input)=\"onChange()\">\n              <option value=\"pleaseSelect\" disabled selected>Select</option>\n              <option *ngFor=\"let type of WorkingOnBehalfTitleTypes\" value=\"{{type}}\">\n                {{workingOnBehalfTitleValue(type)}}\n              </option>\n            </select>\n            <span>Job Title</span>\n          </label>\n        </div>\n\n        <div class=\"applicant-row--item\" *ngIf=\"applicant.workingOnBehalfList[0].jobTitle === 'OTHER'\">\n            <label class=\"has-float-label\">\n              <input type=\"text\" class='prime-input-large' placeholder=\" \" [(ngModel)]=\"applicant.workingOnBehalfOtherReason\"/>\n              <span>On-Behalf-of User Job Title</span>\n            </label>\n        </div>\n\n      </div>\n    </ng-container>\n  </div>\n\n\n  <section *ngIf=\"displaySelfDeclarationSection()\">\n\n    <h2 class='prime-title' id=\"selfDeclaration\">Self Declaration  Professional History</h2>\n    <div>The information you provide here will determine whether or not a manual review is required. Upload any supporting documents as needed.</div>\n    <hr>\n\n    <div class='my-3'>\n      <div>Have you ever been the subject of an order or a conviction for an information contravention?</div>\n      <prime-toggle [(data)]=\"applicant.informationContravention.flag\" (click)=\"onChange()\"></prime-toggle>\n    </div>\n    <div *ngIf=\"applicant.informationContravention.flag\">\n      <label class=\"has-float-label\">\n        <span>Please provide details</span>\n        <textarea class=\"selfDeclarationTextArea\" name=\"informationContraventionDetail\" id=\"informationContraventionDetail\" [(ngModel)]=\"applicant.informationContravention.detail\"\n          (input)=\"onChange()\"></textarea>\n      </label>\n    </div>\n\n    <div class='my-3'>\n      <div>\n        Have you ever had your registration with a governing body of a health profession suspended or cancelled?\n      </div>\n      <prime-toggle [(data)]=\"applicant.cancelledRegistration.flag\" (click)=\"onChange()\"></prime-toggle>\n    </div>\n    <div *ngIf=\"applicant.cancelledRegistration.flag\">\n      <label class=\"has-float-label\">\n        <span>Please provide details</span>\n        <textarea class=\"selfDeclarationTextArea\" name=\"cancelledRegistrationDetail\" id=\"cancelledRegistrationDetail\" [(ngModel)]=\"applicant.cancelledRegistration.detail\"\n          (input)=\"onChange()\"></textarea>\n      </label>\n    </div>\n\n    <div class='my-3'>\n      <div>\n        Have you ever had Limits and Conditions imposed on your licence as a result of disciplinary actions taken by the governing body of a Health Profession?\n      </div>\n      <prime-toggle [(data)]=\"applicant.licenceCondition.flag\" (click)=\"onChange()\"></prime-toggle>\n\n    </div>\n    <div *ngIf=\"applicant.licenceCondition.flag\">\n\n      <label class=\"has-float-label\">\n        <span>Please provide details</span>\n        <textarea class=\"selfDeclarationTextArea\" name=\"licenceConditionDetail\" id=\"licenceConditionDetail\"\n          [(ngModel)]=\"applicant.licenceCondition.detail\" (input)=\"onChange()\"></textarea>\n      </label>\n\n\n    </div>\n\n    <div class='my-3'>\n      <div>\n        Have you ever had your access to PharmaNet suspended or revoked?\n      </div>\n      <prime-toggle [(data)]=\"applicant.revokedAccess.flag\" (click)=\"onChange()\"></prime-toggle>\n    </div>\n    <div *ngIf=\"applicant.revokedAccess.flag\">\n\n      <label class=\"has-float-label\">\n        <span>Please provide details</span>\n        <textarea class=\"selfDeclarationTextArea\" name=\"revokedAccessDetail\" id=\"revokedAccessDetail\"\n          [(ngModel)]=\"applicant.revokedAccess.detail\" (input)=\"onChange()\"></textarea>\n      </label>\n\n\n    </div>\n\n  </section>\n\n  <section *ngIf=\"displayCannotContinueErrors()\">\n    <h2 class='text-danger'>The selections you have made above make you ineligible to continue.</h2>\n  </section>\n\n\n  <div right>\n    <div *ngIf=\"displayUploadSection()\">\n      <div class=\"d-flex justify-content-start align-items-center\">\n        <i class=\"fa fa-upload fa-2x mx-2\" aria-label=\"Delete\"></i>\n        <h2>Upload your documents</h2>\n      </div>\n      <span class=\"note\">Scan the document, or take a photo of it. Make sure that it's:</span>\n      <ul class=\"note\">\n        <li>The entire document, from corner to corner</li>\n        <li>At least 1000 pixels wide x 1500 pixels tall</li>\n        <li>Rotated correctly (not upside down or sideways)</li>\n        <li>In focus and easy to read</li>\n        <li>A JPG, PNG, GIF or BMP file (\n          <b>not a PDF</b>)</li>\n      </ul>\n      <prime-file-uploader>\n        <span class=\"note\">Please upload required supporting  documents</span>\n      </prime-file-uploader>\n    </div>\n  </div>\n\n\n</prime-page-framework>\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selfDeclarationTextArea {\n  width: 100%;\n  height: 75px; }\n\n.note {\n  color: #252525;\n  font-size: 85%; }\n\n.fa-plus-circle {\n  color: green; }\n\n.fa-times-circle {\n  color: red; }\n\n.fa-upload {\n  color: #036; }\n\n.with-top-margin {\n  margin-top: 10px; }\n\n.applicant-row {\n  display: flex;\n  flex-flow: row wrap; }\n\n.applicant-row > .applicant-row--item {\n    margin: 0.5em 1em; }\n\n@media (max-width: 767.98px) {\n      .applicant-row > .applicant-row--item {\n        flex-basis: 100%; } }\n\n@media (min-width: 768px) {\n    .applicant-row > .applicant-row--dropdown {\n      flex-basis: 30%; } }\n\n.sameLevel {\n  position: relative;\n  top: 500px;\n  background-color: yellow; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ApplicantProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantProfessionalComponent", function() { return ApplicantProfessionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/colleges.enum */ "./src/app/models/colleges.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicantProfessionalComponent = /** @class */ (function () {
    function ApplicantProfessionalComponent(primeDataService) {
        this.primeDataService = primeDataService;
        this.workingOnBehalfTotal = 0;
        this.hasChanged = false;
    }
    ApplicantProfessionalComponent.prototype.ngOnInit = function () {
        // Clone user clas
        this._user = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user);
        this.workingOnBehalfTotal = this._user.workingOnBehalfList.length - 1;
    };
    Object.defineProperty(ApplicantProfessionalComponent.prototype, "applicant", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    //
    // Record related
    //
    ApplicantProfessionalComponent.prototype.addCollegeCertification = function () {
        this._user.collegeCertificationList.push({
            collegeType: 'pleaseSelect',
            licenceNumber: '',
            licenceClassCPType: 'pleaseSelect',
            licenceClassCRNType: 'pleaseSelect',
            licenceClassCPSType: 'pleaseSelect',
            licenceExpiryDate: null,
            advancedPracticeCertificationType: 'pleaseSelect'
        });
        this.onChange();
    };
    ApplicantProfessionalComponent.prototype.deleteCollegeCertification = function (i) {
        console.log("delete index " + i, this._user.collegeCertificationList);
        this._user.collegeCertificationList.splice(i, 1);
        this.onChange();
    };
    // addWorkingOnBehalf() {
    //   if(this.workingOnBehalfTotal < this.WorkingOnBehalfTitleTypesCount() - 1) {
    //     this._user.workingOnBehalfList.push({ jobTitle: 'pleaseSelect' });
    //     this.workingOnBehalfTotal++;
    //     this.onChange();
    //   }
    // }
    // deleteWorkingOnBehalf(i){
    //   console.log(`delete index ${i}`, this._user.workingOnBehalfList);
    //   this._user.workingOnBehalfList.splice(i, 1);
    //   this.workingOnBehalfTotal--;
    //   this.onChange();
    // }
    ApplicantProfessionalComponent.prototype.onChange = function () {
        this.hasChanged = true;
    };
    ApplicantProfessionalComponent.prototype.onSave = function (val) {
        // toggles
        this.primeDataService.user.hasCollege = this._user.hasCollege;
        this.primeDataService.user.isDeviceProvider = this._user.isDeviceProvider;
        this.primeDataService.user.isWorkingOnBehalf = this._user.isWorkingOnBehalf;
        // toggle related arrays
        this.primeDataService.user.collegeCertificationList = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._user.collegeCertificationList);
        this.primeDataService.user.deviceProviderNumber = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._user.deviceProviderNumber);
        this.primeDataService.user.workingOnBehalfList = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._user.workingOnBehalfList);
        // Self declaration related
        this.primeDataService.user.informationContravention = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._user.informationContravention);
        this.primeDataService.user.cancelledRegistration = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._user.cancelledRegistration);
        this.primeDataService.user.licenceCondition = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._user.licenceCondition);
        this.primeDataService.user.revokedAccess = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._user.revokedAccess);
        this.hasChanged = false;
    };
    ApplicantProfessionalComponent.prototype.onCancel = function (val) {
        // toggles
        this._user.hasCollege = this.primeDataService.user.hasCollege;
        this._user.isDeviceProvider = this.primeDataService.user.isDeviceProvider;
        this._user.isWorkingOnBehalf = this.primeDataService.user.isWorkingOnBehalf;
        // toggle related arrays
        this._user.collegeCertificationList = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user.collegeCertificationList);
        this._user.deviceProviderNumber = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user.deviceProviderNumber);
        this._user.workingOnBehalfList = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user.workingOnBehalfList);
        // Self declaration related
        this._user.informationContravention = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user.informationContravention);
        this._user.cancelledRegistration = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user.cancelledRegistration);
        this._user.licenceCondition = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user.licenceCondition);
        this._user.revokedAccess = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.primeDataService.user.revokedAccess);
        this.hasChanged = false;
    };
    Object.defineProperty(ApplicantProfessionalComponent.prototype, "CollegeTypes", {
        //
        // Enum related
        //
        // Make enum accessible to template
        get: function () {
            return Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["CollegeTypes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantProfessionalComponent.prototype, "LicenceClassCPTypes", {
        // Make enum accessible to template
        get: function () {
            return Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["LicenceClassCPTypes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantProfessionalComponent.prototype, "LicenceClassCRNTypes", {
        // Make enum accessible to template
        get: function () {
            return Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["LicenceClassCRNTypes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantProfessionalComponent.prototype, "LicenceClassCPSTypes", {
        // Make enum accessible to template
        get: function () {
            return Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["LicenceClassCPSTypes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantProfessionalComponent.prototype, "AdvancedPracticeCertificationTypes", {
        // Make enum accessible to template
        get: function () {
            return Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["AdvancedPracticeCertificationTypes"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantProfessionalComponent.prototype, "WorkingOnBehalfTitleTypes", {
        // Make enum accessible to template
        get: function () {
            return Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["WorkingOnBehalfTitleTypes"]);
        },
        enumerable: true,
        configurable: true
    });
    ApplicantProfessionalComponent.prototype.WorkingOnBehalfTitleTypesCount = function () {
        return Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["WorkingOnBehalfTitleTypes"]).length;
    };
    ApplicantProfessionalComponent.prototype.collegeCurrValue = function (selection) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["CollegeTypes"][selection];
    };
    ApplicantProfessionalComponent.prototype.licenceClassCPValue = function (selection) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["LicenceClassCPTypes"][selection];
    };
    ApplicantProfessionalComponent.prototype.licenceClassCRNValue = function (selection) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["LicenceClassCRNTypes"][selection];
    };
    ApplicantProfessionalComponent.prototype.licenceClassCPSValue = function (selection) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["LicenceClassCPSTypes"][selection];
    };
    ApplicantProfessionalComponent.prototype.advancedPracticeCertificationValue = function (selection) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["AdvancedPracticeCertificationTypes"][selection];
    };
    ApplicantProfessionalComponent.prototype.workingOnBehalfTitleValue = function (selection) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["WorkingOnBehalfTitleTypes"][selection];
    };
    ApplicantProfessionalComponent.prototype.maxLengthValue = function (selection) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["MaxLengthTypes"][selection];
    };
    //
    // Conditional layout related
    //
    ApplicantProfessionalComponent.prototype.collegeCertificationValid = function (i) {
        if (this._user.collegeCertificationList[i].collegeType !== 'pleaseSelect'
            && this._user.collegeCertificationList[i].licenceNumber.length
            && this._user.collegeCertificationList[i].licenceExpiryDate !== null
            && this._user.collegeCertificationList[i].licenceExpiryDate.valueOf() > 0
            && ((this._user.collegeCertificationList[i].collegeType === 'CPBC'
                && this._user.collegeCertificationList[i].licenceClassCPType !== 'pleaseSelect')
                || (this._user.collegeCertificationList[i].collegeType === 'CRNBC'
                    && this._user.collegeCertificationList[i].licenceClassCRNType !== 'pleaseSelect'
                    && this._user.collegeCertificationList[i].advancedPracticeCertificationType !== 'pleaseSelect')
                || (this._user.collegeCertificationList[i].collegeType === 'CPSBC'
                    && this._user.collegeCertificationList[i].licenceClassCPSType !== 'pleaseSelect'))) {
            return true;
        }
        else {
            return false;
        }
    };
    ApplicantProfessionalComponent.prototype.displayDeviceProviderSection = function () {
        if (this.collegeCertificationValid(0) && this._user.collegeCertificationList[0].collegeType === 'CPBC') {
            return true;
        }
        else if (this.applicant.hasCollege === false) {
            return true;
        }
        else {
            return false;
        }
    };
    //FIXME: SHOULD only display if previous two sections are No. Currently it shows REGARDLESS of what the users answer is.
    ApplicantProfessionalComponent.prototype.displayWorkingOnBehalfSection = function () {
        /*if (this.displayDeviceProviderSection()){
          return this._user.isDeviceProvider === false;
        }
        else if (this.collegeCertificationValid(0)) {
          return this._user.collegeCertificationList[0].collegeType !== 'CPBC';
        }
        else if (this.applicant.hasCollege === false){
          return true;
        }*/
        if (this.applicant.hasCollege === false && this.applicant.isDeviceProvider === false) {
            return true;
        }
        else {
            return false;
        }
        ;
    };
    ApplicantProfessionalComponent.prototype.displaySelfDeclarationSection = function () {
        /* if (this._user.hasCollege === false && this._user.isWorkingOnBehalf === false){
           return false;
         }
     
         if (this._user.hasCollege === true) {
           return true;
         }
     
         // User has filled out 'on behalf' section
         if (this.displayWorkingOnBehalfSection() && this._user.workingOnBehalfList[0].jobTitle !== 'pleaseSelect' && this._user.workingOnBehalfList[0].jobTitle !== 'OTHER'){
           return true;
         }
     
         // If the user has filled out the 'Other' reason
         if (this._user.workingOnBehalfOtherReason && this._user.workingOnBehalfList.length){
           return true;
         }
     
         // User has filled out device provider
         else if (this.displayDeviceProviderSection() && this._user.deviceProviderNumber) {
           return true;
         }*/
        // User has said 'no' to each section
        // else if (this.displayDeviceProviderSection() && this.displayWorkingOnBehalfSection() && this._user.isWorkingOnBehalf === false) {
        //   return true;
        // }
        return true;
    };
    ApplicantProfessionalComponent.prototype.displayCannotContinueErrors = function () {
        if (this._user.isDeviceProvider) {
            return false;
        }
        return this._user.hasCollege === false && this._user.isWorkingOnBehalf === false;
    };
    ApplicantProfessionalComponent.prototype.getFullCollegeName = function (name) {
        return _models_colleges_enum__WEBPACK_IMPORTED_MODULE_3__["CollegeHelper"].getFullCollegeNameFromString(name);
    };
    ApplicantProfessionalComponent.prototype.displayUploadSection = function () {
        if (this._user.informationContravention.flag
            || this._user.cancelledRegistration.flag
            || this._user.licenceCondition.flag
            || this._user.revokedAccess.flag) {
            return true;
        }
        else {
            return false;
        }
    };
    ApplicantProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-applicant-professional',
            template: __webpack_require__(/*! ./applicant-professional.component.html */ "./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.html"),
            styles: [__webpack_require__(/*! ./applicant-professional.component.scss */ "./src/app/modules/applicant/pages/applicant-professional/applicant-professional.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], ApplicantProfessionalComponent);
    return ApplicantProfessionalComponent;
}());



/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-applicant-breadcrumbs pageName=\"Review & Submit\" previousPageLink=\"/applicant/access-acceptance\" nextPageLink=\"/applicant/dashboard\"\n  [shouldDisableContinue]=\"false\" [isButtonSubmitting]='true' (onSetHasCompletedWizardFlag)=\"onSetHasCompletedWizardFlag($event)\">\n</prime-applicant-breadcrumbs>\n\n<prime-page-framework>\n\n  <h2 class='prime-title' id=\"review-and-submit\">Review &amp; Submit</h2>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n\n\n      <h2 class='prime-title'>Contact Information\n        <i class=\"fa fa-pencil float-right pointer\" aria-hidden=\"true\" (click)=\"goToContactPage()\"></i>\n      </h2>\n      <section class=\"bg-light\">\n\n\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-6\">Name</div>\n          <div class=\"col-md-6 font-weight-bold\">{{applicant.name}}</div>\n        </div>\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-6\">Date of Birth</div>\n          <div class=\"col-md-6 font-weight-bold\">{{applicant.dateOfBirth | date: 'MMM. dd, yyyy'}}</div>\n        </div>\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-6\">Phone Number</div>\n          <div class=\"col-md-6 font-weight-bold\">{{applicant.phone}}</div>\n        </div>\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-6\">Extension Number</div>\n          <div class=\"col-md-6 font-weight-bold\">{{applicant.phoneExtension}}</div>\n        </div>\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-6\">Email</div>\n          <div class=\"col-md-6 font-weight-bold\">{{applicant.email}}</div>\n        </div>\n\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-6\">Address</div>\n          <div class=\"col-md-6 font-weight-bold\">{{applicant.address?.fullAddress}}</div>\n        </div>\n\n      </section>\n\n      <h2 class='prime-title'>Professional Information\n        <i class=\"fa fa-pencil float-right pointer\" aria-hidden=\"true\" (click)=\"goToProfessionalPage()\"></i>\n      </h2>\n\n      <section class=\"bg-light\">\n\n        <ng-container *ngIf=\"applicant.hasCollege\">\n          <div class=\"row p-md-1\">\n            <div class=\"col-md-6\">College Type</div>\n            <div class=\"col-md-6 font-weight-bold\">{{collegeType}}</div>\n          </div>\n          <div class=\"row p-md-1\">\n            <div class=\"col-md-6\">Licence Class</div>\n            <div class=\"col-md-6 font-weight-bold\">{{applicant.getLicenceClassByIndex()}}</div>\n          </div>\n          <div class=\"row p-md-1\">\n            <div class=\"col-md-6\">Licence Number</div>\n            <div class=\"col-md-6 font-weight-bold\">{{applicant.collegeCertificationList[0].licenceNumber}}</div>\n          </div>\n\n          <div class=\"row p-md-1\">\n            <div class=\"col-md-6\">Licence Expiry Date</div>\n            <div class=\"col-md-6 font-weight-bold\">{{licenceExpiryDate | date: 'MMM. dd, yyyy'}}</div>\n          </div>\n        </ng-container>\n\n\n        <div class=\"row p-md-1\" *ngIf=\"applicant.isWorkingOnBehalf\">\n          <div class=\"col-md-6\">Job Title</div>\n          <div class=\"col-md-6 font-weight-bold\">{{jobTitle}}</div>\n        </div>\n\n      </section>\n\n\n      <h2 class='prime-title'>PharmaNet Access\n        <i class=\"fa fa-pencil float-right pointer\" aria-hidden=\"true\" (click)=\"goToPharmaNetPage()\"></i>\n      </h2>\n\n      <section class=\"bg-light\">\n\n          <div class=\"row p-md-1\" *ngFor='let org of applicant.allOrganizations(); let i = index'>\n            <div class=\"col-md-6\">PharmaNet Organization {{ i + 1 }}</div>\n            <div class=\"col-md-6 font-weight-bold\">{{org.title}}</div>\n          </div>\n\n      </section>\n\n    </div>\n    <div class=\"col-md-6\">\n\n\n\n\n\n      <h2 class='prime-title'>Self Declaration\n        <i class=\"fa fa-pencil float-right pointer\" aria-hidden=\"true\" (click)=\"goToProfessionalPage()\"></i>\n      </h2>\n\n      <section class=\"bg-light\">\n\n\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-8\">Have you ever been the subject of an order or a conviction for an information contravention?</div>\n          <div class=\"col-md-3 offset-md-1 font-weight-bold\">{{ getSelfDeclarationAnswer(applicant.informationContravention.flag) }}</div>\n        </div>\n\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-8\">Have you ever had your registration with a governing body of a health profession suspended or cancelled?</div>\n          <div class=\"col-md-3 offset-md-1 font-weight-bold\">{{ getSelfDeclarationAnswer(applicant.cancelledRegistration.flag) }}</div>\n        </div>\n\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-8\">Have you ever had Terms and Conditions imposed on your licence as a result of disciplinary actions taken by a governing\n            body?\n          </div>\n          <div class=\"col-md-3 offset-md-1 font-weight-bold\">{{ getSelfDeclarationAnswer(applicant.licenceCondition.flag) }} </div>\n        </div>\n\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-8\">Have you ever had your access to PharmaNet suspended or revoked?</div>\n          <div class=\"col-md-3 offset-md-1 font-weight-bold\">{{ getSelfDeclarationAnswer(applicant.revokedAccess.flag) }}</div>\n        </div>\n\n      </section>\n\n      <h2 class='prime-title'>Terms & Conditions of Access\n        <i class=\"fa fa-pencil float-right pointer\" aria-hidden=\"true\" (click)=\"goToUAAPage()\"></i>\n      </h2>\n\n      <section class=\"bg-light\">\n        <div class=\"row p-md-1\" *ngFor=\"let clause of applicant.accessAcceptance; let i = index;\">\n          <div class=\"col-md-8\">Clause {{i + 1}}</div>\n          <div class=\"col-md-3 offset-md-1 font-weight-bold\">{{ getUAAAnswer( clause ) }}</div>\n        </div>\n\n        <div class=\"row p-md-1\">\n          <div class=\"col-md-8\">I declare that all information I provided is accurate</div>\n          <div class=\"col-md-3 offset-md-1 font-weight-bold\">{{ applicant.isDeclaredCheck ? 'Yes' : 'No' }}</div>\n        </div>\n      </section>\n\n\n    </div>\n  </div>\n\n\n\n</prime-page-framework>\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ApplicantReviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantReviewPageComponent", function() { return ApplicantReviewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _models_colleges_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/colleges.enum */ "./src/app/models/colleges.enum.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_bootstrap_chronos_test_chain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/chronos/test/chain */ "./node_modules/ngx-bootstrap/chronos/test/chain.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplicantReviewPageComponent = /** @class */ (function () {
    function ApplicantReviewPageComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this._dateFormat = 'MMM DD, YYYY';
    }
    ApplicantReviewPageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ApplicantReviewPageComponent.prototype, "applicant", {
        get: function () {
            return this.dataService.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantReviewPageComponent.prototype, "collegeType", {
        get: function () {
            var college = _models_colleges_enum__WEBPACK_IMPORTED_MODULE_2__["CollegeHelper"].getFullCollegeNameFromString(this.applicant.collegeCertificationList[0].collegeType);
            return college ? college : 'n/a';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantReviewPageComponent.prototype, "licenceExpiryDate", {
        get: function () {
            var expiryDate = this.applicant.collegeCertificationList[0].licenceExpiryDate;
            return (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(expiryDate)) ? 'n/a' : Object(ngx_bootstrap_chronos_test_chain__WEBPACK_IMPORTED_MODULE_4__["moment"])(expiryDate).format(this._dateFormat);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicantReviewPageComponent.prototype, "jobTitle", {
        get: function () {
            var _this = this;
            var obj = Object.keys(_models_colleges_enum__WEBPACK_IMPORTED_MODULE_2__["WorkingOnBehalfTitleTypes"]).filter(function (x) { return x === _this.applicant.workingOnBehalfList[0].jobTitle; });
            return (obj.length > 0) ? _models_colleges_enum__WEBPACK_IMPORTED_MODULE_2__["WorkingOnBehalfTitleTypes"][obj[0]] : 'n/a';
        },
        enumerable: true,
        configurable: true
    });
    ApplicantReviewPageComponent.prototype.onSetHasCompletedWizardFlag = function (val) {
        //This person has completed the wizard process so set their flag to true
        this.dataService.user._hasCompletedWizard = true;
    };
    /** Converts a boolean (from one of the Self Declaration answers) to a human readable string. */
    ApplicantReviewPageComponent.prototype.getSelfDeclarationAnswer = function (val) {
        return val ? 'Yes, details provided' : 'No';
    };
    ApplicantReviewPageComponent.prototype.getUAAAnswer = function (val) {
        return val ? 'Accepted' : 'Not accepted';
    };
    ApplicantReviewPageComponent.prototype.goToContactPage = function () {
        this.router.navigate(['applicant/contact']);
    };
    ApplicantReviewPageComponent.prototype.goToProfessionalPage = function () {
        this.router.navigate(['applicant/professional']);
    };
    ApplicantReviewPageComponent.prototype.goToUAAPage = function () {
        this.router.navigate(['applicant/access-acceptance']);
    };
    ApplicantReviewPageComponent.prototype.goToPharmaNetPage = function () {
        this.router.navigate(['applicant/pharma-net']);
    };
    ApplicantReviewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-applicant-review-page',
            template: __webpack_require__(/*! ./applicant-review-page.component.html */ "./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.html"),
            styles: [__webpack_require__(/*! ./applicant-review-page.component.scss */ "./src/app/modules/applicant/pages/applicant-review-page/applicant-review-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ApplicantReviewPageComponent);
    return ApplicantReviewPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/applicant/pages/complete-submission/complete-submission.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/complete-submission/complete-submission.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-page-framework>\n\n<ng-container *ngIf=\"showApplicantNewText; else applicantChangeText\">\n  \n    <h1 id=\"regInfo\">Enrolment Completed</h1>\n    <div>\n      <h2>\n        Your enrolment application was submitted successfully. Please wait for the provisioner to provision PharmaNet access\n        for you. You will be asked to confirm the provisioning once the provisioner completes their tasks. Please do not\n        attempt to access PharmaNet until you have confirmed.\n      </h2>\n    </div>\n</ng-container>\n  <div>\n    <label class=\"has-float-label\">\n      <button type=\"button\"\n              class=\"btn btn-primary mx-2\"\n              (click)=\"continue()\"\n              tabindex=\"0\">Ok</button>\n    </label>\n  </div>\n\n</prime-page-framework>\n\n<ng-template #applicantChangeText>\n    <h1 id=\"regInfo\">Provisioning Confirmed</h1>\n    <div>\n      <h2>\n        Thank you for confirming the provisioning at the specific sites. You now have access to PharmaNet at those confirmed sites.\n      </h2>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/applicant/pages/complete-submission/complete-submission.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/complete-submission/complete-submission.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/applicant/pages/complete-submission/complete-submission.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/complete-submission/complete-submission.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CompleteSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteSubmissionComponent", function() { return CompleteSubmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
/* harmony import */ var _models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/enrollment-status.enum */ "./src/app/models/enrollment-status.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompleteSubmissionComponent = /** @class */ (function () {
    function CompleteSubmissionComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.showApplicantNewText = true;
    }
    CompleteSubmissionComponent.prototype.ngOnInit = function () {
        // If any sites are Active or Declined, show the other text
        this.showApplicantNewText = this.dataService.user.allOrganizations()
            .map(function (org) {
            var sa = org.getSiteAccessWithStatus(_models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Active);
            sa.concat(org.getSiteAccessWithStatus(_models_enrollment_status_enum__WEBPACK_IMPORTED_MODULE_3__["EnrollmentStatus"].Declined));
            return sa;
        }).filter(function (arr) { return arr && arr.length >= 1; })
            .length === 0;
    };
    CompleteSubmissionComponent.prototype.continue = function () {
        this.router.navigate(['/applicant/dashboard']);
    };
    CompleteSubmissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-complete-submission',
            template: __webpack_require__(/*! ./complete-submission.component.html */ "./src/app/modules/applicant/pages/complete-submission/complete-submission.component.html"),
            styles: [__webpack_require__(/*! ./complete-submission.component.scss */ "./src/app/modules/applicant/pages/complete-submission/complete-submission.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_2__["PrimeDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CompleteSubmissionComponent);
    return CompleteSubmissionComponent;
}());



/***/ }),

/***/ "./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<prime-applicant-breadcrumbs\n  pageName=\"PharmaNet Access\"\n  nextPageLink=\"/applicant/access-acceptance\"\n  previousPageLink=\"/applicant/professional\"\n  [shouldDisableContinue]='!hasSelectedOrg'\n>\n</prime-applicant-breadcrumbs>\n\n<prime-pharma-net-access-list  [rowItems]=\"organizations\"></prime-pharma-net-access-list>"

/***/ }),

/***/ "./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PharmaNetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaNetPageComponent", function() { return PharmaNetPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/prime-data.service */ "./src/app/services/prime-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PharmaNetPageComponent = /** @class */ (function () {
    function PharmaNetPageComponent(dataService) {
        this.dataService = dataService;
        this.hasSelectedOrg = false;
    }
    PharmaNetPageComponent.prototype.ngOnInit = function () {
        this.organizations = this.applicant.allOrganizations();
    };
    PharmaNetPageComponent.prototype.ngDoCheck = function () {
        this.hasSelectedOrg = this.applicant.organizationAccess.length > 0;
        if (this.organizations.length !== this.applicant.allOrganizations().length) {
            console.log('updating orgs');
            this.organizations = this.applicant.allOrganizations();
        }
    };
    Object.defineProperty(PharmaNetPageComponent.prototype, "applicant", {
        get: function () {
            return this.dataService.user;
        },
        enumerable: true,
        configurable: true
    });
    PharmaNetPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prime-pharma-net-page',
            template: __webpack_require__(/*! ./pharma-net-page.component.html */ "./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.html"),
            styles: [__webpack_require__(/*! ./pharma-net-page.component.scss */ "./src/app/modules/applicant/pages/pharma-net-page/pharma-net-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_prime_data_service__WEBPACK_IMPORTED_MODULE_1__["PrimeDataService"]])
    ], PharmaNetPageComponent);
    return PharmaNetPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-applicant-applicant-module.js.map