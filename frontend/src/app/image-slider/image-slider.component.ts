import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  title= 'image-slider';

  imageSize: any = {
    width: 400, height: 400, space: 4
  }

  imageObject: Array<object> = [
     {
      image: 'https://thumbs.dreamstime.com/b/bitcoin-accepted-sign-emblem-d-isometric-physical-bit-coin-text-accepted-here-cryptocurrency-golden-silver-bitcoin-114506486.jpg',
      thumbImage: 'https://thumbs.dreamstime.com/b/bitcoin-accepted-sign-emblem-d-isometric-physical-bit-coin-text-accepted-here-cryptocurrency-golden-silver-bitcoin-114506486.jpg',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202107/greenbonds1200-sixteen_nine.jpg?size=1200:675',
      thumbImage: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202107/greenbonds1200-sixteen_nine.jpg?size=1200:675',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'https://a1mortgage.com/wp-content/uploads/2021/02/jumbo-loan-mortgage-img.jpg',
      thumbImage: 'https://a1mortgage.com/wp-content/uploads/2021/02/jumbo-loan-mortgage-img.jpg',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'https://uaeexpatriates.com/wp-content/uploads/2023/01/top-money-exchanges-in-uae.png',
      thumbImage: 'https://uaeexpatriates.com/wp-content/uploads/2023/01/top-money-exchanges-in-uae.png',
      alt: 'img',
      //title: 'Image 1'
    },{
      image: 'https://images.wisegeek.com/gold-credit-card.jpg',
      thumbImage: 'https://images.wisegeek.com/gold-credit-card.jpg',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'https://th.bing.com/th/id/OIP.Ibd84jouU2TB-kXZRakSbQAAAA?rs=1&pid=ImgDetMain',
      thumbImage: 'https://th.bing.com/th/id/OIP.Ibd84jouU2TB-kXZRakSbQAAAA?rs=1&pid=ImgDetMain',
      alt: 'img',
      //title: 'Image 1'
    },{
      image: 'assets/images/1.jpg',
      thumbImage: 'assets/images/1.jpg',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'https://th.bing.com/th/id/OIF.Zx6bazCe9T8ezCWvvpjQeQ?rs=1&pid=ImgDetMain',
      thumbImage: 'https://th.bing.com/th/id/OIF.Zx6bazCe9T8ezCWvvpjQeQ?rs=1&pid=ImgDetMain',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'assets/images/3.jpg',
      thumbImage: 'assets/images/3.jpg',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'https://dw8hn2nzcjgu6.cloudfront.net/wp-content/uploads/2021/07/UPI-Paymentss.jpg',
      thumbImage: 'https://dw8hn2nzcjgu6.cloudfront.net/wp-content/uploads/2021/07/UPI-Paymentss.jpg',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'assets/images/5.jpg',
      thumbImage: 'assets/images/5.jpg',
      alt: 'img',
      //title: 'Image 1'
    }, {
      image: 'https://th.bing.com/th/id/R.df25eabe9607ccafaa0cf4f75ee00d09?rik=zavxwEiNGYZ6Kw&riu=http%3a%2f%2fwww.zerooutages.com%2fimg%2fZeroOutages-Map-v2.png&ehk=mSKCqGIyX%2f3QpZHpTgGuB0w4WplM8isWpn%2bDAVnGZtQ%3d&risl=&pid=ImgRaw&r=0',
      thumbImage: 'https://th.bing.com/th/id/R.df25eabe9607ccafaa0cf4f75ee00d09?rik=zavxwEiNGYZ6Kw&riu=http%3a%2f%2fwww.zerooutages.com%2fimg%2fZeroOutages-Map-v2.png&ehk=mSKCqGIyX%2f3QpZHpTgGuB0w4WplM8isWpn%2bDAVnGZtQ%3d&risl=&pid=ImgRaw&r=0  ',
      alt: 'img',
      //title: 'Image 1'
    }
];
}
