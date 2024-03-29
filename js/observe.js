const targets = document.querySelectorAll('[data-src]');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // console.log('😍');
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');

        img.setAttribute('src', src);

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);