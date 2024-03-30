import React from 'react';
import About from './about';
import Heading from '@/components/heading/heading';
import PricingTable from '@/components/pricing/pricing_table';
import Footer from '@/components/Footer/footer';

export default function Home() {
  return (
    <div className="bg-white">
      <div>
        <Heading />
      </div>
      
      <div>
        {/* <Cards /> */}
        <PricingTable />
      </div>
      
      <About />
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
