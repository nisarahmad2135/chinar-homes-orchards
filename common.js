function waLink(whatsapp, itemName) {
  const msg = encodeURIComponent(`Hi, I'm interested in "${itemName}" — could you share more details?`);
  return `https://wa.me/${whatsapp}?text=${msg}`;
}

function renderNav(active) {
  const items = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'properties.html', label: 'Properties', key: 'properties' },
    { href: 'fruits.html', label: 'Fruits', key: 'fruits' },
    { href: 'products.html', label: 'Products', key: 'products' },
  ];
  return `
  <nav>
    <div class="wrap">
      <a class="brand" href="index.html" id="nav-brand">Loading…</a>
      <div class="links">
        ${items.map(i => `<a href="${i.href}"${i.key === active ? ' style="color:#D9A441;opacity:1"' : ''}>${i.label}</a>`).join('')}
      </div>
    </div>
  </nav>`;
}

function propertyCard(p, whatsapp) {
  return `
    <div class="card">
      <img src="${p.image}" alt="">
      <div class="card-body">
        <div class="tag">${p.price}</div>
        <h3>${p.title}</h3>
        <div class="meta">${p.listingType} · ${p.location}</div>
        <p class="desc">${p.description}</p>
        <a class="enquire" href="${waLink(whatsapp, p.title)}" target="_blank" rel="noopener">Enquire on WhatsApp →</a>
      </div>
    </div>`;
}

function fruitCard(f, whatsapp) {
  return `
    <div class="card">
      <img src="${f.image}" alt="">
      <div class="card-body">
        <div class="tag">${f.price}</div>
        <h3>${f.name}</h3>
        <div class="meta">In season: ${f.season}</div>
        <p class="desc">${f.description}</p>
        <a class="enquire" href="${waLink(whatsapp, f.name)}" target="_blank" rel="noopener">Order on WhatsApp →</a>
      </div>
    </div>`;
}

function productCard(pr, whatsapp) {
  return `
    <div class="card">
      <img src="${pr.image}" alt="">
      <div class="card-body">
        <div class="tag">${pr.price}</div>
        <h3>${pr.name}</h3>
        <p class="desc">${pr.description}</p>
        <a class="enquire" href="${waLink(whatsapp, pr.name)}" target="_blank" rel="noopener">Order on WhatsApp →</a>
      </div>
    </div>`;
}

function renderAboutContact(site) {
  return `
  <section class="about-contact">
    <div class="wrap">
      <div>
        <h2>About us</h2>
        <p>${site.aboutBody}</p>
      </div>
      <div class="contact-block">
        <div>📍 ${site.address}</div>
        <div>📞 <a href="tel:${site.phone}">${site.phone}</a></div>
        <div>💬 <a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener">WhatsApp us</a></div>
        <div>✉️ <a href="mailto:${site.email}">${site.email}</a></div>
      </div>
    </div>
  </section>`;
}

function loadSite(callback) {
  fetch('content.json?_=' + Date.now())
    .then(r => r.json())
    .then(data => {
           document.getElementById('nav-brand').innerHTML = data.site.logo
        ? `<img src="${data.site.logo}" alt="${data.site.businessName}" style="height:36px;vertical-align:middle;margin-right:8px;border-radius:2px;">${data.site.businessName}`
        : data.site.businessName;
      document.title = data.site.businessName;
      callback(data);
    });
}
