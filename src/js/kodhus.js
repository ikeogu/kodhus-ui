import Dialog from './dialog';
import Notification from './notification';
import Navigation from './navigation';
import Dropdown from './dropdown';
import Aiv from './aiv';
import BGParallax from './bg-parallax';
import Carousel from './carousel';
import KScroll from './scroll-story';
import Tab from './tab';
import StepProgressBar from './step-progressbar';

(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    if (hljs) {
      hljs.highlightBlock(block);
    }
  });
})();

export {
  Dialog, Notification, Navigation, Aiv, BGParallax, Carousel, KScroll, Tab, StepProgressBar,
  Dropdown,
};
