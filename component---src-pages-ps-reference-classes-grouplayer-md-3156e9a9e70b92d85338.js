(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{WXmq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a("wx14"),m=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("LHWr"),d=(a("qKvR"),{}),c={_frontmatter:d},b=l.a;function p(e){var t=e.components,a=Object(m.a)(e,["components"]);return Object(r.mdx)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Represents a group layer"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"layer.md"}),"Layer")),Object(r.mdx)("p",{parentName:"li"},"↳ ",Object(r.mdx)("strong",{parentName:"p"},"GroupLayer")))),Object(r.mdx)("h2",{id:"constructors"},"Constructors"),Object(r.mdx)("h3",{id:"constructor"},"constructor"),Object(r.mdx)("p",null,"+"," ",Object(r.mdx)("strong",{parentName:"p"},"new GroupLayer"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"id"),": number, ",Object(r.mdx)("inlineCode",{parentName:"p"},"docId"),": number): ",Object(r.mdx)("em",{parentName:"p"},Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"grouplayer.md"}),"GroupLayer"))),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Overrides void")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"id")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"docId")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.mdx)("h2",{id:"properties"},"Properties"),Object(r.mdx)("h3",{id:"isgrouplayer"},"isGroupLayer"),Object(r.mdx)("p",null,"• ",Object(r.mdx)("strong",{parentName:"p"},"isGroupLayer"),": ",Object(r.mdx)("em",{parentName:"p"},"boolean")),Object(r.mdx)("h2",{id:"accessors"},"Accessors"),Object(r.mdx)("h3",{id:"bounds"},"bounds"),Object(r.mdx)("p",null,"• ",Object(r.mdx)("strong",{parentName:"p"},"get bounds"),"(): ",Object(r.mdx)("em",{parentName:"p"},"PsCommon.Bounds")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#bounds"}),"bounds"))),Object(r.mdx)("p",null,"Bounds of the layer, including the effects"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { left, top, right, bottom } = layer.bounds\n")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"boundsnoeffects"},"boundsNoEffects"),Object(r.mdx)("p",null,"• ",Object(r.mdx)("strong",{parentName:"p"},"get boundsNoEffects"),"(): ",Object(r.mdx)("em",{parentName:"p"},"PsCommon.Bounds")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#boundsnoeffects"}),"boundsNoEffects"))),Object(r.mdx)("p",null,"Bounds of the layer excluding effects"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { left, top, right, bottom } = layer.boundsNoEffects\n")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"children"},"children"),Object(r.mdx)("p",null,"• ",Object(r.mdx)("strong",{parentName:"p"},"get children"),"(): ",Object(r.mdx)("em",{parentName:"p"},"LayerTypes[]")),Object(r.mdx)("p",null,"The child layers of this group layer"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"group.children.forEach((child) => {\n  ...\n})\n")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"kind"},"kind"),Object(r.mdx)("p",null,"• ",Object(r.mdx)("strong",{parentName:"p"},"get kind"),"(): ",Object(r.mdx)("em",{parentName:"p"},"LayerKind")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#kind"}),"kind"))),Object(r.mdx)("p",null,"Kind of the layer"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"if (layer.kind === LayerKind.TEXT) {\n  ...\n}\n")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"linkedlayers"},"linkedLayers"),Object(r.mdx)("p",null,"• ",Object(r.mdx)("strong",{parentName:"p"},"get linkedLayers"),"(): ",Object(r.mdx)("em",{parentName:"p"},Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),"[]")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#linkedlayers"}),"linkedLayers"))),Object(r.mdx)("p",null,"Layers linked to this layer"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const layers = layerAA.linkedLayers\nlayers.forEach((layer) => {\n  ...\n})\n")),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"parent"},"parent"),Object(r.mdx)("p",null,"• ",Object(r.mdx)("strong",{parentName:"p"},"get parent"),"(): ",Object(r.mdx)("em",{parentName:"p"},Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"grouplayer.md"}),"GroupLayer")," | null")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#parent"}),"parent"))),Object(r.mdx)("p",null,"The group layer this layer is in,\nnull if layer has no parent"),Object(r.mdx)("h2",{id:"methods"},"Methods"),Object(r.mdx)("h3",{id:"delete"},"delete"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"delete"),"(): ",Object(r.mdx)("em",{parentName:"p"},"void")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#delete"}),"delete"))),Object(r.mdx)("p",null,"Deletes this layer from the document."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const layers = document.layers\nlayers && layers[0] && layers[0].delete()\n")),Object(r.mdx)("p",null,"number of layer elements deleted"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"duplicate"},"duplicate"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"duplicate"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"targetDocument?"),": ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"document.md"}),"Document"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"name?"),": string): ",Object(r.mdx)("em",{parentName:"p"},"Promise‹",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),"›")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#duplicate"}),"duplicate"))),Object(r.mdx)("p",null,"Duplicates the layer, creating a copy above it in layer stack,\nand returns the newly created layer."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// duplicate a layer\nconst copyLayer = await layer.duplicate()\n\n// extract to a new document\nconst exportDoc = psApp.documents[1]\nconst exportedLayer = await layer.duplicate(exportDoc)\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"targetDocument?")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("a",Object(n.a)({parentName:"td"},{href:"document.md"}),"Document")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"if specified, duplicate to a different document target.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"name?")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"flip"},"flip"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"flip"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"axis"),': "horizontal" | "vertical" | "both"): ',Object(r.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#flip"}),"flip"))),Object(r.mdx)("p",null,"Flips the layer on one or both axis."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'// flip horizontally\nawait layer.flip("horizontal")\n')),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"axis")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),'"horizontal" ',"|",' "vertical" ',"|",' "both"'),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),'Which axis (or both) to flip the layer on.             - "horizontal": flip layer on horizontal axis             - "vertical": flip layer on vertical axis             - "both": flip layer on both axes')))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"link"},"link"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"link"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"targetLayer"),": ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"layer.md"}),"Layer"),"): ",Object(r.mdx)("em",{parentName:"p"},Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),"[]")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#link"}),"link"))),Object(r.mdx)("p",null,"Creates a link between this layer and the target layer if not already linked,\nand returns a list of layers linked to this layer."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'// link two layers together\nconst linkedLayers = strokes.link(fillLayer)\nlinkedLayers.forEach((layer) => console.log(layer.name))\n> "strokes"\n> "fillLayer"\n')),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"targetLayer")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("a",Object(n.a)({parentName:"td"},{href:"layer.md"}),"Layer")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"layer to link with")))),Object(r.mdx)("p",null,"array of linked layers"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"moveabove"},"moveAbove"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"moveAbove"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"target?"),": LayerTypes): ",Object(r.mdx)("em",{parentName:"p"},"void")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#moveabove"}),"moveAbove"))),Object(r.mdx)("p",null,"Moves the layer to a position above the target layer or group.\nIf no target layer is defined, move this layer up one slot."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"foregroundLayer.moveAbove(backingLayer)\n// foregroundLayer\n// backingLayer\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"target?")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"LayerTypes"),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"layer or group that will proceed this layer.")))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"movebelow"},"moveBelow"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"moveBelow"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"target?"),": LayerTypes): ",Object(r.mdx)("em",{parentName:"p"},"void")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#movebelow"}),"moveBelow"))),Object(r.mdx)("p",null,"Moves the layer to a position below the target layer or group.\nIf no target layer is defined, move this layer down one slot."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"backingLayer.moveBelow(foregroundLayer)\n// foregroundLayer\n// backingLayer\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"target?")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"LayerTypes"),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"layer or group that will preceed this layer.")))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"nudge"},"nudge"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"nudge"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"horizontal"),": number | PercentValue | PixelValue, ",Object(r.mdx)("inlineCode",{parentName:"p"},"vertical"),": number | PercentValue | PixelValue): ",Object(r.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#nudge"}),"nudge"))),Object(r.mdx)("p",null,"Moves the layer."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'// nudge the layer to the left by 200px\nawait layer.nudge(-200, 0)\n\n// move the layer one height down\nlet percent = (v) => { _unit: "percentUnit", _value: v }\nawait layer.nudge(percent(0), percent(100))\n')),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"horizontal")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," PercentValue ","|"," PixelValue"),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Numeric value to offset layer by in pixels or percent")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"vertical")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," PercentValue ","|"," PixelValue"),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Numeric value to offset layer by in pixels or percent")))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"rotate"},"rotate"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"rotate"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"angle"),": number | AngleValue, ",Object(r.mdx)("inlineCode",{parentName:"p"},"options?"),": object): ",Object(r.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#rotate"}),"rotate"))),Object(r.mdx)("p",null,"Rotates the layer."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// rotate 90 deg counter clockwise\nawait layer.rotate(-90)\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("p",null,"▪ ",Object(r.mdx)("strong",{parentName:"p"},"angle"),": ",Object(r.mdx)("em",{parentName:"p"},"number | AngleValue")),Object(r.mdx)("p",null,"Angle to rotate the layer by in degrees"),Object(r.mdx)("p",null,"▪",Object(r.mdx)("inlineCode",{parentName:"p"},"Optional"),"  ",Object(r.mdx)("strong",{parentName:"p"},"options"),": ",Object(r.mdx)("em",{parentName:"p"},"object")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"interpolation?")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"InterpolationMethod"),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interpolation method to use when resampling the image @default InterpolationMethod.bilinear")))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"scale"},"scale"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"scale"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"width"),": number | PercentValue, ",Object(r.mdx)("inlineCode",{parentName:"p"},"height"),": number | PercentValue, ",Object(r.mdx)("inlineCode",{parentName:"p"},"options?"),": object): ",Object(r.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#scale"}),"scale"))),Object(r.mdx)("p",null,"Scales the layer."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"await layer.scale(80, 80)\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("p",null,"▪ ",Object(r.mdx)("strong",{parentName:"p"},"width"),": ",Object(r.mdx)("em",{parentName:"p"},"number | PercentValue")),Object(r.mdx)("p",null,"Numeric percentage to scale layer horizontally"),Object(r.mdx)("p",null,"▪ ",Object(r.mdx)("strong",{parentName:"p"},"height"),": ",Object(r.mdx)("em",{parentName:"p"},"number | PercentValue")),Object(r.mdx)("p",null,"Numeric percentage to scale layer vertically"),Object(r.mdx)("p",null,"▪",Object(r.mdx)("inlineCode",{parentName:"p"},"Optional"),"  ",Object(r.mdx)("strong",{parentName:"p"},"options"),": ",Object(r.mdx)("em",{parentName:"p"},"object")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"interpolation?")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"InterpolationMethod"),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interpolation method to use when resampling the image @default InterpolationMethod.bilinear")))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"skew"},"skew"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"skew"),"(",Object(r.mdx)("inlineCode",{parentName:"p"},"angleH"),": number | AngleValue, ",Object(r.mdx)("inlineCode",{parentName:"p"},"angleV"),": number | AngleValue, ",Object(r.mdx)("inlineCode",{parentName:"p"},"options?"),": object): ",Object(r.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#skew"}),"skew"))),Object(r.mdx)("p",null,"Applies a skew to the layer."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// parellelogram shape\nawait layer.skew(-15, 0)\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("inlineCode",{parentName:"strong"},"async"))," "),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Parameters:")),Object(r.mdx)("p",null,"▪ ",Object(r.mdx)("strong",{parentName:"p"},"angleH"),": ",Object(r.mdx)("em",{parentName:"p"},"number | AngleValue")),Object(r.mdx)("p",null,"Horizontal angle to skew by"),Object(r.mdx)("p",null,"▪ ",Object(r.mdx)("strong",{parentName:"p"},"angleV"),": ",Object(r.mdx)("em",{parentName:"p"},"number | AngleValue")),Object(r.mdx)("p",null,"Vertical angle to skew by"),Object(r.mdx)("p",null,"▪",Object(r.mdx)("inlineCode",{parentName:"p"},"Optional"),"  ",Object(r.mdx)("strong",{parentName:"p"},"options"),": ",Object(r.mdx)("em",{parentName:"p"},"object")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.mdx)("inlineCode",{parentName:"td"},"interpolation?")),Object(r.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"InterpolationMethod")))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"unlink"},"unlink"),Object(r.mdx)("p",null,"▸ ",Object(r.mdx)("strong",{parentName:"p"},"unlink"),"(): ",Object(r.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Inherited from ",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md"}),"Layer"),".",Object(r.mdx)("a",Object(n.a)({parentName:"em"},{href:"layer.md#unlink"}),"unlink"))),Object(r.mdx)("p",null,"Unlinks the layer from any existing links."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// detach layer from any existing links\nawait layer.unlink()\n")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},Object(r.mdx)("inlineCode",{parentName:"strong"},"async"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-grouplayer-md-3156e9a9e70b92d85338.js.map