import React, { useEffect } from "react";
import SearchBar from "@theme-original/SearchBar";

function usePatchOramaShadowDom() {
  useEffect(() => {
    const STATIC_CSS = `
      orama-sliding-panel { display: none !important; }
      orama-footer { display: none !important; }
      orama-navigation-bar { display: none !important; }
      dialog.sc-orama-modal {
        min-height: 100vh !important;
      }
      .modal-content.sc-orama-modal {
        min-height: 0 !important;
        height: auto !important;
        max-height: unset !important;
        padding-bottom: 0 !important;
      }
      div.main {
        padding: 0 !important;
        margin: 0 !important;
      }
      button.button--secondary.sc-orama-button {
        padding: 4px 4px 4px 14px !important;
      }
    `;

    function setEmpty(root: ShadowRoot) {
      const rw = root.querySelector(".result-wrapper") as HTMLElement | null;
      if (rw) rw.style.setProperty("display", "none", "important");
      const inp = root.querySelector(".input.input--large") as HTMLElement | null;
      if (inp) inp.style.setProperty("border-radius", "10px", "important");
    }

    function setActive(root: ShadowRoot) {
      const rw = root.querySelector(".result-wrapper") as HTMLElement | null;
      if (rw) rw.style.removeProperty("display");
      const inp = root.querySelector(".input.input--large") as HTMLElement | null;
      if (inp) inp.style.removeProperty("border-radius");
    }

    const DIALOG_CSS = `
      dialog.sc-orama-modal {
        min-height: 100vh !important;
      }
      .modal-content.sc-orama-modal {
        min-height: 0 !important;
        height: auto !important;
        max-height: unset !important;
        padding-bottom: 0 !important;
      }
      html body .button--medium.sc-orama-button {
        padding: 4px 4px 4px 14px !important;
      }
    `;

    function patchNestedShadows(root: ShadowRoot) {
      root.querySelectorAll("*").forEach((child) => {
        if (child.shadowRoot && !child.shadowRoot.querySelector("[data-orama-dialog-patch]")) {
          const s = document.createElement("style");
          s.setAttribute("data-orama-dialog-patch", "");
          s.textContent = DIALOG_CSS;
          child.shadowRoot.appendChild(s);
          patchNestedShadows(child.shadowRoot);
        }
      });
    }

    function patchElement(el: Element) {
      const root = el.shadowRoot;
      if (!root || root.querySelector("[data-orama-patch]")) return;

      const shadowRoot: ShadowRoot = root;

      const style = document.createElement("style");
      style.setAttribute("data-orama-patch", "");
      style.textContent = STATIC_CSS;
      shadowRoot.appendChild(style);

      patchNestedShadows(shadowRoot);

      let currentInput: HTMLInputElement | null = null;

      function patchInput() {
        const input = shadowRoot.querySelector("input") as HTMLInputElement | null;
        if (!input || input === currentInput) return;

        currentInput = input;
        setEmpty(shadowRoot);

        const handler = () => {
          if (input.value.trim().length > 0) {
            setActive(shadowRoot);
          } else {
            setEmpty(shadowRoot);
          }
        };

        input.addEventListener("input", handler);
        input.addEventListener("keyup", handler);
        input.addEventListener("change", handler);
      }

      patchInput();

      const innerObserver = new MutationObserver(() => {
        patchInput();
        patchNestedShadows(shadowRoot);
        if (currentInput && !currentInput.value.trim()) {
          setEmpty(shadowRoot);
        }
      });
      innerObserver.observe(shadowRoot, { childList: true, subtree: true });
    }

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of Array.from(m.addedNodes)) {
          if (node instanceof Element) {
            if (node.tagName === "ORAMA-SEARCH-BOX") patchElement(node);
            node.querySelectorAll("orama-search-box").forEach(patchElement);
          }
        }
      }
    });

    document.querySelectorAll("orama-search-box").forEach(patchElement);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
}

export default function SearchBarWrapper(props: React.ComponentProps<typeof SearchBar>) {
  usePatchOramaShadowDom();
  return <SearchBar {...props} />;
}
