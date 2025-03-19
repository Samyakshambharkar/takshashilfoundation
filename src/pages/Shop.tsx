
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Check, 
  X,
  Filter,
  ShoppingBag
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Product type definitions
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// Cart item type definition
interface CartItem extends Product {
  quantity: number;
}

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Ambedkar Portrait T-Shirt",
    description: "Premium cotton t-shirt featuring a portrait of Dr. B.R. Ambedkar",
    price: 599,
    image: "/placeholder.svg",
    category: "Clothing"
  },
  {
    id: 2,
    name: "Constitution Mug",
    description: "Ceramic mug featuring excerpts from the Indian Constitution",
    price: 349,
    image: "/placeholder.svg",
    category: "Mugs"
  },
  {
    id: 3,
    name: "Buddhist Wheel Cap",
    description: "High-quality cap with embroidered Buddhist Dharmachakra",
    price: 399,
    image: "/placeholder.svg",
    category: "Caps"
  },
  {
    id: 4,
    name: "Annihilation of Caste",
    description: "Special edition hardcover book by Dr. B.R. Ambedkar",
    price: 799,
    image: "/placeholder.svg",
    category: "Books"
  },
  {
    id: 5,
    name: "Framed Constitution Preamble",
    description: "Elegantly framed preamble of the Indian Constitution",
    price: 1299,
    image: "/placeholder.svg",
    category: "Frames"
  },
  {
    id: 6,
    name: "Equality Tote Bag",
    description: "Canvas tote bag with equality symbols and quotes",
    price: 449,
    image: "/placeholder.svg",
    category: "Bags"
  },
  {
    id: 7,
    name: "Dr. Ambedkar Quotes Notebook",
    description: "Premium notebook featuring inspirational quotes",
    price: 299,
    image: "/placeholder.svg",
    category: "Stationery"
  },
  {
    id: 8,
    name: "Social Justice Hoodie",
    description: "Comfortable hoodie with social justice message",
    price: 999,
    image: "/placeholder.svg",
    category: "Clothing"
  },
  {
    id: 9,
    name: "Buddha Medallion",
    description: "Metal medallion with Buddhist teachings and symbols",
    price: 599,
    image: "/placeholder.svg",
    category: "Accessories"
  }
];

const Shop = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  // Filter products by category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = filterCategory ? product.category === filterCategory : true;
    const matchesSearch = searchQuery 
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 1500,
    });
  };

  // Update cart item quantity
  const updateQuantity = (id: number, change: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Simulate checkout process
  const handleCheckout = () => {
    setIsCheckoutOpen(true);
    setIsCartOpen(false);
  };

  // Complete order
  const completeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    // Reset cart after order
    setTimeout(() => {
      setCart([]);
      setIsCheckoutOpen(false);
      setOrderComplete(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-takshashil-blue/10 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-takshashil-navy">
                  Takshashil <span className="text-takshashil-blue">Shop</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Support our mission by shopping our exclusive merchandise. All proceeds go 
                  directly towards supporting our educational initiatives.
                </p>
              </div>
              
              {/* Search and Filter */}
              <div className="glass-card p-6 rounded-xl shadow-md mb-12">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                  <div className="w-full md:w-1/2">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Filter className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 flex flex-wrap gap-2 justify-center md:justify-end">
                    <Button 
                      variant={filterCategory === null ? "default" : "outline"} 
                      onClick={() => setFilterCategory(null)}
                      className="text-sm"
                    >
                      All
                    </Button>
                    {categories.map(category => (
                      <Button 
                        key={category}
                        variant={filterCategory === category ? "default" : "outline"}
                        onClick={() => setFilterCategory(category)}
                        className="text-sm"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                        <p className="text-xl font-bold text-takshashil-blue">₹{product.price}</p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full bg-takshashil-blue hover:bg-takshashil-darkBlue"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                          <ShoppingCart className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-600 mb-2">No products found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => setIsCartOpen(true)}
          className="h-16 w-16 rounded-full bg-takshashil-navy shadow-lg relative"
        >
          <ShoppingCart className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Button>
      </div>
      
      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto animate-slide-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-takshashil-navy">Your Cart</h2>
                <Button 
                  variant="ghost" 
                  onClick={() => setIsCartOpen(false)}
                  className="h-10 w-10 p-0 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex border-b border-gray-100 pb-4">
                        <div className="h-16 w-16 bg-gray-100 mr-4 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">₹{item.price}</p>
                          <div className="flex items-center">
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="h-8 w-8 rounded-full p-0"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="mx-3">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="h-8 w-8 rounded-full p-0"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 rounded-full p-0 ml-auto text-red-500"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">₹50</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-4">
                      <span>Total</span>
                      <span className="text-takshashil-blue">₹{cartTotal + 50}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-takshashil-blue hover:bg-takshashil-darkBlue text-white"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full max-w-lg p-6 animate-fade-in overflow-y-auto max-h-[90vh]">
            {orderComplete ? (
              <div className="text-center py-8">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-takshashil-navy mb-2">Thank You!</h2>
                <p className="text-gray-600 mb-6">
                  Your order has been placed successfully. You will receive a confirmation 
                  email shortly with the order details.
                </p>
                <Button 
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setOrderComplete(false);
                  }}
                  className="bg-takshashil-blue hover:bg-takshashil-darkBlue text-white"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-takshashil-navy">Checkout</h2>
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsCheckoutOpen(false)}
                    className="h-10 w-10 p-0 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <form onSubmit={completeOrder} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                            PIN Code
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          placeholder="XXXX XXXX XXXX XXXX"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            placeholder="MM/YY"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            placeholder="XXX"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-takshashil-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">₹50</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-4">
                      <span>Total</span>
                      <span className="text-takshashil-blue">₹{cartTotal + 50}</span>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-takshashil-blue hover:bg-takshashil-darkBlue text-white"
                  >
                    Place Order
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Shop;
