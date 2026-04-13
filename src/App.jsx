import { useState } from "react";

const creators = [
  {
    id: 1,
    name: "Lisa van den Berg",
    handle: "@lisavdberg",
    location: "Amsterdam 🇳🇱",
    avatar: "https://i.pravatar.cc/150?img=47",
    cover: "https://picsum.photos/seed/lisa/800/300",
    category: "Lifestyle & Mode",
    subscribers: 3241,
    price: 9.99,
    bio: "Mode, travel en eerlijk leven. Geen filters, wel stijl. 🌷",
    posts: 142,
    verified: true,
    preview: ["https://picsum.photos/seed/l1/400/400", "https://picsum.photos/seed/l2/400/400", "https://picsum.photos/seed/l3/400/400"],
  },
  {
    id: 2,
    name: "Bram Declercq",
    handle: "@bramdeclercq",
    location: "Antwerpen 🇧🇪",
    avatar: "https://i.pravatar.cc/150?img=12",
    cover: "https://picsum.photos/seed/bram/800/300",
    category: "Fitness & Voeding",
    subscribers: 1876,
    price: 7.99,
    bio: "Personal trainer | Belgische bonkheid | Eet, sport, leef 💪",
    posts: 98,
    verified: true,
    preview: ["https://picsum.photos/seed/b1/400/400", "https://picsum.photos/seed/b2/400/400", "https://picsum.photos/seed/b3/400/400"],
  },
  {
    id: 3,
    name: "Sofie Janssen",
    handle: "@sofiejanssen",
    location: "Utrecht 🇳🇱",
    avatar: "https://i.pravatar.cc/150?img=32",
    cover: "https://picsum.photos/seed/sofie/800/300",
    category: "Koken & Recepten",
    subscribers: 5102,
    price: 4.99,
    bio: "Hollandse keuken met een twist. Recepten, tips & behind the scenes 🍳",
    posts: 214,
    verified: false,
    preview: ["https://picsum.photos/seed/s1/400/400", "https://picsum.photos/seed/s2/400/400", "https://picsum.photos/seed/s3/400/400"],
  },
  {
    id: 4,
    name: "Daan Vermeersch",
    handle: "@daanvm",
    location: "Gent 🇧🇪",
    avatar: "https://i.pravatar.cc/150?img=67",
    cover: "https://picsum.photos/seed/daan/800/300",
    category: "Muziek & Kunst",
    subscribers: 2389,
    price: 6.99,
    bio: "Producer, kunstenaar, dromer. Exclusieve tracks & art drops 🎵",
    posts: 77,
    verified: true,
    preview: ["https://picsum.photos/seed/d1/400/400", "https://picsum.photos/seed/d2/400/400", "https://picsum.photos/seed/d3/400/400"],
  },
];

const categories = ["Alles", "Lifestyle & Mode", "Fitness & Voeding", "Koken & Recepten", "Muziek & Kunst"];

