import Computer1 from '../src/assets/img/computer-1.jpg';
import Computer2 from '../src/assets/img/computer-2.jpg';
import Computer3 from '../src/assets/img/computer-3.jpg';
import Computer4 from '../src/assets/img/computer-4.jpg';
import AboutImage from '../src/assets/img/computer.jpg';
import Feature1BgImage from '../src/assets/img/image-1.jpg';
import Feature2BgImage from '../src/assets/img/image-2.jpg';
import Feature3BgImage from '../src/assets/img/image-3.jpg';
import Feature4BgImage from '../src/assets/img/image-4.jpg';
import ShopingImage from '../src/assets/img/shoping.png';

export const NavicationData = [
  {
  name: 'Deliver',
  href: '#',
  },
  {
  name: 'About',
  href: '#',
  },
  {
  name: 'Features',
  href: '#',
  },
  {
  name: 'Singup',
  href: '#',
  },
];

export const heroData = {
  title: `Order Products Fester Easier`,
  subtitle:'Order yout favorite foots at any time and we will deliver them right to where you are.',
  btnText: 'Get Started',
  image: ShopingImage,
};

export const aboutData = {
  image: AboutImage,
  title: 'Find Out A Little More About us',
  subtitle: 'we are a company dedicated to the distribution of products by delivry to your home or to the place where you are',
};

export const featuresData = {
  title: 'Some Service we offer',
  subtitle: 'with our app you can vew the route of your order, from our local headquater to the pleace where you are.Look for the app now!',
  list: [
    {
      image: Computer1,
      bgimage: Feature1BgImage,
      title: 'payment Done',
      description: 'Pay with a Visha or PayPal card and without much ado',
      linktext: 'learn more',
      delay: '400',
    },
    {
      image: Computer2,
      bgimage: Feature2BgImage,
      title: 'payment Done',
      description: 'Pay with a Visha or PayPal card and without much ado',
      linktext: 'learn more',
      delay: '600',
    },
    {
      image: Computer3,
      bgimage: Feature3BgImage,
      title: 'payment Done',
      description: 'Pay with a Visha or PayPal card and without much ado',
      linktext: 'learn more',
      delay: '800',
    },
    {
      image: Computer4,
      bgimage: Feature4BgImage,
      title: 'payment Done',
      description: 'Pay with a Visha or PayPal card and without much ado',
      linktext: 'learn more',
      delay: '1000',
    },
  ]
}