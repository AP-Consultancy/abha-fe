import React from "react";
import {
  Palette,
  Mic2,
  ScrollText,
  Users,
  Music2,
  Leaf,
  Sparkles,
} from "lucide-react";

const CoCurricularClubs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-100 text-pink-600 shadow mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Co-Curricular & Clubs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nurturing creativity, expression, teamwork, and well-being beyond
            the classroom.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ClubItem
            icon={<ScrollText className="w-6 h-6" />}
            title="Literary, Eco, Music & Drama Clubs"
            color="bg-indigo-100 text-indigo-600"
          />
          <ClubItem
            icon={<Mic2 className="w-6 h-6" />}
            title="Debates, Extempore, Quizzes"
            color="bg-orange-100 text-orange-600"
          />
          <ClubItem
            icon={<Users className="w-6 h-6" />}
            title="Inter-school Competitions"
            color="bg-green-100 text-green-600"
          />
          <ClubItem
            icon={<Palette className="w-6 h-6" />}
            title="Art & Craft, Drawing, Creative Writing"
            color="bg-yellow-100 text-yellow-600"
          />
          <ClubItem
            icon={<Leaf className="w-6 h-6" />}
            title="Yoga & Meditation Sessions"
            color="bg-teal-100 text-teal-600"
          />
          <ClubItem
            icon={<Music2 className="w-6 h-6" />}
            title="Music, Rhythm & Expression"
            color="bg-rose-100 text-rose-600"
          />
        </div>
      </div>
    </section>
  );
};

type ClubItemProps = {
  icon: React.ReactNode;
  title: string;
  color: string;
};

const ClubItem = ({ icon, title, color }: ClubItemProps) => (
  <div className="flex items-start gap-4">
    <div className={`p-4 rounded-xl shadow-sm ${color}`}>{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
  </div>
);

export default CoCurricularClubs;
