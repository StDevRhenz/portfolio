
import UnspokenLetter from '../assets/projects/pic1.png';
import Calculator from '../assets/projects/pic2.jpeg';
import CafeMeraki from '../assets/projects/pic3.png';

export const projectsData = [
  {
    id: 1,
    title: 'Unspoken Letter',
    category: 'Websites',
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
    status: 'In Progress' // 'Done', 'Pending', 'In Progress'
  },
//   {
//     id: 4,
//     title: 'Project Title 4',
//     category: 'Desktop App',
//     image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
//     tech: ['💻 Electron', '🖥️ Node.js'],
//     description: 'Brief description of Project Title 4.',
//     liveUrl: '#',
//     codeUrl: '#'
//   },
//   {
//     id: 5,
//     title: 'Project Title 5',
//     category: 'Web App',
//     image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
//     tech: ['🌐 Next.js', '📦 Redux'],
//     description: 'Brief description of Project Title 5.',
//     liveUrl: '#',
//     codeUrl: '#'
//   }
];

export const projectCategories = ['All', 'Websites', 'Mobile Application', 'Desktop Application'];
