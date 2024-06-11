'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [

{
    "quote": "Joining this coding academy transformed my understanding of algorithms and data structures. The instructors are world-class!",
    "name": "Ranit Pandey",
    "title": "Data Structures Student"
},
{
    "quote": "The community and support at this academy are unmatched. I've grown not just as a programmer, but also as a problem-solver, thanks to their comprehensive approach.",
    "name": "Harsh Kr. Singh",
    "title": "Algorithms Student"
},
{
    "quote": "This academy offered me the tools and confidence to take my coding skills to the next level. I'm endlessly grateful for the personalized coaching.",
    "name": "Adarsh Sachan",
    "title": "Advanced Algorithms Student"
},
{
    "quote": "As a computer science student, finding the right mentor can be challenging, but this academy matched me with a teacher who truly understands my goals and challenges.",
    "name": "Anjali Nair",
    "title": "Graph Theory Student"
},
{
    "quote": "The courses here opened my eyes to the intricacies of data structures and algorithms. Highly recommend for any aspiring developers!",
    "name": "Rohan Patel",
    "title": "Data Structures and Algorithms Student"
}
  ];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black 
    dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Masters of Code: Voices of Success</h2>

      <div>
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="left"
                speed="slow"
                    />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards
