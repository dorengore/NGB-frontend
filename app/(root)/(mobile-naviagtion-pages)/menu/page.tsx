import MobileMenu from "@/components/navbars/mobile-menu";
import Servers from "@/components/servers";

const MenuPage = () => {
  return (
    <section className="w-full h-full">
      <section className="hidden md:block">
        Not available for this screen size
      </section>
      <section className="md:hidden ">
        <section className="flex gap-3  h-full">
          <Servers isMobile />
          <MobileMenu />
        </section>
      </section>
    </section>
  );
};

export default MenuPage;
