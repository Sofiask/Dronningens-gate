function handleHamburger () {
    const hamburgerIconEl = document.querySelector('.mobile-menu-icon');
    const overlayMenuEl = document.querySelector('.overlay-menu');
    const exitMenuEl = document.querySelector('.close');

    hamburgerIconEl.addEventListener('click', (e) => { // e=nullstiller naturliga uppförelsen av html tag - (a är en link)
        e.preventDefault();
        overlayMenuEl.classList.remove('hidden'); // tar vekk class hidden som blockerar menyn från att visas - så den visas
    });

    exitMenuEl.addEventListener('click', (e) => {
        e.preventDefault();
        overlayMenuEl.classList.add('hidden');
    });
}

handleHamburger ();


mapboxgl.accessToken = 'pk.eyJ1Ijoic29maWFza2EiLCJhIjoiY2wxYnYyZjZuMDFpbDNkczltZ3Ywd2Y0cSJ9.j8Bz11OkdDq2188Buy9dGw';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [10.2207703, 59.1315979],
        zoom: 14
    });

    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker({ color: '#367792'})
        .setLngLat([10.2207703, 59.1315979])
        .addTo(map);
