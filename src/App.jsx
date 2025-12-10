import React, { useState } from 'react';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './App.css';





// function App() {
//   const [wishlist, setWishlist] = useState([]);
//   const [cart, setCart] = useState([]);

//   const handleLike = (productId) => {
//     setWishlist(prev => 
//       prev.includes(productId)
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleAddCart = (productId) => {
//     setCart(prev => {
//       const existing = prev.find(item => item.id === productId);
//       if (existing) {
//         return prev.map(item => 
//           item.id === productId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { id: productId, quantity: 1 }];
//     });
//   };

//   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <div className="app">
//       <Navbar 
//         wishlistCount={wishlist.length} 
//         cartCount={cartCount}
//       />
//       <Banner 
//         onLike={handleLike}
//         onAddCart={handleAddCart}
//         wishlist={wishlist}
//       />
//       <Footer />
//     </div>
//   );
// }

// export default App;










const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleLike = (productId) => {
    setWishlist(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddCart = (productId) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => 
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Navbar 
        wishlistCount={wishlist.length} 
        cartCount={cartCount}
      />
      <Banner 
        onLike={handleLike}
        onAddCart={handleAddCart}
        wishlist={wishlist}
      />
      <Footer />
    </div>
  );

}

export default App