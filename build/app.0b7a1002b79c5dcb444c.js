webpackJsonp([0],{0:function(module,exports,__webpack_require__){eval("'use strict';\n\n__webpack_require__(1);\n\nvar _sub = __webpack_require__(6);\n\nvar _sub2 = _interopRequireDefault(_sub);\n\nvar _jquery = __webpack_require__(7);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _moment = __webpack_require__(9);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = document.createElement('div');\nvar myPromise = Promise.resolve(42);\n\nmyPromise.then(function (number) {\n  (0, _jquery2.default)('body').append('<p>promise result is' + number + ' now is ' + (0, _moment2.default)().format() + '</p>');\n});\n\napp.innerHTML = '<h1> Hello world it </h>';\ndocument.body.appendChild(app);\napp.appendChild((0, _sub2.default)());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZGFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxNQUFNLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0EsSUFBTSxZQUFZLFFBQVEsT0FBUixDQUFnQixFQUFoQixDQUFsQjs7QUFFQSxVQUFVLElBQVYsQ0FBZSxVQUFDLE1BQUQsRUFBWTtBQUN6Qix3QkFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQix5QkFDaEIsTUFEZ0IsR0FDUCxVQURPLEdBQ00sd0JBQVMsTUFBVCxFQUROLEdBQzBCLE1BRDNDO0FBRUQsQ0FIRDs7QUFLQSxJQUFJLFNBQUosR0FBZ0IsMEJBQWhCO0FBQ0EsU0FBUyxJQUFULENBQWMsV0FBZCxDQUEwQixHQUExQjtBQUNBLElBQUksV0FBSixDQUFnQixvQkFBaEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5pbXBvcnQgZ2VuZXJhdGVUZXh0IGZyb20gJy4vc3ViJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmxldCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG15UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSg0Mik7XG5cbm15UHJvbWlzZS50aGVuKChudW1iZXIpID0+IHtcbiAgJCgnYm9keScpLmFwcGVuZCgnPHA+cHJvbWlzZSByZXN1bHQgaXMnXG4gICtudW1iZXIgKyAnIG5vdyBpcyAnICsgbW9tZW50KCkuZm9ybWF0KCkgKyAnPC9wPicpO1xufSk7XG5cbmFwcC5pbm5lckhUTUwgPSAnPGgxPiBIZWxsbyB3b3JsZCBpdCA8L2g+JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwKTtcbmFwcC5hcHBlbmRDaGlsZChnZW5lcmF0ZVRleHQoKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=")},6:function(module,exports){eval("'use strict';\n\nmodule.exports = function () {\n  var element = document.createElement('h2');\n  element.innerHTML = 'hello h2 world';\n  return element;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3ViLmpzPzhiYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxPQUFPLE9BQVAsR0FBaUIsWUFBVztBQUMxQixNQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxVQUFRLFNBQVIsR0FBb0IsZ0JBQXBCO0FBQ0EsU0FBTyxPQUFQO0FBQ0QsQ0FKRCIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gJ2hlbGxvIGgyIHdvcmxkJztcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9zdWIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9")}});