export default function FanZone() {
  const [page, setPage] = useState("home");
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [subscribed, setSubscribed] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Alles");
  const [lang, setLang] = useState("nl");
  const [showPayModal, setShowPayModal] = useState(false);
  const [payTarget, setPayTarget] = useState(null);
  const [toast, setToast] = useState(null);

  const t = {
    nl: {
      tagline: "Exclusieve content van jouw favoriete Nederlandse & Belgische creators",
      discover: "Ontdek Creators",
      myFeed: "Mijn Feed",
      subscribe: "Abonneer",
      subscribed: "Geabonneerd ✓",
      perMonth: "/ maand",
      posts: "posts",
      subscribers: "abonnees",
      back: "← Terug",
      exclusiveContent: "Exclusieve Content",
      lockedMsg: "Abonneer om alle content te zien",
      payTitle: "Abonnement afsluiten",
      payBtn: "Betaal via iDEAL / Bancontact",
      cancel: "Annuleren",
      toastMsg: "Je bent nu geabonneerd! 🎉",
      noSubs: "Je hebt nog geen abonnementen.",
      browseBtn: "Ontdek creators →",
      hero: "Steun Lokale Creators",
      verified: "Geverifieerd",
    },
    fr: {
      tagline: "Contenu exclusif de vos créateurs néerlandais & belges préférés",
      discover: "Découvrir les créateurs",
      myFeed: "Mon Feed",
      subscribe: "S'abonner",
      subscribed: "Abonné ✓",
      perMonth: "/ mois",
      posts: "posts",
      subscribers: "abonnés",
      back: "← Retour",
      exclusiveContent: "Contenu Exclusif",
      lockedMsg: "Abonnez-vous pour voir tout le contenu",
      payTitle: "Souscrire un abonnement",
      payBtn: "Payer via Bancontact / iDEAL",
      cancel: "Annuler",
      toastMsg: "Vous êtes maintenant abonné! 🎉",
      noSubs: "Vous n'avez pas encore d'abonnements.",
      browseBtn: "Découvrir les créateurs →",
      hero: "Soutenez les Créateurs Locaux",
      verified: "Vérifié",
    },
  }[lang];

  const filtered = activeCategory === "Alles" || activeCategory === "Tout"
    ? creators
    : creators.filter(c => c.category === activeCategory);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubscribe = (creator) => {
    setPayTarget(creator);
    setShowPayModal(true);
  };

  const confirmPay = () => {
    setSubscribed(prev => [...prev, payTarget.id]);
    setShowPayModal(false);
    showToast(t.toastMsg);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0d0d",
      color: "#f0ece4",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      position: "relative",
    }}>
      {toast && (
        <div style={{
          position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)",
          background: "#e8c97e", color: "#0d0d0d", padding: "12px 28px",
          borderRadius: 40, fontWeight: "bold", zIndex: 9999,
          boxShadow: "0 4px 30px rgba(232,201,126,0.4)",
          fontSize: 15,
        }}>{toast}</div>
      )}

      {showPayModal && payTarget && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999,
        }}>
          <div style={{
            background: "#1a1a1a", border: "1px solid #333", borderRadius: 20,
            padding: 36, maxWidth: 380, width: "90%", textAlign: "center",
          }}>
            <img src={payTarget.avatar} alt="" style={{ width: 70, height: 70, borderRadius: "50%", marginBottom: 16 }} />
            <h3 style={{ color: "#e8c97e", marginBottom: 6, fontSize: 20 }}>{t.payTitle}</h3>
            <p style={{ color: "#aaa", marginBottom: 4, fontSize: 14 }}>{payTarget.name}</p>
            <p style={{ fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 20 }}>
              €{payTarget.price}<span style={{ fontSize: 14, color: "#aaa" }}>{t.perMonth}</span>
            </p>
            <button onClick={confirmPay} style={{
              width: "100%", background: "#e8c97e", color: "#0d0d0d",
              border: "none", borderRadius: 50, padding: "14px 0",
              fontWeight: "bold", fontSize: 15, cursor: "pointer", marginBottom: 10,
            }}>{t.payBtn}</button>
            <button onClick={() => setShowPayModal(false)} style={{
              width: "100%", background: "transparent", color: "#aaa",
              border: "1px solid #333", borderRadius: 50, padding: "12px 0",
              cursor: "pointer", fontSize: 14,
            }}>{t.cancel}</button>
          </div>
        </div>
      )}

      <header style={{
        borderBottom: "1px solid #222",
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, background: "rgba(13,13,13,0.95)",
        backdropFilter: "blur(10px)", zIndex: 100, height: 64,
      }}>
        <div onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, #e8c97e, #c4773b)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
          }}>✦</div>
          <span style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1 }}>FanZone</span>
          <span style={{ fontSize: 10, color: "#e8c97e", border: "1px solid #e8c97e", padding: "1px 6px", borderRadius: 4, letterSpacing: 1 }}>NL • BE</span>
        </div>

        <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={() => setPage("home")} style={{
            background: page === "home" ? "#1f1f1f" : "transparent",
            border: "none", color: page === "home" ? "#e8c97e" : "#888",
            padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 13,
          }}>{t.discover}</button>
          <button onClick={() => setPage("feed")} style={{
            background: page === "feed" ? "#1f1f1f" : "transparent",
            border: "none", color: page === "feed" ? "#e8c97e" : "#888",
            padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 13,
          }}>{t.myFeed} {subscribed.length > 0 && <span style={{ background: "#e8c97e", color: "#000", borderRadius: "50%", fontSize: 10, padding: "1px 5px", marginLeft: 4 }}>{subscribed.length}</span>}</button>
          <button onClick={() => setLang(lang === "nl" ? "fr" : "nl")} style={{
            background: "#1f1f1f", border: "1px solid #333", color: "#e8c97e",
            padding: "6px 12px", borderRadius: 20, cursor: "pointer", fontSize: 12,
          }}>{lang === "nl" ? "FR" : "NL"}</button>
        </nav>
      </header>

      {page === "creator" && selectedCreator && (() => {
        const c = selectedCreator;
        const isSub = subscribed.includes(c.id);
        return (
          <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 0 60px" }}>
            <div style={{ position: "relative" }}>
              <img src={c.cover} alt="" style={{ width: "100%", height: 200, objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #0d0d0d 100%)" }} />
            </div>
            <div style={{ padding: "0 24px" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginTop: -40, marginBottom: 20 }}>
                <img src={c.avatar} alt="" style={{ width: 80, height: 80, borderRadius: "50%", border: "3px solid #e8c97e", flexShrink: 0 }} />
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <h2 style={{ margin: 0, fontSize: 22 }}>{c.name}</h2>
                    {c.verified && <span style={{ color: "#e8c97e", fontSize: 16 }}>✦</span>}
                  </div>
                  <p style={{ margin: 0, color: "#888", fontSize: 13 }}>{c.handle} · {c.location}</p>
                </div>
              </div>
              <p style={{ color: "#ccc", lineHeight: 1.7, marginBottom: 20 }}>{c.bio}</p>
              <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: "bold", color: "#e8c97e" }}>{c.posts}</div>
                  <div style={{ fontSize: 12, color: "#888" }}>{t.posts}</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: "bold", color: "#e8c97e" }}>{c.subscribers.toLocaleString()}</div>
                  <div style={{ fontSize: 12, color: "#888" }}>{t.subscribers}</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: "bold", color: "#e8c97e" }}>€{c.price}</div>
                  <div style={{ fontSize: 12, color: "#888" }}>{t.perMonth}</div>
                </div>
              </div>
              {!isSub ? (
                <button onClick={() => handleSubscribe(c)} style={{
                  width: "100%", background: "linear-gradient(135deg, #e8c97e, #c4773b)",
                  border: "none", borderRadius: 50, padding: "14px 0",
                  fontWeight: "bold", fontSize: 16, cursor: "pointer", color: "#0d0d0d", marginBottom: 28,
                }}>{t.subscribe} — €{c.price}{t.perMonth}</button>
              ) : (
                <button disabled style={{
                  width: "100%", background: "#1f2e1a", border: "1px solid #4a7a3a",
                  borderRadius: 50, padding: "14px 0", color: "#7ecf6e",
                  fontWeight: "bold", fontSize: 16, marginBottom: 28,
                }}>{t.subscribed}</button>
              )}
              <h3 style={{ color: "#e8c97e", marginBottom: 16, fontSize: 16, letterSpacing: 1 }}>{t.exclusiveContent}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
                {c.preview.map((img, i) => (
                  <div key={i} style={{ position: "relative", aspectRatio: "1" }}>
                    <img src={img} alt="" style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      filter: isSub ? "none" : i > 0 ? "blur(12px) brightness(0.4)" : "none",
                      borderRadius: 4,
                    }} />
                    {!isSub && i > 0 && (
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🔒</div>
                    )}
                  </div>
                ))}
              </div>
              {!isSub && <p style={{ textAlign: "center", color: "#888", fontSize: 13, marginTop: 12 }}>{t.lockedMsg}</p>}
              <button onClick={() => setPage("home")} style={{
                marginTop: 32, background: "transparent", border: "1px solid #333",
                color: "#888", padding: "10px 20px", borderRadius: 20, cursor: "pointer",
              }}>{t.back}</button>
            </div>
          </div>
        );
      })()}

      {page === "feed" && (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "32px 24px" }}>
          <h2 style={{ color: "#e8c97e", marginBottom: 24 }}>{t.myFeed}</h2>
          {subscribed.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
              <p style={{ color: "#888", marginBottom: 20 }}>{t.noSubs}</p>
              <button onClick={() => setPage("home")} style={{
                background: "#e8c97e", color: "#0d0d0d", border: "none",
                borderRadius: 50, padding: "12px 28px", cursor: "pointer", fontWeight: "bold",
              }}>{t.browseBtn}</button>
            </div>
          ) : (
            creators.filter(c => subscribed.includes(c.id)).map(c => (
              <div key={c.id} style={{ background: "#141414", borderRadius: 16, marginBottom: 20, border: "1px solid #222", overflow: "hidden" }}>
                <img src={c.preview[0]} alt="" style={{ width: "100%", height: 220, objectFit: "cover" }} />
                <div style={{ padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <img src={c.avatar} alt="" style={{ width: 40, height: 40, borderRadius: "50%" }} />
                    <div>
                      <div style={{ fontWeight: "bold" }}>{c.name}</div>
                      <div style={{ color: "#888", fontSize: 12 }}>{c.handle}</div>
                    </div>
                  </div>
                  <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6 }}>{c.bio}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {page === "home" && (
        <div>
          <div style={{ textAlign: "center", padding: "60px 24px 40px", background: "radial-gradient(ellipse at 50% 0%, #1a1200 0%, #0d0d0d 70%)" }}>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#e8c97e", marginBottom: 16, textTransform: "uppercase" }}>Nederland & België</div>
            <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: "bold", lineHeight: 1.1, marginBottom: 16, color: "#f0ece4" }}>{t.hero}</h1>
            <p style={{ color: "#999", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7, fontSize: 15 }}>{t.tagline}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 40, marginBottom: 8 }}>
              {[["12.400+", "Creators"], ["340K+", "Fans"], ["iDEAL & Bancontact", "Betaalmethodes"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: "bold", color: "#e8c97e" }}>{num}</div>
                  <div style={{ fontSize: 11, color: "#888", letterSpacing: 1 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "16px 24px", display: "flex", gap: 8, overflowX: "auto", borderBottom: "1px solid #1a1a1a" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                background: activeCategory === cat ? "#e8c97e" : "#1a1a1a",
                color: activeCategory === cat ? "#0d0d0d" : "#888",
                border: "none", borderRadius: 50, padding: "8px 16px",
                cursor: "pointer", whiteSpace: "nowrap", fontSize: 13,
                fontWeight: activeCategory === cat ? "bold" : "normal",
              }}>{cat}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, padding: "28px 24px", maxWidth: 1100, margin: "0 auto" }}>
            {filtered.map(c => (
              <div key={c.id} onClick={() => { setSelectedCreator(c); setPage("creator"); }} style={{
                background: "#141414", borderRadius: 20, overflow: "hidden",
                border: "1px solid #222", cursor: "pointer",
              }}>
                <div style={{ position: "relative" }}>
                  <img src={c.cover} alt="" style={{ width: "100%", height: 120, objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, #141414 100%)" }} />
                  {subscribed.includes(c.id) && (
                    <div style={{ position: "absolute", top: 10, right: 10, background: "#2a3f24", color: "#7ecf6e", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: "bold" }}>
                      ✓ Geabonneerd
                    </div>
                  )}
                </div>
                <div style={{ padding: "0 16px 20px", marginTop: -30, position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 12 }}>
                    <img src={c.avatar} alt="" style={{ width: 54, height: 54, borderRadius: "50%", border: "2px solid #e8c97e", flexShrink: 0 }} />
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ fontWeight: "bold", fontSize: 15 }}>{c.name}</span>
                        {c.verified && <span style={{ color: "#e8c97e", fontSize: 12 }}>✦</span>}
                      </div>
                      <div style={{ color: "#888", fontSize: 12 }}>{c.location}</div>
                    </div>
                  </div>
                  <div style={{ display: "inline-block", background: "#1f1f1f", color: "#e8c97e", fontSize: 11, padding: "3px 10px", borderRadius: 20, marginBottom: 10 }}>{c.category}</div>
                  <p style={{ color: "#aaa", fontSize: 13, lineHeight: 1.5, marginBottom: 14, minHeight: 40 }}>{c.bio}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ color: "#888", fontSize: 12 }}>{c.subscribers.toLocaleString()} {t.subscribers}</div>
                    <div style={{ background: "linear-gradient(135deg, #e8c97e22, #c4773b22)", border: "1px solid #e8c97e44", color: "#e8c97e", fontWeight: "bold", padding: "6px 14px", borderRadius: 50, fontSize: 13 }}>
                      €{c.price}{t.perMonth}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 6px; height: 6px; } ::-webkit-scrollbar-track { background: #111; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }`}</style>
    </div>
  );
          }
