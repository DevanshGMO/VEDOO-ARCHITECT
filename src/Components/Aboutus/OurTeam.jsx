import member1 from '../../assets/Photo1.png';
import member2 from '../../assets/Photo2.png';
import member3 from '../../assets/Photo3.png';
import member4 from '../../assets/Photo4.png';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    image: member1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Lead Designer',
    image: member2,
  },
  {
    id: 3,
    name: 'Peter Jones',
    role: 'Developer',
    image: member3,
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Marketing Manager',
    image: member4,
  },
];

const OurTeam = () => {
  return (
    <section className="px-4 lg:px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-2 md:text-5xl">
          Our <span className='text-[#ff9100]'> Team</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Our Expert Members
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                className="w-full h-auto object-cover"
                src={member.image}
                alt={member.name}
              />
              {/* Add name and role below the photo */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;