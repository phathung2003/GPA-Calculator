import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='bg-gray-50 text-gray-800'>
      {/* Phần Hero */}
      <motion.div className='py-40 bg-gradient-to-r from-blue-600 to-purple-600  text-center text-white px-4'
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}>
        
        <motion.h2  style={ {overflow :"hidden",whiteSpace:"nowrap"}}
        initial={{width:0}}
        animate={{width:"100%"}}
        transition={{duration:2,ease:"easeInOut"}} className=' text-white text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>
          Về Chúng Tôi
        </motion.h2>
        <motion.p className='text-lg lg:text-2xl mb-8'
         style={ {overflow :"hidden",whiteSpace:"nowrap"}}
         initial={{width:0}}
         animate={{width:"100%"}}
         transition={{duration:2,ease:"easeInOut"}}>
          Khám phá về chúng tôi và những giá trị mà chúng tôi đại diện.
        </motion.p>
      </motion.div>

      {/* Phần Sứ Mệnh và Giá Trị */}
      <div 
      
      className='py-20 bg-white text-center px-6 lg:px-32'>
  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className='max-w-4xl mx-auto'>
    <motion.h3 className='text-4xl lg:text-5xl font-semibold mb-10 text-gray-900'
     style={ {overflow :"hidden",whiteSpace:"nowrap"}}
     initial={{width:0}}
     animate={{width:"100%"}}
     transition={{duration:2,ease:"easeInOut"}}>
      Sứ Mệnh & Giá Trị Của Chúng Tôi
    </motion.h3>
    <motion.p className='text-lg text-gray-700 leading-relaxed mb-12'
     style={ {overflow :"hidden",whiteSpace:"nowrap"}}
     initial={{width:0}}
     animate={{width:"100%"}}
     transition={{duration:2,ease:"easeInOut"}}>
      Sứ mệnh của chúng tôi là trao quyền cho cá nhân và tổ chức với công nghệ tiên tiến và giải pháp sáng tạo để đạt được thành công. Chúng tôi tin vào sức mạnh của sự sáng tạo, cam kết và đam mê với sự xuất sắc trong mọi việc chúng tôi làm.
    </motion.p>

    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <div className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
        <div className='w-16 h-16 mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center'>
          {/* Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3a3.25 3.25 0 113.5 0M9 3a3 3 0 100 6h6a3 3 0 100-6H9z" />
          </svg>
        </div>
        <h4 className='text-2xl font-semibold mb-4'>Sáng Tạo</h4>
        <p className='text-lg text-gray-700 leading-relaxed'>
          Chúng tôi không ngừng đẩy ranh giới của những gì có thể, khám phá các công nghệ và giải pháp mới để luôn đi trước đón đầu.
        </p>
      </div>

      <div className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
        <div className='w-16 h-16 mb-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center'>
          {/* Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18m-9 5h9" />
          </svg>
        </div>
        <h4 className='text-2xl font-semibold mb-4'>Chính Trực</h4>
        <p className='text-lg text-gray-700 leading-relaxed'>
          Chính trực là nền tảng của doanh nghiệp chúng tôi. Chúng tôi cam kết với sự minh bạch, trung thực và thực hành đạo đức trong tất cả các tương tác của mình.
        </p>
      </div>

      <div className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
        <div className='w-16 h-16 mb-4 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center'>
          {/* Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.88 3.549a9.987 9.987 0 00-9.716 0 9.973 9.973 0 00-5.147 6.481A9.985 9.985 0 007.5 21c5.519 0 9.5-4.477 9.5-10S13.019 1 7.5 1C5.206 1 3.116 2.047 1.549 3.549" />
          </svg>
        </div>
        <h4 className='text-2xl font-semibold mb-4'>Thành Công Khách Hàng</h4>
        <p className='text-lg text-gray-700 leading-relaxed'>
          Chúng tôi đặt khách hàng lên hàng đầu, làm việc chặt chẽ với họ để cung cấp các giải pháp đáp ứng nhu cầu và vượt qua mong đợi của họ.
        </p>
      </div>

      <div className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
        <div className='w-16 h-16 mb-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center'>
          {/* Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-6h-1m3-4h-6a1 1 0 00-.707 1.707L11 10l4.707-4.707A1 1 0 0015 4h-2v2h1V4z" />
          </svg>
        </div>
        <h4 className='text-2xl font-semibold mb-4'>Hợp Tác</h4>
        <p className='text-lg text-gray-700 leading-relaxed'>
          Hợp tác là chìa khóa cho sự thành công của chúng tôi. Chúng tôi coi trọng làm việc nhóm và chia sẻ ý tưởng, cả trong công ty lẫn với khách hàng.
        </p>
      </div>
    </motion.div>

  </motion.div>

</div>

      {/* Phần Hình Ảnh */}
      <div className='bg-gray-100 py-20'>
        <motion.div initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
        className='max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center px-6 lg:px-0'>
          <img
            src='https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/hdahkc74pe-qbhesgvkh-a.jpg'
            alt='Đội Ngũ'
            className='w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 rounded-lg shadow-lg'
          />
          <div className='lg:w-1/2 text-center lg:text-left'>
            <h3 className='text-3xl font-semibold mb-4'>
              Gặp Gỡ Đội Ngũ Của Chúng Tôi
            </h3>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Đội ngũ của chúng tôi là một nhóm đa dạng các chuyên gia tài năng, mỗi người mang đến những kỹ năng và chuyên môn riêng biệt. Cùng nhau, chúng tôi cam kết đạt được các mục tiêu chung và mang lại kết quả xuất sắc cho khách hàng của mình.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Phần Công Nghệ Sử Dụng */}
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='py-20 bg-white text-center px-6 lg:px-32'>
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-4xl lg:text-5xl font-semibold mb-10'>
            Công Nghệ Chúng Tôi Sử Dụng
          </h3>
          <p className='text-lg text-gray-700 leading-relaxed mb-10'>
            Cốt lõi của chúng tôi là sử dụng các công nghệ mới nhất và mạnh mẽ nhất để xây dựng các giải pháp có khả năng mở rộng, an toàn và hiệu quả. Chuyên môn của chúng tôi trải rộng trên các ngăn xếp công nghệ và công cụ hiện đại khác nhau.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-6 bg-gray-100 rounded-lg shadow-lg'>
              <h4 className='text-2xl font-semibold mb-4'>Phát Triển Frontend</h4>
              <p className='text-lg text-gray-700 leading-relaxed'>
                React, Angular, Vue.js, HTML5, CSS3, JavaScript
              </p>
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow-lg'>
              <h4 className='text-2xl font-semibold mb-4'>Phát Triển Backend</h4>
              <p className='text-lg text-gray-700 leading-relaxed'>
                Node.js, Python, Ruby on Rails, Java, .NET
              </p>
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow-lg'>
              <h4 className='text-2xl font-semibold mb-4'>Cloud & DevOps</h4>
              <p className='text-lg text-gray-700 leading-relaxed'>
                AWS, Azure, Google Cloud, Docker, Kubernetes, Jenkins
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phần Kêu Gọi Hành Động */}
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center'>
        <h3 className='text-4xl lg:text-5xl font-bold mb-6'>
          Sẵn Sàng Chuyển Đổi Doanh Nghiệp Của Bạn?
        </h3>
        <p className='text-lg lg:text-2xl mb-8'>
          Hợp tác với chúng tôi để đưa doanh nghiệp của bạn lên tầm cao mới. Hãy cùng nhau xây dựng điều tuyệt vời.
        </p>
        <button className='bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-200 transition duration-300'>
          Liên Hệ Với Chúng Tôi
        </button>
      </motion.div>
    </div>
  )
}

export default About
