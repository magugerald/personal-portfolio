import React from "react";
import Container from "../Container";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const experiences = [
  {
    id: uuidv4(),
    title: "Experience",
    subject:
      "Gerald's employment history includes roles as an Online Freelancer Data Analyst, where he has been actively involved in analyzing data, 
        extracting insights, identifying patterns, and presenting comprehensive reports since May 2019. Prior to this, he worked as a content and academic writer on Fiverr, 
        specializing in content and technical writing within the field of information technology from February 2019 to date. 
        Throughout his career, he has achieved notable success, particularly in expanding his skills in data analysis and research writing, 
        and he has collaborated with diverse clients in various areas of Data Science, with a focus on clients from the USA.",
  },
  {
    id: uuidv4(),
    title: "Certifications",
    subject:
      " In terms of education, Gerald has continually updated his knowledge and skills. He has taken data analysis courses on Coursera, 
        followed data analysis tutorials on YouTube, and engaged in further learning through Udemy Free Courses. 
        His commitment to professional development is evident through multiple certifications, 
        including those in Data Analysis with Python and R from Coursera, 
        a Data Science Foundation Certificate, and Digital Skills Participation Certificate from CloudFactory Kenya.",
  },
  {
    id: uuidv4(),
    title: "Academic background",
    subject:
      "Besides, Gerald Magu has a bachelor’s degree in mathematics and computer science from Multimedia University of Kenya, 
        where he graduated in 2018 with a second-class honors degree. The course helped him receive comprehensive training in various domains such as mathematics, 
        statistical analysis, computer programming, artificial intelligence, system design and analysis, computer networking, system security, 
        website development, software engineering, multimedia systems, and account and finance.",
  },
];

export default function SellingPoint() {
  return (
    <div className="py-16 lg:py-20">
      <Container>
        <h3 className="h2 mb-5">Why Gerald Magu?</h3>
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
          <div className="grid grid-cols-1 gap-5 my-10">
            {experiences.map((experience) => {
              const { id, title, subject } = experience;
              return (
                <article key={id} className="max-w-sm">
                  <h4 className="h4 my-5">{title}</h4>
                  <p className="text-lg text-gray-600">{subject}</p>
                </article>
              );
            })}
          </div>
          <div className="max-w-md">
            <Image
              src="/images/data-report.svg"
              height={300}
              width={300}
              className="order-1 mt-8 w-full"
              alt="Data Report"
            />
          </div>
        </section>

        <div className="flex flex-col lg:flex-row mt-10">
          <button className="btn bg-slate-600 text-white rounded-full transition-colors hover:bg-slate-700">
            Explore More
          </button>
        </div>
      </Container>
    </div>
  );
}
