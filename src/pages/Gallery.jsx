import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const IMAGES = [
  { image_path: '/gallery/college/college_1.jpg', imageCategory: 'College', image_description: 'Mandatory photo as ITS Student hehe :3' },
  { image_path: '/gallery/college/college_2.jpg', imageCategory: 'College', image_description: 'SMAGA tribute at ITS from MIPA2 :P' },
  { image_path: '/gallery/college/college_3.jpg', imageCategory: 'College', image_description: 'Metanoia in action!' },
  { image_path: '/gallery/college/college_4.jpg', imageCategory: 'College', image_description: 'Another mandatory photo: 0.5 Selfie' },
  { image_path: '/gallery/bahimaa/Bahimaa_1.jpg', imageCategory: 'Bahimaa', image_description: 'Yeah, Christinity is the main character here :D' },
  { image_path: '/gallery/bahimaa/Bahimaa_2.jpg', imageCategory: 'Bahimaa', image_description: 'Smile, happy faces that has been through a lot of fun' },
  { image_path: '/gallery/bahimaa/Bahimaa_3.JPG', imageCategory: 'Bahimaa', image_description: 'Whoever take this pic, Thankyou!' },
  { image_path: '/gallery/bahimaa/Bahimaa_4.jpg', imageCategory: 'Bahimaa', image_description: 'First visit at SMKN7!' },
  { image_path: '/gallery/bahimaa/Bahimaa_5.jpeg', imageCategory: 'Bahimaa', image_description: 'Bahimaa first gath in Samarinda :)' },
  { image_path: '/gallery/bahimaa/Bahimaa_6.jpeg', imageCategory: 'Bahimaa', image_description: 'Genzies after studio photo :p' },
  { image_path: '/gallery/kcv/LBE_FP_1.jpeg', imageCategory: 'KCV', image_description: 'Visioners after LBE Final Projects' },
  { image_path: '/gallery/kcv/LBE_Best_Analysis.jpeg', imageCategory: 'KCV', image_description: 'Best Analysis team at FP LBE!' },
  { image_path: '/gallery/kcv/LBE_Best_Presentation.jpeg', imageCategory: 'KCV', image_description: 'What a great presentation team adalah pokoknya' },
  { image_path: '/gallery/kcv/LBE_Best_Implementation.jpeg', imageCategory: 'KCV', image_description: 'The best implementation at LBE KCV 2025. what an effort!' },
  { image_path: '/gallery/kcv/KCV_1.jpeg', imageCategory: 'KCV', image_description: 'KCV 21 First blood seminar!' },
  { image_path: '/gallery/kcv/KCV_2.jpeg', imageCategory: 'KCV', image_description: 'Congrats mba!' },
  { image_path: '/gallery/kcv/kcv_bukber.jpg', imageCategory: 'KCV', image_description: 'KCV Bukber' },
  { image_path: '/gallery/ITToday/Ittoday_1.jpeg', imageCategory: 'ITtoday', image_description: 'We got the third place :D' },
  { image_path: '/gallery/ITToday/Ittoday_2.jpeg', imageCategory: 'ITtoday', image_description: 'idk what im doing but thankyou daffa for taking the pict.' },
  { image_path: '/gallery/ITToday/Ittoday_3.jpeg', imageCategory: 'ITtoday', image_description: 'ITS Team photo at IPB at ITtoday' },
  { image_path: '/gallery/ITToday/Ittoday_4.jpeg', imageCategory: 'ITtoday', image_description: 'Selfie at the coin :3' },
  { image_path: '/gallery/Hology/Hology_1.jpeg', imageCategory: 'Hology', image_description: 'After a brutal fight as a dark horses, we got the 2nd place :D' },
  { image_path: '/gallery/Hology/Hology_2.jpeg', imageCategory: 'Hology', image_description: 'Podium selfie :P (we got surprised getting the podium)' },
  { image_path: '/gallery/Hology/Hology_3.JPG', imageCategory: 'Hology', image_description: 'photobooth take take take' },
  { image_path: '/gallery/Hology/Hology_4.jpeg', imageCategory: 'Hology', image_description: 'ITS contingent got the throphy at Hology!' },
  { image_path: '/gallery/Hology/Hology_5.JPG', imageCategory: 'Hology', image_description: 'yeah i know, UI peps are all monstrous at data mining' },
  { image_path: '/gallery/Hology/Hology_6.JPG', imageCategory: 'Hology', image_description: 'Another official podium pict :D' },
  { image_path: '/gallery/dataquest/dataquest_1.jpeg', imageCategory: 'Dataquest', image_description: '2nd place at Dataquest Airnology!' },
  { image_path: '/gallery/dataquest/dataquest_2.jpeg', imageCategory: 'Dataquest', image_description: 'Team photo at Airlagga favs photo place' },
];

const CATEGORIES = ['All', 'College', 'Bahimaa', 'KCV', 'Hology', 'ITtoday', 'Dataquest'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredImages = selectedCategory === 'All'
    ? IMAGES
    : IMAGES.filter((img) => img.imageCategory === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text)] transition-colors duration-300 py-24 px-6">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-light tracking-tight mb-2">Gallery</h1>
        <div className="h-0.5 w-12 bg-gradient mb-3"></div>
        <p className="font-light italic text-[var(--color-muted)] text-sm">
          Every frame holds a memory, every memory tells a story.
        </p>
      </div>

      <FadeIn>
        <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-5xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-widest transition-colors duration-200 pb-0.5 ${
                selectedCategory === cat
                  ? 'text-[var(--color-text)] border-b border-[var(--color-primary)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-5xl mx-auto space-y-4">
        {filteredImages.map((img) => (
          <div key={img.image_path} className="relative overflow-hidden rounded-xl group break-inside-avoid">
            <img
              src={img.image_path}
              alt={img.image_description}
              loading="lazy"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <p className="text-xs uppercase tracking-widest font-medium mb-2">{img.imageCategory}</p>
              <p className="font-light text-sm text-gray-200">{img.image_description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
