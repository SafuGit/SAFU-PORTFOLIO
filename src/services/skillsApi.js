import React from "react";

const API_URL = 'https://dev-registry.onrender.com/api/skills/user/4?categories=Frontend,Backend,Languages,Databases,Tools,AI%20Tools,Services';
const CACHE_KEY = 'skills_cache';
const CACHE_TIMESTAMP_KEY = 'skills_cache_timestamp';
const CACHE_TTL = 24 * 60 * 60 * 1000; 

const isCacheValid = () => {
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  if (!timestamp) return false;
  
  const cacheAge = Date.now() - parseInt(timestamp, 10);
  return cacheAge < CACHE_TTL;
};

const getCachedSkills = () => {
  if (!isCacheValid()) {
    clearCache();
    return null;
  }
  
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.error('Error parsing cached skills:', error);
    clearCache();
    return null;
  }
};

const cacheSkills = (skills) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(skills));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
  } catch (error) {
    console.error('Error caching skills:', error);
  }
};

const clearCache = () => {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_TIMESTAMP_KEY);
};

const transformSkill = (apiSkill) => ({
  id: apiSkill.id,
  title: apiSkill.name,
  img: apiSkill.iconUrl,
  category: apiSkill.category,
  priority: apiSkill.priority,
  confident: apiSkill.confident,
  userId: apiSkill.userId
});

const groupAndSortSkills = (skills) => {
  const grouped = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  Object.keys(grouped).forEach(category => {
    grouped[category].sort((a, b) => a.priority - b.priority);
  });

  return grouped;
};

const getCategories = (groupedSkills) => {
  return Object.keys(groupedSkills).sort();
};

const flattenSkills = (groupedSkills) => {
  return Object.values(groupedSkills).flat();
};

export const fetchSkills = async ({ useCache = true, grouped = true } = {}) => {
  try {
    if (useCache) {
      const cached = getCachedSkills();
      if (cached) {
        console.log('✅ Using cached skills data');
        const transformedSkills = cached.map(transformSkill);
        const groupedSkills = groupAndSortSkills(transformedSkills);
        
        return {
          skills: grouped ? groupedSkills : transformedSkills,
          grouped: groupedSkills,
          flatSkills: transformedSkills,
          categories: getCategories(groupedSkills),
          loading: false,
          error: null,
          fromCache: true
        };
      }
    }

    console.log('🌐 Fetching skills from API...');
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!Array.isArray(data)) {
      throw new Error('Invalid API response format');
    }

    cacheSkills(data);
    
    const transformedSkills = data.map(transformSkill);
    const groupedSkills = groupAndSortSkills(transformedSkills);
    
    console.log(`✅ Fetched ${data.length} skills across ${Object.keys(groupedSkills).length} categories`);
    
    return {
      skills: grouped ? groupedSkills : transformedSkills,
      grouped: groupedSkills,
      flatSkills: transformedSkills,
      categories: getCategories(groupedSkills),
      loading: false,
      error: null,
      fromCache: false
    };
    
  } catch (error) {
    console.error('❌ Error fetching skills:', error);
    
    return {
      skills: grouped ? {} : [],
      grouped: {},
      flatSkills: [],
      categories: [],
      loading: false,
      error: error.message,
      fromCache: false
    };
  }
};

export const useSkillsData = () => {
  const [state, setState] = React.useState({
    skills: {},
    grouped: {},
    flatSkills: [],
    categories: [],
    loading: true,
    error: null,
    fromCache: false
  });

  const refetch = React.useCallback(async (useCache = false) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    const result = await fetchSkills({ useCache });
    setState(result);
  }, []);

  React.useEffect(() => {
    refetch(true);
  }, [refetch]);

  return { ...state, refetch };
};

export const getSkillsByCategory = (groupedSkills, category) => {
  return groupedSkills[category] || [];
};

export const filterByConfidence = (skills, confidentOnly = true) => {
  return confidentOnly ? skills.filter(skill => skill.confident) : skills;
};

export const getSkillCounts = (groupedSkills) => {
  const counts = {};
  Object.keys(groupedSkills).forEach(category => {
    counts[category] = groupedSkills[category].length;
  });
  return counts;
};

export const clearSkillsCache = () => {
  clearCache();
  console.log('🗑️ Skills cache cleared');
};

export {
  groupAndSortSkills,
  getCategories,
  flattenSkills,
  transformSkill,
  isCacheValid
};
