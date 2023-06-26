import React from "react";
import './styles.css';

const SectionServices = () => {
  return (
    <div className="Section-Services py-10 bg-gray-100">
        <div className="container mx-auto">
            <div className="flex items-center">
                <div className="row w-1/3">
                    <h5>
                        Explore
                        <span className="text-green-400"> Services</span>
                    </h5>
                    <p>
                    Squadio is an exclusive network of top-notch softaware developers, deisgners, data experts, product managers and project managers in the world. 
                    </p>
                </div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Tambahkan komponen atau konten card services di sini */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionServices;
