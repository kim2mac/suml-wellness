/* 화면의 링크와 이미지를 site-config.js 설정에 연결합니다. */
(() => {
  const config = window.SITE_CONFIG || {};
  const externalUrl = value => {
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  };
  const email = config.email || 'base.2nd2@gmail.com';
  const mailto = `mailto:${email}`;
  document.querySelectorAll('[data-link]').forEach(link => {
    const key = link.dataset.link;
    const url = externalUrl(config[key]);
    if (url) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${link.textContent.trim()} (새 창)`);
    } else {
      link.href = key === 'kakao' ? mailto : '#contact';
      link.removeAttribute('target');
      link.removeAttribute('rel');
    }
    const status = document.querySelector(`[data-status="${key}"]`);
    if (status) status.hidden = Boolean(url);
  });
  if (externalUrl(config.kakao)) document.querySelector('[data-kakao-label]').textContent = '카카오 오픈채팅';
  document.querySelectorAll('[data-email]').forEach(link => link.href = mailto);
  document.querySelectorAll('[data-email-label]').forEach(label => label.textContent = email);
  document.querySelector('#year').textContent = new Date().getFullYear();
  if (config.profileImage) {
    const image = document.querySelector('#profile-image');
    image.onload = () => { image.hidden = false; document.querySelector('#profile-placeholder').hidden = true; };
    image.alt = config.profileImageAlt || '김이막';
    image.src = config.profileImage;
  }
  // 기본 SEO 문구는 index.html에 있습니다. 아래는 선택한 배포 주소/공유 이미지입니다.
  const setMeta = (property, content) => {
    const meta = document.querySelector('meta[property=' + JSON.stringify(property) + ']') || document.createElement('meta'); meta.setAttribute('property', property); meta.content = content; document.head.append(meta);
  };
  if (externalUrl(config.siteUrl)) {
    const canonical = document.querySelector('link[rel=canonical]') || document.createElement('link'); canonical.rel = 'canonical'; canonical.href = externalUrl(config.siteUrl); document.head.append(canonical);
    setMeta('og:url', canonical.href);
  }
  if (externalUrl(config.socialImage)) setMeta('og:image', externalUrl(config.socialImage));
})();
