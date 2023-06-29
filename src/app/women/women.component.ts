import { Component } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  // code for carousel
  images = [
    { src: 'assets/women/carousel1.png', alt: 'Image 1' },
    { src: 'assets/women/carousel2.png', alt: 'Image 2' },
    { src: 'assets/women/carousel3.png', alt: 'Image 3' },
    { src: 'assets/women/carousel4.png', alt: 'Image 4' },
    // { src: 'assets/men/k4.jpg', alt: 'Image 5' },
    // { src: 'assets/men/k9.jpg', alt: 'Image 6' },


  ];



  slideOffset = 0;
  currentIndex = 0;

  ngOnInit() {
    this.transitionToNextSlide();
  }

  transitionToNextSlide() {
    const nextIndex = this.currentIndex + 1;
    if (nextIndex < this.images.length) {
      this.currentIndex = nextIndex;
    } else {
      this.currentIndex = 0; // Reset to the first slide
    }

    if (this.images[this.currentIndex].src === '') {
      // Empty image, move to the next available image
      this.transitionToNextSlide();
      return;
    }

    this.slideOffset = -this.currentIndex * 100;

    setTimeout(() => {
      this.transitionToNextSlide();
    }, 8000);
  }

  transitionToPreviousSlide() {
    const previousIndex = this.currentIndex - 1;
    if (previousIndex >= 0) {
      this.currentIndex = previousIndex;
    } else {
      this.currentIndex = this.images.length - 1; // Set to the last slide
    }

    if (this.images[this.currentIndex].src === '') {
      // Empty image, move to the previous available image
      this.transitionToPreviousSlide();
      return;
    }

    this.slideOffset = -this.currentIndex * 100;
  }

}
