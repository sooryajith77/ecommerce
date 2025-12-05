// "use client";

// import Link from "next/link";
// import { GiTShirt, GiDress, GiDiamondRing, GiSmartphone, GiCook, GiToyMallet, GiBabyFace, GiLaptop } from "react-icons/gi";

// const categories = [
//   { id: "mens-clothing", name: "Mens Clothing", icon: GiTShirt },
//   { id: "womens-clothing", name: "Womens Clothing", icon: GiDress },
//   { id: "ornaments", name: "Ornaments", icon: GiDiamondRing },
//   { id: "accessories", name: "Accessories", icon: GiSmartphone },
//   { id: "home-appliance", name: "Home Appliance", icon: GiCook },
//   { id: "kids", name: "Kids", icon: GiBabyFace },
//   { id: "toys", name: "Toys", icon: GiToyMallet },
//   { id: "electronics", name: "Electronics", icon: GiLaptop },
// ];

// export default function CategoryList() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         overflowX: "auto",
//         padding: "15px 20px",
//         gap: "90px", 
//       }}
//     >
//       {categories.map((cat) => {
//         const Icon = cat.icon;
//         return (
//           <Link key={cat.id} href={`/category/${cat.id}`} style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 minWidth: "100px",
//                 cursor: "pointer",
//                 transition: "transform 0.2s, box-shadow 0.2s",
//               }}
//               className="category-item"
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-5px)";
//                 e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "none";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
              
//               <div
//                 style={{
//                   width: "55px",
//                   height: "55px",
//                   borderRadius: "50%",
//                   backgroundColor: "#007bff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginBottom: "5px",
//                   flexShrink: 0,
//                 }}
//               >
//                 <Icon size={28} color="white" />
//               </div>

           
//               <div style={{ fontSize: "0.8rem", fontWeight: "500", textAlign: "center" }}>
//                 {cat.name}
//               </div>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";
// import { 
//   GiTShirt, GiDress, GiDiamondRing, GiSmartphone, GiCook, 
//   GiToyMallet, GiBabyFace, GiLaptop, GiCarrot, GiMeat, GiLipstick, GiSofa, GiTable 
// } from "react-icons/gi";

// const categories = [
//   { id: "mens-clothing", name: "Mens Clothing", icon: GiTShirt },
//   { id: "womens-clothing", name: "Womens Clothing", icon: GiDress },
//   { id: "ornaments", name: "Ornaments", icon: GiDiamondRing },
//   { id: "accessories", name: "Accessories", icon: GiSmartphone },
//   { id: "home-appliance", name: "Home Appliance", icon: GiCook },
//   { id: "vegetables", name: "Vegetables", icon: GiCarrot },
//   { id: "meat", name: "Meat", icon: GiMeat },
//   { id: "cosmetics", name: "Cosmetics", icon: GiLipstick },
//   { id: "home", name: "Home", icon: GiSofa },
//   { id: "furniture", name: "Furniture", icon: GiTable },
// ];

// export default function CategoryList() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         overflowX: "auto",
//         padding: "15px 20px",
//         gap: "90px", 
//       }}
//     >
//       {categories.map((cat) => {
//         const Icon = cat.icon;
//         return (
//           <Link key={cat.id} href={`/category/${cat.id}`} style={{ textDecoration: "none" }}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 minWidth: "100px",
//                 cursor: "pointer",
//                 transition: "transform 0.2s, box-shadow 0.2s",
//               }}
//               className="category-item"
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-5px)";
//                 e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "none";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               <div
//                 style={{
//                   width: "55px",
//                   height: "55px",
//                   borderRadius: "50%",
//                   backgroundColor: "#007bff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginBottom: "5px",
//                   flexShrink: 0,
//                 }}
//               >
//                 <Icon size={28} color="white" />
//               </div>
//               <div style={{ fontSize: "0.8rem", fontWeight: "500", textAlign: "center" }}>
//                 {cat.name}
//               </div>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { 
  GiTShirt, GiDress, GiDiamondRing, GiSmartphone, GiCook, 
  GiCarrot, GiMeat, GiLipstick, GiSofa, GiTable 
} from "react-icons/gi";

const categories = [
  { id: "mens-clothing", name: "Mens Clothing", icon: GiTShirt },
  { id: "womens-clothing", name: "Womens Clothing", icon: GiDress },
  { id: "ornaments", name: "Ornaments", icon: GiDiamondRing },
  { id: "accessories", name: "Accessories", icon: GiSmartphone },
  { id: "home-appliance", name: "Home Appliance", icon: GiCook },
  { id: "vegetables", name: "Vegetables", icon: GiCarrot },
  { id: "meat", name: "Meat", icon: GiMeat },
  { id: "skin-care", name: "Skin Care", icon: GiLipstick },
  { id: "home", name: "Home", icon: GiSofa },
  { id: "furniture", name: "Furniture", icon: GiTable },
];

export default function CategoryList() {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        padding: "15px 20px",
        gap: "90px", 
      }}
    >
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <Link key={cat.id} href={`/category/${cat.id}`} style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "100px",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="category-item"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "5px",
                  flexShrink: 0,
                }}
              >
                <Icon size={28} color="white" />
              </div>
              <div style={{ fontSize: "0.8rem", fontWeight: "500", textAlign: "center" }}>
                {cat.name}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
