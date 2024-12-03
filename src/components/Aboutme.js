import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[#212428] text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">About Me</h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* About Me Description */}
          <div>
            <section className="p-6 bg-[#2a2d32] rounded-lg shadow-md">
              <p className="leading-relaxed text-lg text-justify">
                As a passionate and dedicated Full-Stack Developer, I specialize in creating robust, scalable, and user-centric applications tailored to meet the unique needs of businesses. I thrive in fast-paced environments and enjoy solving complex problems through innovative solutions.
                <br />
                With a keen eye for detail and a commitment to excellence, I focus on building applications that not only function efficiently but also deliver exceptional user experiences. I believe that collaboration is at the heart of success and excel in working within diverse teams to achieve project goals.
                <br />
              
                I am deeply committed to delivering high-quality solutions on time and aligned with client expectations, constantly striving to exceed them. Every project I undertake is an opportunity to push boundaries, enhance my skills, and create lasting impact.
              </p>
            </section>
          </div>

          {/* Personal & Professional Details */}
          <div>
            <section className="p-6 bg-[#2a2d32] rounded-lg shadow-md space-y-8">
              {/* Basic Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Basic Details</h3>
                <ul className="space-y-3">
                  <li><span className="font-medium">Full Name:</span> Kartik Bhosale</li>
                  <li><span className="font-medium">Email:</span> kartikbhosale712@gmail.com</li>
                  <li><span className="font-medium">Phone:</span> +91 7720860211</li>
                  <li><span className="font-medium">Address:</span> Pune</li>
                </ul>
              </div>

              {/* Professional Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Professional Details</h3>
                <ul className="space-y-3">
                  <li><span className="font-medium">Occupation:</span> Full-Stack Developer</li>
                  <li><span className="font-medium">Company:</span> YCS TechSoft Private Ltd.</li>
                  <li><span className="font-medium">Experience:</span> 1.9+ Years</li>
                  <li><span className="font-medium">Languages:</span> English, Hindi, Marathi</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
