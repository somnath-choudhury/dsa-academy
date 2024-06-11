"use client";
 
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {

  const featuredWebinars = [
  
{
    "title": "Understanding Data Structures",
    "description": "Dive deep into the fundamentals of data structures and enhance your programming skills.",
    "slug": "understanding-data-structures",
    "isFeatured": true
},
{
    "title": "The Art of Algorithm Design",
    "description": "Learn the craft of designing algorithms from experienced programmers and computer scientists.",
    "slug": "the-art-of-algorithm-design",
    "isFeatured": true
},
{
    "title": "Mastering Data Structures and Algorithms",
    "description": "Advanced techniques to master data structures and algorithms.",
    "slug": "mastering-data-structures-algorithms",
    "isFeatured": true
},
{
    "title": "Coding Interview Essentials",
    "description": "Get started with coding interview preparation with this comprehensive overview.",
    "slug": "coding-interview-essentials",
    "isFeatured": true
},
{
    "title": "Algorithm Optimization Techniques",
    "description": "Enhance your algorithm optimization skills with expert tips and strategies.",
    "slug": "algorithm-optimization-techniques",
    "isFeatured": true
},
{
    "title": "Big Data and Algorithms",
    "description": "Learn how to design algorithms effectively for big data applications.",
    "slug": "big-data-algorithms",
    "isFeatured": true
}

  ];


  return (
    <div className="p-12 bg-gray-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="text-center">
              <h2 className="text-base text-teal-600 font-semibold trcking-wide uppercase">FEATURED WEBINARS</h2>
              <p className="mt-2 text-3xl leading-8
                font-extrabold tracking-tight text-white
                sm:text-4xl">Enhance your DSA Journey</p>
            </div>

            
            <div className="mt-10">
                  <HoverEffect items={featuredWebinars.map (webinar => ({
                      title: webinar.title,
                      description: webinar.description,
                      link: '/'
                  }))}
                   />
            </div>
            

            <div className="mt-10 text-center">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Link href={'/webinars'}>
                        View All Webinars
                    </Link>
                    </span>
                </button>
            </div>
            
        </div>
    </div>
  );
}
    
export default UpcomingWebinars
