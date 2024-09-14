const testimonials = [
    {name: "Santu",
        photoUrl:
          "https://images.unsplash.com/photo-1619024387526-4eab9b3bb305?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.", },
    {name: "Sonali",
        photoUrl:
          "https://images.unsplash.com/photo-1521620860034-0a3430d856d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
      },
    {name: "Uday",
        photoUrl:
          "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",}
    
];

const img1 = document.querySelector("img");
const text1 = document.querySelector("#first");
const name1 = document.querySelector("#name");


let flag = 0;

change();

function change(){
    const {name, photoUrl, text} = testimonials[flag];
    img1.src= photoUrl;
    text1.innerText = text;
    name1.innerText = name;
    flag++;

    if(flag === testimonials.length){
        flag = 0;
    }

    setTimeout(() => {
        change();
    }, 10000);

}
