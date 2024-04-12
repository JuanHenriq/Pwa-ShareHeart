let map, infoWindow;

function initMap() {
  if (map) return;

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16,
  });
  infoWindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const currentposition = new google.maps.Marker({
          position: pos,
          map: map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: "orange",
            fillOpacity: 1,
            scale: 10,
            strokeWeight: 1,
          },
        });

        infoWindow.setPosition(pos);
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

  fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const marker = new google.maps.Marker({
          position: { lat: item.latitude, lng: item.longitude },
          map: map,
          title: item.nome,
        });

        marker.addListener("click", () => {
          const content = `
          <div>
          <h3>${item.nome}</h3>
          <p>Localização: ${item.endereco || "N/A"}</p>
          <p>Telefone: ${item.telefone || "N/A"}</p>
          <p>Email: ${item.email || "N/A"}</p>
          <p>Site: ${item.site || "N/A"}</p>
        </div>
          `;

          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });
      });
    })
    .catch((error) => console.error("Error loading JSON file:", error));
}

window.initMap = initMap;

window.addEventListener("pageshow", function (event) {
  initMap();
});
