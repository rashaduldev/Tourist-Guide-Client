"use client";

import Cover from "../../Components/Cover";

const coverImg = "/about.jpg";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const team: TeamMember[] = [
  {
    "name": "ডেভিড ফরেন",
    "role": "প্রতিষ্ঠাতা / প্রধান নির্বাহী কর্মকর্তা",
    "img": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "অমিল ইভারা",
    "role": "ইউআই/ইউএক্স ডিজাইনার",
    "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "এবেলে এগবুনা",
    "role": "সাপোর্ট পরামর্শক",
    "img": "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "মারিয়া পাওয়ারস",
    "role": "বিক্রয় পরিচালক",
    "img": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "ডেলিয়া পাওয়েলকে",
    "role": "ফ্রন্ট-এন্ড ডেভেলপার",
    "img": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "টম লোরি",
    "role": "ইউআই/ইউএক্স ডিজাইনার",
    "img": "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "লুইস ডোনাডিয়ু",
    "role": "সাপোর্ট পরামর্শক",
    "img": "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "জেফ ফিশার",
    "role": "প্রজেক্ট ম্যানেজার",
    "img": "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "সোফিয়া হ্যারিংটন",
    "role": "প্রজেক্ট ম্যানেজার",
    "img": "https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "ক্রিস্টিনা ক্রে",
    "role": "সাপোর্ট পরামর্শক",
    "img": "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "এমি ফরেন",
    "role": "প্রোডাক্ট ডিজাইনার",
    "img": "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "ফিলিপ উইলিয়ামস",
    "role": "সাপোর্ট পরামর্শক",
    "img": "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "ব্রায়ান লোফোটেন",
    "role": "ইউআই/ইউএক্স ডিজাইনার",
    "img": "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "টানিয়া হ্যারিংটন",
    "role": "মার্কেটিং স্পেশালিস্ট",
    "img": "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "যাকারি রে",
    "role": "বিক্রয় প্রতিনিধি",
    "img": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  }
];

export default function AboutUs() {
  return (
    <div>
      <Cover
        img={coverImg}
        title="আমাদের সম্পর্কে"
        subtitle="আপনার মতামত জানতে আমরা আগ্রহী!"
      />
      <section aria-label="Team Members" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8 max-w-7xl mx-auto">
        {team.map((member: TeamMember, idx: number) => (
          <div key={idx} className="text-center my-2">
            <img className="rounded-full w-24 h-24 mx-auto" src={member.img} alt={member.name} />
            <div className="mt-2 sm:mt-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
