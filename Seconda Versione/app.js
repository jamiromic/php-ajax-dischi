const app = new Vue({
    el: '#app',
    data: {
        albums: []
    },
    methods: {
        fetchAlbum() {
            axios.get('http://localhost/Classe70/php-ajax-dischi/Seconda%20Versione/api/apiAlbum.php')
            .then((res) => {
                const { response } = res.data
                this.albums = response 
            })
        }
        
    },
    created() {
        this.fetchAlbum()
    },















})