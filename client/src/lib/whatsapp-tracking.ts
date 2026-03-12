function getUTMParams(): Record<string, string | null> {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source"),
    utmMedium: params.get("utm_medium"),
    utmCampaign: params.get("utm_campaign"),
    utmTerm: params.get("utm_term"),
    utmContent: params.get("utm_content"),
  };
}

export function handleWhatsAppClick(e: React.MouseEvent<HTMLAnchorElement>, thankYouUrl: string, lang: string) {
  e.preventDefault();

  if (window.dataLayer) {
    window.dataLayer.push({ event: "whatsapp_click" });
  }

  const utm = getUTMParams();
  fetch("/api/whatsapp-click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page: window.location.pathname,
      lang,
      referrer: document.referrer || null,
      ...utm,
    }),
  }).catch(() => {});

  const href = (e.currentTarget as HTMLAnchorElement).href;
  window.open(href, "_blank", "noopener,noreferrer");
  window.location.href = thankYouUrl;
}
