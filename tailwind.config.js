// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this to match your file paths
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 1s linear infinite',
        'spin-slow': 'spin 1.1s linear infinite',
        'spin-fast': 'spin 1.2s linear infinite',
        'rotate': 'rotate 5s linear infinite',
        'fluid-effect': 'fluidmove 5s infinite ease',

      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },  
        },
        fluidmove: {
          '0%': { 
            borderRadius: '80% 20% 32% 68% / 58% 22% 28% 72%'
          },
          '10%': { 
            borderRadius: '70% 30% 10% 20% / 60% 30% 40% 50%'
          },
          '20%': { 
            borderRadius: '60% 40% 45% 85% / 55% 41% 55% 45%'
          },
          '30%': { 
            borderRadius: '99% 50% 40% 60% / 45% 55% 35% 50%'
          },
          '40%': { 
            borderRadius: '31% 95% 35% 95% / 50% 50% 40% 60%'
          },
          '50%': { 
            borderRadius: '45% 55% 53% 30% / 90% 40% 37% 20%'
          },
          '60%': { 
            borderRadius: '20% 80% 63% 40% / 40% 60% 50% 50%'
          },
          '70%': { 
            borderRadius: '65% 65% 45% 55% / 56% 45% 65% 35%'
          },
          '80%': { 
            borderRadius: '60% 20% 50% 50% / 35% 55% 80% 50%'
          },
          '90%': { 
            borderRadius: '55% 45% 60% 47% / 10% 40% 75% 55%'
          },
          '100%': { 
            borderRadius: '80% 70% 32% 68% / 58% 22% 28% 72%'
          },



        },

    },  
  },
},
  plugins: [],
};
