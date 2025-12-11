(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AF-s-Portfolio/components/DesktopHomePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopHomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DesktopHomePage() {
    _s();
    const [itemsVisible, setItemsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesktopHomePage.useEffect": ()=>{
            // Disable scroll on the whole page
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            return ({
                "DesktopHomePage.useEffect": ()=>{
                    // Restore when leaving
                    document.body.style.overflow = "";
                    document.documentElement.style.overflow = "";
                }
            })["DesktopHomePage.useEffect"];
        }
    }["DesktopHomePage.useEffect"], []);
    const items = [
        {
            name: "Graphic Design",
            image: "/images/ipad.png",
            href: "/graphic-design",
            label: "Visual & Graphic Design",
            x: -520,
            y: 50,
            labelPosition: "left"
        },
        {
            name: "Industrial Design",
            image: "/images/laptop.png",
            href: "/industrial-design",
            label: "Industrial & Product design",
            x: 520,
            y: 50,
            labelPosition: "top"
        },
        {
            name: "Professional Photography",
            image: "/images/camera.png",
            href: "/professional-photography",
            label: "Professional Photography",
            x: 380,
            y: 230,
            labelPosition: "right"
        },
        {
            name: "About Me",
            image: "/images/glasses.png",
            href: "/about-me",
            label: "About Me",
            x: 380,
            y: -150,
            labelPosition: "right"
        },
        {
            name: "Skills",
            image: "/images/ticket.png",
            href: "/skills",
            label: "Skills",
            x: -380,
            y: -150,
            labelPosition: "bottom"
        },
        {
            name: "Contact",
            image: "/images/lipstick.png",
            href: "/contact",
            label: "Contact",
            x: -380,
            y: 230,
            labelPosition: "left"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f1f0ee] relative overflow-hidden scale-[1.15] origin-center pt-25",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center w-full h-full pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center mb-14 pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-6xl md:text-7xl tracking-wide text-[#5f6a61] mb-1 leading-tight",
                                children: "ANA FER DLT"
                            }, void 0, false, {
                                fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-script text-8xl text-[#5f6a61] leading-none",
                                children: "Strategic designer specialist"
                            }, void 0, false, {
                                fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.3
                        },
                        className: "relative w-full max-w-lg aspect-[4/3] flex items-center justify-center cursor-pointer pointer-events-auto",
                        onClick: ()=>setItemsVisible(!itemsVisible),
                        whileHover: {
                            scale: 1.06
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/handbag.png",
                            alt: "Designer handbag",
                            width: 460,
                            height: 340,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    !itemsVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1.2
                        },
                        className: "text-center text-[#5f6a61] font-sans mt-16 text-2xl md:text-2xl pointer-events-auto",
                        children: "Click the bag to explore"
                    }, void 0, false, {
                        fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: itemsVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none",
                    children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: 0,
                                y: 0,
                                opacity: 0,
                                scale: 0
                            },
                            animate: {
                                x: item.x,
                                y: item.y,
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                x: 0,
                                y: 0,
                                opacity: 0,
                                scale: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            },
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.15,
                                        rotate: 5
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    className: "relative flex flex-col items-center cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-36 h-36",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.image || "/placeholder.svg",
                                                alt: item.name,
                                                fill: true,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                                                lineNumber: 155,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                                            lineNumber: 154,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-2 font-semibold text-xl text-[#5f6a61] text-center",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                                            lineNumber: 164,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                                    lineNumber: 148,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                                lineNumber: 147,
                                columnNumber: 17
                            }, this)
                        }, item.name, false, {
                            fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                            lineNumber: 134,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AF-s-Portfolio/components/DesktopHomePage.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(DesktopHomePage, "WjCqNq+rQr4F4+rHKTHBg78KmHY=");
_c = DesktopHomePage;
var _c;
__turbopack_context__.k.register(_c, "DesktopHomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AF-s-Portfolio/components/MobileHomePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileHomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MobileHomePage() {
    _s();
    const [itemsVisible, setItemsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileHomePage.useEffect": ()=>{
            // Disable scroll on the whole page
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            return ({
                "MobileHomePage.useEffect": ()=>{
                    // Restore when leaving
                    document.body.style.overflow = "";
                    document.documentElement.style.overflow = "";
                }
            })["MobileHomePage.useEffect"];
        }
    }["MobileHomePage.useEffect"], []);
    const items = [
        {
            name: "Graphic Design",
            image: "/images/ipad.png",
            href: "/graphic-design",
            label: "Visual & Graphic Design"
        },
        {
            name: "Industrial Design",
            image: "/images/laptop.png",
            href: "/industrial-design",
            label: "Industrial & Product design"
        },
        {
            name: "Professional Photography",
            image: "/images/camera.png",
            href: "/professional-photography",
            label: "Professional Photography"
        },
        {
            name: "About Me",
            image: "/images/glasses.png",
            href: "/about-me",
            label: "About Me"
        },
        {
            name: "Skills",
            image: "/images/ticket.png",
            href: "/skills",
            label: "Skills"
        },
        {
            name: "Contact",
            image: "/images/lipstick.png",
            href: "/contact",
            label: "Contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f1f0ee] relative overflow-hidden flex flex-col items-center justify-center px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8
                },
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-serif text-3xl sm:text-4xl tracking-wide text-[#5f6a61] mb-1 leading-tight",
                        children: "ANA FER DLT"
                    }, void 0, false, {
                        fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-script text-4xl sm:text-5xl text-[#5f6a61] leading-none",
                        children: "Strategic designer specialist"
                    }, void 0, false, {
                        fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.8,
                    delay: 0.3
                },
                className: "relative w-full max-w-xs aspect-[4/3] flex items-center justify-center cursor-pointer mb-6",
                onClick: ()=>setItemsVisible(!itemsVisible),
                whileTap: {
                    scale: 0.95
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/handbag.png",
                    alt: "Designer handbag",
                    width: 300,
                    height: 225,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            !itemsVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.2
                },
                className: "text-center text-[#5f6a61] font-sans text-lg sm:text-xl mb-8",
                children: "Tap the bag to explore"
            }, void 0, false, {
                fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: itemsVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "w-full max-w-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 sm:gap-6",
                        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        className: "relative flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm touch-manipulation",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-20 h-20 sm:w-24 sm:h-24 mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: item.image || "/placeholder.svg",
                                                    alt: item.name,
                                                    fill: true,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                                                lineNumber: 137,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-sm sm:text-base text-[#5f6a61] text-center leading-tight",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                                                lineNumber: 147,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                                        lineNumber: 132,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                                    lineNumber: 131,
                                    columnNumber: 19
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                        lineNumber: 117,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AF-s-Portfolio/components/MobileHomePage.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(MobileHomePage, "WjCqNq+rQr4F4+rHKTHBg78KmHY=");
_c = MobileHomePage;
var _c;
__turbopack_context__.k.register(_c, "MobileHomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AF-s-Portfolio/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$components$2f$DesktopHomePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/components/DesktopHomePage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$components$2f$MobileHomePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AF-s-Portfolio/components/MobileHomePage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HomePage() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>{
            // Check on initial render if we're in browser
            if ("TURBOPACK compile-time truthy", 1) {
                return window.innerWidth < 768;
            }
            //TURBOPACK unreachable
            ;
        }
    }["HomePage.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            // Handle window resize
            const checkMobile = {
                "HomePage.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["HomePage.useEffect.checkMobile"];
            window.addEventListener('resize', checkMobile);
            return ({
                "HomePage.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    // Render appropriate version based on screen size
    return isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$components$2f$MobileHomePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/AF-s-Portfolio/app/page.tsx",
        lineNumber: 26,
        columnNumber: 21
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AF$2d$s$2d$Portfolio$2f$components$2f$DesktopHomePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/AF-s-Portfolio/app/page.tsx",
        lineNumber: 26,
        columnNumber: 42
    }, this);
}
_s(HomePage, "AF0sLl8Duxi1DoWpFfrXwSYJqT4=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=AF-s-Portfolio_48f81c50._.js.map