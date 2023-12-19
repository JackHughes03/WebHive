<script setup>
import { onMounted, ref } from "vue";
import Swal from 'sweetalert2'

const showsearch = ref(false),
showAboutUs = ref(true),
showCourses = ref(true),
html = 'HTML',
css = 'CSS',
javascript = 'JavaScript',
vuejs = 'Vue JS',
tailwind = 'Tailwind',
design = 'Design',
basketamount = ref(0);

const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
  rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const showInfo = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'info',
    title: 'Add html, css, and javascript courses to your basket for a deal!',
    showConfirmButton: true,
    confirmButtonText: 'Thanks!',
    timerProgressBar: true,
    toast: true,
    timer: 10000,
    color: '#111111',
  })
}
const showAddBasket = (course) => {
  basketamount.value += 1;
  
  Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Added ' + course + ' course to basket!',
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  toast: true,
  color: '#111111',
  customClass: {
    popup: 'custom-toast',
  },
})

}

const handleScroll = () => {
  const triangle = document.getElementById("triangle"),
  seemorebutton = document.getElementById("seeMoreButton"),
  nav2 = document.getElementById("nav2"),
  main = document.getElementById("mainid"),
  scrollPosition = window.scrollY,
  newMarginTop = Math.max(0, 100 + scrollPosition) + "px";
  
  triangle.style.marginTop = newMarginTop;
  
  scrollPosition > 100 ? seemorebutton.style.opacity = "0" : seemorebutton.style.opacity = "1";
  scrollPosition > 100 ? nav2.style.opacity = "1" : nav2.style.opacity = "0";
  
  if (isElementInViewport(main)) {
    triangle.style.opacity = "0";
    showAlert();
  }
}

const smallNav = document.getElementById('smallNav'),
hamburger = document.getElementById('hamburger');

const hideSmallNav = () => {
  smallNav.classList.add('opacity-0, z-0');
  hamburger.classList.add('z-0');
}

const showSmallNav = () => {
  smallNav.classList.remove('opacity-0, z-0');
  hamburger.classList.remove('z-0');
}


onMounted(() => {  
  window.addEventListener('scroll', handleScroll);
  
  setTimeout(() => {
    showInfo();
  }, 10000);
});
</script>

