// src/components/topformations/TopFormations.jsx
import React, { useState, useEffect } from "react";
import { mockFormations } from "../../data/mockTopFormations"; // Assuming this path remains
import BestRated from "./view/BestRated";
import MostRequested from "./view/MostRequested";
import Financing from "./view/Financing";
import Tabs from "./tabs/Tabs";

export default function TopFormations() {
  const [activeTab, setActiveTab] = useState("mieux-notees");
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = [
    { id: "mieux-notees", label: "Les mieux notées" },
    { id: "plus-demandees", label: "Les plus demandées" },
    { id: "financements", label: "Les Financements" },
  ];

  // Load formations when tab changes
  useEffect(() => {
    const loadFormations = async () => {
      setLoading(true);
      try {
        // Simulate API call - replace with actual API later
        // const data = await fetchFormationsByCategory(activeTab);
        const data = mockFormations[activeTab] || [];
        setFormations(data); // Load all formations
        setCurrentIndex(0); // Reset to first page
      } catch (error) {
        console.error("Error loading formations:", error);
        setFormations([]);
      } finally {
        setLoading(false);
      }
    };

    loadFormations();
  }, [activeTab]);

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex + 4 < formations.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const handleBookmark = (formationId) => {
    console.log("Bookmarked formation:", formationId);
    // TODO: Implement bookmark functionality with backend
  };

  const handleDiscover = (formationId) => {
    console.log("Discover clicked for formation:", formationId);
    // TODO: Navigate to formation detail page
  };

  // Render content based on active tab
  const renderTabContent = () => {
    if (loading) {
      return <div className="flex items-center justify-center min-h-[400px] text-lg text-[#1b365e] font-lato">Chargement...</div>;
    }

    const tabProps = {
      formations,
      currentIndex,
      handleNext,
      handlePrev,
      handleBookmark,
      handleDiscover,
    };

    switch (activeTab) {
      case "mieux-notees":
        return <BestRated {...tabProps} />;
      case "plus-demandees":
        return <MostRequested {...tabProps} />;
      case "financements":
        return <Financing {...tabProps} />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white flex justify-center mx-auto py-6 md:py-6">
      <div className="max-w-[1306px] w-full px-4 md:px-4 text-center relative mx-auto pb-20 md:pb-20">
        <h2 className="font-red-hat-display font-normal text-[clamp(1.5rem,4vw,3.75rem)] leading-tight text-center text-[#1b365e] mb-10 md:mb-10">
          Le top de nos formations
        </h2>

        <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />

        <div className="min-h-[300px] flex flex-col items-center justify-center pt-5 gap-10">{renderTabContent()}</div>
      </div>
    </section>
  );
}