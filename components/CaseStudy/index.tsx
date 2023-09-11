import React from "react";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const projects = [
  {
    id: uuidv4(),
    title: "Development of a Predictive Data Analysis Model heart disease detection",
    cta: "Explore the project",
    subject:
      "Machine learning techniques to create models for heart disease prediction and deployed using Flask backend technology",
  },
  {
    id: uuidv4(),
    title: "Quantitative Data Analysis",
    cta: "Explore the project",
    subject:
      "Using powerful set of tools in measuring and guaging the aspects of migration and citizenship social phenomena based on increased data availability",
  },
  {
    id: uuidv4(),
    title: "Image Classification with Python",
    cta: "Explore the project",
    subject:
      "Creating and optimizing the convulational neutral network to identify domesticated vs non-domesticated animals using CIFAR-10 dataset",
  },
];

export default function CaseStudy() {
  return (
    <div className="py-16 lg:pt-20">
      <Container>
        <section className="max-w-2xl">
          <h2 className="font-extrabold tracking-tight h2">
            About Me
          </h2>
          <h4 className="text-xl my-12 text-gray-700">
            Gerald Magu is a Kenyan data analyst with over three years of experience in analyzing data, offering insights, and writing reports for various clients. 
            He has established data analytical skills, machine learning skills, artificial intelligence skills, communication skills, and collaboration skills. 
            He has a good reputation for resolving problems, improving customer satisfaction, and driving operational improvements. 
            Besides, he has a great professional background that reflects a keen understanding of data science.

            Gerald's professional expertise spans various domains. He excels in reading and interpreting data and information, 
            making him adept at solving a wide range of problems. He is a quick learner and easily adaptable, 
            capable of establishing productive working relationships across different levels of an organization. 
            His technical prowess extends to data analysis tools such as Python, R, PowerBI, Tableau, and Excel. 
            Furthermore, he possesses analytical, mathematical, and academic writing skills, 
            all supported by his zeal to keep learning as well as excellent learning abilities. 
            He is always eager to take on new challenges and opportunities that can help him grow as a professional and as a person.
            Notably, he is passionate about learning new skills and technologies, especially those related to Data Science, Machine Learning, and Artificial Intelligence. 
            He is also interested in getting mentorship as well as mentoring others on the path of Data Science.

            Outside of his professional endeavors, Gerald has diverse interests and hobbies such as adventuring, swimming, 
            reading motivational books, listening to music, watching movies, and playing chess in his spare time. 
            He is also active on social media platforms such as Twitter and LinkedIn as well as GitHub.
          </h4>
        </section>
        <section className="grid gap-6 grid-cols-1 lg:grid-cols-3 w-full mb-8">
          {projects.map((project) => {
            const { id, title, cta, subject } = project;
            return (
              <article
                key={id}
                className="flex flex-col gap-5 bg-neutral-50 p-4 rounded-md"
              >
                <h4 className="h4">{title}</h4>
                <p className="grow text-lg text-gray-600 tracking-wide leading-normal">
                  {subject}
                </p>
                <Link
                  href="/"
                  className="flex items-center mt-4 gap-3 text-lg font-semibold transition-[mx] hover:underline hover:underline-offset-8"
                >
                  {cta}{" "}
                  <span className="">
                    <BsArrowUpRight size={14} />
                  </span>
                </Link>
              </article>
            );
          })}
        </section>
        <div className="flex flex-col lg:flex-row w-full">
          <button className="btn rounded-full my-6 text-white bg-slate-900 hover:bg-slate-700 transition-colors">
            View all projects
          </button>
        </div>
      </Container>
    </div>
  );
}
