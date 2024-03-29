class Map {

    static createMap(divMap) {

        if(divMap) {

            let map = L.map('map', {
                dragging: false,
                zoomControl: false,
                minZoom: 13,
            }).setView([-22.8, -47.3], 13);
    
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 13,
                riseOnHover: true,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
    
            L.marker([-22.8, -47.3]).addTo(map)
        }

    }

}

export { Map }