<template>
  <div id="app">
    <img id="triangle" src="../assets/triangle.png" class="absolute md:right-32 right-4 md:top-40 top-20 duration-500 w-12 md:w-auto" alt="">
    
    <header class="w-full h-screen">      
      <nav class="text-white flex left-1/2 -translate-x-1/2 items-center fixed md:pt-8 pt-3 pb-2 border-b-[1px] w-[95%] md:w-2/3 mx-auto backdrop-blur-md">
        <a href="" class="font-[Lemon] md:text-base text-xs">WebHive</a>
        
        <ul class="hidden md:flex lg:gap-12 gap-3 items-center justify-center w-full md:text-xs text-[10px] uppercase duration-200">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div class="hidden md:flex md:gap-2 gap-1 items-center justify-center">
          <button class="md:w-7 w-5" @click="showsearch = !showsearch">
            <img src="../assets/search.png" alt="">
          </button>
          
          <textarea v-if="showsearch" class="outline-none backdrop-blur-md pl-2 duration-200 w-56 h-6 border-2 rounded-full resize-none overflow-hidden bg-transparent"></textarea>
          
          <button class="md:w-7 w-5">
            <img src="../assets/person.png" alt="">
          </button>
          <button class="md:w-6 w-5 flex">
            <img src="../assets/basket.png" alt="">
            <p class="ml-1">{{ basketamount }}</p>
          </button>
        </div>
        
        <button id="hamburger" @click="showSmallNav" class="flex md:hidden w-6 absolute right-4">
          <img src="../assets/hamburger.png" alt="">
        </button>
      </nav>
      
      <!-- <nav id="smallNav" class="opacity-0 w-1/2 duration-200 max-w-xl h-full bg-[#111111c3] z-20 top-0 flex items-center justify-center backdrop-blur-md absolute right-0 text-white">
        <button @click="hideSmallNav" class="absolute w-6 right-4 top-4">
          <img src="../assets/x.png" alt="">
        </button>
        
        <li class="list-none flex flex-col gap-20">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </li>
      </nav> -->
      
      <nav id="nav2" class="text-white flex fixed p-2 left-4 py-3 rounded-md top-4 bg-[#0D194D] backdrop-blur-md border-[1px] duration-500 hover:bg-black opacity-0">
        <ul class="flex flex-col items-center gap-4 justify-center text-xs uppercase">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <section class="font-sans text-white lg:ml-32 ml-10 lg:mt-44 absolute mt-10">
        <h1 class="md:text-7xl text-4xl font-bold">Learn to code<br> websites</h1>
        <p class="text-white w-[300px] text-sm md:text-base font-semibold md:mt-6 mt-3 opacity-80">Learn to code websites by coding HTML, CSS, and Javascript. Additionally, master your design skills and learn frameworks.</p>
      </section>
      
      <a href="#mainid" id="seeMoreButton" class="text-white rounded-full border-2 absolute left-1/2 -translate-x-1/2 bottom-10 p-6 w-4 h-4 flex items-center justify-center backdrop-blur-sm duration-500 hover:px-10 hover:py-4">↓</a>
    </header>
    
    <main id="mainid" class="bg-[#0D194D]">
      <section class="max-w-7xl md:max-w-full mx-auto text-white grid md:grid-cols-2 md:p-8 px-2 md:gap-10 place-items-center">
        <section class="text-center">
          <h1 class="md:text-4xl text-2xl font-bold text-center pt-8">About us</h1>
          
          <p v-if="showAboutUs" class="text-center md:text-lg text-sm mt-4">Would you like to read about us? Click the button below to reveal all...</p>
          <p v-if="!showAboutUs" class="w-full mt-4 mx-auto md:text-lg text-sm aboutustext">At our core, we're a vibrant collective driven by passion and innovation. We strive to be more than just a team; we're a community committed to creating meaningful connections and crafting experiences that resonate. Our dedication to excellence fuels our endeavors as we navigate the dynamic landscape, embracing challenges and turning them into opportunities. Together, we embody a spirit of collaboration and growth, continuously shaping tomorrow's possibilities through our unwavering dedication today.</p>
          
          <button @click="showAboutUs = !showAboutUs" class="bg-[#0D194D] border-2 border-white md:scale-100 scale-75 rounded-full md:mt-8 mt-2 px-4 py-2 font-semibold duration-500 md:hover:scale-110">
            {{ showAboutUs ? 'Learn More' : 'Hide Details' }}
          </button>
        </section>
        
        <section class="text-center">
          <h1 class="md:text-4xl  text-2xl font-bold text-center pt-8">About courses</h1>
          
          <p v-if="showCourses" class="text-center md:text-lg text-sm mt-4">Find out what courses we offer, go on, click below... You won't be disappointed.</p>
          <p v-if="!showCourses" class="w-full mt-4 mx-auto md:text-lg text-sm aboutustext">We offer a wide range of courses, from HTML, CSS, and Javascript to frameworks like Vue, React, and Angular. We also offer courses on design, such as Figma, Adobe XD, and Photoshop. We also offer courses on backend technologies, such as Node, Express, and MongoDB. We also offer courses on mobile app development, such as React Native, Flutter, and Ionic. We also offer courses on desktop app development, such as Electron, React Native for Windows, and React Native for macOS. We also offer courses on game development.</p>
          
          <button @click="showCourses =! showCourses" class="bg-[#0D194D] border-2 border-white md:scale-100 scale-75 rounded-full md:mt-8 mt-2 px-4 py-2 font-semibold duration-500 md:hover:scale-110">
            {{ showCourses ? 'Learn More' : 'Hide Details' }}
          </button>
        </section>
      </section>
      
      <section class="pb-72 mt-10 md:mt-0">
        <h1 class="text-2xl md:text-4xl text-white font-bold text-center pt-8">Courses</h1>
        
        <div class="grid grid-cols-2 md:flex gap-4 md:mt-8 mt-4 p-2 mx-auto flex-wrap justify-center">
          <div class="bg-white text-black p-0 rounded-md md:w-[250px]">
            <div class="w-full h-[150px] overflow-hidden rounded-t">
              <img src="https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            </div>
            
            <h1 class="md:text-lg font-bold px-4 pt-3">HTML</h1>
            <p class="mt-2 text-sm px-4">We offer web development services, from HTML, CSS, and Javascript to frameworks like Vue, React, and Angular.</p>
            
            <div class="flex flex-col items-center justify-center gap-2 p-2">
              <button @click="showAddBasket(html)" class="bg-blue-500 py-1 text-white rounded-md hover:bg-black duration-200 w-[90%]">Add to basket</button>
              <button class="bg-blue-500 text-white py-1 rounded-md hover:bg-black duration-200 w-[90%]">View more</button>
            </div>
          </div>
          
          <div class="bg-white text-black p-0 rounded-md md:w-[250px]">
            <div class="w-full h-[150px] overflow-hidden rounded-t">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" alt="">
            </div>
            
            <h1 class="md:text-lg font-bold px-4 pt-3">CSS</h1>
            <p class="mt-2 text-sm px-4">We offer mobile app development services, such as React Native, Flutter, and Ionic.</p>
            
            <div class="flex flex-col items-center justify-center gap-2 p-2">
              <button @click="showAddBasket(css)" class="bg-blue-500 py-1 text-white rounded-md hover:bg-black duration-200 w-[90%]">Add to basket</button>
              <button class="bg-blue-500 text-white py-1 rounded-md hover:bg-black duration-200 w-[90%]">View more</button>
            </div>
          </div>
          
          <div class="bg-white text-black p-0 rounded-md md:w-[250px]">
            <div class="w-full h-[150px] overflow-hidden rounded-t">
              <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            </div>
            
            <h1 class="md:text-lg font-bold px-4 pt-3">JavaScript</h1>
            <p class="mt-2 text-sm px-4">We offer desktop app development services, such as Electron, React Native for Windows, and React Native for macOS.</p>
            
            <div class="flex flex-col items-center justify-center gap-2 p-2">
              <button @click="showAddBasket(javascript)" class="bg-blue-500 py-1 text-white rounded-md hover:bg-black duration-200 w-[90%]">Add to basket</button>
              <button class="bg-blue-500 text-white py-1 rounded-md hover:bg-black duration-200 w-[90%]">View more</button>
            </div>
          </div>
          
          <div class="bg-white text-black p-0 rounded-md md:w-[250px]">
            <div class="w-full h-[150px] overflow-hidden rounded-t">
              <img src="https://images.unsplash.com/photo-1440847899694-90043f91c7f9?q=80&w=1263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            </div>
            
            <h1 class="md:text-lg font-bold px-4 pt-3">Vue JS</h1>
            <p class="mt-2 text-sm px-4">We offer game development services, such as Unity, Unreal Engine, and Godot.</p>
            
            <div class="flex flex-col items-center justify-center gap-2 p-2">
              <button @click="showAddBasket(vuejs)" class="bg-blue-500 py-1 text-white rounded-md hover:bg-black duration-200 w-[90%]">Add to basket</button>
              <button class="bg-blue-500 text-white py-1 rounded-md hover:bg-black duration-200 w-[90%]">View more</button>
            </div>
          </div>
          
          <div class="bg-white text-black p-0 rounded-md md:w-[250px]">
            <div class="w-full h-[150px] overflow-hidden rounded-t">
              <img src="https://plus.unsplash.com/premium_photo-1697644695029-3f78910dbc39?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            </div>
            
            <h1 class="md:text-lg font-bold px-4 pt-3">Tailwind</h1>
            <p class="mt-2 text-sm px-4">We offer machine learning services, such as TensorFlow, PyTorch, and Keras.</p>
            
            <div class="flex flex-col items-center justify-center gap-2 p-2">
              <button @click="showAddBasket(tailwind)" class="bg-blue-500 py-1 text-white rounded-md hover:bg-black duration-200 w-[90%]">Add to basket</button>
              <button class="bg-blue-500 text-white py-1 rounded-md hover:bg-black duration-200 w-[90%]">View more</button>
            </div>
          </div>
          
          <div class="bg-white text-black p-0 rounded-md md:w-[250px]">
            <div class="w-full h-[150px] overflow-hidden rounded-t">
              <img src="https://images.unsplash.com/photo-1696231989137-1cf321549065?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            </div>
            
            <h1 class="md:text-lg font-bold px-4 pt-3">Design</h1>
            <p class="mt-2 text-sm px-4">We offer artificial intelligence services, such as OpenCV, Scikit-Learn, and Pandas.</p>
            
            <div class="flex flex-col items-center justify-center gap-2 p-2">
              <button @click="showAddBasket(design)" class="bg-blue-500 py-1 text-white rounded-md hover:bg-black duration-200 w-[90%]">Add to basket</button>
              <button class="bg-blue-500 text-white py-1 rounded-md hover:bg-black duration-200 w-[90%]">View more</button>
            </div>
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

header {
  background-image: url('../assets/software.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#triangle {
  animation: spinAndJump 20s infinite ease-in-out alternate both;
  transform-origin: center;
}

.custom-toast {
  top: 70px;
}

/* a, button {
  cursor: none;
} */

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