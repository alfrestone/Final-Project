// Initial data of the software
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
//Declaring ticket array
const tickets = [];

//Declaration of ShowTickets()
function ShowTickets() {
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré");
        return;
    }
    console.log("=== TICKETS ===")
    let i = 0;
    while (i < tickets.length) {
        let j = 0;
        while (j < trips.length) {
            if (trips[j].id == tickets[i].tripId) {
                console.log(`Ticket #${tickets[i].id}`);
                console.log(`Passager : ${tickets[i].passengerName}`);
                console.log(`Trajet : ${trips[j].departure} → ${trips[j].destination}`);
                console.log(`Place : ${tickets[i].seatNumber}`);
                console.log(`Prix : ${tickets[i].price} DH`);
                console.log(``);
                break;
            }
            j++;
        }
        i++;
    }
}

// declaring prompt sync the global range
var prompt = require('prompt-sync')();

//Declaring BuyTicket Function
function BuyTicket() {
    let hold_name = prompt("Nom du passager : ");
    let name = hold_name.trim().toLowerCase();
    let idoftrip = Number(prompt("Identifiant du trajet : "));
    let isTruetrip = false;
    let tripExists = false;
    let i = 0;
    while (i < name.length) {
        if (!(name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122 || name.charCodeAt(i) === 32)) {
            console.log("Erreur : Veuillez saisir un nom valide.");
            return;
        }
        else {
            i++;
        }
    }

    let j = 0;
    while (j < trips.length) {
        if ((trips[j].id == idoftrip)) {
            tripExists = true;
            if (trips[j].availableSeats >= 1) {
                isTruetrip = true;
                break;
            }
        }
        j++;
    }

    if (tripExists === false) {
        console.log("Trajet introuvable.");
        return;
    }

    if (isTruetrip === false) {
        console.log("Train complet.");
        return;
    }
    let newSeat = 1;
    while (true) {
        let seatTaken = false;
        let k = 0;
        while (k < tickets.length) {
            if (tickets[k].tripId == idoftrip && tickets[k].isCancelled === false && tickets[k].seatNumber == newSeat) {
                seatTaken = true;
                break;
            }
            k++;
        }
        if (seatTaken === false) {
            break;
        }
        newSeat++;
    }

    const newTicket = {
        id: tickets.length + 1,
        passengerName: hold_name,
        tripId: trips[j].id,
        seatNumber: newSeat,
        price: trips[j].price,
        isCancelled: false
    };
    tickets.push(newTicket);
    trips[j].availableSeats--;
    console.log("Ticket acheté avec succès.");
    console.log(`Ticket # ${newTicket.id}`);
    console.log(`Passager : ${newTicket.passengerName}`);
    console.log(`Trajet : ${trips[j].departure} → ${trips[j].destination}`);
    console.log(`Place : ${newTicket.seatNumber}`);
    console.log(`Prix : ${newTicket.price}`);
    console.log(``);
}

//Declaring ShowTrips Function
function ShowTrips() {
    let i = 0;
    let isVal = false;
    console.log("=== TRAJETS DISPONIBLES === ");
    while (i < trips.length) {
        if (trips[i].availableSeats >= 1) {
            console.log(`#${trips[i].id} ${trips[i].departure} → ${trips[i].destination}`);
            console.log(`Départ : ${trips[i].departureTime}`);
            console.log(`Arrivée : ${trips[i].arrivalTime}`);
            console.log(`Prix : ${trips[i].price} DH`);
            console.log(`Places disponibles : ${trips[i].availableSeats}`);
            console.log(``);
            isVal = true;
            i++;
        }
        else {
            i++;
        }
    }
    if (isVal === false) {
        console.log("Aucun trajet disponible avec des places libres !")
    }
}
//Declaring Main Menu Function of the software
function MainMenu() {
    do {
        console.log(`
================================= 
RAILWAY MANAGER 
================================= 
1. Afficher les trajets 
2. Acheter un ticket 
3. Afficher les tickets 
4. Annuler un ticket 
5. Rechercher un ticket 
6. Filtrer les trajets 
7. Trier les trajets 
0. Quitter 

            `)
        var choice = Number(prompt("Votre choix : "));
        console.log(``);
        switch (choice) {
            case 0:
                break;
            case 1:
                ShowTrips();
                break;
            case 2:
                BuyTicket();
                break;
            case 3:
                ShowTickets();
                break;
            case 4:
                CancelTicket();
                break;
            case 5:
                LookUpTicket();
                break;
            case 6:
                FilterTrips();
                break;
            case 7:
                SortTrips();
                break;
            default:
                console.log("Option indisponible, veuillez choisir un numéro dans le menu.");
                break;
        }
    } while (choice !== 0);
}

MainMenu();