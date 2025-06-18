import {
  MessageSquareQuote,
  Cpu,
  BrainCircuit,
  Compass,
  BadgeCheck,
} from "lucide-react";

const SpecialPrograms = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full w-14 h-14 shadow mb-4">
            <BookIcon />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Special Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We go beyond academics to help students unlock their full potential
            through cutting-edge programs and holistic learning experiences.
          </p>
        </div>

        {/* Program List */}
        <div className="grid md:grid-cols-2 gap-12">
          <ProgramCard
            icon={<MessageSquareQuote className="w-6 h-6" />}
            title="Spoken English & Personality Development"
            description="Enhancing communication, public speaking, and confidence through engaging modules."
            color="bg-blue-100 text-blue-600"
          />
          <ProgramCard
            icon={<Cpu className="w-6 h-6" />}
            title="Coding, AI & Robotics"
            description="Introducing future technologies to students with hands-on projects and challenges."
            color="bg-indigo-100 text-indigo-600"
          />
          <ProgramCard
            icon={<Compass className="w-6 h-6" />}
            title="Career Counselling & Life Skills"
            description="Guiding students with expert mentoring, personality assessments, and real-world preparation."
            color="bg-green-100 text-green-600"
          />
          <ProgramCard
            icon={<BadgeCheck className="w-6 h-6" />}
            title="Olympiad & Competitive Exam Training"
            description="Foundation coaching for NTSE, NEET, JEE, and Olympiads by experienced educators."
            color="bg-purple-100 text-purple-600"
          />
        </div>
      </div>
    </section>
  );
};

type ProgramCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const ProgramCard = ({ icon, title, description, color }: ProgramCardProps) => (
  <div className="flex items-start gap-4">
    <div className={`p-4 rounded-xl shadow-sm ${color}`}>{icon}</div>
    <div>
      <h4 className="text-xl font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Icon helper
const BookIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20h9M12 4h9m-9 8h9M3 6h.01M3 12h.01M3 18h.01"
    />
  </svg>
);

export default SpecialPrograms;
