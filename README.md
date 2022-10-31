# DolankuyApp

Dokumentasi ekstensi componenet frontend tailwindcss by _**Haidar Ganteng**_

## Default Container
---
Component ini adalah component untuk membentuk container, dikonfigurasi ulang pada `tailwind.config.js` agar seluruh padding pada container dapat sama rata kanan dan kirinya

```javascript
container: {
      center: true,
      padding: {
        // padding left and right
        DEFAULT: '24px'
      },
    },
```
## Ekstensi pada `tailwind.config.js`
---
Untuk ekstensi warna, font, dan fontFamily sendiri developer mengambil asset dari design figma yang telah tersedia pada link [figma](https://www.figma.com/file/AEf35pFVkZQqTwahKOIXjt/Website-Tourism-PPL?node-id=126%3A1175)

Untuk `source code` akan dijabarkan pada section berikut
```javascript
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
```

## Component
---
- ### Card component
  
  Komponen ini dapat digunakan secara custom dan dapat dikustomisasi ulang tergantung dari developer
  
  #### HTML
  ---
    Cara pengaplikasian ke dalam sebuah line **HTML**
    ```html
    <!-- default card -->
    <div class="card">

      <!-- card child image -->
      <section class="card-child h-[300px]">
        
        <!-- image link -->
        <img src="http://source.unsplash.com/1200x400/?bali" alt="">
      </section>
      
      <!-- card textarea -->
      <section class="card-textarea">
        <h3>hello gais</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>
    
    </div>
    ```
  #### Default card area
  ---
  Style yang dimasukkan pada `input.css` tailwindcss untuk membentuk suatu card
    ```css
    /* default card */
    .card{
      @apply border p-6 rounded-xl grid gap-6 shadow-md hover:bg-primary-500 hover:text-white transition duration-300 ease-in-out
    }
    ```
  
  #### Card area
  ---
  Style child class dari Default card area, style ini juga dimasukkan ke dalam `input.css` tailwindcss
    ```css
    /* card area */
    .card .card-child{
      @apply border rounded-lg overflow-hidden
    }
    .card .card-child img{
      @apply brightness-50
    }
    .card .card-textarea{
      @apply grid gap-2
    }
    ```
  #### Example :
  ![alternate](/documentation/card.png)
- ### Image Card component
  Komponen ini dapat digunakan secara custom dan dapat dikustomisasi ulang tergantung dari developer

  #### HTML
  ---
  Cara pengaplikasian ke dalam sebuah line **HTML**
    ```html
    <!-- Card image area -->
    <div class="card-image h-[500px] border">
      
      <!-- image link -->
      <img src="http://source.unsplash.com/1200x400/?bali" alt="">
      
      <!-- image child -->
      <div class="image-child">
        
        <!-- image textarea -->
        <div class="image-textarea">
          <span>Jawa Tengah</span>
          <h4>Bukit Tebing Pesawahan Viral</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      
      </div>
    
    </div>
    ```
  #### Default image card area
  ---
  Style yang dimasukkan pada `input.css` tailwindcss untuk membentuk suatu image card
    ```css
    /* image card */
    .card-image{
      @apply relative flex items-end rounded-lg overflow-hidden
    }
    ```
  #### Image child card area
  ---
  Style yang dimasukkan pada `input.css` tailwindcss untuk membentuk suatu image card
    ```css
    /* image card area */
    .card-image img{
      @apply brightness-50 hover:blur-sm hover:scale-110 transition duration-300 ease-in-out
    }
    .card-image .image-child{
      @apply absolute flex
    }
    .card-image .image-textarea{
      @apply text-white z-20 self-end p-6
    }
    ```
  #### Example :
  ![alternate](/documentation/image-card.png)