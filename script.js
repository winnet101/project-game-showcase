const fallback = JSON.parse(document.querySelector('#fallback-content').textContent);
const editMode = new URLSearchParams(location.search).get('edit') === '1';
const objectUrls = [];

function render(data) {
  document.title = `${data.title} — Roblox`;
  document.querySelector('#hero-title').textContent = data.title;
  document.querySelector('#hero-description').textContent = data.description;
  document.querySelector('#place-id').textContent = data.robloxPlaceId;

  const gallery = document.querySelector('#gallery-grid');
  gallery.replaceChildren(...data.gallery.map((item, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.draft ? `Abstract placeholder artwork for ${item.label}; not a game screenshot` : `Project screenshot: ${item.caption}`;
    image.loading = index === 0 ? 'eager' : 'lazy';
    const frame = document.createElement('div');
    frame.className = 'gallery-image';
    frame.append(image);
    const tag = document.createElement('span');
    tag.className = 'image-label';
    tag.textContent = item.draft ? 'PLACEHOLDER · NOT A SCREENSHOT' : 'PROJECT SCREENSHOT';
    frame.append(tag);
    const meta = document.createElement('div');
    meta.className = 'gallery-meta';
    const name = document.createElement('strong');
    name.textContent = item.label;
    const caption = document.createElement('span');
    caption.textContent = item.caption;
    meta.append(name, caption);
    card.append(frame, meta);
    return card;
  }));

  document.querySelector('#detail-grid').replaceChildren(...data.details.map(item => {
    const card = document.createElement('div');
    card.className = 'detail-card';
    const label = document.createElement('span');
    label.className = 'detail-label';
    label.textContent = item.label;
    const value = document.createElement('span');
    value.className = 'detail-value';
    value.textContent = item.value;
    if (item.draft) {
      const tag = document.createElement('span');
      tag.className = 'draft-tag';
      tag.textContent = 'UNCONFIRMED';
      value.append(tag);
    }
    card.append(label, value);
    return card;
  }));

  const coverage = document.querySelector('#coverage');
  const heading = document.createElement('div');
  heading.className = 'coverage-title';
  heading.textContent = 'INFORMATION COVERAGE';
  coverage.replaceChildren(heading, ...data.coverage.map(item => {
    const row = document.createElement('div');
    row.className = 'coverage-row';
    const topic = document.createElement('span');
    topic.textContent = item.topic;
    const status = document.createElement('span');
    status.textContent = item.status;
    row.append(topic, status);
    return row;
  }));
  if (editMode) setupEditor(data);
}

function setupEditor(data) {
  const editor = document.querySelector('#editor');
  editor.hidden = false;
  const slots = document.querySelector('#upload-slots');
  data.gallery.forEach((item, index) => {
    const slot = document.createElement('div');
    slot.className = 'upload-slot';
    const label = document.createElement('label');
    label.htmlFor = `upload-${index}`;
    label.textContent = `${item.label} · choose image`;
    const input = document.createElement('input');
    input.id = `upload-${index}`;
    input.type = 'file';
    input.accept = 'image/png,image/jpeg,image/webp,image/gif';
    input.addEventListener('change', () => {
      const file = input.files && input.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        input.value = '';
        return;
      }
      if (objectUrls[index]) URL.revokeObjectURL(objectUrls[index]);
      objectUrls[index] = URL.createObjectURL(file);
      const image = document.querySelectorAll('.gallery-image img')[index];
      image.src = objectUrls[index];
      image.alt = `Local preview selected for ${item.label}; not yet published`;
      const status = editor.querySelector('.editor-status');
      status.textContent = `${item.label} preview active in this browser. Publish it by following the README.`;
    });
    slot.append(label, input);
    slots.append(slot);
  });
  const status = document.createElement('p');
  status.className = 'editor-status';
  status.setAttribute('aria-live', 'polite');
  status.textContent = 'Local preview only. Nothing is uploaded or saved.';
  slots.after(status);
  document.querySelector('#reset-previews').addEventListener('click', () => {
    objectUrls.forEach(url => url && URL.revokeObjectURL(url));
    location.href = location.pathname + '?edit=1';
  });
}

fetch('content.json').then(response => {
  if (!response.ok) throw new Error('content.json unavailable');
  return response.json();
}).then(render).catch(() => render(fallback));
