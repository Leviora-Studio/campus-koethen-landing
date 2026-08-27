(() => {
  const config = window.CAMPUS_KOETHEN_CONFIG ?? {};
  const isEnglish = document.documentElement.lang === "en";
  const copy = isEnglish
    ? {
        download: "Download now",
        bothAvailable: "Now available for Android and iOS.",
        oneAvailable: "Now available for one platform. The second is coming soon.",
      }
    : {
        download: "Jetzt laden",
        bothAvailable: "Jetzt für Android und iOS erhältlich.",
        oneAvailable: "Jetzt für eine Plattform erhältlich. Die zweite folgt demnächst.",
      };
  const stores = {
    googlePlay: config.googlePlayUrl,
    appStore: config.appStoreUrl,
  };
  let availableStores = 0;

  for (const [store, configuredUrl] of Object.entries(stores)) {
    const button = document.querySelector(`[data-store="${store}"]`);
    const url = getSecureUrl(configuredUrl);

    if (!button || !url) continue;

    button.href = url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.removeAttribute("aria-disabled");
    button.removeAttribute("tabindex");
    button.classList.remove("is-unavailable");
    button.querySelector(".store-kicker").textContent = copy.download;
    availableStores += 1;
  }

  const note = document.querySelector("#availability-note");
  if (note && availableStores === 2) {
    note.textContent = copy.bothAvailable;
  } else if (note && availableStores === 1) {
    note.textContent = copy.oneAvailable;
  }

  function getSecureUrl(value) {
    if (typeof value !== "string" || value.trim() === "") return null;

    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.toString() : null;
    } catch {
      return null;
    }
  }
})();
