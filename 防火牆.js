var __encode = 'jsjiami.com',
    _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function(_0xd642x1) { _0xd642x1[_0xb483[0]] = _0xb483[1] })(_a);
var __Oxd5414 = ["\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x7A\x78\x61\x73\x71\x77\x65\x64\x66\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x32\x2F\u767B\u5165\x2E\x68\x74\x6D\x6C", "\x6F\x6E\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65", "\x6F\x6E\x6B\x65\x79\x70\x72\x65\x73\x73", "\x63\x68\x65\x63\x6B\x54\x69\x6D\x65\x28\x29", "\x61\x62\x6F\x72\x74", "\x73\x69\x67\x6E\x61\x6C", "\x6A\x73\x6F\x6E", "\x65\x72\x72\x6F\x72", "\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74\x3A\x33\x30\x30\x30\x2F\x70\x6F\x73\x74\x73", "\x6F\x6E\x6B\x65\x79\x64\x6F\x77\x6E", "\x65\x76\x65\x6E\x74", "\x6B\x65\x79\x43\x6F\x64\x65", "\u7981\u6B62\x46\x31\x32", "\x63\x74\x72\x6C\x4B\x65\x79", "\x73\x68\x69\x66\x74\x4B\x65\x79", "\u7981\u6B62\x43\x74\x72\x6C\x2B\x53\x68\x69\x66\x74\x2B\x49", "\u7981\u6B62\x43\x74\x72\x6C\x2B\x75", "\u7981\u6B62\x43\x74\x72\x6C\x2B\x73", "\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75", "\u7981\u6B62\u53F3\u952E", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
var currentUrl = window[__Oxd5414[0x1]][__Oxd5414[0x0]];
var timefly = 5000;
var beginDt = new Date();
var gourl = __Oxd5414[0x2];
document[__Oxd5414[0x3]] = retime;
document[__Oxd5414[0x4]] = retime;
if (currentUrl == gourl) { clearInterval(__Oxd5414[0x5]) } else { setInterval(__Oxd5414[0x5], 20000) };

function retime() { beginDt = new Date() }

function checkTime() { nowDt = new Date(); if ((nowDt - beginDt) > timefly) { location[__Oxd5414[0x0]] = gourl } }
const Ajax = async(_0x6906x8, _0x6906x9, _0x6906xa) => {
    const _0x6906xb = new AbortController();
    setTimeout(() => { _0x6906xb[__Oxd5414[0x6]]() }, _0x6906xa);
    let _0x6906xc = {..._0x6906x9, signal: _0x6906xb[__Oxd5414[0x7]] };
    try { let _0x6906xd = await fetch(_0x6906x8, _0x6906xc); let _0x6906xe = await _0x6906xd[__Oxd5414[0x8]](); return _0x6906xe } catch (error) { console[__Oxd5414[0x9]](error) }
};
const getData = async() => { await Ajax(__Oxd5414[0xa], someOptions, 5000) };
document[__Oxd5414[0xb]] = function() { var _0x6906x10 = window[__Oxd5414[0xc]] || arguments[0x0]; if (_0x6906x10[__Oxd5414[0xd]] == 123) { alert(__Oxd5414[0xe]); return false } else { if ((_0x6906x10[__Oxd5414[0xf]]) && (_0x6906x10[__Oxd5414[0x10]]) && (_0x6906x10[__Oxd5414[0xd]] == 73)) { alert(__Oxd5414[0x11]); return false } else { if ((_0x6906x10[__Oxd5414[0xf]]) && (_0x6906x10[__Oxd5414[0xd]] == 85)) { alert(__Oxd5414[0x12]); return false } else { if ((_0x6906x10[__Oxd5414[0xf]]) && (_0x6906x10[__Oxd5414[0xd]] == 83)) { alert(__Oxd5414[0x13]); return false } } } } };
document[__Oxd5414[0x14]] = function() { alert(__Oxd5414[0x15]); return false };
(function(_0x6906x11, _0x6906x12, _0x6906x13, _0x6906x14, _0x6906x15, _0x6906x16) {
    _0x6906x16 = __Oxd5414[0x16];
    _0x6906x14 = function(_0x6906x17) { if (typeof alert !== _0x6906x16) { alert(_0x6906x17) }; if (typeof console !== _0x6906x16) { console[__Oxd5414[0x17]](_0x6906x17) } };
    _0x6906x13 = function(_0x6906x18, _0x6906x11) { return _0x6906x18 + _0x6906x11 };
    _0x6906x15 = _0x6906x13(__Oxd5414[0x18], _0x6906x13(_0x6906x13(__Oxd5414[0x19], __Oxd5414[0x1a]), __Oxd5414[0x1b]));
    try { _0x6906x11 = __encode; if (!(typeof _0x6906x11 !== _0x6906x16 && _0x6906x11 === _0x6906x13(__Oxd5414[0x1c], __Oxd5414[0x1d]))) { _0x6906x14(_0x6906x15) } } catch (e) { _0x6906x14(_0x6906x15) }
})({})
var __encode = 'jsjiami.com',
    _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function(_0xd642x1) { _0xd642x1[_0xb483[0]] = _0xb483[1] })(_a);
