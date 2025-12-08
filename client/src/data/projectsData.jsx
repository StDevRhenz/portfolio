
import UnspokenLetter from '../assets/projects/pic1.png';
import Calculator from '../assets/projects/pic2.jpeg';
import CafeMeraki from '../assets/projects/pic3.png';
import RideMotto from '../assets/projects/pic4.jpg';
import DismissedOrNot from '../assets/projects/pic5.png';

export const projectsData = [
  {
    id: 1,
    title: 'Unspoken Letter',
    category: 'Websites', //'All', 'Websites', 'Mobile Application', 'Desktop Application'
    image: UnspokenLetter,
    tech: ['TypeScript', 'JavaScript', 'Supabase', 'React'],
    description: 'This UnspokenLetter is a platform where users can write letter and allows users to reflect on their current thoughts and feelings, and revisit them later.',
    liveUrl: 'https://unspokenletter.vercel.app',
    codeUrl: 'https://github.com/StDevRhenz/unspokenletter',
    status: 'Done' // 'Done', 'Pending', 'In Progress'
  },
  {
    id: 2,
    title: 'Calculator App',
    category: 'Mobile Application',
    image: Calculator,
    tech: ['React Native', 'Tailwind CSS', 'TypeScript', 'Expo'],
    description: 'A simple calculator app with Different Feature like Scientific Calculator, Standard Calculator, Units Converter, and more.',
    liveUrl: 'https://expo.dev/accounts/rhenz/projects/calculator/builds/f60ccecf-2774-4818-b5b4-5bde2bd8f7c5?fbclid=IwY2xjawLknYVleHRuA2FlbQIxMABicmlkETFDcDh6RVRLWHU3aWtOc0dwAR5uhDsuc7ap_3kj2334nAcleoC1s_wTxdmskDoXN4T7br6z13AnX-aBZ5G4Dg_aem_h5Xn_C0SNO0gWxmKzKU0aA',
    codeUrl: 'https://github.com/StDevRhenz/Calculator',
    status: 'Done' // 'Done', 'Pending', 'In Progress'
  },
  {
    id: 3,
    title: 'Cafe Meraki',
    category: 'Websites',
    image: CafeMeraki,
    tech: ['Nextjs', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    description: 'This is the Cafe Meraki website. This project was recreated in 2025 to improve and enhance the original version developed in 2023. (1st yr College Project)',
    liveUrl: 'https://cafe-meraki-kappa.vercel.app',
    codeUrl: 'https://github.com/StDevRhenz/cafe-meraki',
    status: 'Done' // 'Done', 'Pending', 'In Progress'
  },
  {
    id: 4,
    title: 'Ride Motto',
    category: 'Mobile Application',
    image: RideMotto,
    tech: ['React Native', 'Nodejs', 'Typescript', 'Expo'],
    description: 'This app gives the users the ability to book appointments, check products, and pin their location when they are stranded on the road. (3rd yr 1st Sem College Project)',
    liveUrl: '#',
    codeUrl: '#',
    status: 'In Progress' // 'Done', 'Pending', 'In Progress'
  },
  {
    id: 5,
    title: 'Dismissed or not',
    category: 'Mobile Application',
    image: DismissedOrNot,
    tech: ['Unity', 'C#'],
    description: 'This Mobile arcade-horror maze runner where players experience a nightmare as a student trapped in an endless school. (3rd yr 1st Sem College Project)',
    liveUrl: '#',
    codeUrl: 'https://github.com/StDevRhenz/DismissedOrNotMobileGame',
    status: 'Done' // 'Done', 'Pending', 'In Progress'
  },
];

export const projectCategories = ['All', 'Websites', 'Mobile Application', 'Desktop Application'];
