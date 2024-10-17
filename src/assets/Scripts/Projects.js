export const projects = [
    {
        id : 1 ,
        type: "fullstack",
        title : "graduation project",
        text : "Sohag National Museum",
        link : "https://thunder-3wara.vercel.app/",
        image : "SohagImg.png"
    },
    {
        id : 2 ,
        type: "fullstack",
        title : "Best One Clinic",
        text : "FullStack Project",
        link : "https://bestoneclinic.com/",
        image : "best.png"
    },
    {
        id : 3 ,
        type: "frontend",
        title : "E-Commerce ( Laptop Store )",
        text : "React Project",
        link : "https://ecommerce-laptop.vercel.app/",
        image : "Ecommerce.png"
    },
    {
        id : 4 ,
        type: "fullstack",
        title : "Blog Application",
        text : "Fullstack Project",
        link : "https://blog-application-pink.vercel.app/",
        image : "blog.png"
    },
    {
        id : 5,
        type: "frontend",
        title : "Solar Panel Project",
        text : "Landing Page",
        link : "https://solar-panel-project.vercel.app/",
        image : "solar.png"
    },
    {
        id : 6,
        type: "frontend",
        title : "Register Form Design",
        text : "React Application",
        link : "https://registeration-design.vercel.app/register",
        image : "register.png"
    },
    {
        id : 7,
        type: "frontend",
        title : " VivaDecor Project",
        text : "Landing Page",
        link : "https://wood-design-page-3wara.vercel.app/",
        image : "vivaDecor.png"
    },
    {
        id : 8 ,
        type: "frontend",
        title : "To Do List",
        text : "React Project",
        link : "https://todo-list-six-sigma-34.vercel.app/",
        image : "todolist.png"
    },
    {
        id : 9 ,
        type: "frontend",
        title : "FCAI Project",
        text : " Genius Competition",
        link : "https://vercel.com/mohamed-a-awaras-projects/fcai-genius/Bz39FMdvyqPyPUBMpLcu3JfzynYe",
        image : "fcai.png"
    },
    {
        id : 10 ,
        type: "frontend",
        title : "E-Commerce Project",
        text : "Native Project",
        link : "https://mohamed-a-awara.github.io/E-Commerce-JS/",
        image : "Project-ECommerce.png"
    },
    {
        id : 11 ,
        type: "frontend",
        title : "Ma3refa Team Project",
        text : "HTML & CSS",
        link : "https://mohamed-a-awara.github.io/Ma3refa-Team/",
        image : "teamproject.png"
    },
    {
        id : 12 ,
        type: "frontend",
        title : "Mega Store Projectt",
        text : "HTML & CSS & Js",
        link : "https://mohamed-a-awara.github.io/Mega-Store/",
        image : "megastore.png"
    },
    {
        id : 13 ,
        type: "frontend",
        title : "Animation Project",
        text : "HTML & CSS ",
        link : "https://mohamed-a-awara.github.io/Animation-Project/",
        image : "animation.png"
    },
    {
        id : 14 ,
        type: "frontend",
        title : "Single Page",
        text : "HTML & CSS ",
        link : "https://mohamed-a-awara.github.io/Home-Design/",
        image : "homepage.png"
    },
    {
        id : 15 ,
        type: "frontend",
        title : "EGY-AGRIFRESH Project",
        text : "HTML & CSS & JS",
        link : "https://mohamed-a-awara.github.io/Home-Design/",
        image : "green.png"
    },
    {
        id : 16 ,
        type: "frontend",
        title : "CompuMarket Landing Page",
        text : "HTML & CSS & JS",
        link : "https://mohamed-a-awara.github.io/CompuMarket/",
        image : "compuMarket.png"
    },

]


export function getImageUrl(imageName) {
    return new URL(`../Images/${imageName}`, import.meta.url).href;
}
