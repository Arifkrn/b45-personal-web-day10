function getTestimonialData(url){
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()

        xhr.open("GET", url, true);

        xhr.onload = () =>{
            resolve(JSON.parse(xhr.response))
        };

        xhr.onerror = () =>{
            reject("Network Error");
        }
        xhr.send()
    })
}


async function allTestimonial(){

    const testimonials = await getTestimonialData("https://api.npoint.io/8964a83cf72223b6ab65")

    if(!testimonials.length){
        return (document.getElementById("testimonial").innerHTML = `<h2>Data Not Found</h2>`);
    }
    
// let testimonialHTML = ``

const testimonialHTML = testimonials.map((testimonial) =>{
    return `<div class="testimonial">
    <img src="${testimonial.image}"/>
    <p class="quote">"${testimonial.content}"</p>
    <p class="author">${testimonial.author}</p>
    <p class="filterbin">${testimonial.bintang}<i class="bi bi-star-fill"></i></p>
    </div>`
})

    document.getElementById("testimonials").innerHTML = testimonialHTML.join('')
}

async function filterTestimonial(bintang){

    const testimonials = await getTestimonialData("https://api.npoint.io/8964a83cf72223b6ab65")

    const filterTest = testimonials.filter(testimonial => {
        return testimonial.bintang == bintang
    })
    const testimonialHTML = filterTest.map((testimonial) =>{
        return `<div class="testimonial">
        <img src="${testimonial.image}"/>
        <p class="quote">"${testimonial.content}"</p>
        <p class="author">${testimonial.author}</p>
        <p class="filterbin">${testimonial.bintang}<i class="bi bi-star-fill"></i></p>
        </div>`
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML.join('')

}

allTestimonial()