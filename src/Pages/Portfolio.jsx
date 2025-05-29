
import One from "../assets/Portfolio/One.png";
import Two from "../assets/Portfolio/Two.png";
import Three from "../assets/Portfolio/Three.png";
import Four from "../assets/Portfolio/Four.png"
const Portfolio = () => {

  
const data = [
  {
    id: 1,
    category: 'Interior Design',
    title: 'Built on Ideas,',
    subtitle: 'Framed in Detail',
    image: null,
    imagePosition: 'top-left',
    description: 'There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable.There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable.',
  },
  {
    id: 2,
    category: 'Exterior Design',
    image: One,
    title: '',
    subtitle: '',
  },
  {
    id: 3,
    category: 'Furniture & Decor',
    image: Two,
    title: '',
    subtitle: '',
  },
  {
    id: 4,
    category: 'Visualization',
    title: 'Concept to',
    subtitle: 'Creation, Detailed to Perfection',
    image: null,
    imagePosition: 'bottom-right',
    description: 'There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable.There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable.',
  },
  {
    id: 5,
    category: 'Visualization',
    title: 'Concept to',
    subtitle: 'Creation, Detailed to Perfection',
    image: null,
    imagePosition: 'bottom-right',
    description: 'There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable.There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable.',
  },
  {
    id: 6,
    category: 'Furniture & Decor',
    image: Three,
    title: '',
    subtitle: '',
  },
   {
    id: 7,
    category: 'Furniture & Decor',
    image: Four,
    title: '',
    subtitle: '',
  },
  {
    id: 8,
    category: 'Visualization',
    title: 'Architected by Concept',
    subtitle: 'Perfected in Execution',
    image: null,
    imagePosition: 'bottom-right',
    description: 'There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable.There are many variations of passages of available, but the majority have suffered alteration in some form, by which don’t look even slightly believable.',
  },
];



  const displayedData = data;

  return (
  <>
  
    <div className="container p-4 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {displayedData.map((item) => (  
          <div key={item.id} className="bg-white overflow-hidden flex flex-col justify-center items-center text-center">
            {item.image ? (
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="p-6 flex flex-col items-start text-left">
                <h2 className="text-4xl font-bold">
                  {item.title} <br />
                  <span className="text-[#FF9100]">{item.subtitle}</span>
                </h2>
                <p className="text-gray-600 mt-5 text-sm">{item.description}</p>
                <button className="mt-5 px-4 py-2 bg-[#052536] text-white text-sm  hover:bg-gray-700 transition">READ MORE →</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Portfolio