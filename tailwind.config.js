/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': {
          50: '#DCE7E6',
          100: '#C5D6D5',
          200: '#A8C2C0',
          300: '#8BAEAB',
          400: '#6E9996',
          500: '#518581'
        },
        'secondary': {
          50: '#FFF0D9',
          100: '#FFE5BF',
          200: '#FFD89F',
          300: '#FFCC7F',
          400: '#FFBF5F',
          500: '#FFB23F'
        },
        'title': {
          50: '#FFFFFF',
          100: '#B1B1B0',
          200: '#8A8988',
          300: '#636260',
          400: '#3C3B39',
          500: '#151411'
        },
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        // Headings
        'h7': ['14px', {
          fontWeight: '700'
        }],
        'h6': ['16px', {
          fontWeight: '700'
        }],
        'h5': ['18px', {
          fontWeight: '700'
        }],
        'h4': ['20px', {
          fontWeight: '700'
        }],
        'h3': ['24px', {
          fontWeight: '700'
        }],
        'h2': ['44px', {
          fontWeight: '700'
        }],
        'h1': ['64px', {
          fontWeight: '700'
        }],
        // Label
        'l3': ['14px', {
          fontWeight: '700'
        }],
        'l2': ['16px', {
          fontWeight: '700'
        }],
        'l1': ['18px', {
          fontWeight: '700'
        }],
        // paragraph
        'p3': ['14px', {
          fontWeight: '500'
        }],
        'p2': ['16px', {
          fontWeight: '500'
        }],
        'p1': ['18px', {
          fontWeight: '500'
        }],
      },
    },
    
    container: {
      center: true,
      padding: {
        DEFAULT: '24px'
      },
    },
    screens: {
      'android': '510px',
      // => @media (min-width: 510px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'tablethd': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'hd': '1280px',
      // => @media (min-width: 1280px) { ... }

      'fhd': '1536px',
      // => @media (min-width: 1536px) { ... }

      'uhd': '1920px',
      // => @media (min-width: 1920px) { ... }

    }
  },
  plugins: [],
}
