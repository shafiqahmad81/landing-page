import { BsChatDotsFill } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import Abator1Image from '../src/assets/img/abator-1.jpg';
import Abator2Image from '../src/assets/img/abator-2.jpg';
import Abator3Image from '../src/assets/img/abator-3.jpg';
import Abator4Image from '../src/assets/img/abator-4.jpg';
import Computer1 from '../src/assets/img/computer-1.jpg';
import Computer2 from '../src/assets/img/computer-2.jpg';
import Computer3 from '../src/assets/img/computer-3.jpg';
import Computer4 from '../src/assets/img/computer-4.jpg';
import AboutImage from '../src/assets/img/computer.jpg';
import Feature1BgImage from '../src/assets/img/image-1.jpg';
import Feature2BgImage from '../src/assets/img/image-2.jpg';
import Feature3BgImage from '../src/assets/img/image-3.jpg';
import Feature4BgImage from '../src/assets/img/image-4.jpg';
import LogoImage from '../src/assets/img/logo.png';
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
};
export const testimonialData =[
  {
    image: Abator1Image,
    name: 'Serena',
    web: 'rana.com',
    message: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.',
    delay: '300'
  },
  {
    image: Abator2Image,
    name: 'Natila',
    web: 'natila.com',
    message: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.',
    delay: '500'
  },
  {
    image: Abator3Image,
    name: 'Vebin',
    web: 'vabin.com',
    message: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.',
    delay: '700'
  },
  {
    image: Abator4Image,
    name: 'Armin',
    web: 'rana.com',
    message: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.',
    delay: '900'
  },
]

export const ctaData={
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btntext1: 'Learn more',
  btntext2: 'Request Demo',
};

export const footerData={
  logo: LogoImage,
  address: 'Product texas',
  email: 'shafiqahmad081@gmail.com',
  phone: '01610931039',
  list1:[
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'Dw News',
      href: '#',
    },
  ],
  list2:[
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],

  sociallist:[
    {
      icon: <FaYoutube />,
      href: '#'
    },
    {
      icon: <FaInstagram />,
      href: '#'
    },
    {
      icon: <FaGithub />,
      href: '#'
    },
  ]

};

export const copyrightDAta ={
  text: '@ Product texas, 2022. All right reserved. Company Regestration Number:09375444',
  icon: <BsChatDotsFill />
}