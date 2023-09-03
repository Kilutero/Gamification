/* Rainbow v1.2 rainbowco.de | included languages: generic, javascript */
window.Rainbow=function(){function A(a){var b=a.getAttribute("data-language")||a.parentNode.getAttribute("data-language");if(!b){var c=/\blang(?:uage)?-(\w+)/;(a=a.className.match(c)||a.parentNode.className.match(c))&&(b=a[1])}return b}function B(a,b){for(var c in f[d]){c=parseInt(c,10);if(a==c&&b==f[d][c]?0:a<=c&&b>=f[d][c])delete f[d][c],delete j[d][c];if(a>=c&&a<f[d][c]||b>c&&b<f[d][c])return!0}return!1}function q(a,b){return'<span class="'+a.replace(/\./g," ")+(l?" "+l:"")+'">'+b+"</span>"}function r(a,
b,c,i){if("undefined"===typeof a||null===a)i();else{var e=a.exec(c);if(e){++s;!b.name&&"string"==typeof b.matches[0]&&(b.name=b.matches[0],delete b.matches[0]);var k=e[0],g=e.index,t=e[0].length+g,h=function(){function e(){r(a,b,c,i)}s%100>0?e():setTimeout(e,0)};if(B(g,t))h();else{var m=u(b.matches),l=function(a,c,i){if(a>=c.length)i(k);else{var d=e[c[a]];if(d){var g=b.matches[c[a]],f=g.language,h=g.name&&g.matches?g.matches:g,j=function(b,d,g){var f;f=0;var h;for(h=1;h<c[a];++h)e[h]&&(f=f+e[h].length);
d=g?q(g,d):d;k=k.substr(0,f)+k.substr(f).replace(b,d);l(++a,c,i)};f?n(d,f,function(a){j(d,a)}):typeof g==="string"?j(d,d,g):v(d,h.length?h:[h],function(a){j(d,a,g.matches?g.name:0)})}else l(++a,c,i)}};l(0,m,function(a){b.name&&(a=q(b.name,a));if(!j[d]){j[d]={};f[d]={}}j[d][g]={replace:e[0],"with":a};f[d][g]=t;h()})}}else i()}}function u(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort(function(a,c){return c-a})}function v(a,b,c){function i(b,k){k<b.length?r(b[k].pattern,b[k],
a,function(){i(b,++k)}):C(a,function(a){delete j[d];delete f[d];--d;c(a)})}++d;i(b,0)}function C(a,b){function c(a,b,i,f){if(i<b.length){++w;var h=b[i],l=j[d][h],a=a.substr(0,h)+a.substr(h).replace(l.replace,l["with"]),h=function(){c(a,b,++i,f)};0<w%250?h():setTimeout(h,0)}else f(a)}var i=u(j[d]);c(a,i,0,b)}function n(a,b,c){var d=m[b]||[],e=m[x]||[],b=y[b]?d:d.concat(e);v(a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),b,c)}function o(a,b,c){if(b<a.length){var d=a[b],
e=A(d);return!(-1<(" "+d.className+" ").indexOf(" rainbow "))&&e?(e=e.toLowerCase(),d.className+=d.className?" rainbow":"rainbow",n(d.innerHTML,e,function(k){d.innerHTML=k;j={};f={};p&&p(d,e);setTimeout(function(){o(a,++b,c)},0)})):o(a,++b,c)}c&&c()}function z(a,b){var a=a&&"function"==typeof a.getElementsByTagName?a:document,c=a.getElementsByTagName("pre"),d=a.getElementsByTagName("code"),e,f=[],g=[];for(e=0;e<c.length;++e)c[e].getElementsByTagName("code").length?c[e].innerHTML=c[e].innerHTML.replace(/^\s+/,
"").replace(/\s+$/,""):f.push(c[e]);for(e=0;e<d.length;++e)g.push(d[e]);o(g.concat(f),0,b)}var j={},f={},m={},y={},d=0,x=0,s=0,w=0,l,p;return{extend:function(a,b,c){1==arguments.length&&(b=a,a=x);y[a]=c;m[a]=b.concat(m[a]||[])},b:function(a){p=a},a:function(a){l=a},color:function(a,b,c){if("string"==typeof a)return n(a,b,c);if("function"==typeof a)return z(0,a);z(a,b)}}}();document.addEventListener&&document.addEventListener("DOMContentLoaded",Rainbow.color,!1);Rainbow.onHighlight=Rainbow.b;
Rainbow.addClass=Rainbow.a;Rainbow.extend([{matches:{1:[{name:"keyword.operator",pattern:/\=|\+/g},{name:"keyword.dot",pattern:/\./g}],2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:|\+|\.)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},
{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]);Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},
3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\s+(.*)(?=\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]);

var ColorPicker = (function () {
    'use strict';

    var COLORS = [
        'transparent',
        '#FFFF7B',
        '#F44336',
        '#8BC34A',
        '#29B6F6'
    ];
    var CLASS_SELECTED = 'selected';

    function ColorPicker(el) {
        var self = this;
        this.color = COLORS[0];
        this.selected = null;

        COLORS.forEach(function (color) {
            var div = document.createElement('div');
            div.style.backgroundColor = color;

            if (self.color === color) {
                div.className = CLASS_SELECTED;
                self.selected = div;
            }

            div.addEventListener('click', function () {
                if (color !== self.color) {
                    self.color = color;

                    if (self.selected) {
                        self.selected.className = '';
                    }
                    self.selected = div;
                    self.selected.className = CLASS_SELECTED;

                    if (typeof self.callback === 'function') {
                        self.callback.call(self, color);
                    }
                }
            }, false);

            el.appendChild(div);
        });

    }


    ColorPicker.prototype.onColorChange = function (callback) {
        this.callback = callback;
    };

    return ColorPicker;
})();
(function (global) {
    'use strict';

    var
        /**
         * Attribute added by default to every highlight.
         * @type {string}
         */
        DATA_ATTR = 'data-highlighted',

        /**
         * Attribute used to group highlight wrappers.
         * @type {string}
         */
        TIMESTAMP_ATTR = 'data-timestamp',

        NODE_TYPE = {
            ELEMENT_NODE: 1,
            TEXT_NODE: 3
        },

        /**
         * Don't highlight content of these tags.
         * @type {string[]}
         */
        IGNORE_TAGS = [
            'SCRIPT', 'STYLE', 'SELECT', 'OPTION', 'BUTTON', 'OBJECT', 'APPLET', 'VIDEO', 'AUDIO', 'CANVAS', 'EMBED',
            'PARAM', 'METER', 'PROGRESS'
        ];

    /**
     * Returns true if elements a i b have the same color.
     * @param {Node} a
     * @param {Node} b
     * @returns {boolean}
     */
    function haveSameColor(a, b) {
        return dom(a).color() === dom(b).color();
    }

    /**
     * Fills undefined values in obj with default properties with the same name from source object.
     * @param {object} obj - target object
     * @param {object} source - source object with default values
     * @returns {object}
     */
    function defaults(obj, source) {
        obj = obj || {};

        for (var prop in source) {
            if (source.hasOwnProperty(prop) && obj[prop] === void 0) {
                obj[prop] = source[prop];
            }
        }

        return obj;
    }

    /**
     * Returns array without duplicated values.
     * @param {Array} arr
     * @returns {Array}
     */
    function unique(arr) {
        return arr.filter(function (value, idx, self) {
            return self.indexOf(value) === idx;
        });
    }

    /**
     * Takes range object as parameter and refines it boundaries
     * @param range
     * @returns {object} refined boundaries and initial state of highlighting algorithm.
     */
    function refineRangeBoundaries(range) {
        var startContainer = range.startContainer,
            endContainer = range.endContainer,
            ancestor = range.commonAncestorContainer,
            goDeeper = true;

        if (range.endOffset === 0) {
            while (!endContainer.previousSibling && endContainer.parentNode !== ancestor) {
                endContainer = endContainer.parentNode;
            }
            endContainer = endContainer.previousSibling;
        } else if (endContainer.nodeType === NODE_TYPE.TEXT_NODE) {
            if (range.endOffset < endContainer.nodeValue.length) {
                endContainer.splitText(range.endOffset);
            }
        } else if (range.endOffset > 0) {
            endContainer = endContainer.childNodes.item(range.endOffset - 1);
        }

        if (startContainer.nodeType === NODE_TYPE.TEXT_NODE) {
            if (range.startOffset === startContainer.nodeValue.length) {
                goDeeper = false;
            } else if (range.startOffset > 0) {
                startContainer = startContainer.splitText(range.startOffset);
                if (endContainer === startContainer.previousSibling) {
                    endContainer = startContainer;
                }
            }
        } else if (range.startOffset < startContainer.childNodes.length) {
            startContainer = startContainer.childNodes.item(range.startOffset);
        } else {
            startContainer = startContainer.nextSibling;
        }

        return {
            startContainer: startContainer,
            endContainer: endContainer,
            goDeeper: goDeeper
        };
    }

    /**
     * Sorts array of DOM elements by its depth in DOM tree.
     * @param {HTMLElement[]} arr - array to sort.
     * @param {boolean} descending - order of sort.
     */
    function sortByDepth(arr, descending) {
        arr.sort(function (a, b) {
            return dom(descending ? b : a).parents().length - dom(descending ? a : b).parents().length;
        });
    }

    /**
     * Groups given highlights by timestamp.
     * @param {Array} highlights
     * @returns {Array} Grouped highlights.
     */
    function groupHighlights(highlights) {
        var order = [],
            chunks = {},
            grouped = [];

        highlights.forEach(function (hl) {
            var timestamp = hl.getAttribute(TIMESTAMP_ATTR);

            if (typeof chunks[timestamp] === 'undefined') {
                chunks[timestamp] = [];
                order.push(timestamp);
            }

            chunks[timestamp].push(hl);
        });

        order.forEach(function (timestamp) {
            var group = chunks[timestamp];

            grouped.push({
                chunks: group,
                timestamp: timestamp,
                toString: function () {
                    return group.map(function (h) {
                        return h.textContent;
                    }).join('');
                }
            });
        });

        return grouped;
    }

    /**
     * Utility functions to make DOM manipulation easier.
     * @param {Node|HTMLElement} [el] - base DOM element to manipulate
     * @returns {object}
     */
    var dom = function (el) {

        return /** @lends dom **/ {

            /**
             * Adds class to element.
             * @param {string} className
             */
            addClass: function (className) {
                if (el.classList) {
                    el.classList.add(className);
                } else {
                    el.className += ' ' + className;
                }
            },

            /**
             * Removes class from element.
             * @param {string} className
             */
            removeClass: function (className) {
                if (el.classList) {
                    el.classList.remove(className);
                } else {
                    el.className = el.className.replace(
                        new RegExp('(^|\\b)' + className + '(\\b|$)', 'gi'), ' '
                    );
                }
            },

            /**
             * Prepends child nodes to base element.
             * @param {Node[]} nodesToPrepend
             */
            prepend: function (nodesToPrepend) {
                var nodes = Array.prototype.slice.call(nodesToPrepend),
                    i = nodes.length;

                while (i--) {
                    el.insertBefore(nodes[i], el.firstChild);
                }
            },

            /**
             * Appends child nodes to base element.
             * @param {Node[]} nodesToAppend
             */
            append: function (nodesToAppend) {
                var nodes = Array.prototype.slice.call(nodesToAppend);

                for (var i = 0, len = nodes.length; i < len; ++i) {
                    el.appendChild(nodes[i]);
                }
            },

            /**
             * Inserts base element after refEl.
             * @param {Node} refEl - node after which base element will be inserted
             * @returns {Node} - inserted element
             */
            insertAfter: function (refEl) {
                return refEl.parentNode.insertBefore(el, refEl.nextSibling);
            },

            /**
             * Inserts base element before refEl.
             * @param {Node} refEl - node before which base element will be inserted
             * @returns {Node} - inserted element
             */
            insertBefore: function (refEl) {
                return refEl.parentNode.insertBefore(el, refEl);
            },

            /**
             * Removes base element from DOM.
             */
            remove: function () {
                el.parentNode.removeChild(el);
                el = null;
            },

            /**
             * Returns true if base element contains given child.
             * @param {Node|HTMLElement} child
             * @returns {boolean}
             */
            contains: function (child) {
                return el !== child && el.contains(child);
            },

            /**
             * Wraps base element in wrapper element.
             * @param {HTMLElement} wrapper
             * @returns {HTMLElement} wrapper element
             */
            wrap: function (wrapper) {
                if (el.parentNode) {
                    el.parentNode.insertBefore(wrapper, el);
                }

                wrapper.appendChild(el);
                return wrapper;
            },

            /**
             * Unwraps base element.
             * @returns {Node[]} - child nodes of unwrapped element.
             */
            unwrap: function () {
                var nodes = Array.prototype.slice.call(el.childNodes),
                    wrapper;

                nodes.forEach(function (node) {
                    wrapper = node.parentNode;
                    dom(node).insertBefore(node.parentNode);
                    dom(wrapper).remove();
                });

                return nodes;
            },

            /**
             * Returns array of base element parents.
             * @returns {HTMLElement[]}
             */
            parents: function () {
                var parent, path = [];

                while (parent = el.parentNode) {
                    path.push(parent);
                    el = parent;
                }

                return path;
            },

            /**
             * Normalizes text nodes within base element, ie. merges sibling text nodes and assures that every
             * element node has only one text node.
             * It should does the same as standard element.normalize, but IE implements it incorrectly.
             */
            normalizeTextNodes: function () {
                if (!el) {
                    return;
                }

                if (el.nodeType === NODE_TYPE.TEXT_NODE) {
                    while (el.nextSibling && el.nextSibling.nodeType === NODE_TYPE.TEXT_NODE) {
                        el.nodeValue += el.nextSibling.nodeValue;
                        el.parentNode.removeChild(el.nextSibling);
                    }
                } else {
                    dom(el.firstChild).normalizeTextNodes();
                }
                dom(el.nextSibling).normalizeTextNodes();
            },

            /**
             * Returns element background color.
             * @returns {CSSStyleDeclaration.backgroundColor}
             */
            color: function () {
                return el.style.backgroundColor;
            },

            /**
             * Creates dom element from given html string.
             * @param {string} html
             * @returns {NodeList}
             */
            fromHTML: function (html) {
                var div = document.createElement('div');
                div.innerHTML = html;
                return div.childNodes;
            },

            /**
             * Returns first range of the window of base element.
             * @returns {Range}
             */
            getRange: function () {
                var selection = dom(el).getSelection(),
                    range;

                if (selection.rangeCount > 0) {
                    range = selection.getRangeAt(0);
                }

                return range;
            },

            /**
             * Removes all ranges of the window of base element.
             */
            removeAllRanges: function () {
                var selection = dom(el).getSelection();
                selection.removeAllRanges();
            },

            /**
             * Returns selection object of the window of base element.
             * @returns {Selection}
             */
            getSelection: function () {
                return dom(el).getWindow().getSelection();
            },

            /**
             * Returns window of the base element.
             * @returns {Window}
             */
            getWindow: function () {
                return dom(el).getDocument().defaultView;
            },

            /**
             * Returns document of the base element.
             * @returns {HTMLDocument}
             */
            getDocument: function () {
                // if ownerDocument is null then el is the document itself.
                return el.ownerDocument || el;
            }

        };
    };

    function bindEvents(el, scope) {
        el.addEventListener('mouseup', scope.highlightHandler.bind(scope));
        el.addEventListener('touchend', scope.highlightHandler.bind(scope));
    }

    function unbindEvents(el, scope) {
        el.removeEventListener('mouseup', scope.highlightHandler.bind(scope));
        el.removeEventListener('touchend', scope.highlightHandler.bind(scope));
    }

    /**
     * Creates TextHighlighter instance and binds to given DOM elements.
     * @param {HTMLElement} element - DOM element to which highlighted will be applied.
     * @param {object} [options] - additional options.
     * @param {string} options.color - highlight color.
     * @param {string} options.highlightedClass - class added to highlight, 'highlighted' by default.
     * @param {string} options.contextClass - class added to element to which highlighter is applied,
     *  'highlighter-context' by default.
     * @param {function} options.onRemoveHighlight - function called before highlight is removed. Highlight is
     *  passed as param. Function should return true if highlight should be removed, or false - to prevent removal.
     * @param {function} options.onBeforeHighlight - function called before highlight is created. Range object is
     *  passed as param. Function should return true to continue processing, or false - to prevent highlighting.
     * @param {function} options.onAfterHighlight - function called after highlight is created. Array of created
     * wrappers is passed as param.
     * @class TextHighlighter
     */
    function TextHighlighter(element, options) {
        if (!element) {
            throw 'Missing anchor element';
        }

        this.el = element;
        this.options = defaults(options, {
            // color: '#ffff7b',
            color: 'transparent',
            highlightedClass: 'highlighted',
            contextClass: 'highlighter-context',
            onRemoveHighlight: function () { return true; },
            onBeforeHighlight: function () { return true; },
            onAfterHighlight: function () { }
        });

        dom(this.el).addClass(this.options.contextClass);
        bindEvents(this.el, this);
    }

    /**
     * Permanently disables highlighting.
     * Unbinds events and remove context element class.
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.destroy = function () {
        unbindEvents(this.el, this);
        dom(this.el).removeClass(this.options.contextClass);
    };

    TextHighlighter.prototype.highlightHandler = function () {
        this.doHighlight();
    };

    /**
     * Highlights current range.
     * @param {boolean} keepRange - Don't remove range after highlighting. Default: false.
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.doHighlight = function (keepRange) {
        var range = dom(this.el).getRange(),
            wrapper,
            createdHighlights,
            normalizedHighlights,
            timestamp;

        if (!range || range.collapsed) {
            return;
        }

        if (this.options.color != 'transparent') {
            timestamp = +new Date();
            wrapper = TextHighlighter.createWrapper(this.options);
            wrapper.setAttribute(TIMESTAMP_ATTR, timestamp);

            createdHighlights = this.highlightRange(range, wrapper);
            normalizedHighlights = this.normalizeHighlights(createdHighlights);

            this.options.onAfterHighlight(range, normalizedHighlights, timestamp);

            // guardo lo subrayado en localStorage
            let serialized = this.serializeHighlights();
            let idunit = document.getElementsByTagName('body')[0].dataset.unit;
            localStorage.setItem(idunit, serialized);

            if (!keepRange) {
                dom(this.el).removeAllRanges();
            }
        }
    };

    /**
     * Highlights range.
     * Wraps text of given range object in wrapper element.
     * @param {Range} range
     * @param {HTMLElement} wrapper
     * @returns {Array} - array of created highlights.
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.highlightRange = function (range, wrapper) {
        if (!range || range.collapsed) {
            return [];
        }

        var result = refineRangeBoundaries(range),
            startContainer = result.startContainer,
            endContainer = result.endContainer,
            goDeeper = result.goDeeper,
            done = false,
            node = startContainer,
            highlights = [],
            highlight,
            wrapperClone,
            nodeParent;

        do {
            if (goDeeper && node.nodeType === NODE_TYPE.TEXT_NODE) {

                if (IGNORE_TAGS.indexOf(node.parentNode.tagName) === -1 && node.nodeValue.trim() !== '') {
                    wrapperClone = wrapper.cloneNode(true);
                    wrapperClone.setAttribute(DATA_ATTR, true);
                    nodeParent = node.parentNode;

                    // highlight if a node is inside the el
                    if (dom(this.el).contains(nodeParent) || nodeParent === this.el) {
                        highlight = dom(node).wrap(wrapperClone);
                        highlights.push(highlight);
                    }
                }

                goDeeper = false;
            }
            if (node === endContainer && !(endContainer.hasChildNodes() && goDeeper)) {
                done = true;
            }

            if (node.tagName && IGNORE_TAGS.indexOf(node.tagName) > -1) {

                if (endContainer.parentNode === node) {
                    done = true;
                }
                goDeeper = false;
            }
            if (goDeeper && node.hasChildNodes()) {
                node = node.firstChild;
            } else if (node.nextSibling) {
                node = node.nextSibling;
                goDeeper = true;
            } else {
                node = node.parentNode;
                goDeeper = false;
            }
        } while (!done);

        return highlights;
    };

    /**
     * Normalizes highlights. Ensures that highlighting is done with use of the smallest possible number of
     * wrapping HTML elements.
     * Flattens highlights structure and merges sibling highlights. Normalizes text nodes within highlights.
     * @param {Array} highlights - highlights to normalize.
     * @returns {Array} - array of normalized highlights. Order and number of returned highlights may be different than
     * input highlights.
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.normalizeHighlights = function (highlights) {
        var normalizedHighlights;

        this.flattenNestedHighlights(highlights);
        this.mergeSiblingHighlights(highlights);

        // omit removed nodes
        normalizedHighlights = highlights.filter(function (hl) {
            return hl.parentElement ? hl : null;
        });

        normalizedHighlights = unique(normalizedHighlights);
        normalizedHighlights.sort(function (a, b) {
            return a.offsetTop - b.offsetTop || a.offsetLeft - b.offsetLeft;
        });

        return normalizedHighlights;
    };

    /**
     * Flattens highlights structure.
     * Note: this method changes input highlights - their order and number after calling this method may change.
     * @param {Array} highlights - highlights to flatten.
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.flattenNestedHighlights = function (highlights) {
        var again,
            self = this;

        sortByDepth(highlights, true);

        function flattenOnce() {
            var again = false;

            highlights.forEach(function (hl, i) {
                var parent = hl.parentElement,
                    parentPrev = parent.previousSibling,
                    parentNext = parent.nextSibling;

                if (self.isHighlight(parent)) {

                    if (!haveSameColor(parent, hl)) {

                        if (!hl.nextSibling) {
                            dom(hl).insertBefore(parentNext || parent);
                            again = true;
                        }

                        if (!hl.previousSibling) {
                            dom(hl).insertAfter(parentPrev || parent);
                            again = true;
                        }

                        if (!parent.hasChildNodes()) {
                            dom(parent).remove();
                        }

                    } else {
                        parent.replaceChild(hl.firstChild, hl);
                        highlights[i] = parent;
                        again = true;
                    }

                }

            });

            return again;
        }

        do {
            again = flattenOnce();
        } while (again);
    };

    /**
     * Merges sibling highlights and normalizes descendant text nodes.
     * Note: this method changes input highlights - their order and number after calling this method may change.
     * @param highlights
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.mergeSiblingHighlights = function (highlights) {
        var self = this;

        function shouldMerge(current, node) {
            return node && node.nodeType === NODE_TYPE.ELEMENT_NODE &&
                haveSameColor(current, node) &&
                self.isHighlight(node);
        }

        highlights.forEach(function (highlight) {
            var prev = highlight.previousSibling,
                next = highlight.nextSibling;

            if (shouldMerge(highlight, prev)) {
                dom(highlight).prepend(prev.childNodes);
                dom(prev).remove();
            }
            if (shouldMerge(highlight, next)) {
                dom(highlight).append(next.childNodes);
                dom(next).remove();
            }

            dom(highlight).normalizeTextNodes();
        });
    };

    /**
     * Sets highlighting color.
     * @param {string} color - valid CSS color.
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.setColor = function (color) {
        this.options.color = color;
    };

    /**
     * Returns highlighting color.
     * @returns {string}
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.getColor = function () {
        return this.options.color;
    };

    /**
     * Removes highlights from element. If element is a highlight itself, it is removed as well.
     * If no element is given, all highlights all removed.
     * @param {HTMLElement} [element] - element to remove highlights from
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.removeHighlights = function (element) {
        var container = element || this.el,
            highlights = this.getHighlights({ container: container }),
            self = this;

        function mergeSiblingTextNodes(textNode) {
            var prev = textNode.previousSibling,
                next = textNode.nextSibling;

            if (prev && prev.nodeType === NODE_TYPE.TEXT_NODE) {
                textNode.nodeValue = prev.nodeValue + textNode.nodeValue;
                dom(prev).remove();
            }
            if (next && next.nodeType === NODE_TYPE.TEXT_NODE) {
                textNode.nodeValue = textNode.nodeValue + next.nodeValue;
                dom(next).remove();
            }
        }

        function removeHighlight(highlight) {
            var textNodes = dom(highlight).unwrap();

            textNodes.forEach(function (node) {
                mergeSiblingTextNodes(node);
            });
        }

        sortByDepth(highlights, true);

        highlights.forEach(function (hl) {
            if (self.options.onRemoveHighlight(hl) === true) {
                removeHighlight(hl);
            }
        });
    };

    TextHighlighter.prototype.removeOneHighlights = function (element) {
        var container = element || this.el,
            highlights = this.getHighlights({ container: body });
        self = this;

        function mergeSiblingTextNodes(textNode) {
            var prev = textNode.previousSibling,
                next = textNode.nextSibling;

            if (prev && prev.nodeType === NODE_TYPE.TEXT_NODE) {
                textNode.nodeValue = prev.nodeValue + textNode.nodeValue;
                dom(prev).remove();
            }
            if (next && next.nodeType === NODE_TYPE.TEXT_NODE) {
                textNode.nodeValue = textNode.nodeValue + next.nodeValue;
                dom(next).remove();
            }
        }

        function removeOneHighlight(highlight) {
            var textNodes = dom(highlight).unwrap();

            textNodes.forEach(function (node) {
                mergeSiblingTextNodes(node);
            });
        }

        sortByDepth(highlights, true);

        highlights.forEach(function (hl) {
            var marca = hl.getAttribute('data-timestamp');
            if (self.options.onRemoveHighlight(hl) === true && container == marca) {
                removeOneHighlight(hl);
            }
        });
    };

    /**
     * Returns highlights from given container.
     * @param params
     * @param {HTMLElement} [params.container] - return highlights from this element. Default: the element the
     * highlighter is applied to.
     * @param {boolean} [params.andSelf] - if set to true and container is a highlight itself, add container to
     * returned results. Default: true.
     * @param {boolean} [params.grouped] - if set to true, highlights are grouped in logical groups of highlights added
     * in the same moment. Each group is an object which has got array of highlights, 'toString' method and 'timestamp'
     * property. Default: false.
     * @returns {Array} - array of highlights.
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.getHighlights = function (params) {
        params = defaults(params, {
            container: this.el,
            andSelf: true,
            grouped: false
        });

        var nodeList = params.container.querySelectorAll('[' + DATA_ATTR + ']'),
            highlights = Array.prototype.slice.call(nodeList);

        if (params.andSelf === true && params.container.hasAttribute(DATA_ATTR)) {
            highlights.push(params.container);
        }

        if (params.grouped) {
            highlights = groupHighlights(highlights);
        }

        return highlights;
    };

    /**
     * Returns true if element is a highlight.
     * All highlights have 'data-highlighted' attribute.
     * @param el - element to check.
     * @returns {boolean}
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.isHighlight = function (el) {
        return el && el.nodeType === NODE_TYPE.ELEMENT_NODE && el.hasAttribute(DATA_ATTR);
    };

    /**
     * Serializes all highlights in the element the highlighter is applied to.
     * @returns {string} - stringified JSON with highlights definition
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.serializeHighlights = function () {
        var highlights = this.getHighlights(),
            refEl = this.el,
            hlDescriptors = [];

        function getElementPath(el, refElement) {
            var path = [],
                childNodes;

            do {
                childNodes = Array.prototype.slice.call(el.parentNode.childNodes);
                path.unshift(childNodes.indexOf(el));
                el = el.parentNode;
            } while (el !== refElement || !el);

            return path;
        }

        sortByDepth(highlights, false);

        highlights.forEach(function (highlight) {
            var offset = 0, // Hl offset from previous sibling within parent node.
                length = highlight.textContent.length,
                hlPath = getElementPath(highlight, refEl),
                wrapper = highlight.cloneNode(true);

            wrapper.innerHTML = '';
            wrapper = wrapper.outerHTML;

            if (highlight.previousSibling && highlight.previousSibling.nodeType === NODE_TYPE.TEXT_NODE) {
                offset = highlight.previousSibling.length;
            }

            hlDescriptors.push([
                wrapper,
                highlight.textContent,
                hlPath.join(':'),
                offset,
                length
            ]);
        });

        return JSON.stringify(hlDescriptors);
    };

    /**
     * Deserializes highlights.
     * @throws exception when can't parse JSON or JSON has invalid structure.
     * @param {object} json - JSON object with highlights definition.
     * @returns {Array} - array of deserialized highlights.
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.deserializeHighlights = function (json) {
        var hlDescriptors,
            highlights = [],
            self = this;

        if (!json) {
            return highlights;
        }

        try {
            hlDescriptors = JSON.parse(json);
        } catch (e) {
            throw "Can't parse JSON: " + e;
        }

        function deserializationFn(hlDescriptor) {
            var hl = {
                wrapper: hlDescriptor[0],
                text: hlDescriptor[1],
                path: hlDescriptor[2].split(':'),
                offset: hlDescriptor[3],
                length: hlDescriptor[4]
            },
                elIndex = hl.path.pop(),
                node = self.el,
                hlNode,
                highlight,
                idx;

            while (idx = hl.path.shift()) {
                node = node.childNodes[idx];
            }

            if (node.childNodes[elIndex - 1] && node.childNodes[elIndex - 1].nodeType === NODE_TYPE.TEXT_NODE) {
                elIndex -= 1;
            }

            node = node.childNodes[elIndex];
            hlNode = node.splitText(hl.offset);
            hlNode.splitText(hl.length);

            if (hlNode.nextSibling && !hlNode.nextSibling.nodeValue) {
                dom(hlNode.nextSibling).remove();
            }

            if (hlNode.previousSibling && !hlNode.previousSibling.nodeValue) {
                dom(hlNode.previousSibling).remove();
            }

            highlight = dom(hlNode).wrap(dom().fromHTML(hl.wrapper)[0]);
            highlights.push(highlight);
        }

        hlDescriptors.forEach(function (hlDescriptor) {
            try {
                deserializationFn(hlDescriptor);
            } catch (e) {
                if (console && console.warn) {
                    console.warn("Can't deserialize highlight descriptor. Cause: " + e);
                }
            }
        });

        return highlights;
    };

    /**
     * Finds and highlights given text.
     * @param {string} text - text to search for
     * @param {boolean} [caseSensitive] - if set to true, performs case sensitive search (default: true)
     * @memberof TextHighlighter
     */
    TextHighlighter.prototype.find = function (text, caseSensitive) {
        var wnd = dom(this.el).getWindow(),
            scrollX = wnd.scrollX,
            scrollY = wnd.scrollY,
            caseSens = (typeof caseSensitive === 'undefined' ? true : caseSensitive);

        dom(this.el).removeAllRanges();

        if (wnd.find) {
            while (wnd.find(text, caseSens)) {
                this.doHighlight(true);
            }
        } else if (wnd.document.body.createTextRange) {
            var textRange = wnd.document.body.createTextRange();
            textRange.moveToElementText(this.el);
            while (textRange.findText(text, 1, caseSens ? 4 : 0)) {
                if (!dom(this.el).contains(textRange.parentElement()) && textRange.parentElement() !== this.el) {
                    break;
                }

                textRange.select();
                this.doHighlight(true);
                textRange.collapse(false);
            }
        }

        dom(this.el).removeAllRanges();
        wnd.scrollTo(scrollX, scrollY);
    };

    /**
     * Creates wrapper for highlights.
     * TextHighlighter instance calls this method each time it needs to create highlights and pass options retrieved
     * in constructor.
     * @param {object} options - the same object as in TextHighlighter constructor.
     * @returns {HTMLElement}
     * @memberof TextHighlighter
     * @static
     */
    TextHighlighter.createWrapper = function (options) {
        var mobile;
        var span = document.createElement('span');
        span.style.backgroundColor = options.color;
        span.className = options.highlightedClass;

        // añado los atributos del popover
        span.setAttribute('tabindex', 0);
        span.setAttribute('data-toggle', 'popover');

        isMobile.any() ? mobile = '<i class="fas fa-trash-alt fa-3x"></i>' : mobile = '<i class="fas fa-trash-alt fa-1_5x"></i>';

        span.setAttribute('data-content', mobile);
        span.classList.add('non-selected');

        return span;
    };

    global.TextHighlighter = TextHighlighter;
})(window);

function configurarElementosControl() {
	$('.control_objetivo_unico_click').click(function () {
		var id = $(this).attr("id");
		var desc = $(this).attr("data-desc");
		var tipo = $(this).attr("data-type");
		setObjetivoCompleto('objetivo' + id, desc, tipo);
	});
}
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */
(function () {

	let onLanguageLoaded = function (err, i18n) {

		let makeAlert = function (type, message) {

			let $dismissButton = $('<button />')
				.data('dismiss', 'alert')
				.attr('type', 'button')
				.attr('aria-hidden', 'false')
				.attr('aria-label', i18n('Close')) //
				.addClass('close')
				.html(' <span aria-hidden="true">&times;</span>');

			let $alert = $("<div />")
				.addClass('alert alert-dismissible fade show ' + type)
				.html(message)
				.append($dismissButton);

			$dismissButton.on('click', function () { $alert.alert('close') });
			let time = Math.max(6000, message.length * 60);
			setTimeout(function () { $alert.alert('close') }, time);
			$alert.alert();
			return $alert;
		};

		let play = function () {
			let $self = $(this);
			let audio = $self.data('audio');
			let id = $(this).attr('id');
			let obj = $self.attr('data-obj');
			let desc = $self.attr('data-desc');
			let type = $self.attr('data-type');
			let target = $self.attr('data-target');
			let $audio = $('#' + audio);
			$self.find('.fa').removeClass('fa-play').addClass('fa-pause')
			$self.find('.audio-state').text(i18n("audio-pause"));
			$self.data('playing', true);
			$(target).removeClass('hidden');
			$audio.trigger('play');
			setObjetivoCompleto(obj, desc, type);
		}

		let pause = function () {
			let $self = $(this);
			let audio = $self.data('audio');
			let $audio = $('#' + audio);
			$self.data('playing', false);
			$self.find('.audio-state').text(i18n("audio-play"));
			$self.find('.fa').removeClass('fa-pause').addClass('fa-play')
			$audio.trigger('pause');
		}

		let stop = function () {
			pause.apply(this);
			let audio = $(this).data('audio');
			let $audio = $('#' + audio);
			$audio[0].currentTime = 0;
			$(this).closest('.widget-audio').find('.audio-widget-content').empty();
		}
		
		let pauseAll = function() {
			$(this).find('.js-audio-button').each(function() { pause.apply(this) });
		}

		let onSpeechToAction = function (event, action, entities) {
			if (action === "FINISH")
				return;

			if (action === "PLAY") play.apply(this);
			else if (action === "STOP") stop.apply(this);
			else if (action === "PAUSE") pause.apply(this);
			else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.8);
			else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.8);
			else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
			else if (action === "REPEAT")
				$(this).closest('.widget-audio').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-audioterm')));
			else
				$(this).closest('.widget-audio').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
		};

		$('.js-audio-button').each(function () {
			let $self = $(this);
			let myStop = stop.bind(this);
			let myPlay = play.bind(this);
			let myPause = pause.bind(this);
			let id = $self.attr('id');
			let audio = $self.data('audio');
			let $audio = $('#' + audio);
			$('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction.bind(this));
			$(this).find('.audio-state').text(i18n("audio-play"))
			$audio.on('ended', myStop);
			$(this).on('click', function () {
				let playing = ($self.data('playing') || "false") !== "false";
				pauseAll.apply($self.closest('.content-element')[0]);
				playing ? myPause() : myPlay();
			});

			let $textTracks = $("#" + audio).get(0).textTracks[0];
			if ($textTracks!==undefined){
				$textTracks.oncuechange = function(){
					var cues = $(this)[0].activeCues;
					if (cues.length > 0){
						let content = "";
						for (let i = 0; i < cues.length; i++)
						{
							content += cues[i].text + '<br><br>'
						}
						$self.closest('.widget-audio').find('.audio-widget-content').html(content.replace(/\n/g, '<br>'));	
					}
				};
			}
		});

		
	}

	let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
		.then(response => response.json())
		.then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */
(function () {

  let onLanguageLoaded = function (err, i18n) {

    let makeAlert = function (type, message) {

      let $dismissButton = $('<button />')
        .data('dismiss', 'alert')
        .attr('type', 'button')
        .attr('aria-hidden', 'false')
        .attr('aria-label', i18n('Close')) //
        .addClass('close')
        .html(' <span aria-hidden="true">&times;</span>');

      let $alert = $("<div />")
        .addClass('alert alert-dismissible fade show ' + type)
        .html(message)
        .append($dismissButton);

      $dismissButton.on('click', function () { $alert.alert('close') });
      let time = Math.max(6000, message.length * 60);
      setTimeout(function () { $alert.alert('close') }, time);
      $alert.alert();
      return $alert;
    };

    $(".pictograma").each(function () {
      let id = $(this).attr('id');
      let self = this;
      $('.pictograma[id="' + id + '"]').append('<div class="mb-3 mb-0 mt-2 text-center choose-feedback" aria-live="polite" aria-relevant="all" aria-atomic="true" id="choose' + id + '"></div>');

      let onSpeechToAction = function (event, action, entities) {

        if (action === "FINISH")
          return;

        let $btns = $(self).find('.response');
        let $selected = $btns.filter(function () { return $(this).is(':focus') }).first()
        if (!$selected.length) {
          $selected = $btns.eq(0);
          $selected.focus();
        }
        if (action === "START" || action === "CURRENT")
          return;
        else if (action === "NEXT" || action === "PREVIOUS") {
          let position = $btns.index($selected);
          let nextPos = action === "NEXT" ? ((position + 1) % $btns.length) : ((position - 1) % $btns.length);
          $btns.eq(nextPos).focus();
        }
        else if (action === "GOTO") {
          let nextPos = (parseInt(entities['target-position']) - 1) % $btns.length;
          $btns.eq(nextPos).focus();
        }
        else if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
          $(".modal.show").length && $('.modal.show').modal('hide');
          $(".alert").length && $('.alert').alert('close');
        }
        else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
        else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
        else {
          switch (action) {
            case "SELECT": $selected.trigger('click'); break;
            case "REPEAT": $(self).find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-chooseoption'))); break;
            case "CHECK": $(self).find('.btn-check').trigger('click'); break;
            case "NONE":
            default:
              $(self).find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
              break;
          }
        }
      };
      $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);

    });

    $('.pictograma').on('click', '.btn-reset', function () {
      let $widget = $(this).closest('.pictograma');
      $widget.find('.response').removeClass('acierto btn-danger').addClass('btn-success');
      $widget.find('.choose-feedback').removeClass('verde rojo').empty();
      let $fig = $widget.find('figure');
      let $img = $fig.find('img');
      $img.css('transition', '')
        .css('transform-style', '')
        .css('backface-visibility', '')
        .css('transform', '');
      $img.show();
      $fig.find('.choose-result').remove();
    });

    $('.pictograma').on('click', '.response', function (e) {
      e.preventDefault();
      var gamification = $('body').hasClass('gamification');
      var pregunta = $(this).attr('data-question');
      var respuesta = $(this).attr('data-response');
      var correcto = $('#' + pregunta).attr('data-value');
      var objetivo = $('#' + pregunta).attr('data-obj');

      var descripcion = $('#' + pregunta).attr('data-desc');
      let $img = $('figure[data-question="' + pregunta + '"] > img');
      var imgwidth = $img.is(':visible') ? $img.width() : $('figure[data-question="' + pregunta + '"]').find('.choose-result').width();
      var imgheight = $img.is(':visible') ? $img.height() : $('figure[data-question="' + pregunta + '"]').find('.choose-result').height();

      $(this).trigger('gamificate', [correcto == respuesta, correcto == respuesta ? 1 : 0]);
      if (!gamification) {
        $img.css('transition', '0.6s').css('transform-style', 'preserve-3d').css('backface-visibility', 'hidden').css('transform', 'rotateY(180deg)');
        setObjetivoCompleto(objetivo, descripcion, descripcion);
        if (correcto == respuesta) {
          setTimeout(function () {
            $img.hide();
            $('figure[data-question="' + pregunta + '"]').find('.choose-result').remove();
            $('figure[data-question="' + pregunta + '"]').append($('<div />').addClass('choose-result').css('display', 'none').css('background-color', '#266448').css('width', imgwidth).css('height', imgheight));
            $('figure[data-question="' + pregunta + '"] > div').append($('<div />').html('<i class="fa fa-check" aria-hidden="true"></i>').css('color', 'white').css('font-size', '5em').addClass('text-center mx-auto'));
            $('figure[data-question="' + pregunta + '"] > div').css('transition', '0.2s').css('display', 'block').addClass('d-flex align-items-center');
            $('.response[data-question="' + pregunta + '"][data-response=' + correcto + ']').addClass('acierto');

            $('#choose' + pregunta).html("");
            setTimeout(function () {
              $('#choose' + pregunta)
                .addClass('verde').removeClass('rojo')
                .html(i18n('CorrectOption'));
            }, 100);
          }, 500)

        } else {
          setTimeout(function () {
            $img.hide();
            $('figure[data-question="' + pregunta + '"]').find('.choose-result').remove();
            $('figure[data-question="' + pregunta + '"]').append($('<div />').addClass('choose-result').css('display', 'none').css('background-color', '#b50303').css('width', imgwidth).css('height', imgheight));
            $('figure[data-question="' + pregunta + '"] > div').append($('<div />').html('<i class="fa fa-times" aria-hidden="true"></i>').css('color', 'white').css('font-size', '5em').addClass('text-center mx-auto'));
            $('figure[data-question="' + pregunta + '"] > div').css('transition', '0.2s').css('display', 'block').addClass('d-flex align-items-center');
            $('.response[data-question="' + pregunta + '"][data-response=' + correcto + ']').addClass('acierto');
            $('.response[data-question="' + pregunta + '"][data-response=' + respuesta + ']').removeClass('btn-success').addClass('btn-danger');

            $('#choose' + pregunta).html("");
            setTimeout(function () {
              $('#choose' + pregunta)
                .addClass('rojo').removeClass('verde')
                .html(i18n('IncorrectOption'));
            }, 100)
          }, 500);
        }
      } else {
        $('.response[data-question="' + pregunta + '"]').attr('disabled', true);
      }
    });
  }

  let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
    .then(response => response.json())
    .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))

})();
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dragula = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var emitter = require('contra/emitter');
var crossvent = require('crossvent');
var classes = require('./classes');
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./classes":1,"contra/emitter":5,"crossvent":6}],3:[function(require,module,exports){
module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }

},{}],4:[function(require,module,exports){
'use strict';

var ticky = require('ticky');

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};

},{"ticky":9}],5:[function(require,module,exports){
'use strict';

var atoa = require('atoa');
var debounce = require('./debounce');

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};

},{"./debounce":4,"atoa":3}],6:[function(require,module,exports){
(function (global){
'use strict';

var customEvent = require('custom-event');
var eventmap = require('./eventmap');
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./eventmap":7,"custom-event":8}],7:[function(require,module,exports){
(function (global){
'use strict';

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
(function (global){

var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],9:[function(require,module,exports){
var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;
},{}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGFzc2VzLmpzIiwiZHJhZ3VsYS5qcyIsIm5vZGVfbW9kdWxlcy9hdG9hL2F0b2EuanMiLCJub2RlX21vZHVsZXMvY29udHJhL2RlYm91bmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvbnRyYS9lbWl0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2Nyb3NzdmVudC9zcmMvY3Jvc3N2ZW50LmpzIiwibm9kZV9tb2R1bGVzL2Nyb3NzdmVudC9zcmMvZXZlbnRtYXAuanMiLCJub2RlX21vZHVsZXMvY3VzdG9tLWV2ZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3RpY2t5L3RpY2t5LWJyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2htQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FjaGUgPSB7fTtcbnZhciBzdGFydCA9ICcoPzpefFxcXFxzKSc7XG52YXIgZW5kID0gJyg/OlxcXFxzfCQpJztcblxuZnVuY3Rpb24gbG9va3VwQ2xhc3MgKGNsYXNzTmFtZSkge1xuICB2YXIgY2FjaGVkID0gY2FjaGVbY2xhc3NOYW1lXTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIGNhY2hlZC5sYXN0SW5kZXggPSAwO1xuICB9IGVsc2Uge1xuICAgIGNhY2hlW2NsYXNzTmFtZV0gPSBjYWNoZWQgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgY2xhc3NOYW1lICsgZW5kLCAnZycpO1xuICB9XG4gIHJldHVybiBjYWNoZWQ7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xhc3NOYW1lKSB7XG4gIHZhciBjdXJyZW50ID0gZWwuY2xhc3NOYW1lO1xuICBpZiAoIWN1cnJlbnQubGVuZ3RoKSB7XG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9IGVsc2UgaWYgKCFsb29rdXBDbGFzcyhjbGFzc05hbWUpLnRlc3QoY3VycmVudCkpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJtQ2xhc3MgKGVsLCBjbGFzc05hbWUpIHtcbiAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobG9va3VwQ2xhc3MoY2xhc3NOYW1lKSwgJyAnKS50cmltKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQ6IGFkZENsYXNzLFxuICBybTogcm1DbGFzc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVtaXR0ZXIgPSByZXF1aXJlKCdjb250cmEvZW1pdHRlcicpO1xudmFyIGNyb3NzdmVudCA9IHJlcXVpcmUoJ2Nyb3NzdmVudCcpO1xudmFyIGNsYXNzZXMgPSByZXF1aXJlKCcuL2NsYXNzZXMnKTtcbnZhciBkb2MgPSBkb2N1bWVudDtcbnZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG5mdW5jdGlvbiBkcmFndWxhIChpbml0aWFsQ29udGFpbmVycywgb3B0aW9ucykge1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSA9PT0gZmFsc2UpIHtcbiAgICBvcHRpb25zID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgfVxuICB2YXIgX21pcnJvcjsgLy8gbWlycm9yIGltYWdlXG4gIHZhciBfc291cmNlOyAvLyBzb3VyY2UgY29udGFpbmVyXG4gIHZhciBfaXRlbTsgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gIHZhciBfb2Zmc2V0WDsgLy8gcmVmZXJlbmNlIHhcbiAgdmFyIF9vZmZzZXRZOyAvLyByZWZlcmVuY2UgeVxuICB2YXIgX21vdmVYOyAvLyByZWZlcmVuY2UgbW92ZSB4XG4gIHZhciBfbW92ZVk7IC8vIHJlZmVyZW5jZSBtb3ZlIHlcbiAgdmFyIF9pbml0aWFsU2libGluZzsgLy8gcmVmZXJlbmNlIHNpYmxpbmcgd2hlbiBncmFiYmVkXG4gIHZhciBfY3VycmVudFNpYmxpbmc7IC8vIHJlZmVyZW5jZSBzaWJsaW5nIG5vd1xuICB2YXIgX2NvcHk7IC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICB2YXIgX3JlbmRlclRpbWVyOyAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICB2YXIgX2xhc3REcm9wVGFyZ2V0ID0gbnVsbDsgLy8gbGFzdCBjb250YWluZXIgaXRlbSB3YXMgb3ZlclxuICB2YXIgX2dyYWJiZWQ7IC8vIGhvbGRzIG1vdXNlZG93biBjb250ZXh0IHVudGlsIGZpcnN0IG1vdXNlbW92ZVxuXG4gIHZhciBvID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKG8ubW92ZXMgPT09IHZvaWQgMCkgeyBvLm1vdmVzID0gYWx3YXlzOyB9XG4gIGlmIChvLmFjY2VwdHMgPT09IHZvaWQgMCkgeyBvLmFjY2VwdHMgPSBhbHdheXM7IH1cbiAgaWYgKG8uaW52YWxpZCA9PT0gdm9pZCAwKSB7IG8uaW52YWxpZCA9IGludmFsaWRUYXJnZXQ7IH1cbiAgaWYgKG8uY29udGFpbmVycyA9PT0gdm9pZCAwKSB7IG8uY29udGFpbmVycyA9IGluaXRpYWxDb250YWluZXJzIHx8IFtdOyB9XG4gIGlmIChvLmlzQ29udGFpbmVyID09PSB2b2lkIDApIHsgby5pc0NvbnRhaW5lciA9IG5ldmVyOyB9XG4gIGlmIChvLmNvcHkgPT09IHZvaWQgMCkgeyBvLmNvcHkgPSBmYWxzZTsgfVxuICBpZiAoby5jb3B5U29ydFNvdXJjZSA9PT0gdm9pZCAwKSB7IG8uY29weVNvcnRTb3VyY2UgPSBmYWxzZTsgfVxuICBpZiAoby5yZXZlcnRPblNwaWxsID09PSB2b2lkIDApIHsgby5yZXZlcnRPblNwaWxsID0gZmFsc2U7IH1cbiAgaWYgKG8ucmVtb3ZlT25TcGlsbCA9PT0gdm9pZCAwKSB7IG8ucmVtb3ZlT25TcGlsbCA9IGZhbHNlOyB9XG4gIGlmIChvLmRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7IG8uZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJzsgfVxuICBpZiAoby5pZ25vcmVJbnB1dFRleHRTZWxlY3Rpb24gPT09IHZvaWQgMCkgeyBvLmlnbm9yZUlucHV0VGV4dFNlbGVjdGlvbiA9IHRydWU7IH1cbiAgaWYgKG8ubWlycm9yQ29udGFpbmVyID09PSB2b2lkIDApIHsgby5taXJyb3JDb250YWluZXIgPSBkb2MuYm9keTsgfVxuXG4gIHZhciBkcmFrZSA9IGVtaXR0ZXIoe1xuICAgIGNvbnRhaW5lcnM6IG8uY29udGFpbmVycyxcbiAgICBzdGFydDogbWFudWFsU3RhcnQsXG4gICAgZW5kOiBlbmQsXG4gICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBjYW5Nb3ZlOiBjYW5Nb3ZlLFxuICAgIGRyYWdnaW5nOiBmYWxzZVxuICB9KTtcblxuICBpZiAoby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSB7XG4gICAgZHJha2Uub24oJ292ZXInLCBzcGlsbE92ZXIpLm9uKCdvdXQnLCBzcGlsbE91dCk7XG4gIH1cblxuICBldmVudHMoKTtcblxuICByZXR1cm4gZHJha2U7XG5cbiAgZnVuY3Rpb24gaXNDb250YWluZXIgKGVsKSB7XG4gICAgcmV0dXJuIGRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihlbCkgIT09IC0xIHx8IG8uaXNDb250YWluZXIoZWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRzIChyZW1vdmUpIHtcbiAgICB2YXIgb3AgPSByZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnO1xuICAgIHRvdWNoeShkb2N1bWVudEVsZW1lbnQsIG9wLCAnbW91c2Vkb3duJywgZ3JhYik7XG4gICAgdG91Y2h5KGRvY3VtZW50RWxlbWVudCwgb3AsICdtb3VzZXVwJywgcmVsZWFzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBldmVudHVhbE1vdmVtZW50cyAocmVtb3ZlKSB7XG4gICAgdmFyIG9wID0gcmVtb3ZlID8gJ3JlbW92ZScgOiAnYWRkJztcbiAgICB0b3VjaHkoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNlbW92ZScsIHN0YXJ0QmVjYXVzZU1vdXNlTW92ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZW1lbnRzIChyZW1vdmUpIHtcbiAgICB2YXIgb3AgPSByZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnO1xuICAgIGNyb3NzdmVudFtvcF0oZG9jdW1lbnRFbGVtZW50LCAnc2VsZWN0c3RhcnQnLCBwcmV2ZW50R3JhYmJlZCk7IC8vIElFOFxuICAgIGNyb3NzdmVudFtvcF0oZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBwcmV2ZW50R3JhYmJlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBldmVudHModHJ1ZSk7XG4gICAgcmVsZWFzZSh7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50R3JhYmJlZCAoZSkge1xuICAgIGlmIChfZ3JhYmJlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdyYWIgKGUpIHtcbiAgICBfbW92ZVggPSBlLmNsaWVudFg7XG4gICAgX21vdmVZID0gZS5jbGllbnRZO1xuXG4gICAgdmFyIGlnbm9yZSA9IHdoaWNoTW91c2VCdXR0b24oZSkgIT09IDEgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleTtcbiAgICBpZiAoaWdub3JlKSB7XG4gICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICB9XG4gICAgdmFyIGl0ZW0gPSBlLnRhcmdldDtcbiAgICB2YXIgY29udGV4dCA9IGNhblN0YXJ0KGl0ZW0pO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfZ3JhYmJlZCA9IGNvbnRleHQ7XG4gICAgZXZlbnR1YWxNb3ZlbWVudHMoKTtcbiAgICBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgaWYgKGlzSW5wdXQoaXRlbSkpIHsgLy8gc2VlIGFsc286IGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8yMDhcbiAgICAgICAgaXRlbS5mb2N1cygpOyAvLyBmaXhlcyBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMTc2XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8xNTVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEJlY2F1c2VNb3VzZU1vdmVkIChlKSB7XG4gICAgaWYgKCFfZ3JhYmJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2hpY2hNb3VzZUJ1dHRvbihlKSA9PT0gMCkge1xuICAgICAgcmVsZWFzZSh7fSk7XG4gICAgICByZXR1cm47IC8vIHdoZW4gdGV4dCBpcyBzZWxlY3RlZCBvbiBhbiBpbnB1dCBhbmQgdGhlbiBkcmFnZ2VkLCBtb3VzZXVwIGRvZXNuJ3QgZmlyZS4gdGhpcyBpcyBvdXIgb25seSBob3BlXG4gICAgfVxuICAgIC8vIHRydXRoeSBjaGVjayBmaXhlcyAjMjM5LCBlcXVhbGl0eSBmaXhlcyAjMjA3XG4gICAgaWYgKGUuY2xpZW50WCAhPT0gdm9pZCAwICYmIGUuY2xpZW50WCA9PT0gX21vdmVYICYmIGUuY2xpZW50WSAhPT0gdm9pZCAwICYmIGUuY2xpZW50WSA9PT0gX21vdmVZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvLmlnbm9yZUlucHV0VGV4dFNlbGVjdGlvbikge1xuICAgICAgdmFyIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgdmFyIGNsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuICAgICAgdmFyIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBkb2MuZWxlbWVudEZyb21Qb2ludChjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgIGlmIChpc0lucHV0KGVsZW1lbnRCZWhpbmRDdXJzb3IpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ3JhYmJlZCA9IF9ncmFiYmVkOyAvLyBjYWxsIHRvIGVuZCgpIHVuc2V0cyBfZ3JhYmJlZFxuICAgIGV2ZW50dWFsTW92ZW1lbnRzKHRydWUpO1xuICAgIG1vdmVtZW50cygpO1xuICAgIGVuZCgpO1xuICAgIHN0YXJ0KGdyYWJiZWQpO1xuXG4gICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgIF9vZmZzZXRZID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQudG9wO1xuXG4gICAgY2xhc3Nlcy5hZGQoX2NvcHkgfHwgX2l0ZW0sICdndS10cmFuc2l0Jyk7XG4gICAgcmVuZGVyTWlycm9ySW1hZ2UoKTtcbiAgICBkcmFnKGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuU3RhcnQgKGl0ZW0pIHtcbiAgICBpZiAoZHJha2UuZHJhZ2dpbmcgJiYgX21pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgIHJldHVybjsgLy8gZG9uJ3QgZHJhZyBjb250YWluZXIgaXRzZWxmXG4gICAgfVxuICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuICAgIHdoaWxlIChnZXRQYXJlbnQoaXRlbSkgJiYgaXNDb250YWluZXIoZ2V0UGFyZW50KGl0ZW0pKSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpdGVtID0gZ2V0UGFyZW50KGl0ZW0pOyAvLyBkcmFnIHRhcmdldCBzaG91bGQgYmUgYSB0b3AgZWxlbWVudFxuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNvdXJjZSA9IGdldFBhcmVudChpdGVtKTtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbW92YWJsZSA9IG8ubW92ZXMoaXRlbSwgc291cmNlLCBoYW5kbGUsIG5leHRFbChpdGVtKSk7XG4gICAgaWYgKCFtb3ZhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYW5Nb3ZlIChpdGVtKSB7XG4gICAgcmV0dXJuICEhY2FuU3RhcnQoaXRlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYW51YWxTdGFydCAoaXRlbSkge1xuICAgIHZhciBjb250ZXh0ID0gY2FuU3RhcnQoaXRlbSk7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHN0YXJ0KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0IChjb250ZXh0KSB7XG4gICAgaWYgKGlzQ29weShjb250ZXh0Lml0ZW0sIGNvbnRleHQuc291cmNlKSkge1xuICAgICAgX2NvcHkgPSBjb250ZXh0Lml0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgZHJha2UuZW1pdCgnY2xvbmVkJywgX2NvcHksIGNvbnRleHQuaXRlbSwgJ2NvcHknKTtcbiAgICB9XG5cbiAgICBfc291cmNlID0gY29udGV4dC5zb3VyY2U7XG4gICAgX2l0ZW0gPSBjb250ZXh0Lml0ZW07XG4gICAgX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbmV4dEVsKGNvbnRleHQuaXRlbSk7XG5cbiAgICBkcmFrZS5kcmFnZ2luZyA9IHRydWU7XG4gICAgZHJha2UuZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmFsaWRUYXJnZXQgKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZCAoKSB7XG4gICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIGRyb3AoaXRlbSwgZ2V0UGFyZW50KGl0ZW0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuZ3JhYiAoKSB7XG4gICAgX2dyYWJiZWQgPSBmYWxzZTtcbiAgICBldmVudHVhbE1vdmVtZW50cyh0cnVlKTtcbiAgICBtb3ZlbWVudHModHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWxlYXNlIChlKSB7XG4gICAgdW5ncmFiKCk7XG5cbiAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgIHZhciBjbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcbiAgICB2YXIgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICB2YXIgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgIGlmIChkcm9wVGFyZ2V0ICYmICgoX2NvcHkgJiYgby5jb3B5U29ydFNvdXJjZSkgfHwgKCFfY29weSB8fCBkcm9wVGFyZ2V0ICE9PSBfc291cmNlKSkpIHtcbiAgICAgIGRyb3AoaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgfSBlbHNlIGlmIChvLnJlbW92ZU9uU3BpbGwpIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wIChpdGVtLCB0YXJnZXQpIHtcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGl0ZW0pO1xuICAgIGlmIChfY29weSAmJiBvLmNvcHlTb3J0U291cmNlICYmIHRhcmdldCA9PT0gX3NvdXJjZSkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9pdGVtKTtcbiAgICB9XG4gICAgaWYgKGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQpKSB7XG4gICAgICBkcmFrZS5lbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlLCBfc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJha2UuZW1pdCgnZHJvcCcsIGl0ZW0sIHRhcmdldCwgX3NvdXJjZSwgX2N1cnJlbnRTaWJsaW5nKTtcbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlICgpIHtcbiAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChpdGVtKTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuICAgIGRyYWtlLmVtaXQoX2NvcHkgPyAnY2FuY2VsJyA6ICdyZW1vdmUnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgIGNsZWFudXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCAocmV2ZXJ0KSB7XG4gICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmV2ZXJ0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gcmV2ZXJ0IDogby5yZXZlcnRPblNwaWxsO1xuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChpdGVtKTtcbiAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudChwYXJlbnQpO1xuICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiByZXZlcnRzKSB7XG4gICAgICBpZiAoX2NvcHkpIHtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfY29weSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbml0aWFsIHx8IHJldmVydHMpIHtcbiAgICAgIGRyYWtlLmVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UsIF9zb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFrZS5lbWl0KCdkcm9wJywgaXRlbSwgcGFyZW50LCBfc291cmNlLCBfY3VycmVudFNpYmxpbmcpO1xuICAgIH1cbiAgICBjbGVhbnVwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIHVuZ3JhYigpO1xuICAgIHJlbW92ZU1pcnJvckltYWdlKCk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNsYXNzZXMucm0oaXRlbSwgJ2d1LXRyYW5zaXQnKTtcbiAgICB9XG4gICAgaWYgKF9yZW5kZXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KF9yZW5kZXJUaW1lcik7XG4gICAgfVxuICAgIGRyYWtlLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgaWYgKF9sYXN0RHJvcFRhcmdldCkge1xuICAgICAgZHJha2UuZW1pdCgnb3V0JywgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICB9XG4gICAgZHJha2UuZW1pdCgnZHJhZ2VuZCcsIGl0ZW0pO1xuICAgIF9zb3VyY2UgPSBfaXRlbSA9IF9jb3B5ID0gX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gX3JlbmRlclRpbWVyID0gX2xhc3REcm9wVGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSW5pdGlhbFBsYWNlbWVudCAodGFyZ2V0LCBzKSB7XG4gICAgdmFyIHNpYmxpbmc7XG4gICAgaWYgKHMgIT09IHZvaWQgMCkge1xuICAgICAgc2libGluZyA9IHM7XG4gICAgfSBlbHNlIGlmIChfbWlycm9yKSB7XG4gICAgICBzaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWJsaW5nID0gbmV4dEVsKF9jb3B5IHx8IF9pdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kRHJvcFRhcmdldCAoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgIHZhciB0YXJnZXQgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuICAgIHdoaWxlICh0YXJnZXQgJiYgIWFjY2VwdGVkKCkpIHtcbiAgICAgIHRhcmdldCA9IGdldFBhcmVudCh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuXG4gICAgZnVuY3Rpb24gYWNjZXB0ZWQgKCkge1xuICAgICAgdmFyIGRyb3BwYWJsZSA9IGlzQ29udGFpbmVyKHRhcmdldCk7XG4gICAgICBpZiAoZHJvcHBhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpO1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZSh0YXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHJlZmVyZW5jZSk7XG4gICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gc2hvdWxkIGFsd2F5cyBiZSBhYmxlIHRvIGRyb3AgaXQgcmlnaHQgYmFjayB3aGVyZSBpdCB3YXNcbiAgICAgIH1cbiAgICAgIHJldHVybiBvLmFjY2VwdHMoX2l0ZW0sIHRhcmdldCwgX3NvdXJjZSwgcmVmZXJlbmNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnIChlKSB7XG4gICAgaWYgKCFfbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBjbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICB2YXIgY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG4gICAgdmFyIHggPSBjbGllbnRYIC0gX29mZnNldFg7XG4gICAgdmFyIHkgPSBjbGllbnRZIC0gX29mZnNldFk7XG5cbiAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXG4gICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICB2YXIgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICB2YXIgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgIHZhciBjaGFuZ2VkID0gZHJvcFRhcmdldCAhPT0gbnVsbCAmJiBkcm9wVGFyZ2V0ICE9PSBfbGFzdERyb3BUYXJnZXQ7XG4gICAgaWYgKGNoYW5nZWQgfHwgZHJvcFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgb3V0KCk7XG4gICAgICBfbGFzdERyb3BUYXJnZXQgPSBkcm9wVGFyZ2V0O1xuICAgICAgb3ZlcigpO1xuICAgIH1cbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGl0ZW0pO1xuICAgIGlmIChkcm9wVGFyZ2V0ID09PSBfc291cmNlICYmIF9jb3B5ICYmICFvLmNvcHlTb3J0U291cmNlKSB7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJlZmVyZW5jZTtcbiAgICB2YXIgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvcik7XG4gICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgfSBlbHNlIGlmIChvLnJldmVydE9uU3BpbGwgPT09IHRydWUgJiYgIV9jb3B5KSB7XG4gICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICBkcm9wVGFyZ2V0ID0gX3NvdXJjZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKF9jb3B5ICYmIHBhcmVudCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIChyZWZlcmVuY2UgPT09IG51bGwgJiYgY2hhbmdlZCkgfHxcbiAgICAgIHJlZmVyZW5jZSAhPT0gaXRlbSAmJlxuICAgICAgcmVmZXJlbmNlICE9PSBuZXh0RWwoaXRlbSlcbiAgICApIHtcbiAgICAgIF9jdXJyZW50U2libGluZyA9IHJlZmVyZW5jZTtcbiAgICAgIGRyb3BUYXJnZXQuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlZmVyZW5jZSk7XG4gICAgICBkcmFrZS5lbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW92ZWQgKHR5cGUpIHsgZHJha2UuZW1pdCh0eXBlLCBpdGVtLCBfbGFzdERyb3BUYXJnZXQsIF9zb3VyY2UpOyB9XG4gICAgZnVuY3Rpb24gb3ZlciAoKSB7IGlmIChjaGFuZ2VkKSB7IG1vdmVkKCdvdmVyJyk7IH0gfVxuICAgIGZ1bmN0aW9uIG91dCAoKSB7IGlmIChfbGFzdERyb3BUYXJnZXQpIHsgbW92ZWQoJ291dCcpOyB9IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaWxsT3ZlciAoZWwpIHtcbiAgICBjbGFzc2VzLnJtKGVsLCAnZ3UtaGlkZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BpbGxPdXQgKGVsKSB7XG4gICAgaWYgKGRyYWtlLmRyYWdnaW5nKSB7IGNsYXNzZXMuYWRkKGVsLCAnZ3UtaGlkZScpOyB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSAoKSB7XG4gICAgaWYgKF9taXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSBnZXRSZWN0V2lkdGgocmVjdCkgKyAncHgnO1xuICAgIF9taXJyb3Iuc3R5bGUuaGVpZ2h0ID0gZ2V0UmVjdEhlaWdodChyZWN0KSArICdweCc7XG4gICAgY2xhc3Nlcy5ybShfbWlycm9yLCAnZ3UtdHJhbnNpdCcpO1xuICAgIGNsYXNzZXMuYWRkKF9taXJyb3IsICdndS1taXJyb3InKTtcbiAgICBvLm1pcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChfbWlycm9yKTtcbiAgICB0b3VjaHkoZG9jdW1lbnRFbGVtZW50LCAnYWRkJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgIGNsYXNzZXMuYWRkKG8ubWlycm9yQ29udGFpbmVyLCAnZ3UtdW5zZWxlY3RhYmxlJyk7XG4gICAgZHJha2UuZW1pdCgnY2xvbmVkJywgX21pcnJvciwgX2l0ZW0sICdtaXJyb3InKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU1pcnJvckltYWdlICgpIHtcbiAgICBpZiAoX21pcnJvcikge1xuICAgICAgY2xhc3Nlcy5ybShvLm1pcnJvckNvbnRhaW5lciwgJ2d1LXVuc2VsZWN0YWJsZScpO1xuICAgICAgdG91Y2h5KGRvY3VtZW50RWxlbWVudCwgJ3JlbW92ZScsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGdldFBhcmVudChfbWlycm9yKS5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkIChkcm9wVGFyZ2V0LCB0YXJnZXQpIHtcbiAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgZ2V0UGFyZW50KGltbWVkaWF0ZSkgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgIGltbWVkaWF0ZSA9IGdldFBhcmVudChpbW1lZGlhdGUpO1xuICAgIH1cbiAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaW1tZWRpYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlIChkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICB2YXIgaG9yaXpvbnRhbCA9IG8uZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIHJlZmVyZW5jZSA9IHRhcmdldCAhPT0gZHJvcFRhcmdldCA/IGluc2lkZSgpIDogb3V0c2lkZSgpO1xuICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICBmdW5jdGlvbiBvdXRzaWRlICgpIHsgLy8gc2xvd2VyLCBidXQgYWJsZSB0byBmaWd1cmUgb3V0IGFueSBwb3NpdGlvblxuICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgZWw7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlbCA9IGRyb3BUYXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGhvcml6b250YWwgJiYgKHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyKSA+IHgpIHsgcmV0dXJuIGVsOyB9XG4gICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiAocmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIpID4geSkgeyByZXR1cm4gZWw7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2lkZSAoKSB7IC8vIGZhc3RlciwgYnV0IG9ubHkgYXZhaWxhYmxlIGlmIGRyb3BwZWQgaW5zaWRlIGEgY2hpbGQgZWxlbWVudFxuICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh4ID4gcmVjdC5sZWZ0ICsgZ2V0UmVjdFdpZHRoKHJlY3QpIC8gMik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZSh5ID4gcmVjdC50b3AgKyBnZXRSZWN0SGVpZ2h0KHJlY3QpIC8gMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZSAoYWZ0ZXIpIHtcbiAgICAgIHJldHVybiBhZnRlciA/IG5leHRFbCh0YXJnZXQpIDogdGFyZ2V0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29weSAoaXRlbSwgY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvLmNvcHkgPT09ICdib29sZWFuJyA/IG8uY29weSA6IG8uY29weShpdGVtLCBjb250YWluZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvdWNoeSAoZWwsIG9wLCB0eXBlLCBmbikge1xuICB2YXIgdG91Y2ggPSB7XG4gICAgbW91c2V1cDogJ3RvdWNoZW5kJyxcbiAgICBtb3VzZWRvd246ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnXG4gIH07XG4gIHZhciBwb2ludGVycyA9IHtcbiAgICBtb3VzZXVwOiAncG9pbnRlcnVwJyxcbiAgICBtb3VzZWRvd246ICdwb2ludGVyZG93bicsXG4gICAgbW91c2Vtb3ZlOiAncG9pbnRlcm1vdmUnXG4gIH07XG4gIHZhciBtaWNyb3NvZnQgPSB7XG4gICAgbW91c2V1cDogJ01TUG9pbnRlclVwJyxcbiAgICBtb3VzZWRvd246ICdNU1BvaW50ZXJEb3duJyxcbiAgICBtb3VzZW1vdmU6ICdNU1BvaW50ZXJNb3ZlJ1xuICB9O1xuICBpZiAoZ2xvYmFsLm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCkge1xuICAgIGNyb3NzdmVudFtvcF0oZWwsIHBvaW50ZXJzW3R5cGVdLCBmbik7XG4gIH0gZWxzZSBpZiAoZ2xvYmFsLm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG4gICAgY3Jvc3N2ZW50W29wXShlbCwgbWljcm9zb2Z0W3R5cGVdLCBmbik7XG4gIH0gZWxzZSB7XG4gICAgY3Jvc3N2ZW50W29wXShlbCwgdG91Y2hbdHlwZV0sIGZuKTtcbiAgICBjcm9zc3ZlbnRbb3BdKGVsLCB0eXBlLCBmbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hpY2hNb3VzZUJ1dHRvbiAoZSkge1xuICBpZiAoZS50b3VjaGVzICE9PSB2b2lkIDApIHsgcmV0dXJuIGUudG91Y2hlcy5sZW5ndGg7IH1cbiAgaWYgKGUud2hpY2ggIT09IHZvaWQgMCAmJiBlLndoaWNoICE9PSAwKSB7IHJldHVybiBlLndoaWNoOyB9IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMjYxXG4gIGlmIChlLmJ1dHRvbnMgIT09IHZvaWQgMCkgeyByZXR1cm4gZS5idXR0b25zOyB9XG4gIHZhciBidXR0b24gPSBlLmJ1dHRvbjtcbiAgaWYgKGJ1dHRvbiAhPT0gdm9pZCAwKSB7IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzk5ZThmZjFiYWE3YWUzNDFlOTRiYjg5YzNlODQ1NzBjN2MzYWQ5ZWEvc3JjL2V2ZW50LmpzI0w1NzMtTDU3NVxuICAgIHJldHVybiBidXR0b24gJiAxID8gMSA6IGJ1dHRvbiAmIDIgPyAzIDogKGJ1dHRvbiAmIDQgPyAyIDogMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0IChlbCkge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCArIGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpLFxuICAgIHRvcDogcmVjdC50b3AgKyBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCAoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFtvZmZzZXRQcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZ2xvYmFsW29mZnNldFByb3BdO1xuICB9XG4gIGlmIChkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgfVxuICByZXR1cm4gZG9jLmJvZHlbc2Nyb2xsUHJvcF07XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludCAocG9pbnQsIHgsIHkpIHtcbiAgdmFyIHAgPSBwb2ludCB8fCB7fTtcbiAgdmFyIHN0YXRlID0gcC5jbGFzc05hbWU7XG4gIHZhciBlbDtcbiAgcC5jbGFzc05hbWUgKz0gJyBndS1oaWRlJztcbiAgZWwgPSBkb2MuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgcC5jbGFzc05hbWUgPSBzdGF0ZTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBuZXZlciAoKSB7IHJldHVybiBmYWxzZTsgfVxuZnVuY3Rpb24gYWx3YXlzICgpIHsgcmV0dXJuIHRydWU7IH1cbmZ1bmN0aW9uIGdldFJlY3RXaWR0aCAocmVjdCkgeyByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7IH1cbmZ1bmN0aW9uIGdldFJlY3RIZWlnaHQgKHJlY3QpIHsgcmV0dXJuIHJlY3QuaGVpZ2h0IHx8IChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKTsgfVxuZnVuY3Rpb24gZ2V0UGFyZW50IChlbCkgeyByZXR1cm4gZWwucGFyZW50Tm9kZSA9PT0gZG9jID8gbnVsbCA6IGVsLnBhcmVudE5vZGU7IH1cbmZ1bmN0aW9uIGlzSW5wdXQgKGVsKSB7IHJldHVybiBlbC50YWdOYW1lID09PSAnSU5QVVQnIHx8IGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgfHwgaXNFZGl0YWJsZShlbCk7IH1cbmZ1bmN0aW9uIGlzRWRpdGFibGUgKGVsKSB7XG4gIGlmICghZWwpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIG5vIHBhcmVudHMgd2VyZSBlZGl0YWJsZVxuICBpZiAoZWwuY29udGVudEVkaXRhYmxlID09PSAnZmFsc2UnKSB7IHJldHVybiBmYWxzZTsgfSAvLyBzdG9wIHRoZSBsb29rdXBcbiAgaWYgKGVsLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnKSB7IHJldHVybiB0cnVlOyB9IC8vIGZvdW5kIGEgY29udGVudEVkaXRhYmxlIGVsZW1lbnQgaW4gdGhlIGNoYWluXG4gIHJldHVybiBpc0VkaXRhYmxlKGdldFBhcmVudChlbCkpOyAvLyBjb250ZW50RWRpdGFibGUgaXMgc2V0IHRvICdpbmhlcml0J1xufVxuXG5mdW5jdGlvbiBuZXh0RWwgKGVsKSB7XG4gIHJldHVybiBlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbWFudWFsbHkoKTtcbiAgZnVuY3Rpb24gbWFudWFsbHkgKCkge1xuICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgZG8ge1xuICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICByZXR1cm4gc2libGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFdmVudEhvc3QgKGUpIHtcbiAgLy8gb24gdG91Y2hlbmQgZXZlbnQsIHdlIGhhdmUgdG8gdXNlIGBlLmNoYW5nZWRUb3VjaGVzYFxuICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8zNFxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICB9XG4gIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIGdldENvb3JkIChjb29yZCwgZSkge1xuICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgdmFyIG1pc3NNYXAgPSB7XG4gICAgcGFnZVg6ICdjbGllbnRYJywgLy8gSUU4XG4gICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgfTtcbiAgaWYgKGNvb3JkIGluIG1pc3NNYXAgJiYgIShjb29yZCBpbiBob3N0KSAmJiBtaXNzTWFwW2Nvb3JkXSBpbiBob3N0KSB7XG4gICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgfVxuICByZXR1cm4gaG9zdFtjb29yZF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhZ3VsYTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXRvYSAoYSwgbikgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSwgbik7IH1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRpY2t5ID0gcmVxdWlyZSgndGlja3knKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWJvdW5jZSAoZm4sIGFyZ3MsIGN0eCkge1xuICBpZiAoIWZuKSB7IHJldHVybjsgfVxuICB0aWNreShmdW5jdGlvbiBydW4gKCkge1xuICAgIGZuLmFwcGx5KGN0eCB8fCBudWxsLCBhcmdzIHx8IFtdKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXRvYSA9IHJlcXVpcmUoJ2F0b2EnKTtcbnZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbWl0dGVyICh0aGluZywgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBldnQgPSB7fTtcbiAgaWYgKHRoaW5nID09PSB1bmRlZmluZWQpIHsgdGhpbmcgPSB7fTsgfVxuICB0aGluZy5vbiA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIGlmICghZXZ0W3R5cGVdKSB7XG4gICAgICBldnRbdHlwZV0gPSBbZm5dO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnRbdHlwZV0ucHVzaChmbik7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbiAgfTtcbiAgdGhpbmcub25jZSA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIGZuLl9vbmNlID0gdHJ1ZTsgLy8gdGhpbmcub2ZmKGZuKSBzdGlsbCB3b3JrcyFcbiAgICB0aGluZy5vbih0eXBlLCBmbik7XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9O1xuICB0aGluZy5vZmYgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGMgPT09IDEpIHtcbiAgICAgIGRlbGV0ZSBldnRbdHlwZV07XG4gICAgfSBlbHNlIGlmIChjID09PSAwKSB7XG4gICAgICBldnQgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGV0ID0gZXZ0W3R5cGVdO1xuICAgICAgaWYgKCFldCkgeyByZXR1cm4gdGhpbmc7IH1cbiAgICAgIGV0LnNwbGljZShldC5pbmRleE9mKGZuKSwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbiAgfTtcbiAgdGhpbmcuZW1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IGF0b2EoYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdGhpbmcuZW1pdHRlclNuYXBzaG90KGFyZ3Muc2hpZnQoKSkuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG4gIHRoaW5nLmVtaXR0ZXJTbmFwc2hvdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgdmFyIGV0ID0gKGV2dFt0eXBlXSB8fCBbXSkuc2xpY2UoMCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gYXRvYShhcmd1bWVudHMpO1xuICAgICAgdmFyIGN0eCA9IHRoaXMgfHwgdGhpbmc7XG4gICAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJyAmJiBvcHRzLnRocm93cyAhPT0gZmFsc2UgJiYgIWV0Lmxlbmd0aCkgeyB0aHJvdyBhcmdzLmxlbmd0aCA9PT0gMSA/IGFyZ3NbMF0gOiBhcmdzOyB9XG4gICAgICBldC5mb3JFYWNoKGZ1bmN0aW9uIGVtaXR0ZXIgKGxpc3Rlbikge1xuICAgICAgICBpZiAob3B0cy5hc3luYykgeyBkZWJvdW5jZShsaXN0ZW4sIGFyZ3MsIGN0eCk7IH0gZWxzZSB7IGxpc3Rlbi5hcHBseShjdHgsIGFyZ3MpOyB9XG4gICAgICAgIGlmIChsaXN0ZW4uX29uY2UpIHsgdGhpbmcub2ZmKHR5cGUsIGxpc3Rlbik7IH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIH07XG4gIH07XG4gIHJldHVybiB0aGluZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjdXN0b21FdmVudCA9IHJlcXVpcmUoJ2N1c3RvbS1ldmVudCcpO1xudmFyIGV2ZW50bWFwID0gcmVxdWlyZSgnLi9ldmVudG1hcCcpO1xudmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbnZhciBhZGRFdmVudCA9IGFkZEV2ZW50RWFzeTtcbnZhciByZW1vdmVFdmVudCA9IHJlbW92ZUV2ZW50RWFzeTtcbnZhciBoYXJkQ2FjaGUgPSBbXTtcblxuaWYgKCFnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICBhZGRFdmVudCA9IGFkZEV2ZW50SGFyZDtcbiAgcmVtb3ZlRXZlbnQgPSByZW1vdmVFdmVudEhhcmQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQ6IGFkZEV2ZW50LFxuICByZW1vdmU6IHJlbW92ZUV2ZW50LFxuICBmYWJyaWNhdGU6IGZhYnJpY2F0ZUV2ZW50XG59O1xuXG5mdW5jdGlvbiBhZGRFdmVudEVhc3kgKGVsLCB0eXBlLCBmbiwgY2FwdHVyaW5nKSB7XG4gIHJldHVybiBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBjYXB0dXJpbmcpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudEhhcmQgKGVsLCB0eXBlLCBmbikge1xuICByZXR1cm4gZWwuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIHdyYXAoZWwsIHR5cGUsIGZuKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50RWFzeSAoZWwsIHR5cGUsIGZuLCBjYXB0dXJpbmcpIHtcbiAgcmV0dXJuIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGNhcHR1cmluZyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50SGFyZCAoZWwsIHR5cGUsIGZuKSB7XG4gIHZhciBsaXN0ZW5lciA9IHVud3JhcChlbCwgdHlwZSwgZm4pO1xuICBpZiAobGlzdGVuZXIpIHtcbiAgICByZXR1cm4gZWwuZGV0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmYWJyaWNhdGVFdmVudCAoZWwsIHR5cGUsIG1vZGVsKSB7XG4gIHZhciBlID0gZXZlbnRtYXAuaW5kZXhPZih0eXBlKSA9PT0gLTEgPyBtYWtlQ3VzdG9tRXZlbnQoKSA6IG1ha2VDbGFzc2ljRXZlbnQoKTtcbiAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGUpO1xuICB9IGVsc2Uge1xuICAgIGVsLmZpcmVFdmVudCgnb24nICsgdHlwZSwgZSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUNsYXNzaWNFdmVudCAoKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKGRvYy5jcmVhdGVFdmVudCkge1xuICAgICAgZSA9IGRvYy5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgIGUuaW5pdEV2ZW50KHR5cGUsIHRydWUsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KSB7XG4gICAgICBlID0gZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VDdXN0b21FdmVudCAoKSB7XG4gICAgcmV0dXJuIG5ldyBjdXN0b21FdmVudCh0eXBlLCB7IGRldGFpbDogbW9kZWwgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JhcHBlckZhY3RvcnkgKGVsLCB0eXBlLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlciAob3JpZ2luYWxFdmVudCkge1xuICAgIHZhciBlID0gb3JpZ2luYWxFdmVudCB8fCBnbG9iYWwuZXZlbnQ7XG4gICAgZS50YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCA9IGUucHJldmVudERlZmF1bHQgfHwgZnVuY3Rpb24gcHJldmVudERlZmF1bHQgKCkgeyBlLnJldHVyblZhbHVlID0gZmFsc2U7IH07XG4gICAgZS5zdG9wUHJvcGFnYXRpb24gPSBlLnN0b3BQcm9wYWdhdGlvbiB8fCBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24gKCkgeyBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7IH07XG4gICAgZS53aGljaCA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xuICAgIGZuLmNhbGwoZWwsIGUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cmFwIChlbCwgdHlwZSwgZm4pIHtcbiAgdmFyIHdyYXBwZXIgPSB1bndyYXAoZWwsIHR5cGUsIGZuKSB8fCB3cmFwcGVyRmFjdG9yeShlbCwgdHlwZSwgZm4pO1xuICBoYXJkQ2FjaGUucHVzaCh7XG4gICAgd3JhcHBlcjogd3JhcHBlcixcbiAgICBlbGVtZW50OiBlbCxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGZuOiBmblxuICB9KTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIHVud3JhcCAoZWwsIHR5cGUsIGZuKSB7XG4gIHZhciBpID0gZmluZChlbCwgdHlwZSwgZm4pO1xuICBpZiAoaSkge1xuICAgIHZhciB3cmFwcGVyID0gaGFyZENhY2hlW2ldLndyYXBwZXI7XG4gICAgaGFyZENhY2hlLnNwbGljZShpLCAxKTsgLy8gZnJlZSB1cCBhIHRhZCBvZiBtZW1vcnlcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kIChlbCwgdHlwZSwgZm4pIHtcbiAgdmFyIGksIGl0ZW07XG4gIGZvciAoaSA9IDA7IGkgPCBoYXJkQ2FjaGUubGVuZ3RoOyBpKyspIHtcbiAgICBpdGVtID0gaGFyZENhY2hlW2ldO1xuICAgIGlmIChpdGVtLmVsZW1lbnQgPT09IGVsICYmIGl0ZW0udHlwZSA9PT0gdHlwZSAmJiBpdGVtLmZuID09PSBmbikge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBldmVudG1hcCA9IFtdO1xudmFyIGV2ZW50bmFtZSA9ICcnO1xudmFyIHJvbiA9IC9eb24vO1xuXG5mb3IgKGV2ZW50bmFtZSBpbiBnbG9iYWwpIHtcbiAgaWYgKHJvbi50ZXN0KGV2ZW50bmFtZSkpIHtcbiAgICBldmVudG1hcC5wdXNoKGV2ZW50bmFtZS5zbGljZSgyKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudG1hcDtcbiIsIlxudmFyIE5hdGl2ZUN1c3RvbUV2ZW50ID0gZ2xvYmFsLkN1c3RvbUV2ZW50O1xuXG5mdW5jdGlvbiB1c2VOYXRpdmUgKCkge1xuICB0cnkge1xuICAgIHZhciBwID0gbmV3IE5hdGl2ZUN1c3RvbUV2ZW50KCdjYXQnLCB7IGRldGFpbDogeyBmb286ICdiYXInIH0gfSk7XG4gICAgcmV0dXJuICAnY2F0JyA9PT0gcC50eXBlICYmICdiYXInID09PSBwLmRldGFpbC5mb287XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ3Jvc3MtYnJvd3NlciBgQ3VzdG9tRXZlbnRgIGNvbnN0cnVjdG9yLlxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC5DdXN0b21FdmVudFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZU5hdGl2ZSgpID8gTmF0aXZlQ3VzdG9tRXZlbnQgOlxuXG4vLyBJRSA+PSA5XG4nZnVuY3Rpb24nID09PSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRXZlbnQgPyBmdW5jdGlvbiBDdXN0b21FdmVudCAodHlwZSwgcGFyYW1zKSB7XG4gIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGlmIChwYXJhbXMpIHtcbiAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICB9IGVsc2Uge1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSwgdm9pZCAwKTtcbiAgfVxuICByZXR1cm4gZTtcbn0gOlxuXG4vLyBJRSA8PSA4XG5mdW5jdGlvbiBDdXN0b21FdmVudCAodHlwZSwgcGFyYW1zKSB7XG4gIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgZS50eXBlID0gdHlwZTtcbiAgaWYgKHBhcmFtcykge1xuICAgIGUuYnViYmxlcyA9IEJvb2xlYW4ocGFyYW1zLmJ1YmJsZXMpO1xuICAgIGUuY2FuY2VsYWJsZSA9IEJvb2xlYW4ocGFyYW1zLmNhbmNlbGFibGUpO1xuICAgIGUuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcbiAgfSBlbHNlIHtcbiAgICBlLmJ1YmJsZXMgPSBmYWxzZTtcbiAgICBlLmNhbmNlbGFibGUgPSBmYWxzZTtcbiAgICBlLmRldGFpbCA9IHZvaWQgMDtcbiAgfVxuICByZXR1cm4gZTtcbn1cbiIsInZhciBzaSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicsIHRpY2s7XG5pZiAoc2kpIHtcbiAgdGljayA9IGZ1bmN0aW9uIChmbikgeyBzZXRJbW1lZGlhdGUoZm4pOyB9O1xufSBlbHNlIHtcbiAgdGljayA9IGZ1bmN0aW9uIChmbikgeyBzZXRUaW1lb3V0KGZuLCAwKTsgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aWNrOyJdfQ==

/*
* EaselJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs=this.createjs||{};(function(){var c=function(){throw"UID cannot be instantiated";};c._nextID=0;c.get=function(){return c._nextID++};createjs.UID=c})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.initialize=function(a){a.addEventListener=b.addEventListener;a.removeEventListener=b.removeEventListener;a.removeAllEventListeners=b.removeAllEventListeners;a.hasEventListener=b.hasEventListener;a.dispatchEvent=b.dispatchEvent};b._listeners=null;b.initialize=function(){};b.addEventListener=function(a,m){var b=this._listeners;b?this.removeEventListener(a,m):b=this._listeners={};var d=b[a];d||(d=b[a]=[]);d.push(m);return m};b.removeEventListener=
function(a,m){var b=this._listeners;if(b){var d=b[a];if(d)for(var e=0,c=d.length;e<c;e++)if(d[e]==m){1==c?delete b[a]:d.splice(e,1);break}}};b.removeAllEventListeners=function(a){a?this._listeners&&delete this._listeners[a]:this._listeners=null};b.dispatchEvent=function(a,m){var b=!1,d=this._listeners;if(a&&d){"string"==typeof a&&(a={type:a});a.target=m||this;d=d[a.type];if(!d)return b;for(var d=d.slice(),c=0,f=d.length;c<f;c++){var h=d[c];h instanceof Function?b=b||h.apply(null,[a]):h.handleEvent&&
(b=b||h.handleEvent(a))}}return!!b};b.hasEventListener=function(a){var m=this._listeners;return!(!m||!m[a])};b.toString=function(){return"[EventDispatcher]"};createjs.EventDispatcher=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"Ticker cannot be instantiated.";};c.useRAF=!1;c.addEventListener=null;c.removeEventListener=null;c.removeAllEventListeners=null;c.dispatchEvent=null;c.hasEventListener=null;c._listeners=null;createjs.EventDispatcher.initialize(c);c._listeners=null;c._pauseable=null;c._paused=!1;c._inited=!1;c._startTime=0;c._pausedTime=0;c._ticks=0;c._pausedTicks=0;c._interval=50;c._lastTime=0;c._times=null;c._tickTimes=null;c._rafActive=!1;c._timeoutID=null;c.addListener=function(a,
m){null!=a&&(c.removeListener(a),c._pauseable[c._listeners.length]=null==m?!0:m,c._listeners.push(a))};c.init=function(){c._inited=!0;c._times=[];c._tickTimes=[];c._pauseable=[];c._listeners=[];c._times.push(c._lastTime=c._startTime=c._getTime());c.setInterval(c._interval)};c.removeListener=function(a){var m=c._listeners;m&&(a=m.indexOf(a),-1!=a&&(m.splice(a,1),c._pauseable.splice(a,1)))};c.removeAllListeners=function(){c._listeners=[];c._pauseable=[]};c.setInterval=function(a){c._interval=a;c._inited&&
c._setupTick()};c.getInterval=function(){return c._interval};c.setFPS=function(a){c.setInterval(1E3/a)};c.getFPS=function(){return 1E3/c._interval};c.getMeasuredFPS=function(a){if(2>c._times.length)return-1;null==a&&(a=c.getFPS()|0);a=Math.min(c._times.length-1,a);return 1E3/((c._times[0]-c._times[a])/a)};c.setPaused=function(a){c._paused=a};c.getPaused=function(){return c._paused};c.getTime=function(a){return c._getTime()-c._startTime-(a?c._pausedTime:0)};c.getTicks=function(a){return c._ticks-(a?
c._pausedTicks:0)};c._handleAF=function(){c._rafActive=!1;c._setupTick();c._getTime()-c._lastTime>=0.97*(c._interval-1)&&c._tick()};c._handleTimeout=function(){c.timeoutID=null;c._setupTick();c._tick()};c._setupTick=function(){if(!(c._rafActive||null!=c.timeoutID)){if(c.useRAF){var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(a){a(c._handleAF);c._rafActive=!0;return}}c.timeoutID=
setTimeout(c._handleTimeout,c._interval)}};c._tick=function(){var a=c._getTime();c._ticks++;var m=a-c._lastTime,b=c._paused;b&&(c._pausedTicks++,c._pausedTime+=m);c._lastTime=a;for(var d=c._pauseable,e=c._listeners.slice(),f=e?e.length:0,h=0;h<f;h++){var j=e[h];null==j||b&&d[h]||(j.tick?j.tick(m,b):j instanceof Function&&j(m,b))}c.dispatchEvent({type:"tick",paused:b,delta:m,time:a,runTime:a-c._pausedTime});for(c._tickTimes.unshift(c._getTime()-a);100<c._tickTimes.length;)c._tickTimes.pop();for(c._times.unshift(a);100<
c._times.length;)c._times.pop()};var b=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);c._getTime=function(){return b&&b.call(performance)||(new Date).getTime()};c.init();createjs.Ticker=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,m,b,d,c,f,h,j,k){this.initialize(a,m,b,d,c,f,h,j,k)},b=c.prototype;b.stageX=0;b.stageY=0;b.rawX=0;b.rawY=0;b.type=null;b.nativeEvent=null;b.onMouseMove=null;b.onMouseUp=null;b.target=null;b.pointerID=0;b.primary=!1;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b.initialize=function(a,m,b,d,c,f,h,j,k){this.type=a;this.stageX=m;this.stageY=
b;this.target=d;this.nativeEvent=c;this.pointerID=f;this.primary=h;this.rawX=null==j?m:j;this.rawY=null==k?b:k};b.clone=function(){return new c(this.type,this.stageX,this.stageY,this.target,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)};b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"};createjs.MouseEvent=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,m,b,d,c,f){this.initialize(a,m,b,d,c,f)},b=c.prototype;c.identity=null;c.DEG_TO_RAD=Math.PI/180;b.a=1;b.b=0;b.c=0;b.d=1;b.tx=0;b.ty=0;b.alpha=1;b.shadow=null;b.compositeOperation=null;b.initialize=function(a,b,g,d,c,f){null!=a&&(this.a=a);this.b=b||0;this.c=g||0;null!=d&&(this.d=d);this.tx=c||0;this.ty=f||0;return this};b.prepend=function(a,b,g,d,c,f){var h=this.tx;if(1!=a||0!=b||0!=g||1!=d){var j=this.a,k=this.c;this.a=j*a+this.b*g;this.b=j*b+this.b*d;this.c=k*a+this.d*
g;this.d=k*b+this.d*d}this.tx=h*a+this.ty*g+c;this.ty=h*b+this.ty*d+f;return this};b.append=function(a,b,g,d,c,f){var h=this.a,j=this.b,k=this.c,l=this.d;this.a=a*h+b*k;this.b=a*j+b*l;this.c=g*h+d*k;this.d=g*j+d*l;this.tx=c*h+f*k+this.tx;this.ty=c*j+f*l+this.ty;return this};b.prependMatrix=function(a){this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty);this.prependProperties(a.alpha,a.shadow,a.compositeOperation);return this};b.appendMatrix=function(a){this.append(a.a,a.b,a.c,a.d,a.tx,a.ty);this.appendProperties(a.alpha,
a.shadow,a.compositeOperation);return this};b.prependTransform=function(a,b,g,d,e,f,h,j,k){if(e%360){var l=e*c.DEG_TO_RAD;e=Math.cos(l);l=Math.sin(l)}else e=1,l=0;if(j||k)this.tx-=j,this.ty-=k;f||h?(f*=c.DEG_TO_RAD,h*=c.DEG_TO_RAD,this.prepend(e*g,l*g,-l*d,e*d,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(f),Math.cos(f),a,b)):this.prepend(e*g,l*g,-l*d,e*d,a,b);return this};b.appendTransform=function(a,b,g,d,e,f,h,j,k){if(e%360){var l=e*c.DEG_TO_RAD;e=Math.cos(l);l=Math.sin(l)}else e=1,l=0;f||
h?(f*=c.DEG_TO_RAD,h*=c.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(f),Math.cos(f),a,b),this.append(e*g,l*g,-l*d,e*d,0,0)):this.append(e*g,l*g,-l*d,e*d,a,b);if(j||k)this.tx-=j*this.a+k*this.c,this.ty-=j*this.b+k*this.d;return this};b.rotate=function(a){var b=Math.cos(a);a=Math.sin(a);var g=this.a,d=this.c,c=this.tx;this.a=g*b-this.b*a;this.b=g*a+this.b*b;this.c=d*b-this.d*a;this.d=d*a+this.d*b;this.tx=c*b-this.ty*a;this.ty=c*a+this.ty*b;return this};b.skew=function(a,b){a*=c.DEG_TO_RAD;
b*=c.DEG_TO_RAD;this.append(Math.cos(b),Math.sin(b),-Math.sin(a),Math.cos(a),0,0);return this};b.scale=function(a,b){this.a*=a;this.d*=b;this.tx*=a;this.ty*=b;return this};b.translate=function(a,b){this.tx+=a;this.ty+=b;return this};b.identity=function(){this.alpha=this.a=this.d=1;this.b=this.c=this.tx=this.ty=0;this.shadow=this.compositeOperation=null;return this};b.invert=function(){var a=this.a,b=this.b,g=this.c,d=this.d,c=this.tx,f=a*d-b*g;this.a=d/f;this.b=-b/f;this.c=-g/f;this.d=a/f;this.tx=
(g*this.ty-d*c)/f;this.ty=-(a*this.ty-b*c)/f;return this};b.isIdentity=function(){return 0==this.tx&&0==this.ty&&1==this.a&&0==this.b&&0==this.c&&1==this.d};b.decompose=function(a){null==a&&(a={});a.x=this.tx;a.y=this.ty;a.scaleX=Math.sqrt(this.a*this.a+this.b*this.b);a.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var b=Math.atan2(-this.c,this.d),g=Math.atan2(this.b,this.a);b==g?(a.rotation=g/c.DEG_TO_RAD,0>this.a&&0<=this.d&&(a.rotation+=0>=a.rotation?180:-180),a.skewX=a.skewY=0):(a.skewX=b/c.DEG_TO_RAD,
a.skewY=g/c.DEG_TO_RAD);return a};b.reinitialize=function(a,b,g,d,c,f,h,j,k){this.initialize(a,b,g,d,c,f);this.alpha=h||1;this.shadow=j;this.compositeOperation=k;return this};b.appendProperties=function(a,b,g){this.alpha*=a;this.shadow=b||this.shadow;this.compositeOperation=g||this.compositeOperation;return this};b.prependProperties=function(a,b,g){this.alpha*=a;this.shadow=this.shadow||b;this.compositeOperation=this.compositeOperation||g;return this};b.clone=function(){var a=new c(this.a,this.b,
this.c,this.d,this.tx,this.ty);a.shadow=this.shadow;a.alpha=this.alpha;a.compositeOperation=this.compositeOperation;return a};b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"};c.identity=new c(1,0,0,1,0,0);createjs.Matrix2D=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b){this.initialize(a,b)},b=c.prototype;b.x=0;b.y=0;b.initialize=function(a,b){this.x=null==a?0:a;this.y=null==b?0:b};b.clone=function(){return new c(this.x,this.y)};b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"};createjs.Point=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b,g,d){this.initialize(a,b,g,d)},b=c.prototype;b.x=0;b.y=0;b.width=0;b.height=0;b.initialize=function(a,b,g,d){this.x=null==a?0:a;this.y=null==b?0:b;this.width=null==g?0:g;this.height=null==d?0:d};b.clone=function(){return new c(this.x,this.y,this.width,this.height)};b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"};createjs.Rectangle=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,b,g,d,c,f,h){this.initialize(a,b,g,d,c,f,h)},b=c.prototype;b.target=null;b.overLabel=null;b.outLabel=null;b.downLabel=null;b.play=!1;b._isPressed=!1;b._isOver=!1;b.initialize=function(a,b,g,d,c,f,h){a.addEventListener&&(this.target=a,a.cursor="pointer",this.overLabel=null==g?"over":g,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=c,this.setEnabled(!0),this.handleEvent({}),f&&(h&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(h)),a.hitArea=f))};
b.setEnabled=function(a){var b=this.target;a?(b.addEventListener("mouseover",this),b.addEventListener("mouseout",this),b.addEventListener("mousedown",this)):(b.removeEventListener("mouseover",this),b.removeEventListener("mouseout",this),b.removeEventListener("mousedown",this))};b.toString=function(){return"[ButtonHelper]"};b.handleEvent=function(a){var b=this.target,g=a.type;"mousedown"==g?(a.addEventListener("mouseup",this),this._isPressed=!0,a=this.downLabel):"mouseup"==g?(this._isPressed=!1,a=
this._isOver?this.overLabel:this.outLabel):"mouseover"==g?(this._isOver=!0,a=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,a=this._isPressed?this.overLabel:this.outLabel);this.play?b.gotoAndPlay&&b.gotoAndPlay(a):b.gotoAndStop&&b.gotoAndStop(a)};createjs.ButtonHelper=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b,g,d){this.initialize(a,b,g,d)},b=c.prototype;c.identity=null;b.color=null;b.offsetX=0;b.offsetY=0;b.blur=0;b.initialize=function(a,b,g,d){this.color=a;this.offsetX=b;this.offsetY=g;this.blur=d};b.toString=function(){return"[Shadow]"};b.clone=function(){return new c(this.color,this.offsetX,this.offsetY,this.blur)};c.identity=new c("transparent",0,0,0);createjs.Shadow=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype;b.complete=!0;b.onComplete=null;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b._animations=null;b._frames=null;b._images=null;b._data=null;b._loadCount=0;b._frameHeight=0;b._frameWidth=0;b._numFrames=0;b._regX=0;b._regY=0;b.initialize=function(a){var b,g,d;if(null!=a){if(a.images&&0<(g=a.images.length)){d=
this._images=[];for(b=0;b<g;b++){var c=a.images[b];if("string"==typeof c){var f=c,c=new Image;c.src=f}d.push(c);!c.getContext&&!c.complete&&(this._loadCount++,this.complete=!1,function(a){c.onload=function(){a._handleImageLoad()}}(this))}}if(null!=a.frames)if(a.frames instanceof Array){this._frames=[];d=a.frames;b=0;for(g=d.length;b<g;b++)f=d[b],this._frames.push({image:this._images[f[4]?f[4]:0],rect:new createjs.Rectangle(f[0],f[1],f[2],f[3]),regX:f[5]||0,regY:f[6]||0})}else g=a.frames,this._frameWidth=
g.width,this._frameHeight=g.height,this._regX=g.regX||0,this._regY=g.regY||0,this._numFrames=g.count,0==this._loadCount&&this._calculateFrames();if(null!=(g=a.animations)){this._animations=[];this._data={};for(var h in g){a={name:h};f=g[h];if("number"==typeof f)d=a.frames=[f];else if(f instanceof Array)if(1==f.length)a.frames=[f[0]];else{a.frequency=f[3];a.next=f[2];d=a.frames=[];for(b=f[0];b<=f[1];b++)d.push(b)}else a.frequency=f.frequency,a.next=f.next,b=f.frames,d=a.frames="number"==typeof b?[b]:
b.slice(0);a.next=2>d.length||!1==a.next?null:null==a.next||!0==a.next?h:a.next;a.frequency||(a.frequency=1);this._animations.push(h);this._data[h]=a}}}};b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames;a=this._data[a];return null==a?0:a.frames.length};b.getAnimations=function(){return this._animations.slice(0)};b.getAnimation=function(a){return this._data[a]};b.getFrame=function(a){var b;return this.complete&&this._frames&&(b=this._frames[a])?b:null};
b.getFrameBounds=function(a){return(a=this.getFrame(a))?new createjs.Rectangle(-a.regX,-a.regY,a.rect.width,a.rect.height):null};b.toString=function(){return"[SpriteSheet]"};b.clone=function(){var a=new c;a.complete=this.complete;a._animations=this._animations;a._frames=this._frames;a._images=this._images;a._data=this._data;a._frameHeight=this._frameHeight;a._frameWidth=this._frameWidth;a._numFrames=this._numFrames;a._loadCount=this._loadCount;return a};b._handleImageLoad=function(){0==--this._loadCount&&
(this._calculateFrames(),this.complete=!0,this.onComplete&&this.onComplete(),this.dispatchEvent("complete"))};b._calculateFrames=function(){if(!(this._frames||0==this._frameWidth)){this._frames=[];for(var a=0,b=this._frameWidth,g=this._frameHeight,d=0,c=this._images;d<c.length;d++){for(var f=c[d],h=(f.width+1)/b|0,j=(f.height+1)/g|0,j=0<this._numFrames?Math.min(this._numFrames-a,h*j):h*j,k=0;k<j;k++)this._frames.push({image:f,rect:new createjs.Rectangle(k%h*b,(k/h|0)*g,b,g),regX:this._regX,regY:this._regY});
a+=j}this._numFrames=a}};createjs.SpriteSheet=c})();this.createjs=this.createjs||{};
(function(){function c(a,b,d){this.f=a;this.params=b;this.path=null==d?!0:d}c.prototype.exec=function(a){this.f.apply(a,this.params)};var b=function(){this.initialize()},a=b.prototype;b.getRGB=function(a,b,d,c){null!=a&&null==d&&(c=b,d=a&255,b=a>>8&255,a=a>>16&255);return null==c?"rgb("+a+","+b+","+d+")":"rgba("+a+","+b+","+d+","+c+")"};b.getHSL=function(a,b,d,c){return null==c?"hsl("+a%360+","+b+"%,"+d+"%)":"hsla("+a%360+","+b+"%,"+d+"%,"+c+")"};b.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,
K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,"0":52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63};b.STROKE_CAPS_MAP=["butt","round","square"];b.STROKE_JOINTS_MAP=["miter","round","bevel"];b._ctx=(createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")).getContext("2d");b.beginCmd=new c(b._ctx.beginPath,
[],!1);b.fillCmd=new c(b._ctx.fill,[],!1);b.strokeCmd=new c(b._ctx.stroke,[],!1);a._strokeInstructions=null;a._strokeStyleInstructions=null;a._ignoreScaleStroke=!1;a._fillInstructions=null;a._instructions=null;a._oldInstructions=null;a._activeInstructions=null;a._active=!1;a._dirty=!1;a.initialize=function(){this.clear();this._ctx=b._ctx};a.isEmpty=function(){return!(this._instructions.length||this._oldInstructions.length||this._activeInstructions.length)};a.draw=function(a){this._dirty&&this._updateInstructions();
for(var b=this._instructions,d=0,c=b.length;d<c;d++)b[d].exec(a)};a.drawAsPath=function(a){this._dirty&&this._updateInstructions();for(var b,d=this._instructions,c=0,f=d.length;c<f;c++)((b=d[c]).path||0==c)&&b.exec(a)};a.moveTo=function(a,b){this._activeInstructions.push(new c(this._ctx.moveTo,[a,b]));return this};a.lineTo=function(a,b){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.lineTo,[a,b]));return this};a.arcTo=function(a,b,d,e,f){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.arcTo,
[a,b,d,e,f]));return this};a.arc=function(a,b,d,e,f,h){this._dirty=this._active=!0;null==h&&(h=!1);this._activeInstructions.push(new c(this._ctx.arc,[a,b,d,e,f,h]));return this};a.quadraticCurveTo=function(a,b,d,e){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.quadraticCurveTo,[a,b,d,e]));return this};a.bezierCurveTo=function(a,b,d,e,f,h){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.bezierCurveTo,[a,b,d,e,f,h]));return this};a.rect=function(a,
b,d,e){this._dirty=this._active=!0;this._activeInstructions.push(new c(this._ctx.rect,[a,b,d,e]));return this};a.closePath=function(){this._active&&(this._dirty=!0,this._activeInstructions.push(new c(this._ctx.closePath,[])));return this};a.clear=function(){this._instructions=[];this._oldInstructions=[];this._activeInstructions=[];this._strokeStyleInstructions=this._strokeInstructions=this._fillInstructions=null;this._active=this._dirty=!1;return this};a.beginFill=function(a){this._active&&this._newPath();
this._fillInstructions=a?[new c(this._setProp,["fillStyle",a],!1),b.fillCmd]:null;return this};a.beginLinearGradientFill=function(a,g,d,e,f,h){this._active&&this._newPath();d=this._ctx.createLinearGradient(d,e,f,h);e=0;for(f=a.length;e<f;e++)d.addColorStop(g[e],a[e]);this._fillInstructions=[new c(this._setProp,["fillStyle",d],!1),b.fillCmd];return this};a.beginRadialGradientFill=function(a,g,d,e,f,h,j,k){this._active&&this._newPath();d=this._ctx.createRadialGradient(d,e,f,h,j,k);e=0;for(f=a.length;e<
f;e++)d.addColorStop(g[e],a[e]);this._fillInstructions=[new c(this._setProp,["fillStyle",d],!1),b.fillCmd];return this};a.beginBitmapFill=function(a,g,d){this._active&&this._newPath();a=this._ctx.createPattern(a,g||"");a=new c(this._setProp,["fillStyle",a],!1);this._fillInstructions=d?[a,new c(this._ctx.save,[],!1),new c(this._ctx.transform,[d.a,d.b,d.c,d.d,d.tx,d.ty],!1),b.fillCmd,new c(this._ctx.restore,[],!1)]:[a,b.fillCmd];return this};a.endFill=function(){return this.beginFill()};a.setStrokeStyle=
function(a,g,d,e,f){this._active&&this._newPath();this._strokeStyleInstructions=[new c(this._setProp,["lineWidth",null==a?"1":a],!1),new c(this._setProp,["lineCap",null==g?"butt":isNaN(g)?g:b.STROKE_CAPS_MAP[g]],!1),new c(this._setProp,["lineJoin",null==d?"miter":isNaN(d)?d:b.STROKE_JOINTS_MAP[d]],!1),new c(this._setProp,["miterLimit",null==e?"10":e],!1)];this._ignoreScaleStroke=f;return this};a.beginStroke=function(a){this._active&&this._newPath();this._strokeInstructions=a?[new c(this._setProp,
["strokeStyle",a],!1)]:null;return this};a.beginLinearGradientStroke=function(a,b,d,e,f,h){this._active&&this._newPath();d=this._ctx.createLinearGradient(d,e,f,h);e=0;for(f=a.length;e<f;e++)d.addColorStop(b[e],a[e]);this._strokeInstructions=[new c(this._setProp,["strokeStyle",d],!1)];return this};a.beginRadialGradientStroke=function(a,b,d,e,f,h,j,k){this._active&&this._newPath();d=this._ctx.createRadialGradient(d,e,f,h,j,k);e=0;for(f=a.length;e<f;e++)d.addColorStop(b[e],a[e]);this._strokeInstructions=
[new c(this._setProp,["strokeStyle",d],!1)];return this};a.beginBitmapStroke=function(a,b){this._active&&this._newPath();var d=this._ctx.createPattern(a,b||"");this._strokeInstructions=[new c(this._setProp,["strokeStyle",d],!1)];return this};a.endStroke=function(){this.beginStroke();return this};a.curveTo=a.quadraticCurveTo;a.drawRect=a.rect;a.drawRoundRect=function(a,b,d,c,f){this.drawRoundRectComplex(a,b,d,c,f,f,f,f);return this};a.drawRoundRectComplex=function(a,b,d,e,f,h,j,k){var l=(d<e?d:e)/
2,n=0,p=0,q=0,s=0;0>f&&(f*=n=-1);f>l&&(f=l);0>h&&(h*=p=-1);h>l&&(h=l);0>j&&(j*=q=-1);j>l&&(j=l);0>k&&(k*=s=-1);k>l&&(k=l);this._dirty=this._active=!0;var l=this._ctx.arcTo,r=this._ctx.lineTo;this._activeInstructions.push(new c(this._ctx.moveTo,[a+d-h,b]),new c(l,[a+d+h*p,b-h*p,a+d,b+h,h]),new c(r,[a+d,b+e-j]),new c(l,[a+d+j*q,b+e+j*q,a+d-j,b+e,j]),new c(r,[a+k,b+e]),new c(l,[a-k*s,b+e+k*s,a,b+e-k,k]),new c(r,[a,b+f]),new c(l,[a-f*n,b-f*n,a+f,b,f]),new c(this._ctx.closePath));return this};a.drawCircle=
function(a,b,d){this.arc(a,b,d,0,2*Math.PI);return this};a.drawEllipse=function(a,b,d,e){this._dirty=this._active=!0;var f=0.5522848*(d/2),h=0.5522848*(e/2),j=a+d,k=b+e;d=a+d/2;e=b+e/2;this._activeInstructions.push(new c(this._ctx.moveTo,[a,e]),new c(this._ctx.bezierCurveTo,[a,e-h,d-f,b,d,b]),new c(this._ctx.bezierCurveTo,[d+f,b,j,e-h,j,e]),new c(this._ctx.bezierCurveTo,[j,e+h,d+f,k,d,k]),new c(this._ctx.bezierCurveTo,[d-f,k,a,e+h,a,e]));return this};a.drawPolyStar=function(a,b,d,e,f,h){this._dirty=
this._active=!0;null==f&&(f=0);f=1-f;h=null==h?0:h/(180/Math.PI);var j=Math.PI/e;this._activeInstructions.push(new c(this._ctx.moveTo,[a+Math.cos(h)*d,b+Math.sin(h)*d]));for(var k=0;k<e;k++)h+=j,1!=f&&this._activeInstructions.push(new c(this._ctx.lineTo,[a+Math.cos(h)*d*f,b+Math.sin(h)*d*f])),h+=j,this._activeInstructions.push(new c(this._ctx.lineTo,[a+Math.cos(h)*d,b+Math.sin(h)*d]));return this};a.decodePath=function(a){for(var g=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,
this.closePath],d=[2,2,4,6,0],c=0,f=a.length,h=[],j=0,k=0,l=b.BASE_64;c<f;){var n=a.charAt(c),p=l[n],q=p>>3,s=g[q];if(!s||p&3)throw"bad path data (@"+c+"): "+n;n=d[q];q||(j=k=0);h.length=0;c++;p=(p>>2&1)+2;for(q=0;q<n;q++){var r=l[a.charAt(c)],u=r>>5?-1:1,r=(r&31)<<6|l[a.charAt(c+1)];3==p&&(r=r<<6|l[a.charAt(c+2)]);r=u*r/10;q%2?j=r+=j:k=r+=k;h[q]=r;c+=p}s.apply(this,h)}return this};a.clone=function(){var a=new b;a._instructions=this._instructions.slice();a._activeInstructions=this._activeInstructions.slice();
a._oldInstructions=this._oldInstructions.slice();this._fillInstructions&&(a._fillInstructions=this._fillInstructions.slice());this._strokeInstructions&&(a._strokeInstructions=this._strokeInstructions.slice());this._strokeStyleInstructions&&(a._strokeStyleInstructions=this._strokeStyleInstructions.slice());a._active=this._active;a._dirty=this._dirty;return a};a.toString=function(){return"[Graphics]"};a.mt=a.moveTo;a.lt=a.lineTo;a.at=a.arcTo;a.bt=a.bezierCurveTo;a.qt=a.quadraticCurveTo;a.a=a.arc;a.r=
a.rect;a.cp=a.closePath;a.c=a.clear;a.f=a.beginFill;a.lf=a.beginLinearGradientFill;a.rf=a.beginRadialGradientFill;a.bf=a.beginBitmapFill;a.ef=a.endFill;a.ss=a.setStrokeStyle;a.s=a.beginStroke;a.ls=a.beginLinearGradientStroke;a.rs=a.beginRadialGradientStroke;a.bs=a.beginBitmapStroke;a.es=a.endStroke;a.dr=a.drawRect;a.rr=a.drawRoundRect;a.rc=a.drawRoundRectComplex;a.dc=a.drawCircle;a.de=a.drawEllipse;a.dp=a.drawPolyStar;a.p=a.decodePath;a._updateInstructions=function(){this._instructions=this._oldInstructions.slice();
this._instructions.push(b.beginCmd);this._instructions.push.apply(this._instructions,this._activeInstructions);this._fillInstructions&&this._instructions.push.apply(this._instructions,this._fillInstructions);this._strokeInstructions&&(this._strokeStyleInstructions&&this._instructions.push.apply(this._instructions,this._strokeStyleInstructions),this._instructions.push.apply(this._instructions,this._strokeInstructions),this._ignoreScaleStroke?this._instructions.push(new c(this._ctx.save,[],!1),new c(this._ctx.setTransform,
[1,0,0,1,0,0],!1),b.strokeCmd,new c(this._ctx.restore,[],!1)):this._instructions.push(b.strokeCmd))};a._newPath=function(){this._dirty&&this._updateInstructions();this._oldInstructions=this._instructions;this._activeInstructions=[];this._active=this._dirty=!1};a._setProp=function(a,b){this[a]=b};createjs.Graphics=b})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.suppressCrossDomainErrors=!1;c._hitTestCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c._hitTestCanvas.width=c._hitTestCanvas.height=1;c._hitTestContext=c._hitTestCanvas.getContext("2d");c._nextCacheID=1;b.alpha=1;b.cacheCanvas=null;b.id=-1;b.mouseEnabled=!0;b.name=null;b.parent=null;b.regX=0;b.regY=0;b.rotation=0;b.scaleX=1;b.scaleY=1;b.skewX=0;b.skewY=0;b.shadow=null;b.visible=!0;b.x=0;b.y=0;b.compositeOperation=
null;b.snapToPixel=!1;b.onPress=null;b.onClick=null;b.onDoubleClick=null;b.onMouseOver=null;b.onMouseOut=null;b.onTick=null;b.filters=null;b.cacheID=0;b.mask=null;b.hitArea=null;b.cursor=null;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b._cacheOffsetX=0;b._cacheOffsetY=0;b._cacheScale=1;b._cacheDataURLID=0;b._cacheDataURL=null;b._matrix=null;b.initialize=function(){this.id=
createjs.UID.get();this._matrix=new createjs.Matrix2D};b.isVisible=function(){return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY))};b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;a.drawImage(c,this._cacheOffsetX,this._cacheOffsetY,c.width/d,c.height/d);return!0};b.updateContext=function(a){var b,c=this.mask;c&&(c.graphics&&!c.graphics.isEmpty())&&(b=c.getMatrix(c._matrix),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty),c.graphics.drawAsPath(a),a.clip(),
b.invert(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty));b=this._matrix.identity().appendTransform(this.x,this.y,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY,this.regX,this.regY);createjs.Stage._snapToPixelEnabled&&this.snapToPixel?a.transform(b.a,b.b,b.c,b.d,b.tx+0.5|0,b.ty+0.5|0):a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty);a.globalAlpha*=this.alpha;this.compositeOperation&&(a.globalCompositeOperation=this.compositeOperation);this.shadow&&this._applyShadow(a,this.shadow)};b.cache=function(a,
b,c,d,e){e=e||1;this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));this.cacheCanvas.width=Math.ceil(c*e);this.cacheCanvas.height=Math.ceil(d*e);this._cacheOffsetX=a;this._cacheOffsetY=b;this._cacheScale=e||1;this.updateCache()};b.updateCache=function(a){var b=this.cacheCanvas,g=this._cacheScale,d=this._cacheOffsetX*g,e=this._cacheOffsetY*g;if(!b)throw"cache() must be called before updateCache()";var f=b.getContext("2d");f.save();a||
f.clearRect(0,0,b.width,b.height);f.globalCompositeOperation=a;f.setTransform(g,0,0,g,-d,-e);this.draw(f,!0);this._applyFilters();f.restore();this.cacheID=c._nextCacheID++};b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null;this.cacheID=this._cacheOffsetX=this._cacheOffsetY=0;this._cacheScale=1};b.getCacheDataURL=function(){if(!this.cacheCanvas)return null;this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL());return this._cacheDataURL};b.getStage=function(){for(var a=
this;a.parent;)a=a.parent;return a instanceof createjs.Stage?a:null};b.localToGlobal=function(a,b){var c=this.getConcatenatedMatrix(this._matrix);if(null==c)return null;c.append(1,0,0,1,a,b);return new createjs.Point(c.tx,c.ty)};b.globalToLocal=function(a,b){var c=this.getConcatenatedMatrix(this._matrix);if(null==c)return null;c.invert();c.append(1,0,0,1,a,b);return new createjs.Point(c.tx,c.ty)};b.localToLocal=function(a,b,c){a=this.localToGlobal(a,b);return c.globalToLocal(a.x,a.y)};b.setTransform=
function(a,b,c,d,e,f,h,j,k){this.x=a||0;this.y=b||0;this.scaleX=null==c?1:c;this.scaleY=null==d?1:d;this.rotation=e||0;this.skewX=f||0;this.skewY=h||0;this.regX=j||0;this.regY=k||0;return this};b.getMatrix=function(a){return(a?a.identity():new createjs.Matrix2D).appendTransform(this.x,this.y,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY,this.regX,this.regY).appendProperties(this.alpha,this.shadow,this.compositeOperation)};b.getConcatenatedMatrix=function(a){a?a.identity():a=new createjs.Matrix2D;
for(var b=this;null!=b;)a.prependTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY).prependProperties(b.alpha,b.shadow,b.compositeOperation),b=b.parent;return a};b.hitTest=function(a,b){var g=c._hitTestContext,d=c._hitTestCanvas;g.setTransform(1,0,0,1,-a,-b);this.draw(g);g=this._testHit(g);d.width=0;d.width=1;return g};b.set=function(a){for(var b in a)this[b]=a[b];return this};b.clone=function(){var a=new c;this.cloneProps(a);return a};b.toString=function(){return"[DisplayObject (name="+
this.name+")]"};b.cloneProps=function(a){a.alpha=this.alpha;a.name=this.name;a.regX=this.regX;a.regY=this.regY;a.rotation=this.rotation;a.scaleX=this.scaleX;a.scaleY=this.scaleY;a.shadow=this.shadow;a.skewX=this.skewX;a.skewY=this.skewY;a.visible=this.visible;a.x=this.x;a.y=this.y;a.mouseEnabled=this.mouseEnabled;a.compositeOperation=this.compositeOperation;this.cacheCanvas&&(a.cacheCanvas=this.cacheCanvas.cloneNode(!0),a.cacheCanvas.getContext("2d").putImageData(this.cacheCanvas.getContext("2d").getImageData(0,
0,this.cacheCanvas.width,this.cacheCanvas.height),0,0))};b._applyShadow=function(a,b){b=b||Shadow.identity;a.shadowColor=b.color;a.shadowOffsetX=b.offsetX;a.shadowOffsetY=b.offsetY;a.shadowBlur=b.blur};b._tick=function(a){this.onTick&&this.onTick.apply(this,a);var b=this._listeners;b&&b.tick&&this.dispatchEvent({type:"tick",params:a})};b._testHit=function(a){try{var b=1<a.getImageData(0,0,1,1).data[3]}catch(g){if(!c.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
}return b};b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;e<a;e++)this.filters[e].applyFilter(b,0,0,c,d)};b._hasMouseHandler=function(a){var b=this._listeners;return!!(a&1&&(this.onPress||this.onClick||this.onDoubleClick||b&&(this.hasEventListener("mousedown")||this.hasEventListener("click")||this.hasEventListener("dblclick")))||a&2&&(this.onMouseOver||
this.onMouseOut||this.cursor||b&&(this.hasEventListener("mouseover")||this.hasEventListener("mouseout"))))};createjs.DisplayObject=c})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype=new createjs.DisplayObject;b.children=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(){this.DisplayObject_initialize();this.children=[]};b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(0),d=0,e=c.length;d<
e;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0};b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(1<b){for(var c=0;c<b;c++)this.addChild(arguments[c]);return arguments[b-1]}a.parent&&a.parent.removeChild(a);a.parent=this;this.children.push(a);return a};b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(2<c){for(var e=0;e<c-1;e++)this.addChildAt(arguments[e],d+e);
return arguments[c-2]}a.parent&&a.parent.removeChild(a);a.parent=this;this.children.splice(b,0,a);return a};b.removeChild=function(a){var b=arguments.length;if(1<b){for(var c=!0,d=0;d<b;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(this.children.indexOf(a))};b.removeChildAt=function(a){var b=arguments.length;if(1<b){for(var c=[],d=0;d<b;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;d<b;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-
1)return!1;if(b=this.children[a])b.parent=null;this.children.splice(a,1);return!0};b.removeAllChildren=function(){for(var a=this.children;a.length;)a.pop().parent=null};b.getChildAt=function(a){return this.children[a]};b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;c<d;c++)if(b[c].name==a)return b[c];return null};b.sortChildren=function(a){this.children.sort(a)};b.getChildIndex=function(a){return this.children.indexOf(a)};b.getNumChildren=function(){return this.children.length};
b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)};b.swapChildren=function(a,b){for(var c=this.children,d,e,f=0,h=c.length;f<h&&!(c[f]==a&&(d=f),c[f]==b&&(e=f),null!=d&&null!=e);f++);f!=h&&(c[d]=b,c[e]=a)};b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;e<d&&c[e]!=a;e++);e==d||e==b||(c.splice(e,1),b<e&&b--,c.splice(b,0,a))}};b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1};b.hitTest=
function(a,b){return null!=this.getObjectUnderPoint(a,b)};b.getObjectsUnderPoint=function(a,b){var c=[],d=this.localToGlobal(a,b);this._getObjectsUnderPoint(d.x,d.y,c);return c};b.getObjectUnderPoint=function(a,b){var c=this.localToGlobal(a,b);return this._getObjectsUnderPoint(c.x,c.y)};b.clone=function(a){var b=new c;this.cloneProps(b);if(a)for(var g=b.children=[],d=0,e=this.children.length;d<e;d++){var f=this.children[d].clone(a);f.parent=b;g.push(f)}return b};b.toString=function(){return"[Container (name="+
this.name+")]"};b.DisplayObject__tick=b._tick;b._tick=function(a){for(var b=this.children.length-1;0<=b;b--){var c=this.children[b];c._tick&&c._tick(a)}this.DisplayObject__tick(a)};b._getObjectsUnderPoint=function(a,b,g,d){var e=createjs.DisplayObject._hitTestContext,f=createjs.DisplayObject._hitTestCanvas,h=this._matrix,j=this._hasMouseHandler(d);if(!this.hitArea&&(this.cacheCanvas&&j)&&(this.getConcatenatedMatrix(h),e.setTransform(h.a,h.b,h.c,h.d,h.tx-a,h.ty-b),e.globalAlpha=h.alpha,this.draw(e),
this._testHit(e)))return f.width=0,f.width=1,this;for(var k=this.children.length-1;0<=k;k--){var l=this.children[k],n=l.hitArea;if(l.visible&&!(!n&&!l.isVisible()||d&&!l.mouseEnabled)){var p=d&&l._hasMouseHandler(d);if(l instanceof c&&(!n||!p))if(j){if(l=l._getObjectsUnderPoint(a,b))return this}else{if(l=l._getObjectsUnderPoint(a,b,g,d),!g&&l)return l}else if(!d||j||p)if(l.getConcatenatedMatrix(h),n&&(h.appendTransform(n.x,n.y,n.scaleX,n.scaleY,n.rotation,n.skewX,n.skewY,n.regX,n.regY),h.alpha=n.alpha),
e.globalAlpha=h.alpha,e.setTransform(h.a,h.b,h.c,h.d,h.tx-a,h.ty-b),(n||l).draw(e),this._testHit(e)){f.width=0;f.width=1;if(j)return this;if(g)g.push(l);else return l}}}return null};createjs.Container=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.Container;c._snapToPixelEnabled=!1;b.autoClear=!0;b.canvas=null;b.mouseX=0;b.mouseY=0;b.onMouseMove=null;b.onMouseUp=null;b.onMouseDown=null;b.snapToPixelEnabled=!1;b.mouseInBounds=!1;b.tickOnUpdate=!0;b.mouseMoveOutside=!1;b._pointerData=null;b._pointerCount=0;b._primaryPointerID=null;b._mouseOverIntervalID=null;b.Container_initialize=b.initialize;b.initialize=function(a){this.Container_initialize();this.canvas="string"==
typeof a?document.getElementById(a):a;this._pointerData={};this.enableDOMEvents(!0)};b.update=function(){if(this.canvas){this.autoClear&&this.clear();c._snapToPixelEnabled=this.snapToPixelEnabled;this.tickOnUpdate&&this._tick(arguments.length?arguments:null);var a=this.canvas.getContext("2d");a.save();this.updateContext(a);this.draw(a,!1);a.restore()}};b.tick=b.update;b.handleEvent=function(a){"tick"==a.type&&this.update(a)};b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,
0,0,1,0,0);a.clearRect(0,0,this.canvas.width,this.canvas.height)}};b.toDataURL=function(a,b){b||(b="image/png");var c=this.canvas.getContext("2d"),d=this.canvas.width,e=this.canvas.height,f;if(a){f=c.getImageData(0,0,d,e);var h=c.globalCompositeOperation;c.globalCompositeOperation="destination-over";c.fillStyle=a;c.fillRect(0,0,d,e)}var j=this.canvas.toDataURL(b);a&&(c.clearRect(0,0,d,e),c.putImageData(f,0,0),c.globalCompositeOperation=h);return j};b.enableMouseOver=function(a){this._mouseOverIntervalID&&
(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null);if(null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1E3/Math.min(50,a))};b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c=this._eventListeners;if(!a&&c){for(b in c)a=c[b],a.t.removeEventListener(b,a.f);this._eventListeners=null}else if(a&&!c){a=window.addEventListener?window:document;var d=this,c=this._eventListeners={};c.mouseup={t:a,f:function(a){d._handleMouseUp(a)}};
c.mousemove={t:a,f:function(a){d._handleMouseMove(a)}};c.dblclick={t:a,f:function(a){d._handleDoubleClick(a)}};(a=this.canvas)&&(c.mousedown={t:a,f:function(a){d._handleMouseDown(a)}});for(b in c)a=c[b],a.t.addEventListener(b,a.f)}};b.clone=function(){var a=new c(null);this.cloneProps(a);return a};b.toString=function(){return"[Stage (name="+this.name+")]"};b._getPointerData=function(a){var b=this._pointerData[a];b||(b=this._pointerData[a]={x:0,y:0},null==this._primaryPointerID&&(this._primaryPointerID=
a));return b};b._handleMouseMove=function(a){a||(a=window.event);this._handlePointerMove(-1,a,a.pageX,a.pageY)};b._handlePointerMove=function(a,b,c,d){if(this.canvas){var e=this._getPointerData(a),f=e.inBounds;this._updatePointerPosition(a,c,d);if(f||e.inBounds||this.mouseMoveOutside){if(this.onMouseMove||this.hasEventListener("stagemousemove"))c=new createjs.MouseEvent("stagemousemove",e.x,e.y,this,b,a,a==this._primaryPointerID,e.rawX,e.rawY),this.onMouseMove&&this.onMouseMove(c),this.dispatchEvent(c);
if((d=e.event)&&(d.onMouseMove||d.hasEventListener("mousemove")))c=new createjs.MouseEvent("mousemove",e.x,e.y,d.target,b,a,a==this._primaryPointerID,e.rawX,e.rawY),d.onMouseMove&&d.onMouseMove(c),d.dispatchEvent(c,d.target)}}};b._updatePointerPosition=function(a,b,c){var d=this._getElementRect(this.canvas);b-=d.left;c-=d.top;var e=this.canvas.width,f=this.canvas.height;b/=(d.right-d.left)/e;c/=(d.bottom-d.top)/f;d=this._getPointerData(a);(d.inBounds=0<=b&&0<=c&&b<=e-1&&c<=f-1)?(d.x=b,d.y=c):this.mouseMoveOutside&&
(d.x=0>b?0:b>e-1?e-1:b,d.y=0>c?0:c>f-1?f-1:c);d.rawX=b;d.rawY=c;a==this._primaryPointerID&&(this.mouseX=d.x,this.mouseY=d.y,this.mouseInBounds=d.inBounds)};b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||
0),f=window.getComputedStyle?getComputedStyle(a):a.currentStyle;a=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth);var h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),j=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),f=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+a,right:b.right+d-j,top:b.top+e+h,bottom:b.bottom+e-f}};b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)};b._handlePointerUp=function(a,b,c){var d=this._getPointerData(a),e;if(this.onMouseMove||
this.hasEventListener("stagemouseup"))e=new createjs.MouseEvent("stagemouseup",d.x,d.y,this,b,a,a==this._primaryPointerID,d.rawX,d.rawY),this.onMouseUp&&this.onMouseUp(e),this.dispatchEvent(e);var f=d.event;if(f&&(f.onMouseUp||f.hasEventListener("mouseup")))e=new createjs.MouseEvent("mouseup",d.x,d.y,f.target,b,a,a==this._primaryPointerID,d.rawX,d.rawY),f.onMouseUp&&f.onMouseUp(e),f.dispatchEvent(e,f.target);if((f=d.target)&&(f.onClick||f.hasEventListener("click"))&&this._getObjectsUnderPoint(d.x,
d.y,null,!0,this._mouseOverIntervalID?3:1)==f)e=new createjs.MouseEvent("click",d.x,d.y,f,b,a,a==this._primaryPointerID,d.rawX,d.rawY),f.onClick&&f.onClick(e),f.dispatchEvent(e);c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):d.event=d.target=null};b._handleMouseDown=function(a){this._handlePointerDown(-1,a,!1)};b._handlePointerDown=function(a,b,c,d){var e=this._getPointerData(a);null!=d&&this._updatePointerPosition(a,c,d);if(this.onMouseDown||this.hasEventListener("stagemousedown"))c=
new createjs.MouseEvent("stagemousedown",e.x,e.y,this,b,a,a==this._primaryPointerID,e.rawX,e.rawY),this.onMouseDown&&this.onMouseDown(c),this.dispatchEvent(c);if(d=this._getObjectsUnderPoint(e.x,e.y,null,this._mouseOverIntervalID?3:1))if(e.target=d,d.onPress||d.hasEventListener("mousedown"))if(c=new createjs.MouseEvent("mousedown",e.x,e.y,d,b,a,a==this._primaryPointerID,e.rawX,e.rawY),d.onPress&&d.onPress(c),d.dispatchEvent(c),c.onMouseMove||c.onMouseUp||c.hasEventListener("mousemove")||c.hasEventListener("mouseup"))e.event=
c};b._testMouseOver=function(){if(-1==this._primaryPointerID&&!(this.mouseX==this._mouseOverX&&this.mouseY==this._mouseOverY&&this.mouseInBounds)){var a=null;this.mouseInBounds&&(a=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,3),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var b=this._mouseOverTarget;if(b!=a){var c=this._getPointerData(-1);if(b&&(b.onMouseOut||b.hasEventListener("mouseout"))){var d=new createjs.MouseEvent("mouseout",c.x,c.y,b,null,-1,c.rawX,c.rawY);b.onMouseOut&&
b.onMouseOut(d);b.dispatchEvent(d)}b&&(this.canvas.style.cursor="");if(a&&(a.onMouseOver||a.hasEventListener("mouseover")))d=new createjs.MouseEvent("mouseover",c.x,c.y,a,null,-1,c.rawX,c.rawY),a.onMouseOver&&a.onMouseOver(d),a.dispatchEvent(d);a&&(this.canvas.style.cursor=a.cursor||"");this._mouseOverTarget=a}}};b._handleDoubleClick=function(a){var b=this._getPointerData(-1),c=this._getObjectsUnderPoint(b.x,b.y,null,this._mouseOverIntervalID?3:1);if(c&&(c.onDoubleClick||c.hasEventListener("dblclick")))evt=
new createjs.MouseEvent("dblclick",b.x,b.y,c,a,-1,!0,b.rawX,b.rawY),c.onDoubleClick&&c.onDoubleClick(evt),c.dispatchEvent(evt)};createjs.Stage=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.image=null;b.snapToPixel=!0;b.sourceRect=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){this.DisplayObject_initialize();"string"==typeof a?(this.image=new Image,this.image.src=a):this.image=a};b.isVisible=function(){var a=this.cacheCanvas||this.image&&(this.image.complete||this.image.getContext||2<=this.image.readyState);return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&
a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.sourceRect;c?a.drawImage(this.image,c.x,c.y,c.width,c.height,0,0,c.width,c.height):a.drawImage(this.image,0,0);return!0};b.clone=function(){var a=new c(this.image);this.sourceRect&&(a.sourceRect=this.sourceRect.clone());this.cloneProps(a);return a};b.toString=function(){return"[Bitmap (name="+this.name+")]"};createjs.Bitmap=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.onAnimationEnd=null;b.currentFrame=-1;b.currentAnimation=null;b.paused=!0;b.spriteSheet=null;b.snapToPixel=!0;b.offset=0;b.currentAnimationFrame=0;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b._advanceCount=0;b._animation=null;b.DisplayObject_initialize=b.initialize;b.initialize=
function(a){this.DisplayObject_initialize();this.spriteSheet=a};b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete&&0<=this.currentFrame;return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(this.currentFrame);if(c){var d=c.rect;a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height);return!0}};
b.play=function(){this.paused=!1};b.stop=function(){this.paused=!0};b.gotoAndPlay=function(a){this.paused=!1;this._goto(a)};b.gotoAndStop=function(a){this.paused=!0;this._goto(a)};b.advance=function(){this._animation?this.currentAnimationFrame++:this.currentFrame++;this._normalizeFrame()};b.getBounds=function(){return this.spriteSheet.getFrameBounds(this.currentFrame)};b.clone=function(){var a=new c(this.spriteSheet);this.cloneProps(a);return a};b.toString=function(){return"[BitmapAnimation (name="+
this.name+")]"};b.DisplayObject__tick=b._tick;b._tick=function(a){var b=this._animation?this._animation.frequency:1;!this.paused&&0==(++this._advanceCount+this.offset)%b&&this.advance();this.DisplayObject__tick(a)};b._normalizeFrame=function(){var a=this._animation,b=this.currentFrame,c=this.paused,d;if(a)if(d=a.frames.length,this.currentAnimationFrame>=d){var e=a.next;this._dispatchAnimationEnd(a,b,c,e,d-1)||(e?this._goto(e):(this.paused=!0,this.currentAnimationFrame=a.frames.length-1,this.currentFrame=
a.frames[this.currentAnimationFrame]))}else this.currentFrame=a.frames[this.currentAnimationFrame];else d=this.spriteSheet.getNumFrames(),b>=d&&!this._dispatchAnimationEnd(a,b,c,d-1)&&(this.currentFrame=0)};b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;this.onAnimationEnd&&this.onAnimationEnd(this,f,d);this.dispatchEvent({type:"animationend",name:f,next:d});!c&&this.paused&&(this.currentAnimationFrame=e);return this.paused!=c||this._animation!=a||this.currentFrame!=b};b.DisplayObject_cloneProps=
b.cloneProps;b.cloneProps=function(a){this.DisplayObject_cloneProps(a);a.onAnimationEnd=this.onAnimationEnd;a.currentFrame=this.currentFrame;a.currentAnimation=this.currentAnimation;a.paused=this.paused;a.offset=this.offset;a._animation=this._animation;a.currentAnimationFrame=this.currentAnimationFrame};b._goto=function(a){if(isNaN(a)){var b=this.spriteSheet.getAnimation(a);b&&(this.currentAnimationFrame=0,this._animation=b,this.currentAnimation=a,this._normalizeFrame())}else this.currentAnimation=
this._animation=null,this.currentFrame=a};createjs.BitmapAnimation=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.graphics=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){this.DisplayObject_initialize();this.graphics=a?a:new createjs.Graphics};b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this.graphics.draw(a);
return!0};b.clone=function(a){a=new c(a&&this.graphics?this.graphics.clone():this.graphics);this.cloneProps(a);return a};b.toString=function(){return"[Shape (name="+this.name+")]"};createjs.Shape=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,b,c){this.initialize(a,b,c)},b=c.prototype=new createjs.DisplayObject;c._workingContext=(createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")).getContext("2d");b.text="";b.font=null;b.color="#000";b.textAlign="left";b.textBaseline="top";b.maxWidth=null;b.outline=!1;b.lineHeight=0;b.lineWidth=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a,b,c){this.DisplayObject_initialize();this.text=a;this.font=b;this.color=c?c:"#000"};
b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!(!this.visible||!(0<this.alpha&&0!=this.scaleX&&0!=this.scaleY&&a))};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this.outline?a.strokeStyle=this.color:a.fillStyle=this.color;a.font=this.font;a.textAlign=this.textAlign||"start";a.textBaseline=this.textBaseline||"alphabetic";this._drawText(a);return!0};b.getMeasuredWidth=function(){return this._getWorkingContext().measureText(this.text).width};
b.getMeasuredLineHeight=function(){return 1.2*this._getWorkingContext().measureText("M").width};b.getMeasuredHeight=function(){return this._drawText()*(this.lineHeight||this.getMeasuredLineHeight())};b.clone=function(){var a=new c(this.text,this.font,this.color);this.cloneProps(a);return a};b.toString=function(){return"[Text (text="+(20<this.text.length?this.text.substr(0,17)+"...":this.text)+")]"};b.DisplayObject_cloneProps=b.cloneProps;b.cloneProps=function(a){this.DisplayObject_cloneProps(a);a.textAlign=
this.textAlign;a.textBaseline=this.textBaseline;a.maxWidth=this.maxWidth;a.outline=this.outline;a.lineHeight=this.lineHeight;a.lineWidth=this.lineWidth};b._getWorkingContext=function(){var a=c._workingContext;a.font=this.font;a.textAlign=this.textAlign||"start";a.textBaseline=this.textBaseline||"alphabetic";return a};b._drawText=function(a){var b=!!a;b||(a=this._getWorkingContext());for(var c=String(this.text).split(/(?:\r\n|\r|\n)/),d=this.lineHeight||this.getMeasuredLineHeight(),e=0,f=0,h=c.length;f<
h;f++){var j=a.measureText(c[f]).width;if(null==this.lineWidth||j<this.lineWidth)b&&this._drawTextLine(a,c[f],e*d);else{for(var j=c[f].split(/(\s)/),k=j[0],l=1,n=j.length;l<n;l+=2)a.measureText(k+j[l]+j[l+1]).width>this.lineWidth?(b&&this._drawTextLine(a,k,e*d),e++,k=j[l+1]):k+=j[l]+j[l+1];b&&this._drawTextLine(a,k,e*d)}e++}return e};b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)};createjs.Text=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"SpriteSheetUtils cannot be instantiated";};c._workingCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c._workingContext=c._workingCanvas.getContext("2d");c.addFlippedFrames=function(b,a,m,g){if(a||m||g){var d=0;a&&c._flip(b,++d,!0,!1);m&&c._flip(b,++d,!1,!0);g&&c._flip(b,++d,!0,!0)}};c.extractFrame=function(b,a){isNaN(a)&&(a=b.getAnimation(a).frames[0]);var m=b.getFrame(a);if(!m)return null;var g=m.rect,d=c._workingCanvas;d.width=
g.width;d.height=g.height;c._workingContext.drawImage(m.image,g.x,g.y,g.width,g.height,0,0,g.width,g.height);m=new Image;m.src=d.toDataURL("image/png");return m};c.mergeAlpha=function(b,a,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));c.width=Math.max(a.width,b.width);c.height=Math.max(a.height,b.height);var g=c.getContext("2d");g.save();g.drawImage(b,0,0);g.globalCompositeOperation="destination-in";g.drawImage(a,0,0);g.restore();return c};c._flip=function(b,
a,m,g){for(var d=b._images,e=c._workingCanvas,f=c._workingContext,h=d.length/a,j=0;j<h;j++){var k=d[j];k.__tmp=j;e.width=0;e.width=k.width;e.height=k.height;f.setTransform(m?-1:1,0,0,g?-1:1,m?k.width:0,g?k.height:0);f.drawImage(k,0,0);var l=new Image;l.src=e.toDataURL("image/png");l.width=k.width;l.height=k.height;d.push(l)}f=b._frames;e=f.length/a;for(j=0;j<e;j++){var k=f[j],n=k.rect.clone(),l=d[k.image.__tmp+h*a],p={image:l,rect:n,regX:k.regX,regY:k.regY};m&&(n.x=l.width-n.x-n.width,p.regX=n.width-
k.regX);g&&(n.y=l.height-n.y-n.height,p.regY=n.height-k.regY);f.push(p)}m="_"+(m?"h":"")+(g?"v":"");g=b._animations;b=b._data;d=g.length/a;for(j=0;j<d;j++){f=g[j];k=b[f];h={name:f+m,frequency:k.frequency,next:k.next,frames:[]};k.next&&(h.next+=m);f=k.frames;k=0;for(l=f.length;k<l;k++)h.frames.push(f[k]+e*a);b[h.name]=h;g.push(h.name)}};createjs.SpriteSheetUtils=c})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions";c.ERR_RUNNING="a build is already running";b.maxWidth=2048;b.maxHeight=2048;b.spriteSheet=null;b.scale=1;b.padding=1;b.timeSlice=0.3;b.progress=-1;b.onComplete=null;b.onProgress=null;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;b._listeners=null;createjs.EventDispatcher.initialize(b);b._frames=
null;b._animations=null;b._data=null;b._nextFrameIndex=0;b._index=0;b._timerID=null;b._scale=1;b.initialize=function(){this._frames=[];this._animations={}};b.addFrame=function(a,b,g,d,e,f){if(this._data)throw c.ERR_RUNNING;b=b||a.bounds||a.nominalBounds;!b&&a.getBounds&&(b=a.getBounds());if(!b)return null;g=g||1;return this._frames.push({source:a,sourceRect:b,scale:g,funct:d,params:e,scope:f,index:this._frames.length,height:b.height*g})-1};b.addAnimation=function(a,b,g,d){if(this._data)throw c.ERR_RUNNING;
this._animations[a]={frames:b,next:g,frequency:d}};b.addMovieClip=function(a,b,g){if(this._data)throw c.ERR_RUNNING;var d=a.frameBounds,e=b||a.bounds||a.nominalBounds;!e&&a.getBounds&&(e=a.getBounds());if(!e&&!d)return null;b=this._frames.length;for(var f=a.timeline.duration,h=0;h<f;h++)this.addFrame(a,d&&d[h]?d[h]:e,g,function(a){var b=this.actionsEnabled;this.actionsEnabled=!1;this.gotoAndStop(a);this.actionsEnabled=b},[h],a);h=a.timeline._labels;a=[];for(var j in h)a.push({index:h[j],label:j});
if(a.length){a.sort(function(a,b){return a.index-b.index});h=0;for(j=a.length;h<j;h++){g=a[h].label;for(var d=b+(h==j-1?f:a[h+1].index),e=[],k=b+a[h].index;k<d;k++)e.push(k);this.addAnimation(g,e,!0)}}};b.build=function(){if(this._data)throw c.ERR_RUNNING;for(this._startBuild();this._drawNext(););this._endBuild();return this.spriteSheet};b.buildAsync=function(a){if(this._data)throw c.ERR_RUNNING;this.timeSlice=a;this._startBuild();var b=this;this._timerID=setTimeout(function(){b._run()},50-50*Math.max(0.01,
Math.min(0.99,this.timeSlice||0.3)))};b.stopAsync=function(){clearTimeout(this._timerID);this._data=null};b.clone=function(){throw"SpriteSheetBuilder cannot be cloned.";};b.toString=function(){return"[SpriteSheetBuilder]"};b._startBuild=function(){var a=this.padding||0;this.progress=0;this.spriteSheet=null;this._index=0;this._scale=this.scale;var b=[];this._data={images:[],frames:b,animations:this._animations};var g=this._frames.slice();g.sort(function(a,b){return a.height<=b.height?-1:1});if(g[g.length-
1].height+2*a>this.maxHeight)throw c.ERR_DIMENSIONS;for(var d=0,e=0,f=0;g.length;){var h=this._fillRow(g,d,f,b,a);h.w>e&&(e=h.w);d+=h.h;if(!h.h||!g.length){var j=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");j.width=this._getSize(e,this.maxWidth);j.height=this._getSize(d,this.maxHeight);this._data.images[f]=j;h.h||(e=d=0,f++)}}};b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))};b._fillRow=function(a,b,g,d,e){var f=this.maxWidth,
h=this.maxHeight;b+=e;for(var h=h-b,j=e,k=0,l=a.length-1;0<=l;l--){var n=a[l],p=this._scale*n.scale,q=n.sourceRect,s=n.source,r=Math.floor(p*q.x-e),u=Math.floor(p*q.y-e),t=Math.ceil(p*q.height+2*e),q=Math.ceil(p*q.width+2*e);if(q>f)throw c.ERR_DIMENSIONS;t>h||j+q>f||(n.img=g,n.rect=new createjs.Rectangle(j,b,q,t),k=k||t,a.splice(l,1),d[n.index]=[j,b,q,t,g,Math.round(-r+p*s.regX-e),Math.round(-u+p*s.regY-e)],j+=q)}return{w:j,h:k}};b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data);
this._data=null;this.progress=1;this.onComplete&&this.onComplete(this);this.dispatchEvent("complete")};b._run=function(){for(var a=50*Math.max(0.01,Math.min(0.99,this.timeSlice||0.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}a=this.progress=this._index/this._frames.length;this.onProgress&&this.onProgress(this,a);this.dispatchEvent({type:"progress",progress:a})};b._drawNext=
function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img].getContext("2d");a.funct&&a.funct.apply(a.scope,a.params);e.save();e.beginPath();e.rect(c.x,c.y,c.width,c.height);e.clip();e.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b));e.scale(b,b);a.source.draw(e);e.restore();return++this._index<this._frames.length};createjs.SpriteSheetBuilder=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.htmlElement=null;b._oldMtx=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){"string"==typeof a&&(a=document.getElementById(a));this.DisplayObject_initialize();this.mouseEnabled=!1;this.htmlElement=a;a=a.style;a.position="absolute";a.transformOrigin=a.WebkitTransformOrigin=a.msTransformOrigin=a.MozTransformOrigin=a.OTransformOrigin="0% 0%"};b.isVisible=function(){return null!=this.htmlElement};
b.draw=function(){if(null!=this.htmlElement){var a=this.getConcatenatedMatrix(this._matrix),b=this.htmlElement.style;if(this.visible)b.visibility="visible";else return!0;var c=this._oldMtx||{};c.alpha!=a.alpha&&(b.opacity=""+a.alpha,c.alpha=a.alpha);if(c.tx!=a.tx||c.ty!=a.ty||c.a!=a.a||c.b!=a.b||c.c!=a.c||c.d!=a.d)b.transform=b.WebkitTransform=b.OTransform=b.msTransform=["matrix("+a.a,a.b,a.c,a.d,a.tx+0.5|0,(a.ty+0.5|0)+")"].join(),b.MozTransform=["matrix("+a.a,a.b,a.c,a.d,(a.tx+0.5|0)+"px",(a.ty+
0.5|0)+"px)"].join(),this._oldMtx=a.clone();return!0}};b.cache=function(){};b.uncache=function(){};b.updateCache=function(){};b.hitTest=function(){};b.localToGlobal=function(){};b.globalToLocal=function(){};b.localToLocal=function(){};b.clone=function(){throw"DOMElement cannot be cloned.";};b.toString=function(){return"[DOMElement (name="+this.name+")]"};b.DisplayObject__tick=b._tick;b._tick=function(a){this.htmlElement.style.visibility="hidden";this.DisplayObject__tick(a)};createjs.DOMElement=c})();this.createjs=this.createjs||{};(function(){var c=function(){this.initialize()},b=c.prototype;b.initialize=function(){};b.getBounds=function(){return new createjs.Rectangle(0,0,0,0)};b.applyFilter=function(){};b.toString=function(){return"[Filter]"};b.clone=function(){return new c};createjs.Filter=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"Touch cannot be instantiated";};c.isSupported=function(){return"ontouchstart"in window||window.navigator.msPointerEnabled};c.enable=function(b,a,m){if(!b||!b.canvas||!c.isSupported())return!1;b.__touch={pointers:{},multitouch:!a,preventDefault:!m,count:0};"ontouchstart"in window?c._IOS_enable(b):window.navigator.msPointerEnabled&&c._IE_enable(b);return!0};c.disable=function(b){b&&("ontouchstart"in window?c._IOS_disable(b):window.navigator.msPointerEnabled&&c._IE_disable(b))};
c._IOS_enable=function(b){var a=b.canvas,m=b.__touch.f=function(a){c._IOS_handleEvent(b,a)};a.addEventListener("touchstart",m,!1);a.addEventListener("touchmove",m,!1);a.addEventListener("touchend",m,!1);a.addEventListener("touchcancel",m,!1)};c._IOS_disable=function(b){var a=b.canvas;a&&(b=b.__touch.f,a.removeEventListener("touchstart",b,!1),a.removeEventListener("touchmove",b,!1),a.removeEventListener("touchend",b,!1),a.removeEventListener("touchcancel",b,!1))};c._IOS_handleEvent=function(b,a){if(b){b.__touch.preventDefault&&
a.preventDefault&&a.preventDefault();for(var c=a.changedTouches,g=a.type,d=0,e=c.length;d<e;d++){var f=c[d],h=f.identifier;f.target==b.canvas&&("touchstart"==g?this._handleStart(b,h,a,f.pageX,f.pageY):"touchmove"==g?this._handleMove(b,h,a,f.pageX,f.pageY):("touchend"==g||"touchcancel"==g)&&this._handleEnd(b,h,a))}}};c._IE_enable=function(b){var a=b.canvas,m=b.__touch.f=function(a){c._IE_handleEvent(b,a)};a.addEventListener("MSPointerDown",m,!1);window.addEventListener("MSPointerMove",m,!1);window.addEventListener("MSPointerUp",
m,!1);window.addEventListener("MSPointerCancel",m,!1);b.__touch.preventDefault&&(a.style.msTouchAction="none");b.__touch.activeIDs={}};c._IE_disable=function(b){var a=b.__touch.f;window.removeEventListener("MSPointerMove",a,!1);window.removeEventListener("MSPointerUp",a,!1);window.removeEventListener("MSPointerCancel",a,!1);b.canvas&&b.canvas.removeEventListener("MSPointerDown",a,!1)};c._IE_handleEvent=function(b,a){if(b){b.__touch.preventDefault&&a.preventDefault&&a.preventDefault();var c=a.type,
g=a.pointerId,d=b.__touch.activeIDs;if("MSPointerDown"==c)a.srcElement==b.canvas&&(d[g]=!0,this._handleStart(b,g,a,a.pageX,a.pageY));else if(d[g])if("MSPointerMove"==c)this._handleMove(b,g,a,a.pageX,a.pageY);else if("MSPointerUp"==c||"MSPointerCancel"==c)delete d[g],this._handleEnd(b,g,a)}};c._handleStart=function(b,a,c,g,d){var e=b.__touch;if(e.multitouch||!e.count){var f=e.pointers;f[a]||(f[a]=!0,e.count++,b._handlePointerDown(a,c,g,d))}};c._handleMove=function(b,a,c,g,d){b.__touch.pointers[a]&&
b._handlePointerMove(a,c,g,d)};c._handleEnd=function(b,a,c){var g=b.__touch,d=g.pointers;d[a]&&(g.count--,b._handlePointerUp(a,c,!0),delete d[a])};createjs.Touch=c})();(function(){var c=this.createjs=this.createjs||{},c=c.EaselJS=c.EaselJS||{};c.version="0.6.0";c.buildDate="Tue, 12 Feb 2013 21:12:22 GMT"})();

/* global $ */
/* global i18next */
(function () {

    let applyParagraphSpacing = function() {
        const paragraphSpacingClasses = ['paragraph-spacing-s', 'paragraph-spacing-l', 'paragraph-spacing-xl', 'paragraph-spacing-xxl'];
        $('html').removeClass(paragraphSpacingClasses);
        if (!localStorage.getItem('paragraph-spacing'))
            return;

        $('html').addClass(localStorage.getItem('paragraph-spacing'));
        $('select#paragraphSpacing option:selected').removeAttr('selected');
        $('select#paragraphSpacing').val(localStorage.getItem('paragraph-spacing')).attr('selected', 'selected');
    }

    let applyWordSpacing = function() {
        if (!localStorage.getItem('word-spacing')) {
            $('body').css('word-spacing', '');
            return;
        }
        $('body').css('word-spacing', localStorage.getItem('word-spacing'));
        $('select#wordSpacing option:selected').removeAttr('selected');
        $('select#wordSpacing').val(localStorage.getItem('word-spacing')).attr('selected', 'selected');
    }

    let applyLineSpacing = function() {
        if (!localStorage.getItem('line-height')) {
            $('body').css('line-height', '');
            return;
        }
        $('body').css('line-height', localStorage.getItem('line-height'));
        $('select#lineSpacing option:selected').removeAttr('selected');
        $('select#lineSpacing').val(localStorage.getItem('line-height')).attr('selected', 'selected');
    }

    let applyLetterSpacing = function() {
        const letterSpacingClasses = ['letter-spacing-s', 'letter-spacing-l', 'letter-spacing-xl', 'letter-spacing-xxl'];
        $('html').removeClass(letterSpacingClasses);
        if (!localStorage.getItem('letter-spacing'))
            return;

        $('html').addClass(localStorage.getItem('letter-spacing'));
        $('select#letterSpacing option:selected').removeAttr('selected');
        $('select#letterSpacing').val(localStorage.getItem('letter-spacing')).attr('selected', 'selected');
    }

    let applyFontSize = function () {

        if (!localStorage.getItem('font-size')) {
            $('html').css('font-size', '').removeClass('magnified');
            return;
        }
        $('html').css('font-size', localStorage.getItem('font-size'));
        $('select#fontSize option:selected').removeAttr('selected');
        $('select#fontSize').val(localStorage.getItem('font-size')).attr('selected', 'selected');
        // If font size is greater than 100%, add a class to change styles
        let idxOption = $('select#fontSize').find('option:selected').index();
        $('html').toggleClass('magnified', idxOption > 1);
    }

    let applyFontFamily = function () {

        if (!localStorage.getItem('font-family')) {
            $('body').css('font-family', '');
            return;
        }
        $('body').css('font-family', localStorage.getItem('font-family'));
        $('select#fontType option:selected').removeAttr('selected');
        $('select#fontType').val(localStorage.getItem('font-family')).attr('selected', 'selected');

    }

    let applyBackgroundColor = function () {

        if (!localStorage.getItem('background-color')) {
            $('body').css('background-color', '');
            return;
        }
        $('body').css('background-color', localStorage.getItem('background-color'));
        $('select#backgroundColor option:selected').removeAttr('selected');
        $('select#backgroundColor').val(localStorage.getItem('background-color')).attr('selected', 'selected');

    }

    let applyAllStyles = function () {
        applyFontSize();
        applyFontFamily();
        applyBackgroundColor();
        applyLetterSpacing();
        applyLineSpacing();
        applyWordSpacing();
        applyParagraphSpacing();
    }

    let setOption = function (key, value) {
        (!value || value === '0') ? localStorage.removeItem(key) : localStorage.setItem(key, value);
    }
    let setFontSize = setOption.bind(null, ['font-size']);
    let setFontFamily = setOption.bind(null, ['font-family']);
    let setBackgroundColor = setOption.bind(null, ['background-color']);
    let setLetterSpacing = setOption.bind(null, ['letter-spacing']);
    let setLineSpacing = setOption.bind(null, ['line-height']);
    let setWordSpacing = setOption.bind(null, ['word-spacing']);
    let setParagraphSpacing = setOption.bind(null, ['paragraph-spacing']);

    // guardamos las opciones de accesibilidad
    $(document).on('click', 'button[type=submit]', function (event) {
        event.preventDefault();
        $('select :selected').each(function (index) {
            switch (index) {
                case 0: setFontSize($(this).val()); break;
                case 1: setFontFamily($(this).val()); break;
                case 2: setBackgroundColor($(this).val()); break;
                case 3: setLetterSpacing($(this).val()); break;
                case 4: setLineSpacing($(this).val()); break;
                case 5: setWordSpacing($(this).val()); break;
                case 6: setParagraphSpacing($(this).val()); break;
                default: break;
            }
        });
        $('#accesibilityModal').modal('hide');
    });

    // reestablecer opciones por defecto
    $(document).on('click', 'button.reestablecer', function () {
        localStorage.removeItem('font-size');
        localStorage.removeItem('font-family');
        localStorage.removeItem('background-color');
        localStorage.removeItem('letter-spacing');
        localStorage.removeItem('line-height');
        localStorage.removeItem('word-spacing');
        localStorage.removeItem('paragraph-spacing');
        $(this).closest('.modal').find('select').each(function () {
            $(this).val($(this).find('option').first().val())
        });
        $('#accesibilityModal').modal('hide');
    });

    $('#accesibilityModal').on('hidden.bs.modal', applyAllStyles);

    let onLanguageLoaded = function (err, i18n) {

        const NAVIGATION_MODAL = 0;
        const NAVIGATION_SELECT = 1;
        let $focusables;
        let $currentFocusable;
        let $options;
        let $currentOption;
        let mode = NAVIGATION_MODAL;

        // Get a list of interactive elements in the current modal
        $('#accesibilityModal').on('shown.bs.modal', function () {
            $focusables = $(this).find(':focusable');
            $currentFocusable = $focusables.first();
            $currentFocusable.focus();
        })
        // Fix the size of selects if the user alternates mouse/keyboard with voice control
        $('#accesibilityModal').on('focus', ':focusable', function () {
            $(this).closest('.modal').find('select').not(this).each(function () { this.size = 1 });
        });

        $('#accesibilityModal').on('blur', 'select', function () {
            this.size = 1;
        });

        let handleMove = function (action, target) {
            $(this).closest('.modal').find('select').each(function () { this.size = 1 });
            if (mode === NAVIGATION_MODAL) {
                let len = $focusables.length;
                let position = $focusables.index($currentFocusable);
                let nextPos = position;
                switch (action) {
                    case "NEXT": nextPos = (position + 1) % len; break;
                    case "PREVIOUS": nextPos = (position - 1) % len; break;
                    case "GOTO": nextPos = (parseInt(target) - 1) % len; break;
                }
                $currentFocusable = $focusables.eq(nextPos);
                $currentFocusable.focus();
            } else if (mode === NAVIGATION_SELECT) {
                let len = $options.length;
                let position = $options.index($currentOption);
                $currentFocusable[0].size = len;
                let nextPos = position;
                switch (action) {
                    case "NEXT": nextPos = (position + 1) % len; break;
                    case "PREVIOUS": nextPos = (position - 1) % len; break;
                    case "GOTO": nextPos = (parseInt(target) - 1) % len; break;
                }
                $currentOption = $options.eq(nextPos);
                $currentOption.closest('select').val($currentOption.val()).change();
            }
        }

        let handleSelect = function () {

            if (mode === NAVIGATION_MODAL) {
                if ($(this).is('select')) {
                    $options = $(this).find('option');
                    $currentOption = $options.first();
                    this.size = $options.length;
                    $(this).val($currentOption.val()).change();
                    mode = NAVIGATION_SELECT;
                }
                else
                    $currentFocusable.trigger('click');
            } else {
                $options = null;
                $currentOption = null;
                mode = NAVIGATION_MODAL;
                this.size = 1;
                $(this).focus();
            }
        }

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html('<span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        }

        let onSpeechToAction = function (event, action, entities) {
            if (action === "START" || action === "ACCESSIBILITY") {
                mode = NAVIGATION_MODAL;
                $('#accesibilityModal').modal('show');
            }
            else if (action === "FINISH" || action === "CLOSE") {
                // The user can manually close the modal (without using voice)
                // so the finish behaviour is delegated to the hide event
                event.preventDefault();
                $('#accesibilityModal').modal('hide');
                if (mode === NAVIGATION_SELECT) {
                    $options = null;
                    $currentOption = null;
                    mode = NAVIGATION_MODAL;
                    $currentFocusable.focus();
                }
            }
            else if (action === "SELECT") handleSelect.apply($currentFocusable[0], [action, entities]);
            else if (action === "NEXT" || action === "PREVIOUS") handleMove(action);
            else if (action === "GOTO") handleMove(action, entities && entities['target-position']);
            else if (action === "BACK" && mode === NAVIGATION_SELECT) {
                $options = null;
                $currentOption = null;
                mode = NAVIGATION_MODAL;
                $currentFocusable[0].size = 1;
                $currentFocusable.focus();
            }
            else $('#tta-message-global').append(makeAlert('alert-danger', i18n('tta-error-message')));
        };

        $('#accesibilityModal').on('speech-to-action', onSpeechToAction);
    }

    applyAllStyles();
    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))

})();
// PLUGIN
/** Plugin instance */
/* global i18next */
/* global dragula */
/* global $ */
/* global setObjetivoCompleto */

(function () {

    let scriptPath = document.currentScript.src
    scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));

    // https://stackoverflow.com/a/30106551
    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let DragDropPlugin = {
        /** Array that will contain the data stored in the plugin */
        data: [],
        /** State of the plugin (initialized, not initialized) */
        ready: false,
        /** Function that initializes the plugin. */
        initializePlugin: function () {
            this.ready = true;
        },
        /**
         * Creates a drag and drop section in the page and stores it into the plugin data
         * 
         * @param {string} optionsContainerSelector Selecter of the container of the initial options
         * @param {string} selectedOptionsContainerSelector Selector of the container if the selected options 
         * @param {string} definitionsContainerSelector  Selector of the container of the descriptions
         * @param {*} ddTerms Definitions and Terms 
         * @returns {string} identifier of the quiz of definitions/terms created
         */
        createDragDrop: function (optionsContainerSelector, selectedOptionsContainerSelector, definitionsContainerSelector, ddTerms, objetivop, identificadorp) {

            let currLang = $('html').attr('lang');
            if (!this.ready)
                throw new Error('DragDrop plugin is not ready. Please, call initialize functionPlugin before using it');

            let onLanguageLoaded = function (err, i18n) {

                let widgetId = optionsContainerSelector.substring(optionsContainerSelector.lastIndexOf("-") + 1);
                let $dragOptionsList = $(optionsContainerSelector);
                let $dragElectionsList = $(selectedOptionsContainerSelector);
                let $widget = $dragOptionsList.closest('.drag-drop');
                let $dragDropDescriptions = $(definitionsContainerSelector);
                let $dragSelectableList = $dragOptionsList.add($dragElectionsList);
                let $dragItems;
                let $tableOptions;

                $(optionsContainerSelector).closest('.container').attr('tabindex', -1);

                let moveBack = function (e, $items) {
                    e.preventDefault();
                    e.stopPropagation();
                    let position = $items.index($(this));
                    let nextPos = (position - 1) % $items.length;
                    $items.attr('tabindex', -1)
                    $items.eq(nextPos).attr('tabindex', 0).focus();
                }

                let moveForward = function (e, $items) {
                    e.preventDefault();
                    e.stopPropagation();
                    let position = $items.index($(this));
                    let nextPos = (position + 1) % $items.length;
                    $items.attr('tabindex', -1)
                    $items.eq(nextPos).attr('tabindex', 0).focus();
                }

                let showChoices = function (e, currPosition) {
                    e.preventDefault();
                    e.stopPropagation();
                    let text = $(this).find('.drag-drop-option').text();
                    $widget.find('.drag-item').removeClass('selected');
                    $widget.find('.drag-item').filter(function () { return matchBetweenTexts($(this).find('.drag-drop-option').text(), text) }).first().addClass('selected');
                    $('#drag-drop-modal-' + widgetId).find('.drag-drop-current-option').html(i18n('accessible-dragdrop-modal-current-option', { optionIndex: currPosition, option: $(this).find('.drag-drop-option').html(), interpolation: { escapeValue: false } }));
                    $('#drag-drop-modal-' + widgetId).modal({ keyboard: true, focus: true, show: true })
                }

                let handleOptionKeydown = function (e, $items) {
                    let key = e.which || e.keyCode;
                    // Enter, space, tab, up arrow or down arrow
                    if (key === 13 || key === 32 || key === 38 || key === 40 || key === 27) {
                        if (key === 13 || key === 32) {
                            let text = $(this).find('.drag-drop-option').text();
                            let $option = $items.filter(function () {
                                return matchBetweenTexts($(this).find('.drag-drop-option').text(), text)
                            }).first();
                            let position = $items.index($option);
                            showChoices.apply(this, [e, position + 1]);
                        }
                        else if (key === 38)
                            moveBack.apply(this, [e, $items]);
                        else if (key === 40)
                            moveForward.apply(this, [e, $items])
                        else if (key === 27)
                            $(this).blur();

                    }
                };

                let handleCheckResponseTabAndEsc = function (e, $items) {
                    let key = e.which || e.keyCode;
                    if (key === 9 && e.shiftKey || key === 27) {
                        if (key === 9) {
                            e.preventDefault();
                            e.stopPropagation();
                            $items.filter(function () { return $(this).attr('tabindex') === "0" }).first().focus();
                        }
                        else {
                            $(this).blur();
                        }
                    }
                };

                let updateStateOfOptions = function () {
                    let $dragOptions = $dragOptionsList.find('.drag-item');
                    let $dragElections = $dragElectionsList.find('.drag-item');
                    let $tableOptions = $('#dragdrop-table-options-' + widgetId + ' div button');
                    $tableOptions.each(function () {
                        let $tOpt = $(this);
                        let $placeholder = $tOpt.parent().find('.response-placeholder');
                        let sourcePosition = $tOpt.index("#dragdrop-table-options-" + widgetId + " div button");
                        let $sOpt = $dragOptions.filter(function () {
                            return matchBetweenTexts($(this).find('.drag-drop-option').text(), $tOpt.find('.drag-drop-option').text())
                        }).first();
                        let $sEle = $dragElections.filter(function () {
                            return matchBetweenTexts($(this).find('.drag-drop-option').text(), $tOpt.find('.drag-drop-option').text())
                        }).first();
                        if ($sOpt.length) {
                            $('#' + widgetId + "-state-" + (sourcePosition + 1)).text("");
                            $('#dragdrop-table-option-' + widgetId + "-state-" + (sourcePosition + 1)).text("");
                            $placeholder.html(i18n('accessible-dragdrop-without-association'));
                        }
                        else if ($sEle.length) {
                            let targetPosition = $sEle.parent().index("#drag-elections-" + widgetId + " .drag-container");
                            let target = $("#drag-descriptions-" + widgetId + " .drag-description").eq(targetPosition).html();
                            let aria = i18n("accessible-dragdrop-already-matched", { definitionIndex: targetPosition + 1, definition: target, interpolation: { escapeValue: false } });
                            $('#' + widgetId + "-state-" + (sourcePosition + 1)).html(aria);
                            $('#dragdrop-table-option-' + widgetId + "-state-" + (sourcePosition + 1)).html(aria);
                            $placeholder.html(i18n('accessible-dragdrop-response-association', { definition: target, interpolation: { escapeValue: false } }));
                        }
                    });
                }

                let handleCheckAction = function () {
                    let gamification = $('body').hasClass('gamification');
                    $(this).prop('disabled', gamification);
                    $('#check-' + widgetId).trigger('click');
                }

                /**
                 * Validates a quiz of definition/terms given by id and shows in the page wether it is correct or incorrect
                 * 
                 * @param {string} id ID of the quiz of definition/term
                 * 
                 * @returns {boolean} true if correct, false if incorrect
                 */
                let validate = function () {
                    let gamification = $('body').hasClass('gamification');
                    var validCount = 0;
                    var $selectedContainers = $dragElectionsList.find('.drag-container');
                    var $definitions = $dragDropDescriptions.children();
                    for (var i = 0; i < $selectedContainers.length; i++) {
                        if ($selectedContainers.eq(i).has('.drag-item').length) {
                            let $selectedItem = $selectedContainers.eq(i).find('.drag-item');
                            var term = $selectedItem.find('.drag-drop-option').text();
                            var currentDescription = $definitions.eq(i).text();
                            let targetDescription = $.parseHTML(ddTerms.filter((t) => {
                                return $.parseHTML(t.term)[0].textContent === term
                            })[0].definition)[0].textContent;
                            if (currentDescription == targetDescription) {
                                validCount++;
                            } else {
                                if (!gamification) {
                                    $dragOptionsList.find('.drag-container').filter(function () { return $(this).is(':empty') }).first().each(function () {
                                        $(this).append($selectedItem);
                                    });
                                }
                            }
                        }
                    }
                    updateStateOfOptions();
                    if (!gamification) {
                        let $results = $("#result-" + widgetId).add($("#mobile-result-" + widgetId))
                        // show in text
                        if (validCount == ddTerms.length) {
                            setObjetivoCompleto(objetivop, identificadorp, "TextualDragAndDrop");
                            $results.removeClass('result-ko');
                            $results.addClass('result-ok');
                            // Screen reader will not notice a change if we try to add the same text without clearing it first
                            $results.html("");
                            setTimeout(function () {
                                $results.html(i18n('accessible-dragdrop-text-action-check-ok'));
                            }, 100);
                        } else {
                            $results.removeClass('result-ok');
                            $results.addClass('result-ko');
                            // Screen reader will not notice a change if we try to add the same text without clearing it first
                            $results.html("");
                            setTimeout(function () {
                                $results.html(i18n('TextNumberCorrect', { num: validCount }));
                            }, 100);
                        }
                    }
                    $('#check-' + widgetId).trigger('gamificate', [validCount == ddTerms.length, validCount / ddTerms.length]);
                }

                let buildMobileTableOptions = function () {

                    let $dragOptionsItems = $dragOptionsList.find('.drag-item');
                    let position = 1;
                    let $table = $widget.find('#dragdrop-table-options-' + widgetId);
                    let $rows = $dragOptionsList.find('.drag-item').map(function () {
                        let itemText = $(this).find('.drag-drop-option').text();
                        let currPosition = position;
                        let $cell = $('<div />')
                        let $button = $('<button />')
                            .addClass('btn btn-success btn-block mb-2 btn-option')
                            .attr('aria-haspopup', 'dialog')
                            .attr('tabindex', currPosition === 1 ? "0" : "-1")
                            .attr('aria-labelledby',
                                'dragdrop-table-option-' + widgetId + "-prefix-" + currPosition + ' ' +
                                'dragdrop-table-option-' + widgetId + "-option-" + currPosition + ' ' +
                                'dragdrop-table-option-' + widgetId + "-state-" + currPosition);

                        let term = $(this).find('.drag-drop-option').html();
                        let $content = $('<span />').addClass('drag-drop-option').attr('id', 'dragdrop-table-option-' + widgetId + "-option-" + currPosition).html(term);
                        let $state = $("<span />").addClass('dragdrop-state sr-only').attr('id', 'dragdrop-table-option-' + widgetId + "-state-" + currPosition).html("")
                        let $prefix = $("<span />").addClass('dragdrop-prefix sr-only').attr('id', 'dragdrop-table-option-' + widgetId + "-prefix-" + currPosition).html(i18n("accessibility-option") + " " + currPosition)
                        $button.toggleClass('has-code', $.parseHTML(term)[0].nodeType !== 3 && $(term).is('code'));
                        $button.append($content, $state, $prefix);
                        position++;
                        $button
                            .on('click', function (e) {
                                let $item = $dragOptionsItems.filter(function () { return $(this).find('.drag-drop-option').text() === itemText }).first();
                                showChoices.apply($item[0], [e, currPosition])
                            });
                        $cell.append($button);
                        let $placeholder = $('<div />')
                            .addClass('response-placeholder col-12')
                            .attr('aria-hidden', 'true')
                            .html(i18n('accessible-dragdrop-without-association'));
                        $cell.append($placeholder)
                        return $cell[0];
                    });

                    let $buttons = $rows.find('.btn-option');
                    $buttons.each(function () {
                        $(this).on('keydown', function (e) { handleOptionKeydown.apply(this, [e, $buttons]) })
                    });

                    let $checkAnswerButton = $table.find('.btn-check')
                    $checkAnswerButton
                        .on('click', handleCheckAction)
                        .on('keydown', function (e) { handleCheckResponseTabAndEsc.apply(this, [e, $buttons]) })
                        .html(i18n("accessible-dragdrop-check-answers"));

                    return $table.prepend($rows);
                };

                let matchBetweenTexts = function (txt1, txt2) {
                    return typeof txt1 === 'string' && typeof txt2 === 'string' ? txt1.toLowerCase() === txt2.toLowerCase() : false;
                }

                let getDefinitionsArray = function () {
                    return $.makeArray($dragDropDescriptions.find('.drag-description')
                        .map(function () { return $(this).text() }))
                }

                let listDefinitions = function () {
                    let inc = 1;
                    return getDefinitionsArray().map(def => (inc++) + ": " + def);
                }

                let resetElectionPosition = function () {
                    let $existingMatch = $(this);
                    // Find its position in table options
                    let matchPosition = $dragItems.index($existingMatch);
                    // Find the place to put the matched option
                    let $placeholder = $dragOptionsList.find('.drag-container').eq(matchPosition).first();
                    if (!$placeholder.is(':empty')) // container must not contain an element
                        resetElectionPosition.apply($placeholder.find('.drag-item').first());
                    // Reset its aria label to indicate that it is not matched.
                    let text = $existingMatch.find('.drag-drop-option').text();
                    $existingMatch.parent().empty();
                    $placeholder.append($existingMatch);
                    playReader({ 'lang': currLang, 'alertType': 'screen-reader', 'message': i18n('accessible-dragdrop-dissasociate', { optionIndex: matchPosition + 1, option: text }) })
                }

                let moveItemToElection = function (tgt) {
                    let $src = $(this);
                    let $tgt = $(tgt);
                    if (!$src.length || !$tgt.length) {
                        throw {
                            name: 'UndefinedSourceException',
                            message: 'The source or target is not defined.'
                        }
                    }
                    let targetPosition = $tgt.index("#drag-descriptions-" + widgetId + " .drag-description");
                    let $candidate = $('#drag-elections-' + widgetId).find('.drag-container').eq(targetPosition);
                    let $item = $candidate.find('.drag-item').first();
                    if ($src.text() != $item.text()) {
                        if ($item.length)
                            resetElectionPosition.apply($item);
                        $candidate.append($src);
                        updateStateOfOptions();
                    }
                    $src.focus();
                }

                // eslint-disable-next-line no-unused-vars
                let playReader = async function ({ action, message, onEnd, alertType } = {}) {
                    if (action && !message)
                        message = i18n(`accessible-dragdrop-text-action-${action}`);
                    // Screen readers need a small delay to read the new message
                    await new Promise((resolve) => {
                        if (alertType == "screen-reader") {
                            $('#drag-drop-message-' + widgetId).text("");
                            setTimeout(function () {
                                $('#drag-drop-message-' + widgetId).html('<span class="sr-only">' + message + '</span>');
                                resolve();
                                setTimeout(function () {
                                    $('#drag-drop-message-' + widgetId).html("");
                                }, 300);
                            }, 100);
                        }
                        else {
                            $('#drag-drop-message-' + widgetId).empty().append(makeAlert(alertType, message));
                            resolve();
                        }
                    });
                };

                let findEntityByPosition = function (widgetId, entities, tag, $listOfCandidates) {
                    let numbers = entities['number'];
                    // Position for source entity is at the beginning, for target is at the end
                    let number = numbers[tag.includes("source") ? 0 : numbers.length - 1];
                    let position = parseInt(number) - 1;
                    let found = $listOfCandidates.eq(position).text();
                    return found;
                }
                let handleMatchAction = function (entities) {
                    let $selected = $dragSelectableList.find('.drag-item.selected').first();
                    if (!$selected.length)
                        throw {
                            name: 'UndefinedSourceException',
                            message: 'Could not find source element.'
                        }
                    let target, $tgt;
                    try {
                        target = findEntityByPosition(widgetId, entities, "target-position", $("#drag-descriptions-" + widgetId + " .drag-description"));
                        $tgt = $('#drag-descriptions-' + widgetId + ' .drag-description').filter(function () { return matchBetweenTexts($(this).text(), target) }).first();
                        moveItemToElection.apply($selected[0], [$tgt[0]]);
                    } catch (e) {
                        playReader({ 'action': 'move-error', 'alertType': 'alert-danger' })
                        throw (e);
                    }
                }

                let handleRepeatAction = function () {
                    playReader({
                        'alertType': 'alert-info',
                        'message': i18n('tta-info-drag-drop')
                    })
                }

                let handleUnknownAction = function () {
                    playReader({ action: "unknown", alertType: 'alert-danger' })
                }

                let makeAlert = function (type, message) {

                    let $dismissButton = $('<button />')
                        .data('dismiss', 'alert')
                        .attr('type', 'button')
                        .attr('aria-hidden', 'false')
                        .attr('aria-label', i18n('accessible-dragdrop-close')) //
                        .addClass('close')
                        .html(' <span aria-hidden="true">&times;</span>');

                    let $alert = $("<div />")
                        .addClass('alert alert-dismissible fade show ' + type)
                        .html(message)
                        .append($dismissButton);

                    $dismissButton.on('click', function () { $alert.alert('close') });
                    let time = Math.max(6000, message.length * 60);
                    setTimeout(function () { $alert.alert('close') }, time);
                    $alert.alert();
                    return $alert;
                }

                let buildAccessibleDragDropModal = function () {

                    let $self = $(this);
                    let $modal = $self.find('#drag-drop-modal-' + widgetId)
                    let $options = $self.find('.drag-description').map(function () {
                        let $cell = $('<li />').addClass('m-1 modal-option');
                        let $button = $('<button />')
                            .addClass('btn btn-success btn-block')
                            .html($(this).html());
                        $button.toggleClass('has-code', $.parseHTML($(this).html())[0].nodeType !== 3 && $($(this).html()).is('code'));
                        $cell.append($button);
                        return $cell[0];
                    });

                    let $optionsTable = $self.find('.modal-options')
                    $optionsTable.append($options);
                    $modal.on('shown.bs.modal', function () {
                        $(this).find('button').first().focus();
                    });
                    $modal.on('click', '.modal-option button', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        let text = $(this).text();
                        let $selected = $dragSelectableList.find('.drag-item.selected').first();
                        let $tgt = $('#drag-descriptions-' + widgetId + ' .drag-description').filter(function () { return matchBetweenTexts($(this).text(), text) }).first();
                        try {
                            moveItemToElection.apply($selected[0], [$tgt[0]]);
                        } catch (e) {
                            playReader({ 'action': 'move-error', 'alertType': 'alert-danger' })
                            return -1;
                        }
                        $modal.modal('hide');
                    });

                    $modal.on('hide.bs.modal', function () {
                        let $selected = $dragSelectableList.find('.drag-item.selected').first();
                        if ($selected) {
                            $selected.removeClass('selected');
                            let $tableOption = $('#dragdrop-table-options-' + widgetId + ' div button').filter(function () { return matchBetweenTexts($(this).find('.drag-drop-option').text(), $selected.find('.drag-drop-option').text()) }).first();
                            if ($tableOption.is(":visible"))
                                $tableOption.focus();
                            else
                                $selected.focus()
                        }
                    });
                }

                /**
                 * Creates the html for a term to be placed at the left
                 * @param {string} term Term text
                 * @returns String containing the html
                 */
                let createOption = function (term, currPosition) {

                    let $button = $("<button />")
                        .addClass('drag-item')
                        .attr('aria-haspopup', 'dialog')
                        .attr('aria-labelledby',
                            widgetId + "-prefix-" + currPosition + ' ' +
                            widgetId + "-option-" + currPosition + ' ' +
                            widgetId + "-state-" + currPosition);

                    let $content = $('<span />').addClass('drag-drop-option').attr('id', widgetId + "-option-" + currPosition).html(term);
                    let $state = $("<span />").addClass('dragdrop-state sr-only').attr('id', widgetId + "-state-" + currPosition).html("")
                    let $prefix = $("<span />").addClass('dragdrop-prefix sr-only').attr('id', widgetId + "-prefix-" + currPosition).html(i18n("accessibility-option") + " " + currPosition)
                    $button.append($content, $state, $prefix);
                    $button.toggleClass('has-code', $.parseHTML(term)[0].nodeType !== 3 && $(term).is('code'));
                    let $container = $("<div />").addClass('drag-container');
                    $container.append($button);
                    return $container;
                };

                /**
                 * Creates the html for a term container to be placed at the right, initially empty
                 * 
                 * @returns String containing the html
                 */
                let createEmptyOption = function () {
                    return $("<div />").addClass('drag-container');
                };

                /**
                 * Creates the html for a definition
                 * 
                 * @param {string} definition String containing the definition
                 * @param {string} key Key to plugin storage to identify the association between term/definition
                 * 
                 * @returns {string} String containing the html
                 */
                let createDefinition = function (definition) {
                    let $description = $('<div />').addClass('drag-description');
                    // Check that the current node is not a text node
                    $description.toggleClass('has-code', $.parseHTML(definition)[0].nodeType !== 3 && $(definition).is('code'));
                    $description.html(definition)
                    return $description;
                };

                /**
                 * Shuffles array in place.
                 * @param {Array} a items An array containing the items.
                 * 
                 * @returns Array
                 */
                let shuffle = function (a) {
                    var j, x, i;
                    for (i = a.length - 1; i > 0; i--) {
                        j = Math.floor(Math.random() * (i + 1));
                        x = a[i];
                        a[i] = a[j];
                        a[j] = x;
                    }
                    return a;
                };

                let onSpeechToAction = function (event, action, entities) {
                    if (action === "FINISH")
                        return;
                    let $selected = $dragSelectableList.find('.drag-item.selected').first();
                    let $tableOptions = $('#dragdrop-table-options-' + widgetId + ' div button');
                    let $tableOption = $('#dragdrop-table-options-' + widgetId + ' div button').filter(function () { return matchBetweenTexts($(this).find('.drag-drop-option').text(), $selected.find('.drag-drop-option').text()) }).first();
                    let position = $selected.length > 0 ? $tableOption.index('#dragdrop-table-options-' + widgetId + ' div button') : 0;
                    let total = $tableOptions.length - 1; // Exclude check answer button
                    // Movement or state actions
                    if (["CURRENT", "START", "NEXT", "PREVIOUS", "GOTO"].includes(action)) {
                        if (action === "NEXT")
                            position = ((position + 1) + total) % total;
                        else if (action === "PREVIOUS")
                            position = ((position - 1) + total) % total;
                        else if (action === "GOTO")
                            position = (parseInt(entities['target-position']) - 1) % total;
                        $tableOption = $tableOptions.eq(position);
                        $dragSelectableList.find('.drag-item').removeClass('selected');
                        $selected = $dragSelectableList.find('.drag-item').filter(function () { return matchBetweenTexts($(this).find('.drag-drop-option').text(), $tableOption.find('.drag-drop-option').text()) }).first();
                        $selected.addClass('selected');
                        $tableOption.is(":visible") ? $tableOption.focus() : $selected.focus()
                        let values = listDefinitions().join(', ');
                        let matchMsg = "";
                        if ($dragElectionsList.has($selected).length) {
                            let tgtPosition = $selected.parent().index('#drag-elections-' + widgetId + ' .drag-container');
                            let tgtDescription = $('#drag-descriptions-' + widgetId + ' .drag-description').eq(tgtPosition).text();
                            matchMsg = i18n('accessible-dragdrop-already-matched', {
                                definitionIndex: tgtPosition + 1,
                                definition: tgtDescription
                            })
                        }
                        setTimeout(function () {
                            playReader({
                                'alertType': 'screen-reader',
                                'message': i18n('accessible-dragdrop-help-text', {
                                    optionIndex: position + 1,
                                    option: $selected.find('.drag-drop-option').text(),
                                    content: matchMsg,
                                    definitions: values
                                })
                            });
                        }, 100);
                    }
                    else if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                        $(".modal.show").length && $('.modal.show').modal('hide');
                        $(".alert").length && $('.alert').alert('close');
                    }
                    else if (action === "SCROLL DOWN")
                        window.scrollBy(0, window.innerHeight * 0.4);
                    else if (action === "SCROLL UP")
                        window.scrollBy(0, -window.innerHeight * 0.4);
                    else {
                        switch (action) {
                            case "MATCH": handleMatchAction(entities); break;
                            case "REPEAT": handleRepeatAction(); break;
                            case "CHECK": handleCheckAction(); break;
                            case "NONE":
                            default: handleUnknownAction(); break;
                        }
                    }
                }

                let buildDragulaDragDrop = function () {

                    // Randomize the terms and definitions
                    let terms = ddTerms.map((item) => item.term);
                    terms = shuffle(terms);
                    let definitions = ddTerms.map((item) => item.definition);
                    definitions = shuffle(definitions);

                    // Append the terms and defitions to the corresponding containers
                    for (let i = 0; i < ddTerms.length; i++) {
                        $dragOptionsList.append(createOption(terms[i], i + 1));
                        $dragElectionsList.append(createEmptyOption());
                        $dragDropDescriptions.append(createDefinition(definitions[i]));
                    }

                    $widget.on('keydown', '.drag-item', function (e) {
                        handleOptionKeydown.apply(this, [e, $dragItems])
                    });
                    $widget.on('click', '.drag-item',
                        function (e) {
                            let text = $(this).find('.drag-drop-option').text();
                            let $option = $dragItems.filter(function () {
                                return matchBetweenTexts($(this).find('.drag-drop-option').text(), text)
                            }).first();
                            showChoices.apply(this, [e, $dragItems.index($option)])
                        });

                    // Bind reset button
                    $widget.find('.btn-reset').on('click', function () {
                        // Move all items to the column on the left
                        $dragElectionsList.find('.drag-item').each(function () {
                            $dragOptionsList.find('.drag-container:empty').first().append($(this))
                        });
                        // Update state
                        updateStateOfOptions();
                        // Clear results text and remove their styles
                        let $results = $("#result-" + widgetId).add($("#mobile-result-" + widgetId));
                        $results.removeClass('result-ko').removeClass('result-ok').empty();
                    });

                    // Bind check button to validation
                    $widget.find('#check-' + widgetId)
                        .on('click', validate)
                        .on('keydown', function (e) {
                            handleCheckResponseTabAndEsc.apply(this, [e, $dragItems])
                        });

                    let containers = $.makeArray($.makeArray($dragSelectableList.find('.drag-container')));
                    let dragulaFunctions = {
                        isContainer: function (el) { return containers.indexOf(el) >= 0; },
                        moves: function (el, source, handling, sibling) { return true; },
                        invalid: function (el, handle) { return false; },
                        accepts: function (el, target, source, sibling) { return ($(target).children().length == 0); },
                        removeOnSpill: false,
                        copy: false
                    };
                    let drake = dragula(containers, dragulaFunctions);
                    drake.on('dragend', function (el, container, source) { updateStateOfOptions() })
                }

                buildDragulaDragDrop();
                $dragItems = $dragSelectableList.find('.drag-item');
                $dragItems.attr('tabindex', -1);
                $dragSelectableList.find('.drag-item').first().attr('tabindex', 0);
                $tableOptions = buildMobileTableOptions.apply($widget[0], [widgetId]);
                $widget.attr('role', 'application');
                $widget.prepend($tableOptions);
                $('#speech-to-action-' + widgetId).on('speech-to-action', onSpeechToAction);
                buildAccessibleDragDropModal.apply($widget[0], [widgetId]);
                updateStateOfOptions();
            }

        fetch(`${scriptPath}/../languages/${currLang}.json`)
                .then(response => response.json())
                .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
        }
    };

    $('.drag-drop').each(function () {
        let id = $(this).attr('id');
        let ddTerms = JSON.parse(b64DecodeUnicode($(this).data('content')));
        let widgetName = $(this).data('desc');
        DragDropPlugin.initializePlugin();
        DragDropPlugin.createDragDrop('#drag-options-' + id, '#drag-elections-' + id, '#drag-descriptions-' + id, ddTerms, "objetivo" + id, widgetName);
    });
})();

/* global $ */
/* global i18next */
(function () {

	let onLanguageLoaded = function (err, i18n) {

		let makeAlert = function (type, message) {

			let $dismissButton = $('<button />')
				.data('dismiss', 'alert')
				.attr('type', 'button')
				.attr('aria-hidden', 'false')
				.attr('aria-label', i18n('Close')) //
				.addClass('close')
				.html(' <span aria-hidden="true">&times;</span>');

			let $alert = $("<div />")
				.addClass('alert alert-dismissible fade show ' + type)
				.html(message)
				.append($dismissButton);

			$dismissButton.on('click', function () { $alert.alert('close') });
			let time = Math.max(6000, message.length * 60);
			setTimeout(function () { $alert.alert('close') }, time);
			$alert.alert();
			return $alert;
		};

		let onSpeechToAction = function (event, action, entities) {

			if (action === "FINISH" || action === "START")
				return;

			if (action === "SELECT")
				$(this).trigger('click');
			else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.8);
			else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.8);
			else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
			else if (action === "REPEAT")
				$(this).closest('.widget-image').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-image')));
			else
				$(this).closest('.widget-image').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
		};

		$(document).on('click', '.sctop', function () {
			let ancla = $(this).attr("href");
			$('html, body').animate({
				scrollTop: $(ancla).offset().top
			}, 1000);
		});

		$('.btnmostrar').each(function () {
			let id = $(this).attr('id');
			$('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction.bind(this));
			var $this = $(this);
			$this.on("click", function () {
				let $target = $($(this).attr("data-target"));
				$target.removeClass('hidden');
				$(this).attr('aria-expanded') && $(this).attr('aria-expanded', true);
				$(this).attr('aria-disabled') && $(this).attr('aria-disabled', true);
				setTimeout(function() { $target.addClass('animate') }, 1);
			});
		});
	}

	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if (isMobile.any()) {
		$('div.container').addClass('container-fluid').removeClass('container');
		$('.modal-dialog').css('max-width', '100%!important');
	}

	// This variable is used by other js files
	window.isMobile = isMobile;

	let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
		.then(response => response.json())
		.then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))

})();
/*
 * A plugin for making Bootstrap's pagination more responsive
 * https://github.com/auxiliary/rpage   
 */

jQuery.fn.rPage = function () {
    var $this = $(this);
    for(var i = 0, max = $this.length; i < max; i++)
    {
    	new rPage($($this[i]));
    }

    function rPage($container)
    {
    	this.label = function()
    	{
    		var active_index = this.els.filter(".active").index();
    		var rp = this;
    		this.els.each(function(){
    			if (rp.isNextOrPrevLink($(this)) == false)
    			{
    				$(this).addClass("page-away-" + (Math.abs(active_index - $(this).index())).toString());    				
    			}
    			else
    			{
    				if ($(this).index() > active_index)
    				{
    					$(this).addClass("right-etc");
    				}
    				else
    				{
    					$(this).addClass("left-etc");
    				}
    			}
    		});
    	}
    	
    	this.makeResponsive = function()
	    {
	    	this.reset();
	    	var width = this.calculateWidth();
	    	
	    	while (width > this.els.parent().parent().outerWidth() - 10)
	    	{
	    		var did_remove = this.removeOne();
	    		if (did_remove == false)
	    		{
	    			break;
	    		}
	    		width = this.calculateWidth();
	    	}
	    }
    	
    	this.isNextOrPrevLink = function(element)
    	{
    		if (element.text() == "›" || element.text() == "‹")
    		{
    			return true;
    		}
    		return false;
    	}
    	
    	this.isRemovable = function(element)
    	{
    		if (this.isNextOrPrevLink(element))
    		{
    			return false;
    		}
    		var index = this.els.filter(element).index();
    		if (index == 1 || this.isNextOrPrevLink($container.find("li").eq(index + 1)))
    		{
    			return false;
    		}
    		if (element.text() == "...")
    		{
    			return false;
    		}
    		return true;
    	}
    	
	    this.removeOne = function()
	    {
	    	var active_index = this.els.filter(".active").index();
	    	var farthest_index = $container.find("li").length - 1;
	    	var next = active_index + 1;
	    	var prev = active_index - 1;
	    	
	    	for (var i = farthest_index - 1; i > 0; i--)
	    	{
	    		var candidates = this.els.filter(".page-away-" + i.toString());
	    		var candidate = candidates.filter(function(){
	    			return this.style["display"] != "none";
	    		});
	    		if (candidate.length > 0)
	    		{
	    			for (var j = 0; j < candidate.length; j++)
	    			{
	    				var candid_candidate = candidate.eq(j);
	    				if (this.isRemovable(candid_candidate))
		    			{
			    			candid_candidate.css("display", "none");
			    			if (this.needsEtcSign(active_index, farthest_index - 1))
			    			{
			    				this.els.eq(farthest_index - 2).before("<li class='disabled removable'><a class='menuda'><span>...</span></a></li>");
			    			}
			    			if (this.needsEtcSign(1, active_index))
			    			{
			    				this.els.eq(1).after("<li class='disabled removable'><a class='menuda'><span>...</span></a></li>");
			    			}
			    			return true;
		    			}
	    			}
	    		}
	    	}
	    	return false;
	    }
	    
	    this.needsEtcSign = function(el1_index, el2_index)
	    {
	    	if (el2_index - el1_index <= 1)
	    	{
	    		return false;
	    	}
	    	else
	    	{
	    		var hasEtcSign = false;
	    		var hasHiddenElement = false;
	    		for (var i = el1_index + 1; i < el2_index; i++)
	    		{
	    			var el = $container.find("li").eq(i);
	    			if (el.css("display") == "none")
	    			{
	    				hasHiddenElement = true;
	    			}
	    			if (el.text() == "...")
	    			{
	    				hasEtcSign = true;
	    			}
	    		}
	    		if (hasHiddenElement == true && hasEtcSign == false)
	    		{
	    			return true;
	    		}
	    	}
	    	return false;
	    }
	    
	    this.reset = function()
	    {
	    	for (var i = 0; i < this.els.length; i++)
	    	{
	    		this.els.eq(i).css("display", "inline");
	    	}
	    	$container.find("li").filter(".removable").remove();
	    }
	    
	    this.calculateWidth = function()
	    {
	    	var width = 0;
	    	for (var i = 0; i < $container.find("li").length; i++)
	    	{
	    		width += $container.find("li").eq(i).children("a").eq(0).outerWidth();
	    		width += $container.find("li").eq(i).children("span").eq(0).outerWidth();
	    	}
	    	return width;
	    }
	    
	    this.els = $container.find("li");
	    this.label();
	    this.makeResponsive();
	    
	    var resize_timer;
	    
        $(window).resize(
        	$.proxy(function()
        	{
        		clearTimeout(resize_timer);
        		resize_timer = setTimeout($.proxy(function(){this.makeResponsive()}, this), 100);
        	}, this)
        );
    }
};

/**
 * SmoothScroll
 * This helper script created by DWUser.com.  Copyright 2013 DWUser.com.  
 * Dual-licensed under the GPL and MIT licenses.  
 * All individual scripts remain property of their copyrighters.
 * Date: 10-Sep-2013
 * Version: 1.0.1
 */
if (!window['jQuery']) alert('The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery.');

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * jQuery.LocalScroll
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 05/31/2010
 * @author Ariel Flesler
 * @version 1.2.8b
 **/
;(function(b){function g(a,e,d){var h=e.hash.slice(1),f=document.getElementById(h)||document.getElementsByName(h)[0];if(f){a&&a.preventDefault();var c=b(d.target);if(!(d.lock&&c.is(":animated")||d.onBefore&&!1===d.onBefore(a,f,c))){d.stop&&c._scrollable().stop(!0);if(d.hash){var a=f.id==h?"id":"name",g=b("<a> </a>").attr(a,h).css({position:"absolute",top:b(window).scrollTop(),left:b(window).scrollLeft()});f[a]="";b("body").prepend(g);location=e.hash;g.remove();f[a]=h}c.scrollTo(f,d).trigger("notify.serialScroll",
[f])}}}var i=location.href.replace(/#.*/,""),c=b.localScroll=function(a){b("body").localScroll(a)};c.defaults={duration:1E3,axis:"y",event:"click",stop:!0,target:window,reset:!0};c.hash=function(a){if(location.hash){a=b.extend({},c.defaults,a);a.hash=!1;if(a.reset){var e=a.duration;delete a.duration;b(a.target).scrollTo(0,a);a.duration=e}g(0,location,a)}};b.fn.localScroll=function(a){function e(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==i&&(!a.filter||b(this).is(a.filter))}
a=b.extend({},c.defaults,a);return a.lazy?this.bind(a.event,function(d){var c=b([d.target,d.target.parentNode]).filter(e)[0];c&&g(d,c,a)}):this.find("a,area").filter(e).bind(a.event,function(b){g(b,this,a)}).end().end()}})(jQuery);

// Initialize all .smoothScroll links
jQuery(function($){ $.localScroll({filter:'.smoothScroll'}); });

/* global $ */
/* global TextHighlighter */
/* global ColorPicker */
(function () {

    let idunit = $('body').data('unit');
    let sandbox = document.getElementById('body');
    let marca_tiempo;
    let highlighter = new TextHighlighter(sandbox);
    let textHighlights = localStorage.getItem(idunit);
    highlighter.deserializeHighlights(textHighlights);

    // función para subrayado
    let selector = document.querySelector('.color-picker');
    if (selector) {
        let colors = new ColorPicker(document.querySelector('.color-picker'));
        colors.onColorChange(function (color) {
            highlighter.setColor(color);
        });
    }

    $('div.color-picker>div.selected').html('<hr>');

    // detectamos si pasamos sobre un párrafo subrayado
    $(document).on('mouseover', 'span.highlighted', function () {
        $(this).css('cursor', 'pointer');
    });

    // obtengo el código del trozo subrayado
    $(document).on('click', 'span.highlighted', function () {
        marca_tiempo = $(this).attr('data-timestamp');
    });

    // obtengo el código del trozo subrayado
    $(document).on('keyup', 'span.highlighted', function (e) {
        let key = e.which || e.keyCode;
        if (key == 46) {
            highlighter.removeOneHighlights($(this).attr('data-timestamp'));
            $('.popover').remove();
        }
    });

    // borro el subrayado que selecciono
    $(document).on('click', 'i.fa-trash-alt', function () {

        $('span[data-timestamp=' + marca_tiempo + ']').each(function () {
            highlighter.removeOneHighlights(marca_tiempo);
        });

        let serialized = highlighter.serializeHighlights();
        localStorage.setItem(idunit, serialized);
        $('.popover').remove();
    });

    // borro todo lo subrayado
    $(document).on('click', 'button.deleteAll', function () {
        highlighter.removeHighlights();
        localStorage.removeItem(idunit);
    });

    // The user uploads a file with annotations
    $(document).on('annotations.loaded', function(event, data) {
        if (data["highlights"]) {
            // The file has highlights
            highlighter.removeHighlights();
            localStorage.setItem(idunit, data["highlights"]);
            highlighter.deserializeHighlights(data["highlights"]);
        }
    });
})();
/* global $ */
/* global isMobile */
/* global i18next */
(function () {
    /**
     * Auto-growing textareas; technique ripped from Facebook
     *
     * https://github.com/jaz303/jquery-grab-bag/tree/master/javascripts/jquery.autogrow-textarea.js
     */
    $.fn.autogrow = function (options) {
        return this.filter('textarea').each(function () {
            var self = this;
            var $self = $(self);
            var minHeight = $self.height();
            var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;

            var shadow = $('<div></div>').css({
                position: 'absolute',
                top: -10000,
                left: -10000,
                width: $self.width(),
                fontSize: $self.css('fontSize'),
                fontFamily: $self.css('fontFamily'),
                fontWeight: $self.css('fontWeight'),
                lineHeight: $self.css('lineHeight'),
                resize: 'none',
                'word-wrap': 'break-word'
            }).appendTo(document.body);

            var update = function (event) {
                var times = function (string, number) {
                    for (var i = 0, r = ''; i < number; i++) r += string;
                    return r;
                };

                var val = self.value.replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/&/g, '&amp;')
                    .replace(/\n$/, '<br/>&nbsp;')
                    .replace(/\n/g, '<br/>')
                    .replace(/ {2,}/g, function (space) { return times('&nbsp;', space.length - 1) + ' ' });

                // Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
                if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13) {
                    val += '<br />';
                }

                shadow.css('width', $self.width());
                shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.
                $self.height(Math.max(shadow.height() + noFlickerPad, minHeight));
            }

            $self.change(update).keyup(update).keydown({ event: 'keydown' }, update);
            $(window).resize(update);

            update();
        });
    };

    let onLanguageLoaded = function (err, i18n) {

        var timestamp_note;
        var notes_global = [];
        var notes_back = [];
        var note_removed;
        var note_minimized;
        var note_maximized;
        var offset = 0;
        var noteZindex = 1;
        let idunit = $('body').data('unit');

        function deleteNote() {
            $('.button.remove').parent('.note[data-time=' + note_removed + ']').hide("puff", { percent: 133 }, 250);

            for (var i = 0; i < notes_global.length; i++) {
                notes_global[i].id == note_removed ? notes_global.splice(i, 1) : '';

                if (notes_global.length == 0) {
                    localStorage.removeItem(idunit + '-note');
                } else {
                    localStorage.setItem(idunit + '-note', JSON.stringify(notes_global));
                }
            }
        }

        function minimizeNote() {
            $('.note[data-time=' + note_minimized + ']').children('.button.minimize').removeClass('minimize').addClass('maximize');
            $('.note[data-time=' + note_minimized + ']').children('.button.maximize').html('<i class="far fa-window-maximize"></i>');

            $('.note[data-time=' + note_minimized + ']').css('height', '8.125rem');

            if (isMobile.any()) {
                $('.note[data-time=' + note_maximized + ']').css('width', '18.75rem');
                $('.note textarea.description').css({ 'max-height': '15rem', 'min-height': '15rem' });
                $('.note textarea.title').css({ 'max-height': '4rem', 'min-height': '4rem' });
            } else {
                $('.note textarea.description').css({ 'max-height': '8.75rem', 'min-height': '8.75rem' });
                $('.note textarea.title').css({ 'max-height': '4rem', 'min-height': '4rem' });
            }

            $('.note[data-time=' + note_minimized + ']>.note_cnt>textarea.description').attr('hidden', true);
        }

        function maximizeNote() {
            $('.note[data-time=' + note_maximized + ']').children('.button.maximize').removeClass('maximize').addClass('minimize');
            $('.note[data-time=' + note_maximized + ']').children('.button.minimize').html('<i class="far fa-window-minimize"></i>');

            if (isMobile.any()) {
                $('.note[data-time=' + note_maximized + ']').css({ 'height': '28.75rem', 'max-height': '28.75rem', 'width': '28.75rem' });
                $('.note textarea.description').css({ 'max-height': '15rem', 'min-height': '15rem' });
                $('.note textarea.title').css({ 'max-height': '5rem', 'min-height': '5rem' });
            } else {
                $('.note[data-time=' + note_maximized + ']').css({ 'height': '18.75rem', 'max-height': '18.75rem' });
                $('.note textarea.title').css({ 'max-height': '4rem', 'min-height': '4rem' });
            }

            $('.note[data-time=' + note_maximized + ']>.note_cnt>textarea.description').removeAttr('hidden');
        }

        function getNotes() {
            notes_back = JSON.parse(localStorage.getItem(idunit + '-note'));

            if (notes_back != null) {
                notes_global = notes_back;

                for (var i = 0; i < notes_back.length; i++) {
                    var position = 'calc(' + $(window).scrollTop() + 'px + 25%) 0 300px calc(50% - 100px)';
                    if (notes_back[i].position != '') {
                        position = notes_back[i].position;
                    }

                    var noteTemp = '<div class="note" data-time="' + notes_back[i].id + '" style="position: absolute; inset: ' + position + '; height: 8.125rem;">'
                        + '<a href="javascript:;" class="button maximize"><i class="far fa-window-maximize"></i></a>'
                        + '<a href="javascript:;" class="button remove"><i class="fas fa-times"></i></a>'
                        + '<div class="note_cnt">'
                        + '<textarea class="title" placeholder="' + i18n("EnterNoteTitle") + '">' + notes_back[i].title + '</textarea>'
                        + '<textarea class="description" placeholder="' + i18n("EnterNoteDescription") + '" hidden>' + notes_back[i].description + '</textarea>'
                        + '</div> '
                        + '</div>';

                    $(noteTemp).hide().appendTo("#body").show("fade", 300).draggable().on('dragstart',
                        function () {
                            $(this).zIndex(++noteZindex);
                        }
                    );
                }

                if (isMobile.any()) {
                    $('.button.maximize, .button.minimize, .button.remove').css('font-size', '1rem');
                }
            }
        }

        function newNote() {

            const storeNote = function() {
                note_details.id = timestamp_note;
                note_details.position = $(this).css('inset');
                notes_global.push(note_details);
                localStorage.setItem(idunit + '-note', JSON.stringify(notes_global));
            }

            var note_details = { 'id': '', 'title': '', 'description': '', 'position': '' };
            offset = offset + 10;
            var heightNote;

            if (isMobile.any()) {
                heightNote = '28.75rem';
                $('.note').css('max-height', '28.75rem');
                $('.note textarea.description').css({ 'max-height': '15rem', 'min-height': '15rem' });
                $('.note textarea.title').css({ 'max-height': '5rem', 'min-height': '5rem' });
            } else {
                heightNote = '18.75rem';
                $('.note').css('max-height', '18.75rem');
                $('.note textarea.description').css({ 'max-height': '8.75rem', 'min-height': '8.75rem' });
                $('.note textarea.title').css({ 'max-height': '4rem', 'min-height': '4rem' });
            }

            var noteTemp = '<div class="note" data-time="' + timestamp_note + '" style="height: ' + heightNote + '; width: ' + heightNote + '; position: absolute; left: calc(50% - (100px - ' + offset + 'px)); top: calc(' + $(window).scrollTop() + 'px + 25%)">'
                + '<a href="javascript:;" class="button minimize" style="font-size: 1rem;"><i class="far fa-window-minimize"></i></a>'
                + '<a href="javascript:;" class="button remove" style="font-size: 1rem;"><i class="fas fa-times"></i></a>'
                + '<div class="note_cnt">'
                + '<textarea class="title" placeholder="' + i18n('EnterNoteTitle') + '"></textarea>'
                + '<textarea class="description" placeholder="' + i18n('EnterNoteDescription') + '"></textarea>'
                + '</div> '
                + '</div>';

            $(noteTemp).hide().appendTo("#body").show("fade", 300, storeNote).draggable().on('dragstart',
                function () { $(this).zIndex(++noteZindex); }
            );
            $('textarea').autogrow();
            return false;
        }

        $("#body").height($(document).height());
        getNotes();
        $(document).on('click', '#add_new', function () {
            timestamp_note = Date.now();
            newNote();
        });

        $(document).on('click', '.remove', function () {
            note_removed = $(this).parent().attr('data-time');
            deleteNote();
        });

        $(document).on('click', '.minimize', function () {
            note_minimized = $(this).parent().attr('data-time');
            minimizeNote();
        });

        $(document).on('click', '.maximize', function () {
            note_maximized = $(this).parent().attr('data-time');
            maximizeNote();
        });

        $(document).on('change', '.note>.note_cnt>textarea.title', function () {
            var note_edited = $(this).parent().parent().attr('data-time');
            if (notes_global.length > 0) {
                for (var i = 0; i < notes_global.length; i++) {
                    notes_global[i].id == note_edited ? notes_global[i].title = $(this).val() : '';
                }
            }
            localStorage.setItem(idunit + '-note', JSON.stringify(notes_global));
        });

        $(document).on('change', '.note>.note_cnt>textarea.description', function () {
            var note_edited = $(this).parent().parent().attr('data-time');
            if (notes_global.length > 0) {
                for (var i = 0; i < notes_global.length; i++) {
                    notes_global[i].id == note_edited ? notes_global[i].description = $(this).val() : '';
                }
            }
            localStorage.setItem(idunit + '-note', JSON.stringify(notes_global));
        });

        $(document).on('dragstop', '.note', function () {
            var note_edited = $(this).attr('data-time');
            if (notes_global.length > 0) {
                for (var i = 0; i < notes_global.length; i++) {
                    notes_global[i].id == note_edited ? notes_global[i].position = $(this).css('inset') : '';
                }
            }
            localStorage.setItem(idunit + '-note', JSON.stringify(notes_global));
        });

        // The user uploads a file with annotations
        $(document).on('annotations.loaded', function(event, data) {
            if (data["notes"]) {
                // The file has notes
                localStorage.setItem(idunit + '-note', data["notes"]);
                $('.note').remove();
                getNotes();
            }
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global setObjetivoCompleto */
/* global setObjetivoInteraccion */
/* global amp */
/* global YT */
/* global iavideo */
/* global i18next */
(function () {

	let visualizandoYoutube = function (objPlayer) {
		if (objPlayer.player.getPlayerState() == 1) {
			if (objPlayer.interval != 0) {
				if (Math.abs(objPlayer.player.getCurrentTime() - objPlayer.interval) > 0.5) {

					objPlayer.range.push({ start: objPlayer.player.getCurrentTime(), end: objPlayer.player.getCurrentTime() });
					objPlayer.interval = objPlayer.player.getCurrentTime();
					objPlayer.element = objPlayer.element + 1;
				} else {
					objPlayer.interval = objPlayer.player.getCurrentTime();
					objPlayer.range[objPlayer.element].end = objPlayer.player.getCurrentTime();
				}
			} else {
				objPlayer.range.push({ start: objPlayer.player.getCurrentTime(), end: objPlayer.player.getCurrentTime() });
				objPlayer.interval = objPlayer.player.getCurrentTime();
			}
			setTimeout(visualizandoYoutube, 100, objPlayer);
		}
	}

	let checkPauseYoutube = function (objPlayer, timePause) {
		if (objPlayer.player.getCurrentTime() == timePause) {
			if (objPlayer.range.length != 0) {
				// Only defined in Interoperability units
				if (typeof setObjetivoInteraccion === "function")
					setObjetivoInteraccion(objPlayer.objetivo, objPlayer.titulo, "{ 'video' : [ { 'Type' : 'Range', 'Ranges' : " + JSON.stringify(objPlayer.range).replace(/"/g, "'") + ", 'Duration' : '" + objPlayer.player.getDuration() + "' }]}");
				objPlayer.range = [];
				objPlayer.interval = 0;
				objPlayer.element = 0;
			}
		}
	}

	let sendInteractionYoutube = function (objPlayer) {
		setObjetivoCompleto(objPlayer.objetivo, objPlayer.titulo, objPlayer.description);
		if (objPlayer.range.length != 0) {
			// Only defined in Interoperability units
			if (typeof setObjetivoInteraccion === "function")
				setObjetivoInteraccion(objPlayer.objetivo, objPlayer.titulo, "{ 'video' : [ { 'Type' : 'Range', 'Ranges' : " + JSON.stringify(objPlayer.range).replace(/"/g, "'") + ", 'Duration' : '" + objPlayer.player.getDuration() + "' }]}");
			objPlayer.range = [];
			objPlayer.interval = 0;
			objPlayer.element = 0;
		}
	}

	let visualizandoINDIeMedia = function (objPlayer) {
		if (objPlayer.interval != 0) {
			if (Math.abs(objPlayer.player.currentTime() - objPlayer.interval) > 2.0) {
				objPlayer.range.push({ start: objPlayer.player.currentTime(), end: objPlayer.player.currentTime() });
				objPlayer.interval = objPlayer.player.currentTime();
				objPlayer.element = objPlayer.element + 1;
			} else {
				objPlayer.interval = objPlayer.player.currentTime();
				objPlayer.range[objPlayer.element].end = objPlayer.player.currentTime();
			}
		} else {
			objPlayer.range.push({ start: objPlayer.player.currentTime(), end: objPlayer.player.currentTime() });
			objPlayer.interval = objPlayer.player.currentTime();
		}
	}

	let checkPauseINDIeMedia = function (objPlayer, timePause) {
		if (objPlayer.player.currentTime() == timePause) {
			if (objPlayer.range.length != 0) {
				// Only defined in Interoperability units
				if (typeof setObjetivoInteraccion === "function")
					setObjetivoInteraccion(objPlayer.objetivo, objPlayer.titulo, "{ 'video' : [ { 'Type' : 'Range', 'Ranges' : " + JSON.stringify(objPlayer.range).replace(/"/g, "'") + ", 'Duration' : '" + objPlayer.player.duration() + "' }]}");
				objPlayer.range = [];
				objPlayer.interval = 0;
				objPlayer.element = 0;
			}
		}
	}

	let sendInteractionINDIeMedia = function (objPlayer) {
		if (objPlayer.range.length != 0) {
			// Only defined in Interoperability units
			if (typeof setObjetivoInteraccion === "function")
				setObjetivoInteraccion(objPlayer.objetivo, objPlayer.titulo, "{ 'video' : [ { 'Type' : 'Range', 'Ranges' : " + JSON.stringify(objPlayer.range).replace(/"/g, "'") + ", 'Duration' : '" + objPlayer.player.duration() + "' }]}");
			objPlayer.range = [];
			objPlayer.interval = 0;
			objPlayer.element = 0;
		}
		setObjetivoCompleto(objPlayer.objetivo, objPlayer.titulo, objPlayer.description);
	}

	let onYouTubePlayerStateChange = function (player, event) {
		let id = $(this).attr('id');
		let title = $(this).data('title');
		if (player.player.showCaptions && player.player.getOptions('captions').length) {
			player.player.setOption('captions', 'reload', true);
			player.player.showCaptions = false;
		}
		switch (event.data) {
			case 0:
				if ($(this).hasClass('open'))
					setObjetivoCompleto("objetivo" + id, "Video" + id + "/" + title, "Video" + id);
				else
					sendInteractionYoutube(player);
				break;
			case 1:
				$(this).hasClass('interoperability') && visualizandoYoutube(player);
				break;
			case 2:
				$(this).hasClass('interoperability') && setTimeout(checkPauseYoutube, 1000, player, player.player.getCurrentTime());
				break;
		}
	}


	let maximize = function () {
		let $container = $(this).closest('.content-element');
		let $element = $container.find('.element-video');
		$element.addClass('maximized');
		// Tune azure media player padding to fit the screen
		let $azure = $element.find('.azuremediaplayer');
		if ($azure.length) {
			// Padding for the media player to fit the screen
			let padding = parseFloat($azure.css('padding-top'));
			let height = $azure.parent().height();
			if (height < padding)
				$azure.css('padding-top', height);
		}
	}

	let minimize = function () {
		$('.element-video').removeClass('maximized');
		// Remove custom padding to fit the whole screen
		$(this).closest('.element-video').find('.azuremediaplayer').css('padding-top', '');
		$(this).closest('.content-element').find('.speech-to-action').focus();
	}

	let onLanguageLoaded = function (err, i18n) {

		let makeAlert = function (type, message) {

			let $dismissButton = $('<button />')
				.data('dismiss', 'alert')
				.attr('type', 'button')
				.attr('aria-hidden', 'false')
				.attr('aria-label', i18n('Close')) //
				.addClass('close')
				.html(' <span aria-hidden="true">&times;</span>');

			let $alert = $("<div />")
				.addClass('alert alert-dismissible fade show ' + type)
				.html(message)
				.append($dismissButton);

			$dismissButton.on('click', function () { $alert.alert('close') });
			let time = Math.max(6000, message.length * 60);
			setTimeout(function () { $alert.alert('close') }, time);
			$alert.alert();
			return $alert;
		};

		let onSpeechToAction = function (player, event, action, entities) {

			if (action === "FINISH" || action === "START") {
				$('.element-video').removeClass('maximized');
				return;
			}

			if (action === "PLAY") player.play();
			else if (action === "STOP") player.stop();
			else if (action === "PAUSE") player.pause();
			else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.8);
			else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.8);
			else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
			else if (action === "MAXIMIZE") maximize.apply(this);
			else if (action === "MINIMIZE") minimize.apply(this);
			else if (action === "REPEAT")
				$(this).closest('.widget-video').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-video')));
			else
				$(this).closest('.widget-video').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
		};

		let processVideo = function () {
			let id = $(this).attr('id');
			let videoId = $(this).data('video-id');
			let title = $(this).data('title');
			let defaultCaptions = $(this).data('default-captions') == 1;

			let player = {
				objetivo: "objetivo" + id,
				titulo: title,
				descripcion: "Video" + id + "/" + title,
				interval: 0,
				range: [],
				element: 0
			}

			if ($(this).hasClass('youtube')) {
				let self = this;
				let partvideo = videoId.split('/embed/')[1];
				let part1 = partvideo.split('?')[0];
				let part2 = partvideo.split('?')[1].split('=')[1];
				player.player = new YT.Player('player-' + id, {
					playerVars: { start: part2 },
					height: 'auto',
					width: '100%',
					videoId: part1,
					events: {
						'onReady': function () {
							player.player.play = player.player.playVideo
							player.player.stop = player.player.stopVideo
							player.player.pause = player.player.pauseVideo
							player.player.showCaptions = defaultCaptions;
							$('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction.bind(self, player.player));
						},
						'onStateChange': onYouTubePlayerStateChange.bind(this, player)
					}
				});
			}
			else if ($(this).hasClass('indiemedia-normal')) {
				let self = this;
				let $video = $(this).find('video');
				player.player = amp("player-" + id,
					{
					"customPlayerSettings": { "customHeuristicSettings": { "windowSizeHeuristics": false } },
					"fluid": true,
					"nativeControlsForTouch": false,
					"techOrder": ["azureHtml5JS", "flashSS", "html5FairPlayHLS", "silverlightSS", "html5"],
					"logo": { "enabled": false },
					"cea708CaptionsSettings": {"enabled": true}
				})
			// Captions should be disabled by default, while descriptions should be enabled. Otherwise, descriptions won't work
			let captions = $video.data('captions') ? [{src: $video.data('captions'), srclang: $video.data('country'), kind: 'captions', label: $video.data('language'), default: false }] : [];
			let descriptions = $video.data('descriptions') ? [{src: $video.data('descriptions'), srclang: $video.data('country'), kind: 'descriptions', label: $video.data('language'), default: true }] : [];
			player.player.src([{
				src: $video.data('src'),
				type: $video.data('stype')}],
				[...captions, ...descriptions]);

			player.player.addEventListener(amp.eventName.loadstart, function () {
				if (defaultCaptions) {
					// Enable captions by default
					let tracks = player.player.textTracks();
					for (let i = 0; i < tracks.length; i++) {
						let track = tracks[i];
						if (track.kind === 'captions')
							player.player.setActiveTextTrack(track);
					}
				}
				// Set aria-live for text tracks to "off" to prevent the screen-reader from reading the captions, we will handle descriptions on our own
				$(self).find('.vjs-text-track-display').attr('aria-live', 'off');
			});
			
			if (captions.length || descriptions.length) {
				let tracks = player.player.textTracks();
				// If there are text tracks defined we set their visibility based on their "kind"
				// Descriptions = hidden
				// Captions = visible
				tracks.onchange = function() {
					let currentTrack = player.player.getCurrentTextTrack();
					currentTrack && $(self).find('.vjs-text-track-display').toggleClass('d-none', currentTrack.kind === 'descriptions');
				}
				if (descriptions.length)
				{
					// Descriptions will be written into an special div to be read by screen readers.
					for (let i = 0; i < tracks.length; i++) {
						let track = tracks[i];
						if (track.kind === "descriptions") {
							track.oncuechange = function() {
								let cues = this.activeCues;
								if (cues.length > 0){
									let content = "";
									for (let i = 0; i < cues.length; i++)
										content += cues[i].text + ' '
									$(self).find('.screen-reader-description').empty().text(content);
									// Give enough time for the screen reader to notice the change in text content = 200ms
									setTimeout(function() { $(self).find('.screen-reader-description').empty(); }, 200)
								}
							};
						}
					}
				}
			}

			player.player.stop = function () {
				this.pause();
				this.currentTime(0);
			}
			$('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction.bind(this, player.player));
			if ($(this).hasClass('open')) {
				player.player.addEventListener(amp.eventName.ended,
					function () { setObjetivoCompleto("objetivo" + id, "Video" + id + "/" + title, "Video" + id); });
			}
			else ($(this).hasClass('interoperability'))
			{
				player.player.addEventListener(amp.eventName.ended, function () { sendInteractionINDIeMedia(player); });
				player.player.addEventListener(amp.eventName.pause, function () { setTimeout(checkPauseINDIeMedia, 1000, player, player.player.currentTime()); });
				player.player.addEventListener(amp.eventName.timeupdate, function () { visualizandoINDIeMedia(player); });
			}
		} else if ($(this).hasClass('indiemedia-interactive')) {
			let video = iavideo({
				selector: "#player-" + id,
				externalSource: videoId,
				onError: function (e) { console.log(e); },
				onReady: function () {
					player.player = video.instance();
					player.player.addEventListener(amp.eventName.play,
						function () { setObjetivoCompleto("objetivo" + id, title, "Video" + id); });
					}
				});
				video.instance.stop = function () {
					this.pause();
					this.currentTime(0);
				}
				$('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction.bind(this, video.instance));
			}
		}

		let handleIntersect = function (entries, observer) {
			entries.filter(entry => entry.isIntersecting).forEach(entry => {
				if ($(entry.target).data('initialized'))
					return;
				$(entry.target).data('initialized', true);
				processVideo.apply(entry.target);
			})
		}


		if ($('.element-video.youtube').length) {
			// Load the IFrame Player API 
			let tag = document.createElement('script');
			tag.src = "https://www.youtube.com/iframe_api";
			let firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		}

		if (!('IntersectionObserver' in window)) {
			$('.element-video').not('.youtube').each(processVideo);
			window.onYouTubeIframeAPIReady = function () {
				$('.element-video.youtube').each(processVideo)
			}
		}
		else {
			let options = {
				root: null,
				rootMargin: "200px",
			};

			let observer = new IntersectionObserver(handleIntersect, options);
			$('.element-video').not('.youtube').each(function () { observer.observe(this); });
			window.onYouTubeIframeAPIReady = function () {
				$('.element-video.youtube').each(function () { observer.observe(this); })
			}
		}
	}

	// Exit from maximized mode if escape key is pressed
	$(document).on('keyup', 'body', function (evt) {
		if (evt.keyCode == 27) {
			$('.element-video.maximized').each(function () { minimize.apply(this) });
		}
	});
	// Exit from maximized mode if minimize button is pressed
	$(document).on('click', '.btn-video-minimize', minimize);



	let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
		.then(response => response.json())
		.then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global setObjetivoCompleto */
/* global i18next */
(function () {

    let gamification = $('body').hasClass('gamification');

    // https://stackoverflow.com/a/30106551
    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    // https://stackoverflow.com/a/12646864
    let shuffleArray = function array(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let moveTo = function (e, $items, position) {
        $items.attr('tabindex', -1)
        $items.eq(position).attr('tabindex', 0).focus();
    }

    let moveBack = function (e, $items) {
        e.preventDefault();
        e.stopPropagation();
        let position = $items.index($(this));
        let nextPos = (position - 1) % $items.length;
        moveTo.apply(this, [e, $items, nextPos]);
    }

    let moveForward = function (e, $items) {
        e.preventDefault();
        e.stopPropagation();
        let position = $items.index($(this));
        let nextPos = (position + 1) % $items.length;
        moveTo.apply(this, [e, $items, nextPos]);
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        let resetCouples = function (e) {
            resetGamificationCouples.apply(this, [e]);
            let $couples = $(this).closest('.widget-couples');
            $couples.find('.couple').removeClass('correcto')
			$couples.find('.couple-button').attr('aria-disabled', false);
            $couples.find('.couple-feedback').removeAttr('aria-label').empty();
            $couples.find('.resultado-couples').removeClass('rojo verde mt-5 mb-0').empty();
        }

        let checkCouple = function (e) {
            if ($(this).hasClass('correcto'))
                return;
            let selected = $(this).hasClass('activo');
            let $couples = $(this).closest('.couples');
            let $resultado = $(this).closest('.widget-couples').find('.resultado-couples');
            let $last = $couples.find('.couple.activo').not($(this)).first();
            $(this).toggleClass('activo', !selected);
            $(this).find('.couple-state').html(!selected ? i18n("couples-state-selected") : "")

            if ($last.length) {
                let $both = $(this).add($last)
                let counter = Math.floor($couples.find('.couple.matched').length / 2) + 1;

                $both.removeClass('activo');
                if ($(this).data('position') === $last.data('position')) {
                    $both.addClass('correcto matched').data('tag', counter);
                    $both.find('.couple-tag').html(counter);
                    $both.find('.couple-feedback').attr('aria-label', i18n('CorrectPair')).html('<i class="fa fa-check" aria-hidden="true"></i>');
                    $(this).find('.couple-state').html(i18n("couples-state-matched", { "option": $last.find('.couple-prefix').text() }))
                    $last.find('.couple-state').html(i18n("couples-state-matched", { "option": $(this).find('.couple-prefix').text() }))
                    $resultado.removeClass('rojo').addClass('verde mt-5 mb-0');
                    $resultado.html("");
					$both.find('.couple-button').attr('aria-disabled', true);
                    setTimeout(function () { $resultado.html('<span aria-hidden="true">' + i18n('CorrectPair')) + '</span>'; }, 100);
                }
                else {
                    $both.addClass('fallo');
                    $resultado.removeClass('verde').addClass('rojo mt-5 mb-0');
                    setTimeout(function () { $('.fallo').removeClass('fallo'); }, 500);
                    $resultado.html("");
                    setTimeout(function () { $resultado.html(i18n('WrongPair')); }, 100);
                    $both.find('.couple-state').html("")
                }
            }
            if ($couples.find('.correcto').length == $couples.find('.couple').length) {
                $resultado.removeClass('rojo').addClass('verde mt-5 mb-0');
                $resultado.html("");
                setTimeout(function () { $resultado.html(i18n('AllPairsCorrect')); }, 100);
                let widgetId = $couples.attr('id');
                setObjetivoCompleto('objetivo' + widgetId, $couples.data('desc'), $couples.data('desc'));
            }
        }

        let checkGamificationCouple = function (e) {

            $(this).find('.couple-state').html(!$(this).hasClass('activo') ? i18n("couples-state-selected") : "")

            if ($(this).hasClass('activo')) {
                $(this).removeClass('activo');
                return;
            }

            if (!$(this).hasClass('matched')) {
                let $couples = $(this).closest('.couples');
                let $last = $couples.find('.couple.activo').not($(this)).first();
                $(this).toggleClass('activo', true);

                if ($last.length) {
                    let counter = Math.floor($couples.find('.couple.matched').length / 2) + 1;
                    let $both = $(this).add($last)
                    $both.find('.couple-tag').html(counter);
                    $both.removeClass('activo').addClass('matched').data('tag', counter);
					$both.find('.couple-button').attr('aria-disabled', true);
                    $(this).find('.couple-state').html(i18n("couples-state-matched", { "option": $last.find('.couple-prefix').text() }))
                    $last.find('.couple-state').html(i18n("couples-state-matched", { "option": $(this).find('.couple-prefix').text() }))
                }
            }
        }

        let resetGamificationCouples = function (e) {
            let $couples = $(this).closest('.widget-couples');
            $couples.find('.couple').removeClass('matched activo').data('tag', '');
			$couples.find('.couple-button').attr('aria-disabled', false);
            $couples.find('.couple-state').empty();
        }

        let checkGamificationCouples = function (e) {
            let $couples = $(this).closest('.widget-couples');
            let totalCouples = $couples.find('.couple').length
            let score = 0;
            for (let i = 1; i <= totalCouples / 2; i++) {
                let $pair = $couples.find('.couple').filter(function () { return $(this).data('tag') == i });
                if ($pair.length == 2 && $pair.first().data('position') === $pair.last().data('position'))
                    score++;
            }

            score = score / (totalCouples / 2);
            let correct = score == 1;
            $couples.find('.couple').removeClass('matched');
            $(this).trigger('gamificate', [correct, score]);
        }


        let handleOptionKeydown = function (e, $items) {
            let key = e.which || e.keyCode;
            // Enter, space, tab, up arrow or down arrow
            if (key === 13 || key === 32 || key === 38 || key === 40 || key === 27) {
                if (key === 13 || key === 32) {
                    e.preventDefault();
                    e.stopPropagation();
                    let $couple = $(this).closest('.couple')
                    gamification ? checkGamificationCouple.apply($couple, [e]) : checkCouple.apply($couple, [e]);
                }
                else if (key === 38)
                    moveBack.apply(this, [e, $items]);
                else if (key === 40)
                    moveForward.apply(this, [e, $items])
                else if (key === 27)
                    $(this).blur();
            }
        };


        $('.couples').each(function () {
            let widgetId = $(this).attr('id');
            let count = 0;
            let couples = JSON.parse(b64DecodeUnicode($(this).data('content')));
            let self = this;
            $(this).data('content', '');
            $(this).closest('.container').attr('tabindex', "-1");

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH")
                    return;

                let $buttons = $(self).find('.couple').find('.couple-button');
                let $selected = $buttons.filter(function () { return $(this).is(':focus') }).first()
                if (!$selected.length) {
                    $selected = $buttons.eq(0);
                    $buttons.attr('tabindex', -1)
                    $selected.attr('tabindex', 0).focus();
                }

                if (action === "START" || action === "CURRENT")
                    return;
                else if (action === "NEXT")
                    moveForward.apply($selected[0], [event, $buttons]);
                else if (action === "PREVIOUS")
                    moveBack.apply($selected[0], [event, $buttons]);
                else if (action === "GOTO") {
                    let nextPos = (parseInt(entities['target-position']) - 1) % $buttons.length;
                    moveTo.apply($selected[0], [event, $buttons, nextPos]);
                }
                else if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else {
                    switch (action) {
                        case "SELECT": $selected.trigger('click'); break;
                        case "REPEAT": $(self).closest('.widget-couples').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-couples'))); break;
                        case "CHECK": $(self).closest('.widget-couples').find('.btn-check').trigger('click'); break;
                        case "RESET": $(self).closest('.widget-couples').find('.btn-reset').trigger('click'); break;
                        case "NONE":
                        default:
                            $(self).closest('.widget-couples').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }
            };

            $('#speech-to-action-' + widgetId).on('speech-to-action', onSpeechToAction);
            couples.forEach(couple => couple.id = count++);
            shuffleArray(couples);
            let items = couples.map((couple, idx) => {
                let $button = $("<div />")
					.addClass('couple-button')
                    .attr('id', 'couple-button-' + widgetId + '-' + (idx + 1))
                    .attr('tabindex', idx == 0 ? "0" : "-1")
					.attr('role', 'button')
                    .attr('aria-labelledby', widgetId + "-prefix-" + idx + " " + widgetId + "-option-" + idx + " " + widgetId + "-state-" + idx)
                if (couple.type == "img") {
                    $button.addClass('p-0').append(
                        $("<img />").attr('id', widgetId + "-option-" + idx).addClass("img-responsive w-100 h-100").attr('src', couple.src).attr('alt', couple.alt));
                }
                else {
                    $button.toggleClass('has-code', $.parseHTML(couple.content)[0].nodeType !== 3 && ($(couple.content).is('code') || $(couple.content).find('code').length > 0));
                    $button.html($("<div />").attr('id', widgetId + "-option-" + idx).html(couple.content));
                }

                let $state = $("<span />").addClass('couple-state sr-only').attr('id', widgetId + "-state-" + idx).html("")
                let $prefix = $("<span />").addClass('couple-prefix sr-only').attr('id', widgetId + "-prefix-" + idx).html(i18n("accessibility-option") + " " + (idx + 1) + " " + i18n(couple.type === "img" ? "common-image" : "common-text"))
                $button.append($prefix, $state);
                let $tag = $("<div />").addClass('couple-tag');
                return $("<div />")
                    .addClass("col-xs-12 col-sm-6 col-md-3 pb-3 couple")
                    .data('position', Math.floor(couple.id / 2))
                    .append($button, $tag);
            });
            $(this).append(items);
            let $buttons = $(this).find('.couple').find('.couple-button');
            $buttons.each(function () {
                $(this).on('keydown', function (e) { handleOptionKeydown.apply(this, [e, $buttons]) })
            });

            if (!gamification) {
                // Add the feedback to each couple
                $(this).find('.couple').each(function (idx) {
                    let idFeedback = 'couple-feedback-' + widgetId + '-' + idx;
                    $(this).append($('<div />').attr('id', idFeedback).addClass('couple-feedback'));
                    let $btn = $(this).find('.couple-button');
                    $btn.attr('aria-labelledby', $btn.attr('aria-labelledby') + ' ' + idFeedback);
                })
                $(this).on('click', '.couple', checkCouple);
                $(this).closest('.widget-couples').on('click', '.btn-reset', resetCouples);
            }
            else {
                $(this).on('click', '.couple', checkGamificationCouple);
                $(this).closest('.widget-couples').on('click', '.btn-reset', resetGamificationCouples);
                $(this).closest('.widget-couples').on('click', '.btn-check', checkGamificationCouples);
            }
        })

    }

    let scriptPath = document.currentScript.src
    scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
    $(document).ready(function () {
        let currLang = $('html').attr('lang');
        fetch(`${scriptPath}/../languages/${currLang}.json`)
            .then(response => response.json())
            .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
    });
})();
/* global $ */
/* global setObjetivoCompleto */
/* global i18next */
(function () {

    let onLanguageLoaded = function (err, i18n) {

        $('.container-test').each(function () {
            let self = this;
            let id = $(self).attr('id');
            let $questions = $(this).find('.question');
            let $radios = $(self).find('input[type=radio]');

            let makeAlert = function (type, message) {

                let $dismissButton = $('<button />')
                    .data('dismiss', 'alert')
                    .attr('type', 'button')
                    .attr('aria-hidden', 'false')
                    .attr('aria-label', i18n('Close')) //
                    .addClass('close')
                    .html(' <span aria-hidden="true">&times;</span>');

                let $alert = $("<div />")
                    .addClass('alert alert-dismissible fade show ' + type)
                    .html(message)
                    .append($dismissButton);

                $dismissButton.on('click', function () { $alert.alert('close') });
                let time = Math.max(6000, message.length * 60);
                setTimeout(function () { $alert.alert('close') }, time);
                $alert.alert();
                return $alert;
            };

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH")
                    return;

                let $checkAnswerBtn = $(self).find('.btn-check')
                let $selected = $radios.filter(function () { return $(this).is(':focus') }).first()
                if (!$selected.length) {
                    $selected = $radios.eq(0);
                    $selected.focus();
                }

                if (action === "START" || action === "CURRENT")
                    return;
                else if (action === "NEXT" || action === "PREVIOUS") {
                    let position = $radios.index($selected);
                    let nextPos = action === "NEXT" ? ((position + 1) % $radios.length) : ((position - 1) % $radios.length);
                    $radios.eq(nextPos).focus();
                }
                else if (action === "GOTO") {
                    let nextPos = (parseInt(entities['target-position']) - 1) % $questions.length;
                    $questions.eq(nextPos).find('input[type=radio]').first().focus();
                }
                else if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else {

                    switch (action) {
                        case "SELECT": $selected.trigger('click'); break;
                        case "REPEAT": $(self).find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-containertest'))); break;
                        case "CHECK": $checkAnswerBtn.trigger('click'); break;
                        case "NONE":
                        default:
                            $(self).find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }
            };
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        });

        $('.container-test').on('click', '.btn-reset', function (e) {
            let $widget = $(this).closest('.container-test');
            $widget.find('.positiveFeedback, .negativeFeedback').addClass('hidden');
            $widget.find('.resultado').empty();
            $widget.find('input:radio:checked')
                .prop('checked', false)
                .removeAttr('aria-describedby');
            $widget.find('.option').removeClass('verdetest w-100')
                .removeClass('rojotest w-100');
        })

        $('.container-test').on('click', '.btn-check', function (e) {
            let gamification = $('body').hasClass('gamification');
            let $widget = $(this).closest('.container-test');
            let id = $widget.attr('id');
            let numQuestions = $widget.find('.question').length;
            let $answers = $widget.find('input:radio:checked');
            let $correctAnswers = $answers.filter(function () { return $(this).val() === "true" });
            $(this).trigger('gamificate', [numQuestions === $correctAnswers.length, $correctAnswers.length / numQuestions]);
            if (!gamification) {
                $answers.each(function () {
                    $(this).closest('.option').addClass($(this).val() === "true" ? 'verdetest w-100' : 'rojotest w-100');
                    $(this).attr('aria-describedby', ($(this).val() === "true" ? 'positiveFeedback-' : 'negativeFeedback-') + $(this).attr('name'));
                    let $answerfeedback = $(this).closest('.question').find($(this).val() === "true" ? '.positiveFeedback' : '.negativeFeedback');
                    if ($answerfeedback.is(':not(:empty)')) {
                        $answerfeedback.removeClass('hidden');
                    }
                    $(this).closest('.question').find($(this).val() === "true" ? '.negativeFeedback' : '.positiveFeedback').addClass('hidden');
                });
                $widget.find('.question').each(function () {
                    if ($(this).find('.positiveFeedback').hasClass('hidden')) {
                        let $answerfeedbacknegative = $(this).find('.negativeFeedback');
                        if ($answerfeedbacknegative.is(':not(:empty)')) {
                            $answerfeedbacknegative.removeClass('hidden');
                        }
                    }
                });
                $widget.find('.resultado').html(i18n("TextNumberCorrect", { num: $correctAnswers.length }));
                if (numQuestions === $correctAnswers.length) {
                    setObjetivoCompleto(`objetivo${id}`, "«widget.name»", "«widget.name»");
                }
            }
        });

        $('.container-test input[type=radio]').on('change', function (e) {
            let $question = $(this).closest('fieldset');
            $question.find('.verdetest').toggleClass('verdetest w-100');
            $question.find('.rojotest').toggleClass('rojotest w-100');
            $question.find('[aria-describedby]').removeAttr('aria-describedby');
            $question.find('.positiveFeedback').addClass('hidden');
            $question.find('.negativeFeedback').addClass('hidden');
        });
    }

    let scriptPath = document.currentScript.src
    scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
    $(document).ready(function () {

        let currLang = $('html').attr('lang');
        fetch(`${scriptPath}/../languages/${currLang}.json`)
            .then(response => response.json())
            .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
    });
})();
/* global $ */
/* global setObjetivoCompleto */
/* global i18next */

(function () {

    // https://stackoverflow.com/a/30106551
    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        $('.widget-truefalse').each(function () {
            let self = this;
            let id = $(self).attr('id');

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH")
                    return;

                let $checks = $(self).find('input[type=checkbox]');
                let $checkAnswerBtn = $(self).find('.boton_truefalse')
                let $selected = $checks.filter(function () { return $(this).is(':focus') }).first()
                if (!$selected.length) {
                    $selected = $checks.eq(0);
                    $selected.focus();
                }
                if (action === "START" || action === "CURRENT")
                    return;
                else if (action === "NEXT" || action === "PREVIOUS") {
                    let position = $checks.index($selected);
                    let nextPos = action === "NEXT" ? ((position + 1) % $checks.length) : ((position - 1) % $checks.length);
                    $checks.eq(nextPos).focus();
                }
                else if (action === "GOTO") {
                    $checks.eq((parseInt(entities['target-position']) - 1) % $checks.length).focus();
                }
                else if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else {
                    switch (action) {
                        case "SELECT": $selected.trigger('click'); break;
                        case "REPEAT": $(self).find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-truefalse'))); break;
                        case "CHECK": $checkAnswerBtn.trigger('click'); break;
                        case "NONE":
                        default:
                            $(self).find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }

            };
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        });



        $('.widget-truefalse').on('change', 'input:checkbox', function () {
            let $question = $(this).closest('.question');
            let newState = $(this).prop('checked');
            $question.find('.iconresult').attr('aria-label', '').empty();
            $question.find('.custom-control-label')
                .toggleClass('TFfalse-color', !newState)
                .toggleClass('TFtrue-color', newState)
                .html(newState ? i18n('TextTrue') : i18n('TextFalse'));
            $question.find('.positiveFeedback').addClass("hidden");
            $question.find('.negativeFeedback').addClass("hidden");
        });

        $('.widget-truefalse').on('click', '.btn-reset', function () {
            let $widget = $(this).closest('.widget-truefalse');
            $widget.find('.negativeFeedback, .positiveFeedback').addClass('hidden');
            $widget.find('.iconresult').removeAttr('aria-label').empty();
            $widget.find('.resultado_truefalse').empty();
            $widget.find('input:checkbox')
                .prop('checked', false)
                .removeAttr('aria-describedby');
            $widget.find('.custom-control-label').addClass('TFfalse-color').removeClass('TFtrue-color').html(i18n('TextFalse'));
        });

        $('.boton_truefalse').click(function () {
            var gamification = $('body').hasClass('gamification');
            let $widget = $(this).closest('.widget-truefalse');
            let id = $widget.attr('id');
            let solutions = JSON.parse(b64DecodeUnicode($widget.data('content')));
            let numCorrectAnswers = $widget.find('input:checkbox').filter(function (idx) {
                return solutions[idx] == $(this).prop('checked')
            }).length;
            $(this).trigger('gamificate', [numCorrectAnswers == solutions.length, numCorrectAnswers / solutions.length]);
            if (!gamification) {
                $widget.find('input:checkbox').each(function (idx) {
                    let $question = $(this).closest('.question');
                    if (solutions[idx] == $(this).prop('checked')) {
                        $(this).attr('aria-describedby', 'positiveFeedback-' + $(this).attr('name'))
                        $question.find('.iconresult')
                            .attr('aria-label', i18n('TextCorrectAnswer'))
                            .html('<i class="fas fa-2x fa-check"></i>');
                        let $answerpositivefeedback = $question.find('.positiveFeedback');
                        if ($answerpositivefeedback.is(':not(:empty)')) {
                            $answerpositivefeedback.removeClass("hidden");
                        }
                        $question.find('.negativeFeedback').addClass("hidden");
                    } else {
                        $(this).attr('aria-describedby', 'negativeFeedback-' + $(this).attr('name'))
                        $question.find('.iconresult')
                            .attr('aria-label', i18n('TextIncorrectAnswer'))
                            .html('<i class="fas fa-2x fa-times"></i>');
                        $question.find('.positiveFeedback').addClass("hidden");
                        let $answernegativefeedback = $question.find('.negativeFeedback');
                        if ($answernegativefeedback.is(':not(:empty)')) {
                            $answernegativefeedback.removeClass("hidden");
                        }
                    }
                })
                if (numCorrectAnswers == solutions.length)
                    setObjetivoCompleto("objetivo" + id, $widget.data('desc'), $widget.data('desc'));

                $widget.find('.resultado_truefalse').html('<div class="result-truefalse">' + numCorrectAnswers + ' ' + i18n('TextCorrectAnswers') + '</div>');
            }

        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */
(function () {

    let onLanguageLoaded = function (err, i18n) {
        let play = function () {
            let $self = $(this);
            let $img = $self.find('img');
            let $audio = $('#' + $img.attr('data-sound'));
            let $state = $self.parent().find('.image-sound-state');
            let text = $img.attr('data-text');
            $self.find('.fa').removeClass('fa-play').addClass('fa-pause')
            $audio.trigger('play');
            text && $('#' + text).addClass("ImageSoundTransicionActive")
            $state.text(i18n("audio-pause"));
            $self.data('playing', true);
        }

        let pause = function () {
            let $self = $(this);
            let $img = $self.find('img')
            let $audio = $('#' + $img.attr('data-sound'))
            let $state = $self.parent().find('.image-sound-state');
            let text = $img.attr('data-text');
            $self.find('.fa').removeClass('fa-pause').addClass('fa-play')
            $audio.trigger('pause');
            text && $('#' + text).removeClass("ImageSoundTransicionActive");
            $state.text(i18n("audio-play"));
            $self.data('playing', false);
        }

        let stop = function () {
            pause.apply(this);
            let $img = $(this).find('img')
            let $audio = $('#' + $img.attr('data-sound'));
            $audio[0].currentTime = 0;
			// Remove captions
			$(this).find('.image-sound-term-content').empty();
        }

		let pauseAll = function() {
			$(this).find('.image-sound-term').each(function() { pause.apply(this) });
		}

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        let onSpeechToAction = function (event, action, entities) {

            if (action === "FINISH")
                return;

            let $btns = $(this).find('.image-sound-term');
            let $selected = $btns.filter(function () { return $(this).is(':focus') }).first()
            if (!$selected.length) {
                $selected = $btns.eq(0);
                $selected.focus();
            }

            if (action === "START" || action === "CURRENT")
                return;
            else if (action === "NEXT" || action === "PREVIOUS") {
                let position = $btns.index($selected);
                let nextPos = action === "NEXT" ? ((position + 1) % $btns.length) : ((position - 1) % $btns.length);
                $btns.eq(nextPos).focus();
            }
            else if (action === "GOTO") {
                $btns.eq((parseInt(entities['target-position']) - 1) % $btns.length).focus();
            }
            else if (action === "PLAY") play.apply($selected[0]);
            else if (action === "STOP") stop.apply($selected[0]);
            else if (action === "PAUSE") pause.apply($selected[0]);
            else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
            else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
            else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
            else if (action === "REPEAT")
                $(this).closest('.widget-image-sound').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-imagesound')));
            else
                $(this).closest('.widget-image-sound').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
        };

        $('.widget-image-sound').each(function () {

			let $widget = $(this);
            let id = $widget.attr('id');
            let total = $widget.find('.image-sound-term').length
            let count = 0;
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction.bind(this));

            $widget.find('.image-sound-term').each(function () {
                let $self = $(this);
                let desc = $self.attr('data-desc');
                let $state = $self.parent().find('.image-sound-state')
                let $img = $self.find('img')
                let $audio = $('#' + $img.attr('data-sound'))
                let myStop = stop.bind(this);
                let myPlay = (function () {
                    count++;
                    count == total && setObjetivoCompleto("objetivo" + id, desc, desc);
                    myPlay = play.bind($self[0]);
                    myPlay();
                });
                let myPause = pause.bind(this);
                $state.text(i18n("audio-play"))
                $audio.on('ended', myStop);
                $(this).on('click', function () {
                    let playing = ($self.data('playing') || "false") !== "false";
					pauseAll.apply($widget[0]);
					playing ? myPause() : myPlay();
                });
                let $texTracks = $audio.get(0).textTracks[0];
                if ($texTracks!==undefined){
                    $texTracks.oncuechange = function(){
                        var cues = $(this)[0].activeCues;
                        if (cues.length > 0){
                            let content = "";
                            for (let i = 0; i < cues.length; i++)
                            {
                                content += cues[i].text + '<br><br>'
                            }
                            $self.parent().find('.image-sound-term-content').html(content.replace(/\n/g, '<br>'));	
                        }
                    };
                }
            });
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
/* global annyang */
(function () {

    if (typeof annyang !== 'undefined' && annyang) {

        let stack = [];
        let initialized = false;
        let currLang = $('html').attr('lang');
        let currentTarget = null;
        let sendCommand = function (action, entities) {
            let event = $.Event("speech-to-action");
            $(this).trigger(event, [action, entities]);
            return event;
        }

        let highlightContentElement = function () {
            $('.speech-focused').removeClass('speech-focused');
            $(this).addClass('speech-focused');
            $(this).closest('.content-element').addClass('speech-focused');
        }

        let switchVoiceButtonsState = function (state, isGlobal) {

            highlightContentElement.apply(this);
            $(this).toggleClass('active', state).attr('aria-pressed', state);
            let $icon = $(this).find('i');
            if (isGlobal) {
                $icon
                    .toggleClass('fa-microphone-slash', !state)
                    .toggleClass('fa-microphone', state)

                // Enable & show all voice-control widgets
                $('.speech-to-action').not(this).each(function () {
                    $(this)
                        .toggleClass('show', state)
                        .attr('aria-pressed', false)
                        .attr('aria-disabled', false)
                        .removeClass('active disabled')
                        .prop('disabled', false);

                    $(this).find('i').removeClass('fa-head-side-cough')
                        .addClass('fa-head-side-cough-slash')
                });
                // Disable voice control over tabs and accordion regions
                let $children = $(".tab-pane").add($(".accordion-region")).find('.speech-to-action');
                $children.attr('aria-disabled', true).prop("disabled", true).addClass('disabled');
            }
            else {
                $icon
                    .toggleClass('fa-head-side-cough', state)
                    .toggleClass('fa-head-side-cough-slash', !state)

                // Get the grandparent of the current element
                let $myContainer = $(this).closest('.content-element');
                let $ancestors = $myContainer.parents('.content-element');
                let $ancestor = $ancestors.length ? $ancestors.first() : $(document);
                let $children = $myContainer.find('.speech-to-action').not(this);
                // Disable voice control over other widgets
                $ancestor
                    .find('.speech-to-action')
                    .not(this)
                    .not('#speech-to-action-global')
                    // Update only the elements whose grandparent is the same as ours
                    // And also our parent
                    .filter(function () {
                        let $myParent = $(this).parents('.content-element').first();
                        if ($myParent[0] === $ancestor[0])
                            return true;
                        let $myAncestor = $myParent.parents('.content-element').first();
                        return $myAncestor.length ? $myAncestor[0] === $ancestor[0] : true;
                    })
                    .each(function () {
                        $(this).prop("disabled", state).toggleClass('disabled', state).attr('aria-disabled', state);
                    });
                // Update the state of DIRECT children
                $children.filter(function () {
                    let $currentContainer = $(this).parents('.content-element').eq(1);
                    return $currentContainer[0] === $myContainer[0]
                }).each(function () { $(this).prop("disabled", !state).toggleClass('disabled', !state).attr('aria-disabled', !state); })
            }
        }

        let finishRecording = function (isGlobal) {
            // Change voice-control highlighted area
            highlightContentElement.apply(currentTarget);
            // Trigger focus on current target
            isGlobal ? $('#speech-to-action-global').focus() : (currentTarget && $(currentTarget).focus());
            if (!stack.length || isGlobal) {
                // Make sure that the stack is empty
                stack = [];
                // Stop recording
                currentTarget = null;
                annyang.pause();
                return;
            }
            // Change focused button
            currentTarget = stack.pop();
        }

        let onLanguageLoaded = function (err, i18n) {

            let ALIASES = {
                'WRITE': i18n('tta-command-write', { returnObjects: true }),
                'MOVE': i18n('tta-command-move', { returnObjects: true }),
                'NEXT': i18n('tta-command-next', { returnObjects: true }),
                'PREVIOUS': i18n('tta-command-previous', { returnObjects: true }),
                'CURRENT': i18n('tta-command-current', { returnObjects: true }),
                'FINISH': i18n('tta-command-finish', { returnObjects: true }),
                'SELECT': i18n('tta-command-select', { returnObjects: true }),
                'PLAY': i18n('tta-command-play', { returnObjects: true }),
                'STOP': i18n('tta-command-stop', { returnObjects: true }),
                'PAUSE': i18n('tta-command-pause', { returnObjects: true }),
                'CLOSE': i18n('tta-command-close', { returnObjects: true }),
                'REPEAT': i18n('tta-command-info', { returnObjects: true }),
                'CHECK': i18n('tta-command-check', { returnObjects: true }),
                'RESET': i18n('tta-command-reset', { returnObjects: true }),
                'DELETE': i18n('tta-command-delete', { returnObjects: true }),
                'BACK': i18n('tta-command-back', { returnObjects: true }),
                'SCROLL DOWN': i18n('tta-command-scroll-down', { returnObjects: true }),
                'SCROLL UP': i18n('tta-command-scroll-up', { returnObjects: true }),
                'GOTO': i18n('tta-command-goto', { returnObjects: true }),
                'MAXIMIZE': i18n('tta-command-maximize', { returnObjects: true }),
                'MINIMIZE': i18n('tta-command-minimize', { returnObjects: true }),
                'ACCESSIBILITY': i18n('tta-command-accessibility', { returnObjects: true }),
                'GOTO START': i18n('tta-command-goto-start', { returnObjects: true })
            }

            const ALL_ALIASES = [].concat(...Object.values(ALIASES));

            let makeAlert = function (type, message) {

                let $dismissButton = $('<button />')
                    .data('dismiss', 'alert')
                    .attr('type', 'button')
                    .attr('aria-hidden', 'false')
                    .attr('aria-label', i18n('Close')) //
                    .addClass('close')
                    .html(' <span aria-hidden="true">&times;</span>');

                let $alert = $("<div />")
                    .addClass('alert alert-dismissible fade show ' + type)
                    .html(message)
                    .append($dismissButton);

                $dismissButton.on('click', function () { $alert.alert('close') });
                let time = Math.max(6000, message.length * 60);
                setTimeout(function () { $alert.alert('close') }, time);
                $alert.alert();
                return $alert;
            };

            let buildGotoAction = function (text, alias) {
                let lowerText = text.toLowerCase();
                // Get position of the WRITE alias

                let idx = lowerText.indexOf(alias.toLowerCase());
                let content = text.substring(idx + alias.length).trim()
                let lower = content.toLowerCase();
                let elems = i18n("tta-command-goto-element", { returnObjects: true })
                let entities = {}, remainder = content;
                elems.sort((d1, d2) => d2.length - d1.length);
                for (let idx in elems) {
                    let elem = elems[idx]
                    if (lower.startsWith(elem.toLowerCase())) {
                        let candNumber = lower.replace(elem.toLowerCase(), '').trim();
                        if (!isNaN(candNumber)) {
                            entities["target-position"] = candNumber;
                            remainder = content.substring(content.indexOf(candNumber) + candNumber.length);
                            break;
                        }
                    }
                }

                return { action: "GOTO", remainder, entities };
            }

            let buildWriteAction = function (text, alias) {

                let lowerText = text.toLowerCase();
                // Get position of the WRITE alias
                let idx = lowerText.indexOf(alias.toLowerCase());
                return { remainder: "", action: "WRITE", entities: { "text": text.substring(idx + alias.length).trim() } };
            }

            let buildMoveAction = function (text, alias) {
                let lowerText = text.toLowerCase();
                let idx = lowerText.indexOf(alias.toLowerCase());
                // Remove the word that starts with the move alias
                // and the next one (the preposition)
                let content = text.substring(idx + alias.length).trim()
                let dynamicData = $(this).data('dynamic');
                let action = { remainder: "", action: "MATCH", entities: { "target": content } };
                let lower = content.toLowerCase();

                // Movement by entity position
                let defs = i18n("tta-command-move-definition", { returnObjects: true })
                defs.sort((d1, d2) => d2.length - d1.length);
                for (let idx in defs) {
                    let def = defs[idx]
                    if (lower.startsWith(def.toLowerCase())) {
                        let candNumber = lower.replace(def.toLowerCase(), '').trim();
                        if (!isNaN(candNumber)) {
                            action["entities"]["target-position"] = content;
                            action["entities"]["number"] = [[candNumber]]
                            break;
                        }
                    }
                }

                if (dynamicData) {
                    // Find entities notified by sender widget
                    for (const key in dynamicData) {
                        let vals = dynamicData[key];
                        vals.sort((v1, v2) => v2.length - v1.length);
                        for (let idx in vals) {
                            let candidate = vals[idx].toLowerCase();
                            if (lower.includes(candidate)) {
                                action["entities"][key] = [content.substring(content.indexOf(candidate), candidate.length)]
                                break;
                            }
                        }
                    }
                }
                return action;
            }

            let preprocessCandidates = function (candidates) {

                return candidates
                    // Edge will add a dot after each sentence, but not Chrome
                    .map(candidate => candidate.replaceAll(/[\s¿?!¡.,]+/g, " ").trim())
                    // Replace textual representation of numbers by the number itself
                    .map(candidate => {
                        let tokens = candidate.split(/\s+/);
                        let obj = i18n('tta-numbers', { returnObjects: true });
                        return tokens.map(token => token.toLowerCase() in obj ?
                            obj[token.toLowerCase()] : token).join(' ')
                    })
            }

            let textContainsAlias = function (alias) {
                let lower = this.toLowerCase();
                let tokensText = lower.split(/\s+/);
                let tokensAlias = alias.toLowerCase().split(/\s+/);
                if (tokensText.length < tokensAlias.length)
                    return false;

                let matches;
                for (let i = 0; i <= (tokensText.length - tokensAlias.length); i++) {
                    matches = true;
                    for (let j = 0; j < tokensAlias.length; j++) {
                        if (tokensText[i + j] !== tokensAlias[j]) {
                            matches = false;
                            break;
                        }
                    }
                    if (matches)
                        return true;
                }
                return false;
            }

            let computeText = function (text) {
                let lower = text.toLowerCase();
                let currentAlias;
                let myTextContainsAlias = textContainsAlias.bind(text);
                let minIndex = Number.MAX_SAFE_INTEGER, candidateAction = null, candidateAlias = null;
                // Search for the first command
                for (let key in ALIASES) {
                    currentAlias = Array.isArray(ALIASES[key]) && ALIASES[key].find(myTextContainsAlias);
                    if (currentAlias) {
                        currentAlias = currentAlias.toLowerCase();
                        let position = lower.indexOf(currentAlias);
                        if (minIndex > position) {
                            minIndex = position
                            candidateAlias = currentAlias;
                            candidateAction = key;
                        }
                    }
                }
                // Build action corresponding to the first command
                if (candidateAction) {
                    switch (candidateAction) {
                        case "MOVE":
                            return buildMoveAction.apply(this, [text, candidateAlias]);
                        case "WRITE":
                            return buildWriteAction.apply(this, [text, candidateAlias]);
                        case "GOTO":
                            return buildGotoAction.apply(this, [text, candidateAlias])
                        default:
                            return {
                                remainder: text.substring(lower.indexOf(candidateAlias) + candidateAlias.length).trim(),
                                action: candidateAction,
                                entities: {}
                            }
                    }
                }
                // Not recognised command
                return { remainder: "", action: "NONE", entities: {} };
            }

            let findBestCandidate = function (candidates) {
                for (let idx in candidates) {
                    let text = candidates[idx]
                    let lower = text.toLowerCase();
                    if (ALL_ALIASES.some(elem => lower.includes(elem.toLowerCase())))
                        return text;
                }
                return candidates[0];
            }

            let speechCallback = function (phrases) {
                console.log("Initial candidates: ", phrases);
                let candidates = preprocessCandidates(phrases);
                let candidate = findBestCandidate(candidates);
                // Provide feedback of the recognised phrase
                $('#tta-message-global').append(makeAlert('alert-info', i18n('tta-info-command', { phrase: candidate })));
                let remainder = candidate, hasValidCommand = false, action, entities;
                do {
                    ({ remainder, action, entities } = computeText.apply(currentTarget, [remainder]));
                    hasValidCommand |= action !== "NONE";
                    let isGlobal = $(currentTarget).is('#speech-to-action-global');
                    if (action === "FINISH") {
                        // Notify the finish command to the current voice-controlled button
                        let evt = sendCommand.apply(currentTarget, ['FINISH']);
                        if (!evt.isDefaultPrevented()) {
                            switchVoiceButtonsState.apply(currentTarget, [false, isGlobal])
                            finishRecording.apply(currentTarget, [isGlobal]);
                        }
                    }
                    else if (action === "ACCESSIBILITY" && currentTarget !== $('#accesibilityModal')[0]) {
                        currentTarget && stack.push(currentTarget);
                        currentTarget = $('#accesibilityModal')[0]
                    }
                    else if (action === "BACK")
                        highlightContentElement.apply(currentTarget);
                    // Avoid sending a NONE (and then notify an error)
                    // if the phrase contains a valid command
                    if (!hasValidCommand || action !== "NONE")
                        sendCommand.apply(currentTarget, [action.toUpperCase(), entities]);
                } while (remainder.length);
            };

            $("#speech-to-action-global").addClass('show');
            // Highlight the affected element area
            $(document).on('focus', '.speech-to-action', highlightContentElement);

            $(document).on('click', '.speech-to-action', function (e) {
                let curState = !$(this).hasClass("active");
                let isGlobal = $(this).is('#speech-to-action-global')
                // Set current buttons' corresponding state
                switchVoiceButtonsState.apply(this, [curState, isGlobal]);
                if (!curState) {
                    // Notify the finish command to the current voice-controlled button
                    sendCommand.apply(currentTarget, ['FINISH']);
                    finishRecording.apply(this, [isGlobal])
                }
                else {
                    currentTarget && stack.push(currentTarget);
                    currentTarget = this;
                    sendCommand.apply(currentTarget, ['START']);
                    if (!initialized) {
                        annyang.addCallback('result', speechCallback);
                        annyang.addCallback('start', function (e) {
                            let $globalButton = $('#speech-to-action-global');
                            switchVoiceButtonsState.apply($globalButton[0], [true, true]);
                        });
                        annyang.addCallback('end', function (e) {
                            let $globalButton = $('#speech-to-action-global');
                            switchVoiceButtonsState.apply($globalButton[0], [false, true]);
                        });
                        annyang.start({ 'continuous': true, 'autoRestart': false });
                    } else
                        annyang.resume();
                    initialized = true;
                }
            });

            $('#accesibilityModal').on('show.bs.modal', function () {
                // If voice control is enabled...
                if (currentTarget !== null && currentTarget !== this) {
                    stack.push(currentTarget);
                    currentTarget = this;
                }
            });

            $('#accesibilityModal').on('hide.bs.modal', function () {
                $(this).find('select').each(function () { this.size = 1 });
                if (currentTarget === this)
                    currentTarget = stack.pop();
            });
            annyang.setLanguage(currLang);
        }

	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
            .then(response => response.json())
            .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
    }
})();
/* global $ */
/* global i18next */

(function () {

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        let onSpeechToAction = function (event, action, entities) {

            if (action === "FINISH" || action === "START")
                return;

            let id = $(this).attr('id');
            if (action === "SELECT")
                $(this).trigger('click');
            else if (action === "SCROLL DOWN" && $('#modal' + id + '.show').length) window.scrollBy(0, window.innerHeight * 0.8);
            else if (action === "SCROLL UP" && $('#modal' + id + '.show').length) window.scrollBy(0, -window.innerHeight * 0.8);
            else if (action === "CLOSE") {
                $('#modal' + id + '.show').length && $('#modal' + id + '.show').modal('hide');
                $('.alert').length && $('.alert').alert('close');
            }
            else if (action === "REPEAT")
                $(this).closest('.widget-modal').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-modal')));
            else
                $(this).closest('.widget-modal').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
        };

        $('.btn-modal').each(function () {
            let id = $(this).attr('id');
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction.bind(this));
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */
(function () {
    // https://stackoverflow.com/a/30106551
    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        $('.widget-schema').each(function () {
            let $widget = $(this)
            let id = $widget.attr('id');
            let content = $widget.data('content');
            let $schema = $widget.find('.btn-schema');


            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH" || action === "START")
                    return;

                if (action === "SELECT") $(this).focus().trigger('click');
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.8);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.8);
                else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
                else if (action === "REPEAT")
                    $widget.find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-schema')));
                else
                    $widget.find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
            };

            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction.bind($schema[0]));
            $schema.on('click.show', function () {
                // This is a one-time event
                $(this).off('click.show');
                let $img = $(this).find('img');
                let description = $(this).attr('data-desc');
                let orden = JSON.parse(b64DecodeUnicode(content));
                if (orden.length > 0) {
                    let i = 0;
                    var intervalID = setInterval(function () {
                        if (i == orden.length) {
                            clearInterval(intervalID);
                            setObjetivoCompleto("objetivo" + id, description, description);
                        }
                        else
                            $img.attr({ 'src': orden[i].src, 'alt': orden[i].alt });
                        i++;
                    }, 1000);
                }

            });
        })
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
(function () {

    const NAVIGATION_TABS = 0;
    const NAVIGATION_CONTENT = 1;

    let setTopLinkIfNeeded = function () {
        let height = $(this).height();
        $(this).find(".tabtop").toggleClass("show", height > 1000);
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };


        let highlightContentElement = function () {
            $('.speech-focused').removeClass('speech-focused');
            $(this).addClass('speech-focused');
            $(this).closest('.content-element').addClass('speech-focused');
        }


        $('.accordion').each(function () {
            let $widget = $(this)
            let id = $widget.attr('id');
            let mode = NAVIGATION_TABS;
            let $selectionTabs = $widget.find('.btn-accordion:visible').first();
            let $selectionContent;
            $widget.find('.accordion-region').on('shown.bs.collapse', setTopLinkIfNeeded);
            let handleSelect = function () {
                if (mode === NAVIGATION_TABS) {
                    if ($selectionTabs.is('.collapsed'))
                        $selectionTabs.trigger('click');
                    $widget.find('.collapsing').focus();
                    mode = NAVIGATION_CONTENT;
                } else {
                    $selectionContent && $selectionContent.trigger('click')
                }
            }

            let handleMove = function (action, target) {

                if (mode === NAVIGATION_TABS) {
                    let $btns = $widget.find('.btn-accordion:visible')
                    let len = $btns.length;
                    let position = $btns.index($selectionTabs);
                    let nextPos = position;
                    switch (action) {
                        case "NEXT": nextPos = (position + 1) % len; break;
                        case "PREVIOUS": nextPos = (position - 1) % len; break;
                        case "GOTO": nextPos = (parseInt(target) - 1) % len; break;
                    }
                    $selectionTabs = $btns.eq(nextPos)
                    highlightContentElement.apply($selectionTabs[0]);
                    $selectionTabs.focus();
                }
                else {
                    let $btns = $widget.find('.speech-to-action:visible')
                    let len = $btns.length;
                    let nextPos = 0;
                    switch (action) {
                        case "NEXT":
                            $selectionContent && (nextPos = ($btns.index($selectionContent) + 1) % len); break;
                        case "PREVIOUS":
                            $selectionContent && (nextPos = ($btns.index($selectionContent) - 1) % len); break;
                        case "GOTO":
                            nextPos = (parseInt(target) - 1) % len; break;
                    }
                    $selectionContent = $btns.eq(nextPos)
                    highlightContentElement.apply($selectionContent[0]);
                    $selectionContent.focus();
                    $selectionContent[0].scrollIntoView(true);
                }
            }

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH") {
                    if (mode === NAVIGATION_CONTENT) {
                        event.preventDefault();
                        $selectionTabs.focus().trigger('click');
                        this.scrollIntoView(true);
                        $selectionContent = null;
                        mode = NAVIGATION_TABS;
                    }
                    return;
                }

                if (action === "START") {
                    mode = NAVIGATION_TABS;
                    $selectionTabs.focus();
                }
                else if (action === "SELECT") handleSelect();
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
                else if (action === "BACK" && mode === NAVIGATION_CONTENT) {
                    $selectionTabs.focus().trigger('click');
                    this.scrollIntoView(true);
                    $selectionContent = null;
                    mode = NAVIGATION_TABS;
                }
                else if (action === "REPEAT")
                    $widget.find('.tta-message').first().append(
                        makeAlert('alert-info', i18n('tta-info-accordion-' + (mode === NAVIGATION_TABS ? 'tabs' : 'region'))));
                else if (action === "NEXT" || action === "PREVIOUS" || action === "GOTO") handleMove(action, entities && entities['target-position']);
                else
                    $widget.find('.tta-message').first().append(makeAlert('alert-danger', i18n('tta-error-message')));
            };

            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        })
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
(function () {

    const NAVIGATION_TABS = 0;
    const NAVIGATION_CONTENT = 1;

    let setTopLinkIfNeeded = function () {
        let height = $(this).find(".tab-content").height();
        $(this).find(".tabtop").toggleClass("show", height > 1000);
    }

    let onLanguageLoaded = function (err, i18n) {


        let highlightContentElement = function () {
            $('.speech-focused').removeClass('speech-focused');
            $(this).addClass('speech-focused');
            $(this).closest('.content-element').addClass('speech-focused');
        }

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        $('.widget-tabs').each(function () {

            let $widget = $(this)
            let id = $widget.attr('id');
            let mode = NAVIGATION_TABS;
            let $selectionTabs = $widget.find('.tab-link:visible').first();
            let $selectionContent;
            let mySetTopLinkIfNeeded = setTopLinkIfNeeded.bind(this);

            mySetTopLinkIfNeeded();
            $widget.find('a[data-toggle="tab"]').on('shown.bs.tab', mySetTopLinkIfNeeded);

            let handleSelect = function () {
                if (mode === NAVIGATION_TABS) {
                    if (!$selectionTabs.is('.active'))
                        $selectionTabs.trigger('click');
                    $widget.find('.tab-content').first().focus();
                    mode = NAVIGATION_CONTENT;
                } else {
                    $selectionContent && $selectionContent.trigger('click')
                }
            }

            let handleMove = function (action, target) {

                if (mode === NAVIGATION_TABS) {
                    let $btns = $widget.find('.tab-link:visible')
                    let len = $btns.length;
                    let position = $btns.index($selectionTabs);
                    let nextPos = position;
                    switch (action) {
                        case "NEXT": nextPos = (position + 1) % len; break;
                        case "PREVIOUS": nextPos = (position - 1) % len; break;
                        case "GOTO": nextPos = (parseInt(target) - 1) % len; break;
                    }
                    $selectionTabs = $btns.eq(nextPos)
                    highlightContentElement.apply($selectionTabs[0]);
                    $selectionTabs.focus();
                }
                else {
                    let $btns = $widget.find('.speech-to-action:visible')
                    let len = $btns.length;
                    let nextPos = 0;
                    switch (action) {
                        case "NEXT":
                            $selectionContent && (nextPos = $btns.index($selectionContent) + 1 % len); break;
                        case "PREVIOUS":
                            $selectionContent && (nextPos = $btns.index($selectionContent) - 1 % len); break;
                        case "GOTO": nextPos = (parseInt(target) - 1) % len; break;
                    }
                    $selectionContent = $btns.eq(nextPos);
                    highlightContentElement.apply($selectionContent[0]);
                    $selectionContent.focus();
                    $selectionContent[0].scrollIntoView(true);
                }
            }

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH") {
                    if (mode === NAVIGATION_CONTENT) {
                        event.preventDefault();
                        $selectionTabs.focus();
                        this.scrollIntoView(true);
                        $selectionContent = null;
                        mode = NAVIGATION_TABS;
                    }
                    return;
                }

                if (action === "FINISH")
                    return;

                if (action === "START") {
                    mode = NAVIGATION_TABS;
                    $selectionTabs.focus();
                }
                else if (action === "SELECT") handleSelect();
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
                else if (action === "BACK" && mode === NAVIGATION_CONTENT) {
                    $selectionTabs.focus();
                    this.scrollIntoView(true);
                    $selectionContent = null;
                    mode = NAVIGATION_TABS;
                }
                else if (action === "REPEAT")
                    $widget.find('.tta-message').first().append(
                        makeAlert('alert-info', i18n('tta-info-horizontal-tabs-' + (mode === NAVIGATION_TABS ? 'tabs' : 'region'))));
                else if (action === "NEXT" || action === "PREVIOUS" || action === "GOTO") handleMove(action, entities && entities['target-position']);
                else
                    $widget.find('.tta-message').first().append(makeAlert('alert-danger', i18n('tta-error-message')));
            };

            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        })
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
(function () {

    let onLanguageLoaded = function (err, i18n) {

        // List of traversable voice buttons
        let $voiceBtns = $('.speech-to-action')
            .not($('#speech-to-action-global')) // Exclude global voice button
            // Exclude nested voice buttons
            .filter(function () { return $(this).parents('.content-element').length <= 1; })

        $voiceBtns.each(function (index) {
            let $activityNumberTag = $('<span />').addClass("element-number").text(i18n("tta-activity-number") + (index + 1));
            $(this).append($activityNumberTag)
        })

        let $currentBtn;

        let highlightContentElement = function () {
            $('.speech-focused').removeClass('speech-focused');
            $(this).addClass('speech-focused');
            $(this).closest('.content-element').addClass('speech-focused');
        }

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        let handleMove = function (action) {

            if (!$currentBtn || !$currentBtn.length) {
                $currentBtn = $voiceBtns.first();
            }
            else {
                let len = $voiceBtns.length;
                let position = $voiceBtns.index($currentBtn);
                let nextPos = position === -1 ? 0 : (action === "NEXT" ? position + 1 : position - 1) % len;
                $currentBtn = $voiceBtns.eq(nextPos);
            }

            highlightContentElement.apply($currentBtn[0]);
            $currentBtn.focus();
            $currentBtn[0].scrollIntoView(true);
        }

        let handleGoTo = function (action, entities) {
            let len = $voiceBtns.length;
            let nextPos = (parseInt(entities['target-position']) - 1) % len;
            $currentBtn = $voiceBtns.eq(nextPos);
            highlightContentElement.apply($currentBtn[0]);
            $currentBtn.focus();
            $currentBtn[0].scrollIntoView(true);
        }

        let handleGoToStart = function (action, entities) {
            window.scrollTo(0, 0);
        }

        let onSpeechToAction = function (event, action, entities) {
            if (action === "FINISH" || action === "START")
                return;
            else if (action === "SELECT") $currentBtn && $currentBtn.trigger('click');
            else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
            else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
            else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
            else if (action === "REPEAT")
                $('#tta-message-global').append(makeAlert('alert-info', i18n('tta-info-global')));
            else if (action === "NEXT" || action === "PREVIOUS") handleMove(action);
            else if (action === "GOTO") handleGoTo(action, entities);
            else if (action === "GOTO START") handleGoToStart(action, entities);
            else $('#tta-message-global').append(makeAlert('alert-danger', i18n('tta-error-message')));
        };

        $('#speech-to-action-global').on('speech-to-action', onSpeechToAction);
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global Prism */
(function () {
	$(document).ready(function () {
		setTimeout(function () {
			Prism.highlightAll();
			// Prism automatically adds tabindex attribute
			// We will remove it to avoid breaking widgets 
			$(document).find('pre[tabindex]').removeAttr("tabindex")
		}, 1000);
	});

})();
/* global $ */
/* global setObjetivoCompleto */
/* global i18next */

(function () {

    // https://stackoverflow.com/a/30106551
    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        $('.widget-missing-words').each(function () {
            let self = this;
            let $widget = $(this);
            let id = $(self).attr('id');
            let solutions = JSON.parse(b64DecodeUnicode($widget.data('content'))).map(elem => elem.map(e => e.toLowerCase()));

            $(this).on('click', '.btn-check', function () {
                let gamification = $('body').hasClass('gamification');
                let $candidates = $widget.find('.missing-word-candidate');
                let total = $candidates.length;
                let $rightAnswers = $candidates.filter(function (idx) {
                    return solutions[idx].includes($(this).val().toLowerCase())
                });
                let score = $rightAnswers.length;
                $(this).trigger('gamificate', [score === total, score / total]);
                if (!gamification) {
                    $candidates.each(function () {
                        let $sentence = $(this).closest('.sentence');
                        let correct = $(this).is($rightAnswers);
                        let $icon = $sentence.find('.iconresult');
                        $icon
                            .attr('aria-label', i18n(correct ? 'TextCorrectAnswer' : 'TextIncorrectAnswer'))
                            .html('<i class="fas fa-2x fa-' + (correct ? 'check' : 'times') + '"></i>')
                    })
                    score === total && setObjetivoCompleto("objetivo" + id, $widget.data('desc'), $widget.data('desc'));
                    $widget.find('#result-' + id).html(score + ' ' + i18n('TextCorrectAnswers'));
                }
            });

            $(this).on('change', '.missing-word-candidate', function () {
                $(this).closest('.sentence').find('.iconresult').attr('aria-label', '').empty();
            });

            $(this).on('click', '.btn-reset', function () {
                $widget.find('.missing-word-candidate').val('');
                $widget.find('.iconresult').attr('aria-label', '').empty();
                $widget.find('.resultado').empty();

            });

            $('.widget-missing-words').on('change', '.missing-word-candidate', function () {
                $(this).closest('.sentence').find('.iconresult').attr('aria-label', '').empty();
            });

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH")
                    return;

                let $candidates = $(self).find('.missing-word-candidate');
                let $checkAnswerBtn = $(self).find('.btn-check')
                let $selected = $candidates.filter(function () { return $(this).is(':focus') }).first()
                if (!$selected.length) {
                    $selected = $candidates.eq(0);
                    $selected.focus();
                }
                if (action === "START" || action === "CURRENT")
                    return;
                else if (action === "NEXT" || action === "PREVIOUS") {
                    let position = $candidates.index($selected);
                    let nextPos = action === "NEXT" ? ((position + 1) % $candidates.length) : ((position - 1) % $candidates.length);
                    $candidates.eq(nextPos).focus();
                }
                else if (action === "GOTO") {
                    $candidates.eq((parseInt(entities['target-position']) - 1) % $candidates.length).focus();
                }
                else if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else {
                    switch (action) {
                        case "WRITE": $selected.val(entities['text']); break;
                        case "DELETE": $selected.val(''); break;
                        case "REPEAT": $(self).find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-missing-word'))); break;
                        case "RESET": $widget.find('.btn-reset').trigger('click'); break;
                        case "CHECK": $checkAnswerBtn.trigger('click'); break;
                        case "NONE":
                        default:
                            $(self).find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }
            };
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
(function () {
    $(document).ready(function () {
        let params = new URLSearchParams(document.location.search);       
        let element = params.get("element");
        if (element!== null){            
            let $widget = $(this).find("#objetivo"+ element);
            if ($widget.get(0).scrollWidth == 0 && $widget.get(0).scrollHeight ==0){
                let accordion = $widget.closest('.card');
                if (accordion.get(0) !== undefined){
                    accordion.find('.card-header button').click();
                }else{
                    let horizontaltabs = $widget.closest('.tab-pane');
                    if (horizontaltabs.get(0)!==undefined){
                        $("#"+horizontaltabs.attr('aria-labelledby')).click();
                    }
                }
            }
            setTimeout(function(){
                $widget.get(0).scrollIntoView();
            }, 1000);   
        }        
    });
})();
/* global $ */
/* global setObjetivoCompleto */
/* global i18next */

(function () {

    // https://stackoverflow.com/a/30106551
    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        $('.widget-correct-word').each(function () {
            let self = this;
            let $widget = $(this);
            let id = $(self).attr('id');

            $widget.on('click', '.btn-check', function () {
                let gamification = $('body').hasClass('gamification');
                let $candidates = $widget.find('.correct-word');
                let solutions = JSON.parse(b64DecodeUnicode($widget.data('content'))).map(elem => elem.toLowerCase());
                let total = solutions.length;
                let $rightAnswers = $candidates.filter(function (idx) {
                    return $(this).find('.correct-word-letter').map(function () { return $(this).val().toLowerCase() }).get().join('') == solutions[idx]
                });
                let score = $rightAnswers.length;
                $(this).trigger('gamificate', [score === total, score / total]);
                if (!gamification) {
                    $candidates.each(function () {
                        let $sentence = $(this).closest('.correct-word');
                        let correct = $(this).is($rightAnswers);
                        let $icon = $sentence.find('.iconresult');
                        $icon
                            .attr('aria-label', i18n(correct ? 'TextCorrectAnswer' : 'TextIncorrectAnswer'))
                            .html('<i class="fas fa-2x fa-' + (correct ? 'check' : 'times') + '"></i>')
                    })
                    score === total && setObjetivoCompleto("objetivo" + id, $widget.data('desc'), $widget.data('desc'));
                    $widget.find('#result-' + id).html(score + ' ' + i18n('TextCorrectAnswers'));
                }
            });

            $widget.on('click', '.btn-reset', function () {
                $widget.find('.iconresult').attr('aria-label', '').empty();
                $widget.find('.resultado').empty();
                $widget.find('.correct-word-letter').val('');
            });

            $widget.on('change', '.correct-word-letter', function () {
                $(this).closest('.sentence').find('.iconresult').attr('aria-label', '').empty();
            });

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH")
                    return;

                let $candidates = $(self).find('.correct-word');
                let $checkAnswerBtn = $(self).find('.btn-check')
                let $selected = $candidates.filter(function () { return $(this).find('.correct-word-letter').is(':focus') }).first()
                if (!$selected.length) {
                    $selected = $candidates.eq(0);
                    $selected.find('.correct-word-letter').first().focus();
                }
                if (action === "START" || action === "CURRENT")
                    return;
                else if (action === "NEXT" || action === "PREVIOUS") {
                    let position = $candidates.index($selected);
                    let nextPos = action === "NEXT" ? ((position + 1) % $candidates.length) : ((position - 1) % $candidates.length);
                    $candidates.eq(nextPos).find('.correct-word-letter').first().focus();
                }
                else if (action === "GOTO") {
                    $candidates.eq((parseInt(entities['target-position']) - 1) % $candidates.length).find('.correct-word-letter').first().focus();
                }
                else if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else {
                    switch (action) {
                        case "WRITE":
                            {
                                let letters = entities['text'].split('');
                                $selected.find('.correct-word-letter').each(function (idx) { $(this).val( letters.length > idx ? letters[idx] : '') });
                            }
                            break;
                        case "DELETE": $selected.find('.correct-word-letter').val(''); break;
                        case "REPEAT": $(self).find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-correct-word'))); break;
                        case "CHECK": $checkAnswerBtn.trigger('click'); break;
                        case "RESET": $widget.find('.btn-reset').trigger('click'); break;
                        case "NONE":
                        default:
                            $(self).find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }
            };
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */

(function () {

    const NAVIGATION_TABS = 0;
    const NAVIGATION_CONTENT = 1;

    const KEYCODE_LEFT = 37;
    const KEYCODE_RIGHT = 39;
    const KEYCODE_HOME = 36;
    const KEYCODE_END = 35;
    const KEYCODE_ESCAPE = 27;

    let setTopLinkIfNeeded = function () {
        let height = $(this).find(".shared-texts").height();
        $(this).find(".tabtop").toggleClass("show", height > 1000);
    }

	// Handle item navigation using keystrokes
	let onKeyDownInput = function (e) {
		let $btns = $(this).closest('.widget-button-text').find('.btn-show');
		let position = $btns.index($(this));
		let key = e.which || e.keyCode;
		switch (key) {
			case KEYCODE_HOME:
				e.preventDefault();
				$btns.first().focus();
				break;
			case KEYCODE_END:
			e.preventDefault();
				$btns.last().focus();
				break;
			case KEYCODE_LEFT:
				$btns.eq((position - 1) % $btns.length).focus();
				break;
			case KEYCODE_RIGHT:
				$btns.eq((position + 1) % $btns.length).focus();
				break;
			case KEYCODE_ESCAPE: $(this).blur(); break;
			default: return;
		}
	}

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        $('.widget-button-text').each(function () {
            let $widget = $(this);
            let id = $widget.attr('id');
            let $btns = $widget.find('.btn-show');
            let mode = NAVIGATION_TABS;
            let $selectionTabs = $widget.find('.btn-show').first();
            let $selectionContent;

            $widget.on('click', '.btn-show', function () {
                let $texts = $widget.find('.shared-text');
                let pos = $btns.index($(this));
                let $text = $texts.eq(pos);
				$btns.closest('.tab').removeClass('show');
				$btns.attr('tabindex', "-1").attr('aria-selected', 'false');
				$(this).closest('.tab').addClass('show');
                $(this).attr('tabindex', "0").attr('aria-selected', 'true');
				$texts.removeClass('show');
                $text.addClass('show');
                setTopLinkIfNeeded.apply($widget);
            });

            let highlightContentElement = function () {
                $('.speech-focused').removeClass('speech-focused');
                $(this).addClass('speech-focused');
                $(this).closest('.content-element').addClass('speech-focused');
            }

            let handleSelect = function () {
                if (mode === NAVIGATION_TABS) {
                    if (!$selectionTabs.is('.active'))
                        $selectionTabs.trigger('click');
                    $widget.find('.shared-texts').first().focus();
                    mode = NAVIGATION_CONTENT;
                } else {
                    $selectionContent && $selectionContent.trigger('click')
                }
            }

            let handleMove = function (action, target) {

                if (mode === NAVIGATION_TABS) {
                    let $btns = $widget.find('.btn-show');
                    let len = $btns.length;
                    let position = $btns.index($selectionTabs);
                    let nextPos = position;
                    switch (action) {
                        case "NEXT": nextPos = (position + 1) % len; break;
                        case "PREVIOUS": nextPos = (position - 1) % len; break;
                        case "GOTO": nextPos = (parseInt(target) - 1) % len; break;
                    }
                    $selectionTabs = $btns.eq(nextPos)
                    highlightContentElement.apply($selectionTabs[0]);
                    $selectionTabs.focus();
                }
                else {
                    let $btns = $widget.find('.speech-to-action:visible')
                    let len = $btns.length;
                    let nextPos = 0;
                    switch (action) {
                        case "NEXT":
                            $selectionContent && (nextPos = $btns.index($selectionContent) + 1 % len); break;
                        case "PREVIOUS":
                            $selectionContent && (nextPos = $btns.index($selectionContent) - 1 % len); break;
                        case "GOTO": nextPos = (parseInt(target) - 1) % len; break;
                    }
                    $selectionContent = $btns.eq(nextPos);
                    highlightContentElement.apply($selectionContent[0]);
                    $selectionContent.focus();
                    $selectionContent[0].scrollIntoView(true);
                }
            }

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH") {
                    if (mode === NAVIGATION_CONTENT) {
                        event.preventDefault();
                        $selectionTabs.focus();
                        this.scrollIntoView(true);
                        $selectionContent = null;
                        mode = NAVIGATION_TABS;
                    }
                    return;
                }

                if (action === "FINISH")
                    return;

                if (action === "START") {
                    mode = NAVIGATION_TABS;
                    $selectionTabs.focus();
                }
                else if (action === "SELECT") handleSelect();
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else if (action === "CLOSE" && $('.alert').length) $('.alert').alert('close');
                else if (action === "BACK" && mode === NAVIGATION_CONTENT) {
                    $selectionTabs.focus();
                    this.scrollIntoView(true);
                    $selectionContent = null;
                    mode = NAVIGATION_TABS;
                }
                else if (action === "REPEAT")
                    $widget.closest('.content-element').find('.tta-message').first().append(
                        makeAlert('alert-info', i18n('tta-info-button-text-' + (mode === NAVIGATION_TABS ? 'tabs' : 'region'))));
                else if (action === "NEXT" || action === "PREVIOUS" || action === "GOTO") handleMove(action, entities && entities['target-position']);
                else
                    $widget.closest('.content-element').find('.tta-message').first().append(makeAlert('alert-danger', i18n('tta-error-message')));
            };
			$widget.on('keydown', '.btn-show', onKeyDownInput);
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */

(function () {

    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    if (!Set.prototype.isSuperset) {
        Set.prototype.isSuperset = function (subset) {
            for (var elem of subset) {
                if (!this.has(elem)) {
                    return false;
                }
            }
            return true;
        }
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        $('.widget-hangman').each(function () {
            let self = this;
            let $widget = $(this);
            let id = $(self).attr('id');
            let { attempts, solution } = JSON.parse(b64DecodeUnicode($widget.data('content')));
            solution = solution.toUpperCase();
            let solutionLetters = new Set(solution.split('').filter(chr => chr !== ' '));
            let currentAttempts = attempts;
            let currentLetters = new Set();

            $widget.on('submit', function (e) {

                e.preventDefault();
                if (currentAttempts == 0)
                    return;

                let $input = $widget.find('.hangman-letter');
                let chr = $input.val().charAt(0).toUpperCase();
                $input.val('');
				if (chr.trim().length == 0)
					return;
                if (currentLetters.has(chr))
                    return;

                currentLetters.add(chr);
                // Fill the positions for the current character
                let positions = solution.split('').map((chr, idx) => [chr, idx]).filter(pair => pair[0] === chr).map(pair => pair[1]);
                positions.forEach(pos => $widget.find('.letter-' + (pos + 1)).text(chr));
                if (!positions.length) {
                    let $numAttempts = $widget.find('.guess-attempts i');
                    $numAttempts.removeClass('fa-circle-' + currentAttempts);
                    currentAttempts -= 1;
                    $numAttempts.addClass('fa-circle-' + currentAttempts);
                    if (currentAttempts === 0) {
                        $widget.find('.hangman-letter').prop('disabled', true);
                        $widget.find('.btn-check').prop('disabled', true);
                        setTimeout(function () {
                            $widget.find('.hangman-feedback').text(i18n("TextIncorrectAnswer"));
                        }, 150);
                    }
                    setTimeout(function () {
                        $widget.find('.description .number').text(currentAttempts);
                    }, 100);
                }

                let $status = $("<i />")
                    .attr('aria-hidden', 'true')
                    .addClass("status " + (positions.length ? "fas fa-check" : "fas fa-times"))

                let $newLetter = $("<div />")
                    .attr('aria-live', 'polite')
                    .addClass("typed-letter " + (positions.length ? "right" : "wrong"))
                    .text(chr).append($status);
                setTimeout(function () {
                    $newLetter.prepend('<span class="sr-only">' + (positions.length ? i18n("hangman-correct-letter") : i18n("hangman-wrong-letter")) + '</span>')
                }, 50);
                $input.before($newLetter);
                if (currentLetters.isSuperset(solutionLetters)) {
                    $widget.find('.hangman-feedback').text(i18n("TextCorrectAnswer"));
                    setObjetivoCompleto("objetivo" + id, $widget.data('desc'), $widget.data('desc'));
                }
            });

            $widget.on('click', '.btn-reset', function () {
                let $numAttempts = $widget.find('.guess-attempts i');
                $numAttempts
                    .removeClass('fa-circle-' + currentAttempts)
                    .addClass('fa-circle-' + attempts)
                    .attr('aria-label', attempts);
                currentLetters = new Set();
                currentAttempts = attempts;
                $widget.find('.hangman-letter').prop('disabled', false);
                $widget.find('.btn-check').prop('disabled', false);
                $widget.find('.typed-letters').find('.typed-letter').remove();
                $widget.find('.letter').filter(function (idx) { return solution[idx] !== ' '}).html(`
					<span class="sr-only">`+i18n("hangman-blank")+`</span>
                    <span class="shown" aria-hidden="true">_</span>`);
                $widget.find('.hangman-letter').val('');
                $widget.find('.hangman-feedback').text('');
            });

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH" || action === "START" || action === "CURRENT")
                    return;

                if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else if (action === "WRITE" && entities['text'].length === 1) {
                    $widget.find('.hangman-letter').val(entities['text'][0]);
                    $widget.find('.btn-check').trigger('click');
                }
                else {
                    switch (action) {
                        case "RESET": $widget.find('.btn-reset').trigger('click'); break;
                        case "REPEAT": $widget.closest('.content-element').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-hangman'))); break;
                        case "NONE":
                        default:
                            $widget.closest('.content-element').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }
            };
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */

(function () {

    const KEYCODE_UP = 38;
    const KEYCODE_DOWN = 40;
    const KEYCODE_LEFT = 37;
    const KEYCODE_RIGHT = 39;
    const KEYCODE_HOME = 36;
    const KEYCODE_END = 35;
    const KEYCODE_ENTER = 13;
    const KEYCODE_SPACE = 32;
    const KEYCODE_ESCAPE = 27;

    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let shuffle = function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let disableFocus = function () {
        $(this).find('td').each(function () {
            $(this).removeClass('focused');
            if ($(this).is(':empty'))
                $(this).attr('tabindex', '-1');
            else
                $(this).attr('tabindex', '').find('.word-item').first().attr('tabindex', '-1');
        });
    }

    let focusCell = function () {
        $(this).addClass('focused');
        if ($(this).is(':empty'))
            $(this).attr('tabindex', '0').focus();
        else {
            $(this).attr('tabindex', '');
            let $btn = $(this).find('.word-item').first();
            $btn.attr('tabindex', '0').focus();
        }
    }

    let moveTo = function (toRow, toColumn) {
        disableFocus.apply(this);
        let $to = $(this).find('tr').eq(toRow).find('td').eq(toColumn);
        focusCell.apply($to.get(0));
    }

    let moveRight = function (focusCoordinates) {
        let { row, column } = focusCoordinates;
        let len = $(this).find('tr').eq(row).find('td').length;
        if (column < len - 1) {
            moveTo.apply(this, [row, column + 1]);
            focusCoordinates['column'] += 1;
        }
    }

    let moveLeft = function (focusCoordinates) {
        let { row, column } = focusCoordinates;
        if (column > 0) {
            moveTo.apply(this, [row, column - 1]);
            focusCoordinates['column'] -= 1;
        }
    }

    let moveUp = function (focusCoordinates) {
        let { row, column } = focusCoordinates;
        if (row > 0) {
            moveTo.apply(this, [row - 1, column]);
            focusCoordinates['row'] -= 1;
        }
    }

    let moveDown = function (focusCoordinates) {
        let { row, column } = focusCoordinates;
        let len = $(this).find('tr').length;
        if (row < len - 1) {
            moveTo.apply(this, [row + 1, column]);
            focusCoordinates['row'] += 1;
        }
    }

    let onKeyDown = function (e, focusCoordinates) {
        let key = e.which || e.keyCode;
        switch (key) {
            case KEYCODE_UP:
                e.preventDefault();
                moveUp.apply(this, [focusCoordinates]);
                break;
            case KEYCODE_DOWN:
                e.preventDefault();
                moveDown.apply(this, [focusCoordinates])
                break;
            case KEYCODE_LEFT:
                e.preventDefault();
                moveLeft.apply(this, [focusCoordinates])
                break;
            case KEYCODE_ESCAPE:
                {
                    e.preventDefault();
                    let $cell = $(this).find('tr').eq(focusCoordinates['row']).find('td').eq(focusCoordinates['column']);
                    $cell.is(':empty') ? $cell.blur() : $cell.find('.word-item').blur();
                    break;
                }
            case KEYCODE_RIGHT:
                e.preventDefault();
                moveRight.apply(this, [focusCoordinates])
                break;
            case KEYCODE_HOME:
                {
                    if (e.ctrlKey)
                        focusCoordinates['row'] = 0;
                    focusCoordinates['column'] = 0;
                    moveTo.apply(this, [focusCoordinates['row'], focusCoordinates['column']]);
                    e.preventDefault();
                    break;
                }
            case KEYCODE_END:
                {
                    if (e.ctrlKey)
                        focusCoordinates['row'] = $(this).find('tr').length - 1;
                    focusCoordinates['column'] = $(this).find('tr').first().find('td').length - 1;
                    moveTo.apply(this, [focusCoordinates['row'], focusCoordinates['column']]);
                    e.preventDefault();
                    break;
                }
            case KEYCODE_ENTER:
            case KEYCODE_SPACE:
                {
                    e.preventDefault();
                    let { row, column } = focusCoordinates;
                    let $cell = $(this).find('tr').eq(row).find('td').eq(column);
                    if ($cell.is(':empty'))
                        $cell.trigger('click');
                    else
                        $cell.find('.word-item').first().trigger('click');
                    break;
                }
            default:
                return;
        }
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        let reset = function (focusCoordinates) {
            let $widget = $(this);
            focusCoordinates['row'] = 0;
            focusCoordinates['column'] = 0;
            $widget.find('.answer-status').attr('aria-label', '').empty();
            $widget.find('.drag-word-item').attr('tabindex', '').removeClass('focused').filter(':empty').attr('tabindex', '-1');
            let $btns = $widget.find('.word-item');
            $btns.attr('tabindex', -1).first().attr('tabindex', 0);
            $widget.find('.source-words').find('td').each(function (idx) { $(this).append($btns.eq(idx)); });
        }

        let init = function (focusCoordinates) {

            let $widget = $(this);
            let id = $widget.attr('id');
            let $source = $widget.find('.source-words');
            let { words, } = JSON.parse(b64DecodeUnicode($widget.data('content')));
            shuffle(words);
            // Carry on with initialization
            let $grabbed = null;
            let btnsArr = words.map((word, idx) => {
                let $status = $('<span />').attr('id', 'word-item-status-' + id + '-' + idx).addClass('status sr-only');
                let $content = $('<span />').attr('id', 'word-item-content-' + id + '-' + idx).text(word);
                return $('<button/>')
                    .attr('aria-labelledby', 'word-item-content-' + id + '-' + idx + ' ' + 'word-item-status-' + id + '-' + idx)
                    .attr('aria-grabbed', 'false')
                    .attr('draggable', 'true')
                    .attr('tabindex', '-1')
                    .attr('id', 'word-item-' + id + '-' + idx)
                    .addClass('word-item btn btn-success')
                    .append($content, $status);
            });
            let $btns = $(btnsArr).map(function () { return this.toArray(); });
            $btns.first().attr('tabindex', 0);
            $source.find('td').each(function (idx) { $(this).append($btns.eq(idx)); });
            $widget.on('keydown', function (e) { onKeyDown.apply(this, [e, focusCoordinates]) });

            let dropItem = function (e) {
                e.preventDefault();
                if ($grabbed) {
                    if ($(this).is(':empty')) {
                        disableFocus.apply($widget);
                        $(this).attr('tabindex', '').addClass('focused').append($grabbed);
                    }
                    $grabbed.attr('aria-grabbed', 'false');
                    $grabbed.attr('tabindex', 0);
                    $grabbed.find('.status').text('');
                    $grabbed.removeClass('selected');
                    $grabbed.focus();
                    $grabbed = null;
                    $widget.find('.word-list').attr('aria-dropeffect', '');
                    $widget.find('.answer-status').attr('aria-label', '').empty();
                }
            }

            let dragItem = function (e) {
                e.stopPropagation();
                $widget.find('.word-list').attr('aria-dropeffect', 'move');
                if ($grabbed) {
                    $grabbed.find('.status').text('');
                    $grabbed.removeClass('selected');
                    $grabbed.attr('aria-grabbed', 'false');
                }
                $grabbed = $(this);
                $grabbed.addClass('selected');
                $grabbed.find('.status').text(i18n('sentence-order-state-selected'));
                $grabbed.attr('aria-grabbed', 'true');
                $(this).closest('.drag-word-item').attr('tabindex', '-1');
            }

            let drop = function (e) {
                let data = e.dataTransfer.getData("text");
                $grabbed = $(document.getElementById(data));
                dropItem.apply(e.target, [e]);
            }

            let drag = function (e) {
                e.dataTransfer.setData("text", e.target.id);
                dragItem.apply(e.target, [e]);
            }

            $widget.on('click', '.drag-word-item', dropItem);
            $widget.on('click', '.word-item', dragItem);

            $widget.find('.word-item').each(function () {
                this.addEventListener('dragstart', drag);
            });

            $widget.find('.drag-word-item').each(function () {
                this.addEventListener('dragover', function (e) {
                    if ($(this).is(':empty'))
                        e.preventDefault()
                });
                this.addEventListener('drop', drop);
            });
        }

        $('.sentences-container').each(function () {

            let $container = $(this);
            let $widgets = $container.find('.widget-sentence-order');
            let id = $container.attr('id');

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH")
                    return;

                let $cells = $container.find('td');
                let $selected = $cells.filter(function () { return $(this).hasClass('focused') }).first()
                if (!$selected.length) {
                    $selected = $cells.eq(0);
                }
                focusCell.apply($selected.get(0));
                if (action === "START" || action === "CURRENT")
                    return;

                if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else if (action === "NEXT" || action === "PREVIOUS") {
                    let position = $cells.index($selected);
                    let nextPos = action === "NEXT" ? ((position + 1) % $cells.length) : ((position - 1) % $cells.length);
                    let $nextCell = $cells.eq(nextPos);
                    disableFocus.apply($selected.closest('.widget-sentence-order').get(0));
                    focusCell.apply($nextCell.get(0));
                }
                else if (action === "GOTO") {
                    let nextPos = (parseInt(entities['target-position']) - 1) % $widgets.length;
                    let $nextCell = $widgets.eq(nextPos).find('td').first();
                    disableFocus.apply($selected.closest('.widget-sentence-order').get(0));
                    focusCell.apply($nextCell.get(0));
                }
                else {
                    switch (action) {
                        case "SELECT":
                            $selected.is(':empty') ? $selected.trigger('click') : $selected.find('.word-item').trigger('click');
                            break;
                        case "CHECK": $container.find('.btn-check').trigger('click'); break;
                        case "RESET": $container.find('.btn-reset').trigger('click'); break;
                        case "REPEAT": $container.find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-sentence-order'))); break;
                        case "NONE":
                        default:
                            $container.find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }
            };
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);

            $(this).on('click', '.btn-check', function () {

                let gamification = $('body').hasClass('gamification');
                let score = 0;
                $widgets.each(function () {
                    let { words, solutions } = JSON.parse(b64DecodeUnicode($(this).data('content')));
                    let myWords = $.makeArray($(this).find('.target-words .word-item').map(function () {
                        return $(this).text().trim();
                    }));

                    let valid;
                    for (let solution in solutions) {
                        let tokens = solutions[solution].split(/\s+/);
                        valid = true;
                        for (let token in tokens) {
                            if (tokens[token] !== myWords[token])
                                valid = false;
                        }
                        if (valid) {
                            score += 1;
                            break;
                        }
                    }

                    if (!gamification) {
                        let $status = $("<i />")
                            .attr('aria-hidden', 'true')
                            .attr('title', i18n(valid ? "TextCorrect" : "TextIncorrect"))
                            .addClass("icon " + (valid ? "correct fas fa-check" : "wrong fas fa-times"));
                        $(this).find('.answer-status')
                            .attr('aria-label', i18n(valid ? "TextCorrect" : "TextIncorrect"))
                            .html($status)
                    }
                });
                $(this).trigger('gamificate', [score === $widgets.length, score / $widgets.length]);
                if (!gamification) {
                    if (score === $widgets.length)
                        setObjetivoCompleto("objetivo" + id, $container.data('desc'), $container.data('desc'));
                    $container.find('.resultado').html(i18n("TextNumberCorrect", { num: score }));
                }

            });

            $(this).on('click', '.btn-reset', function () {
                $container.find('.resultado').empty();
                $widgets.each(function () { $(this).trigger('reset'); });
            });

            $widgets.each(function () {
                let focusCoordinates = { 'row': 0, 'column': 0 };
                let widget = this;
                init.apply(widget, [focusCoordinates]);
                $(this).on('reset', function () {
                    reset.apply(widget, [focusCoordinates]);
                });
            });
        })

    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */

(function () {

    const NAVIGATION_TERMS = 0;
    const NAVIGATION_OPTIONS = 1;
    // Patch to allow NVDA to read the content of the dropdown menu
    const FOCUS_DELAY_MS = 100;

    const KEYCODE_UP = 38;
    const KEYCODE_DOWN = 40;
    const KEYCODE_LEFT = 37;
    const KEYCODE_RIGHT = 39;
    const KEYCODE_HOME = 36;
    const KEYCODE_END = 35;
    const KEYCODE_ENTER = 13;
    const KEYCODE_SPACE = 32;
    const KEYCODE_ESCAPE = 27;

    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let onLanguageLoaded = function (err, i18n) {

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        let onKeyDownButton = function (e) {
            let $target = $(this).closest('.dropdown').find('.dropdown-menu');
            let $btns = $(this).closest('.widget-match-columns').find('.column-term .btn');
            let position = $btns.index($(this));
            let key = e.which || e.keyCode;
            switch (key) {
                case KEYCODE_HOME:
                    $btns.attr('tabindex', "-1");
                    $btns.first().attr('tabindex', '0').focus();
                    break;
                case KEYCODE_END:
                    $btns.attr('tabindex', "-1");
                    $btns.last().attr('tabindex', '0').focus();
                    break;
                case KEYCODE_LEFT:
                    $btns.attr('tabindex', "-1");
                    $btns.eq((position - 1) % $btns.length).attr('tabindex', '0').focus();
                    break;
                case KEYCODE_RIGHT:
                    $btns.attr('tabindex', "-1");
                    $btns.eq((position + 1) % $btns.length).attr('tabindex', '0').focus();
                    break;
                case KEYCODE_UP:
                    setTimeout(function () { $target.find('.column-link').last().focus(); }, FOCUS_DELAY_MS);
                    break;
                case KEYCODE_DOWN:
                case KEYCODE_ENTER:
                case KEYCODE_SPACE:
                    setTimeout(function () { $target.find('.column-link').first().focus(); }, FOCUS_DELAY_MS);
                    break;
                case KEYCODE_ESCAPE:
                    $(this).blur();
                    break;
                default:
                    return;
            }
        }

        let onKeyDownDropdown = function (e) {

            let $links = $(this).find('.column-link');
            let $focused = $links.filter(':focus').first();
            let $selected = $focused.length ? $focused : $links.first();
            let position = $links.index($selected);
            let key = e.which || e.keyCode;
            switch (key) {
                case KEYCODE_UP:
                    $links.eq((position - 1) % $links.length).focus();
                    e.preventDefault();
                    break;
                case KEYCODE_DOWN:
                    $links.eq((position + 1) % $links.length).focus();
                    e.preventDefault();
                    break;
                case KEYCODE_HOME:
                    $links.first().focus();
                    e.preventDefault();
                    break;
                case KEYCODE_END:
                    $links.last().focus();
                    e.preventDefault();
                    break;
                default:
                    return;
            }
        }

        let init = function () {
            let $widget = $(this);
            let mode = NAVIGATION_TERMS;
            let id = $(this).attr('id');
            let $grabbed = null;
            // Get the solutions to the widget
            let solutions = JSON.parse(b64DecodeUnicode($widget.data('content')));
            // All the terms sorted alphabetically
            let terms = solutions.flat();
            terms.sort((a, b) => a.localeCompare(b));
            let $columns = $widget.find('.column-term');
            $widget.find('.term-button').first().attr('tabindex', '0');
            $columns.each(function (idx) {
                $(this).addClass('init').find('.term-button').data('term', terms[idx]).html(terms[idx]);
            });

            let reset = function () {

                $widget.find('.column-list').attr('aria-dropeffect', '');
                if ($grabbed) {
                    $grabbed.attr('aria-grabbed', 'false');
                    $grabbed = null;
                }
                let $columns = $widget.find('.column-term');
                $columns.removeClass('init');
                $widget.find('.term-button').text('').data('term', '').attr('tabindex', '-1').first().attr('tabindex', '0');
                $widget.find('.match-terms .column-list').append($columns);
                $columns.each(function (idx) {
                    $(this).addClass('init').find('.term-button').data('term', terms[idx]).html(terms[idx]);
                });
                $widget.closest('.content-element').find('.resultado').empty();
            }

            let dropItem = function (e) {
                e.preventDefault();
                if ($grabbed) {
                    $(this).append($grabbed);
                    $grabbed.attr('aria-grabbed', 'false');
                    $grabbed.find('.btn').focus();
                    $grabbed = null;
                }
                $widget.find('.column-list').attr('aria-dropeffect', '');
            }

            let dragItem = function (e) {
                e.stopPropagation();
                $widget.find('.column-list').attr('aria-dropeffect', 'move');
                if ($grabbed) {
                    $grabbed.attr('aria-grabbed', 'false');
                }
                $grabbed = $(this);
                $grabbed.attr('aria-grabbed', 'true');
            }

            let drop = function (e) {
                let data = e.dataTransfer.getData("id");
                $grabbed = $(document.getElementById(data));
                dropItem.apply(e.target, [e]);
            }

            let drag = function (e) {
                let $target = $(e.target).closest('.column-term');
                // Hide previously open dropdowns
                $widget.find(".dropdown.show").dropdown('toggle');
                // BUG: some dropdowns are not hidden correctly when dragging
                $widget.find(".dropdown").not('.show').find('.dropdown-menu.show').removeClass('show');
                e.dataTransfer.setData("id", $target.attr('id'));
                e.dataTransfer.effectAllowed = "move";
                dragItem.apply($target[0], [e]);
            }

            $widget.find('.column-term').each(function () {
                this.addEventListener('dragstart', drag);
            });

            $widget.find('.column-list').each(function () {
                this.addEventListener('dragover', function (e) {
                    if ($(e.target).is('.column-list')) {
                        e.dataTransfer.dropEffect = "move";
                        e.preventDefault()
                    }
                });
                this.addEventListener('drop', drop);
            });

            $widget.on('click', '.column-link', function (e) {
                dropItem.apply(document.getElementById($(this).data('column')), [e]);
            });

            $widget.on('click', '.term-button', function () {
                let self = this;
                setTimeout(function () { $(self).closest('.dropdown').find('.column-link').first().focus(); }, FOCUS_DELAY_MS);
            });

            $widget.on('keydown', '.dropdown-menu', onKeyDownDropdown);
            $widget.on('keydown', '.dropdown .btn[data-toggle="dropdown"]', onKeyDownButton);

            $widget.on('shown.bs.dropdown', '.dropdown', function (e) {
                dragItem.apply($(this).closest('.column-term')[0], [e]);
            });

            $widget.on('hidden.bs.dropdown', '.dropdown', function () {
                let $elem = $(this).closest('.column-term');
                $elem.attr('aria-grabbed', 'false');
                $widget.find('.column-list').attr('aria-dropeffect', '');
            });

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH")
                    return;

                if ($widget.find('.dropdown.show').length)
                    mode = NAVIGATION_OPTIONS;
                else
                    mode = NAVIGATION_TERMS;

                // Get the list of elements to interact with
                let $elems;
                if (mode === NAVIGATION_TERMS)
                    $elems = $widget.find('.column-term .btn');
                else {
                    let $dropdown = $widget.find('.dropdown.show').first();
                    $elems = $dropdown.find('.column-link');
                }
                // Set the focused element
                let $selected = $elems.filter(':focus').first();
                if (!$selected.length)
                    $selected = $elems.eq(0);
                $selected.focus();

                if (action === "START" || action === "CURRENT")
                    return;

                if (action === "CLOSE" && ($(".modal.show").length || $(".alert").length)) {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                    // Hide previously open dropdowns
                    $widget.find(".dropdown.show").dropdown('toggle');
                    // BUG: some dropdowns are not hidden correctly when dragging
                    $widget.find(".dropdown").not('.show').find('.dropdown-menu.show').removeClass('show');
                    $grabbed && $grabbed.focus();
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else if (action === "NEXT" || action === "PREVIOUS") {
                    let position = $elems.index($selected);
                    let nextPos = action === "NEXT" ? ((position + 1) % $elems.length) : ((position - 1) % $elems.length);
                    let $nextElem = $elems.eq(nextPos);
                    $nextElem.focus();
                }
                else if (action === "GOTO") {
                    let nextPos = (parseInt(entities['target-position']) - 1) % $elems.length;
                    $elems.eq(nextPos).focus();
                }
                else if (action === "MATCH" && mode === NAVIGATION_TERMS) {
                    let position = parseInt(entities['number']) - 1;
                    let $columns = $widget.find('.match-column .column-list');
                    let $term = $selected.closest('.column-term');
                    $columns.eq(position % $columns.length).append($term);
                    $selected.focus();
                }
                else {
                    switch (action) {
                        case "SELECT":
                            $selected.trigger('click');
                            break;
                        case "CHECK": $widget.closest('.content-element').find('.btn-check').trigger('click'); break;
                        case "RESET": $widget.closest('.content-element').find('.btn-reset').trigger('click'); break;
                        case "REPEAT": $widget.closest('.content-element').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-match-columns-'+ (mode === NAVIGATION_OPTIONS ? 'options' : 'terms')))); break;
                        case "NONE":
                        default:
                            $widget.find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }
            };
            $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);

            $widget.closest('.content-element').on('click', '.btn-check', function () {

                let gamification = $('body').hasClass('gamification');
                let $terms = $(this).closest('.content-element').find('.match-column .column-term');
                let total = $terms.length;
                let $columns = $(this).closest('.content-element').find('.match-column .column-list');
                let $wrongTerms = $terms.filter(function () {
                    let idx = $columns.index($(this).closest('.column-list'));
                    return !solutions[idx].includes($(this).find('.term-button').data('term'));
                });
                let score = $terms.length - $wrongTerms.length;
                $(this).trigger('gamificate', [score === total, score / total]);
                if (!gamification) {
                    $widget.find('.match-terms .column-list').append($wrongTerms);
                    $widget.closest('.content-element').find('.resultado').html(i18n("TextNumberCorrect", { num: score }));
                    if (score === total)
                        setObjetivoCompleto("objetivo" + id, $widget.data('desc'), $widget.data('desc'));
                }
            });

            $widget.closest('.content-element').on('click', '.btn-reset', reset);

        }

        $('.widget-match-columns').each(init);

    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))
})();
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */

(function () {

    const NAVIGATION_TERMS = 0;
    const NAVIGATION_OPTIONS = 1;
    // Patch to allow NVDA to read the content of the dropdown menu
    const FOCUS_DELAY_MS = 100;

    const KEYCODE_UP = 38;
    const KEYCODE_DOWN = 40;
    const KEYCODE_LEFT = 37;
    const KEYCODE_RIGHT = 39;
    const KEYCODE_HOME = 36;
    const KEYCODE_END = 35;
    const KEYCODE_ENTER = 13;
    const KEYCODE_SPACE = 32;
    const KEYCODE_ESCAPE = 27;

    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let shuffle = function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let resizeSVG = function () {
        $(document).find('.widget-puzzle').each(function () {
            let $layer = $(this).find('.interactive-layer').first();
            let viewBox = $layer.attr('viewBox');
            if (viewBox) {
                let $placeholders = $layer.find('.clip-placeholder');
                let imgWidth = $layer.attr('viewBox').split(' ')[2];
                let currWidth = $layer.width();
                let ratio = imgWidth / currWidth;
                let minWidth = Math.min(...$placeholders.map(function () { return parseInt($(this).attr('width')) }).get());
                let minHeight = Math.min(...$placeholders.map(function () { return parseInt($(this).attr('height')) }).get());
                let minDim = Math.min(minWidth, minHeight);
                $layer.find('.clip-text').each(function () { $(this).css('font-size', Math.min(minDim, Math.round(30 * ratio)) + 'px'); });
                $layer.find('.clip-text-circle').each(function () {
                    $(this).attr('r', Math.min(minDim / 2, Math.round(24 * ratio)))
                    $(this).css('stroke-width', Math.round(2 * ratio))
                })
            }
        })
    }

    $(window).on('resize', resizeSVG);

    // Creates a clip of the background image as an input img
    let createPiece = function (canvas, id, pos, alt) {
        return $('<input />')
            .attr('data-pos', pos + 1)
            .attr('id', 'piece-' + id + '-' + pos)
            .addClass('piece img-responsive')
            .attr('type', 'image')
            .attr('draggable', 'true')
            .attr('aria-grabbed', 'false')
            .attr('aria-expanded', 'false')
            .attr('aria-haspopup', 'true')
            .attr('aria-controls', 'dropdown-piece-' + id + '-' + pos)
            .attr('alt', alt)
            .attr('data-toggle', 'dropdown')
            .attr('tabindex', '-1')
            .attr('src', canvas.toDataURL());
    }

    // Clips the given rectangle from the background image
    let clipRect = function (otherCtx, rect, id, idx) {
        // Turn rect into an image
        let imgData = otherCtx.getImageData(rect.x, rect.y, rect.w, rect.h);
        let canvas = document.createElement('canvas');
        canvas.width = rect.w;
        canvas.height = rect.h;
        let ctx = canvas.getContext('2d');
        ctx.putImageData(imgData, 0, 0);
        let $piece = createPiece(canvas, id, idx, rect.altImg);
        // Remove clipped rect from source
        otherCtx.fillRect(rect.x, rect.y, rect.w, rect.h);
        return $piece;
    }

    // Plays a message for screen-readers
    let playReader = async function (id, message) {
        // Screen readers need a small delay to read the new message
        await new Promise((resolve) => {
            let $container = $('#tta-message-' + id);
            $container.text("");
            setTimeout(function () {
                let $msg = $('<span />').addClass('sr-only').text(message);
                $container.append($msg);
                resolve();
                setTimeout(function () { $msg.remove(); }, 300);
            }, 100);
        });
    };

    let onLanguageLoaded = function (err, i18n) {

        let numPuzzles = $('.widget-puzzle').length;
        let loadedPuzzles = 0;

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };

        // Handle item navigation using keystrokes
        let onKeyDownInput = function (e) {
            let $target = $(this).closest('.dropdown').find('.dropdown-menu');
            let $inputs = $(this).closest('.widget-puzzle').find('.piece');
            let position = $inputs.index($(this));
            let key = e.which || e.keyCode;
            switch (key) {
                case KEYCODE_HOME:
                    $inputs.attr('tabindex', "-1");
                    $inputs.first().attr('tabindex', '0').focus();
                    break;
                case KEYCODE_END:
                    $inputs.attr('tabindex', "-1");
                    $inputs.last().attr('tabindex', '0').focus();
                    break;
                case KEYCODE_LEFT:
                    $inputs.attr('tabindex', "-1");
                    $inputs.eq((position - 1) % $inputs.length).attr('tabindex', '0').focus();
                    break;
                case KEYCODE_RIGHT:
                    $inputs.attr('tabindex', "-1");
                    $inputs.eq((position + 1) % $inputs.length).attr('tabindex', '0').focus();
                    break;
                case KEYCODE_UP:
                    setTimeout(function () { $target.find('.clip-link').last().focus(); }, FOCUS_DELAY_MS);
                    break;
                case KEYCODE_DOWN:
                case KEYCODE_ENTER:
                case KEYCODE_SPACE:
                    setTimeout(function () { $target.find('.clip-link').first().focus(); }, FOCUS_DELAY_MS);
                    break;
                case KEYCODE_ESCAPE:
                    $(this).blur();
                    break;
                default:
                    return;
            }
        }

        // Handle dropdown navigation using keystrokes
        let onKeyDownDropdown = function (e) {

            let $links = $(this).find('.clip-link');
            let $focused = $links.filter(':focus').first();
            let $selected = $focused.length ? $focused : $links.first();
            let position = $links.index($selected);
            let key = e.which || e.keyCode;
            switch (key) {
                case KEYCODE_UP:
                    $links.eq((position - 1) % $links.length).focus();
                    e.preventDefault();
                    break;
                case KEYCODE_DOWN:
                    $links.eq((position + 1) % $links.length).focus();
                    e.preventDefault();
                    break;
                case KEYCODE_HOME:
                    $links.first().focus();
                    e.preventDefault();
                    break;
                case KEYCODE_END:
                    $links.last().focus();
                    e.preventDefault();
                    break;
                default:
                    return;
            }
        }

        $('.widget-puzzle').each(function () {
            let $widget = $(this);
            let $grabbed = null;
            let id = $widget.attr('id');
            let $background = $widget.find('.puzzle-background').first();
            let $layer = $widget.find('.interactive-layer').first();
            let rects = JSON.parse(b64DecodeUnicode($widget.data('content')));
            let mode = NAVIGATION_TERMS;

            // Moves the given piece to the source list and notifies screen-readers
            let moveToSource = function () {
                let $target = $widget.find('.piece-placeholder:empty').first();
                $target.append($(this).closest('.dropdown'));
                playReader(id, i18n("puzzle-move-element-back", { element: $(this).attr('alt') }));
            }

            let dropItem = function (e) {
                e.preventDefault();
                if ($grabbed) {
                    let $dropdown = $grabbed.parent();
                    let $previousContainer = $dropdown.parent();
                    $previousContainer.empty();
                    $(this).append($dropdown);
                    $grabbed.attr('aria-grabbed', 'false');
                    $grabbed.focus();
                    $grabbed = null;
                }
                $widget.find('.piece-wrapper, .piece-placeholder').attr('aria-dropeffect', '');
            }

            let dragItem = function (e) {
                e.stopPropagation();
                $widget.find('.piece-wrapper:empty, .piece-placeholder:empty').attr('aria-dropeffect', 'move');
                if ($grabbed) {
                    $grabbed.attr('aria-grabbed', 'false');
                }
                $grabbed = $(this);
                $grabbed.attr('aria-grabbed', 'true');
            }

            let drop = function (e) {
                let data = e.dataTransfer.getData("id");
                $grabbed = $(document.getElementById(data));
                dropItem.apply(this, [e]);
            }

            let drag = function (e) {
                // Hide previously open dropdowns
                $widget.find(".dropdown.show").dropdown('toggle');
                // BUG: some dropdowns are not hidden correctly when dragging
                $widget.find(".dropdown").not('.show').find('.dropdown-menu.show').removeClass('show');
                e.dataTransfer.setData("id", this.id);
                e.dataTransfer.effectAllowed = "move";
                dragItem.apply(this, [e]);
            }

            let tmpImage = new Image;
            tmpImage.onload = function () {
                let canvas = document.createElement("canvas");
                canvas.width = this.width;
                canvas.height = this.height;
                let ctx = canvas.getContext('2d');
                ctx.fillStyle = "white";
                ctx.fillRect(0,0,canvas.width, canvas.height);
                ctx.drawImage(tmpImage, 0, 0);
                ctx.fillStyle = "#fff";
                let pieces = rects.map((rect, idx) => clipRect(ctx, rect, id, idx));
                shuffle(pieces);
                $('#pieces-list-' + id + ' .piece-placeholder .dropdown').each(function (idx) {
                    $(this).append(pieces[idx]);
                    idx === 0 && pieces[idx].attr('tabindex', 0);
                });
                $widget.find('[data-toggle]').dropdown();
                $layer.attr('viewBox', `0 0 ${this.width} ${this.height}`)
                $background.attr('src', canvas.toDataURL('image/jpeg'));
                $widget.find('.piece').each(function () {
                    this.addEventListener('dragstart', drag);
                }).on('click', function () {
                    let self = this;
                    setTimeout(function () { $(self).closest('.dropdown').find('.clip-link').first().focus(); }, FOCUS_DELAY_MS);
                });

                $widget.on('keydown', '.dropdown-menu', onKeyDownDropdown);
                $widget.on('keydown', '.dropdown .piece[data-toggle="dropdown"]', onKeyDownInput);
                $widget.find('.piece-wrapper, .piece-placeholder').each(function () {
                    this.addEventListener('dragover', function (e) {
                        if ($(this).find('.piece').length === 0) {
                            e.dataTransfer.dropEffect = "move";
                            e.preventDefault()
                        }
                    });
                    this.addEventListener('drop', drop);
                });

                let onSpeechToAction = function (event, action, entities) {

                    if (action === "FINISH") return;
                    if ($widget.find('.dropdown.show').length)
                        mode = NAVIGATION_OPTIONS;
                    else
                        mode = NAVIGATION_TERMS;

                    // Get the list of elements to interact with
                    let $elems;
                    if (mode === NAVIGATION_TERMS)
                        $elems = $widget.find('.piece');
                    else {
                        let $dropdown = $widget.find('.dropdown.show').first();
                        $elems = $dropdown.find('.clip-link');
                    }
                    // Set the focused element
                    let $selected = $elems.filter(':focus').first();
                    if (!$selected.length)
                        $selected = $elems.eq(0);
                    $selected.focus();
                    if (action === "START" || action === "CURRENT")
                        return;

                    if (action === "CLOSE") {
                        $(".modal.show").length && $('.modal.show').modal('hide');
                        $(".alert").length && $('.alert').alert('close')
                        // Hide previously open dropdowns
                        $widget.find(".dropdown.show").dropdown('toggle');
                        // BUG: some dropdowns are not hidden correctly when dragging
                        $widget.find(".dropdown").not('.show').find('.dropdown-menu.show').removeClass('show');
                        $grabbed && $grabbed.focus();
                    }
                    else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                    else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                    else if (action === "NEXT" || action === "PREVIOUS") {
                        let position = $elems.index($selected);
                        let nextPos = action === "NEXT" ? ((position + 1) % $elems.length) : ((position - 1) % $elems.length);
                        let $nextElem = $elems.eq(nextPos);
                        $nextElem.focus();
                    }
                    else if (action === "GOTO") {
                        let nextPos = (parseInt(entities['target-position']) - 1) % $elems.length;
                        $elems.eq(nextPos).focus();
                    }
                    else if (action === "MATCH" && mode === NAVIGATION_TERMS) {
                        let pos = parseInt(entities['number']);
                        let $target = $widget.find('.piece-wrapper[data-pos="' + pos + '"]');
                        let $piece = $target.find('.piece').first();
                        if ($piece.length) moveToSource.apply($piece[0]);
                        $grabbed = $selected;
                        setTimeout(function () { dropItem.apply($target[0], [event]) }, 1);
                    }
                    else {
                        switch (action) {
                            case "SELECT":
                                $selected.trigger('click');
                                break;
                            case "CHECK": $widget.closest('.content-element').find('.btn-check').trigger('click'); break;
                            case "RESET": $widget.closest('.content-element').find('.btn-reset').trigger('click'); break;
                            case "REPEAT":
                                $widget.closest('.content-element').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-puzzle-'+ (mode === NAVIGATION_OPTIONS ? 'options' : 'terms')))); break;
                            case "NONE":
                            default:
                                $widget.closest('.content-element').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                                break;
                        }
                    }
                };
                $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);

                $widget.closest('.content-element').on('click', '.btn-check', function () {

                    let gamification = $('body').hasClass('gamification');
                    let $pieces = $(this).closest('.content-element').find('.piece-wrapper .piece');
                    let $wrongPieces = $pieces.filter(function (idx) {
                        return $(this).data('pos') !== $(this).closest('.piece-wrapper').data('pos');
                    });
                    let score = $pieces.length - $wrongPieces.length;
                    $(this).trigger('gamificate', [score === rects.length, score / rects.length]);
                    if (!gamification) {
                        let $placeholders = $widget.find('.piece-placeholder:empty');
                        $wrongPieces.each(function(idx) {
                            $placeholders.eq(idx).append($(this).closest('.dropdown'));
                        });
                        $widget.closest('.content-element').find('.resultado').html(i18n("TextNumberCorrect", { num: score }));
                        if (score === rects.length)
                            setObjetivoCompleto("objetivo" + id, $widget.data('desc'), $widget.data('desc'));
                    }
                });

                $widget.closest('.content-element').on('click', '.btn-reset', function () {

                    $widget.find('.piece-wrapper, .piece-placeholder').attr('aria-dropeffect', '');
                    if ($grabbed) {
                        $grabbed.attr('aria-grabbed', 'false');
                        $grabbed = null;
                    }
                    let $pieces = $widget.find('.piece-wrapper .piece');
                    $widget.find('.piece-placeholder:empty').each(function (idx) {
                        $(this).append($pieces.eq(idx).closest('.dropdown'));
                    });
                    $widget.closest('.content-element').find('.resultado').empty();
                });

                $widget.on('click', '.clip-link', function (e) {
                    e.preventDefault();
                    let pos = $(this).data('pos');
                    let $target = $widget.find('.piece-wrapper[data-pos="' + pos + '"]');
                    let $piece = $target.find('.piece').first();
                    if ($piece.length) moveToSource.apply($piece[0]);
                    setTimeout(function () { dropItem.apply($target[0], [e]) }, 1);
                });

                // Fix bug where drawn buttons appear on top of the dropdown menu
                $widget.on('show.bs.dropdown', '.dropdown', function (e) {
                    let $object = $(this).closest('foreignObject');
                    if ($object.length) $layer.append($object);
                });

                $widget.on('shown.bs.dropdown', '.dropdown', function (e) {
                    dragItem.apply($(this).find('.piece')[0], [e]);
                });

                // Place the foreign container in its correct position again
                $widget.on('hide.bs.dropdown', '.dropdown', function () {
                    let $wrapper = $(this).closest('.piece-wrapper')
                    let $object = $(this).closest('foreignObject');
                    if ($wrapper.length && $object.length) {
                        let pos = $wrapper.data('pos') + 1;
                        let $target = $widget.find('.piece-wrapper[data-pos="' + pos + '"]').closest('foreignObject');
                        $target.length && $object.insertBefore($target);
                    }
                });

                $widget.on('hidden.bs.dropdown', '.dropdown', function () {
                    let $elem = $(this).find('.piece');
                    $elem.attr('aria-grabbed', 'false');
                    $widget.find('.piece-wrapper, .piece-placeholder').attr('aria-dropeffect', '');
                });
                loadedPuzzles += 1;
                if (loadedPuzzles === numPuzzles)
                    setTimeout(resizeSVG, 100)
            };
            tmpImage.crossOrigin = "Anonymous";
            tmpImage.src = $background.data('src');
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))

})();
/* global $ */
/* global i18next */
/* global setObjetivoCompleto */

(function () {

    let b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    let onLanguageLoaded = function (err, i18n) {

		// Creates a clip of the background image as an input img
		let createPiece = function (canvas, id, pos, altImg) {
			let alt = i18n('animation-show-element', {"pos": pos + 1});
			return $('<input />')
				.attr('data-pos', pos + 1)
				.attr('id', 'piece-' + id + '-' + pos)
				.addClass('piece img-responsive')
				.attr('type', 'image')
				.attr('alt', alt)
				.attr('aria-disabled', 'false')
				.data('alt', alt)
				.data('img', altImg)
				.attr('src', canvas.toDataURL());
		}

		// Clips the given rectangle from the background image
		let clipRect = function (otherCtx, rect, id, idx, family, color) {
			let lineWidth = 4;
			otherCtx.beginPath();
			otherCtx.font = "bold 35px " + family;
			otherCtx.fillStyle = 'white';
			otherCtx.strokeStyle = color;
			otherCtx.lineWidth = lineWidth;
			// Turn rect into an image
			let imgData = otherCtx.getImageData(rect.x, rect.y, rect.w, rect.h);
			let canvas = document.createElement('canvas');
			canvas.width = rect.w;
			canvas.height = rect.h;
			let ctx = canvas.getContext('2d');
			ctx.putImageData(imgData, 0, 0);
			let $piece = createPiece(canvas, id, idx, rect.altImg);
			// Remove clipped rect from source
			otherCtx.fillRect(rect.x, rect.y, rect.w, rect.h);
			// Draw a rect marker on the canvas
			otherCtx.rect(rect.x + lineWidth, rect.y + lineWidth, rect.w - lineWidth*2, rect.h - lineWidth*2);
			otherCtx.stroke();
			// Draw the number of the area region
			otherCtx.textAlign = "center";
			otherCtx.textBaseline = "middle";
			otherCtx.fillStyle = color;
			otherCtx.fillText(idx + 1, rect.x + rect.w/2, rect.y + lineWidth / 2 + rect.h/2); 
			otherCtx.closePath();
			return $piece;
		}

        let makeAlert = function (type, message) {

            let $dismissButton = $('<button />')
                .data('dismiss', 'alert')
                .attr('type', 'button')
                .attr('aria-hidden', 'false')
                .attr('aria-label', i18n('Close')) //
                .addClass('close')
                .html(' <span aria-hidden="true">&times;</span>');

            let $alert = $("<div />")
                .addClass('alert alert-dismissible fade show ' + type)
                .html(message)
                .append($dismissButton);

            $dismissButton.on('click', function () { $alert.alert('close') });
            let time = Math.max(6000, message.length * 60);
            setTimeout(function () { $alert.alert('close') }, time);
            $alert.alert();
            return $alert;
        };


        $('.widget-animation').each(function () {
            let $widget = $(this);
            let style = getComputedStyle($widget.closest('.content-element').find('[id^=heading-]')[0]);
            let family = style['font-family'];
            let color = style['color'];
            let id = $widget.attr('id');
            let $background = $widget.find('.puzzle-background').first();
            let $layer = $widget.find('.interactive-layer').first();
            let rects = JSON.parse(b64DecodeUnicode($widget.data('content')));
            let tmpImage = new Image;
            let hiddenPieces = rects.length;

            let onSpeechToAction = function (event, action, entities) {

                if (action === "FINISH") return;
                let $elems = $widget.find('.piece');
                // Set the focused element
                let $selected = $elems.filter(':focus').first();
                if (!$selected.length)
                    $selected = $elems.eq(0);
                $selected.focus();
                if (action === "START" || action === "CURRENT")
                    return;

                if (action === "CLOSE") {
                    $(".modal.show").length && $('.modal.show').modal('hide');
                    $(".alert").length && $('.alert').alert('close')
                }
                else if (action === "SCROLL DOWN") window.scrollBy(0, window.innerHeight * 0.4);
                else if (action === "SCROLL UP") window.scrollBy(0, -window.innerHeight * 0.4);
                else if (action === "NEXT" || action === "PREVIOUS") {
                    let position = $elems.index($selected);
                    let nextPos = action === "NEXT" ? ((position + 1) % $elems.length) : ((position - 1) % $elems.length);
                    let $nextElem = $elems.eq(nextPos);
                    $nextElem.focus();
                }
                else if (action === "GOTO") {
                    let nextPos = (parseInt(entities['target-position']) - 1) % $elems.length;
                    $elems.eq(nextPos).focus();
                }
                else {
                    switch (action) {
                        case "SELECT": $selected.trigger('click'); break;
                        case "RESET": $widget.closest('.content-element').find('.btn-reset').trigger('click'); break;
                        case "REPEAT": $widget.closest('.content-element').find('.tta-message').append(makeAlert('alert-info', i18n('tta-info-animation'))); break;
                        case "NONE":
                        default:
                            $widget.closest('.content-element').find('.tta-message').append(makeAlert('alert-danger', i18n('tta-error-message')));
                            break;
                    }
                }
            };

            tmpImage.onload = function () {
                let canvas = document.createElement("canvas");
                canvas.width = this.width;
                canvas.height = this.height;
                let ctx = canvas.getContext('2d');
                ctx.fillStyle = "white";
                ctx.fillRect(0,0,canvas.width, canvas.height);
                ctx.drawImage(tmpImage, 0, 0);
                ctx.fillStyle = "#fff";
                let pieces = rects.map((rect, idx) => clipRect(ctx, rect, id, idx, family, color));
                $widget.find('.piece-wrapper').each(function(idx) { $(this).append(pieces[idx]); });
                $layer.attr('viewBox', `0 0 ${this.width} ${this.height}`)
                $background.attr('src', canvas.toDataURL('image/jpeg'));

                $widget.on('click', '.piece', function() {
                    if ($(this).hasClass('show'))
                        return;
                    let position = $widget.find('.piece').index(this);
                    // Clear the current placeholder and refresh the image
                    let rect = rects[position];
                    ctx.fillStyle = 'white';
                    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
                    $background.attr('src', canvas.toDataURL('image/jpeg'));
                    // Show the hidden image and add it its alt test
                    $(this).attr('alt', $(this).data('img')).attr('aria-disabled', 'true').addClass('show');
                    hiddenPieces -= 1;
                    if (hiddenPieces == 0)
                        setObjetivoCompleto("objetivo" + id, $widget.data('desc'), $widget.data('desc'));
                });

                $('#speech-to-action-' + id).on('speech-to-action', onSpeechToAction);
                $widget.closest('.content-element').on('click', '.btn-reset', function () {
                    hiddenPieces = rects.length;
                    $widget.find('.piece').each(function() {
                        $(this).removeClass('show').attr('alt', $(this).data('img')).attr('aria-disabled', 'false');
                    })
                    rects.map((rect, idx) => clipRect(ctx, rect, id, idx, family, color));
                    setTimeout(function() { $background.attr('src', canvas.toDataURL('image/jpeg')); }, 200);
                });
            };
            tmpImage.crossOrigin = "Anonymous";
            tmpImage.src = $background.data('src');
        });
    }

    let currLang = $('html').attr('lang');
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	fetch(`${scriptPath}/../languages/${currLang}.json`)
        .then(response => response.json())
        .then(data => i18next.createInstance({ 'lng': currLang, 'resources': { [currLang]: { 'translation': data } } }, onLanguageLoaded))

})();
/* global $ */

$(document).ready(function() {
	if (window.location.hostname.startsWith("dev")) {
		$('#analytics a').attr('href', window.location.origin + "/la/");
	}
});
var DragDropTouch;
(function (DragDropTouch_1) {
    'use strict';
    /**
     * Object used to hold the data that is being dragged during drag and drop operations.
     *
     * It may hold one or more data items of different types. For more information about
     * drag and drop operations and data transfer objects, see
     * <a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer">HTML Drag and Drop API</a>.
     *
     * This object is created automatically by the @see:DragDropTouch singleton and is
     * accessible through the @see:dataTransfer property of all drag events.
     */
    var DataTransfer = (function () {
        function DataTransfer() {
            this._dropEffect = 'move';
            this._effectAllowed = 'all';
            this._data = {};
        }
        Object.defineProperty(DataTransfer.prototype, "dropEffect", {
            /**
             * Gets or sets the type of drag-and-drop operation currently selected.
             * The value must be 'none',  'copy',  'link', or 'move'.
             */
            get: function () {
                return this._dropEffect;
            },
            set: function (value) {
                this._dropEffect = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTransfer.prototype, "effectAllowed", {
            /**
             * Gets or sets the types of operations that are possible.
             * Must be one of 'none', 'copy', 'copyLink', 'copyMove', 'link',
             * 'linkMove', 'move', 'all' or 'uninitialized'.
             */
            get: function () {
                return this._effectAllowed;
            },
            set: function (value) {
                this._effectAllowed = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataTransfer.prototype, "types", {
            /**
             * Gets an array of strings giving the formats that were set in the @see:dragstart event.
             */
            get: function () {
                return Object.keys(this._data);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Removes the data associated with a given type.
         *
         * The type argument is optional. If the type is empty or not specified, the data
         * associated with all types is removed. If data for the specified type does not exist,
         * or the data transfer contains no data, this method will have no effect.
         *
         * @param type Type of data to remove.
         */
        DataTransfer.prototype.clearData = function (type) {
            if (type != null) {
                delete this._data[type.toLowerCase()];
            }
            else {
                this._data = {};
            }
        };
        /**
         * Retrieves the data for a given type, or an empty string if data for that type does
         * not exist or the data transfer contains no data.
         *
         * @param type Type of data to retrieve.
         */
        DataTransfer.prototype.getData = function (type) {
            return this._data[type.toLowerCase()] || '';
        };
        /**
         * Set the data for a given type.
         *
         * For a list of recommended drag types, please see
         * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Recommended_Drag_Types.
         *
         * @param type Type of data to add.
         * @param value Data to add.
         */
        DataTransfer.prototype.setData = function (type, value) {
            this._data[type.toLowerCase()] = value;
        };
        /**
         * Set the image to be used for dragging if a custom one is desired.
         *
         * @param img An image element to use as the drag feedback image.
         * @param offsetX The horizontal offset within the image.
         * @param offsetY The vertical offset within the image.
         */
        DataTransfer.prototype.setDragImage = function (img, offsetX, offsetY) {
            var ddt = DragDropTouch._instance;
            ddt._imgCustom = img;
            ddt._imgOffset = { x: offsetX, y: offsetY };
        };
        return DataTransfer;
    }());
    DragDropTouch_1.DataTransfer = DataTransfer;
    /**
     * Defines a class that adds support for touch-based HTML5 drag/drop operations.
     *
     * The @see:DragDropTouch class listens to touch events and raises the
     * appropriate HTML5 drag/drop events as if the events had been caused
     * by mouse actions.
     *
     * The purpose of this class is to enable using existing, standard HTML5
     * drag/drop code on mobile devices running IOS or Android.
     *
     * To use, include the DragDropTouch.js file on the page. The class will
     * automatically start monitoring touch events and will raise the HTML5
     * drag drop events (dragstart, dragenter, dragleave, drop, dragend) which
     * should be handled by the application.
     *
     * For details and examples on HTML drag and drop, see
     * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations.
     */
    var DragDropTouch = (function () {
        /**
         * Initializes the single instance of the @see:DragDropTouch class.
         */
        function DragDropTouch() {
            this._lastClick = 0;
            // enforce singleton pattern
            if (DragDropTouch._instance) {
                throw 'DragDropTouch instance already created.';
            }
            // detect passive event support
            // https://github.com/Modernizr/Modernizr/issues/1894
            var supportsPassive = false;
            document.addEventListener('test', function () { }, {
                get passive() {
                    supportsPassive = true;
                    return true;
                }
            });
            // listen to touch events
            if (navigator.maxTouchPoints) {
                var d = document, 
                    ts = this._touchstart.bind(this), 
                    tm = this._touchmove.bind(this), 
                    te = this._touchend.bind(this), 
                    opt = supportsPassive ? { passive: false, capture: false } : false;
                d.addEventListener('touchstart', ts, opt);
                d.addEventListener('touchmove', tm, opt);
                d.addEventListener('touchend', te);
                d.addEventListener('touchcancel', te);
            }
        }
        /**
         * Gets a reference to the @see:DragDropTouch singleton.
         */
        DragDropTouch.getInstance = function () {
            return DragDropTouch._instance;
        };
        // ** event handlers
        DragDropTouch.prototype._touchstart = function (e) {
            var _this = this;
            if (this._shouldHandle(e)) {
                // raise double-click and prevent zooming
                if (Date.now() - this._lastClick < DragDropTouch._DBLCLICK) {
                    if (this._dispatchEvent(e, 'dblclick', e.target)) {
                        e.preventDefault();
                        this._reset();
                        return;
                    }
                }
                // clear all variables
                this._reset();
                // get nearest draggable element
                var src = this._closestDraggable(e.target);
                if (src) {
                    // give caller a chance to handle the hover/move events
                    if (!this._dispatchEvent(e, 'mousemove', e.target) &&
                        !this._dispatchEvent(e, 'mousedown', e.target)) {
                        // get ready to start dragging
                        this._dragSource = src;
                        this._ptDown = this._getPoint(e);
                        this._lastTouch = e;
                        e.preventDefault();
                        // show context menu if the user hasn't started dragging after a while
                        setTimeout(function () {
                            if (_this._dragSource == src && _this._img == null) {
                                if (_this._dispatchEvent(e, 'contextmenu', src)) {
                                    _this._reset();
                                }
                            }
                        }, DragDropTouch._CTXMENU);
                        if (DragDropTouch._ISPRESSHOLDMODE) {
                            this._pressHoldInterval = setTimeout(function () {
                                _this._isDragEnabled = true;
                                _this._touchmove(e);
                            }, DragDropTouch._PRESSHOLDAWAIT);
                        }
                    }
                }
            }
        };
        DragDropTouch.prototype._touchmove = function (e) {
            if (this._shouldCancelPressHoldMove(e)) {
              this._reset();
              return;
            }
            if (this._shouldHandleMove(e) || this._shouldHandlePressHoldMove(e)) {
                // see if target wants to handle move
                var target = this._getTarget(e);
                if (this._dispatchEvent(e, 'mousemove', target)) {
                    this._lastTouch = e;
                    e.preventDefault();
                    return;
                }
                // start dragging
                if (this._dragSource && !this._img && this._shouldStartDragging(e)) {
                    this._dispatchEvent(e, 'dragstart', this._dragSource);
                    this._createImage(e);
                    this._dispatchEvent(e, 'dragenter', target);
                }
                // continue dragging
                if (this._img) {
                    this._lastTouch = e;
                    e.preventDefault(); // prevent scrolling
                    this._dispatchEvent(e, 'drag', this._dragSource);
                    if (target != this._lastTarget) {
                        this._dispatchEvent(this._lastTouch, 'dragleave', this._lastTarget);
                        this._dispatchEvent(e, 'dragenter', target);
                        this._lastTarget = target;
                    }
                    this._moveImage(e);
                    this._isDropZone = this._dispatchEvent(e, 'dragover', target);
                }
            }
        };
        DragDropTouch.prototype._touchend = function (e) {
            if (this._shouldHandle(e)) {
                // see if target wants to handle up
                if (this._dispatchEvent(this._lastTouch, 'mouseup', e.target)) {
                    e.preventDefault();
                    return;
                }
                // user clicked the element but didn't drag, so clear the source and simulate a click
                if (!this._img) {
                    this._dragSource = null;
                    this._dispatchEvent(this._lastTouch, 'click', e.target);
                    this._lastClick = Date.now();
                }
                // finish dragging
                this._destroyImage();
                if (this._dragSource) {
                    if (e.type.indexOf('cancel') < 0 && this._isDropZone) {
                        this._dispatchEvent(this._lastTouch, 'drop', this._lastTarget);
                    }
                    this._dispatchEvent(this._lastTouch, 'dragend', this._dragSource);
                    this._reset();
                }
            }
        };
        // ** utilities
        // ignore events that have been handled or that involve more than one touch
        DragDropTouch.prototype._shouldHandle = function (e) {
            return e &&
                !e.defaultPrevented &&
                e.touches && e.touches.length < 2;
        };

        // use regular condition outside of press & hold mode
        DragDropTouch.prototype._shouldHandleMove = function (e) {
          return !DragDropTouch._ISPRESSHOLDMODE && this._shouldHandle(e);
        };

        // allow to handle moves that involve many touches for press & hold
        DragDropTouch.prototype._shouldHandlePressHoldMove = function (e) {
          return DragDropTouch._ISPRESSHOLDMODE &&
              this._isDragEnabled && e && e.touches && e.touches.length;
        };

        // reset data if user drags without pressing & holding
        DragDropTouch.prototype._shouldCancelPressHoldMove = function (e) {
          return DragDropTouch._ISPRESSHOLDMODE && !this._isDragEnabled &&
              this._getDelta(e) > DragDropTouch._PRESSHOLDMARGIN;
        };

        // start dragging when specified delta is detected
        DragDropTouch.prototype._shouldStartDragging = function (e) {
            var delta = this._getDelta(e);
            return delta > DragDropTouch._THRESHOLD ||
                (DragDropTouch._ISPRESSHOLDMODE && delta >= DragDropTouch._PRESSHOLDTHRESHOLD);
        }

        // clear all members
        DragDropTouch.prototype._reset = function () {
            this._destroyImage();
            this._dragSource = null;
            this._lastTouch = null;
            this._lastTarget = null;
            this._ptDown = null;
            this._isDragEnabled = false;
            this._isDropZone = false;
            this._dataTransfer = new DataTransfer();
            clearInterval(this._pressHoldInterval);
        };
        // get point for a touch event
        DragDropTouch.prototype._getPoint = function (e, page) {
            if (e && e.touches) {
                e = e.touches[0];
            }
            return { x: page ? e.pageX : e.clientX, y: page ? e.pageY : e.clientY };
        };
        // get distance between the current touch event and the first one
        DragDropTouch.prototype._getDelta = function (e) {
            if (DragDropTouch._ISPRESSHOLDMODE && !this._ptDown) { return 0; }
            var p = this._getPoint(e);
            return Math.abs(p.x - this._ptDown.x) + Math.abs(p.y - this._ptDown.y);
        };
        // get the element at a given touch event
        DragDropTouch.prototype._getTarget = function (e) {
            var pt = this._getPoint(e), el = document.elementFromPoint(pt.x, pt.y);
            while (el && getComputedStyle(el).pointerEvents == 'none') {
                el = el.parentElement;
            }
            return el;
        };
        // create drag image from source element
        DragDropTouch.prototype._createImage = function (e) {
            // just in case...
            if (this._img) {
                this._destroyImage();
            }
            // create drag image from custom element or drag source
            var src = this._imgCustom || this._dragSource;
            this._img = src.cloneNode(true);
            this._copyStyle(src, this._img);
            this._img.style.top = this._img.style.left = '-9999px';
            // if creating from drag source, apply offset and opacity
            if (!this._imgCustom) {
                var rc = src.getBoundingClientRect(), pt = this._getPoint(e);
                this._imgOffset = { x: pt.x - rc.left, y: pt.y - rc.top };
                this._img.style.opacity = DragDropTouch._OPACITY.toString();
            }
            // add image to document
            this._moveImage(e);
            document.body.appendChild(this._img);
        };
        // dispose of drag image element
        DragDropTouch.prototype._destroyImage = function () {
            if (this._img && this._img.parentElement) {
                this._img.parentElement.removeChild(this._img);
            }
            this._img = null;
            this._imgCustom = null;
        };
        // move the drag image element
        DragDropTouch.prototype._moveImage = function (e) {
            var _this = this;
            requestAnimationFrame(function () {
                if (_this._img) {
                    var pt = _this._getPoint(e, true), s = _this._img.style;
                    s.position = 'absolute';
                    s.pointerEvents = 'none';
                    s.zIndex = '999999';
                    s.left = Math.round(pt.x - _this._imgOffset.x) + 'px';
                    s.top = Math.round(pt.y - _this._imgOffset.y) + 'px';
                }
            });
        };
        // copy properties from an object to another
        DragDropTouch.prototype._copyProps = function (dst, src, props) {
            for (var i = 0; i < props.length; i++) {
                var p = props[i];
                dst[p] = src[p];
            }
        };
        DragDropTouch.prototype._copyStyle = function (src, dst) {
            // remove potentially troublesome attributes
            DragDropTouch._rmvAtts.forEach(function (att) {
                dst.removeAttribute(att);
            });
            // copy canvas content
            if (src instanceof HTMLCanvasElement) {
                var cSrc = src, cDst = dst;
                cDst.width = cSrc.width;
                cDst.height = cSrc.height;
                cDst.getContext('2d').drawImage(cSrc, 0, 0);
            }
            // copy style (without transitions)
            var cs = getComputedStyle(src);
            for (var i = 0; i < cs.length; i++) {
                var key = cs[i];
                if (key.indexOf('transition') < 0) {
                    dst.style[key] = cs[key];
                }
            }
            dst.style.pointerEvents = 'none';
            // and repeat for all children
            for (var i = 0; i < src.children.length; i++) {
                this._copyStyle(src.children[i], dst.children[i]);
            }
        };
        DragDropTouch.prototype._dispatchEvent = function (e, type, target) {
            if (e && target) {
                var evt = document.createEvent('Event'), t = e.touches ? e.touches[0] : e;
                evt.initEvent(type, true, true);
                evt.button = 0;
                evt.which = evt.buttons = 1;
                this._copyProps(evt, e, DragDropTouch._kbdProps);
                this._copyProps(evt, t, DragDropTouch._ptProps);
                evt.dataTransfer = this._dataTransfer;
                target.dispatchEvent(evt);
                return evt.defaultPrevented;
            }
            return false;
        };
        // gets an element's closest draggable ancestor
        DragDropTouch.prototype._closestDraggable = function (e) {
            for (; e; e = e.parentElement) {
                if (e.hasAttribute('draggable') && e.draggable) {
                    return e;
                }
            }
            return null;
        };
        return DragDropTouch;
    }());
    /*private*/ DragDropTouch._instance = new DragDropTouch(); // singleton
    // constants
    DragDropTouch._THRESHOLD = 5; // pixels to move before drag starts
    DragDropTouch._OPACITY = 0.5; // drag image opacity
    DragDropTouch._DBLCLICK = 500; // max ms between clicks in a double click
    DragDropTouch._CTXMENU = 900; // ms to hold before raising 'contextmenu' event
    DragDropTouch._ISPRESSHOLDMODE = false; // decides of press & hold mode presence
    DragDropTouch._PRESSHOLDAWAIT = 400; // ms to wait before press & hold is detected
    DragDropTouch._PRESSHOLDMARGIN = 25; // pixels that finger might shiver while pressing
    DragDropTouch._PRESSHOLDTHRESHOLD = 0; // pixels to move before drag starts
    // copy styles/attributes from drag source to drag image element
    DragDropTouch._rmvAtts = 'id,class,style,draggable'.split(',');
    // synthesize and dispatch an event
    // returns true if the event has been handled (e.preventDefault == true)
    DragDropTouch._kbdProps = 'altKey,ctrlKey,metaKey,shiftKey'.split(',');
    DragDropTouch._ptProps = 'pageX,pageY,clientX,clientY,screenX,screenY,offsetX,offsetY'.split(',');
    DragDropTouch_1.DragDropTouch = DragDropTouch;
})(DragDropTouch || (DragDropTouch = {}));

(function() {
	let scriptPath = document.currentScript.src
	scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf('/'));
	$(document).ready(function() {
		let i18nURL;
		switch ($('html').attr('lang')) {
		case 'es':
			i18nURL = `${scriptPath}/../languages/data-tables/es-ES.json`;
			break;
		case 'fr':
			i18nURL = `${scriptPath}/../languages/data-tables/fr-FR.json`;
			break;
		case 'el':
			i18nURL = `${scriptPath}/../languages/data-tables/el.json`;
			break;
		case 'lt':
			i18nURL = `${scriptPath}/../languages/data-tables/lt.json`;
			break;
		default:
			i18nURL = `${scriptPath}/../languages/data-tables/en-GB.json`;
			break;
		}

		fetch(i18nURL)
			.then((response) => response.json())
			.then((json) => {
				$('.widget-table').DataTable({
					ordering: true,
					paging: true,
					searching: true,
					info: true,
					language: 'es',
					language: json
				});
			});
	});
})();

/* global $ */
(function () {

    const idunit = $('body').data('unit');
    $('#upload-file-notes').on('change', function() {
        const reader = new FileReader();
        reader.onload = (event) => {
            $(this).trigger('annotations.loaded', [JSON.parse(event.target.result)]);
            $(this).val('');
        }
        reader.readAsText(this.files[0]);
    });

    $('#upload-notes').on('click', function() {
        $('#upload-file-notes').trigger('click');
    });

    $('#download-notes').on('click', function() {
        const notes = localStorage.getItem(idunit + '-note');
        const highlights = localStorage.getItem(idunit);
        const json = new File([JSON.stringify({notes, highlights}, null, 2)], `notes-${idunit}.json`, { type: "application/json" });
        const link = document.createElement('a');
        const url = URL.createObjectURL(json)
        link.href = url;
        link.download = json.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    });
})();