import CostcoLogo from "../../assets/BrandLogo1.png";
import TysonLogo from "../../assets/BrandLogo2.png";
import KrogerLogo from "../../assets/BrandLogo3.png";
import BungeLogo from "../../assets/BrandLogo4.png";
import KraftHeinzLogo from "../../assets/BrandLogo5.png";
import EsteeLauderLogo from "../../assets/BrandLogo6.png";

const BrandCollaborations = () => {
  const brands = [
    { name: 'Costco Wholesale', logo: CostcoLogo },
    { name: 'Tyson', logo: TysonLogo },
    { name: 'Kroger', logo: KrogerLogo },
    { name: 'Bunge', logo: BungeLogo },
    { name: 'Kraft Heinz', logo: KraftHeinzLogo },
    { name: 'Estee Lauder Companies', logo: EsteeLauderLogo },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="flex flex-col items-center justify-center min-h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff9100] mb-2">
            Collaborations
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
            With Our Brands
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCollaborations;