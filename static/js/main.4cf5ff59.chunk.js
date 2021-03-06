(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    25: function (n, e, t) {
      n.exports = t(36);
    },
    36: function (n, e, t) {
      "use strict";
      t.r(e);
      var a = t(0),
        r = t.n(a),
        o = t(6),
        i = t.n(o),
        c = t(7),
        l = t(8),
        s = t(12),
        u = t(9),
        d = t(13),
        m = t(2),
        p = t(3);
      function b() {
        var n = Object(m.a)([
          "\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n\n  header {\n    flex-shrink: 1;\n  }\n\n  section {\n    flex-grow: 1;\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      var f = p.b.main(b()),
        g = "#fff",
        h = "14px",
        v = "20px";
      function E() {
        var n = Object(m.a)([
          "\n  background: linear-gradient(to bottom, #52504b 0%, #3d3c38 100%);\n  border-top: 1px solid #5c5b53;\n  color: ",
          ";\n  display: flex;\n  height: 26px;\n  width: 100%;\n  padding: 0 10px;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  align-items: center;\n  user-select: none;\n\n  .Button {\n    margin-right: 3px;\n\n    &:last-child {\n      margin-right: 15px;\n    }\n  }\n",
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      var y = p.b.header(E(), g);
      function x() {
        var n = Object(m.a)([
          "\n  background-color: transparent;\n  background: ",
          ";\n  border: 1px solid ",
          ";\n  border-radius: 50%;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  outline: 0 !important;\n  position: relative;\n\n  svg {\n    font-size: 10px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: .5;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      var k = p.b.button(
          x(),
          function (n) {
            return n.secondary
              ? "linear-gradient(to bottom, #8a8a84 0%,#5e5954 100%)"
              : "linear-gradient(to bottom, #ef8161 0%, #e64918 100%)";
          },
          function (n) {
            return n.secondary ? "#4B4944" : "#82422E";
          }
        ),
        w = function (n) {
          var e = n.icon,
            t = n.secondary;
          return r.a.createElement(
            k,
            { className: "Button", type: "button", secondary: t },
            e
          );
        };
      w.defaultProps = { secondary: !1 };
      var O = t(4),
        j = t(10),
        D = t(11),
        N = function (n) {
          return r.a.createElement(
            y,
            null,
            r.a.createElement(w, {
              icon: r.a.createElement(O.a, { icon: j.b }),
            }),
            r.a.createElement(w, {
              icon: r.a.createElement(O.a, { icon: D.b }),
              secondary: !0,
            }),
            r.a.createElement(w, {
              icon: r.a.createElement(O.a, { icon: D.a }),
              secondary: !0,
            }),
            "root@home-pc: ~/workspace/yyc-website"
          );
        };
      function z() {
        var n = Object(m.a)([
          "\n  background-color: #0a2833;\n  padding-top: 10px;\n\n  p {\n    color: ",
          ";\n    padding-left: 5px;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0 0 0 10px;\n\n    a {\n      color: ",
          ";\n\n      &:hover {\n        background-color: ",
          ";\n        color: #0a2833;\n        padding: 0 3px;\n      }\n    }\n  }\n",
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      var B = p.b.section(z(), g, g, g);
      function A() {
        var n = Object(m.a)([
          "\n  .dir {\n    background-color: #2c85bf;\n    color: #143841;\n    padding: 0 10px;\n    z-index: 1;\n    &:after {\n      background-color: #2c85bf;\n    }\n  }\n\n  .branch {\n    background-color: #7f9818;\n    color: #143841;\n    padding: 0 10px 0 20px;\n    &:after {\n      background-color: #7f9818;\n    }\n  }\n\n  .dir,\n  .branch {\n    display: inline-block;\n    position: relative;\n    user-select: none;\n\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 3.5px;\n      right: -7px;\n      height: 14px;\n      width: 14px;\n      transform: rotate(45deg);\n    }\n  }\n\n  .command {\n    color: ",
          ";\n    display: inline-block;\n    padding-left: 20px;\n\n    &.done {\n      .Cursor {\n        display: none;\n      }\n    }\n  }\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      var S = p.b.section(A(), g),
        M = t(22),
        W = t.n(M),
        C = t(23),
        J = t.n(C),
        _ = (function (n) {
          function e() {
            var n, t;
            Object(c.a)(this, e);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(s.a)(
                this,
                (n = Object(u.a)(e)).call.apply(n, [this].concat(r))
              )).state = { animationDone: !1 }),
              (t.setAnimationDone = function (n) {
                return t.setState({ animationDone: n });
              }),
              t
            );
          }
          return (
            Object(d.a)(e, n),
            Object(l.a)(e, [
              {
                key: "render",
                value: function () {
                  var n = this,
                    e = this.state.animationDone,
                    t = this.props,
                    a = t.command,
                    o = t.node,
                    i = J()("command", { done: e });
                  return r.a.createElement(
                    S,
                    { animationDone: e },
                    r.a.createElement(
                      "div",
                      { className: "dir" },
                      "~/workspace/yyc-website"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "branch" },
                      r.a.createElement(O.a, { icon: j.a }),
                      " master"
                    ),
                    r.a.createElement(
                      "div",
                      { className: i },
                      r.a.createElement(
                        W.a,
                        {
                          avgTypingDelay: 100,
                          cursor: { element: " \u2588" },
                          onTypingDone: function () {
                            return n.setAnimationDone(!0);
                          },
                        },
                        a
                      )
                    ),
                    e && r.a.createElement("div", null, o)
                  );
                },
              },
            ]),
            e
          );
        })(a.Component);
      _.defaultProps = { node: null };
      var I = function (n) {
          return r.a.createElement(
            B,
            null,
            r.a.createElement(_, {
              command: "echo $WELCOME_MESSAGE",
              node: r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "p",
                  null,
                  "Welcome to my personal website, my name is Yechan Yun. I am a embedded system engineer, living and working in Seoul, Korea."
                ),
                r.a.createElement(
                  "p",
                  null,
                  "Over the last years, I have developed a multitude of embedded system projects, studying in university along with an summer internship, mainly with C Language."
                ),
                r.a.createElement(
                  "p",
                  null,
                  "My stack revolves around the C language, also Python, IoT System with nodejs, AWS, Docker, Amazon Alexa. etc..."
                ),
                r.a.createElement(_, {
                  command: "cd ./get-in-touch/",
                  node: r.a.createElement(
                    "ul",
                    { className: "social-media-nav" },
                    r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          "a",
                          {
                            href:
                              "https://yyc9920.github.io/yechan.github.io/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "homepage/"
                        )
                      ),
                    r.a.createElement(
                      "li",
                      null,
                      r.a.createElement(
                        "a",
                        {
                          href:
                            "https://www.linkedin.com/in/yechan-yun-a6b172197/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "linkedin/"
                      )
                    ),
                    r.a.createElement(
                      "li",
                      null,
                      r.a.createElement(
                        "a",
                        {
                          href: "https://github.com/yyc9920",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "github/"
                      )
                    ),
                    r.a.createElement(
                      "li",
                      null,
                      r.a.createElement(
                        "a",
                        {
                          href: "mailto:yyc837021@gmail.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "email/"
                      )
                    )
                  ),
                })
              ),
            })
          );
        },
        R = (function (n) {
          function e() {
            return (
              Object(c.a)(this, e),
              Object(s.a)(this, Object(u.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(e, n),
            Object(l.a)(e, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    f,
                    { className: "App" },
                    r.a.createElement(N, null),
                    r.a.createElement(I, null)
                  );
                },
              },
            ]),
            e
          );
        })(a.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      function F() {
        var n = Object(m.a)([
          '\n  *,\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: "Roboto", "Helvetica Neue", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    // copy text\n    font-size: ',
          ";\n    line-height: ",
          ";\n  }\n",
        ]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      var G = Object(p.a)(F(), h, v);
      i.a.render(
        r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(G, null),
          r.a.createElement(R, null)
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (n) {
            n.unregister();
          });
    },
  },
  [[25, 2, 1]],
]);
//# sourceMappingURL=main.4cf5ff59.chunk.js.map
