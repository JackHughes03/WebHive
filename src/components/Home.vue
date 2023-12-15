<script setup>
import { onMounted, ref } from "vue";

const showsearch = ref(false),
showAboutUs = ref(true),
showCourses = ref(true);

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const handleScroll = () => {
  const triangle = document.getElementById("triangle"),
  seemorebutton = document.getElementById("seeMoreButton"),
  nav2 = document.getElementById("nav2"),
  main = document.getElementById("aboutus"),
  scrollPosition = window.scrollY,
  newMarginTop = Math.max(0, 100 + scrollPosition) + "px";
  
  triangle.style.marginTop = newMarginTop;
  
  scrollPosition > 100 ? seemorebutton.style.opacity = "0" : seemorebutton.style.opacity = "1";
  scrollPosition > 100 ? nav2.style.opacity = "1" : nav2.style.opacity = "0";
  
  if (isElementInViewport(main)) {
    triangle.src = "../src/assets/square.png";
  } else {
    triangle.src = "../src/assets/traingle.png";
  }
}

const CreateCursor = () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);
  
  document.documentElement.style.cursor = "none";
  
  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
    "style",
    "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;"
    );
  });
}

onMounted(() => {
  if (window.innerWidth > 1024) {
    CreateCursor();
  }
  
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <div id="app">
    <img id="triangle" src="../assets/traingle.png" class="absolute md:right-32 right-4 md:top-40 top-20 duration-500 w-12 md:w-auto" alt="">
    
    <header class="w-full h-screen">
      <nav class="text-white flex items-center md:pt-8 pt-3 pb-2 border-b-[1px] w-[95%] md:w-2/3 mx-auto">
        <a href="" class="font-[Lemon] md:text-base text-xs">WebHive</a>
        
        <ul class="flex lg:gap-12 gap-3 items-center justify-center w-full md:text-xs text-[10px] uppercase duration-200">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div class="flex md:gap-2 gap-1 items-center justify-center">
          <button class="md:w-7 w-5" @click="showsearch = !showsearch">
            <img src="../assets/search.png" alt="">
          </button>
          
          <textarea v-if="showsearch" class="outline-none backdrop-blur-md pl-2 duration-200 w-56 h-6 border-2 rounded-full resize-none overflow-hidden bg-transparent"></textarea>
          
          <button class="md:w-7 w-5">
            <img src="../assets/person.png" alt="">
          </button>
        </div>
      </nav>
      
      <nav id="nav2" class="text-white flex fixed p-2 left-4 py-3 rounded-md top-4 bg-[#0D194D] backdrop-blur-md border-[1px] duration-500 hover:bg-black opacity-0">
        <ul class="flex flex-col items-center gap-4 justify-center text-xs uppercase">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <section class="font-sans text-white lg:ml-32 ml-10 lg:mt-44 mt-10">
        <h1 class="md:text-7xl text-4xl font-bold">Learn to code<br> websites</h1>
        <p class="text-white w-[300px] text-sm md:text-base font-semibold md:mt-6 mt-3 opacity-80">Learn to code websites by coding HTML, CSS, and Javascript. Additionally, master your design skills and learn frameworks.</p>
      </section>
      
      <a href="#mainid" id="seeMoreButton" class="text-white rounded-full border-2 absolute left-1/2 -translate-x-1/2 bottom-10 p-6 w-4 h-4 flex items-center justify-center backdrop-blur-sm duration-500 hover:px-10 hover:py-4">↓</a>
    </header>
    
    <main id="mainid" class="bg-[#0D194D]">
      <section class="max-w-7xl mx-auto md:gap-20 gap-4 px-4 md:px-0 md:py-20 text-white flex items-center justify-center">
        <section class="w-1/2 text-center">
          <h1 class="md:text-4xl text-2xl font-bold text-center pt-8">About us</h1>
          
          <p v-if="showAboutUs" class="text-center md:text-base text-sm mt-4">Would you like to read about us? Click the button below to reveal all...</p>
          <p v-if="!showAboutUs" class="w-full mt-4 mx-auto text-sm base:text-sm aboutustext">At our core, we're a vibrant collective driven by passion and innovation. We strive to be more than just a team; we're a community committed to creating meaningful connections and crafting experiences that resonate. Our dedication to excellence fuels our endeavors as we navigate the dynamic landscape, embracing challenges and turning them into opportunities. Together, we embody a spirit of collaboration and growth, continuously shaping tomorrow's possibilities through our unwavering dedication today.</p>
          
          <button @click="showAboutUs = !showAboutUs" class="bg-[#0D194D] border-2 border-white md:scale-100 scale-75 rounded-full mt-8 px-4 py-2 font-semibold duration-500 hover:scale-110">
            {{ showAboutUs ? 'Learn More' : 'Hide Details' }}
          </button>
        </section>
        
        <section class="w-1/2 text-center">
          <h1 class="md:text-4xl  text-2xl font-bold text-center pt-8">About courses</h1>
          
          <p v-if="showCourses" class="text-center md:text-base text-sm mt-4">Find out what courses we offer, go on, click below... You won't be disappointed.</p>
          <p v-if="!showCourses" class="w-full mt-4 mx-auto text-sm base:text-sm aboutustext">We offer a wide range of courses, from HTML, CSS, and Javascript to frameworks like Vue, React, and Angular. We also offer courses on design, such as Figma, Adobe XD, and Photoshop. We also offer courses on backend technologies, such as Node, Express, and MongoDB. We also offer courses on mobile app development, such as React Native, Flutter, and Ionic. We also offer courses on desktop app development, such as Electron, React Native for Windows, and React Native for macOS. We also offer courses on game development.</p>
          
          <button @click="showCourses =! showCourses" class="bg-[#0D194D] border-2 border-white md:scale-100 scale-75 rounded-full mt-8 px-4 py-2 font-semibold duration-500 hover:scale-110">
            {{ showCourses ? 'Learn More' : 'Hide Details' }}
          </button>
        </section>
      </section>
      
      <section id="aboutus" class="pb-72 mt-10 md:mt-0">
        <h1 class="text-2xl md:text-4xl text-white font-bold text-center pt-8">Courses</h1>
        
        <div class="grid md:grid-cols-3 gap-4 md:mt-8 mt-4 p-2 max-w-3xl mx-auto">
          <div class="bg-[#ffffff20] text-white p-4 rounded-2xl">
            
            <h1 class="md:text-2xl font-bold mt-4">Web Development</h1>
            <p class="mt-4 text-sm md:text-base">We offer web development services, from HTML, CSS, and Javascript to frameworks like Vue, React, and Angular.</p>
            
            <button class="bg-[#111111] text-white px-3 py-1 rounded-full hover:bg-black duration-200">See more</button>
          </div>
          
          <div class="bg-[#ffffff20] text-white p-4 rounded-2xl">
            
            <h1 class="md:text-2xl font-bold mt-4">Mobile App Development</h1>
            <p class="mt-4 text-sm md:text-base">We offer mobile app development services, such as React Native, Flutter, and Ionic.</p>
            
            <button class="bg-[#111111] text-white px-3 py-1 rounded-full hover:bg-black duration-200">See more</button>
          </div>
          
          <div class="bg-[#ffffff20] text-white p-4 rounded-2xl">
            
            <h1 class="md:text-2xl font-bold mt-4">Desktop App Development</h1>
            <p class="mt-4 text-sm md:text-base">We offer desktop app development services, such as Electron, React Native for Windows, and React Native for macOS.</p>
            
            <button class="bg-[#111111] text-white px-3 py-1 rounded-full hover:bg-black duration-200">See more</button>
          </div>
          
          <div class="bg-[#ffffff20] text-white p-4 rounded-2xl">
            
            <h1 class="md:text-2xl font-bold mt-4">Game Development</h1>
            <p class="mt-4 text-sm md:text-base">We offer game development services, such as Unity, Unreal Engine, and Godot.</p>
            
            <button class="bg-[#111111] text-white px-3 py-1 rounded-full hover:bg-black duration-200">See more</button>
          </div>
          
          <div class="bg-[#ffffff20] text-white p-4 rounded-2xl">
            
            <h1 class="md:text-2xl font-bold mt-4">Machine Learning</h1>
            <p class="mt-4 text-sm md:text-base">We offer machine learning services, such as TensorFlow, PyTorch, and Keras.</p>
            
            <button class="bg-[#111111] text-white px-3 py-1 rounded-full hover:bg-black duration-200">See more</button>
          </div>
          
          <div class="bg-[#ffffff20] text-white p-4 rounded-2xl">
            
            <h1 class="md:text-2xl font-bold mt-4">Artificial Intelligence</h1>
            <p class="mt-4 text-sm md:text-base">We offer artificial intelligence services, such as OpenCV, Scikit-Learn, and Pandas.</p>
            
            <button class="bg-[#111111] text-white px-3 py-1 rounded-full hover:bg-black duration-200">See more</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lemon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');

:root {
  scroll-behavior: smooth;
  font-family: 'Quicksand', sans-serif;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 50px;
}

header {
  background-image: url('../assets/software.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.cursor {
  transform: translate(-50%, -50%);
  @apply absolute w-[30px] h-[30px] rounded-full border-[2px] border-white pointer-events-none z-[9999];
}

#triangle {
  animation: spinAndJump 20s infinite ease-in-out alternate both;
  transform-origin: center;
}

a, button {
  cursor: none;
}

@keyframes spinAndJump {
  0%, 100% {
    transform: rotate(0deg) translateY(0px);
  }
  25% {
    transform: rotate(90deg) translateY(-20px);
  }
  50% {
    transform: rotate(180deg) translateY(10px);
  }
  75% {
    transform: rotate(270deg) translateY(-50px);
  }
}
</style>