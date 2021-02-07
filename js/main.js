const class_work = document.querySelector('.work');
const class_program = document.querySelector(".img-class");

let list_class = [

    class_main = [
        {
            judul:"Math",
            deskripsi:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi praesentium quisquam accusamus. Beatae, ut."
        },
        {
            judul:"Science",
            deskripsi:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi praesentium quisquam accusamus. Beatae, ut."
        },
        {
            judul:"History",
            deskripsi:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi praesentium quisquam accusamus. Beatae, ut."
        },
        {
            judul:"English",
            deskripsi:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi praesentium quisquam accusamus. Beatae, ut."
        },
    ],

    class_programming = [
        {
            image:'logo-csharp.png',
            judul:'C#',
            deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque pariatur repellat iure ratione possimus quaerat molestiae eos sed reprehenderit?'
        },
        {
            image:'logo-java.png',
            judul:'Java',
            deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque pariatur repellat iure ratione possimus quaerat molestiae eos sed reprehenderit?'
        },
        {
            image:'logo-javascript.png',
            judul:'Javascript',
            deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque pariatur repellat iure ratione possimus quaerat molestiae eos sed reprehenderit?'
        },
        {
            image:'logo-python.png',
            judul:'Python',
            deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque pariatur repellat iure ratione possimus quaerat molestiae eos sed reprehenderit?'
        },
        {
            image:'logo-react.png',
            judul:'React',
            deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque pariatur repellat iure ratione possimus quaerat molestiae eos sed reprehenderit?'
        },
        {
            image:'logo-swift.png',
            judul:'Swift',
            deskripsi:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque pariatur repellat iure ratione possimus quaerat molestiae eos sed reprehenderit?'
        },
    ]
];

console.log(list_class);

list_class.forEach(el => {
    const [class_main, class_programming] = el;
})

GetClass(class_main,class_programming);


function GetClass(item1, item2) {
    class_program.innerHTML = '';
    class_work.innerHTML = '';

    item1.forEach(el => {
        class_work.insertAdjacentHTML("beforeend",
        `<div class="box">
            <div class="main">
                <h3>${el.judul}</h3>
                <p>${el.deskripsi}</p>
            </div>
        </div>
        `)
    })

    item2.forEach(el => {
        class_program.insertAdjacentHTML("beforeend",
        `<li class="box-class">
            <div class="card-img">
                <img src="image/class/${el.image}" alt="">
            </div>
            <div class="card-body">
                <h4>${el.judul}</h4>
                <p>${el.deskripsi}</p>
            </div>
            <button>Baca</button>
        </li>`)
    })
}


function toggleMenu(){
    let navigation = document.querySelector(".navigation");
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}


