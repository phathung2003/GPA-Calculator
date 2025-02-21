import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";


const Footer = (): JSX.Element => {

  return (
    <footer className="bg-blue-300 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo và Giới thiệu */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <img src="./logo1.png" alt="Your Logo" className="h-24 w-24 mr-5" />

          </div>

          {/* Danh mục */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 pb-2">Danh mục</h3>
            <ul className="text-white">
              {["Tin tức", "Công nghệ", "Đánh giá", "Liên hệ"].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 pb-2">Liên hệ</h3>
            <p className="text-white mb-2">
              Địa chỉ: Cao ốc Văn phòng Quốc Huy, 135A Lũy Bán Bích, Phường Tân Thới Hoà, Tân Phú, Hồ Chí Minh
            </p>
            <p className="text-white mb-2">Điện thoại: (0123) 456 789</p>
            <p className="text-white">Email: tannaakk@gmail.com</p>
          </div>

          {/* Mạng xã hội */}
       
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-white">&copy; 2023 CÔNG TY TNHH TANAAKK VIỆT NAM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
