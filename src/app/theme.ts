export const theme = {
  colors: {
    background: '#f8f9fa',
    primary: '#4a90e2',
    secondary: '#adb5bd',
    text: '#2c3e50',
    error: '#e74c3c',
    focus: '#4D90FE', // Focus color for inputs and buttons
    hoverPrimary: '#397CC0', // Slightly darker shade for primary hover state
    hoverSecondary: '#9da9b3' // Slightly darker shade for secondary hover state
  },
  fonts: {
    primary: 'Arial, sans-serif',
    // Additional font options
    secondary: 'Georgia, serif' // An example of a secondary font
  },
  spacing: (factor: number) => `${4 * factor}px`,
  // Additional spacing, breakpoints, and shadows
  breakpoints: {
    sm: '576px', // Small devices (landscape phones)
    md: '768px', // Medium devices (tablets)
    lg: '992px', // Large devices (desktops)
    xl: '1200px' // Extra large devices (large desktops)
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)', // Small shadow
    md: '0 4px 8px rgba(0, 0, 0, 0.2)', // Medium shadow (original boxShadow)
    lg: '0 10px 20px rgba(0, 0, 0, 0.3)' // Large shadow for hover effects
  }
}
