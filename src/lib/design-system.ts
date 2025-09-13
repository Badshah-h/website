// Design System - Consistent styling patterns for enterprise website

export const designSystem = {
  // Section Spacing - Consistent across all components
  spacing: {
    section: 'py-24', // Standard section padding
    sectionLarge: 'py-32', // Large sections (hero, major features)
    sectionSmall: 'py-16', // Smaller sections (testimonials, logos)
    container: 'container', // Standard container with consistent margins
    gridGap: 'gap-8', // Standard grid gap
    contentGap: 'space-y-6', // Standard content spacing
  },

  // Typography - Consistent heading hierarchy
  typography: {
    // Section Headers
    sectionTitle: 'text-4xl font-bold text-brand-900', // Main section titles
    sectionSubtitle: 'text-xl text-gray-600', // Section descriptions
    
    // Content Headers
    cardTitle: 'text-xl font-semibold text-brand-900', // Card/item titles
    cardDescription: 'text-gray-600 leading-relaxed', // Card descriptions
    
    // Hero/Display - Unified across all hero sections
    heroTitle: 'text-5xl lg:text-6xl font-black text-brand-900',
    heroSubtitle: 'text-2xl text-gray-600 font-medium',
    heroTitleWhite: 'text-5xl lg:text-6xl font-black text-white', // For dark hero backgrounds
    heroSubtitleWhite: 'text-2xl text-white/90 font-medium', // For dark hero backgrounds
    heroDescription: 'text-lg text-gray-700 leading-relaxed',
    heroDescriptionWhite: 'text-lg text-white/70 leading-relaxed',
    
    // Body Text
    bodyLarge: 'text-lg text-gray-700',
    bodyMedium: 'text-base text-gray-600',
    bodySmall: 'text-sm text-gray-500',
  },

  // Visual Elements - Consistent styling
  elements: {
    // Section Dividers
    sectionDivider: 'w-24 h-1 bg-gradient-to-r from-brand-900 to-accent rounded-full mx-auto',
    
    // Section Badges - Consistent design across all sections
    sectionBadge: 'inline-flex items-center px-8 py-4 bg-white border border-brand-100 rounded-full mb-8 shadow-lg',
    sectionBadgeIcon: 'h-5 w-5 text-brand-500 mr-3',
    sectionBadgeText: 'text-sm font-bold text-brand-700 uppercase tracking-wide',
    
    // Hero Badges for dark backgrounds
    heroBadge: 'inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl',
    heroBadgeIcon: 'h-5 w-5 text-white mr-3',
    heroBadgeText: 'text-sm font-bold text-white uppercase tracking-wider',
    
    // Cards
    card: 'bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300',
    cardPadding: 'p-6',
    
    // Icons - Modern smaller sizing across all sections
    iconContainer: 'w-12 h-12 rounded-xl flex items-center justify-center',
    iconSize: 'h-5 w-5 text-white',
    iconContainerLarge: 'w-16 h-16 rounded-2xl flex items-center justify-center', // For special emphasis
    iconSizeLarge: 'h-7 w-7 text-white',
    
    // Step/Process Icons (for HowItWorks type sections)
    stepIconContainer: 'w-14 h-14 rounded-2xl flex items-center justify-center',
    stepIconSize: 'h-6 w-6',
    
    // Modern Design Elements
    modernCard: 'relative backdrop-blur-xl bg-white/70 border border-white/20 rounded-3xl overflow-hidden',
    glassMorphism: 'backdrop-blur-xl bg-white/10 border border-white/20',
    floatingElement: 'transform transition-all duration-500 hover:scale-105 hover:-translate-y-2',
    modernShadow: 'shadow-2xl shadow-black/10 hover:shadow-black/20',
    gradientBorder: 'bg-gradient-to-r from-brand-500 via-accent to-brand-300 p-[1px] rounded-3xl',
    
    // Buttons
    primaryButton: 'inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-700 hover:to-brand-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300',
    secondaryButton: 'inline-flex items-center px-6 py-3 border-2 border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white font-semibold rounded-xl transition-all duration-300',
    
    // Animations
    fadeUp: 'opacity-0 translate-y-8',
    fadeUpVisible: 'opacity-100 translate-y-0',
  },

  // Color Utilities
  colors: {
    // Service Color Mapping
    serviceColors: [
      { text: 'text-brand-900', bg: 'bg-brand-900', gradient: 'from-brand-900 to-brand-700' },
      { text: 'text-accent', bg: 'bg-accent', gradient: 'from-accent to-orange-600' },
      { text: 'text-brand-700', bg: 'bg-brand-700', gradient: 'from-brand-700 to-brand-500' },
      { text: 'text-brand-500', bg: 'bg-brand-500', gradient: 'from-brand-500 to-brand-300' },
    ],
  },

  // Animation Presets
  animations: {
    // Standard stagger delays for grids
    staggerDelay: (index: number) => index * 0.1,
    
    // Common animation variants
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    
    // Timing
    duration: {
      fast: 0.3,
      medium: 0.6,
      slow: 0.8,
    }
  }
};

// Helper Functions for consistent styling
export const getServiceColor = (index: number) => {
  const colors = designSystem.colors.serviceColors;
  return colors[index % colors.length];
};

export const getSectionHeaderClasses = () => {
  return `text-center mb-16`;
};

export const getGridClasses = (cols: number = 3) => {
  const colsMap = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };
  
  return `grid ${colsMap[cols as keyof typeof colsMap] || colsMap[3]} ${designSystem.spacing.gridGap}`;
};
