const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ],
            // coding challenge
            sizes:[
                {id:1, size:'S'},
                {id:2, size:'M'},
                {id:3, size:'L'},
                {id:4, size:'XL'},
            ],
            personal_info:[
                {id:1,pi:'gcs230307'},
                {id:2,pi:'gia bao'},
                {id:3,pi:'week5'},
                {id:4,pi:'video 5'},
            ]
        }
    }
})
