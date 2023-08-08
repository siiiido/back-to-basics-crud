import React from 'react';

const BlogLists = () => {
  const blogTitles = [
    'During theseventeenth century, there were dozens of Franciscans in New Mexico, who kepttheir hands off the Indians so far as is known, but there were hundreds ofsettlers and soldiers who were unrestrained.',
    'The sun slowly sets beyond the horizon, casting a warm golden glow across the tranquil ocean waters.',
    'In the heart of the bustling city, a quiet park offers a serene retreat from the chaotic urban life.',
    'As the autumn leaves fall, a blanket of red, orange, and yellow covers the ground in a vibrant display',
    'The aroma of freshly brewed coffee wafts through the air, enticing passersby to enter the cozy cafe',
    "A gentle breeze rustles the leaves of the tall trees, creating a soothing melody of nature's music",
    'The laughter of children playing in the park echoes through the neighborhood, filling it with joy',
    'High above, fluffy clouds paint the sky with shades of white, contrasting against the deep blue canvas',
    'The ancient castle stands proudly atop the hill, its weathered stones telling tales of centuries past',
    'Raindrops dance on the pavement, creating intricate patterns that glisten under the streetlights',
    'The bustling market is a tapestry of colors and sounds, a vibrant reflection of the local culture',
    "A single daisy blooms in a sea of green, its delicate petals a testament to nature's artistry",
    'The distant mountains appear to touch the sky, their majestic peaks shrouded in mist and mystery',
    'A bookshelf lined with well-loved novels holds stories that transport readers to faraway lands',
    'The waves gently kiss the sandy shore, leaving behind intricate patterns of foam and seaweed',
    'The flickering candle casts a warm, flickering glow that illuminates the room with a sense of calm',
    'The aroma of freshly baked bread fills the air, inviting hungry customers into the quaint bakery',
    'A solitary lighthouse stands sentinel by the rocky coast, guiding ships safely through the night',
    'Stars twinkle in the velvet sky, creating a celestial masterpiece that captivates all who gaze upward',
    'The old oak tree provides shade and shelter to a diverse array of creatures in its ancient branches',
    'The city skyline is a masterpiece of modern architecture, its towering buildings reaching for the heavens',
    "The rustling leaves and chirping birds create a symphony of nature's sounds in the tranquil forest",
    'The crackling fireplace warms the room, casting a cozy ambiance that invites relaxation',
    'The historic bridge spans the river, its elegant arches a testament to the craftsmanship of the past',
    'The sound of distant thunder echoes across the landscape, a prelude to the coming storm',
    'A meandering path winds through the wildflower meadow, inviting wanderers to explore its beauty',
    'The ancient ruins stand as a testament to the civilizations that once thrived in this hallowed ground',
    'The first snowfall blankets the world in white, transforming the familiar into a winter wonderland',
    'The symphony orchestra fills the concert hall with music that stirs the soul and ignites emotions',
    'The delicate petals of a rose unfurl, revealing a breathtaking bloom of crimson and fragrant beauty',
    'The starlit night sky is a canvas of wonder, where dreams take flight on the wings of imagination',
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 ">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[50%] h-[70%] overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog Titles</h1>
        <ul className="space-y-4">
          {blogTitles.map((title, index) => (
            <a
              key={index}
              className="text-lg truncate text-gray-800 bg-gray-100 p-4 block cursor-pointer"
            >
              {title}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogLists;
