/* eslint-disable*/
function n(n) {
  //! check if obj is not null explicitly because null is a type of object
  return !(null === n || "object" != typeof n || void 0 === n.nodeType);
}
var e = 0.01 * window.parent.innerHeight;
document.documentElement.style.setProperty("--vh", e + "px");
function t(n) {
  return (
    '\n        <div style="width: 100%; text-align:center;">\n            <p style="font-weight: 600; margin:0 auto; color: #4a5568;">' +
    n +
    "</p>\n        </div>\n    "
  );
}
function i(n) {
  return (
    n.setAttribute(
      "style",
      "\nfont-family: Avenir, Helvetica, Arial, sans-serif;\nfont-weight: 600;\ncolor: #2d3748;\nborder-radius: 5px;\nmin-width: 220px;\nmin-height: 65px;\nbox-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\ncursor: pointer;\n"
    ),
    n.classList.add("orba-verify-button"),
    (n.innerHTML =
      '\n        <div style="display:flex; align-items: center;height: 100%;" >\n            <div style="display: flex;width: 20%;flex-direction: column; align-items: center; padding: 0.5rem 1rem 0 1rem;">\n                \n<svg style="height: 2.0rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.35 209.02">\n  <g id="Layer_2" data-name="Layer 2">\n    <g id="Layer_1-2" data-name="Layer 1">\n      <path\n        d="M3,70.2C18.43,9,88.83-7.82,135.38,4.16c55.55,14.3,87.56,73.07,72.06,128.37s-53.6,88.8-128.1,71.06C19.92,189.43-10,126.57,3,70.2Zm165.29,70.27c29.81-52,1.71-100.12-40-111.81S47.31,42,35.61,83.8s6.84,84,47.36,95.6c15.41,4.41,24.32,7.28,42,.92C145.61,172.9,156.47,161.14,168.31,140.47Z"\n        style="fill:#598fef"\n      />\n      <path\n        d="M3.29,84.33C13.36,23,69.77-7.4,123.4,1.54,180.05,11,219,63.94,210,120.67c-7.43,47-38.07,98.44-119.13,86.63C35.57,199.24-4.48,141.65,3.29,84.33Zm178.2,28.23c6.73-42.61-19.65-78.7-62.25-85.42s-78.46,22-87.36,64.24c-8.74,41.44,20.35,83.56,63,90.29S174.34,157.82,181.49,112.56Z"\n        style="fill:#3d71e3"\n      />\n      <path\n        d="M3,104.43A104.16,104.16,0,1,1,107.18,208.58,104.27,104.27,0,0,1,3,104.43Zm187.18,0a83,83,0,1,0-83,83A83.13,83.13,0,0,0,190.2,104.43Z"\n        style="fill:#33332e"\n      />\n    </g>\n  </g>\n</svg>\n\n                <p style="font-size:8px; color: #718096; white-space: nowrap;">By Orba One</p>\n            </div>\n            <div id="orba-one-loader" style="border-left: 1px solid #edf2f7; margin-top: 10px; margin-bottom: 10px; width:80%; display: flex; align-items:center; justify-items: center;padding: 0.5rem 1rem 0.5rem 1rem;">\n                ' +
      t("Verify Me") +
      "\n            </div>\n        </div>\n    "),
    n
  );
}
function r(e, r, o) {
  void 0 === r && (r = !1);
  var a = n(e) ? e : document.querySelector(e);
  if (!a) throw "Target Element " + a + " not found";
  var s = r ? a : i(a),
    c = r
      ? {}
      : (function(n) {
          if (!n) throw new Error("No loader found!");
          return {
            loading: function() {
              n.innerHTML =
                '\n<svg\n  data-testid="loader"\n  style="height: 25px; width: 100px; margin: 0 auto;"\n  viewBox="0 0 135 140"\n  xmlns="http://www.w3.org/2000/svg"\n  fill="#3d71e3"\n>\n  <rect y="10" width="15" height="120" rx="6">\n    <animate\n      attributeName="height"\n      begin="0.5s"\n      dur="1s"\n      values="120;110;100;90;80;70;60;50;40;140;120"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n    <animate\n      attributeName="y"\n      begin="0.5s"\n      dur="1s"\n      values="10;15;20;25;30;35;40;45;50;0;10"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n  </rect>\n  <rect x="30" y="10" width="15" height="120" rx="6">\n    <animate\n      attributeName="height"\n      begin="0.25s"\n      dur="1s"\n      values="120;110;100;90;80;70;60;50;40;140;120"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n    <animate\n      attributeName="y"\n      begin="0.25s"\n      dur="1s"\n      values="10;15;20;25;30;35;40;45;50;0;10"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n  </rect>\n  <rect x="60" width="15" height="140" rx="6">\n    <animate\n      attributeName="height"\n      begin="0s"\n      dur="1s"\n      values="120;110;100;90;80;70;60;50;40;140;120"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n    <animate\n      attributeName="y"\n      begin="0s"\n      dur="1s"\n      values="10;15;20;25;30;35;40;45;50;0;10"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n  </rect>\n  <rect x="90" y="10" width="15" height="120" rx="6">\n    <animate\n      attributeName="height"\n      begin="0.25s"\n      dur="1s"\n      values="120;110;100;90;80;70;60;50;40;140;120"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n    <animate\n      attributeName="y"\n      begin="0.25s"\n      dur="1s"\n      values="10;15;20;25;30;35;40;45;50;0;10"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n  </rect>\n  <rect x="120" y="10" width="15" height="120" rx="6">\n    <animate\n      attributeName="height"\n      begin="0.5s"\n      dur="1s"\n      values="120;110;100;90;80;70;60;50;40;140;120"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n    <animate\n      attributeName="y"\n      begin="0.5s"\n      dur="1s"\n      values="10;15;20;25;30;35;40;45;50;0;10"\n      calcMode="linear"\n      repeatCount="indefinite"\n    />\n  </rect>\n</svg>\n';
            },
            idle: function() {
              n.innerHTML = t("Verify Me");
            },
            success: function() {
              n.innerHTML = t("Complete");
            },
            error: function() {
              n.innerHTML = t("Could Not Start Verification");
            }
          };
        })(s.querySelector("#orba-one-loader"));
  return {
    el: s,
    setState: function(n) {
      r || (c[n] && (c[n](), o && o(n)));
    }
  };
}
function o(n, e, t, i, r) {
  var o = document.createElement("iframe");
  return (
    (o.allow = "geolocation; microphone; camera"),
    (o.src = n),
    o.setAttribute(
      "style",
      "\n position: absolute;\n top: 0;\n left: 0;\n width: 100vw;\n height: 100vh;\n height: calc(var(--vh, 1vh) * 100);\n border: none;\n"
    ),
    (o.dataset.testid = "orba-iframe"),
    (function(n, e, t, i, r) {
      var o = "idle";
      function a() {
        r((o = "idle")),
          n &&
            (window.removeEventListener("message", s),
            document.body.removeChild(n));
      }
      function s(n) {
        var r = JSON.parse(n.data);
        "success" === r.status
          ? (e(r), a())
          : "cancelled" === r.status
          ? (t(r), a())
          : i(r);
      }
      return (
        (n.onload = function() {
          r((o = "success"));
        }),
        (n.onerror = function(n) {
          r((o = "error")), i(n);
        }),
        {
          el: n,
          connect: function() {
            if (!n)
              throw "No iframe found. Please attach iframe before trying to connect";
            "idle" === o &&
              (r((o = "loading")),
              document.body.appendChild(n),
              window.addEventListener("message", s, !1));
          },
          disconnect: a,
          status: function() {
            return o;
          }
        }
      );
    })(o, e, t, i, r)
  );
}
function a(e) {
  var t = e.target,
    i = e.disableStyle,
    a = e.onChange;
  if (
    (function(e, t) {
      if (!t)
        throw "Configuration object not found, please see https://docs.orbaone.com";
      var i = {
        target: function(e) {
          if ("string" != typeof e && !n(e))
            throw "target " +
              e +
              " must be of type string or DOM Element, please see https://docs.orbaone.com";
        },
        applicantId: function(n) {
          if ("string" != typeof n)
            throw "applicantId key required, please see https://docs.orbaone.com";
        },
        apiKey: function(n) {
          if ("string" != typeof n)
            throw "apiKey required, please see https://docs.orbaone.com";
        },
        onSuccess: function(n) {
          if ("function" != typeof n)
            throw "onSuccess must be a function, please see https://docs.orbaone.com";
        },
        onCancelled: function(n) {
          if ("function" != typeof n)
            throw "onCancelled must be a function, please see https://docs.orbaone.com";
        },
        onError: function(n) {
          if ("function" != typeof n)
            throw "onError must be a function, please see https://docs.orbaone.com";
        },
        steps: function(n) {
          if (!Array.isArray(n))
            throw "Verification steps field missing, please see https://docs.orbaone.com";
        }
      };
      return (
        e.forEach(function(n) {
          i[n](t[n]);
        }),
        !0
      );
    })(
      [
        "apiKey",
        "applicantId",
        "target",
        "onSuccess",
        "onCancelled",
        "onError",
        "steps"
      ],
      e
    )
  ) {
    var s = r(t, i, a);
    s.el.onclick = function() {
      !(function(n, e) {
        var t = n.apiKey,
          i = n.applicantId,
          r = n.onSuccess,
          a = n.onCancelled,
          s = n.onError,
          c = n.steps;
        e.setState("loading"),
          o(
            (function(n, e, t, i) {
              return (
                "https://staging-verify.orbaone.com/" +
                "?publicKey=" +
                e +
                "&applicantId=" +
                t +
                "&steps=" +
                i.join("&steps=")
              );
            })(0, t, i, c),
            r,
            a,
            s,
            function(n) {
              e.setState(n);
            }
          ).connect();
      })(e, s);
    };
  }
}
export { a as renderButton };
