import React from 'react';

export default function About() {
  return (
    <div className="max-w-full mx-auto">
      <h1 className="font-black text-4xl capitalize text-indigo-800 text-center my-5">About iTechFinder</h1>
      <img
        className="object-cover w-full h-auto"
        src="https://images.squarespace-cdn.com/content/v1/5b9a382a4cde7aa1fc597fac/e04a9627-885e-4a95-b7a9-fd1a4a93a439/workshop-assembling-smartphones-black-background-free-space-concept-science-innovation.jpg"
      />
      <section className="p-3 flex max-w-max mx-auto">
        <p>Description</p>
      </section>
    </div>
  );
}
