import { useState } from "react";

export function useSwipeTabs(sections, initialTab) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [direction, setDirection] = useState(0);

  const changeTab = (newTab) => {
    if (newTab === activeTab) return;
    const currentIndex = sections.indexOf(activeTab);
    const newIndex = sections.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };

  const handleDragEnd = (_, info) => {
    const currentIndex = sections.indexOf(activeTab);
    const threshold = 50;

    if (info.offset.x < -threshold && currentIndex < sections.length - 1) {
      changeTab(sections[currentIndex + 1]);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      changeTab(sections[currentIndex - 1]);
    }
  };

  return { activeTab, direction, changeTab, handleDragEnd };
}