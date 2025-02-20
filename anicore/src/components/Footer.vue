<template>
  <footer>
    <div class="social">
      <a href="https://t.me/anicore_anime"><i class="fab fa-telegram"></i></a>
      <a href="https://vk.com/anicore_anime"><i class="fab fa-vk"></i></a>
    </div>
    <div class="disclaimer">
      <p>AniCore - ваш путеводитель в мире аниме</p>
      <p>Сайт создан как дипломный проект.</p>
      <p>Сайт не предназначен для получения финансовой выгоды.</p>
      <p>Если какой-либо контент нарушает авторские права, пожалуйста, свяжитесь с нами по адресу: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="91f2feffe5f0f2e5d1f0fff8f2fee3f4bfe3e4">[email&#160;protected]</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  background: var(--surface);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem var(--spacing);
  margin-top: 4rem;
}

.social {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.social a {
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: color 0.2s;
}

.social a:hover {
  color: var(--primary);
}

.disclaimer {
  text-align: center;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}
</style>