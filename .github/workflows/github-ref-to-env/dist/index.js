module.exports = function (e, t) {
    "use strict";
    var n = {};

    function __webpack_require__(t) {
        if (n[t]) {
            return n[t].exports
        }
        var r = n[t] = {i: t, l: false, exports: {}};
        var s = true;
        try {
            e[t].call(r.exports, r, r.exports, __webpack_require__);
            s = false
        } finally {
            if (s) delete n[t]
        }
        r.l = true;
        return r.exports
    }

    __webpack_require__.ab = __dirname + "/";

    function startup() {
        return __webpack_require__(500)
    }

    return startup()
}({
    87: function (e) {
        e.exports = require("os")
    }, 190: function (e, t, n) {
        "use strict";
        var r = this && this.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null) for (var n in e) if (Object.hasOwnProperty.call(e, n)) t[n] = e[n];
            t["default"] = e;
            return t
        };
        Object.defineProperty(t, "__esModule", {value: true});
        const s = r(n(87));
        const o = n(861);

        function issueCommand(e, t, n) {
            const r = new Command(e, t, n);
            process.stdout.write(r.toString() + s.EOL)
        }

        t.issueCommand = issueCommand;

        function issue(e, t = "") {
            issueCommand(e, {}, t)
        }

        t.issue = issue;
        const i = "::";

        class Command {
            constructor(e, t, n) {
                if (!e) {
                    e = "missing.command"
                }
                this.command = e;
                this.properties = t;
                this.message = n
            }

            toString() {
                let e = i + this.command;
                if (this.properties && Object.keys(this.properties).length > 0) {
                    e += " ";
                    let t = true;
                    for (const n in this.properties) {
                        if (this.properties.hasOwnProperty(n)) {
                            const r = this.properties[n];
                            if (r) {
                                if (t) {
                                    t = false
                                } else {
                                    e += ","
                                }
                                e += `${n}=${escapeProperty(r)}`
                            }
                        }
                    }
                }
                e += `${i}${escapeData(this.message)}`;
                return e
            }
        }

        function escapeData(e) {
            return o.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A")
        }

        function escapeProperty(e) {
            return o.toCommandValue(e).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C")
        }
    }, 316: function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            function adopt(e) {
                return e instanceof n ? e : new n(function (t) {
                    t(e)
                })
            }

            return new (n || (n = Promise))(function (n, s) {
                function fulfilled(e) {
                    try {
                        step(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function rejected(e) {
                    try {
                        step(r["throw"](e))
                    } catch (e) {
                        s(e)
                    }
                }

                function step(e) {
                    e.done ? n(e.value) : adopt(e.value).then(fulfilled, rejected)
                }

                step((r = r.apply(e, t || [])).next())
            })
        };
        var s = this && this.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null) for (var n in e) if (Object.hasOwnProperty.call(e, n)) t[n] = e[n];
            t["default"] = e;
            return t
        };
        Object.defineProperty(t, "__esModule", {value: true});
        const o = n(190);
        const i = n(685);
        const u = n(861);
        const a = s(n(87));
        const c = s(n(622));
        var p;
        (function (e) {
            e[e["Success"] = 0] = "Success";
            e[e["Failure"] = 1] = "Failure"
        })(p = t.ExitCode || (t.ExitCode = {}));

        function exportVariable(e, t) {
            const n = u.toCommandValue(t);
            process.env[e] = n;
            const r = process.env["GITHUB_ENV"] || "";
            if (r) {
                const t = "_GitHubActionsFileCommandDelimeter_";
                const r = `${e}<<${t}${a.EOL}${n}${a.EOL}${t}`;
                i.issueCommand("ENV", r)
            } else {
                o.issueCommand("set-env", {name: e}, n)
            }
        }

        t.exportVariable = exportVariable;

        function setSecret(e) {
            o.issueCommand("add-mask", {}, e)
        }

        t.setSecret = setSecret;

        function addPath(e) {
            const t = process.env["GITHUB_PATH"] || "";
            if (t) {
                i.issueCommand("PATH", e)
            } else {
                o.issueCommand("add-path", {}, e)
            }
            process.env["PATH"] = `${e}${c.delimiter}${process.env["PATH"]}`
        }

        t.addPath = addPath;

        function getInput(e, t) {
            const n = process.env[`INPUT_${e.replace(/ /g, "_").toUpperCase()}`] || "";
            if (t && t.required && !n) {
                throw new Error(`Input required and not supplied: ${e}`)
            }
            return n.trim()
        }

        t.getInput = getInput;

        function setOutput(e, t) {
            o.issueCommand("set-output", {name: e}, t)
        }

        t.setOutput = setOutput;

        function setCommandEcho(e) {
            o.issue("echo", e ? "on" : "off")
        }

        t.setCommandEcho = setCommandEcho;

        function setFailed(e) {
            process.exitCode = p.Failure;
            error(e)
        }

        t.setFailed = setFailed;

        function isDebug() {
            return process.env["RUNNER_DEBUG"] === "1"
        }

        t.isDebug = isDebug;

        function debug(e) {
            o.issueCommand("debug", {}, e)
        }

        t.debug = debug;

        function error(e) {
            o.issue("error", e instanceof Error ? e.toString() : e)
        }

        t.error = error;

        function warning(e) {
            o.issue("warning", e instanceof Error ? e.toString() : e)
        }

        t.warning = warning;

        function info(e) {
            process.stdout.write(e + a.EOL)
        }

        t.info = info;

        function startGroup(e) {
            o.issue("group", e)
        }

        t.startGroup = startGroup;

        function endGroup() {
            o.issue("endgroup")
        }

        t.endGroup = endGroup;

        function group(e, t) {
            return r(this, void 0, void 0, function* () {
                startGroup(e);
                let n;
                try {
                    n = yield t()
                } finally {
                    endGroup()
                }
                return n
            })
        }

        t.group = group;

        function saveState(e, t) {
            o.issueCommand("save-state", {name: e}, t)
        }

        t.saveState = saveState;

        function getState(e) {
            return process.env[`STATE_${e}`] || ""
        }

        t.getState = getState
    }, 500: function (module, __unusedexports, __webpack_require__) {
        const core = __webpack_require__(316);
        const parseEnvironmentName = __webpack_require__(521);

        async function run() {
            try {
                const e = core.getInput("github-ref", {required: true});
                let t = core.getInput("map");
                if (t) {
                    t = JSON.parse(t)
                }
                let n = parseEnvironmentName(e, t);
                if (!n) {
                    throw new Error("Could not parse environment name")
                }
                core.setOutput("environment", n)
            } catch (e) {
                core.setFailed(e.message)
            }
        }

        module.exports = run;
        if (require.main === require.cache[eval("__filename")]) {
            run()
        }
    }, 521: function (e) {
        function parseBranch(e) {
            const t = /refs\/(heads|tags)\/(\S*)/;
            const n = e.match(t);
            if (n) {
                return n[2]
            }
        }

        function parseEnvironmentName(e, t) {
            let n = parseBranch(e);
            if (t) {
                const e = Object.keys(t).sort().reverse();
                const r = e.find(e => {
                    const t = new RegExp(e);
                    return t.test(n)
                });
                n = t[r]
            }
            return n
        }

        e.exports = parseEnvironmentName
    }, 622: function (e) {
        e.exports = require("path")
    }, 685: function (e, t, n) {
        "use strict";
        var r = this && this.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null) for (var n in e) if (Object.hasOwnProperty.call(e, n)) t[n] = e[n];
            t["default"] = e;
            return t
        };
        Object.defineProperty(t, "__esModule", {value: true});
        const s = r(n(747));
        const o = r(n(87));
        const i = n(861);

        function issueCommand(e, t) {
            const n = process.env[`GITHUB_${e}`];
            if (!n) {
                throw new Error(`Unable to find environment variable for file command ${e}`)
            }
            if (!s.existsSync(n)) {
                throw new Error(`Missing file at path: ${n}`)
            }
            s.appendFileSync(n, `${i.toCommandValue(t)}${o.EOL}`, {encoding: "utf8"})
        }

        t.issueCommand = issueCommand
    }, 747: function (e) {
        e.exports = require("fs")
    }, 861: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: true});

        function toCommandValue(e) {
            if (e === null || e === undefined) {
                return ""
            } else if (typeof e === "string" || e instanceof String) {
                return e
            }
            return JSON.stringify(e)
        }

        t.toCommandValue = toCommandValue
    }
});
