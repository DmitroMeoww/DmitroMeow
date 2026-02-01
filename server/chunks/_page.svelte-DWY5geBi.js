import { X as head, Y as attributes, Z as stringify } from './index2-B6mTCn47.js';
import { S as Sidebar } from './sidebar-Dn1LeOdj.js';
import { h as html } from './html-FW6Ia4bL.js';
import './context-Cv9QAF3V.js';
import './exports-CgQJUv15.js';
import './state.svelte-6rJr4dnJ.js';

const data = {
	"width": 24,
	"height": 24,
	"body": "<path fill=\"currentColor\" d=\"M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z\"/>"
};

function Icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { icon, size, $$slots, $$events, ...extra } = $$props;
    $$renderer2.push(`<svg${attributes(
      {
        width: size || "1em",
        height: size || "1em",
        viewBox: `0 0 ${stringify(icon.width)} ${stringify(icon.height)}`,
        ...extra
      },
      "svelte-tjrm9p",
      void 0,
      void 0,
      3
    )}>${html(icon.body)}</svg>`);
  });
}
function Chip($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      variant,
      icon,
      trailingIcon,
      elevated = false,
      selected = false,
      children,
      $$slots,
      $$events,
      ...extra
      /**
       * general is filter/suggestion since they're the same.
       * | name       | use              | example                       | phrasing           |
       * |------------|------------------|-------------------------------|--------------------|
       * | input      | information item | like a person in the to field | user-entered thing |
       * | assist     | smart actions    | like add to calendar          | start with a verb  |
       * | filter     | selection        | like in a search page         | category           |
       * | suggestion | smart actions    | like a chat response          | query/message      |
       */
      /**
       * general is filter/suggestion since they're the same.
       * | name       | use              | example                       | phrasing           |
       * |------------|------------------|-------------------------------|--------------------|
       * | input      | information item | like a person in the to field | user-entered thing |
       * | assist     | smart actions    | like add to calendar          | start with a verb  |
       * | filter     | selection        | like in a search page         | category           |
       * | suggestion | smart actions    | like a chat response          | query/message      |
       */
    } = $$props;
    function content($$renderer3) {
      if (icon) {
        $$renderer3.push("<!--[-->");
        Icon($$renderer3, { icon, class: "leading" });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <span class="svelte-ng861f">`);
      children($$renderer3);
      $$renderer3.push(`<!----></span> `);
      if (trailingIcon) {
        $$renderer3.push("<!--[-->");
        Icon($$renderer3, { icon: trailingIcon, class: "trailing" });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    if (extra.href != void 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attributes(
        {
          class: `m3-container ${stringify(variant)} m3-layer`,
          ...extra
        },
        "svelte-ng861f",
        { elevated, selected }
      )}>`);
      content($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if ("label" in extra) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<label${attributes(
          {
            class: `m3-container ${stringify(variant)} m3-layer`,
            ...extra
          },
          "svelte-ng861f",
          { elevated, selected }
        )}>`);
        content($$renderer2);
        $$renderer2.push(`<!----></label>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<button${attributes(
          {
            class: `m3-container ${stringify(variant)} m3-layer`,
            ...extra,
            type: "button"
          },
          "svelte-ng861f",
          { elevated, selected }
        )}>`);
        content($$renderer2);
        $$renderer2.push(`<!----></button>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const activePointerRipples = [];
const activeKeyboardRipples = [];
const isEnabled = (node) => {
  if (node instanceof HTMLButtonElement && node.disabled)
    return false;
  if (node instanceof HTMLInputElement && node.disabled)
    return false;
  if (node instanceof HTMLLabelElement) {
    const control = node.control;
    if (control instanceof HTMLInputElement && control.disabled)
      return false;
  }
  return true;
};
const createRippleSvg = (node, x, y, width, height) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return null;
  const size = Math.hypot(Math.max(x, width - x), Math.max(y, height - y)) * 2.5;
  const speed = Math.max(Math.min(Math.log(size) * 50, 600), 200);
  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
  gradient.id = `ripple-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const stops = [
    { offset: "0%", opacity: "0.12" },
    { offset: "70%", opacity: "0.12" },
    { offset: "100%", opacity: "0" }
  ];
  for (const { offset, opacity } of stops) {
    const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", "currentColor");
    stop.setAttribute("stop-opacity", opacity);
    gradient.appendChild(stop);
  }
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", `${x}`);
  circle.setAttribute("cy", `${y}`);
  circle.setAttribute("r", "0");
  circle.setAttribute("fill", `url(#${gradient.id})`);
  const expand = document.createElementNS("http://www.w3.org/2000/svg", "animate");
  expand.setAttribute("attributeName", "r");
  expand.setAttribute("from", "0");
  expand.setAttribute("to", `${size / 2}`);
  expand.setAttribute("dur", `${speed}ms`);
  expand.setAttribute("fill", "freeze");
  expand.setAttribute("calcMode", "spline");
  expand.setAttribute("keySplines", "0.4 0, 0.2 1");
  circle.appendChild(expand);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("active-ripple");
  svg.style.cssText = [
    "position: absolute",
    "inset: 0",
    "width: 100%",
    "height: 100%",
    "overflow: hidden",
    "border-radius: inherit",
    "pointer-events: none"
  ].join(";");
  svg.appendChild(gradient);
  svg.appendChild(circle);
  const ua = navigator.userAgent;
  const isFirefox = ua.includes("Firefox");
  const isTrulySafari = !ua.includes("Chrome") && ua.includes("Safari");
  if (!isFirefox && !isTrulySafari && size > 100) {
    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.id = `noise-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const turb = document.createElementNS("http://www.w3.org/2000/svg", "feTurbulence");
    turb.setAttribute("type", "fractalNoise");
    turb.setAttribute("baseFrequency", "0.6");
    turb.setAttribute("seed", Math.random().toString());
    const blur = document.createElementNS("http://www.w3.org/2000/svg", "feDisplacementMap");
    blur.setAttribute("in", "SourceGraphic");
    blur.setAttribute("scale", `${size ** 2 * 2e-4}`);
    blur.setAttribute("xChannelSelector", "R");
    blur.setAttribute("yChannelSelector", "B");
    filter.appendChild(turb);
    filter.appendChild(blur);
    circle.setAttribute("filter", `url(#${filter.id})`);
    svg.appendChild(filter);
  }
  node.appendChild(svg);
  return () => {
    const fade = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    fade.setAttribute("attributeName", "opacity");
    fade.setAttribute("from", "1");
    fade.setAttribute("to", "0");
    fade.setAttribute("dur", "800ms");
    fade.setAttribute("fill", "freeze");
    fade.setAttribute("calcMode", "spline");
    fade.setAttribute("keySplines", "0.4 0, 0.2 1");
    circle.appendChild(fade);
    fade.beginElement();
    setTimeout(() => svg.remove(), 800);
  };
};
if (typeof document != "undefined") {
  document.documentElement.classList.add("js");
  document.addEventListener("pointerdown", (e) => {
    if (e.button != 0)
      return;
    const layer = e.target.closest(".m3-layer");
    if (!layer || !isEnabled(layer))
      return;
    const rect = layer.getBoundingClientRect();
    const cancel = createRippleSvg(layer, e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
    if (cancel) {
      activePointerRipples.push(cancel);
    }
  });
  const cancelPointerRipples = () => {
    for (const cancel of activePointerRipples)
      cancel();
    activePointerRipples.length = 0;
  };
  document.addEventListener("pointerup", cancelPointerRipples);
  document.addEventListener("dragend", cancelPointerRipples);
  document.addEventListener("keydown", (e) => {
    if (e.repeat)
      return;
    const target = e.target;
    const layer = target.closest(".m3-layer");
    if (!layer || !isEnabled(layer))
      return;
    const isActivate = e.key == "Enter" || e.key == " " && layer.tagName == "BUTTON";
    if (!isActivate)
      return;
    const rect = layer.getBoundingClientRect();
    const cancel = createRippleSvg(layer, rect.width / 2, rect.height / 2, rect.width, rect.height);
    if (cancel) {
      activeKeyboardRipples.push(cancel);
    }
  });
  document.addEventListener("keyup", () => {
    for (const cancel of activeKeyboardRipples)
      cancel();
    activeKeyboardRipples.length = 0;
  });
}
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      variant = "filled",
      square = false,
      iconType = "none",
      size = "s",
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    if (props.href != void 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attributes(
        {
          class: `m3-container m3-layer ${stringify(variant)} ${stringify(size)} icon-${stringify(iconType)}`,
          ...props
        },
        "svelte-eefjof",
        { square }
      )}>`);
      children($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if ("label" in props) {
        $$renderer2.push("<!--[-->");
        const { label: _, ...extra } = props;
        $$renderer2.push(`<label${attributes(
          {
            class: `m3-container m3-layer ${stringify(variant)} ${stringify(size)} icon-${stringify(iconType)}`,
            ...extra
          },
          "svelte-eefjof",
          { square }
        )}>`);
        children($$renderer2);
        $$renderer2.push(`<!----></label>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if ("summary" in props) {
          $$renderer2.push("<!--[-->");
          const { summary: _, ...extra } = props;
          $$renderer2.push(`<summary${attributes(
            {
              class: `m3-container m3-layer ${stringify(variant)} ${stringify(size)} icon-${stringify(iconType)}`,
              ...extra
            },
            "svelte-eefjof",
            { square }
          )}>`);
          children($$renderer2);
          $$renderer2.push(`<!----></summary>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<button${attributes(
            {
              type: props.onclick ? "button" : "submit",
              class: `m3-container m3-layer ${stringify(variant)} ${stringify(size)} icon-${stringify(iconType)}`,
              ...props
            },
            "svelte-eefjof",
            { square }
          )}>`);
          children($$renderer2);
          $$renderer2.push(`<!----></button>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { variant, children, $$slots, $$events, ...extra } = $$props;
    if (extra.onclick) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button${attributes(
        {
          type: "button",
          class: `m3-container ${stringify(variant)} m3-layer`,
          ...extra
        },
        "svelte-mxwuxu"
      )}>`);
      children($$renderer2);
      $$renderer2.push(`<!----></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ class: `m3-container ${stringify(variant)}`, ...extra }, "svelte-mxwuxu")}>`);
      children($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function CardItem($$renderer) {
  $$renderer.push(`<div id="MainCard" class="svelte-1n8f3vu">`);
  Card($$renderer, {
    variant: "filled",
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 id="CardName">Відеокамера Sony PXW-Z90</h1> <p id="CardDescription">Новий кишеньковий 4К камкордер від Sony з підтримкою HDR...</p> <div id="CardActions">`);
      Button($$renderer2, {
        variant: "outlined",
        iconType: "full",
        children: ($$renderer3) => {
          Icon($$renderer3, { icon: data });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        color: "primary",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->₴500,000`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div> <img id="CardImage" src="/VidCameraSonyPXW-Z90.jpg" alt="Зображення товару"/> <div id="CardChip">`);
      Chip($$renderer2, {
        variant: "general",
        elevated: true,
        selected: false,
        onclick: () => alert("!"),
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Sony`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function _page($$renderer) {
  head("ec29qo", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Каталог - OptaVideo</title>`);
    });
  });
  Sidebar($$renderer);
  $$renderer.push(`<!----> `);
  CardItem($$renderer);
  $$renderer.push(`<!---->`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DWY5geBi.js.map
