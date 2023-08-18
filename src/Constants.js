import CPU from "./Assets/Projects/CPU.jpeg";
import EXCEL from "./Assets/Projects/Excel.png";
import BI from "./Assets/Projects/BI.png";
import CelebrityPortal from "./Assets/Projects/CelebrityPortal.png";
import SORT from "./Assets/Projects/Sort.jpg";
import Portfolio from "./Assets/Portfolio.png";
import DSA from "./Assets/DSA.png";

export const PROJECTS = [
  {
    image: CelebrityPortal,
    name: "Celebrity Wiki",
    technologyUsed: "Java, JavaFX, IntelliJ, Maven, MVC, Algorithm",
    description: "The celebrities Portal JavaFX app utilizes a binary search tree for ordered records, linked lists for connections, hashmaps for quick access using keys, and hashing for efficient storage. These structures collaborate to ensure speedy searches, navigation, and presentation of celebrity information, enhancing user interaction.",
    url: "https://github.com/manushiparajuli/MediaWiki",
  }
  ,
  {
    image: BI,
    name: "Research Project: Carboard App Accessibility and analysis",
    technologyUsed: "SQL, Excel, PowerBI",
    description: "Perform an extensive analysis of Google Play Store user reviews for Cardboard (VR) apps to uncover common UI/UX issues. A considerable amount of data is meticulously processed, labeled, and quantitatively analyzed, revealing key challenges within Cardboard applications. SQL is utilized for data refinement, Excel for manipulation, and Power BI for comprehensive visualization, facilitating a thorough exploration of the user experience.",
  },
  {
    image: SORT,
    name: "Sorting Algorithm",
    technologyUsed: "Java, JavaFX",
    description: "Visualization of MergeSort, Bubblesort, QuickSort, etc using Java and JavaFX.",
    url: "https://github.com/manushiparajuli/SortingJavaFX",
  },
  {
    image: EXCEL,
    name: "PostgreSQL",
    technologyUsed: "",
    description: "By leveraging PostgreSQL's powerful querying capabilities and data manipulation functions, the information about education levels, county comparisons, demographic ratios, and other relevant insights can be extracted and processed effectively to derive meaningful conclusions.",
    url: "https://github.com/manushiparajuli/PostgreSQL",
  },
  {
    image: CPU,
    name: "CPU Scheduling",
    technologyUsed: "Visual Studio Code, GO, GitHub",
    description: "Implemented Round Robin, Priority Scheduling, First Come, First Served, etc using GO language. ",
    url: "https://github.com/manushiparajuli/CSCE4600",
  },
  {
    image: Portfolio,
    name: "Portfolio Website",
    technologyUsed: "HTML, CSS, JavaScript, Bootstrap, ReactJs, VSCode, AWS, GitHub",
    description: "This portfolio website is developed using HTML, CSS, JavaScript and hosted in AWS S3",
    url: "",
  },
  {
    image: DSA,
    name: "Webpage Design/Develop for UNT",
    technologyUsed: "HTML, CSS, Drupal, Siteimprove, Excel",
    description: "Successfully developed and redesigned about 20 university webpages, focusing on SEO optimization and accessibility enhancements.",
    url: "",
  }
];


