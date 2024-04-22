const primaryHeader = document.querySelector('.primary-header');
const secondaryHeader = document.querySelector('.secondary-header');
const primaryHeaderHeight = primaryHeader.getBoundingClientRect().height;

const navBarObserver = new IntersectionObserver(e=> {
const [entry] = e;


!entry.isIntersecting ? primaryHeader.classList.add('sticky') : primaryHeader.classList.remove('sticky'); },
{
    root: null,
    threshold: 0.15,
    rootMargin: `-${primaryHeaderHeight}px`
});

navBarObserver.observe(secondaryHeader);
    
    