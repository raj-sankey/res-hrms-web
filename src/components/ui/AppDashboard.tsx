"use client";

import React, { useState } from "react";
import { useAuthStore } from "@/src/store/useAuthStore";
import { getFormattedDate } from "@/src/utils/helpers";

export default function AppDashboard() {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      name: "Attendance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Employees",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      name: "Reports",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const feedItems = [
    { name: "Rahul Sharma", role: "RS", time: "9:02 AM", type: "IN" },
    { name: "Priya Mehta", role: "PM", time: "9:15 AM", type: "IN" },
    { name: "Amit Patel", role: "AP", time: "9:20 AM", type: "IN" },
    { name: "Vikram Singh", role: "VS", time: "9:28 AM", type: "IN" },
    { name: "Sneha Rao", role: "SR", time: "1:30 PM", type: "OUT" },
  ];

  const attendanceRecords = [
    { id: 1, name: "Rahul Sharma", empId: "EMP001", date: "Jun 4, 2024", checkIn: "9:02 AM", checkOut: "5:34 PM", hours: "8h 32m", status: "Present" },
    { id: 2, name: "Priya Mehta", empId: "EMP042", date: "Jun 4, 2024", checkIn: "9:15 AM", checkOut: "5:45 PM", hours: "8h 30m", status: "Present" },
    { id: 3, name: "Amit Patel", empId: "EMP015", date: "Jun 4, 2024", checkIn: "9:20 AM", checkOut: "5:50 PM", hours: "8h 30m", status: "Present" },
    { id: 4, name: "Vikram Singh", empId: "EMP089", date: "Jun 4, 2024", checkIn: "9:28 AM", checkOut: "--", hours: "--", status: "Incomplete" },
    { id: 5, name: "Sneha Rao", empId: "EMP023", date: "Jun 4, 2024", checkIn: "--", checkOut: "--", hours: "--", status: "Absent" },
    { id: 6, name: "Arjun Kapoor", empId: "EMP031", date: "Jun 3, 2024", checkIn: "9:05 AM", checkOut: "6:02 PM", hours: "8h 57m", status: "Present" },
    { id: 7, name: "Kavita Reddy", empId: "EMP077", date: "Jun 3, 2024", checkIn: "9:12 AM", checkOut: "5:48 PM", hours: "8h 36m", status: "Present" },
    { id: 8, name: "Rohan Das", empId: "EMP016", date: "Jun 3, 2024", checkIn: "9:30 AM", checkOut: "5:30 PM", hours: "8h 00m", status: "Present" },
  ];

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden font-sans">
      {/* ── Left Sidebar ── */}
      <aside className="w-64 bg-secondary flex flex-col justify-between text-white border-r border-border/10 shrink-0">
        <div className="flex flex-col pt-6">
          {/* Brand/App Block */}
          <div className="flex items-center gap-3 px-6 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white leading-none">TalentFlow HR</span>
              <span className="text-[10px] text-neutral-400 mt-1 leading-none">Enterprise Suite</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 px-4">
            {menuItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 text-left ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Admin Info / Logout */}
        <div className="p-4 border-t border-border/10 flex flex-col gap-3">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-semibold text-white uppercase border border-neutral-600">
                {user?.name ? user.name.split(" ").map((n) => n[0]).join("") : "AD"}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white leading-tight">{user?.name || "Admin User"}</span>
                <span className="text-[10px] text-neutral-400 capitalise leading-none">Admin</span>
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full inline-flex h-9 items-center justify-center rounded-lg border border-border/20 text-xs font-semibold text-error hover:bg-error-bg/10 active:scale-[0.98] transition-all"
          >
            Log Out
          </button>
        </div>
      </aside>

      {/* ── Main Content Area ── */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-background">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-bold text-text-primary leading-tight">
              {activeTab === "Dashboard" ? "Dashboard" : "Attendance Management"}
            </h1>
            <span className="text-xs text-text-secondary">{getFormattedDate()}</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Search Input */}
            <div className="relative w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute left-3.5 top-2.5 h-4 w-4 text-text-muted"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search employees..."
                className="w-full h-9 pl-9 pr-4 rounded-lg border border-border bg-surface text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light transition-all"
              />
            </div>

            {/* Notification Bell */}
            <button className="relative p-1.5 rounded-full hover:bg-neutral-100 text-text-secondary transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5.5 w-5.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-error" />
            </button>

            {/* User Avatar */}
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white uppercase shadow-sm">
              {user?.name ? user.name.split(" ").map((n) => n[0]).join("") : "AU"}
            </div>
          </div>
        </header>

        {/* ── Dashboard Content Panel ── */}
        {activeTab === "Dashboard" && (
          <div className="p-8 flex flex-col gap-6 max-w-7xl w-full mx-auto">
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Card 1: Total Employees */}
              <div className="bg-white border border-border rounded-xl p-5 flex items-center justify-between shadow-xs">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-text-muted uppercase">Total Employees</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-text-primary">48</span>
                    <span className="text-[11px] font-medium text-text-muted">-2 from last mo</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-500 border border-neutral-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Card 2: Present Today */}
              <div className="bg-white border border-border rounded-xl p-5 flex items-center justify-between shadow-xs">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-text-muted uppercase">Present Today</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-text-primary">36</span>
                    <span className="text-[11px] font-bold text-success">75%</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-success/5 flex items-center justify-center text-success border border-success/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Card 3: Absent Today */}
              <div className="bg-white border border-border rounded-xl p-5 flex items-center justify-between shadow-xs">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-text-muted uppercase">Absent Today</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-text-primary">12</span>
                    <span className="text-[11px] font-bold text-error">25%</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-error/5 flex items-center justify-center text-error border border-error/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Card 4: On Time */}
              <div className="bg-white border border-border rounded-xl p-5 flex items-center justify-between shadow-xs">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-wider text-text-muted uppercase">On Time</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-text-primary">29</span>
                    <span className="text-[11px] font-medium text-primary-600">80% of present</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center text-primary border border-primary-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Grid Layout (Middle Content Split) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Box: Weekly Attendance Overview Chart */}
              <div className="lg:col-span-2 bg-white border border-border rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-text-primary">Weekly Attendance Overview</h3>
                    <p className="text-xs text-text-muted">Present vs Absent (Mon-Fri)</p>
                  </div>
                  {/* Dropdown Link */}
                  <button className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 transition-all">
                    This Week
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4.5 w-4.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Chart Plot Area */}
                <div className="flex-1 min-h-[260px] flex items-end justify-between relative px-4 border-b border-border/80">
                  {/* Grid Lines */}
                  <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between pointer-events-none">
                    <div className="border-t border-dashed border-border/40 w-full flex justify-between text-[10px] text-text-muted pt-1">
                      <span>50</span>
                    </div>
                    <div className="border-t border-dashed border-border/40 w-full flex justify-between text-[10px] text-text-muted pt-1">
                      <span>40</span>
                    </div>
                    <div className="border-t border-dashed border-border/40 w-full flex justify-between text-[10px] text-text-muted pt-1">
                      <span>30</span>
                    </div>
                    <div className="border-t border-dashed border-border/40 w-full flex justify-between text-[10px] text-text-muted pt-1">
                      <span>20</span>
                    </div>
                    <div className="border-t border-dashed border-border/40 w-full flex justify-between text-[10px] text-text-muted pt-1">
                      <span>10</span>
                    </div>
                    <div className="w-full flex justify-between text-[10px] text-text-muted pt-1">
                      <span>0</span>
                    </div>
                  </div>

                  {/* Columns */}
                  <div className="relative flex-1 h-full flex items-end justify-around pb-2 z-10 pl-6">
                    {/* Monday */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-end gap-1.5 h-48">
                        <div className="w-4 bg-primary rounded-t-sm h-[75%] transition-all duration-500 hover:opacity-85" title="Present: 38" />
                        <div className="w-4 bg-error rounded-t-sm h-[15%] transition-all duration-500 hover:opacity-85" title="Absent: 8" />
                      </div>
                      <span className="text-[10px] font-semibold text-text-muted">Mon</span>
                    </div>

                    {/* Tuesday */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-end gap-1.5 h-48">
                        <div className="w-4 bg-primary rounded-t-sm h-[68%] transition-all duration-500 hover:opacity-85" title="Present: 34" />
                        <div className="w-4 bg-error rounded-t-sm h-[20%] transition-all duration-500 hover:opacity-85" title="Absent: 10" />
                      </div>
                      <span className="text-[10px] font-semibold text-text-muted">Tue</span>
                    </div>

                    {/* Wednesday */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-end gap-1.5 h-48">
                        <div className="w-4 bg-primary rounded-t-sm h-[80%] transition-all duration-500 hover:opacity-85" title="Present: 40" />
                        <div className="w-4 bg-error rounded-t-sm h-[10%] transition-all duration-500 hover:opacity-85" title="Absent: 5" />
                      </div>
                      <span className="text-[10px] font-semibold text-text-muted">Wed</span>
                    </div>

                    {/* Thursday */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-end gap-1.5 h-48">
                        <div className="w-4 bg-primary rounded-t-sm h-[60%] transition-all duration-500 hover:opacity-85" title="Present: 30" />
                        <div className="w-4 bg-error rounded-t-sm h-[30%] transition-all duration-500 hover:opacity-85" title="Absent: 15" />
                      </div>
                      <span className="text-[10px] font-semibold text-text-muted">Thu</span>
                    </div>

                    {/* Friday */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-end gap-1.5 h-48">
                        <div className="w-4 bg-primary rounded-t-sm h-[0%] transition-all duration-500 hover:opacity-85" title="Present: 0" />
                        <div className="w-4 bg-error rounded-t-sm h-[0%] transition-all duration-500 hover:opacity-85" title="Absent: 0" />
                      </div>
                      <span className="text-[10px] font-semibold text-text-muted">Fri</span>
                    </div>
                  </div>
                </div>

                {/* Chart Legend */}
                <div className="flex justify-center items-center gap-5 mt-4 text-[10px] font-bold text-text-primary">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Present</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-error" />
                    <span>Absent</span>
                  </div>
                </div>
              </div>

              {/* Right Box: Today's Live Feed */}
              <div className="bg-white border border-border rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                    </span>
                    <h3 className="text-sm font-bold text-text-primary">Today&apos;s Live Feed</h3>
                  </div>
                  <button className="text-text-muted hover:text-text-primary transition-all p-1 rounded-md hover:bg-neutral-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4.5 w-4.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18v3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Feed Items List */}
                <div className="flex-1 flex flex-col justify-center divide-y divide-border/40">
                  {feedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8.5 w-8.5 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-text-primary border border-border/50 uppercase">
                          {item.role}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-text-primary leading-tight">{item.name}</span>
                          <div className="mt-1">
                            {item.type === "IN" ? (
                              <span className="inline-flex items-center rounded-md bg-success-bg px-2 py-0.5 text-[9px] font-bold text-success border border-success/10">
                                CHECK IN
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-md bg-error-bg px-2 py-0.5 text-[9px] font-bold text-error border border-error/10">
                                CHECK OUT
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-text-muted">{item.time}</span>
                    </div>
                  ))}
                </div>

                {/* View Full Log Button */}
                <button
                  onClick={() => setActiveTab("Attendance")}
                  className="w-full text-center mt-3 pt-3 border-t border-border/40 text-xs font-bold text-primary hover:text-primary-hover transition-all"
                >
                  View Full Log
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Attendance Management Panel ── */}
        {activeTab === "Attendance" && (
          <div className="p-8 flex flex-col gap-6 max-w-7xl w-full mx-auto">
            {/* Table Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-xl font-bold text-text-primary">Attendance Records</h2>

              {/* Date Filters + Export Button */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                {/* Date Picker Custom Mockup */}
                <div className="h-9 px-3 border border-border bg-white rounded-lg flex items-center gap-2.5 text-xs text-text-primary shadow-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4.5 w-4.5 text-text-muted"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Jun 3, 2024</span>
                  <span className="text-text-muted">-</span>
                  <span>Jun 4, 2024</span>
                </div>

                {/* Export CSV Button */}
                <button className="h-9 px-4 border border-border bg-white rounded-lg inline-flex items-center gap-2 text-xs font-bold text-text-primary shadow-xs hover:bg-neutral-50 active:scale-[0.98] transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4.5 w-4.5 text-text-muted"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Report CSV
                </button>
              </div>
            </div>

            {/* Attendance Table Panel */}
            <div className="bg-white border border-border rounded-xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border/80 bg-neutral-50/50">
                      <th className="py-3.5 px-6 text-[10px] font-bold tracking-wider text-text-muted uppercase w-12">#</th>
                      <th className="py-3.5 px-6 text-[10px] font-bold tracking-wider text-text-muted uppercase">Employee Name</th>
                      <th className="py-3.5 px-6 text-[10px] font-bold tracking-wider text-text-muted uppercase">Employee ID</th>
                      <th className="py-3.5 px-6 text-[10px] font-bold tracking-wider text-text-muted uppercase">
                        <div className="flex items-center gap-1 cursor-pointer select-none">
                          Date
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                            <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.63l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </th>
                      <th className="py-3.5 px-6 text-[10px] font-bold tracking-wider text-text-muted uppercase">
                        <div className="flex items-center gap-1 cursor-pointer select-none">
                          Check In
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                            <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.63l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </th>
                      <th className="py-3.5 px-6 text-[10px] font-bold tracking-wider text-text-muted uppercase">Check Out</th>
                      <th className="py-3.5 px-6 text-[10px] font-bold tracking-wider text-text-muted uppercase">Hours Worked</th>
                      <th className="py-3.5 px-6 text-[10px] font-bold tracking-wider text-text-muted uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {attendanceRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-neutral-50/30 transition-all">
                        <td className="py-3.5 px-6 text-xs text-text-muted">{record.id}</td>
                        <td className="py-3.5 px-6 text-xs font-semibold text-text-primary">{record.name}</td>
                        <td className="py-3.5 px-6 text-xs font-mono text-text-secondary">{record.empId}</td>
                        <td className="py-3.5 px-6 text-xs text-text-secondary">{record.date}</td>
                        <td className="py-3.5 px-6 text-xs text-text-secondary">{record.checkIn}</td>
                        <td className="py-3.5 px-6 text-xs text-text-secondary">{record.checkOut}</td>
                        <td className="py-3.5 px-6 text-xs font-medium text-text-secondary">{record.hours}</td>
                        <td className="py-3.5 px-6 text-xs">
                          {record.status === "Present" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-success-bg px-2.5 py-0.5 text-[10px] font-bold text-success border border-success/10">
                              <span className="h-1.5 w-1.5 rounded-full bg-success" />
                              Present
                            </span>
                          )}
                          {record.status === "Incomplete" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-warning-bg px-2.5 py-0.5 text-[10px] font-bold text-warning border border-warning/10">
                              <span className="h-1.5 w-1.5 rounded-full bg-warning" />
                              Incomplete
                            </span>
                          )}
                          {record.status === "Absent" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-error-bg px-2.5 py-0.5 text-[10px] font-bold text-error border border-error/10">
                              <span className="h-1.5 w-1.5 rounded-full bg-error" />
                              Absent
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer / Pagination */}
              <div className="py-4 px-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-text-muted">Showing 1-8 of 124 records</span>

                {/* Pagination Controls */}
                <div className="flex items-center gap-1.5">
                  {/* Previous Arrow */}
                  <button className="h-7.5 w-7.5 border border-border rounded-lg inline-flex items-center justify-center text-text-muted hover:bg-neutral-50 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4.5 w-4.5">
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <button className="h-7.5 w-7.5 bg-primary text-white text-xs font-bold rounded-lg inline-flex items-center justify-center shadow-xs">
                    1
                  </button>
                  <button className="h-7.5 w-7.5 border border-border text-xs text-text-secondary hover:bg-neutral-50 rounded-lg inline-flex items-center justify-center transition-all">
                    2
                  </button>
                  <button className="h-7.5 w-7.5 border border-border text-xs text-text-secondary hover:bg-neutral-50 rounded-lg inline-flex items-center justify-center transition-all">
                    3
                  </button>
                  <span className="text-xs text-text-muted px-1">...</span>
                  <button className="h-7.5 w-7.5 border border-border text-xs text-text-secondary hover:bg-neutral-50 rounded-lg inline-flex items-center justify-center transition-all">
                    16
                  </button>

                  {/* Next Arrow */}
                  <button className="h-7.5 w-7.5 border border-border rounded-lg inline-flex items-center justify-center text-text-muted hover:bg-neutral-50 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4.5 w-4.5">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
