"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
  {
    "title": "Discover Your Path to Coding Mastery with Us: A Personal Journey in Data Structures and Algorithms",
    "description": "Embark on a coding journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and problem-solving skills. At our coding school, your aspirations meet our dedicated support, creating a structured path to mastery."
},
{
    "title": "Discover Your Path to Coding Mastery with Us: A Personal Journey in Data Structures and Algorithms",
    "description": "Embark on a coding journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and problem-solving skills. At our coding school, your aspirations meet our dedicated support, creating a structured path to mastery."
},
{
    "title": "Discover Your Path to Coding Mastery with Us: A Personal Journey in Data Structures and Algorithms",
    "description": "Embark on a coding journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and problem-solving skills. At our coding school, your aspirations meet our dedicated support, creating a structured path to mastery."
},
{
    "title": "Live Feedback & Engagement",
    "description": "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time collaboration on a coding project. This approach enhances your understanding and mastery of data structures and algorithms."
},
{
    "title": "Cutting-Edge Curriculum",
    "description": "Our curriculum is continuously updated to include the latest trends and technologies in computer science, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry."
},
{
    "title": "Limitless Learning Opportunities",
    "description": "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your coding skills are always advancing."
}
  ];

function WhyChooseUs() {
  return (
    <div className="m-auto p-10">
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