var __Oxd550e = ["\x65\x76\x65\x6E\x74", "\x74\x61\x72\x67\x65\x74", "\x73\x72\x63\x45\x6C\x65\x6D\x65\x6E\x74", "\x74\x79\x70\x65", "\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x72\x65\x61\x64\x6F\x6E\x6C\x79", "\x65\x6E\x61\x62\x6C\x65\x64", "\x6B\x65\x79\x43\x6F\x64\x65", "\x70\x61\x73\x73\x77\x6F\x72\x64", "\x74\x65\x78\x74", "\x74\x65\x78\x74\x61\x72\x65\x61", "\u03BF\x6E\x6B\x65\x79\x70\x72\x65\x73\x73", "\u03BF\x6E\x6B\x65\x79\x64\u03BF\x77\x6E", "\x43\x61\x63\x68\x65\x2D\x43\x6F\x6E\x74\x72\x6F\x6C", "\x6E\x6F\x2D\x63\x61\x63\x68\x65", "\x73\x65\x74\x48\x65\x61\x64\x65\x72", "\x6E\x6F\x2D\x73\x74\x6F\x72\x65", "\x45\x78\x70\x69\x72\x65\x73", "\x73\x65\x74\x44\x61\x74\x65\x48\x65\x61\x64\x65\x72", "\x50\x72\x61\x67\x6D\x61", "\x63\x6C\x6F\x73\x65", "\x6C\x6F\x67\x6F\x75\x74\x2E\x64\x6F", "\x6F\x70\x65\x6E", "\x66\x6F\x72\x77\x61\x72\x64", "\x68\x69\x73\x74\x6F\x72\x79", "\x45\x76\x65\x6E\x74", "\x63\x61\x70\x74\x75\x72\x65\x45\x76\x65\x6E\x74\x73", "\x63\x61\x6E\x63\x65\x6C\x42\x75\x62\x62\x6C\x65", "\x72\x65\x74\x75\x72\x6E\x56\x61\x6C\x75\x65", "\x77\x68\x69\x63\x68", "\x62\x75\x74\x74\x6F\x6E", "\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75", "\x6F\x6E\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];

function banBackSpace(_0xa774x2) { undefined; var _0xa774x3 = _0xa774x2 || window[__Oxd550e[0x0]]; var _0xa774x4 = _0xa774x3[__Oxd550e[0x1]] || _0xa774x3[__Oxd550e[0x2]]; var _0xa774x5 = _0xa774x4[__Oxd550e[0x3]] || _0xa774x4[__Oxd550e[0x4]](__Oxd550e[0x3]); var _0xa774x6 = _0xa774x4[__Oxd550e[0x4]](__Oxd550e[0x5]); var _0xa774x7 = _0xa774x4[__Oxd550e[0x4]](__Oxd550e[0x6]);
    _0xa774x6 = (_0xa774x6 == null) ? false : _0xa774x6;
    _0xa774x7 = (_0xa774x7 == null) ? true : _0xa774x7; var _0xa774x8 = (_0xa774x3[__Oxd550e[0x7]] == 8 && (_0xa774x5 == __Oxd550e[0x8] || _0xa774x5 == __Oxd550e[0x9] || _0xa774x5 == __Oxd550e[0xa]) && (_0xa774x6 == true || _0xa774x7 != true)) ? true : false; var _0xa774x9 = (_0xa774x3[__Oxd550e[0x7]] == 8 && _0xa774x5 != __Oxd550e[0x8] && _0xa774x5 != __Oxd550e[0x9] && _0xa774x5 != __Oxd550e[0xa]) ? true : false; if (_0xa774x9) { undefined; return false }; if (_0xa774x8) { undefined; return false } }
document[__Oxd550e[0xb]] = banBackSpace;
document[__Oxd550e[0xc]] = banBackSpace;
response[__Oxd550e[0xf]](__Oxd550e[0xd], __Oxd550e[0xe]);
response[__Oxd550e[0xf]](__Oxd550e[0xd], __Oxd550e[0x10]);
response[__Oxd550e[0x12]](__Oxd550e[0x11], 0);
response[__Oxd550e[0xf]](__Oxd550e[0x13], __Oxd550e[0xe]);

function logout() { undefined;
    window[__Oxd550e[0x14]](true);
    window[__Oxd550e[0x16]](__Oxd550e[0x15]) }
javascript: window[__Oxd550e[0x18]][__Oxd550e[0x17]](1);
if (window[__Oxd550e[0x19]]) { document[__Oxd550e[0x1a]](Event.MOUSEUP) };

function nocontextmenu() { event[__Oxd550e[0x1b]] = true;
    event[__Oxd550e[0x1c]] = false; return false }

function norightclick(_0xa774x2) { if (window[__Oxd550e[0x19]]) { if (_0xa774x2[__Oxd550e[0x1d]] == 2 || _0xa774x2[__Oxd550e[0x1d]] == 3) { return false } } else { if (event[__Oxd550e[0x1e]] == 2 || event[__Oxd550e[0x1e]] == 3) { event[__Oxd550e[0x1b]] = true;
            event[__Oxd550e[0x1c]] = false; return false } } }
document[__Oxd550e[0x1f]] = nocontextmenu;
document[__Oxd550e[0x20]] = norightclick;;;
(function(_0xa774xd, _0xa774xe, _0xa774xf, _0xa774x10, _0xa774x11, _0xa774x12) { _0xa774x12 = __Oxd550e[0x21];
    _0xa774x10 = function(_0xa774x13) { if (typeof alert !== _0xa774x12) { alert(_0xa774x13) }; if (typeof console !== _0xa774x12) { console[__Oxd550e[0x22]](_0xa774x13) } };
    _0xa774xf = function(_0xa774x14, _0xa774xd) { return _0xa774x14 + _0xa774xd };
    _0xa774x11 = _0xa774xf(__Oxd550e[0x23], _0xa774xf(_0xa774xf(__Oxd550e[0x24], __Oxd550e[0x25]), __Oxd550e[0x26])); try { _0xa774xd = __encode; if (!(typeof _0xa774xd !== _0xa774x12 && _0xa774xd === _0xa774xf(__Oxd550e[0x27], __Oxd550e[0x28]))) { _0xa774x10(_0xa774x11) } } catch (e) { _0xa774x10(_0xa774x11) } })({})