"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { FiBriefcase, FiShoppingBag, FiDollarSign, FiUsers } from "react-icons/fi";
import { motion, StaggerGroup, fadeUp } from "@/lib/motion";

const chartData = [
  { name: "22", uv: 10 },
  { name: "23", uv: 20 },
  { name: "24", uv: 12 },
  { name: "25", uv: 24 },
  { name: "26", uv: 18 },
  { name: "27", uv: 8 },
  { name: "28", uv: 16 },
];

const stats = [
  { icon: <FiBriefcase />, label: "মোট পিচ", value: "03", trend: "+37.8%", up: true },
  { icon: <FiShoppingBag />, label: "মোট অর্ডার", value: "512", trend: "-12.4%", up: false },
  { icon: <FiDollarSign />, label: "মোট আয়", value: "৳64k", trend: "+37.8%", up: true },
  { icon: <FiUsers />, label: "নতুন ইউজার", value: "128", trend: "+9.2%", up: true },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          অ্যাডমিন ড্যাশবোর্ড
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          আপনার ব্যবসার একনজরে পরিসংখ্যান।
        </p>
      </div>

      {/* Stat cards */}
      <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                {s.icon}
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  s.up
                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30"
                    : "bg-rose-50 text-rose-600 dark:bg-rose-950/30"
                }`}
              >
                {s.up ? <FaArrowUp /> : <FaArrowDown />}
                {s.trend}
              </span>
            </div>
            <p className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {s.label}
            </p>
          </motion.div>
        ))}
      </StaggerGroup>

      {/* Chart */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              মোট বিনিয়োগ
            </h2>
          </div>
          <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
            <option>গত ৭ দিন</option>
            <option>গত ১৫ দিন</option>
            <option>গত ১ মাস</option>
          </select>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ fill: "rgba(37,99,235,0.06)" }}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  fontSize: 13,
                }}
              />
              <Bar dataKey="uv" fill="#2563eb" radius={[8, 8, 0, 0]} barSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
