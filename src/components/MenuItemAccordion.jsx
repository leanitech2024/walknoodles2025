import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Helper Function
const getTypeTag = (item) => {
    let colorClass;
    let text;

    if (item.type === 'veg') { colorClass = 'bg-green-600'; text = 'VEG'; }
    else if (item.type === 'nonveg') { colorClass = 'bg-red-600'; text = 'NON-VEG'; }
    else if (item.type === 'veg_nonveg') { colorClass = 'bg-orange-600'; text = 'V/NV'; }
    else return null;

    return <span className={`text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${colorClass} whitespace-nowrap`}>{text}</span>;
};

// 2. Main Component
const MenuItemAccordion = ({ item, openItemId, toggleItem }) => {
    const isOpen = openItemId === item.id;
    const [imageLoaded, setImageLoaded] = useState(false); 

    const smoothEaseTransition = {
        duration: 0.5,
        ease: "easeInOut"
    };

    const iconVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 }
    };

    // Helper to render prices in the closed state
    const renderPriceDisplay = () => {
        if (item.price_veg && item.price_nonveg) {
            return (
                <div className="flex items-center gap-2 text-xs font-bold whitespace-nowrap">
                    <span className="text-light-blue">V: ₹{item.price_veg}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-dark-blue">NV: ₹{item.price_nonveg}</span>
                </div>
            );
        }
        if (item.price) {
            return <span className="text-sm font-bold text-dark-blue">₹{item.price}</span>;
        }
        return null;
    };

    return (
        <motion.div
            layout
            className={`rounded-2xl transition-all duration-300 shadow-md font-museo relative ${
                isOpen
                    ? "bg-gold border border-gold shadow-xl"
                    : "bg-[#FFF3DB] border border-white hover:shadow-lg"
            }`}
        >
            <button
                className={`w-full text-left cursor-pointer transition-colors ${
                    isOpen ? "p-0" : "p-4"
                } focus:outline-none focus:ring-2 focus:ring-gold rounded-lg`}
                onClick={() => toggleItem(item.id)}
            >
                {!isOpen && (
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0 max-w-[85%]">
                            <span className="text-lg font-bold text-dark-blue leading-tight">{item.name}</span>
                            <div className="flex items-center gap-3">
                                {getTypeTag(item)}
                                {renderPriceDisplay()}
                            </div>
                        </div>

                        <div className="flex items-center shrink-0">
                            <motion.div
                                variants={iconVariants}
                                animate={isOpen ? "open" : "closed"}
                                transition={smoothEaseTransition}
                            >
                                <ChevronDown className="w-5 h-5 text-light-blue" />
                            </motion.div>
                        </div>
                    </div>
                )}
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={smoothEaseTransition} 
                        className="overflow-hidden"
                    >
                        <div className="flex items-stretch h-full">
                            {/* Image Section */}
                            <div className="w-2/5 relative overflow-hidden flex items-center justify-center min-h-[160px]">
                                {!imageLoaded && (
                                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                                )}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover block"
                                    onLoad={() => setImageLoaded(true)} 
                                    style={{ opacity: imageLoaded ? 1 : 0 }} 
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-5 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-xl font-extrabold text-light-blue leading-tight">
                                        {item.name}
                                    </h4>
                                    <div className="text-right">
                                        {renderPriceDisplay()}
                                    </div>
                                </div>

                                <p className="text-sm text-dark-blue mb-3 border-b pb-2 border-gray-300">
                                    {item.description}
                                </p>

                                {item.ingredients && (
                                    <div className="mt-1">
                                        <h5 className="text-[10px] font-bold text-dark-blue uppercase">Ingredients:</h5>
                                        <p className="text-[11px] text-gray-700">{item.ingredients.join(", ")}</p>
                                    </div>
                                )}
                                <div className="mt-3">{getTypeTag(item)}</div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// 3. THE CRITICAL PART: This line must be at the very bottom
export default MenuItemAccordion;