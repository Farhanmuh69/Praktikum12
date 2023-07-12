import{_ as p}from"./logo-9fdb8f43.js";import{q as f,o as t,f as r,b as e,a,x as g,u as o,c as u,w as i,g as m,F as _,Z as h,d as n,j as c}from"./app-cfb64c66.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const b={},y={class:"hero"},v={class:"container mx-auto px-5 py-5"},k={class:"flex flex-col-reverse lg:flex-row items-center lg:py-5 lg:order-first"},w=g('<div class="lg:w-6/12 lg:ms-10 text-black"><h1 class="text-4xl font-bold leading-tight mb-3">Responsive left-aligned hero with image</h1><p class="text-lg"> Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. </p><div class="grid grid-cols-1 gap-2 md:flex md:justify-start"><button type="button" class="bg-blue-500 hover:bg-blue-400 text-black rounded-lg px-4 py-2 mt-7">Primary</button><button type="button" class="bg-gray-300 hover:bg-gray-200 text-black rounded-lg px-4 py-2 mt-7">Default</button></div></div>',1),B={class:"lg:w-6/12"},V={class:"mx-auto lg:w-[400px] lg:h-[400px]"};function j(l,s){const d=f("lottie-player");return t(),r("section",y,[e("div",v,[e("div",k,[w,e("div",B,[e("div",V,[a(d,{src:"https://assets3.lottiefiles.com/packages/lf20_xY418y0j6x.json",class:"mx-auto",background:"transparent",speed:"1",loop:"",autoplay:""})])])])])])}const $=x(b,[["render",j]]);const N=e("div",{class:"max-w-screen-xl fixed flex flex-wrap items-center justify-between ml-9 p-4"},[e("a",{href:"/"},[e("img",{src:p,class:"h-8 mr-9",alt:""})])],-1),S={class:"relative sm:flex sm:justify-end sm:items-center min-h-screen bg-dots-darker bg-center mr-11 selection:bg-red-500 selection:text-white"},R={key:0,class:"sm:fixed sm:top-0 sm:right-0 p-6 text-right"},q={key:1,class:"mr-11"},D={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(l){return(s,d)=>(t(),r(_,null,[a(o(h),{title:"Welcome"}),N,e("div",S,[l.canLogin?(t(),r("div",R,[s.$page.props.auth.user?(t(),u(o(c),{key:0,href:s.route("dashboard"),class:"font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:i(()=>[n("Dashboard")]),_:1},8,["href"])):(t(),r("div",q,[a(o(c),{href:s.route("login"),class:"bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-lg font-semibold text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:i(()=>[n("Log in")]),_:1},8,["href"]),l.canRegister?(t(),u(o(c),{key:0,href:s.route("register"),class:"ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:i(()=>[n("Register")]),_:1},8,["href"])):m("",!0)]))])):m("",!0),a($)])],64))}};export{D as default};
