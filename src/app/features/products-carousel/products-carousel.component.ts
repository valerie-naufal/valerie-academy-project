import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss'],
})
export class ProductsCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Initialize Swiper with the correct configuration
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
    });
  }
}
