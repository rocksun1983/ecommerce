import MenuList from "./menu-list";

export default function Menu() {
  return (
    <div className="bg-white w-full">
      <MenuList
        logo="../shirt.jpg"
        href="/category/Men clothes"
        title="Men Clothes"
        keyword="clothes"
      />
      <MenuList
        logo="../gown2.png"
        href="/category/Women clothes"
        title="Women Clothes"
        keyword="clothes"
      />
      <MenuList
        logo="../kid.jpg"
        href="/category/Babies and Kids"
        title="Babies and Kids"
        keyword="Kids"
      />
     
      <MenuList
        logo="../fryer.jpg"
        href="/category/furniture"
        title="Home  Appliances"
        keyword="appliances"
      />
      <MenuList
        logo="../computer.jpg"
        href="/category/Computer System"
        title="Computer System"
        keyword="Computer"
      />
                    
      
      <MenuList
        logo="../phone.jpg"
        href="/category/Mobile Phones"
        title="Mobile Phones"
        keyword="Mobile"
      />
      
      <MenuList
        logo="../house.jpg"
        href="/category/properties"
        title="Land Properties"
        keyword="properties"
      />
      
    </div>
  );
}
