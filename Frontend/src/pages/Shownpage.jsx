import React, { useState } from 'react';
import TopBanner from '../Components/Navigation/Topbanner';
import Navbar from '../Components/Navigation/Navbar';
import Menu from '../Components/Navigation/Menu';
import ProductImages from '../Components/Product/ProductImages';
import ProductInfo from '../Components/Product/ProductInfo';
import WhatsAppButton from '../Components/Common/WhatsAppButton';
import Footer from '../Components/Footer';

const ProductPage = () => {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navbar />
      <Menu />
      
      <main className="ml-55 mx-auto px-4 py-12">
        <div className="flex gap-12 bg-white ">
          <ProductImages />
          <ProductInfo />
        </div>
      </main>
      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;