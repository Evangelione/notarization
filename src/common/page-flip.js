export default class PageFlip {
  constructor(mainElement, pages) {
    this.pages = pages;
    this.audioUrl = require('@/assets/music/page-flip.mp3');
    this.transitionMs = 500;
    this.hasPrevPage = false;
    this.hasNextPage = true;

    this.leftHiddenPage = -3;
    this.leftOverleaf = -2;
    this.leftPage = -1;
    this.rightPage = 0;
    this.rightOverleaf = 1;
    this.rightHiddenPage = 2;
    this._el('#pageFlip').element.innerHTML = `
      <div id="page-flip"><span class='page-flip-loader'></span></div>
    `;
    this.preloadPages(() => {
      this.preloadAudio();
      this.buildMarkup('#pageFlip');
      this.renderPages();
      this.addClickOnGrabbers();
    });
  }

  preloadPages(callback) {
    let images = [],
      loaded = 0;

    // for (let i = 0; i < this.pages.length; i++) {
    //   images[i] = new Image();
    //   images[i].onload = () => {
    //     if (++loaded === this.pages.length) callback();
    //   };
    //   images[i].src = this.pages[i];
    // }
    this.pages.forEach((value, index) => {
      images[index] = new Image();
      images[index].onload = () => {
        if (++loaded === this.pages.length) callback();
      };
      images[index].src = this.pages[index];
    });

  };

  preloadAudio() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.src = this.audioUrl;
  };

  organizePages(direction) {
    let $pageLeft = this._el('.page-left'),
      $pageRight = this._el('.page-right');

    if (direction === 'prev') {
      if (this.leftHiddenPage <= -1) {
        $pageLeft.addClass('reduce-to-left');
      }
      this.addPage(this.leftHiddenPage, '.hidden-left-page');
      this.addPage(this.leftOverleaf, '.prev-page');
      this.leftHiddenPage -= 2;
      this.leftOverleaf -= 2;
      this.leftPage -= 2;
      this.rightPage -= 2;
      this.rightOverleaf -= 2;
      this.rightHiddenPage -= 2;
    } else {
      if (this.rightHiddenPage >= this.pages.length) {
        $pageRight.addClass('reduce-to-right');
      }
      this.addPage(this.rightHiddenPage, '.hidden-right-page');
      this.addPage(this.rightOverleaf, '.next-page');
      this.leftHiddenPage += 2;
      this.leftOverleaf += 2;
      this.leftPage += 2;
      this.rightPage += 2;
      this.rightOverleaf += 2;
      this.rightHiddenPage += 2;
    }

    if (this.leftOverleaf <= -1) {
      $pageLeft.addClass('disable-click');
      this.hasPrevPage = false;
    } else {
      $pageLeft.removeClass('disable-click');
      this.hasPrevPage = true;
    }

    if (this.rightOverleaf > this.pages.length) {
      $pageRight.addClass('disable-click');
      this.hasNextPage = false;
    } else {
      $pageRight.removeClass('disable-click');
      this.hasNextPage = true;
    }

    this.delayTransition(() => {
      this.renderPages();
    });
  };

  renderPages() {
    this.addPage(this.leftPage, '.page-left');
    this.addPage(this.rightPage, '.page-right');
  };

  addClickOnGrabbers() {
    let $leftGrabber = this._el('.page-left .page-grabber').element,
      $rightGrabber = this._el('.page-right .page-grabber').element;
    $leftGrabber.addEventListener('click', () => {
      this.leftGrabberOnClick();
    }, false);
    $rightGrabber.addEventListener('click', () => {
      this.rightGrabberOnClick();
    }, false);
    this._el('.page-left').addClass('disable-click');
  };

  leftGrabberOnClick() {
    if (!this.hasPrevPage && !this.isTurningPage) return;

    this.audio.play();
    this.isTurningPage = true;

    let $prevPage = this._el('.prev-page'),
      $leftBrightness = this._el('.left-brightness'),
      $hiddenLeftPage = this._el('.hidden-left-page'),
      $pageGrabber = this._el('.page-grabber');

    $prevPage.addClass('turning-prev-page');
    $leftBrightness.addClass('turning-right');
    $hiddenLeftPage.addClass('show-hidden-left-page');
    $pageGrabber.addClass('hide-page-fold');

    this.organizePages('prev');

    this.delayTransition(() => {
      $prevPage.removeClass('turning-prev-page');
      $leftBrightness.removeClass('turning-right');
      $hiddenLeftPage.removeClass('show-hidden-left-page');
      $pageGrabber.removeClass('hide-page-fold');
      this._el('.page-left').removeClass('reduce-to-left');
      this.reset();
    });
  };

  rightGrabberOnClick() {
    if (!this.hasNextPage && !this.isTurningPage) return;

    this.audio.play();
    this.isTurningPage = true;

    let $nextPage = this._el('.next-page'),
      $rightBrightness = this._el('.right-brightness'),
      $hiddenRightPage = this._el('.hidden-right-page'),
      $pageGrabber = this._el('.page-grabber');

    $nextPage.addClass('turning-next-page');
    $rightBrightness.addClass('turning-left');
    $hiddenRightPage.addClass('show-hidden-right-page');
    $pageGrabber.addClass('hide-page-fold');

    this.organizePages('next');

    this.delayTransition(() => {
      $nextPage.removeClass('turning-next-page');
      $rightBrightness.removeClass('turning-left');
      $hiddenRightPage.removeClass('show-hidden-right-page');
      $pageGrabber.removeClass('hide-page-fold');
      this._el('.page-right').removeClass('reduce-to-right');
      this.reset();
    });
  };

  delayTransition(callback) {
    setTimeout(() => {
      callback();
    }, this.transitionMs);
  };

  addPage(page, selector) {
    if (this.pages[page] !== undefined) {
      this._el(selector).element.style.backgroundImage = 'url("' + this.pages[page] + '")';
    } else {
      this._el(selector).element.style.backgroundImage = null;
    }
  };

  reset() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isTurningPage = false;
  };

  buildMarkup(mainElement) {
    this._el('#page-flip').element.innerHTML = `
      <div class="pages-container">
        <div class="hidden-left-page"></div>
        <div class="left-brightness"></div>
        <div class="prev-page"></div>
        <div class="page-left">
          <div class="page-grabber">
            <div class="page-fold"></div>
          </div>
          <div class="page-middle"></div>
        </div>
        <div class="page-right">
          <div class="page-middle"></div>
          <div class="page-grabber">
            <div class="page-fold"></div>
          </div>
        </div>
        <div class="next-page"></div>
        <div class="right-brightness"></div>
        <div class="hidden-right-page"></div>
      </div>
    `;
  };

  _el(selector) {
    return {
      element: document.querySelector(selector),
      addClass: function(className) {
        this.element.classList.add(className);
        return this;
      },
      removeClass: function(className) {
        this.element.classList.remove(className);
        return this;
      },
    };
  };
}
